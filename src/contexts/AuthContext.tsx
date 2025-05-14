
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
  const navigate = useNavigate();
  const { toast } = useToast();

  // Set up authentication state listener
  useEffect(() => {
    // Initial session check
    const initAuth = async () => {
      setLoading(true);
      try {
        // First set up the auth state listener
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
          (event, currentSession) => {
            setSession(currentSession);
            setUser(extractUserData(currentSession?.user || null));

            if (event === 'SIGNED_IN') {
              toast({
                title: "Login Successful!",
                description: "Redirecting to your dashboard... Let's make today count!",
              });
            } else if (event === 'SIGNED_OUT') {
              toast({
                title: "Logged out",
                description: "You have been logged out successfully.",
              });
            }
          }
        );

        // Then check for existing session
        const { data } = await supabase.auth.getSession();
        setSession(data.session);
        setUser(extractUserData(data.session?.user || null));
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
  }, [toast]);

  // Sign in function
  const signIn = async (email: string, password: string) => {
    try {
      setError(null);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
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
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });

      if (error) throw error;
    } catch (error: any) {
      console.error('Sign up error:', error);
      setError(error.message || 'An error occurred during sign up');
      throw error;
    }
  };

  // Sign out function
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error: any) {
      console.error('Sign out error:', error);
      setError(error.message || 'An error occurred during sign out');
      throw error;
    }
  };

  // Provide the auth context to child components
  return (
    <AuthContext.Provider value={{ user, session, loading, signIn, signUp, signOut, error }}>
      {children}
    </AuthContext.Provider>
  );
};
