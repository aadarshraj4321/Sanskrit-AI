import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-6 sm:py-8 shadow-lg border-t border-gray-700">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            {/* Centered "SanskritAI" Text */}
            <h2 className="text-3xl sm:text-4xl font-semibold text-yellow-400">
              संस्कृतAI
            </h2>
            <p className="mt-1 text-sm sm:text-base text-gray-300">
              Unlock the wisdom of Sanskrit with AI-powered tools.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-400">
            <p>&copy; 2024 SanskritAI. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition duration-300">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
