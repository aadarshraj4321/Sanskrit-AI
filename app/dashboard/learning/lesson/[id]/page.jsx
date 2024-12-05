






// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { FaVolumeUp } from "react-icons/fa";

// const LessonPage = ({ params }) => {
//     const [lessonData, setLessonData] = useState(null);
//     const [currentStep, setCurrentStep] = useState(0);
//     const [isQuizVisible, setIsQuizVisible] = useState(false);
//     const [isCorrect, setIsCorrect] = useState(null); // null: no answer, true: correct, false: wrong
//     const [wrongImagePaths, setWrongImagePaths] = useState([]);
//     const [wrongAnswerClicked, setWrongAnswerClicked] = useState(null); // Track the wrong answer clicked
//     const [disableContinue, setDisableContinue] = useState(true); // Initially disable continue button
//     const [disableAnswerClick, setDisableAnswerClick] = useState(false); // Disable answer options after selection
//     const router = useRouter();
//     const [lessonId, setLessonId] = useState(null);

//     useEffect(() => {
//         (async () => {
//             const unwrappedParams = await params;
//             setLessonId(unwrappedParams.id);
//         })();
//     }, [params]);

//     useEffect(() => {
//         if (lessonId) {
//             const loadLessonData = async () => {
//                 const response = await fetch(`/data/lesson/lesson${lessonId}.json`);
//                 if (response.ok) {
//                     const data = await response.json();
//                     setLessonData(data);
//                 } else {
//                     console.error("Failed to load lesson data.");
//                 }
//             };
//             loadLessonData();
//         }
//     }, [lessonId]);

//     useEffect(() => {
//         if (lessonData) {
//             const allAlphabets = [...lessonData.vowels, ...lessonData.consonants];
//             const currentAlphabet = allAlphabets[currentStep];

//             const imageNames = [
//                 "a.png", "aa.png", "au.png", "ba.png", "bha.png", "cha.png", "chha.png", "chha.png",
//                 "da.png", "dha.png", "ga.png", "gha.png", "hari.png", "i.png", "ii.png", "jha.png",
//                 "ka.png", "kha.png", "na.png", "nga.png", "nya.png", "o.png", "pa.png",
//                 "pha.png", "ra.png", "ri.png", "sa.png", "sha.png", "shaa.png", "ta.png",
//                 "tha.png", "u.png", "uu.png", "va.png", "ya.png",
//             ];

//             const wrongImages = imageNames.filter((img) => img !== currentAlphabet.image);
//             const randomWrongImages = wrongImages.length > 1
//                 ? wrongImages.sort(() => 0.5 - Math.random()).slice(0, 2)
//                 : wrongImages;

//             setWrongImagePaths(randomWrongImages.map((img) => `/data/images/lesson1/${img}`));
//         }
//     }, [lessonData, currentStep]);

//     const playAudio = (audioUrl) => {
//         const audio = new Audio(audioUrl);
//         audio.play();
//     };

//     const handleCorrectAnswer = () => {
//         setIsCorrect(true); // Set to correct state
//         setDisableContinue(false); // Enable continue button
//         setDisableAnswerClick(true); // Disable further answer selection
//         playAudio("/data/audio/correct.mp3");
//     };

//     const handleWrongAnswer = (imagePath) => {
//         setIsCorrect(false); // Set to wrong state
//         setWrongAnswerClicked(imagePath); // Track which image was clicked
//         playAudio("/data/audio/error.mp3");

//         // Reset wrong answer highlight after 1 second
//         setTimeout(() => {
//             setWrongAnswerClicked(null);
//         }, 1000);
//     };

//     const handleNextStep = () => {
//         if (isCorrect) {
//             // Only allow to proceed if the answer is correct
//             setIsCorrect(null); // Reset for the next step
//             setDisableContinue(true); // Disable continue button
//             setDisableAnswerClick(false); // Enable answer selection
//             if (currentStep < lessonData.vowels.length + lessonData.consonants.length - 1) {
//                 setCurrentStep(currentStep + 1);
//             } else {
//                 setIsQuizVisible(true);
//             }
//         }
//     };

//     if (!lessonData) {
//         return (
//             <div className="flex items-center justify-center h-screen w-screen bg-gray-900 text-white">
//                 <p>Loading...</p>
//             </div>
//         );
//     }

//     const allAlphabets = [...lessonData.vowels, ...lessonData.consonants];
//     const currentAlphabet = allAlphabets[currentStep];
//     const correctImagePath = `${currentAlphabet.image}`;

//     return (
//         <div className="h-screen w-screen bg-gray-900 text-white flex flex-col relative overflow-hidden">
//             <button
//                 onClick={() => router.back()}
//                 className="absolute top-4 left-4 text-white px-4 py-2 bg-purple-600 hover:bg-purple-800 rounded-md z-10 shadow-xl"
//             >
//                 Back to Lessons
//             </button>

//             {!isQuizVisible && currentAlphabet && (
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8 }}
//                     className="flex flex-col items-center justify-center flex-grow text-center space-y-6"
//                 >
//                     <div className="flex flex-col items-center">
//                         <h3 className="text-5xl font-semibold">{currentAlphabet.symbol}</h3>
//                         <p className="text-xl text-gray-300">{currentAlphabet.pronunciation}</p>
//                     </div>

//                     <div className="flex space-x-6 justify-center items-center">
//                         <img
//                             src={correctImagePath}
//                             alt={currentAlphabet.name}
//                             className={`w-40 h-40 cursor-pointer border-2 p-2 rounded-lg shadow-lg ${isCorrect === true ? "border-green-500" : "border-gray-600"}`}
//                             onClick={handleCorrectAnswer}
//                             disabled={disableAnswerClick} // Disable click after answer
//                         />
//                         {wrongImagePaths.map((imgPath, index) => (
//                             <img
//                                 key={index}
//                                 src={imgPath}
//                                 alt={`Option ${index + 1}`}
//                                 className={`w-40 h-40 cursor-pointer border-2 p-2 rounded-lg shadow-lg ${wrongAnswerClicked === imgPath ? "border-red-500 animate-pulse" : "border-gray-600"}`}
//                                 onClick={() => handleWrongAnswer(imgPath)}
//                                 disabled={disableAnswerClick} // Disable click after answer
//                             />
//                         ))}
//                     </div>
//                 </motion.div>
//             )}

//             {/* {isCorrect === false && (
//                 <div className="fixed bottom-20 flex items-center justify-center w-full">
//                     <button
//                         onClick={() => setIsCorrect(null)} // Allow retry
//                         className="bg-red-600 text-white px-6 py-2 rounded-md shadow-lg animate-pulse"
//                     >
//                         Retry
//                     </button>
//                 </div>
//             )} */}

//             <div className="fixed bottom-0 w-full bg-gray-800 p-4 shadow-lg flex items-center justify-between">
//                 <button
//                     onClick={() => playAudio(currentAlphabet?.audio)}
//                     className="text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-md flex items-center shadow-xl"
//                     disabled={!currentAlphabet}
//                 >
//                     <FaVolumeUp className="text-2xl" />
//                 </button>

//                 <div className="flex space-x-4">
//                     <button
//                         onClick={handleNextStep}
//                         className={`px-6 py-2 text-white rounded-md shadow-xl ${disableContinue ? "bg-gray-600 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
//                         disabled={disableContinue}
//                     >
//                         Continue
//                     </button>
//                     {isCorrect === false && (
//                     <button
//                         onClick={() => setIsCorrect(null)} // Allow retry
//                         className="bg-red-600 text-white px-6 py-2 rounded-md shadow-lg animate-pulse"
//                     >
//                         Retry
//                     </button>
//             )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LessonPage;

























// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { FaVolumeUp } from "react-icons/fa";

// const LessonPage = ({ params }) => {
//     const [lessonData, setLessonData] = useState(null);
//     const [currentStep, setCurrentStep] = useState(0);
//     const [isQuizVisible, setIsQuizVisible] = useState(false);
//     const [isCorrect, setIsCorrect] = useState(null); // null: no answer, true: correct, false: wrong
//     const [wrongImagePaths, setWrongImagePaths] = useState([]);
//     const [wrongAnswerClicked, setWrongAnswerClicked] = useState(null); // Track the wrong answer clicked
//     const [disableContinue, setDisableContinue] = useState(true); // Initially disable continue button
//     const [disableAnswerClick, setDisableAnswerClick] = useState(false); // Disable answer options after selection
//     const router = useRouter();
//     const [lessonId, setLessonId] = useState(null);

//     useEffect(() => {
//         (async () => {
//             const unwrappedParams = await params;
//             setLessonId(unwrappedParams.id);
//         })();
//     }, [params]);

//     useEffect(() => {
//         if (lessonId) {
//             const loadLessonData = async () => {
//                 const response = await fetch(`/data/lesson/lesson${lessonId}.json`);
//                 if (response.ok) {
//                     const data = await response.json();
//                     setLessonData(data);
//                 } else {
//                     console.error("Failed to load lesson data.");
//                 }
//             };
//             loadLessonData();
//         }
//     }, [lessonId]);

//     useEffect(() => {
//         if (lessonData) {
//             const allAlphabets = [...lessonData.vowels, ...lessonData.consonants];
//             const currentAlphabet = allAlphabets[currentStep];

//             const imageNames = [
//                 "a.png", "aa.png", "au.png", "ba.png", "bha.png", "cha.png", "chha.png", "chha.png",
//                 "da.png", "dha.png", "ga.png", "gha.png", "hari.png", "i.png", "ii.png", "jha.png",
//                 "ka.png", "kha.png", "na.png", "nga.png", "nya.png", "o.png", "pa.png",
//                 "pha.png", "ra.png", "ri.png", "sa.png", "sha.png", "shaa.png", "ta.png",
//                 "tha.png", "u.png", "uu.png", "va.png", "ya.png",
//             ];

//             const wrongImages = imageNames.filter((img) => img !== currentAlphabet.image);
//             const randomWrongImages = wrongImages.length > 1
//                 ? wrongImages.sort(() => 0.5 - Math.random()).slice(0, 2)
//                 : wrongImages;

//             setWrongImagePaths(randomWrongImages.map((img) => `/data/images/lesson1/${img}`));
//         }
//     }, [lessonData, currentStep]);

//     const playAudio = (audioUrl) => {
//         const audio = new Audio(audioUrl);
//         audio.play();
//     };

//     const handleCorrectAnswer = () => {
//         setIsCorrect(true); // Set to correct state
//         setDisableContinue(false); // Enable continue button
//         setDisableAnswerClick(true); // Disable further answer selection
//         playAudio("/data/audio/correct.mp3");
//     };

//     const handleWrongAnswer = (imagePath) => {
//         setIsCorrect(false); // Set to wrong state
//         setWrongAnswerClicked(imagePath); // Track which image was clicked
//         setDisableAnswerClick(true); // Disable all options after a wrong answer
//         playAudio("/data/audio/error.mp3");

//         // Reset wrong answer highlight after 1 second
//         setTimeout(() => {
//             setWrongAnswerClicked(null);
//         }, 1000);
//     };

//     const handleNextStep = () => {
//         if (isCorrect) {
//             // Only allow to proceed if the answer is correct
//             setIsCorrect(null); // Reset for the next step
//             setDisableContinue(true); // Disable continue button
//             setDisableAnswerClick(false); // Enable answer selection
//             if (currentStep < lessonData.vowels.length + lessonData.consonants.length - 1) {
//                 setCurrentStep(currentStep + 1);
//             } else {
//                 setIsQuizVisible(true);
//             }
//         }
//     };

//     if (!lessonData) {
//         return (
//             <div className="flex items-center justify-center h-screen w-screen bg-gray-900 text-white">
//                 <p>Loading...</p>
//             </div>
//         );
//     }

//     const allAlphabets = [...lessonData.vowels, ...lessonData.consonants];
//     const currentAlphabet = allAlphabets[currentStep];
//     const correctImagePath = `${currentAlphabet.image}`;

//     return (
//         <div className="h-screen w-screen bg-gray-900 text-white flex flex-col relative overflow-hidden">
//             <button
//                 onClick={() => router.back()}
//                 className="absolute top-4 left-4 text-white px-4 py-2 bg-purple-600 hover:bg-purple-800 rounded-md z-10 shadow-xl"
//             >
//                 Back to Lessons
//             </button>

//             {!isQuizVisible && currentAlphabet && (
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8 }}
//                     className="flex flex-col items-center justify-center flex-grow text-center space-y-6"
//                 >
//                     <div className="flex flex-col items-center">
//                         <h3 className="text-5xl font-semibold">{currentAlphabet.symbol}</h3>
//                         <p className="text-xl text-gray-300">{currentAlphabet.pronunciation}</p>
//                     </div>

//                     <div className="flex space-x-6 justify-center items-center">
//                         <img
//                             src={correctImagePath}
//                             alt={currentAlphabet.name}
//                             className={`w-40 h-40 cursor-pointer border-2 p-2 rounded-lg shadow-lg ${isCorrect === true ? "border-green-500" : "border-gray-600"}`}
//                             onClick={handleCorrectAnswer}
//                             disabled={disableAnswerClick} // Disable click after answer
//                         />
//                         {wrongImagePaths.map((imgPath, index) => (
//                             <img
//                                 key={index}
//                                 src={imgPath}
//                                 alt={`Option ${index + 1}`}
//                                 className={`w-40 h-40 cursor-pointer border-2 p-2 rounded-lg shadow-lg ${wrongAnswerClicked === imgPath ? "border-red-500 animate-pulse" : "border-gray-600"}`}
//                                 onClick={() => handleWrongAnswer(imgPath)}
//                                 disabled={disableAnswerClick} // Disable click after answer
//                             />
//                         ))}
//                     </div>
//                 </motion.div>
//             )}

//             <div className="fixed bottom-0 w-full bg-gray-800 p-4 shadow-lg flex items-center justify-between">
//                 <button
//                     onClick={() => playAudio(currentAlphabet?.audio)}
//                     className="text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-md flex items-center shadow-xl"
//                     disabled={!currentAlphabet}
//                 >
//                     <FaVolumeUp className="text-2xl" />
//                 </button>

//                 <div className="flex space-x-4">
//                     <button
//                         onClick={handleNextStep}
//                         className={`px-6 py-2 text-white rounded-md shadow-xl ${disableContinue ? "bg-gray-600 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
//                         disabled={disableContinue}
//                     >
//                         Continue
//                     </button>
//                     {isCorrect === false && (
//                     <button
//                         onClick={() => setIsCorrect(null)} // Allow retry
//                         className="bg-red-600 text-white px-6 py-2 rounded-md shadow-lg animate-pulse"
//                     >
//                         Retry
//                     </button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LessonPage;









// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { FaVolumeUp } from "react-icons/fa";
// import PointsManager from './PointsManager';
// import CompletePopup from "./CompletePopup";
// import NotCompletePopup from "./NotCompletePopup";



// const LessonPage = ({ params }) => {
//     const [lessonData, setLessonData] = useState(null);
//     const [currentStep, setCurrentStep] = useState(0);
//     const [isQuizVisible, setIsQuizVisible] = useState(false);
//     const [isCorrect, setIsCorrect] = useState(null);
//     const [score, setScore] = useState(0);
//     const [wrongImagePaths, setWrongImagePaths] = useState([]);
//     const [wrongAnswerClicked, setWrongAnswerClicked] = useState(null);
//     const [disableContinue, setDisableContinue] = useState(true);
//     const [disableAnswerClick, setDisableAnswerClick] = useState(false);
//     const router = useRouter();
//     const [lessonId, setLessonId] = useState(null);



//     useEffect(() => {
//         (async () => {
//             const unwrappedParams = await params;
//             setLessonId(unwrappedParams.id);
//         })();
//     }, [params]);

//     useEffect(() => {
//         if (lessonId) {
//             const loadLessonData = async () => {
//                 const response = await fetch(`/data/lesson/lesson${lessonId}.json`);
//                 if (response.ok) {
//                     const data = await response.json();
//                     setLessonData(data);
//                 } else {
//                     console.error("Failed to load lesson data.");
//                 }
//             };
//             loadLessonData();
//         }
//     }, [lessonId]);

//     useEffect(() => {
//         if (lessonData) {
//             const allAlphabets = [...lessonData.vowels, ...lessonData.consonants];
//             const currentAlphabet = allAlphabets[currentStep];

//             const imageNames = [
//                 "a.png", "aa.png", "au.png", "ba.png", "bha.png", "cha.png", "chha.png", "chha.png",
//                 "da.png", "dha.png", "ga.png", "gha.png", "hari.png", "i.png", "ii.png", "jha.png",
//                 "ka.png", "kha.png", "na.png", "nga.png", "nya.png", "o.png", "pa.png",
//                 "pha.png", "ra.png", "ri.png", "sa.png", "sha.png", "shaa.png", "ta.png",
//                 "tha.png", "u.png", "uu.png", "va.png", "ya.png",
//             ];

//             const wrongImages = imageNames.filter((img) => img !== currentAlphabet.image);
//             const randomWrongImages = wrongImages.length > 1
//                 ? wrongImages.sort(() => 0.5 - Math.random()).slice(0, 2)
//                 : wrongImages;

//             setWrongImagePaths(randomWrongImages.map((img) => `/data/images/lesson1/${img}`));
//         }
//     }, [lessonData, currentStep]);

//     const playAudio = (audioUrl) => {
//         const audio = new Audio(audioUrl);
//         audio.play();
//     };

//     const handleCorrectAnswer = () => {
//         setIsCorrect(true);
//         setScore(prevScore => prevScore + 1);
//         setDisableContinue(false);
//         setDisableAnswerClick(true);
//         playAudio("/data/audio/correct.mp3");
//     };

//     const handleWrongAnswer = (imagePath) => {
//         setIsCorrect(false);
//         setWrongAnswerClicked(imagePath);
//         setDisableAnswerClick(true);
//         playAudio("/data/audio/error.mp3");

//         setTimeout(() => {
//             setWrongAnswerClicked(null);
//         }, 1000);
//     };

//     const handleNextStep = () => {
//         if (isCorrect) {
//             setIsCorrect(null);
//             setDisableContinue(true);
//             setDisableAnswerClick(false);

//             if (currentStep < lessonData.vowels.length + lessonData.consonants.length - 1) {
//                 setCurrentStep(currentStep + 1);
//             } else {
//                 setIsQuizVisible(true); // Show the popup for the last question
//             }
//         }
//     };

//     const handleFinishClick = () => {
//         // Trigger the quiz result popup based on the score
//         setIsQuizVisible(true);
//     };

//     if (!lessonData) {
//         return (
//             <div className="flex items-center justify-center h-screen w-screen bg-gray-900 text-white">
//                 <p>Loading...</p>
//             </div>
//         );
//     }

//     const allAlphabets = [...lessonData.vowels, ...lessonData.consonants];
//     const currentAlphabet = allAlphabets[currentStep];
//     const correctImagePath = `${currentAlphabet.image}`;

//     return (
//         <div className="h-screen w-screen bg-gray-900 text-white flex flex-col relative overflow-hidden">
//             <button

//                 onClick={() => router.back()}
//                 className="absolute top-4 left-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2l"
//             >
//                 Back to Lessons
//             </button>

//             <PointsManager
//                 isCorrect={isCorrect}
//                 resetGame={currentStep === lessonData.vowels.length + lessonData.consonants.length - 1}
//                 words={lessonData} // Pass lessonData as words
//             />

//             {isQuizVisible && (score >= 15 ? <CompletePopup onClose={() => setIsQuizVisible(false)} /> : <NotCompletePopup onClose={() => setIsQuizVisible(false)} />)}

//             {!isQuizVisible && currentAlphabet && (
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8 }}
//                     className="flex flex-col items-center justify-start flex-grow text-center space-y-6 pt-8"
//                 >
//                     <div className="flex flex-col items-center">
//                         <h3 className="text-5xl font-semibold">{currentAlphabet.symbol}</h3>
//                         <p className="text-xl text-gray-300">{currentAlphabet.pronunciation}</p>
//                     </div>

//                     <div className="flex space-x-6 justify-center items-center">
//                         <img
//                             src={correctImagePath}
//                             alt={currentAlphabet.name}
//                             className={`w-40 h-40 cursor-pointer border-2 p-2 rounded-lg shadow-lg ${isCorrect === true ? "border-green-500" : "border-gray-600"}`}
//                             onClick={handleCorrectAnswer}
//                             disabled={disableAnswerClick}
//                         />
//                         {wrongImagePaths.map((imgPath, index) => (
//                             <img
//                                 key={index}
//                                 src={imgPath}
//                                 alt={`Option ${index + 1}`}
//                                 className={`w-40 h-40 cursor-pointer border-2 p-2 rounded-lg shadow-lg ${wrongAnswerClicked === imgPath ? "border-red-500 animate-pulse" : "border-gray-600"}`}
//                                 onClick={() => handleWrongAnswer(imgPath)}
//                                 disabled={disableAnswerClick}
//                             />
//                         ))}
//                     </div>
//                 </motion.div>
//             )}

//             <div className="fixed bottom-0 w-full bg-gray-900 p-4 shadow-lg flex items-center justify-between border-t border-gray-700 my-4">
//                 <button
//                     onClick={() => playAudio(currentAlphabet?.audio)}
//                     className="text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-md flex items-center shadow-xl"
//                     disabled={!currentAlphabet}
//                 >
//                     <FaVolumeUp className="text-2xl" />
//                 </button>

//                 <div className="flex space-x-4">
//                     {currentStep < lessonData.vowels.length + lessonData.consonants.length - 1 ? (
//                         <button
//                             onClick={handleNextStep}
//                             className={`px-6 py-2 text-white rounded-md shadow-xl ${disableContinue ? "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-not-allowed" : "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"}`}
//                             disabled={disableContinue}
//                         >
//                             Continue
//                         </button>
//                     ) : (
//                         <button
//                             onClick={handleFinishClick} // Trigger Finish action here
//                             className="px-6 py-2 bg-purple-600 hover:bg-purple-800 rounded-md text-white text-lg"
//                         >
//                             Finish
//                         </button>
//                     )}
//                     {isCorrect === false && (
//                         <button
//                             onClick={() => setIsCorrect(null)}
//                             className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//                         >
//                             Retry
//                         </button>
//                     )}

