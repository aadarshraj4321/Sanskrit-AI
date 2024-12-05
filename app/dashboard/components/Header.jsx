// "use client";

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { UserButton } from '@clerk/nextjs';
// import { Menu, X } from 'lucide-react';

// const Header = () => {
//   const router = useRouter();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [heartCount, setHeartCount] = useState(2); // Replace with dynamic heart count
//   const [streakCount, setStreakCount] = useState(4); // Replace with dynamic streak count

//   const handleDashboard = () => {
//     router.push('/dashboard');
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="bg-gray-900 w-full fixed top-0 shadow-md z-50">
//       <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
//         {/* Logo Section */}
//         <div onClick={handleDashboard} className="flex items-center space-x-2 cursor-pointer">
//           <Image
//             src="/logo.png"
//             alt="Sanskrit AI"
//             width={30}
//             height={30}
//             className="rounded-full"
//           />
//           <h1 className="text-xl font-semibold text-white">AI-Sanskritia</h1>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
//           {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
//         </button>

//         {/* Desktop Navigation Menu */}
//         <nav className={`lg:flex ${menuOpen ? 'flex' : 'hidden'} lg:flex-row items-center space-x-8`}>
//           {/* Heart Icon with Purple Glow Effect */}
//           <div className="flex items-center space-x-1 text-white">
//             <Image
//               src={heartCount > 0 ? '/header/heart_filled.png' : '/header/heart.png'}
//               alt="Heart Icon"
//               width={30}
//               height={30}
//               className={heartCount > 0 ? 'glowing-heart' : ''}
//             />
//             <span className="text-md text-purple-200 font-semibold font-[Caveat]">{heartCount}</span>
//           </div>

//           {/* Streak Icon with Count */}
//           <div className="flex items-center space-x-1 text-white">
//             <Image
//               src={streakCount > 0 ? '/header/fire_filled.gif' : '/header/fire.gif'}
//               alt="Flame Icon"
//               width={38}
//               height={38}
//             />
//             <span className="text-md text-yellow-200 font-semibold font-[Bangers]">{streakCount}</span>
//           </div>

//           {/* User Button */}
//           <UserButton />
//         </nav>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} bg-gray-800 text-white p-4`}>
//         <nav className="space-y-4">
//           {/* Add mobile links here if needed */}
//           <a href="/profile" className="block py-2 px-4">Profile</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;












// "use client";

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { UserButton } from '@clerk/nextjs';
// import { Menu, X } from 'lucide-react';

// const Header = () => {
//   const router = useRouter();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [coinCount, setCoinCount] = useState(2); // Replace heartCount with coinCount for dynamic count
//   const [streakCount, setStreakCount] = useState(4); // Replace with dynamic streak count

//   const handleDashboard = () => {
//     router.push('/dashboard');
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="bg-gray-900 w-full fixed top-0 shadow-md z-50">
//       <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
//         {/* Logo Section */}
//         <div onClick={handleDashboard} className="flex items-center space-x-2 cursor-pointer">
//           <Image
//             src="/logo.png"
//             alt="Sanskrit AI"
//             width={30}
//             height={30}
//             className="rounded-full"
//           />
//           <h1 className="text-xl font-semibold text-white">AI-Sanskritia</h1>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
//           {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
//         </button>

//         {/* Desktop Navigation Menu */}
//         <nav className={`lg:flex ${menuOpen ? 'flex' : 'hidden'} lg:flex-row items-center space-x-8`}>
//           {/* Coin Emoji with Count */}
//           <div className="flex items-center space-x-1 text-white">
//             <span className="text-2xl">{'🪙'}</span> {/* Coin emoji */}
//             <span className="text-md text-yellow-200 font-semibold font-[Caveat]">{coinCount}</span> {/* Dynamic coin count */}
//           </div>

//           {/* Streak Icon with Count */}
//           <div className="flex items-center space-x-1 text-white">
//             <Image
//               src={streakCount > 0 ? '/header/fire_filled.gif' : '/header/fire.gif'}
//               alt="Flame Icon"
//               width={38}
//               height={38}
//             />
//             <span className="text-md text-yellow-200 font-semibold font-[Bangers]">{streakCount}</span>
//           </div>

//           {/* User Button */}
//           <UserButton />
//         </nav>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} bg-gray-800 text-white p-4`}>
//         <nav className="space-y-4">
//           {/* Add mobile links here if needed */}
//           <a href="/profile" className="block py-2 px-4">Profile</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


























// "use client";

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { UserButton } from '@clerk/nextjs';
// import { Menu, X } from 'lucide-react';

// const Header = () => {
//   const router = useRouter();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [coinCount, setCoinCount] = useState(2); // Replace heartCount with coinCount for dynamic count
//   const [streakCount, setStreakCount] = useState(4); // Replace with dynamic streak count

