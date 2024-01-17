import Footer from "@/components/global-components/footer";
import FullwidthParagraphWithImageOnLeft from "@/components/global-components/fullwidth-paragraph-with-Image-on-left";
import ParagraphWithImageOnTheLeft from "@/components/global-components/paragraph-with-image-on-the-left";
import TestimonialsCarousel from "@/components/global-components/testimonial-carousel";
import CounterSection from "@/components/main-page/counter-section";
import HeroSection from "@/components/main-page/hero-section";
import ProjectsSection from "@/components/main-page/projects-section";
import { TeamSection } from "@/components/organizacja-page/team-section";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CounterSection />
      <ProjectsSection />

      <ParagraphWithImageOnTheLeft title="Superwizja" img="documents.png">
        Superwizja pracy socjalnej to szczególny, wieloaspektowy ogląd pracy
        służący rozwiązaniu trudności merytorycznych i emocjonalnych związanych
        z wykonywaniem pracy. Poszukujesz superwizora, metodyka lub szkoleniowca
        w obszarze pracy socjalnej i pomocy społecznej? Znajdziesz go u nas! W
        naszej bazie znajduje się obecnie 54 certyfikowanych superwizorów pracy
        socjalnej oraz 35 metodyków i szkoleniowców w obszarze pracy socjalnej.
      </ParagraphWithImageOnTheLeft>
      {/* <TeamSection /> */}
      {/* <TestimonialsCarousel /> */}
    </div>
  );
}
