import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Chun-Yi Kuo",
    description: "This is Chun-Yi Kuo's Portfolio",
    keywords: [
        "Chun-Yi Kuo",
        "Portfolio",
        "Web Developer",
        "Software Engineer",
        "Full Stack Developer",
    ],
    authors: [{ name: "Chun-Yi Kuo" }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="corporate">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Navbar />
                <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                    {children}
                </div>
            </body>
        </html>
    );
}
