"use client";

import dynamic from "next/dynamic";

function FoldSpacer({ h = "min(40vh, 420px)" }: { h?: string }) {
  return <div style={{ minHeight: h }} aria-hidden />;
}

const WorkingPrinciples = dynamic(
  () => import("@/components/WorkingPrinciples"),
  { loading: () => <FoldSpacer /> }
);
const Availability = dynamic(() => import("@/components/Availability"), {
  loading: () => <FoldSpacer h="min(24vh, 280px)" />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <FoldSpacer />,
});

export default function HomeTailFold() {
  return (
    <>
      <WorkingPrinciples />
      <Availability />
      <Contact />
    </>
  );
}
