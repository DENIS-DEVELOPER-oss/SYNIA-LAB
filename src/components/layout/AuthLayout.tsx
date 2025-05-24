
import type { ReactNode } from "react";
import { Logo } from "@/components/shared/Logo";

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted p-4">
      <div className="mb-8">
        <Logo />
      </div>
      <div className="w-full max-w-md rounded-lg border bg-background p-6 shadow-lg sm:p-8">
        {children}
      </div>
       <p className="mt-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} SYNIA LAB. Todos los derechos reservados.
      </p>
    </div>
  );
}
