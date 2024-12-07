// "use client"

// import Link from 'next/link';
// import Head from 'next/head';
// import { FaRegUser, FaPen, FaQuoteRight, FaAd, FaPencilAlt, FaArrowCircleUp, FaLink, FaExclamationCircle } from 'react-icons/fa'; // Importing icons from FontAwesome

// export default function Home() {
//   return (
//     <>
//       {/* SEO Head Section */}
//       <Head>
//         <title>Grammar Concepts in Sanskrit</title>
//         <meta name="description" content="Learn Sanskrit grammar concepts in an interactive and engaging way." />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Header Section */}
//       <header className="bg-blue-600 text-white text-4xl font-bold text-center py-6">
//         Grammar Concepts in Sanskrit
//       </header>

//       {/* Back to Lesson Button */}
//       <div className="text-center mt-4">
//         <Link href="/lesson">
//           <button className="bg-blue-500 text-white text-xl py-2 px-6 rounded-lg hover:bg-blue-700 transition-all">
//             Back to Lesson
//           </button>
//         </Link>
//       </div>

//       {/* Main Content: Cards for Grammar Concepts */}
//       <main className="flex flex-wrap justify-center gap-6 mt-12">
//         {[
//           { href: "/noun", label: "संज्ञा (Noun)", icon: <FaRegUser size={40} />, background: 'bg-gradient-to-r from-blue-400 to-blue-600', animation: 'bounce' },
//           { href: "/pronoun", label: "सर्वनाम (Pronoun)", icon: <FaQuoteRight size={40} />, background: 'bg-gradient-to-r from-green-400 to-green-600', animation: 'shake' },
//           { href: "/verb", label: "क्रिया (Verb)", icon: <FaPen size={40} />, background: 'bg-gradient-to-r from-yellow-400 to-yellow-600', animation: 'pulse' },
//           { href: "/adverb", label: "क्रिया विशेषण (Adverb)", icon: <FaAd size={40} />, background: 'bg-gradient-to-r from-red-400 to-red-600', animation: 'fadeIn' },
//           { href: "/adjective", label: "विशेषण (Adjective)", icon: <FaPencilAlt size={40} />, background: 'bg-gradient-to-r from-purple-400 to-purple-600', animation: 'zoomIn' },
//           { href: "/preposition", label: "पूर्वसर्ग (Preposition)", icon: <FaArrowCircleUp size={40} />, background: 'bg-gradient-to-r from-pink-400 to-pink-600', animation: 'slideUp' },
//           { href: "/conjunction", label: "संयोजक (Conjunction)", icon: <FaLink size={40} />, background: 'bg-gradient-to-r from-teal-400 to-teal-600', animation: 'slideRight' },
//           { href: "/interjection", label: "विस्मयादिबोधक (Interjection)", icon: <FaExclamationCircle size={40} />, background: 'bg-gradient-to-r from-indigo-400 to-indigo-600', animation: 'spin' }
//         ].map((item, index) => (
//           <Link href={item.href} key={item.href}>
//             <div className={`w-72 h-72 ${item.background} rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl relative cursor-pointer overflow-hidden ${item.animation}`}>
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-center">
//                 {/* Icon and Name will be centered vertically and horizontally */}
//                 <div className="flex flex-col items-center justify-center space-y-4">
//                   {item.icon}
//                   <span className="text-white text-2xl font-bold">{item.label}</span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </main>

//       {/* Footer Section */}
//       <footer className="bg-gray-800 text-white text-center py-4 mt-12">
//         © 2024 Grammar Concepts in Sanskrit
//       </footer>

//       {/* Global CSS for animations */}
//       <style jsx>{`
//         main {
//           animation: fadeIn 1s ease-out;
//         }

//         @keyframes fadeIn {
//           0% { opacity: 0; }
//           100% { opacity: 1; }
//         }

//         @keyframes bounce {
//           0% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0); }
//         }

//         @keyframes shake {
//           0% { transform: translateX(0); }
//           25% { transform: translateX(-5px); }
//           50% { transform: translateX(5px); }
//           75% { transform: translateX(-5px); }
//           100% { transform: translateX(0); }
//         }

//         @keyframes pulse {
//           0% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//           100% { transform: scale(1); }
//         }

//         @keyframes zoomIn {
//           0% { transform: scale(0); }
//           100% { transform: scale(1); }
//         }

//         @keyframes slideUp {
//           0% { transform: translateY(100%); }
//           100% { transform: translateY(0); }
//         }

