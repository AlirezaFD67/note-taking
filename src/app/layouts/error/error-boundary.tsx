"use client";
import { useEffect } from "react";
import ErrorLayout from "./layout";

interface ErrorBoundaryProps {
  error: Error;
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error("Client-side error:", error);
  }, [error]);

  return (
    <ErrorLayout>
      <p className="text-gray-600">متأسفیم، مشکلی در سیستم رخ داده است.</p>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        تلاش مجدد
      </button>
    </ErrorLayout>
  );
}
