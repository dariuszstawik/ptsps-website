import Image from "next/image";
import React, { ReactNode } from "react";

const SingleArticle = ({ title, lead, content, img }) => {
  return (
    <section className="max-w-4xl mx-auto px-8 mb-16">
      <h2>{title}</h2>
      <div>
        {/* <Image
          src={img?.fields?.file?.url ? "https:" + img.fields.file.url : ""}
          width={img?.fields?.file?.details?.image?.width}
          height={img?.fields?.file?.details?.image?.height}
          className="w-full object-cover rounded-lg my-10"
          alt={img?.fields?.description ? img.fields.description : ""}
        /> */}
        <img
          scr="wspolne.jpg"
          className="w-full object-cover rounded-lg my-10"
          alt="wspolne"
        />
      </div>
      <div>
        <p className="font-bold">{lead}</p>
        <div className="text-base leading-relaxed my-4"></div>
        {content}
      </div>
    </section>
  );
};

export default SingleArticle;
