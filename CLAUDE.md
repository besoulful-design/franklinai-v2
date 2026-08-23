# FranklinAI — Project Instructions (Version 48, Current)

> **READ THIS FILE BEFORE MAKING ANY CHANGE TO THIS REPO.** Not "skim the section you think applies" — read it. V48 exists partly because a Code session spent an entire morning re-deriving a footer geometry this document already specified, and shipped four wrong pushes doing it. **If a value looks arbitrary, it is almost certainly hand-tuned and documented. Look it up here first.**

> **Version 48 updates:** **The footer copyright line is fixed, and the footer lockup is closed to further changes.** Five code pushes this session, four of which were mistakes that got reverted; the surviving fix is two small changes to one line. **(1) The gap after the `©` symbol was tightened** from the 3.66px word space to a **fixed 2px CSS margin** (`&copy;<span style={{ marginLeft: '2px' }}>{year}</span>`), which is deterministic in every browser, unlike a thin-space glyph that depends on the font shipping one. **(2) The copyright line carries a deliberate `translateX(-3px)` optical correction** — the only per-line nudge anywhere on the page. **Why it is needed:** the line is geometrically centered to 0.00px, but `©` is a light hollow circle sitting beside four solid digits, so the line's ink weight leans right and the eye reads it as pushed right. Measured, that lean was ~2.2px after the gap was tightened; solving for a gap that would balance it returns a *negative* number, which proves no amount of tightening can finish the job. David landed on `-3px` by eye against the live site (the arithmetic favored `-2px`; his eye wins, and that is recorded as the reason). **This partially reverses V31**, which stripped a `-2px` nudge from this line as a "Philadelphia leftover" — on this one line it was an over-correction, and removing it is what started the complaint that ran for several sessions. **(3) The footer lockup is unchanged and is now explicitly closed:** brand row stays `display: flex`, `alignItems: 'flex-start'`, `gap: '4px'`, **`transform: 'translateX(-14px)'`**, kite on the left, text column holding **all four lines**. Everything tried against that structure this session failed and was reverted; see **Footer** for the list so nobody repeats it. **(4) Two process rules from David, both now binding:** read this document *before* changing anything, and **do not regenerate this document until David has confirmed the fix actually works** — versions were being cut against unverified fixes, which wasted real time. **(5) A wrong-file trap is recorded:** `src/components/KiteLogo.jsx` is **dead code with a completely different viewBox** than the live inline `KiteLogo` in `App.jsx`. Sections updated: title, the read-first banner, header summary (rewritten for V48, V47 folded into "everything else from Version 47," V46/V45/V44/V43/V42/V41/V40 kept as carried-forward paragraphs), Fine-Print Left-Nudges (rewritten — the blanket ban now carries one documented exception), Footer (the lockup closed, the copyright line specced, the failed-attempts list), Horizontal Centering, Design Rules, Kite Logo Mark (the dead-file warning), Brand Kit typography (footer small print), Locked Inline Styles (copyright + year-span rows), Process (both new rules), Change History. `App.jsx` measures **659 lines** on the pushed file.

> **Everything else from Version 47 remains in force:** the footer text column is **block layout, not flex** — a plain block with `textAlign: 'center'` in which every line (`<a>` wordmark link, "FranklinAI", "Solutions, LLC", "franklinaisolutions.com", "© {year}") is `display: 'block'` and centers by `text-align`. This replaced a flex column whose `align-items: center` centered each line by shrink-to-content, which computes differently across engines. **The V47 general rule stands and is now the house standard: center a stack of differently-sized lines by block + `text-align`, never by flex shrink-to-content.**

> **Everything else from Version 46 remains in force:** the **GlowPT modal description** reads **"Patients walk out doing great, then drift off before their plan of care is done. The GlowPT app keeps patients engaged between visits, so more plans of care get completed and the clinic stays full."** (three sentences to two; "GlowPT" became "The GlowPT app"; the old third sentence's clinic-economics point folded into the second's close, dropping "its episodes complete" as billing jargon), and the Copy Rules clarification that the one-word product-name rule governs the token "GlowPT" itself, not whether the word "app" may sit beside it.

> **Everything else from Version 45 remains in force:** the process change that made **Claude Code the maintainer of this document.** The old rule banning Code from editing `CLAUDE.md` is retired, and with it the loop where every push came back to claude.ai for a documentation pass and then went out as a downloaded file David placed by hand in **two** homes — the hand-placement step was the leak that let the repo copy rot to V40 while claude.ai reached V44. **The loop now:** decisions are argued in claude.ai, a handoff note carries the strings *and the editorial reasoning* into Code, Code pushes the code and **then** regenerates `CLAUDE.md` whole as a separate second step and pushes it, and David pastes the finished file into claude.ai. **Four conditions keep it honest:** (1) **regenerate whole, never patch**; (2) **the doc is written last, after the code push, never mid-task** — and as of V48, not until David confirms the change actually worked; (3) **the handoff note must carry the reasoning, not just find/replace strings**; (4) **the repo copy is authoritative and the claude.ai project instructions are the copy that can lag**, with a version-number mismatch as the tell. **What did not move:** the Content Calendar stays a claude.ai document, and strategy, positioning, copy decisions, and newsletter drafting all stay in claude.ai. What moved is the *recording*, not the *deciding*.

