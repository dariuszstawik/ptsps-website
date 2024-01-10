import PageHeader from "@/components/global-components/page-header";
import SideMenu from "@/components/global-components/side-menu";
import SingleArticle from "@/components/global-components/single-article";

export default function ZalozeniaProjektu() {
  return (
    <div>
      <PageHeader>Unicef 2022-2024</PageHeader>
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="col-span-3">
          <SingleArticle
            title="Unicef 2022-2024 - założenia projektu"
            // img="/unicef-logo.png"
            className="py-0"
            hasSlider
          >
            Szukając odpowiedzi na powyższe problemy opracowaliśmy kompleksowy
            projekt wsparcia pracowników pomocy społecznej zakładając, że
            wzmocnienie ich kompetencji skutkować będzie zwiększeniem
            skuteczności w pracy z uchodźcami z Ukrainy. Przyjęliśmy dwie główne
            ścieżki oddziaływania – poprzez superwizję i szkolenia. Kryzys
            migracyjny stworzył szereg nowych, niespotykanych dotąd problemów i
            wyzwań, przed którymi stoją pracownicy pomocy społecznej. Wobec dość
            dużej nieprzewidywalności najbardziej zasadna i skuteczna jest praca
            superwizyjna. Dlatego założyliśmy w projekcie organizację 180 grup
            superwizyjnych dla pracowników pomocy społecznej, którzy mają lub
            mogą mieć kontakt z klientami z Ukrainy. Zaprosiliśmy do udziału
            ośrodki z całej Polski, choć priorytetowo potraktowaliśmy dwanaście
            miast, w których koncentrowała się migracja ukraińska. Były to
            Warszawa, Lublin, Rzeszów, Kraków, Katowice, Wrocław, Poznań,
            Gdynia, Sopot, Gdańsk, Białystok i Łódź. W tych miastach (oraz w ich
            okolicach) uruchomiliśmy grupy superwizyjne liczące od 5 do 15 osób,
            które spotykały się co miesiąc przez 10 miesięcy (każda grupa trwała
            5h). Równoległym działaniem było opracowanie 20 szkoleń tematycznie
            związanych z potrzebami pracowników pomocy społecznej i jednocześnie
            korelujących z przewidywanymi/zdiagnozowanymi problemami
            doświadczonymi przez rodziny uchodźców. Kolejnym krokiem było
            przeprowadzenie szkoleń dla 80 grup pracowników pomocy społecznej.
            Dodatkowymi działaniami w projekcie były szkolenia dla
            współpracujących z naszą organizacją superwizorów pracy socjalnej,
            oraz rozpowszechnianie zdobytych doświadczeń i dobrych praktyk z obu
            ścieżek w specjalnym wydaniu publikacji SPS Superwizja Pracy
            Socjalnej, dystrybuowanej w formie e-publikacji (raz na trzy
            miesiące).
          </SingleArticle>
        </div>
        <SideMenu
          // isBlue
          className="mt-36"
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
