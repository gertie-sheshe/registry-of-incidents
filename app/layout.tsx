import type { Metadata } from "next";
import { EB_Garamond, Source_Sans_3, Space_Mono } from "next/font/google";

import BottomTabBar from "@/components/layout/BottomTabBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FOOTER_COPY } from "@/lib/constants";

import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Registry of Unresolved Community Incidents",
  description: `${FOOTER_COPY.institutionName}, ${FOOTER_COPY.address}. ${FOOTER_COPY.founded}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${sourceSans3.variable} ${spaceMono.variable}`}
    >
      <body className="bg-cream antialiased">
        <div className="hidden lg:block">
          <SiteHeader />
        </div>
        <main className="pb-[4.75rem] lg:pb-0">{children}</main>
        <div className="hidden lg:block">
          <SiteFooter />
        </div>
        <div className="block lg:hidden">
          <BottomTabBar />
        </div>
      </body>
    </html>
  );
}
