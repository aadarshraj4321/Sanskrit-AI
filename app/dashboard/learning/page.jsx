// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion"; 
// import RightSidebar from "./components/RightSideBar";
// import { useRouter } from "next/navigation";
// import LeftSideBar from "../components/LeftSideBar";




// const lessonsData = [
//     { id: 1, title: "Mastering Alphabets", subtitle: "The Building Blocks of Language", gif: "/galaxy.gif" },
//     { id: 2, title: "Grammar Basics", subtitle: "Fundamentals of Sentence Structure", gif: "/fire.gif" },
//     { id: 3, title: "Speak & Converse", subtitle: "Practice Everyday Dialogues", gif: "/dna.gif" },
//     { id: 4, title: "Power Words", subtitle: "Expand Your Vocabulary", gif: "/sun.gif" },
//     { id: 5, title: "Everyday Conversations", subtitle: "Speak Like a Native", gif: "/guitar.gif" },
// ];

// const facts = [
//     { image: "/learning_fact/1.gif", text: "Sanskrit is known as the mother of all languages." },
//     { image: "/learning_fact/3.gif", text: "Sanskrit is still spoken by a small population in India." },
//     { image: "/learning_fact/2.gif", text: "It’s one of the oldest languages, dating back over 3,000 years." },
// ];


// const sidebarItems = [
//     { label: "Learn", icon: "/dashboard_landing/learn.png", link: "/dashboard/learning" },
//     { label: "Story", icon: "/dashboard_landing/story.png", link: "/story" },
//     { label: "Gita", icon: "/dashboard_landing/gita.png", link: "/dashboard/gita" }
//   ];


// const LearningLandingPage = () => {
//     const currentPage = usePathname();
//     const router = useRouter();

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 flex flex-col text-white">
//             <div className="flex flex-1">
//                 {/* Left Sidebar */}
//                 <LeftSideBar sidebarItems={sidebarItems}/>

//                 {/* Main Content - Animated Lesson Cards */}
//                 <main className="flex-1 p-8 bg-gradient-to-r from-slate-900 to-slate-700">
//                     <button
//                         onClick={() => router.push("/dashboard")}
//                         className="mb-6 text-white px-4 py-2 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//                     >
//                         Back to Dashboard
//                     </button>

//                     {/* Animated Zigzag Lesson Cards */}
//                     <div className="space-y-8">
//                         {lessonsData.map((lesson, index) => (
//                             <motion.div
//                                 key={lesson.id}
//                                 className="w-full flex justify-center"
//                                 initial={{ opacity: 0, y: 100 }}
//                                 animate={{
//                                     opacity: 1,
//                                     y: 0,
//                                     x: index % 2 === 0 ? -100 : 120,
//                                 }}
//                                 transition={{
//                                     duration: 1,
//                                     delay: index * 0.2,
//                                 }}
//                             >
//                                 <Link href={`/dashboard/learning/lesson/${lesson.id}`}>
//                                     <div
//                                         className="relative w-64 h-64 rounded-full shadow-lg overflow-hidden bg-cover bg-center transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl"
//                                         style={{ backgroundImage: `url(${lesson.gif})` }}
//                                     >
//                                         <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center p-4 rounded-full text-center">
//                                             <h2 className="text-lg font-semibold text-white">{lesson.title}</h2>
//                                             <p className="text-xs text-gray-300 italic">{lesson.subtitle}</p>
//                                         </div>

//                                         {/* Rotating Border Animation */}
//                                         <div className="absolute inset-0 border-2 rounded-full animate-spin-slow"></div>
//                                     </div>
//                                 </Link>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </main>

//                 <RightSidebar facts={facts} />
//             </div>

//             <footer className="w-full text-center py-4 bg-gray-800 text-gray-500 border-t border-gray-700">
//                 <p className="text-xs">© 2024 Sanskrit Learning Portal. All Rights Reserved.</p>
//             </footer>
//         </div>
//     );
// };

// export default LearningLandingPage;












// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion"; 
// import RightSidebar from "./components/RightSideBar";
// import { useRouter } from "next/navigation";
// import LeftSideBar from "../components/LeftSideBar";

// const lessonsData = [
//     { id: 0, title: "Introduction to Sanskrit", subtitle: "Understanding the Roots of Language", gif: "/galaxy.gif", specialLink: "/dashboard/learning/lesson/0" },
//     { id: 1, title: "Mastering Alphabets", subtitle: "The Building Blocks of Language", gif: "/galaxy.gif" },
//     { id: 2, title: "Grammar Basics", subtitle: "Fundamentals of Sentence Structure", gif: "/fire.gif" },
//     { id: 3, title: "Speak & Converse", subtitle: "Practice Everyday Dialogues", gif: "/dna.gif" },
//     { id: 4, title: "Power Words", subtitle: "Expand Your Vocabulary", gif: "/sun.gif" },
//     { id: 5, title: "Everyday Conversations", subtitle: "Speak Like a Native", gif: "/guitar.gif" },
// ];

