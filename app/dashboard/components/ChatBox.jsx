// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { FiCamera } from "react-icons/fi";

// export default function KnowledgeBox() {
//   const [promptAnswer, setPromptAnswer] = useState("");
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [photoUrl, setPhotoUrl] = useState(null); // Store image URL
//   const [uploadingPhoto, setUploadingPhoto] = useState(false); // State for uploading photo

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handlePhotoUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadingPhoto(true); // Show upload spinner
//       setLoading(true); // Show loading state for prompt answer

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await axios.post("/api/upload", formData);
//         setPhotoUrl(response.data.imageUrl); // Set image URL from the response
//       } catch (error) {
//         console.error("Error uploading photo:", error);
//       } finally {
//         setUploadingPhoto(false); // Hide upload spinner
//         setLoading(false); // Hide loading spinner for prompt answer
//       }
//     }
//   };

//   const getAnswerGemini = async () => {
//     setLoading(true);
//     try {
//       let result;
  
//       if (prompt && photoUrl) {
//         // Call the API endpoint with image URL and prompt
//         result = await axios.post("/api/get-gemini-image-answer", { prompt, photo: photoUrl });
//       } else if (prompt) {
//         // Call the API endpoint with only prompt
//         result = await axios.post("/api/get-gemini-answer", { prompt });
//       }
  
//       setPromptAnswer(result?.data?.result || "No answer returned.");
//     } catch (error) {
//       console.error("Error fetching answer:", error);
//       setPromptAnswer("There was an error. Please try again.");
//     } finally {
//       setLoading(false); // Stop loading after receiving the answer
//     }
//   };
  

//   const resetFields = () => {
//     setPrompt("");
//     setPromptAnswer("");
//     setPhotoUrl(null);
//   };

//   return (
//     <div className="knowledge-box w-full max-w-lg p-8 bg-gray-900 rounded-xl shadow-xl space-y-6">
//       <h2 className="text-3xl font-semibold text-center text-white">Connect With Me</h2>

//       {/* Input and Photo Upload Section */}
//       <div className="flex space-x-4 items-center">
//         <input
//           type="text"
//           className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           placeholder="Enter your question here..."
//           value={prompt}
//           onChange={handleInputChange}
//         />
//         <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
//           <FiCamera size={22} className="text-gray-600" />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handlePhotoUpload}
//             className="hidden"
//           />
//         </label>
//       </div>

//       {/* Uploaded Photo Preview */}
//       {photoUrl && (
//         <div className="flex justify-center mb-4">
//           <img
//             src={photoUrl}
//             alt="Uploaded preview"
//             className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
//           />
//         </div>
//       )}

//       {/* Buttons (Get Answer and Reset) */}
//       <div className="flex justify-between space-x-4">
//         <Button
//           className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={getAnswerGemini}
//           disabled={loading}
//         >
//           {loading ? (
//             <svg
//               className="animate-spin h-6 w-6 text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8v8h8a8 8 0 11-8 8v-8H4z"
//               ></path>
//             </svg>
//           ) : (
//             "Get Answer"
//           )}
//         </Button>

//         <Button
//           className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={resetFields}
//         >
//           Reset
//         </Button>
//       </div>

//       {/* Display Answer Section */}
//       <div className="mt-6 p-6 bg-white rounded-xl shadow-md text-gray-700 max-h-72 overflow-y-auto">
//         <h3 className="text-lg font-semibold mb-2">Answer:</h3>
//         <div className="text-sm text-gray-600">{promptAnswer || "Your answer will appear here."}</div>
//       </div>
//     </div>
//   );
// }










// "use client";

// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { FiCamera } from "react-icons/fi";
// import { useSpring, animated } from "react-spring";

