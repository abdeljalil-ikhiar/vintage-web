import { ContactSection } from "@/components/contact-section";
import { CustomerFlowSection } from "@/components/customer-flow-section";
import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";
import { InfrastructureSection } from "@/components/infrastructure-section";
import { PlatformSection } from "@/components/platform-section";
import { SecuritySection } from "@/components/security-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FutureCapabilitiesSection } from "@/components/ai-assistant-section";

export default function Home() {
  return (
    <main id="top" className="page-shell">
      <SiteHeader />
      <HeroSection />
      <PlatformSection />
      <FeaturesSection />
      <SecuritySection />
      <InfrastructureSection />
      <CustomerFlowSection />
      <FutureCapabilitiesSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
