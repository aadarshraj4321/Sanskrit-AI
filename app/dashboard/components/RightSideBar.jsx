// import React, { useState } from 'react';
// import { FaUserAlt, FaUserSecret } from 'react-icons/fa'; // Import icons for sender and receiver

// const RightSideBar = () => {
//   const [message, setMessage] = useState("");
//   const [messagesList, setMessagesList] = useState([]);
//   const [isContentVisible, setIsContentVisible] = useState(false); // State to toggle visibility of the content

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       setMessagesList([...messagesList, { text: message, isUser: true }]);
//       setMessage(""); // clear message input after sending
//     }
//   };

//   const toggleContentVisibility = () => {
//     setIsContentVisible(!isContentVisible); // Toggle the visibility state
//   };

//   return (
//     <aside className="w-full lg:max-w-[250px] min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 p-8 border-l border-gray-700 flex flex-col items-center space-y-6">
//       <h2 className="text-md font-semibold text-green-300 text-center">Chat With Anonymous Person</h2>

//       {/* Button to toggle the content visibility */}
//       <button
//         onClick={toggleContentVisibility}
//         className="bg-gray-600 text-white py-2 px-4 rounded-lg mb-4 transition duration-300 transform hover:bg-gray-500"
//       >
//         {isContentVisible ? 'Hide Chat' : 'Show Chat'}
//       </button>



//       {/* Chat area */}
//       {isContentVisible && (
        
//         <div className="w-full flex flex-col space-y-4 bg-gray-800 p-4 rounded-lg shadow-lg">
//                     <p className="text-sm text-gray-400 text-center mb-4">Share your thoughts freely, problems. Everything deletes automatically after each chat.</p>

//           <div className="h-64 overflow-y-auto bg-gray-700 p-4 rounded-lg space-y-2">
//             {messagesList.length === 0 ? (
//               <p className="text-gray-400 text-center">Start a conversation...</p>
//             ) : (
//               messagesList.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`flex items-start ${msg.isUser ? 'flex-row-reverse' : ''} space-x-2`}
//                 >
//                   <div className={`p-2 rounded-full ${msg.isUser ? 'bg-green-600' : 'bg-gray-600'} text-white`}>
//                     {msg.isUser ? <FaUserAlt size={20} /> : <FaUserSecret size={20} />}
//                   </div>
//                   <div
//                     className={`text-sm p-2 rounded-md ${msg.isUser ? "bg-green-600 text-white text-right" : "bg-gray-600 text-white"}`}
//                   >
//                     {msg.text}
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Input area for writing messages */}
//           <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2 mt-4">

//             <textarea
//               className="w-full p-3 bg-gray-700 text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300"
//               rows="3"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Share what's on your mind..."
//             />
//             <button
//               onClick={handleSendMessage}
//               className="p-3 bg-green-600 rounded-lg text-white hover:bg-green-500 transition duration-300 transform hover:scale-110 mt-4 sm:mt-0"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Anonymous Chat Section */}
//       <div className="w-full mt-4 text-center">
//         <p className="text-gray-400 text-sm">
//           Your conversation is completely anonymous. We are not storing any conversation!
//         </p>
//       </div>
//     </aside>
//   );
// };

// export default RightSideBar;


















// import React, { useState } from 'react';
// import { FaUserAlt, FaUserSecret } from 'react-icons/fa'; // Import icons for sender and receiver

// const RightSideBar = () => {
//   const [message, setMessage] = useState("");
//   const [messagesList, setMessagesList] = useState([]);
//   const [isContentVisible, setIsContentVisible] = useState(false); // State to toggle visibility of the content

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       setMessagesList((prevMessages) => [...prevMessages, { text: message, isUser: true }]);
//       setMessage(""); // clear message input after sending
//     }
//   };

//   const toggleContentVisibility = () => {
//     setIsContentVisible(!isContentVisible); // Toggle the visibility state
//   };

//   return (
//     <aside className="w-full lg:max-w-[250px] min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 p-8 border-l border-gray-700 flex flex-col items-center space-y-6">
//       <h2 className="text-md font-semibold text-green-300 text-center">Chat With Anonymous Person</h2>

//       {/* Button to toggle the content visibility */}
//       <button
//         onClick={toggleContentVisibility}
//         className="bg-gray-600 text-white py-2 px-4 rounded-lg mb-4 transition duration-300 transform hover:bg-gray-500"
//       >
//         {isContentVisible ? 'Hide Chat' : 'Show Chat'}
//       </button>

