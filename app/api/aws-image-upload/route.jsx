"use server";
import { revalidatePath } from "next/cache";
import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";

// Set up AWS S3 Client
const s3Client = new S3Client({
  region: process.env.NEXT_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_AWS_SECRET_ACCESS_KEY,
  },
});

// Function to upload file to S3
async function uploadFileToS3(file, fileName) {
  const fileBuffer = await sharp(file)
    .jpeg({ quality: 50 })
    .resize(800, 400)
    .toBuffer();

  const params = {
    Bucket: process.env.NEXT_AWS_BUCKET_NAME,
    Key: `${fileName}`, // The S3 object key (file name)
    Body: fileBuffer,
    ContentType: "image/jpg",
  };

  const command = new PutObjectCommand(params);
  try {
    const response = await s3Client.send(command);
    console.log("File uploaded successfully:", response);
    // Return the URL of the uploaded image
    const imageUrl = `https://${process.env.NEXT_AWS_BUCKET_NAME}.s3.${process.env.NEXT_AWS_REGION}.amazonaws.com/${fileName}`;
    return imageUrl;
  } catch (error) {
    console.error("Upload failed:", error);
    throw new Error("File upload failed");
  }
}

// Function to delete file from S3 after 1 minute
async function deleteFileFromS3(fileName) {
  const deleteParams = {
    Bucket: process.env.NEXT_AWS_BUCKET_NAME,
    Key: `${fileName}`,
  };

  const deleteCommand = new DeleteObjectCommand(deleteParams);
  try {
    await s3Client.send(deleteCommand);
    console.log("File deleted successfully from S3:", fileName);
  } catch (error) {
    console.error("Error deleting file from S3:", error);
  }
}

// The POST method for uploading the file
export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    // Validate if file is selected
    if (file.size === 0) {
      return new Response(
        JSON.stringify({ status: "error", message: "Please select a file." }),
        { status: 400 }
      );
    }

    // Convert the file to a buffer and upload it
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = file.name;
    const imageUrl = await uploadFileToS3(buffer, fileName);

    // Revalidate path to reflect changes
    revalidatePath("/");

    // Set a timer to delete the file from S3 after 1 minute (60000 ms)
    setTimeout(async () => {
      await deleteFileFromS3(fileName);
    }, 180000); // 2 minute in milliseconds

    return new Response(
      JSON.stringify({
        status: "success",
        message: "File uploaded successfully.",
        imageUrl: imageUrl, // Send the image URL back to the client
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ status: "error", message: "Failed to upload file." }),
      { status: 500 }
    );
  }
}
