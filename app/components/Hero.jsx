// import React from 'react';

// export default function Hero() {
//   return (
//     <div className="relative bg-white min-h-screen flex flex-col items-center justify-center text-gray-800 px-6 py-10 space-y-12">
//       {/* Title and Tagline */}
//       <div className="text-center space-y-6 max-w-3xl">
//         <h1 className="text-5xl font-extrabold tracking-wider text-gray-800 animate-fade-in">
//           SanskritAI
//         </h1>
//         <p className="text-xl font-semibold text-gray-700 animate-slide-up delay-200">
//           Ancient Wisdom Meets Modern AI
//         </p>
//         <p className="text-lg italic text-gray-600 animate-slide-up delay-300">
//           "सर्वं ज्ञानं संस्कृतेन अस्ति" – <span className="text-yellow-500 font-medium">All knowledge lies within Sanskrit.</span>
//         </p>
//         <p className="text-md leading-relaxed text-gray-600 animate-slide-up delay-400">
//           Dive deep into the world of Sanskrit with interactive AI-powered tools. From learning every word to mastering pronunciation, discover the essence of Sanskrit.
//         </p>
//       </div>

//       {/* Feature Highlights in Three Columns */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 animate-slide-up delay-500">
//         <FeatureCard
//           title="Instant Insight"
//           description="Translate intricate Sanskrit texts instantly, leveraging AI to uncover nuanced meanings."
//         />
//         <FeatureCard
//           title="Sonic Precision"
//           description="Perfect every syllable with real-time, AI-powered pronunciation feedback."
//         />
//         <FeatureCard
//           title="WordForge"
//           description="Master essential vocabulary with custom, AI-adaptive learning paths tailored to your progress."
//         />
//       </div>

//       {/* Interactive Sections */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 animate-fade-in delay-600">
//         <InteractiveCard
//           title="Guided Sanskrit Journey"
//           levels={['Novice', 'Scholar', 'Sage']}
//           description="Learn Sanskrit step-by-step with interactive lessons and personalized AI guidance."
//           animationClass="animate-bounce"
//         />
//         <InteractiveCard
//           title="Speak Sanskrit"
//           description="Practice and refine your Sanskrit pronunciation with AI-powered voice analysis."
//           animationClass="animate-pulse"
//         />
//         <InteractiveCard
//           title="Challenge of Knowledge"
//           description="Test yourself with quizzes that adapt to your strengths and learning pace."
//           animationClass="animate-wiggle"
//         />
//         <InteractiveCard
//           title="Visual Sanskrit Discovery"
//           description="Explore Sanskrit through video lessons and AI-augmented visuals that enhance comprehension."
//           animationClass="animate-bounce"
//         />
//       </div>

//       {/* Call-to-Action Buttons */}
//       <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10 animate-slide-up delay-700">
//         <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transition duration-300 rounded-full font-semibold text-white shadow-lg transform hover:scale-105">
//           Start Your Sanskrit Journey
//         </button>
//       </div>
//     </div>
//   );
// }

// // Feature Card Component for Standard Features
// function FeatureCard({ title, description }) {
//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md transition transform hover:scale-105 text-center space-y-2">
//       <h3 className="text-lg font-bold text-gray-800">{title}</h3>
//       <p className="text-sm text-gray-600">{description}</p>
//     </div>
//   );
// }

// // Interactive Card Component for AI Features
// function InteractiveCard({ title, description, levels, animationClass }) {
//   return (
//     <div className={`flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg transform hover:scale-105 text-center ${animationClass}`}>
//       <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
//       <p className="text-sm text-gray-600 mb-4">{description}</p>
//       {levels && (
//         <div className="flex space-x-2">
//           {levels.map((level, index) => (
//             <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-xs font-semibold text-gray-700">
//               {level}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
















// import React from 'react';
// import Link from 'next/link'; // Import Next.js Link component

// export default function Hero() {
//   return (
//     <div className="relative bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen flex flex-col items-center justify-center text-gray-800 px-6 py-10 space-y-12">
//       {/* Title and Tagline */}
//       <div className="text-center space-y-6 max-w-3xl">
//         <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider text-white animate-fade-in">
//           SanskritAI
//         </h1>
//         <p className="text-xl font-semibold text-white animate-slide-up delay-200">
//           Ancient Wisdom Meets Modern AI
//         </p>
//         <p className="text-lg italic text-white animate-slide-up delay-300">
//           "सर्वं ज्ञानं संस्कृतेन अस्ति" – <span className="text-yellow-500 font-medium">All knowledge lies within Sanskrit.</span>
//         </p>
//         <p className="text-md leading-relaxed text-white animate-slide-up delay-400">
//           Dive deep into the world of Sanskrit with interactive AI-powered tools. From learning every word to mastering pronunciation, discover the essence of Sanskrit.
//         </p>
//       </div>

//       {/* Feature Highlights in Three Columns */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-slide-up delay-500">
//         <FeatureCard
//           title="Instant Insight"
//           description="Translate intricate Sanskrit texts instantly, leveraging AI to uncover nuanced meanings."
//         />
//         <FeatureCard
//           title="Sonic Precision"
//           description="Perfect every syllable with real-time, AI-powered pronunciation feedback."
//         />
//         <FeatureCard
//           title="WordForge"
//           description="Master essential vocabulary with custom, AI-adaptive learning paths tailored to your progress."
//         />
//       </div>

//       {/* Interactive Sections */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 animate-fade-in delay-600">
//         <InteractiveCard
//           title="Guided Sanskrit Journey"
//           levels={['Novice', 'Scholar', 'Sage']}
//           description="Learn Sanskrit step-by-step with interactive lessons and personalized AI guidance."
//           animationClass="animate-bounce"
//         />
//         <InteractiveCard
//           title="Speak Sanskrit"
//           description="Practice and refine your Sanskrit pronunciation with AI-powered voice analysis."
//           animationClass="animate-pulse"
//         />
//         <InteractiveCard
//           title="Challenge of Knowledge"
//           description="Test yourself with quizzes that adapt to your strengths and learning pace."
//           animationClass="animate-wiggle"
//         />
//         <InteractiveCard
//           title="Visual Sanskrit Discovery"
//           description="Explore Sanskrit through video lessons and AI-augmented visuals that enhance comprehension."
//           animationClass="animate-bounce"
//         />
//       </div>

//       {/* Call-to-Action Button with Next.js Link */}
//       <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10 animate-slide-up delay-700">
//         <Link href="/sign-in"> {/* Use Next.js Link component */}
//             <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transition duration-300 rounded-full font-semibold text-white shadow-lg transform hover:scale-105">
//               Start Your Sanskrit Journey
//             </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// // Feature Card Component for Standard Features
// function FeatureCard({ title, description }) {
//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md transition transform hover:scale-105 text-center space-y-2">
//       <h3 className="text-lg font-bold text-gray-800">{title}</h3>
//       <p className="text-sm text-gray-600">{description}</p>
//     </div>
//   );
// }

// // Interactive Card Component for AI Features
// function InteractiveCard({ title, description, levels, animationClass }) {
//   return (
//     <div className={`flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg transform hover:scale-105 text-center ${animationClass}`}>
//       <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
//       <p className="text-sm text-gray-600 mb-4">{description}</p>
//       {levels && (
//         <div className="flex space-x-2">
//           {levels.map((level, index) => (
//             <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-xs font-semibold text-gray-700">
//               {level}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }






// import React from 'react';
// import Link from 'next/link'; // Import Next.js Link component

