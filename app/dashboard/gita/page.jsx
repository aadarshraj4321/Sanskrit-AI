// "use client";

// import React, { useState, Suspense } from "react";
// import ProblemSelector from "./components/ProblemSelector";
// import Card from "./components/Card";
// import { cardsData } from "./components/cardsData";
// import LeftSideBar from "../components/LeftSideBar";

// const sidebarItems = [
//   { label: "Learn", icon: "/dashboard_landing/learn.png", link: "/dashboard/learning" },
//   { label: "Story", icon: "/dashboard_landing/story.png", link: "/story" },
//   { label: "Gita", icon: "/dashboard_landing/gita.png", link: "/dashboard/gita" }
// ];

// export default function BhagavadGitaPage() {
//   const [selectedPath, setSelectedPath] = useState("");
//   const [language, setLanguage] = useState("en");

//   const translations = {
//     en: "Discover Your Solution",
//     hi: "अपने समाधान की खोज करें", // Translated text
//   };

//   const changeLanguage = (lang) => {
//     setLanguage(lang);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex">
//       {/* Left Sidebar */}
//       <div className="w-1/7 min-w-[200px]">
//         <LeftSideBar sidebarItems={sidebarItems} />
//       </div>

//       {/* Main Content Area */}
//       <div className="flex-1 p-8">
//         {/* Centered Problem Selection */}
//         <div className="flex flex-col items-center justify-center text-center mb-16">
//           <h2 className="text-4xl font-extrabold mb-6"> {/* Increased text size */}
//             {translations[language]}
//           </h2>
//           <ProblemSelector onSelectPath={setSelectedPath} language={language} />
//           {selectedPath && (
//             <p className="mt-4 text-xl font-medium"> {/* Increased text size */}
//               Selected Path: <span className="text-purple-400">{selectedPath}</span>
//             </p>
//           )}
//         </div>

//         {/* Suspense for lazy loading cards */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {cardsData.map((card, index) => (
//               <Card key={index} card={card} />
//             ))}
//           </div>
//         </Suspense>
//       </div>
//     </div>
//   );
// }





// "use client";

// import React, { useState, Suspense, useMemo } from "react";
// import { cardsData } from "./components/cardsData";

// // Lazy-load the components
// const LeftSideBar = React.lazy(() => import("../components/LeftSideBar"));
// const ProblemSelector = React.lazy(() => import("./components/ProblemSelector"));
// const Card = React.lazy(() => import("./components/Card"));

// const sidebarItems = [
//   { label: "Learn", icon: "/dashboard_landing/learn.png", link: "/dashboard/learning" },
//   { label: "Story", icon: "/dashboard_landing/story.png", link: "/story" },
//   { label: "Gita", icon: "/dashboard_landing/gita.png", link: "/dashboard/gita" }
// ];

// export default function BhagavadGitaPage() {
//   const [selectedPath, setSelectedPath] = useState("");
//   const [language, setLanguage] = useState("en");

//   const translations = useMemo(() => ({
//     en: "Path to Enlightenment",
//     hi: "अपने समाधान की खोज करें",
//   }), []);

//   const changeLanguage = (lang) => {
//     setLanguage(lang);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex">
//       {/* Left Sidebar - Lazy-loaded */}
//       <Suspense fallback={<div>Loading Sidebar...</div>}>
//         <div className="w-1/7 min-w-[200px]">
//           <LeftSideBar sidebarItems={sidebarItems} />
//         </div>
//       </Suspense>

//       {/* Main Content Area */}
//       <div className="flex-1 p-8">
//         {/* Centered Problem Selection */}
//         <div className="flex flex-col items-center justify-center text-center mb-16">
//           <h2 className="text-4xl font-extrabold mb-6">
//             {translations[language]}
//           </h2>

//           {/* Lazy-load the Problem Selector */}
//           <Suspense fallback={<div>Loading Problem Selector...</div>}>
//             <ProblemSelector onSelectPath={setSelectedPath} language={language} />
//           </Suspense>

//           {selectedPath && (
//             <p className="mt-4 text-xl font-medium">
//               Selected Path: <span className="text-purple-400">{selectedPath}</span>
//             </p>
//           )}
//         </div>

//         {/* Suspense for lazy loading cards */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {cardsData.map((card, index) => (
//               <Card key={index} card={card} />
//             ))}
//           </div>
//         </Suspense>
//       </div>
//     </div>
//   );
// }
















// "use client";

// import React, { useState, Suspense, useMemo, useCallback } from "react";
// import { cardsData } from "./components/cardsData";

// // Lazy-load the components
// const LeftSideBar = React.lazy(() => import("../components/LeftSideBar"));
// const ProblemSelector = React.lazy(() => import("./components/ProblemSelector"));
// const Card = React.lazy(() => import("./components/Card"));

