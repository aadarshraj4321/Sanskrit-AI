// LessonCard.js
"use client";

import { motion } from "framer-motion";

const LessonCard = ({ lesson }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 + lesson.id * 0.1 }}
      className="bg-purple-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
    >
      <h4 className="text-xl font-semibold text-white">{lesson.title}</h4>
      <p className="text-gray-300 mt-2">{lesson.status}</p>
      <button className="mt-4 px-6 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-400 transition-all duration-200">
        Start Lesson
      </button>
    </motion.div>
  );
};

export default LessonCard;
