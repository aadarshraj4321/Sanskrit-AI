// import { motion } from "framer-motion";

// const ClickableImage = ({ src, alt, onClick, isHighlighted, isWrong, disabled }) => {
//     const borderStyle = isHighlighted 
//         ? "border-green-500" 
//         : isWrong 
//         ? "border-red-500 animate-pulse" 
//         : "border-gray-600";

//     return (
//         <motion.img
//             src={src}
//             alt={alt}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ rotate: 10 }}
//             className={`w-40 h-40 cursor-pointer border-2 p-2 rounded-lg shadow-lg ${borderStyle}`}
//             onClick={onClick}
//             disabled={disabled}
//         />
//     );
// };

// export default ClickableImage;






// import { motion } from "framer-motion";

// const ClickableImage = ({ src, alt, onClick, isHighlighted, isWrong, disabled }) => {
//     const borderStyle = isHighlighted
//         ? "border-green-500 glow-effect"
//         : isWrong
//         ? "border-red-500 animate-pulse glow-effect"
//         : "border-gray-600";

//     return (
//         <motion.img
//             src={src}
//             alt={alt}
//             whileHover={{
//                 scale: 1.1,
//                 transition: { type: "spring", stiffness: 300 },
//             }}
//             whileTap={{
//                 scale: 0.95,
//                 rotate: 10,
//                 transition: { type: "spring", stiffness: 400, damping: 10 },
//             }}
//             className={`w-40 h-40 cursor-pointer border-2 p-2 rounded-lg shadow-lg transition duration-300 ease-in-out ${borderStyle}`}
//             onClick={onClick}
//             disabled={disabled}
//         />
//     );
// };

// export default ClickableImage;




// import { motion } from "framer-motion";

// const ClickableImage = ({ src, alt, onClick, isHighlighted, isWrong, disabled }) => {
//     const borderStyle = isHighlighted
//         ? "border-green-500 glow-effect"
//         : isWrong
//         ? "border-red-500 animate-pulse glow-effect"
//         : "border-gray-600";

//     return (
//         <motion.img
//             src={src}
//             alt={alt}
//             whileHover={{
//                 scale: 1.1, // Slightly more noticeable scaling
//                 rotate: 5, // A bit more rotation on hover
//                 boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)", // Brighter glow effect
//                 transition: { type: "spring", stiffness: 300, damping: 6 }, // Faster, snappier transition
//             }}
//             whileTap={{
//                 scale: 0.95, // Slight shrink on tap, still dynamic
//                 rotate: -8, // Mild counter-rotation
//                 boxShadow: "0 0 25px rgba(255, 0, 0, 0.5)", // Brighter red glow on tap
//                 transition: { type: "spring", stiffness: 500, damping: 5 }, // Faster tap transition with more bounce
//             }}
//             className={`w-40 h-40 cursor-pointer border-2 p-2 rounded-lg shadow-lg transition duration-200 ease-in-out transform ${borderStyle} ${!disabled && "hover:shadow-lg"}`}
//             onClick={onClick}
//             disabled={disabled}
//         />
//     );
// };

// export default ClickableImage;







// import { motion } from "framer-motion";

// const ClickableImage = ({ src, alt, onClick, isHighlighted, isWrong, disabled }) => {
//     const borderStyle = isHighlighted
//         ? "border-green-500 glow-effect"
//         : isWrong
//         ? "border-red-500 animate-pulse glow-effect"
//         : "border-gray-600";

//     return (
//         <motion.img
//             src={src}
//             alt={alt}
//             whileHover={{
//                 scale: 1.1, // Slightly more noticeable scaling
//                 rotate: 5, // A bit more rotation on hover
//                 boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)", // Brighter glow effect
//                 transition: { type: "spring", stiffness: 300, damping: 6 }, // Faster, snappier transition
//             }}
//             whileTap={{
//                 scale: 0.95, // Slight shrink on tap, still dynamic
//                 rotate: -8, // Mild counter-rotation
//                 boxShadow: "0 0 25px rgba(255, 0, 0, 0.5)", // Brighter red glow on tap
//                 transition: { type: "spring", stiffness: 500, damping: 5 }, // Faster tap transition with more bounce
//             }}
//             className={`w-20 sm:w-28 md:w-36 lg:w-44 h-20 sm:h-28 md:h-36 lg:h-44 cursor-pointer border-2 p-2 rounded-lg shadow-lg transition duration-200 ease-in-out transform ${borderStyle} ${!disabled && "hover:shadow-lg"}`}
//             onClick={onClick}
//             disabled={disabled}
//         />
//     );
// };