// const sidebarItems = [
//   { label: "Learn", icon: "/dashboard_landing/learn.png", link: "/dashboard/learning" },
//   { label: "Story", icon: "/dashboard_landing/story.png", link: "/story" },
//   { label: "Gita", icon: "/dashboard_landing/gita.png", link: "/dashboard/gita" }
// ];

// export default function BhagavadGitaPage() {
//   const [selectedPath, setSelectedPath] = useState("");
//   const [language, setLanguage] = useState("en");

//   // Memoize translations to avoid unnecessary re-renders
//   const translations = useMemo(() => ({
//     en: "Path to Enlightenment",
//     hi: "अपने समाधान की खोज करें",
//   }), []);

//   // Use useCallback to avoid re-creating the function on every render
//   const changeLanguage = useCallback((lang) => {
//     setLanguage(lang);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex">
//       {/* Left Sidebar - Lazy-loaded */}
//       <Suspense fallback={<div>Loading Sidebar...</div>}>
//         <div className="w-1/7 min-w-[200px]">
//           <LeftSideBar sidebarItems={sidebarItems} />
//         </div>
//       </Suspense>

//       {/* Main Content Area */}
//       <div className="flex-1 p-8">
//         {/* Centered Problem Selection */}
//         <div className="flex flex-col items-center justify-center text-center mb-16">
//           <h2 className="text-4xl font-extrabold mb-6">
//             {translations[language]}
//           </h2>

//           {/* Lazy-load the Problem Selector */}
//           <Suspense fallback={<div>Loading Problem Selector...</div>}>
//             <ProblemSelector onSelectPath={setSelectedPath} language={language} />
//           </Suspense>

//           {selectedPath && (
//             <p className="mt-4 text-xl font-medium">
//               Selected Path: <span className="text-purple-400">{selectedPath}</span>
//             </p>
//           )}
//         </div>

//         {/* Suspense for lazy loading cards */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {cardsData.slice(0, 3).map((card, index) => (
//               <Card key={index} card={card} />
//             ))}
//           </div>
//         </Suspense>

//         {/* Infinite Scroll / Lazy Load more cards */}
//         <Suspense fallback={<div>Loading More Cards...</div>}>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {cardsData.slice(3, 6).map((card, index) => (
//               <Card key={index} card={card} />
//             ))}
//           </div>
//         </Suspense>
//       </div>
//     </div>
//   );
// }















// "use client";

// import React, { useState, Suspense, useMemo, useCallback } from "react";
// import { useRouter } from "next/router"; // Step 1: Import the useRouter hook
// import { cardsData } from "./components/cardsData";

// // Lazy-load the components
// const LeftSideBar = React.lazy(() => import("../components/LeftSideBar"));
// const ProblemSelector = React.lazy(() => import("./components/ProblemSelector"));
// const Card = React.lazy(() => import("./components/Card"));

// const sidebarItems = [
//   { label: "Learn", icon: "/dashboard_landing/learn.png", link: "/dashboard/learning" },
//   { label: "Story", icon: "/dashboard_landing/story.png", link: "/story" },
//   { label: "Gita", icon: "/dashboard_landing/gita.png", link: "/dashboard/gita" }
// ];

// export default function BhagavadGitaPage() {
//   const [selectedPath, setSelectedPath] = useState("");
//   const [language, setLanguage] = useState("en");
//   const router = useRouter(); // Step 2: Initialize the router hook

//   // Memoize translations to avoid unnecessary re-renders
//   const translations = useMemo(() => ({
//     en: "Path to Enlightenment",
//     hi: "अपने समाधान की खोज करें",
//   }), []);

//   // Use useCallback to avoid re-creating the function on every render
//   const changeLanguage = useCallback((lang) => {
//     setLanguage(lang);
//   }, []);

//   // Step 3: Function to navigate back to the dashboard
//   const goToDashboard = () => {
//     router.push('/dashboard'); // Navigate to the dashboard
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex">
//       {/* Left Sidebar - Lazy-loaded */}
//       <Suspense fallback={<div>Loading Sidebar...</div>}>
//         <div className="w-1/7 min-w-[200px]">
//           <LeftSideBar sidebarItems={sidebarItems} />
//         </div>
//       </Suspense>

//       {/* Main Content Area */}
//       <div className="flex-1 p-8">
//         {/* Button to go back to the dashboard */}
//         <button
//           onClick={goToDashboard}
//           className="bg-blue-500 text-white px-6 py-2 rounded-lg mb-8"
//         >
//           Back to Dashboard
//         </button>

//         {/* Centered Problem Selection */}
//         <div className="flex flex-col items-center justify-center text-center mb-16">
//           <h2 className="text-4xl font-extrabold mb-6">
//             {translations[language]}
//           </h2>

//           {/* Lazy-load the Problem Selector */}
//           <Suspense fallback={<div>Loading Problem Selector...</div>}>
//             <ProblemSelector onSelectPath={setSelectedPath} language={language} />
//           </Suspense>

