// import React, { useState, useEffect } from "react";

// // Speech Recognition setup
// const SpeechToText = ({ onSpeechResult }) => {
//   const [isListening, setIsListening] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(null);

//   const recognition = new (window.SpeechRecognition ||
//     window.webkitSpeechRecognition)();

//   recognition.lang = "en-US";
//   recognition.continuous = false; // Stop after one utterance
//   recognition.interimResults = false; // Don't capture partial results

//   useEffect(() => {
//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript; // Take the final result
//       onSpeechResult(transcript); // Send the speech result back to the parent
//     };

//     recognition.onerror = (event) => {
//       setErrorMessage("Error occurred in speech recognition: " + event.error);
//     };

//     recognition.onend = () => {
//       setIsListening(false); // Stop listening when the speech ends
//     };

//     return () => {
//       recognition.abort(); // Cleanup recognition when component unmounts
//     };
//   }, [recognition, onSpeechResult]);

//   const startListening = () => {
//     setIsListening(true);
//     recognition.start(); // Start listening to user's speech
//   };

//   const stopListening = () => {
//     setIsListening(false);
//     recognition.stop(); // Stop listening to user's speech
//   };

//   return (
//     <div>
//       <button
//         onClick={isListening ? stopListening : startListening}
//         className="px-6 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-xl"
//       >
//         {isListening ? "Stop Listening" : "Start Listening"}
//       </button>
//       {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
//     </div>
//   );
// };

// export default SpeechToText;








import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the SpeechRecognition API to ensure it's only used on the client-side
const SpeechRecognition = dynamic(
  () => {
    if (typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition)) {
      return Promise.resolve(window.SpeechRecognition || window.webkitSpeechRecognition);
    }
    return Promise.reject("SpeechRecognition API is not supported in this browser");
  },
  { ssr: false }
);

const SpeechToText = ({ onSpeechResult }) => {
  const [isListening, setIsListening] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const initRecognition = async () => {
      try {
        const SpeechAPI = await SpeechRecognition;
        const recognitionInstance = new SpeechAPI();
        recognitionInstance.lang = "en-US";
        recognitionInstance.continuous = false; // Stop after one utterance
        recognitionInstance.interimResults = false; // Don't capture partial results

        recognitionInstance.onresult = (event) => {
          const transcript = event.results[0][0].transcript; // Take the final result
          onSpeechResult(transcript); // Send the speech result back to the parent
        };

        recognitionInstance.onerror = (event) => {
          setErrorMessage("Error occurred in speech recognition: " + event.error);
        };

        recognitionInstance.onend = () => {
          setIsListening(false); // Stop listening when the speech ends
        };

        setRecognition(recognitionInstance);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    if (typeof window !== "undefined") {
      initRecognition();
    }

    return () => {
      if (recognition) {
        recognition.abort(); // Cleanup recognition when component unmounts
      }
    };
  }, [onSpeechResult, recognition]); // No need to include `recognition` in dependency list unless you want to re-initialize

  const startListening = () => {
    if (recognition) {
      setIsListening(true);
      recognition.start(); // Start listening to user's speech
    }
  };

  const stopListening = () => {
    if (recognition) {
      setIsListening(false);
      recognition.stop(); // Stop listening to user's speech
    }
  };

  return (
    <div>
      <button
        onClick={isListening ? stopListening : startListening}
        className="px-6 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-xl"
      >
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
};

export default SpeechToText;
