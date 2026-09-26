# FranklinAI — Project Instructions (Version 60, Current)

> **READ THIS FILE BEFORE MAKING ANY CHANGE TO THIS REPO.** Read all of it, not just the section you think applies. **If a value looks arbitrary, it is almost certainly hand-tuned and documented here. Look it up first.** A morning was once lost re-deriving a footer geometry this file already specified.

> **The version number on the first line is how every session says which copy it read.** Bump it whenever this file changes and add a one-line Change History entry.

---

## CURRENT STATE (edit these lines in place; do not start a new chain)

- **Live:** franklinaisolutions.com on **AWS Amplify** (account `franklinai-web`), DNS in **Route 53**, David's Microsoft 365 mail intact. **The Operator** signup is wired to **Kit form `9962049`**, double opt-in ON, and Kit sends as the domain. Confirmed by David 2026-09-25.
- **Next:** the **e-book checkout on Kit Commerce** (decided, not built; "Buy the Guide" is still `href="#"`). Steps in Open Items.
- **Issue 1 of The Operator:** date lives in the Content Calendar (September 29, 2026 as of its September 25 pass).
- **Watching:** the mystery third signup (Open Items); Netlify still on standby until David deletes the franklinai site and zone.
- **Coming:** David will fine-tune the nav/footer nudges, kite sizes and F-vs-crossbar margins. The current values and their history are under **Locked Geometry**.
- **Measured at V58 (unchanged at V59):** `App.jsx` is **735 lines**; the `$350` decoy sits at **lines 99 and 510**.
- **Older version-by-version narrative (V12 to V57) is in `docs/history.md`.** The "Everything else from Version N remains in force" chain that used to open this file was removed on 2026-09-26. **Do not start a new one.**

---

## ⚖️ WHAT MAY BE ADDED TO THIS FILE (set 2026-09-26, copied from GlowPT)

**This file loads IN FULL at the start of every session, so its size is a tax on every thread.** On 2026-09-26 it measured **167,777 bytes**, up ~42 KB in one day. GlowPT's reached 478 KB before the same fix. **The cause was Claude, not David:** each version wrote a long narrative and told the next to do the same.

**⛔ THIS FILE IS A GUIDE, NOT A JOURNAL.**

**A session may add:**
- **A durable rule**, one or two lines, where a future session will find it.
- **A change in current state**, by **editing the existing line**, not appending one beside it.
- **A short entry for recent work**: what broke, the rule it leaves, what was observed. **Not the investigation.**

**It does NOT go here:** the reasoning and narrative of a fix (**that belongs in the commit message**, permanent and searchable with `git log`); anything the code already says; a second copy of a rule already stated.

**⛔ NOTHING LEAVES THIS FILE UNTIL IT IS IN `docs/history.md`, VERBATIM.** Any removal, any day. Bank first, then cut. **A git pre-commit hook enforces it** (`scripts/hooks/pre-commit`, on via `git config core.hooksPath scripts/hooks`): it blocks a commit where CLAUDE.md loses lines without `docs/history.md` staged, and one where CLAUDE.md grows by more than 2 KB with nothing banked. Skip once with `git commit --no-verify`, visibly. *(`core.hooksPath` is local git config; a fresh clone must turn it on again.)*

**▶ EVERY SESSION REPORTS THIS FILE'S SIZE AND ITS OWN DELTA IN ITS CLOSING MESSAGE:** `stat -f%z CLAUDE.md` against `git cat-file -s <the session's first commit>:CLAUDE.md`. Self-reported, so not a control; David checks with `git log --format='%h %ad %s' --date=short -- CLAUDE.md`.

**🧹 TRIM WHEN IT PASSES ~150 KB**, in this order: (1) bank the full text into `docs/history.md` first; (2) archive whole finished sections; (3) check live operational facts did not leave with the history (here: the AWS and Kit records); (4) condense recent entries to headline + what broke + the rule + what was observed; (5) **lift every durable rule into place before archiving its entry**; (6) **probe the result for the rules that must survive, by name.**

**📚 THERE ARE ONLY TWO FILES:** this one (loads every session, holds what must be known) and `docs/history.md` (loads never, holds why). **Do not invent a third, and do not narrate the bookkeeping to David.** Do it quietly and report the result.

---

## CRITICAL: Source File Rule

**Applies when working in claude.ai. In Claude Code, see the next section.**

**Claude must ALWAYS read the current `App.jsx` from the project files before making any code change.** The project file is the single source of truth for the live code. David replaces it routinely after each deploy. Never work from a cached copy, a previous output, or memory of what the file contained in an earlier turn.

> **Known lag:** the project snapshot is hand-replaced, so it can trail the repo by a push. When the snapshot and a just-confirmed push disagree, the push is live and the snapshot is stale — say so rather than silently reverting the newer change.

> **There is ONE copy of this document: `CLAUDE.md` on `main` in the repo (since V59).** The claude.ai project instructions are a short pointer telling each claude.ai session to fetch `https://raw.githubusercontent.com/besoulful-design/franklinai-v2/main/CLAUDE.md` and state the version it read. **Nothing is pasted into claude.ai any more.** ⚠️ **The pointer works only because this repo is PUBLIC, which David chose deliberately on 2026-09-26.** Never commit a secret here. If it is ever made private, claude.ai needs another route (GitHub linked to the project, or pasting again) and this note must change.

---

## Working in Claude Code vs claude.ai

**This file lives in one place: `CLAUDE.md` at the repo root.** Claude Code loads it automatically; claude.ai fetches it from GitHub through the pointer in its project instructions. **Do not maintain a Code-tuned variant and a claude.ai-tuned variant.**