// export default function KnowledgeBox() {
//   const [promptAnswer, setPromptAnswer] = useState("");
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [uploadingPhoto, setUploadingPhoto] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("");
//   const [textBackgroundColor, setTextBackgroundColor] = useState("transparent");

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handlePhotoUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadingPhoto(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await axios.post("/api/aws-image-upload", formData);
//         setPhotoUrl(response.data.imageUrl);

//         // Set default prompt for image
//         if (!prompt) {
//           setPrompt(`Meaning of this in ${selectedLanguage || "Hindi"}`);
//         }
//       } catch (error) {
//         console.error("Error uploading photo:", error);
//       } finally {
//         setUploadingPhoto(false);
//       }
//     }
//   };

//   const handleLanguageSelection = (language) => {
//     setSelectedLanguage(language);
//   };

//   const getAnswerGemini = async () => {
//     setLoading(true);
//     try {
//       let result;

//       // Modify the prompt to include the language part only in the API request
//       const formattedPrompt = selectedLanguage
//         ? `${prompt} in ${selectedLanguage}`
//         : prompt;

//       if (photoUrl) {
//         result = await axios.post("/api/get-gemini-image-answer", {
//           prompt: formattedPrompt,
//           photo: photoUrl,
//         });
//       } else if (prompt) {
//         result = await axios.post("/api/get-gemini-answer", {
//           prompt: formattedPrompt,
//         });
//       } else {
//         setPromptAnswer("Please provide some input to get an answer.");
//         return;
//       }

//       setPromptAnswer(result?.data?.result || "No answer returned.");
//       setTextBackgroundColor("lightyellow"); // Change background color when text changes
//     } catch (error) {
//       console.error("Error fetching answer:", error);
//       setPromptAnswer("There was an error. Please try again.");
//       setTextBackgroundColor("transparent"); // Reset background if there's an error
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetFields = () => {
//     setPrompt("");
//     setPromptAnswer("");
//     setPhotoUrl(null);
//     setSelectedLanguage("");
//     setTextBackgroundColor("transparent"); // Reset background color on reset
//   };

//   // Scrollbar animation using react-spring
//   const scrollAnimation = useSpring({
//     opacity: promptAnswer ? 1 : 0.5,
//     transform: promptAnswer ? "scale(1)" : "scale(0.9)",
//     config: { tension: 200, friction: 20 },
//   });

//   return (
//     <div className="knowledge-box w-full max-w-lg p-8 bg-gray-900 rounded-xl shadow-xl space-y-6">
//       <h2 className="text-3xl font-semibold text-center text-white">Connect With Me</h2>

//       <div className="flex space-x-4 items-center">
//         <input
//           type="text"
//           className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           placeholder="Enter your question here..."
//           value={prompt}
//           onChange={handleInputChange}
//         />
//         <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
//           <FiCamera size={22} className="text-gray-600" />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handlePhotoUpload}
//             className="hidden"
//           />
//         </label>
//       </div>

//       {photoUrl && (
//         <div className="flex justify-center mb-4">
//           <img
//             src={photoUrl}
//             alt="Uploaded preview"
//             className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
//           />
//         </div>
//       )}

//       <div className="flex justify-around my-4 space-x-4">
//         {["Hindi", "Hinglish", "English"].map((language) => (
//           <Button
//             key={language}
//             onClick={() => handleLanguageSelection(language)}
//             className={`flex-1 py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 ${selectedLanguage === language
//               ? "bg-purple-500 text-white"
//               : "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//             }`}
//           >
//             {language}
//           </Button>
//         ))}
//       </div>

//       <div className="flex justify-between space-x-4">
//         <Button
//           className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={getAnswerGemini}
//           disabled={loading}
//         >
//           {loading ? (
//             <svg
//               className="animate-spin h-6 w-6 text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8v8h8a8 8 0 11-8 8v-8H4z"
//               ></path>
//             </svg>
//           ) : (
//             "Get Answer"
//           )}
//         </Button>

//         <Button
//           className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={resetFields}
//         >
//           Reset
//         </Button>
//       </div>

//       <div className="mt-6 p-6 bg-white rounded-xl shadow-md text-gray-700 max-h-72 overflow-y-auto scrollbar-custom">
//         <h3 className="text-lg font-semibold mb-2">Answer:</h3>
//         <animated.div
//           style={scrollAnimation}
//           className="text-lg text-gray-600 overflow-y-auto"
//         >
//           <div
//             className="p-4"
//             style={{ backgroundColor: textBackgroundColor }}
//             dangerouslySetInnerHTML={{
//               __html: promptAnswer
//                 ? promptAnswer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
//                 : "Your answer will appear here.",
//             }}
//           />
//         </animated.div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { FiCamera } from "react-icons/fi";
// import { useSpring, animated } from "react-spring";

// export default function KnowledgeBox() {
//   const [promptAnswer, setPromptAnswer] = useState("");
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [uploadingPhoto, setUploadingPhoto] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("");
//   const [textBackgroundColor, setTextBackgroundColor] = useState("");
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handlePhotoUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadingPhoto(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await axios.post("/api/aws-image-upload", formData);
//         setPhotoUrl(response.data.imageUrl);

//         if (!prompt) {
//           setPrompt(`Meaning of this in ${selectedLanguage || "Hindi"}`);
//         }
//       } catch (error) {
//         console.error("Error uploading photo:", error);
//       } finally {
//         setUploadingPhoto(false);
//       }
//     }
//   };

//   const handleLanguageSelection = (language) => {
//     setSelectedLanguage(language);
//   };

//   const getAnswerGemini = async () => {
//     setLoading(true);
//     try {
//       let result;
//       const formattedPrompt = selectedLanguage
//         ? `${prompt} in ${selectedLanguage}`
//         : prompt;

//       if (photoUrl) {
//         result = await axios.post("/api/get-gemini-image-answer", {
//           prompt: formattedPrompt,
//           photo: photoUrl,
//         });
//       } else if (prompt) {
//         result = await axios.post("/api/get-gemini-answer", {
//           prompt: formattedPrompt,
//         });
//       } else {
//         setPromptAnswer("Please provide some input to get an answer.");
//         return;
//       }

//       setPromptAnswer(result?.data?.result || "No answer returned.");
//       setTextBackgroundColor("lightyellow");
//     } catch (error) {
//       console.error("Error fetching answer:", error);
//       setPromptAnswer("There was an error. Please try again.");
//       setTextBackgroundColor("transparent");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetFields = () => {
//     setPrompt("");
//     setPromptAnswer("");
//     setPhotoUrl(null);
//     setSelectedLanguage("");
//     setTextBackgroundColor("transparent");
//   };

//   const scrollAnimation = useSpring({
//     opacity: promptAnswer ? 1 : 0.5,
//     transform: promptAnswer ? "scale(1)" : "scale(0.9)",
//     config: { tension: 200, friction: 20 },
//   });

//   return (
//     <div className="knowledge-box w-full max-w-lg p-8 bg-gray-900 rounded-xl shadow-xl space-y-6">
//       <h2 className="text-3xl font-semibold text-center text-white">Connect With Me</h2>

//       {/* First line: Input + Camera button */}
//       <div className="flex space-x-4 items-center">
//         <input
//           type="text"
//           className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           placeholder="Enter your question here..."
//           value={prompt}
//           onChange={handleInputChange}
//         />
//         <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
//           <FiCamera size={22} className="text-gray-600" />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handlePhotoUpload}
//             className="hidden"
//           />
//         </label>
//       </div>

//       {photoUrl && (
//         <div className="flex justify-center mb-4">
//           <img
//             src={photoUrl}
//             alt="Uploaded preview"
//             className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
//           />
//         </div>
//       )}

//       {/* Language Selection */}
//       <div className="flex justify-center my-4">
//         {!showLanguageOptions ? (
//           <Button
//             className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//             onClick={() => setShowLanguageOptions(true)}
//           >
//             Select Language
//           </Button>
//         ) : (
//           <div className="flex space-x-4 w-full justify-center">
//             <Button
//               className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//               onClick={() => handleLanguageSelection("English")}
//             >
//               English
//             </Button>
//             <Button
//               className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//               onClick={() => handleLanguageSelection("Hindi")}
//             >
//               Hindi
//             </Button>
//           </div>
//         )}
//       </div>

//       {/* Second line: Get Answer + Reset buttons */}
//       <div className="flex justify-between space-x-4">
//         <Button
//           className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={getAnswerGemini}
//           disabled={loading}
//         >
//           {loading ? (
//             <svg
//               className="animate-spin h-6 w-6 text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8v8h8a8 8 0 11-8 8v-8H4z"
//               ></path>
//             </svg>
//           ) : (
//             "Get Answer"
//           )}
//         </Button>

//         <Button
//           className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={resetFields}
//         >
//           Reset
//         </Button>
//       </div>

//       {/* Answer Box */}
//       <div className="mt-6 p-6 bg-white rounded-xl shadow-md text-gray-700 max-h-72 overflow-y-auto scrollbar-custom">
//         <h3 className="text-lg font-semibold mb-2">Answer:</h3>
//         <animated.div
//           style={scrollAnimation}
//           className="text-lg text-gray-600 overflow-y-auto"
//         >
//           <div
//             className="p-4"
//             style={{ backgroundColor: textBackgroundColor }}
//             dangerouslySetInnerHTML={{
//               __html: promptAnswer
//                 ? promptAnswer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
//                 : "Your answer will appear here.",
//             }}
//           />
//         </animated.div>
//       </div>
//     </div>
//   );
// }














// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { FiCamera } from "react-icons/fi";
// import { useSpring, animated } from "react-spring";

// export default function KnowledgeBox() {
//   const [promptAnswer, setPromptAnswer] = useState("");
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [uploadingPhoto, setUploadingPhoto] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("");
//   const [textBackgroundColor, setTextBackgroundColor] = useState("");
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handlePhotoUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadingPhoto(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await axios.post("/api/aws-image-upload", formData);
//         setPhotoUrl(response.data.imageUrl);

//         if (!prompt) {
//           setPrompt(`Meaning of this in ${selectedLanguage || "Hindi"}`);
//         }
//       } catch (error) {
//         console.error("Error uploading photo:", error);
//       } finally {
//         setUploadingPhoto(false);
//       }
//     }
//   };

//   const handleLanguageSelection = (language) => {
//     setSelectedLanguage(language);
//   };

//   const getAnswerGemini = async () => {
//     setLoading(true);
//     try {
//       let result;
//       const formattedPrompt = selectedLanguage
//         ? `${prompt} in ${selectedLanguage}`
//         : prompt;

//       if (photoUrl) {
//         result = await axios.post("/api/get-gemini-image-answer", {
//           prompt: formattedPrompt,
//           photo: photoUrl,
//         });
//       } else if (prompt) {
//         result = await axios.post("/api/get-gemini-answer", {
//           prompt: formattedPrompt,
//         });
//       } else {
//         setPromptAnswer("Please provide some input to get an answer.");
//         return;
//       }

//       setPromptAnswer(result?.data?.result || "No answer returned.");
//       setTextBackgroundColor("lightyellow");
//     } catch (error) {
//       console.error("Error fetching answer:", error);
//       setPromptAnswer("There was an error. Please try again.");
//       setTextBackgroundColor("transparent");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetFields = () => {
//     const resetFields = () => {
//       setPrompt("");
//       setPromptAnswer("");
//       setPhotoUrl(null);
//       setSelectedLanguage("");
//       setTextBackgroundColor("transparent");
//       // Do not reset showLanguageOptions state
//     };
    
//   };

//   const scrollAnimation = useSpring({
//     opacity: promptAnswer ? 1 : 0.5,
//     transform: promptAnswer ? "scale(1)" : "scale(0.9)",
//     config: { tension: 200, friction: 20 },
//   });

//   return (
//     <div className="knowledge-box w-full max-w-lg p-8 bg-gray-900 rounded-xl shadow-xl space-y-6">
//       <h2 className="text-3xl font-semibold text-center text-white">Connect With Me</h2>

//       {/* First line: Input + Camera button + Language selection */}
//       <div className="flex items-center space-x-4">
//         <input
//           type="text"
//           className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           placeholder="Enter your question here..."
//           value={prompt}
//           onChange={handleInputChange}
//         />
        
//         <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
//           <FiCamera size={22} className="text-gray-600" />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handlePhotoUpload}
//             className="hidden"
//           />
//         </label>

//         {/* Language Selection Button */}
//         {!showLanguageOptions ? (
//           <Button
//             className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//             onClick={() => setShowLanguageOptions(true)}
//           >
//             Select Language
//           </Button>
//         ) : (
//           <div className="flex space-x-4">
//             <Button
//               className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//               onClick={() => handleLanguageSelection("English")}
//             >
//               English
//             </Button>
//             <Button
//               className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//               onClick={() => handleLanguageSelection("Hindi")}
//             >
//               Hindi
//             </Button>
//           </div>
//         )}
//       </div>

//       {/* Uploaded Image Preview */}
//       {photoUrl && (
//         <div className="flex justify-center mb-4">
//           <img
//             src={photoUrl}
//             alt="Uploaded preview"
//             className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
//           />
//         </div>
//       )}

//       {/* Second line: Get Answer + Reset buttons */}
//       <div className="flex justify-between space-x-4">
//         <Button
//           className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={getAnswerGemini}
//           disabled={loading}
//         >
//           {loading ? (
//             <svg
//               className="animate-spin h-6 w-6 text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8v8h8a8 8 0 11-8 8v-8H4z"
//               ></path>
//             </svg>
//           ) : (
//             "Get Answer"
//           )}
//         </Button>

//         <Button
//           className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={resetFields}
//         >
//           Reset
//         </Button>
//       </div>

//       {/* Answer Box */}
//       <div className="mt-6 p-6 bg-white rounded-xl shadow-md text-gray-700 max-h-72 overflow-y-auto scrollbar-custom">
//         <h3 className="text-lg font-semibold mb-2">Answer:</h3>
//         <animated.div
//           style={scrollAnimation}
//           className="text-lg text-gray-600 overflow-y-auto"
//         >
//           <div
//             className="p-4"
//             style={{ backgroundColor: textBackgroundColor }}
//             dangerouslySetInnerHTML={{
//               __html: promptAnswer
//                 ? promptAnswer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
//                 : "Your answer will appear here.",
//             }}
//           />
//         </animated.div>
//       </div>
//     </div>
//   );
// }








// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { FiCamera } from "react-icons/fi";
// import { useSpring, animated } from "react-spring";

// export default function KnowledgeBox() {
//   const [promptAnswer, setPromptAnswer] = useState("");
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [uploadingPhoto, setUploadingPhoto] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("");
//   const [textBackgroundColor, setTextBackgroundColor] = useState("");
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handlePhotoUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadingPhoto(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await axios.post("/api/aws-image-upload", formData);
//         setPhotoUrl(response.data.imageUrl);

//         if (!prompt) {
//           setPrompt(`Meaning of this in ${selectedLanguage || "Hindi"}`);
//         }
//       } catch (error) {
//         console.error("Error uploading photo:", error);
//       } finally {
//         setUploadingPhoto(false);
//       }
//     }
//   };

//   const handleLanguageSelection = (language) => {
//     setSelectedLanguage(language);
//   };

//   const getAnswerGemini = async () => {
//     setLoading(true);
//     try {
//       let result;
//       const formattedPrompt = selectedLanguage
//         ? `${prompt} in ${selectedLanguage}`
//         : prompt;

//       if (photoUrl) {
//         result = await axios.post("/api/get-gemini-image-answer", {
//           prompt: formattedPrompt,
//           photo: photoUrl,
//         });
//       } else if (prompt) {
//         result = await axios.post("/api/get-gemini-answer", {
//           prompt: formattedPrompt,
//         });
//       } else {
//         setPromptAnswer("Please provide some input to get an answer.");
//         return;
//       }

//       setPromptAnswer(result?.data?.result || "No answer returned.");
//       setTextBackgroundColor("lightyellow");
//     } catch (error) {
//       console.error("Error fetching answer:", error);
//       setPromptAnswer("There was an error. Please try again.");
//       setTextBackgroundColor("transparent");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetFields = () => {
//     setPrompt("");
//     setPromptAnswer("");
//     setPhotoUrl(null);
//     setSelectedLanguage("");
//     setTextBackgroundColor("transparent");
//     // Do not reset showLanguageOptions state
//   };

//   const scrollAnimation = useSpring({
//     opacity: promptAnswer ? 1 : 0.5,
//     transform: promptAnswer ? "scale(1)" : "scale(0.9)",
//     config: { tension: 200, friction: 20 },
//   });

//   return (
//     <div className="knowledge-box w-full max-w-lg p-8 bg-gray-900 rounded-xl shadow-xl space-y-6">
//       <h2 className="text-3xl font-semibold text-center text-white">Connect With Me</h2>

//       {/* First line: Input + Camera button + Language selection */}
//       <div className="flex items-center space-x-4">
//         <input
//           type="text"
//           className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           placeholder="Enter your question here..."
//           value={prompt}
//           onChange={handleInputChange}
//         />
        
//         <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
//           <FiCamera size={22} className="text-gray-600" />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handlePhotoUpload}
//             className="hidden"
//           />
//         </label>

//         {/* Language Selection Button */}
//         {!showLanguageOptions ? (
//           <Button
//             className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//             onClick={() => setShowLanguageOptions(true)}
//           >
//             Select Language
//           </Button>
//         ) : (
//           <div className="flex space-x-4">
//             <Button
//               className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//               onClick={() => handleLanguageSelection("English")}
//             >
//               English
//             </Button>
//             <Button
//               className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//               onClick={() => handleLanguageSelection("Hindi")}
//             >
//               Hindi
//             </Button>
//           </div>
//         )}
//       </div>

//       {/* Uploaded Image Preview */}
//       {photoUrl && (
//         <div className="flex justify-center mb-4">
//           <img
//             src={photoUrl}
//             alt="Uploaded preview"
//             className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
//           />
//         </div>
//       )}

//       {/* Second line: Get Answer + Reset buttons */}
//       <div className="flex justify-between space-x-4">
//         <Button
//           className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={getAnswerGemini}
//           disabled={loading}
//         >
//           {loading ? (
//             <svg
//               className="animate-spin h-6 w-6 text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8v8h8a8 8 0 11-8 8v-8H4z"
//               ></path>
//             </svg>
//           ) : (
//             "Get Answer"
//           )}
//         </Button>

//         <Button
//           className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={resetFields}
//         >
//           Reset
//         </Button>
//       </div>

//       {/* Answer Box */}
//       {!loading && promptAnswer && (
//         <div className="mt-6 p-6 bg-white rounded-xl shadow-md text-gray-700 max-h-72 overflow-y-auto scrollbar-custom">
//           <h3 className="text-lg font-semibold mb-2">Answer:</h3>
//           <animated.div
//             style={scrollAnimation}
//             className="text-lg text-gray-600 overflow-y-auto"
//           >
//             <div
//               className="p-4"
//               style={{ backgroundColor: textBackgroundColor }}
//               dangerouslySetInnerHTML={{
//                 __html: promptAnswer
//                   ? promptAnswer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
//                   : "Your answer will appear here.",
//               }}
//             />
//           </animated.div>
//         </div>
//       )}
//     </div>
//   );
// }






































// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { FiCamera } from "react-icons/fi";
// import { useSpring, animated } from "react-spring";

// export default function KnowledgeBox() {
//   const [promptAnswer, setPromptAnswer] = useState("");
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [uploadingPhoto, setUploadingPhoto] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("");
//   const [textBackgroundColor, setTextBackgroundColor] = useState("");
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handlePhotoUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadingPhoto(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await axios.post("/api/aws-image-upload", formData);
//         setPhotoUrl(response.data.imageUrl);

//         if (!prompt) {
//           setPrompt(`Meaning of this in ${selectedLanguage || "Hindi"}`);
//         }
//       } catch (error) {
//         console.error("Error uploading photo:", error);
//       } finally {
//         setUploadingPhoto(false);
//       }
//     }
//   };

//   const handleLanguageSelection = (language) => {
//     setSelectedLanguage(language);
//   };

//   const getAnswerGemini = async () => {
//     setLoading(true);
//     try {
//       let result;
//       const formattedPrompt = selectedLanguage
//         ? `${prompt} in ${selectedLanguage}`
//         : prompt;

//       if (photoUrl) {
//         result = await axios.post("/api/get-gemini-image-answer", {
//           prompt: formattedPrompt,
//           photo: photoUrl,
//         });
//       } else if (prompt) {
//         result = await axios.post("/api/get-gemini-answer", {
//           prompt: formattedPrompt,
//         });
//       } else {
//         setPromptAnswer("Please provide some input to get an answer.");
//         return;
//       }

//       setPromptAnswer(result?.data?.result || "No answer returned.");
//       setTextBackgroundColor("lightyellow");
//     } catch (error) {
//       console.error("Error fetching answer:", error);
//       setPromptAnswer("There was an error. Please try again.");
//       setTextBackgroundColor("transparent");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetFields = () => {
//     setPrompt("");
//     setPromptAnswer("");
//     setPhotoUrl(null);
//     setSelectedLanguage("");
//     setTextBackgroundColor("transparent");
//     // Do not reset showLanguageOptions state
//   };

//   const scrollAnimation = useSpring({
//     opacity: promptAnswer ? 1 : 0.5,
//     transform: promptAnswer ? "scale(1)" : "scale(0.9)",
//     config: { tension: 200, friction: 20 },
//   });

//   return (
//     <div className="knowledge-box w-full max-w-lg p-8 bg-gray-900 rounded-xl shadow-xl space-y-6">
//       <h2 className="text-3xl font-semibold text-center text-white">Connect With Me</h2>

//       {/* First line: Input + Camera button + Language selection */}
//       <div className="flex items-center space-x-4">
//         <textarea
//           rows="1"  // Makes it start as a single line
//           className="w-4/5 p-4 bg-white border-2 border-gray-300 rounded-xl placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none overflow-auto scrollbar-custom"
//           placeholder="Enter your question here..."
//           value={prompt}
//           onChange={handleInputChange}
//         />

//         <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
//           <FiCamera size={22} className="text-gray-600" />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handlePhotoUpload}
//             className="hidden"
//           />
//         </label>

//         {/* Language Selection Button */}
//         {!showLanguageOptions ? (
//           <Button
//             className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//             onClick={() => setShowLanguageOptions(true)}
//           >
//             Select Language
//           </Button>
//         ) : (
//           <div className="flex space-x-4">
//             <Button
//               className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//               onClick={() => handleLanguageSelection("English")}
//             >
//               English
//             </Button>
//             <Button
//               className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//               onClick={() => handleLanguageSelection("Hindi")}
//             >
//               Hindi
//             </Button>
//           </div>
//         )}
//       </div>

//       {/* Uploaded Image Preview */}
//       {photoUrl && (
//         <div className="flex justify-center mb-4">
//           <img
//             src={photoUrl}
//             alt="Uploaded preview"
//             className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
//           />
//         </div>
//       )}

//       {/* Second line: Get Answer + Reset buttons */}
//       <div className="flex justify-between space-x-4">
//         <Button
//           className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={getAnswerGemini}
//           disabled={loading}
//         >
//           {loading ? (
//             <svg
//               className="animate-spin h-6 w-6 text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8v8h8a8 8 0 11-8 8v-8H4z"
//               ></path>
//             </svg>
//           ) : (
//             "Get Answer"
//           )}
//         </Button>

//         <Button
//           className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={resetFields}
//         >
//           Reset
//         </Button>
//       </div>

//       {/* Answer Box */}
//       {!loading && promptAnswer && (
//         <div className="mt-6 p-6 bg-white rounded-xl shadow-md text-gray-700 max-h-72 overflow-y-auto scrollbar-custom">
//           <h3 className="text-lg font-semibold mb-2">Answer:</h3>
//           <animated.div
//             style={scrollAnimation}
//             className="text-lg text-gray-600 overflow-y-auto"
//           >
//             <div
//               className="p-4"
//               style={{ backgroundColor: textBackgroundColor }}
//               dangerouslySetInnerHTML={{
//                 __html: promptAnswer
//                   ? promptAnswer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
//                   : "Your answer will appear here.",
//               }}
//             />
//           </animated.div>
//         </div>
//       )}
//     </div>
//   );
// }








// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { FiCamera } from "react-icons/fi";
// import { useSpring, animated } from "react-spring";

// export default function KnowledgeBox() {
//   const [promptAnswer, setPromptAnswer] = useState("");
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [uploadingPhoto, setUploadingPhoto] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("");
//   const [textBackgroundColor, setTextBackgroundColor] = useState("");
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);
//   const [answerWidth, setAnswerWidth] = useState("w-full"); // New state for controlling width

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handlePhotoUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadingPhoto(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await axios.post("/api/aws-image-upload", formData);
//         setPhotoUrl(response.data.imageUrl);

//         if (!prompt) {
//           setPrompt(`Meaning of this in ${selectedLanguage || "Hindi"}`);
//         }
//       } catch (error) {
//         console.error("Error uploading photo:", error);
//       } finally {
//         setUploadingPhoto(false);
//       }
//     }
//   };

//   const handleLanguageSelection = (language) => {
//     setSelectedLanguage(language);
//   };

//   const getAnswerGemini = async () => {
//     setLoading(true);
//     try {
//       let result;
//       const formattedPrompt = selectedLanguage
//         ? `${prompt} in ${selectedLanguage}`
//         : prompt;

//       if (photoUrl) {
//         result = await axios.post("/api/get-gemini-image-answer", {
//           prompt: formattedPrompt,
//           photo: photoUrl,
//         });
//       } else if (prompt) {
//         result = await axios.post("/api/get-gemini-answer", {
//           prompt: formattedPrompt,
//         });
//       } else {
//         setPromptAnswer("Please provide some input to get an answer.");
//         return;
//       }

//       setPromptAnswer(result?.data?.result || "No answer returned.");
//       setTextBackgroundColor("lightyellow");

//       // Update width for the answer box when new answer is received
//       setAnswerWidth("w-full max-w-3xl"); // Example width change to make it a bit wider
//     } catch (error) {
//       console.error("Error fetching answer:", error);
//       setPromptAnswer("There was an error. Please try again.");
//       setTextBackgroundColor("transparent");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetFields = () => {
//     setPrompt("");
//     setPromptAnswer("");
//     setPhotoUrl(null);
//     setSelectedLanguage("");
//     setTextBackgroundColor("transparent");
//     setAnswerWidth("w-full"); // Reset width on reset
//   };

//   const scrollAnimation = useSpring({
//     opacity: promptAnswer ? 1 : 0.5,
//     transform: promptAnswer ? "scale(1)" : "scale(0.9)",
//     config: { tension: 200, friction: 20 },
//   });

//   return (
//     <div className="knowledge-box w-full max-w-lg p-8 bg-gray-900 rounded-xl shadow-xl space-y-6">
//       <h2 className="text-3xl font-semibold text-center text-white">Connect With Me</h2>

//       {/* First line: Input + Camera button + Language selection */}
//       <div className="flex flex-col items-center space-y-4">
//         <textarea
//           rows="1"
//           className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none overflow-auto scrollbar-custom transition-all duration-300 ease-in-out"
//           placeholder="Enter your question here..."
//           value={prompt}
//           onChange={handleInputChange}
//           style={{ minHeight: "60px" }}  // Dynamically adjusts the height as user types
//         />

//         <div className="flex justify-center items-center space-x-6 w-full">
//           {/* Camera button */}
//           <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
//             <FiCamera size={22} className="text-gray-600" />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handlePhotoUpload}
//               className="hidden"
//             />
//           </label>

//           {/* Language Selection Button */}
//           {!showLanguageOptions ? (
//             <Button
//               className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//               onClick={() => setShowLanguageOptions(true)}
//             >
//               Select Language
//             </Button>
//           ) : (
//             <div className="flex space-x-4">
//               <Button
//                 className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                 onClick={() => handleLanguageSelection("English")}
//               >
//                 English
//               </Button>
//               <Button
//                 className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                 onClick={() => handleLanguageSelection("Hindi")}
//               >
//                 Hindi
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Uploaded Image Preview */}
//       {photoUrl && (
//         <div className="flex justify-center mb-4">
//           <img
//             src={photoUrl}
//             alt="Uploaded preview"
//             className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
//           />
//         </div>
//       )}

//       {/* Second line: Get Answer + Reset buttons */}
//       <div className="flex justify-between space-x-4">
//         <Button
//           className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={getAnswerGemini}
//           disabled={loading}
//         >
//           {loading ? (
//             <svg
//               className="animate-spin h-6 w-6 text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8v8h8a8 8 0 11-8 8v-8H4z"
//               ></path>
//             </svg>
//           ) : (
//             "Get Answer"
//           )}
//         </Button>

//         <Button
//           className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={resetFields}
//         >
//           Reset
//         </Button>
//       </div>

//       {/* Answer Box */}
//       {!loading && promptAnswer && (
//         <div
//           className={`${answerWidth} mt-6 p-6 bg-white rounded-xl shadow-md text-gray-700 max-h-96 overflow-y-auto scrollbar-custom`}
//         >
//           <h3 className="text-lg font-semibold mb-2">Answer:</h3>
//           <animated.div
//             style={scrollAnimation}
//             className="text-lg text-gray-600 overflow-y-auto"
//           >
//             <div
//               className="p-4"
//               style={{ backgroundColor: textBackgroundColor }}
//               dangerouslySetInnerHTML={{
//                 __html: promptAnswer
//                   ? promptAnswer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
//                   : "Your answer will appear here.",
//               }}
//             />
//           </animated.div>
//         </div>
//       )}
//     </div>
//   );
// }














// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { FiCamera } from "react-icons/fi";
// import { useSpring, animated } from "react-spring";

// export default function KnowledgeBox() {
//   const [chatHistory, setChatHistory] = useState([]); // Track all past answers and prompts
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [uploadingPhoto, setUploadingPhoto] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("");
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);
//   const [answerWidth, setAnswerWidth] = useState("w-full"); // Width for the answer box

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handlePhotoUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadingPhoto(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await axios.post("/api/aws-image-upload", formData);
//         setPhotoUrl(response.data.imageUrl);

//         if (!prompt) {
//           setPrompt(`Meaning of this in ${selectedLanguage || "Hindi"}`);
//         }
//       } catch (error) {
//         console.error("Error uploading photo:", error);
//       } finally {
//         setUploadingPhoto(false);
//       }
//     }
//   };

//   const handleLanguageSelection = (language) => {
//     setSelectedLanguage(language);
//   };

//   const getAnswerGemini = async () => {
//     setLoading(true);
//     try {
//       let result;
//       const formattedPrompt = selectedLanguage
//         ? `${prompt} in ${selectedLanguage}`
//         : prompt;

//       if (photoUrl) {
//         result = await axios.post("/api/get-gemini-image-answer", {
//           prompt: formattedPrompt,
//           photo: photoUrl,
//         });
//       } else if (prompt) {
//         result = await axios.post("/api/get-gemini-answer", {
//           prompt: formattedPrompt,
//         });
//       } else {
//         return;
//       }

//       const newAnswer = {
//         prompt,
//         answer: result?.data?.result || "No answer returned.",
//       };

//       // Add new answer to chat history
//       setChatHistory((prevHistory) => [...prevHistory, newAnswer]);
//       setPrompt(""); // Clear prompt after submission

//       // Update width for the answer box
//       setAnswerWidth("w-full max-w-3xl"); // Change width for the answer box
//     } catch (error) {
//       console.error("Error fetching answer:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Reset input fields, language, and photo without resetting chat history
//   const resetFields = () => {
//     setPrompt(""); // Reset prompt input
//     setPhotoUrl(null); // Reset photo
//     setSelectedLanguage(""); // Reset selected language
//     setShowLanguageOptions(false); // Hide language options
//     setChatHistory([]); // Clear chat history to hide answer box
//     setAnswerWidth("w-full"); // Reset width for the answer box
//   };

//   const scrollAnimation = useSpring({
//     opacity: chatHistory.length > 0 ? 1 : 0.5,
//     transform: chatHistory.length > 0 ? "scale(1)" : "scale(0.9)",
//     config: { tension: 200, friction: 20 },
//   });

//   return (
//     <div className="knowledge-box w-full max-w-lg p-8 bg-gray-900 rounded-xl shadow-xl space-y-6">
//       <h2 className="text-3xl font-semibold text-center text-white">Connect With Atman</h2>

//       {/* First line: Input + Camera button + Language selection */}
//       <div className="flex flex-col items-center space-y-4">
//         <textarea
//           rows="1"
//           className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none overflow-auto scrollbar-custom transition-all duration-300 ease-in-out"
//           placeholder="Enter your question here..."
//           value={prompt}
//           onChange={handleInputChange}
//           style={{ minHeight: "60px" }}  // Dynamically adjusts the height as user types
//         />

//         <div className="flex justify-center items-center space-x-6 w-full">
//           {/* Camera button */}
//           <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
//             <FiCamera size={22} className="text-gray-600" />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handlePhotoUpload}
//               className="hidden"
//             />
//           </label>

//           {/* Language Selection Button */}
//           {!showLanguageOptions ? (
//             <Button
//               className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//               onClick={() => setShowLanguageOptions(true)}
//             >
//               Select Language
//             </Button>
//           ) : (
//             <div className="flex space-x-4">
//               <Button
//                 className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                 onClick={() => handleLanguageSelection("English")}
//               >
//                 English
//               </Button>
//               <Button
//                 className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                 onClick={() => handleLanguageSelection("Hindi")}
//               >
//                 Hindi
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Uploaded Image Preview */}
//       {photoUrl && (
//         <div className="flex justify-center mb-4">
//           <img
//             src={photoUrl}
//             alt="Uploaded preview"
//             className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
//           />
//         </div>
//       )}

//       {/* Second line: Get Answer + Reset buttons */}
//       <div className="flex justify-between space-x-4">
//         <Button
//           className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={getAnswerGemini}
//           disabled={loading}
//         >
//           {loading ? (
//             <svg
//               className="animate-spin h-6 w-6 text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8v8h8a8 8 0 11-8 8v-8H4z"
//               ></path>
//             </svg>
//           ) : (
//             "Get Answer"
//           )}
//         </Button>

//         <Button
//           className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={resetFields}
//         >
//           Reset
//         </Button>
//       </div>

//       {/* Display Chat History in a Single Answer Box */}
//       {chatHistory.length > 0 && (
//         <div
//           className={`mt-6 p-6 bg-white rounded-xl shadow-md text-gray-700 ${answerWidth}`}
//           style={{
//             minHeight: "300px", // Minimum height for the chat history box
//             maxHeight: "500px",  // Maximum height for the chat history box
//             overflowY: "auto",   // Enable vertical scrolling if content exceeds the height
//           }}
//         >
//           {chatHistory.map((entry, index) => (
//             <div key={index} className="mb-4">
//               <h3 className="text-lg font-semibold mb-2">You:</h3>
//               <p className="text-gray-600">{entry.prompt}</p>
//               <h3 className="text-lg font-semibold mt-4 mb-2">Atman:</h3>
//               <animated.div
//                 style={scrollAnimation}
//                 className="text-lg text-gray-600 overflow-y-auto"
//               >
//                 <div
//                   className="p-4"
//                   dangerouslySetInnerHTML={{
//                     __html: entry.answer
//                       ? entry.answer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
//                       : "Your answer will appear here.",
//                   }}
//                 />
//               </animated.div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }












// import React, { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { FiCamera } from "react-icons/fi";
// import { useSpring, animated } from "react-spring";

// export default function KnowledgeBox() {
//   const [chatHistory, setChatHistory] = useState([]); // Track all past answers and prompts
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [uploadingPhoto, setUploadingPhoto] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("in Hindi");
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);
//   const [answerWidth, setAnswerWidth] = useState("w-full"); // Width for the answer box
//   const chatEndRef = useRef(null); // Reference to scroll to the bottom

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handlePhotoUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadingPhoto(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await axios.post("/api/aws-image-upload", formData);
//         setPhotoUrl(response.data.imageUrl);

//         if (!prompt) {
//           setPrompt(`Meaning of this in ${selectedLanguage || "Hindi"}`);
//         }
//       } catch (error) {
//         console.error("Error uploading photo:", error);
//       } finally {
//         setUploadingPhoto(false);
//       }
//     }
//   };

//   const handleLanguageSelection = (language) => {
//     setSelectedLanguage(language);
//   };

//   const getAnswerGemini = async () => {
//     setLoading(true);
//     try {
//       let result;
//       const formattedPrompt = selectedLanguage
//         ? `${prompt} in ${selectedLanguage}`
//         : prompt;

//       if (photoUrl) {
//         result = await axios.post("/api/get-gemini-image-answer", {
//           prompt: formattedPrompt,
//           photo: photoUrl,
//         });
//       } else if (prompt) {
//         result = await axios.post("/api/get-gemini-answer", {
//           prompt: formattedPrompt,
//         });
//       } else {
//         return;
//       }

//       const newAnswer = {
//         prompt,
//         answer: result?.data?.result || "No answer returned.",
//       };

//       // Add new answer to chat history
//       setChatHistory((prevHistory) => [...prevHistory, newAnswer]);
//       setPrompt(""); // Clear prompt after submission

//       // Update width for the answer box
//       setAnswerWidth("w-full max-w-3xl"); // Change width for the answer box
//     } catch (error) {
//       console.error("Error fetching answer:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Reset input fields, language, and photo without resetting chat history
//   const resetFields = () => {
//     setPrompt(""); // Reset prompt input
//     setPhotoUrl(null); // Reset photo
//     setSelectedLanguage(""); // Reset selected language
//     setShowLanguageOptions(false); // Hide language options
//     setChatHistory([]); // Clear chat history to hide answer box
//     setAnswerWidth("w-full"); // Reset width for the answer box
//   };

//   const scrollAnimation = useSpring({
//     opacity: chatHistory.length > 0 ? 1 : 0.5,
//     transform: chatHistory.length > 0 ? "scale(1)" : "scale(0.9)",
//     config: { tension: 200, friction: 20 },
//   });

//   // Scroll to the bottom when new chat is added, but not all the way to the bottom
//   useEffect(() => {
//     if (chatEndRef.current) {
//       const scrollHeight = chatEndRef.current.scrollHeight;
//       const clientHeight = chatEndRef.current.clientHeight;
//       // Scroll to a point a little above the bottom (100px from the bottom)
//       chatEndRef.current.scrollTop = scrollHeight - clientHeight - 100;
//     }
//   }, [chatHistory]);

//   return (
// <div className="knowledge-box w-full max-w-2xl p-8 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl shadow-xl space-y-6 mx-auto mt-4">
// <h2 className="text-3xl font-semibold text-center text-white">Chat With Atman</h2>

//       {/* First line: Input + Camera button + Language selection */}
//       <div className="flex flex-col items-center space-y-4">
//         <textarea
//           rows="1"
//           className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none overflow-auto scrollbar-custom transition-all duration-300 ease-in-out"
//           placeholder="Enter your question here..."
//           value={prompt}
//           onChange={handleInputChange}
//           style={{ minHeight: "60px" }}  // Dynamically adjusts the height as user types
//         />

//         <div className="flex justify-center items-center space-x-6 w-full">
//           {/* Camera button */}
//           <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
//             <FiCamera size={22} className="text-gray-600" />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handlePhotoUpload}
//               className="hidden"
//             />
//           </label>

//           {/* Language Selection Button */}
//           {!showLanguageOptions ? (
//             <Button
//               className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//               onClick={() => setShowLanguageOptions(true)}
//             >
//               Select Language
//             </Button>
//           ) : (
//             <div className="flex space-x-4">
//               <Button
//                 className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                 onClick={() => handleLanguageSelection("English")}
//               >
//                 English
//               </Button>
//               <Button
//                 className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                 onClick={() => handleLanguageSelection("Hindi")}
//               >
//                 Hindi
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Uploaded Image Preview */}
//       {photoUrl && (
//         <div className="flex justify-center mb-4">
//           <img
//             src={photoUrl}
//             alt="Uploaded preview"
//             className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
//           />
//         </div>
//       )}

//       {/* Second line: Get Answer + Reset buttons */}
//       <div className="flex justify-between space-x-4">
//         <Button
//           className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={getAnswerGemini}
//           disabled={loading}
//         >
//           {loading ? (
//             <svg
//               className="animate-spin h-6 w-6 text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8v8h8a8 8 0 11-8 8v-8H4z"
//               ></path>
//             </svg>
//           ) : (
//             "Get Answer"
//           )}
//         </Button>

//         <Button
//           className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={resetFields}
//         >
//           Reset
//         </Button>
//       </div>

//       {/* Display Chat History in a Single Answer Box */}
//       {chatHistory.length > 0 && (
//         <div
//           className={`mt-6 p-6 bg-white rounded-xl shadow-md text-gray-700 ${answerWidth}`}
//           style={{
//             minHeight: "300px", // Minimum height for the chat history box
//             maxHeight: "500px",  // Maximum height for the chat history box
//             overflowY: "auto",   // Enable vertical scrolling if content exceeds the height
//           }}
//         >
//           {/* Reverse the chat history so latest comes at the bottom */}
//           {chatHistory.slice().reverse().map((entry, index) => (
//             <div key={index} className="mb-4">
//               <h3 className="text-lg font-semibold mb-2">You:</h3>
//               <p className="text-gray-600">{entry.prompt}</p>
//               <h3 className="text-lg font-semibold mt-4 mb-2">Atman:</h3>
//               <animated.div
//                 style={scrollAnimation}
//                 className="text-lg text-gray-600 overflow-y-auto"
//               >
//                 <div
//                   className="p-4"
//                   dangerouslySetInnerHTML={{
//                     __html: entry.answer
//                       ? entry.answer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
//                       : "Your answer will appear here.",
//                   }}
//                 />
//               </animated.div>
//             </div>
//           ))}
//           {/* Add a ref element at the bottom to scroll to the latest entry */}
//           <div ref={chatEndRef} />
//         </div>
//       )}
//     </div>
//   );
// }






















// import React, { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { FiCamera } from "react-icons/fi";
// import { useSpring, animated } from "react-spring";

// export default function KnowledgeBox() {
//   const [chatHistory, setChatHistory] = useState([]); // Track all past answers and prompts
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [uploadingPhoto, setUploadingPhoto] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("in Hindi");
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);
//   const [answerWidth, setAnswerWidth] = useState("w-full"); // Width for the answer box
//   const [firstAnswerDisplayed, setFirstAnswerDisplayed] = useState(false); // Track if first answer is displayed
//   const chatEndRef = useRef(null); // Reference to scroll to the bottom

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handlePhotoUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadingPhoto(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await axios.post("/api/aws-image-upload", formData);
//         setPhotoUrl(response.data.imageUrl);

//         if (!prompt) {
//           setPrompt(`Meaning of this in ${selectedLanguage || "Hindi"}`);
//         }
//       } catch (error) {
//         console.error("Error uploading photo:", error);
//       } finally {
//         setUploadingPhoto(false);
//       }
//     }
//   };

//   const handleLanguageSelection = (language) => {
//     setSelectedLanguage(language);
//   };

//   const getAnswerGemini = async () => {
//     setLoading(true);
//     try {
//       let result;
//       const formattedPrompt = selectedLanguage
//         ? `${prompt} in ${selectedLanguage}`
//         : prompt;

//       if (photoUrl) {
//         result = await axios.post("/api/get-gemini-image-answer", {
//           prompt: formattedPrompt,
//           photo: photoUrl,
//         });
//       } else if (prompt) {
//         result = await axios.post("/api/get-gemini-answer", {
//           prompt: formattedPrompt,
//         });
//       } else {
//         return;
//       }

//       const newAnswer = {
//         prompt,
//         answer: result?.data?.result || "No answer returned.",
//       };

//       // Add new answer to chat history
//       setChatHistory((prevHistory) => [...prevHistory, newAnswer]);
//       setPrompt(""); // Clear prompt after submission

//       // Set flag that answer has been displayed
//       setFirstAnswerDisplayed(true);
//       setAnswerWidth("w-full max-w-3xl"); // Change width for the answer box
//     } catch (error) {
//       console.error("Error fetching answer:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Reset input fields, language, and photo without resetting chat history
//   const resetFields = () => {
//     setPrompt(""); // Reset prompt input
//     setPhotoUrl(null); // Reset photo
//     setSelectedLanguage(""); // Reset selected language
//     setShowLanguageOptions(false); // Hide language options
//     setChatHistory([]); // Clear chat history to hide answer box
//     setAnswerWidth("w-full"); // Reset width for the answer box
//     setFirstAnswerDisplayed(false); // Reset first answer flag
//   };

//   const scrollAnimation = useSpring({
//     opacity: chatHistory.length > 0 ? 1 : 0.5,
//     transform: chatHistory.length > 0 ? "scale(1)" : "scale(0.9)",
//     config: { tension: 200, friction: 20 },
//   });

//   // Scroll to the bottom when new chat is added
//   useEffect(() => {
//     if (chatEndRef.current) {
//       const scrollHeight = chatEndRef.current.scrollHeight;
//       const clientHeight = chatEndRef.current.clientHeight;
//       // Scroll to a point a little above the bottom (100px from the bottom)
//       chatEndRef.current.scrollTop = scrollHeight - clientHeight - 100;
//     }
//   }, [chatHistory]);

//   return (
//     <div className="knowledge-box w-full max-w-2xl p-8 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl shadow-xl space-y-6 mx-auto mt-4">
//       {/* Display the first answer at the top if it has been fetched */}
//       {firstAnswerDisplayed && chatHistory.length > 0 && (
//         <div className="mt-6 p-6 bg-white rounded-xl shadow-md text-gray-700 w-full max-w-3xl">
//           <div className="mb-4">
//             <h3 className="text-lg font-semibold mb-2">You:</h3>
//             <p className="text-gray-600">{chatHistory[chatHistory.length - 1].prompt}</p>
//             <h3 className="text-lg font-semibold mt-4 mb-2">Atman:</h3>
//             <animated.div
//               style={scrollAnimation}
//               className="text-lg text-gray-600 overflow-y-auto"
//             >
//               <div
//                 className="p-4"
//                 dangerouslySetInnerHTML={{
//                   __html: chatHistory[chatHistory.length - 1].answer
//                     ? chatHistory[chatHistory.length - 1].answer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
//                     : "Your answer will appear here.",
//                 }}
//               />
//             </animated.div>
//           </div>
//         </div>
//       )}

//       {/* "Chat with Atman" heading and rest of UI */}
//       <h2 className="text-3xl font-semibold text-center text-white">Chat With Atman</h2>

//       {/* First line: Input + Camera button + Language selection */}
//       <div className="flex flex-col items-center space-y-4">
//         <textarea
//           rows="1"
//           className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none overflow-auto scrollbar-custom transition-all duration-300 ease-in-out"
//           placeholder="Enter your question here..."
//           value={prompt}
//           onChange={handleInputChange}
//           style={{ minHeight: "60px" }} // Dynamically adjusts the height as user types
//         />

//         <div className="flex justify-center items-center space-x-6 w-full">
//           {/* Camera button */}
//           <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
//             <FiCamera size={22} className="text-gray-600" />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handlePhotoUpload}
//               className="hidden"
//             />
//           </label>

//           {/* Language Selection Button */}
//           {!showLanguageOptions ? (
//             <Button
//               className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//               onClick={() => setShowLanguageOptions(true)}
//             >
//               Select Language
//             </Button>
//           ) : (
//             <div className="flex space-x-4">
//               <Button
//                 className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                 onClick={() => handleLanguageSelection("English")}
//               >
//                 English
//               </Button>
//               <Button
//                 className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                 onClick={() => handleLanguageSelection("Hindi")}
//               >
//                 Hindi
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Uploaded Image Preview */}
//       {photoUrl && (
//         <div className="flex justify-center mb-4">
//           <img
//             src={photoUrl}
//             alt="Uploaded preview"
//             className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
//           />
//         </div>
//       )}

//       {/* Second line: Get Answer + Reset buttons */}
//       <div className="flex justify-between space-x-4">
//         <Button
//           className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={getAnswerGemini}
//           disabled={loading}
//         >
//           {loading ? (
//             <svg
//               className="animate-spin h-6 w-6 text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8v8h8a8 8 0 11-8 8v-8H4z"
//               ></path>
//             </svg>
//           ) : (
//             "Get Answer"
//           )}
//         </Button>

//         <Button
//           className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={resetFields}
//         >
//           Reset
//         </Button>
//       </div>

//       {/* Display Chat History in a Single Answer Box */}
//       {chatHistory.length > 0 && !firstAnswerDisplayed && (
//         <div
//           className={`mt-6 p-6 bg-white rounded-xl shadow-md text-gray-700 ${answerWidth}`}
//           style={{
//             minHeight: "300px", // Minimum height for the chat history box
//             maxHeight: "500px", // Maximum height for the chat history box
//             overflowY: "auto", // Enable vertical scrolling if content exceeds the height
//           }}
//         >
//           {/* Reverse the chat history so latest comes at the bottom */}
//           {chatHistory.slice().reverse().map((entry, index) => (
//             <div key={index} className="mb-4">
//               <h3 className="text-lg font-semibold mb-2">You:</h3>
//               <p className="text-gray-600">{entry.prompt}</p>
//               <h3 className="text-lg font-semibold mt-4 mb-2">Atman:</h3>
//               <animated.div
//                 style={scrollAnimation}
//                 className="text-lg text-gray-600 overflow-y-auto"
//               >
//                 <div
//                   className="p-4"
//                   dangerouslySetInnerHTML={{
//                     __html: entry.answer
//                       ? entry.answer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
//                       : "Your answer will appear here.",
//                   }}
//                 />
//               </animated.div>
//             </div>
//           ))}
//           {/* Add a ref element at the bottom to scroll to the latest entry */}
//           <div ref={chatEndRef} />
//         </div>
//       )}
//     </div>
//   );
// }








// import React, { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { FiCamera, FiMessageSquare } from "react-icons/fi";
// import { GiRobotHead } from "react-icons/gi";
// import { useSpring, animated } from "react-spring";

// export default function KnowledgeBox() {
//   const [chatHistory, setChatHistory] = useState([]); // Track all past answers and prompts
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [uploadingPhoto, setUploadingPhoto] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("in Hindi");
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);
//   const [answerWidth, setAnswerWidth] = useState("w-full"); // Width for the answer box
//   const [firstAnswerDisplayed, setFirstAnswerDisplayed] = useState(false); // Track if first answer is displayed
//   const chatEndRef = useRef(null); // Reference to scroll to the bottom

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handlePhotoUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadingPhoto(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await axios.post("/api/aws-image-upload", formData);
//         setPhotoUrl(response.data.imageUrl);

//         if (!prompt) {
//           setPrompt(`Meaning of this in ${selectedLanguage || "Hindi"}`);
//         }
//       } catch (error) {
//         console.error("Error uploading photo:", error);
//       } finally {
//         setUploadingPhoto(false);
//       }
//     }
//   };

//   const handleLanguageSelection = (language) => {
//     setSelectedLanguage(language);
//   };

//   const getAnswerGemini = async () => {
//     setLoading(true);
//     try {
//       let result;
//       const formattedPrompt = selectedLanguage
//         ? `${prompt} in ${selectedLanguage}`
//         : prompt;

//       if (photoUrl) {
//         result = await axios.post("/api/get-gemini-image-answer", {
//           prompt: formattedPrompt,
//           photo: photoUrl,
//         });
//       } else if (prompt) {
//         result = await axios.post("/api/get-gemini-answer", {
//           prompt: formattedPrompt,
//         });
//       } else {
//         return;
//       }

//       const newAnswer = {
//         prompt,
//         answer: result?.data?.result || "No answer returned.",
//       };

//       // Add new answer to chat history
//       setChatHistory((prevHistory) => [...prevHistory, newAnswer]);
//       setPrompt(""); // Clear prompt after submission

//       // Set flag that answer has been displayed
//       setFirstAnswerDisplayed(true);
//       setAnswerWidth("w-full max-w-3xl"); // Change width for the answer box
//     } catch (error) {
//       console.error("Error fetching answer:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetFields = () => {
//     setPrompt(""); // Reset prompt input
//     setPhotoUrl(null); // Reset photo
//     setSelectedLanguage(""); // Reset selected language
//     setShowLanguageOptions(false); // Hide language options
//     setChatHistory([]); // Clear chat history to hide answer box
//     setAnswerWidth("w-full"); // Reset width for the answer box
//     setFirstAnswerDisplayed(false); // Reset first answer flag
//   };

//   const scrollAnimation = useSpring({
//     opacity: chatHistory.length > 0 ? 1 : 0.5,
//     transform: chatHistory.length > 0 ? "scale(1)" : "scale(0.9)",
//     config: { tension: 200, friction: 20 },
//   });

//   useEffect(() => {
//     if (chatEndRef.current) {
//       const scrollHeight = chatEndRef.current.scrollHeight;
//       const clientHeight = chatEndRef.current.clientHeight;
//       chatEndRef.current.scrollTop = scrollHeight - clientHeight - 100;
//     }
//   }, [chatHistory]);

//   return (
//     <div className="knowledge-box w-full max-w-2xl p-8 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl shadow-xl space-y-6 mx-auto mt-4">
//       {firstAnswerDisplayed && chatHistory.length > 0 && (
//         <div className="mt-6 p-6 bg-white rounded-xl shadow-md text-gray-700 w-full max-w-3xl">
//           <div className="mb-4">
//             <h3 className="text-lg font-semibold mb-2">You:</h3>
//             <div className="flex items-center space-x-2">
//               <FiMessageSquare className="text-xl text-blue-600" />
//               <p className="text-gray-600">{chatHistory[chatHistory.length - 1].prompt}</p>
//             </div>
//             <h3 className="text-lg font-semibold mt-4 mb-2">Atman:</h3>
//             <animated.div
//               style={scrollAnimation}
//               className="text-lg text-gray-600 overflow-y-auto"
//             >
//               <div
//                 className="p-4"
//                 dangerouslySetInnerHTML={{
//                   __html: chatHistory[chatHistory.length - 1].answer
//                     ? chatHistory[chatHistory.length - 1].answer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
//                     : "Your answer will appear here.",
//                 }}
//               />
//             </animated.div>
//           </div>
//         </div>
//       )}

//       <h2 className="text-3xl font-semibold text-center text-white">Chat With Atman</h2>

//       <div className="flex flex-col items-center space-y-4">
//         <textarea
//           rows="1"
//           className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none overflow-auto scrollbar-custom transition-all duration-300 ease-in-out"
//           placeholder="Enter your question here..."
//           value={prompt}
//           onChange={handleInputChange}
//           style={{ minHeight: "60px" }}
//         />

//         <div className="flex justify-center items-center space-x-6 w-full">
//           <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
//             <FiCamera size={22} className="text-gray-600" />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handlePhotoUpload}
//               className="hidden"
//             />
//           </label>

//           {!showLanguageOptions ? (
//             <Button
//               className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//               onClick={() => setShowLanguageOptions(true)}
//             >
//               Select Language
//             </Button>
//           ) : (
//             <div className="flex space-x-4">
//               <Button
//                 className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                 onClick={() => handleLanguageSelection("English")}
//               >
//                 English
//               </Button>
//               <Button
//                 className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                 onClick={() => handleLanguageSelection("Hindi")}
//               >
//                 Hindi
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>

//       {photoUrl && (
//         <div className="flex justify-center mb-4">
//           <img
//             src={photoUrl}
//             alt="Uploaded preview"
//             className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
//           />
//         </div>
//       )}

//       <div className="flex justify-between space-x-4">
//         <Button
//           className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={getAnswerGemini}
//           disabled={loading}
//         >
//           {loading ? (
//             <svg
//               className="animate-spin h-6 w-6 text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8v8h8a8 8 0 11-8 8v-8H4z"
//               ></path>
//             </svg>
//           ) : (
//             "Get Answer"
//           )}
//         </Button>

//         <Button
//           className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl shadow-md"
//           onClick={resetFields}
//         >
//           Reset
//         </Button>
//       </div>

//       {chatHistory.length > 0 && !firstAnswerDisplayed && (
//         <div
//           className={`mt-6 p-6 bg-white rounded-xl shadow-md text-gray-700 ${answerWidth}`}
//           style={{
//             minHeight: "300px",
//             maxHeight: "500px",
//             overflowY: "auto",
//           }}
//         >
//           {chatHistory.slice().reverse().map((entry, index) => (
//             <div key={index} className="mb-4">
//               <h3 className="text-lg font-semibold mb-2">You:</h3>
//               <div className="flex items-center space-x-2">
//                 <FiMessageSquare className="text-xl text-blue-600" />
//                 <p className="text-gray-600">{entry.prompt}</p>
//               </div>
//               <h3 className="text-lg font-semibold mt-4 mb-2">Atman:</h3>
//               <animated.div
//                 style={scrollAnimation}
//                 className="text-lg text-gray-600 overflow-y-auto"
//               >
//                 <div
//                   className="p-4"
//                   dangerouslySetInnerHTML={{
//                     __html: entry.answer
//                       ? entry.answer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
//                       : "Your answer will appear here.",
//                   }}
//                 />
//               </animated.div>
//             </div>
//           ))}
//           <div ref={chatEndRef} />
//         </div>
//       )}
//     </div>
//   );
// }


























// import React, { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { FiCamera, FiMessageSquare } from "react-icons/fi";
// import { GiRobotHead } from "react-icons/gi";
// import { useSpring, animated } from "react-spring";

// export default function KnowledgeBox() {
//   const [chatHistory, setChatHistory] = useState([]); // Track all past answers and prompts
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [uploadingPhoto, setUploadingPhoto] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("in Hindi");
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);
//   const [answerWidth, setAnswerWidth] = useState("w-full"); // Width for the answer box
//   const [firstAnswerDisplayed, setFirstAnswerDisplayed] = useState(false); // Track if first answer is displayed
//   const chatEndRef = useRef(null); // Reference to scroll to the bottom

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handlePhotoUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadingPhoto(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await axios.post("/api/aws-image-upload", formData);
//         setPhotoUrl(response.data.imageUrl);

//         if (!prompt) {
//           setPrompt(`Meaning of this in ${selectedLanguage || "Hindi"}`);
//         }
//       } catch (error) {
//         console.error("Error uploading photo:", error);
//       } finally {
//         setUploadingPhoto(false);
//       }
//     }
//   };

//   const handleLanguageSelection = (language) => {
//     setSelectedLanguage(language);
//   };

//   const getAnswerGemini = async () => {
//     setLoading(true);
//     try {
//       let result;
//       const formattedPrompt = selectedLanguage
//         ? `${prompt} in ${selectedLanguage}`
//         : prompt;

//       if (photoUrl) {
//         result = await axios.post("/api/get-gemini-image-answer", {
//           prompt: formattedPrompt,
//           photo: photoUrl,
//         });
//       } else if (prompt) {
//         result = await axios.post("/api/get-gemini-answer", {
//           prompt: formattedPrompt,
//         });
//       } else {
//         return;
//       }

//       const newAnswer = {
//         prompt,
//         answer: result?.data?.result || "No answer returned.",
//       };

//       // Add new answer to chat history
//       setChatHistory((prevHistory) => [...prevHistory, newAnswer]);
//       setPrompt(""); // Clear prompt after submission

//       // Set flag that answer has been displayed
//       setFirstAnswerDisplayed(true);
//       setAnswerWidth("w-full max-w-3xl"); // Change width for the answer box
//     } catch (error) {
//       console.error("Error fetching answer:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetFields = () => {
//     setPrompt(""); // Reset prompt input
//     setPhotoUrl(null); // Reset photo
//     setSelectedLanguage(""); // Reset selected language
//     setShowLanguageOptions(false); // Hide language options
//     setChatHistory([]); // Clear chat history to hide answer box
//     setAnswerWidth("w-full"); // Reset width for the answer box
//     setFirstAnswerDisplayed(false); // Reset first answer flag
//   };

//   const scrollAnimation = useSpring({
//     opacity: chatHistory.length > 0 ? 1 : 0.5,
//     transform: chatHistory.length > 0 ? "scale(1)" : "scale(0.9)",
//     config: { tension: 200, friction: 20 },
//   });

//   useEffect(() => {
//     if (chatEndRef.current) {
//       const scrollHeight = chatEndRef.current.scrollHeight;
//       const clientHeight = chatEndRef.current.clientHeight;
//       chatEndRef.current.scrollTop = scrollHeight - clientHeight - 100;
//     }
//   }, [chatHistory]);

//   // Handler for Enter key press in prompt textarea
//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       event.preventDefault(); // Prevents the default "Enter" behavior (e.g., new line in textarea)
//       getAnswerGemini(); // Call getAnswerGemini function on "Enter" press
//     }
//   };

//   return (
//     <div className="knowledge-box w-full max-w-2xl p-8 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl shadow-xl space-y-6 mx-auto mt-4">
//       <h2 className="text-3xl font-semibold text-center text-white">Chat With Atman</h2>

//       {/* Main container for chat and input */}
//       <div className="space-y-6">
//         {/* Answer Box */}
//         {firstAnswerDisplayed && chatHistory.length > 0 && (
//           <div className="mt-6 p-6 bg-slate-700 rounded-xl shadow-md text-white w-full max-w-3xl">
//             <div className="mb-4">
//               <h3 className="text-lg font-semibold mb-2">You:</h3>
//               <div className="flex items-center space-x-2">
//                 <FiMessageSquare className="text-xl text-blue-600" />
//                 <p className="text-white">{chatHistory[chatHistory.length - 1].prompt}</p>
//               </div>
//               <h3 className="text-lg font-semibold mt-4 mb-2">Atman:</h3>
//               <animated.div
//                 style={scrollAnimation}
//                 className="text-white"
//               >
//                 <div
//                   className="p-4 overflow-y-auto max-h-80" // Add scrolling and max height
//                   dangerouslySetInnerHTML={{
//                     __html: chatHistory[chatHistory.length - 1].answer
//                       ? chatHistory[chatHistory.length - 1].answer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
//                       : "Your answer will appear here.",
//                   }}
//                 />
//               </animated.div>
//             </div>
//           </div>
//         )}

//         {/* Input Fields (Prompt and Photo Upload) */}
//         <div className="flex flex-col items-center space-y-4">
//           <textarea
//             rows="1"
//             className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none overflow-auto scrollbar-custom transition-all duration-300 ease-in-out"
//             placeholder="Enter your question here..."
//             value={prompt}
//             onChange={handleInputChange}
//             onKeyDown={handleKeyDown} // Add the keydown event handler here
//             style={{ minHeight: "60px" }}
//           />

//           <div className="flex justify-center items-center space-x-6 w-full">
//             <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
//               <FiCamera size={22} className="text-gray-600" />
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handlePhotoUpload}
//                 className="hidden"
//               />
//             </label>

//             {!showLanguageOptions ? (
//               <Button
//                 className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                 onClick={() => setShowLanguageOptions(true)}
//               >
//                 Select Language
//               </Button>
//             ) : (
//               <div className="flex space-x-4">
//                 <Button
//                   className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                   onClick={() => handleLanguageSelection("English")}
//                 >
//                   English
//                 </Button>
//                 <Button
//                   className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                   onClick={() => handleLanguageSelection("Hindi")}
//                 >
//                   Hindi
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Photo Upload Preview */}
//         {photoUrl && (
//           <div className="w-full mt-6">
//             <img src={photoUrl} alt="Uploaded" className="w-full h-auto rounded-xl shadow-md" />
//           </div>
//         )}

