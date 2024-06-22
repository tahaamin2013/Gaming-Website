"use client";
import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import animationData from "@/loader.json";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const lottieContainerRef = useRef(null);

  useEffect(() => {
    const container = lottieContainerRef.current;

    if (container) {
      const anim = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      });

      return () => {
        anim.destroy();
      };
    }
  }, []);
  useEffect(() => {
    // Simulating loading with setTimeout
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className="flex justify-center items-center h-screen w-screen">
          <h1 className="text-3xl flex justify-center items-center w-screen h-screen flex-col text-center font-bold">
            <div
              ref={lottieContainerRef}
              style={{ width: "35%", height: "35%" }}
            />
            <div className="flex">
              Loading...
            </div>
          </h1>
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