> **The GlowPT repo** is a *different* repo at `~/Downloads/glowpt` with its own `CLAUDE.md` and its own AWS backend. This file does not govern its architecture. **Any handoff into Code should name the repo in its first line.** But **copy rules DO cross** (see *Copy Rules Travel With the Voice*), and **one content list is shared** (see *The two sites' shared bullet list*).

| Job | Tool |
|---|---|
| Editing `App.jsx`, the repo, anything on disk | Claude Code |
| Route 53 records for franklinaisolutions.com | Claude Code, from this root (see *Working across the two repos*) |
| Strategy, positioning, copy decisions, arguing a call through | claude.ai |
| Maintaining **this file** (`CLAUDE.md`) | Claude Code |
| Producing or revising the **Content Calendar** | claude.ai |
| Newsletter drafting | claude.ai |

**Rules that apply everywhere, both tools, no exceptions:** the Logo Accent gold rule, all locked inline styles and render values, the three-tier heading system, the Copy Rules and Forbidden Words, the CSS/JSX Boundary Rules, and the Design Rules.

> **When a handoff note and this file disagree, the handoff note wins for that session.** Apply the note, push the code, **then** update this document to record it.

---

## Copy Rules Travel With the Voice, Not the Repo

**David's rule, set 2026-08-27.** The **Copy Rules** and **Forbidden Words** bind **anywhere a PT owner reads FranklinAI's words**: this site, the GlowPT product site and app, and **Kit** (the confirmation email, the Kit Commerce product page, every broadcast). A buyer reads glowpt.app and franklinaisolutions.com in one sitting; they are one house.

- **Never fix an em-dash rule with a find-and-replace.** A bare `—` used as an empty-value placeholder is a UI glyph, not prose (GlowPT's dashboard Streak column keeps six on purpose).
- **A dash used as a LABEL SEPARATOR becomes the middot `·`.**
- **Any feature that generates user-facing text with a model must carry the rule in its prompt** ("Do not use em dashes in your response."), or generated text escapes it.
- **User-facing copy does not all live in the obvious folder.** Before declaring a copy rule applied, check the delivery surfaces too (GlowPT's Lambdas kept em dashes four days after `src/` was swept). **Kit is one of those surfaces.**
- **Code comments and this document are exempt.** The rule governs shipped strings a visitor can read.

---

## The two sites' shared bullet list

**The eight GlowPT feature bullets are one list living in two repos.** They must stay **word-identical and in the same order** in both:

- **Here:** `features` inside `GlowPTModal`, `src/App.jsx`.
- **There:** `whatGlowptIs.points` in `glowpt/src/lib/marketing.js`.

**Both arrays carry a five-line comment naming the other.** That comment is the only safeguard: **nothing enforces the match at build time.** *(David's rule, 2026-08-30: a buyer who meets two descriptions of one product thinks it is unsettled. The old "glowpt.app carries 5 of the 8, do not reconcile" instruction is RETIRED. Do not reinstate it.)*

> **Verify the match by parsing both arrays and comparing element by element**, never by eyeballing two eight-item lists. *(Verified this way at V54: 8 and 8, identical and same order.)*

**What still differs between the sites, deliberately:** the **first sentence** of the pitch (this site names the niche, glowpt.app does not), and glowpt.app carries **a price line and a signup path** this modal does not need.

---

## Source-of-Truth Documents

**The Content Calendar** (a claude.ai document) is the source of truth for all content and marketing. This file intentionally holds **no** content/marketing specifics beyond what the site displays. The calendar is **newsletter-led**: *The Operator*, every other Tuesday, 400–600 words, free, written Sunday on a phone. **Instagram is the only discovery surface.** **The discovery call is the only door** for the custom build (GlowPT has a second door; see Offer Ladder). The addressee is the **owner**; the office manager is the multiplier. The spearhead is **model confusion** ("You're running an insurance practice with cash-model marketing"), across **six spines**: (A) model confusion, (B) plan-of-care completion, (C) team, hiring, retention, and modeling, (D) your numbers, (E) AI in your practice, (F) systems and delegation. The four-video YouTube arc is **parked whole**.

> **Calendar points worth knowing here (read the calendar for the rest):**
> - **Issue dates live in the Calendar, not here.** This file was wrong about Issue 1's date three times.
> - **The book is the source.** *What Your Practice Actually Sells* is finished; **on a sentence a reader meets on more than one surface, the book's wording wins** — a deliberate exception to "the deployed page wins".
> - **The spearhead is the front door, not a leash.** Only **D** and **C** are downstream of it. **E's lift half and F stand on their own feet.** Spine E is two wells, the line and the lift; leading with the line is a **strong default, not a law**.
> - **Two retired framings the site copy must never reintroduce:** **"nobody decided"**, and **the front-desk-versus-therapist split**.
> - **"cash practice" and "advanced care" are interchangeable, and neither is retired.**
> - **"The Operator" is the newsletter's title; the masthead standfirst rule is retired.**
> - **The promise line reads the same on all three surfaces** (issue top, site card and modal, Instagram graphic): **"For physical therapy practices."**
> - **The readiness ladder:** newsletter (cold follow) → email (a self-paced question) → discovery call (the door).

**This file** covers the **website build**: structure, styling, copy rules, locked values, the product facts the site displays, the **pricing of every rung**, **hosting and DNS**, and **the Kit account behind the site**. **It is the authority for everything it states.**

---

## What No Longer Has a Home

The deleted Business Plan also held **market sizing, unit economics, the HIPAA architecture decision, the roadmap, and risks.** None of that moved here. **The offer ladder's rungs** now live here; its marketing strategy lives in the Calendar.

**Still homeless:** unit economics, market sizing, the HIPAA architecture reasoning, and the **GlowPT/AWS backend architecture** (which lives in the GlowPT repo). **Legal/entity work** is business territory; only the displayed legal name is a site fact.

**Do not reconstruct the homeless parts from memory and do not cite them.** Say plainly there is no source.

> **Narrow exception:** the **GlowPT** section records a handful of GlowPT commercial facts **only because this site links into that flow and must not lie about it** — marketing constraints, never architecture. Source: the GlowPT repo's `docs/commercial-handoff.md`; **the GlowPT code wins on any disagreement.**
>
> **This site's own hosting and Kit account are NOT homeless.** They are recorded in full below. Org-level AWS setup (management account, org BAA, Identity Center) stays out beyond what is needed to operate this site.

---

## Business

FranklinAI builds custom web apps and tools for businesses — web apps, internal tools, and client-facing portals — built around a client's specific way of working rather than off-the-shelf templates. Based in Philadelphia, serving local and remote clients.

> **Legal entity.** **FranklinAI Solutions LLC** (Pennsylvania); **"FranklinAI"** is the brand / fictitious name. The **wordmark lockup carries the full legal name** — "FranklinAI" over **"Solutions LLC"** in both nav and footer. The footer copyright is just "© {year}".
>
> **⚠️ NO COMMA. `FranklinAI Solutions LLC`, never `FranklinAI Solutions, LLC`.** The no-comma form is what appears everywhere the entity is legally named: both attorney-review contract drafts in the GlowPT repo, glowpt.app's `src/lib/legal.js`, and the **AWS management account's Company-name field, which the org BAA binds to.** **Use it on any new surface and never reintroduce the comma for typographic taste.** The Kit Commerce payout setup takes this form too. glowpt.app's footer carries `© {year} FranklinAI Solutions LLC`, so both sites spell it identically.

> **The company's work email lives on this domain.** `david@franklinaisolutions.com` is **Microsoft 365, bought through GoDaddy**. It is also David's AWS Identity Center username, the org's budget-alert address, his AWS Builder ID, **and the Kit login and The Operator's sending address**. **Its delivery depends on records in this domain's Route 53 zone.** Treat those as the most dangerous thing in this repo's orbit.

**Packaged products under the FranklinAI umbrella:**

- **GlowPT** — a daily patient check-in app for physical therapy clinics. Clinics subscribe; their patients use it free. Separately branded (amber/navy, its own logo, **glowpt.app**), but on this site it wears FranklinAI's navy-and-blue. **Live, and self-serve since V49.**
- **The reconciliation e-book** — one-time, self-serve, **$37**, titled **"What Your Practice Actually Sells."** **The book is written** (about 6,300 words, eleven chapters; the file is David's), **the card and modal are live**, **the checkout is not wired**. **Kit Commerce is the decided checkout.**
  > **Say this precisely:** the book exists and the listing is live; **the product is not buyable yet.** The Calendar's rule: **a listed product nobody can buy comes off the shelf.** If the checkout is not live by Issue 1, **ask David before touching the card**, and **do not ship a coming-soon strip or a pre-sell.**

Everything else is **custom-build work** — scoped after a discovery call, priced from $10,000.

> **Clarity is retired from the site and the product lineup.** Do not re-add a Clarity product, modal, teaser, or pricing block unless David explicitly asks. It is parked, not dead.

### Positioning note — niche-forward front door

**FranklinAI is an umbrella company. The front door is niche-forward: the headline speaks to the practice, and the umbrella breathes one layer down. Do not "reconcile" it back to a broad headline.**

- **Headline: "Built for Your Practice"** (no period; two lines).
- **Subline: "Built to Handle HIPAA"** (title case, no period). It **proves** the niche. The only place HIPAA appears on the page.
- **The umbrella breathes below the fold.** The About bio is fully broad, closing on **"what a business needs."** How It Works and Discovery stay broadly worded. The hero label **"Custom Apps & Tools"** stays generic. **Do not add a sentence that walls the umbrella off.**

> **Where the niche is named:** the **headline**, the **newsletter card**, and the **GlowPT teaser** ("physical therapy patients"). **Not the About bio** — there it would be a wall. The **e-book's Kit Commerce product page MAY name physical therapy** (it is standalone and must say who it is for); **the site's e-book card and modal deliberately do not.**

## Flagship Example

The McKenzie Arm Care app — a custom patient-care web app with user login, journaling, symptom and progress logs, in-app messaging, an admin portal, smart alerts, and email notifications. Proof-of-work for the custom-build service. Use confirmed with permission.

---

## GlowPT — the two-door product

**A marketing constraint list, not architecture.** Source: the GlowPT repo's `docs/commercial-handoff.md`; **the GlowPT code wins on any disagreement.**

| Fact | What the site may say |
|---|---|
| **Signup is fully self-serve.** `glowpt.app/onboard` is a ~4-field form creating the clinic, manager and patient link. | "Sign up online." "Set up your clinic in a minute." |
| **Activation is NOT self-serve.** A new clinic starts **closed**; David flips it manually, which is where the BAA and first payment are confirmed. | **Nothing implying patients can start checking in right after signup.** |
| **A BAA is click-through at signup**, version-stamped, under an org-level AWS BAA active since August 2026. | Nothing yet. |
| **No billing in the product. Zero Stripe.** Collection is manual. | **No renewal, cancellation, refund or trial claims of any kind.** |
| **Demo data only** until the clinic BAA text clears attorney review. | **Nothing implying live clinics are in production.** |
| **$350 covers the clinic with no patient limit.** | Feature bullet 3 says so. |

**Hard constraints:**
- ⛔ **No renewal or cancellation claims.** Counsel has an open question on **state auto-renewal statutes**.
- ⛔ **Never put an `@glowpt.app` address in a `mailto:`.** glowpt.app has **no root MX record**; mail bounces silently. The contact address is **`david@franklinaisolutions.com`**, everywhere, both sites.
- ⛔ **Never describe GlowPT as providing an exercise plan or exercise prescription.** See the permanent exclusion under **GlowPT Modal**.

**How the two doors reconcile:** the activation flip and the discovery call are the same human step where the BAA and the money get confirmed. The owner who wants to talk first **books the call**; the owner who wants to start **signs up, lands closed, emails David**. **Two doors, one gate.**

**What differs between the two sites, deliberately:** (1) the pitch's **first sentence** (this site names the niche; glowpt.app, already GlowPT-branded, does not); **the second sentence is identical on all four surfaces**; (2) glowpt.app carries the price line and signup path; (3) **glowpt.app's landing header is deliberately self-sufficient** (reached by URL, search, QR and forwards) — **do not thin it.** The bullets, the entity spelling and the hosting (both Amplify, separate accounts) no longer differ.

> **A thin "handoff-only" FranklinAI modal was proposed and rejected.** **A visitor should reach the price and the feature list before a signup link**, which is why the self-serve door is inside the modal, not on the card.

---

## The Offer Ladder

**The content is free; the ladder is where the money is.**

| Rung | Price | Sells how | On the site | Status |
|---|---|---|---|---|
| **The Operator newsletter** | Free | The free engine, on **Kit**. **Not a product.** | Its own card between Hero and Available | **Live and wired**, Kit form `9962049`, double opt-in |
| **The reconciliation e-book** | $37, one-time | **Self-serve.** The first paid yes. | **First** product on Available; More Info opens `EbookModal` | **Written; card and modal live; checkout NOT wired** (Kit Commerce, next) |
| **GlowPT** | $350 / month | **Two doors: `glowpt.app/onboard` or the discovery call**, both landing at manual activation. | Available card; both CTAs in `GlowPTModal` | Live |
| **The custom build** | From $10,000 | Needs the discovery call. | Custom Pricing | Live |

**Why the extra doors do not break the one door:** the newsletter closes on the discovery call, every issue — one ask. The $37 file sells from the shelf and Instagram, **never from the newsletter's close.** GlowPT's self-serve door lives inside a modal, never in the newsletter. **The "one door" rule governs the newsletter's close, not the site.**

**The e-book:**
- **Book one is reconciliation** — the newsletter gives the diagnosis free; the book sells the way out.
- **Checkout: Kit Commerce, DECIDED 2026-09-25.** **Gumroad is merchant of record** (handles US sales tax and EU VAT); **Kit Commerce is not**, so that liability sits with FranklinAI Solutions LLC. **David chose Kit anyway because every buyer lands on the list, which is the point of the $37 rung.** **Gumroad or Payhip only if Kit Commerce fails in practice.** Do not assume Stripe directly (Kit Commerce pays out through a Stripe connection set up inside Kit).
- **Price appears in three places that move together:** `App.jsx` (the `EbookModal` subline and its Playfair price line), this file, and the Kit product. **$37 in all three.**

---

## Pricing Model

- **GlowPT** — $350 / month, flat, **no patient limit**, displayed in the GlowPT modal. **If it changes, THREE places move: `App.jsx`, this file, and `glowpt/src/lib/marketing.js` (`MONTHLY_PRICE_USD`).**
  > ⚠️ **The price line at `glowpt.app/onboard` is a CONTRACT REQUIREMENT.** Subscription Agreement §5.1 says "$350 per month, **or the amount stated at sign-up**", and that on-screen line IS the amount stated. Never remove it or edit it as marketing copy. It is **two constants on two lines** (`PRICE_LINE` "$350 per month, per clinic." and `PATIENTS_FREE_LINE` "Patients join free.") because one string stranded "free." alone on iPhone portrait. **Do not recombine them.**
- **The e-book** — **$37**, one-time, in `EbookModal` (subline + price line). Not shown on the card.

**Custom Pricing:**
- **The Build** — From $10,000. Whisper subtext: "New features quoted and built one at a time, as you grow." (Inter 15px, #8892a4, marginTop: '0')
- **Monthly Care** — $350 / month. Optional.

> ## ⚠️ THE `$350` DECOY — read before changing GlowPT's price
>
> **`$350` appears TWICE in `App.jsx` and only one is GlowPT.**
> - **Line 99**, inside `GlowPTModal`'s footer: **GlowPT.**
> - **Line 510**, `Monthly Care`'s `price: '$350'` in `Pricing()`: **the custom build's hosting-and-maintenance retainer.** Unrelated.
>
> **If GlowPT's price moves, line 510 must NOT move with it.** **The line numbers drift whenever anything above them changes; treat them as a hint and confirm by the surrounding function name.**

**Order rationale.** The e-book sits first (cheapest paid yes, under the newsletter whose diagnosis it answers), GlowPT second (recurring flagship), then Custom Work as proof, bridging into How It Works and Custom Pricing.

## Primary CTA

"Book a Free Discovery Call" — hero card, GlowPT modal, Discovery CTA card. Never in the nav or footer. **Title case, no period.**

- **Full-page primary buttons (hero + Discovery):** `padding: '11px 22px', fontSize: '14px'`.
- **Modal buttons:** `padding: '10px 20px', fontSize: '13px'` — deliberately the smallest.

**Scheduling link:** `https://cal.com/david-peterson-40s7lw/free-discovery-call`, new tab (`target="_blank" rel="noopener noreferrer"`).

> **The filled style is exclusive to the discovery call, site-wide.** Every transaction button is a ghost: "Buy the Guide", "Bring GlowPT to Your Clinic", "Subscribe for Free". **Flipping a transaction button to `btn--primary` requires David's explicit say-so** (considered and declined in V49).

## Email Option Under the Discovery CTA

`EmailOption` renders beneath the button on the **Discovery CTA card only**: "Not ready to schedule?" then **"Email"** on its own line (via `<br />`), a mailto to **`david@franklinaisolutions.com`**. **No period.** Inter 15px, #8892a4, link #60a5fa at 600, marginTop 18px. Not in the footer, hero, or any modal. It is the middle rung of the readiness ladder.

## Newsletter Card — Live and Wired

*The Operator* has **its own card**, between Hero and Available. **It is a card, not a "strip"** (the component is still named `NewsletterStrip`, legacy); do not reintroduce "quiet strip" sizing. **Not a product card; never on the Available card.**

**The masthead lockup (both lines upright):**
- **Header "Newsletter"** — blue `card-heading`, `clamp(36px, 5.5vw, 58px)`, `lineHeight: '1.2'`, `marginBottom: 'clamp(4px, 1.5vw, 10px)'`.
- **Subhead "The Operator"** — white Playfair, `clamp(30px, 5vw, 35px)`, 800, `lineHeight: '1.1'`, `marginTop: '0'`, `marginBottom: '14px'`.
- **Description** (Inter 15px, #8892a4, `marginTop: '0'`, `marginBottom: '18px'`, `lineHeight: '1.5'`): **"For physical therapy practices. Delivered every other Tuesday, it takes a clear look at what's working and not working in your practice, and what to do about it."**

> **The description appears TWICE** (card and `NewsletterModal`). **They move together.** `grep -c "For physical therapy practices\."` → **2**.

**The card's action:** one ghost button **"Subscribe for Free"** (`btn btn--ghost`, `marginTop: '0'`) opening `NewsletterModal`. **No email field on the card** — a bold button draws the first click, so an inline field was a dead click (V39 reversed V28). **Do not re-propose the inline field unless David asks.**

**`NewsletterModal`** (the fourth modal): title **"The Operator"**, subline **"Free to subscribe."** (Inter 14px/600/#8899b0), the same description, then a `borderTop` divider wrapping a **`<form>`**: an email input (cream #f0e6d3 on rgba(255,255,255,0.04), 1px border rgba(96,165,250,0.3), 8px radius, **16px font to prevent iOS zoom**, `WebkitAppearance: 'none'`, flex `1 1 220px`, maxWidth 280px, 44px tall, **`name="email_address"`, `required`**) and the ghost Subscribe button (**`type="submit"`**).
- **The 44px alignment fix:** `height`/`minHeight: '44px'`, `boxSizing: 'border-box'`, `display: 'inline-flex'`, centering, and **`marginTop: '0'`** (cancels `.btn`'s `margin-top: 8px`). Keep all of them.

**How the wired form behaves:**

| Moment | What happens |
|---|---|
| Submit | `fetch` POST of a `FormData` with **`email_address`** to **`https://app.kit.com/forms/9962049/subscriptions`** (`KIT_FORM_URL`), header `Accept: application/json`. Kit answers any origin with `{"status":"success"}` or `{"status":"failed","errors":{"fields":[...]}}`. |
| In flight | Input and button disabled; button reads **"Subscribing…"**. |
| Success | Row replaced by **"Almost there. Check your email to confirm."** (`role="status"`); the modal **closes itself after 2.5 seconds**. |
| Kit rejects the address | Modal stays open: **"That email address doesn't look right. Check it and try again."** (`role="alert"`) |
| Anything else fails | Modal stays open: **"That didn’t go through. Please try again in a moment."** |

> **If Kit's double opt-in is ever turned OFF, change the success line to "You're in."** Double opt-in is ON by David's choice (keeps fake and mistyped addresses off the list).
>
> **Nit:** the generic error string uses a curly apostrophe (`’`); every other string uses a straight one. Make it straight next time this code is touched.

## Tech Stack

React + Vite, plain CSS (no Tailwind), **AWS Amplify Hosting**, GitHub. **This site is a pure static build: no backend, no serverless functions, no env files.** Kit's form endpoint works from the browser and the Kit Commerce checkout is a plain link, so **no remaining wiring needs a backend. Do not propose one.** **The Kit form ID `9962049` is public by nature** and lives in `App.jsx` as a constant.

> **Stack boundary.** **site → Amplify, account `franklinai-web`, hosting only. Newsletter and (soon) the e-book checkout → Kit. GlowPT → AWS account `glowpt-prod`, its own repo. McKenzie Arm Care → Supabase, still hosted on Netlify, its own folder.**

---

## Hosting and DNS (AWS)

**franklinaisolutions.com moved from Netlify to AWS Amplify Hosting on 2026-09-25**, no downtime, no lost mail. **Add any future records in Route 53, never in Netlify.**

### Where everything lives

| Thing | Value |
|---|---|
| **AWS account** | **`franklinai-web`, 359813812260**, in the org's **`Workloads`** OU (`ou-i93g-vvz3dnxq`) beside `glowpt-prod`. Root email `besoulful+aws-franklinai-web@gmail.com`. **Not** the management account (billing, org BAA, Bedrock) and **never** `glowpt-prod` (patient data). |
| **Region** | **`us-east-1`**, always. |
| **Access** | IAM Identity Center user `david`, permission set `AdministratorAccess`. CLI profile **`franklinai-web`** in `~/.aws/config` (`sso_session = glowpt`; one login covers all three profiles for 8 hours). |
| **Amplify app** | name **`franklinai-web`**, appId **`dtrvxjb8lde3p`**, branch **`main`**, default address `https://main.dtrvxjb8lde3p.amplifyapp.com`. Framework "None", SSR disabled, Standard build instance, default build image, **no environment variables**. |
| **Custom domain** | apex and `www`, both → `main`. Certificate **AMPLIFY_MANAGED** (`*.franklinaisolutions.com`, Amazon RSA 2048), renews itself. CloudFront target `dbgirmwp1juc8.cloudfront.net`. |
| **Route 53 zone** | **`Z0616895187ZTAR49DY5P`**. Nameservers: `ns-561.awsdns-06.net`, `ns-389.awsdns-48.com`, `ns-1501.awsdns-59.org`, `ns-1898.awsdns-45.co.uk`. Negative-caching TTL effectively **900s (15 minutes)**. |
| **Registrar** | **GoDaddy, registrar only.** Only the nameserver list changed there. **Do not touch anything else at GoDaddy, and never touch the Microsoft 365 tenant, as part of site work.** |
| **GitHub link** | GitHub app **"AWS Amplify (us-east-1)"** on `besoulful-design`, repository access **`glowpt` + `franklinai-v2` only**. Removing `glowpt` would break GlowPT's builds. |
| **Cost** | About $1–2/month. The org's $150 budget alarm covers every account. |

> David reports the site loads noticeably faster on Amplify. **Nobody has timed it; do not quote a number.**

### What lives in the repo, and what does NOT

**In the repo (commit `0279ffe`):** **`amplify.yml`** (`nvm install`, `nvm use`, `node --version`, `npm ci`, `npm run build`; artifacts `dist`; caches `node_modules`); **`.nvmrc`** = **`24`** (bump Node here, not in `amplify.yml`); **`customHttp.yml`** (**HSTS** `max-age=31536000` on everything, **`no-cache`** `public, max-age=0, must-revalidate` on `**/*.html`; Vite's hashed assets may be cached hard).

**NOT in the repo — Amplify app settings** (read with `aws amplify get-app --app-id dtrvxjb8lde3p --profile franklinai-web`):
- **Rewrites and redirects, in order:** (1) **`https://www.franklinaisolutions.com` → `https://franklinaisolutions.com`, 301** (matches Netlify's old behaviour; without it `www` served a 200); (2) **`/<*>` → `/index.html`, `404-200`**, Amplify's default. Fine for a single page with no router. **If a router is ever added, do not trust this default**: GlowPT had to replace it with a regex SPA rewrite.
- **The domain association** (apex + `www`, managed certificate).

**NOT in the repo — the Kit account's settings.** See **Kit**.

**In the repo but NOT in git: `.claude/settings.local.json`**, David's narrow Route 53 permission file (gitignored, `fb01e32`). See *Working across the two repos*.

> **Any change to settings outside git must be recorded here**, because nothing in git will show it.

### The DNS records, and why the mail ones are sacred

**Route 53's own listing is the authority** (`aws route53 list-resource-record-sets --hosted-zone-id Z0616895187ZTAR49DY5P --profile franklinai-web`). The zone was copied from Netlify's panel, not from `dig` (`dig` cannot list a zone).

| Name | Type | Value | What it does |
|---|---|---|---|
| apex | **MX** | `0 franklinaisolutions-com.mail.protection.outlook.com.` | **Delivers David's mail.** |
| apex | **TXT** | `"MS=ms21263178"` | Microsoft 365 domain ownership. |
| apex | **TXT** | `"v=spf1 include:secureserver.net -all"` | SPF. **Looks wrong, is correct**: GoDaddy's chain (`secureserver.net` → `spf-0.secureserver.net`) includes `spf.protection.outlook.com`. **Do not "fix" it; Kit does not need it changed** (Kit aligns through `ckespa`). |
| `autodiscover` | CNAME | `autodiscover.outlook.com.` | Outlook auto-setup. |
| `email` | CNAME | `email.secureserver.net.` | GoDaddy webmail shortcut. |
| `_b3bc49b38926936e06504b90ca148550` | CNAME | `_2319b19e5e61a60fb914625982143e7d.wzccmgtwzk.acm-validations.aws.` | Certificate validation. **Keep it forever**: renewals re-check it. |
| apex | A (alias) | Amplify / CloudFront | The website. Managed by Amplify. |
| `www` | CNAME | `dbgirmwp1juc8.cloudfront.net` | The website. Managed by Amplify. |
| **`ckespa`** | CNAME | `spf.dm-3a041db7.sg2.convertkit.com.` | **Kit return path / SPF alignment.** TTL 300. |
| **`cka._domainkey`** | CNAME | `dkim.dm-0ecde6d9.sg2.convertkit.com.` | **Kit DKIM key 1.** TTL 300. |
| **`cka2._domainkey`** | CNAME | `dkim2.dm-8d22d771.sg2.convertkit.com.` | **Kit DKIM key 2.** TTL 300. |
| **`_dmarc`** | TXT | `"v=DMARC1; p=none;"` | **DMARC, monitor-only**, added with David's explicit yes. `p=none` never blocks anything, so it cannot interfere with Microsoft 365 mail. TTL 300. |

**Not present, deliberately:** AAAA, CAA, **Microsoft 365 DKIM**, **DNSSEC (no DS record at the registry)**. **Do not add any of them as a side effect of other work.** Tightening DMARC past `p=none` is a legitimate future change, but only as its own change, after checking both Microsoft 365 and Kit mail pass, tested with a mail round-trip.

> **The rule for every DNS change on this domain:** one change at a time; **copy any mail or verification record exactly, oddities included**; **before writing a record read off a screenshot, confirm its target resolves**; verify each record on a Route 53 nameserver directly (`dig @ns-561.awsdns-06.net <name> <type>`) and **re-read the apex MX and TXT on the same query**; after anything that could touch mail, **David sends a test email both ways** (to and from an outside address).

### The switch method (reuse it for McKenzie)

1. **Inventory** the old zone from the provider's panel, all of it.
2. **Build and prove the new host first** on its private address, comparing files byte by byte with the live site.
3. **Create the new zone and copy every record** except the old host's website and NS/SOA records.
4. **Issue the certificate BEFORE the switch** by adding the validation CNAME in the **old** DNS as well.
5. **Rehearse** with `curl --resolve <domain>:443:<cloudfront ip>` to check the certificate and redirects before any visitor sees them.
6. **Compare every record on both providers' nameservers directly**, and check the registry for a **DS record** (a DNSSEC DS pointing at the old provider breaks resolution).
7. **Only then** David swaps the nameservers at the registrar, then tests mail both ways.

**Reassurances that were true:** the nameserver change is reversible; sending mail servers retry for days, so a mistake delays mail rather than losing it; while caches hold the old nameservers, both providers serve identical answers.

### Traps — do not repeat them

- **`.nvmrc` is read by Netlify too.** Any file Amplify reads may also be read by whatever else still builds the repo.
- **The Amplify console can default to the wrong region** (it once showed "AWS Amplify (us-east-2)"). **Check account and region in the console header before every Amplify or Route 53 click.**
- **Safari's pop-up handling breaks the GitHub step inside the Amplify console.** Go to **github.com/settings/installations → AWS Amplify (us-east-1) → Configure → Repository access**; clicking a repo name adds it; then refresh in Amplify.
- **Never click "Edit YML file" in the Amplify console** (it can commit `amplify.yml` back into the repo; the file in git is the source).
- **No Amplify firewall (WAF).** Not justified; ignore the console's "Enable firewall" card.
- **The Claude Code safety system blocks `aws organizations` writes and Identity Center grants.** David does those in the console.
- **Route 53 writes from this root need the permission file** (see *Working across the two repos*). **A command with `export PATH=...` in front no longer matches a prefix allowlist**, and **auto-approve flags trip the classifier**; try the plain command first.
- **`--hosted-zone-config Comment=...` shorthand splits on commas** (pass JSON), and **zsh globs unquoted `--query ChangeInfo.[Id,Status]`** (quote JMESPath with brackets).
- **The AWS console and the terminal are different sessions.** Run `aws sso login --profile …` in the background; Safari opens and David approves with Touch ID. **Do not hand him a command to paste.**
- **A brand-new DNS name can "fail validation" for up to 15 minutes** (negative caching). **Wait and validate again; do not change the records.**
- **Never click Kit's "Set this up for me"** (it asks to connect Kit to the DNS provider). Records go in by hand.
- **Measure before theorizing.** Read the account with one CLI call before arguing with AWS.

### Netlify: standby, then gone

Netlify still builds this repo on every push and holds the old zone, but nothing points at either. **After a few quiet days from 2026-09-25, David deletes the franklinai site and the franklinaisolutions.com zone in Netlify.** **Leave McKenzie (`mckenziearmcare.com`) alone**; after that Netlify hosts only McKenzie, on the Free plan from 2026-09-27. Netlify's zone lacks Kit's records, which is fine because nothing reads it.

---

## Kit (newsletter platform)

**Kit's settings live in Kit's web app (`app.kit.com`), not in git. This section is their record. Any change in Kit that affects what readers receive must be recorded here.**

| Thing | Value |
|---|---|
| **Account** | Login **`david@franklinaisolutions.com`**, owner David Peterson, account name **FranklinAI**, website `https://franklinaisolutions.com`. Created 2026-09-25. |
| **Plan** | **Free "Newsletter" plan.** A **14-day Creator trial opened 2026-09-25 with NO card**; it lapses about **2026-10-09**. **Do not build anything on 💎 features** (Automation, Apps, sequences; custom click-tracking domain is Pro). |
| **Form** | **"The Operator site signup"**, **ID `9962049`**, inline, template "Clare", **published**. Its Kit styling and "success message" setting are unused: the site posts to its endpoint from its own form. |
| **Double opt-in** | **ON.** Form Settings → Confirmation email: *Send confirmation email* ticked, *Auto-confirm* unticked. After confirming, readers land on Kit's default `https://app.kit.com/confirm-subscription` page (kept on purpose). |
| **Confirmation email** | **Kit's default copy**, subject "Important: confirm your subscription". A draft in David's voice is parked (Open Items). The copy rules bind it. |
| **Sender** | **David Peterson <david@franklinaisolutions.com>**, confirmed, default. |
| **Verified sending domain** | **`franklinaisolutions.com`, validated 2026-09-25** with the four Kit records above. Gmail's "via n.convertkit.com" label is gone. |
| **Mailing address (email footer)** | **Kit's shared stand-in: 600 1st Ave, Ste 330 PMB 92768, Seattle, WA 98104-2246.** Allowed for Kit emails only; **mail there is not forwarded.** David's home address declined for privacy. **Replace with a USPS PO box** (or the registered agent's address if it forwards business mail) in **Settings → Email → Mailing address**, prefixed **`FranklinAI Solutions LLC, `**. **Never print Kit's address anywhere outside Kit.** |
| **Brand name in Kit** | "FranklinAI". The legal name belongs in the footer address and the Kit Commerce payout setup. |
| **Privacy settings** | GDPR consent page: **Don't show to anyone.** Unsubscribe survey: **off.** |
| **Revenue / Kit Commerce** | **Not set up yet.** Payouts connect Stripe inside Kit (Settings → Revenue); David enters bank and tax details himself. |
| **Kit MCP** | Available under Settings → Kit MCP; **not connected.** Connecting it is David's call. |
| **Test subscribers** | Four `besoulful+kit-…@gmail.com` addresses, all Confirmed. **Before Issue 1, keep one and delete three.** |

> **Reading Kit's numbers.** The **summary boxes** at the top of Subscribers **lag** by minutes to an hour; **the list below, with its "Total: N", is live.** **"Opened" can be inflated by Gmail fetching images**, so treat open rates as rough. The per-subscriber page shows Delivered / Opened / Clicked with **exact times on hover** — the tool for diagnosing a stuck signup.

---

## Repo

github.com/besoulful-design/franklinai-v2 · local path `~/Downloads/franklinai-v2`
*(Sibling: github.com/besoulful-design/glowpt · `~/Downloads/glowpt`)*

**Pushing to `main` deploys the live site through Amplify** (about a minute and a half). Every push is a build; batching commits reads better. **HTML is served `no-cache`**, so a new deploy shows on the next load; hard refresh with Cmd+Shift+R; favicon changes need the tab closed and reopened.

## Domain

franklinaisolutions.com. **Registrar GoDaddy; DNS in Route 53 (`franklinai-web`); hosting on Amplify; Kit sends as this domain.** GlowPT's site: **glowpt.app**.

## Favicon / iPhone Icon

SVG favicon and 180×180 PNG apple-touch-icon, kite mark on navy with the bolt in #fbbf24. Tab title shows just "FranklinAI." Files in `public/`.

---

## Brand Kit

### Colors

| Role | Value |
|---|---|
| Background / Navy | #070f24 |
| Accent Blue | #60a5fa — all blues, section headings, links, prices, buttons, logo strokes, "Solutions LLC" |
| Gold / Lightning Bolt | #fbbf24 — **the kite lightning bolt only** |
| Card background | rgba(255, 255, 255, 0.04) |
| Card border | rgba(96, 165, 250, 0.18) |
| Newsletter input border | rgba(96, 165, 250, 0.3) |
| Divider line | rgba(96, 165, 250, 0.12) — four intentional dividers |
| Text primary | #f0e6d3 |
| Text muted | #8892a4 |
| Kite panel fills | #1e3a5f and #0f2340 |
| Cool blue-grey sublines | #8899b0 — modal sublines and the newsletter error line |
| Headings / white sub-titles | #ffffff |

> **#070f24 reads as dark blue only as a large filled block**; as thin text on white it reads black, so the Instagram posts use **#1e3a5f** for text on white. On the site every ground is navy, so this never bites here.

> **GlowPT keeps its own amber/navy brand on glowpt.app.** **Do not carry GlowPT amber into this repo, or FranklinAI blue into that one.** Only the *voice* and the shared bullet list cross.

### Typography

| Role | Font | Weight | Size / Notes |
|---|---|---|---|
| Hero label ("Custom / Apps & Tools") | Playfair Display | 700 | **clamp(40px, 6vw, 64px)**, blue, two lines, **lineHeight 1.1**, letterSpacing 0.04em, **marginBottom clamp(2px, 1vw, 8px)** |
| Hero headline ("Built for / Your Practice") | Playfair Display | 800 | **clamp(37.5px, 5.75vw, 57.5px)**, white, two lines (break after "for"), marginBottom 10px, **no period** |
| Hero trust subline | Inter | 400 | 15px, #8892a4; **"Built to Handle HIPAA"**, title case, **no period** |
| Section card headings (all seven, incl. "Newsletter") | Playfair Display | 800 | **clamp(36px, 5.5vw, 58px)**, blue, **lineHeight 1.2** (About 1.1), **marginBottom clamp(4px, 1.5vw, 10px)** |
| — "Behind FranklinAI" | Playfair Display | 800 | two lines via `<br />`, lineHeight 1.1; "Behind Franklin" blue, **"AI" white** |
| Secondary sub-titles (incl. "The Operator") | Playfair Display | 700–800 | **clamp(30px, 5vw, 35px)**, **all white** |
| Newsletter description (card **and** modal) | Inter | 400 | 15px, #8892a4, lineHeight 1.5 |
| Newsletter email input | Inter | 400 | **16px** (prevents iOS zoom), 44px tall |
| Newsletter success line | Inter | 400 | 15px, #f0e6d3, lineHeight 1.5, min-height 44px so the modal does not jump |
| Newsletter error line | Inter | 400 | 14px, #8899b0, lineHeight 1.5, centered |
| Product teaser | Inter (card-text) | 400 | 16px, #8892a4 |
| Ghost buttons | Inter (btn--ghost) | 600–700 | 15px, **title case, no period** |
| Price numbers | Playfair Display | 700 | **27.7px**, blue |
| Price descriptors | Playfair Display | 700 | 20px, blue |
| Modal titles | Playfair Display | — | `.modal__title`, marginTop 6px |
| Modal sublines | Inter | 600 | 14px, #8899b0, marginBottom 16px |
| Modal feature rows | Inter | 400 / 700 check | 15px, #f0e6d3 text, #60a5fa check |
| Nav name | Playfair Display | 700 | clamp(40.95px, 4.35vw, 50.4px), blue with "AI" white |
| **Nav "Solutions LLC"** | Inter | 800 | clamp(25.6px, 2.72vw, 31.5px), #60a5fa. **No comma.** |
| Footer name | Playfair Display | 700 | 32px, blue with "AI" white |
| **Footer "Solutions LLC"** | Inter | 800 | 20px, #60a5fa. **No comma.** |
| Footer small print (2 lines) | Inter | 400 | 13px, #8892a4, each `display: block`, centered by the column's `text-align`; "© {year}" also carries `translateX(-3px)` (see Locked Geometry) |
| Email option text | Inter | 400 | 15px, #8892a4, link #60a5fa at 600 |

Google Fonts import (locked, in `index.html`):
`Playfair+Display:ital,wght@0,700;0,800;1,800&family=Inter:wght@400;500;600;700;800`

> Nothing on the page is italic, so the `1,800` italic face is unused — left in for now. **The Instagram posts set "The Operator" in Inter; the site's subhead stays Playfair. Do not "reconcile" them.**
>
> ⚠️ **If a rule does not state `fontStyle`, it is one inherited value away from a face you did not choose.** glowpt.app's hero rendered italic in Safari and upright in Chrome until pinned with `fontStyle: 'normal'`.

---

## Logo Accent — Gold Is Logo-Only

Gold (#fbbf24) has exactly one home: **the kite's lightning bolt.** Never a copy, heading, or sub-title color. **Every sub-title is white** (The Operator, the e-book name, GlowPT, David Peterson, McKenzie Arm Care, step and pricing-tier titles). **Every section heading is blue.** **"AI" in the wordmark (nav, footer, About heading) is white.** If a sub-title needs emphasis, use weight, a label, or a thin rule, **not** gold.

## Header Sizing — Three Tiers

1. **Hero** — label **clamp(40px, 6vw, 64px)** blue, lineHeight 1.1; headline **clamp(37.5px, 5.75vw, 57.5px)** white, no period.
2. **Section card headings** — **clamp(36px, 5.5vw, 58px)**, blue, **lineHeight 1.2** (About 1.1), **marginBottom clamp(4px, 1.5vw, 10px)**: Newsletter, Available, Custom Work, How It Works, Custom Pricing, Behind FranklinAI, Let's Build.
3. **Secondary sub-titles** — **clamp(30px, 5vw, 35px)**, **all white**.

Price numbers are a separate fixed size: **27.7px**. **No heading on the page is italic or off-tier.**

## Card Padding and Heading Spacing

Every `.site-card` carries inline **`paddingTop: '16px'`** and **`paddingBottom: '24px'`**; sides stay 40px. Each `card-heading` carries **`marginBottom: 'clamp(4px, 1.5vw, 10px)'`** and an explicit **`lineHeight: '1.2'`** (About 1.1) — without it headings inherit the body's `1.6` and pad ~15px of dead space. **No negative-margin pulls anywhere below a heading.** Both `step-stack` wrappers sit at `marginTop: '0'`; the About headshot at `margin: '14px auto 10px'`.

## Page-Wide iOS Text Guard

`App()` returns a single wrapping **`<div style={{ WebkitTextSizeAdjust: '100%' }}>`** around Nav, main, and Footer, so iOS Safari does not inflate text on rotation. **Give it no other styles.** Key is `WebkitTextSizeAdjust` (capital W). Do **not** use `none` — it kills pinch-zoom.

---

## Design Rules

- Single unified dark navy everywhere; dark mode locked via `color-scheme: only light`
- All content in `.site-card` (max-width 640px, margin 0 auto, text-align center, radius 16px); section headings inside the card at the top
- **No heading on the page is italic**
- No dividers between sections or inside cards, except **four** `borderTop` rules: the GlowPT modal footer, the e-book modal footer, the newsletter modal form divider, and the page footer. **The two Available products are separated by spacing, not a rule.**
- No em dashes anywhere in copy, ever — on this site, glowpt.app and Kit
- No step numbers in How It Works *(the `steps` array's unused `number` field and the `id="financial-clarity"` on Available are harmless leftovers)*
- Gold is reserved for the logo bolt only
- Responsive sizing uses `clamp()` with **absolute pixel values**
- **All buttons are title case with no period.** Section headings take no period.
- **Form controls are pinned to a matching 44px height** with the button's inherited `.btn` top margin zeroed
- **Center a stack of differently-sized lines by block layout + `text-align: center`, never by flex shrink-to-content.** Container a block with `text-align: center`, every line `display: block`. **The house standard for any centered stack.**
- **Geometric centering is not always optical centering.** A line can measure 0.00px centered and still read off. **Verify against the reference the eye uses**; if a line is provably centered but still looks wrong, the remedy is an explicit documented optical correction, not a re-derivation of the layout.
- **In a stacked pair of buttons, the BOTTOM one is the stronger position** (the terminal action). **A filled button placed last is the most dominant thing in the block.** Order and weight are separate levers.
- **Copy that appears twice must move twice.** Within this file: the newsletter description and the "Subscribe for Free" label (card + modal). **Across repos:** the GlowPT pitch's second sentence and the eight feature bullets. **Across into a document:** the `EbookModal`'s first two paragraphs echo the book's chapter 1, and **the book wins.**
- **When a two-sentence line must break the same way everywhere, make it two elements, not one string.** Control the break; do not hope for it.
- **A state change inside a modal must not make the modal jump** (the newsletter success line carries `minHeight: '44px'`).

---

## Kite Logo Mark — Locked SVG

> **WRONG-FILE TRAP.** There are **two** `KiteLogo` definitions and they are **not** the same drawing. The **live** one is **inline at the top of `src/App.jsx`** (viewBox `62 10 101 240`, width `size * 101/240`). **`src/components/KiteLogo.jsx` is DEAD CODE** — nothing imports it, and it carries a different mark (viewBox `0 0 220 270`, plus blueprint grid lines). **Edit the inline one.** Deleting the dead file is a reasonable future cleanup.

The **inline** `KiteLogo` is the single source of truth for the mark. `size` sets the height; width is `size × (101 / 240)`.

**ViewBox:** `62 10 101 240`

| Element | Fill |
|---|---|
| Kite top-right panel | #1e3a5f |
| Kite bottom-right panel | #0f2340 |
| Kite top-left panel | #0f2340 |
| Kite bottom-left panel | #1e3a5f |
| Kite outline + crosslines | stroke="#60a5fa" |
| String (kite to bolt) | stroke="#60a5fa" |
| Lightning bolt main fill | #fbbf24 |
| Lightning bolt hot core | white at opacity="0.6" |
| String (bolt to key) | stroke="#60a5fa" |
| Key ring, shaft, teeth | #60a5fa |
| String tail below key | stroke="#60a5fa" at opacity="0.3" |

### Kite geometry — the crossbar is the true centerline

The kite is NOT a symmetric diamond. Vertices: top (110,20), right (148,88), bottom (110,120), left (72,88). The cross-spar at **viewBox y=88** is the true visual horizontal centerline, NOT the bounding-box midpoint. For a kite of height `H`, the crossbar sits **`(88 - 10) / 240 × H = 0.325 × H`** px from the top.

| Location | size prop | Rendered width | Crossbar from top |
|---|---|---|---|
| Nav | 130 | 54.71px | **42.25px** |
| Footer | 105 | **44.19px** | **34.12px** |

**The nav kite carries NO `site-nav__logo` className**; it is wrapped in `<span style={{ flexShrink: 0, display: 'flex' }}>`. This dodges a stale `.site-nav__logo { height: 168px !important }` rule in `global.css` (dead code). **If a kite size changes, the crossbar figure and the F-vs-crossbar margin below change with it.**

---

## Locked Geometry — the hand-tuned values (David will fine-tune these)

**Every value here was landed by eye or by a documented measurement. Change one only on David's instruction, and record the new value and why here.** The full history of how each was reached is in `docs/history.md` (search "V48", "V30", "V31").

### Vertical: wordmark F vs kite crossbar

1. **Kite crossbar** is at `0.325 × kiteHeight` from the kite top.
2. **The capital "F" optical center**, Playfair Display at `line-height: 1`, sits **0.561em below the top of the text line**.

The brand row uses `align-items: flex-start`, so `F_center_from_top = marginTop + 0.561 × nameFontSize`. Set equal to the **crossbar** and solve for `marginTop`.

- **Nav wordmark `marginTop`: `clamp(13.98px, calc(42.25px - 2.44vw), 19.28px)`**
- **Footer text column `marginTop`: `13.16px`**

The horizontal dials below do not affect this math.

### Horizontal: the `translateX` dials

Both lockups are positioned by inline `transform: translateX(...)`, same value on desktop and iPhone; a transform never consumes layout width.

- **Nav brand `<a>`: `transform: 'translateX(-26px)'`** — the lockup-level dial.
- **Footer brand row `<div>`: `transform: 'translateX(-14px)'`** — the footer's single lockup dial. **Hand-tuned.**
- **Footer text column `<div>`: no `transform`.**

> **Why the dials differ, and why that is correct.** The nav kite is *relatively smaller* next to its larger wordmark (kite-to-text width ratio ~0.22 vs the footer's ~0.27), so the heavier nav wordmark pulls the optical center further right. **Do not "reconcile" the two dials to one number.**
>
> **Do not "derive" the footer dial from box math.** A session computed `(kiteWidth 44.19 + gap 4) / 2 = 24.09px`, shipped `-24.09px`, and David rejected it immediately: it dragged the signature left. **The dial is an optical judgement, not a centering equation.** The kite deliberately hangs left of the centered text.
>
> **"FranklinAI" is the widest line in both lockups and sets the column width** (nav 252.8px vs the subline's 222.6px; footer 160.5px vs 146.9px, measured at V54), so the subline's text can change without moving either lockup. **To prove a text change cannot move a lockup, toggle the string in the running DOM and compare the container's box, not the text's.**

### Per-line nudges: ONE, on the copyright

| Line | Nudge |
|---|---|
| Nav "Solutions LLC" | none |
| Footer "Solutions LLC" | none |
| Footer "franklinaisolutions.com" | none |
| **Footer "© {year}"** | **`translateX(-3px)` — deliberate optical correction** |

**Do NOT add a per-line `translateX` to any other line.** If a subline looks off-center, first fix the *centering method* (block + `text-align`), and only reach for an optical correction when the line is provably centered and still reads wrong.

> **Why the copyright line is the exception.** It is geometrically centered to **0.00px**. But `©` is a light hollow circle beside four solid digits, so the ink leans right by roughly **2.2px**; solving for a balancing gap returns a **negative** number, which proves no tightening can fix it. **`-3px` was landed by David's eye against the live site**; the arithmetic favored `-2px`. (V31 had stripped an old `-2px` from all lines; stripping it from this one was an over-correction and caused a recurring "the copyright isn't centered" complaint.)
>
> **The gap after `©` is a fixed 2px CSS margin, not a word space:** `&copy;<span style={{ marginLeft: '2px' }}>{year}</span>`, no literal space. It renders identically in every browser; a thin-space glyph depends on the font. **Do not put the plain space back.**

### The footer lockup is CLOSED

**The structure is correct, hand-tuned, and settled.** The kite on the **left**, a single text column to its right holding **all four lines** — wordmark, "Solutions LLC", the domain, the copyright — centered with each other. **Do not restructure it, do not move the fine print out of the column, and do not recompute the `-14px` dial.**

**Everything in this list was tried and reverted. Do not try them again:**
1. **`alignSelf: 'stretch'` on the fine-print spans while the column stayed flex** (V46) — no effect, because the *column* was still a flex container.
2. **Changing the brand-row dial from `-14px` to a "derived" `-24.09px`** — mathematically defensible, visually wrong; it dragged the whole signature left.
3. **Moving the fine print out of the column into its own page-centered block below the lockup** — rejected on sight.
4. **Removing the `-14px` dial entirely** so the lockup centered as a unit — same rejection.

**What actually fixed it:** the two per-line changes to the copyright above. Nothing structural.

> **"Closed" governs geometry, not every character.** A closed section can take a copy change (V54 removed the comma from "Solutions LLC") **if you prove it moves nothing, and say how you proved it.** **David's upcoming fine-tuning is his call and reopens only the values he names.**

---

## Nav

- Sticky (`position: sticky; top: 0`); logo and wordmark only — no CTA, no links, no tagline
- `padding: '6px 24px'`
- Brand link: `gap: '4px'`, `alignItems: 'flex-start'`, `transform: 'translateX(-26px)'`
- Kite: inline `KiteLogo size={130}`, wrapped in `<span style={{ flexShrink: 0, display: 'flex' }}>`, NO className
- Wordmark div: `marginTop: 'clamp(13.98px, calc(42.25px - 2.44vw), 19.28px)'`; `.site-nav__wordmark` is `display: flex; flex-direction: column; align-items: flex-start` in `global.css`
- Name `clamp(40.95px, 4.35vw, 50.4px)` blue with "AI" white; **"Solutions LLC"** (no comma) **Inter 800**, `clamp(25.6px, 2.72vw, 31.5px)`, blue, `lineHeight '1'`, `marginTop '3px'`, **no `transform`**
- Responsive sizing via inline `clamp()`, not media queries

> The nav wordmark is still a flex column and has **not** shown the footer's centering problem (a single subline under a single wordmark). If it ever does, apply the block + `text-align` standard.

## Footer — Fully Self-Contained in App.jsx

**The footer uses NO CSS classes from `global.css`.** Entirely inline styles; the `global.css` `.site-footer*` rules are dead code. A scaled-down signature (kite 105, name 32px), kite-to-wordmark gap `4px`.

- **Footer outer:** `padding: '24px 24px 20px'`, `borderTop: '1px solid rgba(96, 165, 250, 0.12)'`, `marginTop: '0'`, `display: 'flex'`, `justifyContent: 'center'`.
- **Brand row:** `display: 'flex'`, `alignItems: 'flex-start'`, `gap: '4px'`, **`transform: 'translateX(-14px)'`**.
- **Kite** (left): inline `KiteLogo size={105}` in `<span style={{ flexShrink: 0, display: 'flex' }}>`, no className.
- **Text column** (right): **a plain block**, `textAlign: 'center'`, `marginTop: '13.16px'`, **no flex, no `transform`**. Every line `display: block`:
  1. **FranklinAI** — Playfair 700, 32px, lineHeight 1, blue with "AI" white, inside a `display: block` home link `<a>` (textDecoration none, color inherit). **The widest line; sets the column width.**
  2. **Solutions LLC** — Inter 800, 20px, blue, `letterSpacing: '0.02em'`, marginTop 2px, inside the same link. **No comma.**
  3. **franklinaisolutions.com** — Inter 400, 13px, #8892a4, lineHeight 1.5, marginTop 8px. **No transform.**
  4. **© {year}** — Inter 400, 13px, #8892a4, lineHeight 1.5, **`transform: 'translateX(-3px)'`**, year in a nested span with **`marginLeft: '2px'`**.

> **The spans are `display: block`, so each BOX is the full column width regardless of its text.** Measuring a line's bounding box returns the column width every time. **Measure the column against the widest line, or measure the text itself.**

No email in the footer, and **no mailing address**, which is why Kit's stand-in address needs no matching site change.

---

## Scroll Lock on Modals

All four modals (`EbookModal`, `GlowPTModal`, `CaseStudyModal`, `NewsletterModal`) lock page scroll via a `useEffect` setting `document.body.style.overflow = 'hidden'` on mount, restoring on unmount; each closes on X click or backdrop click. **`NewsletterModal` also closes itself 2.5s after a successful signup**, through a second `useEffect` that clears its timer on unmount.

> **Accessibility gap:** no Escape key, no focus trap. glowpt.app solved this with one shared **`useModal`** hook (scroll lock, Escape, focus trap, focus restore, `role="dialog"`, `aria-modal`). **If a fifth modal arrives, port the hook rather than writing a fifth copy.**

---

## Page Sections (in order)

All sections use `.section` → `.container` → `.site-card`. **Order: Hero → Newsletter (The Operator) → Available → Custom Work → How It Works → Custom Pricing → About → Discovery CTA.** The page reads as one sentence: here's what I do → the free thing worth following → what's available → proof I build custom → how the work goes and what it costs → who I am → let's talk.

### Hero

- **Label** (Playfair 700, clamp(40px, 6vw, 64px), #60a5fa): "Custom" / "Apps & Tools" — two lines, lineHeight 1.1, letterSpacing 0.04em, marginBottom clamp(2px, 1vw, 8px)
- **Headline** (Playfair 800, clamp(37.5px, 5.75vw, 57.5px), white): **"Built for" / "Your Practice"** — break after "for", marginBottom 10px, **no period**
- **Trust subline** (Inter 15px, #8892a4, marginTop 0, marginBottom clamp(4px, 1vw, 8px)): **"Built to Handle HIPAA"** — title case, **no period**, no link
- **CTA:** "Book a Free Discovery Call" — `btn btn--primary`, `padding: '11px 22px', fontSize: '14px'`, cal.com, new tab. No `EmailOption`.

### Newsletter (The Operator) — `NewsletterStrip`

See **Newsletter Card** above.

### Available (Product Card) — `AvailableForPractice`

Two products, the e-book first, GlowPT second. State flags `ebookOpen` and `glowOpen`.

**Spacing (locked):** heading → first product **12px** (e-book `<h3>` `marginTop: '12px'`); title → teaser **10px** each (`marginBottom: '10px'`); teaser → button **16px** each (e-book teaser `marginBottom: '0'`; buttons `marginTop: '16px'`); between products **28px** (GlowPT `<h3>` `marginTop: '28px'`). Both titles: Playfair 800, clamp(30px, 5vw, 35px), white, lineHeight 1.2.

**Product 1 — the e-book:**
- **Title:** **"What Your Practice Actually Sells"**
- **Teaser** (`card-text`): **"A downloadable guide for owners running two business models in one building, an insurance practice and a cash practice, and making them work together."**
- **Button:** "More Info" (btn--ghost) → `EbookModal`

**Product 2 — GlowPT:**
- **Title:** "GlowPT"
- **Teaser** (`card-text`, `:last-of-type`, no inline overrides): **"The GlowPT app keeps physical therapy patients engaged between visits. More completed plans of care and the clinic stays full."** *(Identical to the modal description. Names the niche; glowpt.app's first sentence deliberately does not. **The second sentence is identical on all four surfaces.**)*
- **Button:** "More Info" (btn--ghost) → `GlowPTModal`

> **All GlowPT buttons stay inside the modal.** A visitor reaches the price and features before a signup link. **Do not move the self-serve door up to the card.**

**EbookModal** (scroll-locked, mirrors `GlowPTModal`):
- **Title** (`modal__title`, marginTop 6px): **"What Your Practice Actually Sells"**
- **Subline** (Inter 14px/600/#8899b0, marginBottom 16px): **"A self-serve guide. $37, yours to download."**
- **Body — three `modal__text` paragraphs:**
  1. *"Your whole team is being asked to sell advanced care and get patients to the end of their care at the same time. That's not a marketing problem. You're running two business models in one building, an insurance practice and a cash practice, and they're pulling against each other."*
  2. *"You didn't set out to build two businesses, but you chose every piece that built the second one. The tactics arrived built for a business you don't own, and none of them came with a label. So the team gets mixed signals about what the practice is driving at, and every patient feels the seams."*
  3. *"This guide walks you through the fix: decide what your practice actually is, then say it in one sentence your whole team can repeat. Not a tactic, not a tool. The one thing that lets everything else line up behind it."*
  > **Paragraphs 1 and 2 match the book's chapter 1** ("the end of their **care**", "set out to **build**", `d89f4f0`), **and the book wins.** **Never reintroduce the two retired framings** (the accident framing and the departmental split). "build… built… built" in paragraph 2 is parked (Open Items).
- **Footer** (borderTop hairline, paddingTop 24px, centered): **"$37"** (Playfair 700, 27.7px, blue, lineHeight 1.45, marginBottom 18px, no "/ month") then a **ghost** "Buy the Guide" (`padding: '10px 20px', fontSize: '13px'`, **`href="#"` until the Kit Commerce product exists**; then the live URL with `target="_blank" rel="noopener noreferrer"`, styles unchanged).

**GlowPT Modal** (scroll-locked): title "GlowPT" (marginTop 6px); subline; description; **eight** feature lines; price $350 / month; **two CTAs.**

- **Subline:** **"Sign up online, or book a call first."** Its word order matches the button order. **It promises nothing about timing** (activation is manual).
- **Description:** **"The GlowPT app keeps physical therapy patients engaged between visits. More completed plans of care and the clinic stays full."** Identical to the card teaser. **"More completed plans of care" deliberately echoes bullet 5 — do not "vary" it.** The old setup sentence "Patients walk out doing great, then drift off before their plan of care is done." stays deleted on both sites.

**The eight feature lines, in live order.** ⚠️ **This exact list, in this exact order, also lives in `glowpt/src/lib/marketing.js`. Change one, change the other.**

1. "A 30-second daily check-in, with warm encouragement that keeps patients coming back."
2. "A private journal and weekly streaks, in every patient's pocket."
3. **"One subscription covers the clinic and the patients join for free."** *(Written three times; this is the keeper. It answers the per-seat math every owner silently does. **"the patients join for free" names its subject** so "for free" cannot attach to the subscription with `$350` below it.)*
4. "Reaches every patient, not just the ones you can bill remote monitoring on."
5. **"More completed plans of care, because engaged patients finish their care."**
6. "Zero work for your therapists. No building, no monitoring, no calls."
7. **"Runs alongside any EMR. Nothing to set up, nothing to integrate."** *(Seventh, not eighth.)*
8. **"A weekly roster summary and a clinic dashboard to follow activity, trends, and flags."** ("flags" verified live in the dashboard.)

**The exercise-plan exclusion — permanent.** Line 2 said "a personal exercise plan" until July 15, 2026. **Do not put that back. GlowPT has no exercise plan and never will** — that is the wedge separating it from the HEP tools clinics buy and never use. It has a **movement checklist**: a record of what the patient did, not a plan.

**The modal footer:**

```
──────────────── (borderTop hairline, paddingTop 24px, textAlign center)
        $350 / month
   [ Bring GlowPT to Your Clinic ]   ← btn--ghost  → https://glowpt.app/onboard
   [ Book a Free Discovery Call   ]   ← btn--primary → cal.com
```

- Both `padding: '10px 20px', fontSize: '13px'`, both `target="_blank" rel="noopener noreferrer"`.
- The **second** button sits in a `<div style={{ marginTop: '12px' }}>` with its own `marginTop: '0'`; the first keeps `.btn`'s inherited 8px. **If the order changes, the wrapper moves to whichever button is second.**
- ⚠️ **The ghost's label and destination match glowpt.app's own primary button** (`<Link to="/onboard">`). **If that label changes, this one changes with it.**

> **Settled; do not silently redo:** (1) **self-serve first, call second** — David's call, made after being told the bottom is the stronger position; (2) **styles NOT flipped** — the filled style stays exclusive to the discovery call; (3) **the discovery call stays in this modal** (a $350/month product keeps the option to talk first).

### Custom Work

Heading "Custom Work". Title (card-title, white, clamp(30px, 5vw, 35px)) "McKenzie Arm Care"; two-sentence teaser; **"Case Study"** ghost button (marginTop 16px) → `CaseStudyModal`: title "McKenzie Arm Care" (no "Case Study" label inside); full description; 2-column feature list; tech note "Built with React, Supabase, and deployed on Netlify." *(True of McKenzie; if McKenzie moves, this string moves with it.)*

### How It Works

Heading "How It Works" (capital I, always). Three steps: Discovery / Build / Grow. No step numbers rendered. Parallel two-sentence structure. step-stack `marginTop: '0'`; step title wrapper marginBottom 10px. Copy stays broadly worded.

### Custom Pricing

Heading "Custom Pricing". Two tiers, step-stack `marginTop: '0'`: **The Build** (`pricePrefix: 'From'`, `$10,000`, whisper subtext) and **Monthly Care** (`$350`, `/ month`). Price line Playfair 700, 27.7px, blue, marginTop 4px. ⚠️ **Monthly Care's `$350` is the decoy.**

### About (heading "Behind FranklinAI")

Heading two lines via `<br />`, lineHeight 1.1; "Behind Franklin" blue, **"AI" white**. **Headshot:** `public/david.png`, 120px circle, objectFit cover, **margin '14px auto 10px'**, 3px border rgba(96,165,250,0.3). **Name:** "David Peterson" (white, marginTop 0), then the bio below.

### Discovery CTA

Heading **"Let's Build"**. Copy: "Every project starts with a conversation. Tell us what you need or what's not working, and we'll figure out what to build." CTA "Book a Free Discovery Call" (`marginTop: 'clamp(4px, 1vw, 8px)', padding: '11px 22px', fontSize: '14px'`), `<EmailOption />` beneath — the **only** place it appears. Section `id="discovery"`.

---

## Scheduling — Cal.com

Account slug `david-peterson-40s7lw` · Event "Free Discovery Call" · slug `free-discovery-call` · 30 minutes · Cal Video · `https://cal.com/david-peterson-40s7lw/free-discovery-call`

## Public Assets

`public/david.png` (headshot, 400×400, shown as 120px circle) · `public/apple-touch-icon.png` (180×180, kite on navy, bolt #fbbf24) · `public/favicon.svg` · `public/icons.svg` (sprite)

---

## Copy Rules

**These bind anywhere a PT owner reads FranklinAI's words, glowpt.app and Kit included.**

- No em dashes anywhere, ever
- No "software" (use "web apps and tools" or "apps")
- Avoid "in plain English" (and similar) — it can read as excluding non-native English speakers
- Tone: warm, plain-spoken, builder-to-business-owner. No brochure language, no consultant register.
- All section headings title case, **no period**; **"Built to Handle HIPAA"** title case, no period
- **All buttons are title case with no period**, primary and ghost alike
- The "Email" link has **no period** and points to **david@franklinaisolutions.com**
- Modal feature lines end with periods
- **GlowPT is always one word, capital G and PT.** It may be named **"the GlowPT app"** in running copy (the one-word rule governs the token, not whether "app" sits beside it).
- FranklinAI is always one word, capital F and capital AI; the "AI" renders white wherever the wordmark appears. The footer copyright is just "© {year}".
- **⚠️ THE LEGAL ENTITY IS WRITTEN `FranklinAI Solutions LLC`, WITH NO COMMA.** Do not reintroduce the comma anywhere, on either site.
- **⚠️ NEVER END A CLAUSE ON A FLOATING "FOR FREE" OR "FREE" WHERE A PRICE IS NEARBY.** It attaches to whatever the reader last held in mind, usually the thing being sold. **Give it an explicit subject** ("the patients join for free"). Same trap for "included", "at no cost" and "on us".
- **The newsletter description is duplicated on purpose (card + modal). Any edit changes BOTH.** `grep -c "For physical therapy practices\."` → **2**.
- **The GlowPT pitch's second sentence and the eight bullets are duplicated ACROSS REPOS. Any edit changes BOTH repos.** `grep -c "More completed plans of care and the clinic stays full"` → **2** here, **1** in `glowpt/src/lib/marketing.js`.
- **The book wins on shared sentences.** Where any surface repeats a sentence from *What Your Practice Actually Sells*, the book's wording is canonical.
- **Two retired framings are banned from all site copy:** never **"nobody decided"**; never **split the building into the front desk versus the therapists.**
- **"cash practice" and "advanced care" are interchangeable and neither is retired.**
- **No job title, employer, or present-tense employment fact anywhere in site copy.**
- **Never describe GlowPT as providing an exercise plan or exercise prescription.**
- **No renewal, cancellation, refund or trial claims about GlowPT.**
- **Nothing implying a GlowPT clinic can start checking patients in immediately after signup.**

## Forbidden Words in Copy

- "software" (use "web apps and tools" or "apps")
- "in plain English" (and similar)
- "upsell" (it turns patients into targets; say "premium add-ons," "the premium sell," or "advanced care")
- "treatment room" (therapists work on the floor, in the gym, in the open clinic; it reads like a physician's office; glowpt.app uses "treatment areas")
- Em dashes — anywhere, ever

## Bio (About Section) — Locked

**David Peterson**

David has spent decades building systems and processes in both
nonprofit and for-profit businesses, across healthcare, research,
and education.

That experience is what FranklinAI is built on. Custom apps and tools
are the next step in work he's been doing his whole career, now with
better technology and a clear focus on what a business needs.

> **Four things are deliberate:**
> - **No job title and no employer.** Do not write a current role, employer, or clinic back in.
> - **No niche.** The bio is the umbrella's proof. **Do not "reconcile" it to the niche-forward headline** (proposed and rejected).
> - **"Healthcare, research, and education" and "nonprofit and for-profit" are two different axes and stay in separate clauses** (sector vs tax structure).
> - **"That experience" in paragraph 2 depends on paragraph 1.** If paragraph 1 is rewritten, check paragraph 2 still has something to point at.

---

## Locked Inline Styles — the tuning rows

**Only the hand-tuned values live here; `App.jsx` holds everything else, and the full old table is in `docs/history.md`.** These are the values David will fine-tune; see **Locked Geometry** for why each is what it is.

| Element | Inline styles |
|---|---|
| Nav brand `<a>` | gap '4px', alignItems 'flex-start', **transform 'translateX(-26px)'** |
| Nav kite | `KiteLogo size={130}` (inline component) in `<span style={{ flexShrink: 0, display: 'flex' }}>`, no className |
| Nav wordmark `<div>` | **marginTop 'clamp(13.98px, calc(42.25px - 2.44vw), 19.28px)'** |
| Nav "Solutions LLC" `<span>` | Inter 800, 'clamp(25.6px, 2.72vw, 31.5px)', #60a5fa, lineHeight '1', marginTop '3px', **no transform** |
| Footer brand row `<div>` | display 'flex', alignItems 'flex-start', gap '4px', **transform 'translateX(-14px)'** — hand-tuned, do not derive |
| Footer kite | `KiteLogo size={105}` (inline component) in `<span style={{ flexShrink: 0, display: 'flex' }}>` |
| Footer text column `<div>` | textAlign 'center', **marginTop '13.16px'**, block layout, **no flex, no transform** |
| Footer "Solutions LLC" `<span>` | display 'block', Inter 800, '20px', letterSpacing '0.02em', #60a5fa, marginTop '2px', **no transform** |
| Footer domain `<span>` | display 'block', Inter '13px', #8892a4, lineHeight 1.5, marginTop '8px', **no transform** |
| **Footer copyright `<span>`** | display 'block', Inter '13px', #8892a4, lineHeight 1.5, **transform 'translateX(-3px)'** — the only per-line nudge |
| **Footer copyright year `<span>`** | **marginLeft '2px'**, no literal space after `&copy;` |
| Newsletter modal email `<input>` / Subscribe `<button>` | height/minHeight '44px', boxSizing 'border-box'; button inline-flex centered, **marginTop '0'** |

---

## CSS / JSX Boundary Rules

- **App root:** a single `<div style={{ WebkitTextSizeAdjust: '100%' }}>`, one property only.
- **Footer:** fully inline, NO CSS classes; text column is block layout, every line `display: block`.
- **Nav:** `global.css` classes for layout plus inline overrides; the nav kite does not use `.site-nav__logo`.
- **Newsletter card:** `.section` / `.container` / `.site-card` / `.card-heading` plus inline styles; the card's only action is a ghost button opening the modal. The modal's input, button, success and error lines are fully inline-styled. **Placeholder styling would need a `global.css` `::placeholder` rule** and is deliberately not added.
- **Available card:** `.card-heading` / `.card-text` / `.btn` plus inline overrides; modal sublines, bodies, price blocks and dividers fully inline.
- **Custom Work:** `.card-title` / `.card-text` / `.btn`; `CaseStudyModal` adds `.modal__features` / `.modal__feature` / `.modal__stack`.
- **Primary buttons:** all three use `btn btn--primary` plus inline sizing. Do not remove the sizing without setting new explicit sizing.
- **Fixes are JSX-only via inline styles.** Avoid `global.css` edits. Public assets go in `public/`.

---

## Process

### In Claude Code

Edit the repo in place. **Read this file first.** **Confirm the working directory before touching anything** (GlowPT is a separate repo).

> ## ✍️ EDIT AND PUSH DIRECTLY
>
> **David's rule: make the change, then `git commit` and `git push` yourself. Do not hand him a copy-paste command.** GlowPT's CLAUDE.md says the same.
>
> **The one exception: a permission only David can grant.** Claude Code refuses to let Claude write its own permission rules, even with David's go-ahead. Give him **one** Run-able block and say plainly what it does.

**The sequence for a change:**

1. **Read this document and the real files.**
2. **Make the code change** and verify by string checks — old strings at zero, new strings present, no em dashes, no forbidden words. **A predicted line count is an estimate, never a verification, and never a fact for this file**; any line count here is measured on the pushed file. For a **visual** change, measure the rendered result in the browser **against the reference the eye actually uses**. **For wiring, prove the failure path locally and let David prove the success path on the live site** (e.g. an invalid `a@b` proves the site reaches Kit without creating a subscriber).
3. **Push the code.** The push deploys through Amplify.
4. **Wait for David to confirm the change works on the live site.** Verification by measurement is not confirmation; his eyes on the live site are. *(Waived twice for copy-only changes on his direct instruction; keep waiting on anything visual.)*
5. **Then update `CLAUDE.md`**, as a separate commit: edit the lines that changed **in place** (CURRENT STATE and the affected section), bump the version number on the first line, add a one-line Change History entry. **Put the reasoning of the fix in the commit message, not here.** Anything removed is banked in `docs/history.md` first (the hook enforces it).
6. **Tell David the new version number and report the file's size and delta.** **Nothing needs pasting into claude.ai**: it reads the pushed file. If David ever asks for the whole text in chat, give it in one fenced block with four backticks (the file contains triple-backtick blocks); no clipboard, no file card.

**Rules on maintaining this file:**
- **Record the reasoning that governs future decisions, not the story of how it was reached.** A rule plus one line of why belongs here; the narrative belongs in the commit message or `docs/history.md`.
- **When a rule is REVERSED, say so and delete the old instruction** (banking it). A retired rule next to its replacement is worse than either alone.
- **A version bump for one string is legitimate.** A file quoting a string the code no longer contains is the rot to avoid.
- **Never write the doc before the push**, and not before David confirms.
- **Record what lives outside git** (Amplify settings, Route 53 records, Kit settings). No diff will show them.
- **Read the live code when updating**, to catch drift.

### Working across the two repos

A session here may edit the GlowPT repo, and vice versa, when:
- **David asks for it explicitly.** Do not reach across on your own initiative.
- **You read the other repo's `CLAUDE.md` first.** GlowPT has its own house copy rule (statements sentence case with a period; labels Title Case without; no all-caps; AP preposition conventions).
- **You say plainly which repo each change landed in**, with commit hashes.
- **The session's ROOT sets its powers: AWS-, database-, deploy-, or legal-touching work runs from a session STARTED in the GlowPT project**, which carries the AWS allowlist, per-project memory and its auto-loaded `CLAUDE.md`. Copy and layout work may run from either root. A session rooted here whose task turns toward AWS should say so and stop rather than improvise around missing permissions.
- **ONE exception: Route 53 record work for franklinaisolutions.com runs from this root** (David's waiver, 2026-09-25: "it would only confuse things to be bouncing projects"). **`.claude/settings.local.json`** here (gitignored) allows exactly:
  - `Bash(aws route53 change-resource-record-sets --hosted-zone-id Z0616895187ZTAR49DY5P *)`
  - `Bash(aws route53 list-resource-record-sets --hosted-zone-id Z0616895187ZTAR49DY5P *)`
  - `Bash(aws route53 get-change *)`
  - `Bash(aws route53 wait resource-record-sets-changed *)`
  - `Bash(dig *)`

  **Everything else AWS (Amplify settings, Organizations, Identity Center, other accounts, `glowpt-prod`) still belongs in a GlowPT-rooted session.** Keep each command a single command starting with the allowed prefix (`--hosted-zone-id` first), not a `&&` chain. **Claude cannot create or widen this file itself**; that is David's decision and keystrokes.
- **Prefer the GlowPT session for anything touching GlowPT's behavior.** Copy is the safe case.

> **Previewing this site from a GlowPT session:** `preview_start` resolves `.claude/launch.json` from the session's own folder, so add a temporary configuration there (`runtimeArgs: ["--prefix", "/Users/mac/Downloads/franklinai-v2", "run", "dev"]`), verify, then restore the file with `git checkout`. Port 5173 is shared; stop the other server first. **Dead ends:** a `vite build --base=./` over `file://` renders blank (ES modules blocked by CORS); the Browser pane's screenshot did not follow a scroll down this long page (bring the footer into view with a temporary negative `document.body.style.marginTop`, reverted immediately).
>
> **Say which verification you actually did.** Build and string checks are not the same as looking at it.

### Working with David in web consoles (AWS, Kit, GitHub)

- David uses **Safari**, not Chrome. The built-in browser pane is not logged in to his accounts and probably not visible to him; **give him Safari links instead.**
- **One step per message**; say before each step whether it is invisible or visible; **ask for a screenshot before any Save or Create button** that changes something. Several steps at once confuse him; one decision per message works.
- **Walk him around upsells explicitly** (Kit pushed a card-required trial with annual pre-selected, and an offer to connect Stripe or Gumroad; both sidestepped).
- **Never enter or ask him to type card, bank or password details on Claude's behalf**; he types those himself.
- **He reads work email on his phone and is wary of Outlook on the web**; a confirmation link can be opened on the phone.
- **When a theory is wrong, say so and stop guessing.**

### In claude.ai

**What lives there:** strategy, positioning, copy decisions, arguing a call through, newsletter drafting, and the **Content Calendar**. Handoff notes into Code are written there. **This document is maintained in Code**; claude.ai fetches it from GitHub at the start of each conversation (the pointer, V59) and reads it as spec.

### Handoff notes into Code

A good one **names the repo in its first line**, states the scope and what not to touch, gives exact find/replace strings, says plainly when it supersedes a locked string here, ends with a verification table, and **tells Code to update `CLAUDE.md` after the push**. **It must carry the editorial reasoning, not just the strings** — Code can read the code but cannot reconstruct why a decision was made or what was rejected. Handoff notes dropped in the repo or `~/Downloads/` are session inputs, not sources; once used, bank them in `docs/history.md` and delete them.

### Both

**Strategic discussion before code.** David thinks decisions through conversationally first. **Flag conflicts with established decisions proactively rather than executing silently**, then hold the position if the reasoning is sound — **and if David reaffirms, it is his call: execute it in full and record the decision.**

- **A flagged-and-declined concern is parked in Open Items, not dropped**, with what the problem was and what the fix would be. (Bullet 3's "for free" was raised, declined, and fixed by David himself minutes later in one line because it was written down.)
- **When David says a thing is settled, it is closed.** A closed item is not reopened by a clever measurement.
- **But "settled" belongs to David, not to this document.** When he asks for something this file forbids, say what the file says and why, then do what he asks.

**No phantom sources.** Two documents: this one and the Content Calendar (plus `docs/history.md`, the archive of this one). The GlowPT repo's `docs/commercial-handoff.md` is a real file and the source for the GlowPT section.

**Dates live in the Content Calendar, not here.**

**Secrets.** When giving David a command that could return a secret, redact it in the command itself so it never renders on screen.

---

## Open Items

| Item | Status |
|---|---|
| **E-book checkout on Kit Commerce — NEXT** | **Decided, not built.** (1) David opens **Kit → Settings → Revenue** and connects payouts (Stripe inside Kit; he enters bank and tax details; business **FranklinAI Solutions LLC**, no comma). (2) David creates the product: *What Your Practice Actually Sells*, **$37**, final file uploaded, a description that may name physical therapy and obeys the copy rules. (3) Code sets "Buy the Guide" to the live URL with `target="_blank" rel="noopener noreferrer"`, styles unchanged, and pushes. (4) David buys it or runs Kit's test purchase and checks the buyer lands on the list. **Verify:** `grep -c 'href="#"' src/App.jsx` → **0**; "$37" matches in both `EbookModal` spots and the Kit product; the `$350` decoy untouched; no em dashes in new strings. **Fallback:** not live by Issue 1 → **ask David before touching the card**; no coming-soon strip, no pre-sell. Any domain record Kit Commerce asks for goes in **Route 53**, by the DNS rule. |
| **The mystery third signup — WATCH** | 2026-09-25: an iPhone test signup's confirm tap never reached Kit (timeline: Delivered 4:23 PM, Opened 4:23 PM, Clicked 6:21 PM, the click being David later on the Mac). Kit shows "Subscription confirmed!" for any confirm link, including a used one, so the phone tap likely opened a different link; which one was never established. A clean fourth test entirely on the iPhone worked. **No fault found in the site or Kit.** **Watch for real readers piling up as Unconfirmed** in Kit (filter by status); if so, read a few per-subscriber timelines first; Kit can re-send the confirmation. |
| **Kit mailing address → a real one** | Get a USPS PO box (or confirm the registered agent forwards business mail), enter it in Kit **Settings → Email → Mailing address** as `FranklinAI Solutions LLC, <address>`. |
| **Kit confirmation email wording** | Parked draft in David's voice: subject *Confirm your subscription to The Operator*; top line *Thanks for signing up for The Operator. Tap the button below to confirm, and the next issue will come straight to your inbox.*; button *Confirm Your Subscription*; closing *Glad you're here.* / *David*. A claude.ai copy decision; edited in Kit (form Settings → Confirmation email → Edit Email Contents). |
| **Test subscribers** | Four `besoulful+kit-…` addresses. **Before Issue 1: keep one, delete three.** |
| **Kit trial lapse (~2026-10-09)** | Nothing built depends on a paid feature. Once, check **Settings → Account & Billing** shows no card on file ("Creator Monthly" is expected to be the trial's label). |
| **`EbookModal` paragraph 2: "build… built… built"** | Three forms of "build" in ~20 words. **Parked, book-first:** if it grates, change the book, then every surface together. |
| **Retire Netlify for this site** | After a few quiet days from 2026-09-25, David deletes the **franklinai site** and the **franklinaisolutions.com zone** in Netlify. **Leave McKenzie alone.** |
| **GlowPT clinic BAA text** | With the attorney. **Demo data only until it clears.** |
| **GlowPT billing** | No Stripe. Collection manual. Belongs in the GlowPT repo. |
| **GlowPT auto-renewal statutes** | Open with counsel. **No renewal or cancellation claims on either site until answered.** |
| **Click-through vs signature** on the clinic BAA | Undecided. If signature wins, self-serve onboarding gains a manual step and this copy must reflect it. |
| **Fictitious-name registration** | Raised 2026-09-01, not acted on. Both sites lead with "FranklinAI" while the entity is FranklinAI Solutions LLC; PA generally requires a fictitious-name registration. **Nobody involved is a lawyer; nothing changed on this basis.** A cheap question for the open attorney engagement. |
| **Mail authentication, the remainder** | Still absent: **Microsoft 365 DKIM**. Adding it, and later tightening DMARC past `p=none`, are each their own change in Route 53 with a mail test both ways. |
| **Newsletter error string's curly apostrophe** | Make it straight next time `NewsletterModal` is touched. |
| **Modal accessibility** | No Escape key or focus trap. Port glowpt.app's `useModal` if a fifth modal arrives, or sooner. |
| **The GlowPT modal has not been opened by eye since V52/V53** | Bullets 3 and 5 and the description are build-and-string-verified only (the card teaser was seen). **Open the modal next time anyone is in this repo — one click.** |
| **Dead `src/components/KiteLogo.jsx`** | Nothing imports it; a different mark. Safe to delete in a cleanup. |
| **Public vs private repos — DECIDED 2026-09-26; one follow-up open** | **`glowpt` made PRIVATE by David** (verified from outside: 404). **`franklinai-v2` stays PUBLIC on purpose**: the claude.ai pointer depends on it, and its code is shipped to every browser anyway. **Accepted cost:** anyone can read this CLAUDE.md (pricing plans, open legal questions, AWS account details; no passwords or keys). **So never commit a secret or anything confidential to this repo, and keep sensitive business or legal detail brief here.** **Follow-up, GlowPT-rooted:** going private does not un-publish what was public, so a GlowPT session should search GlowPT's full git history for any key or password ever committed, rotate anything found, and record the private status in GlowPT's CLAUDE.md. GlowPT's claude.ai project does not use a GitHub pointer, so nothing broke there. |

---

## Change History

*One line per version. The full entries for V12–V57 are in `docs/history.md` (section 1, "Change History").*

- **V60** (2026-09-26) — **`glowpt` made private; `franklinai-v2` kept public on purpose** (the claude.ai pointer needs it). New rule: never commit a secret here. GlowPT history scan left for a GlowPT session.
- **V59** (2026-09-26) — **claude.ai now reads this file from GitHub** through a pointer in its project instructions (David pasted it; the V57 paste is gone). One copy only; no more pasting. Recorded that both repos are public, unplanned, as an open decision.
- **V58** (2026-09-26) — **Trimmed from 167,777 bytes to a guide**, the GlowPT way. The full V57 text, `AWS-MIGRATION-HANDOFF.md` and the trim handoff were banked verbatim in the new `docs/history.md`; the version chain became a CURRENT STATE block; narratives were condensed to rules; the inline-styles table kept only the tuning rows (David will fine-tune them); new **What may be added to this file** section and a pre-commit hook (`scripts/hooks/pre-commit`) enforcing bank-first. Process changed: **edit in place, not regenerate whole; print the whole doc in chat only when David asks.** Version number kept on the first line at David's request.
- **V57** (2026-09-25) — The Operator wired to Kit form `9962049` (double opt-in); Kit sends as the domain (four Route 53 records incl. DMARC `p=none`); `EbookModal` paragraphs 1–2 matched to the book; Route 53 permission file for this root. Commits `d89f4f0`, `8024666`, `fb01e32`.
- **V56** (2026-09-25) — Site moved from Netlify to AWS Amplify, account `franklinai-web`, no downtime, mail intact. Commit `0279ffe`.
- **V55** — Session-rooting rule: AWS/DB/deploy/legal work from a GlowPT-rooted session.
- **V54** — "Solutions, LLC" → "Solutions LLC" in both lockups; proven not to move either. Commit `84f74c9`.
- **V53** — Bullet 3 → "...and the patients join for free."; the floating-"for free" rule.
- **V52** — The two sites' eight bullets made identical, reversing the 5-vs-8 rule.
- **V12–V51** — see `docs/history.md`.
