// "use client";
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Head from 'next/head';

// export default function LessonPage({ params }) {
//   const [lessonData, setLessonData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [lessonId, setLessonId] = useState(null);

//   // Fetch the lesson ID from the params dynamically
//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]); // This useEffect will trigger whenever `params` changes

//   useEffect(() => {
//     if (lessonId) {
//       // Fetch the lesson data based on the `lessonId`
//       const fetchLessonData = async () => {
//         setLoading(true);
//         try {
//           const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//           if (res.ok) {
//             const data = await res.json();
//             setLessonData(data);
//           } else {
//             throw new Error('Lesson not found');
//           }
//         } catch (error) {
//           console.error('Error fetching lesson data:', error);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchLessonData();
//     }
//   }, [lessonId]); // Trigger fetching when lessonId changes

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!lessonData) {
//     return <div>No lesson data available.</div>;
//   }

//   return (
//     <>
//     </>
//   );
// }















// "use client";
// import { useState, useEffect } from 'react';
// import { Book, Layers, List, ArrowRight } from 'lucide-react';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activeSection, setActiveSection] = useState('overview');

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//         setLoading(false);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="text-xl text-blue-600">Loading lesson...</div>
//       </div>
//     );
//   }

//   if (!lessonData) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="text-xl text-red-600">No lesson data available.</div>
//       </div>
//     );
//   }

//   const renderGenderSection = () => (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-blue-700 mb-4">Gender (लिंग)</h2>
//       <p className="text-gray-600 mb-4">{lessonData.categories[0].description}</p>

//       <div className="grid md:grid-cols-3 gap-4">
//         {Object.entries(lessonData.categories[0].genders).map(([gender, Sanskrit]) => (
//           <div key={gender} className="border rounded-lg p-4 hover:bg-blue-50 transition">
//             <h3 className="font-semibold text-lg capitalize text-blue-600">{gender}</h3>
//             <p className="text-gray-500">{Sanskrit}</p>
//             <div className="mt-3">
//               <h4 className="text-sm font-medium text-gray-700">Examples:</h4>
//               <ul className="list-disc pl-5 text-sm text-gray-600">
//                 {lessonData.categories[0].examples[gender].map((example, index) => (
//                   <li key={index}>{example}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderNumberSection = () => {
//     const numberCategory = lessonData.categories[1];
//     return (
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-blue-700 mb-4">Number (वचन)</h2>
//         <p className="text-gray-600 mb-4">{numberCategory.description}</p>

//         <div className="grid md:grid-cols-3 gap-4">
//           {Object.entries(numberCategory.numbers).map(([number, Sanskrit]) => (
//             <div key={number} className="border rounded-lg p-4 hover:bg-blue-50 transition">
//               <h3 className="font-semibold text-lg capitalize text-blue-600">{number}</h3>
//               <p className="text-gray-500">{Sanskrit}</p>
//               <div className="mt-3">
//                 <h4 className="text-sm font-medium text-gray-700">Examples:</h4>
//                 <ul className="list-disc pl-5 text-sm text-gray-600">
//                   {numberCategory.examples[number].map((example, index) => (
//                     <li key={index}>{example}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderNounTypesSection = () => {
//     const nounTypesCategory = lessonData.categories[4];
//     return (
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-blue-700 mb-4">Types of Nouns</h2>
//         <div className="space-y-4">
//           {nounTypesCategory.types.map((type, index) => (
//             <div key={index} className="border-b pb-4 last:border-b-0">
//               <div className="flex items-start space-x-3">
//                 <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
//                   <Layers size={20} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg text-blue-700">{type.type}</h3>
//                   <p className="text-gray-600 mt-1">{type.description}</p>
//                   <div className="mt-2">
//                     <span className="text-sm font-medium text-gray-700">Examples:</span>
//                     <ul className="flex space-x-2 text-sm text-gray-600">
//                       {type.examples.map((example, i) => (
//                         <li key={i} className="bg-gray-100 px-2 py-1 rounded">{example}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderOverviewSection = () => (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <div className="flex items-center space-x-4 mb-4">
//         <Book className="text-blue-600" size={40} />
//         <h1 className="text-3xl font-bold text-blue-700">{lessonData.lesson}</h1>
//       </div>
//       <div className="text-gray-700 space-y-4">
//         <p className="text-lg leading-relaxed">{lessonData.definition}</p>
//         <div className="bg-blue-50 border-l-4 border-blue-500 p-3">
//           <p className="text-blue-700 font-medium">Key Points to Remember:</p>
//           <ul className="list-disc pl-5 text-gray-600">
//             <li>Nouns describe people, places, things, or ideas</li>
//             <li>Sanskrit nouns have three genders: Masculine, Feminine, and Neuter</li>
//             <li>Nouns change form based on number and case</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );

//   const sections = [
//     { 
//       id: 'overview', 
//       name: 'Overview', 
//       icon: <Book size={20} />,
//       render: renderOverviewSection 
//     },
//     { 
//       id: 'gender', 
//       name: 'Gender', 
//       icon: <Layers size={20} />,
//       render: renderGenderSection 
//     },
//     { 
//       id: 'number', 
//       name: 'Number', 
//       icon: <List size={20} />,
//       render: renderNumberSection 
//     },
//     { 
//       id: 'types', 
//       name: 'Noun Types', 
//       icon: <ArrowRight size={20} />,
//       render: renderNounTypesSection 
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 py-10">
//       <div className="container mx-auto max-w-4xl">
//         <div className="flex space-x-4 mb-6">
//           {sections.map((section) => (
//             <button
//               key={section.id}
//               onClick={() => setActiveSection(section.id)}
//               className={`
//                 flex items-center space-x-2 px-4 py-2 rounded-full 
//                 ${activeSection === section.id 
//                   ? 'bg-blue-600 text-white' 
//                   : 'bg-white text-blue-600 hover:bg-blue-50'}
//                 transition duration-300 shadow-md
//               `}
//             >
//               {section.icon}
//               <span>{section.name}</span>
//             </button>
//           ))}
//         </div>

//         {sections.find(section => section.id === activeSection)?.render()}
//       </div>
//     </div>
//   );
// }





























// "use client";
// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { 
//   Book, 
//   Layers, 
//   List, 
//   ArrowRight, 
//   ChevronLeft, 
//   ChevronRight, 
//   Award, 
//   Target, 
//   Info 
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activeSection, setActiveSection] = useState('overview');
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//         setLoading(false);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   // Loading and Error States with Animations
//   if (loading) {
//     return (
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200"
//       >
//         <motion.div 
//           animate={{ 
//             scale: [1, 1.1, 1],
//             rotate: [0, 5, -5, 0]
//           }}
//           transition={{ 
//             duration: 1.5, 
//             repeat: Infinity 
//           }}
//           className="text-2xl font-bold text-blue-700 flex items-center space-x-3"
//         >
//           <Book className="animate-pulse" size={40} />
//           <span>Loading Lesson...</span>
//         </motion.div>
//       </motion.div>
//     );
//   }

//   if (!lessonData) {
//     return (
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200"
//       >
//         <div className="text-2xl text-red-700 flex items-center space-x-3">
//           <Info size={40} className="text-red-500" />
//           <span>No lesson data available</span>
//         </div>
//       </motion.div>
//     );
//   }

//   // Render Methods with Enhanced Design
//   const renderGenderSection = () => (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white p-6 rounded-2xl shadow-xl border-2 border-blue-100"
//     >
//       <h2 className="text-3xl font-extrabold text-blue-800 mb-6 flex items-center">
//         <Layers className="mr-4 text-blue-600" size={32} />
//         Gender (लिंग)
//       </h2>
//       <p className="text-gray-600 mb-6 text-lg leading-relaxed">{lessonData.categories[0].description}</p>

//       <div className="grid md:grid-cols-3 gap-6">
//         {Object.entries(lessonData.categories[0].genders).map(([gender, Sanskrit]) => (
//           <motion.div 
//             key={gender} 
//             whileHover={{ scale: 1.05 }}
//             className="border-2 border-blue-50 rounded-xl p-6 bg-blue-50/50 hover:bg-blue-100/50 transition-all duration-300 transform"
//           >
//             <h3 className="font-bold text-xl capitalize text-blue-700 mb-3">{gender}</h3>
//             <p className="text-gray-600 mb-4">{Sanskrit}</p>
//             <div className="bg-white rounded-lg p-4 shadow-sm">
//               <h4 className="text-sm font-semibold text-gray-700 mb-2">Examples:</h4>
//               <ul className="space-y-2">
//                 {lessonData.categories[0].examples[gender].map((example, index) => (
//                   <li 
//                     key={index} 
//                     className="bg-blue-50 px-3 py-1 rounded-md text-blue-800"
//                   >
//                     {example}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );

//   // Similar enhancements for other render methods...
//   const renderNumberSection = () => {
//     const numberCategory = lessonData.categories[1];
//     return (
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white p-6 rounded-2xl shadow-xl border-2 border-green-100"
//       >
//         <h2 className="text-3xl font-extrabold text-green-800 mb-6 flex items-center">
//           <Target className="mr-4 text-green-600" size={32} />
//           Number (वचन)
//         </h2>
//         <p className="text-gray-600 mb-6 text-lg leading-relaxed">{numberCategory.description}</p>

//         <div className="grid md:grid-cols-3 gap-6">
//           {Object.entries(numberCategory.numbers).map(([number, Sanskrit]) => (
//             <motion.div 
//               key={number}
//               whileHover={{ scale: 1.05 }} 
//               className="border-2 border-green-50 rounded-xl p-6 bg-green-50/50 hover:bg-green-100/50 transition-all duration-300 transform"
//             >
//               <h3 className="font-bold text-xl capitalize text-green-700 mb-3">{number}</h3>
//               <p className="text-gray-600 mb-4">{Sanskrit}</p>
//               <div className="bg-white rounded-lg p-4 shadow-sm">
//                 <h4 className="text-sm font-semibold text-gray-700 mb-2">Examples:</h4>
//                 <ul className="space-y-2">
//                   {numberCategory.examples[number].map((example, index) => (
//                     <li 
//                       key={index} 
//                       className="bg-green-50 px-3 py-1 rounded-md text-green-800"
//                     >
//                       {example}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     );
//   };

//   // Header Component
//   const LessonHeader = () => (
//     <motion.div 
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="flex items-center justify-between mb-8 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md"
//     >
//       <div className="flex items-center space-x-4">
//         <Link 
//           href="/lessons" 
//           className="group flex items-center text-gray-600 hover:text-blue-600 transition-colors"
//         >
//           <ChevronLeft 
//             className="mr-2 group-hover:-translate-x-1 transition-transform" 
//             size={24} 
//           />
//           Back to Lessons
//         </Link>
//         <div className="flex items-center space-x-3">
//           <Book className="text-blue-600" size={32} />
//           <h1 className="text-3xl font-bold text-blue-800">{lessonData.lesson}</h1>
//         </div>
//       </div>
//       <motion.div 
//         whileHover={{ scale: 1.05 }}
//         className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
//       >
//         <Award size={20} />
//         <span className="font-medium">Lesson Progress</span>
//       </motion.div>
//     </motion.div>
//   );

//   const sections = [
//     { 
//       id: 'overview', 
//       name: 'Overview', 
//       icon: <Book size={20} />,
//       render: renderOverviewSection 
//     },
//     { 
//       id: 'gender', 
//       name: 'Gender', 
//       icon: <Layers size={20} />,
//       render: renderGenderSection 
//     },
//     { 
//       id: 'number', 
//       name: 'Number', 
//       icon: <List size={20} />,
//       render: renderNumberSection 
//     },
//     { 
//       id: 'types', 
//       name: 'Noun Types', 
//       icon: <ArrowRight size={20} />,
//       render: renderNounTypesSection 
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10">
//       <div className="container mx-auto max-w-6xl">
//         <LessonHeader />

//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="flex space-x-4 mb-6 overflow-x-auto"
//         >
//           {sections.map((section) => (
//             <motion.button
//               key={section.id}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setActiveSection(section.id)}
//               className={`
//                 flex items-center space-x-2 px-4 py-2 rounded-full 
//                 transition duration-300 shadow-md text-sm font-medium
//                 ${activeSection === section.id 
//                   ? 'bg-blue-600 text-white' 
//                   : 'bg-white text-blue-600 hover:bg-blue-50'}
//                 min-w-max
//               `}
//             >
//               {section.icon}
//               <span>{section.name}</span>
//             </motion.button>
//           ))}
//         </motion.div>

//         <AnimatePresence mode="wait">
//           <motion.div 
//             key={activeSection}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             ref={sectionRef}
//           >
//             {sections.find(section => section.id === activeSection)?.render()}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }
















// "use client";
// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { 
//   Book, 
//   Layers, 
//   List, 
//   ArrowRight, 
//   ChevronLeft, 
//   ChevronRight, 
//   Award, 
//   Target, 
//   Info 
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activeSection, setActiveSection] = useState('overview');
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//         setLoading(false);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   // Loading and Error States with Animations
//   if (loading) {
//     return (
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200"
//       >
//         <motion.div 
//           animate={{ 
//             scale: [1, 1.1, 1],
//             rotate: [0, 5, -5, 0]
//           }}
//           transition={{ 
//             duration: 1.5, 
//             repeat: Infinity 
//           }}
//           className="text-2xl font-bold text-blue-700 flex items-center space-x-3"
//         >
//           <Book className="animate-pulse" size={40} />
//           <span>Loading Lesson...</span>
//         </motion.div>
//       </motion.div>
//     );
//   }

//   if (!lessonData) {
//     return (
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200"
//       >
//         <div className="text-2xl text-red-700 flex items-center space-x-3">
//           <Info size={40} className="text-red-500" />
//           <span>No lesson data available</span>
//         </div>
//       </motion.div>
//     );
//   }

//   // Overview Section Render Method
//   const renderOverviewSection = () => (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white p-6 rounded-2xl shadow-xl border-2 border-purple-100"
//     >
//       <h2 className="text-3xl font-extrabold text-purple-800 mb-6 flex items-center">
//         <Book className="mr-4 text-purple-600" size={32} />
//         Lesson Overview
//       </h2>
//       <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
//         {lessonData.overview ? (
//           <>
//             <p>{lessonData.overview.description}</p>
//             {lessonData.overview.learningObjectives && (
//               <div>
//                 <h3 className="text-xl font-semibold text-purple-700 mb-4">Learning Objectives:</h3>
//                 <ul className="list-disc list-inside space-y-2">
//                   {lessonData.overview.learningObjectives.map((objective, index) => (
//                     <li 
//                       key={index} 
//                       className="bg-purple-50 px-4 py-2 rounded-lg"
//                     >
//                       {objective}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </>
//         ) : (
//           <p className="text-gray-500 italic">No overview details available for this lesson.</p>
//         )}
//       </div>
//     </motion.div>
//   );