//                         {isCorrect === true && (
//                         <button
//                             onClick={() => setIsCorrect(null)}
//                             className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//                         >
//                             Retry
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LessonPage;











// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { FaVolumeUp } from "react-icons/fa";
// import PointsManager from './PointsManager';
// import CompletePopup from "./CompletePopup";
// import NotCompletePopup from "./NotCompletePopup";
// import ClickableImage from './ClickableImage';  // Importing the ClickableImage component

// const LessonPage = ({ params }) => {
//     const [lessonData, setLessonData] = useState(null);
//     const [currentStep, setCurrentStep] = useState(0);
//     const [isQuizVisible, setIsQuizVisible] = useState(false);
//     const [isCorrect, setIsCorrect] = useState(null);
//     const [score, setScore] = useState(0);
//     const [wrongImagePaths, setWrongImagePaths] = useState([]);
//     const [wrongAnswerClicked, setWrongAnswerClicked] = useState(null);
//     const [disableContinue, setDisableContinue] = useState(true);
//     const [disableAnswerClick, setDisableAnswerClick] = useState(false);
//     const router = useRouter();
//     const [lessonId, setLessonId] = useState(null);

//     useEffect(() => {
//         (async () => {
//             const unwrappedParams = await params;
//             setLessonId(unwrappedParams.id);
//         })();
//     }, [params]);

//     useEffect(() => {
//         if (lessonId) {
//             const loadLessonData = async () => {
//                 const response = await fetch(`/data/lesson/lesson${lessonId}.json`);
//                 if (response.ok) {
//                     const data = await response.json();
//                     setLessonData(data);
//                 } else {
//                     console.error("Failed to load lesson data.");
//                 }
//             };
//             loadLessonData();
//         }
//     }, [lessonId]);

//     useEffect(() => {
//         if (lessonData) {
//             const allAlphabets = [...lessonData.vowels, ...lessonData.consonants];
//             const currentAlphabet = allAlphabets[currentStep];

//             const imageNames = [
//                 "a.png", "aa.png", "au.png", "ba.png", "bha.png", "cha.png", "chha.png", "chha.png",
//                 "da.png", "dha.png", "ga.png", "gha.png", "hari.png", "i.png", "ii.png", "jha.png",
//                 "ka.png", "kha.png", "na.png", "nga.png", "nya.png", "o.png", "pa.png",
//                 "pha.png", "ra.png", "ri.png", "sa.png", "sha.png", "shaa.png", "ta.png",
//                 "tha.png", "u.png", "uu.png", "va.png", "ya.png",
//             ];

//             const wrongImages = imageNames.filter((img) => img !== currentAlphabet.image);
//             const randomWrongImages = wrongImages.length > 1
//                 ? wrongImages.sort(() => 0.5 - Math.random()).slice(0, 2)
//                 : wrongImages;

//             setWrongImagePaths(randomWrongImages.map((img) => `/data/images/lesson1/${img}`));
//         }
//     }, [lessonData, currentStep]);

//     const playAudio = (audioUrl) => {
//         const audio = new Audio(audioUrl);
//         audio.play();
//     };

//     const handleCorrectAnswer = () => {
//         setIsCorrect(true);
//         setScore(prevScore => prevScore + 1);
//         setDisableContinue(false);
//         setDisableAnswerClick(true);
//         playAudio("/data/audio/correct.mp3");
//     };

//     const handleWrongAnswer = (imagePath) => {
//         setIsCorrect(false);
//         setWrongAnswerClicked(imagePath);
//         setDisableAnswerClick(true);
//         playAudio("/data/audio/error.mp3");

//         setTimeout(() => {
//             setWrongAnswerClicked(null);
//         }, 1000);
//     };

//     const handleNextStep = () => {
//         if (isCorrect) {
//             setIsCorrect(null);
//             setDisableContinue(true);
//             setDisableAnswerClick(false);

//             if (currentStep < lessonData.vowels.length + lessonData.consonants.length - 1) {
//                 setCurrentStep(currentStep + 1);
//             } else {
//                 setIsQuizVisible(true); // Show the popup for the last question
//             }
//         }
//     };

//     const handleFinishClick = () => {
//         // Trigger the quiz result popup based on the score
//         setIsQuizVisible(true);
//     };

//     if (!lessonData) {
//         return (
//             <div className="flex items-center justify-center h-screen w-screen bg-gray-900 text-white">
//                 <p>Loading...</p>
//             </div>
//         );
//     }

//     const allAlphabets = [...lessonData.vowels, ...lessonData.consonants];
//     const currentAlphabet = allAlphabets[currentStep];
//     const correctImagePath = `${currentAlphabet.image}`;


//     return (
//         <div className="h-screen w-screen bg-gray-900 text-white flex flex-col relative overflow-hidden">
//             <button
//                 onClick={() => router.back()}
//                 className="absolute top-4 left-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2l"
//             >
//                 Back to Lessons
//             </button>

//             <PointsManager
//                 isCorrect={isCorrect}
//                 resetGame={currentStep === lessonData.vowels.length + lessonData.consonants.length - 1}
//                 words={lessonData} // Pass lessonData as words
//             />

//             {isQuizVisible && (score >= 15 ? <CompletePopup onClose={() => setIsQuizVisible(false)} /> : <NotCompletePopup onClose={() => setIsQuizVisible(false)} />)}

//             {!isQuizVisible && currentAlphabet && (
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8 }}
//                     className="flex flex-col items-center justify-start flex-grow text-center space-y-6 pt-8"
//                 >
//                     <div className="flex flex-col items-center">
//                         <h3 className="text-5xl font-semibold">{currentAlphabet.symbol}</h3>
//                         <p className="text-xl text-gray-300">{currentAlphabet.pronunciation}</p>
//                     </div>

//                     <div className="flex space-x-6 justify-center items-center">
//                         <ClickableImage
//                             src={correctImagePath}
//                             alt={currentAlphabet.name}
//                             onClick={handleCorrectAnswer}
//                             isHighlighted={isCorrect === true}
//                             isWrong={isCorrect === true}
//                             disabled={disableAnswerClick}
//                         />
//                         {wrongImagePaths.map((imgPath, index) => (
//                             <ClickableImage
//                                 key={index}
//                                 src={imgPath}
//                                 alt={`Option ${index + 1}`}
//                                 onClick={() => handleWrongAnswer(imgPath)}
//                                 isHighlighted={false}
//                                 isWrong={wrongAnswerClicked === imgPath}
//                                 disabled={disableAnswerClick}
//                             />
//                         ))}
//                     </div>
//                 </motion.div>
//             )}

//             <div className="fixed bottom-0 w-full bg-gray-900 p-4 shadow-lg flex items-center justify-between border-t border-gray-700 my-4">
//                 <button
//                     onClick={() => playAudio(currentAlphabet?.audio)}
//                     className="text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-md flex items-center shadow-xl"
//                     disabled={!currentAlphabet}
//                 >
//                     <FaVolumeUp className="text-2xl" />
//                 </button>

