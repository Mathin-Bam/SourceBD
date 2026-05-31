import type { Metadata } from "next";
import { DM_Sans, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/providers/app-providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DemoBanner } from "@/components/layout/demo-banner";
import { PLATFORM_NAME, PLATFORM_TAGLINE } from "@/lib/tokens";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${PLATFORM_NAME} - ${PLATFORM_TAGLINE}`,
    template: `%s | ${PLATFORM_NAME}`,
  },
  description: "Bangladesh's premier B2B sourcing platform connecting global buyers with verified manufacturers. Source RMG, leather, jute, pharmaceuticals, and more.",
  keywords: ["B2B sourcing", "Bangladesh", "RMG", "textiles", "leather", "jute", "pharmaceuticals", "manufacturers", "export"],
  authors: [{ name: PLATFORM_NAME }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "bn_BD",
    siteName: PLATFORM_NAME,
    title: `${PLATFORM_NAME} - ${PLATFORM_TAGLINE}`,
    description: "Connect with 2,500+ verified suppliers across textiles, leather, jute, pharmaceuticals, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${hindSiliguri.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <AppProviders>
          <DemoBanner />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}