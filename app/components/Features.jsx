import React from 'react';
import { FaCheckCircle, FaRegLightbulb, FaRocketchat } from 'react-icons/fa';

export default function Features() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">
          Our Amazing AI-Powered Features
        </h2>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="text-blue-500 text-4xl mb-4">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Instant Sanskrit Translation</h3>
            <p className="text-gray-600">
              Translate intricate Sanskrit texts instantly with AI-powered translation tools that uncover nuanced meanings.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="text-yellow-500 text-4xl mb-4">
              <FaRegLightbulb />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">AI-Powered Pronunciation Feedback</h3>
            <p className="text-gray-600">
              Master the art of pronunciation with real-time feedback using AI-powered voice recognition that helps you perfect every syllable.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="text-green-500 text-4xl mb-4">
              <FaRocketchat />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personalized Learning Paths</h3>
            <p className="text-gray-600">
              Learn Sanskrit at your own pace with AI-driven, personalized learning paths that adapt to your progress and learning style.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="text-blue-500 text-4xl mb-4">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Sanskrit Text Analysis</h3>
            <p className="text-gray-600">
              Deep dive into Sanskrit literature with AI tools that analyze and break down complex texts for better understanding and translation.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="text-yellow-500 text-4xl mb-4">
              <FaRegLightbulb />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Context-Aware AI Assistance</h3>
            <p className="text-gray-600">
              Get contextual translations and meanings, where AI understands the context of your text and provides accurate, relevant translations.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="text-green-500 text-4xl mb-4">
              <FaRocketchat />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Interactive AI Quizzes</h3>
            <p className="text-gray-600">
              Test your Sanskrit knowledge with interactive quizzes powered by AI that adapt to your strengths and help you improve continuously.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
