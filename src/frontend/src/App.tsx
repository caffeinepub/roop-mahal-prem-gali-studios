import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import BTSSection from "./components/BTSSection";
import ContactSection from "./components/ContactSection";
import DirectorsSection from "./components/DirectorsSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import WorkSection from "./components/WorkSection";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-foreground">
      <Toaster theme="dark" position="top-right" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <DirectorsSection />
        <ServicesSection />
        <AchievementsSection />
        <BTSSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