//         {/* Action Buttons */}
//         <div className="flex space-x-4">
//           <Button
//             onClick={getAnswerGemini}
//             className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-xl shadow-md"
//             disabled={loading}
//           >
//             {loading ? (
//               <svg
//                 className="animate-spin h-6 w-6 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v8h8a8 8 0 11-8 8v-8H4z"
//                 ></path>
//               </svg>
//             ) : (
//               "Get Answer"
//             )}
//           </Button>

//           <Button
//             className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl shadow-md"
//             onClick={resetFields}
//           >
//             Reset
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }








// import React, { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { FiCamera, FiMessageSquare } from "react-icons/fi";
// import { GiRobotHead } from "react-icons/gi";
// import { useSpring, animated } from "react-spring";

// export default function KnowledgeBox() {
//   const [chatHistory, setChatHistory] = useState([]); // Track all past answers and prompts
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [uploadingPhoto, setUploadingPhoto] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("in Hindi");
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);
//   const [answerWidth, setAnswerWidth] = useState("w-full"); // Width for the answer box
//   const [firstAnswerDisplayed, setFirstAnswerDisplayed] = useState(false); // Track if first answer is displayed
//   const chatEndRef = useRef(null); // Reference to scroll to the bottom

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handlePhotoUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadingPhoto(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await axios.post("/api/aws-image-upload", formData);
//         setPhotoUrl(response.data.imageUrl);

//         if (!prompt) {
//           setPrompt(`Meaning of this in ${selectedLanguage || "Hindi"}`);
//         }
//       } catch (error) {
//         console.error("Error uploading photo:", error);
//       } finally {
//         setUploadingPhoto(false);
//       }
//     }
//   };

//   const handleLanguageSelection = (language) => {
//     setSelectedLanguage(language);
//   };

//   const getAnswerGemini = async () => {
//     setLoading(true);
//     try {
//       let result;
//       const formattedPrompt = selectedLanguage
//         ? `${prompt} in ${selectedLanguage}`
//         : prompt;

//       if (photoUrl) {
//         result = await axios.post("/api/get-gemini-image-answer", {
//           prompt: formattedPrompt,
//           photo: photoUrl,
//         });
//       } else if (prompt) {
//         result = await axios.post("/api/get-gemini-answer", {
//           prompt: formattedPrompt,
//         });
//       } else {
//         return;
//       }

//       const newAnswer = {
//         prompt,
//         answer: result?.data?.result || "No answer returned.",
//       };

//       // Add new answer to chat history
//       setChatHistory((prevHistory) => [...prevHistory, newAnswer]);
//       setPrompt(""); // Clear prompt after submission

//       // Set flag that answer has been displayed
//       setFirstAnswerDisplayed(true);
//       setAnswerWidth("w-full max-w-3xl"); // Change width for the answer box
//     } catch (error) {
//       console.error("Error fetching answer:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetFields = () => {
//     setPrompt(""); // Reset prompt input
//     setPhotoUrl(null); // Reset photo
//     setSelectedLanguage(""); // Reset selected language
//     setShowLanguageOptions(false); // Hide language options
//     setChatHistory([]); // Clear chat history to hide answer box
//     setAnswerWidth("w-full"); // Reset width for the answer box
//     setFirstAnswerDisplayed(false); // Reset first answer flag
//   };

//   const scrollAnimation = useSpring({
//     opacity: chatHistory.length > 0 ? 1 : 0.5,
//     transform: chatHistory.length > 0 ? "scale(1)" : "scale(0.9)",
//     config: { tension: 200, friction: 20 },
//   });

//   useEffect(() => {
//     if (chatEndRef.current) {
//       const scrollHeight = chatEndRef.current.scrollHeight;
//       const clientHeight = chatEndRef.current.clientHeight;
//       chatEndRef.current.scrollTop = scrollHeight - clientHeight - 100;
//     }
//   }, [chatHistory]);

//   return (
//     <div className="knowledge-box w-full max-w-xl p-8 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl shadow-xl space-y-6 mx-auto mt-4">
//       <h2 className="text-3xl font-semibold text-center text-white">Chat With Jiva</h2>

//       {/* Main container for chat and input */}
//       <div className="space-y-6">
//         {/* Answer Box - Initially Empty, Will Display Chat History After First Answer */}
//         {firstAnswerDisplayed && chatHistory.length > 0 && (
//           <div className="mt-6 p-6 bg-slate-700 rounded-xl shadow-md text-white w-full max-w-3xl overflow-y-auto" style={{ maxHeight: '400px' }}>
//             {chatHistory.map((entry, index) => (
//               <div key={index} className="mb-4">
//                 <h3 className="text-lg font-semibold mb-2">You:</h3>
//                 <div className="flex items-center space-x-2">
//                   <FiMessageSquare className="text-xl text-blue-600" />
//                   <p className="text-white">{entry.prompt}</p>
//                 </div>
//                 <h3 className="text-lg font-semibold mt-4 mb-2">Jiva:</h3>
//                 <div
//                   className="p-4"
//                   dangerouslySetInnerHTML={{
//                     __html: entry.answer
//                       ? entry.answer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
//                       : "Your answer will appear here.",
//                   }}
//                 />
//               </div>
//             ))}
//             <div ref={chatEndRef} />
//           </div>
//         )}

//         {/* Input Fields (Prompt and Photo Upload) */}
//         <div className="flex flex-col items-center space-y-4">
//           <textarea
//             rows="1"
//             className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none overflow-auto scrollbar-custom transition-all duration-300 ease-in-out"
//             placeholder="Enter your question here..."
//             value={prompt}
//             onChange={handleInputChange}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" && prompt.trim() !== "") {
//                 getAnswerGemini();
//                 e.preventDefault(); // Prevent default behavior of Enter key
//               }
//             }}
//             style={{ minHeight: "60px" }}
//           />

//           <div className="flex justify-center items-center space-x-6 w-full">
//             <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
//               <FiCamera size={22} className="text-gray-600" />
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handlePhotoUpload}
//                 className="hidden"
//               />
//             </label>