// const facts = [
//     { image: "/learning_fact/1.gif", text: "Sanskrit is known as the mother of all languages." },
//     { image: "/learning_fact/3.gif", text: "Sanskrit is still spoken by a small population in India." },
//     { image: "/learning_fact/2.gif", text: "It’s one of the oldest languages, dating back over 3,000 years." },
// ];

// const sidebarItems = [
//     { label: "Learn", icon: "/dashboard_landing/learn.png", link: "/dashboard/learning" },
//     { label: "Story", icon: "/dashboard_landing/story.png", link: "/story" },
//     { label: "Gita", icon: "/dashboard_landing/gita.png", link: "/dashboard/gita" }
// ];

// const LearningLandingPage = () => {
//     const currentPage = usePathname();
//     const router = useRouter();

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 flex flex-col text-white">
//             <div className="flex flex-1">
//                 {/* Left Sidebar */}
//                 <LeftSideBar sidebarItems={sidebarItems}/>

//                 {/* Main Content - Animated Lesson Cards */}
//                 <main className="flex-1 p-8 bg-gradient-to-r from-slate-900 to-slate-700">
//                     <button
//                         onClick={() => router.push("/dashboard")}
//                         className="mb-6 text-white px-4 py-2 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//                     >
//                         Back to Dashboard
//                     </button>

//                     {/* Special Link for Lesson 0 */}
//                     {lessonsData[0].id === 0 && (
//                         <motion.div
//                             className="w-full flex justify-center"
//                             initial={{ opacity: 0, y: 100 }}
//                             animate={{
//                                 opacity: 1,
//                                 y: 0,
//                                 x: 0,
//                             }}
//                             transition={{
//                                 duration: 1,
//                             }}
//                         >
//                             <Link href={"/dashboard/learning/lesson/lesson_zero/"}>
//                                 <div
//                                     className="relative w-64 h-64 rounded-full shadow-lg overflow-hidden bg-cover bg-center transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl"
//                                     style={{ backgroundImage: `url(${lessonsData[0].gif})` }}
//                                 >
//                                     <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center p-4 rounded-full text-center">
//                                         <h2 className="text-lg font-semibold text-white">{lessonsData[0].title}</h2>
//                                         <p className="text-xs text-gray-300 italic">{lessonsData[0].subtitle}</p>
//                                     </div>

//                                     {/* Rotating Border Animation */}
//                                     <div className="absolute inset-0 border-2 rounded-full animate-spin-slow"></div>
//                                 </div>
//                             </Link>
//                         </motion.div>
//                     )}

//                     {/* Animated Zigzag Lesson Cards for Other Lessons */}
//                     <div className="space-y-8">
//                         {lessonsData.slice(1).map((lesson, index) => (
//                             <motion.div
//                                 key={lesson.id}
//                                 className="w-full flex justify-center"
//                                 initial={{ opacity: 0, y: 100 }}
//                                 animate={{
//                                     opacity: 1,
//                                     y: 0,
//                                     x: index % 2 === 0 ? -100 : 120,
//                                 }}
//                                 transition={{
//                                     duration: 1,
//                                     delay: index * 0.2,
//                                 }}
//                             >
//                                 <Link href={`/dashboard/learning/lesson/${lesson.id}`}>
//                                     <div
//                                         className="relative w-64 h-64 rounded-full shadow-lg overflow-hidden bg-cover bg-center transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl"
//                                         style={{ backgroundImage: `url(${lesson.gif})` }}
//                                     >
//                                         <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center p-4 rounded-full text-center">
//                                             <h2 className="text-lg font-semibold text-white">{lesson.title}</h2>
//                                             <p className="text-xs text-gray-300 italic">{lesson.subtitle}</p>
//                                         </div>

//                                         {/* Rotating Border Animation */}
//                                         <div className="absolute inset-0 border-2 rounded-full animate-spin-slow"></div>
//                                     </div>
//                                 </Link>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </main>

//                 <RightSidebar facts={facts} />
//             </div>

//             <footer className="w-full text-center py-4 bg-gray-800 text-gray-500 border-t border-gray-700">
//                 <p className="text-xs">© 2024 Sanskrit Learning Portal. All Rights Reserved.</p>
//             </footer>
//         </div>
//     );
// };

// export default LearningLandingPage;








// "use client";

// import Link from "next/link"; // Import Link component
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion"; 
// import RightSidebar from "./components/RightSideBar";
// import LeftSideBar from "../components/LeftSideBar";

// const lessonsData = [
//     { id: 0, title: "Introduction to Sanskrit", subtitle: "Understanding the Roots of Language", gif: "/galaxy.gif", specialLink: "/dashboard/learning/lesson/0" },
//     { id: 1, title: "Mastering Alphabets", subtitle: "The Building Blocks of Language", gif: "/galaxy.gif" },
//     { id: 2, title: "Grammar Basics", subtitle: "Fundamentals of Sentence Structure", gif: "/fire.gif" },
//     { id: 3, title: "Speak & Converse", subtitle: "Practice Everyday Dialogues", gif: "/dna.gif" },
//     { id: 4, title: "Power Words", subtitle: "Expand Your Vocabulary", gif: "/sun.gif" },
//     { id: 5, title: "Everyday Conversations", subtitle: "Speak Like a Native", gif: "/guitar.gif" },
// ];