> **Everything else from Version 44 remains in force:** the three V44 copy records (the newsletter description's tail reads **"what's working and not working in your practice, and what to do about it"**; the e-book teaser opens **"A downloadable guide"**; the GlowPT teaser reads **"An app for physical therapy patients to stay engaged between visits, with zero work for your therapists."**), the correction that the GlowPT modal's **EMR bullet sits seventh, not eighth**, the full eight-bullet list in live order, and the **open item on bullet 8's word "flags"** — unverified against the finished app, not to be changed until GlowPT is read directly before pilot.
>
> **Also carried forward from Version 43:** the correction that the V42 About bio rewrite changed **no line count**, and the rule that **a predicted line count is an estimate, never a verification, and never a fact for this file** — string checks are the proof, and any line count here must be measured on the pushed file.
>
> **Also carried forward from Version 42:** the two V42 copy edits in `About` — bio paragraph 1 replaced whole (the job title "David is the operations manager for a busy clinical practice" is gone, replaced by **"David has spent decades building systems and processes in both nonprofit and for-profit businesses, across healthcare, research, and education."**), and paragraph 2's opening changed to **"That experience"**; paragraph 2 still closes on **"what a business needs."** The bio names **no job title, no employer, and no niche**, all deliberate, with the four-point guard in **Bio (About Section)**. The **Copy Rule banning any job title, employer, or present-tense employment fact from all site copy** stands.

> **Everything else from Version 41 remains in force:** the **e-book modal's first two body paragraphs** carrying the corrected editorial frame (the retired "nobody decided" accident framing and the retired front-desk-versus-therapist split are both gone), and the **newsletter audience line "For physical therapy practices."** in **both** places it appears; the V41 documentation corrections (**Issue 1 ships September 1, 2026**; the spearhead reads "insurance practice with cash-model marketing"; the e-book's card and modal are live while the book itself is unwritten and the checkout unwired; "cash practice" and "advanced care" are interchangeable and neither is retired); and the V41 standing rules (*copy that appears twice must move twice*, the ban on both retired framings, a handoff note superseding this file for its session, and dates pointing at the Content Calendar).
>
> **Also carried forward from Version 40:** the newsletter form's **wiring and success behavior**, still unbuilt pending the Kit form ID — a **JS-handled submit** (a `fetch`, not a plain form POST); on success **an in-modal confirmation then auto-close**; **confirmation copy tracking Kit's double opt-in setting**; and a **keep-the-modal-open error state** with a brief "Subscribing…" disabled button state, field named `email_address`. Full plan in **Tech Stack**. Also carried forward: the V39 newsletter signup in `NewsletterModal`; the V38 Available-card spacing (heading→product 12px, 28px between products); the V37 parallel product teasers and the EMR modal bullet; the V36 newsletter-masthead flip; the V35 hero-label tightening; the reconciliation e-book's card and modal live as the first product on the Available card ($37, `EbookModal`, ghost "Buy the Guide" at `href="#"`); the two reversed decisions that put it there; four intentional `borderTop` dividers; the four-modal scroll-lock; the "Solutions, LLC" subline in **Inter 800** in nav and footer; the nav lockup dial `translateX(-26px)` and its F-level-with-crossbar `marginTop`; the **footer lockup dial `translateX(-14px)`**; the wordmark lockup carrying the full legal name; the footer copyright trimmed to **"© {year}"**; card-heading `lineHeight: '1.2'`; card padding (`paddingTop: '16px'`, `paddingBottom: '24px'`, sides 40); the "Subscribe for Free" ghost-button label; the `index.html` font import and cleaned meta description; the Subscribe/input 44px alignment fix; the niche-forward front door; all buttons title case with no period; **Kit** as the newsletter platform with Kit Commerce the front-runner for the book's checkout; the legal entity **FranklinAI Solutions LLC**; the Content Calendar as the single canonical content/marketing document; `david@franklinaisolutions.com`; the offer-ladder rungs and prices; the Business Plan deleted; the Claude Code vs claude.ai scoping; the Source File Rule; the stack boundary (site + McKenzie → Supabase; GlowPT → AWS); the F-vs-crossbar method; Clarity retired; gold logo-bolt-only; "in plain English" and "software" banned; no em dashes in site copy; the $350 GlowPT price; the GlowPT exercise-plan exclusion.

---

## CRITICAL: Source File Rule

**Applies when working in claude.ai. In Claude Code, see the next section.**

**Claude must ALWAYS read the current `App.jsx` from the project files before making any code change.** The project file is the single source of truth for the live code. David replaces it routinely after each deploy. Never work from a cached copy, a previous output, or memory of what the file contained in an earlier turn.

> **Known lag:** the project snapshot is hand-replaced, so it can trail the repo by a push. When the snapshot and a just-confirmed push disagree, the push is live and the snapshot is stale — say so rather than silently reverting the newer change.

> **Which copy of this document goes stale, and the tell.** Through V44 the risk ran one way: Code read a repo `CLAUDE.md` several versions behind claude.ai. **As of V45 the risk runs the other way.** Code writes `CLAUDE.md` in the repo, so the repo is current by construction; the **claude.ai project instructions** are the copy that lags until David pastes the new version in. **The tell in either direction is a version-number mismatch**, which is why every regeneration states its version on the first line. *(V46 and V47 were both cut inside single sessions and never pasted into claude.ai; V48 supersedes both and is the one to paste.)*

---

## Working in Claude Code vs claude.ai

**This file lives in two places and is one file.** In claude.ai it is the project instructions. In the repo it is `CLAUDE.md` at the root. Claude Code reads `CLAUDE.md` and the actual files on disk. Same content in both homes, regenerated whole and dropped in both. **Do not maintain a Code-tuned variant and a claude.ai-tuned variant.**

> **Note on the GlowPT repo.** GlowPT is a *different* repo with its own `CLAUDE.md` and its own AWS backend. This file does not govern it. Do not carry FranklinAI-site rules into the GlowPT repo or GlowPT/AWS decisions into this file beyond the one-line stack boundary in Tech Stack. **The GlowPT AWS migration is active, so a Code session opening in the wrong working directory is a live risk.** Any handoff into Code should name the repo in its first line.

**Which tool for which job:**

| Job | Tool |
|---|---|
| Editing `App.jsx`, the repo, anything on disk | Claude Code |
| Strategy, positioning, copy decisions, arguing a call through | claude.ai |
| Regenerating **this file** (`CLAUDE.md`) after a push | Claude Code (V45) |
| Producing or revising the **Content Calendar** | claude.ai |
| Newsletter drafting | claude.ai |

**Rules that apply everywhere, both tools, no exceptions:** the Logo Accent gold rule, all locked inline styles and render values, the three-tier heading system, the Copy Rules and Forbidden Words, the CSS/JSX Boundary Rules, and the Design Rules.

> **When a handoff note and this file disagree, the handoff note wins for that session.** A note written in claude.ai carries a decision made but not yet recorded here. Apply the note, push the code, **then** regenerate this document to record it.

> **The two homes, and which one wins (V45).** `CLAUDE.md` in the repo is where this file is **written**; the claude.ai project instructions are a **copy David pastes in**. The repo is authoritative and the claude.ai copy can lag — an inversion of every version before V45.

---

## Source-of-Truth Documents

**One canonical file lives in this project.**

- **Content Calendar** — the source of truth for all content and marketing. These instructions intentionally contain **no** content/marketing specifics. The calendar is **newsletter-led**: the engine is *The Operator*, every other Tuesday, 400–600 words, free, written Sunday on a phone. **Instagram is the only discovery surface.** **The discovery call is the only door.** The addressee is the **owner**; the office manager is the multiplier who forwards it. The spearhead is **model confusion** ("You're running an insurance practice with cash-model marketing"), across **six spines**: (A) model confusion, (B) plan-of-care completion, (C) team, hiring, retention, and modeling, (D) your numbers, (E) AI in your practice, (F) systems and delegation. The four-video YouTube arc is **parked whole**, not deleted.
  > **Calendar points worth knowing here (do not restate the craft rules — read the calendar):**
  > - **Issue 1 ships September 1, 2026** (moved from August 18, which had moved from August 4). Issue 2 September 15, Issue 3 September 29, Issue 4 October 13. The Instagram carousel drops a few days before September 1. **This file has been wrong about this date twice; check the calendar rather than quoting from here.**
  > - **The spearhead is the front door, not a leash.** Only **D** and **C** are genuinely downstream of it. **E's lift half and F stand on their own feet.** The test is "would an owner in the chair recognize this and lean in," not "does it mention the two models."
  > - **Spine E is two wells: the line and the lift.** The **line** is the HIPAA credibility beat. The **lift** is what AI genuinely does for a practice's operations, none of it touching a patient record. Leading with the line is a **strong default, not a law**.
  > - **Two retired framings the site copy must never reintroduce.** First, **"nobody decided"** — the owner is choosing to run two models, aware of it or not. Second, **the front-desk-versus-therapist split** — the front desk is deep in retention (completion work) and the therapists are asked to sell advanced care too, so both jobs live in every role. The e-book modal carried both until V41.
  > - **"cash practice" and "advanced care" are interchangeable, and neither is retired.**
  > - **"The Operator" is the newsletter's title; the masthead standfirst rule is retired.** The chair voice survives as the writing **register**, not a required masthead line.
  > - **The promise line reads the same on all three surfaces:** issue top, site card and modal, and the Instagram graphic all open on **"For physical therapy practices."** The word-for-word *coupling rule* stays retired, but they are deliberately identical today.
  > - **The readiness ladder** holds: newsletter (cold follow) → email (a self-paced question) → discovery call (the door).
  > **Read the calendar before drafting anything.**

