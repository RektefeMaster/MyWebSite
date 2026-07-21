"use client";

import dynamic from "next/dynamic";

const Process = dynamic(() => import("@/components/Process"));

export default function ApproachBelowFold() {
  return <Process />;
}
