"use client";

import { Slide } from "react-awesome-reveal";
import SectionTitle from "../section-title";
import Button from "../button";
import Link from "next/link";

export default function ParagraphWithImageOnTheRight({
  title,
  children,
  img,
  alt,
  contentfulImg,
  buttonTitle,
  buttonLink,
}) {
  return (
    <div
      className={`w-full px-10 lg:px-20 py-16 flex flex-col lg:flex-row-reverse`}
    >
      <Slide
        direction="right"
        delay={200}
        triggerOnce
        className="flex justify-center items-start"
      >
        <div>
          {contentfulImg && (
            <img
              src={
                contentfulImg?.fields.file.url
                  ? contentfulImg.fields.file.url
                  : ""
              }
              alt={
                contentfulImg.fields.file.description
                  ? contentfulImg.fields.file.description
                  : ""
              }
              style={{ width: "600px", height: "440px", objectFit: "cover" }}
              className="rounded"
            />
          )}
          {img && (
            <img
              src={img}
              alt={alt ? alt : ""}
              //   style={{ width: "600px", height: "440px", objectFit: "cover" }}
              className="rounded"
            />
          )}
          {/* <img src="/documents31.jpg" className="rounded" /> */}
        </div>
      </Slide>
      <div className="w-3/5 mx-10 lg:mr-16 flex flex-col gap-2">
        <SectionTitle isAlignedLeft>{title}</SectionTitle>
        {children}
        {buttonTitle && buttonLink && (
          <Button className="mr-auto mt-6">
            <Link href="/">{buttonTitle}</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
