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
  title: "Top Auto | Uvoz proverenih automobila iz Evrope",
  description: "Uvozimo proverene automobile sa zatvorenih evropskih licitacija. Prave kilometraže od prvog vlasnika, kompletna papirologija, preuzimanje u Beogradu.",
  openGraph: {
    title: "Top Auto | Uvoz proverenih automobila iz Evrope",
    description: "Uvozimo proverene automobile sa zatvorenih evropskih licitacija u Nemačkoj, Holandiji, Belgiji, Francuskoj, Španiji i Italiji.",
    url: "https://topautouvoz.com",
    siteName: "Top Auto",
    locale: "sr_RS",
    type: "website",
    images: [{ url: "https://topautouvoz.com/og-image.jpg", width: 1200, height: 1200 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
