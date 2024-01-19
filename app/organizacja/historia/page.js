import PageHeader from "@/components/global-components/page-header";
import SectionTitle from "@/components/global-components/section-title";
import SingleArticle from "@/components/global-components/single-article";
import Timeline from "@/components/historia-page/timeline";
import { client } from "@/lib/contentful/client";

async function getContentfulContent() {
  const resContent = await client.getEntries({
    content_type: "history",
  });
  return resContent.items[0];
}

export default async function HistoriaPage() {
  const content = await getContentfulContent();

  return (
    <div>
      <PageHeader>Organizacja</PageHeader>
      <div className="mt-20">
        <SectionTitle>Historia PTSPS</SectionTitle>
        {/* <SingleArticle
        title={content.fields.title}
        lead={content.fields.lead}
        // content={documentToReactComponents(content.fields.content)}
        img={content.fields.obraz ? content.fields.image : ""}
      ></SingleArticle> */}
        <Timeline />
      </div>
    </div>
  );
}
