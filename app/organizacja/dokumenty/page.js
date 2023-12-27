import Arrow from "@/components/global-components/arrow";
import Collapse from "@/components/global-components/collapse";
import ListItem from "@/components/global-components/list-item";
import PageHeader from "@/components/global-components/page-header";
import ParagraphWithImageOnTheLeft from "@/components/global-components/paragraph-with-image-on-the-left";
import SectionTitle from "@/components/global-components/section-title";
import { client } from "@/lib/contentful/client";
import { List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function getContentfulContent() {
  const resContent = await client.getEntries({
    content_type: "documents",
  });
  return resContent.items;
}

export default async function DokumentyPage() {
  const documents = await getContentfulContent();

  return (
    <>
      <PageHeader> Dokumenty </PageHeader>
      <ParagraphWithImageOnTheLeft title="Dokumenty">
        <ul className="my-4">
          {documents &&
            documents.map((item, i) => {
              return (
                <>
                  <li key={i}>
                    <ListItem isDocument className="flex">
                      <Link href={`/organizacja/dokumenty/${item.fields.slug}`}>
                        {item.fields.title} <Arrow />
                      </Link>
                    </ListItem>
                  </li>
                </>
              );
            })}
          <ListItem isDocument className="py-0">
            <Collapse title="Sprawozdania">
              <span className="block my-2">
                Zasadą Towarzystwa jest całkowita transparentność naszych
                działań i finansów. Co roku tworzymy sprawozdanie merytoryczne i
                finansowe z działalności organizacji. Na stronie publikujemy
                wizualizacje oryginalnych sprawozdań, które składamy do Krajowej
                Administracji Skarbowej.
              </span>
              <span className="block my-2">2020</span>
              <span className="block my-2">Sprawozdanie finansowe</span>
              <span className="block my-2">2021</span>
              <span className="block my-2">Sprawozdanie finansowe</span>
              <span className="block my-2">2022</span>
              <span className="block my-2">Sprawozdanie finansowe</span>
            </Collapse>
          </ListItem>
        </ul>
      </ParagraphWithImageOnTheLeft>

      {/* <section className="relative py-20" id="offerSection">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-start -mx-4">
            <div className="relative w-full md:w-2/5 px-4 mb-12 md:mb-0">
              <Image
                className="h-96 lg:h-128 w-full rounded-xl object-cover"
                src="/documents.png"
                alt="zdjęcia jaków wyświetlonyvh na różnych urządzeniach"
                width={1015}
                height={1018}
              />
            </div>
            <div className="relative w-full md:w-3/5 px-4 pb-20 lg:pb-0">
              <div className="lg:ml-auto max-w-md">
                <h2 className="mb-6 lg:mb-10 text-4xl font-semibold font-heading" />
                <SectionTitle isAlignedLeft>Dokumenty</SectionTitle>
                <ul className="my-4">
                  <li>
                    <ListItem isDocument>Statut</ListItem>
                    <ListItem isDocument>
                      Polityka ochrony przed naruszeniem praw bądź
                      wykorzystywaniem beneficjentów
                    </ListItem>
                    <ListItem isDocument>
                      Polityka ochrony przed korupcją, oszustwami oraz innymi
                      zachowaniami nieetycznymi
                    </ListItem>
                    <ListItem isDocument>
                      Polityka przeciwdziałania wykorzystywaniu i przemocy
                      seksualnej (PSEA)
                    </ListItem>
                    <ListItem isDocument>Sprawozdania</ListItem>
                    <ListItem isDocument>Standardy superwizji</ListItem>
                    <ListItem isDocument>Standardy szkoleń</ListItem>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <div className="max-w-3xl">
        <ul className="">
          <li>
            <ListItem isDocument>Statut</ListItem>
            <ListItem isDocument>
              Polityka ochrony przed naruszeniem praw bądź wykorzystywaniem
              beneficjentów
            </ListItem>
            <ListItem isDocument>
              Polityka ochrony przed korupcją, oszustwami oraz innymi
              zachowaniami nieetycznymi
            </ListItem>
            <ListItem isDocument>
              Polityka przeciwdziałania wykorzystywaniu i przemocy seksualnej
              (PSEA)
            </ListItem>
            <ListItem isDocument>Sprawozdania</ListItem>
            <ListItem isDocument>Standardy superwizji</ListItem>
            <ListItem isDocument>Standardy szkoleń</ListItem>
          </li>
        </ul>
      </div> */}
    </>
  );
}
