

import axios from "axios";
import sharp from "sharp";
import fs from "fs";
import tmp from "tmp";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";
import { NextResponse } from "next/server"; // Import NextResponse


async function processImageAndPrompt(imageUrl, prompt) {
  try {
    console.log("Processing image and prompt...");

    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    console.log("Image downloaded from URL");

    const imageBuffer = response.data;
    const tempFile = tmp.fileSync({ postfix: ".jpg" });
    const tempFilePath = tempFile.name;
    fs.writeFileSync(tempFilePath, imageBuffer);

    const resizedImageBuffer = await sharp(imageBuffer)
      .resize({ width: 800 })
      .jpeg({ quality: 80 })
      .toBuffer();
    fs.writeFileSync(tempFilePath, resizedImageBuffer);

    const fileManager = new GoogleAIFileManager(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    const uploadResult = await fileManager.uploadFile(tempFilePath, {
      mimeType: "image/jpeg",
      displayName: "Uploaded Image"
    });
    console.log("File uploaded to Google Cloud:", uploadResult.file.uri);

    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent([
      prompt,
      {
        fileData: {
          fileUri: uploadResult.file.uri,
          mimeType: uploadResult.file.mimeType
        }
      }
    ]);

    console.log("Generative AI response received");
    return result.response.text();
  } catch (error) {
    console.error("Error in processImageAndPrompt:", error);
    throw new Error("Failed to process image and prompt");
  }
}

export async function POST(req) {
  try {
    const { prompt, photo } = await req.json(); // Parse the JSON body of the request
    console.log("Request received:", { prompt, photo });

    if (!photo || !prompt) {
      console.warn("Missing photo or prompt");
      return NextResponse.json({ error: "Image and prompt are required." }, { status: 400 });
    }

    const answer = await processImageAndPrompt(photo, prompt);
    console.log("Answer generated:", answer);
    return NextResponse.json({ result: answer }, { status: 200 });
  } catch (error) {
    console.error("Error during POST request:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