// const facts = [
//     { image: "/learning_fact/1.gif", text: "Sanskrit is known as the mother of all languages." },
//     { image: "/learning_fact/3.gif", text: "Sanskrit is still spoken by a small population in India." },
//     { image: "/learning_fact/2.gif", text: "It’s one of the oldest languages, dating back over 3,000 years." },
// ];

// const sidebarItems = [
//     { label: "Learn", icon: "/dashboard_landing/learn.png", link: "/dashboard/learning" },
//     { label: "Story", icon: "/dashboard_landing/story.png", link: "/story" },
//     { label: "Gita", icon: "/dashboard_landing/gita.png", link: "/dashboard/gita" }
// ];

// const LearningLandingPage = () => {
//     const currentPage = usePathname();

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 flex flex-col text-white">
//             <div className="flex flex-1">
//                 {/* Left Sidebar */}
//                 <LeftSideBar sidebarItems={sidebarItems}/>

//                 {/* Main Content - Animated Lesson Cards */}
//                 <main className="flex-1 p-8 bg-gradient-to-r from-slate-900 to-slate-700">
//                     {/* Back to Dashboard Link */}
//                     <Link
//                         href="/dashboard"
//                         className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-md text-white px-6 py-2 rounded-lg mb-8 inline-block"
//                     >
//                         Back to Dashboard
//                     </Link>

//                     {/* Special Link for Lesson 0 */}
//                     {lessonsData[0].id === 0 && (
//                         <motion.div
//                             className="w-full flex justify-center"
//                             initial={{ opacity: 0, y: 100 }}
//                             animate={{
//                                 opacity: 1,
//                                 y: 0,
//                                 x: 0,
//                             }}
//                             transition={{
//                                 duration: 1,
//                             }}
//                         >
//                             <Link href={"/dashboard/learning/lesson/lesson_zero/"}>
//                                 <div
//                                     className="relative w-64 h-64 rounded-full shadow-lg overflow-hidden bg-cover bg-center transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl"
//                                     style={{ backgroundImage: `url(${lessonsData[0].gif})` }}
//                                 >
//                                     <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center p-4 rounded-full text-center">
//                                         <h2 className="text-lg font-semibold text-white">{lessonsData[0].title}</h2>
//                                         <p className="text-xs text-gray-300 italic">{lessonsData[0].subtitle}</p>
//                                     </div>

//                                     {/* Rotating Border Animation */}
//                                     <div className="absolute inset-0 border-2 rounded-full animate-spin-slow"></div>
//                                 </div>
//                             </Link>
//                         </motion.div>
//                     )}

//                     {/* Animated Zigzag Lesson Cards for Other Lessons */}
//                     <div className="space-y-8">
//                         {lessonsData.slice(1).map((lesson, index) => (
//                             <motion.div
//                                 key={lesson.id}
//                                 className="w-full flex justify-center"
//                                 initial={{ opacity: 0, y: 100 }}
//                                 animate={{
//                                     opacity: 1,
//                                     y: 0,
//                                     x: index % 2 === 0 ? -100 : 120,
//                                 }}
//                                 transition={{
//                                     duration: 1,
//                                     delay: index * 0.2,
//                                 }}
//                             >
//                                 <Link href={`/dashboard/learning/lesson/${lesson.id}`}>
//                                     <div
//                                         className="relative w-64 h-64 rounded-full shadow-lg overflow-hidden bg-cover bg-center transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl"
//                                         style={{ backgroundImage: `url(${lesson.gif})` }}
//                                     >
//                                         <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center p-4 rounded-full text-center">
//                                             <h2 className="text-lg font-semibold text-white">{lesson.title}</h2>
//                                             <p className="text-xs text-gray-300 italic">{lesson.subtitle}</p>
//                                         </div>

//                                         {/* Rotating Border Animation */}
//                                         <div className="absolute inset-0 border-2 rounded-full animate-spin-slow"></div>
//                                     </div>
//                                 </Link>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </main>

//                 <RightSidebar facts={facts} />
//             </div>

//             <footer className="w-full text-center py-4 bg-gray-800 text-gray-500 border-t border-gray-700">
//                 <p className="text-xs">© 2024 Sanskrit Learning Portal. All Rights Reserved.</p>
//             </footer>
//         </div>
//     );
// };

// export default LearningLandingPage;

















// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";
// import RightSidebar from "./components/RightSideBar";
// import LeftSideBar from "../components/LeftSideBar";
// import Image from "next/image"; // Import for optimized images
// import Head from "next/head"; // Import Head for managing meta tags
// import { useEffect, useState } from "react";

