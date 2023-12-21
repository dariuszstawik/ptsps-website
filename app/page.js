import FullwidthParagraphWithImageOnLeft from "@/components/global-components/fullwidth-paragraph-with-Image-on-left";
import CounterSection from "@/components/main-page/counter-section";
import HeroSection from "@/components/main-page/hero-section";
import ProjectsSection from "@/components/main-page/projects-section";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CounterSection />
      <ProjectsSection />
      <FullwidthParagraphWithImageOnLeft />
    </div>
  );
}
