import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Categories from "@/components/sections/Categories";
import FeaturedListings from "@/components/sections/FeaturedListings";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import FaqPreview from "@/components/sections/FaqPreview";
import Newsletter from "@/components/sections/Newsletter";
import CallToAction from "@/components/sections/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Categories />
      <FeaturedListings />
      <Stats />
      <Testimonials />
      <FaqPreview />
      <Newsletter />
      <CallToAction />
    </>
  );
}
