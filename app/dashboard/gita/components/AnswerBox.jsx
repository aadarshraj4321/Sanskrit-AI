// import React from "react";

// export default function AnswerBox({ answer }) {
//   // Function to format the answer
//   const formatAnswer = (text) => {
//     // Split the text into lines
//     const lines = text.split("\n");

//     // Return a formatted array of elements
//     return lines.map((line, index) => {
//       const trimmedLine = line.trim();

//       // Skip empty lines
//       if (!trimmedLine) return <br key={index} />;

//       // Check if the line starts with '*' (bullet point)
//       if (trimmedLine.startsWith("*")) {
//         const content = trimmedLine.slice(1).trim(); // Remove '*' and trim spaces
//         return (
//           <div
//             key={index}
//             className="flex items-center space-x-3 py-4 px-6 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-lg mb-4 shadow-lg transform transition duration-300 hover:scale-105"
//             style={{
//               lineHeight: "2", // Two spaces between lines
//             }}
//           >
//             <span className="text-xl text-white">•</span> {/* Bullet point */}
//             <span className="text-md text-white font-bold">{content}</span> {/* Content text */}
//           </div>
//         );
//       }

//       // Regular lines (non-bulleted), make them bold
//       return (
//         <p key={index} className="text-md text-gray-200 py-3 font-semibold leading-relaxed">
//           {trimmedLine}
//         </p>
//       );
//     });
//   };

//   return (
//     <div
//       className="w-full max-w-lg bg-gray-900 text-white rounded-lg p-8 overflow-auto shadow-xl"
//       style={{
//         whiteSpace: "normal",
//         wordBreak: "break-word",
//         maxHeight: "400px",
//         lineHeight: "2", // Ensure two spaces between lines
//       }}
//     >
//       {formatAnswer(answer)}
//     </div>
//   );
// }





import React, { useMemo } from "react";

// Avoid re-rendering or unnecessary computation of formattedAnswer
const AnswerBox = React.memo(({ answer }) => {
  // Memoize the formatted answer to avoid unnecessary recalculations
  const formattedAnswer = useMemo(() => {
    const formatAnswer = (text) => {
      const lines = text.split("\n");

      return lines.map((line, index) => {
        const trimmedLine = line.trim();

        // Skip empty lines
        if (!trimmedLine) return <br key={index} />;

        // Check if the line starts with '*' (bullet point)
        if (trimmedLine.startsWith("*")) {
          const content = trimmedLine.slice(1).trim(); // Remove '*' and trim spaces
          return (
            <div
              key={index}
              className="flex items-center space-x-3 py-4 px-6 bg-yellow-400 rounded-lg mb-4 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ lineHeight: "2" }} // Two spaces between lines
            >
              <span className="text-2xl text-black">•</span> {/* Bullet point */}
              <span className="text-md text-black font-semibold">{content}</span> {/* Content text */}
            </div>
          );
        }

        // Regular lines (non-bulleted), make them bold
        return (
          <p key={index} className="text-lg text-gray-100 py-3 font-medium leading-relaxed">
            {trimmedLine}
          </p>
        );
      });
    };

    return formatAnswer(answer);
  }, [answer]); // Only re-compute when 'answer' changes

  return (
    <div className="w-full max-w-lg bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-lg p-8 overflow-hidden shadow-xl shadow-teal-500/50">
      {/* Scrolling container for long content */}
      <div className="space-y-6 h-96 overflow-y-auto p-4">{formattedAnswer}</div>
    </div>
  );
});

export default AnswerBox;
