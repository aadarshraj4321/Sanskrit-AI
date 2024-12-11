// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { FaArrowLeft } from "react-icons/fa";
// import VerseComponent from "../components/VerseComponent";
// import LanguageToggle from "../components/LanguageToggle";
// import ThemeToggle from "../components/ThemeToggle";

// // You should pass `params` from the page's dynamic route
// const ChapterPage = ({ params }) => {
//   const [lessonId, setLessonId] = useState(null);
//   const [verses, setVerses] = useState([]);
//   const [currentVerse, setCurrentVerse] = useState(0);
//   const [language, setLanguage] = useState("english"); // Default language: English
//   const router = useRouter();

//   // Ensure lessonId is coming from the URL params
//   useEffect(() => {
//     if (params?.lessonId) {
//       setLessonId(params.lessonId); // Set the lessonId from params
//     } else {
//       console.error("lessonId is not available in params.");
//     }
//   }, [params]);

//   // Fetch verses once the lessonId is set
//   useEffect(() => {
//     if (lessonId) {
//       const fetchVerses = async () => {
//         const response = await fetch(`/data/gita/verse/${lessonId}.json`);
//         const data = await response.json();
//         setVerses(data.verses); // Store verses in state
//       };

//       fetchVerses();
//     }
//   }, [lessonId]); // Fetch verses when lessonId changes

//   const handleNextVerse = () => {
//     if (currentVerse < verses.length - 1) {
//       setCurrentVerse(currentVerse + 1);
//     }
//   };

//   const handleFinish = () => {
//     router.push("/dashboard/gita"); // Go back to the Gita page
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex flex-col">
//       {/* Top bar with language and theme toggle */}
//       <div className="flex justify-between items-center p-4 bg-black">
//         <div className="flex items-center">
//           <Link href="/dashboard/gita">
//             <FaArrowLeft className="text-white text-2xl mr-4 cursor-pointer" />
//           </Link>
//           <h1 className="text-xl font-semibold text-white">Verse {currentVerse + 1}</h1>
//         </div>
//         <div className="flex items-center space-x-4">
//           <LanguageToggle setLanguage={setLanguage} />
//           <ThemeToggle />
//         </div>
//       </div>

//       {/* Display the current verse */}
//       {verses.length > 0 ? (
//         <VerseComponent
//           verse={verses[currentVerse]}
//           language={language}
//         />
//       ) : (
//         <p>Loading verses...</p> // Show loading message while fetching
//       )}

//       {/* Navigation Buttons */}
//       <div className="flex justify-between p-4">
//         {currentVerse < verses.length - 1 ? (
//           <button
//             onClick={handleNextVerse}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition hover:bg-indigo-700"
//           >
//             Next Verse
//           </button>
//         ) : (
//           <button
//             onClick={handleFinish}
//             className="px-4 py-2 bg-green-600 text-white rounded-lg transition hover:bg-green-700"
//           >
//             Finish
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChapterPage;






















// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { FaArrowLeft } from "react-icons/fa";
// import VerseComponent from "../components/VerseComponent";
// import LanguageToggle from "../components/LanguageToggle";
// import ThemeToggle from "../components/ThemeToggle";

// // You should pass `params` from the page's dynamic route
// const ChapterPage = ({ params }) => {
//   const [lessonId, setLessonId] = useState(null);
//   const [verses, setVerses] = useState([]);
//   const [currentVerse, setCurrentVerse] = useState(0);
//   const [language, setLanguage] = useState("english"); // Default language: English
//   const router = useRouter();

//   // Ensure lessonId is coming from the URL params
//   useEffect(() => {
//     if (params?.lessonId) {
//       setLessonId(params.lessonId); // Set the lessonId from params
//     } else {
//       console.error("lessonId is not available in params.");
//     }
//   }, [params]);

//   // Fetch verses once the lessonId is set
//   useEffect(() => {
//     if (lessonId) {
//       const fetchVerses = async () => {
//         const response = await fetch(`/data/gita/verse/${lessonId}.json`);
//         const data = await response.json();
//         setVerses(data.verses); // Store verses in state
//       };

//       fetchVerses();
//     }
//   }, [lessonId]); // Fetch verses when lessonId changes

//   const handleNextVerse = () => {
//     if (currentVerse < verses.length - 1) {
//       setCurrentVerse(currentVerse + 1);
//     }
//   };

//   const handleFinish = () => {
//     router.push("/dashboard/gita"); // Go back to the Gita page
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex flex-col">
//       {/* Top bar with language and theme toggle */}
//       <div className="flex justify-between items-center p-4 bg-black">
//         <div className="flex items-center">
//           <Link href="/dashboard/gita">
//             <FaArrowLeft className="text-white text-2xl mr-4 cursor-pointer" />
//           </Link>
//           <h1 className="text-xl font-semibold text-white">Verse {currentVerse + 1}</h1>
//         </div>
//         <div className="flex items-center space-x-4">
//           <LanguageToggle setLanguage={setLanguage} />
//           <ThemeToggle />
//         </div>
//       </div>

