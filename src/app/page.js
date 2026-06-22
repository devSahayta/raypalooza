import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import OurServices from "@/components/OurServices";
import Gallery from "@/components/Gallery";
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
        <OurServices />
        <Gallery />
        <Testimonials />
        <BookEvent />
      </main>
      <Footer />
    </>
  );
}
