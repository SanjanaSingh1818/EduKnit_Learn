
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Eye, EyeOff, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [needsVerification, setNeedsVerification] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState('');
  const [isResendingVerification, setIsResendingVerification] = useState(false);
  const [loginAttempted, setLoginAttempted] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signIn, resendVerificationEmail, user, session } = useAuth();
  
  // Check if user is already logged in
  useEffect(() => {
    if (user && session && !loginAttempted) {
      navigate('/student-dashboard');
    }
  }, [user, session, navigate, loginAttempted]);
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsSubmitting(true);
      setLoginAttempted(true);
      await signIn(data.email, data.password);
      
      // Save email in local storage in case they need verification
      localStorage.setItem('pendingVerificationEmail', data.email);
      
    } catch (error: any) {
      console.error('Login error:', error);
      
      // Check if the error is about email not being confirmed
      if (error.message && (error.message === 'Email not confirmed' || error.message.includes('Email not confirmed'))) {
        setNeedsVerification(true);
        setVerificationEmail(data.email);
        toast({
          title: "Email Not Verified",
          description: "Please verify your email before logging in.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Login failed",
          description: error.message || "Please check your credentials and try again.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendVerification = async () => {
    try {
      setIsResendingVerification(true);
      await resendVerificationEmail(verificationEmail);
    } finally {
      setIsResendingVerification(false);
    }
  };

  return (
    <Layout>
      <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome Back, Bright Mind!</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Enter your credentials to access your student dashboard and keep learning strong. We're excited to have you again!
            </p>
          </div>

          {needsVerification ? (
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mb-6">
              <h3 className="font-medium text-amber-800 mb-2">Email Verification Required</h3>
              <p className="text-amber-700 text-sm mb-4">
                Your account requires email verification. Please check your inbox for the verification email or request a new one.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-amber-500 text-amber-700 hover:bg-amber-100"
                onClick={handleResendVerification}
                disabled={isResendingVerification}
              >
                {isResendingVerification ? "Sending..." : "Resend Verification Email"}
              </Button>
              <button 
                className="w-full text-sm text-amber-700 mt-2 underline"
                onClick={() => {
                  setNeedsVerification(false);
                  form.reset();
                }}
              >
                Try a different account
              </button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type="email" 
                            placeholder="you@example.com" 
                            {...field}
                            className="pl-10"
                            disabled={isSubmitting}
                          />
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between items-center">
                        <FormLabel>Password</FormLabel>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-sm text-eduBlue-500"
                          onClick={() => navigate('/forgot-password')}
                          type="button"
                        >
                          Forgot password?
                        </Button>
                      </div>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="••••••••" 
                            {...field}
                            className="pr-10"
                            disabled={isSubmitting}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3"
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-eduBlue-500 hover:bg-eduBlue-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Log In"}
                </Button>
                
                <div className="text-center text-sm">
                  <p className="text-gray-600 dark:text-gray-400">
                    Don't have an account?{" "}
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-eduBlue-500" 
                      onClick={() => navigate('/register')}
                      type="button"
                    >
                      Register now
                    </Button>
                  </p>
                </div>
              </form>
            </Form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
