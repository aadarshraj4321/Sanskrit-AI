// main.js
// import { GoogleAIFileManager } from "@google/generative-ai/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import path from "path";
// import dotenv from "dotenv";


// this is main file

// // Load environment variables from .env file
// dotenv.config();

// async function run() {
//   try {
//     const fileManager = new GoogleAIFileManager();
    
//    // const mediaPath = path.join(process.cwd(), "public"); // Define the path to your image
//     const uploadResult = await fileManager.uploadFile(
//       `public\\gita.jpg`,
//       {
//         mimeType: "image/jpeg",
//         displayName: "Jetpack drawing",
//       },
//     );
    
//     console.log(`Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.uri}`);

//     const genAI = new GoogleGenerativeAI();
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
//     const result = await model.generateContent([
//       "translate this and give me meaning in hinglish",
//       {
//         fileData: {
//           fileUri: uploadResult.file.uri,
//           mimeType: uploadResult.file.mimeType,
//         },
//       },
//     ]);
    
//     console.log(result.response.text());
//   } catch (error) {
//     console.error("Error during processing:", error);
//   }
// }

// run();


// import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from "dotenv";
// import axios from "axios";
// import sharp from "sharp";

// // Load environment variables from .env file
// dotenv.config();

// async function run() {
//   try {
//     // Firebase image URL
//     const firebaseImageUrl = "https://firebasestorage.googleapis.com/v0/b/helpstudent-250e9.appspot.com/o/images%2Faa.jpg?alt=media&token=0739c9bb-e3ec-4dc5-ad1d-22712dcfdaf1";
//     const text = "translate this and give me meaning in hinglish";

//     // Download the image from Firebase Storage using Axios
//     const response = await axios.get(firebaseImageUrl, { responseType: "arraybuffer" });
//     const imageBuffer = response.data;
    
//     // Resize and compress the image using sharp
//     const resizedImageBuffer = await sharp(imageBuffer)
//       .resize({ width: 800 })  // Resize the image to a width of 800px, keeping aspect ratio
//       .jpeg({ quality: 80 })    // Convert to JPEG and set quality to 80 for compression
//       .toBuffer();
    
//     // Convert the resized image buffer to Base64
//     const base64Image = resizedImageBuffer.toString("base64");
//     const mimeType = "image/jpeg"; // Use JPEG as we've converted it for compression
//     const base64DataUri = `data:${mimeType};base64,${base64Image}`;

//     // Initialize Google Generative AI
//     const genAI = new GoogleGenerativeAI();
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     // Send the Base64 image data to the AI model
//     const result = await model.generateContent([
//       text,
//       base64DataUri,
//     ]);

//     // Log the generated response text from the AI model
//     console.log(result.response.text());
//   } catch (error) {
//     console.error("Error during processing:", error);
//   }
// }

// run();






// import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from "dotenv";
// import axios from "axios";
// import sharp from "sharp";

// // Load environment variables from .env file
// dotenv.config();

// async function run() {
//   try {
//     // Image URL (replace this with your image URL)
//     const imageUrl = "https://sanskrit-image-upload.s3.us-east-1.amazonaws.com/gita.jpg";  // Replace with your image URL
//     const text = "translate this and give me meaning in hinglish";

//     // Download the image from the URL using Axios
//     const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
//     const imageBuffer = response.data;
    
//     // Resize and compress the image using sharp
//     const resizedImageBuffer = await sharp(imageBuffer)
//       .resize({ width: 800 })  // Resize the image to a width of 800px, keeping aspect ratio
//       .jpeg({ quality: 80 })    // Convert to JPEG and set quality to 80 for compression
//       .toBuffer();

//     // Instead of converting to Base64, you can now work with the resized image buffer directly
//     // Initialize Google Generative AI
//     const genAI = new GoogleGenerativeAI();
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     // Send the image URL and the text to the AI model (no need for Base64 encoding)
//     const result = await model.generateContent([
//       text,
//       imageUrl,  // Pass the image URL directly here
//     ]);

//     // Log the generated response text from the AI model
//     console.log(result.response.text());
//   } catch (error) {
//     console.error("Error during processing:", error);
//   }
// }

// run();




import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import axios from "axios";
import sharp from "sharp";
import fs from "fs";
import path from "path";
import tmp from "tmp"; // For temporary file creation
import { GoogleAIFileManager } from "@google/generative-ai/server"; // Add this import for file upload

// Load environment variables from .env file
dotenv.config();

const google_gemini_api_key = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

async function run() {
  try {
    const imageUrl = "https://sanskrit-image-upload.s3.us-east-1.amazonaws.com/gita.jpg";  // Replace with your image URL
    const text = "translate this and give me meaning in hinglish";

    // Download the image from the URL using Axios
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const imageBuffer = response.data;

    // Use tmp module to create a temporary file
    const tempFile = tmp.fileSync({ postfix: ".jpg" });
    const tempFilePath = tempFile.name;

    // Write the image buffer to the temporary file
    fs.writeFileSync(tempFilePath, imageBuffer);

    // Resize and compress the image using sharp (optional)
    const resizedImageBuffer = await sharp(imageBuffer)
      .resize({ width: 800 })  // Resize the image to a width of 800px, keeping aspect ratio
      .jpeg({ quality: 80 })    // Convert to JPEG and set quality to 80 for compression
      .toBuffer();

    // Write resized image buffer back to the temp file
    fs.writeFileSync(tempFilePath, resizedImageBuffer);

    // Upload the file to Google Cloud Storage or another service
    const fileManager = new GoogleAIFileManager(google_gemini_api_key); // Use your actual API key here
    const uploadResult = await fileManager.uploadFile(tempFilePath, {
      mimeType: "image/jpeg",
      displayName: "Resized Image"
    });

    console.log(`Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.uri}`);

    // Initialize Google Generative AI
    const genAI = new GoogleGenerativeAI(google_gemini_api_key); // Use your actual API key here
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Pass the uploaded file URI to the model
    const result = await model.generateContent([
      text,
      {
        fileData: {
          fileUri: uploadResult.file.uri,
          mimeType: uploadResult.file.mimeType
        }
      }
    ]);

    // Log the generated response text from the AI model
    console.log(result.response.text());

    // Clean up the temporary file
    tempFile.removeCallback();
  } catch (error) {
    console.error("Error during processing:", error);
  }
}

run();