//                 <div className="flex space-x-4">
//                     {currentStep < lessonData.vowels.length + lessonData.consonants.length - 1 ? (
//                         <button
//                             onClick={handleNextStep}
//                             className={`px-6 py-2 text-white rounded-md shadow-xl ${disableContinue ? "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-not-allowed" : "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"}`}
//                             disabled={disableContinue}
//                         >
//                             Continue
//                         </button>
//                     ) : (
//                         <button
//                             onClick={handleFinishClick} // Trigger Finish action here
//                             className="text-white bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//                         >
//                             Finish
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LessonPage;
























// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { FaVolumeUp } from "react-icons/fa";
// import PointsManager from './PointsManager';
// import CompletePopup from "./CompletePopup";
// import NotCompletePopup from "./NotCompletePopup";
// import ClickableImage from './ClickableImage';  // Importing the ClickableImage component

// const LessonPage = ({ params }) => {
//     const [lessonData, setLessonData] = useState(null);
//     const [currentStep, setCurrentStep] = useState(0);
//     const [isQuizVisible, setIsQuizVisible] = useState(false);
//     const [isCorrect, setIsCorrect] = useState(null);
//     const [score, setScore] = useState(0);
//     const [wrongImagePaths, setWrongImagePaths] = useState([]);
//     const [wrongAnswerClicked, setWrongAnswerClicked] = useState(null);
//     const [disableContinue, setDisableContinue] = useState(true);
//     const [disableAnswerClick, setDisableAnswerClick] = useState(false);
//     const [learningTip, setLearningTip] = useState("");  // State for Learning Tip
//     const router = useRouter();
//     const [lessonId, setLessonId] = useState(null);

//     useEffect(() => {
//         (async () => {
//             const unwrappedParams = await params;
//             setLessonId(unwrappedParams.id);
//         })();
//     }, [params]);

//     useEffect(() => {
//         if (lessonId) {
//             const loadLessonData = async () => {
//                 const response = await fetch(`/data/lesson/lesson${lessonId}.json`);
//                 if (response.ok) {
//                     const data = await response.json();
//                     setLessonData(data);
//                     // Set learning tip from the current lesson's data
//                     const currentAlphabet = [...data.vowels, ...data.consonants][currentStep];
//                     setLearningTip(currentAlphabet.learning_tip || "");  // Set learning tip
//                 } else {
//                     console.error("Failed to load lesson data.");
//                 }
//             };
//             loadLessonData();
//         }
//     }, [lessonId, currentStep]); // Re-fetch lesson data when currentStep changes

//     useEffect(() => {
//         if (lessonData) {
//             const allAlphabets = [...lessonData.vowels, ...lessonData.consonants];
//             const currentAlphabet = allAlphabets[currentStep];

//             const imageNames = [
//                 "a.png", "aa.png", "au.png", "ba.png", "bha.png", "cha.png", "chha.png", "chha.png",
//                 "da.png", "dha.png", "ga.png", "gha.png", "hari.png", "i.png", "ii.png", "jha.png",
//                 "ka.png", "kha.png", "na.png", "nga.png", "nya.png", "o.png", "pa.png",
//                 "pha.png", "ra.png", "ri.png", "sa.png", "sha.png", "shaa.png", "ta.png",
//                 "tha.png", "u.png", "uu.png", "va.png", "ya.png",
//             ];

//             const wrongImages = imageNames.filter((img) => img !== currentAlphabet.image);
//             const randomWrongImages = wrongImages.length > 1
//                 ? wrongImages.sort(() => 0.5 - Math.random()).slice(0, 2)
//                 : wrongImages;

//             setWrongImagePaths(randomWrongImages.map((img) => `/data/images/lesson1/${img}`));
//         }
//     }, [lessonData, currentStep]);

//     const playAudio = (audioUrl) => {
//         const audio = new Audio(audioUrl);
//         audio.play();
//     };

//     const handleCorrectAnswer = () => {
//         setIsCorrect(true);
//         setScore(prevScore => prevScore + 1);
//         setDisableContinue(false);
//         setDisableAnswerClick(true);
//         playAudio("/data/audio/correct.mp3");
//     };

//     const handleWrongAnswer = (imagePath) => {
//         setIsCorrect(false);
//         setWrongAnswerClicked(imagePath);
//         setDisableAnswerClick(true);
//         playAudio("/data/audio/error.mp3");

//         setTimeout(() => {
//             setWrongAnswerClicked(null);
//         }, 1000);
//     };

//     const handleNextStep = () => {
//         if (isCorrect) {
//             setIsCorrect(null);
//             setDisableContinue(true);
//             setDisableAnswerClick(false);

//             if (currentStep < lessonData.vowels.length + lessonData.consonants.length - 1) {
//                 setCurrentStep(currentStep + 1);
//             } else {
//                 setIsQuizVisible(true); // Show the popup for the last question
//             }
//         }
//     };

//     const handleFinishClick = () => {
//         // Trigger the quiz result popup based on the score
//         setIsQuizVisible(true);
//     };

//     if (!lessonData) {
//         return (
//             <div className="flex items-center justify-center h-screen w-screen bg-gray-900 text-white">
//                 <p>Loading...</p>
//             </div>
//         );
//     }

//     const allAlphabets = [...lessonData.vowels, ...lessonData.consonants];
//     const currentAlphabet = allAlphabets[currentStep];
//     const correctImagePath = `${currentAlphabet.image}`;

//     return (
//         <div className="h-screen w-screen bg-gray-900 text-white flex flex-col relative overflow-hidden">
//             <button
//                 onClick={() => router.back()}
//                 className="absolute top-4 left-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2l"
//             >
//                 Back to Lessons
//             </button>

//             <PointsManager
//                 isCorrect={isCorrect}
//                 resetGame={currentStep === lessonData.vowels.length + lessonData.consonants.length - 1}
//                 words={lessonData} // Pass lessonData as words
//             />

//             {isQuizVisible && (score >= 15 ? <CompletePopup onClose={() => setIsQuizVisible(false)} /> : <NotCompletePopup onClose={() => setIsQuizVisible(false)} />)}

//             {!isQuizVisible && currentAlphabet && (
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8 }}
//                     className="flex flex-col items-center justify-start flex-grow text-center space-y-6 pt-8"
//                 >
//                     <div className="flex flex-col items-center">
//                         <h3 className="text-5xl font-semibold">{currentAlphabet.symbol}</h3>
//                         <p className="text-xl text-gray-300">{currentAlphabet.pronunciation}</p>
//                     </div>

//                     <div className="flex space-x-6 justify-center items-center">
//                         <ClickableImage
//                             src={correctImagePath}
//                             alt={currentAlphabet.name}
//                             onClick={handleCorrectAnswer}
//                             isHighlighted={isCorrect === true}
//                             isWrong={isCorrect === true}
//                             disabled={disableAnswerClick}
//                         />
//                         {wrongImagePaths.map((imgPath, index) => (
//                             <ClickableImage
//                                 key={index}
//                                 src={imgPath}
//                                 alt={`Option ${index + 1}`}
//                                 onClick={() => handleWrongAnswer(imgPath)}
//                                 isHighlighted={false}
//                                 isWrong={wrongAnswerClicked === imgPath}
//                                 disabled={disableAnswerClick}
//                             />
//                         ))}
//                     </div>
//                 </motion.div>
//             )}

