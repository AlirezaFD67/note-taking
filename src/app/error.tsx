"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("خطای غیرمنتظره:", error);
  }, [error]);

  return (
    <div className="text-center p-12 text-red-500">
      <h1>🚨 خطای غیرمنتظره!</h1>
      <p>مشکلی رخ داده است. لطفاً دوباره تلاش کنید.</p>
      <button onClick={() => reset()}   className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
        تلاش مجدد
      </button>
    </div>
  );
}
