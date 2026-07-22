"use client";

import dynamic from "next/dynamic";

/** Soft nav sırasında fold çökmesin — marka perde RouteTransition’da */
function FoldSpacer({ h = "min(48vh, 520px)" }: { h?: string }) {
  return <div style={{ minHeight: h }} aria-hidden />;
}

/**
 * Below-fold — Client shell'den dynamic() (Next 16 gerçek code-split).
 * BlogTeaser Server Component olduğu için page.tsx'te ara katmanda kalır.
 */
const ProjectStrip = dynamic(() => import("@/components/ProjectStrip"), {
  loading: () => <FoldSpacer />,
});
const Stats = dynamic(() => import("@/components/Stats"), {
  loading: () => <FoldSpacer h="min(28vh, 320px)" />,
});
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <FoldSpacer />,
});
const TechExpertise = dynamic(() => import("@/components/TechExpertise"), {
  loading: () => <FoldSpacer h="min(36vh, 400px)" />,
});

export default function HomeMidFold() {
  return (
    <>
      <ProjectStrip />
      <Stats />
      <Services variant="teaser" />
      <TechExpertise />
    </>
  );
}
