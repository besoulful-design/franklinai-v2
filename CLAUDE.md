# FranklinAI — Project Instructions (Version 49, Current)

> **READ THIS FILE BEFORE MAKING ANY CHANGE TO THIS REPO.** Not "skim the section you think applies" — read it. V48 exists partly because a Code session spent an entire morning re-deriving a footer geometry this document already specified, and shipped four wrong pushes doing it. **If a value looks arbitrary, it is almost certainly hand-tuned and documented. Look it up here first.**

> **Version 49 updates:** **GlowPT is now a two-door product, and the GlowPT modal changed to say so.** GlowPT finished its AWS migration and grew its own front door at **glowpt.app**: a self-serve onboarding form that creates the clinic, its manager and its patient link with no human in the loop, plus a click-through BAA. So an owner who is ready no longer needs a discovery call to buy. **Four changes shipped to `App.jsx`, all inside `GlowPTModal`.** **(1) A second CTA:** a **ghost** "Bring GlowPT to Your Clinic" pointing at **`https://glowpt.app/onboard`**, in a new tab. The label and the destination both match glowpt.app's own primary button, deliberately, so the click never lands on a page showing an identical button. **(2) The subline changed** from "Clinic subscriptions available." to **"Sign up online, or book a call first."** — the old line was written when subscribing meant emailing David, and the new one names both doors while promising nothing about timing. **(3) The two buttons were re-ordered**, self-serve first, discovery call second. **The styles were NOT flipped with the order:** the ghost stays a ghost and the primary stays primary, so the filled style remains exclusive to the discovery call site-wide. *(David's call, made after being told that bottom is the stronger position in a stacked pair and that the order change alone therefore favours the call. He chose it anyway, and the subline's own word order now matches the buttons beneath it, which is a real gain the argument had not weighed.)* **(4) Feature bullet 3 now states there is no patient limit:** "One subscription covers the clinic, **no matter how many patients you have**. Patients join free." Every owner reading "$350 per month, per clinic" is silently doing per-seat math, because that is how every other tool they buy is priced; the claim was true all along and appeared on neither site. **(5) The V44 open item on bullet 8's word "flags" is CLOSED** — the live clinic dashboard has a "Need Attention / flagged" tile and per-patient flag badges, verified by looking at the running app. The bullet is accurate as written. **(6) A new standing rule from David: copy rules travel with the VOICE, not with the repo.** The forbidden-words list and the em-dash ban now bind anywhere a PT owner reads his words, glowpt.app included. **(7) A new process rule from David: edit and push directly in this repo, never hand him a copy-paste command** — matching what the GlowPT repo already said. **(8) A `$350` decoy trap is recorded.** `App.jsx` measures **670 lines** on the pushed file. Sections updated: title, header summary (V48 folded into "everything else from Version 48," V47/V46/V45/V44/V43/V42/V41/V40 kept as carried-forward paragraphs), Business, The Offer Ladder, Pricing Model, Primary CTA, GlowPT (new section), Available/GlowPT Modal, Copy Rules, Design Rules, Locked Inline Styles, CSS/JSX Boundary, Process, Change History.

> **Everything else from Version 48 remains in force:** **the footer copyright line is fixed and the footer lockup is closed.** The gap after the `©` symbol is a **fixed 2px CSS margin** (`&copy;<span style={{ marginLeft: '2px' }}>{year}</span>`), deterministic in every browser unlike a thin-space glyph. The copyright line carries a deliberate **`translateX(-3px)`** optical correction, the only per-line nudge anywhere on the page: the line is geometrically centered to 0.00px, but `©` is a light hollow circle beside four solid digits, so the ink weight leans right by roughly 2.2px, and solving for a balancing gap returns a *negative* number, which proves no amount of tightening can fix it. **`-3px` was landed by David's eye against the live site**; the arithmetic favored `-2px`. This partially reverses V31. The footer lockup is **closed**: brand row `display: flex`, `alignItems: 'flex-start'`, `gap: '4px'`, **`transform: 'translateX(-14px)'`**, kite left, text column holding all four lines. **Four things were tried against it and all reverted; the list is in Footer so nobody repeats them.** Both V48 process rules stand: read this document before changing anything, and do not regenerate it until David confirms the fix works.

> **Everything else from Version 47 remains in force:** the footer text column is **block layout, not flex** — a plain block with `textAlign: 'center'` in which every line is `display: 'block'` and centers by `text-align`. **The V47 general rule is the house standard: center a stack of differently-sized lines by block + `text-align`, never by flex shrink-to-content.**

> **Everything else from Version 46 remains in force:** the **GlowPT modal description** reads **"Patients walk out doing great, then drift off before their plan of care is done. The GlowPT app keeps patients engaged between visits, so more plans of care get completed and the clinic stays full."**, and the Copy Rules clarification that the one-word product-name rule governs the token "GlowPT" itself, not whether the word "app" may sit beside it.

> **Everything else from Version 45 remains in force:** the process change that made **Claude Code the maintainer of this document.** Decisions are argued in claude.ai, a handoff note carries the strings *and the editorial reasoning* into Code, Code pushes the code and **then** regenerates `CLAUDE.md` whole as a separate second step. **Four conditions keep it honest:** (1) **regenerate whole, never patch**; (2) **the doc is written last, after the code push**, and as of V48 not until David confirms the change worked; (3) **the handoff note must carry the reasoning, not just find/replace strings**; (4) **the repo copy is authoritative and the claude.ai project instructions are the copy that can lag**, with a version-number mismatch as the tell. The Content Calendar stays a claude.ai document, and strategy, positioning, copy decisions, and newsletter drafting all stay in claude.ai. What moved is the *recording*, not the *deciding*.

> **Everything else from Version 44 remains in force:** the three V44 copy records (the newsletter description's tail reads **"what's working and not working in your practice, and what to do about it"**; the e-book teaser opens **"A downloadable guide"**; the GlowPT teaser reads **"An app for physical therapy patients to stay engaged between visits, with zero work for your therapists."**), and the correction that the GlowPT modal's **EMR bullet sits seventh, not eighth**. *(V49 closes V44's open item on bullet 8's word "flags": it is confirmed live in the product.)*
>
> **Also carried forward from Version 43:** the rule that **a predicted line count is an estimate, never a verification, and never a fact for this file** — string checks are the proof, and any line count here must be measured on the pushed file.
>
> **Also carried forward from Version 42:** the two V42 copy edits in `About` — bio paragraph 1 replaced whole, paragraph 2's opening changed to **"That experience"**. The bio names **no job title, no employer, and no niche**, all deliberate, with the four-point guard in **Bio (About Section)**. The **Copy Rule banning any job title, employer, or present-tense employment fact from all site copy** stands.

> **Everything else from Version 41 remains in force:** the **e-book modal's first two body paragraphs** carrying the corrected editorial frame (the retired "nobody decided" accident framing and the retired front-desk-versus-therapist split are both gone), and the **newsletter audience line "For physical therapy practices."** in **both** places it appears; the V41 documentation corrections (**Issue 1 ships September 1, 2026**; the spearhead reads "insurance practice with cash-model marketing"; the e-book's card and modal are live while the book itself is unwritten and the checkout unwired; "cash practice" and "advanced care" are interchangeable and neither is retired); and the V41 standing rules (*copy that appears twice must move twice*, the ban on both retired framings, a handoff note superseding this file for its session, and dates pointing at the Content Calendar).
>
> **Also carried forward from Version 40:** the newsletter form's **wiring and success behavior**, still unbuilt pending the Kit form ID — a **JS-handled submit** (a `fetch`, not a plain form POST); on success **an in-modal confirmation then auto-close**; **confirmation copy tracking Kit's double opt-in setting**; and a **keep-the-modal-open error state** with a brief "Subscribing…" disabled button state, field named `email_address`. Full plan in **Tech Stack**. Also carried forward: the V39 newsletter signup in `NewsletterModal`; the V38 Available-card spacing; the V37 parallel product teasers and the EMR modal bullet; the V36 newsletter-masthead flip; the V35 hero-label tightening; the reconciliation e-book's card and modal live as the first product on the Available card ($37, `EbookModal`, ghost "Buy the Guide" at `href="#"`); four intentional `borderTop` dividers; the four-modal scroll-lock; the "Solutions, LLC" subline in **Inter 800** in nav and footer; the nav lockup dial `translateX(-26px)` and its F-level-with-crossbar `marginTop`; the **footer lockup dial `translateX(-14px)`**; the footer copyright trimmed to **"© {year}"**; card-heading `lineHeight: '1.2'`; card padding (`paddingTop: '16px'`, `paddingBottom: '24px'`, sides 40); the "Subscribe for Free" ghost-button label; the `index.html` font import and cleaned meta description; the Subscribe/input 44px alignment fix; the niche-forward front door; all buttons title case with no period; **Kit** as the newsletter platform with Kit Commerce the front-runner for the book's checkout; the legal entity **FranklinAI Solutions LLC**; the Content Calendar as the single canonical content/marketing document; `david@franklinaisolutions.com`; the offer-ladder rungs and prices; the Business Plan deleted; the Claude Code vs claude.ai scoping; the Source File Rule; the stack boundary; the F-vs-crossbar method; Clarity retired; gold logo-bolt-only; "in plain English" and "software" banned; no em dashes in site copy; the $350 GlowPT price; the GlowPT exercise-plan exclusion.

---

## CRITICAL: Source File Rule

**Applies when working in claude.ai. In Claude Code, see the next section.**

**Claude must ALWAYS read the current `App.jsx` from the project files before making any code change.** The project file is the single source of truth for the live code. David replaces it routinely after each deploy. Never work from a cached copy, a previous output, or memory of what the file contained in an earlier turn.

> **Known lag:** the project snapshot is hand-replaced, so it can trail the repo by a push. When the snapshot and a just-confirmed push disagree, the push is live and the snapshot is stale — say so rather than silently reverting the newer change.

> **Which copy of this document goes stale, and the tell.** Through V44 the risk ran one way: Code read a repo `CLAUDE.md` several versions behind claude.ai. **As of V45 the risk runs the other way.** Code writes `CLAUDE.md` in the repo, so the repo is current by construction; the **claude.ai project instructions** are the copy that lags until David pastes the new version in. **The tell in either direction is a version-number mismatch**, which is why every regeneration states its version on the first line.

---

## Working in Claude Code vs claude.ai

**This file lives in two places and is one file.** In claude.ai it is the project instructions. In the repo it is `CLAUDE.md` at the root. Same content in both homes, regenerated whole and dropped in both. **Do not maintain a Code-tuned variant and a claude.ai-tuned variant.**

> **Note on the GlowPT repo.** GlowPT is a *different* repo at `~/Downloads/glowpt` with its own `CLAUDE.md` and its own AWS backend. This file does not govern its architecture. **Any handoff into Code should name the repo in its first line.**
>
> **But copy rules DO cross the boundary (V49).** See **Copy Rules Travel With the Voice** below. Architecture stays separate; the writing voice does not.

**Which tool for which job:**

| Job | Tool |
|---|---|
| Editing `App.jsx`, the repo, anything on disk | Claude Code |
| Strategy, positioning, copy decisions, arguing a call through | claude.ai |
| Regenerating **this file** (`CLAUDE.md`) after a push | Claude Code (V45) |
| Producing or revising the **Content Calendar** | claude.ai |
| Newsletter drafting | claude.ai |

**Rules that apply everywhere, both tools, no exceptions:** the Logo Accent gold rule, all locked inline styles and render values, the three-tier heading system, the Copy Rules and Forbidden Words, the CSS/JSX Boundary Rules, and the Design Rules.

> **When a handoff note and this file disagree, the handoff note wins for that session.** Apply the note, push the code, **then** regenerate this document to record it.

---

## Copy Rules Travel With the Voice, Not the Repo — NEW, V49

