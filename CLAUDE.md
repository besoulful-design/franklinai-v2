# FranklinAI — Project Instructions (Version 26, Current)

> **Version 26 updates:** One working session in Claude Code refining the newsletter (Operator) card and the shared card typography. No positioning or copy-strategy changes; "The Operator" name is kept. This was the first session run in Claude Code rather than claude.ai — the instructions file now lives in the repo as `CLAUDE.md` and is the same document as the claude.ai project instructions.
>
> **The Operator card was rebalanced.** The masthead was top-heavy and inconsistent with the other cards. Two moves fixed it: (1) **"The Operator" title shrunk** from `clamp(36px, 5.5vw, 58px)` to **`clamp(34px, 5vw, 50px)`** and pulled *out* of the unified section-heading tier — it is now its own smaller treatment; (2) **the "Newsletter" label grew** from `clamp(26px, 4vw, 30px)` to **`clamp(30px, 5vw, 35px)`**, so it now matches the standard secondary sub-title tier (GlowPT, McKenzie). The V25 "Newsletter label is a deliberate smaller exception" rule is **retired**. See Header Sizing and Newsletter Card.
>
> **"The Operator" is now set in true italic.** The title is the one heading on the page that is a *publication name* rather than a section label, so it is set in italic Playfair (`fontStyle: 'italic'`) to read as a masthead. This required the font import to load a real italic face — see the font-import fix below. The name itself was reconsidered and **kept**: it names the reader who *operates* the practice, not David, and the italic marks it as a title. See Header Sizing.
>
> **The header-to-subheader gap was tightened on every card.** The real cause was that `card-heading` set no `line-height`, so it inherited the body's `1.6`, padding dead space inside each heading's line box beneath the glyphs. V26 sets **`lineHeight: '1.2'`** on the six single-line section headings (About keeps `1.1` for its two lines; "The Operator" also uses `1.2`). This is what V20's margin-only tighten could never reach. See Card Heading Spacing.
>
> **Card top and bottom padding was tightened.** Every `.site-card` now carries inline **`paddingTop: '16px'`** (was 20) and **`paddingBottom: '24px'`** (was the CSS 40). Left and right stay at 40px. See Card Top & Bottom Padding.
>
> **The Subscribe button now reads "Subscribe Free."** The free newsletter now states its price at the point of action, on-brand for the free engine, with no second visual element. Still a ghost button, title case, no period. See Copy Rules and Newsletter Card.
>
> **Drift fixes found by reading the live code (V26):** (1) the font import in `index.html` actually shipped `Playfair+Display:wght@700;800` with **no italic at all** — the spec had wrongly claimed a `1,400` italic face. It is now **`ital,wght@0,700;0,800;1,800`** to serve the true-italic masthead. (2) **Open item flagged, not changed:** the `<meta name="description">` in `index.html` still contains the banned word **"software"** — left for a future copy pass, since it is not visible on-page.
>
> **Everything else from Version 25 remains in force:** the newsletter card (not a "strip") with its three-part title/label/description lockup; "The Operator" as the newsletter's title with the "name never travels alone" standfirst rule retired; the description line wording; the Subscribe/input 44px alignment fix and its `marginTop: '0'` override; the promise-line decoupling and its open item; the niche-forward front door (headline "Built for Your Practice", subline "Built to Handle HIPAA" as moat/proof); all buttons title case with no period; the newsletter platform **Kit**, with Kit Commerce the front-runner for the e-book checkout; the footer legal name "FranklinAI Solutions, LLC" and the July 24 footer dials; the legal entity **FranklinAI Solutions LLC** with "FranklinAI" as the fictitious name; the Content Calendar as the single canonical content/marketing document; the contact email `david@franklinaisolutions.com`; the reconciliation e-book as a planned second Available shelf (~$37, self-serve, external checkout, not built, ships after issue 1); the named offer-ladder rungs and their prices; the Business Plan deleted; the Claude Code vs claude.ai scoping; the Source File Rule; the stack boundary (site + McKenzie → Supabase; GlowPT → AWS); all nav/footer lockup math; Clarity retired from the site; gold logo-bolt-only; "in plain English" and "software" banned site-wide; no em dashes in site copy; the $350 GlowPT price; the GlowPT exercise-plan exclusion.

---

## CRITICAL: Source File Rule

**Applies when working in claude.ai. In Claude Code, see the next section.**

**Claude must ALWAYS read the current `App.jsx` from the project files before making any code change.** The project file is the single source of truth for the live code. David replaces it routinely after each deploy. Never work from a cached copy, a previous output, or memory of what the file contained in an earlier turn. Every code task starts with: read the project file, confirm its current state, copy it to a working directory, then edit, verify, and output.

> **Known lag:** the project snapshot is hand-replaced, so it can trail the repo by a push. When the snapshot and a just-confirmed push disagree, the push is live and the snapshot is stale — say so rather than silently reverting the newer change. (As of V26 the snapshot is in sync — this version was written **in Claude Code, directly from the live `src/App.jsx` and `index.html`**, and reflects all prior changes plus the V26 Operator-card rebalance, italic masthead, card-heading line-height, card padding, "Subscribe Free" label, and the font-import fix.)

---

## Working in Claude Code vs claude.ai

**This file lives in two places and is one file.** In claude.ai it is the project instructions. In the repo it is `CLAUDE.md` at the root. Claude Code does not read claude.ai project files; it reads `CLAUDE.md` and the actual files on disk. Same content in both homes. When this document is revised, it is regenerated whole (never patched) and dropped in both places in the same pass. **Do not maintain a Code-tuned variant and a claude.ai-tuned variant.** Two copies of one spec is the exact failure that forced the Business Plan merge — and then, one version later, the merge's own deletion.

> **Note on the GlowPT repo.** GlowPT is a *different* repo with its own `CLAUDE.md` and its own Claude Code setup, and its backend is on a different path (AWS — see Tech Stack). This file does not govern it. Do not carry FranklinAI-site rules into the GlowPT repo or GlowPT/AWS decisions into this file beyond the one-line stack boundary in Tech Stack.

**Which tool for which job:**

| Job | Tool |
|---|---|
| Editing `App.jsx`, the repo, anything on disk | Claude Code |
| Strategy, positioning, copy decisions, arguing a call through | claude.ai |
| Producing or revising documents (Content Calendar, this file) | claude.ai |
| Newsletter drafting | claude.ai |

Moving between them is expected, not a one-way door. Most of what this project needs is talk, not code.

**Rules that are claude.ai-only artifacts:**

- **The Source File Rule** exists because the claude.ai project `App.jsx` is a hand-replaced snapshot that goes stale. In Code the repo is live and Claude reads the real file, so the rule dissolves. Code should still read before editing — that is just competence, not a special rule.
- **The edit workflow** (copy to a working dir → `str_replace` → verify → copy to outputs → present for download → hand over a git push command) is a claude.ai artifact. In Code, edit in place and commit.

**Rules that apply everywhere, both tools, no exceptions:** the Logo Accent gold rule, all locked inline styles and render values, the three-tier heading system, the Copy Rules and Forbidden Words, the CSS/JSX Boundary Rules, and the Design Rules.

---

## Source-of-Truth Documents

**One canonical file lives in this project.**

- **Content Calendar** — the source of truth for all content and marketing. These instructions intentionally contain **no** content/marketing specifics; they live in that file, and it says so itself in its own header. The calendar is **newsletter-led**: the engine is *The Operator*, every other Tuesday, 400–600 words, free, written Sunday on a phone. **Instagram is the only discovery surface** (LinkedIn and Facebook groups were deliberately cut — a founder who does not live on a surface cannot sustain it). The newsletter does depth. **The discovery call is the only door.** The addressee is the **owner**; the office manager is the multiplier who forwards it. The spearhead is **model confusion** ("You're running an insurance clinic with cash-clinic marketing"), across **six spines**: (A) model confusion, (B) plan-of-care completion, (C) team, hiring, retention, and modeling, (D) your numbers, (E) AI in your practice, (F) systems and delegation. The four-video YouTube arc is **parked whole**, not deleted.
  > **Calendar points worth knowing here (do not restate the craft rules — read the calendar):**
  > - **The spearhead is the front door, not a leash.** Model confusion is the sharpest opening argument and the diagnosis a new reader winces at first. It is not the through-line every issue must return to. Only **D** and **C** are genuinely downstream of it. **E's lift half and F stand on their own feet.** The test for whether an issue belongs is "would an owner in the chair recognize this and lean in," not "does it mention the two models."
  > - **Spine E is two wells: the line and the lift.** The **line** is the HIPAA credibility beat (someone on your team is already pasting patient information into a chatbot; do not). The **lift** is the deep well — what AI genuinely does for a practice's operations (the SOP, the job posting, the week-in-one-page, the message rewritten four times, the dense policy made readable), none of it touching a patient record. Leading with the line is a **strong default, not a law**.
  > - **"The Operator" is the newsletter's title; the masthead standfirst rule is retired (new this pass).** The old rule that "the name never travels alone" and that "Notes from the ops chair, for people who run physical therapy practices" must accompany the name word-for-word is **retired**. "The Operator" is now the title of the newsletter, not a label for David. The chair voice survives as the writing **register**, not as a required masthead line. On the site, the newsletter is presented as a card: **"The Operator"** (title) → **"Newsletter"** (label) → a description line. The Calendar is updated to match.
  > - **The promise line is decoupled from the site (new this pass).** The old rule welded the promise line to both the issue top and the signup "word for word." The site card now carries its own presentation copy and no longer must match the issue-top promise. The issue-top promise line remains a newsletter-issue element; whether to reconcile it to the site's newer wording (the site dropped "Written by someone who runs one") is an open item for David.
  > - **The readiness ladder** on the landing page holds: newsletter (cold follow) → email (a self-paced question) → discovery call (the door). The one Instagram bio link points to the landing page, which sorts the visitor.
  > Do not restate the calendar's craft rules here — no villains, category-never-defendant, the contract rule, the chair guardrails, Tuesday/Sunday. **Read the calendar before drafting anything.**

**This file** covers the **website build**: structure, styling, copy rules, locked values, the product facts the site displays, and the **pricing of every rung** (see The Offer Ladder and Pricing Model). With the Business Plan gone, **this file is the authority for everything it states.** There is no document above it. If something here is wrong, it gets fixed here.

---

## What No Longer Has a Home

**Read this before answering a strategy question as if a document backs it.**

The Business Plan carried more than the rules this file absorbed. It also held business strategy at large: **market sizing, unit economics, the HIPAA architecture decision, the roadmap, and risks.** None of that moved into this file, because none of it governs the website build, and inventing a home for it here would recreate the two-documents-one-spec problem V18 was written to end.

