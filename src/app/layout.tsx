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

export const metadata: Metadata = {
  metadataBase: new URL("https://corporate-site-nextjs-two.vercel.app"),

  title: {
    default: "Base3 — Comunicação, Marketing e Eventos",
    template: "%s | Base3",
  },

  description:
    "Agência Base3 especializada em branding, marketing, eventos e estratégias que geram impacto real.",

  keywords: [
    "agência de marketing",
    "branding",
    "eventos corporativos",
    "comunicação",
    "marketing digital",
  ],

  authors: [{ name: "Base3" }],
  creator: "Base3",

  openGraph: {
    title: "Base3 — Comunicação, Marketing e Eventos",
    description:
      "Transformamos estratégias em presença de marca com criatividade, dados e execução completa.",
    url: "https://corporate-site-nextjs-two.vercel.app",
    siteName: "Base3",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-base3.png",
        width: 1200,
        height: 630,
        alt: "Base3 Agência",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Base3 — Comunicação, Marketing e Eventos",
    description:
      "Agência especializada em branding, marketing e eventos corporativos.",
    images: ["/og-base3.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
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