//   // Gender Section Render Method
//   const renderGenderSection = () => (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white p-6 rounded-2xl shadow-xl border-2 border-blue-100"
//     >
//       <h2 className="text-3xl font-extrabold text-blue-800 mb-6 flex items-center">
//         <Layers className="mr-4 text-blue-600" size={32} />
//         Gender (लिंग)
//       </h2>
//       <p className="text-gray-600 mb-6 text-lg leading-relaxed">
//         {lessonData.categories[0]?.description || 'No description available'}
//       </p>

//       <div className="grid md:grid-cols-3 gap-6">
//         {lessonData.categories[0]?.genders && Object.entries(lessonData.categories[0].genders).map(([gender, Sanskrit]) => (
//           <motion.div 
//             key={gender} 
//             whileHover={{ scale: 1.05 }}
//             className="border-2 border-blue-50 rounded-xl p-6 bg-blue-50/50 hover:bg-blue-100/50 transition-all duration-300 transform"
//           >
//             <h3 className="font-bold text-xl capitalize text-blue-700 mb-3">{gender}</h3>
//             <p className="text-gray-600 mb-4">{Sanskrit}</p>
//             <div className="bg-white rounded-lg p-4 shadow-sm">
//               <h4 className="text-sm font-semibold text-gray-700 mb-2">Examples:</h4>
//               <ul className="space-y-2">
//                 {lessonData.categories[0]?.examples?.[gender]?.map((example, index) => (
//                   <li 
//                     key={index} 
//                     className="bg-blue-50 px-3 py-1 rounded-md text-blue-800"
//                   >
//                     {example}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );

//   // Number Section Render Method
//   const renderNumberSection = () => {
//     const numberCategory = lessonData.categories[1];
//     return (
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white p-6 rounded-2xl shadow-xl border-2 border-green-100"
//       >
//         <h2 className="text-3xl font-extrabold text-green-800 mb-6 flex items-center">
//           <Target className="mr-4 text-green-600" size={32} />
//           Number (वचन)
//         </h2>
//         <p className="text-gray-600 mb-6 text-lg leading-relaxed">
//           {numberCategory?.description || 'No description available'}
//         </p>

//         <div className="grid md:grid-cols-3 gap-6">
//           {numberCategory?.numbers && Object.entries(numberCategory.numbers).map(([number, Sanskrit]) => (
//             <motion.div 
//               key={number}
//               whileHover={{ scale: 1.05 }} 
//               className="border-2 border-green-50 rounded-xl p-6 bg-green-50/50 hover:bg-green-100/50 transition-all duration-300 transform"
//             >
//               <h3 className="font-bold text-xl capitalize text-green-700 mb-3">{number}</h3>
//               <p className="text-gray-600 mb-4">{Sanskrit}</p>
//               <div className="bg-white rounded-lg p-4 shadow-sm">
//                 <h4 className="text-sm font-semibold text-gray-700 mb-2">Examples:</h4>
//                 <ul className="space-y-2">
//                   {numberCategory?.examples?.[number]?.map((example, index) => (
//                     <li 
//                       key={index} 
//                       className="bg-green-50 px-3 py-1 rounded-md text-green-800"
//                     >
//                       {example}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     );
//   };

//   // Noun Types Section Render Method
//   const renderNounTypesSection = () => (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white p-6 rounded-2xl shadow-xl border-2 border-orange-100"
//     >
//       <h2 className="text-3xl font-extrabold text-orange-800 mb-6 flex items-center">
//         <ArrowRight className="mr-4 text-orange-600" size={32} />
//         Noun Types
//       </h2>
//       <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
//         {lessonData.categories[2]?.description ? (
//           <>
//             <p>{lessonData.categories[2].description}</p>
//             {lessonData.categories[2]?.types && (
//               <div>
//                 <h3 className="text-xl font-semibold text-orange-700 mb-4">Types of Nouns:</h3>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {Object.entries(lessonData.categories[2].types).map(([type, details]) => (
//                     <motion.div 
//                       key={type}
//                       whileHover={{ scale: 1.02 }}
//                       className="bg-orange-50 p-4 rounded-lg border border-orange-100"
//                     >
//                       <h4 className="font-bold text-lg text-orange-800 mb-2">{type}</h4>
//                       <p>{details}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </>
//         ) : (
//           <p className="text-gray-500 italic">No noun types information available for this lesson.</p>
//         )}
//       </div>
//     </motion.div>
//   );

//   // Header Component
//   const LessonHeader = () => (
//     <motion.div 
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="flex items-center justify-between mb-8 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md"
//     >
//       <div className="flex items-center space-x-4">
//         <Link 
//           href="/lessons" 
//           className="group flex items-center text-gray-600 hover:text-blue-600 transition-colors"
//         >
//           <ChevronLeft 
//             className="mr-2 group-hover:-translate-x-1 transition-transform" 
//             size={24} 
//           />
//           Back to Lessons
//         </Link>
//         <div className="flex items-center space-x-3">
//           <Book className="text-blue-600" size={32} />
//           <h1 className="text-3xl font-bold text-blue-800">{lessonData.lesson}</h1>
//         </div>
//       </div>
//       <motion.div 
//         whileHover={{ scale: 1.05 }}
//         className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
//       >
//         <Award size={20} />
//         <span className="font-medium">Lesson Progress</span>
//       </motion.div>
//     </motion.div>
//   );

//   // Sections Configuration
//   const sections = [
//     { 
//       id: 'overview', 
//       name: 'Overview', 
//       icon: <Book size={20} />,
//       render: renderOverviewSection 
//     },
//     { 
//       id: 'gender', 
//       name: 'Gender', 
//       icon: <Layers size={20} />,
//       render: renderGenderSection 
//     },
//     { 
//       id: 'number', 
//       name: 'Number', 
//       icon: <List size={20} />,
//       render: renderNumberSection 
//     },
//     { 
//       id: 'types', 
//       name: 'Noun Types', 
//       icon: <ArrowRight size={20} />,
//       render: renderNounTypesSection 
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10">
//       <div className="container mx-auto max-w-6xl">
//         <LessonHeader />

//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="flex space-x-4 mb-6 overflow-x-auto"
//         >
//           {sections.map((section) => (
//             <motion.button
//               key={section.id}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setActiveSection(section.id)}
//               className={`
//                 flex items-center space-x-2 px-4 py-2 rounded-full 
//                 transition duration-300 shadow-md text-sm font-medium
//                 ${activeSection === section.id 
//                   ? 'bg-blue-600 text-white' 
//                   : 'bg-white text-blue-600 hover:bg-blue-50'}
//                 min-w-max
//               `}
//             >
//               {section.icon}
//               <span>{section.name}</span>
//             </motion.button>
//           ))}
//         </motion.div>

//         <AnimatePresence mode="wait">
//           <motion.div 
//             key={activeSection}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             ref={sectionRef}
//           >
//         {sections.find(section => section.id === activeSection)?.render()}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }














// "use client";
// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { 
//   Book, 
//   Layers, 
//   List, 
//   ArrowRight, 
//   ChevronLeft, 
//   ChevronRight, 
//   Award, 
//   Target, 
//   Info
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activeSection, setActiveSection] = useState('overview');
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//         setLoading(false);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   if (loading) {
//     return (
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200"
//       >
//         <motion.div 
//           animate={{ 
//             scale: [1, 1.1, 1],
//             rotate: [0, 5, -5, 0]
//           }}
//           transition={{ 
//             duration: 1.5, 
//             repeat: Infinity 
//           }}
//           className="text-2xl font-bold text-blue-700 flex items-center space-x-3"
//         >
//           <Book className="animate-pulse" size={40} />
//           <span>Loading Lesson...</span>
//         </motion.div>
//       </motion.div>
//     );
//   }

//   if (!lessonData) {
//     return (
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200"
//       >
//         <div className="text-2xl text-red-700 flex items-center space-x-3">
//           <Info size={40} className="text-red-500" />
//           <span>No lesson data available</span>
//         </div>
//       </motion.div>
//     );
//   }

//   const renderOverviewSection = () => (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white p-6 rounded-2xl shadow-xl border-2 border-purple-100"
//     >
//       <h2 className="text-3xl font-extrabold text-purple-800 mb-6 flex items-center">
//         <Book className="mr-4 text-purple-600" size={32} />
//         Lesson Overview
//       </h2>
//       <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
//         {lessonData.overview ? (
//           <>
//             <p>{lessonData.overview.description}</p>
//             {lessonData.overview.learningObjectives && (
//               <div>
//                 <h3 className="text-xl font-semibold text-purple-700 mb-4">Learning Objectives:</h3>
//                 <ul className="list-disc list-inside space-y-2">
//                   {lessonData.overview.learningObjectives.map((objective, index) => (
//                     <li 
//                       key={index} 
//                       className="bg-purple-50 px-4 py-2 rounded-lg"
//                     >
//                       {objective}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </>
//         ) : (
//           <p className="text-gray-500 italic">No overview details available for this lesson.</p>
//         )}
//       </div>
//     </motion.div>
//   );

//   const renderGenderSection = () => (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white p-6 rounded-2xl shadow-xl border-2 border-blue-100"
//     >
//       <h2 className="text-3xl font-extrabold text-blue-800 mb-6 flex items-center">
//         <Layers className="mr-4 text-blue-600" size={32} />
//         Gender (लिंग)
//       </h2>
//       <p className="text-gray-600 mb-6 text-lg leading-relaxed">
//         {lessonData.categories[0]?.description || 'No description available'}
//       </p>
//       <div className="grid md:grid-cols-3 gap-6">
//         {lessonData.categories[0]?.genders && Object.entries(lessonData.categories[0].genders).map(([gender, Sanskrit]) => (
//           <motion.div 
//             key={gender} 
//             whileHover={{ scale: 1.05 }}
//             className="border-2 border-blue-50 rounded-xl p-6 bg-blue-50/50 hover:bg-blue-100/50 transition-all duration-300 transform"
//           >
//             <h3 className="font-bold text-xl capitalize text-blue-700 mb-3">{gender}</h3>
//             <p className="text-gray-600 mb-4">{Sanskrit}</p>
//             <div className="bg-white rounded-lg p-4 shadow-sm">
//               <h4 className="text-sm font-semibold text-gray-700 mb-2">Examples:</h4>
//               <ul className="space-y-2">
//                 {lessonData.categories[0]?.examples?.[gender]?.map((example, index) => (
//                   <li 
//                     key={index} 
//                     className="bg-blue-50 px-3 py-1 rounded-md text-blue-800"
//                   >
//                     {example}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );

//   const renderNumberSection = () => {
//     const numberCategory = lessonData.categories[1];
//     return (
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white p-6 rounded-2xl shadow-xl border-2 border-green-100"
//       >
//         <h2 className="text-3xl font-extrabold text-green-800 mb-6 flex items-center">
//           <Target className="mr-4 text-green-600" size={32} />
//           Number (वचन)
//         </h2>
//         <p className="text-gray-600 mb-6 text-lg leading-relaxed">
//           {numberCategory?.description || 'No description available'}
//         </p>
//         <div className="grid md:grid-cols-3 gap-6">
//           {numberCategory?.numbers && Object.entries(numberCategory.numbers).map(([number, Sanskrit]) => (
//             <motion.div 
//               key={number}
//               whileHover={{ scale: 1.05 }} 
//               className="border-2 border-green-50 rounded-xl p-6 bg-green-50/50 hover:bg-green-100/50 transition-all duration-300 transform"
//             >
//               <h3 className="font-bold text-xl capitalize text-green-700 mb-3">{number}</h3>
//               <p className="text-gray-600 mb-4">{Sanskrit}</p>
//               <div className="bg-white rounded-lg p-4 shadow-sm">
//                 <h4 className="text-sm font-semibold text-gray-700 mb-2">Examples:</h4>
//                 <ul className="space-y-2">
//                   {numberCategory?.examples?.[number]?.map((example, index) => (
//                     <li 
//                       key={index} 
//                       className="bg-green-50 px-3 py-1 rounded-md text-green-800"
//                     >
//                       {example}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     );
//   };

//   const renderNounTypesSection = () => (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white p-6 rounded-2xl shadow-xl border-2 border-orange-100"
//     >
//       <h2 className="text-3xl font-extrabold text-orange-800 mb-6 flex items-center">
//         <ArrowRight className="mr-4 text-orange-600" size={32} />
//         Noun Types
//       </h2>
//       <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
//         {lessonData.categories[2]?.description ? (
//           <>
//             <p>{lessonData.categories[2].description}</p>
//             {lessonData.categories[2]?.types && (
//               <div>
//                 <h3 className="text-xl font-semibold text-orange-700 mb-4">Types of Nouns:</h3>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {Object.entries(lessonData.categories[2].types).map(([type, details]) => (
//                     <motion.div 
//                       key={type}
//                       whileHover={{ scale: 1.02 }}
//                       className="bg-orange-50 p-4 rounded-lg border border-orange-100"
//                     >
//                       <h4 className="font-bold text-lg text-orange-800 mb-2">{type}</h4>
//                       <p>{details}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </>
//         ) : (
//           <p className="text-gray-500 italic">No noun types information available for this lesson.</p>
//         )}
//       </div>
//     </motion.div>
//   );

//   const LessonHeader = () => (
//     <motion.div 
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="flex items-center justify-between mb-8 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md"
//     >
//       <div className="flex items-center space-x-4">
//         <Link 
//           href="/lessons" 
//           className="group flex items-center text-gray-600 hover:text-blue-600 transition-colors"
//         >
//           <ChevronLeft 
//             className="mr-2 group-hover:-translate-x-1 transition-transform" 
//             size={24} 
//           />
//           Back to Lessons
//         </Link>
//         <div className="flex items-center space-x-3">
//           <Book className="text-blue-600" size={32} />
//           <h1 className="text-3xl font-bold text-blue-800">{lessonData.lesson}</h1>
//         </div>
//       </div>
//       <motion.div 
//         whileHover={{ scale: 1.05 }}
//         className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
//       >
//         <Award size={20} />
//         <span className="font-medium">Lesson Progress</span>
//       </motion.div>
//     </motion.div>
//   );

