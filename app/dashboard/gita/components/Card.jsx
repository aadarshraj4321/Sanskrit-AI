// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { useSpring, animated } from "react-spring";

// // Card Component
// const Card = ({ card, onClick }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const imgRef = useRef(null);

//   // Intersection Observer to detect image visibility and load
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsLoaded(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (imgRef.current) {
//       observer.observe(imgRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <animated.div
//       style={{ opacity: isLoaded ? 1 : 0 }}
//       className="w-full max-w-sm bg-gray-800 shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform duration-500 cursor-pointer"
//       onClick={onClick} // Trigger the onClick function when the card is clicked
//     >
//       <div
//         className="relative rounded-2xl p-4 shadow-lg overflow-hidden"
//         style={{
//           backgroundImage: `url(${card.gif})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           boxShadow: "0px 10px 30px rgba(128,0,128,0.6)",
//           border: "2px solid rgba(255, 255, 255, 0.2)", // Subtle border for a clean look
//           transition: "box-shadow 0.3s ease-in-out", // Smooth transition for the hover effect
//         }}
//       >
//         <img
//           ref={imgRef}
//           src={isLoaded ? card.gif : "/placeholder.jpg"} // Placeholder image until the gif loads
//           alt={card.title}
//           className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
//           loading="lazy"
//         />
//         <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900/80 to-transparent p-4 rounded-2xl">
//           <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
//           <p className="text-lg text-white">{card.description}</p>
//         </div>
//       </div>
//     </animated.div>
//   );
// };

// export default Card;





// "use client";

// import React, { useState, useEffect, useRef, memo } from "react";
// import { useSpring, animated } from "react-spring";

// // Card Component - Wrapped in React.memo to prevent unnecessary re-renders
// const Card = memo(({ card, onClick }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const imgRef = useRef(null);

//   useEffect(() => {
//     // Check if IntersectionObserver is available (for server-side rendering)
//     if (typeof IntersectionObserver !== "undefined") {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setIsLoaded(true);
//             observer.disconnect();
//           }
//         },
//         { threshold: 0.1 }
//       );

//       if (imgRef.current) {
//         observer.observe(imgRef.current);
//       }

//       return () => observer.disconnect();
//     }
//   }, []); // Only runs on mount (client-side)

//   const imageStyle = useSpring({
//     opacity: isLoaded ? 1 : 0,
//     config: { tension: 180, friction: 12 },
//   });

//   return (
//     <animated.div
//       style={{ opacity: isLoaded ? 1 : 0 }}
//       className="w-full max-w-sm bg-gray-800 shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform duration-500 cursor-pointer"
//       onClick={onClick}
//     >
//       <div
//         className="relative rounded-2xl p-4 shadow-lg overflow-hidden"
//         style={{
//           backgroundImage: `url(${card.gif})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           boxShadow: "0px 10px 30px rgba(128,0,128,0.6)",
//           border: "2px solid rgba(255, 255, 255, 0.2)",
//           transition: "box-shadow 0.3s ease-in-out",
//         }}
//       >
//         {/* Lazy-loaded image */}
//         <animated.img
//           ref={imgRef}
//           src={isLoaded ? card.gif : "/placeholder.jpg"}
//           alt={card.title}
//           className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
//           style={imageStyle}
//           loading="lazy"
//         />
//         <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900/80 to-transparent p-4 rounded-2xl">
//           <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
//           <p className="text-lg text-white">{card.description}</p>
//         </div>
//       </div>
//     </animated.div>
//   );
// });

// export default Card;






// "use client";

// import React, { useState, useEffect, useRef, memo } from "react";
// import { useSpring, animated } from "react-spring";

// // Card Component - Wrapped in React.memo to prevent unnecessary re-renders
// const Card = memo(({ card, onClick }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const imgRef = useRef(null);

//   // Hover state for animation
//   const [isHovered, setIsHovered] = useState(false);

//   // Black hole / Neutron Star suck-in effect
//   const { scale, rotate, opacity, boxShadow, distortion, warp } = useSpring({
//     scale: isHovered ? 0.6 : 1, // Scale down more for stronger suction effect
//     rotate: isHovered ? 720 : 0, // Complete rotation to mimic swirling effect
//     opacity: isHovered ? 0.3 : 1, // Fade the card as it gets closer to the center
//     boxShadow: isHovered
//       ? "0px 0px 80px rgba(255, 255, 255, 0.8), 0px 0px 120px rgba(0, 0, 0, 0.9)" // Strong glow and shadow on hover
//       : "0px 10px 30px rgba(128, 0, 128, 0.6)", // Normal shadow when not hovered
//     distortion: isHovered ? "10px" : "0px", // Warp effect on hover
//     warp: isHovered ? "scale(1.2)" : "scale(1)", // Slight warp on the card
//     config: { tension: 350, friction: 40 }, // Smooth but intense animation for cosmic effect
//   });

//   useEffect(() => {
//     // Check if IntersectionObserver is available (for server-side rendering)
//     if (typeof IntersectionObserver !== "undefined") {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setIsLoaded(true);
//             observer.disconnect();
//           }
//         },
//         { threshold: 0.1 }
//       );

//       if (imgRef.current) {
//         observer.observe(imgRef.current);
//       }

//       return () => observer.disconnect();
//     }
//   }, []); // Only runs on mount (client-side)

//   const imageStyle = useSpring({
//     opacity: isLoaded ? 1 : 0,
//     transform: warp, // Apply warp effect to the image
//     config: { tension: 180, friction: 12 },
//   });

//   return (
//     <animated.div
//       style={{
//         opacity,
//         scale,
//         rotate: rotate.to(r => `${r}deg`), // Full rotation effect
//         boxShadow, // Apply glowing shadow for cosmic feel
//         transform: distortion, // Apply distortion effect as the card gets sucked in
//       }}
//       className="w-full max-w-sm bg-gray-800 shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform duration-500 cursor-pointer"
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}  // Trigger hover effect
//       onMouseLeave={() => setIsHovered(false)} // Reset effect when mouse leaves
//     >
//       <div
//         className="relative rounded-2xl p-4 shadow-lg overflow-hidden"
//         style={{
//           backgroundImage: `url(${card.gif})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           boxShadow: "0px 10px 30px rgba(128,0,128,0.6)", // Default glow shadow
//           border: "2px solid rgba(255, 255, 255, 0.2)",
//           transition: "box-shadow 0.3s ease-in-out",
//         }}
//       >
//         {/* Lazy-loaded image */}
//         <animated.img
//           ref={imgRef}
//           src={isLoaded ? card.gif : "/placeholder.jpg"}
//           alt={card.title}
//           className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
//           style={imageStyle}
//           loading="lazy"
//         />
//         <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900/80 to-transparent p-4 rounded-2xl">
//           <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
//           <p className="text-lg text-white">{card.description}</p>
//         </div>
//       </div>
//     </animated.div>
//   );
// });

// export default Card;



























// "use client";

// import React, { useState, useEffect, useRef, memo, useCallback } from "react";
// import { useSpring, animated } from "react-spring";

// // Card Component - Wrapped in React.memo to prevent unnecessary re-renders
// const Card = memo(({ card, onClick }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const imgRef = useRef(null);

//   // Hover state for animation
//   const [isHovered, setIsHovered] = useState(false);

//   // Black hole / Neutron Star suck-in effect
//   const { scale, rotate, opacity, boxShadow, distortion, warp } = useSpring({
//     scale: isHovered ? 0.6 : 1, // Scale down more for stronger suction effect
//     rotate: isHovered ? 720 : 0, // Complete rotation to mimic swirling effect
//     opacity: isHovered ? 0.3 : 1, // Fade the card as it gets closer to the center
//     boxShadow: isHovered
//       ? "0px 0px 80px rgba(255, 255, 255, 0.8), 0px 0px 120px rgba(0, 0, 0, 0.9)" // Strong glow and shadow on hover
//       : "0px 10px 30px rgba(128, 0, 128, 0.6)", // Normal shadow when not hovered
//     distortion: isHovered ? "10px" : "0px", // Warp effect on hover
//     warp: isHovered ? "scale(1.2)" : "scale(1)", // Slight warp on the card
//     config: { tension: 350, friction: 40 }, // Smooth but intense animation for cosmic effect
//   });

//   // Lazy-load images using Intersection Observer
//   const handleImageLoad = useCallback(() => {
//     setIsLoaded(true);
//   }, []);

//   useEffect(() => {
//     // Check if IntersectionObserver is available (for server-side rendering)
//     if (typeof IntersectionObserver !== "undefined") {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             handleImageLoad();  // Set image as loaded when it enters the viewport
//             observer.disconnect();
//           }
//         },
//         { threshold: 0.1 }
//       );

//       if (imgRef.current) {
//         observer.observe(imgRef.current);
//       }

//       return () => observer.disconnect();
//     }
//   }, [handleImageLoad]);

//   const imageStyle = useSpring({
//     opacity: isLoaded ? 1 : 0,
//     transform: warp, // Apply warp effect to the image
//     config: { tension: 180, friction: 12 },
//   });

//   return (
//     <animated.div
//       style={{
//         opacity,
//         scale,
//         rotate: rotate.to((r) => `${r}deg`), // Full rotation effect
//         boxShadow, // Apply glowing shadow for cosmic feel
//         transform: distortion, // Apply distortion effect as the card gets sucked in
//       }}
//       className="w-full max-w-sm bg-gray-800 shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform duration-500 cursor-pointer"
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}  // Trigger hover effect
//       onMouseLeave={() => setIsHovered(false)} // Reset effect when mouse leaves
//     >
//       <div
//         className="relative rounded-2xl p-4 shadow-lg overflow-hidden"
//         style={{
//           backgroundImage: `url(${card.gif})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           boxShadow: "0px 10px 30px rgba(128,0,128,0.6)", // Default glow shadow
//           border: "2px solid rgba(255, 255, 255, 0.2)",
//           transition: "box-shadow 0.3s ease-in-out",
//         }}
//       >
//         {/* Lazy-loaded image */}
//         <animated.img
//           ref={imgRef}
//           src={isLoaded ? card.gif : "/placeholder.jpg"}
//           alt={card.title}
//           className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
//           style={imageStyle}
//           loading="lazy" // Lazy load the image
//           width="100%" // Ensure the image fills the container properly
//           height="auto" // Maintain aspect ratio
//         />
//         <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900/80 to-transparent p-4 rounded-2xl">
//           <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
//           <p className="text-lg text-white">{card.description}</p>
//         </div>
//       </div>
//     </animated.div>
//   );
// });

