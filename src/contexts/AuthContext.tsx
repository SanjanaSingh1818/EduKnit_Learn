
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the shape of the user object
interface User {
  id: string;
  email: string;
  name?: string;
}

// Define the shape of the AuthContext
interface AuthContextType {
  user: User | null;
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

// Provider component to wrap the app
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Simulating authentication initialization
  useEffect(() => {
    // Check for saved auth data in localStorage
    const savedUser = localStorage.getItem('eduknit_user');
    
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Error parsing saved user data:", e);
        localStorage.removeItem('eduknit_user');
      }
    }
    
    setLoading(false);
  }, []);

  // Sign in function
  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // This is a mock implementation - in a real app, we would call Supabase here
      // For now, we'll just simulate a successful login for demo purposes
      if (email && password) {
        const mockUser = {
          id: 'user-123',
          email: email,
          name: email.split('@')[0]
        };
        
        setUser(mockUser);
        localStorage.setItem('eduknit_user', JSON.stringify(mockUser));
        navigate('/student-dashboard');
      } else {
        throw new Error('Please provide both email and password');
      }
    } catch (error: any) {
      console.error('Sign in error:', error);
      setError(error.message || 'An error occurred during sign in');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign up function
  const signUp = async (email: string, password: string, name?: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Mock implementation for demo purposes
      if (email && password) {
        const mockUser = {
          id: 'user-' + Date.now(),
          email: email,
          name: name || email.split('@')[0]
        };
        
        setUser(mockUser);
        localStorage.setItem('eduknit_user', JSON.stringify(mockUser));
        navigate('/student-dashboard');
      } else {
        throw new Error('Please provide email and password');
      }
    } catch (error: any) {
      console.error('Sign up error:', error);
      setError(error.message || 'An error occurred during sign up');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign out function
  const signOut = async () => {
    try {
      setLoading(true);
      
      // Mock implementation
      localStorage.removeItem('eduknit_user');
      setUser(null);
      navigate('/login');
    } catch (error: any) {
      console.error('Sign out error:', error);
      setError(error.message || 'An error occurred during sign out');
    } finally {
      setLoading(false);
    }
  };

  // Provide the auth context to child components
  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut, error }}>
      {children}
    </AuthContext.Provider>
  );
};
