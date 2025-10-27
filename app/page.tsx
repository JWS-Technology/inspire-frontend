import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import CompanySection from "../components/CompanySection";
import Footer from "../components/Footer";
// import MarqueeRows from "../components/MarqueeRows"
import ClientSection from "@/components/home/ClientSection";
import WorkSection from "@/components/careers/WorkSection";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      {/* <MarqueeRows /> */}
      <ClientSection />
      <AboutSection />
      <StatsSection />
      <CompanySection />
      <WorkSection />
      <Footer />
    </div>
  );
}
