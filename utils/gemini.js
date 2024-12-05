import axios from "axios";

// Function to send translation request to Google Gemini
export async function googleGeminiTranslation(text, fromLang = "en", toLang = "sa") {
  const url = "https://api.google.com/gemini/translate"; // Correct endpoint for Gemini API

  const body = {
    q: text,
    source: fromLang,
    target: toLang,
  };

  try {
    const response = await axios.post(url, body, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`, // Ensure the API key is used correctly
        "Content-Type": "application/json",
      },
    });
    return response.data.translation; // Expected response field
  } catch (error) {
    console.error("Error in translation API:", error);
    throw new Error("Failed to get translation");
  }
}