//             {!showLanguageOptions ? (
//               <Button
//                 className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                 onClick={() => setShowLanguageOptions(true)}
//               >
//                 Select Language
//               </Button>
//             ) : (
//               <div className="flex space-x-4">
//                 <Button
//                   className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                   onClick={() => handleLanguageSelection("English")}
//                 >
//                   English
//                 </Button>
//                 <Button
//                   className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                   onClick={() => handleLanguageSelection("Hindi")}
//                 >
//                   Hindi
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Photo Upload Preview */}
//         {photoUrl && (
//           <div className="flex justify-center mb-4">
//             <img
//               src={photoUrl}
//               alt="Uploaded preview"
//               className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
//             />
//           </div>
//         )}

//         {/* Button Section */}
//         <div className="flex justify-between space-x-4">
//           <Button
//             className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-xl shadow-md"
//             onClick={getAnswerGemini}
//             disabled={loading || !prompt.trim()}
//           >
//             {loading ? (
//               <svg
//                 className="animate-spin h-5 w-5 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 118 8"
//                 ></path>
//               </svg>
//             ) : (
//               "Get Answer"
//             )}
//           </Button>
//           <Button
//             className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-xl shadow-md"
//             onClick={resetFields}
//           >
//             Reset
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }












// import React, { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { FiCamera, FiMessageSquare } from "react-icons/fi";
// import { GiRobotHead } from "react-icons/gi";
// import { useSpring, animated } from "react-spring";

