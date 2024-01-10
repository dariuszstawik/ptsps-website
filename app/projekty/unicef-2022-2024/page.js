import PageHeader from "@/components/global-components/page-header";
import SectionTitle from "@/components/global-components/section-title";
import SideMenu from "@/components/global-components/side-menu";
import SingleArticle from "@/components/global-components/single-article";
import { Check } from "lucide-react";

export default function Unicef20222024() {
  return (
    <div>
      <PageHeader>Unicef 2022-2024</PageHeader>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2">
          <SingleArticle
            title="Unicef 2022-2024 - wstęp"
            isTitleAlignedLeft
            // img="/unicef-logo.png"
            hasSlider
            className="py-0"
          >
            <p>
              Projekt Wsparcie rozwoju pracowników polskiego systemu pomocy
              społecznej jest wspólną inicjatywą PTSPS i UNICEF. W obliczu
              kryzysu migracyjnego związanego z inwazją rosyjską na Ukrainę
              podjęliśmy działania mające na celu merytoryczne wsparcie
              pracowników polskiej pomocy społecznej – wzmocnienie i zwiększenie
              specjalistycznych kompetencji uznaliśmy za kluczowe w efektywnym
              pomaganiu rodzinom uciekającym przed wojną z terytorium Ukrainy.
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
              <li className="flex gap-2">
                <Check className="text-primaryBlue" /> czas: 1.10.2022 – 14.03.
                2024{" "}
              </li>
              <li className="flex gap-2">
                <Check className="text-primaryBlue" /> budżet: 5 504 400 PLN{" "}
              </li>
              <li className="flex gap-2">
                <Check className="text-primaryBlue" /> finansowanie: UNICEF
                (Biuro UNICEF ds. Reagowania na Potrzeby Uchodźców w Polsce){" "}
              </li>
              <li className="flex gap-2">
                <Check className="text-primaryBlue" />
                status: w trakcie realizacji
              </li>
            </ul>
            <SectionTitle isAlignedLeft>Ludzie projektu</SectionTitle>
            <ul>
              <li className="flex gap-2">
                <Check className="text-primaryBlue" />
                <strong>autorzy projektu: </strong>Marcin Mikulski, Marek Jaros
              </li>
              <li className="flex gap-2">
                {" "}
                <Check className="text-primaryBlue" />{" "}
                <strong>nadzór merytoryczny</strong>
                (Chief Strategy Officer): Marek Jaros
              </li>
              <li className="flex gap-2">
                {" "}
                <Check className="text-primaryBlue" />{" "}
                <strong>nadzór formalny (Project Managing Officer)</strong>:
                Marcin Mikulski
              </li>
              <li className="flex gap-2">
                {" "}
                <Check className="text-primaryBlue" />{" "}
                <strong>nadzór finansowy (Chief Financial Officer)</strong>:
                Katarzyna Biernat-Pilarska
              </li>
              <li className="flex gap-2">
                {" "}
                <Check className="text-primaryBlue" />{" "}
                <strong>koordynacja (Project Manager)</strong>: Agata Walerowicz
              </li>
              <li className="flex gap-2">
                {" "}
                <Check className="text-primaryBlue" />
                <strong>koordynacja superwizji</strong>: Agnieszka Ignasiak
              </li>
              <li className="flex gap-2">
                <Check className="text-primaryBlue" />{" "}
                <strong> koordynacja szkoleń</strong>: Aleksandra Sokolik
              </li>
              <li className="flex gap-2">
                {" "}
                <Check className="text-primaryBlue" />{" "}
                <strong>zarządzanie zgodnością (Compliance Manager)</strong>:
                Katarzyna Lis
              </li>
            </ul>
          </SingleArticle>
        </div>
        <SideMenu
          // isBlue
          className=""
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
            // {
            //   title: "Realizacja: superwizje",
            //   path: "/projekty/unicef-2022-2024/realizacja-superwizje",
            // },
            // {
            //   title: "Realizacja: programy",
            //   path: "/projekty/unicef-2022-2024/realizacja-programy",
            // },
            // {
            //   title: "Realizacja: szkolenia",
            //   path: "/projekty/unicef-2022-2024/realizacja-szkolenia",
            // },
          ]}
        />
      </section>
    </div>
  );
}
