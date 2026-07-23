/** Editorial grid span — sıraya göre; proje verisine yazılmaz */

export const layoutPattern = ["wide", "narrow", "medium", "large"] as const;

export type LayoutSlot = (typeof layoutPattern)[number];

export const slotClass: Record<LayoutSlot, string> = {
  wide: "md:col-span-8",
  narrow: "md:col-span-4",
  medium: "md:col-span-5",
  large: "md:col-span-7",
};

export function layoutSlotAt(index: number): LayoutSlot {
  return layoutPattern[index % layoutPattern.length] ?? "medium";
}

/** Full-bleed hero preference → 12 col; otherwise pattern slot */
export function editorialSpan(
  index: number,
  displayPreference?: "default" | "hero"
): string {
  if (displayPreference === "hero") return "md:col-span-12";
  return slotClass[layoutSlotAt(index)];
}