// export default function KnowledgeBox() {
//   const [chatHistory, setChatHistory] = useState([]); // Track all past answers and prompts
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [uploadingPhoto, setUploadingPhoto] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("in Hindi");
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);
//   const [firstAnswerDisplayed, setFirstAnswerDisplayed] = useState(false); // Track if first answer is displayed
//   const chatEndRef = useRef(null); // Reference to scroll to the bottom

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handlePhotoUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadingPhoto(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await axios.post("/api/aws-image-upload", formData);
//         setPhotoUrl(response.data.imageUrl);

//         if (!prompt) {
//           setPrompt(`Meaning of this in ${selectedLanguage || "Hindi"}`);
//         }
//       } catch (error) {
//         console.error("Error uploading photo:", error);
//       } finally {
//         setUploadingPhoto(false);
//       }
//     }
//   };

//   const handleLanguageSelection = (language) => {
//     setSelectedLanguage(language);
//   };

//   const getAnswerGemini = async () => {
//     setLoading(true);
//     try {
//       let result;
//       const formattedPrompt = selectedLanguage
//         ? `${prompt} in ${selectedLanguage}`
//         : prompt;

//       if (photoUrl) {
//         result = await axios.post("/api/get-gemini-image-answer", {
//           prompt: formattedPrompt,
//           photo: photoUrl,
//         });
//       } else if (prompt) {
//         result = await axios.post("/api/get-gemini-answer", {
//           prompt: formattedPrompt,
//         });
//       } else {
//         return;
//       }

//       const newAnswer = {
//         prompt,
//         answer: result?.data?.result || "No answer returned.",
//       };

//       // Add new answer to chat history
//       setChatHistory((prevHistory) => [...prevHistory, newAnswer]);
//       setPrompt(""); // Clear prompt after submission

//       // Set flag that answer has been displayed
//       setFirstAnswerDisplayed(true);
//     } catch (error) {
//       console.error("Error fetching answer:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetFields = () => {
//     setPrompt(""); // Reset prompt input
//     setPhotoUrl(null); // Reset photo
//     setSelectedLanguage(""); // Reset selected language
//     setShowLanguageOptions(false); // Hide language options
//     setChatHistory([]); // Clear chat history to hide answer box
//   };

//   const scrollAnimation = useSpring({
//     opacity: chatHistory.length > 0 ? 1 : 0.5,
//     transform: chatHistory.length > 0 ? "scale(1)" : "scale(0.9)",
//     config: { tension: 200, friction: 20 },
//   });

//   useEffect(() => {
//     if (chatEndRef.current) {
//       const scrollHeight = chatEndRef.current.scrollHeight;
//       const clientHeight = chatEndRef.current.clientHeight;
//       chatEndRef.current.scrollTop = scrollHeight - clientHeight - 100;
//     }
//   }, [chatHistory]);

//   return (
//     <div className="knowledge-box w-full max-w-xl p-8 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl shadow-xl space-y-6 mx-auto mt-4">
//       <h2 className="text-3xl font-semibold text-center text-white">Chat With Jiva</h2>

//       {/* Main container for chat and input */}
//       <div className="space-y-6">
//         {/* Answer Box - Initially Empty, Will Display Chat History After First Answer */}
//         {firstAnswerDisplayed && chatHistory.length > 0 && (
//           <animated.div
//             className="mt-6 p-6 bg-slate-800 rounded-xl shadow-lg text-white w-full max-w-3xl overflow-y-auto"
//             style={{ maxHeight: "400px", ...scrollAnimation }}
//           >
//             {chatHistory.map((entry, index) => (
//               <div key={index} className="mb-4 animate-fade-in">
//                 <h3 className="text-lg font-semibold mb-2">You:</h3>
//                 <div className="flex items-center space-x-2">
//                   <FiMessageSquare className="text-xl text-blue-600" />
//                   <p className="text-white">{entry.prompt}</p>
//                 </div>
//                 <h3 className="text-lg font-semibold mt-4 mb-2">Jiva:</h3>
//                 <div
//                   className="p-4"
//                   dangerouslySetInnerHTML={{
//                     __html: entry.answer
//                       ? entry.answer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
//                       : "Your answer will appear here.",
//                   }}
//                 />
//               </div>
//             ))}
//             <div ref={chatEndRef} />
//           </animated.div>
//         )}

//         {/* Input Fields (Prompt and Photo Upload) */}
//         <div className="flex flex-col items-center space-y-4">
//           <textarea
//             rows="1"
//             className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none overflow-auto scrollbar-custom transition-all duration-300 ease-in-out"
//             placeholder="Enter your question here..."
//             value={prompt}
//             onChange={handleInputChange}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" && prompt.trim() !== "") {
//                 getAnswerGemini();
//                 e.preventDefault(); // Prevent default behavior of Enter key
//               }
//             }}
//             style={{ minHeight: "60px" }}
//           />

//           <div className="flex justify-center items-center space-x-6 w-full">
//             <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
//               <FiCamera size={22} className="text-gray-600" />
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handlePhotoUpload}
//                 className="hidden"
//               />
//             </label>