//           {selectedPath && (
//             <p className="mt-4 text-xl font-medium">
//               Selected Path: <span className="text-purple-400">{selectedPath}</span>
//             </p>
//           )}
//         </div>

//         {/* Suspense for lazy loading cards */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {cardsData.slice(0, 3).map((card, index) => (
//               <Card key={index} card={card} />
//             ))}
//           </div>
//         </Suspense>

//         {/* Infinite Scroll / Lazy Load more cards */}
//         <Suspense fallback={<div>Loading More Cards...</div>}>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {cardsData.slice(3, 6).map((card, index) => (
//               <Card key={index} card={card} />
//             ))}
//           </div>
//         </Suspense>
//       </div>
//     </div>
//   );
// }

















// "use client";

// import React, { useState, Suspense, useMemo, useCallback, useEffect, useState as useReactState } from "react";
// import { useRouter } from "next/router"; // Import the useRouter hook
// import { cardsData } from "./components/cardsData";

// // Lazy-load the components
// const LeftSideBar = React.lazy(() => import("../components/LeftSideBar"));
// const ProblemSelector = React.lazy(() => import("./components/ProblemSelector"));
// const Card = React.lazy(() => import("./components/Card"));

// const sidebarItems = [
//   { label: "Learn", icon: "/dashboard_landing/learn.png", link: "/dashboard/learning" },
//   { label: "Story", icon: "/dashboard_landing/story.png", link: "/story" },
//   { label: "Gita", icon: "/dashboard_landing/gita.png", link: "/dashboard/gita" }
// ];

// export default function BhagavadGitaPage() {
//   const [selectedPath, setSelectedPath] = useState("");
//   const [language, setLanguage] = useState("en");
//   const [isClient, setIsClient] = useState(false); // State to track if it's on the client side

//   // Memoize translations to avoid unnecessary re-renders
//   const translations = useMemo(() => ({
//     en: "Path to Enlightenment",
//     hi: "अपने समाधान की खोज करें",
//   }), []);

//   // Use useCallback to avoid re-creating the function on every render
//   const changeLanguage = useCallback((lang) => {
//     setLanguage(lang);
//   }, []);

//   // useEffect to check if it's running on the client side
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Proceed with router usage only after the component is mounted on the client side
//   const goToDashboard = () => {
//     if (isClient) {
//       // Router will work here only on the client side
//       const router = useRouter();
//       router.push('/dashboard');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex">
//       {/* Left Sidebar - Lazy-loaded */}
//       <Suspense fallback={<div>Loading Sidebar...</div>}>
//         <div className="w-1/7 min-w-[200px]">
//           <LeftSideBar sidebarItems={sidebarItems} />
//         </div>
//       </Suspense>

//       {/* Main Content Area */}
//       <div className="flex-1 p-8">
//         {/* Button to go back to the dashboard */}
//         <button
//           onClick={goToDashboard}
//           className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-md text-white px-6 py-2 rounded-lg mb-8"
//         >
//           Back to Dashboard
//         </button>

//         {/* Centered Problem Selection */}
//         <div className="flex flex-col items-center justify-center text-center mb-16">
//           <h2 className="text-4xl font-extrabold mb-6">
//             {translations[language]}
//           </h2>

//           {/* Lazy-load the Problem Selector */}
//           <Suspense fallback={<div>Loading Problem Selector...</div>}>
//             <ProblemSelector onSelectPath={setSelectedPath} language={language} />
//           </Suspense>

//           {selectedPath && (
//             <p className="mt-4 text-xl font-medium">
//               Selected Path: <span className="text-purple-400">{selectedPath}</span>
//             </p>
//           )}
//         </div>

//         {/* Suspense for lazy loading cards */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {cardsData.slice(0, 3).map((card, index) => (
//               <Card key={index} card={card} />
//             ))}
//           </div>
//         </Suspense>

//         {/* Infinite Scroll / Lazy Load more cards */}
//         <Suspense fallback={<div>Loading More Cards...</div>}>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {cardsData.slice(3, 6).map((card, index) => (
//               <Card key={index} card={card} />
//             ))}
//           </div>
//         </Suspense>
//       </div>
//     </div>
//   );
// }
























// "use client";

// import React, { useState, Suspense, useMemo, useCallback, useEffect } from "react";
// import Link from "next/link"; // Import Link component
// import { cardsData } from "./components/cardsData";

// // Lazy-load the components
// const LeftSideBar = React.lazy(() => import("../components/LeftSideBar"));
// const ProblemSelector = React.lazy(() => import("./components/ProblemSelector"));
// const Card = React.lazy(() => import("./components/Card"));

// const sidebarItems = [
//   { label: "Learn", icon: "/dashboard_landing/learn.png", link: "/dashboard/learning" },
//   { label: "Story", icon: "/dashboard_landing/story.png", link: "/story" },
//   { label: "Gita", icon: "/dashboard_landing/gita.png", link: "/dashboard/gita" }
// ];