//       {/* Display the current verse */}
//       {verses.length > 0 ? (
//         <VerseComponent
//           verse={verses[currentVerse]}
//           language={language}
//         />
//       ) : (
//         <p>Loading verses...</p> // Show loading message while fetching
//       )}

//       {/* Navigation Buttons */}
//       <div className="flex justify-between p-4">
//         {currentVerse < verses.length - 1 ? (
//           <button
//             onClick={handleNextVerse}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition hover:bg-indigo-700"
//           >
//             Next Verse
//           </button>
//         ) : (
//           <button
//             onClick={handleFinish}
//             className="px-4 py-2 bg-green-600 text-white rounded-lg transition hover:bg-green-700"
//           >
//             Finish
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChapterPage;




























// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { FaArrowLeft } from "react-icons/fa";
// import VerseComponent from "../components/VerseComponent";
// import ImageComponent from "../components/ImageComponent";
// import AudioComponent from "../components/AudioComponent";
// import LanguageToggle from "../components/LanguageToggle";
// import ThemeToggle from "../components/ThemeToggle";

// // You should pass `params` from the page's dynamic route
// const ChapterPage = ({ params }) => {
//   const [lessonId, setLessonId] = useState(null);
//   const [verses, setVerses] = useState([]);
//   const [currentVerse, setCurrentVerse] = useState(0);
//   const [language, setLanguage] = useState("english"); // Default language: English
//   const router = useRouter();

//   // Ensure lessonId is coming from the URL params
//   useEffect(() => {
//     if (params?.lessonId) {
//       setLessonId(params.lessonId); // Set the lessonId from params
//     } else {
//       console.error("lessonId is not available in params.");
//     }
//   }, [params]);

//   // Fetch verses once the lessonId is set
//   useEffect(() => {
//     if (lessonId) {
//       const fetchVerses = async () => {
//         const response = await fetch(`/data/gita/verse/${lessonId}.json`);
//         const data = await response.json();
//         setVerses(data.verses); // Store verses in state
//       };

//       fetchVerses();
//     }
//   }, [lessonId]); // Fetch verses when lessonId changes

//   const handleNextVerse = () => {
//     if (currentVerse < verses.length - 1) {
//       setCurrentVerse(currentVerse + 1);
//     }
//   };

//   const handlePreviousVerse = () => {
//     if (currentVerse > 0) {
//       setCurrentVerse(currentVerse - 1);
//     }
//   };

//   const handleFinish = () => {
//     router.push("/dashboard/gita"); // Go back to the Gita page
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex flex-col">
//       {/* Top bar with language and theme toggle */}
//       <div className="flex justify-between items-center p-4 bg-black">
//         <div className="flex items-center">
//           <Link href="/dashboard/gita">
//             <FaArrowLeft className="text-white text-2xl mr-4 cursor-pointer" />
//           </Link>
//           <h1 className="text-xl font-semibold text-white">Verse {currentVerse + 1}</h1>
//         </div>
//         <div className="flex items-center space-x-4">
//           <LanguageToggle setLanguage={setLanguage} />
//           <ThemeToggle />
//         </div>
//       </div>

//       {/* Display the current verse */}
//       {verses.length > 0 ? (
//         <>
//           {/* Display Image at the top */}
//           {verses[currentVerse].image && (
//             <ImageComponent image={verses[currentVerse].image} />
//           )}

//           {/* Display Audio at the top */}
//           {verses[currentVerse].audio && (
//             <AudioComponent audio={verses[currentVerse].audio} />
//           )}

//           {/* Display Verse text */}
//           <VerseComponent verse={verses[currentVerse]} language={language} />
//         </>
//       ) : (
//         <p>Loading verses...</p> // Show loading message while fetching
//       )}

//       {/* Navigation Buttons */}
//       <div className="flex justify-between p-4">
//         {currentVerse > 0 && (
//           <button
//             onClick={handlePreviousVerse}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition hover:bg-indigo-700"
//           >
//             Previous Verse
//           </button>
//         )}

//         {currentVerse < verses.length - 1 ? (
//           <button
//             onClick={handleNextVerse}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition hover:bg-indigo-700"
//           >
//             Next Verse
//           </button>
//         ) : (
//           <button
//             onClick={handleFinish}
//             className="px-4 py-2 bg-green-600 text-white rounded-lg transition hover:bg-green-700"
//           >
//             Finish
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChapterPage;



















// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { FaArrowLeft } from "react-icons/fa";
// import VerseComponent from "../components/VerseComponent";
// import ImageComponent from "../components/ImageComponent";
// import AudioComponent from "../components/AudioComponent";
// import LanguageToggle from "../components/LanguageToggle";
// import ThemeToggle from "../components/ThemeToggle";

