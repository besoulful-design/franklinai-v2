# FranklinAI — Project Instructions (Version 54, Current)

> **READ THIS FILE BEFORE MAKING ANY CHANGE TO THIS REPO.** Not "skim the section you think applies" — read it. V48 exists partly because a Code session spent an entire morning re-deriving a footer geometry this document already specified, and shipped four wrong pushes doing it. **If a value looks arbitrary, it is almost certainly hand-tuned and documented. Look it up here first.**

> **Version 54 updates:** **Two characters were deleted and nothing else moved. The legal name in the nav and footer lockups is now `FranklinAI Solutions LLC`, with NO comma.** Both lockups previously read "Solutions, LLC"; both now read "Solutions LLC". **Why the no-comma form won:** it is the form used in both attorney-review contract drafts, in glowpt.app's own in-app legal copy (`src/lib/legal.js`), and — the decisive one — in the **AWS management account's Company-name field, which the org-level BAA binds to.** The comma was a display-only variant that existed nowhere the entity is legally named. **David's call, made while adding an entity line to glowpt.app's footer** and finding the two sites disagreed; he chose this site as the one to change, which is correct, because the contracts do not have a comma.
>
> **The change was two text nodes and nothing else.** No style, no structure, no dial. **The nav `-26px`, footer `-14px` and copyright `-3px` transforms are untouched and verified present.** `App.jsx` still measures **674 lines**. **Neither lockup moves, and this was measured rather than assumed:** in both lockups **"FranklinAI" is the widest line and sets the column width** (nav 252.8px vs the subline's 222.6px; footer 160.5px vs 146.9px), so the comma was never load-bearing. Confirmed live by toggling the comma back and forth in the running DOM: **the nav brand box is byte-identical** (left 460.77, right 767.23, width 306.46) and **the footer text column is byte-identical at 160.51px**, which is exactly the "FranklinAI" measurement. Only the subline itself is ~10px (nav) and ~7px (footer) narrower, pulling its own two edges inward by half that. **David then confirmed it by eye across browsers**, which is what closes it. Sections updated: title, header summary (V53 folded into a carried-forward paragraph), Business, Brand Kit colors and typography, Fine-Print Left-Nudges, Nav, Footer, Locked Inline Styles, Working across the two repos, Open Items, Change History.

> **Everything else from Version 53 remains in force:** feature bullet 3 reads **"One subscription covers the clinic and the patients join for free."** **The problem it fixed was a bare "for free" at the end of a clause:** it attaches to whatever the reader last held in mind, and with a `$350` price sitting directly below it, that was the *subscription*. Giving the phrase an explicit subject — *the patients* join for free — pins it. **The general rule this left behind is in Copy Rules: never end a clause on a floating "for free" or "free" where a price is nearby.** **David found this himself**, after being told the same thing when V52 shipped and choosing to keep his wording; he came back to it unprompted minutes later. That produced the standing process rule that **a flagged-and-declined concern is parked in Open Items, not dropped.**

> **Everything else from Version 52 remains in force:** **the two sites' feature bullets are ONE list living in two repos** — eight bullets, word-identical, same order, `features` here and `whatGlowptIs.points` in `glowpt/src/lib/marketing.js`, each carrying a comment naming the other. **The old "glowpt.app carries 5 of the 8, do not reconcile" instruction stays retired and deleted.** The pitch's second sentence is **"More completed plans of care and the clinic stays full."** on all four surfaces, lifted from feature bullet 5 so the lead and the bullet echo **on purpose**. The `$350` decoy sits at **lines 99 and 449** *(re-measured at V54, unmoved)*, and those numbers are a hint rather than an address. The two V52 process rules also stand: **when a rule is reversed, delete the old instruction rather than parking it beside the new one**, and **"settled" belongs to David, not to this document.**

> **Everything else from Version 51 remains in force:** **the GlowPT pitch is two sentences, and the two sites deliberately DIFFER on the first one.** This site says **"The GlowPT app keeps physical therapy patients engaged between visits."**; **glowpt.app carries a shorter first sentence with no niche** ("The GlowPT app engages patients between visits.") because that page is already GlowPT-branded, so the words would be redundant there. **The second sentence is identical on all four surfaces and must stay that way.** **V50's retirement of the niche clause stays REVERSED** — see *Where the niche is named and where it is not*.

> **Everything else from Version 50 remains in force:** the discipline that **the GlowPT pitch is one shared idea across four surfaces**; that **"Zero work for your therapists" survives only as modal bullet 6**; that **the repetition between glowpt.app's hero and its More Info modal is deliberate** and must not be "fixed"; and that the GlowPT-repo `docs/commercial-handoff.md` is the source for GlowPT commercial facts, **with the GlowPT code winning on any disagreement.**

> **Everything else from Version 49 remains in force:** **GlowPT is a two-door product and the modal says so.** The modal carries a **ghost** "Bring GlowPT to Your Clinic" to **`https://glowpt.app/onboard`** in a new tab, above a **filled** "Book a Free Discovery Call"; the subline reads **"Sign up online, or book a call first."**; the buttons are ordered self-serve first with **the styles NOT flipped**, so the filled style stays exclusive to the discovery call site-wide; **feature bullet 3 still states there is no patient limit** *(V52 and V53 both rephrased it; the claim is unchanged)*; V44's open item on bullet 8's word "flags" is closed. The two standing rules from V49 also hold: **copy rules travel with the VOICE, not the repo**, and **edit and push directly in this repo, never hand David a copy-paste command.**

> **Everything else from Version 48 remains in force:** **the footer copyright line is fixed and the footer lockup is closed.** The gap after the `©` symbol is a **fixed 2px CSS margin** (`&copy;<span style={{ marginLeft: '2px' }}>{year}</span>`), deterministic in every browser unlike a thin-space glyph. The copyright line carries a deliberate **`translateX(-3px)`** optical correction, the only per-line nudge anywhere on the page: the line is geometrically centered to 0.00px, but `©` is a light hollow circle beside four solid digits, so the ink weight leans right by roughly 2.2px, and solving for a balancing gap returns a *negative* number, which proves no amount of tightening can fix it. **`-3px` was landed by David's eye against the live site**; the arithmetic favored `-2px`. This partially reverses V31. The footer lockup is **closed**: brand row `display: flex`, `alignItems: 'flex-start'`, `gap: '4px'`, **`transform: 'translateX(-14px)'`**, kite left, text column holding all four lines. **Four things were tried against it and all reverted; the list is in Footer so nobody repeats them.** Both V48 process rules stand: read this document before changing anything, and do not regenerate it until David confirms the fix works.

> **Everything else from Version 47 remains in force:** the footer text column is **block layout, not flex** — a plain block with `textAlign: 'center'` in which every line is `display: 'block'` and centers by `text-align`. **The V47 general rule is the house standard: center a stack of differently-sized lines by block + `text-align`, never by flex shrink-to-content.**

> **Everything else from Version 46 remains in force:** the Copy Rules clarification that the one-word product-name rule governs the token "GlowPT" itself, not whether the word "app" may sit beside it. *(**V46's two-sentence modal description is RETIRED by V50** — the setup sentence "Patients walk out doing great..." is deleted and stays deleted on both sites.)*

> **Everything else from Version 45 remains in force:** the process change that made **Claude Code the maintainer of this document.** Decisions are argued in claude.ai, a handoff note carries the strings *and the editorial reasoning* into Code, Code pushes the code and **then** regenerates `CLAUDE.md` whole as a separate second step. **Four conditions keep it honest:** (1) **regenerate whole, never patch**; (2) **the doc is written last, after the code push**, and as of V48 not until David confirms the change worked; (3) **the handoff note must carry the reasoning, not just find/replace strings**; (4) **the repo copy is authoritative and the claude.ai project instructions are the copy that can lag**, with a version-number mismatch as the tell. The Content Calendar stays a claude.ai document, and strategy, positioning, copy decisions, and newsletter drafting all stay in claude.ai. What moved is the *recording*, not the *deciding*.

> **Everything else from Version 44 remains in force:** the two surviving V44 copy records (the newsletter description's tail reads **"what's working and not working in your practice, and what to do about it"**; the e-book teaser opens **"A downloadable guide"**), and the correction that the GlowPT modal's **EMR bullet sits seventh, not eighth**. **The V44 GlowPT teaser is RETIRED**, replaced in V50 and rewritten in V51 and V52. *(V49 closes V44's open item on bullet 8's word "flags": it is confirmed live in the product.)*
>
> **Also carried forward from Version 43:** the rule that **a predicted line count is an estimate, never a verification, and never a fact for this file** — string checks are the proof, and any line count here must be measured on the pushed file.
>
> **Also carried forward from Version 42:** the two V42 copy edits in `About` — bio paragraph 1 replaced whole, paragraph 2's opening changed to **"That experience"**. The bio names **no job title, no employer, and no niche**, all deliberate, with the four-point guard in **Bio (About Section)**. The **Copy Rule banning any job title, employer, or present-tense employment fact from all site copy** stands.

> **Everything else from Version 41 remains in force:** the **e-book modal's first two body paragraphs** carrying the corrected editorial frame (the retired "nobody decided" accident framing and the retired front-desk-versus-therapist split are both gone), and the **newsletter audience line "For physical therapy practices."** in **both** places it appears; the V41 documentation corrections (**Issue 1 ships September 1, 2026**; the spearhead reads "insurance practice with cash-model marketing"; the e-book's card and modal are live while the book itself is unwritten and the checkout unwired; "cash practice" and "advanced care" are interchangeable and neither is retired); and the V41 standing rules (*copy that appears twice must move twice*, the ban on both retired framings, a handoff note superseding this file for its session, and dates pointing at the Content Calendar).
>
> **Also carried forward from Version 40:** the newsletter form's **wiring and success behavior**, still unbuilt pending the Kit form ID — a **JS-handled submit** (a `fetch`, not a plain form POST); on success **an in-modal confirmation then auto-close**; **confirmation copy tracking Kit's double opt-in setting**; and a **keep-the-modal-open error state** with a brief "Subscribing…" disabled button state, field named `email_address`. Full plan in **Tech Stack**. Also carried forward: the V39 newsletter signup in `NewsletterModal`; the V38 Available-card spacing; the V37 parallel product teasers and the EMR modal bullet; the V36 newsletter-masthead flip; the V35 hero-label tightening; the reconciliation e-book's card and modal live as the first product on the Available card ($37, `EbookModal`, ghost "Buy the Guide" at `href="#"`); four intentional `borderTop` dividers; the four-modal scroll-lock; the **"Solutions LLC" subline in Inter 800** in nav and footer *(comma dropped in V54)*; the nav lockup dial `translateX(-26px)` and its F-level-with-crossbar `marginTop`; the **footer lockup dial `translateX(-14px)`**; the footer copyright trimmed to **"© {year}"**; card-heading `lineHeight: '1.2'`; card padding (`paddingTop: '16px'`, `paddingBottom: '24px'`, sides 40); the "Subscribe for Free" ghost-button label; the `index.html` font import and cleaned meta description; the Subscribe/input 44px alignment fix; the niche-forward front door; all buttons title case with no period; **Kit** as the newsletter platform with Kit Commerce the front-runner for the book's checkout; the legal entity **FranklinAI Solutions LLC**; the Content Calendar as the single canonical content/marketing document; `david@franklinaisolutions.com`; the offer-ladder rungs and prices; the Business Plan deleted; the Claude Code vs claude.ai scoping; the Source File Rule; the stack boundary; the F-vs-crossbar method; Clarity retired; gold logo-bolt-only; "in plain English" and "software" banned; no em dashes in site copy; the $350 GlowPT price; the GlowPT exercise-plan exclusion.

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
>
> **And as of V52, one CONTENT LIST is now shared across the two repos.** The eight GlowPT feature bullets must stay word-identical and in the same order in both. See **The two sites' shared bullet list** below.

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

## Copy Rules Travel With the Voice, Not the Repo — V49

**David's rule, set 2026-08-27.** The **Copy Rules** and **Forbidden Words** in this document bind **anywhere a PT owner reads FranklinAI's words**, including the GlowPT product site and app. They are a property of the voice, not of a folder.

**Why it came up.** glowpt.app shipped copy that broke two FranklinAI rules: the dashboard QR hint said "front desk and **treatment rooms**", and the app carried em dashes throughout. A buyer reads glowpt.app and franklinaisolutions.com in one sitting; they are one house. Worse, "treatment room" is banned *because it is wrong about the buyer's building* — therapists work on the floor, in the gym, in the open clinic — so it does more damage on the product page than it ever could here.

**Fixed 2026-08-27** in the GlowPT repo, from this repo's Code session at David's request, after reading GlowPT's own `CLAUDE.md` first:

- `treatment rooms` → **`treatment areas`**.
- **All 22 user-facing em dashes removed**, across errors, patient encouragement copy, labels, the closed-clinic banner and the patient privacy notice. GlowPT commits `731708f`, `06bbb5b`, `8ce4dad`.
- **Two carve-outs worth knowing, because they generalise:**
  1. **A bare `—` used as an empty-value placeholder is a UI glyph, not prose.** GlowPT's clinic dashboard renders a lone `—` in the Streak column when there is no value. **Six of them survive on purpose. Never fix an em-dash rule with a find-and-replace.**
  2. **A dash used as a LABEL SEPARATOR becomes the middot `·`**, which GlowPT's footer byline already used.
- **The AI prompt must carry the rule or generated text escapes it.** GlowPT's daily patient reflection is written by a model, so no amount of cleaning static strings governs it. Its prompt now ends "Do not use em dashes in your response." **Any future FranklinAI feature that generates user-facing text owes the same instruction.**

> **A later GlowPT session found the same rule had missed a whole directory.** The 2026-08-27 sweep was scoped to `src/`, so the two AWS Lambdas — which write the weekly clinic email and the patient's AI reflection fallback — kept their em dashes for four days. **The generalisable lesson: user-facing copy does not all live in the obvious folder.** Before declaring a copy rule applied anywhere, check the delivery surfaces too, not just the app.

> **Code comments and this document are exempt.** Both are full of em dashes, including this sentence's neighbours. The rule governs shipped strings a visitor can read.

---

## The two sites' shared bullet list — V52

**The eight GlowPT feature bullets are one list living in two repos.** They must stay **word-identical and in the same order** in both:

- **Here:** `features` inside `GlowPTModal`, `src/App.jsx`.
- **There:** `whatGlowptIs.points` in `glowpt/src/lib/marketing.js`.

**Both arrays carry a five-line comment naming the other.** That comment is the only safeguard there is: **nothing enforces the match at build time**, the two files are in different repos, and a session working in one will not see the other unless it is told to look.

**Why this reversed a standing rule.** Through V51 this file recorded the count difference — 5 on glowpt.app, 8 here — as deliberate, on the reasoning that the FranklinAI modal was the fuller pitch and glowpt.app the short version. **David overruled it on 2026-08-30.** His reasoning is simpler and better: a buyer arrives from one site and reads the other, and meeting two different descriptions of the same product makes the product look unsettled. **The three that were missing on glowpt.app are back** — the journal/streaks bullet, the one-subscription bullet, and the remote-monitoring bullet — **and glowpt.app was also reordered to this site's order**, since matching counts with a shuffled order is not actually matching.

> **How to verify the match rather than eyeballing it.** Parse both arrays and compare element by element. Reading two eight-item lists side by side is exactly the task human attention is worst at, and a single reordered pair looks identical at a glance. *(Verified this way at V54: 8 and 8, `IDENTICAL AND SAME ORDER: True`.)*

**What still differs between the two sites, and is still deliberate:** the **first sentence** of the pitch (this site names the niche, glowpt.app does not — see V51), and the fact that glowpt.app's modal carries **a price line and a signup path** this one does not need. **The bullets are no longer on that list of differences.**

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

> **Legal entity (context, not a site-build rule).** Formed as **FranklinAI Solutions LLC** (Pennsylvania); **"FranklinAI"** is the brand / fictitious name. The **wordmark lockup carries the full legal name** — "FranklinAI" over **"Solutions LLC"** in both nav and footer. The footer copyright is just "© {year}".
>
> **⚠️ NO COMMA, as of V54. `FranklinAI Solutions LLC`, never `FranklinAI Solutions, LLC`.** Both lockups carried the comma until 2026-09-01. **The no-comma form is the one that appears everywhere the entity is actually named:** both attorney-review contract drafts in the GlowPT repo, glowpt.app's in-app legal copy (`src/lib/legal.js`), and the **AWS management account's Company-name field, which the org-level BAA binds to.** The comma was display-only and matched nothing. **If a future surface needs the entity name, use the no-comma form and do not reintroduce the comma for typographic taste.**
>
> **The sibling site now names the entity too (V54).** glowpt.app's landing footer carries a second line under its byline: **`© {year} FranklinAI Solutions LLC`**, computed at render. Its byline stays a credit ("A FranklinAI product · Philadelphia") and the new line is the legal name — two lines doing two jobs, the same division this site's footer uses. **Both sites now spell the entity identically.**

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

> **Where the niche is named and where it is not.** The **headline** and the **newsletter card** name the practice. The **About bio** names it nowhere. **Naming the niche on the headline and the newsletter is specificity. Naming it in the bio would be a wall.**
>
> **✅ The GlowPT teaser names the niche, as "physical therapy patients" (restored V51, untouched since).** V50 briefly dropped it in favour of one sentence shared with glowpt.app; V51 accepted that **the two sites read differently here** rather than lengthening glowpt.app's copy to match. **The reasoning, worth keeping:** on glowpt.app the page is already GlowPT-branded, so the words are redundant; on this card the brand name sits in a product stack and is scanned rather than parsed, so the words earn their place. **Both the headline and the GlowPT teaser name the practice.**

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
| **$350 covers the clinic with no patient limit.** Everything is included. | Feature bullet 3 says so. This was true from the start and appeared nowhere until V49. |

### Hard constraints on GlowPT copy

- ⛔ **No renewal or cancellation claims.** Counsel has an open question on **state auto-renewal statutes**, real unaddressed exposure for a product sold across state lines. Do not promise terms ahead of that answer.
- ⛔ **Never put an `@glowpt.app` address in a `mailto:`.** glowpt.app has **no root MX record**; nothing can receive mail there and a mailto bounces silently. The contact address is **`david@franklinaisolutions.com`**, everywhere, both sites.
- ⛔ **Never describe GlowPT as providing an exercise plan or exercise prescription.** See the permanent exclusion under **GlowPT Modal**.

### How the two doors reconcile

The GlowPT handoff note flagged that **no discovery call exists anywhere in the GlowPT repo** and asked for reconciliation. **The answer: there is no conflict.** The activation flip and the discovery call are the same moment wearing different clothes. Both are a human step where the BAA and the money get confirmed.

- The owner who wants to talk first **books the call**, and David flips them after.
- The owner who wants to start **signs up, lands closed, emails David**, and gets flipped after.

**Two doors, one gate, and the gate was already built.** That is why the modal can carry both buttons honestly.

### The known deltas between the two sites — rewritten V52

**The bullet lists are no longer a delta. They are identical: eight bullets, same words, same order, both repos.** See **The two sites' shared bullet list** above for the rule and how to verify it. **The old "glowpt.app carries 5 of the 8, and this must not be reconciled" instruction is RETIRED. Do not reinstate it.**

**What still differs, deliberately:**

1. **The first sentence of the pitch.** This site names the niche ("physical therapy patients"); glowpt.app does not, because that page is already GlowPT-branded. **The second sentence is identical on all four surfaces.** *(V51, still in force.)*
2. **glowpt.app carries the price line and the signup path**; this site carries the price inside the modal footer and links out. That is a difference in *function*, not in how the product is described.
3. **glowpt.app's landing header is deliberately self-sufficient**, because that site is reached by direct URL, search, QR and clinic forwards, not only from here. **Do not thin it on the assumption the visitor read this site first.**

**What stopped differing in V54: the spelling of the legal entity.** Both sites now render **FranklinAI Solutions LLC** with no comma. See **Business**.

> **A thin "handoff-only" FranklinAI modal was proposed and rejected.** Do not re-propose it without reading the GlowPT handoff note first. **Note the reasoning has shifted:** the old defence was that this modal was the fuller pitch. It no longer is — both modals now carry the same eight bullets. **The surviving defence is that a visitor should reach the price and the feature list before they reach a signup link**, which is why the self-serve door is one level in rather than on the card.

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
  >
  > **A related structural note from the GlowPT side (2026-09-01).** That price line is now **two constants rendered as two stacked lines** — `PRICE_LINE` ("$350 per month, per clinic.") and `PATIENTS_FREE_LINE` ("Patients join free.") — because as one string the wrap point was decided by the viewport and stranded "free." alone in iPhone portrait. `PRICE_LINE` is still the §5.1 statement of the amount. **Do not recombine them.**
- **The reconciliation e-book** — **$37**, one-time, displayed inside `EbookModal` (subline + Playfair price line). Not shown on the card. **If this changes, three places move: `App.jsx` (both spots), this file, and the external checkout.**

**Custom Pricing:**

- **The Build** — From $10,000. Whisper subtext: "New features quoted and built one at a time, as you grow." (Inter 15px, #8892a4, marginTop: '0')
- **Monthly Care** — $350 / month. Optional.

> ## ⚠️ THE `$350` DECOY — read before changing GlowPT's price (V49, line numbers re-measured V54)
>
> **`$350` appears TWICE in `App.jsx` and only one of them is GlowPT.**
>
> - **Line 99**, inside `GlowPTModal`'s footer: **this is GlowPT.**
> - **Line 449**, the `Monthly Care` tier in `Pricing()`: **this is the custom build's optional hosting-and-maintenance retainer.** A completely unrelated product that happens to cost the same.
>
> Previous versions of this file said "if the GlowPT price changes, two places move" without warning that a naive grep returns a decoy. **If GlowPT's price ever moves, line 449 must NOT move with it.**
>
> **These line numbers drift every time anything above them changes** (V49 recorded ~95 and ~434; V52's five-line comment above `features` pushed both down; **V54 changed no line counts and both are unmoved**). **Treat them as a hint, not an address — confirm by reading the surrounding function name.**

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

> **The audience line appears TWICE.** The identical sentence lives in the card description and the `NewsletterModal` description. **They must always move together.** Verify with `grep -c "For physical therapy practices\."` — expected count **2**. *(Measured 2 at V54.)*

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
| Accent Blue | #60a5fa — all blues, section headings, links, prices, buttons, logo strokes, "Solutions LLC" |
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

> **GlowPT keeps its own amber/navy brand on glowpt.app and inside the app.** On the FranklinAI site it wears FranklinAI's navy-and-blue. **Do not carry GlowPT amber into this repo, and do not carry FranklinAI blue into that one.** The two brands are deliberately separate; only the *voice* crosses (V49), and as of V52 one shared bullet list.

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
| **Nav "Solutions LLC"** | Inter | 800 | clamp(25.6px, 2.72vw, 31.5px), #60a5fa. **No comma (V54).** |
| Footer name | Playfair Display | 700 | 32px, blue with "AI" white |
| **Footer "Solutions LLC"** | Inter | 800 | 20px, #60a5fa. **No comma (V54).** |
| Footer small print (2 lines) | Inter | 400 | 13px, #8892a4, each `display: block`, centered by the column's `text-align`. **The "© {year}" line additionally carries `translateX(-3px)` — a deliberate optical correction, the only nudge on the page (V48). See Footer.** |
| Email option text | Inter | 400 | 15px, #8892a4, link #60a5fa at 600 |

Google Fonts import (locked, in `index.html`):
`Playfair+Display:ital,wght@0,700;0,800;1,800&family=Inter:wght@400;500;600;700;800`

> **Font-import note:** since V36 nothing on the page is italic, so the `1,800` italic face is unused — left in for now. **The site and the Instagram graphics differ on purpose:** the posts set "The Operator" in **Inter**, the site's subhead stays **Playfair**. Do not "reconcile" them.
>
> ⚠️ **A cautionary tale from the sibling repo, worth knowing here.** glowpt.app's landing page loaded only two instances of its serif (upright-300 and italic-400) and left `fontStyle` unset on the hero. **Safari rendered the hero italic while Chrome rendered it upright**, because `font-style` is inherited and one browser's font-matching landed on the italic face. The fix was an explicit `fontStyle: 'normal'`. **This site's four-instance import makes it less exposed, but the lesson holds: if a rule does not state `fontStyle`, it is one inherited value away from a face you did not choose.**

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
- **Copy that appears twice must move twice.** Two strings are duplicated *within this file* by design: the newsletter description (card + modal) and the "Subscribe for Free" label (card + modal). **A third duplication crosses repos: the GlowPT pitch's second sentence and the eight feature bullets (V52).**
- **When a two-sentence line must break the same way everywhere, make it two elements, not one string (V54, learned on glowpt.app).** A single string wraps wherever the measure happens to fall, so the same copy breaks cleanly at one width and strands a word at another. Two stacked block elements break identically at every width. **This is the same family as the block + `text-align` standard: control the break, do not hope for it.**

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

> **The V54 comma removal did NOT touch either dial, and did not need to (V54).** Both dials were tuned by eye against a subline that carried a comma, so a narrower subline is a fair thing to worry about. **It was measured instead of assumed, and the answer is that neither lockup box moves:** in both, **"FranklinAI" is the widest line and sets the column width** — nav 252.8px vs the subline's 222.6px, footer 160.5px vs 146.9px — so the subline was never what the lockup was sized against. Toggling the comma in the live DOM left the **nav brand box byte-identical** (460.77 → 767.23, width 306.46) and the **footer text column byte-identical at 160.51px**. Only the subline's own edges pull in ~5px (nav) and ~3px (footer) per side. **David confirmed it across browsers.** *(The measuring technique generalises: to prove a text change cannot move a lockup, toggle the string in the running DOM and compare the container's box, not the text's.)*

---

## Fine-Print Left-Nudges — RETIRED except ONE documented exception (V48)

**The blanket ban stands, with a single named exception.** Through V30, a per-line `transform: 'translateX(-2px)'` shifted four text lines a hair left. It had been tuned for the old "Philadelphia" city line. **V31 removed all four.**

| Line | Nudge |
|---|---|
| Nav "Solutions LLC" | none |
| Footer "Solutions LLC" | none |
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
- Name `clamp(40.95px, 4.35vw, 50.4px)` blue with "AI" white; **"Solutions LLC"** (no comma, V54) **Inter 800**, `clamp(25.6px, 2.72vw, 31.5px)`, blue, **no `transform`**
- Responsive sizing via inline `clamp()`, not media queries

> The nav wordmark is still a flex column and has **not** shown the footer's centering problem — its subline sits directly under a single-line wordmark, so there is no differently-sized-sibling shrink-centering to go wrong. If it ever does, apply the block + `text-align` standard here too.

> **The wordmark column is `align-items: flex-start` (in `global.css`), and the name is the widest line**, so the subline can never set the lockup's width. That is why V54's comma removal moved nothing here.

---

## Footer — Fully Self-Contained in App.jsx, and CLOSED

**The footer uses NO CSS classes from `global.css`.** Entirely inline styles. The `global.css` `.site-footer*` rules are dead code.

> ## THE FOOTER LOCKUP IS CLOSED. DO NOT CHANGE IT.
>
> **The structure below is correct, hand-tuned, and settled.** The kite sits on the **left**, and a single text column to its right holds **all four lines** — wordmark, "Solutions LLC", the domain, and the copyright — centered with each other. **Do not restructure it, do not move the fine print out of the column, and do not recompute the `-14px` dial.**
>
> **Everything in this list was tried in one session and reverted.** Do not try them again:
> 1. **`alignSelf: 'stretch'` on the fine-print spans while the column stayed flex** (V46) — no effect, because the *column* was still a flex container.
> 2. **Changing the brand-row dial from `-14px` to a "derived" `-24.09px`** — mathematically defensible, visually wrong; it dragged the whole signature left.
> 3. **Moving the fine print out of the column into its own page-centered block below the lockup** — rejected on sight.
> 4. **Removing the `-14px` dial entirely** so the lockup centered as a unit — same rejection.
>
> **What actually fixed it:** the two per-line changes to the copyright, documented below. Nothing structural.
>
> **V54 changed the TEXT of line 2 and nothing else.** A copy change inside the lockup is not a structural change, and this one was proven not to move the box before it shipped. **The lockup stays closed.**

### Footer Structure

A scaled-down signature (kite 105, name 32px). Kite-to-wordmark gap `4px`.

**Footer outer:** `padding: '24px 24px 20px'`, `borderTop: '1px solid rgba(96, 165, 250, 0.12)'`, `marginTop: '0'`, `display: 'flex'`, `justifyContent: 'center'`.

**Footer brand row:** `display: 'flex'`, `alignItems: 'flex-start'`, `gap: '4px'`, **`transform: 'translateX(-14px)'`**.

**Kite** (left): `KiteLogo size={105}` (the **inline** component), wrapped in `<span style={{ flexShrink: 0, display: 'flex' }}>`, no className.

**Text column** (right — a **plain block**, `textAlign: 'center'`, `marginTop: '13.16px'`, **no flex, no `transform`**). Every line inside is `display: block` and centers by the column's `text-align`:

1. **FranklinAI** — Playfair 700, 32px, blue with "AI" white, inside a `display: block` home link `<a>`. **The widest line at 160.5px, so it sets the column width** *(measured at V54)*.
2. **Solutions LLC** — Inter 800, 20px, blue, `letterSpacing: '0.02em'`, marginTop 2px (inside the same link). **No comma, as of V54.**
3. **franklinaisolutions.com** — Inter 400, 13px, #8892a4, lineHeight 1.5, marginTop 8px. **No transform.**
4. **© {year}** — Inter 400, 13px, #8892a4, lineHeight 1.5, **`transform: 'translateX(-3px)'`**, with the year in a nested span carrying **`marginLeft: '2px'`** and **no literal space** between it and the `&copy;` entity.

> **The copyright line, in full (V48) — both changes are deliberate.**
>
> **(a) The gap after `©` is a fixed 2px CSS margin, not a word space.** The markup is `&copy;<span style={{ marginLeft: '2px' }}>{year}</span>`. A fixed margin renders identically in every browser; a thin-space character would depend on the font shipping that glyph. **Do not put the plain space back.**
>
> **(b) The line carries `translateX(-3px)`, the only per-line nudge on the page.** See **Fine-Print Left-Nudges**. **This moves the copyright line only.**

> **Note the spans are `display: block`, so each one's BOX is the full column width regardless of its text.** A session measuring "did this line get narrower" by reading the span's bounding box will get the column width every time and conclude nothing changed. **Measure the column against the widest line, or measure the text itself.**

No email in the footer.

---

## Scroll Lock on Modals

All four modals (`EbookModal`, `GlowPTModal`, `CaseStudyModal`, `NewsletterModal`) lock page scroll via a `useEffect` setting `document.body.style.overflow = 'hidden'` on mount, restoring on unmount. Each closes on X click or backdrop click.

> **The sibling repo has moved further ahead here.** glowpt.app's three modals now call **one shared `useModal` hook** that locks scroll, closes on **Escape**, **traps focus**, and restores focus to whatever opened the modal, with `role="dialog"` and `aria-modal` on each panel. *(It was `useScrollLock`; it absorbed the other jobs on 2026-08-31.)* **This repo still repeats a scroll-lock-only effect four times and has no Escape key or focus trap.** Not urgent and not a bug, but it is now a real accessibility gap rather than just duplication, and **if a fifth modal ever arrives, port the hook rather than writing a fifth copy.**

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
- **Teaser** (`card-text`, `:last-of-type`): **"The GlowPT app keeps physical therapy patients engaged between visits. More completed plans of care and the clinic stays full."** *(V52 rewrote the second sentence. **Identical to the modal description below.** Two sentences. **Names the niche** (V51). glowpt.app carries a shorter first sentence without the niche, deliberately; **the second sentence is identical on all four surfaces.** The V44 close, "with zero work for your therapists", is still given up and survives as **modal bullet 6**.)*
- **Button:** "More Info" (btn--ghost, marginTop 16px) → `GlowPTModal`

> **The card's teaser string has now moved in V50, V51 and V52. The CTAs have never moved, and must not.** All the GlowPT *buttons* remain inside the modal: a visitor should reach the price and the feature list before they reach a signup link, which is why the self-serve door is one level in. **Do not move it up to the card.**

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

- **Description paragraph (V52):** **"The GlowPT app keeps physical therapy patients engaged between visits. More completed plans of care and the clinic stays full."** *(Two sentences, **identical to the card teaser above**. The V46 setup sentence "Patients walk out doing great, then drift off before their plan of care is done." was deleted in V50 and stays deleted on both sites. **Do not reintroduce it on one site only.** glowpt.app's equivalent opens "The GlowPT app engages patients between visits." with no niche, on purpose.)*

  > **Why the second sentence reads the way it does (V52).** David rewrote "More plans of care get completed and the clinic stays full." into **"More completed plans of care and the clinic stays full."**, lifting the noun phrase straight out of **feature bullet 5** ("More completed plans of care, because engaged patients finish their care."). **The echo between the lead sentence and the bullet is deliberate — do not "vary" it for freshness.** It also drops a passive construction for a noun phrase, which reads faster at the top of a modal.

**The eight feature lines, in live order (read this before quoting a bullet by number).** ⚠️ **This exact list, in this exact order, also lives in `glowpt/src/lib/marketing.js`. Change one, change the other. See The two sites' shared bullet list.**

1. "A 30-second daily check-in, with warm encouragement that keeps patients coming back."
2. "A private journal and weekly streaks, in every patient's pocket."
3. **"One subscription covers the clinic and the patients join for free."** *(V53. **This bullet has now been written three times and the third one is the keeper. Read the whole history before touching it.** V49 wrote "One subscription covers the clinic, no matter how many patients you have. Patients join free." to answer a real objection: **every owner reading "per clinic" is silently doing per-seat math**, because that is how every other tool they buy is priced. V52 cut the defensive "no matter" construction. **V53 fixed a real ambiguity V52 introduced:** ending the clause on a bare **"for free"** let it attach to the subscription rather than the patients, with a `$350` price sitting a few lines below. **Naming the subject — "the patients join for free" — pins it.** The no-patient-limit claim survives in "covers the clinic and the patients". **David caught the ambiguity himself, after being told the same thing when V52 shipped and choosing to keep his wording.**)*
4. "Reaches every patient, not just the ones you can bill remote monitoring on."
5. **"More completed plans of care, because engaged patients finish their care."** *(V52: the pitch's second sentence now opens with this bullet's own noun phrase. Deliberate.)*
6. "Zero work for your therapists. No building, no monitoring, no calls."
7. **"Runs alongside any EMR. Nothing to set up, nothing to integrate."** *(V37 called it "the eighth" — it brought the count to eight but sits **seventh**.)*
8. **"A weekly roster summary and a clinic dashboard to follow activity, trends, and flags."** *(V51 dropped the word "free" so this matches glowpt.app word for word.)* ✅ **V44's open item on the word "flags" is CLOSED (V49):** the live clinic dashboard carries a "Need Attention / flagged" tile and per-patient flag badges ("Inactive", "Low Mood"), verified by looking at the running app. **The bullet is accurate. Bullets 1–7 were never in question.**

**The modal footer — the two CTAs (V49):**

```
──────────────── (borderTop hairline, paddingTop 24px, textAlign center)
        $350 / month
   [ Bring GlowPT to Your Clinic ]   ← btn--ghost  → https://glowpt.app/onboard
   [ Book a Free Discovery Call   ]   ← btn--primary → cal.com
```

- Both are `padding: '10px 20px', fontSize: '13px'`, both `target="_blank" rel="noopener noreferrer"`.
- The **second** button sits in a `<div style={{ marginTop: '12px' }}>` with its own `marginTop: '0'`, so the 12px gap is controlled in one place and the first button keeps `.btn`'s inherited 8px above it. **If the order is ever changed again, the wrapper moves to whichever button is second.**
- **The ghost's label and destination both match glowpt.app's own primary button**, which is a `<Link to="/onboard">`. That is deliberate: identical words landing on a page showing an identical button reads as a dead end. ⚠️ **This is a live cross-repo dependency: if glowpt.app's primary button label ever changes, this one must change with it.**

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
- **⚠️ THE LEGAL ENTITY IS WRITTEN `FranklinAI Solutions LLC`, WITH NO COMMA (V54).** Both lockups carried "Solutions, LLC" until 2026-09-01. The no-comma form matches the contracts, glowpt.app's `src/lib/legal.js`, and the AWS Company-name field the org BAA binds to. **Do not reintroduce the comma anywhere, on either site.**
- **⚠️ NEVER END A CLAUSE ON A FLOATING "FOR FREE" OR "FREE" WHERE A PRICE IS NEARBY (V53).** A trailing "for free" attaches to whatever the reader last held in mind, which on a page carrying a price is usually the thing being sold. **Give it an explicit subject.** GlowPT feature bullet 3 shipped as "...covers the clinic and all its patients **for free**", which read for a beat as the *subscription* being free with `$350` a few lines below; **"...and the patients join for free"** fixes it by naming who is joining. The same trap applies to "included", "at no cost" and "on us".
- **The newsletter description is duplicated on purpose (card + modal). Any edit changes BOTH.** `grep -c "For physical therapy practices\."` → **2**.
- **The GlowPT pitch's second sentence and the eight feature bullets are duplicated ACROSS REPOS (V52). Any edit changes BOTH repos.** `grep -c "More completed plans of care and the clinic stays full"` → **2** here, **1** in `glowpt/src/lib/marketing.js`.
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
| **Nav "Solutions LLC" `<span>`** | Inter, 800, 'clamp(25.6px, 2.72vw, 31.5px)', #60a5fa, lineHeight '1', marginTop '3px', **no `transform`**. **Text carries NO comma (V54).** |
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
| **GlowPT modal description `<p>`** | `modal__text`, no inline overrides. **Text as of V52.** |
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
| **Footer "Solutions LLC" `<span>`** | **display 'block'**, Inter 800, '20px', letterSpacing '0.02em', #60a5fa, marginTop '2px', **no `transform`**. **Text carries NO comma (V54).** |
| Footer address `<span>` | **display 'block'**, Inter, '13px', #8892a4, lineHeight 1.5, marginTop '8px', **no `transform`** |
| **Footer copyright `<span>`** | **display 'block'**, Inter, '13px', #8892a4, lineHeight 1.5, **`transform: 'translateX(-3px)'`** — the **only** per-line nudge on the page (V48) |
| **Footer copyright year `<span>`** (nested) | **`marginLeft: '2px'`** — replaces the plain word space after `&copy;` |

---

## CSS / JSX Boundary Rules

**App root:** a single `<div style={{ WebkitTextSizeAdjust: '100%' }}>` wrapping Nav, main, Footer. One property only.

**Footer:** Fully self-contained, inline styles, NO CSS classes. **The text column is block layout, not flex**, every line `display: block`, centered by `text-align`. The **copyright line** additionally carries `translateX(-3px)` and its year sits in a nested span with `marginLeft: '2px'`. **The lockup structure and its `-14px` dial are closed.**

**Nav:** `global.css` classes for layout plus inline overrides. The nav kite no longer uses `.site-nav__logo`. **`.site-nav__wordmark` is `display: flex; flex-direction: column; align-items: flex-start`** — worth knowing, because it means the subline can never widen the lockup.

**Newsletter card (`NewsletterStrip`):** `.section` / `.container` / `.site-card` / `.card-heading` plus inline styles. The card's **only action** is a `.btn`/`.btn--ghost` button opening `NewsletterModal`. **The input and the form's Subscribe button live in the modal.** The input is fully inline-styled. The modal's Subscribe button needs its inline overrides — `marginTop: '0'` and `height`/`minHeight: '44px'` with `boxSizing: 'border-box'` — or it falls out of alignment. **Placeholder styling would require a `global.css` `::placeholder` rule** and is deliberately not added.

**Available card (`AvailableForPractice`):** two products, `.card-heading` / `.card-text` / `.btn` plus inline overrides. Both modals use the modal classes with sublines, bodies, price blocks, and dividers fully inline. `EbookModal`'s Buy button is `btn btn--ghost` with `href="#"`. **`GlowPTModal`'s footer carries TWO anchors (V49): a `btn btn--ghost` to `glowpt.app/onboard` first, then a `btn btn--primary` to cal.com inside a `marginTop: '12px'` wrapper.**

**Custom Work card:** `.card-title` / `.card-text` / `.btn`; `CaseStudyModal` adds `.modal__features` / `.modal__feature` / `.modal__stack`.

**Primary buttons:** all three use `btn btn--primary` plus inline sizing. Do not remove the sizing without setting new explicit sizing.

**Fixes are JSX-only via inline styles.** Avoid `global.css` edits. Public assets go in `public/`.

---

## Process

### In Claude Code

Edit the repo in place. **Read this file first.** (The GlowPT repo is separate for *architecture* — **confirm the working directory before touching anything.** Copy rules do cross; see V49. One bullet list now crosses too; see V52.)

> ## ✍️ EDIT AND PUSH DIRECTLY — V49
>
> **David's rule, set 2026-08-27: make the change, then run `git commit` and `git push` yourself. Do not hand him a copy-paste command.** This replaces the old "Commit when David says so" and the copy-paste push command that used to close every change.
>
> **Why it changed:** GlowPT's `CLAUDE.md` already said to push directly while this file said the opposite. Same person, same machine, opposite instructions, so every FranklinAI change stopped one step short and waited on a paste. He asked for the two repos to match.
>
> ⚠️ **This governs CODE, not this DOCUMENT.** The V48 rule still stands: **`CLAUDE.md` is not regenerated until David confirms the change actually works on the live site.**

**Code maintains this document (V45).** The sequence is fixed:

1. **Read this document and the real files.** Do not touch `CLAUDE.md` yet.
2. **Make the code change** and verify by string checks — old strings at zero, new strings present, no em dashes, no forbidden words. A predicted line count is not a verification (V43). For a **visual** change, measure the rendered result in the browser — **and measure against the reference the eye actually uses**, not a convenient neighbour (V48).
3. **Push the code** (V49: directly, no command handed over).
4. **Wait for David to confirm the change actually works.** (V48)
5. **Then regenerate `CLAUDE.md` whole**, as a separate step, and push it. Bump the version, rewrite the header summary, fold the prior version into "everything else remains in force," add a Change History entry.
6. **Tell David the new version number** and that it needs pasting into the claude.ai project instructions.

> ⚠️ **V52 and V53 were both cut on David's direct instruction, in the same session as their code, WITHOUT step 4.** He asked for the regenerations explicitly and both were copy strings rather than geometry, which is the low-risk case. **This is an exception, not a new rule.** Step 4 exists because V46 and V47 were both written against unverified visual fixes and both had to be superseded within hours. **Keep waiting on anything visual.**
>
> ✅ **V54 followed the full sequence, step 4 included.** The change touched the lockups, which is the highest-risk area in this repo, so the code was pushed, David checked it across browsers, and only then was this document cut. **That is the intended shape.**

**Rules on the regeneration:**

- **Regenerate whole. Never patch.** Write the entire file out, reading the live code as you go. Targeted edits are how a document rots: the GlowPT EMR bullet was recorded as "the eighth" for seven versions and the real eighth went unrecorded, because no pass forced a full read.
- **Record the reasoning, not just the strings.** Most of this document's weight is *why*. Carry those arguments forward verbatim unless a decision actually changed. **A version that reduces to a changelog has failed.**
- **When a rule is REVERSED, say so loudly and delete the old instruction.** V52 reversed the "do not reconcile the bullet counts" rule, which four earlier versions had reaffirmed. **Leaving a retired rule in place next to its replacement is worse than either one alone** — the next session cannot tell which is live.
- **A version bump for one string is legitimate.** V43 and V44 were documentation-only; V53 changed a single bullet; **V54 deleted two characters.** **The cost of a stale document is higher than the cost of a small version**, and a file that quotes a string the code no longer contains is exactly the rot the whole-regeneration rule exists to prevent.
- **Never write the doc before the push.** V46 and V47 were both cut against unverified fixes and both had to be superseded within hours.

**Two rules David set explicitly on 2026-08-23:**

1. **READ `CLAUDE.md` BEFORE MAKING ANY CHANGE.** Not the section you assume is relevant — the document.
2. **DO NOT UPDATE THIS DOCUMENT UNTIL DAVID CONFIRMS THE FIX WORKS.** Verification by measurement is not confirmation. His eyes on the live site are. *(He waived this for V52 and V53; V54 observed it.)*

### Working across the two repos (V49, extended V52, corrected V54)

It is legitimate for a session in this repo to edit the GlowPT repo, and vice versa. It happened on 2026-08-27 for the copy pass, on 2026-08-30 from the GlowPT side, and on 2026-09-01 from the GlowPT side for the V54 comma. **The conditions:**

- **David asks for it explicitly.** Do not reach across on your own initiative.
- **Read the other repo's `CLAUDE.md` first.** GlowPT has its own house copy rule (statements get sentence case and a period; labels get Title Case and none; no all-caps; AP preposition conventions) and its own push preference.
- **Say plainly which repo each change landed in**, with commit hashes. Bouncing between projects is confusing from the outside, and the confusion is a real cost even when the change is safe.
- **Prefer the GlowPT session for anything touching GlowPT's behavior.** Copy is the safe case because it is self-contained and reversible.

> **⚠️ V52 said a GlowPT session "cannot preview this site." That is TOO STRONG, and V54 previewed it from over there.** The real constraint: **`preview_start` resolves `.claude/launch.json` from the session's own project folder**, so asking for `franklinai-dev` from a GlowPT session silently starts the GlowPT server instead. **The workaround is to add a temporary configuration to the session folder's own `launch.json`** pointing at the other app (`runtimeArgs: ["--prefix", "/Users/mac/Downloads/franklinai-v2", "run", "dev"]`), start it, verify, then **restore the file with `git checkout` and confirm that repo is clean again.** Port 5173 is shared, so stop the other server first.
>
> **Two dead ends, so nobody repeats them:** a `vite build --base=./` opened over `file://` renders **blank**, because ES modules are blocked by CORS on the file protocol; and the Browser pane's screenshot did not follow a scroll down this long page, so the footer had to be brought into view by temporarily setting a negative `document.body.style.marginTop` in the live DOM (vertical only, reverted immediately, horizontal layout untouched).
>
> **Say which verification you actually did.** Build and string checks are not the same as looking at it.

### In claude.ai

**What still lives here:** strategy, positioning, copy decisions, arguing a call through, newsletter drafting, and the **Content Calendar**. Handoff notes into Code are written here. **This document is no longer authored here (V45)** — Code regenerates it; claude.ai receives it as a pasted copy and reads it as spec.

Netlify auto-deploys on push, in both repos. Hard refresh with Cmd+Shift+R. Favicon changes require closing and reopening the tab.

### Handoff notes into Code

A good one **names the repo in its first line**, states the scope and what not to touch, gives exact find/replace strings, says plainly when it supersedes a locked string here, ends with a verification table, and **tells Code to regenerate `CLAUDE.md` after the push** and names the sections that change.

**The note must carry the editorial reasoning, not just the strings (V45).** Code can read the code; it cannot reconstruct why a decision was made, what was rejected, or what must not be reintroduced.

**A predicted line count is an estimate, not a verification, and never a fact for this file (V43).** String checks are the proof. **Any line count here must be measured on the pushed file.**

### Both

**Strategic discussion before code.** David thinks decisions through conversationally first. **Flag conflicts with established decisions proactively rather than executing silently**, then hold the position if the reasoning is sound — **and if David reaffirms, it is his call: execute it in full and record the argument here so it is not re-run.** *(V49's button order is the standing example. V52's bullet-count reversal is the newer one: the doc said "do not reconcile", David said reconcile, and he was right.)*

> **A flagged-and-declined concern is not closed, it is parked (V53).** Bullet 3's "for free" ambiguity was raised when V52 shipped; David kept his wording, and came back to the same objection himself minutes later. **Record such concerns in Open Items rather than dropping them**, so that when the author circles back there is a written account of what the problem was and what the fix would be. That is what made V53 a one-line change instead of a re-derivation.

**When David says a thing is settled, it is closed.** The footer lockup is the standing example (see Footer). A closed item is not reopened by a clever measurement.

> **But "settled" belongs to David, not to this document.** V52 overturned a rule this file had reaffirmed four times. **A rule recorded here is a record of a decision, not a veto over the person who made it.** When David asks for something this file forbids, say what the file says and why, then do what he asks.
>
> **A closed section can still take a copy change (V54).** The footer lockup is closed, and its legal-name line was still edited — because "closed" governs the *geometry*, not every character inside it. **The test is whether the change moves anything.** Prove it does not before you touch a closed area, and say how you proved it.

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
| **🆕 Fictitious-name registration** | **Raised 2026-09-01, not acted on.** Both public sites lead with the brand name "FranklinAI" while the registered entity is FranklinAI Solutions LLC, and PA generally requires a fictitious-name registration to trade publicly under a name that is not the registered one. **Nobody involved is a lawyer and nothing was changed on this basis.** It is a cheap question to add to the attorney engagement that is already open. |
| **🆕 Modal accessibility** | The four modals lock scroll but have **no Escape key and no focus trap**. glowpt.app solved this with a shared `useModal` hook on 2026-08-31. **Port it if a fifth modal arrives, or sooner.** |
| **The GlowPT modal's V52/V53 renders have still not been seen by eye** | **Narrowed at V54.** The **Available card teaser** was rendered and seen on 2026-09-01, so that string is confirmed live. **The modal itself was never opened**, so bullets 3 and 5 and the description paragraph remain build-and-string-verified only. **Open the modal next time anyone is in this repo — it is one click.** |
| ~~Bullet 3's "for free" reading~~ | **✅ CLOSED in V53** by naming the subject: "the patients join for free". |
| ~~The two sites spell the legal entity differently~~ | **✅ CLOSED in V54.** Both now read **FranklinAI Solutions LLC**, no comma. |

---

## Change History

- **V54** — **Two characters deleted from the two most protected elements on the page, and nothing moved.** The nav and footer lockups now read **"Solutions LLC"** instead of "Solutions, LLC". **The no-comma form won because it is the one used everywhere the entity is legally named:** both attorney-review contract drafts, glowpt.app's `src/lib/legal.js`, and the **AWS Company-name field the org BAA binds to.** The comma was display-only. **David's call, made while adding `© {year} FranklinAI Solutions LLC` to glowpt.app's own footer** and finding the two sites disagreed; he chose to change this site, which is right, because the contracts have no comma. **The diff was two text nodes**: no style, no structure, and the `-26px`, `-14px` and `-3px` dials all verified untouched. **Neither lockup moves, and it was measured before it shipped:** "FranklinAI" is the widest line in both (nav 252.8 vs 222.6, footer 160.5 vs 146.9) and sets the column width, and toggling the comma in the live DOM left the nav brand box and the footer text column byte-identical. **David confirmed across browsers before this document was cut — the full six-step process including step 4, unlike V52 and V53.** New rules recorded: **the entity is written with no comma anywhere, on either site**; **a two-sentence line that must break identically everywhere should be two elements, not one string**; **"closed" governs geometry, not every character** — a closed section can take a copy change if you prove it moves nothing. Also corrected: **V52's claim that a GlowPT session cannot preview this site is too strong** — the workaround, and two dead ends, are recorded under *Working across the two repos*. `App.jsx` still measures **674 lines**; the `$350` decoy is unmoved at **99 and 449**. *(This repo: `84f74c9`. Companion GlowPT-repo commits: `b44e8f6`, `ed5c8b7`, `74356c1`.)*
- **V53** — **One string, and a rule worth more than the string.** Feature bullet 3 became **"One subscription covers the clinic and the patients join for free."**, replacing V52's "...and all its patients for free." **A bare "for free" at the end of a clause attaches to whatever the reader last held in mind**, and with `$350` a few lines below that was the subscription, not the patients. **Naming the subject pins it.** The general form is now a Copy Rule: never end a clause on a floating "for free", "free", "included" or "at no cost" where a price is nearby. **David found this himself** after being told the same thing when V52 shipped and choosing to keep his wording, which produced a second new process rule: **a flagged-and-declined concern is parked in Open Items, not dropped**, so circling back costs one line instead of a re-derivation. Also recorded: a version bump for one string is legitimate, because a document quoting a string the code no longer contains is the exact rot whole-regeneration exists to prevent. `App.jsx` measured **674 lines**. ⚠️ **Cut without live-site confirmation, on David's direct instruction — an exception.** *(Companion GlowPT-repo commit: `f57d000`. This repo: `269baa2`.)*
- **V52** — **The two sites' feature bullets became identical, reversing a rule this file had reaffirmed four times.** glowpt.app went from 5 bullets to **8**, word-identical and in the same order as this site's; the "do not reconcile the counts" instruction is **retired and deleted**, not merely superseded. David's reasoning: a buyer reads both surfaces in one sitting and must not meet two descriptions of one product. **Three changes to `App.jsx`:** the card teaser and the modal description both took a rewritten second sentence, **"More completed plans of care and the clinic stays full."** (lifted from feature bullet 5, so the lead and the bullet now echo on purpose); **feature bullet 3 was rewritten**, retiring V49's "no matter how many patients you have" as defensive phrasing while keeping the no-limit claim; and a **five-line comment above `features`** naming the GlowPT repo's twin list, matched by an identical comment there, because nothing enforces the match at build time. **New section: The two sites' shared bullet list.** **New process rules:** when a rule is reversed, delete the old instruction rather than parking it beside the new one; and "settled" belongs to David, not to this document. **The `$350` decoy line numbers moved to 99 and 449** and are now flagged as a hint rather than an address. `App.jsx` measured **674 lines**. *(Companion GlowPT-repo commits: `9b0ead5`, `169e137`. This repo: `27d68d3`, `9068baf`.)*
- **V51** — **The GlowPT pitch became two sentences and the two sites deliberately diverged.** The card teaser and modal description both put the niche back on this site, while glowpt.app keeps a shorter niche-free first sentence because that page is already GlowPT-branded. The second sentence stays identical on all four surfaces. Bullet 8 dropped "free" to match glowpt.app. **Reverses V50's retirement of the niche clause** and **reaffirmed the 5-versus-8 bullet split as deliberate** after a session misread it as drift — *that reaffirmation is itself reversed by V52.* `App.jsx` measured **669 lines**. *(Companion GlowPT-repo commits: `14d512b`, `3008119`.)*
- **V50** — **GlowPT collapsed to ONE sentence across all four public surfaces.** Two strings changed in `App.jsx`: the Available card teaser (retiring the V44 string, which named the niche and closed on "zero work for your therapists") and the GlowPT modal description (retiring the V46 two-sentence version by deleting the "Patients walk out doing great" setup sentence). **David chose repetition over variation deliberately**, having been told first that the hero and modal on glowpt.app would then repeat each other. Retired the *GlowPT teaser names the niche* clause; the headline still did. `App.jsx` measured **669 lines**. *(Companion GlowPT-repo commits: `cf9f7c1`, `d703338`. Also shipped there and NOT governed by this file: an upright `fontStyle` pin on the glowpt.app hero after Safari rendered it italic, and a line on `/onboard` telling a new clinic it starts closed.)*
- **V49** — **GlowPT became a two-door product, and the modal changed to say so.** GlowPT finished its AWS migration and grew a self-serve front door at glowpt.app, so a ready owner no longer needs a call to buy. **Four changes to `GlowPTModal`:** a **ghost** "Bring GlowPT to Your Clinic" → `https://glowpt.app/onboard`; the subline **"Clinic subscriptions available." → "Sign up online, or book a call first."**; the two CTAs **re-ordered** self-serve first (**styles deliberately not flipped**); and **bullet 3 gained the no-patient-limit clause**, a true claim that had appeared on neither site. **V44's open item on "flags" is CLOSED.** **Two new standing rules from David:** *copy rules travel with the voice, not the repo* (GlowPT commits `731708f`, `06bbb5b`, `8ce4dad`), and *edit and push directly, never hand over a copy-paste command*. **New sections:** GlowPT (the two-door product), Copy Rules Travel With the Voice, Working across the two repos, Open Items. **New traps recorded:** the **`$350` decoy**, and the design rule that **bottom is the stronger position in a stacked button pair**. `App.jsx` measured **670 lines**.
- **V48** — **The footer copyright line fixed, and the footer lockup closed.** Five code pushes, four reverted. The gap after `©` became a fixed 2px CSS margin; the line carries `translateX(-3px)`, the only per-line nudge on the page, because the hollow `©` beside four solid digits leans the ink ~2.2px right and solving for a balancing gap returns a negative number. `-3px` landed by David's eye. **This partially reverses V31.** The footer lockup is **CLOSED**, with four failed attempts listed so they are not repeated. A verification lesson: the copyright measured "0.00px centered" for three rounds while visibly wrong, because both it and its reference were off the page axis together. A wrong-file trap recorded: `src/components/KiteLogo.jsx` is dead code with a different mark. Two binding process rules: read the document first, and do not regenerate it until David confirms.
- **V47** — **Footer text column rebuilt from a flex column into a plain block**, every line `display: block`, centered by `text-align`. Established the house standard. *(Correct and standing, but it did not fix the copyright, whose problem was optical.)*
- **V46** — A first footer-centering attempt (`alignSelf: 'stretch'` while the column stayed flex) that measured centered in Chromium and still read wrong in Safari; **superseded by V47 and V48.** Also the **GlowPT modal description reworded**, since retired.
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
- **V27** — **"Philadelphia" → "Solutions, LLC"** in the wordmark; the copyright trimmed to "© {year}". *(The comma this introduced was removed in **V54**; the entity is now written with no comma.)*
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
