"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { userPool } from '../../../cognito';
import CloseButton from '@/components/CloseButton';

const LoginPage = () => {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    const authenticationDetails = new AuthenticationDetails({
      Username: emailOrPhone,
      Password: password,
    });

    const user = new CognitoUser({
      Username: emailOrPhone,
      Pool: userPool,
    });

    user.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log('Login success:', result);
        router.push('/'); // Redirect to homepage after successful login
      },
      onFailure: (err) => {
        console.error('Login error:', err);
        setError(err.message || 'Login failed');
      },
    });
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center curved-bottom gradient-up items-center">
        <CloseButton />
        <div className="p-8 w-full my-10 max-w-md">
          <h2 className="text-2xl font-bold text-center">Log In</h2>
          <p className="text-center text-gray-600 mb-8">Login into your account.</p>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form className="space-y-6" onSubmit={handleSignIn}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="button"
                className="text-sm hover:text-yellow-800"
                onClick={() => router.push('/auth/reset')}
              >
                Forgot Password/Reset
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-600 text-white font-bold rounded-md shadow hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 bg-navy text-center p-8 w-full max-w">
        <p className="text-sm text-gray-600">
          Don’t have an account?
        </p>
        <button
          onClick={() => router.push('/auth/signup')}
          className="text-yellow-600 hover:text-yellow-800 font-medium text-lg"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
