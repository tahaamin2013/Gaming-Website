// "use client"
// import React, { useEffect, useRef, useState } from "react";
// import lottie, { AnimationItem } from "lottie-web";
// import animationData from "./loader.json";

// export default function Loader({ children }: { children: React.ReactNode }) {
//   const [loading, setLoading] = useState(true);
//   const lottieContainerRef = useRef<HTMLDivElement>(null);
//   const animationInstance = useRef<AnimationItem | null>(null);

//   useEffect(() => {
//     const container = lottieContainerRef.current;

//     if (container) {
//       animationInstance.current = lottie.loadAnimation({
//         container,
//         renderer: "svg",
//         loop: true,
//         autoplay: true,
//         animationData,
//       });

//       // Adjust animation speed (default is 1)
//       // Increase the value to make the animation faster
//       // For example, setting speed 2 will double the speed
//       if (animationInstance.current) {
//         animationInstance.current.setSpeed(2); // Adjust speed as needed
//       }

//       return () => {
//         if (animationInstance.current) {
//           animationInstance.current.destroy();
//         }
//       };
//     }
//   }, []);

//   useEffect(() => {
//     // Simulating loading with setTimeout
//     const timeoutId = setTimeout(() => {
//       setLoading(false);
//     }, 2000); // Adjust the time as needed

//     // Clear the timeout to prevent memory leaks
//     return () => clearTimeout(timeoutId);
//   }, []);

//   return (
//     <div className="">
//       {loading ? (
//         <div className="flex justify-center items-center h-screen w-screen">
//           <h1 className="text-3xl flex justify-center items-center w-screen h-screen flex-col text-center font-bold">
//             <div ref={lottieContainerRef} className="w-[240px] h-[240px]" />

//             <div className="flex">Loading...</div>
//           </h1>
//         </div>
//       ) : (
//         <>{children}</>
//       )}
//     </div>
//   );
// }
