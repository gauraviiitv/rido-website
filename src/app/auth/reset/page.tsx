"use client";

import CloseButton from '@/components/CloseButton';
import { useRouter } from 'next/navigation';
import React from 'react';

const ForgotPasswordPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center curved-bottom gradient-up items-center">
        <CloseButton />
        {/* Forgot Password Box */}
        <div className="p-8 w-full my-10 max-w-md">
          <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
          <p className="text-center text-gray-600 mb-8">Enter your email or phone number to receive a password reset link.</p>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email/Phone
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-600 text-white font-bold rounded-md shadow hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 bg-navy text-center p-8 w-full max-w">
        <p className="text-sm text-gray-600">
          Remember your password?
        </p>
        <button
          className="text-yellow-600 hover:text-yellow-800 font-medium text-lg"
          onClick={() => router.push('/auth/login')}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
