import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PortfolioPreview />
      <Footer />
    </main>
  );
};

export default Index;
