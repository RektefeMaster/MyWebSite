import type { BlogArticle } from "../blog";

const content: Record<string, BlogArticle> = {
  "identity-at-first-glance": {
    title: "What the first screen says before anyone reads",
    excerpt:
      "Visitors judge layout, type, and pace in under a second. That judgment lands before your offer does.",
    lead: "Most brands treat the hero as a place for a slogan. The visitor's eye does something else first: it scans weight, spacing, and how many things compete for attention. If those signals clash, the copy never gets a fair hearing.",
    imageAlt: "Typography and layout detail on a premium brand homepage",
    sections: [
      {
        heading: "Composition answers before copy does",
        paragraphs: [
          "Open any boutique or service site and watch what registers first. Not the headline. The density of the screen: how tight the margins feel, whether the logo floats alone or fights the menu, if three buttons share the same visual volume. Those cues read as competence or noise before a single sentence is parsed.",
          "Research on web credibility has tracked this for years. People treat interface quality as a proxy for business quality. A strong product behind a cluttered first view still starts at a deficit. A calm, legible surface buys time for the actual argument.",
        ],
      },
      {
        heading: "Identity here means type, pace, and hierarchy",
        paragraphs: [
          "First-glance identity is not the logo file. It is the system that governs what appears above the fold: type scale (how many levels shout at once), color restraint (accent used once or everywhere), and rhythm (consistent spacing units versus arbitrary gaps).",
          "Pace matters too. Auto-playing video, marquee text, and pop-ups on entry tell the visitor the brand is anxious. A site that loads fast, holds still, and offers one clear path reads as confident. Confidence is a design decision, not a copy trick.",
          "When we build marketing sites, we lock these rules before illustration or photography. Custom interfaces, not reskinned themes, make that possible: the hierarchy is coded, not overridden with one-off CSS patches.",
        ],
      },
      {
        heading: "Three checks you can run today",
        paragraphs: [
          "One thesis in the viewport. Can you state who you serve and what you do in one line, and does the layout support that line instead of burying it? If the hero tries to say five things, none of them stick.",
          "One primary action. Secondary links can exist, but they should step back. Two buttons with equal weight is the same as no decision. On mobile, thumb reach and tap target size are part of the test, not an afterthought.",
          "Cross-page consistency. The home page may look polished while product or contact pages revert to default template styling. That break is visible in seconds and costs more trust than a weak headline.",
        ],
      },
      {
        heading: "When the first screen matches the offer",
        paragraphs: [
          "Categories with high consideration (fashion, beauty, manufacturing partnerships, professional services) need trust before detail. The visitor is not buying a pixel; they are buying judgment. The first screen should feel like the same judgment applied to their problem.",
          "Speed, readable type, honest claims, and technical basics (contrast, focus states, metadata) belong in the same conversation as aesthetics. We test those before handoff because a pretty page that fails on mobile or loads late still breaks the handshake.",
          "If your first screen already passes the three checks and still feels wrong, the issue is usually strategy, not decoration. Clarify the single sentence the layout must carry, then rebuild the system around it. That is slower than a new hero image and far more durable.",
        ],
      },
    ],
  },
  "system-not-logo": {
    title: "The logo is the smallest part of identity",
    excerpt:
      "A new mark in a PDF does not fix email signatures, product pages, or a site that still runs on template defaults.",
    lead: "Rebrand projects often start with the symbol. They should start with rules. Without shared type, color, spacing, and component behavior, the freshest logo still sits on a fractured experience.",
    imageAlt: "Grid, color swatches, and type specimens for a brand system",
    sections: [
      {
        heading: "What people actually remember",
        paragraphs: [
          "Ask a customer to describe a brand they trust. They rarely draw the logo from memory. They mention how the confirmation email looked, whether the invoice matched the site, if the Instagram grid felt like the same company as the packaging.",
          "Touchpoints multiply faster than logo versions. A mark that works at 32px and on a truck wrap is necessary work, but it is not the workload. The workload is every surface where someone meets you after the ad click.",
        ],
      },
      {
        heading: "Systems turn taste into repeatable decisions",
        paragraphs: [
          "A visual identity system answers production questions in advance: heading weight for H1 versus H2, maximum number of accent colors on one screen, photo crop ratio, button radius, minimum padding scale. Designers and developers stop negotiating from zero on every page.",
          "Good systems include prohibitions. No stretched logos, no drop shadows on body text, no third-party fonts in emails. Constraints speed teams up because rejection is obvious.",
          "We ship sites and admin panels from the same rule set when a client needs both. A dashboard that ignores the public brand teaches internal users that the identity is cosmetic.",
        ],
      },
      {
        heading: "Core, production, surface",
        paragraphs: [
          "Core holds thesis, type family, color tokens, logo clear space, and voice boundaries. Lock this before scaling.",
          "Production holds grid, UI components, icon style, photography direction, and motion limits. This layer is where daily work happens.",
          "Surface is web, social templates, sales decks, signage, and packaging. Designing the web in isolation produces two brands: one in Figma, one in the browser. They should be one system with different canvases.",
        ],
      },
      {
        heading: "Documentation people open",
        paragraphs: [
          "An eighty-page brand book that never leaves the shared drive is not a system. It is archive. Useful documentation is short, searchable, and example-heavy: do this, not that, with real screens.",
          "When a new channel appears (marketplace listing, short-form video cover, partner co-brand lockup), extend the rules instead of breaking them. The test stays constant: does this piece inherit type and color logic from the core?",
          "If you are about to fund another logo exploration while product pages still use three different button styles, pause and audit surfaces first. Fix the system, then refine the mark.",
        ],
      },
    ],
  },
  "editorial-web-as-sales": {
    title: "Editorial structure sells better than louder buttons",
    excerpt:
      "Sequence beats stack. A page that orders thesis, proof, and action outperforms a brochure with more images.",
    lead: "Many sites still read like folded flyers: hero, feature grid, testimonial carousel, footer CTA. Nothing is wrong with those blocks individually. The problem is order. Without editorial pacing, visitors scroll past proof and arrive at the button unconvinced.",
    imageAlt: "Editorial homepage layout with clear typographic hierarchy",
    sections: [
      {
        heading: "Brochures stack; experiences sequence",
        paragraphs: [
          "Stacking adds modules until the page feels full. Sequencing asks what must be believed next. First establish who this is for and what changes after contact. Then show evidence that the claim is real. Only then ask for action.",
          "Each section should earn the next scroll. If a block cannot answer why it exists in the story, cut it or move it. Editing is not removing value; it is protecting attention.",
        ],
      },
      {
        heading: "Typography is the sales path",
        paragraphs: [
          "On editorial sites, type size and spacing are the navigation. Clear H1 to H2 steps create a path even when the menu is minimal. Line length near 65 characters, consistent leading, and enough contrast do more for comprehension than animated counters.",
          "Mobile breaks weak hierarchy faster than desktop forgives it. If the headline wraps into five lines and the subhead disappears, the promise shrinks with it. Measure on a phone before signing off on desktop drama.",
        ],
      },
      {
        heading: "Place proof where doubt appears",
        paragraphs: [
          "Social proof trapped in a generic trust band is easy to skip. Proof works when it meets the objection: a result line after the promise, a named project after the capability list, a short quote after price context.",
          "One strong case beats ten vague stats. We show real shipped work (manufacturing sites, boutique retail, operational tools) in context instead of abstract percentage badges without source.",
        ],
      },
      {
        heading: "One primary action, calmly framed",
        paragraphs: [
          "Primary CTA gets weight: label, placement, surrounding whitespace. Secondary paths (catalog browse, FAQ, portfolio) stay visible but quieter. Equal-weight Buy and Learn buttons cancel each other out.",
          "High-consideration categories need time. Editorial pacing respects that. Panic timers and aggressive pop-ups train visitors to distrust the brand. Clear next step plus honest copy converts better than pressure.",
          "Map your current homepage into thesis, proof, and action columns. Gaps show up immediately. Filling them is copy and layout work, not a plugin install.",
        ],
      },
    ],
  },
  "quiet-luxury-online": {
    title: "Quiet luxury online is restraint with intent",
    excerpt:
      "Muted color and thin type are shortcuts. Real quiet luxury is disciplined space, material, and motion.",
    lead: "Quiet luxury brands often translate physical calm into digital grey. That misses the point. Restraint online means every element justifies its presence. Empty space is not absence; it is structure.",
    imageAlt: "Minimal product still life with soft natural light",
    sections: [
      {
        heading: "Less noise, sharper message",
        paragraphs: [
          "Reduction removes competing claims. One hero message, one supporting line, one path forward. Three equal headlines on one screen guarantee none are remembered.",
          "Narrow palettes are fine. Legibility is not optional. Low saturation must still meet contrast requirements. A page that whispers but cannot be read is not premium; it is neglected.",
        ],
      },
      {
        heading: "Material on screen",
        paragraphs: [
          "Digital material comes from photography discipline: consistent light, honest texture, controlled depth, crops that respect the product instead of filling space. Stock grins and heavy filters break luxury instantly.",
          "Type carries material too. Letterspacing, weight, and margin breathe like packaging. Random system fonts bolted onto a luxury story feel like a label printed at home.",
        ],
      },
      {
        heading: "Motion with a job",
        paragraphs: [
          "Animation should clarify hierarchy, not perform. Subtle hover states, considered page transitions, and scroll behavior that keeps text readable beat dramatic parallax that hides content mid-read.",
          "If motion runs while the user is still reading, the layout failed. Pause or remove. Luxury reads as control.",
        ],
      },
      {
        heading: "One brand in store and browser",
        paragraphs: [
          "Quiet luxury lives on consistency. Short copy in the shop, long paragraphs online splits the brand. Match sentence length, product naming, and CTA tone across channels.",
          "Performance is part of the feel. Slow load times read as careless. We treat speed and basic accessibility checks as release criteria, same as spacing and type, because care shows in mechanics too.",
          "Audit your site against your best physical touchpoint. If the screen shouts where the store whispers, align them before the next campaign spend.",
        ],
      },
    ],
  },
  "brief-that-works": {
    title: "A brief that shortens the project",
    excerpt:
      "Clear goals, audience, limits, and references turn subjective feedback into decisions you can build.",
    lead: "Discovery is not moodboard tourism. It is writing down what success looks like, who the work speaks to, and what is out of scope. Vague input produces expensive loops. Specific input lets design and code move.",
    imageAlt: "Project brief notes on a studio desk beside a keyboard",
    sections: [
      {
        heading: "Four blocks: goal, audience, constraints, references",
        paragraphs: [
          "Goal names a observable change: first screen states positioning clearly, inquiry form completes, dealer locator used. Not a mood word like modern or premium.",
          "Audience names who decides, what they fear, what proof they need. Constraints list timeline, budget band, existing assets, integrations, legal lines you cannot cross.",
          "References show tempo and structure, not theft targets. Include anti-references: sites or styles you reject and why.",
        ],
      },
      {
        heading: "Good sentences beat long decks",
        paragraphs: [
          "One page beats ten scattered docs. If stakeholders disagree, the brief surfaces it early instead of at round four of revisions.",
          "Replace we want it cleaner with we need one primary CTA above the fold and specs downloadable without login. The second sentence is buildable.",
        ],
      },
      {
        heading: "Lock early, pay late if you do not",
        paragraphs: [
          "Strategy, identity, interface, development, launch. Each phase assumes the last is settled. Changing positioning after components exist costs multiples of changing a sketch.",
          "The brief is the first lock. A founder-led studio can move fast when intent is written; we still need that anchor to ship custom work without theme drift.",
        ],
      },
      {
        heading: "Write it together",
        paragraphs: [
          "Best briefs are co-authored. Client brings domain knowledge; studio asks the questions that expose gaps. Shared language reduces this is not what we meant later.",
          "Before you email a studio, finish this sentence: When we launch, we will know it worked because ___. If you cannot fill the blank, discovery still has work to do.",
          "Send that sentence with links, constraints, and anti-references. You will get a sharper proposal and a shorter path to launch.",
        ],
      },
    ],
  },
};

export default content;
