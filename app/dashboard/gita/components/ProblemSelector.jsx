// "use client";

// import React, { useState } from "react";
// import AnswerBox from "./AnswerBox"; // Import the AnswerBox component
// import axios from "axios";
// import { FaSpinner } from "react-icons/fa"; // Import the loading spinner icon
// import ProblemDetails from "./problemDetails";



// export default function ProblemSelector() {
//   const [language, setLanguage] = useState("en");
//   const [problem, setProblem] = useState("");
//   const [subProblem, setSubProblem] = useState("");
//   const [detail, setDetail] = useState("");
//   const [answer, setAnswer] = useState(""); // To store the answer returned from API
//   const [loading, setLoading] = useState(false); // To track loading state

//   const changeLanguage = (lang) => {
//     setLanguage(lang);
//     setProblem("");
//     setSubProblem("");
//     setDetail("");
//     setAnswer(""); // Reset the answer when language changes
//   };

//   const handleChange = (setter) => (value) => {
//     setter(value);
//   };

//   const handleSubmitAnswer = async () => {
//     console.log(language);
//     let answerString = "";
  
//     if (language === "en") {
//       // Construct the answer string for English
//       const beforeWord = "just go through shrimad bhagwat geeta book then give me this question answers in complete:"
//       const afterWord = "give me some advice from only gita and and future consequences from only gita and some gita shlok"
//       answerString = `${beforeWord} ${problem} ${subProblem} ${detail} ${afterWord}`;
//     } else if (language === "hi") {
//       // Construct the answer string for Hindi
//       const beforeWord = "just go through shrimad bhagwat geeta book then give me this question answers in complete hindi means everything you write, write in hindi:" 
//       const afterWord = "give me some advice from only gita and and future consequences from only gita and some gita shlok"
//       answerString = `${beforeWord} Main Problem: ${problem} SubProblem: ${subProblem} Detail: ${detail} ${afterWord}`;
//     }
  
//     // console.log(answerString);  
  
//     setLoading(true); // Start loading
  
//     try {
//       const result = await axios.post("/api/get-gemini-answer", {
//         prompt: answerString,
//       });
  
//       setAnswer(result?.data?.result || "No answer returned.");
//     } catch (error) {
//       console.error("Error submitting answer:", error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };
  

//   // Reset function to clear all states
//   const handleReset = () => {
//     setLanguage("en");
//     setProblem("");
//     setSubProblem("");
//     setDetail("");
//     setAnswer(""); // Clear the answer
//     setLoading(false); // Reset loading state
//   };

//   return (
//     <div className="flex flex-col items-center space-y-6 p-8 bg-gray-900 rounded-lg shadow-xl">
//       <div className="flex space-x-4">
//         {["en", "hi"].map((lang) => (
//           <button
//             key={lang}
//             onClick={() => changeLanguage(lang)}
//             className={`px-6 py-3 rounded-lg font-semibold ${language === lang ? "bg-yellow-500 text-black" : "bg-gray-300 text-gray-900 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"}`}
//           >
//             {lang === "en" ? "English" : "हिंदी"}
//           </button>
//         ))}
//       </div>

//       <ProblemDetails 
//         language={language} 
//         problem={problem} 
//         setProblem={setProblem} 
//         subProblem={subProblem} 
//         setSubProblem={setSubProblem} 
//         detail={detail} 
//         setDetail={setDetail}
//       />

//       {detail && (
//         <div className="flex justify-center mt-6 space-x-4">
//           <button
//             onClick={handleSubmitAnswer}
//             className="px-6 py-3 rounded-lg bg-purple-500 text-white font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 flex items-center justify-center"
//           >
//             {loading ? (
//               <FaSpinner className="animate-spin text-2xl text-white" />
//             ) : (
//               "Get Answer"
//             )}
//           </button>

//           <button
//             onClick={handleReset}
//             className="px-6 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 flex items-center justify-center"
//           >
//             Reset
//           </button>
//         </div>
//       )}

//       {loading ? (
//         <div className="flex justify-center mt-6">
//           {/* Loading spinner already handled inside the button */}
//         </div>
//       ) : answer ? (
//         <AnswerBox answer={answer} />
//       ) : null}
//     </div>
//   );
// }




// "use client";

