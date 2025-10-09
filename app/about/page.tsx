import Navbar from "../../components/Navbar";
import Hero from "../../components/about/Hero";
import CoreValues from "../../components/about/CoreValues";
import Milestone from "../../components/about/Milestone";
// import CTASection from "../components/about/CTASection";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

import keywords from "../seo/about-keywords.json";

export const metadata: Metadata = {
    title: "About — INSPIRE SOFTECH Group | Training, Internships & IT Solutions",
    description:
        "INSPIRE SOFTECH Group — Learn about our mission, values, companies (Inspire Softech Solutions, Edinz Tech, Adore Technology, Igrean StarTech) and our AICTE-approved internships & training programs.",
    keywords,
    alternates: { canonical: "https://www.inspiresoftechgroup.com/about" },
    openGraph: {
        title: "About — INSPIRE SOFTECH Group",
        description:
            "Learn about INSPIRE SOFTECH Group, our mission, companies, and internship & training offerings.",
        url: "https://www.inspiresoftechgroup.com/about",
        siteName: "INSPIRE SOFTECH Group",
        images: [
            {
                url: "/og-about.jpg",
                width: 1200,
                height: 630,
                alt: "INSPIRE SOFTECH About",
            },
        ],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "About — INSPIRE SOFTECH Group",
        description:
            "Learn about INSPIRE SOFTECH Group, our mission and internship programs.",
        images: ["/og-about.jpg"],
        creator: "@inspiresoftech",
    },
};
export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <CoreValues />
                <Milestone />
                {/* <CTASection /> */}
            </main>
            <Footer />
        </>
    );
}