//         @keyframes slideRight {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(0); }
//         }

//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>
//     </>
//   );
// }









// "use client"

// import { useState } from 'react';
// import Head from 'next/head';
// import { useRouter } from 'next/navigation'; // Import useRouter hook for navigation
// import { FaRegUser, FaPen, FaQuoteRight, FaAd, FaPencilAlt, FaArrowCircleUp, FaLink, FaExclamationCircle } from 'react-icons/fa';

// export default function Home() {
//   const [data, setData] = useState(null); // To store fetched data
//   const [loading, setLoading] = useState(false);

//   const router = useRouter(); // Initialize useRouter

//   // Handle click to navigate based on the id
//   const handleClick = async (id) => {
//     // Here, instead of fetching data, we navigate to the appropriate route.
//     router.push(`/dashboard/learning/lesson/lesson_two/${id}`);
//   };

//   return (
//     <>
//       {/* SEO Head Section */}
//       <Head>
//         <title>Grammar Concepts in Sanskrit</title>
//         <meta name="description" content="Learn Sanskrit grammar concepts in an interactive and engaging way." />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Header Section */}
//       <header className="bg-blue-600 text-white text-4xl font-bold text-center py-6">
//         Grammar Concepts in Sanskrit
//       </header>

//       {/* Back to Lesson Button */}
//       <div className="text-center mt-4">
//         <button className="bg-blue-500 text-white text-xl py-2 px-6 rounded-lg hover:bg-blue-700 transition-all">
//           Back to Lesson
//         </button>
//       </div>

//       {/* Main Content: Cards for Grammar Concepts */}
//       <main className="flex flex-wrap justify-center gap-6 mt-12">
//         {[ 
//           { id: "one", label: "संज्ञा (Noun)", icon: <FaRegUser size={40} />, background: 'bg-gradient-to-r from-blue-400 to-blue-600', animation: 'bounce' },
//           { id: "two", label: "सर्वनाम (Pronoun)", icon: <FaQuoteRight size={40} />, background: 'bg-gradient-to-r from-green-400 to-green-600', animation: 'shake' },
//           { id: "three", label: "क्रिया (Verb)", icon: <FaPen size={40} />, background: 'bg-gradient-to-r from-yellow-400 to-yellow-600', animation: 'pulse' },
//           { id: "four", label: "क्रिया विशेषण (Adverb)", icon: <FaAd size={40} />, background: 'bg-gradient-to-r from-red-400 to-red-600', animation: 'fadeIn' },
//           { id: "five", label: "विशेषण (Adjective)", icon: <FaPencilAlt size={40} />, background: 'bg-gradient-to-r from-purple-400 to-purple-600', animation: 'zoomIn' },
//           { id: "six", label: "पूर्वसर्ग (Preposition)", icon: <FaArrowCircleUp size={40} />, background: 'bg-gradient-to-r from-pink-400 to-pink-600', animation: 'slideUp' },
//           { id: "seven", label: "संयोजक (Conjunction)", icon: <FaLink size={40} />, background: 'bg-gradient-to-r from-teal-400 to-teal-600', animation: 'slideRight' },
//           { id: "eight", label: "विस्मयादिबोधक (Interjection)", icon: <FaExclamationCircle size={40} />, background: 'bg-gradient-to-r from-indigo-400 to-indigo-600', animation: 'spin' }
//         ].map((item) => (
//           <div
//             key={item.id}
//             id={item.id}
//             className={`w-72 h-72 ${item.background} rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl relative cursor-pointer overflow-hidden ${item.animation}`}
//             onClick={() => handleClick(item.id)} // Trigger redirection on click
//           >
//             <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-center">
//               <div className="flex flex-col items-center justify-center space-y-4">
//                 {item.icon}
//                 <span className="text-white text-2xl font-bold">{item.label}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </main>

//       {/* Footer Section */}
//       <footer className="bg-gray-800 text-white text-center py-4 mt-12">
//         © 2024 Grammar Concepts in Sanskrit
//       </footer>
//     </>
//   );
// }





// "use client"

// import { useState } from 'react';
// import Head from 'next/head';
// import { useRouter } from 'next/navigation'; // Import useRouter hook for navigation
// import { FaRegUser, FaPen, FaQuoteRight, FaAd, FaPencilAlt, FaArrowCircleUp, FaLink, FaExclamationCircle, FaArrowLeft } from 'react-icons/fa'; // Import the FaArrowLeft icon

