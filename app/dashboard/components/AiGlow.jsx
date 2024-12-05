import React from 'react';

export default function GlowingCircle() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-8 h-8 bg-white rounded-full animate-glow"></div>

      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 255, 255, 1), 0 0 50px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.6);
          }
          100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4);
          }
        }

        .animate-glow {
          animation: pulse 1s infinite, glow 1s infinite;
        }
      `}</style>
    </div>
  );
}
