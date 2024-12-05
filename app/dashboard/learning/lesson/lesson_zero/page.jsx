// "use client";

// import React, { useState, useEffect, useRef } from "react";

// const Lesson = () => {
//   const [data, setData] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showHindi, setShowHindi] = useState(false);
//   const audioRef = useRef(null);  // To control the audio player

//   useEffect(() => {
//     // Simulating fetching data from an API or local file
//     fetch("/data/lesson/lesson0.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData.word))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   if (data.length === 0)
//     return <div className="text-center text-xl animate__animated animate__fadeIn">Loading...</div>;

//   const currentWord = data[currentIndex];

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? data.length - 1 : prevIndex - 1
//     );
//   };

//   // Custom audio player functionality
//   const handlePlayPause = () => {
//     const audioElement = audioRef.current;
//     if (audioElement.paused) {
//       audioElement.play();
//     } else {
//       audioElement.pause();
//     }
//   };

//   // Progress bar update
//   const handleTimeUpdate = () => {
//     const audioElement = audioRef.current;
//     const progressBar = document.getElementById("progressBar");
//     const progress = (audioElement.currentTime / audioElement.duration) * 100;
//     progressBar.style.width = `${progress}%`;
//   };

//   return (
//     <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-4 flex flex-col items-center justify-between min-h-screen">
//       <h1 className="text-3xl font-extrabold text-white text-center mb-6 animate__animated animate__fadeIn animate__delay-1s">
//         Sanskrit: The Divine Language
//       </h1>

//       {/* Main Content Section */}
//       <div className="flex flex-col md:flex-row w-full max-w-7xl p-4 shadow-2xl bg-gradient-to-r from-slate-900 to-slate-700 rounded-3xl animate__animated animate__fadeIn animate__delay-1s">
//         {/* Left Section: Content (Pronunciation, Description, Learning Tip) */}
//         <div className="w-full md:w-2/3 pr-4 md:pr-8 mb-4 md:mb-0">
//           <h2 className="text-xl font-semibold mb-4 text-center text-indigo-100 animate__animated animate__fadeIn animate__delay-2s">
//             {currentWord.symbol} - {currentWord.name}
//           </h2>

//           {/* Pronunciation Card */}
//           <div className="mb-4">
//             <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg p-4 shadow-md transform transition-transform hover:scale-105 hover:shadow-xl ease-in-out duration-300">
//               <h3 className="text-lg font-semibold text-indigo-100 mb-2">Pronunciation</h3>
              
//               {/* Custom Audio Player */}
//               <div className="flex items-center justify-between">
//                 <button onClick={handlePlayPause} className="bg-indigo-600 text-white p-2 rounded-full shadow-lg transform transition-all hover:scale-110 hover:bg-indigo-700 duration-300 ease-in-out">
//                   {/* Updated music icon */}
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 7l5 5-5 5V7z" />
//                   </svg>
//                 </button>

//                 <div className="flex-1 mx-4 relative">
//                   <div className="w-full h-2 bg-gradient-to-r from-slate-900 to-slate-700 rounded-full">
//                     <div id="progressBar" className="h-2 bg-indigo-600 rounded-full"></div>
//                   </div>
//                 </div>

//                 <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}>
//                   <source src={currentWord.audio} type="audio/mpeg" />
//                   Your browser does not support the audio element.
//                 </audio>
//               </div>
//               <p className="text-md text-center text-white">
//                 <span className="font-semibold">Pronunciation:</span> {currentWord.pronunciation}
//               </p>
//             </div>
//           </div>

//           {/* Enhanced Learning Tip Card */}
//           <div className="mb-4">
//             <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg p-6 shadow-md transform transition-transform hover:scale-105 hover:shadow-xl ease-in-out duration-300 hover:bg-indigo-700 animate__animated animate__fadeIn animate__delay-3s">
//               <div className="flex items-center mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-white mr-3"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 18v2m0 4v-2m0 0h6m-6 0H6m0 0h6m6 0h6m-6 0a6 6 0 100-12 6 6 0 000 12z"
//                   />
//                 </svg>
//                 <h3 className="text-lg font-semibold text-white">Learning Tip</h3>
//               </div>
//               <p className="text-md text-white font-medium">
//                 <span className="font-semibold">Tip:</span>{" "}
//                 {showHindi ? currentWord.hindi_learning_tip : currentWord.learning_tip}
//               </p>
//             </div>
//           </div>

//           {/* Toggle Button */}
//           <div className="flex justify-center mb-6">
//             <button
//               onClick={() => setShowHindi(!showHindi)}
//               className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-110 hover:shadow-xl hover:bg-indigo-700 duration-300 ease-in-out"
//             >
//               {showHindi ? "Show in English" : "Show in Hindi"}
//             </button>
//           </div>
//         </div>

//         {/* Right Section: Image */}
//         <div className="w-full md:w-1/3 h-80 md:h-auto relative group overflow-hidden">
//           <img
//             src={currentWord.image}
//             alt={currentWord.name}
//             className="rounded-lg w-full h-full object-cover shadow-lg transition-all transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-3"
//           />
//           <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30 transition-opacity group-hover:opacity-0"></div>
//         </div>
//       </div>

