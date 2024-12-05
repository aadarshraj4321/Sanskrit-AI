import React from 'react';
import Link from 'next/link'; // Importing the Link component from Next.js

const NotCompletePopup = ({ onClose }) => {
    return (
        <div className="popup-container fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="popup-content bg-transparent p-8 rounded-xl shadow-2xl w-96">
                <h2 className="text-3xl font-semibold text-center text-gray-800">Try Again!</h2>
                <p className="text-lg text-center text-gray-600 mt-2">Your score is below 20. Please try again.</p>

                <div className="flex flex-col gap-6 mt-8">
                    {/* Button 1: Back to learning */}
                    <Link href="/dashboard/learning">
                        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full shadow-md transform transition-all duration-300 hover:scale-105 w-full">
                            Back to Learning
                        </button>
                    </Link>

                    {/* Button 2: Explore Gita */}
                    <Link href="/dashboard/gita">
                        <button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-medium py-3 px-6 rounded-full shadow-md transform transition-all duration-300 hover:scale-105 w-full">
                            Explore Gita
                        </button>
                    </Link>
                </div>

                {/* Close button */}
                {/* <button 
                    onClick={onClose} 
                    className="mt-6 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-medium py-3 px-6 rounded-full shadow-md transform transition-all duration-300 hover:scale-105 w-full"
                >
                    Close
                </button> */}
            </div>
        </div>
    );
};

export default NotCompletePopup;
