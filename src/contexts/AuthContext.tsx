
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Session, User } from '@supabase/supabase-js';
import { useToast } from '@/hooks/use-toast';

// Define the shape of the user object
interface UserData {
  id: string;
  email: string;
  name?: string;
}

// Define the shape of the AuthContext
interface AuthContextType {
  user: UserData | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name?: string) => Promise<void>;
  signOut: () => Promise<void>;
  error: string | null;
  resendVerificationEmail: (email: string) => Promise<void>;
  isEmailVerified: boolean;
  checkEmailVerification: (email: string) => Promise<boolean>;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | null>(null);

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Helper function to extract user data
const extractUserData = (user: User | null): UserData | null => {
  if (!user) return null;

  return {
    id: user.id,
    email: user.email || '',
    name: user.user_metadata?.name || user.user_metadata?.full_name || user.email?.split('@')[0]
  };
};

// Provider component to wrap the app
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if an email is verified
  const checkEmailVerification = async (email: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.getUser();
      
      if (error) {
        console.error('Error checking email verification:', error);
        return false;
      }
      
      if (data?.user && data.user.email === email) {
        const isVerified = data.user.email_confirmed_at !== null;
        setIsEmailVerified(isVerified);
        return isVerified;
      }
      
      return false;
    } catch (error) {
      console.error('Error checking verification status:', error);
      return false;
    }
  };

  // Set up authentication state listener
  useEffect(() => {
    // Initial session check
    const initAuth = async () => {
      setLoading(true);
      try {
        // First set up the auth state listener
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
          async (event, currentSession) => {
            setSession(currentSession);
            setUser(extractUserData(currentSession?.user || null));
            
            if (currentSession?.user) {
              setIsEmailVerified(currentSession.user.email_confirmed_at !== null);
            }

            if (event === 'SIGNED_IN') {
              toast({
                title: "Login Successful!",
                description: "Redirecting to your dashboard... Let's make today count!",
              });
              
              // Navigate to dashboard after login
              setTimeout(() => navigate('/student-dashboard'), 1000);
            } else if (event === 'SIGNED_OUT') {
              toast({
                title: "Logged out",
                description: "You have been logged out successfully.",
              });
              navigate('/login');
            } else if (event === 'USER_UPDATED') {
              toast({
                title: "Profile Updated",
                description: "Your profile has been updated successfully.",
              });
            } else if (event === 'PASSWORD_RECOVERY') {
              navigate('/reset-password');
            }
          }
        );

        // Then check for existing session
        const { data } = await supabase.auth.getSession();
        setSession(data.session);
        setUser(extractUserData(data.session?.user || null));
        
        if (data.session?.user) {
          setIsEmailVerified(data.session.user.email_confirmed_at !== null);
        }
        
        setLoading(false);

        return () => {
          subscription.unsubscribe();
        };
      } catch (error) {
        console.error('Auth initialization error:', error);
        setLoading(false);
      }
    };

    initAuth();
  }, [toast, navigate]);

  // Sign in function
  const signIn = async (email: string, password: string) => {
    try {
      setError(null);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.includes('Email not confirmed')) {
          setError('Email not confirmed');
          throw new Error('Email not confirmed');
        } else {
          console.error('Sign in error:', error);
          setError(error.message || 'An error occurred during sign in');
          throw error;
        }
      }

      // If we get here, login was successful
      if (data.user) {
        setIsEmailVerified(data.user.email_confirmed_at !== null);
      }
      
      return data;
    } catch (error: any) {
      console.error('Sign in error:', error);
      setError(error.message || 'An error occurred during sign in');
      throw error;
    }
  };

  // Sign up function
  const signUp = async (email: string, password: string, name?: string) => {
    try {
      setError(null);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
          emailRedirectTo: `${window.location.origin}/verification`,
        },
      });

      if (error) {
        console.error('Sign up error:', error);
        setError(error.message || 'An error occurred during sign up');
        throw error;
      }
      
      // Store email in localStorage for verification page
      localStorage.setItem('pendingVerificationEmail', email);
      
      toast({
        title: "Sign Up Successful",
        description: "Please check your email for verification instructions.",
      });
      
      navigate('/verification');
    } catch (error: any) {
      console.error('Sign up error:', error);
      setError(error.message || 'An error occurred during sign up');
      throw error;
    }
  };

  // Resend verification email
  const resendVerificationEmail = async (email: string) => {
    try {
      setError(null);
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
        options: {
          emailRedirectTo: `${window.location.origin}/verification`,
        }
      });
      
      if (error) throw error;
      
      toast({
        title: "Verification Email Sent",
        description: "Please check your inbox for the verification link.",
      });
    } catch (error: any) {
      console.error('Resend verification email error:', error);
      setError(error.message || 'Failed to resend verification email');
      toast({
        title: "Failed to Send Verification Email",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
      throw error;
    }
  };

  // Sign out function
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      setUser(null);
      setSession(null);
    } catch (error: any) {
      console.error('Sign out error:', error);
      setError(error.message || 'An error occurred during sign out');
      throw error;
    }
  };

  // Provide the auth context to child components
  return (
    <AuthContext.Provider value={{ 
      user, 
      session, 
      loading, 
      signIn, 
      signUp, 
      signOut, 
      error,
      resendVerificationEmail,
      isEmailVerified,
      checkEmailVerification
    }}>
      {children}
    </AuthContext.Provider>
  );
};
