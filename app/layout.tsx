import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
  preload: false,
});

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sushi-hayate.vercel.app"),
  title: "鮨 颯 | 島根の旬を握る本格鮨",
  description:
    "島根県松江市の完全予約制本格鮨。旬の魚介を使ったおまかせコースと、職人の手仕事をカウンター8席でお楽しみください。",
  openGraph: {
    title: "鮨 颯 | 島根の旬を握る本格鮨",
    description:
      "島根県松江市の完全予約制本格鮨。旬の魚介を使ったおまかせコースと、職人の手仕事をカウンター8席でお楽しみください。",
    url: "https://sushi-hayate.vercel.app",
    siteName: "鮨 颯",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "鮨 颯 — 島根の旬を握る本格鮨",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "鮨 颯 | 島根の旬を握る本格鮨",
    description:
      "島根県松江市の完全予約制本格鮨。旬の魚介を使ったおまかせコースと、職人の手仕事をカウンター8席でお楽しみください。",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable}`}
    >
      <body className="bg-[#0c0b09] text-[#f0ebe0] font-serif antialiased">
        {children}
      </body>
    </html>
  );
}
