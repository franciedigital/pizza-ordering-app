import Image from "next/image";
import Navbar from "@/components/navbar";
import ProductGrid from "@/components/products";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      <div className="flex-grow">
        <Navbar />
        <Hero />
        <ProductGrid />
      </div>

      <Footer />
    </main>
  );
}
