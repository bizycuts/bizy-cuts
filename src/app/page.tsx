import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg w-full overflow-x-clip selection:bg-brand-red selection:text-brand-white">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Team />
      <Footer />
    </main>
  );
}
