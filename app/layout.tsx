import { Montserrat, Noto_Sans_Arabic } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600"],
});
const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400"],
});

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
    <html
      lang="en"
      className={`${montserrat.className} bg-offWhite text-black`}
    >
      <body className={"mx-6 md:mx-20 lg:mx-20"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
