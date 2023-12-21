"use client";
import CountUp from "react-countup";

export default function Counter({ end }) {
  return (
    <h1 className="">
      <CountUp end={end} duration={3} />
    </h1>
  );
}
