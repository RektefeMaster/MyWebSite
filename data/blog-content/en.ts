import type { BlogArticle } from "../blog";

const content: Record<string, BlogArticle> = {
  "what-is-seo": {
    title: "What is SEO? A practical guide for business websites",
    excerpt:
      "Learn how search engines discover, understand, and rank business websites, and which SEO decisions belong in the build before launch.",
    lead: "SEO is the work that helps a search engine find a page, understand its subject, and judge whether it deserves to appear for a query. For a business, the useful question is more specific: can the right customer find the right page, understand the offer, and take the next step? That question reaches into site architecture, writing, performance, and reputation. It cannot be solved by adding keywords after the website is finished.",
    imageAlt: "Laptop and magnifying glass used for search engine research",
    sections: [
      {
        heading: "Search starts with eligibility",
        paragraphs: [
          "A search engine first has to discover the URL. Its crawler follows links, reads sitemaps, and returns to pages it already knows. Pages hidden behind broken navigation, blocked by crawl rules, or disconnected from the rest of the site can be missed before their content is ever evaluated.",
          "The next step is indexing. The engine stores what it can understand about the page, including the title, main heading, body copy, images, links, and structured data. Indexing still does not promise visibility. It makes the page available for consideration when a relevant search occurs.",
        ],
      },
      {
        heading: "Ranking is a page-by-page decision",
        paragraphs: [
          "Search engines rank pages for individual queries. A company does not hold one universal SEO position. Its cabinet installation page may be a strong match for one local query while its homepage is a weak match for another.",
          "This is why useful SEO work assigns a clear subject to every important page. A service page should explain one service well. A location page needs information specific to that market. A project case should show the work and provide enough context to support the claim being made. Combining every topic on one long homepage makes each topic harder to interpret.",
          "Competition also matters. A technically sound page can still rank below a more useful or better-established source. Any fixed promise of first place ignores that basic fact.",
        ],
      },
      {
        heading: "Page titles set the promise",
        paragraphs: [
          "The title tag is often the first version of a page that someone sees in search. It should name the subject in ordinary language and distinguish the page from the others on the site. A clear title such as \"Custom Cabinet Manufacturing in Charlotte\" says more than a generic line about quality and service.",
          "The H1 should continue the same promise when the visitor arrives. Supporting headings then divide the answer into useful parts. If the search result promises pricing guidance and the page opens with a company history, the structure has broken the reader's expectation.",
          "Meta descriptions influence how the result is presented. Write them as concise summaries of the page. Repeating the target phrase several times only makes the result harder to trust.",
        ],
      },
      {
        heading: "Technical SEO protects access and speed",
        paragraphs: [
          "Technical SEO covers the conditions that let search engines and people use the site reliably. Important pages need crawlable links, consistent canonical URLs, a valid XML sitemap, and intentional index rules. Old URLs need redirects when a redesign changes the address. Multilingual sites need accurate hreflang references between the language and market versions.",
          "Mobile performance belongs in the same review. Oversized images, unnecessary scripts, and poorly loaded fonts delay the first useful view. Forms, menus, and contact actions also need to work on a small screen. A page that can be indexed but is difficult to use is an incomplete result.",
          "Our technical SEO checklist article turns these points into a pre-launch review. Run that review before the domain changes, then repeat the relevant checks whenever the site structure changes.",
        ],
      },
      {
        heading: "Search intent determines the right page",
        paragraphs: [
          "A person asking \"what is SEO?\" needs an explanation. Someone searching \"technical SEO agency\" is comparing providers. A search for \"cabinet quote Charlotte\" suggests a much closer purchase decision. Those searches should not all land on the same generic page.",
          "Start by identifying the decision behind a query. Then choose a page format that can answer it. Articles are useful for education, service pages explain an offer, and project cases supply evidence. The writing should cover the questions that naturally follow, without stretching a simple answer into an essay for word count.",
          "Internal links connect those stages. An educational article can lead to a detailed checklist, which can lead to the relevant service or contact path. The link should make sense in the sentence where the need arises.",
        ],
      },
      {
        heading: "Reputation is built outside the website too",
        paragraphs: [
          "Search engines also look for evidence beyond your own pages. Accurate business profiles, relevant citations, credible mentions, and links from sources with a legitimate relationship to the work all help establish context.",
          "For a local business, inconsistent names, addresses, or phone numbers create avoidable confusion. For a manufacturer or specialist firm, a well-documented project may provide stronger evidence than dozens of low-quality directory listings. Link packages sold by volume rarely reflect a credible recommendation and can create more risk than value.",
        ],
      },
      {
        heading: "Content ownership matters after launch",
        paragraphs: [
          "Services change. Staff add new locations, update prices, publish projects, and retire old offers. The website needs an agreed way to handle those changes without breaking titles, links, or page structure.",
          "A suitable CMS or admin panel gives the team control over the fields it actually needs. That may include page copy, title tags, meta descriptions, images, and article publishing. The editing interface should place useful limits around those fields so a routine update does not damage the layout.",
          "We decide that ownership during scope. Waiting until handoff often leaves the client with either too little control or an editing system far more complicated than the work requires.",
        ],
      },
      {
        heading: "SEO and paid search solve different timing problems",
        paragraphs: [
          "Paid search can buy immediate placement for selected queries while the campaign is funded. Organic visibility usually takes longer because pages must be discovered, evaluated, and compared with established competitors.",
          "The two channels can inform each other. Paid campaigns reveal which messages attract qualified interest. Search-ready pages provide a stronger destination for those campaigns and continue to be useful outside the advertising window. Neither channel can compensate for an unclear offer or a broken contact path.",
        ],
      },
      {
        heading: "What to include in a website scope",
        paragraphs: [
          "Ask who is responsible for page titles, metadata, headings, internal links, redirects, the sitemap, and index settings before launch. Confirm how performance will be reviewed on mobile and who will have access to measurement tools. For multilingual work, ask how each market's search language will be researched and written.",
          "Then discuss maintenance. Identify which pages the team can edit, which changes require development, and how future URLs will be handled. These answers turn SEO from a vague line in a proposal into defined work with an owner.",
          "Put these answers in the brief before requesting estimates. If a proposal still describes SEO with one unqualified line, ask for the work behind that line before comparing prices.",
        ],
      },
    ],
  },
  "website-pricing-why-cheap-costs-more": {
    title: "How much does a website cost? Read the scope first",
    excerpt:
      "Website pricing follows the work included. Learn how design, development, content control, SEO preparation, and post-launch ownership change a quote.",
    lead: "A website quote is useful only when it describes the website being priced. A five-page service site, a multilingual corporate platform, and a custom site with a CRM panel are different products. Yet proposals often compress all three into the same line item: website design and development. The price gap makes sense once the hidden decisions are written down.",
    imageAlt: "Project notes and a calculator used to review a website quote",
    sections: [
      {
        heading: "Make the proposals describe the same job",
        paragraphs: [
          "Begin with page count and page type. A homepage plus four simple information pages requires less work than a site with service templates, a project archive, articles, multilingual routes, and custom inquiry flows. Ask which pages are unique designs and which share a template.",
          "Then look at responsibility. Who supplies and edits the copy? Who prepares images? Does the agency migrate existing content and preserve old URLs? Does the quote include an admin panel, analytics, technical SEO preparation, training, or support after release? A low number often reflects a shorter list of responsibilities.",
          "Once each proposal answers those questions, you can compare price with far less guesswork.",
        ],
      },
      {
        heading: "Custom work spends time before development",
        paragraphs: [
          "A sound project begins by defining the audience, the offer, the required actions, and the material already available. That discovery work prevents a common failure: approving a polished first screen before anyone has decided how the rest of the site should function.",
          "Interface design follows. Typography, spacing, components, mobile behavior, and content hierarchy need rules that can survive across the full site. Development turns those decisions into reusable code and connects forms, content, data, or external services where required.",
          "Quality review also takes time. The primary paths should be tested on mobile and desktop. Performance, core accessibility, metadata, headings, crawlable links, and form behavior need a deliberate check before handoff. A quote that includes this work should name it.",
        ],
      },
      {
        heading: "Very low prices usually narrow ownership",
        paragraphs: [
          "A low-cost offer may be entirely appropriate for a temporary page with a small scope. Trouble starts when a template setup is sold as a custom business platform without explaining its limits.",
          "Marketplace themes bring their own layout assumptions and plugin dependencies. The site may need several add-ons to approximate the requested behavior, which increases maintenance and can slow the page. If the provider also skips content migration, redirects, technical SEO, or training, the client inherits those tasks at launch.",
          "Ask who can change the site after handoff and who is responsible when a critical path fails. A proposal with no answer has left a future cost undefined.",
        ],
      },
      {
        heading: "Handoff deserves its own section",
        paragraphs: [
          "Confirm who owns the domain, hosting account, analytics property, source code, and third-party subscriptions. Access should sit with the business or follow a written arrangement everyone understands.",
          "Content control also needs a decision. Some teams need a simple interface for articles and service pages. Others need bookings, lead records, roles, or approval states. Adding a large generic CMS can be just as unhelpful as providing no editing access at all.",
          "Finally, ask how support works. The proposal should distinguish a defect in the agreed delivery from a new request. That distinction protects both sides and keeps later conversations factual.",
        ],
      },
      {
        heading: "Compare clarity as well as price",
        paragraphs: [
          "Place the proposals side by side and mark each requirement as included, excluded, optional, or unanswered. Pay particular attention to custom design, responsive behavior, content migration, technical SEO, editing access, integrations, training, support, and account ownership.",
          "Review relevant work in context. A screenshot shows visual taste; a project description should explain the business problem and what was delivered. For a panel or chatbot, ask to see the operating flow as well as the public screen.",
          "Judge the proposal by how well its scope, responsibilities, and evidence match the project. Clear language shows that the provider has thought through the work you are buying; the number alone cannot do that.",
        ],
      },
      {
        heading: "A smaller first release can protect the budget",
        paragraphs: [
          "When the full scope exceeds the current budget, reduce the release instead of weakening every part of it. Keep the pages and functions needed for the main customer path. Schedule secondary content, advanced motion, or additional tools for a later phase with a defined dependency.",
          "This approach also gives the team a usable system sooner. A focused corporate site with a reliable inquiry route has a clear job. A half-finished website, panel, chatbot, and mobile app leaves four unclear jobs.",
          "Start an estimate with one page: who the site is for, what they need to do, which content already exists, and what must connect behind the scenes. That summary lets each provider mark the open decisions that still affect price.",
        ],
      },
    ],
  },
  "whatsapp-chatbot-for-business": {
    title: "WhatsApp chatbot for business: when automation helps",
    excerpt:
      "A practical guide to WhatsApp business automation for common questions, appointments, CRM records, and a clear handoff to staff.",
    lead: "A useful WhatsApp chatbot finishes a small set of repeatable tasks and knows when to stop. It can answer common service questions, collect the details needed for an appointment, and create a record for the team. It should hand the conversation to a person whenever the request needs judgment, negotiation, or care that a scripted flow cannot provide.",
    imageAlt: "Phone showing a business messaging conversation beside a notebook",
    sections: [
      {
        heading: "Start with the conversations already happening",
        paragraphs: [
          "Review a representative set of recent messages before designing a flow. Group the requests by the work required: simple information, appointment or availability checks, changes to an existing booking, sales questions, complaints, and requests that are difficult to classify.",
          "The repeated, rule-based groups are candidates for automation. The wording people actually use should shape the assistant's prompts and reply options. A flow invented from a service brochure will miss abbreviations, incomplete questions, and the order in which customers naturally provide details.",
          "This review also exposes missing business rules. If staff give different answers about deposits or cancellation windows, software will only reproduce that inconsistency faster. Agree on the policy first.",
        ],
      },
      {
        heading: "Define the point where staff take over",
        paragraphs: [
          "The handoff boundary is a product decision. Custom quotes, sensitive complaints, unusual service requests, and repeated misunderstanding usually need a person. The assistant should say that the conversation is moving to the team and preserve what has already been collected.",
          "A good handoff gives staff a short, factual summary: customer name, requested service, preferred time, and the unresolved question. Asking the customer to repeat the entire conversation creates extra work and makes the automation visible for the wrong reason.",
          "Staff also need a way to pause automation in an active thread. Ownership should be obvious so the bot and a person do not send competing replies.",
        ],
      },
      {
        heading: "Booking requires one source of availability",
        paragraphs: [
          "Appointment automation is only dependable when the bot checks the same availability used by the team. Open hours, service duration, buffers, staff assignment, holidays, and cancellation rules all affect whether a slot can be offered.",
          "The flow should reserve the selected time before confirming it and release that reservation when the customer cancels under the agreed rules. If Instagram, phone bookings, and WhatsApp use separate calendars, double booking remains likely regardless of how polished the chat feels.",
          "Start with the simplest booking state the business can maintain. Extra branches add little value when the underlying calendar is not kept current.",
        ],
      },
      {
        heading: "Connect the conversation to an operating record",
        paragraphs: [
          "A chatbot that only sends messages leaves staff searching through threads for names, times, and previous decisions. A CRM or booking panel can turn each completed flow into a structured record with the channel and relevant notes attached.",
          "The panel should reflect the team's daily work. A clinic may need appointment status and reminders. A sales team may care about service interest, follow-up ownership, and notes. Copying every message into an oversized generic CRM usually creates more fields than anyone will maintain.",
          "METEK portfolio work includes WhatsApp booking assistance and customer-panel workflows for appointment-based businesses. We scope the chat and operating interface together when both are required.",
        ],
      },
      {
        heading: "Test the interrupted paths",
        paragraphs: [
          "The happy path is easy to demonstrate: the customer selects a service, chooses an open time, and confirms. Production testing should also cover misspellings, abandoned conversations, duplicate requests, unavailable times, cancellations, changed policies, and messages arriving while a staff member is active.",
          "Check the language as closely as the logic. Replies should be brief enough for a phone screen and specific enough to move the task forward. Every prompt needs an exit or handoff route. A customer should never be trapped in a loop because none of the supplied choices match the request.",
          "After launch, review the points where people ask for a person or repeat themselves. Those moments reveal which wording or rule needs attention.",
        ],
      },
      {
        heading: "Scope the first release around one useful flow",
        paragraphs: [
          "Begin with the highest-volume task that has stable rules. For many appointment businesses, that is answering service questions and collecting a booking request. Add reminders, cancellations, another channel, or more CRM functions after the first flow is understood and maintained consistently.",
          "Before commissioning the work, prepare current services and price guidance, hours, availability rules, cancellation policy, required customer details, and staff handoff conditions. These are the inputs the software depends on.",
          "Anonymized conversations are more useful than a feature wishlist because they show the language, interruptions, and exceptions the flow must handle. Use those examples alongside the business rules to scope the first release, including any WhatsApp or Instagram connection to the booking panel and the point where staff take over.",
        ],
      },
    ],
  },
  "technical-seo-checklist-business-website": {
    title: "Technical SEO checklist for a business website launch",
    excerpt:
      "Use this pre-launch technical SEO checklist to review index settings, titles, headings, mobile performance, redirects, sitemaps, and multilingual pages.",
    lead: "Technical SEO is easiest to fix while the website structure is still visible to the people building it. By launch week, page addresses, templates, content fields, and third-party scripts have already shaped the result. Use this checklist during development, then run it once more against the production domain before announcing the site.",
    imageAlt:
      "Laptop displaying a website report during a technical SEO review",
    sections: [
      {
        heading: "Confirm which pages should appear in search",
        paragraphs: [
          "List every public page that should be indexed and every utility page that should stay out. Staging environments, internal search results, duplicate filter pages, and unfinished routes should not enter the public index by accident.",
          "Check robots.txt, page-level robots directives, authentication, and canonical tags against that list. A page can be linked in the navigation and still carry a noindex directive left over from development. The production domain should also be the canonical source after launch.",
          "Open important pages without relying on client-side clicks that a crawler may not reproduce. Each one should have a stable URL and at least one crawlable link from another relevant page.",
        ],
      },
      {
        heading: "Review titles, descriptions, and heading structure",
        paragraphs: [
          "Every important page needs a unique title that names its subject. Keep the useful words near the beginning and add the brand where it helps distinguish the result. Write a specific meta description for the page instead of copying the homepage summary across the site.",
          "Use one visible H1 that matches the page's main subject. Arrange H2 and H3 headings by meaning, without skipping levels for visual size. Screen styling can change how a heading looks; the document structure should still make sense when read as an outline.",
          "Compare the search result promise with the first screen. A title about custom admin panel development should open on that service, not on a broad statement about digital experiences.",
        ],
      },
      {
        heading: "Test the mobile path on a physical device",
        paragraphs: [
          "Load the production-like build on a phone over an ordinary connection. Check how quickly useful content appears and whether large images, video, fonts, or third-party scripts delay interaction. Serve images close to their displayed size and reserve their layout space to reduce movement while the page loads.",
          "Complete the main task with one hand. Open the menu, follow a service link, use the quote or booking form, and confirm the result. Verify field labels, error messages, focus order, tap targets, and keyboard behavior. A contact button that sits on screen but fails to open the intended channel has not passed the review.",
          "Measure performance, then inspect the cause of any poor result. A score alone does not identify which asset or script should change.",
        ],
      },
      {
        heading: "Map old addresses to the new structure",
        paragraphs: [
          "For a redesign, export the existing URLs before the new site replaces them. Keep addresses that still make sense. Where a page has moved, add a direct permanent redirect to the closest new equivalent. Sending every old URL to the homepage discards context and gives visitors a poor landing point.",
          "Test redirects for loops and chains. Update internal links so the new site points directly to the final URL. Then check canonical tags for the same preferred address, including the chosen protocol, hostname, and trailing-slash convention.",
          "Review the 404 page and status code as well. A helpful design cannot compensate for a missing page that incorrectly returns a successful 200 response.",
        ],
      },
      {
        heading: "Publish clean sitemaps and language references",
        paragraphs: [
          "The XML sitemap should contain canonical, indexable URLs from the production site. Remove staging addresses, redirects, error pages, and routes excluded from search. Submit the sitemap through the relevant search tools after launch and monitor whether important pages are being discovered.",
          "Multilingual sites need reciprocal hreflang references between equivalent pages. Use the correct language and regional codes, and include a sensible default where the routing calls for one. Each referenced URL must resolve successfully and point back to its alternatives.",
          "Translated navigation does not prove the setup. Language metadata and copy written for each market are separate checks.",
        ],
      },
      {
        heading: "Finish with content control and monitoring",
        paragraphs: [
          "Confirm that the team can update the fields it owns after handoff. If editors can publish service pages or articles, the CMS should support titles, descriptions, headings, image alternatives, and clean URLs with appropriate safeguards.",
          "Before release, verify analytics and search-console access, form delivery, consent behavior where applicable, and the main conversion events. Record the launch date and crawl a final production snapshot so later problems can be compared with a known state.",
          "Keep the completed checklist with the release notes. When a later content or routing change touches one of these controls, rerun the affected checks instead of waiting for the next redesign.",
        ],
      },
    ],
  },
  "identity-at-first-glance": {
    title: "Your website's first screen is already making a brand claim",
    excerpt:
      "A website first impression comes from hierarchy, spacing, typography, imagery, and the clarity of the next action before visitors study the logo.",
    lead: "Visitors meet the interface before they study the business. They notice whether the first screen feels crowded, whether the type is controlled, and whether one action has been given priority. Those decisions form a brand impression while the headline is still being read. A logo cannot correct a page whose hierarchy suggests uncertainty.",
    imageAlt: "Close view of typography and spacing on a brand website",
    sections: [
      {
        heading: "The first screen sets reading conditions",
        paragraphs: [
          "A useful first screen answers enough to let the visitor continue: whose site this is, what kind of offer is being presented, and where the page wants attention next. It does not need to contain the full sales argument.",
          "Crowding weakens that first decision. Several large headings, equal-weight buttons, badges, and moving elements force the visitor to decide what the designer should have decided. Empty space helps only when it clarifies relationships; large gaps without structure create a different kind of confusion.",
          "We prefer to test the first screen as a reading sequence. Cover the logo and ask whether the category is still clear. Remove the color and see whether hierarchy survives. Check the same composition on a narrow phone, where vague priorities become obvious quickly.",
        ],
      },
      {
        heading: "Identity lives in repeated decisions",
        paragraphs: [
          "Typography, spacing, image treatment, button language, and motion establish a visual grammar. The grammar becomes recognizable because it continues across service pages, contact forms, project cases, and operational screens.",
          "Inconsistency usually enters through small exceptions. A new page uses a different radius. A campaign introduces another accent color. The admin panel falls back to unrelated components. Each exception looks minor, but together they make the business feel assembled from separate sources.",
          "A project-specific component system gives those decisions a home. It allows the brand to expand without asking a designer to reinterpret the basics on every page.",
        ],
      },
      {
        heading: "Motion establishes the page's pace",
        paragraphs: [
          "Animation can reveal order, explain a transition, or direct attention. It becomes a distraction when text moves while someone is reading, when every card performs the same entrance, or when the page delays access to information for spectacle.",
          "The appropriate pace depends on the business. A fashion label and an operations panel can share high production standards while using very different motion. In both cases, the interface should respond quickly, respect reduced-motion preferences, and stop when the purpose of the movement is complete.",
          "Sound and autoplay deserve even more restraint. A visitor should keep control over the environment, especially on a business website opened at work or on a phone.",
        ],
      },
      {
        heading: "Audit the system before redrawing the mark",
        paragraphs: [
          "Take screenshots of the homepage, one service page, the contact route, a common mobile screen, and any customer-facing email or panel. Place them together. Look for changes in type scale, margins, image crop, button wording, and visual density.",
          "Then write the one sentence the first screen needs to carry. Choose one primary action and decide which proof should appear close enough to support it. This gives the redesign an editorial brief instead of a collection of style references.",
          "Write the decisions where designers and developers will use them: the type scale, spacing rules, color roles, image treatment, and primary action. The next page should inherit those choices without reopening the same debate.",
        ],
      },
    ],
  },
  "system-not-logo": {
    title: "Before redesigning the logo, audit the brand system",
    excerpt:
      "A CSS design system connects color, type, spacing, components, and content rules across the public website and the tools employees use.",
    lead: "A logo redesign is often asked to solve a consistency problem that began elsewhere. The website has three button styles, social posts use an unrelated typeface, and the admin panel looks like a different company. Redrawing the mark may improve the symbol itself. The website, social posts, and admin panel become recognizably related when they follow shared type, color, image, component, and language rules.",
    imageAlt: "Color samples, typography, and interface components arranged in a grid",
    sections: [
      {
        heading: "Find where the identity breaks",
        paragraphs: [
          "Start with the places customers and staff see repeatedly: website templates, inquiry forms, confirmations, invoices, presentations, social posts, and internal tools. The most visible inconsistency may be a layout or writing problem rather than a logo problem.",
          "Document what changes from surface to surface. Compare heading sizes, body type, color use, spacing, icon style, image direction, and the language of common actions. This inventory gives the identity project an operating context.",
          "The mark still matters. It needs suitable variants, clear space, and small-size behavior. Its role becomes easier to judge once the surrounding system is visible.",
        ],
      },
      {
        heading: "Turn visual choices into production rules",
        paragraphs: [
          "A design system records decisions in a form designers and developers can use. Color tokens describe purpose, such as text, surface, border, and accent. A type scale assigns sizes and line heights to specific levels. Spacing rules establish consistent relationships between content and components.",
          "Components carry those rules into use. Buttons, fields, cards, navigation, tables, and status messages need defined states as well as a preferred appearance. The system should explain focus, error, disabled, and loading behavior where those states exist.",
          "For web work, we connect the design rules to source-controlled CSS and reusable components. A public site and an admin panel can share type, color, controls, and interaction states while the panel uses the denser layout its daily tasks require.",
        ],
      },
      {
        heading: "Build the guide around decisions people make",
        paragraphs: [
          "A useful guide answers practical questions quickly. Which logo variant belongs on a dark image? How much space surrounds a heading? Which button is primary? How should product photography be cropped? What wording should confirmation messages use?",
          "Show approved and rejected examples on production surfaces. A compact reference connected to components is easier to follow than a long document made mostly of brand adjectives.",
          "Assign ownership too. Someone should decide whether a new pattern becomes part of the system or remains a one-off. Without that review, exceptions accumulate until the guide describes a brand that no longer exists in production.",
        ],
      },
      {
        heading: "Know when the logo still needs work",
        paragraphs: [
          "The audit may reveal a legitimate mark problem: poor legibility at small sizes, missing variants, weak contrast, or a shape that does not reproduce reliably. Address those constraints with a focused redesign and update the system at the same time.",
          "If the mark works and the surrounding interfaces do not, spend the project on typography, components, imagery, and implementation. That is where consistency will be experienced most often.",
          "Begin with the surfaces customers and staff use every day. Correct the shared type, color, spacing, component, and voice rules there. Redesign the mark only when the audit exposes a real reproduction or legibility problem.",
        ],
      },
    ],
  },
  "editorial-web-as-sales": {
    title: "A business website should make one argument at a time",
    excerpt:
      "Organize a business website around the buyer's next question, place proof where doubt appears, and give each page one clear primary action.",
    lead: "Many business websites contain the right material in the wrong order. The service explanation is buried below a company timeline, project evidence sits on a separate page, and several contact buttons compete without context. Improving the sales path often begins with editing the sequence rather than adding another section.",
    imageAlt: "Editorial website layout with a clear reading order",
    sections: [
      {
        heading: "Write the visitor's decision sequence",
        paragraphs: [
          "Choose one audience for the page and name the decision they are trying to make. A cabinet dealer evaluating a manufacturer needs different proof from a homeowner requesting a local installation quote. A single page can acknowledge related audiences, but one of them must set the order.",
          "Write the questions that follow naturally. What is being offered? Is it relevant to my situation? Can this company do the work? What happens when I make contact? The page structure should answer those questions in roughly that order.",
          "This exercise exposes sections that have no clear job. Some belong deeper in the site. Others repeat an earlier claim with different adjectives and can be removed.",
        ],
      },
      {
        heading: "Place evidence beside the claim it supports",
        paragraphs: [
          "A general testimonial strip near the footer asks visitors to remember which earlier promise it was meant to prove. Put evidence closer to the moment of doubt. A service claim can lead directly to a relevant project, a process statement can show the artifact produced at that stage, and a product promise can sit beside a specific specification.",
          "Use evidence the reader can evaluate. Named projects, clear deliverables, photographs of the work, process documents, and accurate technical details carry more weight than unsourced percentages or generic praise.",
          "Proof can stay compact as long as it arrives before the visitor is asked to accept the next claim.",
        ],
      },
      {
        heading: "Give the primary action context",
        paragraphs: [
          "Buttons work better when the reader understands what follows. \"Request a cabinet quote\" sets a clearer expectation than \"Get started.\" A project inquiry may need a short note explaining which details help the first response.",
          "Secondary routes can remain available. Phone, WhatsApp, email, and a detailed form may all matter, but they should not receive identical visual weight in every section. Choose the path that fits the page and place the alternatives where a visitor would reasonably look for them.",
          "Avoid forcing urgency with timers or repeated interruptions unless a factual deadline exists. Trust is easier to keep when the interface allows a considered purchase to remain considered.",
        ],
      },
      {
        heading: "Edit a homepage as a continuous read",
        paragraphs: [
          "Print the copy without the design or place every section in one plain document. Read it from top to bottom. Mark the subject of each section, the new information it contributes, and the action it prepares. Repeated subjects and unexplained jumps become easy to see.",
          "Then review the design at mobile width. Check where headings wrap, whether proof stays near its claim, and how much content appears before the first useful action. Desktop composition can hide a weak sequence inside generous space.",
          "Before setting the visual scope, pair each current page with one sentence naming the action it should prepare. Review that sequence on its own; it will show whether the redesign needs new content or a better order for facts already on the site.",
        ],
      },
    ],
  },
  "quiet-luxury-online": {
    title: "Luxury website design needs restraint with a purpose",
    excerpt:
      "Luxury website design depends on disciplined hierarchy, original imagery, readable typography, controlled motion, and fast delivery on mobile.",
    lead: "A restrained website can feel precise or unfinished. The difference lies in the decisions around the empty space: what it frames, which detail receives attention, how the page moves, and whether the visitor can still act without searching. Luxury presentation requires careful editing because every weak element has more room to show.",
    imageAlt: "Product still life photographed in soft natural light",
    sections: [
      {
        heading: "Space should clarify value",
        paragraphs: [
          "Begin with the product or experience that deserves the first frame. Give it enough space to be read and pair it with a concise line that adds information. Large margins cannot rescue a vague headline, and a sparse page still needs an obvious route to explore, book, or inquire.",
          "Hierarchy can remain quiet without becoming faint. Body text needs comfortable size and contrast. Buttons need visible states. Navigation should be easy to locate. Pale text and tiny labels may look delicate in a mockup while failing in daylight on a phone.",
          "Use a narrow palette deliberately. Assign each color a role so accents remain meaningful when more pages are added.",
        ],
      },
      {
        heading: "Photography carries material detail",
        paragraphs: [
          "Original imagery gives the interface something specific to present: finish, texture, scale, setting, and human handling. Art direction should decide how close the camera sits, how light behaves, and which details repeat across the series.",
          "Image crops need rules for different screens. A wide hotel interior may lose its subject in a mobile portrait frame. A product photograph may need protected space for text. These choices belong in the content plan before the layout is locked.",
          "Compression matters too. Large source files should be served in formats and sizes appropriate to their boxes. Visible softness and long waits both weaken the sense of care.",
        ],
      },
      {
        heading: "Typography and motion establish pace",
        paragraphs: [
          "Typography needs a clear division of labor. A distinctive display face can carry titles while a restrained text face handles longer reading. Line length, leading, and spacing should remain consistent across product, editorial, and contact pages.",
          "Motion should support that reading pace. A transition may reveal an image crop or make navigation state clear. Continuous parallax behind body copy, repeated letter animations, and delayed controls make the visitor wait for the interface to finish performing.",
          "Test reduced-motion behavior and stop decorative loops outside the visible area. Controlled movement includes knowing when the page should be still.",
        ],
      },
      {
        heading: "Compare the website with the strongest physical touchpoint",
        paragraphs: [
          "Place the website beside the shop, room, packaging, menu, or appointment experience that best represents the brand. Compare language, product naming, image quality, and the level of service implied by the interaction.",
          "A mismatch often appears in small details. The physical experience may be attentive while the contact form gives no guidance. Packaging may use precise materials while the site relies on generic stock photography. The website should carry the same standard into a different medium.",
          "For a quick review, check body-text contrast, mobile type size, the purpose of each large gap, image crops at narrow widths, animation while reading, and the time it takes to reach a useful action. Each item should have a practical answer.",
          "Use the strongest physical touchpoint as the review standard at every milestone. Restraint has stopped serving the brand when it makes the type difficult to read or leaves the next action hard to find.",
        ],
      },
    ],
  },
  "brief-that-works": {
    title: "How to write a project brief an agency can use",
    excerpt:
      "A useful web or software project brief defines the decision, audience, constraints, available material, and review process in language a team can build from.",
    lead: "A project brief should reduce uncertainty at the start of the work. Keep it short and factual. It gives the client and agency enough information to discuss the same problem, identify missing decisions, and write a scope that can be reviewed later.",
    imageAlt: "Project notes beside a keyboard during website planning",
    sections: [
      {
        heading: "Open with the business decision",
        paragraphs: [
          "State why the project exists now. The current site may be difficult to update, the company may be entering a new market, or appointment requests may be getting lost across messaging channels. Describe the observable problem before suggesting a feature list.",
          "Then name the action the new surface should support. Examples include requesting a trade quote, booking an available time, finding a local dealer, or managing incoming leads. \"Look more modern\" can be a valid preference, but it does not tell a team what the website must help someone accomplish.",
          "If several actions matter, rank them. That priority will affect navigation, page order, data requirements, and the first release.",
        ],
      },
      {
        heading: "Describe the audience, material, and constraints",
        paragraphs: [
          "Identify who makes the decision and what they need to know first. Include the market and language where relevant. A US trade buyer, a local appointment customer, and an internal operations user bring different vocabulary and expectations to the interface.",
          "List what already exists: brand files, copy, photography, product data, customer records, domain access, analytics, and any current system that must connect to the new work. Missing material affects timing as much as development does.",
          "Write the constraints plainly. Include the desired release window, budget range if available, legal or compliance requirements, required integrations, internal approval process, and people responsible for decisions. Hiding a constraint does not make it disappear; it only moves the conversation to a more expensive stage.",
        ],
      },
      {
        heading: "Use references to explain decisions",
        paragraphs: [
          "References are useful when each one comes with a reason. Point to the navigation of one site, the editorial pace of another, or the way a third presents technical specifications. A folder of unexplained screenshots asks the agency to guess which qualities matter.",
          "Include counterexamples as well. Explain which patterns feel wrong for the brand or create problems for users. Specific rejection is useful: \"the text becomes too small on mobile\" gives the team more direction than \"this does not feel premium.\"",
          "References should inform the project rather than prescribe a copy. The final interface still needs to respond to your content, audience, and operating constraints.",
        ],
      },
      {
        heading: "Turn the brief into a review tool",
        paragraphs: [
          "During scope, convert the brief into pages, functions, responsibilities, exclusions, and approval points. Each later review can then return to the original decision: does this work support the intended user action under the agreed constraints?",
          "Update the document when an approved change affects that decision. Keep changes visible instead of allowing them to enter through scattered messages. This gives the team a current reference and makes the effect on timing or cost easier to discuss.",
          "A compact example might read: \"We are replacing our dealer website so US trade buyers can review cabinet lines and request a quote. We have approved brand files and product photography. The sales director approves content. Launch is planned before the autumn trade event. CRM replacement is outside this project.\"",
          "Before sending the brief, ask someone outside the project to read it once. If they can identify the business problem, intended user, required action, and approval owner without extra context, an agency has enough to begin a useful scope discussion.",
        ],
      },
    ],
  },
};

export default content;
