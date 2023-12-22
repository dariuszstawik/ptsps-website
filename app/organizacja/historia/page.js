import PageHeader from "@/components/global-components/page-header";
import SingleArticle from "@/components/global-components/single-article";
import { client } from "@/lib/contentful/client";

async function getContentfulContent() {
  const resContent = await client.getEntries({
    content_type: "history",
  });
  return resContent.items[0];
}

export default async function HistoriaPage() {
  const content = await getContentfulContent();
  console.log("------------------");
  console.log(content);
  return (
    <div>
      <PageHeader>Historia</PageHeader>
      <SingleArticle
        title={content.fields.title}
        lead={content.fields.lead}
        // content={documentToReactComponents(content.fields.content)}
        img={content.fields.obraz ? content.fields.image : ""}
      ></SingleArticle>
    </div>
  );
}
