import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "INSPIRE SOFTECH Group of Companies",
  description:
    "INSPIRE SOFTECH Group of Companies – Empowering Growth through Knowledge & Technology. Bringing together Inspire Softech Solutions, Edinz Tech Pvt. Ltd., Adore Technology Solutions, and Igrean StarTech Solutions under one umbrella.",
  keywords: [
    "Inspire Softech",
    "Edinz Tech",
    "Adore Technology",
    "Igrean StarTech",
    "AICTE Internships",
    "Skill Development",
    "Web Development",
    "Enterprise Solutions",
    "AI and IoT",
    "Cloud Technology",
    "Data Science",
    "IT Consulting",
  ],
  authors: [{ name: "INSPIRE SOFTECH Group of Companies" }],
  creator: "INSPIRE SOFTECH Group",
  publisher: "INSPIRE SOFTECH Group",
  openGraph: {
    title: "INSPIRE SOFTECH Group of Companies",
    description:
      "A unified digital platform for Inspire Softech Solutions, Edinz Tech Pvt. Ltd., Adore Technology Solutions, and Igrean StarTech Solutions. Delivering training, IT solutions, enterprise services, and emerging technology innovations.",
    url: "https://www.inspiresoftechgroup.com",
    siteName: "INSPIRE SOFTECH Group",
    images: [
      {
        url: "/og-image.jpg", // Replace with actual OG image in public/
        width: 1200,
        height: 630,
        alt: "INSPIRE SOFTECH Group of Companies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INSPIRE SOFTECH Group of Companies",
    description:
      "Empowering Growth through Knowledge & Technology – Inspire Softech Solutions, Edinz Tech Pvt. Ltd., Adore Technology Solutions & Igrean StarTech Solutions.",
    images: ["/og-image.jpg"], // Replace with actual image
    creator: "@inspiresoftech", // If you have a Twitter handle
  },
  alternates: {
    canonical: "https://www.inspiresoftechgroup.com",
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
        // use .variable (or .className) — don't use the font object itself
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
