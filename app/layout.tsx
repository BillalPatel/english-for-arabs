import { Kumbh_Sans } from "next/font/google";

import "./globals.css";
import type { Metadata } from "next";

import { Navbar } from "./components/Navbar";

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
    <html lang="en">
      <body className={kumbhSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
