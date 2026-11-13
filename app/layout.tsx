import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MunacoAI — Hire an AI operator.",
  description: "I'll find where AI fits in your business and build the solutions that save you time and money.",
  openGraph: {
    title: "MunacoAI — Hire an AI operator.",
    description: "I'll find where AI fits in your business and build the solutions that save you time and money.",
    url: "https://munacoai.com",
    siteName: "MunacoAI",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "MunacoAI — Hire an AI operator.",
    description: "I'll find where AI fits in your business and build the solutions that save you time and money.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
