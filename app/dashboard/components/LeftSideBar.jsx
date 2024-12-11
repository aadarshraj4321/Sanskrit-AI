// import React from 'react';
// import Link from 'next/link';

// const LeftSideBar = ({ sidebarItems }) => {
//   return (
//     <aside className="w-1/8 bg-gray-900 p-4 flex flex-col items-start border-r border-gray-700">
//       <h2 className="text-xl font-semibold text-blue-300 mb-6 ml-1">AI-Sanskritia</h2>
//       <ul className="space-y-4 w-full text-gray-300 text-lg">
//         {sidebarItems.map((item, index) => (
//           <li
//             key={index}
//             className="flex items-center py-3 px-4 rounded-lg transition duration-150 hover:text-blue-300 text-left font-medium"
//           >
//             <img src={item.icon} alt={item.label} className="mr-4 w-8 h-8" />
//             <Link href={item.link}>
//               <span>{item.label}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default LeftSideBar;









// import React from 'react';
// import Link from 'next/link';

// const LeftSideBar = ({ sidebarItems }) => {
//   return (
//     <aside className="w-1/8 bg-gray-900 p-4 flex flex-col items-start border-r border-gray-700">
//       <h2 className="text-xl font-semibold text-blue-300 mb-6 ml-1">AI-Sanskritia</h2>
//       <ul className="space-y-4 w-full text-gray-300 text-lg">
//         {sidebarItems.map((item, index) => (
//           <li
//             key={index}
//             className="flex items-center py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform group relative border-2 border-transparent hover:bg-gray-700 hover:scale-105 group-hover:border-blue-400 cursor-pointer"
//           >
//             <Link href={item.link} className='flex items-center w-full'>
//                 <img
//                   src={item.icon}
//                   alt={item.label}
//                   className="mr-4 w-8 h-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 transform"
//                 />
//                 {/* Link Text */}
//                 <span className="relative text-lg font-medium">
//                   {item.label}
//                   {/* Active underline animation */}
//                   <span
//                     className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"
//                   ></span>
//                 </span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default LeftSideBar;














// import React from 'react';
// import Link from 'next/link';

// const LeftSideBar = ({ sidebarItems }) => {
//   return (
//     <aside className="w-1/8 bg-gray-900 p-4 flex flex-col items-start border-r border-gray-700">
//       <h2 className="text-xl font-semibold text-blue-300 mb-6 ml-1 animate__animated animate__fadeIn animate__delay-1s">
//         SanskritAI
//       </h2>
//       <ul className="space-y-4 w-full text-gray-300 text-lg">
//         {sidebarItems.map((item, index) => (
//           <li
//             key={index}
//             className="flex items-center py-3 px-4 rounded-lg transition-all duration-500 ease-in-out transform group relative border-2 border-gray-600 bg-gray-900 cursor-pointer"
//           >
//             <Link href={item.link} className="flex items-center w-full">
//               {/* Icon */}
//               <img
//                 src={item.icon}
//                 alt={item.label}
//                 className="mr-4 w-8 h-8 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 transform animate__animated animate__fadeIn animate__delay-2s"
//               />
//               {/* Link Text */}
//               <span className="relative text-lg font-medium group-hover:text-blue-300">
//                 {item.label}
//                 {/* Active underline animation */}
//                 <span
//                   className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"
//                 ></span>
//               </span>
//             </Link>
//             {/* Always-visible border */}
//             <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-lg transition-all duration-500 ease-in-out"></div>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default LeftSideBar;



















// import React, { useState } from 'react';
// import Link from 'next/link';

// const LeftSideBar = ({ sidebarItems }) => {
//   // State to manage the visibility of the sidebar on small screens
//   const [isOpen, setIsOpen] = useState(true);

//   // Toggle function to open/close the sidebar on mobile
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       {/* Toggle button for mobile */}
//       <button
//         className="lg:hidden fixed top-4 left-4 p-2 text-white bg-blue-600 rounded-md shadow-md z-50"
//         onClick={toggleSidebar}
//       >
//         {/* Hamburger icon */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="2"
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>