// export default function Home() {
//   const [data, setData] = useState(null); // To store fetched data
//   const [loading, setLoading] = useState(false);

//   const router = useRouter(); // Initialize useRouter

//   // Handle click to navigate based on the id
//   const handleClick = async (id) => {
//     // Here, instead of fetching data, we navigate to the appropriate route.
//     router.push(`/dashboard/learning/lesson/lesson_two/${id}`);
//   };

//   return (
//     <div className="bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen">
//       {/* SEO Head Section */}
//       <Head>
//         <title>Grammar Concepts in Sanskrit</title>
//         <meta name="description" content="Learn Sanskrit grammar concepts in an interactive and engaging way." />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Header Section with shadow */}
//       <header className="bg-gradient-to-r from-slate-900 to-slate-700 text-white text-4xl font-bold text-center py-4 shadow-xl">
//         <h1>Grammar Concepts in Sanskrit</h1>
//         <p className="text-xl mt-1 font-light">Explore Sanskrit grammar in an engaging way</p>
//       </header>

//       {/* Back to Lesson Button (Left aligned with FaArrowLeft icon) */}
//       <div className="absolute top-6 left-6">
//         <button 
//           className="bg-blue-500 text-white text-lg py-2 px-2 rounded-full shadow-md hover:bg-blue-700 transition-all transform hover:scale-105"
//           onClick={() => router.push('/dashboard/learning')} // Navigate back to the lesson
//         >
//           <FaArrowLeft className="inline-block mr-2" size={20} />
//         </button>
//       </div>

//       {/* Main Content: Cards for Grammar Concepts */}
//       <main className="flex flex-wrap justify-center gap-6 mt-20 px-4">
//         {[ 
//           { id: "one", label: "संज्ञा (Noun)", icon: <FaRegUser size={50} />, background: 'bg-gradient-to-r from-blue-400 to-blue-600' },
//           { id: "two", label: "सर्वनाम (Pronoun)", icon: <FaQuoteRight size={50} />, background: 'bg-gradient-to-r from-green-400 to-green-600' },
//           { id: "three", label: "क्रिया (Verb)", icon: <FaPen size={50} />, background: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
//           { id: "four", label: "क्रिया विशेषण (Adverb)", icon: <FaAd size={50} />, background: 'bg-gradient-to-r from-red-400 to-red-600' },
//           { id: "five", label: "विशेषण (Adjective)", icon: <FaPencilAlt size={50} />, background: 'bg-gradient-to-r from-purple-400 to-purple-600' },
//           { id: "six", label: "पूर्वसर्ग (Preposition)", icon: <FaArrowCircleUp size={50} />, background: 'bg-gradient-to-r from-pink-400 to-pink-600' },
//           { id: "seven", label: "संयोजक (Conjunction)", icon: <FaLink size={50} />, background: 'bg-gradient-to-r from-teal-400 to-teal-600' },
//           { id: "eight", label: "विस्मयादिबोधक (Interjection)", icon: <FaExclamationCircle size={50} />, background: 'bg-gradient-to-r from-indigo-400 to-indigo-600' }
//         ].map((item) => (
//           <div
//             key={item.id}
//             id={item.id}
//             className={`w-72 h-72 ${item.background} rounded-lg shadow-2xl transition-all transform hover:scale-105 hover:shadow-2xl relative cursor-pointer overflow-hidden`}
//             onClick={() => handleClick(item.id)} // Trigger redirection on click
//           >
//             <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-center">
//               <div className="flex flex-col items-center justify-center space-y-4">
//                 {item.icon}
//                 <span className="text-white text-2xl font-bold">{item.label}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </main>

//       {/* Footer Section with shadow */}
//       <footer className="bg-gradient-to-r from-slate-900 to-slate-700 text-white text-center py-6 mt-12 shadow-xl">
//         © 2024 Grammar Concepts in Sanskrit | All rights reserved
//       </footer>
//     </div>
//   );
// }














// "use client"

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Head from 'next/head';
// import Link from 'next/link'; // Import Next.js Link component
// import { FaRegUser, FaPen, FaQuoteRight, FaAd, FaPencilAlt, FaArrowCircleUp, FaLink, FaExclamationCircle, FaArrowLeft } from 'react-icons/fa'; // Import the FaArrowLeft icon

// export default function Home() {
//   const [data, setData] = useState(null); // To store fetched data
//   const [loading, setLoading] = useState(false);

//   const router = useRouter(); // Initialize useRouter