**David's rule, set 2026-08-27.** The **Copy Rules** and **Forbidden Words** in this document bind **anywhere a PT owner reads FranklinAI's words**, including the GlowPT product site and app. They are a property of the voice, not of a folder.

**Why it came up.** glowpt.app shipped copy that broke two FranklinAI rules: the dashboard QR hint said "front desk and **treatment rooms**", and the app carried em dashes throughout. A buyer reads glowpt.app and franklinaisolutions.com in one sitting; they are one house. Worse, "treatment room" is banned *because it is wrong about the buyer's building* — therapists work on the floor, in the gym, in the open clinic — so it does more damage on the product page than it ever could here.

**Fixed 2026-08-27** in the GlowPT repo, from this repo's Code session at David's request, after reading GlowPT's own `CLAUDE.md` first:

- `treatment rooms` → **`treatment areas`**.
- **All 22 user-facing em dashes removed**, across errors, patient encouragement copy, labels, the closed-clinic banner and the patient privacy notice. GlowPT commits `731708f`, `06bbb5b`, `8ce4dad`.
- **Two carve-outs worth knowing, because they generalise:**
  1. **A bare `—` used as an empty-value placeholder is a UI glyph, not prose.** GlowPT's clinic dashboard renders a lone `—` in the Streak column when there is no value. **Six of them survive on purpose. Never fix an em-dash rule with a find-and-replace.**
  2. **A dash used as a LABEL SEPARATOR becomes the middot `·`**, which GlowPT's footer byline already used.
- **The AI prompt must carry the rule or generated text escapes it.** GlowPT's daily patient reflection is written by a model, so no amount of cleaning static strings governs it. Its prompt now ends "Do not use em dashes in your response." **Any future FranklinAI feature that generates user-facing text owes the same instruction.**

> **Code comments and this document are exempt.** Both are full of em dashes, including this sentence's neighbours. The rule governs shipped strings a visitor can read.

---

## Source-of-Truth Documents

**One canonical file lives in this project.**

- **Content Calendar** — the source of truth for all content and marketing. These instructions intentionally contain **no** content/marketing specifics. The calendar is **newsletter-led**: the engine is *The Operator*, every other Tuesday, 400–600 words, free, written Sunday on a phone. **Instagram is the only discovery surface.** **The discovery call is the only door** *(for the custom build; see the V49 note in **The Offer Ladder** — GlowPT now has a second door)*. The addressee is the **owner**; the office manager is the multiplier who forwards it. The spearhead is **model confusion** ("You're running an insurance practice with cash-model marketing"), across **six spines**: (A) model confusion, (B) plan-of-care completion, (C) team, hiring, retention, and modeling, (D) your numbers, (E) AI in your practice, (F) systems and delegation. The four-video YouTube arc is **parked whole**, not deleted.
  > **Calendar points worth knowing here (do not restate the craft rules — read the calendar):**
  > - **Issue 1 ships September 1, 2026.** Issue 2 September 15, Issue 3 September 29, Issue 4 October 13. The Instagram carousel drops a few days before September 1. **This file has been wrong about this date twice; check the calendar rather than quoting from here.**
  > - **The spearhead is the front door, not a leash.** Only **D** and **C** are genuinely downstream of it. **E's lift half and F stand on their own feet.**
  > - **Spine E is two wells: the line and the lift.** Leading with the line is a **strong default, not a law**.
  > - **Two retired framings the site copy must never reintroduce.** **"nobody decided"**, and **the front-desk-versus-therapist split**.
  > - **"cash practice" and "advanced care" are interchangeable, and neither is retired.**
  > - **"The Operator" is the newsletter's title; the masthead standfirst rule is retired.**
  > - **The promise line reads the same on all three surfaces:** issue top, site card and modal, and the Instagram graphic all open on **"For physical therapy practices."**
  > - **The readiness ladder** holds: newsletter (cold follow) → email (a self-paced question) → discovery call (the door).
  > **Read the calendar before drafting anything.**

**This file** covers the **website build**: structure, styling, copy rules, locked values, the product facts the site displays, and the **pricing of every rung**. **This file is the authority for everything it states.**

---

## What No Longer Has a Home

The Business Plan also held **market sizing, unit economics, the HIPAA architecture decision, the roadmap, and risks.** None of that moved into this file.

**One thing that used to be homeless now has a home: the offer ladder.** Its **rungs** live in this file; its **marketing strategy** lives in the Content Calendar's *The Ladder* section.

**Still homeless:** the unit economics, the market sizing, the HIPAA architecture reasoning, and the **GlowPT/AWS backend architecture** (which lives in the GlowPT repo). **The legal/entity work** is business territory; only the footer's legal-name display is a site fact.

**The rule that follows: do not reconstruct the homeless parts from memory and do not cite them.** Claude does not have a source for them in this file and should say so plainly.

> **V49 exception, narrow and deliberate.** The **GlowPT** section below records a handful of GlowPT commercial facts — that signup is self-serve, that activation is manual, that a BAA is click-through, that there is no billing yet. They are here **only because the FranklinAI site now links into that flow and its copy must not lie about it.** They are recorded as *marketing constraints*, never as architecture. The GlowPT repo's own `docs/commercial-handoff.md` is the source, and **the GlowPT code wins if the two ever disagree.**

---

## Business

FranklinAI builds custom web apps and tools for businesses — web apps, internal tools, and client-facing portals — built around a client's specific way of working rather than off-the-shelf templates. Based in Philadelphia, serving local and remote clients.

> **Legal entity (context, not a site-build rule).** Formed as **FranklinAI Solutions LLC** (Pennsylvania); **"FranklinAI"** is the brand / fictitious name. The **wordmark lockup carries the full legal name** — "FranklinAI" over "Solutions, LLC" in both nav and footer. The footer copyright is just "© {year}".

**Packaged products under the FranklinAI umbrella:**

- **GlowPT** — a daily patient check-in app for physical therapy clinics. Clinics subscribe; their patients use it free. Separately branded (amber/navy, its own logo, its own site at **glowpt.app**), but on the FranklinAI site it wears FranklinAI's navy-and-blue. **Live on the site, and as of V49 self-serve.** See **GlowPT** below.

- **The reconciliation e-book** — a one-time, self-serve product ($37) titled **"What Your Practice Actually Sells."** **The card and the modal are live**; **the book itself is not written yet and the checkout is not wired** (`href="#"`). Both due before Issue 1 ships September 1.

  > **Say this precisely.** The *shelf listing* is live; the *product* is not. The Calendar's rule governs the endgame: **write it complete, then list it** — and if the file does not exist by ship day, take the card down rather than leave a listed product nobody can buy.

Everything else is **custom-build work** — scoped after a discovery call, priced from $10,000.

> **Clarity is retired from the site and the product lineup.** Do not re-add a Clarity product, modal, teaser, or pricing block unless David explicitly asks. **The nuance:** Clarity is parked rather than dead; the teaching survives in writing, the product stays unbuilt and off the site.

### Positioning note — niche-forward front door

**FranklinAI is an umbrella company and always has been. The front door is niche-forward: the headline speaks to the practice, and the umbrella breathes one layer down.** This is the design. **Do not "reconcile" it back to a broad headline.**

- **Headline: "Built for Your Practice"** (no period; two lines).
- **Subline: "Built to Handle HIPAA"** (title case, no period). It **proves** the niche the headline names. **Moat, not marker.** The only place HIPAA appears on the page.
- **The umbrella breathes below the fold.** The About bio is fully broad (V42), closing on **"what a business needs."** How It Works and Discovery stay broadly worded. The hero label **"Custom Apps & Tools"** stays generic.

**Healthcare is the lead market and the front door; the umbrella is still the business, one layer down.** Do **not** add a sentence that walls the umbrella off.

> **Where the niche is named and where it is not.** The **headline** and the **newsletter card** name the practice. The **GlowPT teaser** names it too, as **"physical therapy patients"** rather than practices. The **About bio** names it nowhere. **Naming the niche on the headline, the product, and the newsletter is specificity. Naming it in the bio would be a wall.**

## Flagship Example

The McKenzie Arm Care app — a custom patient-care web app with user login, journaling, symptom and progress logs, in-app messaging, an admin portal, smart alerts, and email notifications. Proof-of-work for the custom-build service. Use of this case study has been confirmed with permission.

---

## GlowPT — the two-door product (V49)

**GlowPT finished its AWS migration and grew its own front door.** This section exists so the FranklinAI site's copy never overstates it. **It is a marketing constraint list, not architecture.** Source: the GlowPT repo's `docs/commercial-handoff.md`; **the GlowPT code wins on any disagreement.**

### What is true, and what the site may therefore say

| Fact | What the site may say |
|---|---|
| **Signup is fully self-serve.** `glowpt.app/onboard` is a ~4-field form. It creates the clinic, its manager and its patient link with no human in the loop. | "Sign up online." "Set up your clinic in a minute." |
| **Activation is NOT self-serve.** A new clinic starts **closed** and cannot enrol a patient or accept a check-in. David flips it manually, and that flip is deliberately where the BAA and the first payment are confirmed. | **Nothing implying patients can start checking in right after signup.** |
| **A BAA is click-through at signup**, recorded with a version stamp, under an org-level AWS BAA active since August 2026. | Nothing yet. See the constraint below. |
| **There is no billing in the product. Zero Stripe.** Collection is manual today. Stripe subscriptions are on the backlog, unstarted. | **No renewal, cancellation, refund or trial claims of any kind.** |
| **Demo data only** until the clinic-facing BAA text clears attorney review. | **Nothing implying live clinics are in production.** |
| **$350 covers the clinic with no patient limit.** Everything is included. | Feature bullet 3 now says so. This was true from the start and appeared nowhere until V49. |

### Hard constraints on GlowPT copy

- ⛔ **No renewal or cancellation claims.** Counsel has an open question on **state auto-renewal statutes**, real unaddressed exposure for a product sold across state lines. Do not promise terms ahead of that answer.
- ⛔ **Never put an `@glowpt.app` address in a `mailto:`.** glowpt.app has **no root MX record**; nothing can receive mail there and a mailto bounces silently. The contact address is **`david@franklinaisolutions.com`**, everywhere, both sites.
- ⛔ **Never describe GlowPT as providing an exercise plan or exercise prescription.** See the permanent exclusion under **GlowPT Modal**.

### How the two doors reconcile

The GlowPT handoff note flagged that **no discovery call exists anywhere in the GlowPT repo** and asked for reconciliation. **The answer: there is no conflict.** The activation flip and the discovery call are the same moment wearing different clothes. Both are a human step where the BAA and the money get confirmed.

- The owner who wants to talk first **books the call**, and David flips them after.
- The owner who wants to start **signs up, lands closed, emails David**, and gets flipped after.

**Two doors, one gate, and the gate was already built.** That is why the modal can carry both buttons honestly.

### The known deltas between the two sites — DELIBERATE, not drift