// export default ClickableImage;






// import { motion } from "framer-motion";

// const ClickableImage = ({ src, alt, onClick, isHighlighted, isWrong, disabled }) => {
//     const borderStyle = isHighlighted
//         ? "border-green-500 glow-effect"
//         : isWrong
//         ? "border-red-500 animate-pulse glow-effect"
//         : "border-gray-600";

//     return (
//         <motion.div
//             className={`relative w-20 sm:w-28 md:w-36 lg:w-44 h-20 sm:h-28 md:h-36 lg:h-44 cursor-pointer p-2 rounded-lg transition-all duration-300 ease-in-out ${!disabled && "hover:shadow-lg"}`}
//             initial={{ opacity: 0.8 }} // Slight initial opacity
//             animate={{
//                 opacity: 1, // Full opacity when it becomes visible
//                 scale: 1.05, // Slight scale increase for the static breathing effect
//                 transition: {
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                     duration: 2, // Animation duration
//                     ease: "easeInOut", // Correct easing for smooth scale animation
//                 },
//             }}
//             whileHover={{
//                 scale: 1.1, // Slightly more noticeable scaling
//                 rotate: 5, // A bit more rotation on hover
//                 boxShadow: "0 0 30px rgba(255, 255, 255, 0.7)", // Brighter and more extended glow effect on hover
//                 transition: { type: "spring", stiffness: 300, damping: 6 }, // Faster, snappier transition
//             }}
//             whileTap={{
//                 scale: 0.95, // Slight shrink on tap, still dynamic
//                 rotate: -8, // Mild counter-rotation
//                 boxShadow: "0 0 35px rgba(255, 0, 0, 0.6)", // Brighter red glow on tap
//                 transition: { type: "spring", stiffness: 500, damping: 5 }, // Faster tap transition with more bounce
//             }}
//             onClick={onClick}
//             disabled={disabled}
//         >
//             {/* Animated Border */}
//             <motion.div
//                 className="absolute inset-0 border-2 rounded-lg"
//                 animate={{
//                     borderColor: isHighlighted
//                         ? "rgb(34, 197, 94)" // Green when correct
//                         : isWrong
//                         ? "rgb(255, 0, 0)" // Red when wrong
//                         : "rgb(156, 163, 175)", // Gray by default
//                     borderWidth: isHighlighted || isWrong ? "4px" : "2px", // Thicker border when highlighted or wrong
//                     boxShadow: isHighlighted
//                         ? "0 0 30px 10px rgba(34, 197, 94, 0.9)" // Stronger green shine when correct
//                         : isWrong
//                         ? "0 0 30px 10px rgba(255, 0, 0, 0.9)" // Stronger red shine when wrong
//                         : "0 0 0px rgba(0, 0, 0, 0)", // No glow by default
//                 }}
//                 transition={{
//                     duration: 0.7,
//                     ease: "easeInOut", // Smooth transition for the border color and width
//                 }}
//             />
//             {/* Image */}
//             <motion.img
//                 src={src}
//                 alt={alt}
//                 className="w-full h-full object-cover rounded-lg transition-all duration-300 ease-in-out"
//                 initial={{ opacity: 0.8 }} // Set initial opacity to slightly faded
//                 animate={{
//                     opacity: isHighlighted || isWrong ? 1 : 0.8, // Full opacity when selected as correct or wrong
//                     boxShadow: isHighlighted
//                         ? "0 0 30px 15px rgba(34, 197, 94, 0.9)" // Stronger green shine when correct
//                         : isWrong
//                         ? "0 0 30px 15px rgba(255, 0, 0, 0.9)" // Stronger red shine when wrong
//                         : "0 0 0px rgba(0, 0, 0, 0)", // No glow by default
//                     transition: {
//                         duration: 0.7,
//                         ease: "easeInOut", // Smooth transition for box-shadow animation
//                     },
//                 }}
//             />
//         </motion.div>
//     );
// };

