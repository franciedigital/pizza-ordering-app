import Image from "next/image";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import WhoWeAre from "@/components/whoWeAre";
import Feedback from "@/components/feedback";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Navbar />
        <Hero />
        <Feature />
        <Products />
        <WhoWeAre />
        <Feedback />
      </div>

      <Footer />
    </main>
  );
}
