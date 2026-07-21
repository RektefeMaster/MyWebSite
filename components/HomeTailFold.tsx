"use client";

import dynamic from "next/dynamic";

const WorkingPrinciples = dynamic(() => import("@/components/WorkingPrinciples"));
const Availability = dynamic(() => import("@/components/Availability"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function HomeTailFold() {
  return (
    <>
      <WorkingPrinciples />
      <Availability />
      <Contact />
    </>
  );
}