// export default function BhagavadGitaPage() {
//   const [selectedPath, setSelectedPath] = useState("");
//   const [language, setLanguage] = useState("en");
//   const [isClient, setIsClient] = useState(false); // State to track if it's on the client side

//   // Memoize translations to avoid unnecessary re-renders
//   const translations = useMemo(() => ({
//     en: "Path to Enlightenment",
//     hi: "अपने समाधान की खोज करें",
//   }), []);

//   // Use useCallback to avoid re-creating the function on every render
//   const changeLanguage = useCallback((lang) => {
//     setLanguage(lang);
//   }, []);

//   // useEffect to check if it's running on the client side
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex">
//       {/* Left Sidebar - Lazy-loaded */}
//       <Suspense fallback={<div>Loading Sidebar...</div>}>
//         <div className="w-1/7 min-w-[200px]">
//           <LeftSideBar sidebarItems={sidebarItems} />
//         </div>
//       </Suspense>

//       {/* Main Content Area */}
//       <div className="flex-1 p-8">
//         {/* Link to go back to the dashboard */}
//         <Link
//           href="/dashboard"
//           className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-md text-white px-6 py-2 rounded-lg mb-8 inline-block"
//         >
//           Back to Dashboard
//         </Link>

//         {/* Centered Problem Selection */}
//         <div className="flex flex-col items-center justify-center text-center mb-16">
//           <h2 className="text-4xl font-extrabold mb-6">
//             {translations[language]}
//           </h2>

//           {/* Lazy-load the Problem Selector */}
//           <Suspense fallback={<div>Loading Problem Selector...</div>}>
//             <ProblemSelector onSelectPath={setSelectedPath} language={language} />
//           </Suspense>

//           {selectedPath && (
//             <p className="mt-4 text-xl font-medium">
//               Selected Path: <span className="text-purple-400">{selectedPath}</span>
//             </p>
//           )}
//         </div>

//         {/* Suspense for lazy loading cards */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {cardsData.slice(0, 3).map((card, index) => (
//               <Card key={index} card={card} />
//             ))}
//           </div>
//         </Suspense>

//         {/* Infinite Scroll / Lazy Load more cards */}
//         <Suspense fallback={<div>Loading More Cards...</div>}>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {cardsData.slice(3, 6).map((card, index) => (
//               <Card key={index} card={card} />
//             ))}
//           </div>
//         </Suspense>
//       </div>
//     </div>
//   );
// }














// "use client";

// import React, { useState, Suspense, useMemo, useCallback, useEffect } from "react";
// import Link from "next/link"; // Import Link component
// import { cardsData } from "./components/cardsData";
// import Image from "next/image";
// import dynamic from "next/dynamic";


// // Lazy-load the components
// const LeftSideBar = React.lazy(() => import("../components/LeftSideBar"));
// const ProblemSelector = React.lazy(() => import("./components/ProblemSelector"));
// const Card = React.lazy(() => import("./components/Card"));
// const FaArrowLeft = dynamic(() => import("react-icons/fa").then(mod => mod.FaArrowLeft));




// // Sidebar items with icons, labels, and links
// const sidebarItems = [
//   { label: "Learn", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/learn.gif", link: "/dashboard/learning" },
//   { label: "Story", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/story.gif", link: "/dashboard/story" },
//   { label: "Gita", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/gitaa.gif", link: "/dashboard/gita" },
// ];



// export default function BhagavadGitaPage() {
//   const [selectedPath, setSelectedPath] = useState("");
//   const [language, setLanguage] = useState("en");
//   const [isClient, setIsClient] = useState(false); // State to track if it's on the client side
//   const [isLoading, setIsLoading] = useState(true); // State to track loading phase

//   // Memoize translations to avoid unnecessary re-renders
//   const translations = useMemo(() => ({
//     en: "Path to Enlightenment",
//     hi: "अपने समाधान की खोज करें",
//   }), []);

//   // Use useCallback to avoid re-creating the function on every render
//   const changeLanguage = useCallback((lang) => {
//     setLanguage(lang);
//   }, []);

//   // useEffect to check if it's running on the client side
//   useEffect(() => {
//     // Set isLoading to false once the content has loaded
//     const timer = setTimeout(() => setIsLoading(false), 1000); // simulate loading time for the gif
//     setIsClient(true);

//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex items-center justify-center">
//         {/* Display loading GIF with specific width and height using inline styles */}
//         <Image
//           src="https://d8q326uv7ym5m.cloudfront.net/public/loading.gif" // Path to your loading GIF
//           alt="Loading..."
//           width={102}  // Set the width
//           height={102} // Set the height
//           objectFit="contain" // Optional: maintain aspect ratio and avoid distortion
//         />
//       </div>
//     );
//   }


