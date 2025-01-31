import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.artedgesecurityandcleaning.com"),
  title: "Art Edge Trading PLC - Security, Cleaning & Training Services",
  description:
    "Art Edge Trading PLC, established in 2021, is a leading provider of security, cleaning, skill enhancement, and material supply services in Ethiopia. We specialize in armed and unarmed security personnel, janitorial services, training programs, and cleaning equipment supply.",
  keywords:
    "security services, cleaning services, facility management, skill training, material supply, guarding, surveillance, janitorial, PPE, security uniforms, Ethiopia, Addis Ababa",
  authors: [{ name: "Art Edge Trading PLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.artedgesecurityandcleaning.com",
    siteName: "Art Edge Trading PLC",
    images: [
      {
        url: "https://www.artedgesecurityandcleaning.com/artedgelogo.jpg",
        width: 1200,
        height: 630,
        alt: "Art Edge Trading PLC - Security & Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Art Edge Trading PLC - Security & Cleaning Services",
    description:
      "Art Edge Trading PLC offers top-tier security, cleaning, and training services in Ethiopia, ensuring safety, hygiene, and skill development.",
    images: ["https://www.artedgesecurityandcleaning.com/artedgelogo.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta
          name="google-site-verification"
          content="Cqz7vb2pBilwmVi2GmmIJZtA662R9kjTkC63uoq8KTM"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
