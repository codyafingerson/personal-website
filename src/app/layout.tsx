import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cody Fingerson | Software Developer",
    description: "Cody Fingerson's personal portfolio - software developer specializing in modern web technologies. Explore projects, code samples, and interactive development tools.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${roboto.variable} ${robotoMono.variable} antialiased`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
