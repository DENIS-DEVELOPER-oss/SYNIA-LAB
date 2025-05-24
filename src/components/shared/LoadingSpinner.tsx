
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

export function LoadingSpinner({ size = 24, className }: LoadingSpinnerProps) {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      <Loader2 className={cn("animate-spin text-primary", `h-${Math.floor(size/4)} w-${Math.floor(size/4)}`)} style={{ height: `${size}px`, width: `${size}px` }} />
    </div>
  );
}
