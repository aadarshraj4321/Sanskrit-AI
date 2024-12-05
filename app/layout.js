import React from 'react';
import './globals.css'; 
import { ClerkProvider } from '@clerk/nextjs';
import Provider from './provider';
import { Analytics } from '@vercel/analytics/next';




export const metadata = {
  title: 'SanskritAI', 
  description: 'SanskritAI is a platform designed to help you learn Sanskrit with the power of AI. It also offers support for students dealing with depression and distraction, provides Bhagavad Gita knowledge, facilitates anonymous conversations, and features a collection of Hindi and Sanskrit stories.',
};


export default function RootLayout({ children }) {

  const frontendAPI = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <html lang="en"> 
        
        <body className="flex flex-col min-h-screen bg-gray-100">
          
          <Provider>
            { children }
          </Provider>    
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
