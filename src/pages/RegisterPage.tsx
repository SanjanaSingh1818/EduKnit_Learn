
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Eye, EyeOff, Mail, User } from 'lucide-react';
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

const registerSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signUp, resendVerificationEmail } = useAuth();
  
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      setIsSubmitting(true);
      
      await signUp(data.email, data.password, data.fullName);
      
      // Save email for verification page
      localStorage.setItem('pendingVerificationEmail', data.email);
      setRegisteredEmail(data.email);
      
      // Show success state
      setRegistrationComplete(true);
      
      toast({
        title: "Account created!",
        description: "Please check your email to verify your account.",
      });
    } catch (error: any) {
      console.error('Registration error:', error);
      toast({
        title: "Registration failed",
        description: error.message || "There was a problem creating your account.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendVerification = async () => {
    try {
      setIsSubmitting(true);
      await resendVerificationEmail(registeredEmail);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
          {registrationComplete ? (
            <div className="text-center">
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Verify Your Email</h1>
                <Mail className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We've sent a verification email to <strong>{registeredEmail}</strong>. 
                  Please check your inbox and click the link to complete your registration.
                </p>
                <div className="text-sm text-gray-500 mb-6">
                  <p>Didn't receive the email? Check your spam folder or try resending.</p>
                </div>
                <Button
                  onClick={handleResendVerification}
                  className="w-full mb-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Resend Verification Email"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/login')}
                  className="w-full"
                >
                  Return to Login Page
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome Future Star!</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Let's get you started — just enter your email and create a strong password to register. Your learning journey begins here!
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              placeholder="John Doe" 
                              {...field}
                              className="pl-10"
                              disabled={isSubmitting}
                            />
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
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
                        <FormLabel>Password</FormLabel>
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
                  
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              type={showConfirmPassword ? "text" : "password"} 
                              placeholder="••••••••" 
                              {...field}
                              className="pr-10"
                              disabled={isSubmitting}
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-3 top-3"
                            >
                              {showConfirmPassword ? (
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
                    {isSubmitting ? "Creating Account..." : "Create Account"}
                  </Button>
                  
                  <div className="text-center text-sm">
                    <p className="text-gray-600 dark:text-gray-400">
                      Already have an account?{" "}
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-eduBlue-500" 
                        onClick={() => navigate('/login')}
                        type="button"
                      >
                        Log in
                      </Button>
                    </p>
                  </div>
                </form>
              </Form>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
