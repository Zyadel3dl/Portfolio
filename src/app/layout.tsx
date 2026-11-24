import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const fullName = "Zyad Abdulftah El Adl";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${fullName} | Network Engineering Student`,
  description:
    "Portfolio of Zyad Abdulftah El Adl, fourth-year Electronics and Communications Engineering student at Mansoura University, focused on enterprise networking, infrastructure, and network security.",
  keywords: [
    "Network Engineering Student",
    "Cisco",
    "CCNA",
    "Routing and Switching",
    "GNS3",
    "Network Security",
    "Mansoura University",
    "Portfolio",
  ],
  authors: [{ name: fullName }],
  creator: fullName,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
