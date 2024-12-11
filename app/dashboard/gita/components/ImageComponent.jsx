// "use client";

// import React from "react";
// import Image from "next/image";

// const ImageComponent = ({ image }) => {
//   return (
//     <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-md mb-6">
//       <Image
//         src={image}
//         alt="Verse image"
//         layout="fill"
//         objectFit="cover"
//         className="rounded-lg"
//       />
//     </div>
//   );
// };

// export default ImageComponent;
















// "use client";

// import React from "react";
// import Image from "next/image";

// const ImageComponent = ({ image }) => {
//   return (
//     <div className="relative w-full max-w-xl mx-auto h-96 rounded-lg overflow-hidden shadow-lg mb-6">
//       <Image
//         src={image}
//         alt="Verse image"
//         layout="intrinsic" // Ensures the image keeps its aspect ratio
//         width={800} // Increase the width to make the image larger
//         height={600} // Increase the height for a larger image
//         objectFit="contain" // Ensures the image fits inside the container without cropping
//         className="rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
//       />
//     </div>
//   );
// };

// export default ImageComponent;





















// "use client";

// import React from "react";
// import Image from "next/image";

// const ImageComponent = ({ image }) => {
//   return (
//     <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg mb-6">
//       <Image
//         src={image}
//         alt="Verse image"
//         layout="fill" // Ensures the image fills the container
//         objectFit="cover" // Ensures the image covers the container without distorting the aspect ratio
//         className="rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
//       />
//     </div>
//   );
// };

// export default ImageComponent;


















// "use client";

// import React from "react";
// import Image from "next/image";

// const ImageComponent = ({ image }) => {
//   return (
//     <div className="relative w-full h-full max-h-[90vh] rounded-lg overflow-hidden shadow-md mb-6">
//       <Image
//         src={image}
//         alt="Verse image"
//         layout="fill" // Ensures the image fills the container
//         objectFit="contain" // Ensures the image fits inside the container without cropping
//         className="rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
//       />
//     </div>
//   );
// };

// export default ImageComponent;










"use client";

import React from "react";
import Image from "next/image";

const ImageComponent = ({ image }) => {
  return (
    <div className="relative w-full h-full max-h-[90vh] rounded-lg overflow-hidden shadow-lg mb-6 group">
      <Image
        src={image}
        alt="Verse image"
        layout="fill"
        objectFit="cover"
        className="rounded-xl transition-transform duration-700 ease-out transform group-hover:scale-105 group-hover:shadow-2xl group-hover:rounded-3xl"
      />
      {/* Animated overlay for a sleek effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>
    </div>
  );
};

export default ImageComponent;