//   const handleDashboard = () => {
//     router.push('/dashboard');
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="bg-gray-900 w-full fixed top-0 shadow-md z-50">
//       <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
//         {/* Logo Section */}
//         <div onClick={handleDashboard} className="flex items-center space-x-2 cursor-pointer">
//           <Image
//             src="/logo.png"
//             alt="Sanskrit AI"
//             width={30}
//             height={30}
//             className="rounded-full"
//           />
//           <h1 className="text-xl font-semibold text-white">संस्कृतAI</h1>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
//           {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
//         </button>

//         {/* Desktop Navigation Menu */}
//         <nav className={`lg:flex ${menuOpen ? 'flex' : 'hidden'} lg:flex-row items-center space-x-8`}>


//           {/* Streak Icon with Count */}
//           <div className="flex items-center space-x-1 text-white">
//             <Image
//               src={streakCount > 0 ? "https://d8q326uv7ym5m.cloudfront.net/public/header/fire_filled.gif" : "https://d8q326uv7ym5m.cloudfront.net/public/header/fire.gif"}
//               alt="Flame Icon"
//               width={38}
//               height={38}
//             />
//             <span className="text-md text-yellow-200 font-semibold font-[Bangers]">{streakCount}</span>
//           </div>

//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;












// "use client";

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { UserButton } from '@clerk/nextjs';
// import { Menu } from 'lucide-react'; // Remove X import

// const Header = () => {
//   const router = useRouter();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [coinCount, setCoinCount] = useState(2); // Replace heartCount with coinCount for dynamic count
//   const [streakCount, setStreakCount] = useState(4); // Replace with dynamic streak count

