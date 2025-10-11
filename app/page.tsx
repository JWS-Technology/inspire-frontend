import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import CompanySection from "../components/CompanySection";
import Footer from "../components/Footer";
import MarqueeRows from "../components/MarqueeRows"
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MarqueeRows />
      <AboutSection />
      <StatsSection />
      <CompanySection />
      <Footer />
    </div>
  );
}
