import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bizy Cuts | Precision. Style. Confidence.",
  description: "High-end luxury salon for confident individuals. Specializing in precision haircuts, grooming, and luxury styling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased selection:bg-brand-red selection:text-white overflow-x-clip`}>
        {children}
      </body>
    </html>
  );
}
