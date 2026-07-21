"use client";

import dynamic from "next/dynamic";

const Process = dynamic(() => import("@/components/Process"), {
  loading: () => <div style={{ minHeight: "min(50vh, 560px)" }} aria-hidden />,
});

export default function ApproachBelowFold() {
  return <Process />;
}
