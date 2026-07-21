"use client";

import dynamic from "next/dynamic";

/** /work below-fold — gerçek client code-split için Client shell */
const FeaturedCase = dynamic(() => import("@/components/FeaturedCase"));
const Projects = dynamic(() => import("@/components/Projects"));

export default function WorkBelowFold() {
  return (
    <>
      <FeaturedCase />
      <Projects variant="full" />
    </>
  );
}
