import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

type Item = {
  name: string;
  company: string;
  quote: string;
};

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as Item[];

  return (
    <section
      id="testimonials"
      className="scroll-mt-[var(--nav-offset)] bg-paper px-5 py-16 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-14 max-w-2xl md:mb-16">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-foreground/40">
              {t("label")}
            </p>
            <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
              {t("title")}
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <article className="flex h-full flex-col rounded-3xl border border-foreground/8 bg-surface p-7 md:p-8">
                <p className="flex-1 text-base leading-relaxed text-foreground/60">
                  “{item.quote}”
                </p>
                <div className="mt-8 border-t border-foreground/8 pt-5">
                  <h3 className="text-base font-bold">{item.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-foreground/40">
                    {item.company}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