// const lessonsData = [
//     { id: 0, title: "Introduction to Sanskrit", subtitle: "Understanding the Roots of Language", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit6.png", specialLink: "/dashboard/learning/lesson/0" },
//     { id: 1, title: "Mastering Alphabets", subtitle: "The Building Blocks of Language", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit3.png" },
//     { id: 2, title: "Grammar Basics", subtitle: "Fundamentals of Sentence Structure", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit5.png" },
//     { id: 3, title: "Speak & Converse", subtitle: "Practice Everyday Dialogues", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit.png" },
//     { id: 4, title: "Power Words", subtitle: "Expand Your Vocabulary", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit2.png" },
//     { id: 5, title: "Everyday Conversations", subtitle: "Speak Like a Native", gif: "https://d8q326uv7ym5m.cloudfront.net/public/sun.gif" },
// ];

// const facts = [
//     { image: "https://d8q326uv7ym5m.cloudfront.net/public/learning_fact/1.gif", text: "Sanskrit is known as the mother of all languages." },
//     { image: "https://d8q326uv7ym5m.cloudfront.net/public/learning_fact/3.gif", text: "Sanskrit is still spoken by a small population in India." },
//     { image: "https://d8q326uv7ym5m.cloudfront.net/public/learning_fact/2.gif", text: "It’s one of the oldest languages, dating back over 3,000 years." },
// ];



//   // Sidebar items with icons, labels, and links
//   const sidebarItems = [
//     { label: "Learn", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/learn.gif", link: "/dashboard/learning" },
//     { label: "Story", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/story.gif", link: "/dashboard/story" },
//     { label: "Gita", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/gitaa.gif", link: "/dashboard/gita" },
//   ];
  


// const LearningLandingPage = () => {
//     const currentPage = usePathname();
//     const [isLoading, setIsLoading] = useState(true); // State to track loading phase
//     const [isClient, setIsClient] = useState(false); // State to track if it's on the client side


    
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
//         </div>
//     );
//   }


//     return (
//         <>
//             {/* Head Component for SEO Meta Tags and Title */}
//             <Head>
//                 <meta name="description" content="Learn Sanskrit from the basics to advanced topics with interactive lessons." />
//                 <meta name="keywords" content="Sanskrit, language learning, lessons, grammar, vocabulary" />
//                 <meta property="og:title" content="Sanskrit Learning Portal" />
//                 <meta property="og:description" content="Discover the beauty of the Sanskrit language with interactive lessons and facts." />
//                 <meta property="og:image" content="/path/to/og-image.jpg" />
//                 <title>Sanskrit Learning Portal</title>
//             </Head>

//             <div className="min-h-screen bg-gray-900 flex flex-col text-white">
//                 <div className="flex flex-1">
//                     {/* Left Sidebar */}
//                     <LeftSideBar sidebarItems={sidebarItems} />

//                     {/* Main Content - Animated Lesson Cards */}
//                     <main className="flex-1 p-8 bg-gradient-to-r from-slate-900 to-slate-700">
//                         {/* Back to Dashboard Link */}
//                         <Link
//                             href="/dashboard"
//                             className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-md text-white px-6 py-3 rounded-lg mb-8 inline-block"
//                         >
//                             Back to Dashboard
//                         </Link>

//                         {/* Special Link for Lesson 0 */}
//                         {lessonsData[0].id === 0 && (
//                             <motion.div
//                                 className="w-full flex justify-center"
//                                 initial={{ opacity: 0, y: 100 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 1 }}
//                             >
//                                 <Link href={"/dashboard/learning/lesson/lesson_zero/"}>
//                                     <div
//                                         className="relative w-64 h-64 rounded-full shadow-lg overflow-hidden bg-cover bg-center transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl"
//                                         style={{ backgroundImage: `url(${lessonsData[0].gif})` }}
//                                     >
//                                         <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center p-4 rounded-full text-center">
//                                             <h2 className="text-lg font-semibold text-white">{lessonsData[0].title}</h2>
//                                             <p className="text-xs text-gray-300 italic">{lessonsData[0].subtitle}</p>
//                                         </div>
//                                         <div className="absolute inset-0 border-2 rounded-full animate-spin-slow"></div>
//                                     </div>
//                                 </Link>
//                             </motion.div>
//                         )}

//                         {/* Animated Zigzag Lesson Cards for Other Lessons */}
//                         <div className="space-y-12"> {/* Increased spacing from 8 to 12 */}
//     {lessonsData.slice(1).map((lesson, index) => (
//         <motion.div
//             key={lesson.id}
//             className="w-full flex justify-center"
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0, x: index % 2 === 0 ? -100 : 120 }}
//             transition={{ duration: 1, delay: index * 0.2 }}
//         >
//             <Link href={`/dashboard/learning/lesson/${lesson.id}`}>
//                 <div
//                     className="relative w-64 h-64 rounded-full shadow-lg overflow-hidden bg-cover bg-center transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl"
//                     style={{ backgroundImage: `url(${lesson.gif})` }}
//                 >
//                     <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center p-4 rounded-full text-center">
//                         <h2 className="text-lg font-semibold text-white">{lesson.title}</h2>
//                         <p className="text-xs text-gray-300 italic">{lesson.subtitle}</p>
//                     </div>
//                     <div className="absolute inset-0 border-2 rounded-full animate-spin-slow"></div>
//                 </div>
//             </Link>
//         </motion.div>
//     ))}
// </div>

