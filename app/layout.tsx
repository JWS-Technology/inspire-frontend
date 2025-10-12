import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css"; // ✅ works fine now
import keywords from "./seo/home-keywords.json";

/* === Google Fonts (optimized) === */
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* === SITE CONSTANTS === */
const siteUrl = "https://www.inspiresoftechgroup.com";
const siteName = "Inspire Softech Group";
const siteDescription =
  "Inspire Softech Group of Companies — Empowering Growth through Knowledge & Technology. Bringing together Inspire Softech Solutions, Edinz Tech Pvt. Ltd., Adore Technology Solutions, and Igrean StarTech Solutions under one umbrella.";

/* === METADATA === */
export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
  keywords,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Inspire Softech Group of Companies",
    description:
      "A unified digital platform for Inspire Softech Solutions, Edinz Tech Pvt. Ltd., Adore Technology Solutions, and Igrean StarTech Solutions. Delivering training, IT solutions, enterprise services, and emerging technology innovations.",
    url: siteUrl,
    siteName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Inspire Softech Group of Companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspire Softech Group of Companies",
    description:
      "Empowering Growth through Knowledge & Technology — Inspire Softech Solutions, Edinz Tech Pvt. Ltd., Adore Technology Solutions & Igrean StarTech Solutions.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@inspiresoftech",
    site: "@inspiresoftech",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ffffff",
};

/* === ROOT LAYOUT === */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD Structured Data for Google (Organization schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteName,
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              sameAs: [
                "https://www.linkedin.com/company/inspire-softech",
                "https://twitter.com/inspiresoftech",
                "https://www.instagram.com/inspiresoftech",
                "https://www.facebook.com/inspiresoftech",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
