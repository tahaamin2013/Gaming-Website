"use client";

import React, { useEffect, useState } from "react";
// import Loader from "../components/Loader";

export default function Loading({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
  d
    </div>
  );
}
