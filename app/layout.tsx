import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "SafeBites",
  description: "Your Safety, Our Priority",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-linear-to-b from-[#f6f6f6] to-[#fafafa] flex flex-col pb-20 p-4">
        <Header/>
        {children}
        <BottomNav/>
        </body>
    </html>
  );
}