// export default function Hero() {
//   return (
//     <div className="relative bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen flex flex-col items-center justify-center text-gray-800 px-6 py-10 space-y-12">
//       {/* Title and Tagline */}
//       <div className="text-center space-y-6 max-w-3xl">
//         <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider text-white animate-fade-in">
//           SanskritAI
//         </h1>
//         <p className="text-xl font-semibold text-white animate-slide-up delay-200">
//           Ancient Wisdom Meets Modern AI | प्राचीन ज्ञान meets आधुनिक ए.आई.
//         </p>
//         <p className="text-lg italic text-white animate-slide-up delay-300">
//           "सर्वं ज्ञानं संस्कृतेन अस्ति" – <span className="text-yellow-500 font-medium">All knowledge lies within Sanskrit.</span>
//         </p>
//         <p className="text-md leading-relaxed text-white animate-slide-up delay-400">
//           Dive deep into the world of Sanskrit with interactive AI-powered tools. From learning every word to mastering pronunciation, discover the essence of Sanskrit. 
//           | इंटरएक्टिव ए.आई.-आधारित उपकरणों के साथ संस्कृत की दुनिया में गहराई से उतरें। प्रत्येक शब्द को सीखने से लेकर उच्चारण में महारत हासिल करने तक, संस्कृत के सार को खोजें।
//         </p>
//       </div>

//       {/* Feature Highlights in Three Columns */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-slide-up delay-500">
//         <FeatureCard
//           title="Instant Insight | त्वरित दृष्टि"
//           description="Translate intricate Sanskrit texts instantly, leveraging AI to uncover nuanced meanings. | संस्कृत ग्रंथों का त्वरित अनुवाद करें, ए.आई. का उपयोग करके सूक्ष्म अर्थों को उजागर करें।"
//         />
//         <FeatureCard
//           title="Sonic Precision | ध्वनिक सटीकता"
//           description="Perfect every syllable with real-time, AI-powered pronunciation feedback. | प्रत्येक स्वर को वास्तविक समय में, ए.आई. द्वारा संचालित उच्चारण प्रतिक्रिया से परिपूर्ण करें।"
//         />
//         <FeatureCard
//           title="WordForge | शब्दनिर्माण"
//           description="Master essential vocabulary with custom, AI-adaptive learning paths tailored to your progress. | अपनी प्रगति के अनुसार अनुकूलित, ए.आई.-आधारित पाठ्यक्रम के साथ आवश्यक शब्दावली को मास्टर करें।"
//         />
//       </div>

//       {/* Interactive Sections */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 animate-fade-in delay-600">
//         <InteractiveCard
//           title="Guided Sanskrit Journey | मार्गदर्शित संस्कृत यात्रा"
//           levels={['Novice | प्रारंभिक', 'Scholar | विद्वान', 'Sage | ऋषि']}
//           description="Learn Sanskrit step-by-step with interactive lessons and personalized AI guidance. | इंटरएक्टिव पाठों और व्यक्तिगत ए.आई. मार्गदर्शन के साथ संस्कृत को चरणबद्ध तरीके से सीखें।"
//           animationClass="animate-bounce"
//         />
//         <InteractiveCard
//           title="Speak Sanskrit | संस्कृत बोलें"
//           description="Practice and refine your Sanskrit pronunciation with AI-powered voice analysis. | ए.आई. आधारित आवाज़ विश्लेषण से अपनी संस्कृत उच्चारण का अभ्यास और सुधार करें।"
//           animationClass="animate-wiggle"
//         />
//         <InteractiveCard
//           title="Challenge of Knowledge | ज्ञान की चुनौती"
//           description="Test yourself with quizzes that adapt to your strengths and learning pace. | ऐसे क्विज़ के साथ अपनी परीक्षा लें जो आपकी ताकत और सीखने की गति के अनुसार अनुकूलित होते हैं।"
//           animationClass="animate-wiggle"
//         />
//         <InteractiveCard
//           title="Visual Sanskrit Discovery | दृश्य संस्कृत अन्वेषण"
//           description="Explore Sanskrit through video lessons and AI-augmented visuals that enhance comprehension. | वीडियो पाठों और ए.आई.-संवर्धित दृश्य सामग्री के माध्यम से संस्कृत का अन्वेषण करें जो समझ को बढ़ाता है।"
//           animationClass="animate-bounce"
//         />
//       </div>

//       {/* Call-to-Action Button with Next.js Link */}
//       <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10 animate-slide-up delay-700">
//         <Link href="/sign-up"> {/* Use Next.js Link component */}
//             <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transition duration-300 rounded-full font-semibold text-white shadow-lg transform hover:scale-105">
//               Start Your Sanskrit Journey
//             </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// // Feature Card Component for Standard Features
// function FeatureCard({ title, description }) {
//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md transition transform hover:scale-105 text-center space-y-2">
//       <h3 className="text-lg font-bold text-gray-800">{title}</h3>
//       <p className="text-sm text-gray-600">{description}</p>
//     </div>
//   );
// }

// // Interactive Card Component for AI Features
// function InteractiveCard({ title, description, levels, animationClass }) {
//   return (
//     <div className={`flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg transform hover:scale-105 text-center ${animationClass}`}>
//       <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
//       <p className="text-sm text-gray-600 mb-4">{description}</p>
//       {levels && (
//         <div className="flex space-x-2">
//           {levels.map((level, index) => (
//             <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-xs font-semibold text-gray-700">
//               {level}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }













// import React from 'react';
// import Link from 'next/link'; // Import Next.js Link component

// export default function Hero() {
//   return (
//     <div className="relative bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen flex flex-col items-center justify-center text-gray-800 px-6 py-10 space-y-12">
//       {/* Title and Tagline */}
//       <div className="text-center space-y-6 max-w-3xl">
//         <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider text-white animate-fade-in">
//           SanskritAI
//         </h1>
//         <p className="text-xl font-semibold text-white animate-slide-up delay-200">
//           Ancient Wisdom Meets Modern AI | प्राचीन ज्ञान meets आधुनिक ए.आई.
//         </p>
//         <p className="text-lg italic text-white animate-slide-up delay-300">
//           "सर्वं ज्ञानं संस्कृतेन अस्ति" – <span className="text-yellow-500 font-medium">All knowledge lies within Sanskrit.</span>
//         </p>
//         <p className="text-md leading-relaxed text-white animate-slide-up delay-400">
//           Dive deep into the world of Sanskrit with interactive AI-powered tools. From learning every word to mastering pronunciation, discover the essence of Sanskrit. 
//           | इंटरएक्टिव ए.आई.-आधारित उपकरणों के साथ संस्कृत की दुनिया में गहराई से उतरें। प्रत्येक शब्द को सीखने से लेकर उच्चारण में महारत हासिल करने तक, संस्कृत के सार को खोजें।
//         </p>
//       </div>

//       {/* Feature Highlights in Three Columns */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-slide-up delay-500">
//         <FeatureCard
//           title="Instant Insight | त्वरित दृष्टि"
//           description="Translate intricate Sanskrit texts instantly, leveraging AI to uncover nuanced meanings. | संस्कृत ग्रंथों का त्वरित अनुवाद करें, ए.आई. का उपयोग करके सूक्ष्म अर्थों को उजागर करें।"
//         />
//         <FeatureCard
//           title="Sonic Precision | ध्वनिक सटीकता"
//           description="Perfect every syllable with real-time, AI-powered pronunciation feedback. | प्रत्येक स्वर को वास्तविक समय में, ए.आई. द्वारा संचालित उच्चारण प्रतिक्रिया से परिपूर्ण करें।"
//         />
//         <FeatureCard
//           title="WordForge | शब्दनिर्माण"
//           description="Master essential vocabulary with custom, AI-adaptive learning paths tailored to your progress. | अपनी प्रगति के अनुसार अनुकूलित, ए.आई.-आधारित पाठ्यक्रम के साथ आवश्यक शब्दावली को मास्टर करें।"
//         />
//       </div>

