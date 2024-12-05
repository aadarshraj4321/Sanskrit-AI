// "use client";

// import React, { useState, useEffect } from "react";
// import Header from "./components/Header";
// import LeftSideBar from "./components/LeftSideBar";  // Import LeftSideBar
// import RightSideBar from "./components/RightSideBar";  // Import RightSideBar
// import { useRouter } from "next/navigation";
// import DashboardContent from "./components/DashboardContent"; // Import the new DashboardContent component



// export default function Dashboard() {
//   const [user, setUser] = useState({ name: "Aadarsh", level: 1, progress: 0 });
//   const [lessons, setLessons] = useState([]);  // Store lessons
//   const router = useRouter();

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const userData = await fetch("/api/user").then((res) => res.json());
//         setUser({ name: userData.name, level: userData.level, progress: userData.progress });

//         const lessonsData = await fetch("/api/lessons").then((res) => res.json());
//         setLessons(lessonsData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }
//     fetchData();
//   }, []);

//   // Sidebar items with icons, labels, and links
//   const sidebarItems = [
//     { label: "Learn", icon: "/dashboard_landing/learn.png", link: "/dashboard/learning" },
//     { label: "Story", icon: "/dashboard_landing/story.png", link: "/story" },
//     { label: "Gita", icon: "/dashboard_landing/gita.png", link: "/dashboard/gita" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white flex pt-12">
//       <Header />
      
//       {/* Left sidebar with Learn, Story, Gita links */}
//       <LeftSideBar sidebarItems={sidebarItems} />

   
//       {/* Main Dashboard Content */}
//       <DashboardContent user={user} lessons={lessons} />

//       <RightSideBar />
//     </div>
//   );
// }




// "use client";

// import React, { useState, useEffect, Suspense } from "react";
// import Header from "./components/Header";
// import { useRouter } from "next/navigation";

// // Lazy load components
// const LeftSideBar = React.lazy(() => import("./components/LeftSideBar"));
// const RightSideBar = React.lazy(() => import("./components/RightSideBar"));
// const DashboardContent = React.lazy(() => import("./components/DashboardContent"));

// export default function Dashboard() {
//   const [user, setUser] = useState({ name: "Aadarsh", level: 1, progress: 0 });
//   const [lessons, setLessons] = useState([]);  // Store lessons
//   const router = useRouter();

