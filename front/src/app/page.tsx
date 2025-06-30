import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Section1 from "@/components/Section1/Section1";
import Section2 from "@/components/Section2/Section2";
import Section3 from "@/components/Section3/Section3";
import Footer from "@/components/Footer/Footer";
import Section4 from "@/components/Section4/Section4";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </main>
  );
}
