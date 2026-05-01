import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Industries } from "@/components/sections/Industries";
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
