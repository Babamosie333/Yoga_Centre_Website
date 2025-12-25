"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="min-h-screen bg-[#FDFBF7] text-[#4A4A4A] flex items-center justify-center p-4 font-serif">
        <div className="max-w-md w-full text-center space-y-6 bg-white p-12 rounded-2xl shadow-sm border border-[#E8E1D5]">
          <h1 className="text-3xl font-light text-[#2D3E33]">
            Something went wrong
          </h1>
          <p className="text-[#6B705C] font-sans">
            We apologize for the inconvenience. A structural misalignment has occurred in our digital space.
          </p>
          <button
            onClick={() => reset()}
            className="w-full bg-[#2D3E33] text-white py-4 rounded-xl hover:bg-[#1a2620] transition-all uppercase tracking-widest text-xs font-bold font-sans"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