//             {/* Right Sidebar Notification */}
//             {learningTip && (
//                 <div className="absolute right-10 top-1/4 w-40 bg-blue-500 p-5 rounded-lg shadow-xl">
//                     <h4 className="text-lg font-semibold text-white">Tip</h4>
//                     <p className="text-sm text-white">{learningTip}</p>
//                 </div>
//             )}

//             <div className="fixed bottom-0 w-full bg-gray-900 p-4 shadow-lg flex items-center justify-between border-t border-gray-700 my-4">
//                 <button
//                     onClick={() => playAudio(currentAlphabet?.audio)}
//                     className="text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-md flex items-center shadow-xl"
//                     disabled={!currentAlphabet}
//                 >
//                     <FaVolumeUp className="text-2xl" />
//                 </button>

//                 <div className="flex space-x-4">
//                     {currentStep < lessonData.vowels.length + lessonData.consonants.length - 1 ? (
//                         <button
//                             onClick={handleNextStep}
//                             className="px-6 py-2 text-white rounded-md shadow-xl bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
//                             disabled={disableContinue}
//                         >
//                             Continue
//                         </button>
//                     ) : (
//                         <button
//                             onClick={handleFinishClick}
//                             className="px-6 py-2 text-white rounded-md shadow-xl text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
//                         >
//                             Finish
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LessonPage;









// "use client";

// import { useEffect, useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { FaVolumeUp } from "react-icons/fa";
// import PointsManager from './PointsManager';
// import CompletePopup from "./CompletePopup";
// import NotCompletePopup from "./NotCompletePopup";
// import ClickableImage from './ClickableImage';

// const LessonPage = ({ params }) => {
//     const [lessonData, setLessonData] = useState(null);
//     const [currentStep, setCurrentStep] = useState(0);
//     const [isQuizVisible, setIsQuizVisible] = useState(false);
//     const [isCorrect, setIsCorrect] = useState(null);
//     const [score, setScore] = useState(0);
//     const [wrongImagePaths, setWrongImagePaths] = useState([]);
//     const [wrongAnswerClicked, setWrongAnswerClicked] = useState(null);
//     const [disableContinue, setDisableContinue] = useState(true);
//     const [disableAnswerClick, setDisableAnswerClick] = useState(false);
//     const [learningTip, setLearningTip] = useState("");
//     const router = useRouter();
//     const [lessonId, setLessonId] = useState(null);

//     useEffect(() => {
//         (async () => {
//             const unwrappedParams = await params;
//             setLessonId(unwrappedParams.id);
//         })();
//     }, [params]);

//     // Retrieve progress from localStorage when the component mounts
//     useEffect(() => {
//         const savedStep = localStorage.getItem(`lesson${lessonId}-currentStep`);
//         if (savedStep) {
//             setCurrentStep(parseInt(savedStep, 10));
//         }
//     }, [lessonId]);

//     // Save progress to localStorage whenever currentStep changes
//     useEffect(() => {
//         if (lessonId !== null) {
//             localStorage.setItem(`lesson${lessonId}-currentStep`, currentStep);
//         }
//     }, [currentStep, lessonId]);

//     useEffect(() => {
//         if (lessonId) {
//             const loadLessonData = async () => {
//                 const response = await fetch(`/data/lesson/lesson${lessonId}.json`);
//                 if (response.ok) {
//                     const data = await response.json();
//                     setLessonData(data);
//                     const currentAlphabet = [...data.vowels, ...data.consonants][currentStep];
//                     setLearningTip(currentAlphabet.learning_tip || "");
//                 } else {
//                     console.error("Failed to load lesson data.");
//                 }
//             };
//             loadLessonData();
//         }
//     }, [lessonId, currentStep]);

//     useEffect(() => {
//         if (lessonData) {
//             const allAlphabets = [...lessonData.vowels, ...lessonData.consonants];
//             const currentAlphabet = allAlphabets[currentStep];

//             const imageNames = [
//                 "a.png", "aa.png", "au.png", "ba.png", "bha.png", "cha.png", "chha.png", "chha.png",
//                 "da.png", "dha.png", "ga.png", "gha.png", "hari.png", "i.png", "ii.png", "jha.png",
//                 "ka.png", "kha.png", "na.png", "nga.png", "nya.png", "o.png", "pa.png",
//                 "pha.png", "ra.png", "ri.png", "sa.png", "sha.png", "shaa.png", "ta.png",
//                 "tha.png", "u.png", "uu.png", "va.png", "ya.png",
//             ];

//             const wrongImages = imageNames.filter((img) => img !== currentAlphabet.image);
//             const randomWrongImages = wrongImages.length > 1
//                 ? wrongImages.sort(() => 0.5 - Math.random()).slice(0, 2)
//                 : wrongImages;

//             setWrongImagePaths(randomWrongImages.map((img) => `/data/images/lesson1/${img}`));
//         }
//     }, [lessonData, currentStep]);

//     const playAudio = (audioUrl) => {
//         const audio = new Audio(audioUrl);
//         audio.play();
//     };

//     const handleCorrectAnswer = () => {
//         setIsCorrect(true);
//         setScore((prevScore) => prevScore + 1);
//         setDisableContinue(false);
//         setDisableAnswerClick(true);
//         playAudio("/data/audio/correct.mp3");
//     };

//     const handleWrongAnswer = (imagePath) => {
//         setIsCorrect(false);
//         setWrongAnswerClicked(imagePath);
//         setDisableAnswerClick(true);
//         playAudio("/data/audio/error.mp3");

//         setTimeout(() => {
//             setWrongAnswerClicked(null);
//         }, 1000);
//     };

//     const handleNextStep = () => {
//         if (isCorrect) {
//             setIsCorrect(null);
//             setDisableContinue(true);
//             setDisableAnswerClick(false);

//             if (currentStep < lessonData.vowels.length + lessonData.consonants.length - 1) {
//                 setCurrentStep((prevStep) => prevStep + 1);
//             } else {
//                 setIsQuizVisible(true);
//             }
//         }
//     };

//     const handleFinishClick = () => {
//         setIsQuizVisible(true);
//     };

//     if (!lessonData) {
//         return (
//             <div className="flex items-center justify-center h-screen w-screen bg-gray-900 text-white">
//                 <p>Loading...</p>
//             </div>
//         );
//     }

//     const allAlphabets = [...lessonData.vowels, ...lessonData.consonants];
//     const currentAlphabet = allAlphabets[currentStep];
//     const correctImagePath = `${currentAlphabet.image}`;

//     return (
//         <div className="h-screen w-screen bg-gray-900 text-white flex flex-col relative overflow-hidden">
//         <button
//             onClick={() => router.back()}
//             className="absolute top-4 left-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2l"
//         >
//             Back to Lessons
//         </button>

//         <PointsManager
//             isCorrect={isCorrect}
//             resetGame={currentStep === lessonData.vowels.length + lessonData.consonants.length - 1}
//             words={lessonData} // Pass lessonData as words
//         />

//         {isQuizVisible && (score >= 15 ? <CompletePopup onClose={() => setIsQuizVisible(false)} /> : <NotCompletePopup onClose={() => setIsQuizVisible(false)} />)}

//         {!isQuizVisible && currentAlphabet && (
//             <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className="flex flex-col items-center justify-start flex-grow text-center space-y-6 pt-8"
//             >
//                 <div className="flex flex-col items-center">
//                     <h3 className="text-5xl font-semibold">{currentAlphabet.symbol}</h3>
//                     <p className="text-xl text-gray-300">{currentAlphabet.pronunciation}</p>
//                 </div>