//       {/* Sidebar */}
//       <aside
//         className={`lg:w-64 w-full bg-gray-900 p-4 flex flex-col items-start border-r border-gray-700 transition-all duration-300 ease-in-out lg:block ${isOpen ? 'block' : 'hidden'} lg:relative min-h-screen`}
//       >
//         <h2 className="text-xl font-semibold text-blue-300 mb-6 ml-1 animate__animated animate__fadeIn animate__delay-1s">
//           SanskritAI
//         </h2>
//         <ul className="space-y-4 w-full text-gray-300 text-lg">
//           {sidebarItems.map((item, index) => (
//             <li
//               key={index}
//               className="flex items-center py-3 px-4 rounded-lg transition-all duration-500 ease-in-out transform group relative border-2 border-gray-600 bg-gray-900 cursor-pointer"
//             >
//               <Link href={item.link} className="flex items-center w-full">
//                 {/* Icon */}
//                 <img
//                   src={item.icon}
//                   alt={item.label}
//                   className="mr-4 w-8 h-8 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 transform animate__animated animate__fadeIn animate__delay-2s"
//                 />
//                 {/* Link Text */}
//                 <span className="relative text-lg font-medium group-hover:text-blue-300">
//                   {item.label}
//                   {/* Active underline animation */}
//                   <span
//                     className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"
//                   ></span>
//                 </span>
//               </Link>
//               {/* Always-visible border */}
//               <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-lg transition-all duration-500 ease-in-out"></div>
//             </li>
//           ))}
//         </ul>
//       </aside>
//     </div>
//   );
// };

// export default LeftSideBar;













// import React, { useState } from 'react';
// import Link from 'next/link';

// const LeftSideBar = ({ sidebarItems }) => {
//   const [isOpen, setIsOpen] = useState(true);

//   // Function to toggle sidebar visibility on smaller screens
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <aside
//         className={`bg-gray-900 p-4 flex flex-col items-start border-r border-gray-700 transition-all duration-300 ease-in-out min-h-screen lg:w-64 ${isOpen ? 'block' : 'hidden'} lg:block`}
//       >
//         {/* Logo */}
//         <h2 className="text-xl font-semibold text-blue-300 mb-6 ml-1">
//           AI-Sanskritia
//         </h2>

//         {/* Sidebar menu items */}
//         <ul className="space-y-4 w-full text-gray-300 text-lg">
//           {sidebarItems.map((item, index) => (
//             <li
//               key={index}
//               className="flex items-center py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform group relative border-2 border-transparent hover:bg-gray-700 hover:scale-105 group-hover:border-blue-400 cursor-pointer"
//             >
//               <Link href={item.link} className="flex items-center w-full">
//                 {/* Icon */}
//                 <img
//                   src={item.icon}
//                   alt={item.label}
//                   className="mr-4 w-8 h-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 transform"
//                 />
//                 {/* Text */}
//                 <span className="relative text-lg font-medium">
//                   {item.label}
//                   {/* Underline animation */}
//                   <span
//                     className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"
//                   ></span>
//                 </span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Toggle button for small screens */}
//       <button
//         className="lg:hidden fixed top-4 left-4 p-2 text-white bg-blue-600 rounded-md shadow-md z-50"
//         onClick={toggleSidebar}
//       >
//         {/* Hamburger Icon */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default LeftSideBar;











// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image'; // Use next/image for optimized image loading

// const LeftSideBar = ({ sidebarItems }) => {
//   const [isOpen, setIsOpen] = useState(true);

//   // Function to toggle sidebar visibility on smaller screens
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <aside
//         className={`bg-gray-900 p-4 flex flex-col items-start border-r border-gray-600 transition-all duration-300 ease-in-out min-h-screen lg:w-48 ${
//           isOpen ? 'block' : 'hidden'
//         } lg:block transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} shadow-lg lg:shadow-none`}
//       >
//         {/* Logo */}
//         <h2 className="text-xl font-semibold text-blue-300 mb-6 ml-6 mt-4 transition-all duration-300 ease-in-out">
//           SanskritAI
//         </h2>