// export default ClickableImage;























// import { motion } from "framer-motion";
// import React from "react";

// // Use React.memo to prevent unnecessary re-renders
// const ClickableImage = React.memo(({ src, alt, onClick, isHighlighted, isWrong, disabled }) => {
//     const borderStyle = isHighlighted
//         ? "border-yellow-500 glow-effect" // Change to yellow when correct
//         : isWrong
//         ? "border-red-500 animate-pulse glow-effect"
//         : "border-gray-600";

//     return (
//         <motion.div
//             className={`relative w-20 sm:w-28 md:w-36 lg:w-44 h-20 sm:h-28 md:h-36 lg:h-44 cursor-pointer p-2 rounded-lg transition-all duration-200 ease-in-out ${!disabled && "hover:shadow-lg"}`}
//             initial={{ opacity: 0.8 }} // Slight initial opacity
//             animate={{
//                 opacity: 1, // Full opacity when it becomes visible
//                 scale: 1.05, // Slight scale increase for the static breathing effect
//                 transition: {
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                     duration: 2, // Animation duration
//                     ease: "easeInOut", // Correct easing for smooth scale animation
//                 },
//             }}
//             whileHover={{
//                 scale: 1.1, // Slightly more noticeable scaling
//                 rotate: 5, // A bit more rotation on hover
//                 boxShadow: "0 0 30px rgba(255, 255, 255, 0.7)", // Brighter and more extended glow effect on hover
//                 transition: { type: "spring", stiffness: 300, damping: 6 }, // Faster, snappier transition
//             }}
//             whileTap={{
//                 scale: 0.95, // Slight shrink on tap, still dynamic
//                 rotate: -8, // Mild counter-rotation
//                 boxShadow: "0 0 35px rgba(255, 0, 0, 0.6)", // Brighter red glow on tap
//                 transition: { type: "spring", stiffness: 500, damping: 5 }, // Faster tap transition with more bounce
//             }}
//             onClick={onClick}
//             disabled={disabled}
//         >
//             {/* Animated Border */}
//             <motion.div
//                 className="absolute inset-0 border-2 rounded-lg"
//                 animate={{
//                     borderColor: isHighlighted
//                         ? "rgb(255, 221, 51)" // Yellow when correct
//                         : isWrong
//                         ? "rgb(255, 0, 0)" // Red when wrong
//                         : "rgb(156, 163, 175)", // Gray by default
//                     borderWidth: isHighlighted || isWrong ? "4px" : "2px", // Thicker border when highlighted or wrong
//                     boxShadow: isHighlighted
//                         ? "0 0 30px 10px rgba(255, 221, 51, 0.9)" // Stronger yellow shine when correct
//                         : isWrong
//                         ? "0 0 30px 10px rgba(255, 0, 0, 0.9)" // Stronger red shine when wrong
//                         : "0 0 0px rgba(0, 0, 0, 0)", // No glow by default
//                 }}
//                 transition={{
//                     duration: 0.5, // Reduced transition duration for better performance
//                     ease: "easeInOut", // Smooth transition for the border color and width
//                 }}
//             />
//             {/* Image */}
//             <motion.img
//                 src={src}
//                 alt={alt}
//                 className="w-full h-full object-cover rounded-lg transition-all duration-200 ease-in-out"
//                 initial={{ opacity: 0.8 }} // Set initial opacity to slightly faded
//                 animate={{
//                     opacity: isHighlighted || isWrong ? 1 : 0.8, // Full opacity when selected as correct or wrong
//                     boxShadow: isHighlighted
//                         ? "0 0 30px 15px rgba(255, 221, 51, 0.9)" // Stronger yellow shine when correct
//                         : isWrong
//                         ? "0 0 30px 15px rgba(255, 0, 0, 0.9)" // Stronger red shine when wrong
//                         : "0 0 0px rgba(0, 0, 0, 0)", // No glow by default
//                     transition: {
//                         duration: 0.5, // Reduced transition duration for better performance
//                         ease: "easeInOut", // Smooth transition for box-shadow animation
//                     },
//                 }}
//             />
//         </motion.div>
//     );
// });