//                 <div className="flex space-x-6 justify-center items-center">
//                     <ClickableImage
//                         src={correctImagePath}
//                         alt={currentAlphabet.name}
//                         onClick={handleCorrectAnswer}
//                         isHighlighted={isCorrect === true}
//                         isWrong={isCorrect === true}
//                         disabled={disableAnswerClick}
//                     />
//                     {wrongImagePaths.map((imgPath, index) => (
//                         <ClickableImage
//                             key={index}
//                             src={imgPath}
//                             alt={`Option ${index + 1}`}
//                             onClick={() => handleWrongAnswer(imgPath)}
//                             isHighlighted={false}
//                             isWrong={wrongAnswerClicked === imgPath}
//                             disabled={disableAnswerClick}
//                         />
//                     ))}
//                 </div>
//             </motion.div>
//         )}

//         {/* Right Sidebar Notification */}
//         {learningTip && (
//             <div className="absolute right-10 top-1/4 w-40 bg-blue-500 p-5 rounded-lg shadow-xl">
//                 <h4 className="text-lg font-semibold text-white">Tip</h4>
//                 <p className="text-sm text-white">{learningTip}</p>
//             </div>
//         )}

//         <div className="fixed bottom-0 w-full bg-gray-900 p-4 shadow-lg flex items-center justify-between border-t border-gray-700 my-4">
//             <button
//                 onClick={() => playAudio(currentAlphabet?.audio)}
//                 className="text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-md flex items-center shadow-xl"
//                 disabled={!currentAlphabet}
//             >
//                 <FaVolumeUp className="text-2xl" />
//             </button>

//             <div className="flex space-x-4">
//                 {currentStep < lessonData.vowels.length + lessonData.consonants.length - 1 ? (
//                     <button
//                         onClick={handleNextStep}
//                         className="px-6 py-2 text-white rounded-md shadow-xl bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
//                         disabled={disableContinue}
//                     >
//                         Continue
//                     </button>
//                 ) : (
//                     <button
//                         onClick={handleFinishClick}
//                         className="px-6 py-2 text-white rounded-md shadow-xl text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
//                     >
//                         Finish
//                     </button>
//                 )}
//             </div>
//         </div>
//     </div>
//     );
// };

// export default LessonPage;




































    // // Fetch user data after user is authenticated
    // useEffect(() => {
    //     if (user) {
    //         const fetchUserData = async () => {
    //             const response = await fetch('/api/get-user');
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setUserDetails(data.user); // Set user details in state
    //             } else {
    //                 console.error("Failed to fetch user details.");
    //             }

    //         };

    //         fetchUserData();
    //     }
    // }, [user]); // Fetch user data when `user` changes (i.e., when the user is authenticated)



// {/* Display user details here */}
// {userDetails && (
//     <div className="absolute top-10 left-10 bg-blue-500 p-4 rounded-lg shadow-xl text-white">
//         <h4 className="text-lg font-semibold">User Details</h4>
//         <p>Name: {userDetails[0].name}</p>
//         <p>Email: {userDetails[0].email}</p>
//         {/* Add more fields as needed */}
//     </div>
// )}




















 







"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import DOMPurify from 'dompurify';
import { motion } from "framer-motion";
import { FaVolumeUp } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import PointsManager from './PointsManager';
import CompletePopup from "./CompletePopup";
import NotCompletePopup from "./NotCompletePopup";
import ClickableImage from './ClickableImage';
import Image from "next/image";


