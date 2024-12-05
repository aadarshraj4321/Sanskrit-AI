// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import ProgressBar from "react-circle-progress-bar"; // Circle Progress Bar
// import LessonCard from "./LessonCard";  // New component for lesson card
// import KnowledgeBox from "./ChatBox";  // Importing the ChatBox component
// import Card from "./Card";
// // import UploadForm from "./UploadImage";
// import Link from "next/link"; // Add this import if you're using Next.js

// const DashboardContent = ({ user, lessons }) => {
//   return (
//     <main className="flex-1 p-8 bg-gradient-to-r from-slate-900 to-slate-700 space-y-8">
//       {/* Knowledge Box (ChatBox) Section */}
//       <div className="flex justify-center mb-8">
//         <KnowledgeBox />
//         {/* <UploadForm /> */}
//       </div>

//       {/* Three Cards in Same Row, responsive on smaller screens */}
//       <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Wrap each Card component with Link */}
//         <Link href="/dashboard/learning/lesson/lesson_zero" passHref>
//           <Card
//             title="Sanskrit"
//             description="Explore the First Lesson"
//             buttonText="Start Learning"
//             gifUrl="/dashboard_landing/sanskrit6.png"  // Replace with your GIF URL
//           />
//         </Link>
//         <Link href="/scientific" passHref>
//           <Card
//             title="Scientific"
//             description="Where we use sanskrit"
//             buttonText="Explore"
//             gifUrl="/dashboard_landing/sanskrit3.png"  // Replace with your GIF URL
//           />
//         </Link>
//         <Link href="/dashboard/gita" passHref>
//           <Card
//             title="Dhyan Yoga"
//             description="How Can you Focus"
//             buttonText="How to focus"
//             gifUrl="/gita/dhyan-yoga.png"  // Replace with your GIF URL
//           />
//         </Link>
//       </div>
//     </main>
//   );
// };

// export default DashboardContent;









"use client";

import React, { lazy, Suspense } from "react";
import Link from "next/link"; // Add this import if you're using Next.js
import AnimatedProgressBar from "./AiGlow";

// Lazy load components that are not critical for the first render
const KnowledgeBox = lazy(() => import("./ChatBox"));
const Card = lazy(() => import("./Card"));

const DashboardContent = ({ user, lessons }) => {
  
  return (
    <main className="flex-1 p-8 bg-gradient-to-r from-slate-900 to-slate-700 space-y-8">
      {/* Knowledge Box (ChatBox) Section */}
      <div className="flex justify-center mb-8">
        {/* Wrap KnowledgeBox in Suspense for lazy loading */}
        <Suspense fallback={<div>Loading...</div>}>
          <KnowledgeBox />
        </Suspense>
      </div>

      {/* Three Cards in Same Row, responsive on smaller screens */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Wrap each Card component with Link */}
        <Suspense fallback={<div>Loading...</div>}>
          <Link href="/dashboard/learning/lesson/lesson_zero" passHref>
            <Card
              title="Sanskrit"
              description="Explore the First Lesson"
              buttonText="Start Learning"
              gifUrl="https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/sanskrit6.png"  // Replace with your GIF URL
            />
          </Link>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Link href="/scientific" passHref>
            <Card
              title="Scientific"
              description="Where we use sanskrit"
              buttonText="Explore"
              gifUrl="https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/sanskrit3.png"  // Replace with your GIF URL
            />
          </Link>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Link href="/dashboard/gita" passHref>
            <Card
              title="Dhyan Yoga"
              description="How Can you Focus"
              buttonText="How to focus"
              gifUrl="https://d8q326uv7ym5m.cloudfront.net/public/gita/dhyan-yoga.png"  // Replace with your GIF URL
            />
          </Link>
        </Suspense>
      </div>
    </main>
  );
};

export default DashboardContent;
