import Image from "next/image";
import Button from "../../global-components/button";

export default function HeroSection() {
  return (
    // <div className="w-full pt-46 bg-slate-500">
    <section className="xl:h-screen relative flex flex-col justify-center items-center bg-[url('/wspolne.jpg')] bg-cover before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-slate-900 before:opacity-70">
      {/* <img src="wspolne.jpg" alt="hero-section" /> */}
      <div className="w-[60%] h-full flex flex-col justify-center items-center gap-10">
        <h1 className="text-5xl font-bold text-white z-40 text-center leading-relaxed">
          Wyznaczamy nowe kierunki superwizji pracy socjalnej
        </h1>
        <h2 className="text-2xl text-white text-center leading-relaxed z-40">
          "Patrz na wszystkie trudności jako na możliwości stworzenia czegoś
          nowego, uczenia się i wzrastania dzięki kreatywnemu reagowaniu"
        </h2>
        <p className="text-white z-40"> - Virginia Satir</p>
        <Button>Poznaj nas</Button>
      </div>
      <div className="absolute -bottom-24 right-10 w-96 h-48 bg-gray-300 z-200" />
    </section>
  );
}
