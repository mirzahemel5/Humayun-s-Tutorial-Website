// src/app/layout.tsx
import type { Metadata } from "next";
// Import popular, modern font pairs from Google via Next.js
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Body Font (Modern, Tech, Glass OS feel)
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

// Serif Accent Font for the main titles (Replicates image style)
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: '--font-playfair' 
});

export const metadata: Metadata = {
  title: "Humayun's Tutorial",
  description: "Ultra-modern educational platform for skill development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // We apply both font variables to the HTML tag
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}