//   return (
    // <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex">
    //   {/* Left Sidebar - Lazy-loaded */}
    //   <Suspense fallback={<div>Loading Sidebar...</div>}>
    //     <div className="w-1/7 min-w-[200px]">
    //       <LeftSideBar sidebarItems={sidebarItems} />
    //     </div>
    //   </Suspense>

//       {/* Main Content Area */}
//       <div className="flex-1 p-8">
//         {/* Link to go back to the dashboard */}
//         <Link href="/dashboard">
//           <button
//             className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 ml-6 mt-6 rounded-full hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg shadow-purple-500/50"
//           >
//             <FaArrowLeft className="text-lg" />
//           </button>
//         </Link>

//         {/* Centered Problem Selection */}
//         <div className="flex flex-col items-center justify-center text-center mb-16">
//           <h2 className="text-4xl font-extrabold mb-6">
//             {translations[language]}
//           </h2>

//           {/* Lazy-load the Problem Selector */}
//           <Suspense fallback={<div>Loading Problem Selector...</div>}>
//             <ProblemSelector onSelectPath={setSelectedPath} language={language} />
//           </Suspense>

//           {selectedPath && (
//             <p className="mt-4 text-xl font-medium">
//               Selected Path: <span className="text-purple-400">{selectedPath}</span>
//             </p>
//           )}
//         </div>

//         {/* Suspense for lazy loading cards */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {cardsData.slice(0, 3).map((card, index) => (
//               <Card key={index} card={card} />
//             ))}
//           </div>
//         </Suspense>

//         {/* Infinite Scroll / Lazy Load more cards */}
//         <Suspense fallback={<div>Loading More Cards...</div>}>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {cardsData.slice(3, 6).map((card, index) => (
//               <Card key={index} card={card} />
//             ))}
//           </div>
//         </Suspense>
//       </div>
//     </div>
//   );
// }























// "use client";

// import React, { useState, Suspense, useMemo, useCallback, useEffect } from "react";
// import Link from "next/link"; // Import Link component
// import { cardsData } from "./components/cardsData";
// import Image from "next/image";
// import LeftSideBar from "../components/LeftSideBar";





// // Sidebar items with icons, labels, and links
// const sidebarItems = [
//   { label: "Learn", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/learn.gif", link: "/dashboard/learning" },
//   { label: "Story", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/story.gif", link: "/dashboard/story" },
//   { label: "Gita", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/gitaa.gif", link: "/dashboard/gita" },
// ];



// export default function BhagavadGitaPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex">
//       {/* Left Sidebar - Lazy-loaded */}
//       <Suspense fallback={<div>Loading Sidebar...</div>}>
//         <div className="w-1/7 min-w-[200px]">
//           <LeftSideBar sidebarItems={sidebarItems} />
//         </div>
//       </Suspense>
//     </div>
//   );
// }









// "use client";

// import React, { Suspense, useEffect, useState } from "react";
// import Link from "next/link"; // Importing Link from Next.js
// import Image from "next/image"; // For images/icons in the sidebar
// import LeftSideBar from "../components/LeftSideBar";

// // Sidebar items with icons, labels, and links
// const sidebarItems = [
//   { label: "Learn", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/learn.gif", link: "/dashboard/learning" },
//   { label: "Story", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/story.gif", link: "/dashboard/story" },
//   { label: "Gita", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/gitaa.gif", link: "/dashboard/gita" },
// ];

// export default function BhagavadGitaPage() {
//   const [chapters, setChapters] = useState([]);

//   // Fetch the chapters data from the JSON file
//   useEffect(() => {
//     async function fetchChapters() {
//       const response = await fetch('/data/gita/chapters.json'); // Assuming the file is located in the public folder
//       const data = await response.json();
//       setChapters(data);
//     }

//     fetchChapters();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex">
//       {/* Left Sidebar - Lazy-loaded */}
//       <Suspense fallback={<div>Loading Sidebar...</div>}>
//         <div className="w-1/7 min-w-[200px]">
//           <LeftSideBar sidebarItems={sidebarItems} />
//         </div>
//       </Suspense>

//       {/* Main Content */}
//       <div className="w-full lg:w-4/5 p-8">
//         <h1 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
//           Bhagavad Gita Chapters
//         </h1>
        
//         {/* Displaying Chapters in Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {chapters.length === 0 ? (
//             <p>Loading chapters...</p>
//           ) : (
//             chapters.map((chapter) => (
//               <div key={chapter.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
//                 <div className="relative">
//                   {/* Optional: Chapter Image */}
//                   <Image 
//                     src={chapter.image_name} 
//                     alt={chapter.name} 
//                     width={400} 
//                     height={250} 
//                     className="w-full object-cover h-48"
//                   />
//                 </div>
                