//         {/* Sidebar menu items */}
//         <ul className="space-y-4 w-full text-gray-300 text-lg">
//           {sidebarItems.map((item, index) => (
//             <li
//               key={index}
//               className="flex items-center py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform group relative border-b border-gray-700 hover:bg-gray-700 hover:scale-105 group-hover:border-blue-400 cursor-pointer"
//             >
//               <Link href={item.link} className="flex items-center w-full">
//                 {/* Optimized Icon using next/image */}
//                 <Image
//                   src={item.icon}
//                   alt={item.label}
//                   width={36} // width and height for optimization
//                   height={36}
//                   className="mr-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 transform"
//                 />
//                 {/* Text */}
//                 <span className="relative text-lg font-medium">
//                   {item.label}
//                   {/* Underline animation */}
//                   <span
//                     className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"
//                   ></span>
//                 </span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Toggle button for small screens */}
//       <button
//         className="lg:hidden fixed top-4 left-4 p-2 text-white bg-blue-600 rounded-md shadow-md z-50"
//         onClick={toggleSidebar}
//       >
//         {/* Hamburger Icon */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default LeftSideBar;














// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image'; // Use next/image for optimized image loading

// const LeftSideBar = ({ sidebarItems }) => {
//   const [isOpen, setIsOpen] = useState(true);

//   // Function to toggle sidebar visibility on smaller screens
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <aside
//         className={`bg-gray-900 p-4 mt-4 flex flex-col items-start border-r border-gray-600 transition-all duration-300 ease-in-out min-h-screen lg:w-48 ${
//           isOpen ? 'block' : 'hidden'
//         } lg:block transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} shadow-lg lg:shadow-none`}
//       >


//         {/* Sidebar menu items */}
//         <ul className="space-y-4 w-full text-gray-300 text-lg">
//           {sidebarItems.map((item, index) => (
//             <li
//               key={index}
//               className="flex items-center py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform group relative border-b border-gray-700 hover:bg-gray-700 hover:scale-105 group-hover:border-blue-400 cursor-pointer"
//             >
//               <Link href={item.link} className="flex items-center w-full">
//                 {/* Optimized Icon using next/image */}
//                 <Image
//                   src={item.icon}
//                   alt={item.label}
//                   width={35} // width and height for optimization
//                   height={35}
//                   className="mr-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 transform"
//                   priority // Load priority for immediate visibility
//                   unoptimized
//                 />
//                 {/* Text */}
//                 <span className="relative text-lg font-medium">
//                   {item.label}
//                   {/* Underline animation */}
//                   <span
//                     className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"
//                   ></span>
//                 </span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Toggle button for small screens */}
//       <button
//         className="lg:hidden fixed top-4 left-4 p-2 text-white bg-blue-600 rounded-md shadow-md z-50"
//         onClick={toggleSidebar}
//       >
//         {/* Hamburger Icon */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default LeftSideBar;









// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronRight, Menu, X } from 'lucide-react';

// const LeftSideBar = ({ sidebarItems }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   // Responsive sidebar logic
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 1024);
//       // Automatically close sidebar on mobile
//       if (window.innerWidth <= 1024) {
//         setIsOpen(false);
//       } else {
//         setIsOpen(true);
//       }
//     };

//     // Check initial screen size
//     checkMobile();

//     // Add resize listener
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Sidebar toggle with improved animation
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   // Sidebar animation variants
//   const sidebarVariants = {
//     hidden: { 
//       width: 0, 
//       opacity: 0,
//       transition: {
//         duration: 0.3,
//         ease: 'easeInOut'
//       }
//     },
//     visible: { 
//       width: 'auto', 
//       opacity: 1,
//       transition: {
//         duration: 0.3,
//         ease: 'easeInOut'
//       }
//     }
//   };

