// import { useState } from "react";

// const UploadForm = () => {
//   const [file, setFile] = useState(null);
//   const [state, setState] = useState({ status: null, message: null, imageUrl: null });

//   // Handle file selection
//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission

//     if (!file) {
//       setState({ status: "error", message: "Please select a file." });
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     // Call the server-side API to upload the file using fetch
//     try {
//       const response = await fetch("/api/upload", { // Update the API endpoint to your upload route
//         method: "POST",
//         body: formData,
//       });

//       const result = await response.json(); // Assuming the server sends a JSON response
//       if (response.ok && result.status === "success") {
//         setState({ status: "success", message: "File uploaded successfully!", imageUrl: result.imageUrl });
//       } else {
//         setState({ status: "error", message: result.message || "Failed to upload file." });
//       }
//     } catch (error) {
//       setState({ status: "error", message: "Failed to upload file." });
//     }
//   };

//   return (
//     <div className="form-wrapper">
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="file" 
//           id="file" 
//           name="file" 
//           accept="image/*"
//           onChange={handleFileChange} 
//         />
        
//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="submit-btn"
//         >
//           Upload
//         </button>
//       </form>

//       {state?.status && (
//         <div className={`state-message ${state?.status}`}>
//           {state?.message}
//         </div>
//       )}

//       {/* Display image after successful upload */}
//       {state?.imageUrl && (
//         <div>
//           <p>Image uploaded successfully! You can view it here:</p>
//           <img src={state.imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadForm;




// import { useState } from "react";

// const UploadForm = () => {
//   const [file, setFile] = useState(null);
//   const [prompt, setPrompt] = useState("");
//   const [state, setState] = useState({
//     status: null,
//     message: null,
//     imageUrl: null,
//     aiResponse: null,
//   });

//   // Handle file selection
//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   // Handle form submission for file upload
//   const handleUpload = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       setState({ status: "error", message: "Please select a file." });
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch("/api/upload", { method: "POST", body: formData });
//       const result = await response.json();

//       if (response.ok && result.status === "success") {
//         setState({
//           ...state,
//           status: "success",
//           message: "File uploaded successfully!",
//           imageUrl: result.imageUrl,
//         });
//       } else {
//         setState({ status: "error", message: result.message || "Failed to upload file." });
//       }
//     } catch (error) {
//       setState({ status: "error", message: "Failed to upload file." });
//     }
//   };

//   // Handle prompt submission
//   const handleGenerate = async () => {
//     if (!prompt) {
//       setState({ ...state, status: "error", message: "Please enter a prompt." });
//       return;
//     }

//     try {
//       const response = await fetch("/api/generate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ prompt, imageUrl: state.imageUrl }),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         setState({
//           ...state,
//           status: "success",
//           aiResponse: result.response,
//           message: "AI Response generated successfully!",
//         });
//       } else {
//         setState({ ...state, status: "error", message: "Failed to generate response." });
//       }
//     } catch (error) {
//       setState({ ...state, status: "error", message: "Failed to generate response." });
//     }
//   };

//   // Reset the form and state
//   const handleReset = () => {
//     setFile(null);
//     setPrompt("");
//     setState({ status: null, message: null, imageUrl: null, aiResponse: null });
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold text-center mb-5">AI Image and Text Processor</h2>

//       <form onSubmit={handleUpload} className="mb-5">
//         <input
//           type="file"
//           id="file"
//           name="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
//         />
//         <button
//           type="submit"
//           className="w-full mt-3 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//         >
//           Upload Image
//         </button>
//       </form>

//       {state.imageUrl && (
//         <div className="mb-5">
//           <h3 className="text-lg font-semibold text-center mb-2">Uploaded Image:</h3>
//           <div className="transition-transform transform hover:scale-105">
//             <img src={state.imageUrl} alt="Uploaded" className="w-full rounded-lg shadow-md" />
//           </div>
//         </div>
//       )}

//       <textarea
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//         placeholder="Enter your prompt here"
//         className="w-full p-2 border rounded-md mb-3"
//       />

//       <div className="flex justify-between">
//         <button
//           type="button"
//           onClick={handleGenerate}
//           className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
//         >
//           Generate Answer
//         </button>
//         <button
//           type="button"
//           onClick={handleReset}
//           className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
//         >
//           Reset
//         </button>
//       </div>

//       {state.message && (
//         <p className={`mt-4 text-center font-semibold ${state.status === "success" ? "text-green-500" : "text-red-500"}`}>
//           {state.message}
//         </p>
//       )}