//       {/* Interactive Sections */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 animate-fade-in delay-600">
//         <InteractiveCard
//           title="Guided Sanskrit Journey | मार्गदर्शित संस्कृत यात्रा"
//           levels={['Novice | प्रारंभिक', 'Scholar | विद्वान', 'Sage | ऋषि']}
//           description="Learn Sanskrit step-by-step with interactive lessons and personalized AI guidance. | इंटरएक्टिव पाठों और व्यक्तिगत ए.आई. मार्गदर्शन के साथ संस्कृत को चरणबद्ध तरीके से सीखें।"
//           animationClass="animate-bounce"
//         />
//         <InteractiveCard
//           title="Speak Sanskrit | संस्कृत बोलें"
//           description="Practice and refine your Sanskrit pronunciation with AI-powered voice analysis. | ए.आई. आधारित आवाज़ विश्लेषण से अपनी संस्कृत उच्चारण का अभ्यास और सुधार करें।"
//           animationClass="animate-wiggle"
//         />
//         <InteractiveCard
//           title="Challenge of Knowledge | ज्ञान की चुनौती"
//           description="Test yourself with quizzes that adapt to your strengths and learning pace. | ऐसे क्विज़ के साथ अपनी परीक्षा लें जो आपकी ताकत और सीखने की गति के अनुसार अनुकूलित होते हैं।"
//           animationClass="animate-wiggle"
//         />
//         <InteractiveCard
//           title="Visual Sanskrit Discovery | दृश्य संस्कृत अन्वेषण"
//           description="Explore Sanskrit through video lessons and AI-augmented visuals that enhance comprehension. | वीडियो पाठों और ए.आई.-संवर्धित दृश्य सामग्री के माध्यम से संस्कृत का अन्वेषण करें जो समझ को बढ़ाता है।"
//           animationClass="animate-bounce"
//         />
//       </div>

//       {/* Call-to-Action Button with Next.js Link */}
//       <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10 animate-slide-up delay-700">
//         <Link href="/sign-up"> {/* Use Next.js Link component */}
//             <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transition duration-300 rounded-full font-semibold text-white shadow-lg transform hover:scale-105">
//               Start Your Sanskrit Journey
//             </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// // Feature Card Component for Standard Features
// function FeatureCard({ title, description }) {
//   return (
//     <div className="flex flex-col items-center p-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-xl transition transform hover:scale-105 text-center space-y-2">
//       <h3 className="text-lg font-bold text-white">{title}</h3>
//       <p className="text-sm text-white">{description}</p>
//     </div>
//   );
// }

// // Interactive Card Component for AI Features
// function InteractiveCard({ title, description, levels, animationClass }) {
//   return (
//     <div className={`flex flex-col items-center p-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-xl transform hover:scale-105 text-center ${animationClass}`}>
//       <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//       <p className="text-sm text-white mb-4">{description}</p>
//       {levels && (
//         <div className="flex space-x-2">
//           {levels.map((level, index) => (
//             <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold text-white">
//               {level}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
















// import React from 'react';
// import Link from 'next/link'; // Import Next.js Link component
// import Image from 'next/image'; // Import Image component for optimized images

// export default function Hero() {
//   return (
//     <div className="relative bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen flex flex-col items-center justify-center text-gray-800 px-6 py-10 space-y-12">
//       {/* Background Image */}
//       <div className="absolute inset-0 overflow-hidden">
//         <Image
//           src="/images/sanskrit-background.jpg" // Example image path (you can replace this with any background)
//           alt="Sanskrit Manuscript"
//           layout="fill"
//           objectFit="cover"
//           className="opacity-30 filter brightness-75"
//         />
//       </div>

//       {/* Title and Tagline */}
//       <div className="relative text-center space-y-6 max-w-3xl z-10">
//         <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider text-white animate-fade-in">
//           SanskritAI
//         </h1>
//         <p className="text-xl font-semibold text-white animate-slide-up delay-200">
//           संस्कृत ज्ञान का संगम, AI की शक्ति के साथ | Ancient Wisdom Meets Modern AI
//         </p>
//         <p className="text-lg italic text-white animate-slide-up delay-300">
//           "सर्वं ज्ञानं संस्कृतेन अस्ति" – <span className="text-yellow-500 font-medium">All knowledge lies within Sanskrit.</span>
//         </p>
//         <p className="text-md leading-relaxed text-white animate-slide-up delay-400">
//           संस्कृत केवल एक भाषा नहीं, बल्कि एक ऐसी धारा है जो हमारे विचार, संस्कृति और ज्ञान के मूल में बसी हुई है। इस ज्ञान के माध्यम से न केवल आप एक प्राचीन भाषा सीखेंगे, बल्कि अपनी सोच, समझ और जीवन के दृष्टिकोण को भी व्यापक करेंगे।
//           | Sanskrit is not just a language; it is a stream of knowledge that lies at the core of our thoughts, culture, and wisdom. Through this, you will not only learn an ancient language but also expand your thinking, understanding, and perspective on life.
//         </p>
//       </div>

//       {/* Rishi Muni Section with Image */}
//       <div className="relative text-center space-y-6 max-w-3xl z-10 mt-12">
//         <h2 className="text-3xl font-extrabold text-white">
//           ऋषि-मुनियों का योगदान | The Contribution of Rishis
//         </h2>
//         <div className="flex justify-center space-x-4">
//           <div className="relative w-1/3">
//             <Image
//               src="https://d8q326uv7ym5m.cloudfront.net/public/gita/dhyan-yoga.png" // Replace this with a relevant image
//               alt="Rishi Muni"
//               width={400}
//               height={500}
//               className="rounded-lg shadow-lg transition-transform transform hover:scale-110"
//             />
//           </div>
//           <div className="w-2/3 text-left text-white">
//             <p className="text-xl">
//               ऋषि-मुनियों ने संस्कृत को न केवल संरक्षित किया, बल्कि वे ज्ञान के स्रोत रहे हैं, जिन्होंने हमारे जीवन के हर पहलु में अमूल्य योगदान दिया। इन ऋषियों के वेदों और शास्त्रों के माध्यम से मानवता को एक दिव्य मार्गदर्शन मिला। 
//               | The Rishis have not only preserved Sanskrit, but they were also the sources of knowledge, guiding humanity through the Vedas and Shastras, bringing divine wisdom into every aspect of life.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Feature Highlights in Three Columns */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-slide-up delay-500">
//         <FeatureCard
//           title="Instant Insight | त्वरित दृष्टि"
//           description="संस्कृत के गहरे और सूक्ष्म अर्थों को तुरंत अनुवादित करने के लिए ए.आई. का उपयोग करें। | Translate the deep and subtle meanings of Sanskrit instantly using AI."
//         />
//         <FeatureCard
//           title="Sonic Precision | ध्वनिक सटीकता"
//           description="संस्कृत उच्चारण में सटीकता प्राप्त करें, ए.आई. के माध्यम से हर ध्वनि को सशक्त बनाएं। | Achieve precision in Sanskrit pronunciation by perfecting every sound through AI."
//         />
//         <FeatureCard
//           title="WordForge | शब्दनिर्माण"
//           description="संस्कृत शब्दावली में दक्षता प्राप्त करें, ए.आई.-आधारित अनुकूलित मार्गदर्शन के साथ। | Master the Sanskrit vocabulary with AI-based tailored guidance."
//         />
//       </div>