//       {/* Chat area */}
//       {isContentVisible && (
//         <div className="w-full flex flex-col space-y-4 bg-gray-800 p-4 rounded-lg shadow-lg">
//           <p className="text-sm text-gray-400 text-center mb-4">
//             Share your thoughts freely Everything deletes automatically after each chat.
//           </p>

//           <div className="h-64 overflow-y-auto bg-gray-700 p-4 rounded-lg space-y-2">
//             {messagesList.length === 0 ? (
//               <p className="text-gray-400 text-center">Start a conversation...</p>
//             ) : (
//               messagesList.map((msg, index) => (
//                 <div key={index} className={`flex items-start ${msg.isUser ? 'flex-row-reverse' : ''} space-x-2`}>
//                   <div className={`p-2 rounded-full ${msg.isUser ? 'bg-green-600' : 'bg-gray-600'} text-white`}>
//                     {msg.isUser ? <FaUserAlt size={20} /> : <FaUserSecret size={20} />}
//                   </div>
//                   <div
//                     className={`text-sm p-2 rounded-md ${msg.isUser ? "bg-green-600 text-white text-right" : "bg-gray-600 text-white"}`}
//                   >
//                     {msg.text}
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Input area for writing messages */}
//           <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2 mt-4">
//             <textarea
//               className="w-full p-3 bg-gray-700 text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300"
//               rows="3"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Share what's on your mind..."
//             />
//             <button
//               onClick={handleSendMessage}
//               className="p-3 bg-green-600 rounded-lg text-white hover:bg-green-500 transition duration-300 transform hover:scale-110 mt-4 sm:mt-0"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Anonymous Chat Section */}
//       <div className="w-full mt-4 text-center">
//         <p className="text-gray-400 text-sm">
//           Your conversation is completely anonymous. We are not storing any conversation!
//         </p>
//       </div>
//     </aside>
//   );
// };

// export default RightSideBar;












// import React, { useState } from 'react';
// import { FaUserAlt, FaUserSecret } from 'react-icons/fa'; // Import icons for sender and receiver

// const RightSideBar = () => {
//   const [message, setMessage] = useState("");
//   const [messagesList, setMessagesList] = useState([]);
//   const [isContentVisible, setIsContentVisible] = useState(false); // State to toggle visibility of the content

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       setMessagesList((prevMessages) => [...prevMessages, { text: message, isUser: true }]);
//       setMessage(""); // clear message input after sending
//     }
//   };

//   const toggleContentVisibility = () => {
//     setIsContentVisible(!isContentVisible); // Toggle the visibility state
//   };

//   return (
//     <aside className="w-full lg:max-w-[250px] min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 p-8 border-l border-gray-700 flex flex-col items-center space-y-6">
//       <h2 className="text-md font-semibold text-purple-100 text-center">Chat With Anonymous Person</h2>

//       {/* Button to toggle the content visibility */}
//       <button
//         onClick={toggleContentVisibility}
//         className="bg-gray-600 text-white py-2 px-4 rounded-lg mb-4 transition duration-300 transform hover:bg-gray-500"
//       >
//         {isContentVisible ? 'Hide Chat' : 'Show Chat'}
//       </button>

//       {/* Chat area */}
//       {isContentVisible && (
//         <div className="w-full flex flex-col space-y-4 bg-gray-800 p-4 rounded-lg shadow-lg">
//           <p className="text-sm text-gray-400 text-center mb-4">
//             Share your thoughts freely Everything deletes automatically after each chat.
//           </p>

//           {/* Commenting out the chat message area */}
//           {/* <div className="h-64 overflow-y-auto bg-gray-700 p-4 rounded-lg space-y-2">
//             {messagesList.length === 0 ? (
//               <p className="text-gray-400 text-center">Start a conversation...</p>
//             ) : (
//               messagesList.map((msg, index) => (
//                 <div key={index} className={`flex items-start ${msg.isUser ? 'flex-row-reverse' : ''} space-x-2`}>
//                   <div className={`p-2 rounded-full ${msg.isUser ? 'bg-green-600' : 'bg-gray-600'} text-white`}>
//                     {msg.isUser ? <FaUserAlt size={20} /> : <FaUserSecret size={20} />}
//                   </div>
//                   <div
//                     className={`text-sm p-2 rounded-md ${msg.isUser ? "bg-green-600 text-white text-right" : "bg-gray-600 text-white"}`}
//                   >
//                     {msg.text}
//                   </div>
//                 </div>
//               ))
//             )}
//           </div> */}

