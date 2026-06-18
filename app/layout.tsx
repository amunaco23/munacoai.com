import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MunacoAI — Find the bottlenecks. Fix them with AI.",
  description:
    "Experienced product and technology operator who helps businesses identify, prioritize, and implement practical AI solutions that create measurable business value.",
  openGraph: {
    title: "MunacoAI — Find the bottlenecks. Fix them with AI.",
    description:
      "One-on-one AI consulting focused on identifying opportunities, reducing manual work, and implementing practical AI solutions inside your business.",
    url: "https://munacoai.com",
    siteName: "MunacoAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MunacoAI — Find the bottlenecks. Fix them with AI.",
    description:
      "One-on-one AI consulting focused on identifying opportunities, reducing manual work, and implementing practical AI solutions inside your business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-[#060606] text-white">{children}</body>
    </html>
  );
}