**One thing that used to be homeless now has a home: the offer ladder.** Its **rungs** — what the products are, what they cost, and which need a discovery call — now live in this file (see The Offer Ladder), because this file is already the pricing authority. Its **marketing strategy** — how the book sells, the spine-to-book series map, why the self-serve book does not add a second ask — lives in the Content Calendar's *The Ladder* section. So the ladder is documented; the deeper economics behind the numbers are not.

**Still homeless:** the unit economics (what a build actually costs to produce, whether a price holds at volume, churn math), the market sizing, the HIPAA architecture reasoning, and the **GlowPT/AWS backend architecture.** That last one lives in the GlowPT repo and in David's head / Code's setup, not in this file — the Tech Stack note records only the **boundary** (which product is on which backend), never the design. **The legal/entity work** — LLC formation, the AWS BAA entity question, fictitious-name and Philadelphia licensing — is likewise business territory, not a website-build matter; only the footer's legal-name display is a site fact (see Business). All of these live in conversation and in the code that implements them, not in a document here.

**The rule that follows: do not reconstruct the homeless parts from memory and do not cite them.** If a question needs the plan's reasoning (what a build should cost, how the GlowPT/AWS HIPAA architecture is meant to work), that is a conversation with David or a read of the GlowPT repo, not a lookup here. Claude does not have a source for it in this file and should say so plainly rather than answer with the confident tone a document would have earned.

---

## Business

FranklinAI builds custom web apps and tools for businesses. The primary offering is purpose-built apps — web apps, internal tools, and client-facing portals — built around a client's specific way of working rather than off-the-shelf templates. Based in Philadelphia, serving local and remote clients.

> **Legal entity (context, not a site-build rule).** The company is formed as **FranklinAI Solutions LLC** (filed in Pennsylvania), and **"FranklinAI"** is the brand / fictitious name (DBA). This is why the footer copyright renders the full legal name "FranklinAI Solutions, LLC" while the wordmark everywhere else is "FranklinAI." The entity, EIN, business banking, AWS BAA, fictitious-name filing, and Philadelphia Commercial Activity License are business tasks tracked in conversation, not here (see What No Longer Has a Home). The only site-facing fact is the footer legal name.

**Packaged products under the FranklinAI umbrella, alongside the custom-build service:**

- **GlowPT** — a daily patient check-in app for physical therapy clinics. Clinics subscribe; their patients use it free. GlowPT is separately branded (amber/navy, Fraunces + DM Sans, its own logo and URL at glowpt-app.netlify.app), but on the FranklinAI site it wears FranklinAI's navy-and-blue, not its own amber. It is a FranklinAI product shown in FranklinAI's voice. **Live on the site today.**

- **The reconciliation e-book** — a one-time, self-serve product (around $37) that solves the problem the newsletter diagnoses: how to run one clinic that bills insurance and sells advanced care without the two halves fighting. **Planned, not built, not on the site yet.** When it ships it becomes the second product on the Available card. See The Offer Ladder and Available.

Everything else FranklinAI offers is **custom-build work** — scoped after a discovery call, priced from $10,000 (see Custom Pricing). GlowPT is the easy-yes on-ramp; custom builds are the scale-up; the e-book will be the first paid step below GlowPT.

> **Clarity is retired from the site and the product lineup.** It does not appear on the site. Do not re-add a Clarity product, modal, teaser, or pricing block unless David explicitly asks.
>
> **The nuance, from the Content Calendar:** Clarity is parked rather than dead. Spine D ("Your Numbers") is a free, zero-build demand test — if owners reply asking *can you just do this for me*, that is real signal. **The teaching survives in writing; the product stays unbuilt and off the site until the replies knock the wall down.** Nothing about that changes the site today.

### Positioning note — niche-forward front door (V23, unchanged in V24–V25)

**FranklinAI is an umbrella company and always has been. The front door is niche-forward: the headline speaks to the practice, and the umbrella breathes one layer down.** This is deliberate, not a drift — David's content is all practice-focused, so the door matches the content. **This is the design. Do not "reconcile" it back to a broad headline, and do not treat the niche headline as a tension to be softened.**

- **Headline: "Built for Your Practice"** (no period; two lines, "Built for" / "Your Practice"). Speaks directly to the lead market — physical therapy and clinical practices.
- **Subline: "Built to Handle HIPAA"** (title case, no period). It **proves** the niche the headline names: the one sentence almost no competing builder can honestly say, answering the exact skeptical question ("can you be trusted with patient data?") a practice owner asks right after the headline. **Moat, not marker.** It is the only place HIPAA appears on the page.
- **The umbrella breathes below the fold.** The About bio closes on **"what a business needs"** — the honesty valve, where a non-practice prospect sees they are still welcome. How It Works and the Discovery copy stay broadly worded ("your business," "what to build"). The hero label **"Custom Apps & Tools"** stays generic because it describes the capability, which is broad.

The hero's job is still **cold traffic**: a sharper niche hook is expected to convert the lead and warm market better than a broad one, and warm mixed-industry contacts already get the full explanation from David directly. David still takes custom work from any business. **Healthcare is the lead market and the front door; the umbrella is still the business, one layer down.** Do **not** add a sentence that walls the umbrella off (e.g. "healthcare only").

> **Where the niche is named and where it is not.** The **headline**, the **GlowPT teaser**, and the **newsletter card** name the practice because that is the lead market and the newsletter's exact audience. The **About bio** says "what a business needs" because David's career is the umbrella's proof and that line is the welcome mat for non-practice work. Naming the niche up top is the front door; keeping the bio broad is the honesty valve. Both on purpose. **Naming the niche on the headline, the product, and the newsletter is specificity. Naming it in the bio would be a wall.**

## Flagship Example

The McKenzie Arm Care app — a custom patient-care web app with user login, journaling, symptom and progress logs, in-app messaging with the clinician, an admin portal, smart alerts, and email notifications. This is proof-of-work for the custom-build service and is featured in the "Custom Work" section with a modal for the full case study. Use of this case study has been confirmed with permission.

---

## The Offer Ladder

**The content is free; the ladder is where the money is.** Three surfaces do the finding and the trusting (Instagram, the newsletter, the discovery call). The rungs below do the earning. **This file is the authority for the rungs and their prices. The ladder's marketing strategy — how the book sells, the spine-to-book series map — lives in the Content Calendar's *The Ladder* section.**

**The rungs, cheapest first:**

| Rung | Price | Sells how | On the site | Status |
|---|---|---|---|---|
| **The Operator newsletter** | Free | The free engine. Names the problem, builds the list. Runs on **Kit**. **Not a product** — not on the Available card. | Its own prominent card between Hero and Available (built, live, unwired) | **Live (unwired)** |
| **The reconciliation e-book** | ~$37, one-time | **Self-serve.** Reader clicks, pays, downloads — no discovery call. The first paid yes. | Second product on the Available card; its card links out to an external checkout | **Planned, not built** |
| **GlowPT** | $350 / month | Needs the discovery call. The recurring (MRR) product. | Available card (live) | Live |
| **The custom build** | From $10,000 | Needs the discovery call. The big one. | Custom Pricing (live) | Live |

**Why the e-book does not break the one door.** The newsletter still closes on the discovery call, every issue, every time — one ask. A self-serve $37 file that checks out on its own is not a second ask inside an issue; it sells from the shelf and from the Instagram posts, off to the side, **never from the newsletter's close.** The one door holds.

**The e-book, in detail (all of this is plan, none of it is built):**

