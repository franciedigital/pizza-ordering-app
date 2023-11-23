import Image from "next/image";
import Navbar from "@/components/navbar";
import ProductGrid from "@/components/products";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Feature from "@/components/feature";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen mb-12 ">
      <div className="flex-grow">
        <Navbar />
        <Hero />
        <Feature />
        <ProductGrid />
      </div>

      <Footer />
    </main>
  );
}
