import AdvancedFeaturesSection from "./pages/AdvancedFeaturesSection";
import AIAgentLanding from "./pages/AIAgentLanding";
import { BackgroundPattern } from "./pages/BackgroundPattern";
import ContactSection from "./pages/ContactSection";
import CRMFeaturesSection from "./pages/CRMFeaturesSection";
import { FAQSection } from "./pages/FAQSection";
import { FooterSection } from "./pages/FooterSection";
import { HeaderNavbar } from "./pages/HeaderNavbar";
import { PlasgosCRMHero } from "./pages/PlasgosCRMHero";
import PricingSection from "./pages/PricingSection";
import { ProblemsSection } from "./pages/ProblemsSection";
import { SolutionsSection } from "./pages/SolutionsSection";
import { StepsSection } from "./pages/StepsSection";

export const App = () => {
  return (
    <div className="flex flex-col w-full min-h-screen snap-y snap-mandatory scroll-smooth">
      <BackgroundPattern />
      <HeaderNavbar />
      <div className="flex flex-col gap-y-10">
        <div id="hero">
          <PlasgosCRMHero />
        </div>
        <ProblemsSection />
        <div id="solutions">
          <SolutionsSection />
        </div>
        <StepsSection />
        <AIAgentLanding />
        <CRMFeaturesSection />
        <div id="features">
          <AdvancedFeaturesSection />
        </div>
        <ContactSection />
        <div id="pricing">
          <PricingSection />
        </div>
        <FAQSection />
        <FooterSection />
      </div>
    </div>
  );
};