//           {/* Commenting out the input area for writing messages */}
//           {/* <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2 mt-4">
//             <textarea
//               className="w-full p-3 bg-gray-700 text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300"
//               rows="3"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Share what's on your mind..."
//             />
//             <button
//               onClick={handleSendMessage}
//               className="p-3 bg-green-600 rounded-lg text-white hover:bg-green-500 transition duration-300 transform hover:scale-110 mt-4 sm:mt-0"
//             >
//               Send
//             </button>
//           </div> */}
//         </div>
//       )}

//       {/* Work in Progress Section */}
//       {!isContentVisible && (
//         <div className="w-full mt-4 text-center">
//           <p className="text-gray-400 text-sm">
//             Work in Progress...
//           </p>
//         </div>
//       )}

//       {/* Anonymous Chat Section */}
//       <div className="w-full mt-4 text-center">
//         <p className="text-gray-400 text-sm">
//           Your conversation is completely anonymous. We are not storing any conversation!
//         </p>
//       </div>
//     </aside>
//   );
// };

// export default RightSideBar;
















// import React, { useState } from 'react';
// import { FaUserAlt, FaUserSecret } from 'react-icons/fa'; // Import icons for sender and receiver

// const RightSideBar = () => {
//   const [message, setMessage] = useState("");
//   const [messagesList, setMessagesList] = useState([]);
//   const [isContentVisible, setIsContentVisible] = useState(false); // State to toggle visibility of the content

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       setMessagesList((prevMessages) => [...prevMessages, { text: message, isUser: true }]);
//       setMessage(""); // clear message input after sending
//     }
//   };

//   const toggleContentVisibility = () => {
//     setIsContentVisible(!isContentVisible); // Toggle the visibility state
//   };

//   return (
//     <aside className="w-full sm:max-w-[220px] lg:max-w-[200px] min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 p-8 border-l border-gray-700 flex flex-col items-center space-y-6">
//       <h2 className="text-md font-semibold text-purple-100 text-center">Chat With Anonymous Person</h2>

//       {/* Button to toggle the content visibility */}
//       <button
//         onClick={toggleContentVisibility}
//         className="bg-gray-600 text-white py-2 px-4 rounded-lg mb-4 transition duration-300 transform hover:bg-gray-500"
//       >
//         {isContentVisible ? 'Hide Chat' : 'Show Chat'}
//       </button>

//       {/* Chat area */}
//       {isContentVisible && (
//         <div className="w-full flex flex-col space-y-4 bg-gray-800 p-4 rounded-lg shadow-lg">
//           <p className="text-sm text-gray-400 text-center mb-4">
//             Share your thoughts freely Everything deletes automatically after each chat.
//           </p>

//           {/* Commenting out the chat message area */}
//           {/* <div className="h-64 overflow-y-auto bg-gray-700 p-4 rounded-lg space-y-2">
//             {messagesList.length === 0 ? (
//               <p className="text-gray-400 text-center">Start a conversation...</p>
//             ) : (
//               messagesList.map((msg, index) => (
//                 <div key={index} className={`flex items-start ${msg.isUser ? 'flex-row-reverse' : ''} space-x-2`}>
//                   <div className={`p-2 rounded-full ${msg.isUser ? 'bg-green-600' : 'bg-gray-600'} text-white`}>
//                     {msg.isUser ? <FaUserAlt size={20} /> : <FaUserSecret size={20} />}
//                   </div>
//                   <div
//                     className={`text-sm p-2 rounded-md ${msg.isUser ? "bg-green-600 text-white text-right" : "bg-gray-600 text-white"}`}
//                   >
//                     {msg.text}
//                   </div>
//                 </div>
//               ))
//             )}
//           </div> */}

//           {/* Commenting out the input area for writing messages */}
//           {/* <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2 mt-4">
//             <textarea
//               className="w-full p-3 bg-gray-700 text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300"
//               rows="3"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Share what's on your mind..."
//             />
//             <button
//               onClick={handleSendMessage}
//               className="p-3 bg-green-600 rounded-lg text-white hover:bg-green-500 transition duration-300 transform hover:scale-110 mt-4 sm:mt-0"
//             >
//               Send
//             </button>
//           </div> */}
//         </div>
//       )}