//   // Handle click to navigate based on the id
//   const handleClick = async (id) => {
//     router.push(`/dashboard/learning/lesson/lesson_two/${id}`);
//   };

//   return (
//     <div className="bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen">
//       {/* SEO Head Section */}
//       <Head>
//         <title>Grammar Concepts in Sanskrit</title>
//         <meta name="description" content="Learn Sanskrit grammar concepts in an interactive and engaging way." />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Header Section with shadow */}
//       <header className="bg-gradient-to-r from-slate-900 to-slate-700 text-white text-3xl font-bold text-center py-2 shadow-xl">
//         <h1>Grammar Concepts in Sanskrit</h1>
//         <p className="text-xl mt-0.5 font-light">Explore Sanskrit grammar in an engaging way</p>
//       </header>

//       {/* Back to Lesson Button using Next.js Link */}
//       <div className="absolute top-6 left-6">
//         <Link href="/dashboard/learning" passHref>
//           <button
//             className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg shadow-purple-500/50"
//           >
//             <FaArrowLeft className="text-lg" />
//           </button>
//         </Link>
//       </div>

//       {/* Main Content: Cards for Grammar Concepts */}
//       <main className="flex flex-wrap justify-center gap-6 mt-20 px-4">
//         {[ 
//           { id: "one", label: "संज्ञा (Noun)", icon: <FaRegUser size={50} />, background: 'bg-gradient-to-r from-blue-400 to-blue-600' },
//           { id: "two", label: "सर्वनाम (Pronoun)", icon: <FaQuoteRight size={50} />, background: 'bg-gradient-to-r from-green-400 to-green-600' },
//           { id: "three", label: "क्रिया (Verb)", icon: <FaPen size={50} />, background: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
//           { id: "four", label: "क्रिया विशेषण (Adverb)", icon: <FaAd size={50} />, background: 'bg-gradient-to-r from-red-400 to-red-600' },
//           { id: "five", label: "विशेषण (Adjective)", icon: <FaPencilAlt size={50} />, background: 'bg-gradient-to-r from-purple-400 to-purple-600' },
//           { id: "six", label: "पूर्वसर्ग (Preposition)", icon: <FaArrowCircleUp size={50} />, background: 'bg-gradient-to-r from-pink-400 to-pink-600' },
//           { id: "seven", label: "संयोजक (Conjunction)", icon: <FaLink size={50} />, background: 'bg-gradient-to-r from-teal-400 to-teal-600' },
//           { id: "eight", label: "विस्मयादिबोधक (Interjection)", icon: <FaExclamationCircle size={50} />, background: 'bg-gradient-to-r from-indigo-400 to-indigo-600' }
//         ].map((item) => (
//           <div
//             key={item.id}
//             id={item.id}
//             className={`w-64 h-64 ${item.background} rounded-full shadow-2xl transition-transform transform hover:scale-110 hover:shadow-2xl relative cursor-pointer overflow-hidden hover:opacity-90`}
//             onClick={() => handleClick(item.id)} // Trigger redirection on click
//           >
//             <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-center">
//               <div className="flex flex-col items-center justify-center space-y-4">
//                 <div className="text-white">{item.icon}</div>
//                 <span className="text-white text-xl font-bold">{item.label}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </main>

//       {/* Footer Section with shadow */}
//       <footer className="bg-gradient-to-r from-slate-900 to-slate-700 text-white text-center py-6 mt-12 shadow-xl">
//         © 2024 Grammar Concepts in Sanskrit | All rights reserved
//       </footer>
//     </div>
//   );
// }
















// "use client"

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Head from 'next/head';
// import Link from 'next/link'; 
// import { FaRegUser, FaPen, FaQuoteRight, FaAd, FaPencilAlt, FaArrowCircleUp, FaLink, FaExclamationCircle, FaArrowLeft } from 'react-icons/fa'; // Ensure all icons are imported

// export default function Home() {
//   const [data, setData] = useState(null); // To store fetched data
//   const [loading, setLoading] = useState(false);

//   const router = useRouter(); // Initialize useRouter

//   const handleClick = async (id) => {
//     router.push(`/dashboard/learning/lesson/lesson_two/${id}`);
//   };

