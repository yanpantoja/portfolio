import type { Metadata } from "next";
import { IBM_Plex_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
});

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "yan@dev ~ portfolio",
  description:
    "Full Stack Developer with 8+ years of experience. Shopify Developer, Laravel & PHP expert.",
  keywords: [
    "Full Stack Developer",
    "Shopify Developer",
    "Laravel",
    "PHP",
    "Magento 2",
    "E-commerce",
  ],
  authors: [{ name: "Yan Pantoja" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "yan@dev ~ portfolio",
    description:
      "Full Stack Developer with 8+ years of experience. Shopify Developer.",
    siteName: "Yan Pantoja Portfolio",
  },
  other: {
    "theme-color": "#0a0a0a",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${pixelifySans.variable}`} suppressHydrationWarning>
      <body className={ibmPlexMono.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
