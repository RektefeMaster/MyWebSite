"use client";

import dynamic from "next/dynamic";
import LazyMount from "@/components/LazyMount";

/** Soft nav sırasında fold çökmesin — marka perde RouteTransition’da */
function FoldSpacer({ h = "min(48vh, 520px)" }: { h?: string }) {
  return <div style={{ minHeight: h }} aria-hidden />;
}

/**
 * Mid-fold (Atelier Signal): void kanıt → paper omurga
 * Selected Work → Featured Case → Capabilities → Manifesto → Approach
 * Notes (BlogTeaser) page.tsx’te Approach’tan sonra gelir.
 *
 * dynamic() bundle böler; LazyMount viewport’a yaklaşınca mount eder
 * (ST / image / client state ertelenir — CLS için minHeight).
 */
const SelectedWork = dynamic(() => import("@/components/SelectedWork"), {
  loading: () => <FoldSpacer />,
});
const FeaturedCase = dynamic(() => import("@/components/FeaturedCase"), {
  loading: () => <FoldSpacer />,
});
const Capabilities = dynamic(() => import("@/components/Capabilities"), {
  loading: () => <FoldSpacer />,
});
const ManifestoScene = dynamic(() => import("@/components/ManifestoScene"), {
  loading: () => <FoldSpacer h="min(40vh, 420px)" />,
});
const ApproachTeaser = dynamic(() => import("@/components/ApproachTeaser"), {
  loading: () => <FoldSpacer />,
});

export default function HomeMidFold() {
  return (
    <>
      <LazyMount
        id="work"
        minHeight="min(48vh, 520px)"
        rootMargin="320px 0px"
        className="scroll-mt-[var(--nav-offset)]"
      >
        <SelectedWork />
      </LazyMount>
      <LazyMount
        id="featured"
        minHeight="min(48vh, 520px)"
        rootMargin="280px 0px"
        className="scroll-mt-[var(--nav-offset)]"
      >
        <FeaturedCase />
      </LazyMount>
      <LazyMount minHeight="min(48vh, 520px)" rootMargin="240px 0px">
        <Capabilities />
      </LazyMount>
      <LazyMount minHeight="min(40vh, 420px)" rootMargin="240px 0px">
        <ManifestoScene />
      </LazyMount>
      <LazyMount minHeight="min(48vh, 520px)" rootMargin="200px 0px">
        <ApproachTeaser />
      </LazyMount>
    </>
  );
}