//   const handleDashboard = () => {
//     router.push('/dashboard');
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleLogout = () => {
//     // Logic for logout (could be using Clerk, NextAuth, or custom logic)
//     console.log("Logging out...");
//   };

//   return (
//     <header className="bg-gray-900 w-full fixed top-0 shadow-md z-50">
//       <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
//         {/* Logo Section */}
//         <div onClick={handleDashboard} className="flex items-center space-x-2 cursor-pointer">
//           <Image
//             src="/logo.png"
//             alt="Sanskrit AI"
//             width={30}
//             height={30}
//             className="rounded-full"
//           />
//           <h1 className="text-xl font-semibold text-white">संस्कृतAI</h1>
//         </div>



//         {/* Desktop Navigation Menu */}
//         <nav className={`lg:flex ${menuOpen ? 'flex' : 'hidden'} lg:flex-row items-center space-x-8`}>
//           {/* Streak Icon with Count */}
//           <div className="flex items-center space-x-1 text-white">
//             <Image
//               src={streakCount > 0 ? "https://d8q326uv7ym5m.cloudfront.net/public/header/fire_filled.gif" : "https://d8q326uv7ym5m.cloudfront.net/public/header/fire.gif"}
//               alt="Flame Icon"
//               width={38}
//               height={38}
//             />
//             <span className="text-md text-yellow-200 font-semibold font-[Bangers]">{streakCount}</span>
//           </div>
//         </nav>

//         {/* Logout Button */}
//         <button 
//           onClick={handleLogout} 
//           className="bg-blue-600 text-white text-sm py-1 px-2 rounded-lg hover:bg-red-700 focus:outline-none"
//         >
//           Logout
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;




















// "use client";

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { Menu } from 'lucide-react'; // Remove X import
// import Link from 'next/link'; // Import Link from next/link
// import { useClerk } from '@clerk/nextjs'; // Import Clerk's useClerk hook

// const Header = () => {
//   const router = useRouter();
//   const { signOut } = useClerk(); // Use Clerk's signOut function
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [coinCount, setCoinCount] = useState(2); // Replace heartCount with coinCount for dynamic count
//   const [streakCount, setStreakCount] = useState(4); // Replace with dynamic streak count

//   const handleDashboard = () => {
//     router.push('/dashboard');
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleLogout = async () => {
//     try {
//       // Use Clerk's signOut method
//       await signOut();
//       console.log("User logged out");
//       // Redirect to login page after logout
//       router.push('/');
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   return (
//     <header className="bg-gray-900 w-full fixed top-0 shadow-md z-50">
//       <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
//         {/* Logo Section */}
//         <div onClick={handleDashboard} className="flex items-center space-x-2 cursor-pointer">
//           <Image
//             src="/logo.png"
//             alt="Sanskrit AI"
//             width={30}
//             height={30}
//             className="rounded-full"
//           />
//           <h1 className="text-xl font-semibold text-white">संस्कृतAI</h1>
//         </div>

//         {/* Desktop Navigation Menu */}
//         <nav className={`lg:flex ${menuOpen ? 'flex' : 'hidden'} lg:flex-row items-center space-x-8`}>
//           {/* Streak Icon with Count */}
//           <div className="flex items-center space-x-1 text-white">
//             <Image
//               src={streakCount > 0 ? "https://d8q326uv7ym5m.cloudfront.net/public/header/fire_filled.gif" : "https://d8q326uv7ym5m.cloudfront.net/public/header/fire.gif"}
//               alt="Flame Icon"
//               width={38}
//               height={38}
//             />
//             <span className="text-md text-yellow-200 font-semibold font-[Bangers]">{streakCount}</span>
//           </div>
//         </nav>

//         {/* Logout Button */}
//         <button
//           onClick={handleLogout} // Logout logic handled here
//           className="bg-blue-600 text-white text-sm py-1 px-2 rounded-lg hover:bg-red-700 focus:outline-none"
//         >
//           Logout
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;




















// "use client";

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { useClerk } from '@clerk/nextjs'; // Import Clerk's useClerk hook
// import Link from 'next/link'; // Import Link from next/link

// const Header = () => {
//   const router = useRouter();
//   const { signOut } = useClerk(); // Use Clerk's signOut function
//   const [streakCount, setStreakCount] = useState(4); // Replace with dynamic streak count

//   const handleDashboard = () => {
//     router.push('/dashboard');
//   };

//   const handleLogout = async () => {
//     try {
//       // Use Clerk's signOut method
//       await signOut();
//       console.log("User logged out");
//       // Redirect to login page after logout
//       router.push('/');
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   return (
//     <header className="bg-gray-900 w-full fixed top-0 shadow-md">
//       <div className="w-full px-4 h-16 flex items-center justify-between transition-all duration-300">
//         {/* Logo Section */}
//         <div onClick={handleDashboard} className="flex items-center space-x-2 cursor-pointer">
//           <Image
//             src="/logo.png"
//             alt="Sanskrit AI"
//             width={30}
//             height={30}
//             className="rounded-full"
//           />
//           <Link href="/">
//             <h1 className="text-xl font-semibold text-white">संस्कृतAI</h1>
//           </Link>
//         </div>

//         {/* Fire Icon Section (Centered on all devices) */}
//         <div className="flex items-center space-x-4">
//           <Image
//             src={streakCount > 0 ? "https://d8q326uv7ym5m.cloudfront.net/public/header/fire_filled.gif" : "https://d8q326uv7ym5m.cloudfront.net/public/header/fire.gif"}
//             alt="Flame Icon"
//             width={38}
//             height={38}
//           />
//           <span className="text-md text-yellow-200 font-semibold font-[Bangers]">{streakCount}</span>
//         </div>

//         {/* Logout Button (Visible on medium screens and up) */}
//         <div className='flex items-center space-x-4'>
//         <button
//           onClick={handleLogout}
//           className="bg-blue-600 text-white text-sm py-1 px-2 rounded-lg hover:bg-red-700 focus:outline-none hidden md:block"
//         >
//           Logout
//         </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;











"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useClerk } from '@clerk/nextjs'; // Import Clerk's useClerk hook
import Link from 'next/link'; // Import Link from next/link

const Header = () => {
  const router = useRouter();
  const { signOut } = useClerk(); // Use Clerk's signOut function
  const [streakCount, setStreakCount] = useState(4); // Replace with dynamic streak count

  const handleDashboard = () => {
    router.push('/dashboard');
  };

  const handleLogout = async () => {
    try {
      // Use Clerk's signOut method
      await signOut();
      console.log("User logged out");
      // Redirect to login page after logout
      router.push('/');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="bg-gray-900 w-full fixed top-0 shadow-md">
      <div className="w-full px-4 h-16 flex items-center justify-between transition-all duration-300">
        {/* Logo Section */}
        <div onClick={handleDashboard} className="flex items-center space-x-1 cursor-pointer">
          <Image
            src="/mainLogo.png"
            alt="Sanskrit AI"
            width={80}
            height={80}
            className="rounded-full"
          />
          <Link href="/dashboard">
            <h1 className="text-xl font-semibold text-white">संस्कृतAI</h1>
          </Link>
        </div>

        {/* Fire Icon Section (Centered on all devices) */}
        <div className="flex items-center space-x-4">
          <Image
            src={streakCount > 0 ? "https://d8q326uv7ym5m.cloudfront.net/public/header/fire_filled.gif" : "https://d8q326uv7ym5m.cloudfront.net/public/header/fire.gif"}
            alt="Flame Icon"
            width={38}
            height={38}
          />
          <span className="text-md text-yellow-200 font-semibold font-[Bangers]">{streakCount}</span>
        </div>

        {/* Logout Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLogout}
            className="bg-blue-600 text-white text-sm py-1 px-2 rounded-lg hover:bg-red-700 focus:outline-none"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