//                     </main>

//                     <RightSidebar facts={facts} />
//                 </div>

//                 <footer className="w-full text-center py-4 bg-gray-800 text-gray-500 border-t border-gray-700">
//                     <p className="text-xs">© 2024 Sanskrit Learning Portal. All Rights Reserved.</p>
//                 </footer>
//             </div>
//         </>
//     );
// };

// export default LearningLandingPage;









// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";
// import RightSidebar from "./components/RightSideBar";
// import LeftSideBar from "../components/LeftSideBar";
// import Image from "next/image"; // Import for optimized images
// import Head from "next/head"; // Import Head for managing meta tags
// import { useEffect, useState } from "react";

// const lessonsData = [
//     { id: 0, title: "Introduction to Sanskrit", subtitle: "Understanding the Roots of Language", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit6.png", specialLink: "/dashboard/learning/lesson/0" },
//     { id: 1, title: "Mastering Alphabets", subtitle: "The Building Blocks of Language", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit3.png" },
//     { id: 2, title: "Grammar Basics", subtitle: "Fundamentals of Sentence Structure", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit5.png" },
//     { id: 3, title: "Speak & Converse", subtitle: "Practice Everyday Dialogues", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit.png" },
//     { id: 4, title: "Power Words", subtitle: "Expand Your Vocabulary", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit2.png" },
//     { id: 5, title: "Everyday Conversations", subtitle: "Speak Like a Native", gif: "https://d8q326uv7ym5m.cloudfront.net/public/sun.gif" },
// ];

// const facts = [
//     { image: "https://d8q326uv7ym5m.cloudfront.net/public/learning_fact/1.gif", text: "Sanskrit is known as the mother of all languages." },
//     { image: "https://d8q326uv7ym5m.cloudfront.net/public/learning_fact/3.gif", text: "Sanskrit is still spoken by a small population in India." },
//     { image: "https://d8q326uv7ym5m.cloudfront.net/public/learning_fact/2.gif", text: "It’s one of the oldest languages, dating back over 3,000 years." },
// ];

// const sidebarItems = [
//     { label: "Learn", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/learn.gif", link: "/dashboard/learning" },
//     { label: "Story", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/story.gif", link: "/dashboard/story" },
//     { label: "Gita", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/gitaa.gif", link: "/dashboard/gita" },
// ];

// const LearningLandingPage = () => {
//     const currentPage = usePathname();
//     const [isLoading, setIsLoading] = useState(true); // State to track loading phase
//     const [isClient, setIsClient] = useState(false); // State to track if it's on the client side

//     // useEffect to check if it's running on the client side
//     useEffect(() => {
//         // Set isLoading to false once the content has loaded
//         const timer = setTimeout(() => setIsLoading(false), 1000); // simulate loading time for the gif
//         setIsClient(true);

//         return () => clearTimeout(timer);
//     }, []);

//     if (isLoading) {
//         return (
//             <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex items-center justify-center">
//                 <Image
//                     src="https://d8q326uv7ym5m.cloudfront.net/public/loading.gif" // Path to your loading GIF
//                     alt="Loading..."
//                     width={102}  // Set the width
//                     height={102} // Set the height
//                     objectFit="contain" // Optional: maintain aspect ratio and avoid distortion
//                 />      
//             </div>
//         );
//     }

//     return (
//         <>
//             <Head>
//                 <meta name="description" content="Learn Sanskrit from the basics to advanced topics with interactive lessons." />
//                 <meta name="keywords" content="Sanskrit, language learning, lessons, grammar, vocabulary" />
//                 <meta property="og:title" content="Sanskrit Learning Portal" />
//                 <meta property="og:description" content="Discover the beauty of the Sanskrit language with interactive lessons and facts." />
//                 <meta property="og:image" content="/path/to/og-image.jpg" />
//                 <title>Sanskrit Learning Portal</title>
//             </Head>

//             <div className="min-h-screen bg-gray-900 flex flex-col text-white">
//                 <div className="flex flex-1">
//                     {/* Left Sidebar */}
//                     <LeftSideBar sidebarItems={sidebarItems} />

//                     {/* Main Content - Animated Lesson Cards */}
//                     <main className="flex-1 p-6 sm:p-8 md:p-12 bg-gradient-to-r from-slate-900 to-slate-700">
//                         {/* Back to Dashboard Link */}
//                         <Link
//                             href="/dashboard"
//                             className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-md text-white px-6 py-3 rounded-lg mb-8 inline-block"
//                         >
//                             Back to Dashboard
//                         </Link>

