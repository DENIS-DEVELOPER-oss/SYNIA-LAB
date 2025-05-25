
import Link from "next/link";
import type { SVGProps } from "react";

// Adjusted SVG logo for better visibility on dark backgrounds.
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
      {/* First rect changed to primary-foreground */}
      <rect width="20" height="20" rx="4" fill="hsl(var(--primary-foreground))" /> 
      {/* Second rect remains accent */}
      <rect x="25" width="20" height="20" rx="4" fill="hsl(var(--accent))" />
      {/* Third rect changed to semi-transparent primary-foreground */}
      <rect x="50" width="20" height="20" rx="4" fill="hsla(var(--primary-foreground), 0.6)" />
    </svg>
  );
}


export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="SYNIA LAB Home">
       {/* Icon color will be white due to parent's text-primary-foreground and SVG's currentColor */}
       <SyniaLabIcon className="h-8 w-auto transition-colors group-hover:opacity-80" />
      <span className="text-2xl font-bold text-primary-foreground group-hover:opacity-80 transition-colors">
        SYNIA LAB
      </span>
    </Link>
  );
}