// // You should pass `params` from the page's dynamic route
// const ChapterPage = ({ params }) => {
//   const [lessonId, setLessonId] = useState(null);
//   const [verses, setVerses] = useState([]);
//   const [currentVerse, setCurrentVerse] = useState(0);
//   const [language, setLanguage] = useState("english"); // Default language: English
//   const router = useRouter();

//   // Ensure lessonId is coming from the URL params
//   useEffect(() => {
//     if (params?.lessonId) {
//       setLessonId(params.lessonId); // Set the lessonId from params
//     } else {
//       console.error("lessonId is not available in params.");
//     }
//   }, [params]);

//   // Fetch verses once the lessonId is set
//   useEffect(() => {
//     if (lessonId) {
//       const fetchVerses = async () => {
//         const response = await fetch(`/data/gita/verse/${lessonId}.json`);
//         const data = await response.json();
//         setVerses(data.verses); // Store verses in state
//       };

//       fetchVerses();
//     }
//   }, [lessonId]); // Fetch verses when lessonId changes

//   const handleNextVerse = () => {
//     if (currentVerse < verses.length - 1) {
//       setCurrentVerse(currentVerse + 1);
//     }
//   };

//   const handlePreviousVerse = () => {
//     if (currentVerse > 0) {
//       setCurrentVerse(currentVerse - 1);
//     }
//   };

//   const handleFinish = () => {
//     router.push("/dashboard/gita"); // Go back to the Gita page
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex flex-col">
//       {/* Top bar with language and theme toggle */}
//       <div className="flex justify-between items-center p-4 bg-black">
//         <div className="flex items-center">
//           <Link href="/dashboard/gita">
//             <FaArrowLeft className="text-white text-2xl mr-4 cursor-pointer" />
//           </Link>
//           <h1 className="text-xl font-semibold text-white">Verse {currentVerse + 1}</h1>
//         </div>
//         <div className="flex items-center space-x-4">
//           <LanguageToggle setLanguage={setLanguage} />
//           <ThemeToggle />
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="flex flex-col md:flex-row p-4">
//         {/* Left Section - Verse and Audio */}
//         <div className="flex-1 md:w-2/3 p-4">
//           {verses.length > 0 ? (
//             <>
//               {/* Display Verse text */}
//               <VerseComponent verse={verses[currentVerse]} language={language} />

//               {/* Display Audio at the top */}
//               {verses[currentVerse].audio && (
//                 <AudioComponent audio={verses[currentVerse].audio} />
//               )}
//             </>
//           ) : (
//             <p>Loading verses...</p> // Show loading message while fetching
//           )}
//         </div>

//         {/* Right Section - Image */}
//         <div className="flex-1 md:w-1/3 p-4">
//           {verses.length > 0 && verses[currentVerse].image && (
//             <ImageComponent image={verses[currentVerse].image} />
//           )}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-between p-4">
//         {currentVerse > 0 && (
//           <button
//             onClick={handlePreviousVerse}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition hover:bg-indigo-700"
//           >
//             Previous Verse
//           </button>
//         )}

//         {currentVerse < verses.length - 1 ? (
//           <button
//             onClick={handleNextVerse}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition hover:bg-indigo-700"
//           >
//             Next Verse
//           </button>
//         ) : (
//           <button
//             onClick={handleFinish}
//             className="px-4 py-2 bg-green-600 text-white rounded-lg transition hover:bg-green-700"
//           >
//             Finish
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChapterPage;













// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { FaArrowLeft } from "react-icons/fa";
// import VerseComponent from "../components/VerseComponent";
// import ImageComponent from "../components/ImageComponent";
// import AudioComponent from "../components/AudioComponent";
// import LanguageToggle from "../components/LanguageToggle";
// import ThemeToggle from "../components/ThemeToggle";

// // You should pass `params` from the page's dynamic route
// const ChapterPage = ({ params }) => {
//   const [lessonId, setLessonId] = useState(null);
//   const [verses, setVerses] = useState([]);
//   const [currentVerse, setCurrentVerse] = useState(0);
//   const [language, setLanguage] = useState("english"); // Default language: English
//   const router = useRouter();

//   // Ensure lessonId is coming from the URL params
//   useEffect(() => {
//     if (params?.lessonId) {
//       setLessonId(params.lessonId); // Set the lessonId from params
//     } else {
//       console.error("lessonId is not available in params.");
//     }
//   }, [params]);

//   // Fetch verses once the lessonId is set
//   useEffect(() => {
//     if (lessonId) {
//       const fetchVerses = async () => {
//         const response = await fetch(`/data/gita/verse/${lessonId}.json`);
//         const data = await response.json();
//         setVerses(data.verses); // Store verses in state
//       };