// export default ClickableImage;







import { motion } from "framer-motion";
import React from "react";

// Use React.memo to prevent unnecessary re-renders
const ClickableImage = React.memo(({ src, alt, onClick, isHighlighted, isWrong, disabled }) => {
    const borderStyle = isHighlighted
        ? "border-yellow-500 glow-effect" // Change to yellow when correct
        : isWrong
        ? "border-red-500 animate-pulse glow-effect"
        : "border-gray-600";

    return (
        <motion.div
            className={`relative w-20 sm:w-28 md:w-36 lg:w-44 h-20 sm:h-28 md:h-36 lg:h-44 cursor-pointer p-2 rounded-lg transition-all duration-200 ease-in-out ${!disabled && "hover:shadow-lg"}`}
            initial={{ opacity: 0.8 }} // Slight initial opacity
            animate={{
                opacity: 1, // Full opacity when it becomes visible
                scale: 1.05, // Slight scale increase for the static breathing effect
                transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2, // Animation duration
                    ease: "easeInOut", // Correct easing for smooth scale animation
                },
            }}
            whileHover={{
                scale: 1.1, // Slightly more noticeable scaling
                rotate: 5, // A bit more rotation on hover
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.7)", // Brighter and more extended glow effect on hover
                transition: { type: "spring", stiffness: 300, damping: 6 }, // Faster, snappier transition
            }}
            whileTap={{
                scale: 0.95, // Slight shrink on tap, still dynamic
                rotate: -8, // Mild counter-rotation
                boxShadow: "0 0 35px rgba(255, 0, 0, 0.6)", // Brighter red glow on tap
                transition: { type: "spring", stiffness: 500, damping: 5 }, // Faster tap transition with more bounce
            }}
            onClick={onClick}
            disabled={disabled}
        >
            {/* Animated Border */}
            <motion.div
                className="absolute inset-0 border-2 rounded-lg"
                animate={{
                    borderColor: isHighlighted
                        ? "rgb(255, 221, 51)" // Yellow when correct
                        : isWrong
                        ? "rgb(255, 0, 0)" // Red when wrong
                        : "rgb(156, 163, 175)", // Gray by default
                    borderWidth: isHighlighted || isWrong ? "4px" : "2px", // Thicker border when highlighted or wrong
                    boxShadow: isHighlighted
                        ? "0 0 30px 10px rgba(255, 221, 51, 0.9)" // Stronger yellow shine when correct
                        : isWrong
                        ? "0 0 30px 10px rgba(255, 0, 0, 0.9)" // Stronger red shine when wrong
                        : "0 0 0px rgba(0, 0, 0, 0)", // No glow by default
                }}
                transition={{
                    duration: 0.5, // Reduced transition duration for better performance
                    ease: "easeInOut", // Smooth transition for the border color and width
                }}
            />
            {/* Image */}
            <motion.img
                src={src}
                alt={alt}
                className="w-full h-full object-cover rounded-lg transition-all duration-200 ease-in-out"
                initial={{ opacity: 0.8 }} // Set initial opacity to slightly faded
                animate={{
                    opacity: isHighlighted || isWrong ? 1 : 0.8, // Full opacity when selected as correct or wrong
                    boxShadow: isHighlighted
                        ? "0 0 30px 15px rgba(255, 221, 51, 0.9)" // Stronger yellow shine when correct
                        : isWrong
                        ? "0 0 30px 15px rgba(255, 0, 0, 0.9)" // Stronger red shine when wrong
                        : "0 0 0px rgba(0, 0, 0, 0)", // No glow by default
                    transition: {
                        duration: 0.5, // Reduced transition duration for better performance
                        ease: "easeInOut", // Smooth transition for box-shadow animation
                    },
                }}
                loading="lazy" // Lazy load for performance optimization
                layout="intrinsic" // Layout optimization for the image (avoids reflows)
            />
        </motion.div>
    );
});

export default ClickableImage;