//   const sections = [
//     { 
//       id: 'overview', 
//       name: 'Overview', 
//       icon: <Book size={20} />,
//       render: renderOverviewSection 
//     },
//     { 
//       id: 'gender', 
//       name: 'Gender', 
//       icon: <Layers size={20} />,
//       render: renderGenderSection 
//     },
//     { 
//       id: 'number', 
//       name: 'Number', 
//       icon: <List size={20} />,
//       render: renderNumberSection 
//     },
//     { 
//       id: 'types', 
//       name: 'Noun Types', 
//       icon: <ArrowRight size={20} />,
//       render: renderNounTypesSection 
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 py-10">
//       <div className="container mx-auto max-w-7xl flex">
//         <div className="w-3/4">
//           <LessonHeader />

//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="flex space-x-4 mb-6 overflow-x-auto"
//           >
//             {sections.map((section) => (
//               <motion.button
//                 key={section.id}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setActiveSection(section.id)}
//                 className={`
//                   flex items-center space-x-2 px-4 py-2 rounded-full 
//                   transition duration-300 shadow-md text-sm font-medium
//                   ${activeSection === section.id 
//                     ? 'bg-blue-600 text-white' 
//                     : 'bg-white text-blue-600 hover:bg-blue-50'}` 
//                 }
//               >
//                 {section.icon}
//                 <span>{section.name}</span>
//               </motion.button>
//             ))}
//           </motion.div>

//           <AnimatePresence mode="wait">
//             <motion.div 
//               key={activeSection}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               ref={sectionRef}
//             >
//               {sections.find(section => section.id === activeSection)?.render()}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Right Sidebar */}
//         <div className="w-1/4 ml-6">
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white p-6 rounded-2xl shadow-xl border-2 border-slate-800"
//           >
//             <h2 className="text-2xl font-extrabold text-slate-800 mb-6">About Sanskrit</h2>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               Sanskrit is an ancient Indo-Aryan language. It is the language of classical Hindu philosophy and many significant religious texts, including the Vedas.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }























// "use client";
// import { useState, useEffect } from 'react';
// import { Layers } from 'lucide-react';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [openedAccordion, setOpenedAccordion] = useState(null);

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   const toggleAccordion = (index) => {
//     setOpenedAccordion(openedAccordion === index ? null : index);
//   };

//   if (!lessonData) return <div>Loading...</div>;

//   return (
//     <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
//       {/* Lesson Overview */}
//       <div className="mb-10">
//         <h1 className="text-4xl font-extrabold text-indigo-800">{lessonData.lesson}</h1>
//         <p className="mt-4 text-xl text-gray-700">{lessonData.definition}</p>
//       </div>

//       {/* Accordion for Categories */}
//       <div className="space-y-6">
//         {lessonData.categories.map((category, idx) => (
//           <div key={idx} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out">
//             <button
//               className="w-full text-left px-4 py-3 text-lg font-semibold text-indigo-700 hover:text-indigo-900 flex items-center justify-between"
//               onClick={() => toggleAccordion(idx)}
//             >
//               <div className="flex items-center space-x-3">
//                 <Layers className="h-6 w-6 text-indigo-500" />
//                 <span className="text-lg">{category.category}</span>
//               </div>
//               <span className="text-xl">{openedAccordion === idx ? '−' : '+'}</span>
//             </button>

//             {openedAccordion === idx && (
//               <div className="mt-4 space-y-4">
//                 <p className="text-base text-gray-600">{category.description}</p>

//                 {/* Display Gender, Number, or Cases */}
//                 {category.genders && (
//                   <div className="mt-4 space-y-3">
//                     {Object.entries(category.genders).map(([gender, value]) => (
//                       <div key={gender} className="flex justify-between">
//                         <span className="text-sm font-medium text-gray-800 capitalize">{gender}</span>
//                         <span className="text-sm text-gray-500">{value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {category.numbers && (
//                   <div className="mt-4 space-y-3">
//                     {Object.entries(category.numbers).map(([number, value]) => (
//                       <div key={number} className="flex justify-between">
//                         <span className="text-sm font-medium text-gray-800 capitalize">{number}</span>
//                         <span className="text-sm text-gray-500">{value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Display Declension cases */}
//                 {category.vibhaktis && (
//                   <div className="mt-4">
//                     <h4 className="text-lg font-semibold text-indigo-600">Cases (विभक्ति)</h4>
//                     <ul className="space-y-3 mt-2">
//                       {category.vibhaktis.map((vibhakti, idx) => (
//                         <li key={idx} className="flex flex-col space-y-1">
//                           <span className="font-medium text-gray-800">{vibhakti.case}</span>
//                           <span className="text-sm text-gray-500">{vibhakti.function}</span>
//                           <span className="italic text-sm text-gray-400">{vibhakti.example}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Declension Examples */}
//       <div className="mt-14 space-y-6">
//         <h3 className="text-3xl font-extrabold text-indigo-800">Declension Examples</h3>
//         <div className="space-y-6 mt-4">
//           {lessonData.categories
//             .find((category) => category.category === "Declension Examples")
//             .examples.map((example, idx) => (
//               <div key={idx} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out">
//                 <h4 className="text-2xl font-semibold text-indigo-700">{example.gender}</h4>
//                 <div className="mt-4 space-y-4">
//                   <h5 className="text-lg font-medium text-indigo-600">{example.noun}</h5>
//                   <div className="space-y-2">
//                     {Object.entries(example.declension).map(([number, declension]) => (
//                       <div key={number} className="mt-2">
//                         <h6 className="text-md font-semibold text-gray-800">{number}</h6>
//                         <ul className="space-y-1">
//                           {Object.entries(declension).map(([caseType, declensionExample]) => (
//                             <li key={caseType} className="flex justify-between">
//                               <span className="text-sm text-gray-500 capitalize">{caseType}</span>
//                               <span className="text-sm text-gray-800">{declensionExample}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>

//       {/* Types of Nouns */}
//       <div className="mt-14">
//         <h3 className="text-3xl font-extrabold text-indigo-800">Types of Nouns</h3>
//         <div className="space-y-6 mt-6">
//           {lessonData.categories
//             .find((category) => category.category === "Types of Nouns")
//             .types.map((type, idx) => (
//               <div key={idx} className="space-y-3">
//                 <h4 className="text-2xl font-semibold text-indigo-700">{type.type}</h4>
//                 <p className="text-lg text-gray-700">{type.description}</p>
//                 <div className="mt-4">
//                   <h5 className="font-medium text-indigo-600">Examples:</h5>
//                   <ul className="list-disc pl-6 space-y-2">
//                     {type.examples.map((example, idx) => (
//                       <li key={idx} className="text-sm text-gray-500">{example}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }




























// "use client";
// import { useState, useEffect } from 'react';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [currentPage, setCurrentPage] = useState(0); // Track the current page

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   const handleNext = () => {
//     if (currentPage < lessonData.categories.length - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   if (!lessonData) return <div>Loading...</div>;

//   const currentCategory = lessonData.categories[currentPage];

//   return (
//     <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
//       <div className="mb-10">
//         <h1 className="text-4xl font-extrabold text-indigo-800">{lessonData.lesson}</h1>
//         <p className="mt-4 text-xl text-gray-700">{lessonData.definition}</p>
//       </div>

//       {/* Display One Category Data at a Time */}
//       <div className="space-y-6">
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out">
//           <h3 className="text-3xl font-extrabold text-indigo-700">{currentCategory.category}</h3>
//           <p className="mt-4 text-lg text-gray-600">{currentCategory.description}</p>

//           {/* Display Genders */}
//           {currentCategory.genders && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.genders).map(([gender, value]) => (
//                 <div key={gender} className="flex justify-between">
//                   <span className="text-sm font-medium text-gray-800 capitalize">{gender}</span>
//                   <span className="text-sm text-gray-500">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Numbers */}
//           {currentCategory.numbers && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.numbers).map(([number, value]) => (
//                 <div key={number} className="flex justify-between">
//                   <span className="text-sm font-medium text-gray-800 capitalize">{number}</span>
//                   <span className="text-sm text-gray-500">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Declension Cases */}
//           {currentCategory.vibhaktis && currentCategory.vibhaktis.length > 0 && (
//             <div className="mt-6">
//               <h4 className="text-lg font-semibold text-indigo-600">Cases (विभक्ति)</h4>
//               <ul className="space-y-3 mt-2">
//                 {currentCategory.vibhaktis.map((vibhakti, idx) => (
//                   <li key={idx} className="flex flex-col space-y-1">
//                     <span className="font-medium text-gray-800">{vibhakti.case}</span>
//                     <span className="text-sm text-gray-500">{vibhakti.function}</span>
//                     <span className="italic text-sm text-gray-400">{vibhakti.example}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-8 flex justify-between">
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handlePrevious}
//           disabled={currentPage === 0}
//         >
//           Previous
//         </button>
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handleNext}
//           disabled={currentPage === lessonData.categories.length - 1}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }




















// "use client";
// import { useState, useEffect } from 'react';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [currentPage, setCurrentPage] = useState(0); // Track the current page

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   const handleNext = () => {
//     if (currentPage < lessonData.categories.length - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   if (!lessonData) return <div>Loading...</div>;

//   const currentCategory = lessonData.categories[currentPage];

//   return (
//     <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
//       <div className="mb-10">
//         <h1 className="text-4xl font-extrabold text-indigo-800">{lessonData.lesson}</h1>
//         <p className="mt-4 text-xl text-gray-700">{lessonData.definition}</p>
//       </div>

//       {/* Display One Category Data at a Time */}
//       <div className="space-y-6">
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out">
//           <h3 className="text-3xl font-extrabold text-indigo-700">{currentCategory.category}</h3>
//           <p className="mt-4 text-lg text-gray-600">{currentCategory.description}</p>

//           {/* Display Genders */}
//           {currentCategory.genders && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.genders).map(([gender, value]) => (
//                 <div key={gender} className="flex justify-between">
//                   <span className="text-sm font-medium text-gray-800 capitalize">{gender}</span>
//                   <span className="text-sm text-gray-500">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Numbers */}
//           {currentCategory.numbers && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.numbers).map(([number, value]) => (
//                 <div key={number} className="flex justify-between">
//                   <span className="text-sm font-medium text-gray-800 capitalize">{number}</span>
//                   <span className="text-sm text-gray-500">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Declension Cases */}
//           {currentCategory.vibhaktis && currentCategory.vibhaktis.length > 0 && (
//             <div className="mt-6">
//               <h4 className="text-lg font-semibold text-indigo-600">Cases (विभक्ति)</h4>
//               <ul className="space-y-3 mt-2">
//                 {currentCategory.vibhaktis.map((vibhakti, idx) => (
//                   <li key={idx} className="flex flex-col space-y-1">
//                     <span className="font-medium text-gray-800">{vibhakti.case}</span>
//                     <span className="text-sm text-gray-500">{vibhakti.function}</span>
//                     <span className="italic text-sm text-gray-400">{vibhakti.example}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Display Declension Examples and Types of Nouns */}
//           {/* Declension Examples */}
//           {currentCategory.declensionExamples && currentCategory.declensionExamples.length > 0 && (
//             <div className="mt-6">
//               <h4 className="text-lg font-semibold text-indigo-600">Declension Examples</h4>
//               <ul className="space-y-4 mt-2">
//                 {currentCategory.declensionExamples.map((example, idx) => (
//                   <li key={idx} className="flex flex-col space-y-1">
//                     <span className="font-medium text-gray-800">{example.gender} - {example.noun}</span>
//                     <div className="space-y-2 mt-2">
//                       {Object.entries(example.declension).map(([number, forms]) => (
//                         <div key={number}>
//                           <h5 className="font-medium text-gray-800 capitalize">{number}</h5>
//                           <ul className="space-y-1">
//                             {Object.entries(forms).map(([caseType, form]) => (
//                               <li key={caseType} className="text-sm text-gray-500">
//                                 <span className="font-semibold">{caseType}: </span>{form}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Types of Nouns */}
//           {currentCategory.types && currentCategory.types.length > 0 && (
//             <div className="mt-6">
//               <h4 className="text-lg font-semibold text-indigo-600">Types of Nouns</h4>
//               <ul className="space-y-4 mt-2">
//                 {currentCategory.types.map((type, idx) => (
//                   <li key={idx} className="flex flex-col space-y-1">
//                     <span className="font-medium text-gray-800">{type.type}</span>
//                     <p className="text-sm text-gray-500">{type.description}</p>
//                     <p className="mt-2 text-sm text-gray-500">Examples:</p>
//                     <ul className="space-y-1">
//                       {type.examples.map((example, i) => (
//                         <li key={i} className="text-sm text-gray-400">{example}</li>
//                       ))}
//                     </ul>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-8 flex justify-between">
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handlePrevious}
//           disabled={currentPage === 0}
//         >
//           Previous
//         </button>
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handleNext}
//           disabled={currentPage === lessonData.categories.length - 1}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }









