//       fetchVerses();
//     }
//   }, [lessonId]); // Fetch verses when lessonId changes

//   const handleNextVerse = () => {
//     if (currentVerse < verses.length - 1) {
//       setCurrentVerse(currentVerse + 1);
//     }
//   };

//   const handlePreviousVerse = () => {
//     if (currentVerse > 0) {
//       setCurrentVerse(currentVerse - 1);
//     }
//   };

//   const handleFinish = () => {
//     router.push("/dashboard/gita"); // Go back to the Gita page
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex flex-col">
//       {/* Top bar with language and theme toggle */}
//       <div className="flex justify-between items-center p-4 bg-black">
//         <div className="flex items-center">
//           <Link href="/dashboard/gita">
//             <FaArrowLeft className="text-white text-2xl mr-4 cursor-pointer" />
//           </Link>
//           <h1 className="text-xl font-semibold text-white">Verse {currentVerse + 1}</h1>
//         </div>
//         <div className="flex items-center space-x-4">
//           <LanguageToggle setLanguage={setLanguage} />
//           <ThemeToggle />
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="flex flex-col md:flex-row p-4">
//         {/* Left Section - Verse and Audio */}
//         <div className="flex-1 md:w-2/3 p-4">
//           {verses.length > 0 ? (
//             <>
//               {/* Display Verse text */}
//               <VerseComponent verse={verses[currentVerse]} language={language} />

//               {/* Display Audio at the top */}
//               {verses[currentVerse].audio && (
//                 <AudioComponent audio={verses[currentVerse].audio} />
//               )}
//             </>
//           ) : (
//             <p>Loading verses...</p> // Show loading message while fetching
//           )}
//         </div>

//         {/* Right Section - Image */}
//         <div className="flex-1 md:w-1/3 p-4 relative h-[calc(100vh-4rem)]"> {/* Ensure the right section takes full height */}
//           {verses.length > 0 && verses[currentVerse].image && (
//             <ImageComponent image={verses[currentVerse].image} />
//           )}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-between p-4">
//         {currentVerse > 0 && (
//           <button
//             onClick={handlePreviousVerse}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition hover:bg-indigo-700"
//           >
//             Previous Verse
//           </button>
//         )}

//         {currentVerse < verses.length - 1 ? (
//           <button
//             onClick={handleNextVerse}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition hover:bg-indigo-700"
//           >
//             Next Verse
//           </button>
//         ) : (
//           <button
//             onClick={handleFinish}
//             className="px-4 py-2 bg-green-600 text-white rounded-lg transition hover:bg-green-700"
//           >
//             Finish
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChapterPage;




















// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { FaArrowLeft } from "react-icons/fa";
// import VerseComponent from "../components/VerseComponent";
// import ImageComponent from "../components/ImageComponent";
// import AudioComponent from "../components/AudioComponent";
// import LanguageToggle from "../components/LanguageToggle";
// import ThemeToggle from "../components/ThemeToggle";

// // You should pass `params` from the page's dynamic route
// const ChapterPage = ({ params }) => {
//   const [lessonId, setLessonId] = useState(null);
//   const [verses, setVerses] = useState([]);
//   const [currentVerse, setCurrentVerse] = useState(0);
//   const [language, setLanguage] = useState("english"); // Default language: English
//   const router = useRouter();

//   // Ensure lessonId is coming from the URL params
//   useEffect(() => {
//     if (params?.lessonId) {
//       setLessonId(params.lessonId); // Set the lessonId from params
//     } else {
//       console.error("lessonId is not available in params.");
//     }
//   }, [params]);

//   // Fetch verses once the lessonId is set
//   useEffect(() => {
//     if (lessonId) {
//       const fetchVerses = async () => {
//         const response = await fetch(`/data/gita/verse/${lessonId}.json`);
//         const data = await response.json();
//         setVerses(data.verses); // Store verses in state
//       };

//       fetchVerses();
//     }
//   }, [lessonId]); // Fetch verses when lessonId changes

//   const handleNextVerse = () => {
//     if (currentVerse < verses.length - 1) {
//       setCurrentVerse(currentVerse + 1);
//     }
//   };

//   const handlePreviousVerse = () => {
//     if (currentVerse > 0) {
//       setCurrentVerse(currentVerse - 1);
//     }
//   };

//   const handleFinish = () => {
//     router.push("/dashboard/gita"); // Go back to the Gita page
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex flex-col">
//       {/* Top bar with language and theme toggle */}
//       <div className="flex justify-between items-center p-4 bg-black">
//         <div className="flex items-center">
//           <Link href="/dashboard/gita">
//             <FaArrowLeft className="text-white text-2xl mr-4 cursor-pointer" />
//           </Link>
//           <h1 className="text-xl font-semibold text-white">Verse {currentVerse + 1}</h1>
//         </div>
//         <div className="flex items-center space-x-4">
//           <LanguageToggle setLanguage={setLanguage} />
//           <ThemeToggle />
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="flex flex-col md:flex-row p-4">
//         {/* Left Section - Verse and Audio */}
//         <div className="flex-1 md:w-2/3 p-4">
//           {verses.length > 0 ? (
//             <>
//               {/* Display Verse text */}
//               <VerseComponent verse={verses[currentVerse]} language={language} />

