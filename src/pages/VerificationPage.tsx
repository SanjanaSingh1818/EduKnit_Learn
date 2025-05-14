
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, CheckCircle, Loader2, Mail } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const VerificationPage = () => {
  const [verificationState, setVerificationState] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // The URL might contain either a regular token or an error message
        const hash = location.hash;
        
        if (hash && hash.includes('error=access_denied')) {
          setVerificationState('error');
          setErrorMessage('The email verification link is invalid or has expired.');
          return;
        }
        
        // Try to get email from local storage (saved during registration)
        const storedEmail = localStorage.getItem('pendingVerificationEmail');
        if (storedEmail) {
          setEmail(storedEmail);
        }

        // Check if we have a valid session
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session) {
          setVerificationState('success');
          
          // If user is verified and logged in, redirect to dashboard
          setTimeout(() => {
            navigate('/student-dashboard');
          }, 3000);
        } else {
          // No session, but no error in URL either - generic message
          if (!hash.includes('error')) {
            setVerificationState('loading');
          }
        }
      } catch (error) {
        console.error('Verification error:', error);
        setVerificationState('error');
        setErrorMessage('An error occurred during email verification.');
      }
    };

    verifyEmail();
  }, [location, navigate]);

  const handleResendEmail = async () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to resend the verification link.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsResending(true);
      
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
      });
      
      if (error) throw error;
      
      toast({
        title: "Verification Email Sent",
        description: "Please check your inbox for the new verification link.",
      });
    } catch (error: any) {
      console.error('Resend verification error:', error);
      toast({
        title: "Failed to Send Verification Email",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsResending(false);
    }
  };
  
  const renderContent = () => {
    switch (verificationState) {
      case 'loading':
        return (
          <>
            <CardHeader>
              <CardTitle className="text-xl text-center">Verifying Your Email</CardTitle>
              <CardDescription className="text-center">
                Please wait while we verify your email address...
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-8">
              <Loader2 className="h-16 w-16 animate-spin text-eduBlue-500" />
            </CardContent>
          </>
        );
        
      case 'success':
        return (
          <>
            <CardHeader>
              <CardTitle className="text-xl text-center text-green-600">Email Successfully Verified!</CardTitle>
              <CardDescription className="text-center">
                Thank you for verifying your email. You're all set to start learning!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <p className="text-center text-sm text-gray-500">
                You will be redirected to your dashboard shortly...
              </p>
              <Button 
                className="w-full"
                onClick={() => navigate('/student-dashboard')}
              >
                Go to Dashboard Now
              </Button>
            </CardFooter>
          </>
        );
        
      case 'error':
        return (
          <>
            <CardHeader>
              <CardTitle className="text-xl text-center text-red-600">Verification Failed</CardTitle>
              <CardDescription className="text-center">
                {errorMessage || "We couldn't verify your email. The link may have expired or is invalid."}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center py-8 gap-6">
              <AlertCircle className="h-16 w-16 text-red-500" />
              
              <div className="w-full">
                <p className="text-center mb-4">Enter your email to resend the verification link:</p>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border rounded-md mb-4"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button 
                className="w-full flex items-center gap-2"
                onClick={handleResendEmail}
                disabled={isResending}
              >
                {isResending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
                {isResending ? "Sending..." : "Resend Verification Email"}
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/login')}
              >
                Return to Login
              </Button>
            </CardFooter>
          </>
        );
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <Card className="w-full max-w-md">
          {renderContent()}
        </Card>
      </div>
    </Layout>
  );
};

export default VerificationPage;
