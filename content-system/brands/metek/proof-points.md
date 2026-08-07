# METEK proof points

**Status:** `pending_human_approval`  
Flip to `approved` after founder review.

Contact constants: [`lib/site.ts`](../../lib/site.ts) — METEK Digital, `admin@metehtec.com`, WhatsApp, Instagram.

## Layers

| Layer | Meaning | Agent rule |
|-------|---------|------------|
| **Verified** | Readable 1:1 from a file or constant | State as fact |
| **Supported** | Code + projects support the claim; mild interpretation OK | State carefully; prefer concrete phrasing |
| **Derived** | Reasonable inference from how work is done | OK off-hero; no invented numbers |
| **Forbidden** | No evidence path | Never |

## Claim schema

Every claim under `### \`claim-id\`` includes:

```yaml
layer: verified | supported | derived
confidence: 0-100
priority: core | secondary | optional
tags: [seo, trust, ux, conversion, technical, brand]
allowed_surfaces: [hero, services, project, metadata, blog, about]
claim: Human-readable assertion
evidence_ids: [WCC-001]
bad: Never write like this
good: Preferred shape
```

Evidence files live in [`../evidence/`](../evidence/) with machine fields (`id`, `path`, `anchor`, `type`). Verify: `npm run content:evidence`.

---

## Verified

### `stack-next-react-ts`

```yaml
layer: verified
confidence: 100
priority: core
tags: [technical, brand]
allowed_surfaces: [hero, services, project, metadata, blog, about]
claim: Delivery centers on Next.js, React, and TypeScript when the engagement needs a modern web stack.
evidence_ids: [STACK-001, WCC-001]
bad: Cutting-edge tech stack for digital excellence.
good: Built with Next.js, React, and TypeScript when the product needs that stack.
```

### `contact-channels`

```yaml
layer: verified
confidence: 100
priority: optional
tags: [conversion, brand]
allowed_surfaces: [services, project, blog, about, metadata]
claim: Primary contact channels are email (admin@metehtec.com) and WhatsApp; Instagram is used for brand presence.
evidence_ids: [BRAND-001]
bad: We're always online for our passionate community.
good: Email admin@metehtec.com or message on WhatsApp.
```

### `portfolio-verticals`

```yaml
layer: verified
confidence: 98
priority: core
tags: [trust, brand]
allowed_surfaces: [hero, services, project, about, blog]
claim: Portfolio work spans manufacturing, furniture, boutique retail, hospitality, and internal operational software.
evidence_ids: [PORT-001, WCC-001, CRM-001, AIAHI-001]
bad: Live sites trusted by industry-leading brands worldwide.
good: Portfolio work across manufacturing, furniture, retail, hospitality, and ops software.
```

### `public-and-internal-surfaces`

```yaml
layer: verified
confidence: 97
priority: secondary
tags: [technical, trust]
allowed_surfaces: [services, project, about, blog]
claim: The studio ships both public marketing sites and internal/product UIs (panels, CRM, automation).
evidence_ids: [PORT-001, CRM-001, AIAHI-001]
bad: Full-funnel digital transformation platforms.
good: Marketing sites and the panels or bots teams use day to day.
```

### `studio-locales`

```yaml
layer: verified
confidence: 100
priority: secondary
tags: [seo, brand]
allowed_surfaces: [services, about, blog, metadata]
claim: The METEK studio site ships in English, Turkish, Spanish (es-US), and German.
evidence_ids: [LOC-001]
bad: Globally localized in every language.
good: Studio site available in en, tr, es, and de.
```

---

## Supported

### `single-accountability`

```yaml
layer: supported
confidence: 94
priority: core
tags: [trust, conversion]
allowed_surfaces: [hero, services, project, about, blog]
claim: Projects are led by one accountable delivery lead from discovery to launch.
evidence_ids: [PROC-001]
bad: A single founder does every pixel forever with no collaborators.
good: One accountable delivery lead from discovery to launch — not a theme-reseller handoff chain.
```

### `no-theme-resale`

```yaml
layer: supported
confidence: 96
priority: core
tags: [brand, trust, conversion]
allowed_surfaces: [hero, services, project, about, blog, metadata]
claim: Ready-made marketplace themes are not resold as “custom.” Interfaces are designed and built for the brand.
evidence_ids: [PROC-001, CSS-001, WCC-001]
bad: We build innovative premium websites.
good: Every interface is designed specifically for the business instead of adapting a marketplace template.
```

### `custom-admin-when-needed`

```yaml
layer: supported
confidence: 93
priority: core
tags: [technical, conversion, ux]
allowed_surfaces: [services, project, blog, about]
claim: Custom admin / operations interfaces are built when the brief requires them.
evidence_ids: [CRM-001, AIAHI-001, WCC-001]
bad: AI-powered dashboards that elevate operations.
good: Custom admin panels when the team needs to run content, leads, or bookings themselves.
```

### `quality-checks-before-handoff`