//   return (
//     <div className="bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen">
//       {/* SEO Head Section */}
//       <Head>
//         <title>Grammar Concepts in Sanskrit</title>
//         <meta name="description" content="Learn Sanskrit grammar concepts in an interactive and engaging way." />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Header Section with shadow */}
//       <header className="bg-gradient-to-r from-slate-900 to-slate-700 text-white text-2xl sm:text-3xl font-bold text-center py-2 shadow-xl relative">
//         <h1>Grammar Concepts in Sanskrit</h1>
//         <p className="text-lg sm:text-xl mt-0.5 font-light">Explore Sanskrit grammar in an engaging way</p>
//       </header>

//       {/* Back to Lesson Button */}
//       <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
//         <Link href="/dashboard/learning" passHref>
//           <button
//             className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg shadow-purple-500/50"
//           >
//             <FaArrowLeft className="text-lg" />
//           </button>
//         </Link>
//       </div>

//       {/* Main Content: Cards for Grammar Concepts */}
//       <main className="flex flex-wrap justify-center gap-6 mt-20 px-4">
//         {[ 
//           { id: "one", label: "संज्ञा (Noun)", icon: <FaRegUser size={50} />, background: 'bg-gradient-to-r from-blue-400 to-blue-600' },
//           { id: "two", label: "सर्वनाम (Pronoun)", icon: <FaQuoteRight size={50} />, background: 'bg-gradient-to-r from-green-400 to-green-600' },
//           { id: "three", label: "क्रिया (Verb)", icon: <FaPen size={50} />, background: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
//           { id: "four", label: "क्रिया विशेषण (Adverb)", icon: <FaAd size={50} />, background: 'bg-gradient-to-r from-red-400 to-red-600' },
//           { id: "five", label: "विशेषण (Adjective)", icon: <FaPencilAlt size={50} />, background: 'bg-gradient-to-r from-purple-400 to-purple-600' },
//           { id: "six", label: "पूर्वसर्ग (Preposition)", icon: <FaArrowCircleUp size={50} />, background: 'bg-gradient-to-r from-pink-400 to-pink-600' },
//           { id: "seven", label: "संयोजक (Conjunction)", icon: <FaLink size={50} />, background: 'bg-gradient-to-r from-teal-400 to-teal-600' },
//           { id: "eight", label: "विस्मयादिबोधक (Interjection)", icon: <FaExclamationCircle size={50} />, background: 'bg-gradient-to-r from-indigo-400 to-indigo-600' }
//         ].map((item) => (
//           <div
//             key={item.id}
//             id={item.id}
//             className={`w-64 h-64 ${item.background} rounded-full shadow-2xl transition-transform transform hover:scale-110 hover:shadow-2xl relative cursor-pointer overflow-hidden hover:opacity-90`}
//             onClick={() => handleClick(item.id)} // Trigger redirection on click
//           >
//             <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-center">
//               <div className="flex flex-col items-center justify-center space-y-4">
//                 <div className="text-white">{item.icon}</div>
//                 <span className="text-white text-xl font-bold">{item.label}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </main>

//       {/* Footer Section with shadow */}
//       <footer className="bg-gradient-to-r from-slate-900 to-slate-700 text-white text-center py-6 mt-12 shadow-xl">
//         © 2024 Grammar Concepts in Sanskrit | All rights reserved
//       </footer>
//     </div>
//   );
// }



