//               {/* Display Audio at the top */}
//               {verses[currentVerse].audio && verses[currentVerse].image && (
//                 <AudioComponent
//                   audio={verses[currentVerse].audio}
//                   image={verses[currentVerse].image}
//                 />
//               )}
//             </>
//           ) : (
//             <p>Loading verses...</p> // Show loading message while fetching
//           )}
//         </div>

//         {/* Right Section - Image */}
//         <div className="flex-1 md:w-1/3 p-4 relative h-[calc(86vh-4rem)]"> {/* Adjust height for no overflow */}
//           {verses.length > 0 && verses[currentVerse].image && (
//             <ImageComponent image={verses[currentVerse].image} />
//           )}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-between p-4">
//         {currentVerse > 0 && (
//           <button
//             onClick={handlePreviousVerse}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition hover:bg-indigo-700"
//           >
//             Previous Verse
//           </button>
//         )}

//         {currentVerse < verses.length - 1 ? (
//           <button
//             onClick={handleNextVerse}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition hover:bg-indigo-700"
//           >
//             Next Verse
//           </button>
//         ) : (
//           <button
//             onClick={handleFinish}
//             className="px-4 py-2 bg-green-600 text-white rounded-lg transition hover:bg-green-700"
//           >
//             Finish
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChapterPage;



























// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { FaArrowLeft } from "react-icons/fa";
// import VerseComponent from "../components/VerseComponent";
// import ImageComponent from "../components/ImageComponent";
// import AudioComponent from "../components/AudioComponent";
// import LanguageToggle from "../components/LanguageToggle";
// import ThemeToggle from "../components/ThemeToggle";

// // You should pass `params` from the page's dynamic route
// const ChapterPage = ({ params }) => {
//   const [lessonId, setLessonId] = useState(null);
//   const [verses, setVerses] = useState([]);
//   const [currentVerse, setCurrentVerse] = useState(0);
//   const [language, setLanguage] = useState("english"); // Default language: English
//   const router = useRouter();

//   // Ensure lessonId is coming from the URL params
//   useEffect(() => {
//     if (params?.lessonId) {
//       setLessonId(params.lessonId); // Set the lessonId from params
//     } else {
//       console.error("lessonId is not available in params.");
//     }
//   }, [params]);

//   // Fetch verses once the lessonId is set
//   useEffect(() => {
//     if (lessonId) {
//       const fetchVerses = async () => {
//         const response = await fetch(`/data/gita/verse/${lessonId}.json`);
//         const data = await response.json();
//         setVerses(data.verses); // Store verses in state
//       };

//       fetchVerses();
//     }
//   }, [lessonId]); // Fetch verses when lessonId changes

//   const handleNextVerse = () => {
//     if (currentVerse < verses.length - 1) {
//       setCurrentVerse(currentVerse + 1);
//     }
//   };

//   const handlePreviousVerse = () => {
//     if (currentVerse > 0) {
//       setCurrentVerse(currentVerse - 1);
//     }
//   };

//   const handleFinish = () => {
//     router.push("/dashboard/gita"); // Go back to the Gita page
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex flex-col">
//       {/* Top bar with language and theme toggle */}
//       <div className="flex justify-between items-center p-4 bg-gradient-to-r from-slate-900 to-slate-700">
//         <div className="flex items-center">
//           <Link href="/dashboard/gita">
//             <FaArrowLeft className="text-white text-2xl mr-4 cursor-pointer" />
//           </Link>
//           <h1 className="text-xl font-semibold text-white">Verse {currentVerse + 1}</h1>
//         </div>
//         <div className="flex items-center space-x-4">
//           <LanguageToggle setLanguage={setLanguage} />
//           <ThemeToggle />
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="flex flex-col md:flex-row p-4">
//         {/* Left Section - Verse and Audio */}
//         <div className="flex-1 md:w-2/3 p-4">
//           {verses.length > 0 ? (
//             <>
//               {/* Display Verse text */}
//               <VerseComponent verse={verses[currentVerse]} language={language} />

//               {/* Add margin between the verse and the audio */}
//               <div className="mt-12"> {/* Adjust margin as needed */}
//                 {/* Display Audio at the top */}
//                 {verses[currentVerse].audio && verses[currentVerse].image && (
//                   <AudioComponent
//                     audio={verses[currentVerse].audio}
//                     image={verses[currentVerse].image}
//                   />
//                 )}
//               </div>
//             </>
//           ) : (
//             <p>Loading verses...</p> // Show loading message while fetching
//           )}
//         </div>

