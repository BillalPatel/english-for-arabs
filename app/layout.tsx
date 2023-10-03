import { Kumbh_Sans } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "English for Arabs",
  description: "A website to help Arabs natives learn English.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={kumbhSans.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