//       {/* Interactive Sections */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 animate-fade-in delay-600">
//         <InteractiveCard
//           title="Guided Sanskrit Journey | मार्गदर्शित संस्कृत यात्रा"
//           levels={['प्रारंभिक | Novice', 'विद्वान | Scholar', 'ऋषि | Sage']}
//           description="संस्कृत सीखने के मार्ग को सरल और समझने योग्य बनाएं, चरणबद्ध तरीके से ए.आई. के साथ। | Make the path to learning Sanskrit easy and comprehensible, step-by-step with AI."
//           animationClass="animate-bounce"
//         />
//         <InteractiveCard
//           title="Speak Sanskrit | संस्कृत बोलें"
//           description="संस्कृत उच्चारण को प्रामाणिक बनाएं, ए.आई. आधारित विश्लेषण से मार्गदर्शन प्राप्त करें। | Make your Sanskrit pronunciation authentic with AI-powered voice analysis."
//           animationClass="animate-wiggle"
//         />
//         <InteractiveCard
//           title="Challenge of Knowledge | ज्ञान की चुनौती"
//           description="आपकी शक्ति और गति के अनुसार अनुकूलित क्विज़ के साथ अपनी ज्ञान परीक्षा लें। | Take your knowledge test with quizzes that adapt to your strengths and pace."
//           animationClass="animate-wiggle"
//         />
//         <InteractiveCard
//           title="Visual Sanskrit Discovery | दृश्य संस्कृत अन्वेषण"
//           description="संस्कृत को वीडियो और ए.आई.-संवर्धित दृश्यों के माध्यम से अधिक गहराई से समझें। | Understand Sanskrit more deeply through video lessons and AI-enhanced visuals."
//           animationClass="animate-bounce"
//         />
//       </div>

//       {/* Call-to-Action Button with Next.js Link */}
//       <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10 animate-slide-up delay-700">
//         <Link href="/sign-up"> {/* Use Next.js Link component */}
//             <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transition duration-300 rounded-full font-semibold text-white shadow-lg transform hover:scale-105">
//               Start Your Sanskrit Journey
//             </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// // Feature Card Component for Standard Features
// function FeatureCard({ title, description }) {
//   return (
//     <div className="flex flex-col items-center p-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-xl transition transform hover:scale-105 text-center space-y-2">
//       <h3 className="text-lg font-bold text-white">{title}</h3>
//       <p className="text-sm text-white">{description}</p>
//     </div>
//   );
// }

// // Interactive Card Component for AI Features
// function InteractiveCard({ title, description, levels, animationClass }) {
//   return (
//     <div className={`flex flex-col items-center p-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-xl transform hover:scale-105 text-center ${animationClass}`}>
//       <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//       <p className="text-sm text-white mb-4">{description}</p>
//       {levels && (
//         <div className="flex space-x-2">
//           {levels.map((level, index) => (
//             <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold text-white">
//               {level}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }














// import React from 'react';
// import Link from 'next/link'; // Import Next.js Link component
// import Image from 'next/image'; // Import Image component for optimized images

// export default function Hero() {
//   return (
//     <div className="relative bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen flex flex-col items-center justify-center text-gray-800 px-6 py-10 space-y-12">


//       {/* Title and Tagline */}
//       <div className="relative text-center space-y-6 max-w-3xl z-10">
//         <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider text-white animate-fade-in">
//           SanskritAI
//         </h1>
//         <p className="text-xl font-semibold text-white animate-slide-up delay-200">
//           संस्कृत ज्ञान का संगम, AI की शक्ति के साथ | Ancient Wisdom Meets Modern AI
//         </p>
//         <p className="text-lg italic text-white animate-slide-up delay-300">
//           "सर्वं ज्ञानं संस्कृतेन अस्ति" – <span className="text-yellow-500 font-medium">All knowledge lies within Sanskrit.</span>
//         </p>
//         <p className="text-md leading-relaxed text-white animate-slide-up delay-400">
//           संस्कृत केवल एक भाषा नहीं, बल्कि एक ऐसी धारा है जो हमारे विचार, संस्कृति और ज्ञान के मूल में बसी हुई है। इस ज्ञान के माध्यम से न केवल आप एक प्राचीन भाषा सीखेंगे, बल्कि अपनी सोच, समझ और जीवन के दृष्टिकोण को भी व्यापक करेंगे।
//           | Sanskrit is not just a language; it is a stream of knowledge that lies at the core of our thoughts, culture, and wisdom. Through this, you will not only learn an ancient language but also expand your thinking, understanding, and perspective on life.
//         </p>
//       </div>

//       {/* Sanskrit for Depression & Yoga Section */}
//       <div className="relative text-center space-y-6 max-w-3xl z-10 mt-12">
//         <h2 className="text-3xl font-extrabold text-white animate-fade-in">
//           संस्कृत का महत्व: योग और मानसिक स्वास्थ्य में | The Importance of Sanskrit: In Yoga and Mental Health
//         </h2>
//         <div className="flex justify-center items-center space-x-6 mt-8 animate-fade-in">
//           {/* Image Section */}
//           <div className="relative w-full sm:w-1/2 p-4 transform hover:scale-105 transition duration-500">
//             <Image
//               src="https://d8q326uv7ym5m.cloudfront.net/public/gita/dhyan-yoga.png"
//               alt="Sanskrit for Yoga and Meditation"
//               width={500}
//               height={650}
//               className="rounded-lg shadow-lg filter grayscale hover:grayscale-0 transition-all duration-300"
//             />
//           </div>
          
