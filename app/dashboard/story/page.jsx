"use client"

import { useEffect } from 'react';
import { motion } from 'framer-motion'; // for animations
import Link from 'next/link'; // Import Next.js Link for navigation

const StoryPage = () => {
  // Use useEffect for any page setup (like animations or data fetch)
  useEffect(() => {
    document.title = 'Story Page - Work in Progress';
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-800 to-purple-500">
      {/* Centered Header */}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <motion.h1
          className="text-white text-4xl sm:text-6xl font-bold text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Work in Progress
        </motion.h1>

        {/* Back Button */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Link href="/dashboard" passHref>
            <button
              className="text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg px-6 py-3 text-lg font-medium transition-all"
            >
              Back to Home
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Animated Content */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white"
        initial={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <p className="text-lg sm:text-xl font-semibold">
          This page is under construction. Stay tuned for something amazing!
        </p>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white text-sm">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          &copy; 2024 SanskritAI
        </motion.p>
      </div>
    </div>
  );
};

export default StoryPage;