"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link'; 
import { FaRegUser, FaPen, FaQuoteRight, FaAd, FaPencilAlt, FaArrowCircleUp, FaLink, FaExclamationCircle, FaArrowLeft, FaBookOpen, FaBars } from 'react-icons/fa'; // Added FaBars for mobile menu

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

  const handleClick = async (id) => {
    setLoading(true);
    setTimeout(() => {
      router.push(`/dashboard/learning/lesson/lesson_two/${id}`);
      setLoading(false);
    }, 500);
  };

  // Facts about Parts of Speech in Sanskrit
  const factCards = [
    {
      icon: <FaBookOpen className="text-blue-500 text-4xl" />,
      title: "संस्कृत व्याकरण",
      description: "Sanskrit grammar is one of the most systematic and scientific language systems in the world."
    },
    {
      icon: <FaBookOpen className="text-green-500 text-4xl" />,
      title: "व्याकरण महत्व",
      description: "Parts of speech in Sanskrit are called 'पदभेद' (Padabheda) and play a crucial role in understanding sentence structure."
    },
    {
      icon: <FaBookOpen className="text-purple-500 text-4xl" />,
      title: "भाषा संरचना",
      description: "Sanskrit has eight primary parts of speech, each with unique grammatical functions and characteristics."
    }
  ];

  // Grammar Concepts Cards
  const grammarConcepts = [ 
    { id: "one", label: "संज्ञा (Noun)", icon: <FaRegUser size={50} />, background: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { id: "two", label: "सर्वनाम (Pronoun)", icon: <FaQuoteRight size={50} />, background: 'bg-gradient-to-r from-green-400 to-green-600' },
    { id: "three", label: "क्रिया (Verb)", icon: <FaPen size={50} />, background: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
    { id: "four", label: "क्रिया विशेषण (Adverb)", icon: <FaAd size={50} />, background: 'bg-gradient-to-r from-red-400 to-red-600' },
    { id: "five", label: "विशेषण (Adjective)", icon: <FaPencilAlt size={50} />, background: 'bg-gradient-to-r from-purple-400 to-purple-600' },
    { id: "six", label: "पूर्वसर्ग (Preposition)", icon: <FaArrowCircleUp size={50} />, background: 'bg-gradient-to-r from-pink-400 to-pink-600' },
    { id: "seven", label: "संयोजक (Conjunction)", icon: <FaLink size={50} />, background: 'bg-gradient-to-r from-teal-400 to-teal-600' },
    { id: "eight", label: "विस्मयादिबोधक (Interjection)", icon: <FaExclamationCircle size={50} />, background: 'bg-gradient-to-r from-indigo-400 to-indigo-600' }
  ];

  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen flex flex-col lg:flex-row">
      {/* Mobile Header with Hamburger Menu */}
      <div className="lg:hidden bg-gradient-to-r from-slate-900 to-slate-700 text-white py-4 px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Sanskrit Grammar</h1>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="focus:outline-none"
        >
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Main Content Container */}
      <div className={`
        ${isMobileMenuOpen ? 'hidden' : 'block'}
        lg:block lg:w-3/4 w-full p-2 sm:p-4 md:p-6
      `}>
        {/* SEO Head Section */}
        <Head>
          <title>Grammar Concepts in Sanskrit</title>
          <meta name="description" content="Learn Sanskrit grammar concepts in an interactive and engaging way." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Header Section - Hidden on Mobile, Visible on Larger Screens */}
        <header className="hidden lg:block bg-gradient-to-r from-slate-900 to-slate-700 text-white text-2xl sm:text-3xl font-bold text-center py-2 shadow-xl relative">
          <h1>Grammar Concepts in Sanskrit</h1>
          <p className="text-lg sm:text-xl mt-0.5 font-light">Explore Sanskrit Grammar in an Engaging Way</p>
        </header>

        {/* Back to Lesson Button */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
          <Link href="/dashboard/learning" passHref>
            <button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg shadow-purple-500/50"
            >
              <FaArrowLeft className="text-lg" />
            </button>
          </Link>
        </div>

        {/* Main Content: Cards for Grammar Concepts */}
        <main className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-20 px-2 sm:px-4">
          {grammarConcepts.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className={`
                w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 
                ${item.background} rounded-full shadow-2xl 
                transition-transform transform hover:scale-110 
                hover:shadow-2xl relative cursor-pointer 
                overflow-hidden hover:opacity-90
              `}
              onClick={() => handleClick(item.id)}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-center">
                <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-4">
                  <div className="text-white">{item.icon}</div>
                  <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </main>

        {/* Footer Section */}
        <footer className="bg-gradient-to-r from-slate-900 to-slate-700 text-white text-center py-4 sm:py-6 mt-8 sm:mt-12 shadow-xl text-xs sm:text-sm">
          © 2024 Grammar Concepts in Sanskrit | All rights reserved
        </footer>
      </div>

      {/* Right Side - Facts Section */}
      <div className={`
        ${isMobileMenuOpen ? 'block' : 'hidden'}
        lg:block lg:w-1/4 w-full 
        bg-slate-700 bg-opacity-10 
        border-t-4 lg:border-l-2 border-slate-700 
        p-4 sm:p-6
      `}>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
          Sanskrit Grammar Facts
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {factCards.map((card, index) => (
            <div 
              key={index} 
              className="
                bg-slate-900 bg-opacity-10 
                rounded-lg p-3 sm:p-4 
                shadow-lg 
                hover:bg-opacity-20 
                transition-all duration-300 ease-in-out
              "
            >
              <div className="flex items-center mb-2 sm:mb-3">
                {card.icon}
                <h3 className="ml-2 sm:ml-3 text-base sm:text-xl font-semibold text-white">
                  {card.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-200">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="spinner-border text-white" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}