//           {/* Text Section */}
//           <div className="w-full sm:w-1/2 text-left text-white space-y-4">
//             <p className="text-xl leading-relaxed animate-slide-up delay-200">
//               संस्कृत का योग और मानसिक स्वास्थ्य के साथ गहरा संबंध है। संस्कृत में कई मंत्र और श्लोक होते हैं, जिनके उच्चारण से मानसिक शांति और आंतरिक संतुलन प्राप्त होता है। योग के अभ्यास में संस्कृत के शाब्दिक अर्थ और उच्चारण की गहरी शक्ति होती है, जो मानसिक दबाव और अवसाद को कम करने में सहायक होती है।
//               | Sanskrit is deeply connected to yoga and mental health. Many mantras and verses in Sanskrit, when chanted, bring mental peace and inner balance. The power of Sanskrit words and their pronunciation in yoga practice plays a vital role in reducing stress and handling depression.
//             </p>
//             <p className="text-md leading-relaxed animate-slide-up delay-400">
//               योग और संस्कृत के अद्भुत संयोजन से न केवल शारीरिक, बल्कि मानसिक स्वास्थ्य भी सुधरता है। यह मानसिक स्पष्टता, शांति और भावनात्मक संतुलन को बढ़ावा देता है। संस्कृत के माध्यम से हम अपने भीतर की शक्ति को महसूस कर सकते हैं और जीवन को एक नए दृष्टिकोण से देख सकते हैं।
//               | The incredible combination of yoga and Sanskrit enhances not only physical health but also mental well-being. It promotes mental clarity, peace, and emotional balance. Through Sanskrit, we can tap into our inner strength and view life from a fresh perspective.
//             </p>
//           </div>
//         </div>
//       </div>

      // {/* Feature Highlights in Three Columns */}
      // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-slide-up delay-500">
      //   <FeatureCard
      //     title="Instant Insight | त्वरित दृष्टि"
      //     description="संस्कृत के गहरे और सूक्ष्म अर्थों को तुरंत अनुवादित करने के लिए ए.आई. का उपयोग करें। | Translate the deep and subtle meanings of Sanskrit instantly using AI."
      //   />
      //   <FeatureCard
      //     title="Sonic Precision | ध्वनिक सटीकता"
      //     description="संस्कृत उच्चारण में सटीकता प्राप्त करें, ए.आई. के माध्यम से हर ध्वनि को सशक्त बनाएं। | Achieve precision in Sanskrit pronunciation by perfecting every sound through AI."
      //   />
      //   <FeatureCard
      //     title="WordForge | शब्दनिर्माण"
      //     description="संस्कृत शब्दावली में दक्षता प्राप्त करें, ए.आई.-आधारित अनुकूलित मार्गदर्शन के साथ। | Master the Sanskrit vocabulary with AI-based tailored guidance."
      //   />
      // </div>

      // {/* Interactive Sections */}
      // <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 animate-fade-in delay-600">
      //   <InteractiveCard
      //     title="Guided Sanskrit Journey | मार्गदर्शित संस्कृत यात्रा"
      //     levels={['प्रारंभिक | Novice', 'विद्वान | Scholar', 'ऋषि | Sage']}
      //     description="संस्कृत सीखने के मार्ग को सरल और समझने योग्य बनाएं, चरणबद्ध तरीके से ए.आई. के साथ। | Make the path to learning Sanskrit easy and comprehensible, step-by-step with AI."
      //     animationClass="animate-bounce"
      //   />
      //   <InteractiveCard
      //     title="Speak Sanskrit | संस्कृत बोलें"
      //     description="संस्कृत उच्चारण को प्रामाणिक बनाएं, ए.आई. आधारित विश्लेषण से मार्गदर्शन प्राप्त करें। | Make your Sanskrit pronunciation authentic with AI-powered voice analysis."
      //     animationClass="animate-wiggle"
      //   />
      //   <InteractiveCard
      //     title="Challenge of Knowledge | ज्ञान की चुनौती"
      //     description="आपकी शक्ति और गति के अनुसार अनुकूलित क्विज़ के साथ अपनी ज्ञान परीक्षा लें। | Take your knowledge test with quizzes that adapt to your strengths and pace."
      //     animationClass="animate-wiggle"
      //   />
      //   <InteractiveCard
      //     title="Visual Sanskrit Discovery | दृश्य संस्कृत अन्वेषण"
      //     description="संस्कृत को वीडियो और ए.आई.-संवर्धित दृश्यों के माध्यम से अधिक गहराई से समझें। | Understand Sanskrit more deeply through video lessons and AI-enhanced visuals."
      //     animationClass="animate-bounce"
      //   />
      // </div>

//       {/* Call-to-Action Button with Next.js Link */}
//       <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10 animate-slide-up delay-700">
//         <Link href="/sign-up"> {/* Use Next.js Link component */}
//             <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transition duration-300 rounded-full font-semibold text-white shadow-lg transform hover:scale-105">
//               Start Your Sanskrit Journey
//             </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// // Feature Card Component for Standard Features
// function FeatureCard({ title, description }) {
//   return (
//     <div className="flex flex-col items-center p-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-xl transition transform hover:scale-105 text-center space-y-2">
//       <h3 className="text-lg font-bold text-white">{title}</h3>
//       <p className="text-sm text-white">{description}</p>
//     </div>
//   );
// }

// // Interactive Card Component for AI Features
// function InteractiveCard({ title, description, levels, animationClass }) {
//   return (
//     <div className={`flex flex-col items-center p-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-xl transform hover:scale-105 text-center ${animationClass}`}>
//       <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//       <p className="text-sm text-white mb-4">{description}</p>
//       {levels && (
//         <div className="flex space-x-2">
//           {levels.map((level, index) => (
//             <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold text-white">
//               {level}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }











// import React from 'react';
// import Link from 'next/link'; // Import Next.js Link component
// import Image from 'next/image'; // Import Image component for optimized images

// export default function Hero() {
//   return (
//     <div className="relative bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen flex flex-col items-center justify-center text-gray-800 px-6 py-10 space-y-12">

//       {/* Title and Tagline */}
//       <div className="relative text-center space-y-6 max-w-3xl z-10">
//         <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider text-white animate-fade-in">
//           SanskritAI
//         </h1>
//         <p className="text-xl font-semibold text-white animate-slide-up delay-200">
//           संस्कृत ज्ञान का संगम, AI की शक्ति के साथ | Ancient Wisdom Meets Modern AI
//         </p>
//         <p className="text-lg italic text-white animate-slide-up delay-300">
//           "सर्वं ज्ञानं संस्कृतेन अस्ति" – <span className="text-yellow-500 font-medium">All knowledge lies within Sanskrit.</span>
//         </p>
//         <p className="text-md leading-relaxed text-white animate-slide-up delay-400">
//           संस्कृत केवल एक भाषा नहीं, बल्कि एक ऐसी धारा है जो हमारे विचार, संस्कृति और ज्ञान के मूल में बसी हुई है। इस ज्ञान के माध्यम से न केवल आप एक प्राचीन भाषा सीखेंगे, बल्कि अपनी सोच, समझ और जीवन के दृष्टिकोण को भी व्यापक करेंगे।
//           | Sanskrit is not just a language; it is a stream of knowledge that lies at the core of our thoughts, culture, and wisdom. Through this, you will not only learn an ancient language but also expand your thinking, understanding, and perspective on life.
//         </p>
//       </div>

     
//       {/* Three Image Cards in a Row */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-slide-up delay-500">
//         <ImageCard
//           imageSrc="https://d8q326uv7ym5m.cloudfront.net/public/gita/dhyan-yoga.png"
//           title="Yoga and Sanskrit | योग और संस्कृत"
//           description="संस्कृत के श्लोकों का उच्चारण योग के अभ्यास में मानसिक शांति और संतुलन लाता है। | The chanting of Sanskrit verses during yoga practice brings mental peace and balance."
//         />
//         <ImageCard
//           imageSrc="https://d8q326uv7ym5m.cloudfront.net/public/gita/dhyan-yoga.png"
//           title="Sanskrit for Clarity | स्पष्टता के लिए संस्कृत"
//           description="संस्कृत की गहरी समझ मानसिक स्पष्टता और फोकस को बढ़ाती है। | A deeper understanding of Sanskrit enhances mental clarity and focus."
//         />
//         <ImageCard
//           imageSrc="https://d8q326uv7ym5m.cloudfront.net/public/gita/dhyan-yoga.png"
//           title="Sanskrit Meditation | संस्कृत ध्यान"
//           description="संस्कृत के मंत्रों के साथ ध्यान से आंतरिक शांति और संतुलन प्राप्त करें। | Achieve inner peace and balance through meditation with Sanskrit mantras."
//         />
//       </div>

