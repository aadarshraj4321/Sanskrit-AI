import { googleGeminiTranslation } from "@/utils/gemini"; // Use the helper function
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    console.log("Received prompt:", prompt); // Debug: log the input

    // Translate the text using Gemini API
    const translation = await googleGeminiTranslation(prompt, "en", "sa");

    console.log("Translation result:", translation); // Debug: log the translated result

    return NextResponse.json({ result: translation });
  } catch (error) {
    console.error("Error in translation:", error);
    return NextResponse.json({ error: error.message || "An error occurred" });
  }
}
