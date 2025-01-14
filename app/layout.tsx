import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://artedge.vercel.app/"),
  title: "Artech Edge Security and Cleaning Services",
  description:
    "Artech Edge Security and Cleaning Services is a leading provider of security and cleaning services in Ethiopia.",
  keywords:
    "security, cleaning, janitorial, professional development, guarding, surveillance, cleaning supplies, training, security uniforms, PPE, facility management, Ethiopia services",
  authors: [{ name: "Artech Edge" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://artedge.vercel.app/",
    siteName: "Artech Edge Security and Cleaning Services",
    images: [
      {
        url: "https://artedge.vercel.app/services/security_service.jpg",
        width: 1200,
        height: 630,
        alt: "Artech Edge Security and Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artech Edge Security and Cleaning Services",
    description:
      "Artech Edge Security and Cleaning Services is a leading provider of security and cleaning services in Ethiopia.",
    images: ["https://artedge.vercel.app/services/security_service.jpg"],
  },
  themeColor: "#0863b2",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
