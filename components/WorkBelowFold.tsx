"use client";

import dynamic from "next/dynamic";

function FoldSpacer({ h = "min(48vh, 520px)" }: { h?: string }) {
  return <div style={{ minHeight: h }} aria-hidden />;
}

/**
 * /work below-fold — lane gruplu Projects.
 * FeaturedCase yalnızca ana sayfada (WCC tekrarı yok).
 */
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <FoldSpacer />,
});

export default function WorkBelowFold() {
  return <Projects />;
}
