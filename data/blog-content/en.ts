import type { BlogArticle } from "../blog";

const content: Record<string, BlogArticle> = {
  "identity-at-first-glance": {
    title: "What the first screen says before anyone reads",
    excerpt:
      "Visitors judge weight, spacing, and pace in under a second. That verdict lands before your offer does.",
    lead: "Most brands treat the hero as a slogan slot. The eye does something else first: it measures density, how many things compete, and whether the brand looks calm or anxious. If those signals clash, the copy never gets a fair hearing.",
    imageAlt: "Typography and layout detail on a premium brand homepage",
    sections: [
      {
        heading: "Composition answers before copy does",
        paragraphs: [
          "Open a boutique or service site and watch what registers first. Not the headline — the density of the screen: tight margins, a logo fighting the menu, three buttons sharing the same visual volume. Those cues read as competence or noise before a sentence is parsed.",
          "People use interface quality as a proxy for business quality. A strong offer behind a cluttered first view still starts at a deficit. A calm, legible surface buys time for the actual argument.",
        ],
      },
      {
        heading: "Identity here means type, pace, and hierarchy",
        paragraphs: [
          "First-glance identity is not the logo file. It is the system above the fold: how many type levels shout at once, whether accent color appears once or everywhere, whether spacing follows a unit or random gaps.",
          "Pace is a claim. Autoplay video, marquee text, and entry pop-ups say the brand is nervous. A site that loads fast, holds still, and offers one clear path reads as confident — and confidence is a design decision, not a copy trick.",
          "When we build marketing sites, we lock these rules before illustration or photography. Custom interfaces make that possible: hierarchy is coded, not patched with one-off CSS.",
        ],
      },
      {
        heading: "Three checks you can run today",
        paragraphs: [
          "One thesis in the viewport. Can you state who you serve and what you do in one line — and does the layout carry that line instead of burying it? Five competing claims leave none.",
          "One primary action. Secondary links can exist, but they step back. Two equal-weight buttons equal no decision. On mobile, thumb reach and tap size are part of the test.",
          "Cross-page consistency. A polished home that collapses into template defaults on product or contact pages costs more trust than a weak headline. Fix the break before you rewrite the slogan.",
        ],
      },
      {
        heading: "When the first screen matches the offer",
        paragraphs: [
          "High-consideration categories — fashion, beauty, manufacturing partnerships, professional services — need trust before detail. The visitor is buying judgment. The first screen should feel like that same judgment applied to their problem.",
          "Speed, readable type, honest claims, and technical basics (contrast, focus, metadata) belong in the same conversation as aesthetics. We test those before handoff because a pretty page that fails on mobile still breaks the handshake.",
          "If the three checks pass and it still feels wrong, the issue is usually strategy, not decoration. Write the single sentence the layout must carry, then rebuild the system around it.",
        ],
      },
    ],
  },
  "system-not-logo": {
    title: "The logo is the smallest part of identity",
    excerpt:
      "A new mark in a PDF does not fix email signatures, product pages, or a site still running on template defaults.",
    lead: "Rebrands often start with the symbol. They should start with rules. Without shared type, color, spacing, and component behavior, the freshest logo still sits on a fractured experience.",
    imageAlt: "Grid, color swatches, and type specimens for a brand system",
    sections: [
      {
        heading: "What people actually remember",
        paragraphs: [
          "Ask someone to describe a brand they trust. They rarely redraw the logo. They mention the confirmation email, whether the invoice matched the site, if Instagram felt like the same company as the packaging.",
          "Touchpoints multiply faster than logo versions. A mark that works at 32px and on a truck wrap matters — but the real workload is every surface after the ad click.",
        ],
      },
      {
        heading: "Systems turn taste into repeatable decisions",
        paragraphs: [
          "A visual system answers production questions early: H1 versus H2 weight, how many accents on one screen, photo crop ratio, button radius, minimum padding. Teams stop negotiating from zero on every page.",
          "Good systems include prohibitions — no stretched logos, no drop shadows on body text, no random fonts in email. Constraints speed work because rejection is obvious.",
          "We ship sites and admin panels from the same rule set when a client needs both. A dashboard that ignores the public brand teaches that identity is cosmetic.",
        ],
      },
      {
        heading: "Core, production, surface",
        paragraphs: [
          "Core holds thesis, type family, color tokens, logo clear space, and voice boundaries. Lock this before you scale.",
          "Production holds grid, UI components, icon style, photography direction, and motion limits — the layer where daily work happens.",
          "Surface is web, social, decks, signage, packaging. Designing the web in isolation creates two brands: one in Figma, one in the browser. They should be one system on different canvases.",
        ],
      },
      {
        heading: "Documentation people actually open",
        paragraphs: [
          "An eighty-page brand book that never leaves the drive is an archive, not a system. Useful docs are short, searchable, and example-heavy: do this, not that, with real screens.",
          "When a new channel appears — marketplace listing, short-form cover, partner lockup — extend the rules instead of breaking them. The test stays constant: does this piece inherit type and color logic from the core?",
          "If you are funding another logo exploration while product pages still use three button styles, pause. Audit surfaces first. Fix the system, then refine the mark.",
        ],
      },
    ],
  },
  "editorial-web-as-sales": {
    title: "Editorial structure sells better than louder buttons",
    excerpt:
      "Sequence beats stack. A page that orders thesis, proof, and action outperforms a brochure with more images.",
    lead: "Many sites still read like folded flyers: hero, feature grid, testimonial carousel, footer CTA. Nothing is wrong with those blocks alone. The problem is order. Without editorial pacing, visitors scroll past proof and meet the button unconvinced.",
    imageAlt: "Editorial homepage layout with clear typographic hierarchy",
    sections: [
      {
        heading: "Brochures stack; experiences sequence",
        paragraphs: [
          "Stacking adds modules until the page feels full. Sequencing asks what must be believed next. First establish who this is for and what changes after contact. Then show evidence. Only then ask for action.",
          "Each section should earn the next scroll. If a block cannot answer why it exists in the story, cut it or move it. Editing protects attention; it does not remove value.",
        ],
      },
      {
        heading: "Typography is the sales path",
        paragraphs: [
          "On editorial sites, type size and spacing are navigation. Clear H1 to H2 steps create a path even when the menu is minimal. Line length near 65 characters, consistent leading, and enough contrast do more for comprehension than animated counters.",
          "Mobile breaks weak hierarchy faster than desktop forgives it. If the headline wraps into five lines and the subhead vanishes, the promise shrinks with it. Sign off on a phone before you approve desktop drama.",
        ],
      },
      {
        heading: "Place proof where doubt appears",
        paragraphs: [
          "Social proof trapped in a generic trust band is easy to skip. Proof works when it meets the objection: a result line after the promise, a named project after capabilities, a short quote after price context.",
          "One strong case beats ten vague stats. We show real shipped work — manufacturing sites, boutique retail, operational tools — in context instead of percentage badges without a source.",
        ],
      },
      {
        heading: "One primary action, calmly framed",
        paragraphs: [
          "The primary call gets weight: label, placement, whitespace. Secondary paths stay visible but quieter. Equal-weight Buy and Learn buttons cancel each other.",
          "High-consideration categories need time. Editorial pacing respects that. Panic timers and aggressive pop-ups train distrust. A clear next step plus honest copy converts better than pressure.",
          "Map your homepage into thesis, proof, and action columns. Gaps show up immediately — and filling them is copy and layout work, not a plugin install.",
        ],
      },
    ],
  },
  "quiet-luxury-online": {
    title: "Quiet luxury online is restraint with intent",
    excerpt:
      "Muted color and thin type are shortcuts. Real quiet luxury is disciplined space, material, and motion.",
    lead: "Quiet luxury brands often translate physical calm into digital grey. That misses the point. Restraint online means every element justifies its presence. Empty space is not absence — it is structure.",
    imageAlt: "Minimal product still life with soft natural light",
    sections: [
      {
        heading: "Less noise, sharper message",
        paragraphs: [
          "Reduction removes competing claims. One hero message, one supporting line, one path forward. Three equal headlines on one screen guarantee none are remembered.",
          "Narrow palettes are fine. Legibility is not optional. Low saturation must still meet contrast requirements. A page that whispers but cannot be read is neglected, not premium.",
        ],
      },
      {
        heading: "Material on screen",
        paragraphs: [
          "Digital material comes from photography discipline: consistent light, honest texture, controlled depth, crops that respect the product. Stock grins and heavy filters break luxury in one frame.",
          "Type carries material too. Letterspacing, weight, and margin should breathe like packaging. Random system fonts on a luxury story feel like a label printed at home.",
        ],
      },
      {
        heading: "Motion with a job",
        paragraphs: [
          "Animation should clarify hierarchy, not perform. Subtle hover states, considered transitions, and scroll that keeps text readable beat parallax that hides content mid-read.",
          "If motion runs while the visitor is still reading, the layout failed. Pause or remove it. Luxury reads as control.",
        ],
      },
      {
        heading: "One brand in store and browser",
        paragraphs: [
          "Quiet luxury lives on consistency. Short copy in the shop and long paragraphs online splits the brand. Match sentence length, product naming, and call tone across channels.",
          "Performance is part of the feel. Slow loads read as careless. We treat speed and basic accessibility as release criteria — same as spacing and type — because care shows in mechanics too.",
          "Audit your site against your best physical touchpoint. If the screen shouts where the store whispers, align them before the next campaign spend.",
        ],
      },
    ],
  },
  "brief-that-works": {
    title: "A project note that shortens the build",
    excerpt:
      "Clear goals, audience, limits, and references turn subjective feedback into decisions you can ship.",
    lead: "Discovery is not moodboard tourism. It is writing down what success looks like, who the work speaks to, and what is out of scope. Vague input produces expensive loops. Specific input lets design and code move.",
    imageAlt: "Project notes on a studio desk beside a keyboard",
    sections: [
      {
        heading: "Four blocks: goal, audience, constraints, references",
        paragraphs: [
          "Goal names an observable change: first screen states positioning clearly, inquiry form completes, dealer locator gets used — not a mood word like modern or premium.",
          "Audience names who decides, what they fear, what proof they need. Constraints list timeline, budget band, existing assets, integrations, and legal lines you cannot cross.",
          "References show tempo and structure, not theft targets. Include anti-references: sites or styles you reject and why.",
        ],
      },
      {
        heading: "Good sentences beat long decks",
        paragraphs: [
          "One page beats ten scattered docs. If stakeholders disagree, the note surfaces it early instead of at round four of revisions.",
          "Replace we want it cleaner with we need one primary call above the fold and specs downloadable without login. The second sentence is buildable.",
        ],
      },
      {
        heading: "Lock early — or pay later",
        paragraphs: [
          "Strategy, identity, interface, development, launch. Each phase assumes the last is settled. Changing positioning after components exist costs multiples of changing a sketch.",
          "The project note is the first lock. A founder-led studio can move fast when intent is written; we still need that anchor to ship custom work without theme drift.",
        ],
      },
      {
        heading: "Write it together",
        paragraphs: [
          "Best notes are co-authored. You bring domain knowledge; the studio asks the questions that expose gaps. Shared language reduces this is not what we meant later.",
          "Before you email a studio, finish this sentence: When we launch, we will know it worked because ___. If you cannot fill the blank, discovery still has work to do.",
          "Send that sentence with links, constraints, and anti-references. You will get a sharper proposal and a shorter path to launch.",
        ],
      },
    ],
  },
};

export default content;