// "use client";
// import { useState, useEffect } from 'react';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [currentPage, setCurrentPage] = useState(0); // Track the current page

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   const handleNext = () => {
//     if (currentPage < lessonData.categories.length - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   if (!lessonData) return <div>Loading...</div>;

//   const currentCategory = lessonData.categories[currentPage];

//   return (
//     <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
//       <div className="mb-10">
//         <h1 className="text-4xl font-extrabold text-indigo-800">{lessonData.lesson}</h1>
//         <p className="mt-4 text-xl text-gray-700">{lessonData.definition}</p>
//       </div>

//       {/* Display One Category Data at a Time */}
//       <div className="space-y-6">
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out">
//           <h3 className="text-3xl font-extrabold text-indigo-700">{currentCategory.category}</h3>
//           <p className="mt-4 text-lg text-gray-600">{currentCategory.description}</p>

//           {/* Display Genders */}
//           {currentCategory.genders && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.genders).map(([gender, value]) => (
//                 <div key={gender} className="flex justify-between">
//                   <span className="text-sm font-medium text-gray-800 capitalize">{gender}</span>
//                   <span className="text-sm text-gray-500">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Numbers */}
//           {currentCategory.numbers && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.numbers).map(([number, value]) => (
//                 <div key={number} className="flex justify-between">
//                   <span className="text-sm font-medium text-gray-800 capitalize">{number}</span>
//                   <span className="text-sm text-gray-500">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Declension Cases */}
//           {currentCategory.vibhaktis && currentCategory.vibhaktis.length > 0 && (
//             <div className="mt-6">
//               <h4 className="text-lg font-semibold text-indigo-600">Cases (विभक्ति)</h4>
//               <ul className="space-y-3 mt-2">
//                 {currentCategory.vibhaktis.map((vibhakti, idx) => (
//                   <li key={idx} className="flex flex-col space-y-1">
//                     <span className="font-medium text-gray-800">{vibhakti.case}</span>
//                     <span className="text-sm text-gray-500">{vibhakti.function}</span>
//                     <span className="italic text-sm text-gray-400">{vibhakti.example}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

// {/* Display Declension Examples */}
// {currentCategory.examples && currentCategory.examples.length > 0 && (
//   <div className="mt-6">
//     <h4 className="text-lg font-semibold text-indigo-600">Declension Examples</h4>
//     <div className="space-y-6 mt-4">
//       {currentCategory.examples.map((example, idx) => (
//         <div key={idx} className="border border-gray-200 rounded-lg p-6 bg-white shadow-lg">
//           <h5 className="text-xl font-semibold text-indigo-800">{example.gender} - {example.noun}</h5>
//           <div className="mt-4 space-y-6">
//             {/* Singular Declension */}
//             <div>
//               <h6 className="text-lg font-medium text-indigo-600">Singular</h6>
//               <div className="grid grid-cols-2 gap-4 mt-2">
//                 {Object.entries(example.declension.singular).map(([caseType, form]) => (
//                   <div key={caseType} className="flex items-center space-x-2">
//                     <span className="font-semibold text-gray-800 capitalize">{caseType}:</span>
//                     <span className="text-gray-600">{form}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Dual Declension */}
//             <div>
//               <h6 className="text-lg font-medium text-indigo-600">Dual</h6>
//               <div className="grid grid-cols-2 gap-4 mt-2">
//                 {Object.entries(example.declension.dual).map(([caseType, form]) => (
//                   <div key={caseType} className="flex items-center space-x-2">
//                     <span className="font-semibold text-gray-800 capitalize">{caseType}:</span>
//                     <span className="text-gray-600">{form}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Plural Declension */}
//             <div>
//               <h6 className="text-lg font-medium text-indigo-600">Plural</h6>
//               <div className="grid grid-cols-2 gap-4 mt-2">
//                 {Object.entries(example.declension.plural).map(([caseType, form]) => (
//                   <div key={caseType} className="flex items-center space-x-2">
//                     <span className="font-semibold text-gray-800 capitalize">{caseType}:</span>
//                     <span className="text-gray-600">{form}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// )}


// {/* Types of Nouns */}
// {currentCategory.types && currentCategory.types.length > 0 && (
//   <div className="mt-6">
//     <h4 className="text-lg font-semibold text-indigo-600">Types of Nouns</h4>
//     <div className="space-y-6 mt-4">
//       {currentCategory.types.map((type, idx) => (
//         <div key={idx} className="border border-gray-200 rounded-lg p-6 bg-white shadow-lg">
//           <h5 className="text-xl font-semibold text-indigo-800">{type.type}</h5>
//           <p className="mt-2 text-sm text-gray-600">{type.description}</p>
//           <p className="mt-4 text-sm text-gray-600">Examples:</p>
//           <ul className="space-y-2 mt-2">
//             {type.examples.map((example, i) => (
//               <li key={i} className="text-sm text-gray-500">
//                 - {example}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   </div>
// )}

//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-8 flex justify-between">
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handlePrevious}
//           disabled={currentPage === 0}
//         >
//           Previous
//         </button>
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handleNext}
//           disabled={currentPage === lessonData.categories.length - 1}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }













// "use client";
// import { useState, useEffect } from 'react';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [currentPage, setCurrentPage] = useState(0); // Track the current page

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   const handleNext = () => {
//     if (currentPage < lessonData.categories.length - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   if (!lessonData) return <div>Loading...</div>;

//   const currentCategory = lessonData.categories[currentPage];

//   return (
//     <div className="p-8 min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">
//       <div className="mb-10">
//         <h1 className="text-4xl font-extrabold text-white">{lessonData.lesson}</h1>
//         <p className="mt-4 text-xl text-gray-200">{lessonData.definition}</p>
//       </div>

//       {/* Display One Category Data at a Time */}
//       <div className="space-y-6">
//         <div className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-xl rounded-lg p-6">
//           <h3 className="text-3xl font-extrabold text-white">{currentCategory.category}</h3>
//           <p className="mt-4 text-lg text-gray-200">{currentCategory.description}</p>

//           {/* Display Genders */}
//           {currentCategory.genders && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.genders).map(([gender, value]) => (
//                 <div key={gender} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{gender}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Numbers */}
//           {currentCategory.numbers && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.numbers).map(([number, value]) => (
//                 <div key={number} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{number}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Declension Cases */}
//           {currentCategory.vibhaktis && currentCategory.vibhaktis.length > 0 && (
//             <div className="mt-6">
//               <h4 className="text-lg font-semibold text-indigo-600">Cases (विभक्ति)</h4>
//               <ul className="space-y-3 mt-2">
//                 {currentCategory.vibhaktis.map((vibhakti, idx) => (
//                   <li key={idx} className="flex flex-col space-y-1">
//                     <span className="font-medium text-white">{vibhakti.case}</span>
//                     <span className="text-sm text-gray-400">{vibhakti.function}</span>
//                     <span className="italic text-sm text-gray-300">{vibhakti.example}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Display Declension Examples */}
//           {currentCategory.examples && currentCategory.examples.length > 0 && (
//             <div className="mt-6">
//               <h4 className="text-lg font-semibold text-indigo-600">Declension Examples</h4>
//               <div className="space-y-6 mt-4">
//                 {currentCategory.examples.map((example, idx) => (
//                   <div key={idx} className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-md rounded-lg p-6">
//                     <h5 className="text-xl font-semibold text-white">{example.gender} - {example.noun}</h5>
//                     <div className="mt-4 space-y-6">
//                       {/* Singular Declension */}
//                       <div>
//                         <h6 className="text-lg font-medium text-indigo-600">Singular</h6>
//                         <div className="grid grid-cols-2 gap-4 mt-2">
//                           {Object.entries(example.declension.singular).map(([caseType, form]) => (
//                             <div key={caseType} className="flex items-center space-x-2">
//                               <span className="font-semibold text-white capitalize">{caseType}:</span>
//                               <span className="text-gray-300">{form}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Dual Declension */}
//                       <div>
//                         <h6 className="text-lg font-medium text-indigo-600">Dual</h6>
//                         <div className="grid grid-cols-2 gap-4 mt-2">
//                           {Object.entries(example.declension.dual).map(([caseType, form]) => (
//                             <div key={caseType} className="flex items-center space-x-2">
//                               <span className="font-semibold text-white capitalize">{caseType}:</span>
//                               <span className="text-gray-300">{form}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Plural Declension */}
//                       <div>
//                         <h6 className="text-lg font-medium text-indigo-600">Plural</h6>
//                         <div className="grid grid-cols-2 gap-4 mt-2">
//                           {Object.entries(example.declension.plural).map(([caseType, form]) => (
//                             <div key={caseType} className="flex items-center space-x-2">
//                               <span className="font-semibold text-white capitalize">{caseType}:</span>
//                               <span className="text-gray-300">{form}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Types of Nouns */}
//           {currentCategory.types && currentCategory.types.length > 0 && (
//             <div className="mt-6">
//               <h4 className="text-lg font-semibold text-indigo-600">Types of Nouns</h4>
//               <div className="space-y-6 mt-4">
//                 {currentCategory.types.map((type, idx) => (
//                   <div key={idx} className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-lg rounded-lg p-6">
//                     <h5 className="text-xl font-semibold text-white">{type.type}</h5>
//                     <p className="mt-2 text-sm text-gray-200">{type.description}</p>
//                     <p className="mt-4 text-sm text-gray-200">Examples:</p>
//                     <ul className="space-y-2 mt-2">
//                       {type.examples.map((example, i) => (
//                         <li key={i} className="text-sm text-gray-300">
//                           - {example}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-8 flex justify-between">
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handlePrevious}
//           disabled={currentPage === 0}
//         >
//           Previous
//         </button>
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handleNext}
//           disabled={currentPage === lessonData.categories.length - 1}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }




















// "use client";
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // Import the router for back navigation
// import Link from 'next/link';
// import { FaArrowLeft } from 'react-icons/fa';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [currentPage, setCurrentPage] = useState(0); // Track the current page
//   const router = useRouter(); // Initialize the router

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   const handleNext = () => {
//     if (currentPage < lessonData.categories.length - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   if (!lessonData) return <div>Loading...</div>;

//   const currentCategory = lessonData.categories[currentPage];

//   return (
//     <div className="p-8 min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">
//       {/* Header and Back Button */}
//       <div className="flex justify-between items-center mb-8">
//       <Link href="/dashboard/learning/lesson/lesson_two" passHref>
//             <button
//               className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg shadow-purple-500/50"
//             >
//               <FaArrowLeft className="text-lg" />
//             </button>
//           </Link>
//         <h1 className="text-4xl font-extrabold text-white mx-auto">{lessonData.lesson}</h1>
//       </div>

//       {/* Lesson Description */}
//       <p className="mt-4 text-xl text-gray-200 text-center">{lessonData.definition}</p>

//       {/* Display One Category Data at a Time */}
//       <div className="space-y-6">
//         <div className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-xl rounded-lg p-6">
//           <h3 className="text-3xl font-extrabold text-white">{currentCategory.category}</h3>
//           <p className="mt-4 text-lg text-gray-200">{currentCategory.description}</p>

//           {/* Display Genders */}
//           {currentCategory.genders && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.genders).map(([gender, value]) => (
//                 <div key={gender} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{gender}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Numbers */}
//           {currentCategory.numbers && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.numbers).map(([number, value]) => (
//                 <div key={number} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{number}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}


// {/* Display Declension Cases */}
// {currentCategory.vibhaktis && currentCategory.vibhaktis.length > 0 && (
//   <div className="mt-6">
//     <h4 className="text-lg font-semibold text-indigo-600">Cases (विभक्ति)</h4>
//     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
//       {currentCategory.vibhaktis.map((vibhakti, idx) => (
//         <li key={idx} className="flex flex-col space-y-1">
//           <span className="font-medium text-white">{vibhakti.case}</span>
//           <span className="text-sm text-gray-400">{vibhakti.function}</span>
//           <span className="italic text-sm text-gray-300">{vibhakti.example}</span>
//         </li>
//       ))}
//     </ul>
//   </div>
// )}


//           {/* Display Declension Examples */}
//           {currentCategory.examples && currentCategory.examples.length > 0 && (
//             <div className="mt-6">
//               <h4 className="text-lg font-semibold text-indigo-600">Declension Examples</h4>
//               <div className="space-y-6 mt-4">
//                 {currentCategory.examples.map((example, idx) => (
//                   <div key={idx} className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-md rounded-lg p-6">
//                     <h5 className="text-xl font-semibold text-white">{example.gender} - {example.noun}</h5>
//                     <div className="mt-4 space-y-6">
//                       {/* Singular Declension */}
//                       <div>
//                         <h6 className="text-lg font-medium text-indigo-600">Singular</h6>
//                         <div className="grid grid-cols-2 gap-4 mt-2">
//                           {Object.entries(example.declension.singular).map(([caseType, form]) => (
//                             <div key={caseType} className="flex items-center space-x-2">
//                               <span className="font-semibold text-white capitalize">{caseType}:</span>
//                               <span className="text-gray-300">{form}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Dual Declension */}
//                       <div>
//                         <h6 className="text-lg font-medium text-indigo-600">Dual</h6>
//                         <div className="grid grid-cols-2 gap-4 mt-2">
//                           {Object.entries(example.declension.dual).map(([caseType, form]) => (
//                             <div key={caseType} className="flex items-center space-x-2">
//                               <span className="font-semibold text-white capitalize">{caseType}:</span>
//                               <span className="text-gray-300">{form}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Plural Declension */}
//                       <div>
//                         <h6 className="text-lg font-medium text-indigo-600">Plural</h6>
//                         <div className="grid grid-cols-2 gap-4 mt-2">
//                           {Object.entries(example.declension.plural).map(([caseType, form]) => (
//                             <div key={caseType} className="flex items-center space-x-2">
//                               <span className="font-semibold text-white capitalize">{caseType}:</span>
//                               <span className="text-gray-300">{form}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Types of Nouns */}
//           {currentCategory.types && currentCategory.types.length > 0 && (
//             <div className="mt-6">
//               <h4 className="text-lg font-semibold text-indigo-600">Types of Nouns</h4>
//               <div className="space-y-6 mt-4">
//                 {currentCategory.types.map((type, idx) => (
//                   <div key={idx} className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-lg rounded-lg p-6">
//                     <h5 className="text-xl font-semibold text-white">{type.type}</h5>
//                     <p className="mt-2 text-sm text-gray-200">{type.description}</p>
//                     <p className="mt-4 text-sm text-gray-200">Examples:</p>
//                     <ul className="space-y-2 mt-2">
//                       {type.examples.map((example, i) => (
//                         <li key={i} className="text-sm text-gray-300">
//                           - {example}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-8 flex justify-between">
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handlePrevious}
//           disabled={currentPage === 0}
//         >
//           Previous
//         </button>
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handleNext}
//           disabled={currentPage === lessonData.categories.length - 1}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }




















