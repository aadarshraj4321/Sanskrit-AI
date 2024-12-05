"use client";

import { useState, useEffect } from "react";

const QuizSection = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track current question
  const [answered, setAnswered] = useState(false); // To track if the user has answered the question
  const [feedback, setFeedback] = useState(""); // To show feedback (Correct / Incorrect)

  // Fetch quiz data when component mounts
  useEffect(() => {
    fetch('/data/quiz/lesson1Quiz.json')
      .then(response => response.json())
      .then(data => setQuizData(data.quiz))
      .catch(error => console.error('Error loading quiz data:', error));
  }, []);

  // Handle the selected answer
  const handleAnswer = (quizItem, option) => {
    if (option === quizItem.correctAnswer) {
      setFeedback("Correct");
    } else {
      setFeedback("Oops! Try again.");
    }
    setAnswered(true); // Mark as answered
  };

  // Move to the next question
  const goToNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Go to next question
      setAnswered(false); // Reset answered state for the next question
      setFeedback(""); // Reset feedback
    } else {
      setFeedback("You've completed the quiz");
    }
  };

  // Ensure quizData and currentQuestion exist before rendering
  if (!quizData.length) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full mx-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Quiz: Lesson 1</h2>
          <p>Loading quiz data...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex]; // Get current question

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full mx-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Quiz: Lesson 1</h2>

        {/* Display current question */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-800 mb-4">{currentQuestion.question}</p>
          
          {/* Display the symbol */}
          <div className="mb-4">
            <p className="text-4xl text-center text-black">{currentQuestion.symbol}</p>
          </div>

          {/* Display options */}
          <div className="flex flex-col gap-4">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                className="text-lg py-3 px-5 bg-purple-800 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none transition-all transform hover:scale-105"
                onClick={() => handleAnswer(currentQuestion, option)}
                disabled={answered} // Disable options after answering
              >
                {option}
              </button>
            ))}
          </div>

          {/* Show feedback after answer */}
          {answered && (
            <div className="mt-4 text-center">
              <p className={`text-xl font-semibold ${feedback.includes("Correct") ? "text-green-600" : "text-red-600"}`}>
                {feedback}
              </p>
              {/* Display Next Button after answering */}
              <button
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                onClick={goToNextQuestion}
              >
                {currentQuestionIndex < quizData.length - 1 ? "Next Question" : "Finish Quiz"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