//             {!showLanguageOptions ? (
//               <Button
//                 className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                 onClick={() => setShowLanguageOptions(true)}
//               >
//                 Select Language
//               </Button>
//             ) : (
//               <div className="flex space-x-4">
//                 <Button
//                   className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                   onClick={() => handleLanguageSelection("English")}
//                 >
//                   English
//                 </Button>
//                 <Button
//                   className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
//                   onClick={() => handleLanguageSelection("Hindi")}
//                 >
//                   Hindi
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Photo Upload Preview */}
//         {photoUrl && (
//           <div className="flex justify-center mb-4">
//             <img
//               src={photoUrl}
//               alt="Uploaded preview"
//               className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
//             />
//           </div>
//         )}

//         {/* Button Section */}
//         <div className="flex justify-between space-x-4">
//           <Button
//             className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-xl shadow-md"
//             onClick={getAnswerGemini}
//             disabled={loading || !prompt.trim()}
//           >
//             {loading ? (
//               <svg
//                 className="animate-spin h-5 w-5 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 118 8"
//                 ></path>
//               </svg>
//             ) : (
//               "Get Answer"
//             )}
//           </Button>
//           <Button
//             className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-xl shadow-md"
//             onClick={resetFields}
//           >
//             Reset
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }




















// import React, { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { FiCamera, FiMessageSquare } from "react-icons/fi";
// import { GiRobotHead } from "react-icons/gi";
// import { useSpring, animated } from "react-spring";

