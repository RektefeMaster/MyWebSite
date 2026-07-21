"use client";

import dynamic from "next/dynamic";

function FoldSpacer({ h = "min(56vh, 640px)" }: { h?: string }) {
  return <div style={{ minHeight: h }} aria-hidden />;
}

/** /work below-fold — gerçek client code-split için Client shell */
const FeaturedCase = dynamic(() => import("@/components/FeaturedCase"), {
  loading: () => <FoldSpacer />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <FoldSpacer h="min(48vh, 520px)" />,
});

export default function WorkBelowFold() {
  return (
    <>
      <FeaturedCase />
      <Projects variant="full" />
    </>
  );
}
