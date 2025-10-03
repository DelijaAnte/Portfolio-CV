import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageToggle } from "@/components/LanguageToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ante Delija | Portfolio",
  description: "Portfolio Ante Delija",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <div className="fixed top-4 right-4 z-50">
          <LanguageToggle />
        </div>
        <div className="fixed inset-0 w-full h-full z-10">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover object-center"
          >
            <source src="/bgvid.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 backdrop-blur-sm"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
