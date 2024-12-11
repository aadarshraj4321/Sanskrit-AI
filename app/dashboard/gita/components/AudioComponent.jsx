// "use client";

// import React, { useState, useRef } from "react";

// const AudioComponent = ({ audio, image }) => {
//   const audioRef = useRef(null);
//   const [playbackSpeed, setPlaybackSpeed] = useState(1);

//   const handleSpeedChange = (speed) => {
//     setPlaybackSpeed(speed);
//     if (audioRef.current) {
//       audioRef.current.playbackRate = speed;
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg drop-shadow p-4 dark:bg-black dark:shadow-white">
//       {/* Image Section */}
//       <div className="flex flex-col justify-center items-center">
//         <img
//           className="rounded-lg aspect-square w-64"
//           src={image}
//           alt="Audio Thumbnail"
//         />
//       </div>

//       {/* Audio Controls Section */}
//       <div className="flex flex-col justify-center items-center my-4">
//         <audio ref={audioRef} controls>
//           <source src={audio} type="audio/mp3" />
//           Your browser does not support the audio element.
//         </audio>

//         {/* Playback Speed Control */}
//         <div className="flex justify-center space-x-4 mt-4">
//           <button
//             onClick={() => handleSpeedChange(1)}
//             className="px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-300"
//           >
//             1x
//           </button>
//           <button
//             onClick={() => handleSpeedChange(1.5)}
//             className="px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-300"
//           >
//             1.5x
//           </button>
//           <button
//             onClick={() => handleSpeedChange(2)}
//             className="px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-300"
//           >
//             2x
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AudioComponent;












// "use client";

// import React, { useState, useRef } from "react";

// const AudioComponent = ({ audio, image }) => {
//   const audioRef = useRef(null);
//   const [playbackSpeed, setPlaybackSpeed] = useState(1);

//   const handleSpeedChange = (speed) => {
//     setPlaybackSpeed(speed);
//     if (audioRef.current) {
//       audioRef.current.playbackRate = speed;
//     }
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800 dark:shadow-lg transition-all duration-300">
//       {/* Image Section */}
//       <div className="relative">
//         <img
//           className="w-full h-64 object-cover rounded-t-xl transform transition-transform duration-300 hover:scale-105"
//           src={image}
//           alt="Audio Thumbnail"
//         />
//         {/* Optional overlay for better readability */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-t-xl"></div>
//       </div>

//       {/* Audio Controls Section */}
//       <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 rounded-b-xl">
//         {/* Audio Player */}
//         <audio ref={audioRef} controls className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md">
//           <source src={audio} type="audio/mp3" />
//           Your browser does not support the audio element.
//         </audio>

//         {/* Playback Speed Control */}
//         <div className="flex justify-center space-x-6">
//           {/** Playback speed buttons with better hover effects */}
//           {[1, 1.5, 2].map((speed) => (
//             <button
//               key={speed}
//               onClick={() => handleSpeedChange(speed)}
//               className={`px-6 py-2 rounded-full font-semibold text-lg transition-all duration-200 ease-in-out ${
//                 playbackSpeed === speed
//                   ? "bg-indigo-600 text-white shadow-md transform scale-105"
//                   : "bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-indigo-500 hover:text-white"
//               }`}
//             >
//               {speed}x
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AudioComponent;














// "use client";

// import React, { useState, useRef } from "react";

// const AudioComponent = ({ audio, image }) => {
//   const audioRef = useRef(null);
//   const [playbackSpeed, setPlaybackSpeed] = useState(1);

//   const handleSpeedChange = (speed) => {
//     setPlaybackSpeed(speed);
//     if (audioRef.current) {
//       audioRef.current.playbackRate = speed;
//     }
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800 dark:shadow-lg transition-all duration-300">
//       {/* Image Section */}
//       <div className="relative">
//         <img
//           className="w-full h-64 object-cover rounded-t-xl"
//           src={image}
//           alt="Audio Thumbnail"
//         />
//         {/* Optional overlay for better readability */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-t-xl"></div>
//       </div>

//       {/* Audio Controls Section */}
//       <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 rounded-b-xl">
//         {/* Audio Player */}
//         <audio ref={audioRef} controls className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md">
//           <source src={audio} type="audio/mp3" />
//           Your browser does not support the audio element.
//         </audio>

//         {/* Playback Speed Control */}
//         <div className="flex justify-center space-x-6">
//           {/** Playback speed buttons without hover effects */}
//           {[1, 1.5, 2].map((speed) => (
//             <button
//               key={speed}
//               onClick={() => handleSpeedChange(speed)}
//               className={`px-6 py-2 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out ${
//                 playbackSpeed === speed
//                   ? "bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white shadow-xl"
//                   : "bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
//               }`}
//             >
//               {speed}x
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AudioComponent;


















// "use client";

// import React, { useState, useRef } from "react";
// import Image from "next/image"; // Import Next.js Image component

// const AudioComponent = ({ audio, image }) => {
//   const audioRef = useRef(null);
//   const [playbackSpeed, setPlaybackSpeed] = useState(1);

//   const handleSpeedChange = (speed) => {
//     setPlaybackSpeed(speed);
//     if (audioRef.current) {
//       audioRef.current.playbackRate = speed;
//     }
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800 dark:shadow-lg transition-all duration-300">
//       {/* Image Section */}
//       <div className="relative">
//         <Image
//           className="w-full h-64 object-cover rounded-t-xl"
//           src={image} // Use Next.js Image component
//           alt="Audio Thumbnail"
//           width={640} // Define width (adjust as needed)
//           height={256} // Define height (adjust as needed)
//           priority // Optional: if you want to preload the image
//         />
//         {/* Optional overlay for better readability */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-t-xl"></div>
//       </div>

//       {/* Audio Controls Section */}
//       <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 rounded-b-xl">
//         {/* Audio Player */}
//         <audio
//           ref={audioRef}
//           controls
//           className="w-full dark:bg-gray-700 rounded-lg shadow-md text-sm py-2"
//         >
//           <source src={audio} type="audio/mp3" />
//           Your browser does not support the audio element.
//         </audio>


//         {/* Playback Speed Control */}
//         <div className="flex justify-center space-x-6">
//           {/** Playback speed buttons without hover effects */}
//           {[1, 1.5, 2].map((speed) => (
//             <button
//               key={speed}
//               onClick={() => handleSpeedChange(speed)}
//               className={`px-6 py-2 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out ${playbackSpeed === speed
//                   ? "bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-xl"
//                   : "bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
//                 }`}
//             >
//               {speed}x
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AudioComponent;















"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

const AudioComponent = ({ audio, image }) => {
  const audioRef = useRef(null);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  return (
    <div className="rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 overflow-hidden max-w-md mx-auto transition-all duration-300">
      {/* Image Section */}
      <div className="relative h-48">
        <Image
          src={image}
          alt="Audio Thumbnail"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
          priority
        />
      </div>

      {/* Controls Section */}
      <div className="p-4 space-y-4">
        {/* Audio Player */}
        <audio
          ref={audioRef}
          controls
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700"
        >
          <source src={audio} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        {/* Playback Speed */}
        <div className="flex justify-center gap-4">
          {[1, 1.5, 2].map((speed) => (
            <button
              key={speed}
              onClick={() => handleSpeedChange(speed)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                playbackSpeed === speed
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              {speed}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioComponent;
