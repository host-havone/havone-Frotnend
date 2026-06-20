import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 bg-background">
      <div className="text-center max-w-md">
        <p className="font-label-tech text-label-tech text-secondary uppercase tracking-widest mb-4">
          Error 404
        </p>
        <h1 className="font-h1 text-h1 text-primary mb-4">Page Not Found</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-on-primary px-8 py-3 font-label-tech text-label-tech uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