- **Book one is reconciliation** — the spearhead's paid answer. The newsletter gives the diagnosis away for free; you never charge a man for the bad news. The book sells the way out. There is no book before it, because the thing before the fix is the diagnosis, and the diagnosis is free.
- **The checkout is external, not built into the React app.** A tool takes the payment, stores the file, and emails the buyer a download link when payment clears. **Kit Commerce is now the front-runner**, because the newsletter already lives in Kit and a buyer would be auto-added to the list on purchase (processing fee only, roughly 3.5% + $0.30, no monthly, works on Kit's free plan). **Gumroad and Payhip remain viable** and are the fallback. One caveat to weigh at build time: Kit is not a merchant-of-record for US sales tax the way Gumroad is. **Provider not finally locked.** Note: Stripe is the right call for GlowPT (a subscription inside an app FranklinAI controls); a one-time file sale is a different shape — do not assume Stripe for the book.
- **Site work when it ships:** restructure the Available card from one product back to two (GlowPT + the book), style the book's card to read as a FranklinAI product, and point its button at the external checkout. Each piece is small; together it is an afternoon-plus.
- **Sequence:** issue 1 ships first — the book needs a list and live posts to sell to.
- **Open items before it is built:** the title (working idea "reconciliation," not a locked title), the exact one-sentence promise, the checkout provider (leaning Kit), and whether the last chapter points back to the discovery call (David leans toward substance first; pointing to the call is optional).

---

## Pricing Model

Price points on the page serve different buyers in different locations. **This file is the authority for all of them.** There is no upstream document; if a price changes, it changes here and in `App.jsx` (or the external checkout, for the book), in the same pass.

**Product pricing:**

- **GlowPT** — $350 / month. Flat, no tiers. Displayed inside the GlowPT modal.
  > Confirmed at $350 on July 15, 2026, retiring an older $300 figure. **If this price changes, two places move together: `App.jsx` and this file.**
- **The reconciliation e-book** — around $37, one-time. **Not on the site yet.** When live, the price is shown on the book's Available card and charged by the external checkout, not by the React app. **If this price is set or changed, it changes here and at the checkout, in the same pass.**

**Custom Pricing (umbrella builds):** Two tiers plus a whisper subtext, displayed on the live site under the heading "Custom Pricing."

- **The Build** — From $10,000. One flat project fee, set up front. No hourly meter, no surprises.
  - Whisper subtext (inside The Build step-item): "New features quoted and built one at a time, as you grow." (Inter 15px, #8892a4, marginTop: '0')
- **Monthly Care** — $350 / month. Optional. Covers hosting, maintenance, security, and updates.

**Order rationale.** The Available card sits below the hero and the newsletter card as the easy-yes on-ramp, with GlowPT as the flagship product. Custom Work (McKenzie) follows as proof of custom-build capability, bridging into How It Works and Custom Pricing. When the e-book ships it slots in below GlowPT as the first paid yes.

Actual project quotes are scoped after a free discovery call. **The reasoning behind these numbers is not in any document** — see What No Longer Has a Home.

## Primary CTA

"Book a Free Discovery Call" — appears in the hero card, the GlowPT modal, and the Discovery CTA card. Never in the nav or footer. **Title case, no period** (see Copy Rules — the old period-on-buttons rule is retired).

**All three primary CTAs carry explicit inline sizing** (set July 18, 2026, when the buttons were shrunk ~25% because they overpowered the hero). The page buttons previously inherited their size from the `.btn` class in `global.css`, which is not in the claude.ai snapshot; the fix stays JSX-only by overriding size inline.

- **Full-page primary buttons (hero + Discovery):** `padding: '11px 22px', fontSize: '14px'`.
- **Modal discovery button:** `padding: '10px 20px', fontSize: '13px'` — deliberately the smallest of the three, preserving the "modal button is smaller than the page buttons" design.

**Scheduling link (live and wired):**
`https://cal.com/david-peterson-40s7lw/free-discovery-call`

All CTA buttons open this link in a new tab (`target="_blank" rel="noopener noreferrer"`). The cal.com event is named "Free Discovery Call", 30 minutes, at slug `/free-discovery-call`. Do not change the link without updating all buttons in `App.jsx`.

## Email Option Under the Discovery CTA

The `EmailOption` component renders beneath the "Book a Free Discovery Call" button on the **Discovery CTA card only**. It reads "Not ready to schedule?" on the first line, then **"Email"** on its own line (via `<br />`), where "Email" is a mailto link to **`david@franklinaisolutions.com`**. **No period.** Styled inline: Inter 15px, muted #8892a4 text, blue #60a5fa link at fontWeight 600, marginTop 18px. The email does NOT appear in the footer, the hero, or any modal. It is a link, not a CTA button.

> **Where it sits in the readiness ladder (Content Calendar):** the email is the middle rung — a self-paced question for the warm-but-cautious visitor not ready for the calendar. The newsletter card up top is the cold rung; the discovery call is the door. Keep the email exactly where it is (bottom of the page) and framed as "not ready to schedule?"; the newsletter card stands on its own positive offer, not a second "not ready?" off-ramp.
>
> **Email history:** `david@franklinaisolutions.com` replaced `franklinaisolutions@gmail.com` on July 19, 2026 (pushed and confirmed live). Display name in the mailbox is "David Peterson | FranklinAI" (an email-client setting, not a site value). If the address changes again, it changes in `App.jsx` and here, in the same pass.

## Newsletter Card — Live (Unwired)

*The Operator* newsletter has **its own card on the site**, sitting between the Hero and Available. It is **not wired** — the form does not post anywhere yet; the Kit form endpoint gets added later (see Tech Stack). Until then, the seed list (Todd, Haley, and the warm contacts) receives Issue 1 directly.

> **It is a card, not a "strip."** It was originally specced as a small, quiet strip. It is now a full `.site-card` with the same weight and prominence as the other sections, and that is the intended, approved state — the only goal was to bring an earlier oversized version down to right-sized, which is done. The React component is still named `NewsletterStrip` in `App.jsx` (legacy name; optional future rename). Do not reintroduce "quiet strip" sizing or try to shrink it into a thin band.

**It is not a product card, and it never goes on the Available card.** The newsletter is the free engine, not something a clinic buys, so it does not belong on the product shelf next to a priced product. It is its own card.

**The masthead is a three-part lockup (component `NewsletterStrip`):**

- **Title "The Operator"** — blue `card-heading`, but set **smaller than the other section headings and in true italic** so it reads as a publication masthead: `fontSize: 'clamp(34px, 5vw, 50px)'`, `fontStyle: 'italic'`, `lineHeight: '1.2'`, `marginBottom: 'clamp(4px, 1.5vw, 10px)'`. **"The Operator" is the newsletter's title.** V26 reaffirmed keeping the name (it names the reader who *operates* the practice, not David) and set it in italic to mark it as a title rather than a section label (see Header Sizing and Source-of-Truth Documents — the "name never travels alone" standfirst rule is retired).
- **Label "Newsletter"** — a white Playfair sub-title, `fontFamily: 'Playfair Display'`, `fontWeight: '800'`, `color: '#ffffff'`, `fontSize: 'clamp(30px, 5vw, 35px)'`, `lineHeight: '1.1'`, `marginTop: '0'`, `marginBottom: '14px'`. It tells a cold visitor immediately what "The Operator" *is*. **White per the sub-title rule (no gold).** It sits at the **standard** secondary sub-title tier, matching GlowPT and McKenzie (V26 — the V25 smaller-label exception is retired) — see Header Sizing.
- **Description** (Inter 15px, #8892a4, `marginTop: '0'`, `marginBottom: '18px'`, `lineHeight: '1.5'`): **"For those who run a physical therapy practice. Delivered every other Tuesday, it takes a clear look at what's working in your practice, what isn't, and what to do about it."**

**The form row, and the alignment fix:**
- **An email input** (styled inline from Kit values: cream text #f0e6d3, navy fill rgba(255,255,255,0.04), 1px border rgba(96,165,250,0.3), 8px radius, 16px font to prevent iOS zoom-on-focus, `WebkitAppearance: 'none'`, flex `1 1 220px`, maxWidth 280px). It also carries `height: '44px'`, `minHeight: '44px'`, `boxSizing: 'border-box'` so it sits at exactly 44px. **Placeholder color cannot be set inline** (needs a CSS `::placeholder` rule), so "Your email" shows in the browser default gray for now; an exact placeholder color is a small `global.css` add later if wanted.
- **A ghost Subscribe button** (`btn btn--ghost`, label **"Subscribe Free"**, no period). **Deliberately ghost, not primary:** this keeps the filled primary style exclusive to "Book a Free Discovery Call" so the call stays the loudest ask and the newsletter reads as the quiet "small yes." **The label carries "Free" (V26)** — it states the price right at the point of action, which is on-brand for the free engine, without adding a second visual element or feeling tacky.
- **The alignment fix (this pass), so the input and button sit flush.** The base `.btn` class in `global.css` carries `padding: 15px 34px` and `margin-top: 8px`. Left alone, those made the Subscribe button both taller than the input and shifted lower inside the centered row. The fix, all inline on the button: `height: '44px'`, `minHeight: '44px'`, `boxSizing: 'border-box'`, `display: 'inline-flex'`, `alignItems: 'center'`, `justifyContent: 'center'`, and **`marginTop: '0'`** (the last one cancels the class's `margin-top: 8px`). Do not remove any of these; the flush alignment depends on all of them, `marginTop: '0'` especially.

**Two different asks, kept separate:** the **small yes** is the free newsletter (low intent — the Instagram stranger not ready to talk). The **big yes** is the discovery call (high intent — every button on the site drives here). The card earns its prominent top-of-page position because that stranger lands there first on a phone; burying it near the footer would hide the one thing meant to catch them.

## Tech Stack

React + Vite, plain CSS (no Tailwind), deployed via Netlify, GitHub for version control. Supabase for backend and auth where needed.

**Newsletter platform: Kit** (formerly ConvertKit). Free to 10,000 subscribers, list owned and exportable. The live signup form will be wired to Kit by pointing a custom navy box's form at Kit's form endpoint (`https://app.convertkit.com/forms/{FORM_ID}/subscriptions`, POST) — **the email field must be named `email_address`** or the submit silently sends nothing. Kit also offers an official React embed and a v3 subscribe API if a JS-handled path is ever preferred. **Wiring is a small JSX addition once David creates the Kit form and hands over the form ID.**

**The e-book's checkout, when built, is an external service** — **Kit Commerce is the front-runner** (buyer auto-joins the list; processing fee only), with Gumroad/Payhip as the fallback (see The Offer Ladder). Not part of the React app.

> **Stack boundary — read before assuming one backend for everything.** This document governs the **FranklinAI marketing site** and the **McKenzie Arm Care** build. Both are on **Supabase** for now, and nothing here is moving. **GlowPT's backend is a separate matter and is migrating to AWS.** GlowPT lives in its own repo with its own Claude Code setup, and its architecture is carried there, not in this file. So the line is: **site + McKenzie → Supabase; GlowPT → AWS.** Do not assume Supabase-for-all (that would step on the GlowPT migration) or AWS-for-all (that would misroute McKenzie). The **reasoning** behind the GlowPT/AWS architecture is not in this document; see What No Longer Has a Home. This note is the boundary only.

## Repo

github.com/besoulful-design/franklinai-v2

## Domain

franklinaisolutions.com (owned and active)

## Favicon / iPhone Icon

SVG favicon and 180×180 PNG apple-touch-icon. Both feature the kite mark on navy with the lightning bolt in #fbbf24 gold. Tab title shows just "FranklinAI." Files live in `public/`. (The bolt is the one place gold still appears — see Logo Accent.)

---

## Brand Kit

### Colors

| Role | Value |
|---|---|
| Background / Navy | #070f24 — used everywhere: nav, hero, all sections, footer |
| Accent Blue | #60a5fa — all blues, section headings, links, prices, buttons, logo strokes |
| Gold / Lightning Bolt | #fbbf24 — **the kite lightning bolt only** (logo mark and favicon). Not used on any heading, sub-title, or copy. See Logo Accent. |
| Card background | rgba(255, 255, 255, 0.04) — also the newsletter email input fill |
| Card border | rgba(96, 165, 250, 0.18) |
| Newsletter input border | rgba(96, 165, 250, 0.3) |
| Divider line | rgba(96, 165, 250, 0.12) — used only in the GlowPT modal footer and the page footer |
| Text primary | #f0e6d3 |
| Text muted | #8892a4 |
| Kite panel fills | #1e3a5f (lighter) and #0f2340 (darker) |
| Cool blue-grey sublines | #8899b0 — nav "Philadelphia", footer "Philadelphia", modal sublines |
| Headings / white sub-titles | #ffffff — hero headline, wordmark "AI" (nav, footer, and the About heading), the newsletter "Newsletter" label, and every sub-title: GlowPT, McKenzie Arm Care, step titles, pricing-tier titles, David Peterson |

### Typography

| Role | Font | Weight | Size / Notes |
|---|---|---|---|
| Hero label ("Custom / Apps & Tools") | Playfair Display | 700 | **clamp(40px, 6vw, 64px)**, blue #60a5fa, title case, two lines via `<br />`, lineHeight 1.3, letterSpacing 0.04em, **marginBottom clamp(6px, 2.2vw, 14px)** |
| Hero headline ("Built for / Your Practice") | Playfair Display | 800 | **clamp(37.5px, 5.75vw, 57.5px)**, white #ffffff, two lines via `<br />` (break after "for"), marginBottom 10px, **no period** |
| Hero trust subline | Inter | 400 | 15px, muted #8892a4; single line **"Built to Handle HIPAA"** — title case, **no period**; marginTop 0, marginBottom clamp(4px, 1vw, 8px) |
| Newsletter title ("The Operator") | Playfair Display | 800 italic | **clamp(34px, 5vw, 50px)**, blue #60a5fa via `card-heading`, **true italic (fontStyle: 'italic')**, lineHeight 1.2, marginBottom clamp(4px, 1.5vw, 10px). Its own heading treatment — a touch smaller than the section-heading tier and set in italic, to read as a publication masthead (see Header Sizing). |
| Newsletter label ("Newsletter") | Playfair Display | 800 | **clamp(30px, 5vw, 35px)**, **white #ffffff**, marginTop 0, marginBottom 14px, lineHeight 1.1. A white sub-title label at the standard secondary sub-title scale (the V25 smaller-exception is retired). |
| Newsletter description | Inter | 400 | 15px, #8892a4, marginTop 0, marginBottom 18px, lineHeight 1.5 |
| Newsletter email input | Inter | 400 | **16px** (prevents iOS zoom), #f0e6d3 on rgba(255,255,255,0.04), 1px border rgba(96,165,250,0.3), radius 8px, padding 10px 14px, height 44px, minHeight 44px, box-sizing border-box |
| Section card headings (the other six) | Playfair Display | 800 | **clamp(36px, 5.5vw, 58px)**, blue #60a5fa via `card-heading`, **lineHeight 1.2** (About keeps 1.1 for its two lines), **marginBottom clamp(4px, 1.5vw, 10px)** — Available, Custom Work, How It Works, Custom Pricing, Behind FranklinAI, Let's Build. (The Operator is a card-heading too but carries its own smaller italic size — see the Newsletter title row above.) |
| — "Behind FranklinAI" (About heading) | Playfair Display | 800 | clamp(36px, 5.5vw, 58px), **two lines via `<br />`** ("Behind" / "FranklinAI"), lineHeight 1.1; "Behind Franklin" blue, **"AI" white #ffffff** |
| Secondary sub-titles (unified scale) | Playfair Display | 700–800 | **clamp(30px, 5vw, 35px)** — GlowPT, McKenzie, step titles, pricing-tier titles, David Peterson. **All white #ffffff.** |
| Product teaser | Inter (card-text) | 400 | 16px, muted #8892a4 |
| Ghost buttons ("More Info", "Case Study", "Subscribe Free") | Inter (btn--ghost) | 600–700 | 15px, **title case, no period** |
| Primary CTA buttons (hero + Discovery) | Inter (btn--primary) | — | padding 11px 22px, fontSize 14px, **title case, no period** |
| Modal CTA button | Inter (btn--primary) | — | padding 10px 20px, fontSize 13px (smallest), **title case, no period** |
| Price numbers (pricing tiers + modal) | Playfair Display | 700 | **27.7px**, blue #60a5fa |
| Price descriptors (spans) | Playfair Display | 700 | 20px, blue #60a5fa |
| Modal titles | Playfair Display | — | `.modal__title`, marginTop 6px on GlowPT |
| Modal subline ("Clinic subscriptions available.") | Inter | 600 | 14px, #8899b0, marginBottom 16px |
| Modal feature rows | Inter | 400 / 700 check | 15px, cream #f0e6d3 text, blue #60a5fa check |
| Nav name ("FranklinAI") | Playfair Display | 700 | clamp(40.95px, 4.35vw, 50.4px), blue with "AI" white |
| Nav "Philadelphia" | Playfair Display | 400 | clamp(17.85px, 2.9vw, 22.05px), #8899b0, nudged translateX(-2px) |
| Footer name | Playfair Display | 700 | 32px, blue with "AI" white |
| Footer "Philadelphia" | Playfair Display | 400 | 15px, #8899b0, nudged translateX(-2px) |
| Footer small print | Inter | 400 | 13px, #8892a4, both lines nudged translateX(-2px) |
| Email option text | Inter | 400 | 15px, #8892a4, link #60a5fa at 600; **"Email"** on its own line, **no period** |

Google Fonts import (locked, in `index.html`):
`Playfair+Display:ital,wght@0,700;0,800;1,800&family=Inter:wght@400;500;600;700;800`

> **V26 correction:** the prior spec claimed the italic axis loaded weight `1,400`, but the live `index.html` had actually shipped `Playfair+Display:wght@700;800` with **no italic at all**. V26 sets it to `ital,wght@0,700;0,800;1,800` so the italic "The Operator" masthead renders in **true** italic at the heading weight (800), not a browser-faked slant. Upright 700/800 and italic 800 are the three faces now loaded.

---

## Logo Accent — Gold Is Logo-Only — READ BEFORE CHANGING ANY HEADING OR SUB-TITLE COLOR

Gold (#fbbf24) has exactly one home on the site: **the kite's lightning bolt in the logo mark.** It is not a copy color, a heading color, or a sub-title color anywhere else.

The color system, in full:

| Element | Color | Why |
|---|---|---|
| Kite lightning bolt (logo) | **gold #fbbf24** | The one and only gold on the site; the logo's spark |
| Section card headings (all seven, incl. "The Operator") | blue #60a5fa | The structural heading color |
| Newsletter "Newsletter" label | **white #ffffff** | Sub-title tier (label) |
| GlowPT (product name) | **white #ffffff** | Sub-title tier |
| David Peterson (About) | **white #ffffff** | Sub-title tier |
| McKenzie Arm Care (Custom Work) | white #ffffff | Sub-title tier |
| Step titles, pricing-tier titles | white #ffffff | Sub-title tier |
| "AI" in the wordmark (nav, footer, **and the "Behind FranklinAI" heading**) | **white #ffffff** | Wordmark treatment |

**The rule that protects it:** gold never leaves the logo. Every sub-title on the page is white. Every section heading is blue. If a sub-title ever needs more emphasis, use weight, a label, or a thin rule, **not** gold. (When the e-book card ships, its product name follows the same white sub-title rule as GlowPT — no gold.)

**Section card headings stay blue.** All seven are blue via the `card-heading` class: "The Operator," "Available," "Let's Build," "Custom Work," "How It Works," "Custom Pricing," and **"Behind FranklinAI"** (whose "AI" is white — see below). ("The Operator" is blue *and* italic as of V26 — the italic changes its style, not its color.)

**"AI" in the wordmark renders white** (#ffffff), never gold — nav, footer, **and the "Behind FranklinAI" About heading.**

---

## Header Sizing — Three Tiers (current, matches live)

There are **three** distinct heading tiers on the page, plus **one sanctioned masthead exception** (the newsletter title). Do not collapse the tiers or give individual headings their own one-off sizes — the single approved exception is spelled out below.

1. **Hero** — its own two-size lead treatment:
   - Hero label "Custom / Apps & Tools": **clamp(40px, 6vw, 64px)**, blue, marginBottom **clamp(6px, 2.2vw, 14px)**
   - Hero headline "Built for / Your Practice": **clamp(37.5px, 5.75vw, 57.5px)**, white, no period
2. **Section card headings** — unified at **clamp(36px, 5.5vw, 58px)**, blue, **lineHeight 1.2** (About keeps 1.1 for its two lines), each with **marginBottom clamp(4px, 1.5vw, 10px)**: Available, Custom Work, How It Works, Custom Pricing, Behind FranklinAI, Let's Build. (Behind FranklinAI is the only one set on two lines. **"The Operator" is deliberately *not* in this tier — see the masthead exception below.**)
3. **Secondary sub-titles** — unified at **clamp(30px, 5vw, 35px)**, **all white**: the newsletter **"Newsletter"** label, GlowPT, McKenzie Arm Care, step titles, pricing-tier titles, David Peterson.

Price numbers are a separate fixed size: **27.7px** (not a heading tier).

> **The sanctioned masthead exception — the newsletter title (V26).** "The Operator" is a `card-heading`, but it is set **smaller than the section-heading tier and in true italic**: `clamp(34px, 5vw, 50px)`, `fontStyle: 'italic'`, lineHeight 1.2. This is deliberate — it is the only heading on the page that is a *publication name* rather than a section label, and the italic reads it as a masthead. Do **not** "correct" it up to the 36–58 tier or set it upright. The **"Newsletter"** label beneath it now sits at the **standard** secondary sub-title tier (`clamp(30px, 5vw, 35px)`), matching GlowPT and McKenzie; the V25 smaller-label exception is **retired**, because with the title shrunk the two no longer compete.

> The nav wordmark ("FranklinAI" + "Philadelphia") is its own lockup and is NOT part of these three tiers — see the Nav section for its clamp values.

---

## Card Top & Bottom Padding — Tightened (V26)

Every `.site-card` carries inline **`paddingTop: '16px'`** and **`paddingBottom: '24px'`**, overriding the CSS `.site-card { padding: 40px }` on the **top and bottom only**. **Left and right stay at 40px.** Applied to all eight cards: Hero, **Newsletter**, Available, Custom Work, How It Works, Custom Pricing, About, Discovery. (V26 brought the top 20→16 and the bottom 40→24; the earlier "top halved to 20, bottom stays 40" is superseded.)

---

## Card Heading Spacing — One Responsive Gap (current)

**The gap below a heading is set by two things, not one: the heading's own `line-height` *and* its `marginBottom`.** Each `card-heading` carries **`marginBottom: 'clamp(4px, 1.5vw, 10px)'`** (desktop ~10px, iPhone ~6px) **and, as of V26, an explicit `lineHeight: '1.2'`** (About keeps `1.1` for its two lines; the italic "The Operator" title also uses `1.2`). Before V26 the headings set no line-height, so they inherited the body's **`1.6`** — which padded ~15px of dead space *inside* each heading's line box, beneath the glyphs. That, not the margin, was why the header-to-subheader gap still read loose after V20 tightened the margin. `1.2` strips that dead air uniformly across every card.

**No negative-margin pulls anywhere below a heading.** The two `step-stack` wrappers (How It Works, Custom Pricing) sit at `marginTop: '0'`, and the About headshot sits at `margin: '14px auto 10px'`. **Do not reintroduce a negative `marginTop` on a `step-stack` or a negative top margin on the headshot.**

On the newsletter card specifically, the heading gap feeds the "Newsletter" label (which then feeds the description), so the shared card-heading gap sits between "The Operator" and "Newsletter."

Every card reads: heading → `clamp(4px, 1.5vw, 10px)` gap → first content element.

---

## Page-Wide iOS Text Guard — App Root Wrapper

`App()` returns a single wrapping **`<div style={{ WebkitTextSizeAdjust: '100%' }}>`** around `<Nav />`, `<main>…</main>`, and `<Footer />`.

**Why it exists:** iOS Safari's text-autosizing auto-enlarges some text blocks inconsistently when the phone rotates to landscape. `-webkit-text-size-adjust: 100%` disables that auto-inflation so every line holds its declared size.

**Consequences:**
- The wrapper is layout-neutral: a plain `<div>` with only this property. It does **not** create a scroll container or new containing block.
- **Do not give this wrapper any other styles.**
- React inline-style key is `WebkitTextSizeAdjust` (capital W). Do **not** use `none` — it kills pinch-zoom.

---

## Design Rules

- Single unified dark navy everywhere — no section breaks via color
- All content in `.site-card` — one universal card class on every section, including the newsletter card
- `.site-card`: max-width 640px, margin 0 auto, text-align center, border-radius 16px; CSS padding 40px, with inline `paddingTop: '16px'` and `paddingBottom: '24px'` on every instance (sides stay 40px)
- Section headings live inside the card at the top — never floating above it
- Card-heading spacing is controlled by both an explicit `lineHeight: '1.2'` and one shared responsive `marginBottom`; no compensating negative margins below headings
- **The newsletter title "The Operator" is the one italic heading** — a smaller, true-italic `card-heading` that reads as a publication masthead. Every other heading on the page is upright. See Header Sizing.
- No horizontal dividers between sections, and no dividers inside cards. (Thin `borderTop` rules exist only in the GlowPT modal footer and the page footer.)
- No em dashes anywhere in copy, ever
- Dark mode locked via color-scheme: only light
- Visual restraint throughout
- No step numbers in How It Works — titles only, centered
- Gold is reserved for the logo bolt only (see Logo Accent) — never on a heading, sub-title, or copy
- Responsive sizing uses `clamp()` with **absolute pixel values** — never `em` or relative units
- **All buttons are title case with no period** (primary and ghost alike). Section headings also take no period.
- **Form controls (newsletter input + Subscribe button) are pinned to a matching 44px height and the button's inherited `.btn` top margin is zeroed** so they sit flush. See Newsletter Card.

---

## Kite Logo Mark — Locked SVG

The `KiteLogo` component is the single source of truth for the mark. `size` sets the height; width is calculated from the viewBox ratio (vbW / vbH) = 101 / 240.

**ViewBox:** `62 10 101 240`

| Element | Fill |
|---|---|
| Kite top-right panel | #1e3a5f |
| Kite bottom-right panel | #0f2340 |
| Kite top-left panel | #0f2340 |
| Kite bottom-left panel | #1e3a5f |
| Kite outline + crosslines | stroke="#60a5fa" |
| String (kite to bolt) | stroke="#60a5fa" |
| Lightning bolt main fill | #fbbf24 (classic yellow-gold) |
| Lightning bolt hot core | white at opacity="0.6" |
| String (bolt to key) | stroke="#60a5fa" |
| Key ring, shaft, teeth | #60a5fa |
| String tail below key | stroke="#60a5fa" at opacity="0.3" |

### Kite geometry — the crossbar is the true centerline

The kite is NOT a symmetric diamond. Vertices: top (110,20), right (148,88), bottom (110,120), left (72,88). The widest point — the cross-spar at **viewBox y=88** — is the kite's true visual horizontal centerline, NOT the bounding-box midpoint (y=70).

For a kite rendered at height `H`, the crossbar sits at **`(88 - 10) / 240 × H = 0.325 × H`** px from the top of the SVG element.
- Nav (H=130): crossbar at **42.25px** from kite top.
- Footer (H=105): crossbar at **34.12px** from kite top.

**Sizes in use:**

| Location | size prop | Notes |
|---|---|---|
| Nav | 130 | Same height on desktop AND mobile |
| Footer | 105 | Consistent across breakpoints |

**Note on the nav kite size:** The nav `KiteLogo` carries NO `site-nav__logo` className; it is wrapped in `<span style={{ flexShrink: 0, display: 'flex' }}>` (same as footer). This dodges a stale `.site-nav__logo { height: 168px !important }` rule in `global.css`, so the nav kite renders at a consistent 130px on both desktop and iPhone. That CSS rule is now dead code.

---

## Vertical Alignment Methodology — Wordmark F vs Kite Crossbar

Places the "F" of the wordmark relative to the kite, consistently across devices, in BOTH nav and footer.

**Two measured facts:**
1. **Kite crossbar** is at `0.325 × kiteHeight` from the kite top.
2. **The capital "F" optical center**, for Playfair Display at `line-height: 1`, sits **0.561em below the top of the text line**.

**Placement rule:** the brand row uses `align-items: flex-start`, so:
`F_center_from_top = marginTop + 0.561 × nameFontSize`
Set equal to `(crossbar − 3px)` to put the F 3px above the crossbar, then solve for `marginTop`.

- **Nav wordmark `marginTop`: `clamp(10.98px, calc(39.25px - 2.44vw), 16.28px)`**
- **Footer text column `marginTop`: `13.16px`** (font fixed at 32px, single value works everywhere)

> The `translateX(-2px)` nudge on "Philadelphia" (nav and footer) is horizontal only and does not affect this vertical F-vs-crossbar math. Neither does the footer text column's `translateX(-22px)` horizontal snug-pull (see Horizontal Centering).

---

## Horizontal Centering — `translateX` Dials (nav and footer)

Both lockups are positioned horizontally by inline `transform: translateX(...)`. Same value on desktop and iPhone. Using a transform (not margin) means it never consumes layout width.

- **Nav brand `<a>`: `transform: 'translateX(-26px)'`**
- **Footer brand row `<div>`: `transform: 'translateX(8px)'`** — this is the lockup-level dial (moves kite + text column together). *(Updated July 24, 2026 from `-14px` to `8px` after the longer legal name "FranklinAI Solutions, LLC" was added.)*
- **Footer text column `<div>`: `transform: 'translateX(-22px)'`** — a second, inner dial that re-snugs the wordmark and fine print against the kite. The centered text column stretched rightward when the longer copyright line was added; this pull re-seats it. It is independent of the lockup-level dial above and of the per-line `-2px` fine-print nudges below.

These lockup/column dials are separate from the per-line **fine-print nudges** below, which move only a single text line.

---

## Fine-Print Left-Nudges (nav + footer)

A tiny per-line `transform: 'translateX(-2px)'` shifts individual text lines a hair left for optical balance, without touching the kite or the "FranklinAI" wordmark.

| Location | Element | Nudge |
|---|---|---|
| Nav | "Philadelphia" (`site-nav__city` span) | translateX(-2px) |
| Footer | "Philadelphia" span | translateX(-2px) |
| Footer | "franklinaisolutions.com" span | translateX(-2px) |
| Footer | "© {year} FranklinAI Solutions, LLC" span | translateX(-2px) |

Do NOT apply this nudge to the kite, to "FranklinAI" (nav or footer), or to any other element unless David asks.

---

## Nav

- Sticky (position: sticky; top: 0)
- Logo and wordmark only — no CTA, no links, no tagline
- `padding: '6px 24px'`
- Brand link inline: `gap: '4px'`, `alignItems: 'flex-start'`, `transform: 'translateX(-26px)'`
- Kite: `KiteLogo size={130}`, wrapped in `<span style={{ flexShrink: 0, display: 'flex' }}>`, NO className
- Wordmark div: `marginTop: 'clamp(10.98px, calc(39.25px - 2.44vw), 16.28px)'`
- Name: `clamp(40.95px, 4.35vw, 50.4px)`, blue #60a5fa with "AI" white #ffffff; Philadelphia: `clamp(17.85px, 2.9vw, 22.05px)`, #8899b0, with `transform: 'translateX(-2px)'`
- Responsive sizing via inline `clamp()`, not CSS media queries

---

## Footer — Fully Self-Contained in App.jsx

**The footer uses NO CSS classes from `global.css`.** It is entirely inline styles. The `global.css` `.site-footer*` rules are dead code. Do not add footer CSS classes back.

### Footer Structure

A scaled-down signature (kite 105, name 32px). The kite sits beside a single centered text column holding all four lines. Kite-to-wordmark gap `4px`. Kite wrapped in `<span style={{ flexShrink: 0, display: 'flex' }}>`.

**Kite** (left): `KiteLogo size={105}`, no className.

**Text column** (right, flex column, centered, `marginTop: '13.16px'`, `transform: 'translateX(-22px)'`):
1. FranklinAI — Playfair 700, 32px, blue #60a5fa with "AI" in white #ffffff (in a home link). **No per-line nudge.**
2. Philadelphia — Playfair 400, 15px, #8899b0, marginTop 3px (in the home link), `transform: 'translateX(-2px)'`
3. franklinaisolutions.com — Inter 400, 13px, #8892a4, marginTop 8px, `transform: 'translateX(-2px)'`
4. © {year} FranklinAI Solutions, LLC — Inter 400, 13px, #8892a4, `transform: 'translateX(-2px)'`

**Footer outer:** padding '24px 24px 20px', borderTop '1px solid rgba(96, 165, 250, 0.12)', marginTop '0', display 'flex', justifyContent 'center'.

**Footer brand row:** display 'flex', alignItems 'flex-start', gap '4px', `transform: 'translateX(8px)'`.

No email in the footer.

---

## Scroll Lock on Modals

Both modals (`GlowPTModal`, `CaseStudyModal`) lock page scroll while open via a `useEffect` that sets `document.body.style.overflow = 'hidden'` on mount and restores it on unmount. Each closes on X click or backdrop click.

---

## Page Sections (in order)

All sections use `.section` → `.container` → `.site-card` (inline `paddingTop: '16px'`, `paddingBottom: '24px'`). Heading inside the card, each with `marginBottom: 'clamp(4px, 1.5vw, 10px)'` and `lineHeight: '1.2'` (About keeps 1.1). **Live order: Hero → Newsletter (The Operator) → Available → Custom Work → How It Works → Custom Pricing → About → Discovery CTA.**

The page reads as one sentence: here's what I do (custom apps & tools) → here's the free thing worth following (The Operator) → here's what's available (GlowPT) → here's proof I build custom (McKenzie) → here's how the work goes and what it costs → here's who I am → let's talk.

### Hero

- **Label** (Playfair 700, clamp(40px, 6vw, 64px), #60a5fa): "Custom" / "Apps & Tools" — two lines via `<br />`, lineHeight 1.3, letterSpacing 0.04em, **marginBottom clamp(6px, 2.2vw, 14px)**
- **Headline** (Playfair 800, clamp(37.5px, 5.75vw, 57.5px), white): **"Built for" / "Your Practice"** — break after "for", marginBottom 10px, **no period**. Niche-forward front door — see Business (Positioning note).
- **Trust subline** (Inter 15px, #8892a4): single line **"Built to Handle HIPAA"** — title case, **no period**, no link, no `<br />`. marginTop 0, marginBottom clamp(4px, 1vw, 8px).
- **CTA button:** "Book a Free Discovery Call" — `btn btn--primary`, `padding: '11px 22px', fontSize: '14px'`, cal.com URL, new tab. No `EmailOption`. **Title case, no period.**

### Newsletter (The Operator) — `NewsletterStrip`

Its own prominent `.site-card`, sitting between Hero and Available. **It is a card, not a strip** (the component name is a legacy label). See Newsletter Card for the full rationale.
- **Title** (`card-heading`, clamp(34px, 5vw, 50px), blue, **italic**, lineHeight 1.2): **"The Operator"**, marginBottom clamp(4px, 1.5vw, 10px). This is the newsletter's title, set in true italic as a masthead and deliberately smaller than the other section headings (see Header Sizing).
- **Label** (Playfair 800, clamp(30px, 5vw, 35px), **white #ffffff**, marginTop 0, marginBottom 14px, lineHeight 1.1): **"Newsletter"**. Tells the visitor what The Operator is. White per the sub-title rule; now at the standard secondary sub-title tier (see Header Sizing).
- **Description** (Inter 15px, #8892a4, marginTop 0, marginBottom 18px, lineHeight 1.5): **"For those who run a physical therapy practice. Delivered every other Tuesday, it takes a clear look at what's working in your practice, what isn't, and what to do about it."**
- **Form row** (`div`, flex, flexWrap wrap, gap 10px, justifyContent center, alignItems center): an email `input` and a **ghost** Subscribe button (label "Subscribe Free"), both pinned to 44px height and flush (see Locked Inline Styles and Newsletter Card).
- **Not wired.** A JSX comment marks where the Kit form endpoint gets added. No `onClick`/action yet.

### Available (Product Card)

Component is named **`AvailableForPractice`**. Currently a single-product card holding GlowPT; full detail lives in the GlowPT modal. Card carries `id="financial-clarity"` (a harmless leftover id — links to nothing).

**Card structure (mirrors Custom Work — no divider, no wrapper div):**
- **Heading** (`card-heading`, clamp(36px, 5.5vw, 58px), blue): **"Available"**, marginBottom **clamp(4px, 1.5vw, 10px)**
- **No badge, no subheader, no divider.**

**GlowPT (the only product today):**
- **Title** (Playfair 800, clamp(30px, 5vw, 35px), **white #ffffff**, lineHeight 1.2): "GlowPT" — no inline marginBottom
- **Teaser** (`card-text`, no inline overrides): **"An app for physical therapy practices to keep patients engaged between visits. Runs alongside any EMR, with zero work for your therapists."**
- **Button:** "More Info" (btn--ghost, **title case, no period**, **marginTop 16px**). Opens `GlowPTModal`.

The render at the bottom is just `{glowOpen && <GlowPTModal onClose={() => setGlowOpen(false)} />}`.

> **Planned — the e-book joins here (not built yet).** When the reconciliation book ships, this card goes from one product back to two: GlowPT and the book (heading → GlowPT title/teaser/button, then the book's title/teaser/button), still mirroring Custom Work's clean structure. The book's product name follows the **white sub-title** rule (no gold). Its button links **out to an external checkout** (Kit Commerce front-runner, Gumroad/Payhip fallback — see The Offer Ladder), not to a modal. Do not build this until David asks; it ships after issue 1.

**GlowPT Modal:** Scroll-locked. Title "GlowPT" (marginTop 6px); subline "Clinic subscriptions available." (Inter 14px 600, #8899b0); description tying between-visit engagement to completed plans of care; seven feature lines (blue checks, cream text); price $350 / month (Playfair 27.7px, blue); CTA "Book a Free Discovery Call" (`padding: '10px 20px', fontSize: '13px'` — the smallest primary button, **title case, no period**).

**The exercise-plan exclusion — permanent, and this file is its only home.** Feature line 2 reads **"A private journal and weekly streaks, in every patient's pocket."** It said "a personal exercise plan" until July 15, 2026. **Do not put that back. GlowPT has no exercise plan and never will.** That exclusion is the wedge that separates GlowPT from the HEP tools clinics buy and never use (Medbridge, Physitrack, Prompt Engage). What the product has is a **movement checklist**: a record of what the patient did, not a plan telling them what to do.

### Custom Work

Heading: "Custom Work" — clamp(36px, 5.5vw, 58px), blue, marginBottom clamp(4px, 1.5vw, 10px).
- **Title** (card-title, clamp(30px, 5vw, 35px), **white**): "McKenzie Arm Care"
- **Teaser:** two-sentence description of the custom patient-care portal.
- **Button:** "Case Study" (btn--ghost, **title case, no period**, marginTop 16px). Opens `CaseStudyModal`.

**CaseStudyModal:** Scroll-locked. No "Case Study" label inside. Title "McKenzie Arm Care" (modal__title); full description; 2-column feature list (`modal__features`); tech-stack note "Built with React, Supabase, and deployed on Netlify."

### How It Works

Heading: "How It Works" (capital I, always). Three steps: Discovery / Build / Grow. No step numbers. Parallel two-sentence structure. Step title clamp(30px, 5vw, 35px) Playfair, centered, white. **step-stack `marginTop: '0'`.** Copy stays broadly worded ("your business," "your team") — the umbrella breathing under the niche headline.

### Custom Pricing

Heading: "Custom Pricing". Two tiers (`step-stack` / `step-item`), **step-stack `marginTop: '0'`**:
- **The Build** — `pricePrefix: 'From'`, `price: '$10,000'`. Whisper subtext below.
- **Monthly Care** — `price: '$350'`, `priceSuffix: '/ month'`.
Tier titles clamp(30px, 5vw, 35px) white; price numbers 27.7px blue.

### About (heading reads "Behind FranklinAI")

Heading: **"Behind FranklinAI"** — clamp(36px, 5.5vw, 58px), **two lines via `<br />`**, lineHeight 1.1, marginBottom clamp(4px, 1.5vw, 10px). "Behind Franklin" blue via `card-heading`; **"AI" white #ffffff** in its own span. Component is `About()`.
**Headshot:** `public/david.png`, 120px circle, **margin '14px auto 10px'**, 3px border rgba(96,165,250,0.3).
**Name:** "David Peterson" (card-title, clamp(30px, 5vw, 35px), **white #ffffff**, marginTop 0), two bio paragraphs. The bio closes on **"what a business needs"** — the umbrella's welcome mat under the niche headline (see Positioning note). Keep it broad.

### Discovery CTA

Heading: **"Let's Build"** — clamp(36px, 5.5vw, 58px), blue, marginBottom clamp(4px, 1.5vw, 10px). **No period.**
Copy: "Every project starts with a conversation. Tell us what you need or what's not working, and we'll figure out what to build." Broadly worded — umbrella-level.
CTA button: "Book a Free Discovery Call" — `marginTop: 'clamp(4px, 1vw, 8px)', padding: '11px 22px', fontSize: '14px'`, **title case, no period**. `<EmailOption />` beneath — the **only** place it appears (mailto: david@franklinaisolutions.com, link text "Email", no period).

---

## Scheduling — Cal.com

**Platform:** cal.com · **Account slug:** david-peterson-40s7lw · **Event:** Free Discovery Call · **Event slug:** free-discovery-call · **Duration:** 30 minutes · **Location:** Cal Video
**Full booking URL:** `https://cal.com/david-peterson-40s7lw/free-discovery-call`
All "Book a Free Discovery Call" buttons link here with `target="_blank" rel="noopener noreferrer"`.

---

## Public Assets

All files in `public/` are served at the site root by Vite.

| File | Purpose |
|---|---|
| public/david.png | David Peterson headshot. 400×400px. Displayed as a 120px circle in About. |
| public/apple-touch-icon.png | 180×180 PNG, kite mark on navy, bolt in #fbbf24 |
| public/favicon.svg | SVG favicon, kite mark on navy, bolt in #fbbf24 |
| public/icons.svg | SVG sprite |

---

## Copy Rules

- No em dashes anywhere, ever
- No "software" (use "web apps and tools" or "apps")
- Avoid "in plain English" (and similar) — can read as excluding non-native English speakers. Say what the copy actually delivers instead.
- Tone: warm, plain-spoken, builder-to-business-owner. No brochure language, no consultant register.
- All section headings title case
- **Section headings take no period.** "Let's Build", "Available", "The Operator", "Behind FranklinAI", "Built for Your Practice" — none.
- **The hero trust subline "Built to Handle HIPAA" is title case with no period.**
- **All buttons are title case with no period** (primary and ghost alike). Primary CTAs ("Book a Free Discovery Call"), ghost buttons ("More Info", "Case Study", "Subscribe Free") — all title case, no period, no exceptions.
- The "Email" link under the Discovery CTA has **no period** — it is a link, not a button — and points to **david@franklinaisolutions.com**
- Modal feature lines end with periods
- GlowPT is always one word, capital G and PT
- FranklinAI is always one word, capital F and capital AI; wherever the wordmark appears (nav, footer, the "Behind FranklinAI" heading), the "AI" renders white. The footer copyright is the one place the full legal name "FranklinAI Solutions, LLC" appears.
- **The newsletter card copy is: title "The Operator", label "Newsletter", description "For those who run a physical therapy practice. Delivered every other Tuesday, it takes a clear look at what's working in your practice, what isn't, and what to do about it."** "The Operator" is the newsletter's title; the old "Notes from the ops chair" standfirst is retired from the masthead (see Source-of-Truth Documents).
- **Never describe GlowPT as providing an exercise plan or exercise prescription.** The product has a movement checklist: a record of what the patient did, not a plan telling them what to do. Permanent. See Available.

---

## Forbidden Words in Copy

- "software" (use "web apps and tools" or "apps")
- "in plain English" (and similar phrasing)
- Em dashes — anywhere, ever

---

## Bio (About Section) — Locked

**David Peterson**

David is the operations manager for a busy clinical practice. He's
worked in both nonprofit and for-profit businesses, building systems
and processes to keep everything running smoothly.

That same drive is what FranklinAI is built on. Custom apps and tools
are the next step in work he's been doing his whole career, now with
better technology and a clear focus on what a business needs.

> The bio is the umbrella's proof, not the niche's. Under the niche-forward headline this close does more work than before: it is the welcome mat that keeps the umbrella breathing beneath the practice-forward front door. Keep it broad.

---

## Locked Inline Styles Reference

Set in `App.jsx`, overriding CSS class defaults. Do not change without explicit instruction.

| Element | Inline styles |
|---|---|
| App root wrapper `<div>` | WebkitTextSizeAdjust: '100%' (only style; wraps Nav + main + Footer) |
| Nav `<nav>` | padding: '6px 24px' |
| Nav brand `<a>` | gap: '4px', alignItems: 'flex-start', transform: 'translateX(-26px)' |
| Nav kite wrapper `<span>` | flexShrink: 0, display: 'flex' (kite has NO className) |
| Nav kite | `KiteLogo size={130}` |
| Nav wordmark `<div>` | marginTop: 'clamp(10.98px, calc(39.25px - 2.44vw), 16.28px)' |
| Nav name `<span>` | fontSize: 'clamp(40.95px, 4.35vw, 50.4px)', color: '#60a5fa' |
| Nav "AI" `<span>` | color: '#ffffff' |
| Nav Philadelphia `<span>` | fontSize: 'clamp(17.85px, 2.9vw, 22.05px)', color: '#8899b0', transform: 'translateX(-2px)' |
| All `.site-card` divs | paddingTop: '16px', paddingBottom: '24px' (overrides the CSS `.site-card { padding: 40px }` top and bottom; sides stay 40px) |
| Hero label `<p>` | fontFamily: Playfair Display, fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: '700', letterSpacing: '0.04em', color: '#60a5fa', marginBottom: 'clamp(6px, 2.2vw, 14px)', lineHeight: '1.3' |
| Hero headline `<h1>` | color: '#ffffff', fontSize: 'clamp(37.5px, 5.75vw, 57.5px)', marginBottom: '10px' (text **"Built for" / "Your Practice"**, **no period**) |
| Hero trust subline `<p>` | fontFamily: Inter, fontSize: '15px', color: '#8892a4', marginTop: '0', marginBottom: 'clamp(4px, 1vw, 8px)' (text **"Built to Handle HIPAA"**, no period) |
| **Hero CTA button `<a>`** | **padding: '11px 22px', fontSize: '14px'** (btn btn--primary; label **"Book a Free Discovery Call"**, title case, no period) |
| **Newsletter title `<h2>`** | className `card-heading`, fontSize: 'clamp(34px, 5vw, 50px)', **fontStyle: 'italic'**, lineHeight: '1.2', marginBottom: 'clamp(4px, 1.5vw, 10px)' (text "The Operator" — deliberately smaller than the other six section headings and set in **true italic** to read as a publication masthead; its own heading treatment, see Header Sizing) |
| **Newsletter label `<p>`** | fontFamily: Playfair Display, fontSize: 'clamp(30px, 5vw, 35px)', fontWeight: '800', color: '#ffffff', marginTop: '0', marginBottom: '14px', lineHeight: '1.1' (text "Newsletter" — now matches the standard sub-title tier; the V25 smaller-exception is retired) |
| **Newsletter description `<p>`** | fontFamily: Inter, fontSize: '15px', color: '#8892a4', marginTop: '0', marginBottom: '18px', lineHeight: '1.5' (text "For those who run a physical therapy practice. Delivered every other Tuesday, it takes a clear look at what's working in your practice, what isn't, and what to do about it.") |
| **Newsletter form row `<div>`** | display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', alignItems: 'center' |
| **Newsletter email `<input>`** | fontFamily: Inter, fontSize: '16px', color: '#f0e6d3', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(96, 165, 250, 0.3)', borderRadius: '8px', padding: '10px 14px', height: '44px', minHeight: '44px', boxSizing: 'border-box', outline: 'none', WebkitAppearance: 'none', flex: '1 1 220px', maxWidth: '280px' (type email, placeholder "Your email", aria-label set) |
| **Newsletter Subscribe `<button>`** | className `btn btn--ghost`, type "button", style height: '44px', minHeight: '44px', boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', **marginTop: '0'** (label **"Subscribe Free"**, no period). The marginTop: '0' cancels the `.btn` class `margin-top: 8px`; the height/minHeight/boxSizing pin it to the input's 44px. No onClick yet. |
| Available card heading `<h2>` | fontSize: 'clamp(36px, 5.5vw, 58px)', marginBottom: 'clamp(4px, 1.5vw, 10px)', lineHeight: '1.2' (text "Available") |
| GlowPT product name `<h3>` | fontFamily: Playfair Display, fontWeight: '800', fontSize: 'clamp(30px, 5vw, 35px)', color: '#ffffff', lineHeight: '1.2' (no marginBottom) |
| GlowPT teaser `<p>` (card-text) | no inline overrides |
| GlowPT "More Info" button `<button>` | marginTop: '16px' (btn--ghost; label "More Info", no period) |
| GlowPT modal title `<h2>` | marginTop: '6px' |
| GlowPT modal subline `<p>` | fontFamily: Inter, fontSize: '14px', fontWeight: '600', color: '#8899b0', marginBottom: '16px' |
| Modal feature list wrapper `<div>` | marginBottom: '24px' |
| Modal feature row `<div>` | display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' (last row '0') |
| Modal feature check `<span>` | color: '#60a5fa', fontWeight: '700', flexShrink: 0, lineHeight: '1.5' (aria-hidden) |
| Modal feature text `<span>` | fontFamily: Inter, fontSize: '15px', color: '#f0e6d3', lineHeight: '1.5' |
| Modal footer `<div>` | borderTop: '1px solid rgba(96, 165, 250, 0.12)', paddingTop: '24px', textAlign: 'center' |
| GlowPT modal price `<p>` | fontFamily: Playfair Display, fontWeight: '700', fontSize: '27.7px', color: '#60a5fa', lineHeight: '1.45', marginBottom: '18px' |
| Modal price descriptor `<span>` | fontSize: '20px' |
| **Modal discovery button `<a>`** | **padding: '10px 20px', fontSize: '13px'** (btn btn--primary; label "Book a Free Discovery Call", no period) |
| Custom Work heading `<h2>` | fontSize: 'clamp(36px, 5.5vw, 58px)', marginBottom: 'clamp(4px, 1.5vw, 10px)', lineHeight: '1.2' |
| McKenzie card title `<h3>` (card-title) | fontSize: 'clamp(30px, 5vw, 35px)' (white) |
| Case Study button `<button>` | marginTop: '16px' (btn--ghost; label "Case Study", no period) |
| How It Works heading `<h2>` | fontSize: 'clamp(36px, 5.5vw, 58px)', marginBottom: 'clamp(4px, 1.5vw, 10px)', lineHeight: '1.2' |
| Step title wrapper `<div>` | marginBottom: '10px', textAlign: 'center' |
| Step title `<h3>` | fontSize: 'clamp(30px, 5vw, 35px)', textAlign: 'center' |
| step-stack `<div>` (How It Works) | marginTop: '0' |
| Custom Pricing heading `<h2>` | fontSize: 'clamp(36px, 5.5vw, 58px)', marginBottom: 'clamp(4px, 1.5vw, 10px)', lineHeight: '1.2' |
| step-stack `<div>` (Custom Pricing) | marginTop: '0' |
| Custom Pricing tier title wrapper `<div>` | marginBottom: '6px', textAlign: 'center' |
| Custom Pricing tier title `<h3>` | fontSize: 'clamp(30px, 5vw, 35px)', textAlign: 'center' |
| Custom Pricing price line `<p>` | fontFamily: Playfair Display, fontWeight: '700', fontSize: '27.7px', color: '#60a5fa', marginTop: '4px' |
| Custom Pricing price descriptor `<span>` | fontSize: '20px' |
| Custom Pricing whisper subtext `<p>` | fontFamily: Inter, fontSize: '15px', color: '#8892a4', marginTop: '0' |
| About heading `<h2>` | fontSize: 'clamp(36px, 5.5vw, 58px)', lineHeight: '1.1', marginBottom: 'clamp(4px, 1.5vw, 10px)'; text **"Behind" `<br />` "Franklin" + white-span "AI"** |
| About headshot `<img>` | width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', display: 'block', **margin: '14px auto 10px'**, border: '3px solid rgba(96, 165, 250, 0.3)' |
| About card title `<h3>` (David Peterson) | marginTop: '0', fontSize: 'clamp(30px, 5vw, 35px)', color: '#ffffff' |
| Discovery CTA heading `<h2>` | fontSize: 'clamp(36px, 5.5vw, 58px)', marginBottom: 'clamp(4px, 1.5vw, 10px)', lineHeight: '1.2' |
| **Discovery CTA button `<a>`** | **marginTop: 'clamp(4px, 1vw, 8px)', padding: '11px 22px', fontSize: '14px'** (label "Book a Free Discovery Call", no period) |
| EmailOption `<p>` | fontFamily: Inter, fontSize: '15px', color: '#8892a4', marginTop: '18px' (under Discovery CTA only) |
| EmailOption link `<a>` | href mailto:david@franklinaisolutions.com; color: '#60a5fa', textDecoration: 'none', fontWeight: '600'; link text **"Email"**, no period |
| Footer `<footer>` | padding: '24px 24px 20px', borderTop: '1px solid rgba(96, 165, 250, 0.12)', marginTop: '0', display: 'flex', justifyContent: 'center' |
| **Footer brand row `<div>`** | display: 'flex', alignItems: 'flex-start', gap: '4px', **transform: 'translateX(8px)'** |
| Footer kite wrapper `<span>` | flexShrink: 0, display: 'flex' |
| Footer kite | `KiteLogo size={105}` |
| **Footer text column `<div>`** | display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '13.16px', **transform: 'translateX(-22px)'** |
| Footer name `<span>` | fontFamily: Playfair Display, fontWeight: 700, fontSize: '32px', color: '#60a5fa', lineHeight: 1 (with "AI" in #ffffff) |
| Footer Philadelphia `<span>` | fontFamily: Playfair Display, fontWeight: 400, fontSize: '15px', letterSpacing: '0.02em', color: '#8899b0', marginTop: '3px', transform: 'translateX(-2px)' |
| Footer address `<span>` | fontFamily: Inter, fontSize: '13px', color: '#8892a4', lineHeight: 1.5, marginTop: '8px', transform: 'translateX(-2px)' |
| **Footer copyright `<span>`** | fontFamily: Inter, fontSize: '13px', color: '#8892a4', lineHeight: 1.5, transform: 'translateX(-2px)' (text **"© {year} FranklinAI Solutions, LLC"**) |

---

## CSS / JSX Boundary Rules

**App root:** `App()` returns a single `<div style={{ WebkitTextSizeAdjust: '100%' }}>` wrapping Nav, main, Footer. One property only.

**Footer:** Fully self-contained in `App.jsx`, inline styles, NO CSS classes. Do not add `site-footer*` classNames back.

**Nav:** Uses `global.css` classes for layout plus inline overrides. Nav kite no longer uses `.site-nav__logo`.

**Newsletter card (`NewsletterStrip`):** Uses `.section` / `.container` / `.site-card` / `.card-heading` plus inline styles. The label ("Newsletter"), description, and form row are fully inline; the email `input` is fully inline-styled (no CSS class — there is no input class in the kit). The Subscribe button uses `.btn` / `.btn--ghost` from `global.css` **plus inline overrides** — critically `marginTop: '0'` (cancels the class `margin-top: 8px`) and `height`/`minHeight: '44px'` with `boxSizing: 'border-box'` and flex centering (matches the input's 44px, since `.btn`'s `padding: 15px 34px` otherwise makes it taller). **Do not remove these overrides or the input/button will fall out of alignment again.** **Placeholder styling would require a `global.css` `::placeholder` rule** and is deliberately not added; the field uses the browser default placeholder color for now. When the card is wired to Kit, the form becomes a POST to Kit's endpoint (field `email_address`) or a JS-handled submit — a small JSX addition.

**Available card (`AvailableForPractice`):** Uses `.section` / `.container` / `.site-card` / `.card-heading` / `.card-text` / `.btn` plus inline overrides. `GlowPTModal` uses `.modal-backdrop` / `.modal` / `.modal__close` / `.modal__title` / `.modal__text`, with feature rows and the price block fully inline. (When the e-book joins, this card returns to a two-product structure; see Available.)

**Custom Work card:** Uses `.section` / `.container` / `.site-card` / `.card-heading` / `.card-title` / `.card-text` / `.btn`. `CaseStudyModal` uses the modal classes plus `.modal__features` / `.modal__feature` / `.modal__stack`.

**Primary buttons:** All three (hero, modal, Discovery) use `btn btn--primary` plus an inline sizing override. Do not remove the inline sizing without setting new explicit sizing.

**Heading spacing:** Every `card-heading` sets its own `lineHeight: '1.2'` (About 1.1) and `marginBottom` inline via the shared clamp; no `step-stack` or headshot below a heading carries a negative top margin. The italic "The Operator" title also carries its own smaller `fontSize` and `fontStyle: 'italic'`.

**Fixes are JSX-only via inline styles.** Avoid `global.css` edits. Public assets go in `public/`.

---

## Process

### In Claude Code
Edit the repo in place. Read the real file first. Commit when David says so. `CLAUDE.md` at the repo root is this document. (The GlowPT repo is separate, with its own `CLAUDE.md` and its own AWS backend — do not cross the streams.)

### In claude.ai
Each change: David receives an updated `App.jsx` to replace in `src/`. The workflow is: read `/mnt/project/App.jsx` → copy to a working directory → `str_replace` edits → verify (line count as intended, new string present, old string count zero, no em dashes in affected lines) → copy to outputs → present for download.

Every change followed by a single copy-paste push command:

```
cd ~/Downloads/franklinai-v2 && git add . && git commit -m "message" && git push
```

Netlify auto-deploys on push. Hard refresh with Cmd+Shift+R after deploy. Favicon changes require closing and reopening the tab.

### Both
**Strategic discussion before code.** David thinks decisions through conversationally first; code changes wait for an explicit go-ahead. Flag conflicts with established decisions proactively rather than executing silently, then hold the position if the reasoning is sound. "Don't touch nothing else" means strict boundaries.

**Document versioning.** This file is maintained as a complete drop-in replacement (never a patch), with full change history. Read live code as the source of truth when producing a new version, to catch drift.

**No phantom sources.** Do not cite a document that does not exist in the project. Two files do: this one and the Content Calendar. If an answer needs anything else, it needs David. The Content Calendar's *The Ladder* and *The Spines as a Book Series* sections are valid citations (the marketing strategy home); this file stays the home for the rungs and their prices. The GlowPT/AWS backend architecture and the legal/entity work are **not** documents in this project — do not cite them beyond the Tech Stack boundary and the footer legal-name fact.

**Secrets.** When giving David a command or query that could return a secret (API key, service-role key, password, token, connection string), redact it in the command itself so it never renders on screen. Build the redaction in; do not warn and hope.

---

## Change History

- **V26** — **Operator-card rebalance, italic masthead, tighter card typography, and two live-code drift fixes.** First session run in Claude Code (the instructions now live in the repo as `CLAUDE.md`, same document as the claude.ai project instructions). (1) **Operator card rebalanced:** "The Operator" title shrunk to `clamp(34px, 5vw, 50px)` and pulled out of the unified section-heading tier; the "Newsletter" label grown to `clamp(30px, 5vw, 35px)` to match the standard sub-title tier — the V25 smaller-label exception is retired. (2) **"The Operator" set in true italic** (`fontStyle: 'italic'`) to read as a publication masthead; the name was reconsidered and **kept** (it names the reader-operator, not David). (3) **Card-heading `lineHeight: '1.2'`** added to the six single-line headings (About stays 1.1) — the real fix for the header-to-subheader gap, which had been inheriting the body's 1.6. (4) **Card padding tightened:** `paddingTop` 20→16, explicit `paddingBottom: '24px'` (was CSS 40); sides stay 40. (5) **Subscribe button → "Subscribe Free."** (6) **Drift fix:** the live `index.html` font import was `Playfair+Display:wght@700;800` (no italic); corrected to `ital,wght@0,700;0,800;1,800` for the true-italic masthead — the spec's prior `1,400` italic claim was wrong. (7) **Flagged, not changed:** the `<meta name="description">` still contains the banned word "software." Sections updated: header summary, Known-lag note, Brand Kit typography (Newsletter title/label rows + font import), Logo Accent (Operator italic-but-blue note), Header Sizing (masthead exception + tiers rewritten), Card Top & Bottom Padding (renamed), Card Heading Spacing (line-height cause), Design Rules, Copy Rules, Newsletter Card, Page Sections, Locked Inline Styles (Newsletter title/label/Subscribe rows + all card padding + heading line-heights), CSS/JSX Boundary. No other code changed this pass.
- **V25** — **Newsletter card masthead restructure, Subscribe-button alignment fix, and terminology correction.** (1) **"Strip" retired for "card"** throughout — the component is a full prominent `.site-card`, not a quiet strip; the original goal was only to bring an oversized version down to right-sized. The React component keeps its legacy name `NewsletterStrip`. (2) **Masthead is now title / label / description:** "The Operator" (blue card-heading) → "Newsletter" (white Playfair label, clamp(26px, 4vw, 30px), lineHeight 1.1) → the description line. This replaced the interim "The Operator" + "Notes from the Ops Chair" subhead, which was added and then removed within the session. (3) **"The Operator" is the newsletter's title, not a label for David** — retires the Calendar's "name never travels alone / Notes from the ops chair standfirst" rule; the chair voice survives as the writing register only. Calendar updated the same pass. (4) **Description rewritten:** "For those who run a physical therapy practice. Delivered every other Tuesday, it takes a clear look at what's working in your practice, what isn't, and what to do about it." (5) **Subscribe button aligned to the input:** both pinned to 44px via `height`/`minHeight`/`boxSizing: border-box`; button set to `inline-flex` centered with **`marginTop: '0'`** to cancel the `.btn` class `margin-top: 8px` (the cause of the lingering vertical offset) and to beat the class's `padding: 15px 34px` (the cause of the height mismatch). (6) **Promise-line coupling retired** — the site card carries its own copy and no longer must match the issue-top promise word-for-word; open item flagged (site dropped "Written by someone who runs one"; Issue 1 promise still carries it). Sections updated: header summary, Source-of-Truth Documents (calendar summary + retired rules), Newsletter Card (rewritten), Brand Kit colors + typography, Logo Accent (Newsletter label white), Header Sizing (Newsletter label exception note), Card Top Padding, Card Heading Spacing, Design Rules, Copy Rules, Page Sections (Newsletter subsection), Locked Inline Styles (Newsletter rows + input/button), CSS/JSX Boundary (NewsletterStrip overrides). No other code changed this pass.
- **V24** — **One session of site changes plus recent-thread drift.** (1) **All buttons title case, no period, as one unified rule** — retiring V23's period-on-buttons rule. (2) **The Operator newsletter signup built and live** between Hero and Available (component `NewsletterStrip`): blue "The Operator" heading, standfirst, promise line, an inline-styled email input, and a **ghost** Subscribe button. **Unwired** — Kit endpoint pending. (3) **Newsletter platform chosen: Kit**; Kit Commerce also the front-runner for the e-book checkout. (4) **New locked promise line** ("what's working in your practice, what isn't, and what to do about it"). (5) **Footer drift folded in (July 24):** copyright → "FranklinAI Solutions, LLC"; brand-row dial → translateX(8px); footer text column added translateX(-22px). (6) **Legal entity note:** FranklinAI Solutions LLC formed, "FranklinAI" as the fictitious name — only the footer legal name is a site fact. *(V25 note: the newsletter masthead and copy from V24 have since been restructured; see V25.)*
- **V23** — Two hero copy changes, the niche-forward positioning reversal, and a stack-boundary note. Headline "Built for Your Business" → "Built for Your Practice"; subline "Built to handle HIPAA." → "Built to Handle HIPAA"; positioning reversed to niche-forward (headline names the niche, subline becomes moat/proof, umbrella breathes below); new Tech Stack boundary (GlowPT → AWS, site + McKenzie → Supabase); What No Longer Has a Home updated to add the GlowPT/AWS architecture reasoning.
- **V22** — Document correction only; the cross-document drift flagged in V21 resolved. The Content Calendar now contains *The Ladder* and *The Spines as a Book Series*; phantom-source caveat lifted for those sections.
- **V21** — Contact email → `david@franklinaisolutions.com` (live July 19); Content Calendar summary aligned (Spine E two wells, spearhead as front door); newsletter signup clarified as a not-a-product strip; reconciliation e-book captured as a planned second Available shelf; new The Offer Ladder section naming all four rungs.
- **V20** — Four UI refinements live July 18: primary CTAs shrunk ~25% with explicit inline sizing; hero label marginBottom made responsive; six card headings unified to one responsive gap with negative pulls removed; About heading renamed "Behind FranklinAI" on two lines.
- **V19** — Business Plan deleted; Content Calendar the only source-of-truth document; deferring rules resolved in place; What No Longer Has a Home and No-phantom-sources rules added.
- **V18** — Source-of-truth repointed; Working in Claude Code vs claude.ai section added; GlowPT modal exercise-plan claim removed. *(Merged Business Plan itself deleted one version later — see V19.)*
- **V17** — Fine-print left-nudges added; nav/footer values reconciled to live.
- **V16** — Available card divider removed and the GlowPT wrapper `<div>` deleted; card mirrors Custom Work.
- **V15** — Clarity removed from the site entirely; Available became a single-product GlowPT card.
- **V14** — GlowPT teaser rewritten verb-first. *(Clarity teaser moot as of V15.)*
- **V13** — Clarity teaser expanded; "in plain English" removed and banned.
- **V12** — Gold retired to the logo bolt only; product names, founder, and McKenzie names moved to white.
