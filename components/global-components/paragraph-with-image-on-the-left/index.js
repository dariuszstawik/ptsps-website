"use client";
import { Slide } from "react-awesome-reveal";
import SectionTitle from "../section-title";
import Button from "../button";
import Link from "next/link";

export default function ParagraphWithImageOnTheLeft({
  title,
  children,
  img,
  buttonTitle,
  buttonLink,
  locale,
}) {
  return (
    <div className={`w-full px-10 lg:px-20 py-16 flex flex-col lg:flex-row`}>
      <Slide
        direction="left"
        delay={200}
        triggerOnce
        className="flex justify-center items-start"
      >
        <div>
          {/* <img
            src={img?.fields.file.url ? img.fields.file.url : ""}
            alt={
              img?.fields.file.description ? img.fields.file.description : ""
            }
            style={{ width: "600px", height: "440px", objectFit: "cover" }}
          /> */}
          <img src="/documents31.jpg" className="rounded" />
        </div>
      </Slide>
      <div className="w-3/4 mx-8 lg:ml-20 lg:mr-32 flex flex-col gap-0">
        <SectionTitle isAlignedLeft>{title}</SectionTitle>
        {children}
        {buttonTitle && (
          <Button className="mr-auto mt-6">
            <Link href={`/${locale}/${buttonLink}`}>{buttonTitle}</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
