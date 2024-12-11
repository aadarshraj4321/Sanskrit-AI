// import React from "react";
// import Image from "next/image";

// const VerseComponent = ({ verse, language }) => {
//   // Determine which language text to display
//   const getVerseText = () => {
//     switch (language) {
//       case "hindi":
//         return verse.hindi;
//       case "sanskrit":
//         return verse.sanskrit;
//       case "english":
//       default:
//         return verse.english;
//     }
//   };

//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
//       {/* Verse Text */}
//       <p className="text-xl mb-4 text-center">{getVerseText()}</p>

//       Image for the Verse
//       {verse.image && (
//         <div className="relative mb-6 w-full h-64">
//           <Image
//             src={verse.image}
//             alt={`Verse ${verse.number}`}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg"
//           />
//         </div>
//       )}

//       {/* Audio for the Verse */}
//       {verse.audio && (
//         <audio controls className="w-full mb-6">
//           <source src={verse.audio} type="audio/mp3" />
//           Your browser does not support the audio element.
//         </audio>
//       )}
//     </div>
//   );
// };

// export default VerseComponent;














// import React from "react";
// import Image from "next/image";

// const VerseComponent = ({ verse, language }) => {
//   // Determine which language text to display
//   const getVerseText = () => {
//     switch (language) {
//       case "hindi":
//         return verse.hindi;
//       case "sanskrit":
//         return verse.sanskrit;
//       case "english":
//       default:
//         return verse.english;
//     }
//   };

//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-6">
//       {/* Verse Text */}
//       <p className="text-xl mb-4 text-center text-white leading-relaxed">{getVerseText()}</p>

//       {/* Image for the Verse */}
//       {verse.image && (
//         <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-md">
//           <Image
//             src={verse.image}
//             alt={`Verse ${verse.number}`}
//             layout="responsive"
//             width={500}
//             height={500}
//             objectFit="cover"
//             className="rounded-lg transform transition-all duration-500 ease-in-out hover:scale-105"
//           />
//         </div>
//       )}

//       {/* Audio for the Verse */}
//       {verse.audio && (
//         <audio controls className="w-full bg-gray-700 rounded-lg py-2 mb-6 shadow-lg">
//           <source src={verse.audio} type="audio/mp3" />
//           Your browser does not support the audio element.
//         </audio>
//       )}
//     </div>
//   );
// };

// export default VerseComponent;















// import React from "react";
// import Image from "next/image";

// const VerseComponent = ({ verse, language }) => {
//   // Determine which language text to display
//   const getVerseText = () => {
//     switch (language) {
//       case "hindi":
//         return verse.hindi;
//       case "sanskrit":
//         return verse.sanskrit;
//       case "english":
//       default:
//         return verse.english;
//     }
//   };

//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-6 w-full max-w-2xl mx-auto">
//       {/* Verse Text */}
//       <p className="text-xl mb-4 text-center text-white leading-relaxed">{getVerseText()}</p>

//       {/* Image for the Verse */}
//       {verse.image && (
//         <div className="relative w-full h-56 rounded-lg overflow-hidden shadow-md mb-6">
//           <Image
//             src={verse.image}
//             alt={`Verse ${verse.number}`}
//             layout="fill" // Using fill to cover the area
//             objectFit="cover" // Ensures the image covers the space without distortion
//             className="rounded-lg"
//           />
//         </div>
//       )}

//       {/* Audio for the Verse */}
//       {verse.audio && (
//         <audio controls className="w-full bg-gray-700 rounded-lg py-2 mb-6 shadow-lg">
//           <source src={verse.audio} type="audio/mp3" />
//           Your browser does not support the audio element.
//         </audio>
//       )}
//     </div>
//   );
// };

// export default VerseComponent;


















// "use client";

// import React from "react";

// const VerseComponent = ({ verse, language }) => {
//   // Determine which language text to display
//   const getVerseText = () => {
//     switch (language) {
//       case "hindi":
//         return verse.hindi;
//       case "sanskrit":
//         return verse.sanskrit;
//       case "english":
//       default:
//         return verse.english;
//     }
//   };

//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-6">
//       {/* Verse Text */}
//       <p className="text-xl mb-4 text-center text-white leading-relaxed">
//         {getVerseText()}
//       </p>
//     </div>
//   );
// };

// export default VerseComponent;






// "use client";

// import React from "react";

// const VerseComponent = ({ verse, language }) => {
//   // Determine which language text to display
//   const getVerseText = () => {
//     switch (language) {
//       case "hindi":
//         return verse.hindi;
//       case "sanskrit":
//         return verse.sanskrit;
//       case "english":
//       default:
//         return verse.english;
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
//       {/* Verse Text */}
//       <p className="text-xl sm:text-2xl md:text-3xl text-white font-medium text-center leading-relaxed tracking-wide drop-shadow-lg">
//         {getVerseText()}
//       </p>

//       {/* Decorative underline */}
//       <div className="w-16 h-1 mx-auto bg-white rounded-full mt-4"></div>

//       {/* Subtitle or translation if needed */}
//       <p className="text-sm text-gray-200 text-center mt-2">
//         – Verse from the Bhagavad Gita
//       </p>
//     </div>
//   );
// };

// export default VerseComponent;













"use client";

import React from "react";

const VerseComponent = ({ verse, language }) => {
    // Determine which language text to display
    const getVerseText = () => {
        switch (language) {
            case "hindi":
                return verse.hindi;
            case "sanskrit":
                return verse.sanskrit;
            case "english":
            default:
                return verse.english;
        }
    };

    return (
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            {/* Verse Text */}
            <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold text-center leading-relaxed tracking-wide drop-shadow-lg hover:text-yellow-300">
                {getVerseText()}
            </p>


            {/* Decorative underline */}
            <div className="w-16 h-1 mx-auto bg-white rounded-full mt-4"></div>

            {/* Subtitle or translation if needed */}
            <p className="text-sm text-gray-200 text-center mt-2">
                – Verse from the Bhagavad Gita
            </p>
        </div>
    );
};

export default VerseComponent;
