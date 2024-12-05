// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const PointsManager = ({ isCorrect, resetGame, words }) => {
//   const [points, setPoints] = useState(0);
//   const [coins, setCoins] = useState([]); // New array to handle floating coins
//   const [showDeductedPoints, setShowDeductedPoints] = useState(false); // Track if -5 points should be shown

//   // Ensure words are defined before trying to access vowels and consonants
//   if (!words || !words.vowels || !words.consonants) {
//     return <div>Loading...</div>; // Show a loading state until words are available
//   }

//   // Update points based on the correctness of the answer
//   useEffect(() => {
//     if (isCorrect === true) {
//       setPoints((prevPoints) => prevPoints + 10); // Add 10 points for correct answers
//       handleCoinAnimation('add');
//       setShowDeductedPoints(false); // Hide deducted points when the answer is correct
//     } else if (isCorrect === false) {
//       setPoints((prevPoints) => prevPoints - 5); // Subtract 5 points for wrong answers
//       handleCoinAnimation('remove');
//       setShowDeductedPoints(true); // Show deducted points when the answer is wrong

//       // Hide the deducted points after 1 second
//       setTimeout(() => {
//         setShowDeductedPoints(false);
//       }, 1000);
//     }
//   }, [isCorrect]);

//   // Add floating coin animation whenever points change
//   const handleCoinAnimation = (type) => {
//     const newCoin = {
//       id: Date.now(),
//       type,
//       startX: Math.random() < 0.5 ? -50 : 50, // Random start X position
//       startY: type === 'add' ? window.innerHeight : -window.innerHeight, // Start from bottom for correct, top for wrong
//     };

//     setCoins((prevCoins) => [...prevCoins, newCoin]);

//     const timeoutId = setTimeout(() => {
//       setCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== newCoin.id));
//     }, 1000); // Remove coin after animation completes

//     return () => clearTimeout(timeoutId);
//   };

//   // Reset points when the game restarts or on new question
//   useEffect(() => {
//     if (resetGame) {
//       setPoints(0); // Reset points when the game is reset
//       setShowDeductedPoints(false); // Hide deducted points if game is reset
//     }
//   }, [resetGame]);

//   return (
//     <div className="relative w-full max-w-xl mx-auto mt-5 p-3 sm:p-4 rounded-lg">
//       {/* Animated Coins Section */}
//       <div className="absolute top-0 left-0 w-full h-full">
//         {coins.map((coin) => (
//           <motion.div
//             key={coin.id}
//             className="absolute text-yellow-500 text-xl"
//             initial={{
//               x: coin.startX, // Random start X position
//               y: coin.startY, // Start from the top if answer is wrong, from bottom if correct
//               opacity: 0,
//               scale: 0.5,
//             }}
//             animate={{
//               x: 0, // Move to the center
//               y: 0, // Move to the center from top/bottom
//               opacity: 1,
//               scale: 1.5,
//             }}
//             exit={{
//               opacity: 0,
//               scale: 0.5,
//             }}
//             transition={{
//               duration: 1,
//               ease: 'easeOut',
//             }}
//           >
//             🪙
//           </motion.div>
//         ))}
//       </div>

//       {/* Points Display with Icon and Animation */}
//       <div className="flex items-center justify-center text-lg sm:text-xl font-semibold space-x-2">
//         <motion.div
//           animate={{
//             scale: [1, 1.1, 1],
//             color: points > 0 ? '#32CD32' : '#FF6347', // Green for positive, Red for negative
//             rotate: [0, 10, -10, 0], // Slight rotation for added effect
//           }}
//           transition={{ duration: 0.3 }}
//           className="flex items-center"
//         >
//           {/* Image and Points */}
//           <div className="flex items-center space-x-2">
//             <img
//               src="/data/images/score.png" 
//               alt="Score"
//               className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" // Make the image size responsive
//             />
//             <span className="text-white text-xs sm:text-sm md:text-lg lg:text-xl">: {points}</span>
//           </div>

//           {/* Coin Icon */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: points > 0 ? 1 : 0 }} // Show coin icon only when points are positive
//             transition={{ duration: 0.3 }}
//             className="text-yellow-500 ml-2 text-xl sm:text-2xl lg:text-3xl"
//           >
//             🪙
//           </motion.div>
//         </motion.div>

