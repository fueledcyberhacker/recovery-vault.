import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Recovery Vault", description: "Secure SaaS for asset recovery operations" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