// import React, { useState, useCallback, useMemo } from "react";
// import AnswerBox from "./AnswerBox"; // Import the AnswerBox component
// import axios from "axios";
// import { FaSpinner } from "react-icons/fa"; // Import the loading spinner icon
// import ProblemDetails from "./ProblemDetails";



// export default function ProblemSelector() {
//   const [language, setLanguage] = useState("en");
//   const [problem, setProblem] = useState("");
//   const [subProblem, setSubProblem] = useState("");
//   const [detail, setDetail] = useState("");
//   const [answer, setAnswer] = useState(""); // To store the answer returned from API
//   const [loading, setLoading] = useState(false); // To track loading state

//   const changeLanguage = useCallback((lang) => {
//     setLanguage(lang);
//     setProblem("");
//     setSubProblem("");
//     setDetail("");
//     setAnswer(""); // Reset the answer when language changes
//   }, []);

//   const handleSubmitAnswer = async () => {
//     let answerString = "";

//     if (language === "en") {
//       // Construct the answer string for English
//       const beforeWord = "just go through shrimad bhagwat geeta book then give me this question answers in complete:";
//       const afterWord = "give me some advice from only gita and future consequences from only gita and some gita shlok";
//       answerString = `${beforeWord} ${problem} ${subProblem} ${detail} ${afterWord}`;
//     } else if (language === "hi") {
//       // Construct the answer string for Hindi
//       const beforeWord = "just go through shrimad bhagwat geeta book then give me this question answers in complete hindi means everything you write, write in hindi:";
//       const afterWord = "give me some advice from only gita and future consequences from only gita and some gita shlok";
//       answerString = `${beforeWord} Main Problem: ${problem} SubProblem: ${subProblem} Detail: ${detail} ${afterWord}`;
//     }

//     setLoading(true); // Start loading

//     try {
//       const result = await axios.post("/api/get-gemini-answer", {
//         prompt: answerString,
//       });

//       setAnswer(result?.data?.result || "No answer returned.");
//     } catch (error) {
//       console.error("Error submitting answer:", error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   // Reset function to clear all states
//   const handleReset = useCallback(() => {
//     setLanguage("en");
//     setProblem("");
//     setSubProblem("");
//     setDetail("");
//     setAnswer(""); // Clear the answer
//     setLoading(false); // Reset loading state
//   }, []);

//   // Memoize the problem details options to avoid recalculating on every render
//   const memoizedProblemDetails = useMemo(() => ({
//     problem,
//     setProblem,
//     subProblem,
//     setSubProblem,
//     detail,
//     setDetail,
//     language,
//   }), [problem, subProblem, detail, language]);

//   return (
//     <div className="flex flex-col items-center space-y-6 p-8 bg-gray-900 rounded-lg shadow-xl">
//       <div className="flex space-x-4">
//         {["en", "hi"].map((lang) => (
//           <button
//             key={lang}
//             onClick={() => changeLanguage(lang)}
//             className={`px-6 py-3 rounded-lg font-semibold ${language === lang ? "bg-yellow-500 text-black" : "bg-gray-300 text-gray-900 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"}`}
//           >
//             {lang === "en" ? "English" : "हिंदी"}
//           </button>
//         ))}
//       </div>

//       <ProblemDetails {...memoizedProblemDetails} />

//       {detail && (
//         <div className="flex justify-center mt-6 space-x-4">
//           <button
//             onClick={handleSubmitAnswer}
//             className="px-6 py-3 rounded-lg bg-purple-500 text-white font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 flex items-center justify-center"
//           >
//             {loading ? (
//               <FaSpinner className="animate-spin text-2xl text-white" />
//             ) : (
//               "Get Answer"
//             )}
//           </button>

//           <button
//             onClick={handleReset}
//             className="px-6 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 flex items-center justify-center"
//           >
//             Reset
//           </button>
//         </div>
//       )}

//       {loading ? (
//         <div className="flex justify-center mt-6">
//           {/* Loading spinner already handled inside the button */}
//         </div>
//       ) : answer ? (
//         <AnswerBox answer={answer} />
//       ) : null}
//     </div>
//   );
// }








// "use client";

// import React, { useState, useCallback, useMemo } from "react";
// import AnswerBox from "./AnswerBox"; // Import the AnswerBox component
// import axios from "axios";
// import { FaSpinner } from "react-icons/fa"; // Import the loading spinner icon
// import ProblemDetails from "./ProblemDetails";

