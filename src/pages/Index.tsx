import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ModulesCarousel from "@/components/landing/ModulesCarousel";
import RoleCategoryExplorer from "@/components/landing/RoleCategoryExplorer";
import FeatureJobDiscovery from "@/components/landing/FeatureJobDiscovery";
import FeatureCommunity from "@/components/landing/FeatureCommunity";
import MessagingSection from "@/components/landing/MessagingSection";
import EcosystemOverview from "@/components/landing/EcosystemOverview";
import OrganizationsSection from "@/components/landing/OrganizationsSection";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ModulesCarousel />
      <RoleCategoryExplorer />
      <FeatureJobDiscovery />
      <FeatureCommunity />
      <MessagingSection />
      <EcosystemOverview />
      <OrganizationsSection />
      <Testimonials />
      <FinalCTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
