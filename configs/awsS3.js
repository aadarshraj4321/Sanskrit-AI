// // lib/awsS3.js
// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
// import dotenv from "dotenv";

// // Load environment variables
// dotenv.config();

// const s3 = new S3Client({
//   region: process.env.NEXT_PUBLIC_AWS_REGION,
//   credentials: {
//     accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
//     secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY,
//   },
// });

// export async function uploadFileToS3(file) {
//   const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;
//   const fileName = `uploads/${Date.now()}-${file.name}`;
  
//   const params = {
//     Bucket: bucketName,
//     Key: fileName,
//     Body: file,
//     ContentType: file.type,
//   };

//   try {
//     const data = await s3.send(new PutObjectCommand(params));
//     const fileUrl = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
//     return fileUrl;
//   } catch (error) {
//     console.error("Error uploading file to S3:", error);
//     throw error;
//   }
// }
