import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Base3 — Comunicação, Marketing e Eventos",
  description:
    "Agência Base3 especializada em branding, marketing, eventos e estratégias que geram impacto real.",

  openGraph: {
    title: "Base3 — Comunicação, Marketing e Eventos",
    description:
      "Transformamos estratégias em presença de marca com criatividade, dados e execução completa.",
    url: "https://corporate-site-nextjs-two.vercel.app/",
    siteName: "Base3",
    images: [
      {
        url: "/og-base3.png",
        width: 1200,
        height: 630,
        alt: "Base3 Agência",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Base3 — Comunicação, Marketing e Eventos",
    description:
      "Branding, marketing e eventos com estratégia e execução completa.",
    images: ["/og-base3.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