//       {/* Footer with Navigation Buttons */}
//       <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-4 shadow-lg flex justify-between items-center w-full mt-4">
//         <button
//           onClick={handlePrevious}
//           className="bg-gradient-to-r from-purple-600 to-blue-600 text-gray-800 px-6 py-3 rounded-lg shadow-lg transform transition-all hover:scale-110 hover:shadow-xl hover:bg-gray-400 duration-300 ease-in-out"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-gradient-to-r from-purple-600 to-blue-600 text-gray-800 px-6 py-3 rounded-lg shadow-lg transform transition-all hover:scale-110 hover:shadow-xl hover:bg-gray-400 duration-300 ease-in-out"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Lesson;




















"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link"; // Importing Link from next/link

const Lesson = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHindi, setShowHindi] = useState(false);
  const audioRef = useRef(null);  // To control the audio player

  useEffect(() => {
    // Simulating fetching data from an API or local file
    fetch("/data/lesson/lesson0.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.word))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (data.length === 0)
    return <div className="text-center text-xl animate__animated animate__fadeIn">Loading...</div>;

  const currentWord = data[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  // Custom audio player functionality
  const handlePlayPause = () => {
    const audioElement = audioRef.current;
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  };

  // Progress bar update
  const handleTimeUpdate = () => {
    const audioElement = audioRef.current;
    const progressBar = document.getElementById("progressBar");
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    progressBar.style.width = `${progress}%`;
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-4 flex flex-col items-center justify-between min-h-screen">
      {/* Back to Dashboard Button */}
      <div className="w-full flex justify-start mb-4">
        <Link href="/dashboard/learning">
          <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-2 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-110 hover:bg-indigo-700 duration-300 ease-in-out">
            Back to Dashboard
          </button>
        </Link>
      </div>

      <h1 className="text-3xl font-extrabold text-white text-center mb-6 animate__animated animate__fadeIn animate__delay-1s">
        Sanskrit: The Divine Language
      </h1>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl p-4 shadow-2xl bg-gradient-to-r from-slate-900 to-slate-700 rounded-3xl animate__animated animate__fadeIn animate__delay-1s">
        {/* Left Section: Content (Pronunciation, Description, Learning Tip) */}
        <div className="w-full md:w-2/3 pr-4 md:pr-8 mb-4 md:mb-0">
          <h2 className="text-xl font-semibold mb-4 text-center text-indigo-100 animate__animated animate__fadeIn animate__delay-2s">
            {currentWord.symbol} - {currentWord.name}
          </h2>

          {/* Pronunciation Card */}
          <div className="mb-4">
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg p-4 shadow-md transform transition-transform hover:scale-105 hover:shadow-xl ease-in-out duration-300">
              <h3 className="text-lg font-semibold text-indigo-100 mb-2">Pronunciation</h3>
              
              {/* Custom Audio Player */}
              <div className="flex items-center justify-between">
                <button onClick={handlePlayPause} className="bg-indigo-600 text-white p-2 rounded-full shadow-lg transform transition-all hover:scale-110 hover:bg-indigo-700 duration-300 ease-in-out">
                  {/* Updated music icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 7l5 5-5 5V7z" />
                  </svg>
                </button>

                <div className="flex-1 mx-4 relative">
                  <div className="w-full h-2 bg-gradient-to-r from-slate-900 to-slate-700 rounded-full">
                    <div id="progressBar" className="h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                </div>

                <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}>
                  <source src={currentWord.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              <p className="text-md text-center text-white">
                <span className="font-semibold">Pronunciation:</span> {currentWord.pronunciation}
              </p>
            </div>
          </div>

          {/* Enhanced Learning Tip Card */}
          <div className="mb-4">
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg p-6 shadow-md transform transition-transform hover:scale-105 hover:shadow-xl ease-in-out duration-300 hover:bg-indigo-700 animate__animated animate__fadeIn animate__delay-3s">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18v2m0 4v-2m0 0h6m-6 0H6m0 0h6m6 0h6m-6 0a6 6 0 100-12 6 6 0 000 12z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-white">Learning Tip</h3>
              </div>
              <p className="text-md text-white font-medium">
                <span className="font-semibold">Tip:</span>{" "}
                {showHindi ? currentWord.hindi_learning_tip : currentWord.learning_tip}
              </p>
            </div>
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setShowHindi(!showHindi)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-110 hover:shadow-xl hover:bg-indigo-700 duration-300 ease-in-out"
            >
              {showHindi ? "Show in English" : "Show in Hindi"}
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/3 h-80 md:h-auto relative group overflow-hidden">
          <img
            src={currentWord.image}
            alt={currentWord.name}
            className="rounded-lg w-full h-full object-cover shadow-lg transition-all transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-3"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30 transition-opacity group-hover:opacity-0"></div>
        </div>
      </div>

      {/* Footer with Navigation Buttons */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-4 shadow-lg flex justify-between items-center w-full mt-4">
        <button
          onClick={handlePrevious}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-gray-800 px-6 py-3 rounded-lg shadow-lg transform transition-all hover:scale-110 hover:shadow-xl hover:bg-gray-400 duration-300 ease-in-out"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-gray-800 px-6 py-3 rounded-lg shadow-lg transform transition-all hover:scale-110 hover:shadow-xl hover:bg-gray-400 duration-300 ease-in-out"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Lesson;
