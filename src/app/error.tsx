"use client";

import { ArrowLeft, RefreshCw } from "lucide-react";
import { useEffect } from "react";

export default function Error({
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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-display font-black text-primary mb-4">Oops!</h1>
      <h2 className="text-2xl font-bold uppercase mb-6">Something went wrong</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        We encountered an error while loading this page. Please try again.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 uppercase font-bold tracking-widest hover:bg-primary/80 transition-colors"
        >
          <RefreshCw size={16} /> Try Again
        </button>
        <a 
            href="/"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 uppercase font-bold tracking-widest hover:bg-white/10 transition-colors"
        >
            <ArrowLeft size={16} /> Go Home
        </a>
      </div>
    </div>
  );
}