//         {/* Right Section - Image */}
//         <div className="flex-1 md:w-1/3 p-4 relative h-[calc(86vh-4rem)]"> {/* Adjust height for no overflow */}
//           {verses.length > 0 && verses[currentVerse].image && (
//             <ImageComponent image={verses[currentVerse].image} />
//           )}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-between p-4">
//         {currentVerse > 0 && (
//           <button
//             onClick={handlePreviousVerse}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition hover:bg-indigo-700"
//           >
//             Previous Verse
//           </button>
//         )}

//         {currentVerse < verses.length - 1 ? (
//           <button
//             onClick={handleNextVerse}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition hover:bg-indigo-700"
//           >
//             Next Verse
//           </button>
//         ) : (
//           <button
//             onClick={handleFinish}
//             className="px-4 py-2 bg-green-600 text-white rounded-lg transition hover:bg-green-700"
//           >
//             Finish
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChapterPage;






















// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { FaArrowLeft } from "react-icons/fa";
// import VerseComponent from "../components/VerseComponent";
// import ImageComponent from "../components/ImageComponent";
// import AudioComponent from "../components/AudioComponent";
// import LanguageToggle from "../components/LanguageToggle";
// import ThemeToggle from "../components/ThemeToggle";

// // You should pass `params` from the page's dynamic route
// const ChapterPage = ({ params }) => {
//   const [lessonId, setLessonId] = useState(null);
//   const [verses, setVerses] = useState([]);
//   const [currentVerse, setCurrentVerse] = useState(0);
//   const [language, setLanguage] = useState("english"); // Default language: English
//   const router = useRouter();

//   // Ensure lessonId is coming from the URL params
//   useEffect(() => {
//     if (params?.lessonId) {
//       setLessonId(params.lessonId); // Set the lessonId from params
//     } else {
//       console.error("lessonId is not available in params.");
//     }
//   }, [params]);

//   // Fetch verses once the lessonId is set
//   useEffect(() => {
//     if (lessonId) {
//       const fetchVerses = async () => {
//         const response = await fetch(`/data/gita/verse/${lessonId}.json`);
//         const data = await response.json();
//         setVerses(data.verses); // Store verses in state
//       };

//       fetchVerses();
//     }
//   }, [lessonId]); // Fetch verses when lessonId changes

//   const handleNextVerse = () => {
//     if (currentVerse < verses.length - 1) {
//       setCurrentVerse(currentVerse + 1);
//     }
//   };

//   const handlePreviousVerse = () => {
//     if (currentVerse > 0) {
//       setCurrentVerse(currentVerse - 1);
//     }
//   };

//   const handleFinish = () => {
//     router.push("/dashboard/gita"); // Go back to the Gita page
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex flex-col">
//       {/* Top bar with language and theme toggle */}
//       <div className="flex justify-between items-center p-4 bg-gradient-to-r from-slate-900 to-slate-700">
//         <div className="flex items-center">
//           <Link href="/dashboard/gita">
//             <FaArrowLeft className="text-white text-2xl mr-4 cursor-pointer" />
//           </Link>
//           <h1 className="text-xl font-semibold text-white">Verse {currentVerse + 1}</h1>
//         </div>
//         <div className="flex items-center space-x-4">
//           <LanguageToggle setLanguage={setLanguage} />
//           <ThemeToggle />
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="flex flex-col md:flex-row p-4">
//         {/* Left Section - Verse and Audio */}
//         <div className="flex-1 md:w-2/3 p-4">
//           {verses.length > 0 ? (
//             <>

//                        {/* Add margin between the verse and the audio */}
//                        <div className="mt-6 mb-12"> {/* Adjust margin as needed */}
//                 {/* Display Audio at the top */}
//                 {verses[currentVerse].audio && verses[currentVerse].image && (
//                   <AudioComponent
//                     audio={verses[currentVerse].audio}
//                     image={verses[currentVerse].image}
//                   />
//                 )}
//               </div>
//               {/* Display Verse text */}
//               <VerseComponent verse={verses[currentVerse]} language={language} />

   
//             </>
//           ) : (
//             <p>Loading verses...</p> // Show loading message while fetching
//           )}
//         </div>

//         {/* Right Section - Image */}
//         <div className="flex-1 md:w-1/3 p-4 relative h-[calc(86vh-4rem)]"> {/* Adjust height for no overflow */}
//           {verses.length > 0 && verses[currentVerse].image && (
//             <ImageComponent image={verses[currentVerse].image} />
//           )}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-between p-4">
//         {currentVerse > 0 && (
//           <button
//             onClick={handlePreviousVerse}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition hover:bg-indigo-700"
//           >
//             Previous Verse
//           </button>
//         )}

