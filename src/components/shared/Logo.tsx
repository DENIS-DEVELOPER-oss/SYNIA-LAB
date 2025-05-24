
import Link from "next/link";
import type { SVGProps } from "react";

// Placeholder simple SVG logo. Replace with actual Synia Lab logo SVG if available.
function SyniaLabIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 20"
      width="100"
      height="20"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" rx="4" fill="hsl(var(--primary))" />
      <rect x="25" width="20" height="20" rx="4" fill="hsl(var(--accent))" />
      <rect x="50" width="20" height="20" rx="4" fill="hsl(var(--secondary))" />
    </svg>
  );
}


export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="SYNIA LAB Home">
       <SyniaLabIcon className="h-8 w-auto text-primary transition-colors group-hover:text-accent" />
      <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
        SYNIA LAB
      </span>
    </Link>
  );
}
