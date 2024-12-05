// "use client";

// import React from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { UserButton } from '@clerk/nextjs';

// const Header = () => {
//   const router = useRouter();

//   const handleSignin = () => {
//     router.push('/sign-in');
//   };

//   const handleSignup = () => {
//     router.push('/sign-up');
//   };

//   return (
//     <header className="bg-gradient-to-r from-white to-[#f8f9fa] shadow-lg w-full">
//       <div className="w-full px-4 py-2 flex items-center justify-between transition-all duration-300">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-2 cursor-pointer">
//           <Image
//             src="/logo.png" 
//             alt="AI Image Generator Logo"
//             width={30} 
//             height={30}
//             className="rounded-full" 
//           />
//           <h1 className="text-xl font-semibold text-gray-800">SanskritAI</h1>
//         </div>

//         {/* Desktop and Mobile Navigation Menu */}
//         <nav className="flex items-center space-x-4">
//           <a
//             onClick={handleSignin}
//             className="text-white bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-l hover:from-indigo-600 hover:to-blue-500 cursor-pointer shadow-md hover:shadow-xl"
//           >
//             sign In
//           </a>
//           <a
//             onClick={handleSignup} 
//             className="text-white bg-gradient-to-r from-green-500 to-teal-600 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-l hover:from-teal-600 hover:to-green-500 cursor-pointer shadow-md hover:shadow-xl"
//           >
//             sign Up
//           </a>
//           <UserButton />
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;













"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link'; // Importing Link component from Next.js

const Header = () => {
  const router = useRouter();

  const handleSignin = () => {
    router.push('/sign-in');
  };

  const handleSignup = () => {
    router.push('/sign-up');
  };

  return (
    <header className="bg-gradient-to-r from-white to-[#f8f9fa] shadow-lg w-full">
      <div className="w-full px-4 py-2 flex items-center justify-between transition-all duration-300">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image
            src="/logo.png" 
            alt="AI Image Generator Logo"
            width={30} 
            height={30}
            className="rounded-full" 
          />
          {/* Link wrapping the text to navigate to the home page */}
          <Link href="/" passHref>
            <h1 className="text-xl font-semibold text-gray-800">संस्कृतAI</h1>
          </Link>
        </div>

        {/* Desktop and Mobile Navigation Menu */}
        <nav className="flex items-center space-x-4">
          <a
            onClick={handleSignin}
            className="text-white bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-l hover:from-indigo-600 hover:to-blue-500 cursor-pointer shadow-md hover:shadow-xl"
          >
            Log-in
          </a>
          <a
            onClick={handleSignup} 
            className="text-white bg-gradient-to-r from-green-500 to-teal-600 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-l hover:from-teal-600 hover:to-green-500 cursor-pointer shadow-md hover:shadow-xl"
          >
            Sign-up
          </a>
          <UserButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
