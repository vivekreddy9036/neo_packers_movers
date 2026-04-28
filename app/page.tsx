import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Metrics } from "@/components/sections/Metrics";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Industries } from "@/components/sections/Industries";
import { FAQ } from "@/components/sections/FAQ";
import { LeadForm } from "@/components/sections/LeadForm";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-canvas">
        <Hero />
        <TrustBar />
        <Services />
        <Metrics />
        <WhyChooseUs />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Industries />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
