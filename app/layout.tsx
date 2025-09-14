import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Athina & Shinku - Engagement Announcement",
  description:
    "With joy in our hearts, we invite you to celebrate the engagement of Athina and Shinku. Join us for an evening of love, laughter, and cherished moments as we begin our journey together. Save the date: October 25, 2025.",
  openGraph: {
    title: "Athina & Shinku - Engagement Announcement",
    description:
      "With joy in our hearts, we invite you to celebrate the engagement of Athina and Shinku. Join us for an evening of love, laughter, and cherished moments as we begin our journey together.",
    images: [
      {
        url: "https://i.postimg.cc/nLpcv3Zj/Shinku-Kuruvila-Athina-Elsa-Sunny.png",
        width: 1200,
        height: 630,
        alt: "Athina and Shinku Engagement Announcement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athina & Shinku - Engagement Announcement",
    description: "Join us in celebrating our engagement - October 25, 2025",
    images: [
      "https://i.postimg.cc/nLpcv3Zj/Shinku-Kuruvila-Athina-Elsa-Sunny.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
