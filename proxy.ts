import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Metadata rotalarını (icon, opengraph-image vb.) i18n yönlendirmesinden
  // muaf tut — aksi halde locale ekleyip 307 veriyorlar.
  matcher:
    "/((?!api|trpc|_next|_vercel|icon|apple-icon|opengraph-image|twitter-image|manifest|sitemap|robots|.*\\..*).*)",
};
