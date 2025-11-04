// import HeroSection from "@/components/HeroSection";
// import CategorySection from "@/components/CategorySection";
// import FeaturedProducts from "@/components/FeaturedProducts";
// import AboutSection from "@/components/AboutSection";

import AboutSection from "@/features/homepage/about";
import CategorySection from "@/features/homepage/category";
import FeaturedProducts from "@/features/homepage/featured";
import HeroSection from "@/features/homepage/hero";

export default function HomePage() {
  return (
    <main className="bg-white text-black font-manrope">
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <AboutSection />
    </main>
  );
}