//                         {/* Special Link for Lesson 0 */}
//                         {lessonsData[0].id === 0 && (
//                            <motion.div
//                            className="w-full flex justify-center mb-12"
//                            initial={{ opacity: 0, y: 100 }}
//                            animate={{ opacity: 1, y: 0 }}
//                            transition={{ duration: 1 }}
//                        >
//                            <Link href={"/dashboard/learning/lesson/lesson_zero/"}>
//                                <div
//                                    className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-lg overflow-hidden bg-cover bg-center transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl"
//                                    style={{ backgroundImage: `url(${lessonsData[0].gif})` }}
//                                >
//                                    <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center p-4 rounded-full text-center">
//                                        <h2 className="text-lg font-semibold text-white">{lessonsData[0].title}</h2>
//                                        <p className="text-xs text-gray-300 italic">{lessonsData[0].subtitle}</p>
//                                    </div>
//                                    <div className="absolute inset-0 border-2 rounded-full animate-spin-slow"></div>
//                                </div>
//                            </Link>
//                        </motion.div>
                       
//                         )}

//                         {/* Animated Zigzag Lesson Cards for Other Lessons */}
//                         <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
//                             {lessonsData.slice(1).map((lesson, index) => (
//                                 <motion.div
//                                     key={lesson.id}
//                                     className="w-full flex justify-center"
//                                     initial={{ opacity: 0, y: 100 }}
//                                     animate={{ opacity: 1, y: 0, x: index % 2 === 0 ? -100 : 120 }}
//                                     transition={{ duration: 1, delay: index * 0.2 }}
//                                 >
//                                     <Link href={`/dashboard/learning/lesson/${lesson.id}`}>
//                                         <div
//                                             className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full shadow-lg overflow-hidden bg-cover bg-center transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl"
//                                             style={{ backgroundImage: `url(${lesson.gif})` }}
//                                         >
//                                             <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center p-4 rounded-full text-center">
//                                                 <h2 className="text-lg font-semibold text-white">{lesson.title}</h2>
//                                                 <p className="text-xs text-gray-300 italic">{lesson.subtitle}</p>
//                                             </div>
//                                             <div className="absolute inset-0 border-2 rounded-full animate-spin-slow"></div>
//                                         </div>
//                                     </Link>
//                                 </motion.div>
//                             ))}
//                         </div>

//                     </main>

//                     <RightSidebar facts={facts} />
//                 </div>

//                 <footer className="w-full text-center py-4 bg-gray-800 text-gray-500 border-t border-gray-700">
//                     <p className="text-xs">© 2024 Sanskrit Learning Portal. All Rights Reserved.</p>
//                 </footer>
//             </div>
//         </>
//     );
// };

// export default LearningLandingPage;



















// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";
// import RightSidebar from "./components/RightSideBar";
// import LeftSideBar from "../components/LeftSideBar";
// import Image from "next/image"; // Import for optimized images
// import Head from "next/head"; // Import Head for managing meta tags
// import { useEffect, useState } from "react";

// const lessonsData = [
//     { id: 0, title: "Introduction to Sanskrit", subtitle: "Understanding the Roots of Language", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit6.png", specialLink: "/dashboard/learning/lesson/0" },
//     { id: 1, title: "Mastering Alphabets", subtitle: "The Building Blocks of Language", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit3.png" },
//     { id: 2, title: "Grammar Basics", subtitle: "Fundamentals of Sentence Structure", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit5.png" },
//     { id: 3, title: "Speak & Converse", subtitle: "Practice Everyday Dialogues", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit.png" },
//     { id: 4, title: "Power Words", subtitle: "Expand Your Vocabulary", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit2.png" },
//     { id: 5, title: "Everyday Conversations", subtitle: "Speak Like a Native", gif: "https://d8q326uv7ym5m.cloudfront.net/public/sun.gif" },
// ];

// const facts = [
//     { image: "https://d8q326uv7ym5m.cloudfront.net/public/learning_fact/1.gif", text: "Sanskrit is known as the mother of all languages." },
//     { image: "https://d8q326uv7ym5m.cloudfront.net/public/learning_fact/3.gif", text: "Sanskrit is still spoken by a small population in India." },
//     { image: "https://d8q326uv7ym5m.cloudfront.net/public/learning_fact/2.gif", text: "It’s one of the oldest languages, dating back over 3,000 years." },
// ];

// // Sidebar items with icons, labels, and links
// const sidebarItems = [
//     { label: "Learn", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/learn.gif", link: "/dashboard/learning" },
//     { label: "Story", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/story.gif", link: "/dashboard/story" },
//     { label: "Gita", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/gitaa.gif", link: "/dashboard/gita" },
// ];

// const LearningLandingPage = () => {
//     const currentPage = usePathname();
//     const [isLoading, setIsLoading] = useState(true); // State to track loading phase
//     const [isClient, setIsClient] = useState(false); // State to track if it's on the client side

//     // useEffect to check if it's running on the client side
//     useEffect(() => {
//         // Set isLoading to false once the content has loaded
//         const timer = setTimeout(() => setIsLoading(false), 1000); // simulate loading time for the gif
//         setIsClient(true);

