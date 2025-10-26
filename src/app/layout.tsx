import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollAnimations from "@/components/ScrollAnimations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nishal.dev"),
  title: "Nishal - Creative Developer & Visual Storyteller",
  description: "Crafting code, visuals & stories from Kerala to the world. Full-stack developer, UI/UX designer, and video editor based in Malappuram.",
  keywords: ["Nishal", "Portfolio", "Developer", "Kerala", "Malappuram", "Web Development", "UI/UX", "Video Editing"],
  authors: [{ name: "Nishal" }],
  creator: "Nishal",
  openGraph: {
    title: "Nishal - Creative Developer & Visual Storyteller",
    description: "Crafting code, visuals & stories from Kerala to the world",
    url: "https://nishal.dev",
    siteName: "Nishal Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nishal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishal - Creative Developer & Visual Storyteller",
    description: "Crafting code, visuals & stories from Kerala to the world",
    images: ["/og-image.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