// "use client";
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // Import the router for back navigation
// import Link from 'next/link';
// import { FaArrowLeft } from 'react-icons/fa';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [currentPage, setCurrentPage] = useState(0); // Track the current page
//   const router = useRouter(); // Initialize the router

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   const handleNext = () => {
//     if (currentPage < lessonData.categories.length - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleFinish = () => {
//     // Navigate to the lesson selection page when Finish is clicked
//     router.push('/dashboard/learning/lesson/lesson_two');
//   };

//   if (!lessonData) return <div>Loading...</div>;

//   const currentCategory = lessonData.categories[currentPage];
//   const isLastPage = currentPage === lessonData.categories.length - 1;

//   return (
//     <div className="p-8 min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">
//       {/* Header and Back Button */}
//       <div className="flex justify-between items-center mb-8">
//         <Link href="/dashboard/learning/lesson/lesson_two" passHref>
//           <button
//             className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg shadow-purple-500/50"
//           >
//             <FaArrowLeft className="text-lg" />
//           </button>
//         </Link>
//         <h1 className="text-4xl font-extrabold text-white mx-auto">{lessonData.lesson}</h1>
//       </div>

//       {/* Lesson Description */}
//       <p className="mt-4 text-xl text-gray-200 text-center">{lessonData.definition}</p>

//       {/* Display One Category Data at a Time */}
//       <div className="space-y-6">
//         <div className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-xl rounded-lg p-6">
//           <h3 className="text-3xl font-extrabold text-white">{currentCategory.category}</h3>
//           <p className="mt-4 text-lg text-gray-200">{currentCategory.description}</p>

//           {/* Display Genders */}
//           {currentCategory.genders && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.genders).map(([gender, value]) => (
//                 <div key={gender} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{gender}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Numbers */}
//           {currentCategory.numbers && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.numbers).map(([number, value]) => (
//                 <div key={number} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{number}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Declension Cases */}
//           {currentCategory.vibhaktis && currentCategory.vibhaktis.length > 0 && (
//             <div className="mt-6">
//               <h4 className="text-lg font-semibold text-indigo-600">Cases (विभक्ति)</h4>
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
//                 {currentCategory.vibhaktis.map((vibhakti, idx) => (
//                   <li key={idx} className="flex flex-col space-y-1">
//                     <span className="font-medium text-white">{vibhakti.case}</span>
//                     <span className="text-sm text-gray-400">{vibhakti.function}</span>
//                     <span className="italic text-sm text-gray-300">{vibhakti.example}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Display Declension Examples */}
//           {currentCategory.examples && currentCategory.examples.length > 0 && (
//             <div className="mt-6">
//               <h4 className="text-lg font-semibold text-indigo-600">Declension Examples</h4>
//               <div className="space-y-6 mt-4">
//                 {currentCategory.examples.map((example, idx) => (
//                   <div key={idx} className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-md rounded-lg p-6">
//                     <h5 className="text-xl font-semibold text-white">{example.gender} - {example.noun}</h5>
//                     <div className="mt-4 space-y-6">
//                       {/* Singular Declension */}
//                       <div>
//                         <h6 className="text-lg font-medium text-indigo-600">Singular</h6>
//                         <div className="grid grid-cols-2 gap-4 mt-2">
//                           {Object.entries(example.declension.singular).map(([caseType, form]) => (
//                             <div key={caseType} className="flex items-center space-x-2">
//                               <span className="font-semibold text-white capitalize">{caseType}:</span>
//                               <span className="text-gray-300">{form}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Dual Declension */}
//                       <div>
//                         <h6 className="text-lg font-medium text-indigo-600">Dual</h6>
//                         <div className="grid grid-cols-2 gap-4 mt-2">
//                           {Object.entries(example.declension.dual).map(([caseType, form]) => (
//                             <div key={caseType} className="flex items-center space-x-2">
//                               <span className="font-semibold text-white capitalize">{caseType}:</span>
//                               <span className="text-gray-300">{form}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Plural Declension */}
//                       <div>
//                         <h6 className="text-lg font-medium text-indigo-600">Plural</h6>
//                         <div className="grid grid-cols-2 gap-4 mt-2">
//                           {Object.entries(example.declension.plural).map(([caseType, form]) => (
//                             <div key={caseType} className="flex items-center space-x-2">
//                               <span className="font-semibold text-white capitalize">{caseType}:</span>
//                               <span className="text-gray-300">{form}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Types of Nouns */}
//           {currentCategory.types && currentCategory.types.length > 0 && (
//             <div className="mt-6">
//               <h4 className="text-lg font-semibold text-indigo-600">Types of Nouns</h4>
//               <div className="space-y-6 mt-4">
//                 {currentCategory.types.map((type, idx) => (
//                   <div key={idx} className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-lg rounded-lg p-6">
//                     <h5 className="text-xl font-semibold text-white">{type.type}</h5>
//                     <p className="mt-2 text-sm text-gray-200">{type.description}</p>
//                     <p className="mt-4 text-sm text-gray-200">Examples:</p>
//                     <ul className="space-y-2 mt-2">
//                       {type.examples.map((example, i) => (
//                         <li key={i} className="text-sm text-gray-300">
//                           - {example}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-8 flex justify-between">
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handlePrevious}
//           disabled={currentPage === 0}
//         >
//           Previous
//         </button>

//         {isLastPage ? (
//           <button
//             className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
//             onClick={handleFinish}
//           >
//             Finish
//           </button>
//         ) : (
//           <button
//             className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//             onClick={handleNext}
//             disabled={currentPage === lessonData.categories.length - 1}
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }




























// "use client";
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // Import the router for back navigation
// import Link from 'next/link';
// import { FaArrowLeft } from 'react-icons/fa';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [currentPage, setCurrentPage] = useState(0); // Track the current page
//   const [selectedAnswer, setSelectedAnswer] = useState(null); // Store selected quiz answer
//   const [highlightedText, setHighlightedText] = useState(""); // Store highlighted text
//   const router = useRouter(); // Initialize the router

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   const handleNext = () => {
//     if (currentPage < lessonData.categories.length - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleFinish = () => {
//     // Navigate to the lesson selection page when Finish is clicked
//     router.push('/dashboard/learning/lesson/lesson_two');
//   };

//   const handleQuizAnswer = (answer) => {
//     setSelectedAnswer(answer);
//   };

//   const handleTextHighlight = (text) => {
//     setHighlightedText(text);
//   };

//   if (!lessonData) return <div>Loading...</div>;

//   const currentCategory = lessonData.categories[currentPage];
//   const isLastPage = currentPage === lessonData.categories.length - 1;

//   return (
//     <div className="p-8 min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">
//       {/* Header and Back Button */}
//       <div className="flex justify-between items-center mb-8">
//         <Link href="/dashboard/learning/lesson/lesson_two" passHref>
//           <button
//             className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg shadow-purple-500/50"
//           >
//             <FaArrowLeft className="text-lg" />
//           </button>
//         </Link>
//         <h1 className="text-4xl font-extrabold text-white mx-auto">{lessonData.lesson}</h1>
//       </div>

//       {/* Lesson Description */}
//       <p className="mt-4 text-xl text-gray-200 text-center">{lessonData.definition}</p>

//       {/* Display One Category Data at a Time */}
//       <div className="space-y-6">
//         <div className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-xl rounded-lg p-6">
//           <h3 className="text-3xl font-extrabold text-white">{currentCategory.category}</h3>
//           <p className="mt-4 text-lg text-gray-200">{currentCategory.description}</p>

//           {/* Display Genders */}
//           {currentCategory.genders && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.genders).map(([gender, value]) => (
//                 <div key={gender} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{gender}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Numbers */}
//           {currentCategory.numbers && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.numbers).map(([number, value]) => (
//                 <div key={number} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{number}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Interactive Quiz */}
//           <div className="mt-6">
//             <h4 className="text-lg font-semibold text-indigo-600">Test Your Knowledge</h4>
//             <div className="space-y-4 mt-4">
//               <p className="text-lg text-white">What is the correct gender for "Book"?</p>
//               <div className="flex space-x-4">
//                 <button
//                   className={`bg-indigo-600 text-white px-6 py-2 rounded-lg ${selectedAnswer === 'Masculine' ? 'bg-green-600' : ''}`}
//                   onClick={() => handleQuizAnswer('Masculine')}
//                 >
//                   Masculine
//                 </button>
//                 <button
//                   className={`bg-indigo-600 text-white px-6 py-2 rounded-lg ${selectedAnswer === 'Feminine' ? 'bg-green-600' : ''}`}
//                   onClick={() => handleQuizAnswer('Feminine')}
//                 >
//                   Feminine
//                 </button>
//                 <button
//                   className={`bg-indigo-600 text-white px-6 py-2 rounded-lg ${selectedAnswer === 'Neuter' ? 'bg-green-600' : ''}`}
//                   onClick={() => handleQuizAnswer('Neuter')}
//                 >
//                   Neuter
//                 </button>
//               </div>
//               {selectedAnswer && (
//                 <p className="mt-2 text-lg text-gray-200">
//                   You selected: <span className="font-bold text-indigo-600">{selectedAnswer}</span>
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Display Declension Cases */}
//           {currentCategory.vibhaktis && currentCategory.vibhaktis.length > 0 && (
//             <div className="mt-6">
//               <h4 className="text-lg font-semibold text-indigo-600">Cases (विभक्ति)</h4>
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
//                 {currentCategory.vibhaktis.map((vibhakti, idx) => (
//                   <li key={idx} className="flex flex-col space-y-1">
//                     <span className="font-medium text-white">{vibhakti.case}</span>
//                     <span className="text-sm text-gray-400">{vibhakti.function}</span>
//                     <span className="italic text-sm text-gray-300">{vibhakti.example}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Highlight Text Section */}
//           <div className="mt-6">
//             <h4 className="text-lg font-semibold text-indigo-600">Highlight Important Text</h4>
//             <p
//               className="text-gray-300 cursor-pointer"
//               onClick={() => handleTextHighlight('This is important text')}
//             >
//               Click to highlight this text.
//             </p>
//             {highlightedText && (
//               <div className="mt-4 text-lg text-gray-200">
//                 <span className="font-semibold text-indigo-600">Highlighted:</span> {highlightedText}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-8 flex justify-between">
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handlePrevious}
//           disabled={currentPage === 0}
//         >
//           Previous
//         </button>

//         {isLastPage ? (
//           <button
//             className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
//             onClick={handleFinish}
//           >
//             Finish
//           </button>
//         ) : (
//           <button
//             className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//             onClick={handleNext}
//             disabled={currentPage === lessonData.categories.length - 1}
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }



































