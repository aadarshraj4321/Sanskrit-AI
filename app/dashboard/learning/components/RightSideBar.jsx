// // RightSidebar.jsx
// const RightSidebar = ({ facts }) => {
//     return (
//       // <aside className="w-1/5 bg-gradient-to-br from-gray-800 to-purple-900 p-6 text-center flex flex-col items-center border-l border-gray-700">
//       <aside className="w-1/5 bg-gradient-to-r from-slate-900 to-slate-700 p-6 text-center flex flex-col items-center border-l border-gray-700">
//         <h2 className="text-xl font-semibold text-pink-200 mb-8">Did You Know?</h2>
//         <div className="space-y-6">
//           {facts.map((fact, idx) => (
//             <div key={idx} className="flex flex-col items-center text-center bg-gradient-to-br from-gray-800 to-purple-900 rounded-lg p-5 shadow-lg">
//               <img src={fact.image} alt="Sanskrit Fact" className="w-28 h-28 rounded-full mb-3 object-cover border-2 border-pink-300" />
//               <p className="text-md text-gray-100">{fact.text}</p>
//             </div>
//           ))}
//         </div>
//       </aside>
//     );
//   };
  
//   export default RightSidebar;
  








// import Image from 'next/image'; // Use Next.js Image component for optimization

// const RightSidebar = ({ facts }) => {
//     return (
//         <aside className="w-full lg:w-1/5 bg-gradient-to-r from-slate-900 to-slate-700 p-6 text-center flex flex-col items-center border-l border-gray-700">
//             <h2 className="text-xl font-semibold text-pink-200 mb-8">Did You Know?</h2>
//             <div className="space-y-6">
//                 {facts.map((fact, idx) => (
//                     <div key={idx} className="flex flex-col items-center text-center bg-gradient-to-br from-gray-800 to-purple-900 rounded-lg p-5 shadow-lg">
//                         {/* Use Image component for optimized images */}
//                         <Image 
//                             src={fact.image} 
//                             alt={`Sanskrit Fact ${idx + 1}`} 
//                             width={112} 
//                             height={112} 
//                             className="rounded-full mb-3 object-cover border-2 border-pink-200" 
//                             loading="lazy" // Enable lazy loading for performance
//                         />
//                         <p className="text-md text-gray-100">{fact.text}</p>
//                     </div>
//                 ))}
//             </div>
//         </aside>
//     );
// };

// export default RightSidebar;














import Image from 'next/image'; // Use Next.js Image component for optimization

const RightSidebar = ({ facts }) => {
    return (
        <aside className="w-full lg:w-1/5 xl:w-1/4 2xl:w-1/5 bg-gradient-to-r from-slate-900 to-slate-700 p-6 text-center flex flex-col items-center border-l border-gray-700">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-pink-200 mb-8">Did You Know?</h2>
            <div className="space-y-6">
                {facts.map((fact, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center bg-gradient-to-br from-gray-800 to-purple-900 rounded-lg p-5 shadow-lg">
                        {/* Use Image component for optimized images */}
                        <Image 
                            src={fact.image} 
                            alt={`Sanskrit Fact ${idx + 1}`} 
                            width={112} 
                            height={112} 
                            className="rounded-full mb-3 object-cover border-2 border-pink-200" 
                            loading="lazy" // Enable lazy loading for performance
                        />
                        <p className="text-sm sm:text-md lg:text-lg text-gray-100">{fact.text}</p>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default RightSidebar;
