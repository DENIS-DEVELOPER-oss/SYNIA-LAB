
import type { ReactNode } from "react";
import { AuthLayout } from "@/components/layout/AuthLayout";

export default function AuthenticationPagesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
