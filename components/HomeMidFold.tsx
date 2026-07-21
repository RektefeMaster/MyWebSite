"use client";

import dynamic from "next/dynamic";

/**
 * Below-fold — Client shell'den dynamic() (Next 16 gerçek code-split).
 * BlogTeaser Server Component olduğu için page.tsx'te ara katmanda kalır.
 */
const Projects = dynamic(() => import("@/components/Projects"));
const Stats = dynamic(() => import("@/components/Stats"));
const Services = dynamic(() => import("@/components/Services"));
const TechExpertise = dynamic(() => import("@/components/TechExpertise"));

export default function HomeMidFold() {
  return (
    <>
      <Projects variant="teaser" />
      <Stats />
      <Services variant="teaser" />
      <TechExpertise />
    </>
  );
}