//             {/* Call-to-Action Button with Next.js Link */}
//             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10 animate-slide-up delay-700">
//         <Link href="/sign-up"> {/* Use Next.js Link component */}
//             <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transition duration-300 rounded-full font-semibold text-white shadow-lg transform hover:scale-105">
//               Start Your Sanskrit Journey
//             </button>
//         </Link>
//       </div>

//             {/* Feature Highlights in Three Columns */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-slide-up delay-500">
//         <FeatureCard
//           title="Instant Insight | त्वरित दृष्टि"
//           description="संस्कृत के गहरे और सूक्ष्म अर्थों को तुरंत अनुवादित करने के लिए ए.आई. का उपयोग करें। | Translate the deep and subtle meanings of Sanskrit instantly using AI."
//         />
//         <FeatureCard
//           title="Sonic Precision | ध्वनिक सटीकता"
//           description="संस्कृत उच्चारण में सटीकता प्राप्त करें, ए.आई. के माध्यम से हर ध्वनि को सशक्त बनाएं। | Achieve precision in Sanskrit pronunciation by perfecting every sound through AI."
//         />
//         <FeatureCard
//           title="WordForge | शब्दनिर्माण"
//           description="संस्कृत शब्दावली में दक्षता प्राप्त करें, ए.आई.-आधारित अनुकूलित मार्गदर्शन के साथ। | Master the Sanskrit vocabulary with AI-based tailored guidance."
//         />
//       </div>


//       {/* Interactive Sections */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 animate-fade-in delay-600">
//         <InteractiveCard
//           title="Guided Sanskrit Journey | मार्गदर्शित संस्कृत यात्रा"
//           levels={['प्रारंभिक | Novice', 'विद्वान | Scholar', 'ऋषि | Sage']}
//           description="संस्कृत सीखने के मार्ग को सरल और समझने योग्य बनाएं, चरणबद्ध तरीके से ए.आई. के साथ। | Make the path to learning Sanskrit easy and comprehensible, step-by-step with AI."
//           animationClass="animate-bounce"
//         />
//         <InteractiveCard
//           title="Speak Sanskrit | संस्कृत बोलें"
//           description="संस्कृत उच्चारण को प्रामाणिक बनाएं, ए.आई. आधारित विश्लेषण से मार्गदर्शन प्राप्त करें। | Make your Sanskrit pronunciation authentic with AI-powered voice analysis."
//           animationClass="animate-wiggle"
//         />
//         <InteractiveCard
//           title="Challenge of Knowledge | ज्ञान की चुनौती"
//           description="आपकी शक्ति और गति के अनुसार अनुकूलित क्विज़ के साथ अपनी ज्ञान परीक्षा लें। | Take your knowledge test with quizzes that adapt to your strengths and pace."
//           animationClass="animate-wiggle"
//         />
//         <InteractiveCard
//           title="Visual Sanskrit Discovery | दृश्य संस्कृत अन्वेषण"
//           description="संस्कृत को वीडियो और ए.आई.-संवर्धित दृश्यों के माध्यम से अधिक गहराई से समझें। | Understand Sanskrit more deeply through video lessons and AI-enhanced visuals."
//           animationClass="animate-bounce"
//         />
//       </div>


//     </div>
//   );
// }

// // Image Card Component for Sanskrit Topics
// function ImageCard({ imageSrc, title, description }) {
//   return (
//     <div className="flex flex-col items-center p-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-xl transition transform hover:scale-105 text-center space-y-4">
//       <div className="relative w-full h-64 mb-4">
//         <Image
//           src={imageSrc}
//           alt={title}
//           layout="fill"
//           objectFit="cover"
//           className="rounded-lg shadow-lg filter grayscale hover:grayscale-0 transition-all duration-300"
//         />
//       </div>
//       <h3 className="text-xl font-bold text-white">{title}</h3>
//       <p className="text-sm text-white">{description}</p>
//     </div>
//   );
// }





// // Interactive Card Component for AI Features
// function InteractiveCard({ title, description, levels, animationClass }) {
//   return (
//     <div className={`flex flex-col items-center p-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-xl transform hover:scale-105 text-center ${animationClass}`}>
//       <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//       <p className="text-sm text-white mb-4">{description}</p>
//       {levels && (
//         <div className="flex space-x-2">
//           {levels.map((level, index) => (
//             <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold text-white">
//               {level}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }






// // Feature Card Component for Standard Features
// function FeatureCard({ title, description }) {
//   return (
//     <div className="flex flex-col items-center p-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-xl transition transform hover:scale-105 text-center space-y-2">
//       <h3 className="text-lg font-bold text-white">{title}</h3>
//       <p className="text-sm text-white">{description}</p>
//     </div>
//   );
// }
















// import React from 'react';
// import Link from 'next/link'; // Import Next.js Link component
// import Image from 'next/image'; // Import Image component for optimized images

// export default function Hero() {
//   return (
//     <div className="relative bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen flex flex-col items-center justify-center text-gray-800 px-6 py-10 space-y-12">

// <div className="relative text-center space-y-6 max-w-3xl z-10">
//   {/* Title with Gradient and Shadow */}
//   <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider text-transparent bg-clip-text text-white hover:scale-105 hover:text-yellow-400 transition-all duration-300 ease-in-out">
//     SanskritAI
//   </h1>
  
//   {/* Tagline with Hover Effects */}
//   <p className="text-xl font-semibold text-white tracking-wide leading-relaxed hover:text-green-400 hover:border-b-2 hover:border-green-400 transition-all duration-300 ease-in-out">
//     संस्कृत ज्ञान का संगम, AI की शक्ति के साथ | Ancient Wisdom Meets Modern AI
//   </p>
  
//   {/* Quote with Glowing Hover Effect */}
//   <p className="text-lg italic text-white tracking-wider leading-relaxed hover:text-yellow-500 hover:drop-shadow-2xl hover:scale-110 transition-all duration-300 ease-in-out">
//     "सर्वं ज्ञानं संस्कृतेन अस्ति" – <span className="text-yellow-500 font-medium">All knowledge lies within Sanskrit.</span>
//   </p>
  
//   {/* Description with Glow and Hover Effect */}
//   <div className="flex flex-wrap justify-center gap-6 px-6 py-10">
//   {/* Sanskrit Card */}
//   <div className="flex-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-lg p-6 space-y-4 max-w-sm transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out hover:bg-gradient-to-l from-blue-500 to-purple-600 group">
//     <p className="text-md leading-relaxed text-white tracking-wide group-hover:text-yellow-300 transition-colors duration-300 ease-in-out hover:drop-shadow-2xl">
//       संस्कृत केवल एक भाषा नहीं, बल्कि एक ऐसी धारा है जो हमारे विचार, संस्कृति और ज्ञान के मूल में बसी हुई है। 
//       <br />
//       <br />
//       इस ज्ञान के माध्यम से न केवल आप एक प्राचीन भाषा सीखेंगे, बल्कि अपनी सोच, समझ और जीवन के दृष्टिकोण को भी व्यापक करेंगे।
//     </p>
//   </div>

//   {/* Separator (Optional) */}
//   <div className="flex items-center justify-center text-white text-xl">
//     <span className="text-xl animate-pulse">|</span>
//   </div>

//   {/* English Card */}
//   <div className="flex-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-lg p-6 space-y-4 max-w-sm transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out hover:bg-gradient-to-l from-green-500 to-purple-600 group">
//     <p className="text-md leading-relaxed text-white tracking-wide group-hover:text-yellow-300 transition-colors duration-300 ease-in-out hover:drop-shadow-2xl">
//       Sanskrit is not just a language; it is a stream of knowledge that lies at the core of our thoughts, culture, and wisdom. 
//       <br />
//       <br />
//       Through this, you will not only learn an ancient language but also expand your thinking, understanding, and perspective on life.
//     </p>
//   </div>
// </div>

