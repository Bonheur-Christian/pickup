import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar  from "@/components/custom/SideBar";
import { DashboardHeader } from "@/components/custom/DashboardHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pickup",
  description: "Pickup platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-auto bg-gray-50 ">
              <DashboardHeader />
              <main className="px-10">{children}</main>
            </div>
          </div>
      </body>
    </html>
  );
}
