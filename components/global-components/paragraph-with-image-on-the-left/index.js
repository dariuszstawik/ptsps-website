"use client";
import { Slide } from "react-awesome-reveal";
import SectionTitle from "../section-title";
import Button from "../button";
import Link from "next/link";

export default function ParagraphWithImageOnTheLeft({
  title,
  children,
  img,
  alt,
  contentfulImg,
  buttonTitle,
  buttonLink,
}) {
  return (
    <div className={`w-full px-10 lg:px-20 py-16 flex flex-col lg:flex-row`}>
      <Slide
        direction="left"
        delay={200}
        triggerOnce
        className="flex justify-center items-start w-1/2"
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
              style={{ width: "400px", height: "440px", objectFit: "cover" }}
              className="rounded"
            />
          )}
          {img && (
            <img
              src={img}
              alt={alt ? alt : ""}
              // style={{ width: "600px", height: "440px", objectFit: "cover" }}
              className="rounded"
            />
          )}
          {/* <img src="/documents31.jpg" className="rounded" /> */}
        </div>
      </Slide>
      <div className="w-1/2 mx-8 lg:ml-20 lg:mr-32 flex flex-col gap-0">
        <SectionTitle isAlignedLeft>{title}</SectionTitle>
        {children}
        {buttonTitle && buttonLink && (
          <Button className="mr-auto mt-6">
            <Link href={buttonLink}>{buttonTitle}</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
