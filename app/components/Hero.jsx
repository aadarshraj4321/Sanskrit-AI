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













import React from 'react';
import Link from 'next/link'; // Import Next.js Link component

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen flex flex-col items-center justify-center text-gray-800 px-6 py-10 space-y-12">
      {/* Title and Tagline */}
      <div className="text-center space-y-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider text-white animate-fade-in">
          SanskritAI
        </h1>
        <p className="text-xl font-semibold text-white animate-slide-up delay-200">
          Ancient Wisdom Meets Modern AI | प्राचीन ज्ञान meets आधुनिक ए.आई.
        </p>
        <p className="text-lg italic text-white animate-slide-up delay-300">
          "सर्वं ज्ञानं संस्कृतेन अस्ति" – <span className="text-yellow-500 font-medium">All knowledge lies within Sanskrit.</span>
        </p>
        <p className="text-md leading-relaxed text-white animate-slide-up delay-400">
          Dive deep into the world of Sanskrit with interactive AI-powered tools. From learning every word to mastering pronunciation, discover the essence of Sanskrit. 
          | इंटरएक्टिव ए.आई.-आधारित उपकरणों के साथ संस्कृत की दुनिया में गहराई से उतरें। प्रत्येक शब्द को सीखने से लेकर उच्चारण में महारत हासिल करने तक, संस्कृत के सार को खोजें।
        </p>
      </div>

      {/* Feature Highlights in Three Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-slide-up delay-500">
        <FeatureCard
          title="Instant Insight | त्वरित दृष्टि"
          description="Translate intricate Sanskrit texts instantly, leveraging AI to uncover nuanced meanings. | संस्कृत ग्रंथों का त्वरित अनुवाद करें, ए.आई. का उपयोग करके सूक्ष्म अर्थों को उजागर करें।"
        />
        <FeatureCard
          title="Sonic Precision | ध्वनिक सटीकता"
          description="Perfect every syllable with real-time, AI-powered pronunciation feedback. | प्रत्येक स्वर को वास्तविक समय में, ए.आई. द्वारा संचालित उच्चारण प्रतिक्रिया से परिपूर्ण करें।"
        />
        <FeatureCard
          title="WordForge | शब्दनिर्माण"
          description="Master essential vocabulary with custom, AI-adaptive learning paths tailored to your progress. | अपनी प्रगति के अनुसार अनुकूलित, ए.आई.-आधारित पाठ्यक्रम के साथ आवश्यक शब्दावली को मास्टर करें।"
        />
      </div>

      {/* Interactive Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 animate-fade-in delay-600">
        <InteractiveCard
          title="Guided Sanskrit Journey | मार्गदर्शित संस्कृत यात्रा"
          levels={['Novice | प्रारंभिक', 'Scholar | विद्वान', 'Sage | ऋषि']}
          description="Learn Sanskrit step-by-step with interactive lessons and personalized AI guidance. | इंटरएक्टिव पाठों और व्यक्तिगत ए.आई. मार्गदर्शन के साथ संस्कृत को चरणबद्ध तरीके से सीखें।"
          animationClass="animate-bounce"
        />
        <InteractiveCard
          title="Speak Sanskrit | संस्कृत बोलें"
          description="Practice and refine your Sanskrit pronunciation with AI-powered voice analysis. | ए.आई. आधारित आवाज़ विश्लेषण से अपनी संस्कृत उच्चारण का अभ्यास और सुधार करें।"
          animationClass="animate-wiggle"
        />
        <InteractiveCard
          title="Challenge of Knowledge | ज्ञान की चुनौती"
          description="Test yourself with quizzes that adapt to your strengths and learning pace. | ऐसे क्विज़ के साथ अपनी परीक्षा लें जो आपकी ताकत और सीखने की गति के अनुसार अनुकूलित होते हैं।"
          animationClass="animate-wiggle"
        />
        <InteractiveCard
          title="Visual Sanskrit Discovery | दृश्य संस्कृत अन्वेषण"
          description="Explore Sanskrit through video lessons and AI-augmented visuals that enhance comprehension. | वीडियो पाठों और ए.आई.-संवर्धित दृश्य सामग्री के माध्यम से संस्कृत का अन्वेषण करें जो समझ को बढ़ाता है।"
          animationClass="animate-bounce"
        />
      </div>

      {/* Call-to-Action Button with Next.js Link */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10 animate-slide-up delay-700">
        <Link href="/sign-up"> {/* Use Next.js Link component */}
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transition duration-300 rounded-full font-semibold text-white shadow-lg transform hover:scale-105">
              Start Your Sanskrit Journey
            </button>
        </Link>
      </div>
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
