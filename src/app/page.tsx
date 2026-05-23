import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import SectionDivider from "@/components/SectionDivider";
import ExpandableCards from "@/components/ExpandableCards";
import EckdatenSection from "@/components/EckdatenSection";
import EventInfoSection from "@/components/EventInfoSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <IntroSection />
      <SectionDivider />
      <ExpandableCards />
      <SectionDivider />
      <EckdatenSection />
      <EventInfoSection />
      <Footer />
    </main>
  );
}