//                 <div className="p-6">
//                   {/* Gradient effect applied to all text inside the card */}
//                   <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
//                     {chapter.name}
//                   </h2>
//                   <p className="text-sm mt-2 text-transparent bg-clip-text bg-white">
//                     {chapter.chapter_summary}
//                   </p>
//                   <p className="mt-4 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
//                     Verses: {chapter.verses_count}
//                   </p>
//                   <Link href={`/gita/chapter/${chapter.id}`}>
//                   </Link>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
















// "use client";

// import React, { Suspense, useEffect, useState } from "react";
// import Link from "next/link"; // Importing Link from Next.js
// import Image from "next/image"; // For images/icons in the sidebar
// import LeftSideBar from "../components/LeftSideBar";

// // Sidebar items with icons, labels, and links
// const sidebarItems = [
//   { label: "Learn", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/learn.gif", link: "/dashboard/learning" },
//   { label: "Story", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/story.gif", link: "/dashboard/story" },
//   { label: "Gita", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/gitaa.gif", link: "/dashboard/gita" },
// ];

// export default function BhagavadGitaPage() {
//   const [chapters, setChapters] = useState([]);

//   // Fetch the chapters data from the JSON file
//   useEffect(() => {
//     async function fetchChapters() {
//       const response = await fetch('/data/gita/chapters.json'); // Assuming the file is located in the public folder
//       const data = await response.json();
//       setChapters(data);
//     }

//     fetchChapters();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex">
//       {/* Left Sidebar - Lazy-loaded */}
//       <Suspense fallback={<div>Loading Sidebar...</div>}>
//         <div className="w-1/7 min-w-[200px]">
//           <LeftSideBar sidebarItems={sidebarItems} />
//         </div>
//       </Suspense>

//       {/* Main Content */}
//       <div className="w-full lg:w-4/5 p-8">
//         <h1 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
//           Bhagavad Gita Chapters
//         </h1>
        
//         {/* Displaying Chapters in Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {chapters.length === 0 ? (
//             <p>Loading chapters...</p>
//           ) : (
//             chapters.map((chapter) => (
//               <Link href={`/gita/chapter/${chapter.id}`} key={chapter.id} passHref>
//                 <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer">
//                   <div className="relative">
//                     {/* Optional: Chapter Image */}
//                     <Image 
//                       src={chapter.image_name} 
//                       alt={chapter.name} 
//                       width={400} 
//                       height={250} 
//                       className="w-full object-cover h-48"
//                     />
//                   </div>
                
//                   <div className="p-6">
//                     {/* Gradient effect applied to all text inside the card */}
//                     <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
//                       {chapter.name}
//                     </h2>
//                     <p className="text-sm mt-2 text-transparent bg-clip-text bg-white">
//                       {chapter.chapter_summary}
//                     </p>
//                     <p className="mt-4 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
//                       Verses: {chapter.verses_count}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

































// "use client";

// import React, { Suspense, useEffect, useState } from "react";
// import Link from "next/link"; // Importing Link from Next.js
// import Image from "next/image"; // For images/icons in the sidebar
// import LeftSideBar from "../components/LeftSideBar";

// // Sidebar items with icons, labels, and links
// const sidebarItems = [
//   { label: "Learn", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/learn.gif", link: "/dashboard/learning" },
//   { label: "Story", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/story.gif", link: "/dashboard/story" },
//   { label: "Gita", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/gitaa.gif", link: "/dashboard/gita" },
// ];

// export default function BhagavadGitaPage() {
//   const [chapters, setChapters] = useState([]);
//   const [language, setLanguage] = useState("en"); // Track language (English or Hindi)

//   // Fetch the chapters data from the JSON file
//   useEffect(() => {
//     async function fetchChapters() {
//       const response = await fetch('/data/gita/chapters.json'); // Assuming the file is located in the public folder
//       const data = await response.json();
//       setChapters(data);
//     }

//     fetchChapters();
//   }, []);

//   // Function to handle language change
//   const handleLanguageChange = (lang) => {
//     setLanguage(lang);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex">
//       {/* Left Sidebar - Lazy-loaded */}
//       <Suspense fallback={<div>Loading Sidebar...</div>}>
//         <div className="w-1/7 min-w-[200px]">
//           <LeftSideBar sidebarItems={sidebarItems} />
//         </div>
//       </Suspense>

//       {/* Main Content */}
//       <div className="w-full lg:w-4/5 p-8">
//         {/* Language Switcher */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-white">
//             Bhagavad Gita Chapters
//           </h1>
//           <div className="space-x-4">
//             <button
//               onClick={() => handleLanguageChange("en")}
//               className={`px-4 py-2 rounded-lg ${language === "en" ? "bg-indigo-600" : "bg-gray-700"}`}
//             >
//               English
//             </button>
//             <button
//               onClick={() => handleLanguageChange("hi")}
//               className={`px-4 py-2 rounded-lg ${language === "hi" ? "bg-indigo-600" : "bg-gray-700"}`}
//             >
//               हिंदी
//             </button>
//           </div>
//         </div>