//         {currentVerse < verses.length - 1 ? (
//           <button
//             onClick={handleNextVerse}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition hover:bg-indigo-700"
//           >
//             Next Verse
//           </button>
//         ) : (
//           <button
//             onClick={handleFinish}
//             className="px-4 py-2 bg-green-600 text-white rounded-lg transition hover:bg-green-700"
//           >
//             Finish
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChapterPage;














// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { FaArrowLeft } from "react-icons/fa";
// import VerseComponent from "../components/VerseComponent";
// import ImageComponent from "../components/ImageComponent";
// import AudioComponent from "../components/AudioComponent";
// import LanguageToggle from "../components/LanguageToggle";
// import ThemeToggle from "../components/ThemeToggle";

// const ChapterPage = ({ params }) => {
//   const [lessonId, setLessonId] = useState(null);
//   const [verses, setVerses] = useState([]);
//   const [currentVerse, setCurrentVerse] = useState(0);
//   const [language, setLanguage] = useState("english");
//   const [theme, setTheme] = useState("dark"); // Default theme is dark
//   const router = useRouter();

//   useEffect(() => {
//     if (params?.lessonId) {
//       setLessonId(params.lessonId);
//     } else {
//       console.error("lessonId is not available in params.");
//     }
//   }, [params]);

//   useEffect(() => {
//     if (lessonId) {
//       const fetchVerses = async () => {
//         const response = await fetch(`/data/gita/verse/${lessonId}.json`);
//         const data = await response.json();
//         setVerses(data.verses);
//       };

//       fetchVerses();
//     }
//   }, [lessonId]);

//   const handleNextVerse = () => {
//     if (currentVerse < verses.length - 1) {
//       setCurrentVerse(currentVerse + 1);
//     }
//   };

//   const handlePreviousVerse = () => {
//     if (currentVerse > 0) {
//       setCurrentVerse(currentVerse - 1);
//     }
//   };

//   const handleFinish = () => {
//     router.push("/dashboard/gita");
//   };

//   return (
//     <div
//       className={`min-h-screen ${
//         theme === "dark"
//           ? "bg-gradient-to-r from-slate-900 to-slate-700 text-white"
//           : "bg-white text-black"
//       } flex flex-col transition-colors duration-500`}
//     >
//       {/* Top bar with language and theme toggle */}
//       <div
//         className={`flex justify-between items-center p-4 ${
//           theme === "dark"
//             ? "bg-gradient-to-r from-slate-900 to-slate-700"
//             : "bg-gray-100"
//         }`}
//       >
//         <div className="flex items-center">
//           <Link href="/dashboard/gita">
//             <FaArrowLeft
//               className={`${
//                 theme === "dark" ? "text-white" : "text-black"
//               } text-2xl mr-4 cursor-pointer`}
//             />
//           </Link>
//           <h1
//             className={`text-xl font-semibold ${
//               theme === "dark" ? "text-white" : "text-black"
//             }`}
//           >
//             Verse {currentVerse + 1}
//           </h1>
//         </div>
//         <div className="flex items-center space-x-4">
//           <LanguageToggle setLanguage={setLanguage} />
//           <ThemeToggle setTheme={setTheme} />
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="flex flex-col md:flex-row p-4">
//         {/* Left Section - Verse and Audio */}
//         <div className="flex-1 md:w-2/3 p-4">
//           {verses.length > 0 ? (
//             <>
//               <div className="mt-6 mb-12">
//                 {verses[currentVerse].audio && verses[currentVerse].image && (
//                   <AudioComponent
//                     audio={verses[currentVerse].audio}
//                     image={verses[currentVerse].image}
//                   />
//                 )}
//               </div>
//               <VerseComponent
//                 verse={verses[currentVerse]}
//                 language={language}
//               />
//             </>
//           ) : (
//             <p>Loading verses...</p>
//           )}
//         </div>

//         {/* Right Section - Image */}
//         <div className="flex-1 md:w-1/3 p-4 relative h-[calc(86vh-4rem)]">
//           {verses.length > 0 && verses[currentVerse].image && (
//             <ImageComponent image={verses[currentVerse].image} />
//           )}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-between p-4">
//         {currentVerse > 0 && (
//           <button
//             onClick={handlePreviousVerse}
//             className={`px-4 py-2 rounded-lg transition hover:opacity-90 ${
//               theme === "dark"
//                 ? "bg-indigo-600 text-white hover:bg-indigo-700"
//                 : "bg-indigo-200 text-indigo-900 hover:bg-indigo-300"
//             }`}
//           >
//             Previous Verse
//           </button>
//         )}

