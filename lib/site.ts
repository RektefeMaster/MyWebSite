/** Tek kaynak — iletişim ve sosyal sabitler */
export const SITE = {
  brand: "METEK Digital",
  email: "admin@metehtec.com",
  emailAlt: "metehtec@gmail.com",
  phoneDisplay: "+90 506 055 02 39",
  phoneTel: "+905060550239",
  whatsapp: "905060550239",
  instagram:
    "https://www.instagram.com/meteknology?igsh=MWFhaDNpNmo2OGZzMA==",
  url: "https://metehtec.com",
} as const;

export function whatsappHref(prefill: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(prefill)}`;
}
