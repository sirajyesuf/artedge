import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://artedgesecurityandcleaning.com"),
  title: "ArtEdge Security and Cleaning Services",
  description:
    "ArtEdge Trading is a leading provider of security and cleaning services in Ethiopia.",
  keywords:
    "security, cleaning, janitorial, professional development, guarding, surveillance, cleaning supplies, training, security uniforms, PPE, facility management,Ethiopia,AddisAbaba",
  authors: [{ name: "ArtEdge" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://artedgesecurityandcleaning.com",
    siteName: "ArtEdge Security and Cleaning Services",
    images: [
      {
        url: "https://artedgesecurityandcleaning.com/artedgelogo.jpg",
        width: 1200,
        height: 630,
        alt: "ArtEdge Security and Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ArtEdge Security and Cleaning Services",
    description:
      "ArtEdge Trading is a leading provider of security and cleaning services in Ethiopia.",
    images: ["https://artedgesecurityandcleaning.com/artedgelogo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Cqz7vb2pBilwmVi2GmmIJZtA662R9kjTkC63uoq8KTM"
        />
      </head>
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
