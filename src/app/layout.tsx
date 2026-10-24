import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/lib/components/navbar";
import Footer from "@/lib/components/footer";
import Reveal from "@/lib/components/reveal";
import { site } from "@/lib/site";
const display = localFont({
  src: "../../public/fonts/chewy.ttf",
  variable: "--font-display",
  display: "swap",
});
const body = localFont({
  src: [
    {
      path: "../../public/fonts/nunito-sans-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/nunito-sans-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Lori Pirone | Cute Little Caterpillar",
    template: "%s | Lori Pirone",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: "Lori Pirone | Cute Little Caterpillar",
    description: site.description,
    images: [
      {
        url: "/images/book-cover.webp",
        width: 600,
        height: 597,
        alt: "Cute Little Caterpillar by Lori Pirone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cute Little Caterpillar by Lori Pirone",
    description: site.description,
    images: ["/images/book-cover.webp"],
  },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${display.variable} ${body.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