//   // Parallel fetch for user and lessons data
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const [userData, lessonsData] = await Promise.all([
//           fetch("/api/user").then((res) => res.json()),
//           fetch("/api/lessons").then((res) => res.json()),
//         ]);
        
//         setUser({ name: userData.name, level: userData.level, progress: userData.progress });
//         setLessons(lessonsData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }
//     fetchData();
//   }, []);

//   // Sidebar items with icons, labels, and links
//   const sidebarItems = [
//     { label: "Learn", icon: "/dashboard_landing/learn.png", link: "/dashboard/learning" },
//     { label: "Story", icon: "/dashboard_landing/story.png", link: "/story" },
//     { label: "Gita", icon: "/dashboard_landing/gita.png", link: "/dashboard/gita" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white flex pt-12">
//       <Header />
      
//       {/* Left sidebar with Learn, Story, Gita links */}
//       <Suspense fallback={<div>Loading Sidebar...</div>}>
//         <LeftSideBar sidebarItems={sidebarItems} />
//       </Suspense>

//       {/* Main Dashboard Content */}
//       <Suspense fallback={<div>Loading Content...</div>}>
//         <DashboardContent user={user} lessons={lessons} />
//       </Suspense>

//       <Suspense fallback={<div>Loading Right Sidebar...</div>}>
//         <RightSideBar />
//       </Suspense>
//     </div>
//   );
// }














// "use client";

// import React, { useState, useEffect, Suspense } from "react";
// import Header from "./components/Header";
// import { useRouter } from "next/navigation";

// // Lazy load components
// const LeftSideBar = React.lazy(() => import("./components/LeftSideBar"));
// const RightSideBar = React.lazy(() => import("./components/RightSideBar"));
// const DashboardContent = React.lazy(() => import("./components/DashboardContent"));

// export default function Dashboard() {
//   const [user, setUser] = useState({ name: "Aadarsh", level: 1, progress: 0 });
//   const [lessons, setLessons] = useState([]);  // Store lessons
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(true); // State to track loading phase
//   const [isClient, setIsClient] = useState(false); // State to track if it's on the client side


//   // Parallel fetch for user and lessons data
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const [userData, lessonsData] = await Promise.all([
//           fetch("/api/user").then((res) => res.json()),
//           fetch("/api/lessons").then((res) => res.json()),
//         ]);
        
//         setUser({ name: userData.name, level: userData.level, progress: userData.progress });
//         setLessons(lessonsData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }
//     fetchData();
//   }, []);


    
  

//   // Sidebar items with icons, labels, and links
// const sidebarItems = [
//   { label: "Learn", icon: "/dashboard_landing/learn.gif", link: "/dashboard/learning" },
//   { label: "Story", icon: "/dashboard_landing/story.gif", link: "/dashboard/story" },
//   { label: "Gita", icon: "/dashboard_landing/gita.gif", link: "/dashboard/gita" },
//   {label: "Profile", icon: "/dashboard_landing/profile.gif", link: "/dashboard/profile"}
// ];



//   // useEffect to check if it's running on the client side
//   useEffect(() => {
//     // Set isLoading to false once the content has loaded
//     const timer = setTimeout(() => setIsLoading(false), 1000); // simulate loading time for the gif
//     setIsClient(true);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white pt-12 flex flex-col sm:flex-row">
//       <Header />
      
//       {/* Left sidebar with Learn, Story, Gita links */}
//       <Suspense fallback={<div>Loading Sidebar...</div>}>
//         <LeftSideBar sidebarItems={sidebarItems} />
//       </Suspense>

//       {/* Main Dashboard Content */}
//       <Suspense fallback={<div>Loading Content...</div>}>
//         <DashboardContent user={user} lessons={lessons} />
//       </Suspense>

//       {/* Right Sidebar */}
//       <Suspense fallback={<div>Loading Right Sidebar...</div>}>
//         <RightSideBar />
//       </Suspense>
//     </div>
//   );
// }












"use client";

import React, { useState, useEffect, Suspense } from "react";
import Header from "./components/Header";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Lazy load components
const LeftSideBar = React.lazy(() => import("./components/LeftSideBar"));
const RightSideBar = React.lazy(() => import("./components/RightSideBar"));
const DashboardContent = React.lazy(() => import("./components/DashboardContent"));

export default function Dashboard() {
  const [user, setUser] = useState({ name: "Aadarsh", level: 1, progress: 0 });
  const [lessons, setLessons] = useState([]);  // Store lessons
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // State to track loading phase
  const [isClient, setIsClient] = useState(false); // State to track if it's on the client side

  // Parallel fetch for user and lessons data
  useEffect(() => {
    async function fetchData() {
      try {
        const [userData, lessonsData] = await Promise.all([
          fetch("/api/user").then((res) => res.json()),
          fetch("/api/lessons").then((res) => res.json()),
        ]);
        
        setUser({ name: userData.name, level: userData.level, progress: userData.progress });
        setLessons(lessonsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Set loading to false once data is fetched
      }
    }
    fetchData();
  }, []);

  // Sidebar items with icons, labels, and links
  const sidebarItems = [
    { label: "Learn", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/learn.gif", link: "/dashboard/learning" },
    { label: "Story", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/story.gif", link: "/dashboard/story" },
    { label: "Gita", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/gitaa.gif", link: "/dashboard/gita" },
  ];

  // useEffect to check if it's running on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render the loading gif if still loading
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <Image
          src="https://d8q326uv7ym5m.cloudfront.net/public/loading.gif" // Path to your loading GIF
          alt="Loading..."
          width={100}  // Set the width
          height={100} // Set the height
          objectFit="contain" // Optional: maintain aspect ratio and avoid distortion
          unoptimized
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-12 flex flex-col sm:flex-row">
      <Header />

      {/* Left sidebar with Learn, Story, Gita links */}
      <Suspense fallback={<div>Loading Sidebar...</div>}>
        <LeftSideBar sidebarItems={sidebarItems} />
      </Suspense>

      {/* Main Dashboard Content */}
      <Suspense fallback={<div>Loading Content...</div>}>
        <DashboardContent user={user} lessons={lessons} />
      </Suspense>

      {/* Right Sidebar */}
      <Suspense fallback={<div>Loading Right Sidebar...</div>}>
        <RightSideBar />
      </Suspense>
    </div>
  );
}
