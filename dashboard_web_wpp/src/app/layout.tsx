import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DashboardWebApp",
  description: "Dashboard for you E-commerce business  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='dark:text-black dark:bg-white duration-300 ease-in-out transition' ><Navbar/>{children}</body>
    </html>
  );
}
