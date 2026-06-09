import Header from "./components/Header";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Access from "./components/Access";
import ReservationCTA from "./components/ReservationCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Menu />
        <Gallery />
        <Access />
        <ReservationCTA />
      </main>
      <Footer />
    </>
  );
}
