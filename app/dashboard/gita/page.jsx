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














"use client";

import React, { useState, Suspense, useMemo, useCallback, useEffect } from "react";
import Link from "next/link"; // Import Link component
import { cardsData } from "./components/cardsData";
import Image from "next/image";


// Lazy-load the components
const LeftSideBar = React.lazy(() => import("../components/LeftSideBar"));
const ProblemSelector = React.lazy(() => import("./components/ProblemSelector"));
const Card = React.lazy(() => import("./components/Card"));



  // Sidebar items with icons, labels, and links
  const sidebarItems = [
    { label: "Learn", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/learn.gif", link: "/dashboard/learning" },
    { label: "Story", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/story.gif", link: "/dashboard/story" },
    { label: "Gita", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/gitaa.gif", link: "/dashboard/gita" },
  ];
  


export default function BhagavadGitaPage() {
  const [selectedPath, setSelectedPath] = useState("");
  const [language, setLanguage] = useState("en");
  const [isClient, setIsClient] = useState(false); // State to track if it's on the client side
  const [isLoading, setIsLoading] = useState(true); // State to track loading phase

  // Memoize translations to avoid unnecessary re-renders
  const translations = useMemo(() => ({
    en: "Path to Enlightenment",
    hi: "अपने समाधान की खोज करें",
  }), []);

  // Use useCallback to avoid re-creating the function on every render
  const changeLanguage = useCallback((lang) => {
    setLanguage(lang);
  }, []);

  // useEffect to check if it's running on the client side
  useEffect(() => {
    // Set isLoading to false once the content has loaded
    const timer = setTimeout(() => setIsLoading(false), 1000); // simulate loading time for the gif
    setIsClient(true);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex items-center justify-center">
        {/* Display loading GIF with specific width and height using inline styles */}
        <Image
          src="https://d8q326uv7ym5m.cloudfront.net/public/loading.gif" // Path to your loading GIF
          alt="Loading..."
          width={102}  // Set the width
          height={102} // Set the height
          objectFit="contain" // Optional: maintain aspect ratio and avoid distortion
        />     
         </div>
    );
  }
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex">
      {/* Left Sidebar - Lazy-loaded */}
      <Suspense fallback={<div>Loading Sidebar...</div>}>
        <div className="w-1/7 min-w-[200px]">
          <LeftSideBar sidebarItems={sidebarItems} />
        </div>
      </Suspense>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {/* Link to go back to the dashboard */}
        <Link
          href="/dashboard"
          className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-md text-white px-6 py-2 rounded-lg mb-8 inline-block"
        >
          Back to Dashboard
        </Link>

        {/* Centered Problem Selection */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-6">
            {translations[language]}
          </h2>

          {/* Lazy-load the Problem Selector */}
          <Suspense fallback={<div>Loading Problem Selector...</div>}>
            <ProblemSelector onSelectPath={setSelectedPath} language={language} />
          </Suspense>

          {selectedPath && (
            <p className="mt-4 text-xl font-medium">
              Selected Path: <span className="text-purple-400">{selectedPath}</span>
            </p>
          )}
        </div>

        {/* Suspense for lazy loading cards */}
        <Suspense fallback={<div>Loading...</div>}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cardsData.slice(0, 3).map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </Suspense>

        {/* Infinite Scroll / Lazy Load more cards */}
        <Suspense fallback={<div>Loading More Cards...</div>}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cardsData.slice(3, 6).map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