// </div>


//       {/* Three Image Cards in a Row */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-slide-up delay-500">
//         <ImageCard
//           imageSrc="https://d8q326uv7ym5m.cloudfront.net/public/gita/dhyan-yoga.png"
//           title="Yoga and Sanskrit | योग और संस्कृत"
//           description="संस्कृत के श्लोकों का उच्चारण योग के अभ्यास में मानसिक शांति और संतुलन लाता है। | The chanting of Sanskrit verses during yoga practice brings mental peace and balance."
//         />
//         <ImageCard
//           imageSrc="https://d8q326uv7ym5m.cloudfront.net/public/gita/dhyan-yoga.png"
//           title="Sanskrit for Clarity | स्पष्टता के लिए संस्कृत"
//           description="संस्कृत की गहरी समझ मानसिक स्पष्टता और फोकस को बढ़ाती है। | A deeper understanding of Sanskrit enhances mental clarity and focus."
//         />
//         <ImageCard
//           imageSrc="https://d8q326uv7ym5m.cloudfront.net/public/gita/dhyan-yoga.png"
//           title="Sanskrit Meditation | संस्कृत ध्यान"
//           description="संस्कृत के मंत्रों के साथ ध्यान से आंतरिक शांति और संतुलन प्राप्त करें। | Achieve inner peace and balance through meditation with Sanskrit mantras."
//         />
//       </div>

//       {/* Call-to-Action Button with Next.js Link */}
//       <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10 animate-slide-up delay-700">
//         <Link href="/sign-up"> {/* Use Next.js Link component */}
//             <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transition duration-300 rounded-full font-semibold text-white shadow-lg transform hover:scale-105">
//               Start Your Sanskrit Journey
//             </button>
//         </Link>
//       </div>

//       {/* Feature Highlights in Three Columns */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-slide-up delay-500">
//         <FeatureCard
//           title="Instant Insight | त्वरित दृष्टि"
//           description="संस्कृत के गहरे और सूक्ष्म अर्थों को तुरंत अनुवादित करने के लिए ए.आई. का उपयोग करें। | Translate the deep and subtle meanings of Sanskrit instantly using AI."
//         />
//         <FeatureCard
//           title="Sonic Precision | ध्वनिक सटीकता"
//           description="संस्कृत उच्चारण में सटीकता प्राप्त करें, ए.आई. के माध्यम से हर ध्वनि को सशक्त बनाएं। | Achieve precision in Sanskrit pronunciation by perfecting every sound through AI."
//         />
//         <FeatureCard
//           title="WordForge | शब्दनिर्माण"
//           description="संस्कृत शब्दावली में दक्षता प्राप्त करें, ए.आई.-आधारित अनुकूलित मार्गदर्शन के साथ। | Master the Sanskrit vocabulary with AI-based tailored guidance."
//         />
//       </div>

//       {/* Interactive Sections */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 animate-fade-in delay-600">
//         <InteractiveCard
//           title="Guided Sanskrit Journey | मार्गदर्शित संस्कृत यात्रा"
//           levels={['प्रारंभिक | Novice', 'विद्वान | Scholar', 'ऋषि | Sage']}
//           description="संस्कृत सीखने के मार्ग को सरल और समझने योग्य बनाएं, चरणबद्ध तरीके से ए.आई. के साथ। | Make the path to learning Sanskrit easy and comprehensible, step-by-step with AI."
//           animationClass="animate-bounce"
//         />
//         <InteractiveCard
//           title="Speak Sanskrit | संस्कृत बोलें"
//           description="संस्कृत उच्चारण को प्रामाणिक बनाएं, ए.आई. आधारित विश्लेषण से मार्गदर्शन प्राप्त करें। | Make your Sanskrit pronunciation authentic with AI-powered voice analysis."
//           animationClass="animate-wiggle"
//         />
//         <InteractiveCard
//           title="Challenge of Knowledge | ज्ञान की चुनौती"
//           description="आपकी शक्ति और गति के अनुसार अनुकूलित क्विज़ के साथ अपनी ज्ञान परीक्षा लें। | Take your knowledge test with quizzes that adapt to your strengths and pace."
//           animationClass="animate-wiggle"
//         />
//         <InteractiveCard
//           title="Visual Sanskrit Discovery | दृश्य संस्कृत अन्वेषण"
//           description="संस्कृत को वीडियो और ए.आई.-संवर्धित दृश्यों के माध्यम से अधिक गहराई से समझें। | Understand Sanskrit more deeply through video lessons and AI-enhanced visuals."
//           animationClass="animate-bounce"
//         />
//       </div>

//     </div>
//   );
// }

// // Image Card Component for Sanskrit Topics with Glowing Effect
// function ImageCard({ imageSrc, title, description }) {
//   return (
//     <div className="flex flex-col items-center p-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-xl transition transform hover:scale-105 text-center space-y-4 hover:bg-gradient-to-l hover:from-indigo-500 hover:to-purple-600 hover:shadow-2xl">
//       <div className="relative w-full h-64 mb-4 transform transition-all hover:scale-110">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 opacity-0 hover:opacity-70 transition-all duration-300 rounded-lg"></div>
//         <Image
//           src={imageSrc}
//           alt={title}
//           layout="fill"
//           objectFit="cover"
//           className="rounded-lg shadow-lg filter grayscale hover:grayscale-0 transition-all duration-300"
//         />
//       </div>
//       <h3 className="text-xl font-bold text-white">{title}</h3>
//       <p className="text-sm text-white">{description}</p>
//     </div>
//   );
// }

// // Interactive Card Component for AI Features
// function InteractiveCard({ title, description, levels, animationClass }) {
//   return (
//     <div className={`flex flex-col items-center p-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-xl transform hover:scale-105 text-center ${animationClass}`}>
//       <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//       <p className="text-sm text-white mb-4">{description}</p>
//       {levels && (
//         <div className="flex space-x-2">
//           {levels.map((level, index) => (
//             <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold text-white">
//               {level}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// // Feature Card Component for Standard Features
// function FeatureCard({ title, description }) {
//   return (
//     <div className="flex flex-col items-center p-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-xl transition transform hover:scale-105 text-center space-y-2">
//       <h3 className="text-lg font-bold text-white">{title}</h3>
//       <p className="text-sm text-white">{description}</p>
//     </div>
//   );
// }




































