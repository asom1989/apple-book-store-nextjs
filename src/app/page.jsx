import Faq from "@/components/faq";
import { Filter } from "@/components/Filter";
import Hero from "@/components/Hero";
import MobileGallery from "@/components/MobileGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <MobileGallery />
      <Filter />
      <Faq />
    </>
  );
}
