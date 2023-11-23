import Image from "next/image";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import WhoWeAre from "@/components/whoWeAre";

export default function Home() {
  return (
    <main className="flex mx-auto flex-col min-h-screen mb-12 ">
      <div className="flex-grow">
        <Navbar />
        <Hero />
        <Feature />
        <Products />
        <WhoWeAre />
      </div>

      <Footer />
    </main>
  );
}