// export default function ProblemSelector() {
//   const [language, setLanguage] = useState("en");
//   const [problem, setProblem] = useState("");
//   const [subProblem, setSubProblem] = useState("");
//   const [detail, setDetail] = useState("");
//   const [answer, setAnswer] = useState(""); // To store the answer returned from API
//   const [loading, setLoading] = useState(false); // To track loading state

//   const changeLanguage = useCallback((lang) => {
//     setLanguage(lang);
//     setProblem("");
//     setSubProblem("");
//     setDetail("");
//     setAnswer(""); // Reset the answer when language changes
//   }, []);

//   const handleSubmitAnswer = async () => {
//     let answerString = "";

//     if (language === "en") {
//       // Construct the answer string for English
//       const beforeWord = "just go through shrimad bhagwat geeta book then give me this question answers in complete:";
//       const afterWord = "give me some advice from only gita and future consequences from only gita and some gita shlok";
//       answerString = `${beforeWord} ${problem} ${subProblem} ${detail} ${afterWord}`;
//     } else if (language === "hi") {
//       // Construct the answer string for Hindi
//       const beforeWord = "just go through shrimad bhagwat geeta book then give me this question answers in complete hindi means everything you write, write in hindi:";
//       const afterWord = "give me some advice from only gita and future consequences from only gita and some gita shlok";
//       answerString = `${beforeWord} Main Problem: ${problem} SubProblem: ${subProblem} Detail: ${detail} ${afterWord}`;
//     }

//     setLoading(true); // Start loading

//     try {
//       const result = await axios.post("/api/get-gemini-answer", {
//         prompt: answerString,
//       });

//       setAnswer(result?.data?.result || "No answer returned.");
//     } catch (error) {
//       console.error("Error submitting answer:", error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   // Reset function to clear all states
//   const handleReset = useCallback(() => {
//     setLanguage("en");
//     setProblem("");
//     setSubProblem("");
//     setDetail("");
//     setAnswer(""); // Clear the answer
//     setLoading(false); // Reset loading state
//   }, []);

//   // Memoize the problem details options to avoid recalculating on every render
//   const memoizedProblemDetails = useMemo(() => ({
//     problem,
//     setProblem,
//     subProblem,
//     setSubProblem,
//     detail,
//     setDetail,
//     language,
//   }), [problem, subProblem, detail, language]);

//   return (
//     <div className="flex flex-col items-center space-y-6 p-8 bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg shadow-xl max-w-lg w-full mx-auto">
//       <div className="flex space-x-4 mb-6">
//         {["en", "hi"].map((lang) => (
//           <button
//             key={lang}
//             onClick={() => changeLanguage(lang)}
//             className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out ${
//               language === lang
//                 ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg"
//                 : "bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500"
//             }`}
//           >
//             {lang === "en" ? "English" : "हिंदी"}
//           </button>
//         ))}
//       </div>

//       <ProblemDetails {...memoizedProblemDetails} />

//       {detail && (
//         <div className="flex flex-col sm:flex-row justify-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4 w-full">
//           <button
//             onClick={handleSubmitAnswer}
//             className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-blue-500 hover:to-purple-600 flex items-center justify-center transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
//           >
//             {loading ? (
//               <FaSpinner className="animate-spin text-2xl text-white" />
//             ) : (
//               "Get Answer"
//             )}
//           </button>

//           <button
//             onClick={handleReset}
//             className="px-6 py-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:from-orange-500 hover:to-red-600 flex items-center justify-center transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
//           >
//             Reset
//           </button>
//         </div>
//       )}

//       {loading ? (
//         <div className="flex justify-center mt-6">
//           {/* Loading spinner already handled inside the button */}
//         </div>
//       ) : answer ? (
//         <AnswerBox answer={answer} />
//       ) : null}
//     </div>
//   );
// }
















// "use client";

// import React, { useState, useCallback, useMemo, useEffect } from "react";
// import AnswerBox from "./AnswerBox"; // Dynamic import for AnswerBox
// import axios from "axios";
// import { FaSpinner } from "react-icons/fa"; // Import the loading spinner icon
// import { debounce } from "lodash"; // Import lodash for debouncing
// import ProblemDetails from "./ProblemDetails";



