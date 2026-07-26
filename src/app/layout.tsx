import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZA | Network Engineer",

  description:
    "Portfolio of Zyad Abdulftah, Electronics & Communications Engineering student passionate about Enterprise Networking, Cisco Technologies, Telecommunications, and Network Security.",

  keywords: [
    "Network Engineer",
    "Cisco",
    "CCNA",
    "Networking",
    "Telecommunications",
    "GNS3",
    "Packet Tracer",
    "Network Security",
    "Portfolio",
  ],

  authors: [{ name: "Zyad Abdulftah" }],
  creator: "Zyad Abdulftah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}