import Navbar from "../components/Navbar";
import Hero from "../components/about/Hero";
import CoreValues from "../components/about/CoreValues";
import Milestone from "../components/about/Milestone";
import CTASection from "../components/about/CTASection";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <CoreValues />
            <Milestone />
            {/* <CTASection /> */}
            <Footer />
        </div>
    );
}
