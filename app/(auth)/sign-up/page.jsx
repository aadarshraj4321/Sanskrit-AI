// "use client";

// import Header from '@/app/components/Header';
// import { SignIn, SignUp } from '@clerk/nextjs';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';



// export default function Page() {
//     return (
//         <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-purple-100">
//             {/* Header Component */}
//             <Header />

//             {/* Main Content Section */}
//             <div className="flex flex-col md:flex-row items-center justify-center p-8 space-y-8 md:space-y-0 md:p-16">
//                 {/* Left Section - Welcome Message */}
//                 <div className="flex flex-col items-center justify-center text-center space-y-6 p-8 animate-slide-in-left md:w-1/2">
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 animate-gradient">
//                         संस्कृतAI में आपका स्वागत है
//                     </h1>
//                     <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
//                         साइन इन करें और अपनी व्यक्तिगत डैशबोर्ड तक पहुँचें, और नई सुविधाओं का अन्वेषण करें।
//                     </p>
//                 </div>

//                 {/* Right Section - Sign-Up Form */}
//                 <div className="flex items-center justify-center w-full md:w-1/2 animate-slide-in-right">
//                     <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg">
//                         <SignUp />
//                     </div>
//                 </div>
//             </div>

//             {/* Styles for Animation */}
//             <style jsx>{`
//                 .animate-slide-in-left {
//                     animation: slide-in-left 1s ease-out forwards;
//                 }
//                 .animate-slide-in-right {
//                     animation: slide-in-right 1s ease-out forwards;
//                 }
//                 .animate-gradient {
//                     background-size: 200% 200%;
//                     animation: gradient-move 5s ease infinite;
//                 }
//                 @keyframes slide-in-left {
//                     from { opacity: 0; transform: translateX(-30px); }
//                     to { opacity: 1; transform: translateX(0); }
//                 }
//                 @keyframes slide-in-right {
//                     from { opacity: 0; transform: translateX(30px); }
//                     to { opacity: 1; transform: translateX(0); }
//                 }
//                 @keyframes gradient-move {
//                     0% { background-position: 0% 50%; }
//                     100% { background-position: 100% 50%; }
//                 }
//             `}</style>
//         </div>
//     );
// }










// "use client";

// import Header from '@/app/components/Header';
// import { SignUp, useUser } from '@clerk/nextjs'; // Import useUser for checking user state
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Page() {
//     const { user, isSignedIn } = useUser(); // Get user info and signed-in status
//     const router = useRouter();

//     // Redirect user if they are already signed in
//     useEffect(() => {
//         if (isSignedIn) {
//             // Redirect to dashboard if the user is already signed in
//             router.push('/dashboard'); // Update this to your desired page
//         }
//     }, [isSignedIn, router]);

//     return (
//         <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-purple-100">
//             {/* Header Component */}
//             <Header />

//             {/* Main Content Section */}
//             <div className="flex flex-col md:flex-row items-center justify-center p-8 space-y-8 md:space-y-0 md:p-16">
//                 {/* Left Section - Welcome Message */}
//                 <div className="flex flex-col items-center justify-center text-center space-y-6 p-8 animate-slide-in-left md:w-1/2">
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 animate-gradient">
//                         संस्कृतAI में आपका स्वागत है
//                     </h1>
//                     <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
//                         साइन इन करें और अपनी व्यक्तिगत डैशबोर्ड तक पहुँचें, और नई सुविधाओं का अन्वेषण करें।
//                     </p>
//                 </div>

//                 {/* Right Section - Sign-Up Form */}
//                 <div className="flex items-center justify-center w-full md:w-1/2 animate-slide-in-right">
//                     <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg">
//                         <SignUp />
//                     </div>
//                 </div>
//             </div>

//             {/* Styles for Animation */}
//             <style jsx>{`
//                 .animate-slide-in-left {
//                     animation: slide-in-left 1s ease-out forwards;
//                 }
//                 .animate-slide-in-right {
//                     animation: slide-in-right 1s ease-out forwards;
//                 }
//                 .animate-gradient {
//                     background-size: 200% 200%;
//                     animation: gradient-move 5s ease infinite;
//                 }
//                 @keyframes slide-in-left {
//                     from { opacity: 0; transform: translateX(-30px); }
//                     to { opacity: 1; transform: translateX(0); }
//                 }
//                 @keyframes slide-in-right {
//                     from { opacity: 0; transform: translateX(30px); }
//                     to { opacity: 1; transform: translateX(0); }
//                 }
//                 @keyframes gradient-move {
//                     0% { background-position: 0% 50%; }
//                     100% { background-position: 100% 50%; }
//                 }
//             `}</style>
//         </div>
//     );
// }
















"use client";

import Header from '@/app/components/Header';
import { SignUp, useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const { user, isSignedIn } = useUser(); // Get user info and signed-in status
    const router = useRouter();
    const [signUpError, setSignUpError] = useState(null);

    // Redirect user if they are already signed in
    useEffect(() => {
        if (isSignedIn) {
            // Redirect to dashboard if the user is already signed in
            router.push('/dashboard'); // Update this to your desired page
        }
    }, [isSignedIn, router]);

    // Detect the redirect to `/sign-up/sso-callback` and handle error
    useEffect(() => {
        // Check if we're on the '/sign-up/sso-callback' page
        if (window.location.pathname === '/sign-up/sso-callback') {
            // Set custom error for existing user
            setSignUpError('You already have an account, please try Signing In.');
        }
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-purple-100">
            {/* Header Component */}
            <Header />

            {/* Main Content Section */}
            <div className="flex flex-col md:flex-row items-center justify-center p-8 space-y-8 md:space-y-0 md:p-16">
                {/* Left Section - Welcome Message */}
                <div className="flex flex-col items-center justify-center text-center space-y-6 p-8 animate-slide-in-left md:w-1/2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 animate-gradient">
                        संस्कृतAI में आपका स्वागत है
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
                        साइन इन करें और अपनी व्यक्तिगत डैशबोर्ड तक पहुँचें, और नई सुविधाओं का अन्वेषण करें।
                    </p>
                </div>

                {/* Right Section - Sign-Up Form */}
                <div className="flex items-center justify-center w-full md:w-1/2 animate-slide-in-right">
                    <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg">
                        {signUpError && (
                            <div className="mb-4 text-red-500 text-center">{signUpError}</div>
                        )}
                        <SignUp />
                    </div>
                </div>
            </div>

            {/* Styles for Animation */}
            <style jsx>{`
                .animate-slide-in-left {
                    animation: slide-in-left 1s ease-out forwards;
                }
                .animate-slide-in-right {
                    animation: slide-in-right 1s ease-out forwards;
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient-move 5s ease infinite;
                }
                @keyframes slide-in-left {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slide-in-right {
                    from { opacity: 0; transform: translateX(30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes gradient-move {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 100% 50%; }
                }
            `}</style>
        </div>
    );
}