//       {state.aiResponse && (
//         <div className="mt-4 p-4 bg-gray-100 rounded-lg">
//           <h3 className="text-lg font-semibold mb-2">AI Response:</h3>
//           <p className="text-gray-700">{state.aiResponse}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadForm;
















// import { useState } from "react";
// import { motion } from "framer-motion"; // Add framer-motion for animations

// const UploadForm = () => {
//   const [file, setFile] = useState(null);
//   const [prompt, setPrompt] = useState("");
//   const [state, setState] = useState({
//     status: null,
//     message: null,
//     imageUrl: null,
//     aiResponse: null,
//     loading: false,
//   });

//   // Handle file selection
//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   // Handle form submission for file upload
//   const handleUpload = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       setState({ status: "error", message: "Please select a file." });
//       return;
//     }

//     setState({ ...state, loading: true });

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch("/api/upload", { method: "POST", body: formData });
//       const result = await response.json();

//       if (response.ok && result.status === "success") {
//         setState({
//           ...state,
//           status: "success",
//           message: "File uploaded successfully!",
//           imageUrl: result.imageUrl,
//           loading: false,
//         });
//       } else {
//         setState({ status: "error", message: result.message || "Failed to upload file.", loading: false });
//       }
//     } catch (error) {
//       setState({ status: "error", message: "Failed to upload file.", loading: false });
//     }
//   };

//   // Handle prompt submission
//   const handleGenerate = async () => {
//     if (!prompt) {
//       setState({ ...state, status: "error", message: "Please enter a prompt." });
//       return;
//     }

//     setState({ ...state, loading: true });

//     try {
//       const response = await fetch("/api/generate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ prompt, imageUrl: state.imageUrl }),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         setState({
//           ...state,
//           status: "success",
//           aiResponse: result.response,
//           message: "AI Response generated successfully!",
//           loading: false,
//         });
//       } else {
//         setState({ ...state, status: "error", message: "Failed to generate response.", loading: false });
//       }
//     } catch (error) {
//       setState({ ...state, status: "error", message: "Failed to generate response.", loading: false });
//     }
//   };

//   // Reset the form and state
//   const handleReset = () => {
//     setFile(null);
//     setPrompt("");
//     setState({ status: null, message: null, imageUrl: null, aiResponse: null, loading: false });
//   };

//   return (
//     <motion.div 
//       className="max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-semibold text-center mb-5">AI Image and Text Processor</h2>

//       <form onSubmit={handleUpload} className="mb-5">
//         <input
//           type="file"
//           id="file"
//           name="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 transition-transform transform hover:scale-105"
//         />
//         <motion.button
//           type="submit"
//           className="w-full mt-3 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition transform hover:scale-105"
//           whileTap={{ scale: 0.9 }}
//         >
//           {state.loading ? "Uploading..." : "Upload Image"}
//         </motion.button>
//       </form>

//       {state.imageUrl && (
//         <motion.div className="mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           <h3 className="text-lg font-semibold text-center mb-2">Uploaded Image:</h3>
//           <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg shadow-md overflow-hidden">
//             <img src={state.imageUrl} alt="Uploaded" className="w-full" />
//           </motion.div>
//         </motion.div>
//       )}

//       <textarea
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//         placeholder="Enter your prompt here"
//         className="w-full p-2 border rounded-md mb-3 transition-transform transform hover:scale-105"
//       />

//       <div className="flex justify-between">
//         <motion.button
//           type="button"
//           onClick={handleGenerate}
//           className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition transform hover:scale-105"
//           whileTap={{ scale: 0.9 }}
//         >
//           {state.loading ? "Generating..." : "Generate Answer"}
//         </motion.button>
//         <motion.button
//           type="button"
//           onClick={handleReset}
//           className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition transform hover:scale-105"
//           whileTap={{ scale: 0.9 }}
//         >
//           Reset
//         </motion.button>
//       </div>

//       {state.message && (
//         <motion.p
//           className={`mt-4 text-center font-semibold ${state.status === "success" ? "text-green-500" : "text-red-500"}`}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           {state.message}
//         </motion.p>
//       )}

//       {state.aiResponse && (
//         <motion.div className="mt-4 p-4 bg-gray-100 rounded-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           <h3 className="text-lg font-semibold mb-2">AI Response:</h3>
//           <p className="text-gray-700">{state.aiResponse}</p>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default UploadForm;