```yaml
layer: supported
confidence: 92
priority: core
tags: [technical, trust, seo]
allowed_surfaces: [services, project, about, blog, metadata]
claim: Deliveries follow documented quality gates for performance, core accessibility requirements, and technical SEO before handoff.
evidence_ids: [QG-001]
bad: World-class performance and SEO guaranteed.
good: Reviewed against documented gates for performance, core accessibility, and technical SEO before handoff.
```

### `multilingual-native-copy`

```yaml
layer: supported
confidence: 94
priority: core
tags: [seo, brand, ux]
allowed_surfaces: [services, about, blog, metadata, project]
claim: When an engagement requires multiple languages, native-quality copy is produced per locale rather than through literal translation.
evidence_ids: [LOC-001, PROC-002]
bad: Instant translation into all markets.
good: Locale copy written for each market — not a word-for-word translation.
```

### `source-controlled-design`

```yaml
layer: supported
confidence: 88
priority: secondary
tags: [brand, technical, ux]
allowed_surfaces: [services, project, blog, about]
claim: Design systems are built specifically for each project instead of adapting marketplace templates.
evidence_ids: [CSS-001]
bad: Industry-leading design systems out of the box.
good: Project-specific design tokens and components — not a reskinned theme kit.
```

### `documented-quality-gates`

```yaml
layer: supported
confidence: 90
priority: secondary
tags: [technical, trust]
allowed_surfaces: [services, project, about, blog]
claim: Projects are reviewed against documented quality gates before release.
evidence_ids: [QG-001]
bad: Award-winning QA processes.
good: Reviewed against documented quality gates before release (performance, a11y basics, technical SEO, primary path).
```

---

## Derived

### `content-review-before-publish`

```yaml
layer: derived
confidence: 86
priority: secondary
tags: [ux, seo, brand]
allowed_surfaces: [services, blog, about, project]
claim: Website copy is reviewed for clarity, UX, and search intent before publication.
evidence_ids: [PROC-002]
bad: Results-driven content that converts every visitor.
good: Copy checked for clarity, UX, and search intent before it goes live.
```

### `maintainable-after-launch`

```yaml
layer: derived
confidence: 82
priority: secondary
tags: [technical, trust]
allowed_surfaces: [services, project, blog, about]
claim: Projects are structured to remain maintainable after launch rather than optimized only for delivery speed.
evidence_ids: [CRM-001, CSS-001, PROC-001]
bad: Future-proof architecture forever.
good: Structured so your team can keep running the site after handoff — not a one-shot delivery dump.
```

### `reusable-internal-systems`

```yaml
layer: derived
confidence: 84
priority: optional
tags: [technical, brand]
allowed_surfaces: [services, blog, about]
claim: Reusable internal systems reduce repeated engineering work while keeping each client-facing experience unique.
evidence_ids: [CSS-001, PROC-001]
bad: One-size platform for every brand.
good: Shared internal tooling; unique client-facing UI per brand.
```

---

## Forbidden

Never invent or imply without new verified evidence:

| Ban | Examples |
|-----|----------|
| Money / growth | ROI, revenue, traffic %, conversion-rate lifts |
| Rankings | “#1 on Google,” guaranteed rankings |
| Awards / trust theatre | award-winning, trusted by [unnamed], client-count inflation |
| Superlatives | world-class, industry-leading, best-in-class, cutting-edge |
| Empty praise | innovative solutions, digital excellence, tailored solutions, future-proof, game-changing |
| Soft fluff | passionate team, customer-centric, results-driven |
| Vague verbs | transform, elevate, empower, redefine (unearned) |
| Fake proof | fabricated testimonials, fake headcount, “only one person forever” |

Also see `scripts/content/check-forbidden-copy.mjs` (lint source of truth).

---

## AI selection rules

1. Prefer **Verified → Supported → Derived**. **Forbidden** never.
2. If two claims say the same idea, pick the **higher confidence**.
3. Respect `allowed_surfaces` — never move a blog-only claim into hero.
4. Respect `writing_policy` max claims per surface (below).
5. Prefer concrete nouns over adjectives; evidence-backed over abstract.
6. `confidence < 90` → avoid in **hero**; OK in blog, case, services body.
7. Hero prefers `priority: core`, `confidence >= 90`, and `hero` in `allowed_surfaces`.

### Hero rule

Hero may contain:

1. **One** core claim  
2. **One** proof (evidence-backed)  
3. **One** CTA group  

Constraints:

- Never more than **one** adjective in the headline block  
- Never more than **two** marketing words in the first viewport  
- No Forbidden patterns  
- Prefer tags `trust` + `conversion` or `brand` + `technical`

### Writing policy

```yaml
writing_policy:
  hero:
    max_claims: 2
  services:
    max_claims: 3
  project:
    max_claims: 4
  blog:
    max_claims: null   # unlimited
  metadata:
    max_claims: 1
  about:
    max_claims: 3
```

---

## Approval

- [ ] Founder reviewed date: ________
- [ ] `npm run content:evidence` passes
- [ ] Status flipped to `approved`
