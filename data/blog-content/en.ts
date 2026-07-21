import type { BlogArticle } from "../blog";

const content: Record<string, BlogArticle> = {
  "identity-at-first-glance": {
    title: "How trust is built at first glance",
    excerpt:
      "When a site opens, the visitor has not read a line yet. In that second they already start deciding whether to trust the brand.",
    lead: "The first screen is not a shop window. It is a handshake. If the type feels heavy, the spacing feels random, and three buttons shout with equal force, trust arrives late. Clever copy cannot save a messy surface.",
    imageAlt: "Premium brand interface and typography detail",
    sections: [
      {
        heading: "The eye reads composition before sentences",
        paragraphs: [
          "Most brands tie first impression to a slogan. When the screen opens, what shows first is the layout: leading, margins, crop, type weight. Those details answer “is this serious?” before conscious reading begins.",
          "Stanford’s work on web credibility points the same way. People read design as a quality signal, not as decoration. A messy interface makes a strong product look doubtful. A clean interface opens the door before proof arrives.",
        ],
      },
      {
        heading: "Clarity, consistency, measurable intent",
        paragraphs: [
          "Clarity looks simple and is hard. Every element needs a job. If a decorative line, stock photo, or animation smothers the message, it goes. If users know what to do on the first screen, clarity is there.",
          "Consistency matters just as much. A calm home page and a shouting product page sound like two brands. When type, colour, and space drift, trust breaks apart.",
          "Intent ends the debate. “Make it modern” cannot be measured. “Position clear on the first screen, one primary action” can. When intent is written down, revisions shorten because everyone aims at the same target.",
        ],
      },
      {
        heading: "The threshold before purchase",
        paragraphs: [
          "Trust research keeps returning to one point: people want to trust a brand before they buy. In fashion, beauty, lifestyle, and services that bar sits higher. Even when the product is tangible, the experience is abstract. The site makes that abstraction concrete.",
          "What grows trust online is not sparkle. Speed, legible type, a coherent visual language, and unforced claims do. A quiet, ordered surface persuades better than a loud one.",
        ],
      },
      {
        heading: "Reduce the first screen to one sentence",
        paragraphs: [
          "Keep one thesis in the main view: who you are and who you are for. Let the visuals carry that sentence, not fight it. Detail lives below. Scroll is not a penalty. It continues the story.",
          "Then move to the system. Type scale, colour rules, component rhythm. A hero image alone will not scale. With a system, every new page does not have to re-prove the brand.",
          "Check: one thesis on the first screen? Is the type hierarchy more tangled than three steps? One primary CTA? Same clarity on mobile? If those hold, the ground for trust at first glance is ready.",
        ],
      },
    ],
  },
  "system-not-logo": {
    title: "A new logo is not enough. You need a system",
    excerpt:
      "A logo is a signature. What holds the brand up is the set of rules that make that signature speak the same language in every channel.",
    lead: "Thinking a logo refresh will fix the brand is a common mistake. The real problem is rarely the mark. If type, colour, space, photography, and interface components do not hold together, the new logo stays alone.",
    imageAlt: "Colour and grid tools for an identity system",
    sections: [
      {
        heading: "A system turns taste into rules",
        paragraphs: [
          "A visual identity system turns “that looks nice” into “this is the rule.” Heading weight, where primary colour lives, button behaviour, image crop, spacing scale. That is daily production language, not a PDF for the shelf.",
          "A good system answers fast: does this feel like us? A weak one forces every job to start from zero. Tempo drops, consistency frays, and the brand looks slightly different in every channel.",
        ],
      },
      {
        heading: "People remember the experience, not the logo",
        paragraphs: [
          "The logo is the smallest unit. What sticks is the email signature, product page, social cover, packaging, mobile menu, even the invoice. If those do not feel like one family, no logo is good enough.",
          "That sets the investment order. Thesis and rules first, mark second. Do it backwards and you get a beautiful, lonely logo. A lonely logo cannot carry a brand.",
        ],
      },
      {
        heading: "Three layers: core, production, surface",
        paragraphs: [
          "At the core sit thesis, type family, colour system, logo rules and prohibitions. Without that layer locked, expansion gets messy.",
          "In the middle sit grid, components, photography language, iconography. On-brand production speeds up here.",
          "On the outside sit web, social, sales materials, packaging, and space. Designing the web apart from identity means shipping two brands. One lives in a deck. The other lives in the browser.",
        ],
      },
      {
        heading: "A system is not for the shelf",
        paragraphs: [
          "When a new channel opens, rules expand. They do not break. TikTok covers or an ecommerce filter bar, the test stays the same: the new piece must not betray the core thesis or the type and colour language.",
          "Keep documentation short and examples plentiful. Teams do not memorise rules. They produce from examples. Twelve pages opened every week beat an eighty-page brand book nobody opens.",
        ],
      },
    ],
  },
  "editorial-web-as-sales": {
    title: "How editorial web helps you sell",
    excerpt:
      "A strong site does not stack like a catalogue. It sequences the story, speeds up trust, and makes the next step clear.",
    lead: "Too many sites still feel like digital brochures. Heavy imagery, weak hierarchy, unclear next step. An editorial approach flips that. Type, space, and content rhythm become the quiet engine of sales. The job is not to shout. It is to direct.",
    imageAlt: "Editorial web layout on a studio display",
    sections: [
      {
        heading: "Stacking is not sequencing",
        paragraphs: [
          "A brochure stacks information. An experience manages order: thesis, proof, action. As people scroll they should grow more convinced. Each section should build on the last. That does not mean less content. It means intentional content.",
          "Ask every block the same question: why is this here? If there is no answer, the block eats attention instead of serving the page. In editorial web, cutting is editing, not weakness.",
        ],
      },
      {
        heading: "Typography is the visible part of selling",
        paragraphs: [
          "In editorial interfaces, type is not decoration. It builds the reading path. When the scale is clear, the path is clear. Line length, leading, heading rhythm, contrast. That is UX without the jargon fog.",
          "On mobile this gets harsher. Hierarchy that breaks on a small screen shrinks the brand promise. Premium comes from measure, not sparkle. If the headline falls apart on mobile, the desktop drama was already fake.",
        ],
      },
      {
        heading: "Do not lock proof in a separate box",
        paragraphs: [
          "Social proof, stats, and case notes do not have to live in a “trust section.” At the right dose they enter the story. A result line after the thesis. A short quote after the product story. A clear number after process.",
          "A pile of weak statistics breaks the rhythm. One or two strong proofs beat ten soft claims.",
        ],
      },
      {
        heading: "A CTA works better when it does not shout",
        paragraphs: [
          "One primary action. Clear value around it. Secondary actions can stay visible without competing. “Buy now” and “explore” should not share the same weight.",
          "A good editorial site does not rush people. It directs them. In fashion, beauty, and lifestyle, hesitation is normal. Panic kills trust. Calm direction converts better than pushy pressure.",
        ],
      },
    ],
  },
  "quiet-luxury-online": {
    title: "How quiet luxury holds up on screen",
    excerpt:
      "Quiet luxury wants fewer elements and sharper intent. Online that comes from space, material feel, steady rhythm, and restrained motion.",
    lead: "Quiet luxury is not a grey palette or a thin font. It is a discipline that puts measure over display. Online it gets misread often. Dropping saturation is not enough. Every decision has to feel calm and deliberate.",
    imageAlt: "Minimal still life in a quiet-luxury aesthetic",
    sections: [
      {
        heading: "Reduction is not killing content",
        paragraphs: [
          "Simplifying cuts noise. Three messages on one screen means none stick. One message gets remembered. Quiet luxury is not a pose of saying less. It is saying the right thing clearly.",
          "The palette can stay narrow. Contrast still needs intent. Low saturation is not low legibility. An unreadable “premium” page is not premium. It is only dim.",
        ],
      },
      {
        heading: "Material feel and motion",
        paragraphs: [
          "Digital material comes from photo quality, controlled depth, sharp edges, and consistent crop. Stock smiles and heavy filters break the work instantly.",
          "Motion exists for hierarchy, not for show. Every hover does not need to perform. Small, consistent responses are enough. If content vanishes while still in view on scroll, intent is broken. Readability comes first.",
        ],
      },
      {
        heading: "If the store is calm and the site shouts, the brand splits",
        paragraphs: [
          "Channel consistency is the spine of quiet luxury. Short copy, clear product story, unforced CTA, consistent type. Those should stay in the same breath in store and online.",
          "That consistency raises perceived quality. People stop asking “is it expensive?” and start feeling “is it careful?” Care is both the cheapest and most expensive material in digital luxury. It needs no effect. It needs discipline.",
        ],
      },
      {
        heading: "Feeling also connects to numbers",
        paragraphs: [
          "Quiet luxury is not only atmosphere. Clearer first screens, less hesitation, higher form completion, lower bounce. Design decisions meet business results here.",
          "Aesthetics and performance are not opposite poles. A well-built calm interface protects the brand and shortens the path.",
        ],
      },
    ],
  },
  "brief-that-works": {
    title: "Strong projects start with a strong brief",
    excerpt:
      "When goals, audience, and constraints are clear, tempo rises. Revisions drop. Outcomes become discussable.",
    lead: "A discovery call is not a moodboard collecting session. It is the work of writing what counts as success, who the work is for, and what stays out. A vague brief produces expensive revisions. A clear brief speeds up good design.",
    imageAlt: "Notebook and studio desk for a discovery brief",
    sections: [
      {
        heading: "Four clear items in the brief",
        paragraphs: [
          "Goal: what will be different when this ships? “A more modern site” is not a goal. “Position clear on the first screen, discovery form completed” is.",
          "Audience: who are we speaking to, what convinces them, what objections do they hold? Constraints: time, budget, tech, existing assets, prohibitions. References: what is liked and what is not wanted.",
          "Without these, every comment stays subjective. “More premium” cannot be measured. “Trust on the first screen and one clear CTA” can.",
        ],
      },
      {
        heading: "A reference is not a copy",
        paragraphs: [
          "A reference is not a template. It describes tempo, space, type weight, photography, motion level. “We want their logo” slows the work. “This calm and this hierarchy” speeds it up.",
          "Unwanted examples matter just as much. Knowing what something is not gives as much direction as knowing what it is. In a good brief the “do not” list is as open as the “do” list.",
        ],
      },
      {
        heading: "Early lock, late cost",
        paragraphs: [
          "Discovery and strategy, creative direction, identity, interface, development, launch. Each stage locks the one before it. Decisions left open early get expensive late. Changing direction after code and content exist costs far more than changing a sketch.",
          "The brief is the first link in that chain. It can be short. It cannot be vague. One clear page beats ten scattered ones.",
        ],
      },
      {
        heading: "A co-written brief cuts friction",
        paragraphs: [
          "The best brief is not a one-sided demand. The studio asks, the brand answers, clarity is shared. That shared writing reduces later “that is not what we meant” arguments.",
          "One question before you start: when the project is done, what single sentence will describe success? If you can write it, the brief is ready to work.",
        ],
      },
    ],
  },
};

export default content;
