// "use client";

// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// export default function SSOCallbackPage() {
//   const router = useRouter();
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     // Check if this page was reached due to an existing user attempting to sign up
//     const queryParams = new URLSearchParams(window.location.search);
//     const error = queryParams.get('error');
    
//     // If an error is passed (which should happen for existing users), show a custom message
//     if (error === "already_exists") {
//       setErrorMessage("You already have an account, please try Signing In.");
//     } else {
//       // Handle other potential errors or unknown cases
//       setErrorMessage("An unexpected error occurred. Please try again later.");
//     }
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-purple-100">
//       <div className="flex flex-col items-center justify-center text-center p-8">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
//           Account Exists
//         </h1>
//         <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
//           {errorMessage}
//         </p>

//         {/* Optionally, provide a link to Sign In */}
//         <div className="mt-6">
//           <button
//             onClick={() => router.push("/sign-in")}
//             className="bg-indigo-500 text-white py-2 px-4 rounded-lg"
//           >
//             Go to Sign In
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }










"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SSOCallbackPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check if this page was reached due to an existing user attempting to sign up
    const queryParams = new URLSearchParams(window.location.search);
    const error = queryParams.get('error');
    
    // If an error is passed (which should happen for existing users), show a custom message
    if (error === "already_exists") {
      setErrorMessage("You already have an account, please try Signing In.");
    } else {
      // Handle other potential errors or unknown cases
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-6 sm:px-8 md:px-10 lg:px-12">
      <div className="bg-white shadow-lg rounded-lg p-8 sm:p-10 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl w-full space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800">
          Account Exists
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-600 mb-6">
          {errorMessage}
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => router.push("/sign-in")}
            className="bg-green-600 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-all transform hover:scale-105 focus:outline-none"
          >
            Go to Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
