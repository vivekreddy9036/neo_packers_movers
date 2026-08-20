import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { PastWork } from "@/components/sections/PastWork";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { TypesOfServices } from "@/components/sections/TypesOfServices";
import { LeadForm } from "@/components/sections/LeadForm";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { FloatingFAQ } from "@/components/FloatingFAQ";
import { PageLoader } from "@/components/PageLoader";

export default function HomePage() {
  return (
    <>
      <PageLoader />
      <Header />
      <main className="bg-canvas">
        <Hero />
        <TrustBar />
        <WhyChooseUs />
        <Services />
        <TypesOfServices />
        <PastWork />
        <Process />
        <Industries />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
      <StickyCTA />
      <FloatingFAQ />
    </>
  );
}