//       {/* Work in Progress Section */}
//       {!isContentVisible && (
//         <div className="w-full mt-4 text-center">
//           <p className="text-gray-400 text-sm">
//             Work in Progress...
//           </p>
//         </div>
//       )}

//       {/* Anonymous Chat Section */}
//       <div className="w-full mt-4 text-center">
//         <p className="text-gray-400 text-sm">
//           Your conversation is completely anonymous. We are not storing any conversation!
//         </p>
//       </div>
//     </aside>
//   );
// };

// export default RightSideBar;
























import React, { useState } from 'react';
import { FaUserAlt, FaUserSecret } from 'react-icons/fa'; // Import icons for sender and receiver

const RightSideBar = () => {
  const [message, setMessage] = useState("");
  const [messagesList, setMessagesList] = useState([]);
  const [isContentVisible, setIsContentVisible] = useState(false); // State to toggle visibility of the content

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessagesList((prevMessages) => [...prevMessages, { text: message, isUser: true }]);
      setMessage(""); // clear message input after sending
    }
  };

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible); // Toggle the visibility state
  };

  return (
    <aside className="w-full sm:max-w-[180px] lg:max-w-[160px] min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 p-8 flex flex-col items-center space-y-6">
      <h2 className="text-md font-semibold text-white text-center">Chat With Anonymous person</h2>

      {/* Button to toggle the content visibility */}
      {/* <button
        onClick={toggleContentVisibility}
        className="bg-gray-600 text-white py-2 px-4 rounded-lg mb-4 transition duration-300 transform hover:bg-gray-500"
      >
        {isContentVisible ? 'Hide Chat' : 'Show Chat'}
      </button> */}

    <button class="py-2 px-4 mb-4 bg-green-500 text-white font-bold rounded-lg shadow-[0_5px_0_theme(colors.slate.700)] hover:shadow-[0_2px_0_theme(colors.slate.700)] active:shadow-none hover:translate-y-1 active:translate-y-2 transition-all duration-150"
    onClick={toggleContentVisibility}>
      {isContentVisible ? 'Hide Chat' : 'Show Chat'}
      </button>

      {/* Chat area */}
      {isContentVisible && (
        <div className="w-full flex flex-col space-y-4 bg-gray-800 p-4 rounded-lg shadow-lg">
          <p className="text-sm text-gray-400 text-center mb-4">
            Share your thoughts freely Everything deletes automatically after each chat.
          </p>

          {/* Commenting out the chat message area */}
          {/* <div className="h-64 overflow-y-auto bg-gray-700 p-4 rounded-lg space-y-2">
            {messagesList.length === 0 ? (
              <p className="text-gray-400 text-center">Start a conversation...</p>
            ) : (
              messagesList.map((msg, index) => (
                <div key={index} className={`flex items-start ${msg.isUser ? 'flex-row-reverse' : ''} space-x-2`}>
                  <div className={`p-2 rounded-full ${msg.isUser ? 'bg-green-600' : 'bg-gray-600'} text-white`}>
                    {msg.isUser ? <FaUserAlt size={20} /> : <FaUserSecret size={20} />}
                  </div>
                  <div
                    className={`text-sm p-2 rounded-md ${msg.isUser ? "bg-green-600 text-white text-right" : "bg-gray-600 text-white"}`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}
          </div> */}

          {/* Commenting out the input area for writing messages */}
          {/* <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2 mt-4">
            <textarea
              className="w-full p-3 bg-gray-700 text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share what's on your mind..."
            />
            <button
              onClick={handleSendMessage}
              className="p-3 bg-green-600 rounded-lg text-white hover:bg-green-500 transition duration-300 transform hover:scale-110 mt-4 sm:mt-0"
            >
              Send
            </button>
          </div> */}
        </div>
      )}

      {/* Work in Progress Section */}
      {!isContentVisible && (
        <div className="w-full mt-4 text-center">
          <p className="text-gray-400 text-sm">
            Work in progress...
          </p>
        </div>
      )}

      {/* Anonymous Chat Section */}
      {/* <div className="w-full mt-4 text-center">
        <p className="text-gray-400 text-sm">
          Your conversation is completely anonymous. We are not storing any conversation!
        </p>
      </div> */}
    </aside>
  );
};

export default RightSideBar;
