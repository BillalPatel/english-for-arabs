import { Montserrat } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aal-Imran Quran Academy",
  description: "Islamic School.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.className} bg-offWhite text-black`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
