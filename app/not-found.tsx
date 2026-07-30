import { SITE } from "@/lib/site";
import NotFoundView from "@/components/NotFoundView";

/** Locale dışı kök 404 — metin EN (defaultLocale); locale 404 `[locale]/not-found`. */
export default function NotFound() {
  return (
    <NotFoundView
      title="Page not found"
      blurb={`This link is broken or the page moved. Head back to ${SITE.brand}.`}
      homeLabel="Back to home"
    />
  );
}
