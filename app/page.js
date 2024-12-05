// "use client"

// import Image from "next/image";
// import React, { useEffect } from 'react';
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import Footer from "./components/Footer";
// import Dashboard from "./dashboard/page";
// import { SignedOut, SignedIn, useUser } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";



// export default function Home() {

//   const router = useRouter();
//   const { isSignedIn } = useUser();

//   useEffect(() => {
//     if(isSignedIn) {
//       router.push("/dashboard");
//     }
//   }, [isSignedIn, router])

//   return (
//     <>
//     <SignedOut>
//       <div>
//         <Header />
//         <Hero />
//         {/* <Features /> */}
//         <Footer />
//       </div>
//       </SignedOut>
//         <SignedIn>
//           <div>
//             <Dashboard />
//           </div>
//         </SignedIn>
//     </>
//   );
// }









"use client"

import Image from "next/image";
import React, { useEffect } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Dashboard from "./dashboard/page";
import { SignedOut, SignedIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    } else {
      // Redirect to sign-out page when user is not signed in
      router.push("/"); // Change this route if needed
    }
  }, [isSignedIn, router]);

  return (
    <>
      <SignedOut>
        <div>
          <Header />
          <Hero />
          {/* <Features /> */}
          <Footer />
        </div>
      </SignedOut>
      <SignedIn>
        <div>
          <Dashboard />
        </div>
      </SignedIn>
    </>
  );
}