//         return () => clearTimeout(timer);
//     }, []);

//     if (isLoading) {
//         return (
//             <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex items-center justify-center">
//                 {/* Display loading GIF with specific width and height using inline styles */}
//                 <Image
//                     src="https://d8q326uv7ym5m.cloudfront.net/public/loading.gif" // Path to your loading GIF
//                     alt="Loading..."
//                     width={102}  // Set the width
//                     height={102} // Set the height
//                     objectFit="contain" // Optional: maintain aspect ratio and avoid distortion
//                 />
//             </div>
//         );
//     }

//     return (
//         <>
//             {/* Head Component for SEO Meta Tags and Title */}
//             <Head>
//                 <meta name="description" content="Learn Sanskrit from the basics to advanced topics with interactive lessons." />
//                 <meta name="keywords" content="Sanskrit, language learning, lessons, grammar, vocabulary" />
//                 <meta property="og:title" content="Sanskrit Learning Portal" />
//                 <meta property="og:description" content="Discover the beauty of the Sanskrit language with interactive lessons and facts." />
//                 <meta property="og:image" content="/path/to/og-image.jpg" />
//                 <title>Sanskrit Learning Portal</title>
//             </Head>

//             <div className="min-h-screen bg-gray-900 flex flex-col text-white">
//                 <div className="flex flex-1">
//                     {/* Left Sidebar */}
//                     <LeftSideBar sidebarItems={sidebarItems} />

//                     {/* Main Content - Animated Lesson Cards */}
//                     <main className="flex-1 p-8 bg-gradient-to-r from-slate-900 to-slate-700">
//                         {/* Back to Dashboard Link */}
//                         <Link
//                             href="/dashboard"
//                             className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-md text-white px-6 py-3 rounded-lg mb-8 inline-block"
//                         >
//                             Back to Dashboard
//                         </Link>

//                         {/* Special Link for Lesson 0 */}
//                         {lessonsData[0].id === 0 && (
//                             <motion.div
//                                 className="w-full flex justify-center"
//                                 initial={{ opacity: 0, y: 100 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 1 }}
//                             >
//                                 <Link href={"/dashboard/learning/lesson/lesson_zero/"}>
//                                     <div
//                                         className="relative w-64 h-64 rounded-full shadow-lg overflow-hidden bg-cover bg-center transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl"
//                                         style={{ backgroundImage: `url(${lessonsData[0].gif})` }}
//                                     >
//                                         <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center p-4 rounded-full text-center">
//                                             <h2 className="text-lg font-semibold text-white">{lessonsData[0].title}</h2>
//                                             <p className="text-xs text-gray-300 italic">{lessonsData[0].subtitle}</p>
//                                         </div>
//                                         <div className="absolute inset-0 border-2 rounded-full animate-spin-slow"></div>
//                                     </div>
//                                 </Link>
//                             </motion.div>
//                         )}

//                         {/* Animated Lesson Cards - Two Circles in a Row */}
//                         <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
//                             {lessonsData.slice(1).map((lesson, index) => (
//                                 <motion.div
//                                     key={lesson.id}
//                                     className="w-full flex justify-center"
//                                     initial={{ opacity: 0, y: 100 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 1, delay: index * 0.2 }}
//                                 >
//                                     <Link href={`/dashboard/learning/lesson/${lesson.id}`}>
//                                         <div
//                                             className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-lg overflow-hidden bg-cover bg-center transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl"
//                                             style={{ backgroundImage: `url(${lesson.gif})` }}
//                                         >
//                                             <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center p-4 rounded-full text-center">
//                                                 <h2 className="text-lg font-semibold text-white">{lesson.title}</h2>
//                                                 <p className="text-xs text-gray-300 italic">{lesson.subtitle}</p>
//                                             </div>
//                                             <div className="absolute inset-0 border-2 rounded-full animate-spin-slow"></div>
//                                         </div>
//                                     </Link>
//                                 </motion.div>
//                             ))}
//                         </div>

//                     </main>

//                     <RightSidebar facts={facts} />
//                 </div>

//                 <footer className="w-full text-center py-4 bg-gray-800 text-gray-500 border-t border-gray-700">
//                     <p className="text-xs">© 2024 Sanskrit Learning Portal. All Rights Reserved.</p>
//                 </footer>
//             </div>
//         </>
//     );
// };

// export default LearningLandingPage;
















"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import RightSidebar from "./components/RightSideBar";
import LeftSideBar from "../components/LeftSideBar";
import Image from "next/image"; // Import for optimized images
import Head from "next/head"; // Import Head for managing meta tags
import { useEffect, useState } from "react";