**This file** covers the **website build**: structure, styling, copy rules, locked values, the product facts the site displays, and the **pricing of every rung**. **This file is the authority for everything it states.**

---

## What No Longer Has a Home

The Business Plan also held **market sizing, unit economics, the HIPAA architecture decision, the roadmap, and risks.** None of that moved into this file.

**One thing that used to be homeless now has a home: the offer ladder.** Its **rungs** live in this file; its **marketing strategy** lives in the Content Calendar's *The Ladder* section.

**Still homeless:** the unit economics, the market sizing, the HIPAA architecture reasoning, and the **GlowPT/AWS backend architecture** (which lives in the GlowPT repo). **The legal/entity work** is business territory; only the footer's legal-name display is a site fact.

**The rule that follows: do not reconstruct the homeless parts from memory and do not cite them.** Claude does not have a source for them in this file and should say so plainly.

---

## Business

FranklinAI builds custom web apps and tools for businesses — web apps, internal tools, and client-facing portals — built around a client's specific way of working rather than off-the-shelf templates. Based in Philadelphia, serving local and remote clients.

> **Legal entity (context, not a site-build rule).** Formed as **FranklinAI Solutions LLC** (Pennsylvania); **"FranklinAI"** is the brand / fictitious name. The **wordmark lockup carries the full legal name** — "FranklinAI" over "Solutions, LLC" in both nav and footer. The footer copyright is just "© {year}". The entity, EIN, banking, AWS BAA, and licensing are tracked in conversation, not here.

**Packaged products under the FranklinAI umbrella:**

- **GlowPT** — a daily patient check-in app for physical therapy clinics. Clinics subscribe; their patients use it free. Separately branded (amber/navy, its own logo and URL at glowpt-app.netlify.app), but on the FranklinAI site it wears FranklinAI's navy-and-blue. **Live on the site today.**

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

> **Where the niche is named and where it is not.** The **headline** and the **newsletter card** name the practice. The **GlowPT teaser** names it too, but as of V44 it names **"physical therapy patients"** rather than practices — "physical therapy" still qualifies a scanning visitor, and "with zero work for your therapists" still speaks to the owner who buys it. The **About bio** names it nowhere. **Naming the niche on the headline, the product, and the newsletter is specificity. Naming it in the bio would be a wall.**

## Flagship Example

The McKenzie Arm Care app — a custom patient-care web app with user login, journaling, symptom and progress logs, in-app messaging, an admin portal, smart alerts, and email notifications. Proof-of-work for the custom-build service. Use of this case study has been confirmed with permission.

---

## The Offer Ladder

**The content is free; the ladder is where the money is.**

| Rung | Price | Sells how | On the site | Status |
|---|---|---|---|---|
| **The Operator newsletter** | Free | The free engine. Runs on **Kit**. **Not a product.** | Its own card between Hero and Available | **Live (unwired)** |
| **The reconciliation e-book** | $37, one-time | **Self-serve.** The first paid yes. | **First** product on the Available card; More Info opens `EbookModal` | **Card and modal live; book unwritten, checkout unwired. Both due before Sept 1.** |
| **GlowPT** | $350 / month | Needs the discovery call. The recurring (MRR) product. | Available card (live) | Live |
| **The custom build** | From $10,000 | Needs the discovery call. | Custom Pricing (live) | Live |

**Why the e-book does not break the one door.** The newsletter still closes on the discovery call, every issue — one ask. A self-serve $37 file sells from the shelf and the Instagram posts, **never from the newsletter's close.**

**The e-book, in detail:**

- **Book one is reconciliation** — the spearhead's paid answer. The newsletter gives the diagnosis away free; the book sells the way out.
- **The checkout is external.** **Kit Commerce is the front-runner** (buyer auto-joins the list; processing fee only, ~3.5% + $0.30). **Gumroad and Payhip remain the fallback.** Caveat: Kit is not a merchant-of-record for US sales tax the way Gumroad is. **Provider not finally locked.** Do not assume Stripe for a one-time file sale.
- **Sequence:** written, live, and buyable ahead of Issue 1 (September 1, 2026).
- **Open items:** the checkout provider and URL, **the book itself**, and whether the last chapter points back to the discovery call.

---

## Pricing Model

- **GlowPT** — $350 / month, flat. Displayed inside the GlowPT modal. **If this price changes, two places move together: `App.jsx` and this file.**
- **The reconciliation e-book** — **$37**, one-time, displayed inside `EbookModal` (subline + Playfair price line). Not shown on the card. **If this changes, three places move: `App.jsx` (both spots), this file, and the external checkout.**

**Custom Pricing:**

