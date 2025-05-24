
"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Navbar } from "./Navbar"; // Can use the main Navbar or a specific DashboardNavbar
import { Footer } from "./Footer"; // Can use the main Footer or a specific DashboardFooter
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/signin?redirect=/dashboard");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner size={48} />
      </div>
    );
  }

  if (!user) {
    // This case should ideally be handled by the useEffect redirect,
    // but as a fallback, prevent rendering children.
    return null; 
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar /> {/* Or a dedicated DashboardNavbar */}
      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer /> {/* Or a dedicated DashboardFooter */}
    </div>
  );
}