// "use client";
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // Import the router for back navigation
// import Link from 'next/link';
// import { FaArrowLeft } from 'react-icons/fa';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [currentPage, setCurrentPage] = useState(0); // Track the current page
//   const [selectedAnswer, setSelectedAnswer] = useState(null); // Store selected quiz answer
//   const [quizFeedback, setQuizFeedback] = useState(""); // Store feedback message
//   const [nextEnabled, setNextEnabled] = useState(false); // Track if Next button should be enabled
//   const [highlightedText, setHighlightedText] = useState(""); // Store highlighted text
//   const router = useRouter(); // Initialize the router

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   const handleNext = () => {
//     if (nextEnabled) {
//       if (currentPage < lessonData.categories.length - 1) {
//         setCurrentPage(currentPage + 1);
//       }
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleFinish = () => {
//     // Navigate to the lesson selection page when Finish is clicked
//     router.push('/dashboard/learning/lesson/lesson_two');
//   };

//   const handleQuizAnswer = (answer) => {
//     setSelectedAnswer(answer);

//     // Check if the answer is correct
//     const correctAnswer = "Masculine"; // Replace with the actual correct answer logic
//     if (answer === correctAnswer) {
//       setQuizFeedback("Correct! Well done.");
//       setNextEnabled(true); // Enable the next button
//     } else {
//       setQuizFeedback("Incorrect. Please try again.");
//       setNextEnabled(false); // Disable the next button
//     }
//   };

//   const handleTextHighlight = (text) => {
//     setHighlightedText(text);
//   };

//   if (!lessonData) return <div>Loading...</div>;

//   const currentCategory = lessonData.categories[currentPage];
//   const isLastPage = currentPage === lessonData.categories.length - 1;

//   return (
//     <div className="p-8 min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">
//       {/* Header and Back Button */}
//       <div className="flex justify-between items-center mb-8">
//         <Link href="/dashboard/learning/lesson/lesson_two" passHref>
//           <button
//             className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg shadow-purple-500/50"
//           >
//             <FaArrowLeft className="text-lg" />
//           </button>
//         </Link>
//         <h1 className="text-4xl font-extrabold text-white mx-auto">{lessonData.lesson}</h1>
//       </div>

//       {/* Lesson Description */}
//       <p className="mt-4 text-xl text-gray-200 text-center">{lessonData.definition}</p>

//       {/* Display One Category Data at a Time */}
//       <div className="space-y-6">
//         <div className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-xl rounded-lg p-6">
//           <h3 className="text-3xl font-extrabold text-white">{currentCategory.category}</h3>
//           <p className="mt-4 text-lg text-gray-200">{currentCategory.description}</p>

//           {/* Display Genders */}
//           {currentCategory.genders && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.genders).map(([gender, value]) => (
//                 <div key={gender} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{gender}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Numbers */}
//           {currentCategory.numbers && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.numbers).map(([number, value]) => (
//                 <div key={number} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{number}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Interactive Quiz (Centered) */}
//           <div className="mt-6 flex flex-col items-center">
//             <h4 className="text-lg font-semibold text-indigo-600 text-center">Test Your Knowledge</h4>
//             <p className="text-lg text-white text-center">What is the correct gender for "Book"?</p>
//             <div className="flex space-x-4 mt-4">
//               <button
//                 className={`bg-indigo-600 text-white px-6 py-2 rounded-lg ${selectedAnswer === 'Masculine' ? 'bg-green-600' : selectedAnswer === 'Feminine' ? 'bg-red-600' : ''}`}
//                 onClick={() => handleQuizAnswer('Masculine')}
//               >
//                 Masculine
//               </button>
//               <button
//                 className={`bg-indigo-600 text-white px-6 py-2 rounded-lg ${selectedAnswer === 'Feminine' ? 'bg-green-600' : selectedAnswer === 'Masculine' ? 'bg-red-600' : ''}`}
//                 onClick={() => handleQuizAnswer('Feminine')}
//               >
//                 Feminine
//               </button>
//               <button
//                 className={`bg-indigo-600 text-white px-6 py-2 rounded-lg ${selectedAnswer === 'Neuter' ? 'bg-green-600' : selectedAnswer === 'Masculine' ? 'bg-red-600' : ''}`}
//                 onClick={() => handleQuizAnswer('Neuter')}
//               >
//                 Neuter
//               </button>
//             </div>
//             {quizFeedback && (
//               <p className="mt-4 text-lg text-gray-200 text-center">
//                 {quizFeedback}
//               </p>
//             )}
//           </div>

//           {/* Highlight Text Section */}
//           <div className="mt-6">
//             <h4 className="text-lg font-semibold text-indigo-600">Highlight Important Text</h4>
//             <p
//               className="text-gray-300 cursor-pointer"
//               onClick={() => handleTextHighlight('This is important text')}
//             >
//               Click to highlight this text.
//             </p>
//             {highlightedText && (
//               <div className="mt-4 text-lg text-gray-200">
//                 <span className="font-semibold text-indigo-600">Highlighted:</span> {highlightedText}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-8 flex justify-between">
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handlePrevious}
//           disabled={currentPage === 0}
//         >
//           Previous
//         </button>

//         {isLastPage ? (
//           <button
//             className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
//             onClick={handleFinish}
//           >
//             Finish
//           </button>
//         ) : (
//           <button
//             className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//             onClick={handleNext}
//             disabled={!nextEnabled}
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

























// "use client";
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // Import the router for back navigation
// import Link from 'next/link';
// import { FaArrowLeft } from 'react-icons/fa';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [currentPage, setCurrentPage] = useState(0); // Track the current page
//   const [selectedAnswer, setSelectedAnswer] = useState(null); // Store selected quiz answer
//   const [quizFeedback, setQuizFeedback] = useState(""); // Store feedback message
//   const [nextEnabled, setNextEnabled] = useState(false); // Track if Next button should be enabled
//   const router = useRouter(); // Initialize the router

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   const handleNext = () => {
//     if (nextEnabled) {
//       if (currentPage < lessonData.categories.length - 1) {
//         setCurrentPage(currentPage + 1);
//       }
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleFinish = () => {
//     // Navigate to the lesson selection page when Finish is clicked
//     router.push('/dashboard/learning/lesson/lesson_two');
//   };

//   const handleQuizAnswer = (answer, correctAnswer) => {
//     setSelectedAnswer(answer);

//     // Check if the answer is correct
//     if (answer === correctAnswer) {
//       setQuizFeedback("Correct! Well done.");
//       setNextEnabled(true); // Enable the next button
//     } else {
//       setQuizFeedback("Incorrect. Please try again.");
//       setNextEnabled(false); // Disable the next button
//     }
//   };

//   if (!lessonData) return <div>Loading...</div>;

//   const currentCategory = lessonData.categories[currentPage];
//   const isLastPage = currentPage === lessonData.categories.length - 1;

//   // Generate dynamic quiz question based on category data
//   let quizQuestion = "";
//   let correctAnswer = "";
//   let answerOptions = [];

//   // Dynamically generate question based on category type (gender, numbers, etc.)
//   if (currentCategory.genders) {
//     quizQuestion = `What is the correct gender for the word "${currentCategory.exampleWord}"?`;
//     correctAnswer = currentCategory.genders.masculine || currentCategory.genders.feminine || currentCategory.genders.neuter;
//     answerOptions = ['Masculine', 'Feminine', 'Neuter'];
//   }

//   if (currentCategory.numbers) {
//     quizQuestion = `What is the correct number for the word "${currentCategory.exampleWord}"?`;
//     correctAnswer = currentCategory.numbers.singular || currentCategory.numbers.plural;
//     answerOptions = ['Singular', 'Plural'];
//   }

//   // If you have more categories, like noun types or adjectives, you can handle them similarly

//   return (
//     <div className="p-8 min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">
//       {/* Header and Back Button */}
//       <div className="flex justify-between items-center mb-8">
//         <Link href="/dashboard/learning/lesson/lesson_two" passHref>
//           <button
//             className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg shadow-purple-500/50"
//           >
//             <FaArrowLeft className="text-lg" />
//           </button>
//         </Link>
//         <h1 className="text-4xl font-extrabold text-white mx-auto">{lessonData.lesson}</h1>
//       </div>

//       {/* Lesson Description */}
//       <p className="mt-4 text-xl text-gray-200 text-center">{lessonData.definition}</p>

//       {/* Display One Category Data at a Time */}
//       <div className="space-y-6">
//         <div className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-xl rounded-lg p-6">
//           <h3 className="text-3xl font-extrabold text-white">{currentCategory.category}</h3>
//           <p className="mt-4 text-lg text-gray-200">{currentCategory.description}</p>

//           {/* Display Genders */}
//           {currentCategory.genders && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.genders).map(([gender, value]) => (
//                 <div key={gender} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{gender}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Numbers */}
//           {currentCategory.numbers && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.numbers).map(([number, value]) => (
//                 <div key={number} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{number}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Interactive Quiz (Centered) */}
//           <div className="mt-6 flex flex-col items-center">
//             <h4 className="text-lg font-semibold text-indigo-600 text-center">Test Your Knowledge</h4>
//             <p className="text-lg text-white text-center">{quizQuestion}</p>
//             <div className="flex space-x-4 mt-4">
//               {answerOptions.map((option) => (
//                 <button
//                   key={option}
//                   className={`bg-indigo-600 text-white px-6 py-2 rounded-lg ${selectedAnswer === option ? 'bg-green-600' : selectedAnswer === correctAnswer && option !== correctAnswer ? 'bg-red-600' : ''}`}
//                   onClick={() => handleQuizAnswer(option, correctAnswer)}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//             {quizFeedback && (
//               <p className="mt-4 text-lg text-gray-200 text-center">
//                 {quizFeedback}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-8 flex justify-between">
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handlePrevious}
//           disabled={currentPage === 0}
//         >
//           Previous
//         </button>

//         {isLastPage ? (
//           <button
//             className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
//             onClick={handleFinish}
//           >
//             Finish
//           </button>
//         ) : (
//           <button
//             className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//             onClick={handleNext}
//             disabled={!nextEnabled}
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
































// "use client";
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // Import the router for back navigation
// import Link from 'next/link';
// import { FaArrowLeft } from 'react-icons/fa';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [quizData, setQuizData] = useState(null); // Store the quiz data
//   const [currentPage, setCurrentPage] = useState(0); // Track the current page
//   const [selectedAnswer, setSelectedAnswer] = useState(null); // Store selected quiz answer
//   const [quizFeedback, setQuizFeedback] = useState(""); // Store feedback message
//   const [nextEnabled, setNextEnabled] = useState(false); // Track if Next button should be enabled
//   const router = useRouter(); // Initialize the router

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   // Fetch quiz questions dynamically based on the lessonId
//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchQuizData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/quiz/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Quiz data not found');
//         }
//         const data = await res.json();
//         setQuizData(data.quiz_questions); // Store quiz questions
//       } catch (error) {
//         console.error('Error fetching quiz data:', error);
//       }
//     };

//     fetchQuizData();
//   }, [lessonId]);

//   const handleNext = () => {
//     if (nextEnabled) {
//       if (currentPage < lessonData.categories.length - 1) {
//         setCurrentPage(currentPage + 1);
//       }
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleFinish = () => {
//     // Navigate to the lesson selection page when Finish is clicked
//     router.push('/dashboard/learning/lesson/lesson_two');
//   };

//   const handleQuizAnswer = (answer, correctAnswer) => {
//     setSelectedAnswer(answer);

//     // Check if the answer is correct
//     if (answer === correctAnswer) {
//       setQuizFeedback("Correct! Well done.");
//       setNextEnabled(true); // Enable the next button
//     } else {
//       setQuizFeedback("Incorrect. Please try again.");
//       setNextEnabled(false); // Disable the next button
//     }
//   };

//   if (!lessonData || !quizData) return <div>Loading...</div>;

//   const currentCategory = lessonData.categories[currentPage];
//   const isLastPage = currentPage === lessonData.categories.length - 1;

//   // Filter quiz questions based on the category of the current page
//   const filteredQuizQuestions = quizData.filter(
//     (question) => question.category === currentCategory.category
//   );

//   return (
//     <div className="p-8 min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">
//       {/* Header and Back Button */}
//       <div className="flex justify-between items-center mb-8">
//         <Link href="/dashboard/learning/lesson/lesson_two" passHref>
//           <button
//             className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg shadow-purple-500/50"
//           >
//             <FaArrowLeft className="text-lg" />
//           </button>
//         </Link>
//         <h1 className="text-4xl font-extrabold text-white mx-auto">{lessonData.lesson}</h1>
//       </div>

//       {/* Lesson Description */}
//       <p className="mt-4 text-xl text-gray-200 text-center">{lessonData.definition}</p>

//       {/* Display One Category Data at a Time */}
//       <div className="space-y-6">
//         <div className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-xl rounded-lg p-6">
//           <h3 className="text-3xl font-extrabold text-white">{currentCategory.category}</h3>
//           <p className="mt-4 text-lg text-gray-200">{currentCategory.description}</p>

//           {/* Display Genders */}
//           {currentCategory.genders && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.genders).map(([gender, value]) => (
//                 <div key={gender} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{gender}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Numbers */}
//           {currentCategory.numbers && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.numbers).map(([number, value]) => (
//                 <div key={number} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{number}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Interactive Quiz (Centered) */}
//           <div className="mt-6 flex flex-col items-center">
//             <h4 className="text-lg font-semibold text-indigo-600 text-center">Test Your Knowledge</h4>

//             {/* Display quiz questions based on the category */}
//             {filteredQuizQuestions.map((quiz, index) => (
//               <div key={index} className="mt-4">
//                 <p className="text-lg text-white text-center">{quiz.question}</p>
//                 <div className="flex space-x-4 mt-4">
//                   {quiz.options.map((option) => (
//                     <button
//                       key={option}
//                       className={`bg-indigo-600 text-white px-6 py-2 rounded-lg ${selectedAnswer === option ? 'bg-green-600' : selectedAnswer === quiz.correct_answer && option !== quiz.correct_answer ? 'bg-red-600' : ''}`}
//                       onClick={() => handleQuizAnswer(option, quiz.correct_answer)}
//                     >
//                       {option}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             ))}

//             {quizFeedback && (
//               <p className="mt-4 text-lg text-gray-200 text-center">
//                 {quizFeedback}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-8 flex justify-between">
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handlePrevious}
//           disabled={currentPage === 0}
//         >
//           Previous
//         </button>

//         {isLastPage ? (
//           <button
//             className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
//             onClick={handleFinish}
//           >
//             Finish
//           </button>
//         ) : (
//           <button
//             className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//             onClick={handleNext}
//             disabled={!nextEnabled}
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
























// "use client";
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // Import the router for back navigation
// import Link from 'next/link';
// import { FaArrowLeft } from 'react-icons/fa';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [quizData, setQuizData] = useState(null); // Store the quiz data
//   const [currentPage, setCurrentPage] = useState(0); // Track the current page
//   const [selectedAnswer, setSelectedAnswer] = useState(null); // Store selected quiz answer
//   const [quizFeedback, setQuizFeedback] = useState(""); // Store feedback message
//   const [nextEnabled, setNextEnabled] = useState(false); // Track if Next button should be enabled
//   const router = useRouter(); // Initialize the router

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   // Fetch quiz questions dynamically based on the lessonId
//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchQuizData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/quiz/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Quiz data not found');
//         }
//         const data = await res.json();
//         setQuizData(data.quiz_questions); // Store quiz questions
//       } catch (error) {
//         console.error('Error fetching quiz data:', error);
//       }
//     };

//     fetchQuizData();
//   }, [lessonId]);

//   const handleNext = () => {
//     if (nextEnabled) {
//       if (currentPage < lessonData.categories.length - 1) {
//         setCurrentPage(currentPage + 1);
//         setSelectedAnswer(null); // Reset the selected answer for the next question
//         setQuizFeedback(""); // Reset feedback for the next question
//       }
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleFinish = () => {
//     // Navigate to the lesson selection page when Finish is clicked
//     router.push('/dashboard/learning/lesson/lesson_two');
//   };

//   const handleQuizAnswer = (answer, correctAnswer) => {
//     setSelectedAnswer(answer);

//     // Check if the answer is correct
//     if (answer === correctAnswer) {
//       setQuizFeedback("Correct! Well done.");
//       setNextEnabled(true); // Enable the next button if answer is correct
//     } else {
//       setQuizFeedback("Incorrect. Please try again.");
//       setNextEnabled(false); // Disable the next button if answer is incorrect
//     }
//   };

//   if (!lessonData || !quizData) return <div>Loading...</div>;

//   const currentCategory = lessonData.categories[currentPage];
//   const isLastPage = currentPage === lessonData.categories.length - 1;

//   // Filter quiz questions based on the category of the current page
//   const filteredQuizQuestions = quizData.filter(
//     (question) => question.category === currentCategory.category
//   );

//   return (
//     <div className="p-8 min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">
//       {/* Header and Back Button */}
//       <div className="flex justify-between items-center mb-8">
//         <Link href="/dashboard/learning/lesson/lesson_two" passHref>
//           <button
//             className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg shadow-purple-500/50"
//           >
//             <FaArrowLeft className="text-lg" />
//           </button>
//         </Link>
//         <h1 className="text-4xl font-extrabold text-white mx-auto">{lessonData.lesson}</h1>
//       </div>

//       {/* Lesson Description */}
//       <p className="mt-4 text-xl text-gray-200 text-center">{lessonData.definition}</p>

//       {/* Display One Category Data at a Time */}
//       <div className="space-y-6">
//         <div className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-xl rounded-lg p-6">
//           <h3 className="text-3xl font-extrabold text-white">{currentCategory.category}</h3>
//           <p className="mt-4 text-lg text-gray-200">{currentCategory.description}</p>

//           {/* Display Genders */}
//           {currentCategory.genders && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.genders).map(([gender, value]) => (
//                 <div key={gender} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{gender}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Numbers */}
//           {currentCategory.numbers && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.numbers).map(([number, value]) => (
//                 <div key={number} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{number}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Interactive Quiz (Centered) */}
//           <div className="mt-6 flex flex-col items-center">
//             <h4 className="text-lg font-semibold text-indigo-600 text-center">Test Your Knowledge</h4>

//             {/* Display quiz questions based on the category */}
//             {filteredQuizQuestions.map((quiz, index) => (
//               <div key={index} className="mt-4">
//                 <p className="text-lg text-white text-center">{quiz.question.english}</p>
//                 <p className="text-md text-gray-200 text-center mt-2">{quiz.question.hindi}</p>
//                 <div className="flex space-x-4 mt-4 justify-center">
//                   {quiz.options.map((option) => (
//                     <button
//                       key={option}
//                       className={`bg-indigo-600 text-white px-6 py-2 rounded-lg ${selectedAnswer === option ? 'bg-green-600' : selectedAnswer === quiz.correct_answer && option !== quiz.correct_answer ? 'bg-red-600' : ''}`}
//                       onClick={() => handleQuizAnswer(option, quiz.correct_answer)}
//                     >
//                       {option}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             ))}

//             {quizFeedback && (
//               <p className="mt-4 text-lg text-gray-200 text-center">
//                 {quizFeedback}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-8 flex justify-between">
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handlePrevious}
//           disabled={currentPage === 0}
//         >
//           Previous
//         </button>

//         {isLastPage ? (
//           <button
//             className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
//             onClick={handleFinish}
//           >
//             Finish
//           </button>
//         ) : (
//           <button
//             className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//             onClick={handleNext}
//             disabled={!nextEnabled}
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }





















// "use client";
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // Import the router for back navigation
// import Link from 'next/link';
// import { FaArrowLeft } from 'react-icons/fa';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [quizData, setQuizData] = useState(null); // Store the quiz data
//   const [currentPage, setCurrentPage] = useState(0); // Track the current page
//   const [selectedAnswer, setSelectedAnswer] = useState(null); // Store selected quiz answer
//   const [quizFeedback, setQuizFeedback] = useState(""); // Store feedback message
//   const [nextEnabled, setNextEnabled] = useState(false); // Track if Next button should be enabled
//   const router = useRouter(); // Initialize the router

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   // Fetch quiz questions dynamically based on the lessonId
//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchQuizData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/quiz/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Quiz data not found');
//         }
//         const data = await res.json();
//         setQuizData(data.quiz_questions); // Store quiz questions
//       } catch (error) {
//         console.error('Error fetching quiz data:', error);
//       }
//     };

//     fetchQuizData();
//   }, [lessonId]);

//   const handleNext = () => {
//     if (nextEnabled) {
//       if (currentPage < lessonData.categories.length - 1) {
//         setCurrentPage(currentPage + 1);
//         setSelectedAnswer(null); // Reset the selected answer for the next question
//         setQuizFeedback(""); // Reset feedback for the next question
//       }
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleFinish = () => {
//     // Navigate to the lesson selection page when Finish is clicked
//     router.push('/dashboard/learning/lesson/lesson_two');
//   };

//   const handleQuizAnswer = (answer, correctAnswer) => {
//     setSelectedAnswer(answer);

//     // Check if the answer is correct
//     if (answer === correctAnswer) {
//       setQuizFeedback("Correct! Well done.");
//       setNextEnabled(true); // Enable the next button if answer is correct
//     } else {
//       setQuizFeedback("Incorrect. Please try again.");
//       setNextEnabled(false); // Disable the next button if answer is incorrect
//     }
//   };

//   if (!lessonData || !quizData) return <div>Loading...</div>;

//   const currentCategory = lessonData.categories[currentPage];
//   const isLastPage = currentPage === lessonData.categories.length - 1;

//   // Filter quiz questions based on the category of the current page
//   const filteredQuizQuestions = quizData.filter(
//     (question) => question.category === currentCategory.category
//   );

//   return (
//     <div className="p-8 min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">
//       {/* Header and Back Button */}
//       <div className="flex justify-between items-center mb-8">
//         <Link href="/dashboard/learning/lesson/lesson_two" passHref>
//           <button
//             className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg shadow-purple-500/50"
//           >
//             <FaArrowLeft className="text-lg" />
//           </button>
//         </Link>
//         <h1 className="text-4xl font-extrabold text-white mx-auto">{lessonData.lesson}</h1>
//       </div>

//       {/* Lesson Description */}
//       <p className="mt-4 text-xl text-gray-200 text-center">{lessonData.definition}</p>

//       {/* Display One Category Data at a Time */}
//       <div className="space-y-6">
//         <div className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-xl rounded-lg p-6">
//           <h3 className="text-3xl font-extrabold text-white">{currentCategory.category}</h3>
//           <p className="mt-4 text-lg text-gray-200">{currentCategory.description}</p>

//           {/* Display Genders */}
//           {currentCategory.genders && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.genders).map(([gender, value]) => (
//                 <div key={gender} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{gender}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Numbers */}
//           {currentCategory.numbers && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.numbers).map(([number, value]) => (
//                 <div key={number} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{number}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Interactive Quiz in a Card with Animation */}
//           <div className="mt-6 flex flex-col items-center">
//             <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-lg shadow-lg p-6 w-full max-w-lg transform transition-all duration-500 ease-in-out hover:scale-105">
//               <h4 className="text-lg font-semibold text-indigo-100 text-center mb-4">Test Your Knowledge</h4>

//               {/* Display quiz questions based on the category */}
//               {filteredQuizQuestions.map((quiz, index) => (
//                 <div key={index} className="mt-4">
//                   <p className="text-lg text-white text-center">{quiz.question.english}</p>
//                   <p className="text-md text-gray-200 text-center mt-2">{quiz.question.hindi}</p>
//                   <div className="flex space-x-4 mt-4 justify-center">
//                     {quiz.options.map((option) => (
//                       <button
//                         key={option}
//                         className={`bg-indigo-600 text-white px-6 py-2 rounded-lg ${selectedAnswer === option ? 'bg-green-600' : selectedAnswer === quiz.correct_answer && option !== quiz.correct_answer ? 'bg-red-600' : ''}`}
//                         onClick={() => handleQuizAnswer(option, quiz.correct_answer)}
//                       >
//                         {option}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               ))}

//               {quizFeedback && (
//                 <p className="mt-4 text-lg text-gray-200 text-center">
//                   {quizFeedback}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-8 flex justify-between">
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handlePrevious}
//           disabled={currentPage === 0}
//         >
//           Previous
//         </button>

//         {isLastPage ? (
//           <button
//             className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
//             onClick={handleFinish}
//           >
//             Finish
//           </button>
//         ) : (
//           <button
//             className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//             onClick={handleNext}
//             disabled={!nextEnabled}
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

































// "use client";
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // Import the router for back navigation
// import Link from 'next/link';
// import { FaArrowLeft } from 'react-icons/fa';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [quizData, setQuizData] = useState(null); // Store the quiz data
//   const [currentPage, setCurrentPage] = useState(0); // Track the current page
//   const [selectedAnswers, setSelectedAnswers] = useState([]); // Store selected answers for all questions
//   const [quizFeedback, setQuizFeedback] = useState(""); // Store feedback message
//   const [nextEnabled, setNextEnabled] = useState(false); // Track if Next button should be enabled
//   const router = useRouter(); // Initialize the router

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   // Fetch quiz questions dynamically based on the lessonId
//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchQuizData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/quiz/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Quiz data not found');
//         }
//         const data = await res.json();
//         setQuizData(data.quiz_questions); // Store quiz questions
//       } catch (error) {
//         console.error('Error fetching quiz data:', error);
//       }
//     };

//     fetchQuizData();
//   }, [lessonId]);

//   const handleNext = () => {
//     if (nextEnabled) {
//       if (currentPage < lessonData.categories.length - 1) {
//         setCurrentPage(currentPage + 1);
//         setSelectedAnswers([]); // Reset the selected answers for the next category
//         setQuizFeedback(""); // Reset feedback for the next category
//       }
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleFinish = () => {
//     // Navigate to the lesson selection page when Finish is clicked
//     router.push('/dashboard/learning/lesson/lesson_two');
//   };

//   const handleQuizAnswer = (answer, correctAnswer, index) => {
//     const updatedAnswers = [...selectedAnswers];
//     updatedAnswers[index] = answer; // Update the answer for the specific question
//     setSelectedAnswers(updatedAnswers);

//     // Check if the current question is correct
//     if (answer === correctAnswer) {
//       setQuizFeedback("Correct! Well done.");
//     } else {
//       setQuizFeedback("Incorrect. Please try again.");
//     }

//     // Check if all questions in the category are answered correctly
//     const currentCategoryQuestions = filteredQuizQuestions;
//     const allCorrect = currentCategoryQuestions.every((quiz, i) => selectedAnswers[i] === quiz.correct_answer);

//     setNextEnabled(allCorrect); // Enable "Next" button only if all answers are correct
//   };

//   if (!lessonData || !quizData) return <div>Loading...</div>;

//   const currentCategory = lessonData.categories[currentPage];
//   const isLastPage = currentPage === lessonData.categories.length - 1;

//   // Filter quiz questions based on the category of the current page
//   const filteredQuizQuestions = quizData.filter(
//     (question) => question.category === currentCategory.category
//   );

//   return (
//     <div className="p-8 min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">
//       {/* Header and Back Button */}
//       <div className="flex justify-between items-center mb-8">
//         <Link href="/dashboard/learning/lesson/lesson_two" passHref>
//           <button
//             className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg shadow-purple-500/50"
//           >
//             <FaArrowLeft className="text-lg" />
//           </button>
//         </Link>
//         <h1 className="text-4xl font-extrabold text-white mx-auto">{lessonData.lesson}</h1>
//       </div>

//       {/* Lesson Description */}
//       <p className="mt-4 text-xl text-gray-200 text-center">{lessonData.definition}</p>

//       {/* Display One Category Data at a Time */}
//       <div className="space-y-6">
//         <div className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-xl rounded-lg p-6">
//           <h3 className="text-3xl font-extrabold text-white">{currentCategory.category}</h3>
//           <p className="mt-4 text-lg text-gray-200">{currentCategory.description}</p>

//           {/* Display Genders */}
//           {currentCategory.genders && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.genders).map(([gender, value]) => (
//                 <div key={gender} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{gender}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Numbers */}
//           {currentCategory.numbers && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.numbers).map(([number, value]) => (
//                 <div key={number} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{number}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Interactive Quiz in a Card with Animation */}
//           <div className="mt-6 flex flex-col items-center">
//             <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-lg shadow-lg p-6 w-full max-w-lg transform transition-all duration-500 ease-in-out hover:scale-105">
//               <h4 className="text-lg font-semibold text-indigo-100 text-center mb-4">Test Your Knowledge</h4>

//               {/* Display quiz questions based on the category */}
//               {filteredQuizQuestions.map((quiz, index) => (
//                 <div key={index} className="mt-4">
//                   <p className="text-lg text-white text-center">{quiz.question.english}</p>
//                   <p className="text-md text-gray-200 text-center mt-2">{quiz.question.hindi}</p>
//                   <div className="flex space-x-4 mt-4 justify-center">
//                     {quiz.options.map((option) => (
//                       <button
//                         key={option}
//                         className={`bg-indigo-600 text-white px-6 py-2 rounded-lg ${selectedAnswers[index] === option ? 'bg-green-600' : selectedAnswers[index] !== null && option !== quiz.correct_answer ? 'bg-red-600' : ''}`}
//                         onClick={() => handleQuizAnswer(option, quiz.correct_answer, index)}
//                       >
//                         {option}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               ))}

//               {quizFeedback && (
//                 <p className="mt-4 text-lg text-gray-200 text-center">
//                   {quizFeedback}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-8 flex justify-between">
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handlePrevious}
//           disabled={currentPage === 0}
//         >
//           Previous
//         </button>

//         {isLastPage ? (
//           <button
//             className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
//             onClick={handleFinish}
//           >
//             Finish
//           </button>
//         ) : (
//           <button
//             className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//             onClick={handleNext}
//             disabled={!nextEnabled}
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }














