// export default function KnowledgeBox() {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [uploadingPhoto, setUploadingPhoto] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("in Hindi");
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);
//   const [firstAnswerDisplayed, setFirstAnswerDisplayed] = useState(false);
//   const chatEndRef = useRef(null);

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handlePhotoUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadingPhoto(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await axios.post("/api/aws-image-upload", formData);
//         setPhotoUrl(response.data.imageUrl);

//         if (!prompt) {
//           setPrompt(`Meaning of this in ${selectedLanguage || "Hindi"}`);
//         }
//       } catch (error) {
//         console.error("Error uploading photo:", error);
//       } finally {
//         setUploadingPhoto(false);
//       }
//     }
//   };

//   const handleLanguageSelection = (language) => {
//     setSelectedLanguage(language);
//   };

//   const getAnswerGemini = async () => {
//     setLoading(true);
//     try {
//       let result;
//       const formattedPrompt = selectedLanguage
//         ? `${prompt} in ${selectedLanguage}`
//         : prompt;

//       if (photoUrl) {
//         result = await axios.post("/api/get-gemini-image-answer", {
//           prompt: formattedPrompt,
//           photo: photoUrl,
//         });
//       } else if (prompt) {
//         result = await axios.post("/api/get-gemini-answer", {
//           prompt: formattedPrompt,
//         });
//       } else {
//         return;
//       }

//       const newAnswer = {
//         prompt,
//         answer: result?.data?.result || "No answer returned.",
//       };

//       setChatHistory((prevHistory) => [...prevHistory, newAnswer]);
//       setPrompt(""); // Clear prompt after submission

//       setFirstAnswerDisplayed(true);
//     } catch (error) {
//       console.error("Error fetching answer:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetFields = () => {
//     setPrompt(""); // Reset prompt input
//     setPhotoUrl(null); // Reset photo
//     setSelectedLanguage(""); // Reset selected language
//     setShowLanguageOptions(false); // Hide language options
//     setChatHistory([]); // Clear chat history to hide answer box
//   };

//   const scrollAnimation = useSpring({
//     opacity: chatHistory.length > 0 ? 1 : 0.5,
//     transform: chatHistory.length > 0 ? "scale(1)" : "scale(0.9)",
//     config: { tension: 200, friction: 20 },
//   });

//   useEffect(() => {
//     if (chatEndRef.current) {
//       const scrollHeight = chatEndRef.current.scrollHeight;
//       const clientHeight = chatEndRef.current.clientHeight;
//       chatEndRef.current.scrollTop = scrollHeight - clientHeight - 100;
//     }
//   }, [chatHistory]);

//   return (
//     <div className="knowledge-box w-full max-w-xl p-8 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl shadow-xl space-y-6 mx-auto mt-4">
//       <h2 className="text-3xl font-semibold text-center text-white">Chat With Aksha</h2>

//       <div className="space-y-6">
//         {firstAnswerDisplayed && chatHistory.length > 0 && (
//           <animated.div
//             className="mt-6 p-6 bg-slate-800 rounded-xl shadow-lg text-white w-full max-w-3xl overflow-y-auto"
//             style={{ maxHeight: "250px", ...scrollAnimation }}
//           >
//             {chatHistory.map((entry, index) => (
//               <div key={index} className="mb-4 animate-fade-in">
//                 <h3 className="text-lg font-semibold mb-2">You:</h3>
//                 <div className="flex items-center space-x-2">
//                   <FiMessageSquare className="text-xl text-blue-600" />
//                   <p className="text-white">{entry.prompt}</p>
//                 </div>
//                 <h3 className="text-lg font-semibold mt-4 mb-2">Jiva:</h3>
//                 <div
//                   className="p-4"
//                   dangerouslySetInnerHTML={{
//                     __html: entry.answer
//                       ? entry.answer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
//                       : "Your answer will appear here.",
//                   }}
//                 />
//               </div>
//             ))}
//             <div ref={chatEndRef} />
//           </animated.div>
//         )}

//         <div className="flex flex-col items-center space-y-4">
//           <textarea
//             rows="1"
//             className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none overflow-auto scrollbar-custom transition-all duration-300 ease-in-out"
//             placeholder="Enter your question here..."
//             value={prompt}
//             onChange={handleInputChange}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" && prompt.trim() !== "") {
//                 getAnswerGemini();
//                 e.preventDefault();
//               }
//             }}
//             style={{ minHeight: "60px" }}
//           />

//           <div className="flex justify-center items-center space-x-6 w-full">
//             <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
//               <FiCamera size={22} className="text-gray-600" />
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handlePhotoUpload}
//                 className="hidden"
//               />
//             </label>

//             {!showLanguageOptions ? (
//               // <Button
//               //   className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg text-white"
//               //   onClick={() => setShowLanguageOptions(true)}
//               // >
//               //   Select Language
//               // </Button>

//               <button class="px-6 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-xl border-b-4 border-b-indigo-700 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 hover:border-b-indigo-800 transition duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/30"
//               onClick={() => setShowLanguageOptions(true)}>
//                 Select Language
//                 </button>
//             ) : (
//               <div className="flex space-x-4">
//                 <Button
//                   className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg text-white"
//                   onClick={() => handleLanguageSelection("English")}
//                 >
//                   English
//                 </Button>
//                 <Button
//                   className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg text-white"
//                   onClick={() => handleLanguageSelection("Hindi")}
//                 >
//                   Hindi
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>

//         {photoUrl && (
//           <div className="flex justify-center mb-4">
//             <img
//               src={photoUrl}
//               alt="Uploaded preview"
//               className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
//             />
//           </div>
//         )}

//         <div className="flex justify-between space-x-4">
//           <Button
//             className="flex-1 px-6 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-xl border-b-4 border-b-indigo-700 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 hover:border-b-indigo-800 transition duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/30"
//             onClick={getAnswerGemini}
//             disabled={loading || !prompt.trim()}
//           >
//             {loading ? (
//               <svg
//                 className="animate-spin h-5 w-5 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 118 8"
//                 ></path>
//               </svg>
//             ) : (
//               "Get Answer"
//             )}
//           </Button>
//           {/* <Button
//             className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-xl shadow-md"
//             onClick={resetFields}
//           >
//             Reset
//           </Button> */}

//           <button class="flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-xl border-b-4 border-b-indigo-700 hover:from-red-600 hover:via-red-600 hover:to-red-600 hover:border-b-indigo-800 transition duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/30"
//             onClick={resetFields}>
//             Reset
//           </button>



//         </div>
//       </div>
//     </div>
//   );
// }






























  
// import React, { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { FiCamera, FiMessageSquare, FiMic } from "react-icons/fi";
// import { GiRobotHead } from "react-icons/gi";
// import { useSpring, animated } from "react-spring";

// export default function KnowledgeBox() {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [uploadingPhoto, setUploadingPhoto] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("in Hindi");
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);
//   const [firstAnswerDisplayed, setFirstAnswerDisplayed] = useState(false);
//   const chatEndRef = useRef(null);
//   const [isRecording, setIsRecording] = useState(false); // State for microphone
//   const [transcript, setTranscript] = useState(""); // Store the speech-to-text
//   const recognitionRef = useRef(null); // Reference for speech recognition


  

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handlePhotoUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadingPhoto(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const response = await axios.post("/api/aws-image-upload", formData);
//         setPhotoUrl(response.data.imageUrl);

//         if (!prompt) {
//           setPrompt(`Meaning of this in ${selectedLanguage || "Hindi"}`);
//         }
//       } catch (error) {
//         console.error("Error uploading photo:", error);
//       } finally {
//         setUploadingPhoto(false);
//       }
//     }
//   };

//   const handleLanguageSelection = (language) => {
//     setSelectedLanguage(language);
//   };

//   const getAnswerGemini = async () => {
//     setLoading(true);
//     try {
//       let result;
//       const formattedPrompt = selectedLanguage
//         ? `${prompt} in ${selectedLanguage}`
//         : prompt;

//       if (photoUrl) {
//         result = await axios.post("/api/get-gemini-image-answer", {
//           prompt: formattedPrompt,
//           photo: photoUrl,
//         });
//       } else if (prompt) {
//         result = await axios.post("/api/get-gemini-answer", {
//           prompt: formattedPrompt,
//         });
//       } else {
//         return;
//       }

//       const newAnswer = {
//         prompt,
//         answer: result?.data?.result || "No answer returned.",
//       };

//       setChatHistory((prevHistory) => [...prevHistory, newAnswer]);
//       setPrompt(""); // Clear prompt after submission

//       setFirstAnswerDisplayed(true);
//     } catch (error) {
//       console.error("Error fetching answer:", error);
//     } finally {
//       setLoading(false);
//     }
//   };


//   const resetFields = () => {
//     setPrompt(""); // Reset prompt input
//     setPhotoUrl(null); // Reset photo
//     setSelectedLanguage(""); // Reset selected language
//     setShowLanguageOptions(false); // Hide language options
//     setChatHistory([]); // Clear chat history to hide answer box
//     setTranscript(""); // Reset transcript on reset
//   };


  

//   // Initialize SpeechRecognition
//   useEffect(() => {
//     if ('webkitSpeechRecognition' in window) {
//       recognitionRef.current = new window.webkitSpeechRecognition();
//       recognitionRef.current.continuous = true; // Keep recording
//       recognitionRef.current.interimResults = true; // Capture results as you speak

//       recognitionRef.current.onstart = () => setIsRecording(true);
//       recognitionRef.current.onend = () => setIsRecording(false);
      
//       // When speech is detected
//       recognitionRef.current.onresult = (event) => {
//         const currentTranscript = Array.from(event.results)
//           .map(result => result[0].transcript)
//           .join('');
//         setTranscript(currentTranscript); // Update with the transcribed speech
//         setPrompt(currentTranscript); // Set transcript as prompt
//       };

//       recognitionRef.current.onnomatch = () => {
//         console.log("No speech detected");
//       };

//       recognitionRef.current.onerror = (event) => {
//         console.error("Speech recognition error", event.error);
//       };
//     }
//   }, []);

//   // Start/Stop Speech Recognition
//   const toggleRecording = () => {
//     if (isRecording) {
//       recognitionRef.current.stop();
//       getAnswerGemini();
//     } else {
//       setTranscript(""); // Reset the transcript when starting new recording
//       recognitionRef.current.start();
//     }
//   };
  

//   const scrollAnimation = useSpring({
//     opacity: chatHistory.length > 0 ? 1 : 0.5,
//     transform: chatHistory.length > 0 ? "scale(1)" : "scale(0.9)",
//     config: { tension: 200, friction: 20 },
//   });

//   useEffect(() => {
//     if (chatEndRef.current) {
//       const scrollHeight = chatEndRef.current.scrollHeight;
//       const clientHeight = chatEndRef.current.clientHeight;
//       chatEndRef.current.scrollTop = scrollHeight - clientHeight - 100;
//     }
//   }, [chatHistory]);

//   return (
//     <div className="knowledge-box w-full max-w-xl p-8 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl shadow-xl space-y-6 mx-auto mt-4">
//       <h2 className="text-3xl font-semibold text-center text-white">Chat With Aksha</h2>

//       <div className="space-y-6">
//         {firstAnswerDisplayed && chatHistory.length > 0 && (
//           <animated.div
//             className="mt-6 p-6 bg-slate-800 rounded-xl shadow-lg text-white w-full max-w-3xl overflow-y-auto"
//             style={{ maxHeight: "250px", ...scrollAnimation }}
//           >
//             {chatHistory.map((entry, index) => (
//               <div key={index} className="mb-4 animate-fade-in">
//                 <h3 className="text-lg font-semibold mb-2">You:</h3>
//                 <div className="flex items-center space-x-2">
//                   <FiMessageSquare className="text-xl text-blue-600" />
//                   <p className="text-white">{entry.prompt}</p>
//                 </div>
//                 <h3 className="text-lg font-semibold mt-4 mb-2">Jiva:</h3>
//                 <div
//                   className="p-4"
//                   dangerouslySetInnerHTML={{
//                     __html: entry.answer
//                       ? entry.answer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
//                       : "Your answer will appear here.",
//                   }}
//                 />
//               </div>
//             ))}
//             <div ref={chatEndRef} />
//           </animated.div>
//         )}

//         <div className="flex flex-col items-center space-y-4">
//           <textarea
//             rows="1"
//             className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none overflow-auto scrollbar-custom transition-all duration-300 ease-in-out"
//             placeholder="Enter your question here..."
//             value={prompt}
//             onChange={handleInputChange}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" && prompt.trim() !== "") {
//                 getAnswerGemini();
//                 e.preventDefault();
//               }
//             }}
//             style={{ minHeight: "60px" }}
//           />

//           {/* <div className="flex justify-center items-center space-x-6 w-full">
//             <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
//               <FiCamera size={22} className="text-gray-600" />
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handlePhotoUpload}
//                 className="hidden"
//               />
//             </label>