// const ProblemSelector = () => {
//   const [language, setLanguage] = useState("en");
//   const [problem, setProblem] = useState("");
//   const [subProblem, setSubProblem] = useState("");
//   const [detail, setDetail] = useState("");
//   const [answer, setAnswer] = useState(""); 
//   const [loading, setLoading] = useState(false); 

//   const changeLanguage = useCallback((lang) => {
//     setLanguage(lang);
//     setProblem("");
//     setSubProblem("");
//     setDetail("");
//     setAnswer(""); // Reset the answer when language changes
//   }, []);

//   // Use useMemo to avoid recalculating the problem details unnecessarily
//   const memoizedProblemDetails = useMemo(() => ({
//     problem,
//     setProblem,
//     subProblem,
//     setSubProblem,
//     detail,
//     setDetail,
//     language,
//   }), [problem, subProblem, detail, language]);

//   // Debounced function to handle API call efficiently
//   const debouncedSubmitAnswer = useMemo(() => debounce(async () => {
//     let answerString = "";

//     if (language === "en") {
//       const beforeWord = "just go through shrimad bhagwat geeta book then give me this question answers in complete:";
//       const afterWord = "give me some advice from only gita and future consequences from only gita and some gita shlok";
//       answerString = `${beforeWord} ${problem} ${subProblem} ${detail} ${afterWord}`;
//     } else if (language === "hi") {
//       const beforeWord = "just go through shrimad bhagwat geeta book then give me this question answers in complete hindi means everything you write, write in hindi:";
//       const afterWord = "give me some advice from only gita and future consequences from only gita and some gita shlok";
//       answerString = `${beforeWord} Main Problem: ${problem} SubProblem: ${subProblem} Detail: ${detail} ${afterWord}`;
//     }

//     setLoading(true); 

//     try {
//       const result = await axios.post("/api/get-gemini-answer", { prompt: answerString });
//       setAnswer(result?.data?.result || "No answer returned.");
//     } catch (error) {
//       console.error("Error submitting answer:", error);
//     } finally {
//       setLoading(false); 
//     }
//   }, 500), [problem, subProblem, detail, language]);

//   // Reset function to clear all states
//   const handleReset = useCallback(() => {
//     setLanguage("en");
//     setProblem("");
//     setSubProblem("");
//     setDetail("");
//     setAnswer(""); 
//     setLoading(false); 
//   }, []);

//   // Trigger API call whenever relevant states change
//   useEffect(() => {
//     if (problem || subProblem || detail) {
//       debouncedSubmitAnswer();
//     }
//   }, [problem, subProblem, detail, debouncedSubmitAnswer]);

//   // Dynamic import of the AnswerBox component for code splitting and lazy loading
//   const AnswerBoxLazy = React.lazy(() => import("./AnswerBox"));

//   return (
//     <div className="flex flex-col items-center space-y-6 p-8 bg-gradient-to-r bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg shadow-xl max-w-lg w-full mx-auto">
//       <div className="flex space-x-4 mb-6">
//         {["en", "hi"].map((lang) => (
//           <button
//             key={lang}
//             onClick={() => changeLanguage(lang)}
//             className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out ${
//               language === lang
//                 ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg"
//                 : "bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500"
//             }`}
//           >
//             {lang === "en" ? "English" : "हिंदी"}
//           </button>
//         ))}
//       </div>

//       <ProblemDetails {...memoizedProblemDetails} />

//       {detail && (
//         <div className="flex flex-col sm:flex-row justify-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4 w-full">
//           <button
//             onClick={debouncedSubmitAnswer}
//             className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-blue-500 hover:to-purple-600 flex items-center justify-center transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
//           >
//             {loading ? (
//               <FaSpinner className="animate-spin text-2xl text-white" />
//             ) : (
//               "Get Answer"
//             )}
//           </button>

//           <button
//             onClick={handleReset}
//             className="px-6 py-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:from-orange-500 hover:to-red-600 flex items-center justify-center transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
//           >
//             Reset
//           </button>
//         </div>
//       )}