//   // Sidebar item animation variants
//   const itemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { 
//       opacity: 1, 
//       x: 0,
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   return (
//     <div className="relative">
//       {/* Toggle Button - More Responsive and Animated */}
//       <motion.button
//         className={`
//           fixed top-4 z-50 p-2 
//           ${isMobile ? 'left-4' : 'left-[270px]'} 
//           bg-blue-600/80 hover:bg-blue-700 
//           text-white rounded-full 
//           shadow-xl backdrop-blur-sm
//         `}
//         onClick={toggleSidebar}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//       </motion.button>

//       {/* Sidebar with Advanced Animation */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.aside
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             variants={sidebarVariants}
//             className={`
//               fixed top-0 left-0 z-40 
//               bg-gradient-to-b from-gray-900 to-gray-800 
//               h-screen 
//               ${isMobile ? 'w-64' : 'w-72'} 
//               shadow-2xl 
//               border-r border-gray-700/50
//               overflow-y-auto
//               py-8 px-4
//             `}
//           >
//             {/* Logo or Brand Section */}
//             <div className="flex items-center justify-between mb-8 px-4">
//               <h2 className="text-2xl font-bold text-white">Dashboard</h2>
//               {isMobile && (
//                 <motion.button 
//                   onClick={toggleSidebar}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <X className="text-white w-6 h-6" />
//                 </motion.button>
//               )}
//             </div>

//             {/* Sidebar Menu Items */}
//             <motion.ul 
//               className="space-y-2"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: { opacity: 0 },
//                 visible: { 
//                   opacity: 1,
//                   transition: {
//                     delayChildren: 0.2,
//                     staggerChildren: 0.1
//                   }
//                 }
//               }}
//             >
//               {sidebarItems.map((item, index) => (
//                 <motion.li
//                   key={index}
//                   variants={itemVariants}
//                   whileHover={{ 
//                     scale: 1.05, 
//                     transition: { duration: 0.2 } 
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   className="group"
//                 >
//                   <Link 
//                     href={item.link} 
//                     className="
//                       flex items-center 
//                       px-4 py-3 
//                       rounded-lg 
//                       hover:bg-gray-700/50 
//                       transition-all 
//                       text-gray-300 
//                       hover:text-white
//                     "
//                   >
//                     <Image
//                       src={item.icon}
//                       alt={item.label}
//                       width={30}
//                       height={30}
//                       className="mr-4 group-hover:rotate-12 transition-transform"
//                     />
//                     <span className="flex-grow">{item.label}</span>
//                     <ChevronRight 
//                       className="
//                         text-gray-500 
//                         opacity-0 
//                         group-hover:opacity-100 
//                         transition-all 
//                         ml-auto
//                       " 
//                       size={20} 
//                     />
//                   </Link>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </motion.aside>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default LeftSideBar;


















import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const LeftSideBar = ({ sidebarItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and set mobile state
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Tailwind's lg breakpoint
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Sidebar animation variants
  const sidebarVariants = {
    hidden: { 
      x: '-100%', 
      transition: { 
        type: 'tween',
        duration: 0.3 
      }
    },
    visible: { 
      x: 0, 
      transition: { 
        type: 'tween',
        duration: 0.3 
      }
    }
  };

  return (
    <>
      {/* Sidebar for Desktop */}
      <motion.aside
        initial={false}
        animate={!isMobile || isOpen ? 'visible' : 'hidden'}
        variants={sidebarVariants}
        className={`
          fixed lg:static top-0 left-0 z-40 
          bg-gray-900 p-4 mt-4 
          flex flex-col items-start 
          border-r border-gray-600 
          min-h-screen w-64 lg:w-48 
          shadow-xl lg:shadow-none
          overflow-y-auto
        `}
      >
        {/* Sidebar menu items */}
        <ul className="space-y-4 w-full text-gray-300 text-lg">
          {sidebarItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link 
                href={item.link} 
                className="
                  flex items-center py-3 px-4 
                  rounded-lg transition-all 
                  duration-300 ease-in-out 
                  hover:bg-gray-700 
                  hover:scale-105 
                  cursor-pointer
                "
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={35}
                  height={35}
                  className="
                    mr-4 transition-transform 
                    duration-300 
                    group-hover:scale-125 
                    group-hover:rotate-12
                  "
                  priority
                  unoptimized
                />
                <span className="relative text-lg font-medium">
                  {item.label}
                  <span 
                    className="
                      absolute bottom-0 left-0 
                      w-full h-0.5 bg-blue-300 
                      transform scale-x-0 
                      group-hover:scale-x-100 
                      transition-all duration-300 
                      ease-in-out
                    "
                  ></span>
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.aside>

      {/* Mobile Toggle Button */}
      <AnimatePresence>
        {isMobile && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="
              fixed top-4 left-4 p-2 
              text-white bg-blue-600 
              rounded-md shadow-md 
              z-50 lg:hidden
            "
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Overlay for mobile sidebar */}
      {isMobile && isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 bg-black 
            z-30 lg:hidden
          "
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default LeftSideBar;


