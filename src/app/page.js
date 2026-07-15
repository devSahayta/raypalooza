import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Journey from "@/components/Journey";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Events from "@/components/Events";
import MarketingPartnerships from "@/components/MarketingPartnerships";
import Testimonials from "@/components/Testimonials";
import BookEvent from "@/components/BookEvent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Journey />
        <WhatWeDo />
        <Events />
        <MarketingPartnerships />
        <WhyChooseUs />
        <Testimonials />
        <BookEvent />
      </main>
      <Footer />
    </>
  );
}
