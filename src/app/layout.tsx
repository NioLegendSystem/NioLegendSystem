import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/layout/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neo Legend System",
  description: "Transform your digital business with Neo Legend System's innovative service platform",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
