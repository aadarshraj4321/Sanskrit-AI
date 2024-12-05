// import React, { useState } from "react";
// import { useSpring, animated } from "react-spring";

// const Card = ({ title, description, buttonText, onClick, gifUrl }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   // Animation for hover effect
//   const { scale, boxShadow, transform, opacity } = useSpring({
//     scale: isHovered ? 1.05 : 1,
//     boxShadow: isHovered
//       ? "0px 15px 30px rgba(0, 0, 0, 0.1), 0px 15px 40px rgba(0, 0, 0, 0.15)"
//       : "0px 10px 20px rgba(0, 0, 0, 0.1)",
//     transform: isHovered ? "translateY(-10px)" : "translateY(0)",
//     opacity: isHovered ? 0.9 : 1,
//     config: { tension: 200, friction: 15 }, // smooth, natural transition
//   });

//   return (
//     <animated.div
//       style={{
//         scale,
//         boxShadow,
//         transform,
//         opacity,
//       }}
//       className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg text-white rounded-2xl shadow-lg p-4 flex flex-col items-center justify-between space-y-4 transition-all duration-300 cursor-pointer"
//       onMouseEnter={() => setIsHovered(true)} // Activate hover state
//       onMouseLeave={() => setIsHovered(false)} // Reset hover state
//       onClick={onClick}
//     >
//       {/* Container for the background GIF and text */}
//       <div
//         className="relative w-full bg-cover bg-center rounded-2xl"
//         style={{
//           backgroundImage: `url(${gifUrl})`, // GIF as background
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "250px", // Default height for small screens
//         }}
//       >
//         {/* Semi-transparent overlay for text readability */}
//         <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>

//         {/* Text content */}
//         <div className="relative z-10 flex flex-col items-center justify-center space-y-3 text-center p-4">
//           <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
//           <p className="text-sm sm:text-md text-opacity-90">{description}</p>
//           <button
//             onClick={onClick}
//             className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 sm:px-5 sm:py-2 rounded-full text-sm sm:text-md font-semibold shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700"
//           >
//             {buttonText}
//           </button>
//         </div>
//       </div>
//     </animated.div>
//   );
// };

// export default Card;







import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Card = ({ title, description, buttonText, onClick, gifUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Animation for hover effect
  const { scale, boxShadow, transform, opacity } = useSpring({
    scale: isHovered ? 1.05 : 1,
    boxShadow: isHovered
      ? "0px 15px 30px rgba(0, 0, 0, 0.1), 0px 15px 40px rgba(0, 0, 0, 0.15)"
      : "0px 10px 20px rgba(0, 0, 0, 0.1)",
    transform: isHovered ? "translateY(-10px)" : "translateY(0)",
    opacity: isHovered ? 0.9 : 1,
    config: { tension: 200, friction: 15 }, // smooth, natural transition
  });

  return (
    <animated.div
      style={{
        scale,
        boxShadow,
        transform,
        opacity,
      }}
      className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg text-white rounded-2xl shadow-lg p-4 flex flex-col items-center justify-between space-y-4 transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)} // Activate hover state
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
      onClick={onClick}
    >
      {/* Container for the background GIF and text */}
      <div
        className="relative w-full bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage: `url(${gifUrl})`, // GIF as background
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px", // Default height for small screens
        }}
      >
        {/* Semi-transparent overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-3 text-center p-4">
          <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
          <p className="text-sm sm:text-md text-opacity-90">{description}</p>
          {/* <button
            onClick={onClick}
            className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 sm:px-5 sm:py-3 rounded-full text-sm sm:text-md font-semibold shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700"
          >
            {buttonText}
          </button> */}

        <button class="px-6 py-2 bg-yellow-200 text-yellow-800 font-bold rounded-md border-2 border-yellow-800 hover:bg-yellow-300 transition duration-300 shadow-[2px_2px_0_theme(colors.yellow.800)] hover:shadow-[4px_4px_0_theme(colors.yellow.800)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
        onClick={onClick}>
          {buttonText}
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default Card;
