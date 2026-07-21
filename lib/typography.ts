/**
 * Goks display fontunda olmayan / sorunlu glifleri güvenli karşılığa çevir.
 * (em/en dash, middle-dot, ellipsis, curly quotes)
 */
export function forDisplay(text: string): string {
  return text
    .replace(/\u2014/g, " - ")
    .replace(/\u2013/g, "-")
    .replace(/\u2026/g, "...")
    .replace(/\u00B7/g, " | ")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/ {2,}/g, " ");
}