- **The Build** — From $10,000. Whisper subtext: "New features quoted and built one at a time, as you grow." (Inter 15px, #8892a4, marginTop: '0')
- **Monthly Care** — $350 / month. Optional.

**Order rationale.** The e-book sits first (cheapest paid yes, under the newsletter whose diagnosis it answers), GlowPT second (recurring flagship), then Custom Work as proof, bridging into How It Works and Custom Pricing.

## Primary CTA

"Book a Free Discovery Call" — hero card, GlowPT modal, Discovery CTA card. Never in the nav or footer. **Title case, no period.**

- **Full-page primary buttons (hero + Discovery):** `padding: '11px 22px', fontSize: '14px'`.
- **Modal discovery button:** `padding: '10px 20px', fontSize: '13px'` — deliberately the smallest.

**Scheduling link:** `https://cal.com/david-peterson-40s7lw/free-discovery-call`, opened in a new tab (`target="_blank" rel="noopener noreferrer"`).

## Email Option Under the Discovery CTA

`EmailOption` renders beneath the button on the **Discovery CTA card only**: "Not ready to schedule?" then **"Email"** on its own line (via `<br />`), a mailto to **`david@franklinaisolutions.com`**. **No period.** Inter 15px, #8892a4, link #60a5fa at 600, marginTop 18px. It does NOT appear in the footer, hero, or any modal.

> **Where it sits in the readiness ladder:** the middle rung — a self-paced question for the warm-but-cautious visitor. Keep it at the bottom of the page, framed as "not ready to schedule?"

## Newsletter Card — Live (Unwired)

*The Operator* has **its own card**, between Hero and Available. **Not wired** — the Kit form endpoint gets added later.

> **It is a card, not a "strip."** The React component is still named `NewsletterStrip` (legacy name). Do not reintroduce "quiet strip" sizing.

**It is not a product card, and it never goes on the Available card.**

**The masthead lockup (V36 flip, both lines upright):**

- **Header "Newsletter"** — blue `card-heading`, `clamp(36px, 5.5vw, 58px)`, upright, `lineHeight: '1.2'`, `marginBottom: 'clamp(4px, 1.5vw, 10px)'`.
- **Subhead "The Operator"** — white Playfair sub-title, `clamp(30px, 5vw, 35px)`, 800, `lineHeight: '1.1'`, `marginTop: '0'`, `marginBottom: '14px'`, upright.
- **Description** (Inter 15px, #8892a4, `marginTop: '0'`, `marginBottom: '18px'`, `lineHeight: '1.5'`): **"For physical therapy practices. Delivered every other Tuesday, it takes a clear look at what's working and not working in your practice, and what to do about it."**

> **The audience line appears TWICE.** The identical sentence lives in the card description and the `NewsletterModal` description. **They must always move together.** Verify with `grep -c "For physical therapy practices\."` — expected count **2**.

**The card's action:**
- **One ghost button: "Subscribe for Free"** (`btn btn--ghost`, inline `marginTop: '0'`), opening `NewsletterModal`. **No email field on the card.** **Ghost, not primary**, so the filled style stays exclusive to the discovery call.
- **`NewsletterModal`** — the site's **fourth** modal, mirroring the others (scroll-lock, X close, backdrop close): title **"The Operator"**, subline **"Free to subscribe."** (Inter 14px/600/#8899b0), the **same description line as the card**, then a `borderTop` divider wrapping the form row.
- **The form row:** an email input (cream #f0e6d3 on rgba(255,255,255,0.04), 1px border rgba(96,165,250,0.3), 8px radius, **16px font to prevent iOS zoom**, `WebkitAppearance: 'none'`, flex `1 1 220px`, maxWidth 280px, 44px tall) and the ghost Subscribe button.
- **The 44px alignment fix:** `height`/`minHeight: '44px'`, `boxSizing: 'border-box'`, `display: 'inline-flex'`, centering, and **`marginTop: '0'`** (cancels `.btn`'s `margin-top: 8px`). Keep all of them.

> **The email field lives in a modal (V39 — reverses V28).** A bold Subscribe button is the visual magnet, so many visitors reach for the button first; with an inline field that was a dead click. **Keep the modal. Do not re-propose the inline field unless David asks.**

## Tech Stack

React + Vite, plain CSS (no Tailwind), Netlify, GitHub. Supabase for backend and auth where needed.

**Newsletter platform: Kit.** The form lives inside `NewsletterModal` and is **still unwired**.

> **Newsletter wiring plan — locked V40:**
> - **JS-handled submit, not a plain form POST.** A plain POST to `https://app.convertkit.com/forms/{FORM_ID}/subscriptions` navigates away and destroys the modal. Use a `fetch` (or Kit's v3 API / React embed). **The field must be named `email_address`.**
> - **On success: confirm in the modal, then auto-close** (~2s), X available sooner.
> - **Confirmation copy tracks Kit's double opt-in setting** — **"Almost there. Check your email to confirm."** if on (Kit's default), **"You're in."** if off. **No em dashes, no forbidden words.**
> - **On error: keep the modal open** with a gentle inline message; the button takes a brief disabled **"Subscribing…"** state.
>
> **A small, self-contained JSX addition.** No structural change to the card or modal.

**The e-book's checkout is an external service** — Kit Commerce front-runner, Gumroad/Payhip fallback. Not part of the React app.

> **Stack boundary.** This document governs the **FranklinAI marketing site** and **McKenzie Arm Care**, both on **Supabase**. **GlowPT's backend is migrating to AWS** and lives in its own repo. **site + McKenzie → Supabase; GlowPT → AWS.** This note is the boundary only, never the design.

## Repo

github.com/besoulful-design/franklinai-v2

## Domain

franklinaisolutions.com (owned and active)

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
| Modal CTA button | Inter (btn--primary) | — | padding 10px 20px, fontSize 13px |
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

> **The masthead exception is retired (V36).** **No heading on the page is italic or off-tier.** Do not reintroduce the italic "The Operator" title unless David asks.

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
- No em dashes anywhere in copy, ever
- Dark mode locked via color-scheme: only light
- No step numbers in How It Works
- Gold is reserved for the logo bolt only
- Responsive sizing uses `clamp()` with **absolute pixel values**
- **All buttons are title case with no period.** Section headings take no period.
- **Form controls are pinned to a matching 44px height** with the button's inherited `.btn` top margin zeroed
- **Center a stack of differently-sized lines by block layout + `text-align: center`, never by flex shrink-to-content (V47).** A flex column's `align-items: center` centers each child by shrinking it to its content, which depends on flex intrinsic-width behavior that differs across engines. Make the container a block with `text-align: center` and every line `display: block`. **This is the house standard for any centered stack, not just the footer.**
- **Geometric centering is not always optical centering (V48).** A line whose ink is unevenly weighted — a light hollow glyph beside solid ones, for instance — can measure 0.00px centered and still read as off-centre. **Verify centering against the reference the eye uses**, and if a line is geometrically centered but still looks wrong, the remedy is an explicit, documented optical correction, not a re-derivation of the layout around it. See Footer.
- **Copy that appears twice must move twice.** Two strings are duplicated by design: the newsletter description (card + modal) and the "Subscribe for Free" label (card + modal).

---

## Kite Logo Mark — Locked SVG

> **WRONG-FILE TRAP — read before editing the mark (V48).** There are **two** `KiteLogo` definitions in this repo and they are **not** the same drawing. The **live** one is defined **inline at the top of `src/App.jsx`** (viewBox `62 10 101 240`, width `size * 101/240`). The file **`src/components/KiteLogo.jsx` is DEAD CODE** — nothing imports it, and it carries a completely different mark (viewBox `0 0 220 270`, width `size * 220/270`, plus blueprint grid lines). **Edit the inline one in `App.jsx`.** Editing the components file changes nothing on the site and will send you chasing a phantom. *(V31 deleted the dead `Nav.jsx`/`Footer.jsx` and noted `src/components/` "holds only `KiteLogo.jsx`," which read as though that file were live. It is not. Deleting it is a reasonable future cleanup.)*

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

> The footer brand-row `translateX(-14px)` dial is horizontal only and does not affect this math. The V47/V48 footer changes are horizontal or per-line; **the vertical math is untouched and must stay that way.**

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

**The blanket ban stands, with a single named exception.** Through V30, a per-line `transform: 'translateX(-2px)'` shifted four text lines a hair left — the nav and footer "Solutions, LLC" sublines, the footer "franklinaisolutions.com" line, and the footer "© {year}" line. It had been tuned for the old "Philadelphia" city line. **V31 removed all four.**

| Line | Nudge |
|---|---|
| Nav "Solutions, LLC" | none |
| Footer "Solutions, LLC" | none |
| Footer "franklinaisolutions.com" | none |
| **Footer "© {year}"** | **`translateX(-3px)` — deliberate optical correction (V48)** |

**Do NOT add a per-line `translateX` to any line other than the copyright.** If a subline looks off-center, first fix the *centering method* (block + `text-align`), and only reach for an optical correction when the line is provably centered and still reads wrong.

> **Why the copyright line is the exception, and why V31 was over-broad there.** The line is geometrically centered to **0.00px** against the wordmark. But `©` is a light hollow circle beside four solid digits, so its ink weight sits right of the geometric center — measured at roughly **2.2px** even after the gap was tightened. Solving for a gap that would balance it returns a **negative** number, which is the proof that no tightening can fix it: the imbalance is in the glyph weights, not the space. So the residual is corrected with an explicit nudge on that line alone. **V31 stripping the `-2px` from this line was an over-correction**, and it is very likely what produced the recurring "the copyright isn't centered" complaint that ran for several sessions afterward. **Landed at `-3px` by David's eye against the live site** — the arithmetic favored `-2px` (leaving +0.19px) and `-3px` slightly overshoots to −0.81px on paper, but sub-pixel math does not model how a hollow glyph actually reads, and his eye is the authority here.

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
> 3. **Moving the fine print out of the column into its own page-centered block below the lockup** — this changes the design David wants and was rejected on sight.
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
> **(a) The gap after `©` is a fixed 2px CSS margin, not a word space.** The markup is `&copy;<span style={{ marginLeft: '2px' }}>{year}</span>` — the plain space (3.66px in Inter at 13px) is gone. A fixed margin renders identically in every browser; a thin-space character would depend on the font shipping that glyph, which is exactly the kind of cross-engine variance this footer has already suffered enough of. **Do not put the plain space back.**
>
> **(b) The line carries `translateX(-3px)`, the only per-line nudge on the page.** It is geometrically centered to 0.00px, but the hollow `©` beside four solid digits leans the ink right by ~2.2px. See **Fine-Print Left-Nudges** for the full reasoning and why no gap value can fix it. **This moves the copyright line only. Do not add a nudge to any other line, and do not compensate for it anywhere else.**

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
- **Teaser** (`card-text`, `marginBottom: '0'`): **"A downloadable guide for owners running two business models in one building, an insurance practice and a cash practice, and making them work together."** *(V44 changed "A short guide" → "A downloadable guide," stating the format at the point of interest and matching the modal's "yours to download.")*
- **Button:** "More Info" (btn--ghost, marginTop 16px) → `EbookModal`

**Product 2 — GlowPT (SECOND):**
- **Title** (same treatment, marginTop 28px, marginBottom 10px): "GlowPT"
- **Teaser** (`card-text`, `:last-of-type`): **"An app for physical therapy patients to stay engaged between visits, with zero work for your therapists."** *(V44. The subject moved from the practice to the **patient**, and "keep patients engaged" became "stay engaged," putting the agency on the patient. **The buyer is still the clinic** — the closing clause is the line that speaks to the owner.)*
- **Button:** "More Info" (btn--ghost, marginTop 16px) → `GlowPTModal`

**EbookModal:** Scroll-locked, mirrors `GlowPTModal`.
- **Title** (`modal__title`, marginTop 6px): **"What Your Practice Actually Sells"**
- **Subline** (Inter 14px/600/#8899b0, marginBottom 16px): **"A self-serve guide. $37, yours to download."**
- **Body — three `modal__text` paragraphs (1 and 2 rewritten in V41; 3 unchanged):**
  1. *"Your whole team is being asked to sell advanced care and get patients to the end of their plan of care at the same time. That's not a marketing problem. You're running two business models in one building, an insurance practice and a cash practice, and they're pulling against each other."*
  2. *"You didn't set out to run two businesses, but you chose every piece that built the second one. The tactics arrived built for a business you don't own, and none of them came with a label. So the team gets mixed signals about what the practice is driving at, and every patient feels the seams."*
  3. *"This guide walks you through the fix: decide what your practice actually is, then say it in one sentence your whole team can repeat. Not a tactic, not a tool. The one thing that lets everything else line up behind it."*
  > **What V41 fixed, and why it must not come back.** The old text carried **two retired framings**: the departmental split (the front desk is deep in retention, which is completion work, and the therapists sell advanced care too) and the accident framing (the owner is choosing this; every tactic was a call he made). Paragraph 1 is now lifted from Issue 1's finished hook. **Do not reintroduce either framing anywhere in site copy.**
- **Footer** (borderTop hairline, paddingTop 24px, centered): **"$37"** (Playfair 700, 27.7px, blue, no "/ month") then a **ghost** "Buy the Guide" (`padding: '10px 20px', fontSize: '13px'`, `href="#"` placeholder).

**GlowPT Modal:** Scroll-locked. Title "GlowPT" (marginTop 6px); subline "Clinic subscriptions available."; the description; **eight** feature lines; price $350 / month; CTA "Book a Free Discovery Call" (`padding: '10px 20px', fontSize: '13px'`).

- **Description paragraph (V46):** **"Patients walk out doing great, then drift off before their plan of care is done. The GlowPT app keeps patients engaged between visits, so more plans of care get completed and the clinic stays full."** *(Three sentences to two; "GlowPT" → "The GlowPT app"; the old third sentence's economics folded into the second's close, dropping "its episodes complete" as billing jargon. The between-visit-engagement → completed-plans-of-care spine is unchanged.)*

**The eight feature lines, in live order (read this before quoting a bullet by number):**

1. "A 30-second daily check-in, with warm encouragement that keeps patients coming back."
2. "A private journal and weekly streaks, in every patient's pocket."
3. "One subscription covers the clinic. Patients join free."
4. "Reaches every patient, not just the ones you can bill remote monitoring on."
5. "More completed plans of care, because engaged patients finish their care."
6. "Zero work for your therapists. No building, no monitoring, no calls."
7. **"Runs alongside any EMR. Nothing to set up, nothing to integrate."** *(V37 called it "the eighth" — it brought the count to eight but sits **seventh**.)*
8. **"A free weekly roster summary and a clinic dashboard to follow activity, trends, and flags."**

> **Open item — verify bullet 8 against the real app before launch.** David believes **GlowPT may no longer use "flags."** **Do not change it yet** — GlowPT is still being built and lives in its own repo. The task: **before GlowPT goes to pilot clinics, read the finished app and reconcile this bullet.** A feature line on a priced product that overstates what ships is the one copy error the site cannot afford. Bullets 1–7 are not in question.

**The exercise-plan exclusion — permanent.** Feature line 2 reads **"A private journal and weekly streaks, in every patient's pocket."** It said "a personal exercise plan" until July 15, 2026. **Do not put that back. GlowPT has no exercise plan and never will.** That exclusion is the wedge separating GlowPT from the HEP tools clinics buy and never use. What it has is a **movement checklist**: a record of what the patient did, not a plan telling them what to do.

### Custom Work

Heading "Custom Work". Title (card-title, white) "McKenzie Arm Care"; two-sentence teaser; **"Case Study"** ghost button (marginTop 16px) → `CaseStudyModal`.

**CaseStudyModal:** Scroll-locked. No "Case Study" label inside. Title "McKenzie Arm Care"; full description; 2-column feature list; tech-stack note "Built with React, Supabase, and deployed on Netlify."

### How It Works

Heading "How It Works" (capital I, always). Three steps: Discovery / Build / Grow. No step numbers. Parallel two-sentence structure. **step-stack `marginTop: '0'`.** Copy stays broadly worded — the umbrella breathing under the niche headline.

### Custom Pricing

Heading "Custom Pricing". Two tiers, **step-stack `marginTop: '0'`**: **The Build** (`pricePrefix: 'From'`, `$10,000`, whisper subtext) and **Monthly Care** (`$350`, `/ month`).

### About (heading reads "Behind FranklinAI")

Heading **"Behind FranklinAI"** — two lines via `<br />`, lineHeight 1.1; "Behind Franklin" blue, **"AI" white**. Component `About()`.
**Headshot:** `public/david.png`, 120px circle, **margin '14px auto 10px'**, 3px border rgba(96,165,250,0.3).
**Name:** "David Peterson" (white), then two bio paragraphs, **both rewritten in V42**. Read **Bio (About Section)** before changing a word.

### Discovery CTA

Heading **"Let's Build"**. Copy: "Every project starts with a conversation. Tell us what you need or what's not working, and we'll figure out what to build." CTA "Book a Free Discovery Call" (`marginTop: 'clamp(4px, 1vw, 8px)', padding: '11px 22px', fontSize: '14px'`), `<EmailOption />` beneath — the **only** place it appears.

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

- No em dashes anywhere, ever
- No "software" (use "web apps and tools" or "apps")
- Avoid "in plain English" (and similar) — it can read as excluding non-native English speakers
- Tone: warm, plain-spoken, builder-to-business-owner. No brochure language, no consultant register.
- All section headings title case, **no period**
- **The hero trust subline "Built to Handle HIPAA" is title case with no period.**
- **All buttons are title case with no period**, primary and ghost alike
- The "Email" link has **no period** and points to **david@franklinaisolutions.com**
- Modal feature lines end with periods
- **GlowPT is always one word, capital G and PT.** It may be named plainly as **"the GlowPT app"** in running copy — the one-word rule governs the token "GlowPT" itself, not whether "app" may sit beside it.
- FranklinAI is always one word, capital F and capital AI; the "AI" renders white wherever the wordmark appears. The lockup carries "Solutions, LLC" in blue. The footer copyright is just "© {year}".
- **The newsletter card copy is: header "Newsletter", subhead "The Operator", description "For physical therapy practices. Delivered every other Tuesday, it takes a clear look at what's working and not working in your practice, and what to do about it."**
- **The newsletter description is duplicated on purpose (card + modal). Any edit changes BOTH.** `grep -c "For physical therapy practices\."` → **2**.
- **Two retired framings are banned from all site copy.** Never write **"nobody decided"** or any wording framing the two models as an accident; and never **split the building into the front desk versus the therapists.**
- **"cash practice" and "advanced care" are interchangeable and neither is retired.** The teaser says "cash practice," the modal says "advanced care," both correct.
- **No job title, employer, or present-tense employment fact anywhere in site copy (V42).** A current role on a company's own site ties the business's identity to a job, expires silently, and undersells the career underneath.
- **Never describe GlowPT as providing an exercise plan or exercise prescription.**
- **The e-book's live copy is locked in `App.jsx` and mirrored in Available.** Name/title, teaser, the three modal paragraphs, subline, "$37", and both button labels are exact. **No em dashes and no forbidden words appear in any of it.**

---

## Forbidden Words in Copy

- "software" (use "web apps and tools" or "apps")
- "in plain English" (and similar)
- "upsell" (it turns patients into targets; say "premium add-ons," "the premium sell," or "advanced care")
- "treatment room" (therapists work on the floor, in the gym, in the open clinic; it reads like a physician's office)
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
> - **It names no job title and no employer.** The old opener tied FranklinAI's identity to a job, went stale silently the moment that job changed, and reduced a decades-long career to one room. **Do not write a current role, employer, or clinic back in.**
> - **It names no niche.** The headline, newsletter card, and GlowPT teaser all name the practice long before a visitor reaches the bio. **Do not "reconcile" the bio to the niche-forward headline.** That has been proposed and rejected.
> - **"Healthcare, research, and education" and "nonprofit and for-profit" are two different axes and stay in separate clauses.** One is a sector list, the other a tax structure. Do not compress them into one list — it implies three parallel categories where there are two, and it is inaccurate.
> - **"That experience" in paragraph 2 depends on paragraph 1.** It read "That same drive" through V41, pointing at a sentence V42 deleted. **If paragraph 1 is ever rewritten, check that paragraph 2's opening still has something to point at.**

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
| GlowPT modal subline `<p>` | Inter, '14px', 600, #8899b0, marginBottom '16px' |
| **GlowPT modal description `<p>`** | `modal__text`, no inline overrides. **Text as of V46 — see Available.** |
| Modal feature list wrapper `<div>` | marginBottom '24px' |
| Modal feature row `<div>` | flex, alignItems 'flex-start', gap '10px', marginBottom '12px' (last '0') |
| Modal feature check `<span>` | #60a5fa, 700, flexShrink 0, lineHeight '1.5', aria-hidden |
| Modal feature text `<span>` | Inter, '15px', #f0e6d3, lineHeight '1.5' |
| Modal footer `<div>` | borderTop, paddingTop '24px', textAlign 'center' |
| GlowPT modal price `<p>` | Playfair 700, '27.7px', #60a5fa, lineHeight '1.45', marginBottom '18px' |
| Modal price descriptor `<span>` | fontSize '20px' |
| **Modal discovery `<a>`** | **padding '10px 20px', fontSize '13px'** |
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
| **Footer copyright `<span>`** | **display 'block'**, Inter, '13px', #8892a4, lineHeight 1.5, **`transform: 'translateX(-3px)'`** — the **only** per-line nudge on the page (V48; deliberate optical correction, see Footer) |
| **Footer copyright year `<span>`** (nested) | **`marginLeft: '2px'`** — replaces the plain word space after `&copy;`; fixed px, not a thin-space glyph |

---

## CSS / JSX Boundary Rules

**App root:** a single `<div style={{ WebkitTextSizeAdjust: '100%' }}>` wrapping Nav, main, Footer. One property only.

**Footer:** Fully self-contained, inline styles, NO CSS classes. **The text column is block layout, not flex**, every line `display: block`, centered by `text-align`. The **copyright line** additionally carries `translateX(-3px)` and its year sits in a nested span with `marginLeft: '2px'`. **The lockup structure and its `-14px` dial are closed — see Footer.**

**Nav:** `global.css` classes for layout plus inline overrides. The nav kite no longer uses `.site-nav__logo`.

**Newsletter card (`NewsletterStrip`):** `.section` / `.container` / `.site-card` / `.card-heading` plus inline styles. The card's **only action** is a `.btn`/`.btn--ghost` button opening `NewsletterModal`. **The input and the form's Subscribe button live in the modal.** The input is fully inline-styled (no CSS class exists for inputs). The modal's Subscribe button needs its inline overrides — `marginTop: '0'` and `height`/`minHeight: '44px'` with `boxSizing: 'border-box'` — or it falls out of alignment. **Placeholder styling would require a `global.css` `::placeholder` rule** and is deliberately not added.

**Available card (`AvailableForPractice`):** two products, `.card-heading` / `.card-text` / `.btn` plus inline overrides. Both modals use the modal classes with sublines, bodies, price blocks, and dividers fully inline. `EbookModal`'s Buy button is `btn btn--ghost` with `href="#"`; `GlowPTModal`'s CTA is `btn btn--primary`.

**Custom Work card:** `.card-title` / `.card-text` / `.btn`; `CaseStudyModal` adds `.modal__features` / `.modal__feature` / `.modal__stack`.

**Primary buttons:** all three use `btn btn--primary` plus inline sizing. Do not remove the sizing without setting new explicit sizing.

**Fixes are JSX-only via inline styles.** Avoid `global.css` edits. Public assets go in `public/`.

---

## Process

### In Claude Code

Edit the repo in place. **Read this file first.** Commit when David says so. (The GlowPT repo is separate — do not cross the streams. **Confirm the working directory before touching anything.**)

**Code maintains this document (V45).** The sequence is fixed:

1. **Read this document and the real files.** Do not touch `CLAUDE.md` yet.
2. **Make the code change** and verify by string checks — old strings at zero, new strings present, no em dashes, no forbidden words. A predicted line count is not a verification (V43). For a **visual** change, measure the rendered result in the browser — **and measure against the reference the eye actually uses**, not a convenient neighbour (V48: a copyright line was verified "0.00px centered" against the wordmark for three rounds while being visibly wrong, because both were wrong together).
3. **Push the code.**
4. **Wait for David to confirm the change actually works.** *(New in V48.)*
5. **Then regenerate `CLAUDE.md` whole**, as a separate step, and push it. Bump the version, rewrite the header summary, fold the prior version into "everything else remains in force," add a Change History entry.
6. **Tell David the new version number** and that it needs pasting into the claude.ai project instructions.

**Rules on the regeneration:**

- **Regenerate whole. Never patch.** Write the entire file out, reading the live code as you go. Targeted edits are how a document rots: the GlowPT EMR bullet was recorded as "the eighth" for seven versions and the real eighth went unrecorded, because no pass forced a full read.
- **Record the reasoning, not just the strings.** Most of this document's weight is *why*. Carry those arguments forward verbatim unless a decision actually changed. **A version that reduces to a changelog has failed.**
- **Never write the doc before the push, and never before David confirms.** V46 and V47 were both cut against unverified fixes and both had to be superseded within hours. That is wasted work and it puts wrong reasoning into the permanent record.

**Two rules David set explicitly on 2026-08-23, after a session that burned a morning:**

1. **READ `CLAUDE.md` BEFORE MAKING ANY CHANGE.** Not the section you assume is relevant — the document. The footer lockup was fully specified here while a session re-derived it from scratch and shipped four wrong pushes.
2. **DO NOT UPDATE THIS DOCUMENT UNTIL DAVID CONFIRMS THE FIX WORKS.** Verification by measurement is not confirmation. His eyes on the live site are.

### In claude.ai

**What still lives here:** strategy, positioning, copy decisions, arguing a call through, newsletter drafting, and the **Content Calendar**. Handoff notes into Code are written here. **This document is no longer authored here (V45)** — Code regenerates it; claude.ai receives it as a pasted copy and reads it as spec.

Every change followed by a single copy-paste push command:

```
cd ~/Downloads/franklinai-v2 && git add . && git commit -m "message" && git push
```

Netlify auto-deploys on push. Hard refresh with Cmd+Shift+R. Favicon changes require closing and reopening the tab.

### Handoff notes into Code

A good one **names the repo in its first line**, states the scope and what not to touch, gives exact find/replace strings, says plainly when it supersedes a locked string here, ends with a verification table and the push command, and **tells Code to regenerate `CLAUDE.md` after the push** and names the sections that change.

**The note must carry the editorial reasoning, not just the strings (V45).** Code can read the code; it cannot reconstruct why a decision was made, what was rejected, or what must not be reintroduced. A note that says *replace A with B, because A framed the owner as a victim of an accident* produces a guard that survives ten versions. **Write that kind.**

**A predicted line count is an estimate, not a verification, and never a fact for this file (V43).** String checks are the proof. **Any line count here must be measured on the pushed file.**

### Both

**Strategic discussion before code.** David thinks decisions through conversationally first; code changes wait for an explicit go-ahead. **Flag conflicts with established decisions proactively rather than executing silently**, then hold the position if the reasoning is sound. **"Don't touch nothing else" means strict boundaries.**

**When David says a thing is settled, it is closed.** The footer lockup is the standing example (see Footer). A closed item is not reopened by a clever measurement.

**Document versioning.** Complete drop-in replacement, never a patch, with full change history. Read live code as the source of truth when producing a new version, to catch drift.

**No phantom sources.** Two documents exist: this one and the Content Calendar. The GlowPT/AWS architecture and the legal/entity work are **not** documents in this project.

**Dates live in the Content Calendar, not here.** This file has been wrong about Issue 1's ship date twice. **Check the calendar.**

**Secrets.** When giving David a command that could return a secret, redact it in the command itself so it never renders on screen.

---

## Change History

- **V48** — **The footer copyright line fixed, and the footer lockup closed.** Five code pushes, four reverted; the surviving fix is two changes to one line. **(1) The gap after `©` became a fixed 2px CSS margin** (`&copy;<span style={{ marginLeft: '2px' }}>{year}</span>`), replacing the 3.66px word space — deterministic in every browser, unlike a thin-space glyph. **(2) The copyright line carries `translateX(-3px)`**, the only per-line nudge on the page: the line is geometrically centered to 0.00px, but the hollow `©` beside four solid digits leans its ink ~2.2px right, and solving for a balancing gap returns a negative number, proving no tightening can fix it. **`-3px` was landed by David's eye against the live site**; the arithmetic favored `-2px`. **This partially reverses V31**, which stripped a `-2px` nudge from this line as a "Philadelphia leftover" — on this line that was an over-correction and the likely origin of the recurring complaint. **(3) The footer lockup is CLOSED.** Four things were tried against it this session and all were reverted: `alignSelf: 'stretch'` on the fine-print spans while the column stayed flex (V46, no effect — the *column* was the flex container); a "derived" `-24.09px` dial replacing the hand-tuned `-14px` (true arithmetic, wrong result, dragged the signature left); moving the fine print out into a page-centered block below the lockup; and removing the dial entirely. **The kite hangs left of the centered text on purpose.** The list is recorded in **Footer** so it is not repeated. **(4) A verification lesson:** the copyright was measured "0.00px centered" against the wordmark for three rounds while visibly wrong, because *both* were off the page axis together — **measure against the reference the eye uses.** **(5) A wrong-file trap recorded:** `src/components/KiteLogo.jsx` is dead code carrying a **different mark** (viewBox `0 0 220 270`) than the live inline `KiteLogo` in `App.jsx` (viewBox `62 10 101 240`); edit the inline one. **(6) Two binding process rules from David:** read this document before changing anything, and do not regenerate it until he confirms the fix works — V46 and V47 were both cut against unverified fixes and superseded within hours. `App.jsx` measures **659 lines** on the pushed file. Sections updated: title, new read-first banner, header summary, Design Rules (optical-vs-geometric centering), Kite Logo Mark (dead-file warning + rendered widths), Horizontal Centering (do-not-derive note), Fine-Print Left-Nudges (rewritten with the one exception), Footer (rewritten and closed), Brand Kit typography, Locked Inline Styles (copyright + nested year span, footer rows), CSS/JSX Boundary, Process (both rules + the measure-against-the-right-reference clause), Change History.
- **V47** — **Footer text column rebuilt from a flex column into a plain block**, every line `display: block`, centered by `text-align` — replacing flex shrink-to-content centering, which computes differently across engines. Established the house standard: **center a stack of differently-sized lines by block + `text-align`.** *(V48 note: this was correct and stands, but it did not fix the copyright, whose problem was optical, not structural.)*
- **V46** — **Two changes.** (1) A first footer-centering attempt: `alignSelf: 'stretch'` + `textAlign: 'center'` on the two fine-print spans while the column stayed flex. It measured centered in Chromium but still read wrong in Safari, because the column was still a flex container; **superseded by V47 and V48.** (2) **GlowPT modal description reworded** to "Patients walk out doing great, then drift off before their plan of care is done. The GlowPT app keeps patients engaged between visits, so more plans of care get completed and the clinic stays full." — three sentences to two, "GlowPT" → "The GlowPT app", dropping "its episodes complete." **This copy change stands.**
- **V45** — **Process change: Claude Code now maintains this document.** The ban on Code editing `CLAUDE.md` is retired, along with the two-home hand-placement loop that let the repo copy rot to V40 while claude.ai reached V44. Four conditions: regenerate whole never patch; doc written after the push; the handoff note carries reasoning; the repo copy is authoritative. The Content Calendar, strategy, positioning, copy decisions, and newsletter drafting stay in claude.ai.
- **V44** — **Documentation only.** Recorded three live copy changes (newsletter description tail in both places; e-book teaser "A downloadable guide"; GlowPT teaser "physical therapy patients to stay engaged") and two corrections found by reading the file (the EMR bullet sits **seventh**, not eighth; the real eighth bullet had never been recorded). New open item: "flags" in bullet 8 may be stale.
- **V43** — **Documentation only.** Corrected the V42 "−1 line" claim (636 before and after; it was a prediction, never measured) and added the rule that a predicted line count is never a fact for this file.
- **V42** — **Founder bio rewritten.** Paragraph 1 replaced whole (the job title is gone, replaced by the decades-and-sectors sentence); paragraph 2's opening became "That experience." New Copy Rule banning job titles/employers/present-tense employment facts from all site copy; four-point guard added in Bio.
- **V41** — **Three copy edits plus four documentation corrections.** E-book modal paragraphs 1 and 2 rewritten to remove two retired framings; the newsletter audience line changed to "For physical therapy practices." in both locations. Corrections: Issue 1 ships September 1, 2026; the spearhead wording; the e-book's honest status; "cash practice" and "advanced care" both stand. New rules: copy that appears twice must move twice; both framings banned; handoff-note precedence; dates point at the Content Calendar.
- **V40** — **Newsletter form wiring + success behavior locked (documentation only).** JS-handled submit (`email_address`); in-modal confirmation then auto-close; copy tracking Kit's double opt-in; keep-open error state with a "Subscribing…" disabled state.
- **V39** — **Newsletter signup moved into a modal**, reversing V28. The card rests as header → subhead → description → one ghost button. New `NewsletterModal`, the site's fourth.
- **V38** — **Available card spacing tightened:** heading→first-product 20px → 12px; between-products 36px → 28px.
- **V37** — **Both product teasers rewritten for parallel structure; the EMR claim moved into the GlowPT modal.** *(V41: the "cash practice replaced advanced care" claim here was wrong. V44: the EMR bullet sits seventh.)*
- **V36** — **Newsletter masthead flipped and de-italicized.** "Newsletter" the blue upright header, "The Operator" the white upright subhead; the V26 masthead exception retired.
- **V35** — **Hero label tightened** (lineHeight 1.3 → 1.1, marginBottom pulled up) and a one-word teaser trim.
- **V34** — Available card spacing nudged by eye. Superseded by V38.
- **V33** — Available card spacing refined for cross-card consistency. Superseded by V34/V38.
- **V32** — **Reconciliation e-book shipped to the Available card**, listed first, opening `EbookModal`; two documented decisions reversed (e-book first; a modal rather than an external jump).
- **V31** — **Fine-print nudges retired; two dead files deleted.** All four per-line `translateX(-2px)` nudges removed; `Nav.jsx`/`Footer.jsx` and their orphaned CSS deleted. *(V48: removing the nudge from the **copyright line** was an over-correction and has been restored at `-3px`. Also, `src/components/KiteLogo.jsx` survived this cleanup but is dead code with a different mark.)*
- **V30** — Nav lockup dial returned to `-26px`; both sublines to **Inter 800**.
- **V29** — Wordmark subline font: Playfair Display 400 → Inter 700, a deliberate mixed-type lockup.
- **V28** — Nav/footer lockup micro-adjustments; "Subscribe Free" → "Subscribe for Free". A newsletter modal was considered and declined *(reversed in V39)*.
- **V27** — **"Philadelphia" → "Solutions, LLC"** in the wordmark; sublines enlarged; the copyright trimmed to "© {year}"; the footer text-column inner pull removed.
- **V26** — Operator-card rebalance, italic masthead, card-heading `lineHeight: '1.2'`, tighter card padding, font-import and meta-description fixes. First session run in Claude Code. *(The italic masthead was retired in V36.)*
- **V25** — Newsletter card masthead restructure; the Subscribe button pinned to the input's 44px; the promise-line coupling retired.
- **V24** — Title-case button sweep; The Operator signup built and live; Kit chosen.
- **V23** — Hero headline → **"Built for Your Practice"**; subline → **"Built to Handle HIPAA"**; positioning reversed to niche-forward; the Tech Stack boundary added.
- **V22** — Document correction; the V21 cross-document drift resolved.
- **V21** — Contact email → `david@franklinaisolutions.com`; the Offer Ladder section added.
- **V20** — Four UI refinements: CTAs shrunk ~25%; responsive hero label margin; six card headings unified; About heading renamed.
- **V19** — Business Plan deleted; Content Calendar the only source-of-truth document.
- **V18** — Source-of-truth repointed; Claude Code vs claude.ai added; the GlowPT exercise-plan claim removed.
- **V17** — Fine-print left-nudges added. *(Retired in V31; one restored in V48.)*
- **V16** — Available card divider removed; the GlowPT wrapper `<div>` deleted.
- **V15** — Clarity removed from the site entirely.
- **V14** — GlowPT teaser rewritten verb-first.
- **V13** — Clarity teaser expanded; "in plain English" removed and banned.
- **V12** — Gold retired to the logo bolt only; product names, founder, and McKenzie names moved to white.