const lessonsData = [
    { id: 0, title: "Introduction to Sanskrit", subtitle: "Understanding the Roots of Language", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit6.png", specialLink: "/dashboard/learning/lesson/0" },
    { id: 1, title: "Mastering Alphabets", subtitle: "The Building Blocks of Language", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit3.png" },
    { id: 2, title: "Grammar Basics", subtitle: "Fundamentals of Sentence Structure", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit5.png" },
    { id: 3, title: "Speak & Converse", subtitle: "Practice Everyday Dialogues", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit.png" },
    { id: 4, title: "Power Words", subtitle: "Expand Your Vocabulary", gif: "https://d8q326uv7ym5m.cloudfront.net/public/learning_page/sanskrit2.png" },
    { id: 5, title: "Everyday Conversations", subtitle: "Speak Like a Native", gif: "https://d8q326uv7ym5m.cloudfront.net/public/sun.gif" },
];

const facts = [
    { image: "https://d8q326uv7ym5m.cloudfront.net/public/learning_fact/1.gif", text: "Sanskrit is known as the mother of all languages." },
    { image: "https://d8q326uv7ym5m.cloudfront.net/public/learning_fact/3.gif", text: "Sanskrit is still spoken by a small population in India." },
    { image: "https://d8q326uv7ym5m.cloudfront.net/public/learning_fact/2.gif", text: "It’s one of the oldest languages, dating back over 3,000 years." },
];

// Sidebar items with icons, labels, and links
const sidebarItems = [
    { label: "Learn", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/learn.gif", link: "/dashboard/learning" },
    { label: "Story", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/story.gif", link: "/dashboard/story" },
    { label: "Gita", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/gitaa.gif", link: "/dashboard/gita" },
];

const LearningLandingPage = () => {
    const currentPage = usePathname();
    const [isLoading, setIsLoading] = useState(true); // State to track loading phase
    const [isClient, setIsClient] = useState(false); // State to track if it's on the client side

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
        <>
            {/* Head Component for SEO Meta Tags and Title */}
            <Head>
                <meta name="description" content="Learn Sanskrit from the basics to advanced topics with interactive lessons." />
                <meta name="keywords" content="Sanskrit, language learning, lessons, grammar, vocabulary" />
                <meta property="og:title" content="Sanskrit Learning Portal" />
                <meta property="og:description" content="Discover the beauty of the Sanskrit language with interactive lessons and facts." />
                <meta property="og:image" content="/path/to/og-image.jpg" />
                <title>Sanskrit Learning Portal</title>
            </Head>

            <div className="min-h-screen bg-gray-900 flex flex-col text-white">
                <div className="flex flex-1 flex-col md:flex-row"> {/* Use flex-col on small screens and flex-row on medium and larger */}
                    {/* Left Sidebar */}
                    <LeftSideBar sidebarItems={sidebarItems} className="w-full md:w-1/4 lg:w-1/5" />

                    {/* Main Content - Animated Lesson Cards */}
                    <main className="flex-1 p-8 bg-gradient-to-r from-slate-900 to-slate-700">
                        {/* Back to Dashboard Link */}
                        <Link
                            href="/dashboard"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-md text-white px-6 py-3 rounded-lg mb-8 inline-block"
                        >
                            Back to Dashboard
                        </Link>

                        {/* Special Link for Lesson 0 */}
                        {lessonsData[0].id === 0 && (
                            <motion.div
                                className="w-full flex justify-center"
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <Link href={"/dashboard/learning/lesson/lesson_zero/"}> {/* Lesson 0 Link */}
                                    <div
                                        className="relative w-64 h-64 rounded-full shadow-lg overflow-hidden bg-cover bg-center transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl"
                                        style={{ backgroundImage: `url(${lessonsData[0].gif})` }}
                                    >
                                        <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center p-4 rounded-full text-center">
                                            <h2 className="text-lg font-semibold text-white">{lessonsData[0].title}</h2>
                                            <p className="text-xs text-gray-300 italic">{lessonsData[0].subtitle}</p>
                                        </div>
                                        <div className="absolute inset-0 border-2 rounded-full animate-spin-slow"></div>
                                    </div>
                                </Link>
                            </motion.div>
                        )}

                        {/* Animated Lesson Cards - Two Circles in a Row */}
                        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                            {lessonsData.slice(1).map((lesson, index) => (
                                <motion.div
                                    key={lesson.id}
                                    className="w-full flex justify-center"
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                >
                                    <Link href={`/dashboard/learning/lesson/${lesson.id}`}>
                                        <div
                                            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-lg overflow-hidden bg-cover bg-center transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl"
                                            style={{ backgroundImage: `url(${lesson.gif})` }}
                                        >
                                            <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center p-4 rounded-full text-center">
                                                <h2 className="text-lg font-semibold text-white">{lesson.title}</h2>
                                                <p className="text-xs text-gray-300 italic">{lesson.subtitle}</p>
                                            </div>
                                            <div className="absolute inset-0 border-2 rounded-full animate-spin-slow"></div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                    </main>

                    <RightSidebar facts={facts} className="w-full md:w-1/4 lg:w-1/5" />
                </div>

                <footer className="w-full text-center py-4 bg-gray-800 text-gray-500 border-t border-gray-700">
                    <p className="text-xs">© 2024 Sanskrit Learning Portal. All Rights Reserved.</p>
                </footer>
            </div>
        </>
    );
};

export default LearningLandingPage;
