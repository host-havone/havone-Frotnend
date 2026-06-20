"use client";

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
    <div className="min-h-screen flex items-center justify-center px-8 bg-background">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-secondary text-3xl" aria-hidden="true">
            error_outline
          </span>
        </div>
        <h1 className="font-h2 text-h2 text-primary mb-4">Something went wrong</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="bg-primary text-on-primary px-8 py-3 font-label-tech text-label-tech uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
