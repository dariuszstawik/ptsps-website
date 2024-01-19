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
  isOnAboutPage,
  hasBlueBackground,
  hasSectionSubtitle,
}) {
  return (
    <div
      className={`w-full px-6 lg:px-20 py-20 flex flex-col lg:flex-row ${
        hasBlueBackground && "bg-darkBlue text-white"
      }`}
    >
      <Slide
        direction="left"
        delay={200}
        triggerOnce
        className="flex justify-center items-start w-full lg:w-1/2"
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
          {img && <img src={img} alt={alt ? alt : ""} className="rounded" />}

          {isOnAboutPage && (
            <div className="grid grid-cols-2 gap-10">
              <img
                className="object-cover w-full col-span-2 rounded shadow-lg"
                src="/onas3.jpg"
                alt=""
              />
              <img
                className="object-cover w-full rounded shadow-lg"
                src="/onas4.jpg"
                alt=""
              />
              <img
                className="object-cover w-full rounded shadow-lg"
                src="/onas5.jpg"
                alt=""
              />
            </div>
          )}
        </div>
      </Slide>
      <div className="w-full lg:w-1/2 mx-6 pr-6 pt-8 lg:pt-0 lg:pr-0 lg:ml-16 lg:mr-16 flex flex-col gap-0">
        <SectionTitle
          isAlignedLeft
          isWhite={hasBlueBackground}
          isNotUppercase={hasSectionSubtitle}
        >
          {title}
        </SectionTitle>
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
