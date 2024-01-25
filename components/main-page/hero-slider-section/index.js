import Button from "@/components/global-components/button";
import SectionTitle from "@/components/global-components/section-title";
import Link from "next/link";

export default function HeroSliderSection() {
  return (
    <div className="w-full lg:h-screen pt-28 pr-0 flex flex-col lg:flex-row bg-darkBlue">
      <div className="w-full lg:w-2/5 h-full flex flex-col justify-center items-start gap-10 px-10 lg:pl-28 lg:pr-20">
        {/* <SectionTitle isAlignedLeft isWhite> */}
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold text-white z-40 text-center lg:leading-relaxed uppercase">
            Unicef 2022-2024
          </h1>
          <div className="mt-4 w-20 h-1 rounded-sm bg-white" />
        </div>
        {/* </SectionTitle> */}
        <h2 className="text:lg lg:text-xl text-white leading-relaxed z-40">
          Patrz na wszystkie trudności jako na możliwości stworzenia czegoś
          nowego, uczenia się i wzrastania dzięki kreatywnemu reagowaniu
        </h2>
        <Link href="/organizacja/o-nas">
          <Button>Zobcz więcej</Button>
        </Link>
      </div>
      <div className="w-full lg:w-3/5 h-full flex shrink-0">
        <img src="/onas4.jpg" alt="" className="object-cover w-full" />
      </div>
    </div>
  );
}