//       {loading ? (
//         <div className="flex justify-center mt-6">
//           {/* Loading spinner already handled inside the button */}
//         </div>
//       ) : answer ? (
//         <React.Suspense fallback={<div>Loading Answer...</div>}>
//           <AnswerBoxLazy answer={answer} />
//         </React.Suspense>
//       ) : null}
//     </div>
//   );
// };

// export default ProblemSelector;





















"use client";

import React, { useState, useCallback, useMemo } from "react";
import AnswerBox from "./AnswerBox"; // Dynamic import for AnswerBox
import axios from "axios";
import { FaSpinner } from "react-icons/fa"; // Import the loading spinner icon
import { debounce } from "lodash"; // Import lodash for debouncing
import ProblemDetails from "./ProblemDetails";

const ProblemSelector = () => {
  const [language, setLanguage] = useState("en");
  const [problem, setProblem] = useState("");
  const [subProblem, setSubProblem] = useState("");
  const [detail, setDetail] = useState("");
  const [answer, setAnswer] = useState(""); 
  const [loading, setLoading] = useState(false); 

  const changeLanguage = useCallback((lang) => {
    setLanguage(lang);
    setProblem("");
    setSubProblem("");
    setDetail("");
    setAnswer(""); // Reset the answer when language changes
  }, []);

  // Use useMemo to avoid recalculating the problem details unnecessarily
  const memoizedProblemDetails = useMemo(() => ({
    problem,
    setProblem,
    subProblem,
    setSubProblem,
    detail,
    setDetail,
    language,
  }), [problem, subProblem, detail, language]);

  // Debounced function to handle API call efficiently
  const debouncedSubmitAnswer = useMemo(() => debounce(async () => {
    let answerString = "";

    if (language === "en") {
      const beforeWord = "just go through shrimad bhagwat geeta book then give me this question answers in complete:";
      const afterWord = "give me some advice from only gita and future consequences from only gita and some gita shlok";
      answerString = `${beforeWord} ${problem} ${subProblem} ${detail} ${afterWord}`;
    } else if (language === "hi") {
      const beforeWord = "just go through shrimad bhagwat geeta book then give me this question answers in complete hindi means everything you write, write in hindi:";
      const afterWord = "give me some advice from only gita and future consequences from only gita and some gita shlok";
      answerString = `${beforeWord} Main Problem: ${problem} SubProblem: ${subProblem} Detail: ${detail} ${afterWord}`;
    }

    setLoading(true); 

    try {
      const result = await axios.post("/api/get-gemini-answer", { prompt: answerString });
      setAnswer(result?.data?.result || "No answer returned.");
    } catch (error) {
      console.error("Error submitting answer:", error);
    } finally {
      setLoading(false); 
    }
  }, 500), [problem, subProblem, detail, language]);

  // Reset function to clear all states
  const handleReset = useCallback(() => {
    setLanguage("en");
    setProblem("");
    setSubProblem("");
    setDetail("");
    setAnswer(""); 
    setLoading(false); 
  }, []);

  // Dynamic import of the AnswerBox component for code splitting and lazy loading
  const AnswerBoxLazy = React.lazy(() => import("./AnswerBox"));

  return (
    <div className="flex flex-col items-center space-y-6 p-8 bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg shadow-xl max-w-lg w-full mx-auto">
      <div className="flex space-x-4 mb-6">
        {["en", "hi"].map((lang) => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out ${
              language === lang
                ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg"
                : "bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500"
            }`}
          >
            {lang === "en" ? "English" : "हिंदी"}
          </button>
        ))}
      </div>

      <ProblemDetails {...memoizedProblemDetails} />

      {detail && (
        <div className="flex flex-col sm:flex-row justify-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4 w-full">
          <button
            onClick={debouncedSubmitAnswer} // Triggering API call only when the button is clicked
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-blue-500 hover:to-purple-600 flex items-center justify-center transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            {loading ? (
              <FaSpinner className="animate-spin text-2xl text-white" />
            ) : (
              "Get Answer"
            )}
          </button>

          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:from-orange-500 hover:to-red-600 flex items-center justify-center transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Reset
          </button>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center mt-6">
          {/* Loading spinner already handled inside the button */}
        </div>
      ) : answer ? (
        <React.Suspense fallback={<div>Loading Answer...</div>}>
          <AnswerBoxLazy answer={answer} />
        </React.Suspense>
      ) : null}
    </div>
  );
};

export default ProblemSelector;
