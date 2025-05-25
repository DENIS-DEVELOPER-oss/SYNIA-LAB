
import Link from "next/link";
import type { SVGProps } from "react";
import { SITE_NAME } from "@/lib/constants"; // Import SITE_NAME

// Adjusted SVG logo for better visibility on light backgrounds.
function SyniaLabIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 20"
      width="100"
      height="20"
      aria-hidden="true"
      {...props}
    >
      {/* First rect uses primary color */}
      <rect width="20" height="20" rx="4" fill="hsl(var(--primary))" /> 
      {/* Second rect remains accent */}
      <rect x="25" width="20" height="20" rx="4" fill="hsl(var(--accent))" />
      {/* Third rect uses a muted color for contrast on light bg */}
      <rect x="50" width="20" height="20" rx="4" fill="hsl(var(--muted))" />
    </svg>
  );
}


export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label={`${SITE_NAME} Home`}>
       <SyniaLabIcon className="h-8 w-auto text-primary transition-transform group-hover:scale-105" />
      <span className="text-2xl font-bold text-primary group-hover:opacity-80 transition-opacity">
        {SITE_NAME}
      </span>
    </Link>
  );
}