**glowpt.app's More Info modal carries 5 of the FranklinAI modal's 8 bullets. This is on purpose and must not be "reconciled."** The three cut are the patient-facing journal/streaks bullet, the "one subscription covers the clinic" bullet (its content became glowpt.app's price line), and the **remote-monitoring (RTM) billing** bullet, which is strong for owners who know RTM but needs explaining.

**The division of labor: the FranklinAI card and modal are the fuller pitch; glowpt.app is the short version plus the price plus the signup path.** glowpt.app's landing header is also deliberately self-sufficient, because that site is reached by direct URL, search, QR and clinic forwards, not only from here.

> **A thin "handoff-only" FranklinAI modal was proposed and rejected on this reasoning.** Do not re-propose it without reading the GlowPT handoff note first.

---

## The Offer Ladder

**The content is free; the ladder is where the money is.**

| Rung | Price | Sells how | On the site | Status |
|---|---|---|---|---|
| **The Operator newsletter** | Free | The free engine. Runs on **Kit**. **Not a product.** | Its own card between Hero and Available | **Live (unwired)** |
| **The reconciliation e-book** | $37, one-time | **Self-serve.** The first paid yes. | **First** product on the Available card; More Info opens `EbookModal` | **Card and modal live; book unwritten, checkout unwired. Both due before Sept 1.** |
| **GlowPT** | $350 / month | **Two doors (V49): self-serve at `glowpt.app/onboard`, OR the discovery call.** Both land at the same manual activation gate. | Available card (live); both CTAs in `GlowPTModal` | Live |
| **The custom build** | From $10,000 | Needs the discovery call. | Custom Pricing (live) | Live |

**Why the extra doors do not break the one door.** The newsletter still closes on the discovery call, every issue — one ask. A self-serve $37 file sells from the shelf and the Instagram posts, **never from the newsletter's close.** GlowPT's self-serve door lives **inside a modal on this site and on glowpt.app**, never in the newsletter either. **The "one door" rule governs the newsletter's close, not the site.**

**The e-book, in detail:**

- **Book one is reconciliation** — the spearhead's paid answer. The newsletter gives the diagnosis away free; the book sells the way out.
- **The checkout is external.** **Kit Commerce is the front-runner** (buyer auto-joins the list; processing fee only, ~3.5% + $0.30). **Gumroad and Payhip remain the fallback.** **The tradeoff to decide, not default into: Gumroad is merchant of record** and handles US sales tax and EU VAT; **Kit Commerce is not**, so that liability sits with FranklinAI Solutions LLC. What Kit buys instead is that the buyer auto-joins the list, which is the whole point of the $37 rung. **Provider not finally locked.** Do not assume Stripe for a one-time file sale.
- **Sequence:** written, live, and buyable ahead of Issue 1 (September 1, 2026).
- **Open items:** the checkout provider and URL, **the book itself**, and whether the last chapter points back to the discovery call.

---

## Pricing Model

- **GlowPT** — $350 / month, flat, **with no patient limit**. Displayed inside the GlowPT modal. **If this price changes, THREE places move together: `App.jsx`, this file, and the GlowPT repo's `src/lib/marketing.js` (`MONTHLY_PRICE_USD`).**
  > ⚠️ **The GlowPT price line at `glowpt.app/onboard` is a CONTRACT REQUIREMENT, not decoration.** The Subscription Agreement §5.1 says "the subscription fee of $350 per month, **or the amount stated at sign-up**", and that on-screen line IS the amount stated at sign-up. Never remove it, and never edit it as if it were marketing copy.
- **The reconciliation e-book** — **$37**, one-time, displayed inside `EbookModal` (subline + Playfair price line). Not shown on the card. **If this changes, three places move: `App.jsx` (both spots), this file, and the external checkout.**

**Custom Pricing:**

- **The Build** — From $10,000. Whisper subtext: "New features quoted and built one at a time, as you grow." (Inter 15px, #8892a4, marginTop: '0')
- **Monthly Care** — $350 / month. Optional.

> ## ⚠️ THE `$350` DECOY — read before changing GlowPT's price (V49)
>
> **`$350` appears TWICE in `App.jsx` and only one of them is GlowPT.**
>
> - **Line ~95**, inside `GlowPTModal`'s footer: **this is GlowPT.**
> - **Line ~434**, the `Monthly Care` tier in `Pricing()`: **this is the custom build's optional hosting-and-maintenance retainer.** A completely unrelated product that happens to cost the same.
>
> Previous versions of this file said "if the GlowPT price changes, two places move" without warning that a naive grep returns a decoy. **If GlowPT's price ever moves, line ~434 must NOT move with it.**

**Order rationale.** The e-book sits first (cheapest paid yes, under the newsletter whose diagnosis it answers), GlowPT second (recurring flagship), then Custom Work as proof, bridging into How It Works and Custom Pricing.

## Primary CTA

"Book a Free Discovery Call" — hero card, GlowPT modal, Discovery CTA card. Never in the nav or footer. **Title case, no period.**

- **Full-page primary buttons (hero + Discovery):** `padding: '11px 22px', fontSize: '14px'`.
- **Modal discovery button:** `padding: '10px 20px', fontSize: '13px'` — deliberately the smallest.

**Scheduling link:** `https://cal.com/david-peterson-40s7lw/free-discovery-call`, opened in a new tab (`target="_blank" rel="noopener noreferrer"`).

> **The filled style is still exclusive to the discovery call, site-wide (reaffirmed V49).** When the GlowPT modal gained a second CTA, the buttons were re-ordered but their **styles were deliberately not swapped**. Every transaction button on the site is a ghost: "Buy the Guide", "Bring GlowPT to Your Clinic". **Flipping a transaction button to `btn--primary` requires David's explicit say-so**, and it was specifically considered and declined in V49.

## Email Option Under the Discovery CTA

`EmailOption` renders beneath the button on the **Discovery CTA card only**: "Not ready to schedule?" then **"Email"** on its own line (via `<br />`), a mailto to **`david@franklinaisolutions.com`**. **No period.** Inter 15px, #8892a4, link #60a5fa at 600, marginTop 18px. It does NOT appear in the footer, hero, or any modal.

> **Where it sits in the readiness ladder:** the middle rung — a self-paced question for the warm-but-cautious visitor.

## Newsletter Card — Live (Unwired)

*The Operator* has **its own card**, between Hero and Available. **Not wired** — the Kit form endpoint gets added later.

> **⏳ STILL THE OLDEST OPEN ITEM ON THE SITE.** The form is fully specced (see **Tech Stack**) and blocked on exactly two facts from David's Kit account: **the form ID** and **whether double opt-in is on**. Everything else is written. Issue 1 ships September 1, 2026.

> **It is a card, not a "strip."** The React component is still named `NewsletterStrip` (legacy name). Do not reintroduce "quiet strip" sizing.

**It is not a product card, and it never goes on the Available card.**

**The masthead lockup (V36 flip, both lines upright):**

- **Header "Newsletter"** — blue `card-heading`, `clamp(36px, 5.5vw, 58px)`, upright, `lineHeight: '1.2'`, `marginBottom: 'clamp(4px, 1.5vw, 10px)'`.
- **Subhead "The Operator"** — white Playfair sub-title, `clamp(30px, 5vw, 35px)`, 800, `lineHeight: '1.1'`, `marginTop: '0'`, `marginBottom: '14px'`, upright.
- **Description** (Inter 15px, #8892a4, `marginTop: '0'`, `marginBottom: '18px'`, `lineHeight: '1.5'`): **"For physical therapy practices. Delivered every other Tuesday, it takes a clear look at what's working and not working in your practice, and what to do about it."**

> **The audience line appears TWICE.** The identical sentence lives in the card description and the `NewsletterModal` description. **They must always move together.** Verify with `grep -c "For physical therapy practices\."` — expected count **2**.

**The card's action:**
- **One ghost button: "Subscribe for Free"** (`btn btn--ghost`, inline `marginTop: '0'`), opening `NewsletterModal`. **No email field on the card.**
- **`NewsletterModal`** — the site's **fourth** modal: title **"The Operator"**, subline **"Free to subscribe."** (Inter 14px/600/#8899b0), the **same description line as the card**, then a `borderTop` divider wrapping the form row.
- **The form row:** an email input (cream #f0e6d3 on rgba(255,255,255,0.04), 1px border rgba(96,165,250,0.3), 8px radius, **16px font to prevent iOS zoom**, `WebkitAppearance: 'none'`, flex `1 1 220px`, maxWidth 280px, 44px tall) and the ghost Subscribe button.
- **The 44px alignment fix:** `height`/`minHeight: '44px'`, `boxSizing: 'border-box'`, `display: 'inline-flex'`, centering, and **`marginTop: '0'`** (cancels `.btn`'s `margin-top: 8px`). Keep all of them.

> **The email field lives in a modal (V39 — reverses V28).** A bold Subscribe button is the visual magnet, so many visitors reach for the button first; with an inline field that was a dead click. **Keep the modal. Do not re-propose the inline field unless David asks.**

## Tech Stack

React + Vite, plain CSS (no Tailwind), Netlify, GitHub. Supabase for backend and auth where needed.

> **This site is a pure static build with NO serverless functions and no env files.** Kit's form endpoint and any Stripe payment link both work from the browser, so **none of the remaining wiring requires adding a backend here.** Do not propose one.

**Newsletter platform: Kit.** The form lives inside `NewsletterModal` and is **still unwired**.

> **Newsletter wiring plan — locked V40:**
> - **JS-handled submit, not a plain form POST.** A plain POST to `https://app.convertkit.com/forms/{FORM_ID}/subscriptions` navigates away and destroys the modal. Use a `fetch` (or Kit's v3 API / React embed). **The field must be named `email_address`.**
> - **On success: confirm in the modal, then auto-close** (~2s), X available sooner.
> - **Confirmation copy tracks Kit's double opt-in setting** — **"Almost there. Check your email to confirm."** if on (Kit's default), **"You're in."** if off. **No em dashes, no forbidden words.**
> - **On error: keep the modal open** with a gentle inline message; the button takes a brief disabled **"Subscribing…"** state.
>
> **A small, self-contained JSX addition.** No structural change to the card or modal.

**The e-book's checkout is an external service** — Kit Commerce front-runner, Gumroad/Payhip fallback. Not part of the React app.

> **Stack boundary.** This document governs the **FranklinAI marketing site** and **McKenzie Arm Care**, both on **Supabase**. **GlowPT's backend migration to AWS is COMPLETE (V49)** and lives in its own repo: infrastructure as CDK code, automated per-clinic provisioning, org-level AWS BAA. **site + McKenzie → Supabase; GlowPT → AWS.** This note is the boundary only, never the design.

## Repo

github.com/besoulful-design/franklinai-v2 · local path `~/Downloads/franklinai-v2`

*(Sibling, separate: github.com/besoulful-design/glowpt · `~/Downloads/glowpt`)*

## Domain

franklinaisolutions.com (owned and active). GlowPT's own site: **glowpt.app**.

## Favicon / iPhone Icon

SVG favicon and 180×180 PNG apple-touch-icon, kite mark on navy with the bolt in #fbbf24. Tab title shows just "FranklinAI." Files in `public/`.

---

## Brand Kit

### Colors

| Role | Value |
|---|---|
| Background / Navy | #070f24 |
| Accent Blue | #60a5fa — all blues, section headings, links, prices, buttons, logo strokes, "Solutions, LLC" |
| Gold / Lightning Bolt | #fbbf24 — **the kite lightning bolt only** |
| Card background | rgba(255, 255, 255, 0.04) |
| Card border | rgba(96, 165, 250, 0.18) |
| Newsletter input border | rgba(96, 165, 250, 0.3) |
| Divider line | rgba(96, 165, 250, 0.12) — four intentional dividers |
| Text primary | #f0e6d3 |
| Text muted | #8892a4 |
| Kite panel fills | #1e3a5f and #0f2340 |
| Cool blue-grey sublines | #8899b0 — modal sublines only |
| Headings / white sub-titles | #ffffff |

> **A note carried from the Instagram work:** the footer navy **#070f24 reads as dark blue only as a large filled block.** As thin text on a light field it reads flat black; the posts use **#1e3a5f** for text on white. On the site every ground is navy, so this never bites here.

> **GlowPT keeps its own amber/navy brand on glowpt.app and inside the app.** On the FranklinAI site it wears FranklinAI's navy-and-blue. **Do not carry GlowPT amber into this repo, and do not carry FranklinAI blue into that one.** The two brands are deliberately separate; only the *voice* crosses (V49).

### Typography

| Role | Font | Weight | Size / Notes |
|---|---|---|---|
| Hero label ("Custom / Apps & Tools") | Playfair Display | 700 | **clamp(40px, 6vw, 64px)**, blue, two lines, **lineHeight 1.1**, letterSpacing 0.04em, **marginBottom clamp(2px, 1vw, 8px)** |
| Hero headline ("Built for / Your Practice") | Playfair Display | 800 | **clamp(37.5px, 5.75vw, 57.5px)**, white, two lines (break after "for"), marginBottom 10px, **no period** |
| Hero trust subline | Inter | 400 | 15px, #8892a4; **"Built to Handle HIPAA"**, title case, **no period** |
| Newsletter header ("Newsletter") | Playfair Display | 800 | **clamp(36px, 5.5vw, 58px)**, blue via `card-heading`, upright, lineHeight 1.2 |
| Newsletter subhead ("The Operator") | Playfair Display | 800 | **clamp(30px, 5vw, 35px)**, white, upright, marginBottom 14px, lineHeight 1.1 |
| Newsletter description (card **and** modal) | Inter | 400 | 15px, #8892a4, lineHeight 1.5. **Both copies move together.** |
| Newsletter email input | Inter | 400 | **16px** (prevents iOS zoom), 44px tall, box-sizing border-box |
| Section card headings (all seven) | Playfair Display | 800 | **clamp(36px, 5.5vw, 58px)**, blue, **lineHeight 1.2** (About 1.1), **marginBottom clamp(4px, 1.5vw, 10px)** |
| — "Behind FranklinAI" | Playfair Display | 800 | two lines via `<br />`, lineHeight 1.1; "Behind Franklin" blue, **"AI" white** |
| Secondary sub-titles (unified) | Playfair Display | 700–800 | **clamp(30px, 5vw, 35px)**, **all white** |
| Product teaser | Inter (card-text) | 400 | 16px, #8892a4 |
| Ghost buttons | Inter (btn--ghost) | 600–700 | 15px, **title case, no period** |
| Primary CTA buttons | Inter (btn--primary) | — | padding 11px 22px, fontSize 14px |
| Modal CTA buttons (both) | Inter | — | padding 10px 20px, fontSize 13px |
| Price numbers | Playfair Display | 700 | **27.7px**, blue |
| Price descriptors | Playfair Display | 700 | 20px, blue |
| Modal titles | Playfair Display | — | `.modal__title`, marginTop 6px |
| Modal sublines | Inter | 600 | 14px, #8899b0, marginBottom 16px |
| Modal feature rows | Inter | 400 / 700 check | 15px, #f0e6d3 text, #60a5fa check |
| Nav name | Playfair Display | 700 | clamp(40.95px, 4.35vw, 50.4px), blue with "AI" white |
| Nav "Solutions, LLC" | Inter | 800 | clamp(25.6px, 2.72vw, 31.5px), #60a5fa |
| Footer name | Playfair Display | 700 | 32px, blue with "AI" white |
| Footer "Solutions, LLC" | Inter | 800 | 20px, #60a5fa |
| Footer small print (2 lines) | Inter | 400 | 13px, #8892a4, each `display: block`, centered by the column's `text-align`. **The "© {year}" line additionally carries `translateX(-3px)` — a deliberate optical correction, the only nudge on the page (V48). See Footer.** |
| Email option text | Inter | 400 | 15px, #8892a4, link #60a5fa at 600 |

Google Fonts import (locked, in `index.html`):
`Playfair+Display:ital,wght@0,700;0,800;1,800&family=Inter:wght@400;500;600;700;800`

> **Font-import note:** since V36 nothing on the page is italic, so the `1,800` italic face is unused — left in for now. **The site and the Instagram graphics differ on purpose:** the posts set "The Operator" in **Inter**, the site's subhead stays **Playfair**. Do not "reconcile" them.

---

## Logo Accent — Gold Is Logo-Only

Gold (#fbbf24) has exactly one home: **the kite's lightning bolt.** It is not a copy, heading, or sub-title color anywhere else.

| Element | Color |
|---|---|
| Kite lightning bolt | **gold #fbbf24** |
| Section card headings (all seven) | blue #60a5fa |
| Newsletter "The Operator" subhead | **white** |
| E-book product name | **white** |
| GlowPT | **white** |
| David Peterson | **white** |
| McKenzie Arm Care | white |
| Step titles, pricing-tier titles | white |
| "AI" in the wordmark (nav, footer, About heading) | **white** |

**Gold never leaves the logo. Every sub-title is white. Every section heading is blue.** If a sub-title needs emphasis, use weight, a label, or a thin rule, **not** gold.

---

## Header Sizing — Three Tiers

1. **Hero** — label **clamp(40px, 6vw, 64px)** blue, lineHeight 1.1; headline **clamp(37.5px, 5.75vw, 57.5px)** white, no period.
2. **Section card headings** — **clamp(36px, 5.5vw, 58px)**, blue, **lineHeight 1.2** (About 1.1), **marginBottom clamp(4px, 1.5vw, 10px)**: Newsletter, Available, Custom Work, How It Works, Custom Pricing, Behind FranklinAI, Let's Build.
3. **Secondary sub-titles** — **clamp(30px, 5vw, 35px)**, **all white**.

Price numbers are a separate fixed size: **27.7px**.

> **The masthead exception is retired (V36).** **No heading on the page is italic or off-tier.**

---

## Card Top & Bottom Padding

Every `.site-card` carries inline **`paddingTop: '16px'`** and **`paddingBottom: '24px'`**. **Left and right stay at 40px.** All eight cards.

---

## Card Heading Spacing

Each `card-heading` carries **`marginBottom: 'clamp(4px, 1.5vw, 10px)'`** and an explicit **`lineHeight: '1.2'`** (About 1.1). Before V26 headings inherited the body's `1.6`, padding ~15px of dead space inside the line box — that, not the margin, was the loose gap.

**No negative-margin pulls anywhere below a heading.** Both `step-stack` wrappers sit at `marginTop: '0'`; the About headshot at `margin: '14px auto 10px'`.

---

## Page-Wide iOS Text Guard

`App()` returns a single wrapping **`<div style={{ WebkitTextSizeAdjust: '100%' }}>`** around Nav, main, and Footer, so iOS Safari does not auto-inflate text on rotation.

- Layout-neutral; **do not give this wrapper any other styles.**
- React key is `WebkitTextSizeAdjust` (capital W). Do **not** use `none` — it kills pinch-zoom.

---

## Design Rules

- Single unified dark navy everywhere
- All content in `.site-card` (max-width 640px, margin 0 auto, text-align center, radius 16px)
- Section headings live inside the card at the top
- Card-heading spacing via explicit `lineHeight: '1.2'` + one shared responsive `marginBottom`; no compensating negative margins
- **No heading on the page is italic**
- No horizontal dividers between sections or inside cards. Thin `borderTop` rules exist only in **four** spots: the GlowPT modal footer, the e-book modal footer, the newsletter modal form divider, and the page footer. **The two products on the Available card are separated by spacing, not a rule.**
- No em dashes anywhere in copy, ever — **and as of V49 that applies on glowpt.app too**
- Dark mode locked via color-scheme: only light
- No step numbers in How It Works *(the `steps` array still carries a `number` field that nothing renders — harmless leftover, same class as the `id="financial-clarity"` on the Available section)*
- Gold is reserved for the logo bolt only
- Responsive sizing uses `clamp()` with **absolute pixel values**
- **All buttons are title case with no period.** Section headings take no period.
- **Form controls are pinned to a matching 44px height** with the button's inherited `.btn` top margin zeroed
- **Center a stack of differently-sized lines by block layout + `text-align: center`, never by flex shrink-to-content (V47).** Make the container a block with `text-align: center` and every line `display: block`. **This is the house standard for any centered stack, not just the footer.**
- **Geometric centering is not always optical centering (V48).** A line whose ink is unevenly weighted can measure 0.00px centered and still read as off-centre. **Verify centering against the reference the eye uses**, and if a line is provably centered but still looks wrong, the remedy is an explicit documented optical correction, not a re-derivation of the layout around it.
- **In a stacked pair of buttons, the BOTTOM one is the stronger position (V49).** It is the terminal action, which is why dialogs put confirm last. Combined with the filled style being the loudest element, **a filled button placed last is the most dominant thing in the block.** Order and weight are two separate levers; do not reach for order when the intent is weight.
- **Copy that appears twice must move twice.** Two strings are duplicated by design: the newsletter description (card + modal) and the "Subscribe for Free" label (card + modal).

---

## Kite Logo Mark — Locked SVG

> **WRONG-FILE TRAP — read before editing the mark (V48).** There are **two** `KiteLogo` definitions in this repo and they are **not** the same drawing. The **live** one is defined **inline at the top of `src/App.jsx`** (viewBox `62 10 101 240`, width `size * 101/240`). The file **`src/components/KiteLogo.jsx` is DEAD CODE** — nothing imports it, and it carries a completely different mark (viewBox `0 0 220 270`, plus blueprint grid lines). **Edit the inline one in `App.jsx`.** *(V31 deleted the dead `Nav.jsx`/`Footer.jsx` and noted `src/components/` "holds only `KiteLogo.jsx`," which read as though that file were live. It is not. Deleting it is a reasonable future cleanup.)*

The **inline** `KiteLogo` in `App.jsx` is the single source of truth for the mark. `size` sets the height; width is `size × (101 / 240)`.

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

The kite is NOT a symmetric diamond. Vertices: top (110,20), right (148,88), bottom (110,120), left (72,88). The widest point — the cross-spar at **viewBox y=88** — is the true visual horizontal centerline, NOT the bounding-box midpoint.

For a kite rendered at height `H`, the crossbar sits at **`(88 - 10) / 240 × H = 0.325 × H`** px from the top.
- Nav (H=130): crossbar at **42.25px**.
- Footer (H=105): crossbar at **34.12px**.

| Location | size prop | Rendered width |
|---|---|---|
| Nav | 130 | 54.71px |
| Footer | 105 | **44.19px** |

**Note on the nav kite size:** it carries NO `site-nav__logo` className; it is wrapped in `<span style={{ flexShrink: 0, display: 'flex' }}>`. This dodges a stale `.site-nav__logo { height: 168px !important }` rule in `global.css`, now dead code.

---

## Vertical Alignment Methodology — Wordmark F vs Kite Crossbar

**Two measured facts:**
1. **Kite crossbar** is at `0.325 × kiteHeight` from the kite top.
2. **The capital "F" optical center**, for Playfair Display at `line-height: 1`, sits **0.561em below the top of the text line**.

**Placement rule:** the brand row uses `align-items: flex-start`, so
`F_center_from_top = marginTop + 0.561 × nameFontSize`
Set equal to the **crossbar** and solve for `marginTop`.

- **Nav wordmark `marginTop`: `clamp(13.98px, calc(42.25px - 2.44vw), 19.28px)`**
- **Footer text column `marginTop`: `13.16px`**

> The footer brand-row `translateX(-14px)` dial is horizontal only and does not affect this math. **The vertical math is untouched and must stay that way.**

---

## Horizontal Centering — `translateX` Dials (nav and footer)

Both lockups are positioned horizontally by inline `transform: translateX(...)`, same value on desktop and iPhone. Using a transform (not margin) means it never consumes layout width.

- **Nav brand `<a>`: `transform: 'translateX(-26px)'`** — the lockup-level dial.
- **Footer brand row `<div>`: `transform: 'translateX(-14px)'`** — the footer's single lockup dial. **Hand-tuned. Closed. See Footer.**
- **Footer text column `<div>`: no `transform`.**

> **Why the nav and footer dials differ, and why that is correct.** The nav's kite is *relatively smaller* next to its larger wordmark (kite-to-text width ratio ~0.22 vs the footer's ~0.27), so the heavier nav wordmark pulls the optical center rightward more. The extra lean cancels that. **Do not "reconcile" the two dials to one number** — the visual result, not the pixel value, is what matches.

> **Do not "derive" the footer dial from box math (V48).** A session computed that the footer text column inherits an offset of exactly `(kiteWidth 44.19 + gap 4) / 2 = 24.09px`, concluded the dial "should" be `-24.09px`, and shipped it. It is true arithmetic and the wrong change: it dragged the whole signature left, and David rejected it immediately. **The dial is an optical judgement about how the lockup reads, not a centering equation.** The kite deliberately hangs left of the centered text; that is the design.

---

## Fine-Print Left-Nudges — RETIRED except ONE documented exception (V48)

**The blanket ban stands, with a single named exception.** Through V30, a per-line `transform: 'translateX(-2px)'` shifted four text lines a hair left. It had been tuned for the old "Philadelphia" city line. **V31 removed all four.**

| Line | Nudge |
|---|---|
| Nav "Solutions, LLC" | none |
| Footer "Solutions, LLC" | none |
| Footer "franklinaisolutions.com" | none |
| **Footer "© {year}"** | **`translateX(-3px)` — deliberate optical correction (V48)** |

**Do NOT add a per-line `translateX` to any line other than the copyright.** If a subline looks off-center, first fix the *centering method* (block + `text-align`), and only reach for an optical correction when the line is provably centered and still reads wrong.

> **Why the copyright line is the exception.** The line is geometrically centered to **0.00px** against the wordmark. But `©` is a light hollow circle beside four solid digits, so its ink weight sits right of the geometric center, measured at roughly **2.2px** even after the gap was tightened. Solving for a gap that would balance it returns a **negative** number, which proves no tightening can fix it: the imbalance is in the glyph weights, not the space. **V31 stripping the `-2px` from this line was an over-correction**, and very likely what produced the recurring "the copyright isn't centered" complaint that ran for several sessions. **Landed at `-3px` by David's eye against the live site.**

---

## Nav

- Sticky (`position: sticky; top: 0`)
- Logo and wordmark only — no CTA, no links, no tagline
- `padding: '6px 24px'`
- Brand link: `gap: '4px'`, `alignItems: 'flex-start'`, `transform: 'translateX(-26px)'`
- Kite: `KiteLogo size={130}` (the **inline** one), wrapped in `<span style={{ flexShrink: 0, display: 'flex' }}>`, NO className
- Wordmark div: `marginTop: 'clamp(13.98px, calc(42.25px - 2.44vw), 19.28px)'`
- Name `clamp(40.95px, 4.35vw, 50.4px)` blue with "AI" white; "Solutions, LLC" **Inter 800**, `clamp(25.6px, 2.72vw, 31.5px)`, blue, **no `transform`**
- Responsive sizing via inline `clamp()`, not media queries

> The nav wordmark is still a flex column and has **not** shown the footer's centering problem — its subline sits directly under a single-line wordmark, so there is no differently-sized-sibling shrink-centering to go wrong. If it ever does, apply the block + `text-align` standard here too.

---

## Footer — Fully Self-Contained in App.jsx, and CLOSED

**The footer uses NO CSS classes from `global.css`.** Entirely inline styles. The `global.css` `.site-footer*` rules are dead code.

> ## THE FOOTER LOCKUP IS CLOSED. DO NOT CHANGE IT.
>
> **The structure below is correct, hand-tuned, and settled.** The kite sits on the **left**, and a single text column to its right holds **all four lines** — wordmark, "Solutions, LLC", the domain, and the copyright — centered with each other. **Do not restructure it, do not move the fine print out of the column, and do not recompute the `-14px` dial.**
>
> **Everything in this list was tried in one session and reverted.** Do not try them again:
> 1. **`alignSelf: 'stretch'` on the fine-print spans while the column stayed flex** (V46) — no effect, because the *column* was still a flex container.
> 2. **Changing the brand-row dial from `-14px` to a "derived" `-24.09px`** — mathematically defensible, visually wrong; it dragged the whole signature left.
> 3. **Moving the fine print out of the column into its own page-centered block below the lockup** — rejected on sight.
> 4. **Removing the `-14px` dial entirely** so the lockup centered as a unit — same rejection.
>
> **What actually fixed it:** the two per-line changes to the copyright, documented below. Nothing structural.

### Footer Structure

A scaled-down signature (kite 105, name 32px). Kite-to-wordmark gap `4px`.

**Footer outer:** `padding: '24px 24px 20px'`, `borderTop: '1px solid rgba(96, 165, 250, 0.12)'`, `marginTop: '0'`, `display: 'flex'`, `justifyContent: 'center'`.

**Footer brand row:** `display: 'flex'`, `alignItems: 'flex-start'`, `gap: '4px'`, **`transform: 'translateX(-14px)'`**.

**Kite** (left): `KiteLogo size={105}` (the **inline** component), wrapped in `<span style={{ flexShrink: 0, display: 'flex' }}>`, no className.

**Text column** (right — a **plain block**, `textAlign: 'center'`, `marginTop: '13.16px'`, **no flex, no `transform`**). Every line inside is `display: block` and centers by the column's `text-align`:

1. **FranklinAI** — Playfair 700, 32px, blue with "AI" white, inside a `display: block` home link `<a>`. The widest line, so it sets the column width.
2. **Solutions, LLC** — Inter 800, 20px, blue, `letterSpacing: '0.02em'`, marginTop 2px (inside the same link).
3. **franklinaisolutions.com** — Inter 400, 13px, #8892a4, lineHeight 1.5, marginTop 8px. **No transform.**
4. **© {year}** — Inter 400, 13px, #8892a4, lineHeight 1.5, **`transform: 'translateX(-3px)'`**, with the year in a nested span carrying **`marginLeft: '2px'`** and **no literal space** between it and the `&copy;` entity.

> **The copyright line, in full (V48) — both changes are deliberate.**
>
> **(a) The gap after `©` is a fixed 2px CSS margin, not a word space.** The markup is `&copy;<span style={{ marginLeft: '2px' }}>{year}</span>`. A fixed margin renders identically in every browser; a thin-space character would depend on the font shipping that glyph. **Do not put the plain space back.**
>
> **(b) The line carries `translateX(-3px)`, the only per-line nudge on the page.** See **Fine-Print Left-Nudges**. **This moves the copyright line only.**

No email in the footer.

---

## Scroll Lock on Modals

All four modals (`EbookModal`, `GlowPTModal`, `CaseStudyModal`, `NewsletterModal`) lock page scroll via a `useEffect` setting `document.body.style.overflow = 'hidden'` on mount, restoring on unmount. Each closes on X click or backdrop click.

---

## Page Sections (in order)

All sections use `.section` → `.container` → `.site-card` (inline `paddingTop: '16px'`, `paddingBottom: '24px'`). **Live order: Hero → Newsletter (The Operator) → Available → Custom Work → How It Works → Custom Pricing → About → Discovery CTA.**

The page reads as one sentence: here's what I do → here's the free thing worth following → here's what's available → here's proof I build custom → here's how the work goes and what it costs → here's who I am → let's talk.

### Hero

- **Label** (Playfair 700, clamp(40px, 6vw, 64px), #60a5fa): "Custom" / "Apps & Tools" — two lines, lineHeight 1.1, letterSpacing 0.04em, marginBottom clamp(2px, 1vw, 8px)
- **Headline** (Playfair 800, clamp(37.5px, 5.75vw, 57.5px), white): **"Built for" / "Your Practice"** — break after "for", marginBottom 10px, **no period**
- **Trust subline** (Inter 15px, #8892a4): **"Built to Handle HIPAA"** — title case, **no period**, no link
- **CTA:** "Book a Free Discovery Call" — `btn btn--primary`, `padding: '11px 22px', fontSize: '14px'`, cal.com, new tab. No `EmailOption`.

### Newsletter (The Operator) — `NewsletterStrip`

- **Header** (`card-heading`, blue, upright): **"Newsletter"**
- **Subhead** (Playfair 800, white, upright, marginBottom 14px): **"The Operator"**
- **Description** (Inter 15px, #8892a4, marginBottom 18px, lineHeight 1.5): **"For physical therapy practices. Delivered every other Tuesday, it takes a clear look at what's working and not working in your practice, and what to do about it."** **The identical line also lives in `NewsletterModal`; both move together.**
- **Subscribe button** (`btn btn--ghost`, "Subscribe for Free", marginTop 0), opening the modal. **No email field on the card.**
- **`NewsletterModal`**: title "The Operator", "Free to subscribe." subline, the same description, then a `borderTop` divider wrapping the input + ghost Subscribe button (both 44px, flush).
- **Not wired.** A JSX comment marks where the Kit endpoint goes.

### Available (Product Card)

Component **`AvailableForPractice`**. Two products: the e-book first, GlowPT second. Card carries `id="financial-clarity"` (harmless leftover). State flags `ebookOpen` and `glowOpen`.

**Two-product vertical spacing (locked, V38 values):**
- **Heading → first product: 12px** (e-book `<h3>` `marginTop: '12px'`, collapsing with the heading's marginBottom)
- **Title → teaser: 10px** on each (`marginBottom: '10px'`)
- **Teaser → button: 16px** on each (e-book teaser `marginBottom: '0'`; buttons `marginTop: '16px'`)
- **Between products: 28px** (GlowPT `<h3>` `marginTop: '28px'`)

**Product 1 — the e-book (FIRST):**
- **Title** (Playfair 800, clamp(30px, 5vw, 35px), white, lineHeight 1.2, marginTop 12px, marginBottom 10px): **"What Your Practice Actually Sells"**
- **Teaser** (`card-text`, `marginBottom: '0'`): **"A downloadable guide for owners running two business models in one building, an insurance practice and a cash practice, and making them work together."**
- **Button:** "More Info" (btn--ghost, marginTop 16px) → `EbookModal`

**Product 2 — GlowPT (SECOND):**
- **Title** (same treatment, marginTop 28px, marginBottom 10px): "GlowPT"
- **Teaser** (`card-text`, `:last-of-type`): **"An app for physical therapy patients to stay engaged between visits, with zero work for your therapists."** *(V44. The subject moved from the practice to the **patient**. **The buyer is still the clinic** — the closing clause is the line that speaks to the owner.)*
- **Button:** "More Info" (btn--ghost, marginTop 16px) → `GlowPTModal`

> **The card was NOT changed in V49.** All the GlowPT changes are inside the modal. A visitor should reach the price and the feature list before they reach a signup link, which is why the self-serve door is one level in. **Do not move it up to the card.**

**EbookModal:** Scroll-locked, mirrors `GlowPTModal`.
- **Title** (`modal__title`, marginTop 6px): **"What Your Practice Actually Sells"**
- **Subline** (Inter 14px/600/#8899b0, marginBottom 16px): **"A self-serve guide. $37, yours to download."**
- **Body — three `modal__text` paragraphs (1 and 2 rewritten in V41; 3 unchanged):**
  1. *"Your whole team is being asked to sell advanced care and get patients to the end of their plan of care at the same time. That's not a marketing problem. You're running two business models in one building, an insurance practice and a cash practice, and they're pulling against each other."*
  2. *"You didn't set out to run two businesses, but you chose every piece that built the second one. The tactics arrived built for a business you don't own, and none of them came with a label. So the team gets mixed signals about what the practice is driving at, and every patient feels the seams."*
  3. *"This guide walks you through the fix: decide what your practice actually is, then say it in one sentence your whole team can repeat. Not a tactic, not a tool. The one thing that lets everything else line up behind it."*
  > **What V41 fixed, and why it must not come back.** The old text carried **two retired framings**: the departmental split and the accident framing. **Do not reintroduce either framing anywhere in site copy.**
- **Footer** (borderTop hairline, paddingTop 24px, centered): **"$37"** (Playfair 700, 27.7px, blue, no "/ month") then a **ghost** "Buy the Guide" (`padding: '10px 20px', fontSize: '13px'`, `href="#"` placeholder).

**GlowPT Modal:** Scroll-locked. Title "GlowPT" (marginTop 6px); the subline; the description; **eight** feature lines; price $350 / month; **then TWO CTAs (V49).**

- **Subline (V49):** **"Sign up online, or book a call first."** *(Was "Clinic subscriptions available.", written when subscribing meant emailing David. The new line names both doors and its word order deliberately matches the button order below it. **It promises nothing about timing**, because signup is self-serve but activation is not.)*

- **Description paragraph (V46):** **"Patients walk out doing great, then drift off before their plan of care is done. The GlowPT app keeps patients engaged between visits, so more plans of care get completed and the clinic stays full."**

**The eight feature lines, in live order (read this before quoting a bullet by number):**

1. "A 30-second daily check-in, with warm encouragement that keeps patients coming back."
2. "A private journal and weekly streaks, in every patient's pocket."
3. **"One subscription covers the clinic, no matter how many patients you have. Patients join free."** *(V49. The no-limit clause is new. Every owner reading "per clinic" is silently doing per-seat math, because that is how every other tool they buy is priced; answering it out loud is worth more than leaving it implied. The claim was always true and appeared on neither site.)*
4. "Reaches every patient, not just the ones you can bill remote monitoring on."
5. "More completed plans of care, because engaged patients finish their care."
6. "Zero work for your therapists. No building, no monitoring, no calls."
7. **"Runs alongside any EMR. Nothing to set up, nothing to integrate."** *(V37 called it "the eighth" — it brought the count to eight but sits **seventh**.)*
8. **"A free weekly roster summary and a clinic dashboard to follow activity, trends, and flags."** ✅ **V44's open item on the word "flags" is CLOSED (V49):** the live clinic dashboard carries a "Need Attention / flagged" tile and per-patient flag badges ("Inactive", "Low Mood"), verified by looking at the running app. **The bullet is accurate. Bullets 1–7 were never in question.**

**The modal footer — the two CTAs (V49):**

```
──────────────── (borderTop hairline, paddingTop 24px, textAlign center)
        $350 / month
   [ Bring GlowPT to Your Clinic ]   ← btn--ghost  → https://glowpt.app/onboard
   [ Book a Free Discovery Call   ]   ← btn--primary → cal.com
```

- Both are `padding: '10px 20px', fontSize: '13px'`, both `target="_blank" rel="noopener noreferrer"`.
- The **second** button sits in a `<div style={{ marginTop: '12px' }}>` with its own `marginTop: '0'`, so the 12px gap is controlled in one place and the first button keeps `.btn`'s inherited 8px above it. **If the order is ever changed again, the wrapper moves to whichever button is second.**
- **The ghost's label and destination both match glowpt.app's own primary button**, which is a `<Link to="/onboard">`. That is deliberate: identical words landing on a page showing an identical button reads as a dead end.

> **Three things about this footer that were argued and settled. Do not silently redo them.**
>
> 1. **The order is self-serve first, call second.** David's call. He was told first that in a stacked pair the **bottom is the stronger position** (it is the terminal action, which is why dialogs put confirm last), so the order change alone favours the call rather than self-serve. He chose it anyway, and the subline's word order now matches. **Recorded so the argument is not re-run from scratch.**
> 2. **The styles were NOT flipped with the order.** Flipping them (self-serve filled, call ghost) was explicitly proposed as the way to actually encourage self-serve, and explicitly declined. **The filled style stays exclusive to the discovery call, site-wide.**
> 3. **Dropping the discovery call from this modal entirely**, the way `EbookModal` has no call at all, was proposed and not taken. A $350/month recurring product keeps the option to talk first.

**The exercise-plan exclusion — permanent.** Feature line 2 reads **"A private journal and weekly streaks, in every patient's pocket."** It said "a personal exercise plan" until July 15, 2026. **Do not put that back. GlowPT has no exercise plan and never will.** That exclusion is the wedge separating GlowPT from the HEP tools clinics buy and never use. What it has is a **movement checklist**: a record of what the patient did, not a plan telling them what to do.

### Custom Work

Heading "Custom Work". Title (card-title, white) "McKenzie Arm Care"; two-sentence teaser; **"Case Study"** ghost button (marginTop 16px) → `CaseStudyModal`.

**CaseStudyModal:** Scroll-locked. No "Case Study" label inside. Title "McKenzie Arm Care"; full description; 2-column feature list; tech-stack note "Built with React, Supabase, and deployed on Netlify."

### How It Works

Heading "How It Works" (capital I, always). Three steps: Discovery / Build / Grow. No step numbers rendered. Parallel two-sentence structure. **step-stack `marginTop: '0'`.** Copy stays broadly worded — the umbrella breathing under the niche headline.

### Custom Pricing

Heading "Custom Pricing". Two tiers, **step-stack `marginTop: '0'`**: **The Build** (`pricePrefix: 'From'`, `$10,000`, whisper subtext) and **Monthly Care** (`$350`, `/ month`). ⚠️ **Monthly Care's `$350` is the decoy — see Pricing Model.**

### About (heading reads "Behind FranklinAI")

Heading **"Behind FranklinAI"** — two lines via `<br />`, lineHeight 1.1; "Behind Franklin" blue, **"AI" white**. Component `About()`.
**Headshot:** `public/david.png`, 120px circle, **margin '14px auto 10px'**, 3px border rgba(96,165,250,0.3).
**Name:** "David Peterson" (white), then two bio paragraphs, **both rewritten in V42**. Read **Bio (About Section)** before changing a word.

### Discovery CTA

Heading **"Let's Build"**. Copy: "Every project starts with a conversation. Tell us what you need or what's not working, and we'll figure out what to build." CTA "Book a Free Discovery Call" (`marginTop: 'clamp(4px, 1vw, 8px)', padding: '11px 22px', fontSize: '14px'`), `<EmailOption />` beneath — the **only** place it appears. Section carries `id="discovery"`.

---

## Scheduling — Cal.com

**Platform:** cal.com · **Account slug:** david-peterson-40s7lw · **Event:** Free Discovery Call · **Slug:** free-discovery-call · **Duration:** 30 minutes · **Location:** Cal Video
**URL:** `https://cal.com/david-peterson-40s7lw/free-discovery-call`

---

## Public Assets

| File | Purpose |
|---|---|
| public/david.png | Headshot, 400×400px, shown as a 120px circle in About |
| public/apple-touch-icon.png | 180×180 PNG, kite on navy, bolt #fbbf24 |
| public/favicon.svg | SVG favicon |
| public/icons.svg | SVG sprite |

---

## Copy Rules

**These bind anywhere a PT owner reads FranklinAI's words, glowpt.app included (V49). See Copy Rules Travel With the Voice.**

- No em dashes anywhere, ever
- No "software" (use "web apps and tools" or "apps")
- Avoid "in plain English" (and similar) — it can read as excluding non-native English speakers
- Tone: warm, plain-spoken, builder-to-business-owner. No brochure language, no consultant register.
- All section headings title case, **no period**
- **The hero trust subline "Built to Handle HIPAA" is title case with no period.**
- **All buttons are title case with no period**, primary and ghost alike
- The "Email" link has **no period** and points to **david@franklinaisolutions.com**
- Modal feature lines end with periods
- **GlowPT is always one word, capital G and PT.** It may be named plainly as **"the GlowPT app"** in running copy.
- FranklinAI is always one word, capital F and capital AI; the "AI" renders white wherever the wordmark appears. The footer copyright is just "© {year}".
- **The newsletter description is duplicated on purpose (card + modal). Any edit changes BOTH.** `grep -c "For physical therapy practices\."` → **2**.
- **Two retired framings are banned from all site copy.** Never write **"nobody decided"**; never **split the building into the front desk versus the therapists.**
- **"cash practice" and "advanced care" are interchangeable and neither is retired.**
- **No job title, employer, or present-tense employment fact anywhere in site copy (V42).**
- **Never describe GlowPT as providing an exercise plan or exercise prescription.**
- **No renewal, cancellation, refund or trial claims about GlowPT (V49)** — counsel has an open question on state auto-renewal statutes.
- **Nothing implying a GlowPT clinic can start checking patients in immediately after signup (V49)** — activation is manual.
- **The e-book's live copy is locked in `App.jsx` and mirrored in Available.**

---

## Forbidden Words in Copy

- "software" (use "web apps and tools" or "apps")
- "in plain English" (and similar)
- "upsell" (it turns patients into targets; say "premium add-ons," "the premium sell," or "advanced care")
- "treatment room" (therapists work on the floor, in the gym, in the open clinic; it reads like a physician's office) — **fixed on glowpt.app 2026-08-27, where it had shipped**
- Em dashes — anywhere, ever

---

## Bio (About Section) — Locked

**David Peterson**

David has spent decades building systems and processes in both
nonprofit and for-profit businesses, across healthcare, research,
and education.

That experience is what FranklinAI is built on. Custom apps and tools
are the next step in work he's been doing his whole career, now with
better technology and a clear focus on what a business needs.

> **Rewritten in V42. Read this before "fixing" any of it.** The bio is the umbrella's proof, not the niche's. **Four things are deliberate:**
>
> - **It names no job title and no employer.** **Do not write a current role, employer, or clinic back in.**
> - **It names no niche.** **Do not "reconcile" the bio to the niche-forward headline.** That has been proposed and rejected.
> - **"Healthcare, research, and education" and "nonprofit and for-profit" are two different axes and stay in separate clauses.** One is a sector list, the other a tax structure.
> - **"That experience" in paragraph 2 depends on paragraph 1.** **If paragraph 1 is ever rewritten, check that paragraph 2's opening still has something to point at.**

---

## Locked Inline Styles Reference

Set in `App.jsx`, overriding CSS class defaults. Do not change without explicit instruction.

| Element | Inline styles |
|---|---|
| App root wrapper `<div>` | WebkitTextSizeAdjust: '100%' (only style) |
| Nav `<nav>` | padding: '6px 24px' |
| Nav brand `<a>` | gap: '4px', alignItems: 'flex-start', transform: 'translateX(-26px)' |
| Nav kite wrapper `<span>` | flexShrink: 0, display: 'flex' (kite has NO className) |
| Nav kite | `KiteLogo size={130}` (the **inline** component) |
| Nav wordmark `<div>` | marginTop: 'clamp(13.98px, calc(42.25px - 2.44vw), 19.28px)' |
| Nav name `<span>` | fontSize: 'clamp(40.95px, 4.35vw, 50.4px)', color: '#60a5fa' |
| Nav "AI" `<span>` | color: '#ffffff' |
| Nav "Solutions, LLC" `<span>` | Inter, 800, 'clamp(25.6px, 2.72vw, 31.5px)', #60a5fa, lineHeight '1', marginTop '3px', **no `transform`** |
| All `.site-card` divs | paddingTop: '16px', paddingBottom: '24px' |
| Hero label `<p>` | Playfair, 'clamp(40px, 6vw, 64px)', 700, letterSpacing '0.04em', #60a5fa, marginBottom 'clamp(2px, 1vw, 8px)', lineHeight '1.1' |
| Hero headline `<h1>` | #ffffff, 'clamp(37.5px, 5.75vw, 57.5px)', marginBottom '10px' |
| Hero trust subline `<p>` | Inter, '15px', #8892a4, marginTop '0', marginBottom 'clamp(4px, 1vw, 8px)' |
| **Hero CTA `<a>`** | **padding '11px 22px', fontSize '14px'** |
| **Newsletter header `<h2>`** | `card-heading`, 'clamp(36px, 5.5vw, 58px)', lineHeight '1.2', marginBottom 'clamp(4px, 1.5vw, 10px)' |
| **Newsletter subhead `<p>`** | Playfair, 'clamp(30px, 5vw, 35px)', 800, #ffffff, marginTop '0', marginBottom '14px', lineHeight '1.1' |
| **Newsletter card description `<p>`** | Inter, '15px', #8892a4, marginTop '0', marginBottom '18px', lineHeight '1.5' |
| **Newsletter card Subscribe `<button>`** | `btn btn--ghost`, onClick opens the modal, **marginTop '0'** |
| **`NewsletterModal` title `<h2>`** | `modal__title`, marginTop '6px' |
| **`NewsletterModal` subline `<p>`** | Inter, '14px', 600, #8899b0, marginBottom '16px' |
| **`NewsletterModal` description `<p>`** | `modal__text` — same text as the card; **the two move together** |
| **`NewsletterModal` form divider `<div>`** | borderTop '1px solid rgba(96,165,250,0.12)', paddingTop '24px' |
| **`NewsletterModal` form row `<div>`** | display 'flex', flexWrap 'wrap', gap '10px', justifyContent 'center', alignItems 'center' |
| **`NewsletterModal` email `<input>`** | Inter, '16px', #f0e6d3, bg rgba(255,255,255,0.04), 1px border rgba(96,165,250,0.3), radius '8px', padding '10px 14px', height/minHeight '44px', boxSizing 'border-box', outline 'none', WebkitAppearance 'none', flex '1 1 220px', maxWidth '280px' |
| **`NewsletterModal` Subscribe `<button>`** | `btn btn--ghost`, height/minHeight '44px', boxSizing 'border-box', inline-flex centered, **marginTop '0'** |
| Available heading `<h2>` | 'clamp(36px, 5.5vw, 58px)', marginBottom 'clamp(4px, 1.5vw, 10px)', lineHeight '1.2' |
| **E-book product name `<h3>`** | Playfair 800, 'clamp(30px, 5vw, 35px)', #ffffff, lineHeight '1.2', **marginTop '12px'**, **marginBottom '10px'** |
| **E-book teaser `<p>`** | **marginBottom '0'** |
| **E-book "More Info" `<button>`** | marginTop '16px' |
| GlowPT product name `<h3>` | Playfair 800, 'clamp(30px, 5vw, 35px)', #ffffff, lineHeight '1.2', **marginTop '28px'**, **marginBottom '10px'** |
| GlowPT teaser `<p>` | no inline overrides (`:last-of-type`) |
| GlowPT "More Info" `<button>` | marginTop '16px' |
| **E-book modal title `<h2>`** | marginTop '6px' |
| **E-book modal subline `<p>`** | Inter, '14px', 600, #8899b0, marginBottom '16px' |
| **E-book modal body `<p>` × 3** | `modal__text`, no inline overrides |
| **E-book modal footer `<div>`** | borderTop, paddingTop '24px', textAlign 'center' |
| **E-book modal price `<p>`** | Playfair 700, '27.7px', #60a5fa, lineHeight '1.45', marginBottom '18px' |
| **E-book "Buy the Guide" `<a>`** | href="#", `btn btn--ghost`, padding '10px 20px', fontSize '13px' |
| GlowPT modal title `<h2>` | marginTop '6px' |
| **GlowPT modal subline `<p>`** | Inter, '14px', 600, #8899b0, marginBottom '16px'. **Text (V49): "Sign up online, or book a call first."** |
| **GlowPT modal description `<p>`** | `modal__text`, no inline overrides. **Text as of V46.** |
| Modal feature list wrapper `<div>` | marginBottom '24px' |
| Modal feature row `<div>` | flex, alignItems 'flex-start', gap '10px', marginBottom '12px' (last '0') |
| Modal feature check `<span>` | #60a5fa, 700, flexShrink 0, lineHeight '1.5', aria-hidden |
| Modal feature text `<span>` | Inter, '15px', #f0e6d3, lineHeight '1.5' |
| GlowPT modal footer `<div>` | borderTop, paddingTop '24px', textAlign 'center' |
| GlowPT modal price `<p>` | Playfair 700, '27.7px', #60a5fa, lineHeight '1.45', marginBottom '18px' |
| Modal price descriptor `<span>` | fontSize '20px' |
| **GlowPT self-serve `<a>` (FIRST, V49)** | **`btn btn--ghost`, href `https://glowpt.app/onboard`, target `_blank`, rel `noopener noreferrer`, padding '10px 20px', fontSize '13px'. No marginTop override — it keeps `.btn`'s inherited 8px.** |
| **GlowPT CTA wrapper `<div>` (V49)** | **marginTop '12px'** — the gap between the two buttons, controlled in one place |
| **GlowPT discovery `<a>` (SECOND, V49)** | **`btn btn--primary`, cal.com, target `_blank`, padding '10px 20px', fontSize '13px', marginTop '0'** (the wrapper owns the gap) |
| Custom Work heading `<h2>` | 'clamp(36px, 5.5vw, 58px)', marginBottom 'clamp(4px, 1.5vw, 10px)', lineHeight '1.2' |
| McKenzie card title `<h3>` | 'clamp(30px, 5vw, 35px)' (white) |
| Case Study `<button>` | marginTop '16px' |
| How It Works heading `<h2>` | 'clamp(36px, 5.5vw, 58px)', marginBottom 'clamp(4px, 1.5vw, 10px)', lineHeight '1.2' |
| Step title wrapper `<div>` | marginBottom '10px', textAlign 'center' |
| Step title `<h3>` | 'clamp(30px, 5vw, 35px)', textAlign 'center' |
| step-stack `<div>` (both) | marginTop '0' |
| Custom Pricing heading `<h2>` | 'clamp(36px, 5.5vw, 58px)', marginBottom 'clamp(4px, 1.5vw, 10px)', lineHeight '1.2' |
| Custom Pricing tier title wrapper `<div>` | marginBottom '6px', textAlign 'center' |
| Custom Pricing tier title `<h3>` | 'clamp(30px, 5vw, 35px)', textAlign 'center' |
| Custom Pricing price line `<p>` | Playfair 700, '27.7px', #60a5fa, marginTop '4px' |
| Custom Pricing whisper `<p>` | Inter, '15px', #8892a4, marginTop '0' |
| About heading `<h2>` | 'clamp(36px, 5.5vw, 58px)', lineHeight '1.1', marginBottom 'clamp(4px, 1.5vw, 10px)' |
| About headshot `<img>` | 120×120, borderRadius '50%', objectFit 'cover', display 'block', **margin '14px auto 10px'**, border '3px solid rgba(96,165,250,0.3)' |
| About card title `<h3>` | marginTop '0', 'clamp(30px, 5vw, 35px)', #ffffff |
| Discovery heading `<h2>` | 'clamp(36px, 5.5vw, 58px)', marginBottom 'clamp(4px, 1.5vw, 10px)', lineHeight '1.2' |
| **Discovery CTA `<a>`** | **marginTop 'clamp(4px, 1vw, 8px)', padding '11px 22px', fontSize '14px'** |
| EmailOption `<p>` | Inter, '15px', #8892a4, marginTop '18px' |
| EmailOption link `<a>` | mailto:david@franklinaisolutions.com; #60a5fa, no underline, 600 |
| Footer `<footer>` | padding '24px 24px 20px', borderTop '1px solid rgba(96,165,250,0.12)', marginTop '0', display 'flex', justifyContent 'center' |
| **Footer brand row `<div>`** | display 'flex', alignItems 'flex-start', gap '4px', **transform 'translateX(-14px)'** — **hand-tuned, CLOSED, do not derive** |
| Footer kite wrapper `<span>` | flexShrink 0, display 'flex' |
| Footer kite | `KiteLogo size={105}` (the **inline** component) |
| **Footer text column `<div>`** | **textAlign 'center'**, marginTop '13.16px' (**block layout — no flex, no `transform`**) |
| **Footer wordmark home link `<a>`** | textDecoration 'none', color 'inherit', **display 'block'** |
| Footer name `<span>` | **display 'block'**, Playfair 700, '32px', #60a5fa, lineHeight 1 (with "AI" #ffffff) |
| Footer "Solutions, LLC" `<span>` | **display 'block'**, Inter 800, '20px', letterSpacing '0.02em', #60a5fa, marginTop '2px', **no `transform`** |
| Footer address `<span>` | **display 'block'**, Inter, '13px', #8892a4, lineHeight 1.5, marginTop '8px', **no `transform`** |
| **Footer copyright `<span>`** | **display 'block'**, Inter, '13px', #8892a4, lineHeight 1.5, **`transform: 'translateX(-3px)'`** — the **only** per-line nudge on the page (V48) |
| **Footer copyright year `<span>`** (nested) | **`marginLeft: '2px'`** — replaces the plain word space after `&copy;` |

---

## CSS / JSX Boundary Rules

**App root:** a single `<div style={{ WebkitTextSizeAdjust: '100%' }}>` wrapping Nav, main, Footer. One property only.

**Footer:** Fully self-contained, inline styles, NO CSS classes. **The text column is block layout, not flex**, every line `display: block`, centered by `text-align`. The **copyright line** additionally carries `translateX(-3px)` and its year sits in a nested span with `marginLeft: '2px'`. **The lockup structure and its `-14px` dial are closed.**

**Nav:** `global.css` classes for layout plus inline overrides. The nav kite no longer uses `.site-nav__logo`.

**Newsletter card (`NewsletterStrip`):** `.section` / `.container` / `.site-card` / `.card-heading` plus inline styles. The card's **only action** is a `.btn`/`.btn--ghost` button opening `NewsletterModal`. **The input and the form's Subscribe button live in the modal.** The input is fully inline-styled. The modal's Subscribe button needs its inline overrides — `marginTop: '0'` and `height`/`minHeight: '44px'` with `boxSizing: 'border-box'` — or it falls out of alignment. **Placeholder styling would require a `global.css` `::placeholder` rule** and is deliberately not added.

**Available card (`AvailableForPractice`):** two products, `.card-heading` / `.card-text` / `.btn` plus inline overrides. Both modals use the modal classes with sublines, bodies, price blocks, and dividers fully inline. `EbookModal`'s Buy button is `btn btn--ghost` with `href="#"`. **`GlowPTModal`'s footer carries TWO anchors (V49): a `btn btn--ghost` to `glowpt.app/onboard` first, then a `btn btn--primary` to cal.com inside a `marginTop: '12px'` wrapper.**

**Custom Work card:** `.card-title` / `.card-text` / `.btn`; `CaseStudyModal` adds `.modal__features` / `.modal__feature` / `.modal__stack`.

**Primary buttons:** all three use `btn btn--primary` plus inline sizing. Do not remove the sizing without setting new explicit sizing.

**Fixes are JSX-only via inline styles.** Avoid `global.css` edits. Public assets go in `public/`.

---

## Process

### In Claude Code

Edit the repo in place. **Read this file first.** (The GlowPT repo is separate for *architecture* — **confirm the working directory before touching anything.** Copy rules do cross; see V49.)

> ## ✍️ EDIT AND PUSH DIRECTLY — NEW, V49
>
> **David's rule, set 2026-08-27: make the change, then run `git commit` and `git push` yourself. Do not hand him a copy-paste command.** This replaces the old "Commit when David says so" and the copy-paste push command that used to close every change.
>
> **Why it changed:** GlowPT's `CLAUDE.md` already said to push directly while this file said the opposite. Same person, same machine, opposite instructions, so every FranklinAI change stopped one step short and waited on a paste. He asked for the two repos to match.
>
> ⚠️ **This governs CODE, not this DOCUMENT.** The V48 rule still stands: **`CLAUDE.md` is not regenerated until David confirms the change actually works on the live site.** Push code freely; still wait on the doc.

**Code maintains this document (V45).** The sequence is fixed:

1. **Read this document and the real files.** Do not touch `CLAUDE.md` yet.
2. **Make the code change** and verify by string checks — old strings at zero, new strings present, no em dashes, no forbidden words. A predicted line count is not a verification (V43). For a **visual** change, measure the rendered result in the browser — **and measure against the reference the eye actually uses**, not a convenient neighbour (V48).
3. **Push the code** (V49: directly, no command handed over).
4. **Wait for David to confirm the change actually works.** (V48)
5. **Then regenerate `CLAUDE.md` whole**, as a separate step, and push it. Bump the version, rewrite the header summary, fold the prior version into "everything else remains in force," add a Change History entry.
6. **Tell David the new version number** and that it needs pasting into the claude.ai project instructions.

**Rules on the regeneration:**

- **Regenerate whole. Never patch.** Write the entire file out, reading the live code as you go. Targeted edits are how a document rots: the GlowPT EMR bullet was recorded as "the eighth" for seven versions and the real eighth went unrecorded, because no pass forced a full read.
- **Record the reasoning, not just the strings.** Most of this document's weight is *why*. Carry those arguments forward verbatim unless a decision actually changed. **A version that reduces to a changelog has failed.**
- **Never write the doc before the push, and never before David confirms.** V46 and V47 were both cut against unverified fixes and both had to be superseded within hours.

**Two rules David set explicitly on 2026-08-23:**

1. **READ `CLAUDE.md` BEFORE MAKING ANY CHANGE.** Not the section you assume is relevant — the document.
2. **DO NOT UPDATE THIS DOCUMENT UNTIL DAVID CONFIRMS THE FIX WORKS.** Verification by measurement is not confirmation. His eyes on the live site are.

### Working across the two repos (V49)

It is legitimate for a session in this repo to edit the GlowPT repo, and it happened on 2026-08-27 for the copy pass. **The conditions:**

- **David asks for it explicitly.** Do not reach across on your own initiative.
- **Read the other repo's `CLAUDE.md` first.** GlowPT has its own house copy rule (statements get sentence case and a period; labels get Title Case and none; no all-caps; AP preposition conventions) and its own push preference.
- **Say plainly which repo each change landed in**, with commit hashes. Bouncing between projects is confusing from the outside, and the confusion is a real cost even when the change is safe.
- **Prefer the GlowPT session for anything touching GlowPT's behavior.** Copy is the safe case because it is self-contained and reversible.

### In claude.ai

**What still lives here:** strategy, positioning, copy decisions, arguing a call through, newsletter drafting, and the **Content Calendar**. Handoff notes into Code are written here. **This document is no longer authored here (V45)** — Code regenerates it; claude.ai receives it as a pasted copy and reads it as spec.

Netlify auto-deploys on push, in both repos. Hard refresh with Cmd+Shift+R. Favicon changes require closing and reopening the tab.

### Handoff notes into Code

A good one **names the repo in its first line**, states the scope and what not to touch, gives exact find/replace strings, says plainly when it supersedes a locked string here, ends with a verification table, and **tells Code to regenerate `CLAUDE.md` after the push** and names the sections that change.

**The note must carry the editorial reasoning, not just the strings (V45).** Code can read the code; it cannot reconstruct why a decision was made, what was rejected, or what must not be reintroduced.

**A predicted line count is an estimate, not a verification, and never a fact for this file (V43).** String checks are the proof. **Any line count here must be measured on the pushed file.**

### Both

**Strategic discussion before code.** David thinks decisions through conversationally first. **Flag conflicts with established decisions proactively rather than executing silently**, then hold the position if the reasoning is sound — **and if David reaffirms, it is his call: execute it in full and record the argument here so it is not re-run.** *(V49's button order is the standing example.)* **"Don't touch nothing else" means strict boundaries.**

**When David says a thing is settled, it is closed.** The footer lockup is the standing example (see Footer). A closed item is not reopened by a clever measurement.

**Document versioning.** Complete drop-in replacement, never a patch, with full change history. Read live code as the source of truth when producing a new version, to catch drift.

**No phantom sources.** Two documents exist in this project: this one and the Content Calendar. The GlowPT/AWS architecture and the legal/entity work are **not** documents here. *(The GlowPT repo's `docs/commercial-handoff.md` is a real file in a real repo, and it is the source for the GlowPT section above.)*

**Dates live in the Content Calendar, not here.** This file has been wrong about Issue 1's ship date twice. **Check the calendar.**

**Secrets.** When giving David a command that could return a secret, redact it in the command itself so it never renders on screen.

---

## Open Items

| Item | Status |
|---|---|
| **Newsletter form wiring** | Blocked on the **Kit form ID** and the **double opt-in setting**. Everything else specced. **Issue 1 ships Sept 1, 2026.** |
| **The e-book itself** | **Unwritten.** Card and modal are live. Rule: write it complete then list it, or take the card down. |
| **E-book checkout provider** | Kit Commerce vs Gumroad. **Decide the merchant-of-record tradeoff, do not default into it.** |
| **GlowPT clinic BAA text** | With the attorney. **Demo data only until it clears.** |
| **GlowPT billing** | No Stripe anywhere. Collection manual. Backlog, unstarted, and it belongs in the GlowPT repo. |
| **GlowPT auto-renewal statutes** | Open with counsel. **No renewal or cancellation claims on either site until answered.** |
| **Click-through vs signature** on the clinic BAA | Undecided. If signature wins, self-serve onboarding gains a manual step and the copy here must reflect it. |

---

## Change History

- **V49** — **GlowPT became a two-door product, and the modal changed to say so.** GlowPT finished its AWS migration and grew a self-serve front door at glowpt.app (automated per-clinic provisioning, click-through BAA with a version stamp, org-level AWS BAA), so a ready owner no longer needs a call to buy. **Four changes to `GlowPTModal`:** a **ghost** "Bring GlowPT to Your Clinic" → `https://glowpt.app/onboard`; the subline **"Clinic subscriptions available." → "Sign up online, or book a call first."**; the two CTAs **re-ordered** self-serve first (**styles deliberately not flipped** — the filled style stays exclusive to the discovery call, and flipping them was proposed and declined); and **bullet 3 gained the no-patient-limit clause**, a true claim that had appeared on neither site. **V44's open item on "flags" is CLOSED** — confirmed live in the clinic dashboard. **Two new standing rules from David:** *copy rules travel with the voice, not the repo* (the forbidden-words list and em-dash ban now bind on glowpt.app, where `treatment rooms` and 22 em dashes were fixed from this session — GlowPT commits `731708f`, `06bbb5b`, `8ce4dad`), and *edit and push directly, never hand over a copy-paste command* (code only; the doc still waits for confirmation). **New sections:** GlowPT (the two-door product, with its marketing constraints and the deliberate 5-vs-8 bullet delta), Copy Rules Travel With the Voice, Working across the two repos, Open Items. **New traps recorded:** the **`$350` decoy** (line ~434 is Monthly Care, an unrelated product at the same price), and the design rule that **bottom is the stronger position in a stacked button pair**, so order and weight are separate levers. `App.jsx` measures **670 lines** on the pushed file.
- **V48** — **The footer copyright line fixed, and the footer lockup closed.** Five code pushes, four reverted. The gap after `©` became a fixed 2px CSS margin; the line carries `translateX(-3px)`, the only per-line nudge on the page, because the hollow `©` beside four solid digits leans the ink ~2.2px right and solving for a balancing gap returns a negative number. `-3px` landed by David's eye. **This partially reverses V31.** The footer lockup is **CLOSED**, with four failed attempts listed so they are not repeated. A verification lesson: the copyright measured "0.00px centered" for three rounds while visibly wrong, because both it and its reference were off the page axis together. A wrong-file trap recorded: `src/components/KiteLogo.jsx` is dead code with a different mark. Two binding process rules: read the document first, and do not regenerate it until David confirms.
- **V47** — **Footer text column rebuilt from a flex column into a plain block**, every line `display: block`, centered by `text-align`. Established the house standard. *(Correct and standing, but it did not fix the copyright, whose problem was optical.)*
- **V46** — A first footer-centering attempt (`alignSelf: 'stretch'` while the column stayed flex) that measured centered in Chromium and still read wrong in Safari; **superseded by V47 and V48.** Also the **GlowPT modal description reworded**, which stands.
- **V45** — **Process change: Claude Code now maintains this document.** Four conditions: regenerate whole never patch; doc written after the push; the handoff note carries reasoning; the repo copy is authoritative.
- **V44** — **Documentation only.** Recorded three live copy changes and two corrections found by reading the file (the EMR bullet sits **seventh**; the real eighth had never been recorded). Opened the "flags" question, **closed in V49**.
- **V43** — **Documentation only.** Added the rule that a predicted line count is never a fact for this file.
- **V42** — **Founder bio rewritten.** Job title gone. New Copy Rule banning job titles/employers/present-tense employment facts.
- **V41** — **Three copy edits plus four documentation corrections.** E-book modal paragraphs 1 and 2 rewritten to remove two retired framings; the newsletter audience line changed in both locations.
- **V40** — **Newsletter form wiring + success behavior locked (documentation only).**
- **V39** — **Newsletter signup moved into a modal**, reversing V28. New `NewsletterModal`, the site's fourth.
- **V38** — **Available card spacing tightened:** heading→first-product 20px → 12px; between-products 36px → 28px.
- **V37** — **Both product teasers rewritten for parallel structure; the EMR claim moved into the GlowPT modal.**
- **V36** — **Newsletter masthead flipped and de-italicized.**
- **V35** — **Hero label tightened** and a one-word teaser trim.
- **V34** — Available card spacing nudged by eye. Superseded by V38.
- **V33** — Available card spacing refined. Superseded by V34/V38.
- **V32** — **Reconciliation e-book shipped to the Available card**, listed first, opening `EbookModal`.
- **V31** — **Fine-print nudges retired; two dead files deleted.** *(V48: removing the nudge from the **copyright line** was an over-correction and has been restored at `-3px`. `src/components/KiteLogo.jsx` survived this cleanup but is dead code with a different mark.)*
- **V30** — Nav lockup dial returned to `-26px`; both sublines to **Inter 800**.
- **V29** — Wordmark subline font: Playfair Display 400 → Inter 700, a deliberate mixed-type lockup.
- **V28** — Nav/footer lockup micro-adjustments; "Subscribe Free" → "Subscribe for Free". A newsletter modal was considered and declined *(reversed in V39)*.
- **V27** — **"Philadelphia" → "Solutions, LLC"** in the wordmark; the copyright trimmed to "© {year}".
- **V26** — Operator-card rebalance, italic masthead, card-heading `lineHeight: '1.2'`, tighter card padding. First session run in Claude Code. *(The italic masthead was retired in V36.)*
- **V25** — Newsletter card masthead restructure; the Subscribe button pinned to the input's 44px.
- **V24** — Title-case button sweep; The Operator signup built and live; Kit chosen.
- **V23** — Hero headline → **"Built for Your Practice"**; subline → **"Built to Handle HIPAA"**; positioning reversed to niche-forward.
- **V22** — Document correction; the V21 cross-document drift resolved.
- **V21** — Contact email → `david@franklinaisolutions.com`; the Offer Ladder section added.
- **V20** — Four UI refinements: CTAs shrunk ~25%; six card headings unified; About heading renamed.
- **V19** — Business Plan deleted; Content Calendar the only source-of-truth document.
- **V18** — Source-of-truth repointed; Claude Code vs claude.ai added; the GlowPT exercise-plan claim removed.
- **V17** — Fine-print left-nudges added. *(Retired in V31; one restored in V48.)*
- **V16** — Available card divider removed; the GlowPT wrapper `<div>` deleted.
- **V15** — Clarity removed from the site entirely.
- **V14** — GlowPT teaser rewritten verb-first.
- **V13** — Clarity teaser expanded; "in plain English" removed and banned.
- **V12** — Gold retired to the logo bolt only; product names, founder, and McKenzie names moved to white.
