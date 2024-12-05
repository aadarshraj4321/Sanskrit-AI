"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SSOCallbackSignInPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check if this page was reached due to a user attempting to sign in without being signed up
    const queryParams = new URLSearchParams(window.location.search);
    const error = queryParams.get('error');
    
    // If an error is passed (for instance, user not found), show a custom message
    if (error === "not_found") {
      setErrorMessage("We couldn't find your account. Please sign up to get started.");
    } else {
      // Handle other potential errors or unknown cases
      setErrorMessage("We couldn't find your account. Please sign up to get started.");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-6 sm:px-8 md:px-10 lg:px-12">
      <div className="bg-white shadow-lg rounded-lg p-8 sm:p-10 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl w-full space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800">
          Sign In Failed
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-600 mb-6">
          {errorMessage}
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => router.push("/sign-up")}
            className="bg-green-600 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-md hover:bg-green-700 transition-all transform hover:scale-105 focus:outline-none"
          >
            Go to Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