//         {/* Displaying Chapters in Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {chapters.length === 0 ? (
//             <p>Loading chapters...</p>
//           ) : (
//             chapters.map((chapter) => (
//               <Link href={`/gita/chapter/${chapter.id}`} key={chapter.id} passHref>
//                 <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col h-full">
//                   <div className="relative w-full h-48">
//                     {/* Darken the image on hover */}
//                     <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity"></div>
//                     <Image
//                       src={chapter.image_name}
//                       alt={chapter.name}
//                       width={400}
//                       height={250}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   <div className="p-6 flex flex-col justify-between flex-grow">
//                     {/* Gradient effect applied to all text inside the card */}
//                     <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
//                       {/* Displaying name based on language */}
//                       {language === "en" ? chapter.name_meaning : chapter.name}
//                     </h2>
//                     <p className="text-sm mt-2 text-transparent bg-clip-text bg-white">
//                       {/* Displaying chapter summary based on language */}
//                       {language === "en" ? chapter.chapter_summary : chapter.chapter_summary_hindi}
//                     </p>
//                     <p className="mt-4 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
//                       Verses: {chapter.verses_count}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


























// "use client";

// import React, { Suspense, useEffect, useState } from "react";
// import Link from "next/link"; // Importing Link from Next.js
// import Image from "next/image"; // For images/icons in the sidebar
// import LeftSideBar from "../components/LeftSideBar";

// // Sidebar items with icons, labels, and links
// const sidebarItems = [
//   { label: "Learn", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/learn.gif", link: "/dashboard/learning" },
//   { label: "Story", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/story.gif", link: "/dashboard/story" },
//   { label: "Gita", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/gitaa.gif", link: "/dashboard/gita" },
// ];

// export default function BhagavadGitaPage() {
//   const [chapters, setChapters] = useState([]);
//   const [language, setLanguage] = useState("en"); // Track language (English or Hindi)

//   // Fetch the chapters data from the JSON file
//   useEffect(() => {
//     async function fetchChapters() {
//       const response = await fetch('/data/gita/chapters.json'); // Assuming the file is located in the public folder
//       const data = await response.json();
//       setChapters(data);
//     }

//     fetchChapters();
//   }, []);

//   // Function to handle language change
//   const handleLanguageChange = (lang) => {
//     setLanguage(lang);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex flex-col md:flex-row">
//       {/* Left Sidebar - Lazy-loaded */}
//       <Suspense fallback={<div>Loading Sidebar...</div>}>
//         <div className="w-full md:w-1/6 min-w-[200px]">
//           <LeftSideBar sidebarItems={sidebarItems} />
//         </div>
//       </Suspense>

//       {/* Main Content */}
//       <div className="w-full p-6 md:p-8 lg:w-5/6">
//         {/* Language Switcher */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-white">
//             Bhagavad Gita Chapters
//           </h1>
//           <div className="space-x-4 mt-4 md:mt-0">
//             <button
//               onClick={() => handleLanguageChange("en")}
//               className={`px-4 py-2 rounded-lg ${language === "en" ? "bg-indigo-600" : "bg-gray-700"}`}
//             >
//               English
//             </button>
//             <button
//               onClick={() => handleLanguageChange("hi")}
//               className={`px-4 py-2 rounded-lg ${language === "hi" ? "bg-indigo-600" : "bg-gray-700"}`}
//             >
//               हिंदी
//             </button>
//           </div>
//         </div>

//         {/* Displaying Chapters in Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
//           {chapters.length === 0 ? (
//             <p>Loading chapters...</p>
//           ) : (
//             chapters.map((chapter) => (
//               <Link href={`gita/${chapter.id}`} key={chapter.id} passHref>
//                 <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col h-full">
//                   <div className="relative w-full h-48">
//                     {/* Darken the image on hover */}
//                     <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity"></div>
//                     <Image
//                       src={chapter.image_name}
//                       alt={chapter.name}
//                       width={400}
//                       height={250}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   <div className="p-6 flex flex-col justify-between flex-grow">
//                     {/* Gradient effect applied to all text inside the card */}
//                     <h2 className="text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-white">
//                       {/* Displaying name based on language */}
//                       {language === "en" ? chapter.name_meaning : chapter.name}
//                     </h2>
//                     <p className="text-sm sm:text-base mt-2 text-transparent bg-clip-text bg-white">
//                       {/* Displaying chapter summary based on language */}
//                       {language === "en" ? chapter.chapter_summary : chapter.chapter_summary_hindi}
//                     </p>
//                     <p className="mt-4 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
//                       Verses: {chapter.verses_count}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



























"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Globe, 
  Sun, 
  Moon, 
  ChevronRight 
} from "lucide-react";
import LeftSideBar from "../components/LeftSideBar";

