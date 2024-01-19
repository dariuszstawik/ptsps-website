import PageHeader from "@/components/global-components/page-header";
import SectionSubtitle from "@/components/global-components/section-subtitle";
import SectionTitle from "@/components/global-components/section-title";
import SideMenu from "@/components/global-components/side-menu";
import SingleArticle from "@/components/global-components/single-article";
import { Check } from "lucide-react";

export default function Unicef20222024() {
  return (
    <div>
      <PageHeader>Projekty</PageHeader>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="col-span-2">
          <SingleArticle
            title="Unicef 2022-2024: wstęp"
            // isTitleAlignedLeft
            // img="/unicef-logo.png"
            hasSlider
            className="py-0"
          >
            <p className="">
              <b>
                Projekt Wsparcie rozwoju pracowników polskiego systemu pomocy
                społecznej jest wspólną inicjatywą PTSPS i UNICEF. W obliczu
                kryzysu migracyjnego związanego z inwazją rosyjską na Ukrainę
                podjęliśmy działania mające na celu merytoryczne wsparcie
                pracowników polskiej pomocy społecznej – wzmocnienie i
                zwiększenie specjalistycznych kompetencji uznaliśmy za kluczowe
                w efektywnym pomaganiu rodzinom uciekającym przed wojną z
                terytorium Ukrainy.
              </b>
            </p>
            <p>
              Główne działania w projekcie to opracowanie i przeprowadzenie
              specjalistycznych szkoleń związanych ze szczególnymi problemami, z
              jakimi wiąże się pomaganie uchodźcom oraz objęcie wsparciem
              superwizyjnym tych grup pracowników pomocy społecznej, które
              pracują z osobami z Ukrainy.{" "}
            </p>
            <p>
              Efektem projektu jest opracowanie dwudziestu unikalnych programów
              szkoleniowych, przeprowadzenie ponad osiemdziesięciu szkoleń dla
              pracowników pomocy społecznej i uruchomienie stu osiemdziesięciu
              grup superwizyjnych (każda grupa pracuje w cyklu 10 comiesięcznych
              spotkań).
            </p>
            <ul>
              <li className="flex gap-2 mb-2 mt-4">
                <Check className="text-primaryBlue w-4 mt-auto" />{" "}
                <strong>czas:</strong> 1.10.2022 – 14.03. 2024{" "}
              </li>
              <li className="flex gap-2 mb-2">
                <Check className="text-primaryBlue w-4 mt-auto" />{" "}
                <strong>budżet:</strong> 5 504 400 PLN{" "}
              </li>
              <li className="flex gap-2 mb-2">
                <Check className="text-primaryBlue w-4 mt-auto" />{" "}
                <strong>finansowanie:</strong> UNICEF (Biuro UNICEF ds.
                Reagowania na Potrzeby Uchodźców w Polsce){" "}
              </li>
              <li className="flex gap-2 mb-2">
                <Check className="text-primaryBlue w-4 mt-auto" />
                <strong>status:</strong> w trakcie realizacji
              </li>
            </ul>
            {/* <SectionTitle isAlignedLeft>Ludzie projektu</SectionTitle> */}
            <div className="mb-6 mt-2">
              <SectionSubtitle isAlignedLeft>Ludzie projektu</SectionSubtitle>
            </div>
            <ul>
              <li className="flex gap-2 mb-2">
                <Check className="text-primaryBlue w-4 mt-auto" />
                <strong>autorzy projektu: </strong>Marcin Mikulski, Marek Jaros
              </li>
              <li className="flex gap-2 mb-2">
                {" "}
                <Check className="text-primaryBlue w-4 mt-auto" />{" "}
                <strong>nadzór merytoryczny</strong>
                (Chief Strategy Officer): Marek Jaros
              </li>
              <li className="flex gap-2 mb-2">
                {" "}
                <Check className="text-primaryBlue w-4 mt-auto" />{" "}
                <strong>nadzór formalny </strong>(Project Managing Officer):
                Marcin Mikulski
              </li>
              <li className="flex gap-2 mb-2">
                {" "}
                <Check className="text-primaryBlue w-4 mt-auto" />{" "}
                <strong>nadzór finansowy </strong>(Chief Financial Officer):
                Katarzyna Biernat-Pilarska
              </li>
              <li className="flex gap-2 mb-2">
                {" "}
                <Check className="text-primaryBlue w-4 mt-auto" />{" "}
                <strong>koordynacja </strong>(Project Manager): Agata Walerowicz
              </li>
              <li className="flex gap-2 mb-2">
                {" "}
                <Check className="text-primaryBlue w-4 mt-auto" />
                <strong>koordynacja superwizji</strong>: Agnieszka Ignasiak
              </li>
              <li className="flex gap-2 mb-2">
                <Check className="text-primaryBlue w-4 mt-auto" />{" "}
                <strong> koordynacja szkoleń</strong>: Aleksandra Sokolik
              </li>
              <li className="flex gap-2 mb-2">
                {" "}
                <Check className="text-primaryBlue w-4 mt-auto" />{" "}
                <strong>zarządzanie zgodnością </strong>(Compliance Manager):
                Katarzyna Lis
              </li>
            </ul>
          </SingleArticle>
        </div>
        <SideMenu
          // isBlue
          className="mt-28"
          itemsList={[
            {
              title: "Unicef 2022-2024 - wstęp",
              path: "/projekty/unicef-2022-2024",
            },
            {
              title: "Tło projektu",
              path: "/projekty/unicef-2022-2024/tlo-projektu",
            },
            {
              title: "Założenia projektu",
              path: "/projekty/unicef-2022-2024/zalozenia-projektu",
            },
            {
              title: "Realizacja: superwizje",
              path: "/projekty/unicef-2022-2024/realizacja-superwizje",
            },
            {
              title: "Realizacja: programy",
              path: "/projekty/unicef-2022-2024/realizacja-programy",
            },
            {
              title: "Realizacja: szkolenia",
              path: "/projekty/unicef-2022-2024/realizacja-szkolenia",
            },
          ]}
        />
      </section>
    </div>
  );
}
