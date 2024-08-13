"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { userPool } from '../../../cognito';
import CloseButton from '@/components/CloseButton';

const SignUpPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    const attributeList = [
      new CognitoUserAttribute({ Name: 'email', Value: email }),
      new CognitoUserAttribute({ Name: 'phone_number', Value: phoneNumber }),
      new CognitoUserAttribute({ Name: 'name', Value: name }),
    ];

    userPool.signUp(email, password, attributeList, [], (err, result) => {
      if (err) {
        console.error('Sign up error:', err);
        setError(err.message || 'Sign up failed');
        return;
      }
      console.log('Sign up success:', result);
      router.push('/auth/login'); // Redirect to login page after successful sign up
    });
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center curved-bottom gradient-up items-center">
        <CloseButton />
        <div className="p-8 w-full my-10 max-w-md">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <p className="text-center text-gray-600 mb-8">Create a new account.</p>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form className="space-y-6" onSubmit={handleSignUp}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-600 text-white font-bold rounded-md shadow hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 bg-navy text-center p-8 w-full max-w">
        <p className="text-sm text-gray-600">
          Already have an account?
        </p>
        <button
          onClick={() => router.push('/auth/login')}
          className="text-yellow-600 hover:text-yellow-800 font-medium text-lg"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
