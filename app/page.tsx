import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import CompanySection from "./components/CompanySection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <StatsSection />
      <CompanySection />
    </div>
  );
}
