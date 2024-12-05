"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EnglishToSanskritTranslation() {
  const [englishText, setEnglishText] = useState("");
  const [sanskritText, setSanskritText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setEnglishText(event.target.value);
  };

  const getTranslation = async () => {
    if (!englishText.trim()) {
      setSanskritText(""); // Clear translation if text is empty
      return;
    }

    setLoading(true); // Start loading when API is called
    try {
      const response = await axios.post("/api/translate-to-sanskrit", {
        prompt: englishText,
      });

      console.log("Translation response:", response.data); // Debug: check the response

      if (response.data.result) {
        setSanskritText(response.data.result); // Set the translated Sanskrit text
      } else {
        setSanskritText("Error: No translation available");
      }
    } catch (error) {
      console.error("Error translating text:", error);
      setSanskritText("Error: Could not translate.");
    } finally {
      setLoading(false); // Stop loading after API call completes
    }
  };

  // Debounce to delay API call after user stops typing for 1 second
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      getTranslation();
    }, 1000); // Delay of 1 second after user stops typing

    return () => clearTimeout(debounceTimeout); // Clean up timeout
  }, [englishText]);

  return (
    <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-md">
      <input
        type="text"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        placeholder="Enter text in English..."
        value={englishText}
        onChange={handleInputChange}
      />
      <button
        className="w-full bg-blue-500 text-white rounded-lg py-2"
        onClick={getTranslation}
        disabled={loading}
      >
        {loading ? "Translating..." : "Translate"}
      </button>

      <div className="mt-6 p-4 bg-gray-100 rounded-md text-gray-800">
        <h2 className="text-xl font-medium mb-2">Sanskrit Translation:</h2>
        <div>{sanskritText || "Your translation will appear here."}</div>
      </div>
    </div>
  );
}