//             {!showLanguageOptions ? (
//               // <Button
//               //   className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg text-white"
//               //   onClick={() => setShowLanguageOptions(true)}
//               // >
//               //   Select Language
//               // </Button>

//               <button class="px-6 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-xl border-b-4 border-b-indigo-700 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 hover:border-b-indigo-800 transition duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/30"
//               onClick={() => setShowLanguageOptions(true)}>
//                 Select Language
//                 </button>
//             ) : (
//               <div className="flex space-x-4">
//                 <Button
//                   className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg text-white"
//                   onClick={() => handleLanguageSelection("English")}
//                 >
//                   English
//                 </Button>
//                 <Button
//                   className="py-2 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg text-white"
//                   onClick={() => handleLanguageSelection("Hindi")}
//                 >
//                   Hindi
//                 </Button>
//               </div>
//             )}
//               <div className="flex justify-center space-x-6 w-full">
//   <button
//     onClick={toggleRecording}
//     className={`p-3 rounded-full ${isRecording ? "bg-red-500" : "bg-green-500"} text-white`}
//   >
//     <FiMic size={24} />
//   </button>
//   </div>
//   </div> */}


// <div className="flex justify-center items-center space-x-6 w-full">
//   {/* File Upload Button */}
//   <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
//     <FiCamera size={22} className="text-gray-600" />
//     <input
//       type="file"
//       accept="image/*"
//       onChange={handlePhotoUpload}
//       className="hidden"
//     />
//   </label>

//   {/* Language Selection Button or Language Options */}
//   {!showLanguageOptions ? (
//     <button
//       className="px-4 py-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-xl border-b-4 border-b-indigo-700 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 hover:border-b-indigo-800 transition duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/30"
//       onClick={() => setShowLanguageOptions(true)}
//     >
//       Select Language
//     </button>
//   ) : (
//     <div className="flex space-x-4">
//       <Button
//         className="py-2 px-4 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg text-white"
//         onClick={() => handleLanguageSelection("English")}
//       >
//         English
//       </Button>
//       <Button
//         className="py-2 px-4 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg text-white"
//         onClick={() => handleLanguageSelection("Hindi")}
//       >
//         Hindi
//       </Button>
//     </div>
//   )}

//   {/* Mic Recording Button */}
//   <button
//     onClick={toggleRecording}
//     className={`p-3 rounded-full ${isRecording ? "bg-red-500" : "bg-green-500"} text-white`}
//   >
//     <FiMic size={24} />
//   </button>
// </div>


//           </div>
//         </div>

//         {photoUrl && (
//           <div className="flex justify-center mb-4">
//             <img
//               src={photoUrl}
//               alt="Uploaded preview"
//               className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
//             />
//           </div>
//         )}

//         <div className="flex justify-between space-x-4">
//           <Button
//             className="flex-1 px-6 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-xl border-b-4 border-b-indigo-700 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 hover:border-b-indigo-800 transition duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/30"
//             onClick={getAnswerGemini}
//             disabled={loading || !prompt.trim()}
//           >
//             {loading ? (
//               <svg
//                 className="animate-spin h-5 w-5 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 118 8"
//                 ></path>
//               </svg>
//             ) : (
//               "Get Answer"
//             )}
//           </Button>
//           {/* <Button
//             className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-xl shadow-md"
//             onClick={resetFields}
//           >
//             Reset
//           </Button> */}

//           <button class="flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-xl border-b-4 border-b-indigo-700 hover:from-red-600 hover:via-red-600 hover:to-red-600 hover:border-b-indigo-800 transition duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/30"
//             onClick={resetFields}>
//             Reset
//           </button>



//         </div>
//       </div>

//   );
// }




























import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { FiCamera, FiMessageSquare, FiMic } from "react-icons/fi";
import { GiRobotHead } from "react-icons/gi";
import { useSpring, animated } from "react-spring";
import GlowingCircle from "./AiGlow";


export default function KnowledgeBox() {
  const [chatHistory, setChatHistory] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("in Hindi");
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [firstAnswerDisplayed, setFirstAnswerDisplayed] = useState(false);
  const chatEndRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false); // State for microphone
  const [transcript, setTranscript] = useState(""); // Store the speech-to-text
  const recognitionRef = useRef(null); // Reference for speech recognition



  

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handlePhotoUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadingPhoto(true);

      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post("/api/aws-image-upload", formData);
        setPhotoUrl(response.data.imageUrl);

        if (!prompt) {
          setPrompt(`Meaning of this in ${selectedLanguage || "Hindi"}`);
        }
      } catch (error) {
        console.error("Error uploading photo:", error);
      } finally {
        setUploadingPhoto(false);
      }
    }
  };

  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language);
  };

  const getAnswerGemini = async () => {
    setLoading(true);
    try {
      let result;
      const formattedPrompt = selectedLanguage
        ? `${prompt} in ${selectedLanguage}`
        : prompt;

      if (photoUrl) {
        result = await axios.post("/api/get-gemini-image-answer", {
          prompt: formattedPrompt,
          photo: photoUrl,
        });
      } else if (prompt) {
        result = await axios.post("/api/get-gemini-answer", {
          prompt: formattedPrompt,
        });
      } else {
        return;
      }

      const newAnswer = {
        prompt,
        answer: result?.data?.result || "No answer returned.",
      };

      setChatHistory((prevHistory) => [...prevHistory, newAnswer]);
      setPrompt(""); // Clear prompt after submission

      setFirstAnswerDisplayed(true);
    } catch (error) {
      console.error("Error fetching answer:", error);
    } finally {
      setLoading(false);
    }
  };


  const resetFields = () => {
    setPrompt(""); // Reset prompt input
    setPhotoUrl(null); // Reset photo
    setSelectedLanguage(""); // Reset selected language
    setShowLanguageOptions(false); // Hide language options
    setChatHistory([]); // Clear chat history to hide answer box
    setTranscript(""); // Reset transcript on reset
  };


  

  // Initialize SpeechRecognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = true; // Keep recording
      recognitionRef.current.interimResults = true; // Capture results as you speak

      recognitionRef.current.onstart = () => setIsRecording(true);
      recognitionRef.current.onend = () => setIsRecording(false);
      
      // When speech is detected
      recognitionRef.current.onresult = (event) => {
        const currentTranscript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('');
        setTranscript(currentTranscript); // Update with the transcribed speech
        setPrompt(currentTranscript); // Set transcript as prompt
      };

      recognitionRef.current.onnomatch = () => {
        console.log("No speech detected");
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error", event.error);
      };
    }
  }, []);

  // Start/Stop Speech Recognition
  const toggleRecording = () => {
    if (isRecording) {
      recognitionRef.current.stop();
      getAnswerGemini();
    } else {
      setTranscript(""); // Reset the transcript when starting new recording
      recognitionRef.current.start();
    }
  };
  

  const scrollAnimation = useSpring({
    opacity: chatHistory.length > 0 ? 1 : 0.5,
    transform: chatHistory.length > 0 ? "scale(1)" : "scale(0.9)",
    config: { tension: 200, friction: 20 },
  });

  useEffect(() => {
    if (chatEndRef.current) {
      const scrollHeight = chatEndRef.current.scrollHeight;
      const clientHeight = chatEndRef.current.clientHeight;
      chatEndRef.current.scrollTop = scrollHeight - clientHeight - 100;
    }
  }, [chatHistory]);

  return (
    <div className="knowledge-box w-full max-w-xl p-8 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl shadow-xl space-y-6 mx-auto mt-4">
      {/* <GlowingCircle /> */}
      <h2 className="text-3xl font-semibold text-center text-white">Chat With Aksha</h2>

      <div className="space-y-6">
        {firstAnswerDisplayed && chatHistory.length > 0 && (
          <animated.div
            className="mt-6 p-6 bg-slate-800 rounded-xl shadow-lg text-white w-full max-w-3xl overflow-y-auto"
            style={{ maxHeight: "250px", ...scrollAnimation }}
          >
            {chatHistory.map((entry, index) => (
              <div key={index} className="mb-4 animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">You:</h3>
                <div className="flex items-center space-x-2">
                  <FiMessageSquare className="text-xl text-blue-600" />
                  <p className="text-white">{entry.prompt}</p>
                </div>
                <h3 className="text-lg font-semibold mt-4 mb-2">Jiva:</h3>
                <div
                  className="p-4"
                  dangerouslySetInnerHTML={{
                    __html: entry.answer
                      ? entry.answer.replace(/\n/g, "<br />").replace(/\*/g, "<span class='bullet-point'>•</span>")
                      : "Your answer will appear here.",
                  }}
                />
              </div>
            ))}
            <div ref={chatEndRef} />
          </animated.div>
        )}

        <div className="flex flex-col items-center space-y-4">
        

          <textarea
            rows="1"
            className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none overflow-auto scrollbar-custom transition-all duration-300 ease-in-out"
            placeholder="Enter your question here..."
            value={prompt}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && prompt.trim() !== "") {
                getAnswerGemini();
                e.preventDefault();
              }
            }}
            style={{ minHeight: "60px" }}
          />


<div className="flex justify-center items-center space-x-6 w-full">
  {/* File Upload Button */}
  <label className="cursor-pointer p-3 bg-gray-200 rounded-xl hover:bg-gray-300 flex items-center justify-center">
    <FiCamera size={22} className="text-gray-600" />
    <input
      type="file"
      accept="image/*"
      onChange={handlePhotoUpload}
      className="hidden"
    />
  </label>

  {/* Language Selection Button or Language Options */}
  {!showLanguageOptions ? (
    <button
      className="px-4 py-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-xl border-b-4 border-b-indigo-700 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 hover:border-b-indigo-800 transition duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/30"
      onClick={() => setShowLanguageOptions(true)}
    >
      Select Language
    </button>
  ) : (
    <div className="flex space-x-4">
      <Button
        className="py-2 px-4 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg text-white"
        onClick={() => handleLanguageSelection("English")}
      >
        English
      </Button>
      <Button
        className="py-2 px-4 rounded-xl shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg text-white"
        onClick={() => handleLanguageSelection("Hindi")}
      >
        Hindi
      </Button>
    </div>
  )}

  {/* Mic Recording Button */}
  <button
    onClick={toggleRecording}
    className={`p-3 rounded-full ${isRecording ? "bg-red-500" : "bg-gradient-to-r from-teal-200 to-teal-500"} text-white`}
  >
    <FiMic size={24} />
  </button>
</div>


          </div>
        </div>

        {photoUrl && (
          <div className="flex justify-center mb-4">
            <img
              src={photoUrl}
              alt="Uploaded preview"
              className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
            />
          </div>
        )}

        <div className="flex justify-between space-x-4">
          <Button
            className="flex-1 px-6 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-xl border-b-4 border-b-indigo-700 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 hover:border-b-indigo-800 transition duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/30"
            onClick={getAnswerGemini}
            disabled={loading || !prompt.trim()}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 118 8"
                ></path>
              </svg>
            ) : (
              "Get Answer"
            )}
          </Button>
          {/* <Button
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-xl shadow-md"
            onClick={resetFields}
          >
            Reset
          </Button> */}

          <button class="flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-xl border-b-4 border-b-indigo-700 hover:from-red-600 hover:via-red-600 hover:to-red-600 hover:border-b-indigo-800 transition duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/30"
            onClick={resetFields}>
            Reset
          </button>



        </div>
      </div>

  );
}
