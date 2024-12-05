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














import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Use next/image for optimized image loading

const LeftSideBar = ({ sidebarItems }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Function to toggle sidebar visibility on smaller screens
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`bg-gray-900 p-4 mt-2 flex flex-col items-start border-r border-gray-600 transition-all duration-300 ease-in-out min-h-screen lg:w-48 ${
          isOpen ? 'block' : 'hidden'
        } lg:block transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} shadow-lg lg:shadow-none`}
      >


        {/* Sidebar menu items */}
        <ul className="space-y-4 w-full text-gray-300 text-lg">
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform group relative border-b border-gray-700 hover:bg-gray-700 hover:scale-105 group-hover:border-blue-400 cursor-pointer"
            >
              <Link href={item.link} className="flex items-center w-full">
                {/* Optimized Icon using next/image */}
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={35} // width and height for optimization
                  height={35}
                  className="mr-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 transform"
                  priority // Load priority for immediate visibility
                  unoptimized
                />
                {/* Text */}
                <span className="relative text-lg font-medium">
                  {item.label}
                  {/* Underline animation */}
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"
                  ></span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Toggle button for small screens */}
      <button
        className="lg:hidden fixed top-4 left-4 p-2 text-white bg-blue-600 rounded-md shadow-md z-50"
        onClick={toggleSidebar}
      >
        {/* Hamburger Icon */}
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
      </button>
    </div>
  );
};

export default LeftSideBar;
