"use client";
import ProjectCard from "../project-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronLeftSquare, ChevronRight } from "lucide-react";
import TestimonialCard from "../testimonial-card";
import SectionTitle from "../section-title";

export default function TestimonialCarousel() {
  const settings = {
    // dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: (
      // <div className="w-24 h-24">
      //   <svg
      //     xmlns="http://www.w3.org/2000/svg"
      //     width="24"
      //     height="24"
      //     viewBox="0 0 24 24"
      //     fill="none"
      //     stroke="#1cabe2"
      //     strokeWidth="4"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //     className="lucide lucide-chevron-left"
      //   >
      //     <path d="m9 24-12-12 12-12" />
      //   </svg>
      // </div>
      <img
        width="60"
        height="60"
        src="https://img.icons8.com/ios-glyphs/60/chevron-left.png"
        alt="chevron-left"
      />
    ),
    nextArrow: (
      // <div className="w-32 bg-primaryBlue text-darkBlue">
      //   <svg
      //     xmlns="http://www.w3.org/2000/svg"
      //     width="24"
      //     height="24"
      //     viewBox="0 0 24 24"
      //     fill="none"
      //     stroke="#1cabe2"
      //     strokeWidth="4"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //     className="lucide lucide-chevron-right"
      //   >
      //     <path d="m9 24 12-12-12-12" />
      //   </svg>
      // </div>
      <img
        width="60"
        height="60"
        src="https://img.icons8.com/ios-glyphs/60/chevron-right.png"
        alt="chevron-right"
      />
    ),
  };
  return (
    <section className="bg-white py-10">
      <Slider {...settings} className="">
        <TestimonialCard
          name="Beata Kisiel"
          title="Pracowniczka socjalna"
          img="/Beata-Kisiel.jpg"
        >
          Superwizja pracy socjalnej to dla mnie cenne narzędzie. Podczas
          spotkań superwizyjnych mam poczucie wsparcia, zespołowej „burzy
          mózgów” i szukania rozwiązań. Czuję się bezpieczna wiedząc, że nie
          będę oceniana ani krytykowana za dotychczasowe działania podejmowane w
          ramach pracy z rodzinami. Uczestnictwo w tych spotkaniach pozwala na
          zdobycie wiedzy poprzez naukę na konkretnych przykładach. Ważne jest
          to, że z każdego spotkania wychodzę z propozycjami nowych rozwiązań,
          co ułatwia mi dalszą pracę.
        </TestimonialCard>
        <TestimonialCard
          name="Małgorzata Aleksandrowicz"
          title="Dyrektorka Centrum Usług Społecznych w Myślenicach"
          img="/Malgorzata-Aleksandrowicz.jpg"
        >
          W kalendarzu naszego ośrodka, superwizja dla pracowników socjalnych,
          asystentów rodziny i kadry zarządzającej od lat zajmuje stałe i ważne
          miejsce. Dla mnie to czas refleksji nad omawianą sytuacją, czas na
          ujawnienie własnych uczuć, sformułowanie oczekiwań i impuls do
          zaplanowania dalszych działań, realizacji celów, wdrażania zmian. Ta
          istotna forma wsparcia jest narzędziem doskonalenia naszych
          kompetencji zawodowych, pozyskiwania wiedzy i umiejętności,
          umożliwiającym wymianę doświadczeń oraz budowanie relacji w grupie.
        </TestimonialCard>
        <TestimonialCard
          name="Dr hab. Jerzy Krzyszkowski"
          title="Prof. UJD"
          img="/Jerzy-Krzyszkowski.jpg"
        >
          Superwizja jest ważnym narzędziem zarządzania zasobami ludzkimi w
          jednostkach organizacyjnych pomocy społecznej. Może ona istotnie
          ułatwić, pomóc w zmianie stylu kierowania poprzez m.in. zwiększenie
          partycypacji pracowników w zarządzaniu, tworzenie zespołów zadaniowych
          czy uelastycznienie struktur organizacyjnych.
        </TestimonialCard>
        <TestimonialCard
          name="Ewa Błędowska"
          title="kierowniczka Działu Pomocy Środowiskowej MOPS w Wodzisławiu Śl."
          img="/Ewa-Bledowska.jpg"
        >
          Superwizja to niewątpliwie zwiększanie samoświadomości w pracy
          zawodowej lecz nie tylko – dla mnie to także rozwój samej siebie,
          możliwość przeanalizowania własnych postępowań, działań, zachowań.
          Mówiąc krótko – superwizuj się a otworzysz przed sobą nowe ścieżki.
        </TestimonialCard>
        {/* <TestimonialCard />
        <TestimonialCard /> */}
      </Slider>
    </section>
  );
}
