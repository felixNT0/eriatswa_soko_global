import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-9xl font-display font-black text-primary mb-4">404</h1>
      <h2 className="text-3xl font-bold uppercase mb-6">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        href="/"
        className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 uppercase font-bold tracking-widest hover:bg-primary transition-colors"
      >
        <ArrowLeft size={16} /> Return Home
      </Link>
    </div>
  );
}
