// import SpotlightOpportunitiesSection from "./home/SpotlightOpportunitiesSection";
import FAQSection from "./home/FAQSection";
import JobDomainsSection from "./home/JobDomainsSection ";
import JobPortalHero from "./home/JobPortalHero ";
import ModernHiringSection from "./home/ModernHiringSection";
import SkillsSection from "./home/SkillsSection ";
import JobOpportunitiesSection from "./home/SpotlightOpportunitiesSection";
import SpreadsFeatures from "./home/SpreadsFeatures";
import SpreadsHeroSection from "./home/SpreadsHeroSection";
import SpreadsNetworkSection from "./home/SpreadsNetworkSection";
import TalentSpeaksSection from "./home/TalentSpeaksSection";
import TestimonialsSection from "./home/TestimonialsSection ";
import VoicesFromCircleSection from "./home/VoicesFromCircleSection";
import WhyJoinSpreadsSection from "./home/WhyJoinSpreadsSection";
import FuelYourCareer from "./home/FuelYourCareer";
import WhyChooseUs from "./home/WhyChooseUs";
import DigitalHomeSection from "./home/DigitalHomeSection";
import Services from "./home/Services";
import Footer from "./footer/Footer";
export default function Home() {
  return (
    <div className="bg-[#F8F9FF]">
      {/* <TalentSpeaksSection /> */}
      {/* <WhyJoinSpreadsSection /> */}
      {/* <VoicesFromCircleSection /> */}
      {/* <SpotlightOpportunitiesSection /> */}
      {/* <JobOpportunitiesSection /> */}
      {/* <SpreadsNetworkSection /> */}
      <SpreadsHeroSection />
      <DigitalHomeSection />
      {/* <SpreadsFeatures /> */}
      <TestimonialsSection />

      <JobDomainsSection />
      <FuelYourCareer />
      <WhyChooseUs />
      <Services />
      <JobPortalHero />
      <Footer />

      {/* ------------ */}
    </div>
  );
}
