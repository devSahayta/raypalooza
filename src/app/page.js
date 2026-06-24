import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Journey from "@/components/Journey";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Events from "@/components/Events";
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
        <WhyChooseUs />
        <Events />
        <BookEvent />
      </main>
      <Footer />
    </>
  );
}