// "use client";
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // Import the router for back navigation
// import Link from 'next/link';
// import { FaArrowLeft } from 'react-icons/fa';

// export default function LessonPage({ params }) {
//   const [lessonId, setLessonId] = useState(null);
//   const [lessonData, setLessonData] = useState(null);
//   const [quizData, setQuizData] = useState(null); // Store the quiz data
//   const [currentPage, setCurrentPage] = useState(0); // Track the current page
//   const [selectedAnswers, setSelectedAnswers] = useState([]); // Store selected answers for all questions
//   const [quizFeedback, setQuizFeedback] = useState(""); // Store feedback message
//   const [nextEnabled, setNextEnabled] = useState(false); // Track if Next button should be enabled
//   const router = useRouter(); // Initialize the router

//   useEffect(() => {
//     const fetchLessonId = async () => {
//       const unwrappedParams = await params;
//       setLessonId(unwrappedParams.id);
//     };
//     fetchLessonId();
//   }, [params]);

//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchLessonData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Lesson not found');
//         }
//         const data = await res.json();
//         setLessonData(data);
//       } catch (error) {
//         console.error('Error fetching lesson data:', error);
//       }
//     };

//     fetchLessonData();
//   }, [lessonId]);

//   // Fetch quiz questions dynamically based on the lessonId
//   useEffect(() => {
//     if (!lessonId) return;

//     const fetchQuizData = async () => {
//       try {
//         const res = await fetch(`/data/lesson/lesson_two/quiz/${lessonId}.json`);
//         if (!res.ok) {
//           throw new Error('Quiz data not found');
//         }
//         const data = await res.json();
//         setQuizData(data.quiz_questions); // Store quiz questions
//       } catch (error) {
//         console.error('Error fetching quiz data:', error);
//       }
//     };

//     fetchQuizData();
//   }, [lessonId]);

//   const handleNext = () => {
//     if (nextEnabled) {
//       if (currentPage < lessonData.categories.length - 1) {
//         setCurrentPage(currentPage + 1);
//         setSelectedAnswers([]); // Reset the selected answers for the next category
//         setQuizFeedback(""); // Reset feedback for the next category
//       }
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleFinish = () => {
//     // Navigate to the lesson selection page when Finish is clicked
//     router.push('/dashboard/learning/lesson/lesson_two');
//   };

//   const handleQuizAnswer = (answer, correctAnswer, index) => {
//     const updatedAnswers = [...selectedAnswers];
//     updatedAnswers[index] = answer; // Update the answer for the specific question
//     setSelectedAnswers(updatedAnswers);

//     // Check if the current question is correct
//     if (answer === correctAnswer) {
//       setQuizFeedback("Correct! Well done.");
//     } else {
//       setQuizFeedback("Incorrect. Please try again.");
//     }

//     // Check if all questions in the category are answered correctly
//     // Directly check the answers instead of using selectedAnswers
//     const currentCategoryQuestions = filteredQuizQuestions;
//     const allCorrect = currentCategoryQuestions.every((quiz, i) => updatedAnswers[i] === quiz.correct_answer);

//     setNextEnabled(allCorrect); // Enable "Next" button only if all answers are correct
//   };



//   if (!lessonData || !quizData) return <div>Loading...</div>;

//   const currentCategory = lessonData.categories[currentPage];
//   const isLastPage = currentPage === lessonData.categories.length - 1;

//   // Filter quiz questions based on the category of the current page
//   const filteredQuizQuestions = quizData.filter(
//     (question) => question.category === currentCategory.category
//   );

//   return (
//     <div className="p-8 min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">
//       {/* Header and Back Button */}
//       <div className="flex justify-between items-center mb-8">
//         <Link href="/dashboard/learning/lesson/lesson_two" passHref>
//           <button
//             className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg shadow-purple-500/50"
//           >
//             <FaArrowLeft className="text-lg" />
//           </button>
//         </Link>
//         <h1 className="text-4xl font-extrabold text-white mx-auto">{lessonData.lesson}</h1>
//       </div>

//       {/* Lesson Description */}
//       <p className="mt-4 text-xl text-gray-200 text-center">{lessonData.definition}</p>

//       {/* Display One Category Data at a Time */}
//       <div className="space-y-6">
//         <div className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-xl rounded-lg p-6">
//           <h3 className="text-3xl font-extrabold text-white">{currentCategory.category}</h3>
//           <p className="mt-4 text-lg text-gray-200">{currentCategory.description}</p>

//           {/* Display Genders */}
//           {currentCategory.genders && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.genders).map(([gender, value]) => (
//                 <div key={gender} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{gender}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Display Numbers */}
//           {currentCategory.numbers && (
//             <div className="mt-6 space-y-3">
//               {Object.entries(currentCategory.numbers).map(([number, value]) => (
//                 <div key={number} className="flex justify-between">
//                   <span className="text-sm font-medium text-white capitalize">{number}</span>
//                   <span className="text-sm text-gray-400">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Interactive Quiz in a Card with Animation */}
//           <div className="mt-6 flex flex-col items-center">
//             <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-lg shadow-lg p-6 w-full max-w-lg transform transition-all duration-500 ease-in-out hover:scale-105">
//               <h4 className="text-lg font-semibold text-indigo-100 text-center mb-4">Test Your Knowledge</h4>

//               {/* Display quiz questions based on the category */}
//               {filteredQuizQuestions.map((quiz, index) => (
//                 <div key={index} className="mt-4">
//                   <p className="text-lg text-white text-center">{quiz.question.english}</p>
//                   <p className="text-md text-gray-200 text-center mt-2">{quiz.question.hindi}</p>
//                   <div className="flex space-x-4 mt-4 justify-center">
//                     {quiz.options.map((option) => {
//                       const isSelected = selectedAnswers[index] === option;
//                       const isCorrect = option === quiz.correct_answer;
//                       const isIncorrect = isSelected && !isCorrect;

//                       return (
//                         <button
//                           key={option}
//                           className={`bg-indigo-600 text-white px-6 py-2 rounded-lg 
//                             ${isSelected && isCorrect ? 'bg-emerald-500' : ''} 
//                             ${isIncorrect ? 'bg-red-600' : ''}`}
//                           onClick={() => handleQuizAnswer(option, quiz.correct_answer, index)}
//                         >
//                           {option}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>
//               ))}

//               {quizFeedback && (
//                 <p className="mt-4 text-lg text-gray-200 text-center">
//                   {quizFeedback}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-8 flex justify-between">
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//           onClick={handlePrevious}
//           disabled={currentPage === 0}
//         >
//           Previous
//         </button>

//         {isLastPage ? (
//           <button
//             className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
//             onClick={handleFinish}
//           >
//             Finish
//           </button>
//         ) : (
//           <button
//             className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
//             onClick={handleNext}
//             disabled={!nextEnabled}
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }






















