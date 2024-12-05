const { generationConfig, model } = require("@/configs/AiModel"); // Use require instead of import
const { NextResponse } = require("next/server");

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    // Initialize a new chat session with the imported model and configuration
    const chatSession = model.startChat({
      generationConfig,  // Using the configuration imported from AiModel.js
      history: [],
    });

    // Send the prompt to the AI model and get the result
    const result = await chatSession.sendMessage(prompt);
    let responseText = result.response.text();

    // Limit the response to the first 100 words
    responseText = responseText.split(" ").slice(0, 350).join(" ");

    // Return the response as JSON
    return NextResponse.json({ result: responseText });
  } catch (error) {
    console.error("Error occurred:", error);

    // Return the error message in case of an exception
    return NextResponse.json({ error: error.message || "An error occurred" });
  }
}