const LessonPage = ({ params }) => {
    const [lessonData, setLessonData] = useState(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [isQuizVisible, setIsQuizVisible] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [score, setScore] = useState(0);
    const [wrongImagePaths, setWrongImagePaths] = useState([]);
    const [wrongAnswerClicked, setWrongAnswerClicked] = useState(null);
    const [disableContinue, setDisableContinue] = useState(true);
    const [disableAnswerClick, setDisableAnswerClick] = useState(false);
    const [learningTip, setLearningTip] = useState("");
    const [hindiTip, setHindiTip] = useState(true);
    const [isHindi, setIsHindi] = useState(false);  // State to toggle between Hindi and English tips
    const router = useRouter();
    const [lessonId, setLessonId] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // State to track loading phase
    const [isClient, setIsClient] = useState(false); // State to track if it's on the client side
    // const [audio] = useState(new Audio(isHindi ? "/path/to/hindi-audio.mp3" : "/path/to/english-audio.mp3")); // Initialize the audio


    useEffect(() => {
        (async () => {
            const unwrappedParams = await params;
            setLessonId(unwrappedParams.id);
        })();
    }, [params]);

    useEffect(() => {
        const savedStep = localStorage.getItem(`lesson${lessonId}-currentStep`);
        if (savedStep) {
            setCurrentStep(parseInt(savedStep, 10));
        }
    }, [lessonId]);

    useEffect(() => {
        if (lessonId !== null) {
            localStorage.setItem(`lesson${lessonId}-currentStep`, currentStep);
        }
    }, [currentStep, lessonId]);

   
    useEffect(() => {
        if (lessonId) {
            const loadLessonData = async () => {
                const response = await fetch(`/data/lesson/lesson${lessonId}.json`);
                if (response.ok) {
                    const data = await response.json();
                    setLessonData(data);
                    const currentAlphabet = [...data.vowels, ...data.consonants][currentStep];
                    setLearningTip(DOMPurify.sanitize(currentAlphabet.learning_tip || ""));
                    setHindiTip(DOMPurify.sanitize(currentAlphabet.hindi_learning_tip || ""));
                } else {
                    console.error("Failed to load lesson data.");
                }
            };
            loadLessonData();
        }
    }, [lessonId, currentStep]);

      // useEffect to check if it's running on the client side
  useEffect(() => {
    // Set isLoading to false once the content has loaded
    const timer = setTimeout(() => setIsLoading(false), 1000); // simulate loading time for the gif
    setIsClient(true);

    return () => clearTimeout(timer);
  }, []);
    



    useEffect(() => {
        if (lessonData) {
            const allAlphabets = [...lessonData.vowels, ...lessonData.consonants];
            const currentAlphabet = allAlphabets[currentStep];
 
            const imageNames = [
                "a.png", "aa.png", "au.png", "ba.png", "bha.png", "cha.png", "chha.png", "chha.png",
                "da.png", "dha.png", "ga.png", "gha.png", "hari.png", "i.png", "ii.png", "jha.png",
                "ka.png", "kha.png", "na.png", "nga.png", "nya.png", "o.png", "pa.png",
                "pha.png", "ra.png", "ri.png", "sa.png", "sha.png", "shaa.png", "ta.png",
                "tha.png", "u.png", "uu.png", "va.png", "ya.png",
            ];

            const wrongImages = imageNames.filter((img) => img !== currentAlphabet.image);
            const randomWrongImages = wrongImages.length > 1
                ? wrongImages.sort(() => 0.5 - Math.random()).slice(0, 2)
                : wrongImages;

            setWrongImagePaths(randomWrongImages.map((img) => `https://d8q326uv7ym5m.cloudfront.net/public/data/images/lesson1/${img}`));

        }
    }, [lessonData, currentStep]);

    const playAudio = (audioUrl) => {
        const audio = new Audio(audioUrl);
        audio.play();
    };


    

    const handleCorrectAnswer = () => {
        setIsCorrect(true);
        setScore((prevScore) => prevScore + 1);
        setDisableContinue(false);
        setDisableAnswerClick(true);
        playAudio("https://d8q326uv7ym5m.cloudfront.net/public/data/audio/correct.mp3");
    };

    const handleWrongAnswer = (imagePath) => {
        setIsCorrect(false);
        setWrongAnswerClicked(imagePath);
        setDisableAnswerClick(true);
        playAudio("https://d8q326uv7ym5m.cloudfront.net/public/data/audio/error.mp3");

        setTimeout(() => {
            setWrongAnswerClicked(null);
        }, 1000);
    };

    const handleNextStep = () => {
        if (isCorrect) {
            setIsCorrect(null);
            setDisableContinue(true);
            setDisableAnswerClick(false);

            if (currentStep < lessonData.vowels.length + lessonData.consonants.length - 1) {
                setCurrentStep((prevStep) => prevStep + 1);
            } else {
                setIsQuizVisible(true);
            }
        }

        setTimeout(() => {
            const allAlphabets = [...lessonData.vowels, ...lessonData.consonants];
            const audioCount = currentStep + 1;
            const currentAlphabet = allAlphabets[audioCount];
            playAudio(currentAlphabet.audio); // Play audio after step change
        }, 1000);
    };

    const handleFinishClick = () => {
        setIsQuizVisible(true);
    };

    if (!lessonData) {
        return (
            <div className="flex items-center justify-center h-screen w-screen bg-gray-900 text-white">
        <Image
          src="https://d8q326uv7ym5m.cloudfront.net/public/loading.gif" // Path to your loading GIF
          alt="Loading..."
          width={100}  // Set the width
          height={100} // Set the height
          objectFit="contain" // Optional: maintain aspect ratio and avoid distortion
        />            </div>
        );
    }


    const handleTextToSpeech = async () => {
        const response = await fetch('/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text }),
        });
    
        if (response.ok) {
          const data = await response.json();
          const audioBlob = new Blob([Uint8Array.from(atob(data.audioBase64), c => c.charCodeAt(0))], {
            type: 'audio/mp3',
          });
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioSrc(audioUrl);
        } else {
          console.error('TTS request failed');
        }
      };



    // Toggle between Hindi and English
    const toggleLanguage = () => {
        setIsHindi(!isHindi);
        // Update the audio source when language is toggled
        audio.src = isHindi ? "/path/to/english-audio.mp3" : "/path/to/hindi-audio.mp3";
    };


   


    const allAlphabets = [...lessonData.vowels, ...lessonData.consonants];
    const currentAlphabet = allAlphabets[currentStep];
    const correctImagePath = `${currentAlphabet.image}`;


    // bg-gradient-to-r from-emerald-500 to-emerald-900

    return (
        <div className="h-screen w-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex flex-col relative overflow-hidden">
        
  {/* Main Content and Bottom Bar with Sidebar */}
  <div className="fixed bottom-0 w-full border-t border-gray-700 bg-gradient-to-r from-slate-900 to-slate-700 p-0 shadow-lg flex items-center justify-between relative">

    {/* Back to Lessons Button */}
    <button
  onClick={() => router.back()}
  className="absolute sm:top-4 sm:left-4 top-3 left-3 text-white flex items-center bg-gradient-to-r from-slate-900 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 z-20"
>
  Back to Lessons
</button>


    {/* Container for PointsManager and Learning Tip */}
    <div className="flex w-full justify-between items-center relative">

      {/* Points Manager */}
      <div className="flex flex-grow justify-center">
        <PointsManager
          isCorrect={isCorrect}
          resetGame={currentStep === lessonData.vowels.length + lessonData.consonants.length - 1}
          words={lessonData} // Pass lessonData as words
        />
      </div>
{/* Right Sidebar Notification (Learning Tip) */}
{learningTip && (
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-38 sm:w-46 md:w-56 p-1 sm:p-2 rounded-lg z-10">
          <h4 className="text-xs font-semibold text-white text-center">
            {isHindi ? "संकेत" : "Hint"}
          </h4>
                            <p className="text-xs text-white text-center">
                                {isHindi ? DOMPurify.sanitize(hindiTip) : DOMPurify.sanitize(learningTip)}
                            </p>

                            <div className="flex justify-center mt-1">
    <button
        onClick={toggleLanguage} // Toggle between Hindi and English
        className="text-white bg-gradient-to-r from-slate-900 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 shadow-lg shadow-slate-500/50 dark:shadow-lg dark:shadow-slate-800/80 font-medium rounded-lg text-xs px-1 py-0.5 sm:px-2 sm:py-1 text-center"
    >
        {isHindi ? "View in English" : "View in Hindi"}
    </button>

    <button
        onClick={() => playAudio(currentAlphabet?.audio)} // Play the selected language's audio
        className="text-white bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-small rounded-full p-2 ml-2 mb-0"
    >
        <FaPlay className="text-white text-xs" /> {/* Small play button icon */}
    </button>
</div>

          


        </div>
      )}


    </div> {/* End of container for PointsManager and Learning Tip */}

  </div> {/* End of bottom fixed div */}



            {/* Quiz Result Popup */}
            {isQuizVisible && (score >= 15 ? <CompletePopup onClose={() => setIsQuizVisible(false)} /> : <NotCompletePopup onClose={() => setIsQuizVisible(false)} />)}

            {/* Interactive Components (Alphabet, Pronunciation, etc.) */}
            {!isQuizVisible && currentAlphabet && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-start flex-grow text-center space-y-6 pt-8"
                >
                    <div className="flex flex-col items-center">
                        <h3 className="text-5xl font-semibold sm:text-4xl md:text-5xl">{currentAlphabet.symbol}</h3>
                        <p className="text-xl text-gray-300">{currentAlphabet.pronunciation}</p>
                    </div>

                    <div className="flex space-x-6 justify-center items-center flex-wrap">
                        <ClickableImage
                            src={correctImagePath}
                            alt={currentAlphabet.name}
                            onClick={handleCorrectAnswer}
                            isHighlighted={isCorrect === true}
                            isWrong={isCorrect === true}
                            disabled={disableAnswerClick}
                        />
                        {wrongImagePaths.map((imgPath, index) => (
                            <ClickableImage
                                key={index}
                                src={imgPath}
                                alt={`Option ${index + 1}`}
                                onClick={() => handleWrongAnswer(imgPath)}
                                isHighlighted={false}
                                isWrong={wrongAnswerClicked === imgPath}
                                disabled={disableAnswerClick}
                            />
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Bottom Control Bar (Continue/Finish Buttons) */}
            <div className="fixed bottom-0 w-full bg-gradient-to-r from-slate-900 to-slate-700 p-4 shadow-lg flex items-center justify-between border-t border-gray-700 my-0">
                <button
                    onClick={() => playAudio(currentAlphabet?.audio)}
                    className="text-white bg-gradient-to-r from-slate-900 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    disabled={!currentAlphabet}
                >
                    <FaVolumeUp className="text-2xl" />
                </button>

                <div className="flex space-x-4">
                    {currentStep < lessonData.vowels.length + lessonData.consonants.length - 1 ? (
                        <button
                            onClick={handleNextStep}
                            className="px-6 py-2 text-white rounded-md shadow-xl bg-gradient-to-r from-slate-900 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            disabled={disableContinue}
                        >
                            Continue
                        </button>
                    ) : (
                        <button
                            onClick={handleFinishClick}
                            className="px-6 py-2 text-white rounded-md shadow-xl text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
                        >
                            Finish
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LessonPage;






