"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function LessonPage({ params }) {
  const [lessonId, setLessonId] = useState(null);
  const [lessonData, setLessonData] = useState(null);
  const [quizData, setQuizData] = useState(null); // Store the quiz data
  const [currentPage, setCurrentPage] = useState(0); // Track the current page
  const [selectedAnswers, setSelectedAnswers] = useState([]); // Store selected answers for all questions
  const [quizFeedback, setQuizFeedback] = useState(""); // Store feedback message
  const [nextEnabled, setNextEnabled] = useState(false); // Track if Next button should be enabled for current category
  const [categoryAnswersStatus, setCategoryAnswersStatus] = useState({}); // Track the correctness of answers per category
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const fetchLessonId = async () => {
      const unwrappedParams = await params;
      setLessonId(unwrappedParams.id);
    };
    fetchLessonId();
  }, [params]);

  useEffect(() => {
    if (!lessonId) return;

    const fetchLessonData = async () => {
      try {
        const res = await fetch(`/data/lesson/lesson_two/${lessonId}.json`);
        if (!res.ok) {
          throw new Error('Lesson not found');
        }
        const data = await res.json();
        setLessonData(data);
      } catch (error) {
        console.error('Error fetching lesson data:', error);
      }
    };

    fetchLessonData();
  }, [lessonId]);

  // Fetch quiz questions dynamically based on the lessonId
  useEffect(() => {
    if (!lessonId) return;

    const fetchQuizData = async () => {
      try {
        const res = await fetch(`/data/lesson/lesson_two/quiz/${lessonId}.json`);
        if (!res.ok) {
          throw new Error('Quiz data not found');
        }
        const data = await res.json();
        setQuizData(data.quiz_questions); // Store quiz questions
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, [lessonId]);

  const handleNext = () => {
    if (nextEnabled) {
      if (currentPage < lessonData.categories.length - 1) {
        setCurrentPage(currentPage + 1);
        setSelectedAnswers([]); // Reset the selected answers for the next category
        setQuizFeedback(""); // Reset feedback for the next category
        setNextEnabled(false); // Reset the Next button
      }
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFinish = () => {
    // Navigate to the lesson selection page when Finish is clicked
    router.push('/dashboard/learning/lesson/lesson_two');
  };



  const handleQuizAnswer = (answer, correctAnswer, index) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[index] = answer; // Update the answer for the specific question
    setSelectedAnswers(updatedAnswers);

    // Check if the current question is correct
    if (answer === correctAnswer) {
      setQuizFeedback("Correct! Well done.");
    } else {
      setQuizFeedback("Incorrect. Please try again.");
    }

    // Check if all questions in the category are answered correctly
    // Directly check the answers instead of using selectedAnswers
    const currentCategoryQuestions = filteredQuizQuestions;
    const allCorrect = currentCategoryQuestions.every((quiz, i) => updatedAnswers[i] === quiz.correct_answer);

    setNextEnabled(allCorrect); // Enable "Next" button only if all answers are correct
  };


  if (!lessonData || !quizData) return <div>Loading...</div>;

  const currentCategory = lessonData.categories[currentPage];
  const isLastPage = currentPage === lessonData.categories.length - 1;

  // Filter quiz questions based on the category of the current page
  const filteredQuizQuestions = quizData.filter(
    (question) => question.category === currentCategory.category
  );








  return (
    <div className="p-8 min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">
      {/* Header and Back Button */}
      <div className="flex justify-between items-center mb-8">
        <Link href="/dashboard/learning/lesson/lesson_two" passHref>
          <button
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg shadow-purple-500/50"
          >
            <FaArrowLeft className="text-lg" />
          </button>
        </Link>
        <h1 className="text-4xl font-extrabold text-white mx-auto">{lessonData.lesson}</h1>
      </div>

      {/* Lesson Description */}
      <p className="mt-4 text-xl text-gray-200 text-center">{lessonData.definition}</p>

      {/* Display One Category Data at a Time */}
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-xl rounded-lg p-6">
          <h3 className="text-3xl font-extrabold text-white">{currentCategory.category}</h3>
          <p className="mt-4 text-lg text-gray-200">{currentCategory.description}</p>

          {/* Display Genders */}
          {/* {currentCategory.genders && (
  <div className="mt-6 space-y-3">
    {Object.entries(currentCategory.genders).map(([gender, value]) => (
      <div key={gender} className="flex justify-between mb-4">
        <span className="text-sm font-medium text-white capitalize">{gender}</span>
        <span className="text-md text-gray-400">{value}</span>
      </div>
    ))}

<div className="mt-10 space-y-3">
{Object.entries(currentCategory.examples).map(([example, value]) => (
      <div key={example} className="flex justify-between mb-4">
        <span className="text-sm font-medium text-white capitalize">{example}</span>
        <span className="text-md text-gray-400">{value}</span>
      </div>
    ))}
    </div>
    
  </div>
)} */}

          {/* Display Genders and Examples */}
          {currentCategory.onekinds && currentCategory.examples && (
            <div className="space-y-6">
              {/* Display Genders */}
              <div className="mt-6 space-y-3">
                {Object.entries(currentCategory.onekinds).map(([onekind, value]) => (
                  <div
                    key={onekind}
                    className="flex justify-between mb-4 p-4 hover:bg-gray-700 rounded-lg transition-transform duration-200 transform hover:scale-105 cursor-pointer"
                    onClick={() => alert(`You clicked on: ${onekind}`)} // Placeholder for interactivity
                  >
                    <span className="text-lg font-semibold text-white capitalize">{onekind}</span>
                    <span className="text-lg text-gray-300">{value}</span>
                  </div>
                ))}
              </div>

              {/* Display Examples */}
              <div className="mt-6 space-y-3">
                {Object.entries(currentCategory.examples).map(([example, value]) => (
                  <div
                    key={example}
                    className="flex justify-between mb-4 p-4 hover:bg-gray-700 rounded-lg transition-transform duration-200 transform hover:scale-105 cursor-pointer"
                    onClick={() => alert(`You clicked on: ${example}`)} // Placeholder for interactivity
                  >
                    <span className="text-lg font-semibold text-white capitalize">{example}</span>
                    <span className="text-lg text-gray-300">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}





          {/* Display Numbers */}
          {currentCategory.twokinds && currentCategory.examples && (
            <div className="space-y-6">
              {/* Display Numbers */}
              <div className="mt-6 space-y-3">
                {Object.entries(currentCategory.twokinds).map(([twokind, value]) => (
                  <div
                    key={twokind}
                    className="flex justify-between mb-4 p-4 hover:bg-gray-700 rounded-lg transition-transform duration-200 transform hover:scale-105 cursor-pointer"
                    onClick={() => alert(`You clicked on: ${twokind}`)} // Placeholder for interactivity
                  >
                    <span className="text-lg font-semibold text-white capitalize">{twokind}</span>
                    <span className="text-lg text-gray-300">{value}</span>
                  </div>
                ))}
              </div>

              {/* Display Examples */}
              <div className="mt-6 space-y-3">
                {Object.entries(currentCategory.examples).map(([example, value]) => (
                  <div
                    key={example}
                    className="flex justify-between mb-4 p-4 hover:bg-gray-700 rounded-lg transition-transform duration-200 transform hover:scale-105 cursor-pointer"
                    onClick={() => alert(`You clicked on: ${example}`)} // Placeholder for interactivity
                  >
                    <span className="text-lg font-semibold text-white capitalize">{example}</span>
                    <span className="text-lg text-gray-300">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* Display Declension Cases */}
          {/* {currentCategory.threekind && currentCategory.vibhaktis.length > 0 && (
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-indigo-600">Cases (विभक्ति)</h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
          {currentCategory.vibhaktis.map((vibhakti, idx) => (
            <li key={idx} className="flex flex-col space-y-1">
              <span className="font-medium text-white">{vibhakti.case}</span>
              <span className="text-md text-gray-400">{vibhakti.function}</span>
              <span className="italic text-md text-gray-300">{vibhakti.example}</span>
            </li>
          ))}
        </ul>
      </div>
    )} */}


          {currentCategory.threekinds && currentCategory.threekinds.length > 0 && (
            <div className="mt-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                {currentCategory.threekinds.map((theekind, idx) => (
                  <li
                    key={idx}
                    className="flex flex-col space-y-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    <div className="space-y-3">
                      {Object.entries(theekind).map(([key, value], index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center mb-3 transition-all duration-200 transform hover:scale-105"
                        >
                          <span className="text-lg font-semibold text-indigo-400">{key}:</span>
                          <span className="text-lg text-white italic">{value}</span>
                          {index < Object.entries(theekind).length - 1 && (
                            <div className="border-t-2 border-indigo-500 mt-2"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}






          {/* Display Declension Examples */}
          {currentCategory.examples && currentCategory.examples.length > 0 && (
            <div className="mt-6">
              <h4 className="text-2xl font-semibold text-indigo-600 mb-4">{currentCategory.category}</h4>
              <div className="space-y-6 mt-6">
                {currentCategory.examples.map((example, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-slate-800 to-slate-700 shadow-lg rounded-lg p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Display example details */}
                    {Object.entries(example).map(([key, value]) => (
                      <div key={key} className="mt-4">
                        {/* Title for each section */}
                        <div className="text-xl font-semibold text-indigo-500 flex items-center space-x-2">
                          {/* Optional: Add an icon for each key */}
                          <span className="text-xl">
                            <i className="fas fa-info-circle"></i>
                          </span>
                          <span>{key}</span>
                        </div>

                        {/* Check if the value is an object or a simple value */}
                        {typeof value === 'object' ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                            {/* If value is an object, we go deeper into its entries */}
                            {Object.entries(value).map(([subKey, subValue]) => (
                              <div
                                key={subKey}
                                className="bg-slate-900 p-4 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
                              >
                                <div className="text-lg font-semibold text-white">{subKey}</div>
                                {typeof subValue === 'object' ? (
                                  Object.entries(subValue).map(([caseType, form]) => (
                                    <div key={caseType} className="flex items-center justify-between space-x-2 mt-2">
                                      <span className="font-medium text-indigo-300">{caseType}:</span>
                                      <span className="text-gray-200">{form}</span>
                                    </div>
                                  ))
                                ) : (
                                  <div className="text-gray-200">{subValue}</div>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          // If it's a simple value (like a string), display it full width
                          <div className="bg-slate-900 p-4 rounded-lg shadow-md mt-2">
                            <div className="text-lg font-semibold text-white">{value}</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}



          {/* Types of Nouns */}
          {currentCategory.types && currentCategory.types.length > 0 && (
            <div className="mt-6">
              <h4 className="text-2xl font-semibold text-indigo-600 mb-6">{currentCategory.category}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCategory.types.map((type, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-lg rounded-lg p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <h5 className="text-xl font-semibold text-white">{type.type}</h5>
                    <p className="mt-2 text-sm text-gray-200">{type.description}</p>

                    <div className="mt-4">
                      <p className="text-sm text-gray-200">Examples:</p>
                      <ul className="space-y-2 mt-2">
                        {type.examples.map((example, i) => (
                          <li key={i} className="text-md text-gray-300">
                            <span className="text-indigo-400">- </span>{example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}




          {/* Interactive Quiz in a Card with Animation */}
          <div className="mt-8 flex flex-col items-center">
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg shadow-lg p-8 w-full max-w-3xl transform transition-all duration-500 ease-in-out hover:scale-105">
              <h4 className="text-2xl font-semibold text-indigo-500 text-center mb-6">Answer this to go next</h4>

              {/* Display quiz questions based on the category */}
              {filteredQuizQuestions.map((quiz, index) => (
                <div key={index} className="mt-6">
                  <p className="text-xl text-white text-center">{quiz.question.english}</p>

                  {/* Increase space between English and Hindi text */}
                  <p className="text-lg text-gray-300 text-center mt-4">{quiz.question.hindi}</p>

                  <div className="flex flex-wrap justify-center gap-6 mt-6">
                    {quiz.options.map((option) => {
                      const isSelected = selectedAnswers[index] === option;
                      const isCorrect = option === quiz.correct_answer;
                      const isIncorrect = isSelected && !isCorrect;

                      return (
                        <button
                          key={option}
                          className={`bg-indigo-600 text-white text-lg px-8 py-3 rounded-lg shadow-md 
                            ${isSelected && isCorrect ? 'bg-orange-400' : ''} 
                            ${isIncorrect ? 'bg-red-600' : ''} 
                            transform transition-all duration-50 hover:scale-105`}
                          onClick={() => handleQuizAnswer(option, quiz.correct_answer, index)}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {quizFeedback && (
                <p className="mt-6 text-lg text-center text-gray-200">{quizFeedback}</p>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
          onClick={handlePrevious}
          disabled={currentPage === 0}
        >
          Previous
        </button>

        {isLastPage ? (
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            onClick={handleFinish}
          >
            Finish
          </button>
        ) : (
          <button
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
            onClick={handleNext}
            disabled={!nextEnabled}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}