// Sidebar items with icons, labels, and links
const sidebarItems = [
  { label: "Learn", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/learn.gif", link: "/dashboard/learning" },
  { label: "Story", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/story.gif", link: "/dashboard/story" },
  { label: "Gita", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/gitaa.gif", link: "/dashboard/gita" },
];

export default function BhagavadGitaPage() {
  const [chapters, setChapters] = useState([]);
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("dark");

  // Fetch the chapters data from the JSON file
  useEffect(() => {
    async function fetchChapters() {
      try {
        const response = await fetch('/data/gita/chapters.json');
        const data = await response.json();
        setChapters(data);
      } catch (error) {
        console.error("Failed to fetch chapters:", error);
      }
    }

    fetchChapters();
  }, []);

  // Function to handle language change
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div 
      className={`
        min-h-screen 
        ${theme === "dark" 
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white" 
          : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black"}
        flex flex-col md:flex-row transition-colors duration-500 ease-in-out
      `}
    >
      {/* Left Sidebar */}
      <Suspense fallback={<div>Loading Sidebar...</div>}>
        <div className="w-full md:w-1/6 min-w-[200px]">
          <LeftSideBar sidebarItems={sidebarItems} />
        </div>
      </Suspense>

      {/* Main Content */}
      <div className="flex-grow p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 space-y-4 md:space-y-0">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`
              text-3xl md:text-4xl lg:text-5xl font-extrabold 
              ${theme === "dark" 
                ? "bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400" 
                : "bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900"}
            `}
          >
            <BookOpen className="inline-block mr-4 text-indigo-500" />
            Bhagavad Gita Chapters
          </motion.h1>

          {/* Language and Theme Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 bg-gray-800/20 rounded-full p-1">
              <button
                onClick={() => handleLanguageChange("en")}
                className={`
                  px-4 py-2 rounded-full transition-all duration-300
                  ${language === "en" 
                    ? "bg-indigo-600 text-white" 
                    : "text-gray-400 hover:bg-gray-700/50"}
                `}
              >
                <Globe className="inline-block mr-2" size={20} />
                English
              </button>
              <button
                onClick={() => handleLanguageChange("hi")}
                className={`
                  px-4 py-2 rounded-full transition-all duration-300
                  ${language === "hi" 
                    ? "bg-indigo-600 text-white" 
                    : "text-gray-400 hover:bg-gray-700/50"}
                `}
              >
                <Globe className="inline-block mr-2" size={20} />
                हिंदी
              </button>
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className={`
                p-2 rounded-full transition-all duration-300
                ${theme === "dark"
                  ? "bg-yellow-500 text-black hover:bg-yellow-600"
                  : "bg-slate-800 text-white hover:bg-slate-700"}
              `}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Chapters Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {chapters.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="animate-pulse text-2xl text-gray-500">
                Loading chapters...
              </div>
            </div>
          ) : (
            chapters.map((chapter, index) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 
                }}
              >
                <Link href={`gita/${chapter.id}`} passHref>
                  <div 
                    className={`
                      group relative overflow-hidden rounded-2xl shadow-2xl 
                      transform transition-all duration-300 hover:scale-105 hover:shadow-3xl
                      ${theme === "dark" 
                        ? "bg-slate-800 border border-slate-700" 
                        : "bg-white border border-gray-200"}
                    `}
                  >
                    {/* Chapter Image */}
                    <div className="relative w-full h-48 md:h-56 overflow-hidden">
                      <Image
                        src={chapter.image_name}
                        alt={chapter.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </div>

                    {/* Chapter Details */}
                    <div 
                      className={`
                        p-5 flex flex-col justify-between h-full
                        ${theme === "dark" 
                          ? "bg-slate-800/80 backdrop-blur-sm" 
                          : "bg-white/80 backdrop-blur-sm"}
                      `}
                    >
                      <div>
                        <h2 
                          className={`
                            text-xl md:text-2xl font-bold mb-2
                            ${theme === "dark" 
                              ? "text-white" 
                              : "text-gray-900"}
                          `}
                        >
                          {language === "en" ? chapter.name_meaning : chapter.name}
                        </h2>
                        <p 
                          className={`
                            text-sm md:text-base mb-4 line-clamp-3
                            ${theme === "dark" 
                              ? "text-gray-300" 
                              : "text-gray-600"}
                          `}
                        >
                          {language === "en" ? chapter.chapter_summary : chapter.chapter_summary_hindi}
                        </p>
                      </div>

                      {/* Verses Count and CTA */}
                      <div className="flex justify-between items-center mt-4">
                        <span 
                          className={`
                            text-base font-semibold
                            ${theme === "dark" 
                              ? "text-indigo-400" 
                              : "text-indigo-600"}
                          `}
                        >
                          {chapter.verses_count} Verses
                        </span>
                        <div 
                          className={`
                            rounded-full p-2 transition-all duration-300
                            ${theme === "dark" 
                              ? "bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600/40" 
                              : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"}
                          `}
                        >
                          <ChevronRight size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
}