import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen flex flex-col items-center justify-center text-gray-800 px-6 py-10 space-y-12">

      <div className="relative text-center space-y-6 max-w-3xl z-10">
        {/* Title with Gradient and Shadow */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wider text-transparent bg-clip-text text-white hover:scale-105 hover:text-yellow-400 transition-all duration-300 ease-in-out">
          SanskritAI
        </h1>

        {/* Tagline with Hover Effects */}
        <p className="text-xl sm:text-2xl font-semibold text-white tracking-wide leading-relaxed hover:text-green-400 hover:border-b-2 hover:border-green-400 transition-all duration-300 ease-in-out">
          संस्कृत ज्ञान का संगम, AI की शक्ति के साथ | Ancient Wisdom Meets Modern AI
        </p>

        {/* Quote with Glowing Hover Effect */}
        <p className="text-lg sm:text-xl italic text-white tracking-wider leading-relaxed hover:text-yellow-500 hover:drop-shadow-2xl hover:scale-110 transition-all duration-300 ease-in-out">
          "सर्वं ज्ञानं संस्कृतेन अस्ति" – <span className="text-yellow-500 font-medium">All knowledge lies within Sanskrit.</span>
        </p>

        {/* Description with Glow and Hover Effect */}
        <div className="flex flex-wrap justify-center gap-6 px-6 py-10">
          {/* Sanskrit Card */}
          <div className="flex-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-lg p-6 space-y-4 max-w-sm transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out hover:bg-gradient-to-l from-blue-500 to-purple-600 group">
            <p className="text-md leading-relaxed text-white tracking-wide group-hover:text-yellow-300 transition-colors duration-300 ease-in-out hover:drop-shadow-2xl">
              संस्कृत केवल एक भाषा नहीं, बल्कि एक ऐसी धारा है जो हमारे विचार, संस्कृति और ज्ञान के मूल में बसी हुई है।
              <br />
              <br />
              इस ज्ञान के माध्यम से न केवल आप एक प्राचीन भाषा सीखेंगे, बल्कि अपनी सोच, समझ और जीवन के दृष्टिकोण को भी व्यापक करेंगे।
            </p>
          </div>

          {/* Separator (Optional) */}
          <div className="flex items-center justify-center text-white text-xl">
            <span className="text-xl animate-pulse">|</span>
          </div>

          {/* English Card */}
          <div className="flex-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-lg p-6 space-y-4 max-w-sm transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out hover:bg-gradient-to-l from-green-500 to-purple-600 group">
            <p className="text-md leading-relaxed text-white tracking-wide group-hover:text-yellow-300 transition-colors duration-300 ease-in-out hover:drop-shadow-2xl">
              Sanskrit is not just a language; it is a stream of knowledge that lies at the core of our thoughts, culture, and wisdom.
              <br />
              <br />
              Through this, you will not only learn an ancient language but also expand your thinking, understanding, and perspective on life.
            </p>
          </div>
        </div>

      </div>

      {/* Three Image Cards in a Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-slide-up delay-500">
        <ImageCard
          imageSrc="https://d8q326uv7ym5m.cloudfront.net/public/hero/sanskritMed.jpg"
          title="Yoga and Sanskrit | योग और संस्कृत"
          description="संस्कृत के श्लोकों का उच्चारण योग के अभ्यास में मानसिक शांति और संतुलन लाता है। | The chanting of Sanskrit verses during yoga practice brings mental peace and balance."
        />
        <ImageCard
          imageSrc="https://d8q326uv7ym5m.cloudfront.net/public/hero/clarity.jpg"
          title="Sanskrit for Clarity | स्पष्टता के लिए संस्कृत"
          description="संस्कृत की गहरी समझ मानसिक स्पष्टता और फोकस को बढ़ाती है। | A deeper understanding of Sanskrit enhances mental clarity and focus."
        />
        <ImageCard
          imageSrc="https://d8q326uv7ym5m.cloudfront.net/public/hero/medidation.jpg"
          title="Sanskrit Meditation | संस्कृत ध्यान"
          description="संस्कृत के मंत्रों के साथ ध्यान से आंतरिक शांति और संतुलन प्राप्त करें। | Achieve inner peace and balance through meditation with Sanskrit mantras."
        />
      </div>

      {/* Call-to-Action Button with Next.js Link */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10 animate-slide-up delay-700">
        <Link href="/sign-up">
          <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transition duration-300 rounded-full font-semibold text-white shadow-lg transform hover:scale-105">
            Start Your Sanskrit Journey
          </button>
        </Link>
      </div>

      {/* Feature Highlights in Three Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-slide-up delay-500">
        <FeatureCard
          title="Instant Insight | त्वरित दृष्टि"
          description="संस्कृत के गहरे और सूक्ष्म अर्थों को तुरंत अनुवादित करने के लिए ए.आई. का उपयोग करें। | Translate the deep and subtle meanings of Sanskrit instantly using AI."
        />
        <FeatureCard
          title="Sonic Precision | ध्वनिक सटीकता"
          description="संस्कृत उच्चारण में सटीकता प्राप्त करें, ए.आई. के माध्यम से हर ध्वनि को सशक्त बनाएं। | Achieve precision in Sanskrit pronunciation by perfecting every sound through AI."
        />
        <FeatureCard
          title="WordForge | शब्दनिर्माण"
          description="संस्कृत शब्दावली में दक्षता प्राप्त करें, ए.आई.-आधारित अनुकूलित मार्गदर्शन के साथ। | Master the Sanskrit vocabulary with AI-based tailored guidance."
        />
      </div>

      {/* Interactive Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 animate-fade-in delay-600">
        <InteractiveCard
          title="Guided Sanskrit Journey | मार्गदर्शित संस्कृत यात्रा"
          levels={['प्रारंभिक | Novice', 'विद्वान | Scholar', 'ऋषि | Sage']}
          description="संस्कृत सीखने के मार्ग को सरल और समझने योग्य बनाएं, चरणबद्ध तरीके से ए.आई. के साथ। | Make the path to learning Sanskrit easy and comprehensible, step-by-step with AI."
          animationClass="animate-bounce"
        />
        <InteractiveCard
          title="Speak Sanskrit | संस्कृत बोलें"
          description="संस्कृत उच्चारण को प्रामाणिक बनाएं, ए.आई. आधारित विश्लेषण से मार्गदर्शन प्राप्त करें। | Make your Sanskrit pronunciation authentic with AI-powered voice analysis."
          animationClass="animate-wiggle"
        />
        <InteractiveCard
          title="Challenge of Knowledge | ज्ञान की चुनौती"
          description="आपकी शक्ति और गति के अनुसार अनुकूलित क्विज़ के साथ अपनी ज्ञान परीक्षा लें। | Take your knowledge test with quizzes that adapt to your strengths and pace."
          animationClass="animate-wiggle"
        />
        <InteractiveCard
          title="Visual Sanskrit Discovery | दृश्य संस्कृत अन्वेषण"
          description="संस्कृत को वीडियो और ए.आई.-संवर्धित दृश्यों के माध्यम से अधिक गहराई से समझें। | Understand Sanskrit more deeply through video lessons and AI-enhanced visuals."
          animationClass="animate-bounce"
        />
      </div>

    </div>
  );
}

// Image Card Component for Sanskrit Topics with Glowing Effect
function ImageCard({ imageSrc, title, description }) {
  return (
    <div className="flex flex-col items-center p-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-xl transition transform hover:scale-105 text-center space-y-4 hover:bg-gradient-to-l hover:from-indigo-500 hover:to-purple-600 hover:shadow-2xl">
      <div className="relative w-full h-64 mb-4 transform transition-all hover:scale-110">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 opacity-0 hover:opacity-70 transition-all duration-300 rounded-lg"></div>
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg filter grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-sm text-white">{description}</p>
    </div>
  );
}

// Interactive Card Component for AI Features
function InteractiveCard({ title, description, levels, animationClass }) {
  return (
    <div className={`flex flex-col items-center p-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-xl transform hover:scale-105 text-center ${animationClass}`}>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-white mb-4">{description}</p>
      {levels && (
        <div className="flex space-x-2">
          {levels.map((level, index) => (
            <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold text-white">
              {level}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// Feature Card Component for Standard Features
function FeatureCard({ title, description }) {
  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-xl transition transform hover:scale-105 text-center space-y-2">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-white">{description}</p>
    </div>
  );
}