// export default Card;




















"use client";

import React, { useState, useEffect, useRef, memo, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import Link from 'next/link';  // Import Link from next/link

// Card Component - Wrapped in React.memo to prevent unnecessary re-renders
const Card = memo(({ card, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  // Hover state for animation
  const [isHovered, setIsHovered] = useState(false);

  // Black hole / Neutron Star suck-in effect
  const { scale, rotate, opacity, boxShadow, distortion, warp } = useSpring({
    scale: isHovered ? 0.6 : 1, // Scale down more for stronger suction effect
    rotate: isHovered ? 720 : 0, // Complete rotation to mimic swirling effect
    opacity: isHovered ? 0.3 : 1, // Fade the card as it gets closer to the center
    boxShadow: isHovered
      ? "0px 0px 80px rgba(255, 255, 255, 0.8), 0px 0px 120px rgba(0, 0, 0, 0.9)" // Strong glow and shadow on hover
      : "0px 10px 30px rgba(128, 0, 128, 0.6)", // Normal shadow when not hovered
    distortion: isHovered ? "10px" : "0px", // Warp effect on hover
    warp: isHovered ? "scale(1.2)" : "scale(1)", // Slight warp on the card
    config: { tension: 350, friction: 40 }, // Smooth but intense animation for cosmic effect
  });

  // Lazy-load images using Intersection Observer
  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Check if IntersectionObserver is available (for server-side rendering)
    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            handleImageLoad();  // Set image as loaded when it enters the viewport
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    }
  }, [handleImageLoad]);

  const imageStyle = useSpring({
    opacity: isLoaded ? 1 : 0,
    transform: warp, // Apply warp effect to the image
    config: { tension: 180, friction: 12 },
  });

  return (
    <animated.div
      style={{
        opacity,
        scale,
        rotate: rotate.to((r) => `${r}deg`), // Full rotation effect
        boxShadow, // Apply glowing shadow for cosmic feel
        transform: distortion, // Apply distortion effect as the card gets sucked in
      }}
      className="w-full max-w-sm bg-gray-800 shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform duration-500 cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}  // Trigger hover effect
      onMouseLeave={() => setIsHovered(false)} // Reset effect when mouse leaves
    >
      {/* Wrap the card content in a Link */}
      <Link href={card.link} passHref>
        <div
          className="relative rounded-2xl p-4 shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url(${card.gif})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0px 10px 30px rgba(128,0,128,0.6)", // Default glow shadow
            border: "2px solid rgba(255, 255, 255, 0.2)",
            transition: "box-shadow 0.3s ease-in-out",
          }}
        >
          {/* Lazy-loaded image */}
          <animated.img
            ref={imgRef}
            src={isLoaded ? card.gif : "/placeholder.jpg"}
            alt={card.title}
            className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={imageStyle}
            loading="lazy" // Lazy load the image
            width="100%" // Ensure the image fills the container properly
            height="auto" // Maintain aspect ratio
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900/80 to-transparent p-4 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
            <p className="text-lg text-white">{card.description}</p>
          </div>
        </div>
      </Link>
    </animated.div>
  );
});

export default Card;