//         {currentVerse < verses.length - 1 ? (
//           <button
//             onClick={handleNextVerse}
//             className={`px-4 py-2 rounded-lg transition hover:opacity-90 ${
//               theme === "dark"
//                 ? "bg-indigo-600 text-white hover:bg-indigo-700"
//                 : "bg-indigo-200 text-indigo-900 hover:bg-indigo-300"
//             }`}
//           >
//             Next Verse
//           </button>
//         ) : (
//           <button
//             onClick={handleFinish}
//             className={`px-4 py-2 rounded-lg transition hover:opacity-90 ${
//               theme === "dark"
//                 ? "bg-green-600 text-white hover:bg-green-700"
//                 : "bg-green-200 text-green-900 hover:bg-green-300"
//             }`}
//           >
//             Finish
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChapterPage;































"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import VerseComponent from "../components/VerseComponent";
import LanguageToggle from "../components/LanguageToggle";
import ThemeToggle from "../components/ThemeToggle";

const ChapterPage = ({ params }) => {
  const [lessonId, setLessonId] = useState(null);
  const [verses, setVerses] = useState([]);
  const [currentVerse, setCurrentVerse] = useState(0);
  const [language, setLanguage] = useState("hindi");
  const [theme, setTheme] = useState("dark");
  const router = useRouter();

  useEffect(() => {
    if (params?.lessonId) {
      setLessonId(params.lessonId);
    } else {
      console.error("lessonId is not available in params.");
    }
  }, [params]);

  useEffect(() => {
    if (lessonId) {
      const fetchVerses = async () => {
        try {
          const response = await fetch(`/data/gita/verse/${lessonId}.json`);
          const data = await response.json();
          setVerses(data.verses);
        } catch (error) {
          console.error("Failed to fetch verses:", error);
        }
      };

      fetchVerses();
    }
  }, [lessonId]);

  const handleNextVerse = () => {
    if (currentVerse < verses.length - 1) {
      setCurrentVerse(currentVerse + 1);
    }
  };

  const handlePreviousVerse = () => {
    if (currentVerse > 0) {
      setCurrentVerse(currentVerse - 1);
    }
  };

  const handleFinish = () => {
    router.push("/dashboard/gita");
  };

  return (
    <div 
      className={`
        min-h-screen 
        ${theme === "dark" 
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white" 
          : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black"}
        flex flex-col transition-all duration-500 ease-in-out
      `}
    >
      {/* Header */}
      <header 
        className={`
          sticky top-0 z-20 w-full px-4 py-3 shadow-md flex justify-between items-center
          ${theme === "dark" 
            ? "bg-slate-900/80 backdrop-blur-sm" 
            : "bg-white/80 backdrop-blur-sm"}
        `}
      >
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => router.push("/dashboard/gita")}
            className="hover:bg-opacity-80 transition-all"
          >
            <FaArrowLeft 
              className={`
                text-2xl 
                ${theme === "dark" ? "text-white" : "text-black"}
              `} 
            />
          </button>
          <h1 
            className={`
              text-xl font-semibold tracking-wide
              ${theme === "dark" ? "text-white" : "text-black"}
            `}
          >
            Verse {currentVerse + 1}
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <LanguageToggle setLanguage={setLanguage} />
          <ThemeToggle setTheme={setTheme} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6 max-w-6xl">
        <div className="grid grid-cols-1 gap-8 items-center justify-center">
          {verses.length > 0 ? (
            <div className="flex flex-col items-center justify-center space-y-6 w-full">
              <div 
                className={`
                  w-full max-w-3xl p-6 rounded-2xl shadow-2xl transition-all 
                  ${theme === "dark" 
                    ? "bg-slate-800/60 border border-slate-700" 
                    : "bg-white/80 border border-gray-200"}
                `}
              >
                <VerseComponent
                  verse={verses[currentVerse]}
                  language={language}
                  className="text-center"
                />
              </div>
            </div>
          ) : (
            <div className="text-center text-xl">Loading verses...</div>
          )}
        </div>
      </main>

      {/* Navigation */}
      <footer 
        className={`
          sticky bottom-0 w-full px-4 py-4 flex justify-end items-center space-x-4
          ${theme === "dark" 
            ? "bg-slate-900/80 backdrop-blur-sm" 
            : "bg-white/80 backdrop-blur-sm"}
        `}
      >
        <div className="flex space-x-4">
          {currentVerse > 0 && (
            <button
              onClick={handlePreviousVerse}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
                ${theme === "dark"
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-indigo-200 text-indigo-900 hover:bg-indigo-300"}
              `}
            >
              <FaChevronLeft />
              Previous
            </button>
          )}

          {currentVerse < verses.length - 1 ? (
            <button
              onClick={handleNextVerse}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
                ${theme === "dark"
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-indigo-200 text-indigo-900 hover:bg-indigo-300"}
              `}
            >
              Next
              <FaChevronRight />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
                ${theme === "dark"
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-green-200 text-green-900 hover:bg-green-300"}
              `}
            >
              Finish
              <FaChevronRight />
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};

export default ChapterPage;