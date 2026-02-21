"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface LoadingContextType {
  hasVisited: boolean;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [hasVisited, setHasVisited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const visited = sessionStorage.getItem("hasVisited");

    if (visited) {
      // Returning user → skip loader
      setHasVisited(true);
      setIsLoading(false);
    } else {
      // First visit → show loader
      setHasVisited(false);
      setIsLoading(true);
    }
  }, []);

  return (
    <LoadingContext.Provider value={{ hasVisited, isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
}