//         {/* Show deducted points */}
//         {showDeductedPoints && (
//           <motion.div
//             className="text-red-500 text-lg ml-2"
//             animate={{
//               opacity: showDeductedPoints ? 1 : 0,
//               y: [0, -10, 0], // Slight bounce effect for deducted points
//             }}
//             transition={{ duration: 0.5 }}
//           >
//             -5
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PointsManager;
















import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

const PointsManager = memo(({ isCorrect, resetGame, words }) => {
  const [points, setPoints] = useState(0);
  const [coins, setCoins] = useState([]); // New array to handle floating coins
  const [showDeductedPoints, setShowDeductedPoints] = useState(false); // Track if -5 points should be shown

  // Ensure words are defined before trying to access vowels and consonants
  if (!words || !words.vowels || !words.consonants) {
    return <div>Loading...</div>; // Show a loading state until words are available
  }

  // Update points based on the correctness of the answer
  useEffect(() => {
    if (isCorrect === true) {
      setPoints((prevPoints) => prevPoints + 10); // Add 10 points for correct answers
      handleCoinAnimation('add');
      setShowDeductedPoints(false); // Hide deducted points when the answer is correct
    } else if (isCorrect === false) {
      setPoints((prevPoints) => prevPoints - 5); // Subtract 5 points for wrong answers
      handleCoinAnimation('remove');
      setShowDeductedPoints(true); // Show deducted points when the answer is wrong

      // Hide the deducted points after 1 second
      setTimeout(() => {
        setShowDeductedPoints(false);
      }, 1000);
    }
  }, [isCorrect]);

  // Add floating coin animation whenever points change
  const handleCoinAnimation = (type) => {
    const newCoin = {
      id: Date.now(),
      type,
      startX: Math.random() < 0.5 ? -50 : 50, // Random start X position
      startY: type === 'add' ? window.innerHeight : -window.innerHeight, // Start from bottom for correct, top for wrong
    };

    setCoins((prevCoins) => [...prevCoins, newCoin]);

    const timeoutId = setTimeout(() => {
      setCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== newCoin.id));
    }, 1000); // Remove coin after animation completes

    return () => clearTimeout(timeoutId);
  };

  // Reset points when the game restarts or on new question
  useEffect(() => {
    if (resetGame) {
      setPoints(0); // Reset points when the game is reset
      setShowDeductedPoints(false); // Hide deducted points if game is reset
    }
  }, [resetGame]);

  return (
    <div className="relative w-full max-w-xl mx-auto mt-5 p-3 sm:p-4 rounded-lg">
      {/* Animated Coins Section */}
      <div className="absolute top-0 left-0 w-full h-full">
        {coins.map((coin) => (
          <motion.div
            key={coin.id}
            className="absolute text-yellow-500 text-xl"
            initial={{
              x: coin.startX, // Random start X position
              y: coin.startY, // Start from the top if answer is wrong, from bottom if correct
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0, // Move to the center
              y: 0, // Move to the center from top/bottom
              opacity: 1,
              scale: 1.5,
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
          >
            🪙
          </motion.div>
        ))}
      </div>

      {/* Points Display with Icon and Animation */}
      <div className="flex items-center justify-center text-lg sm:text-xl font-semibold space-x-2">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            color: points > 0 ? '#32CD32' : '#FF6347', // Green for positive, Red for negative
            rotate: [0, 10, -10, 0], // Slight rotation for added effect
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center"
        >
          {/* Image and Points */}
          <div className="flex items-center space-x-2">
            <img
              src="https://d8q326uv7ym5m.cloudfront.net/public/data/images/score.png" 
              alt="Score"
              className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" // Make the image size responsive
              loading="lazy" // Lazy load image
            />
            <span className="text-white text-xs sm:text-sm md:text-lg lg:text-xl">: {points}</span>
          </div>

          {/* Coin Icon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: points > 0 ? 1 : 0 }} // Show coin icon only when points are positive
            transition={{ duration: 0.3 }}
            className="text-yellow-500 ml-2 text-xl sm:text-2xl lg:text-3xl"
          >
            🪙
          </motion.div>
        </motion.div>

        {/* Show deducted points */}
        {showDeductedPoints && (
          <motion.div
            className="text-red-500 text-lg ml-2"
            animate={{
              opacity: showDeductedPoints ? 1 : 0,
              y: [0, -10, 0], // Slight bounce effect for deducted points
            }}
            transition={{ duration: 0.5 }}
          >
            -5
          </motion.div>
        )}
      </div>
    </div>
  );
});

export default PointsManager;
