# FranklinAI — Project Instructions (Version 46, Current)

> **Version 46 updates:** **Two changes pushed to `App.jsx` (`9b8d819`), plus this documentation pass. No locked style value elsewhere, no price, and no structural rule moved.** **(1) The footer fine print is now centered with `text-align`, not flex shrink-to-content — a cross-browser robustness fix, and the real end of a bug that had been "fixed" more than once.** The "franklinaisolutions.com" and "© {year}" lines had been centered only by the footer text column's `align-items: center`, which centers each bare `<span>` by shrinking it to its own text width and dropping that shrunk box on the column's center line. That renders dead-centered in Chromium but leans on flex intrinsic-width behavior that differs across engines (Safari especially), which is why the copyright kept drifting off-center in some browsers no matter how many times the column centering was re-checked. The fix: the text column gains `textAlign: 'center'`, and each of the two fine-print spans gains `alignSelf: 'stretch'` so it spans the full column width and centers its text by `text-align` — the browser-universal centering method, immune to the flex-shrink quirk. **The wordmark lockup (the `<a>` holding "FranklinAI" / "Solutions, LLC") is untouched**, so the vertical F-vs-crossbar math and the `translateX(-14px)` brand-row dial are unchanged; only the two fine-print lines' centering *mechanism* moved. Verified in-engine before the push: the copyright span now measures the full column width (160.5px, same left edge as the wordmark) with its glyph-center exactly on the wordmark's center — 0.0px offset, identical result to before, but by a mechanism that cannot shrink-mis-center. **(2) The GlowPT modal description was reworded** from "Patients walk out doing great, then drift off before their plan of care is done. GlowPT keeps them engaged between visits, so more of them finish. Completed plans of care are what keep a clinic full and its episodes complete." to **"Patients walk out doing great, then drift off before their plan of care is done. The GlowPT app keeps patients engaged between visits, so more plans of care get completed and the clinic stays full."** — three sentences to two; "GlowPT" became "The GlowPT app" (naming it plainly as the app); and the third sentence's clinic-economics point folded into the second's close, dropping "its episodes complete" (billing jargon a scanning owner does not need). This is the modal's *description paragraph*, not a feature bullet — the eight bullets and the bullet-8 "flags" open item are unchanged. No em dashes, no forbidden words. Sections updated: title, header summary (rewritten for V46, V45 folded into "everything else from Version 45," V44/V43/V42/V41/V40 kept as their carried-forward paragraphs), Footer, Horizontal Centering, Fine-Print Left-Nudges (hardening note), Page Sections (GlowPT Modal description), Locked Inline Styles (footer text column + the two fine-print span rows), Change History.

> **Everything else from Version 45 remains in force:** the process change that made **Claude Code the maintainer of this document.** The old rule banning Code from editing `CLAUDE.md` is retired, and with it the loop where every push came back to claude.ai for a documentation pass and then went out as a downloaded file David placed by hand in **two** homes (the repo and the claude.ai project instructions) — the hand-placement step was the leak that let the repo copy rot to V40 while claude.ai reached V44. **The loop now:** decisions are argued in claude.ai, a handoff note carries the strings *and the editorial reasoning* into Code, Code pushes the code and **then** regenerates `CLAUDE.md` whole as a separate second step and pushes it, and David pastes the finished file into claude.ai. One placement instead of two. **Four conditions keep it honest, and they are not optional:** (1) **regenerate whole, never patch** — the load-bearing rule; the seventh-versus-eighth GlowPT-bullet error survived seven versions because accumulated targeted edits never forced a full read; (2) **the doc is written last, after the code push, never mid-task** — a file being read as spec must not be the file being rewritten in the same breath; (3) **the handoff note must carry the reasoning, not just find/replace strings** — the *why* is the one input Code cannot derive from a diff, and without it this document degrades into a changelog; (4) **the repo copy is authoritative and the claude.ai project instructions are the copy that can lag**, an inversion of every version before V45, with a version-number mismatch as the tell in either direction. **What did not move:** the Content Calendar stays a claude.ai document (not in the repo, no reason for Code to open it), and strategy, positioning, copy decisions, and newsletter drafting all stay in claude.ai. What moved is the *recording*, not the *deciding*.

> **Everything else from Version 44 remains in force:** the three V44 copy records (the newsletter description's tail now reads **"what's working and not working in your practice, and what to do about it"** in both places; the e-book teaser opens **"A downloadable guide"**; the GlowPT teaser reads **"An app for physical therapy patients to stay engaged between visits, with zero work for your therapists."**), the V44 correction that the GlowPT modal's **EMR bullet sits seventh, not eighth**, the full eight-bullet list written out in live order, and the **open item on bullet 8's word "flags"** — unverified against the finished app, not to be changed until GlowPT is read directly before pilot.
>
> **Also carried forward from Version 43:** the V43 correction that the V42 About bio rewrite changed **no line count** (`App.jsx` was 636 lines before that push and 636 after; the "−1 line" figure was a prediction copied from a handoff note, never measured), and the V43 Process rule that **a predicted line count is an estimate, never a verification, and never a fact for this file** — string checks are the real proof, and any line count recorded here must be measured on the pushed file.
>
> **Also carried forward from Version 42:** the two V42 copy edits in the `About` component — bio paragraph 1 replaced whole (the present-tense job title "David is the operations manager for a busy clinical practice" is gone, replaced by **"David has spent decades building systems and processes in both nonprofit and for-profit businesses, across healthcare, research, and education."**), and paragraph 2's opening phrase changed from "That same drive" to **"That experience"** so it points at the decades rather than at a deleted sentence; paragraph 2 otherwise untouched and still closing on **"what a business needs."** The bio names **no job title, no employer, and no niche**, all three deliberate, with the four-point guard in **Bio (About Section)** protecting them. The V42 **Copy Rule banning any job title, employer, or present-tense employment fact from all site copy** stands.

> **Everything else from Version 41 remains in force:** the three V41 copy edits — the **e-book modal's first two body paragraphs** carrying the corrected editorial frame (the retired "nobody decided" accident framing and the retired front-desk-versus-therapist split are both gone; the new opening is lifted from Issue 1's finished hook), and the **newsletter audience line "For physical therapy practices."** in **both** places it appears (the `NewsletterStrip` card description and the `NewsletterModal` description); the V41 documentation corrections (**Issue 1 ships September 1, 2026**; the spearhead reads "insurance practice with cash-model marketing"; the e-book's card and modal are live while the book itself is unwritten and the checkout unwired, both due before September 1; "cash practice" and "advanced care" are interchangeable and neither is retired); and the V41 standing rules (*copy that appears twice must move twice*, the ban on both retired framings in site copy, a handoff note superseding this file for its session, and dates pointing at the Content Calendar rather than being restated here).
>
> **Also carried forward from Version 40:** the newsletter form's **wiring and success behavior**, locked in V40 and still unbuilt pending the Kit form ID — a **JS-handled submit** (a `fetch`, not a plain form POST, which would navigate the browser to Kit's response page and destroy the modal); on success, **an in-modal confirmation then auto-close** after a short delay; **confirmation copy that tracks Kit's double opt-in setting** ("Almost there. Check your email to confirm." if on, Kit's default; a plain "You're in." if off); and a **keep-the-modal-open error state** with a brief "Subscribing…" disabled button state to prevent double sends, with the field named `email_address`. The full plan lives in **Tech Stack**. Also carried forward: the V39 newsletter signup in `NewsletterModal` (the card rests as header → subhead → description → a single "Subscribe for Free" button that opens the modal; the modal carries the "Free to subscribe." note, the description, and the email field); the V38 Available-card spacing (heading→product 12px, a 28px break between the two products); the V37 parallel product teasers and the V37 EMR `GlowPTModal` bullet "Runs alongside any EMR. Nothing to set up, nothing to integrate."; the V36 newsletter-masthead flip ("Newsletter" the blue upright header, "The Operator" the white upright subhead, the masthead/italic exception retired); the V35 hero-label tightening (**"Custom Apps & Tools"** label `lineHeight` **1.1** and `marginBottom` **`clamp(2px, 1vw, 8px)`**); the reconciliation e-book's card and modal live as the first product on the Available card, above GlowPT ($37, self-serve, product name "What Your Practice Actually Sells", a More Info ghost button opening **`EbookModal`** — subline "A self-serve guide. $37, yours to download.", three body paragraphs, $37 price, and a ghost "Buy the Guide" button whose real checkout URL is still pending at `href="#"`); the two **reversed** decisions that put it there — **listed first** (was "below GlowPT") and opening a **modal** (was "links out to an external checkout") — both settled; the two-product Available card spacing (heading→product 12px, title→teaser 10px, teaser→button 16px, and a 28px break between the two products, no rule — V38 values); four intentional `borderTop` dividers (the GlowPT modal footer, the e-book modal footer, the newsletter modal form divider, and the page footer); GlowPT unchanged and second; the four-modal scroll-lock (`EbookModal`, `GlowPTModal`, `CaseStudyModal`, `NewsletterModal`); the V31 removal of all four per-line `translateX(-2px)` fine-print nudges and the deletion of the two dead component files (`src/components/` holds only `KiteLogo.jsx`); the "Solutions, LLC" subline in **Inter 800** (nav + footer synced), blue #60a5fa (nav `clamp(25.6px, 2.72vw, 31.5px)`, footer `20px`) with **no** per-line nudge; the nav lockup dial `translateX(-26px)` with its wordmark dropped so the F sits **level with the kite crossbar** (`marginTop: clamp(13.98px, calc(42.25px - 2.44vw), 19.28px)`); the footer lockup dial `translateX(-14px)`; the wordmark lockup carrying the full legal name — nav and footer read **"FranklinAI" / "Solutions, LLC"**; the footer copyright trimmed to **"© {year}"**; the footer built like the nav (kite + wordmark, one 4px flex gap, no inner text-column pull); card-heading `lineHeight: '1.2'` (About keeps 1.1); tightened card padding (`paddingTop: '16px'`, `paddingBottom: '24px'`, sides 40); the "Subscribe for Free" ghost-button label; the `index.html` font import (`ital,wght@0,700;0,800;1,800` — the italic `1,800` face unused since V36 but retained) and cleaned `<meta name="description">`; the Subscribe/input 44px alignment fix and its `marginTop: '0'` override; the niche-forward front door (headline "Built for Your Practice", subline "Built to Handle HIPAA" as moat/proof); all buttons title case with no period; the newsletter platform **Kit**, with Kit Commerce the front-runner for the e-book checkout; the legal entity **FranklinAI Solutions LLC** with "FranklinAI" as the fictitious name; the Content Calendar as the single canonical content/marketing document; the contact email `david@franklinaisolutions.com`; the named offer-ladder rungs and their prices; the Business Plan deleted; the Claude Code vs claude.ai scoping; the Source File Rule; the stack boundary (site + McKenzie → Supabase; GlowPT → AWS); the F-vs-crossbar vertical-alignment method; Clarity retired from the site; gold logo-bolt-only; "in plain English" and "software" banned site-wide; no em dashes in site copy; the $350 GlowPT price; the GlowPT exercise-plan exclusion.

---

## CRITICAL: Source File Rule

**Applies when working in claude.ai. In Claude Code, see the next section.**

**Claude must ALWAYS read the current `App.jsx` from the project files before making any code change.** The project file is the single source of truth for the live code. David replaces it routinely after each deploy. Never work from a cached copy, a previous output, or memory of what the file contained in an earlier turn. Every code task starts with: read the project file, confirm its current state, copy it to a working directory, then edit, verify, and output.

> **Known lag:** the project snapshot is hand-replaced, so it can trail the repo by a push. When the snapshot and a just-confirmed push disagree, the push is live and the snapshot is stale — say so rather than silently reverting the newer change.

> **Which copy of this document goes stale, and the tell (V45).** Through V44 the risk ran one way: Code read a repo `CLAUDE.md` several versions behind the claude.ai copy. That is exactly what produced V44 — the handoff note asked for two edits V41 and V42 had already recorded, which is the signature of a stale repo read. **As of V45 the risk runs the other way.** Code writes `CLAUDE.md` in the repo, so the repo is current by construction; the **claude.ai project instructions** are now the copy that lags, until David pastes the new version in.
>
> **The tell, in either direction, is a version-number mismatch**, which is why every regeneration states its version in the first line and Code names that version when it hands the file over. In claude.ai, the symptom is a handoff note or a conversation referring to a version higher than the one at the top of these instructions. **When that happens, say so and ask for the current file rather than answering from the older text.**

---

## Working in Claude Code vs claude.ai

**This file lives in two places and is one file.** In claude.ai it is the project instructions. In the repo it is `CLAUDE.md` at the root. Claude Code does not read claude.ai project files; it reads `CLAUDE.md` and the actual files on disk. Same content in both homes. When this document is revised, it is regenerated whole (never patched) and dropped in both places. **Do not maintain a Code-tuned variant and a claude.ai-tuned variant.** Two copies of one spec is the exact failure that forced the Business Plan merge — and then, one version later, the merge's own deletion.

> **Note on the GlowPT repo.** GlowPT is a *different* repo with its own `CLAUDE.md` and its own Claude Code setup, and its backend is on a different path (AWS — see Tech Stack). This file does not govern it. Do not carry FranklinAI-site rules into the GlowPT repo or GlowPT/AWS decisions into this file beyond the one-line stack boundary in Tech Stack. **This matters more than usual right now:** the GlowPT AWS migration is active, so a Code session opening in the wrong working directory is a live risk. Any handoff into Code should name the repo in its first line.

**Which tool for which job:**

| Job | Tool |
|---|---|
| Editing `App.jsx`, the repo, anything on disk | Claude Code |
| Strategy, positioning, copy decisions, arguing a call through | claude.ai |
| Regenerating **this file** (`CLAUDE.md`) after a push | Claude Code (V45) |
| Producing or revising the **Content Calendar** | claude.ai |
| Newsletter drafting | claude.ai |

Moving between them is expected, not a one-way door. Most of what this project needs is talk, not code.

**Rules that are claude.ai-only artifacts:**

- **The Source File Rule** exists because the claude.ai project `App.jsx` is a hand-replaced snapshot that goes stale. In Code the repo is live and Claude reads the real file, so the rule dissolves. Code should still read before editing — that is just competence, not a special rule.
- **The edit workflow** (copy to a working dir → `str_replace` → verify → copy to outputs → present for download → hand over a git push command) is a claude.ai artifact. In Code, edit in place and commit.

**Rules that apply everywhere, both tools, no exceptions:** the Logo Accent gold rule, all locked inline styles and render values, the three-tier heading system, the Copy Rules and Forbidden Words, the CSS/JSX Boundary Rules, and the Design Rules.

> **When a handoff note and this file disagree, the handoff note wins for that session.** A note written in claude.ai carries a copy or content decision that has been made but not yet recorded here, so it will name strings this file still locks. That is expected and correct.
>
> **What Code does with that, as of V45:** apply the note, push the code, **then** regenerate this document whole to record it, as a separate second step. The old rule ("leave this document alone; it gets rewritten in claude.ai") is **retired**. What survives from it is the reason it existed: *the spec Code is reading must not be the file Code is rewriting mid-task.* Sequencing the doc after the push preserves that, which is why the order is not negotiable. See Process.

> **The two homes, and which one wins now (V45).** `CLAUDE.md` in the repo is where this file is **written**. The claude.ai project instructions are a **copy David pastes in** afterward. So the repo is authoritative and the claude.ai copy is the one that can lag — **an inversion of every version before V45**, where the reverse was true. When the two disagree, the repo wins, and whoever notices should say so plainly rather than working from the older text. **Still one file, still no variants:** do not maintain a Code-tuned version and a claude.ai-tuned version.

---

## Source-of-Truth Documents

**One canonical file lives in this project.**

- **Content Calendar** — the source of truth for all content and marketing. These instructions intentionally contain **no** content/marketing specifics; they live in that file, and it says so itself in its own header. The calendar is **newsletter-led**: the engine is *The Operator*, every other Tuesday, 400–600 words, free, written Sunday on a phone. **Instagram is the only discovery surface** (LinkedIn and Facebook groups were deliberately cut — a founder who does not live on a surface cannot sustain it). The newsletter does depth. **The discovery call is the only door.** The addressee is the **owner**; the office manager is the multiplier who forwards it. The spearhead is **model confusion** ("You're running an insurance practice with cash-model marketing"), across **six spines**: (A) model confusion, (B) plan-of-care completion, (C) team, hiring, retention, and modeling, (D) your numbers, (E) AI in your practice, (F) systems and delegation. The four-video YouTube arc is **parked whole**, not deleted.
  > **Calendar points worth knowing here (do not restate the craft rules — read the calendar):**
  > - **Issue 1 ships September 1, 2026** (moved from August 18, which had itself moved from August 4). The every-other-Tuesday rhythm is unbroken and the calendar slides with it: Issue 2 September 15, Issue 3 September 29, Issue 4 October 13. The Instagram carousel drops a few days before September 1. **This file has been wrong about this date twice; check the calendar rather than quoting from here.**
  > - **The spearhead is the front door, not a leash.** Model confusion is the sharpest opening argument and the diagnosis a new reader winces at first. It is not the through-line every issue must return to. Only **D** and **C** are genuinely downstream of it. **E's lift half and F stand on their own feet.** The test for whether an issue belongs is "would an owner in the chair recognize this and lean in," not "does it mention the two models."
  > - **Spine E is two wells: the line and the lift.** The **line** is the HIPAA credibility beat (someone on your team is already pasting patient information into a chatbot; do not). The **lift** is the deep well — what AI genuinely does for a practice's operations (the SOP, the job posting, the week-in-one-page, the message rewritten four times, the dense policy made readable), none of it touching a patient record. Leading with the line is a **strong default, not a law**.
  > - **Two retired framings the site copy must never reintroduce (V41 removed the last of both).** First, **"nobody decided"** — the owner is choosing to run two models, aware of it or not, and every tactic that built the second one was a call he made. Second, **the front-desk-versus-therapist split** — the front desk is deep in retention, which is completion work, and the therapists are asked to sell advanced care too, so both jobs live in every role. The e-book modal carried both until V41. Do not write either one back in.
  > - **"cash practice" and "advanced care" are interchangeable, and neither is retired** (corrected in V41). Use whichever fits the sentence. The site's e-book teaser says "cash practice," the modal says "advanced care," and both are correct.
  > - **"The Operator" is the newsletter's title; the masthead standfirst rule is retired.** The old rule that "the name never travels alone" and that "Notes from the ops chair, for people who run physical therapy practices" must accompany the name word-for-word is **retired**. The chair voice survives as the writing **register**, not as a required masthead line. On the site, the newsletter is presented as a card: **"Newsletter"** (header) → **"The Operator"** (subhead) → a description line.
  > - **The promise line now reads the same on all three surfaces (V41).** The issue-top promise, the site's newsletter card and modal, and the Instagram graphic all open on **"For physical therapy practices."** The old word-for-word *coupling rule* stays retired — nothing forces them to move together in future — but they are deliberately identical today, so a change to one is a decision about all three, not a silent edit in one.
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

> **Legal entity (context, not a site-build rule).** The company is formed as **FranklinAI Solutions LLC** (filed in Pennsylvania), and **"FranklinAI"** is the brand / fictitious name (DBA). As of V27 the **wordmark lockup itself carries the full legal name** — it reads "FranklinAI" over "Solutions, LLC" in both the nav and the footer (the "Solutions, LLC" line in blue). The footer copyright is now just "© {year}", since repeating the legal name there was redundant. The entity, EIN, business banking, AWS BAA, fictitious-name filing, and Philadelphia Commercial Activity License are business tasks tracked in conversation, not here (see What No Longer Has a Home). The site-facing facts are the wordmark legal name and the "Based in Philadelphia" positioning; the city no longer appears in the wordmark.

**Packaged products under the FranklinAI umbrella, alongside the custom-build service:**

- **GlowPT** — a daily patient check-in app for physical therapy clinics. Clinics subscribe; their patients use it free. GlowPT is separately branded (amber/navy, Fraunces + DM Sans, its own logo and URL at glowpt-app.netlify.app), but on the FranklinAI site it wears FranklinAI's navy-and-blue, not its own amber. It is a FranklinAI product shown in FranklinAI's voice. **Live on the site today.**

- **The reconciliation e-book** — a one-time, self-serve product ($37) titled **"What Your Practice Actually Sells"**, that solves the problem the newsletter diagnoses: how to run one clinic that is really two business models in one building, an insurance practice and a cash practice, and make them work together. **The card and the modal are live on the site today** as the **first** product on the Available card (above GlowPT), opening its own `EbookModal`. **The book itself is not written yet and the checkout is not wired** — the in-modal "Buy the Guide" button is a placeholder link (`href="#"`). Both are due before Issue 1 ships September 1. See The Offer Ladder and Available.

  > **Say this precisely.** The *shelf listing* is live; the *product* is not. V40 and earlier called the e-book "Live," which overstated it and contradicted the Content Calendar. The Calendar's standing rule governs the endgame: **write it complete, then list it** — and if the file does not exist by ship day, the honest move is to take the card down until it does, not to leave a listed product nobody can buy.

Everything else FranklinAI offers is **custom-build work** — scoped after a discovery call, priced from $10,000 (see Custom Pricing). GlowPT is the easy-yes on-ramp; custom builds are the scale-up; the e-book is the first paid step, sitting above GlowPT on the shelf as the cheapest yes.

> **Clarity is retired from the site and the product lineup.** It does not appear on the site. Do not re-add a Clarity product, modal, teaser, or pricing block unless David explicitly asks.
>
> **The nuance, from the Content Calendar:** Clarity is parked rather than dead. Spine D ("Your Numbers") is a free, zero-build demand test — if owners reply asking *can you just do this for me*, that is real signal. **The teaching survives in writing; the product stays unbuilt and off the site until the replies knock the wall down.** Nothing about that changes the site today.

### Positioning note — niche-forward front door

**FranklinAI is an umbrella company and always has been. The front door is niche-forward: the headline speaks to the practice, and the umbrella breathes one layer down.** This is deliberate, not a drift — David's content is all practice-focused, so the door matches the content. **This is the design. Do not "reconcile" it back to a broad headline, and do not treat the niche headline as a tension to be softened.**

- **Headline: "Built for Your Practice"** (no period; two lines, "Built for" / "Your Practice"). Speaks directly to the lead market — physical therapy and clinical practices.
- **Subline: "Built to Handle HIPAA"** (title case, no period). It **proves** the niche the headline names: the one sentence almost no competing builder can honestly say, answering the exact skeptical question ("can you be trusted with patient data?") a practice owner asks right after the headline. **Moat, not marker.** It is the only place HIPAA appears on the page.
- **The umbrella breathes below the fold.** The About bio is now fully broad (V42): it names no niche, no employer, and no job title, and it closes on **"what a business needs"** — the honesty valve, where a non-practice prospect sees they are still welcome. How It Works and the Discovery copy stay broadly worded ("your business," "what to build"). The hero label **"Custom Apps & Tools"** stays generic because it describes the capability, which is broad.

The hero's job is still **cold traffic**: a sharper niche hook is expected to convert the lead and warm market better than a broad one, and warm mixed-industry contacts already get the full explanation from David directly. David still takes custom work from any business. **Healthcare is the lead market and the front door; the umbrella is still the business, one layer down.** Do **not** add a sentence that walls the umbrella off (e.g. "healthcare only").

> **Where the niche is named and where it is not.** The **headline** and the **newsletter card** name the practice because that is the lead market and the newsletter's exact audience. The **GlowPT teaser** names the niche too, but as of V44 it names **"physical therapy patients"** rather than practices — the words "physical therapy" still do the qualifying work for a scanning visitor, and the teaser's closing clause ("with zero work for your therapists") is what still speaks to the owner who actually buys it. So the front-door logic holds; only the teaser's subject moved. The **About bio** names it nowhere (V42): it leads with decades of operations across healthcare, research, and education, and closes on "what a business needs." Naming the niche up top is the front door; keeping the bio broad is the honesty valve. Both on purpose. **Naming the niche on the headline, the product, and the newsletter is specificity. Naming it in the bio would be a wall.** By the time a visitor reaches the bio the page has qualified him three times, so the bio has no re-qualifying left to do.

## Flagship Example

The McKenzie Arm Care app — a custom patient-care web app with user login, journaling, symptom and progress logs, in-app messaging with the clinician, an admin portal, smart alerts, and email notifications. This is proof-of-work for the custom-build service and is featured in the "Custom Work" section with a modal for the full case study. Use of this case study has been confirmed with permission.

---

## The Offer Ladder

**The content is free; the ladder is where the money is.** Three surfaces do the finding and the trusting (Instagram, the newsletter, the discovery call). The rungs below do the earning. **This file is the authority for the rungs and their prices. The ladder's marketing strategy — how the book sells, the spine-to-book series map — lives in the Content Calendar's *The Ladder* section.**

**The rungs, cheapest first:**

| Rung | Price | Sells how | On the site | Status |
|---|---|---|---|---|
| **The Operator newsletter** | Free | The free engine. Names the problem, builds the list. Runs on **Kit**. **Not a product** — not on the Available card. | Its own prominent card between Hero and Available (built, live, unwired) | **Live (unwired)** |
| **The reconciliation e-book** | $37, one-time | **Self-serve.** Reader clicks, pays, downloads — no discovery call. The first paid yes. | **First** product on the Available card (above GlowPT); More Info opens `EbookModal`, with the Buy button inside the modal | **Card and modal live; book unwritten, checkout unwired. Both due before Sept 1.** |
| **GlowPT** | $350 / month | Needs the discovery call. The recurring (MRR) product. | Available card (live) | Live |
| **The custom build** | From $10,000 | Needs the discovery call. The big one. | Custom Pricing (live) | Live |

**Why the e-book does not break the one door.** The newsletter still closes on the discovery call, every issue, every time — one ask. A self-serve $37 file that checks out on its own is not a second ask inside an issue; it sells from the shelf and from the Instagram posts, off to the side, **never from the newsletter's close.** The one door holds.

**The e-book, in detail:**

- **Book one is reconciliation** — the spearhead's paid answer. The newsletter gives the diagnosis away for free; you never charge a man for the bad news. The book sells the way out. There is no book before it, because the thing before the fix is the diagnosis, and the diagnosis is free. **Its live title on the site is "What Your Practice Actually Sells."**
- **The checkout is external, and the modal's Buy button will point at it.** The React app does not process the payment; a tool takes the payment, stores the file, and emails the buyer a download link when payment clears. **The "Buy the Guide" button currently uses `href="#"` (a dead placeholder)** — swapping in the real URL is a one-line change once the provider is set. **Kit Commerce is the front-runner**, because the newsletter already lives in Kit and a buyer would be auto-added to the list on purchase (processing fee only, roughly 3.5% + $0.30, no monthly, works on Kit's free plan). **Gumroad and Payhip remain viable** and are the fallback. One caveat: Kit is not a merchant-of-record for US sales tax the way Gumroad is. **Provider not finally locked.** Note: Stripe is the right call for GlowPT (a subscription inside an app FranklinAI controls); a one-time file sale is a different shape — do not assume Stripe for the book.
- **Sequence:** the book is to be **written, live, and buyable ahead of Issue 1, which now ships September 1, 2026** (V41 — this file previously said August 4, and the date had already moved to August 18 before slipping again; the Content Calendar is the authority on it). The shelf and the Instagram carousel need something real to point at, and the carousel drops a few days before the issue. The newsletter still sells it off to the side, never from its close.
- **Open items:** the checkout provider and its real URL (leaning Kit Commerce), **the book itself**, and whether the last chapter points back to the discovery call (David leans toward substance first; pointing to the call is optional). The title, the one-sentence promise, and the $37 price are **set** and live in the modal (see Available for the exact copy).

---

## Pricing Model

Price points on the page serve different buyers in different locations. **This file is the authority for all of them.** There is no upstream document; if a price changes, it changes here and in `App.jsx` (or the external checkout, for the book), in the same pass.

**Product pricing:**

- **GlowPT** — $350 / month. Flat, no tiers. Displayed inside the GlowPT modal.
  > Confirmed at $350 on July 15, 2026, retiring an older $300 figure. **If this price changes, two places move together: `App.jsx` and this file.**
- **The reconciliation e-book** — **$37**, one-time. The price is displayed inside the `EbookModal` — in the subline ("A self-serve guide. $37, yours to download.") and again as the Playfair price line ($37, blue #60a5fa, no "/ month" suffix). It is **not** shown on the card itself (the card carries only name, teaser, and More Info — the price reveals in the modal, exactly like GlowPT's $350). The actual charge will be handled by the external checkout, not the React app. **If this price changes, three places move together: `App.jsx` (both the subline and the price line), this file, and the external checkout.**

**Custom Pricing (umbrella builds):** Two tiers plus a whisper subtext, displayed on the live site under the heading "Custom Pricing."

- **The Build** — From $10,000. One flat project fee, set up front. No hourly meter, no surprises.
  - Whisper subtext (inside The Build step-item): "New features quoted and built one at a time, as you grow." (Inter 15px, #8892a4, marginTop: '0')
- **Monthly Care** — $350 / month. Optional. Covers hosting, maintenance, security, and updates.

**Order rationale.** The Available card sits below the hero and the newsletter card as the easy-yes on-ramp. It now holds two products: the **e-book first** (the cheapest paid yes, sitting directly under the newsletter whose diagnosis it answers) and **GlowPT second** (the recurring flagship). Custom Work (McKenzie) follows as proof of custom-build capability, bridging into How It Works and Custom Pricing. The e-book-above-GlowPT order reverses the earlier "below GlowPT" plan; see Change History (V32).

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

**The masthead is a three-part lockup (component `NewsletterStrip`), flipped in V36 so the label leads and the publication name sits beneath it. Both lines are upright — there is no italic on the card:**

- **Header "Newsletter"** — the blue `card-heading`, at the **standard section-heading tier** so it reads like every other card heading (Available, GlowPT, etc.): `fontSize: 'clamp(36px, 5.5vw, 58px)'`, upright (**no `fontStyle`**), `lineHeight: '1.2'`, `marginBottom: 'clamp(4px, 1.5vw, 10px)'`. It names the section plainly for a cold visitor. **Blue via `card-heading`.**
- **Subhead "The Operator"** — a white Playfair sub-title beneath the header, `fontFamily: 'Playfair Display'`, `fontWeight: '800'`, `color: '#ffffff'`, `fontSize: 'clamp(30px, 5vw, 35px)'`, `lineHeight: '1.1'`, `marginTop: '0'`, `marginBottom: '14px'`, **upright (no italic)**. **"The Operator" is the newsletter's title/name** — it names the reader who *operates* the practice, not David. **White per the sub-title rule (no gold),** at the standard secondary sub-title tier, matching GlowPT and McKenzie — see Header Sizing.
- **Description** (Inter 15px, #8892a4, `marginTop: '0'`, `marginBottom: '18px'`, `lineHeight: '1.5'`): **"For physical therapy practices. Delivered every other Tuesday, it takes a clear look at what's working and not working in your practice, and what to do about it."**

> **The audience line, changed in V41 — and it appears TWICE.** The description opens on **"For physical therapy practices."** (was "For those who run a physical therapy practice." through V40). The identical sentence lives in **two** places in `App.jsx`: this card description and the `NewsletterModal` description. **They must always move together**, or the card and its own modal contradict each other on the same page. The line also matches the Instagram graphic's audience line and the issue-top promise in the Content Calendar — **David's call is one line on every surface.** The old word-for-word *coupling rule* stays retired (nothing forces the three to move together in future), but they are deliberately identical today, so a change to one is a decision about all three.

**The card's action — a single button that opens a modal (V39):**
- **The card shows one ghost button under the description: "Subscribe for Free"** (`btn btn--ghost`, no period, inline `marginTop: '0'`). Clicking it opens the `NewsletterModal`. **There is no email field on the card.** **Deliberately ghost, not primary:** this keeps the filled primary style exclusive to "Book a Free Discovery Call" so the call stays the loudest ask and the newsletter reads as the quiet "small yes." **The label carries "Free"** — it states the price right at the point of action.
- **`NewsletterModal`** — the site's **fourth** modal, mirroring `EbookModal`/`GlowPTModal` exactly (scroll-lock via `useEffect` on `document.body.style.overflow`, X close, backdrop close). Contents, top to bottom: title **"The Operator"** (`modal__title`, `marginTop: '6px'`); a subline **"Free to subscribe."** (Inter 14px/600/#8899b0, `marginBottom: '16px'` — the "it's free" note, occupying the same slot as GlowPT's "Clinic subscriptions available." and the e-book's "A self-serve guide…"); the **same description line as the card** (`modal__text`); then a `borderTop` divider (`1px solid rgba(96,165,250,0.12)`, `paddingTop: '24px'` — the site's **fourth** divider) wrapping the **form row**.
- **The form row (inside the modal):** an **email input** (styled inline from Kit values: cream text #f0e6d3, navy fill rgba(255,255,255,0.04), 1px border rgba(96,165,250,0.3), 8px radius, 16px font to prevent iOS zoom-on-focus, `WebkitAppearance: 'none'`, flex `1 1 220px`, maxWidth 280px, `height`/`minHeight` 44px, `boxSizing: 'border-box'`) and the ghost **"Subscribe for Free"** button. **Placeholder color cannot be set inline** (needs a CSS `::placeholder` rule), so "Your email" shows browser-default gray for now.
- **The 44px alignment fix, on the modal's Subscribe button.** The base `.btn` class in `global.css` carries `padding: 15px 34px` and `margin-top: 8px`; left alone the button sits taller and lower than the input. The fix, all inline on the button: `height: '44px'`, `minHeight: '44px'`, `boxSizing: 'border-box'`, `display: 'inline-flex'`, `alignItems: 'center'`, `justifyContent: 'center'`, and **`marginTop: '0'`** (cancels the class's `margin-top: 8px`). Keep all of them; the flush alignment depends on it.

> **The email field lives in a modal (V39 — reverses V28).** From V28 through V38 the field sat inline on the card, kept there on a "fewest taps for the cold Instagram stranger" argument. David reopened it: a bold "Subscribe for Free" button is the visual magnet, so many visitors reach for the **button first** — and with an inline field that is a dead/awkward click, not a saved tap. Moving the field into a modal opened by the button makes **button-first the intended flow**, de-clutters the card (which now rests as header → subhead → description → one button), and matches the site's existing modal language (e-book, GlowPT). The accepted tradeoff: one extra tap before the field for a field-first user. **Keep the modal. Do not re-propose the inline field unless David asks.**

**Two different asks, kept separate:** the **small yes** is the free newsletter (low intent — the Instagram stranger not ready to talk). The **big yes** is the discovery call (high intent — every button on the site drives here). The card earns its prominent top-of-page position because that stranger lands there first on a phone; burying it near the footer would hide the one thing meant to catch them.

## Tech Stack

React + Vite, plain CSS (no Tailwind), deployed via Netlify, GitHub for version control. Supabase for backend and auth where needed.

**Newsletter platform: Kit** (formerly ConvertKit). Free to 10,000 subscribers, list owned and exportable. The live signup form lives inside `NewsletterModal` (V39) and is **still unwired**; it attaches to Kit once David creates the Kit form and hands over the form ID.

> **Newsletter wiring plan — locked in V40 (the intended submit + success behavior, to build when the form ID arrives):**
> - **Use a JS-handled submit, not a plain form POST.** A plain HTML POST to Kit's form endpoint (`https://app.convertkit.com/forms/{FORM_ID}/subscriptions`) navigates the browser to Kit's own response page, which would tear the modal down. Instead handle the submit in JS — a `fetch` to that endpoint (or Kit's v3 subscribe API / official React embed) — so the subscriber stays inside the modal and we control what happens next. **The email field must be named `email_address`** or the submit silently sends nothing.
> - **On success: confirm in the modal, then auto-close it.** Swap the form row for a short confirmation message and close the modal after a brief delay (~2s), leaving the X available if they close it sooner. Restoring this in-modal moment is the whole reason for the JS path.
> - **Confirmation copy tracks Kit's double opt-in setting.** Kit defaults to double opt-in (it emails a confirm link the subscriber must click before they land on the list). If that stays on, the message must say so — **"Almost there. Check your email to confirm."** If David turns double opt-in off in Kit, a plain **"You're in."** is honest. Decide the setting in Kit; the copy follows it. **No em dashes and no forbidden words in this copy**, per Copy Rules.
> - **On error: keep the modal open** and show a gentle inline message so they can retry. The Subscribe button takes a brief disabled **"Subscribing…"** state on submit to prevent double sends.
>
> **This stays a small, self-contained JSX addition** — a submit handler plus a success/error state on the existing modal, and the `email_address` field name. No structural change to the card or the modal.

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
| Accent Blue | #60a5fa — all blues, section headings, links, prices, buttons, logo strokes, and the wordmark "Solutions, LLC" subline (nav + footer) |
| Gold / Lightning Bolt | #fbbf24 — **the kite lightning bolt only** (logo mark and favicon). Not used on any heading, sub-title, or copy. See Logo Accent. |
| Card background | rgba(255, 255, 255, 0.04) — also the newsletter email input fill |
| Card border | rgba(96, 165, 250, 0.18) |
| Newsletter input border | rgba(96, 165, 250, 0.3) |
| Divider line | rgba(96, 165, 250, 0.12) — used in the GlowPT modal footer, the e-book modal footer, the newsletter modal form divider, and the page footer (four intentional dividers) |
| Text primary | #f0e6d3 |
| Text muted | #8892a4 |
| Kite panel fills | #1e3a5f (lighter) and #0f2340 (darker) |
| Cool blue-grey sublines | #8899b0 — modal sublines only (e.g. the GlowPT modal "Clinic subscriptions available."). No longer used on the wordmark: the nav/footer sublines went blue in V27. |
| Headings / white sub-titles | #ffffff — hero headline, wordmark "AI" (nav, footer, and the About heading), and every sub-title: the newsletter "The Operator", the e-book "What Your Practice Actually Sells", GlowPT, McKenzie Arm Care, step titles, pricing-tier titles, David Peterson |

> **A note carried from the Instagram work (Content Calendar, The Post Visual System), for anyone reaching for a "dark blue" text color:** the footer navy **#070f24 reads as dark blue only as a large filled block.** As thin text on a light field it reads flat black. The posts use **#1e3a5f** for primary text on white for exactly this reason. On the site every ground is navy, so this never bites here — but do not export the footer navy into a light-background asset expecting it to read blue.

### Typography

| Role | Font | Weight | Size / Notes |
|---|---|---|---|
| Hero label ("Custom / Apps & Tools") | Playfair Display | 700 | **clamp(40px, 6vw, 64px)**, blue #60a5fa, title case, two lines via `<br />`, **lineHeight 1.1**, letterSpacing 0.04em, **marginBottom clamp(2px, 1vw, 8px)** |
| Hero headline ("Built for / Your Practice") | Playfair Display | 800 | **clamp(37.5px, 5.75vw, 57.5px)**, white #ffffff, two lines via `<br />` (break after "for"), marginBottom 10px, **no period** |
| Hero trust subline | Inter | 400 | 15px, muted #8892a4; single line **"Built to Handle HIPAA"** — title case, **no period**; marginTop 0, marginBottom clamp(4px, 1vw, 8px) |
| Newsletter header ("Newsletter") | Playfair Display | 800 | **clamp(36px, 5.5vw, 58px)**, blue #60a5fa via `card-heading`, **upright (no italic)**, lineHeight 1.2, marginBottom clamp(4px, 1.5vw, 10px). The standard section-heading tier — in-tier with the other six section headings (see Header Sizing). |
| Newsletter subhead ("The Operator") | Playfair Display | 800 | **clamp(30px, 5vw, 35px)**, **white #ffffff**, **upright (no italic)**, marginTop 0, marginBottom 14px, lineHeight 1.1. The white secondary sub-title beneath the header. |
| Newsletter description (card **and** modal) | Inter | 400 | 15px, #8892a4, marginTop 0, marginBottom 18px, lineHeight 1.5 (card); `modal__text` in the modal. **Text as of V41: "For physical therapy practices. Delivered every other Tuesday, it takes a clear look at what's working and not working in your practice, and what to do about it."** Both copies move together. |
| Newsletter email input (in `NewsletterModal`) | Inter | 400 | **16px** (prevents iOS zoom), #f0e6d3 on rgba(255,255,255,0.04), 1px border rgba(96,165,250,0.3), radius 8px, padding 10px 14px, height 44px, minHeight 44px, box-sizing border-box |
| Section card headings (all seven) | Playfair Display | 800 | **clamp(36px, 5.5vw, 58px)**, blue #60a5fa via `card-heading`, **lineHeight 1.2** (About keeps 1.1 for its two lines), **marginBottom clamp(4px, 1.5vw, 10px)** — Newsletter, Available, Custom Work, How It Works, Custom Pricing, Behind FranklinAI, Let's Build. |
| — "Behind FranklinAI" (About heading) | Playfair Display | 800 | clamp(36px, 5.5vw, 58px), **two lines via `<br />`** ("Behind" / "FranklinAI"), lineHeight 1.1; "Behind Franklin" blue, **"AI" white #ffffff** |
| Secondary sub-titles (unified scale) | Playfair Display | 700–800 | **clamp(30px, 5vw, 35px)** — the newsletter "The Operator", the e-book "What Your Practice Actually Sells", GlowPT, McKenzie, step titles, pricing-tier titles, David Peterson. **All white #ffffff.** |
| Product teaser | Inter (card-text) | 400 | 16px, muted #8892a4 |
| Ghost buttons ("More Info" ×2, "Case Study", "Subscribe for Free" ×2, "Buy the Guide") | Inter (btn--ghost) | 600–700 | 15px, **title case, no period**. (The e-book modal's "Buy the Guide" carries the modal sizing `padding: '10px 20px', fontSize: '13px'`.) |
| Primary CTA buttons (hero + Discovery) | Inter (btn--primary) | — | padding 11px 22px, fontSize 14px, **title case, no period** |
| Modal CTA button | Inter (btn--primary) | — | padding 10px 20px, fontSize 13px (smallest), **title case, no period** |
| Price numbers (pricing tiers + modal) | Playfair Display | 700 | **27.7px**, blue #60a5fa |
| Price descriptors (spans) | Playfair Display | 700 | 20px, blue #60a5fa |
| Modal titles | Playfair Display | — | `.modal__title`, marginTop 6px |
| Modal sublines ("Clinic subscriptions available." / "A self-serve guide. $37, yours to download." / "Free to subscribe.") | Inter | 600 | 14px, #8899b0, marginBottom 16px |
| Modal feature rows | Inter | 400 / 700 check | 15px, cream #f0e6d3 text, blue #60a5fa check |
| Nav name ("FranklinAI") | Playfair Display | 700 | clamp(40.95px, 4.35vw, 50.4px), blue with "AI" white |
| Nav "Solutions, LLC" | Inter | 800 | clamp(25.6px, 2.72vw, 31.5px), #60a5fa, centered under the wordmark (no per-line nudge) |
| Footer name | Playfair Display | 700 | 32px, blue with "AI" white |
| Footer "Solutions, LLC" | Inter | 800 | 20px, #60a5fa, centered under the wordmark (no per-line nudge) |
| Footer small print | Inter | 400 | 13px, #8892a4, both lines centered by `text-align` on a full-width (`alignSelf: stretch`) line (V46 — was flex shrink-to-content; see Footer / Horizontal Centering) |
| Email option text | Inter | 400 | 15px, #8892a4, link #60a5fa at 600; **"Email"** on its own line, **no period** |

Google Fonts import (locked, in `index.html`):
`Playfair+Display:ital,wght@0,700;0,800;1,800&family=Inter:wght@400;500;600;700;800`

> **Font-import note:** V26 corrected the import to `ital,wght@0,700;0,800;1,800` for the then-italic masthead. **Since V36 the masthead is upright and nothing on the page is italic, so the `1,800` italic face is unused** — left in the import for now (harmless; drop it only if David asks). Upright 700/800 remain the faces actually in use. **Note the site and the Instagram graphics differ on purpose:** the posts set "The Operator" in **Inter** (a deliberate departure recorded in the Content Calendar), while the site's newsletter subhead stays **Playfair**. That is not drift; do not "reconcile" them.

---

## Logo Accent — Gold Is Logo-Only — READ BEFORE CHANGING ANY HEADING OR SUB-TITLE COLOR

Gold (#fbbf24) has exactly one home on the site: **the kite's lightning bolt in the logo mark.** It is not a copy color, a heading color, or a sub-title color anywhere else.

The color system, in full:

| Element | Color | Why |
|---|---|---|
| Kite lightning bolt (logo) | **gold #fbbf24** | The one and only gold on the site; the logo's spark |
| Section card headings (all seven, incl. "Newsletter") | blue #60a5fa | The structural heading color |
| Newsletter "The Operator" subhead | **white #ffffff** | Sub-title tier |
| E-book "What Your Practice Actually Sells" (product name) | **white #ffffff** | Sub-title tier |
| GlowPT (product name) | **white #ffffff** | Sub-title tier |
| David Peterson (About) | **white #ffffff** | Sub-title tier |
| McKenzie Arm Care (Custom Work) | white #ffffff | Sub-title tier |
| Step titles, pricing-tier titles | white #ffffff | Sub-title tier |
| "AI" in the wordmark (nav, footer, **and the "Behind FranklinAI" heading**) | **white #ffffff** | Wordmark treatment |

**The rule that protects it:** gold never leaves the logo. Every sub-title on the page is white. Every section heading is blue. If a sub-title ever needs more emphasis, use weight, a label, or a thin rule, **not** gold.

**Section card headings stay blue.** All seven are blue via the `card-heading` class: **"Newsletter,"** "Available," "Let's Build," "Custom Work," "How It Works," "Custom Pricing," and **"Behind FranklinAI"** (whose "AI" is white — see below).

**"AI" in the wordmark renders white** (#ffffff), never gold — nav, footer, **and the "Behind FranklinAI" About heading.**

---

## Header Sizing — Three Tiers (current, matches live)

There are **three** distinct heading tiers on the page. **There is no masthead exception** — every heading sits in its tier, and nothing on the page is italic. Do not collapse the tiers or give individual headings their own one-off sizes.

1. **Hero** — its own two-size lead treatment:
   - Hero label "Custom / Apps & Tools": **clamp(40px, 6vw, 64px)**, blue, lineHeight **1.1**, marginBottom **clamp(2px, 1vw, 8px)**
   - Hero headline "Built for / Your Practice": **clamp(37.5px, 5.75vw, 57.5px)**, white, no period
2. **Section card headings** — unified at **clamp(36px, 5.5vw, 58px)**, blue, **lineHeight 1.2** (About keeps 1.1 for its two lines), each with **marginBottom clamp(4px, 1.5vw, 10px)**: **Newsletter**, Available, Custom Work, How It Works, Custom Pricing, Behind FranklinAI, Let's Build. (Behind FranklinAI is the only one set on two lines.)
3. **Secondary sub-titles** — unified at **clamp(30px, 5vw, 35px)**, **all white**: the newsletter **"The Operator"**, the e-book **"What Your Practice Actually Sells"**, GlowPT, McKenzie Arm Care, step titles, pricing-tier titles, David Peterson.

Price numbers are a separate fixed size: **27.7px** (not a heading tier).

> **The masthead exception is retired (V36).** From V26 through V35, "The Operator" was a smaller, true-italic `card-heading` (`clamp(34px, 5vw, 50px)`, `fontStyle: 'italic'`) sitting *above* a white "Newsletter" sub-label — a sanctioned one-off so the publication name read as a masthead. **V36 reversed the lockup and removed the exception entirely.** **No heading on the page is italic or off-tier anymore.** Do not reintroduce the italic "The Operator" title or the smaller masthead size unless David asks.

> The nav wordmark ("FranklinAI" + "Solutions, LLC") is its own lockup and is NOT part of these three tiers — see the Nav section for its clamp values.

---

## Card Top & Bottom Padding — Tightened (V26)

Every `.site-card` carries inline **`paddingTop: '16px'`** and **`paddingBottom: '24px'`**, overriding the CSS `.site-card { padding: 40px }` on the **top and bottom only**. **Left and right stay at 40px.** Applied to all eight cards: Hero, **Newsletter**, Available, Custom Work, How It Works, Custom Pricing, About, Discovery.

---

## Card Heading Spacing — One Responsive Gap (current)

**The gap below a heading is set by two things, not one: the heading's own `line-height` *and* its `marginBottom`.** Each `card-heading` carries **`marginBottom: 'clamp(4px, 1.5vw, 10px)'`** (desktop ~10px, iPhone ~6px) **and an explicit `lineHeight: '1.2'`** (About keeps `1.1` for its two lines). Before V26 the headings set no line-height, so they inherited the body's **`1.6`** — which padded ~15px of dead space *inside* each heading's line box, beneath the glyphs. That, not the margin, was why the header-to-subheader gap read loose. `1.2` strips that dead air uniformly across every card.

**No negative-margin pulls anywhere below a heading.** The two `step-stack` wrappers (How It Works, Custom Pricing) sit at `marginTop: '0'`, and the About headshot sits at `margin: '14px auto 10px'`. **Do not reintroduce a negative `marginTop` on a `step-stack` or a negative top margin on the headshot.**

On the newsletter card specifically, the heading gap feeds the "The Operator" subhead (which then feeds the description), so the shared card-heading gap sits between "Newsletter" and "The Operator."

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
- **No heading on the page is italic** — every heading, including the newsletter card's "Newsletter" header, is upright and in-tier. See Header Sizing.
- No horizontal dividers between sections, and no dividers inside cards. (Thin `borderTop` rules exist only in the **four** modal/footer spots: the GlowPT modal footer, the e-book modal footer, the newsletter modal form divider, and the page footer.) **The two products on the Available card are separated by spacing, not a rule** — 12px under the heading, 10px title→teaser, and a 28px break between the two products; see Available.
- No em dashes anywhere in copy, ever
- Dark mode locked via color-scheme: only light
- Visual restraint throughout
- No step numbers in How It Works — titles only, centered
- Gold is reserved for the logo bolt only (see Logo Accent) — never on a heading, sub-title, or copy
- Responsive sizing uses `clamp()` with **absolute pixel values** — never `em` or relative units
- **All buttons are title case with no period** (primary and ghost alike). Section headings also take no period.
- **Form controls (newsletter input + Subscribe button) are pinned to a matching 44px height and the button's inherited `.btn` top margin is zeroed** so they sit flush. See Newsletter Card.
- **Center text by `text-align`, not by flex shrink-to-content, wherever a centered line has siblings of different widths (V46).** The footer's fine-print lines are the case in point: relying on a flex container's `align-items: center` to center each shrink-wrapped `<span>` renders correctly in Chromium but leans on flex intrinsic-width behavior that differs across engines, which is why the footer copyright kept drifting off-center. The fix is a full-width line (`alignSelf: stretch`) centered by `text-align: center`. See Footer and Horizontal Centering.
- **Copy that appears twice must move twice.** Two strings are duplicated by design: the newsletter description (card + `NewsletterModal`) and the "Subscribe for Free" button label (card + modal). Editing one and not the other puts the page in contradiction with itself. See Newsletter Card.

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
Set equal to the **crossbar** to put the F level with the crossbar, then solve for `marginTop`. *(V28: the target was `(crossbar − 3px)` through V27; David asked for the nav F to sit level with the crossbar, so the nav target is now the crossbar itself and each nav `marginTop` clamp stop rose 3px. The footer still uses its own single `marginTop` value.)*

- **Nav wordmark `marginTop`: `clamp(13.98px, calc(42.25px - 2.44vw), 19.28px)`**
- **Footer text column `marginTop`: `13.16px`** (font fixed at 32px, single value works everywhere)

> The footer brand-row `translateX(-14px)` lockup dial is horizontal only and does not affect this vertical F-vs-crossbar math (see Horizontal Centering). The V46 fine-print centering change is inside the text column and does not touch this vertical math either.

---

## Horizontal Centering — `translateX` Dials (nav and footer)

Both lockups are positioned horizontally by inline `transform: translateX(...)`. Same value on desktop and iPhone. Using a transform (not margin) means it never consumes layout width.

- **Nav brand `<a>`: `transform: 'translateX(-26px)'`** — the lockup-level dial (moves kite + wordmark together). It is deliberately *more* negative than the footer's because the nav's kite is smaller relative to its wordmark; the extra left lean is what makes the nav *look* as centered as the footer (see the asymmetry note below).
- **Footer brand row `<div>`: `transform: 'translateX(-14px)'`** — the footer's single lockup dial (moves kite + text column together). Because it is a fixed pixel offset it centers the same on desktop and iPhone.
- **Footer text column `<div>`: no `transform`.** *(V27 removed the former inner `translateX(-22px)` snug-pull. It had been sized for the old long copyright line; once that line was trimmed to "© {year}" the pull dragged the wordmark left into the kite. With it gone, the footer is built exactly like the nav — kite + wordmark share one 4px flex gap and there is no inner dial.)*

> **Why the nav and footer dials differ, and why that is correct.** Both wordmarks are built the same way (one 4px kite gap). But the nav's lockup dial is `-26px` while the footer's is `-14px`. That asymmetry is intentional: the nav's kite is *relatively smaller* next to its larger wordmark (kite-to-text width ratio ~0.22 vs the footer's ~0.27), so the heavier nav wordmark pulls the optical center rightward more. The extra `-12px` of lean cancels that, landing the nav's *wordmark* at roughly the same small offset-from-center as the footer's. **Do not "reconcile" the two dials to one number** — the visual result, not the pixel value, is what matches.

> **How the fine print centers inside the footer text column (V46).** The `translateX` dials above position the whole lockup on the page. Centering the *lines within* the text column is a separate mechanism, and it changed in V46. The column is a flex column with `align-items: center`, which centers the wordmark `<a>` (the widest child, so it sets the column width). The two fine-print lines — "franklinaisolutions.com" and "© {year}" — used to be centered the same way, by `align-items: center` shrinking each bare `<span>` to its text and dropping it on the column's center. That is exactly the flex-shrink-to-content centering that renders differently across engines and kept the copyright looking off-center in some browsers. **They now carry `alignSelf: 'stretch'` and the column carries `textAlign: 'center'`**, so each fine-print line spans the full column width and centers its glyphs by `text-align` — the browser-universal method, verified in-engine to land the copyright's center exactly on the wordmark's center (0.0px). The wordmark `<a>` is untouched and still centers by `align-items`. See Footer and Fine-Print Left-Nudges.

The footer lockup dial is separate from the per-line fine-print nudges — which, as of **V31, no longer exist** (see below).

---

## Fine-Print Left-Nudges (nav + footer) — RETIRED (V31), centering hardened (V46)

**There are no per-line `translateX` nudges anymore.** Through V30 a tiny per-line `transform: 'translateX(-2px)'` shifted four individual text lines a hair left — the nav and footer "Solutions, LLC" sublines, the footer "franklinaisolutions.com" line, and the footer "© {year}" line. It was originally tuned for the old "Philadelphia" city line; on "Solutions, LLC" it read as an off-center lean (the visible-ink gap was ~6px left / ~10px right instead of ~8px / ~8px). **V31 removed all four**, so every line now sits centered under "FranklinAI" via the column centering.

**Do NOT re-introduce a per-line `translateX` on these lines.** If a subline ever looks off-center, fix the *centering method*, not with a nudge. The kite and the "FranklinAI" wordmark never carried a nudge and still don't.

> **V46 — the footer fine print now centers by `text-align`, not flex shrink-to-content.** Removing the nudges in V31 fixed the *horizontal offset*, but the two fine-print lines were still centered by the text column's `align-items: center` shrinking each `<span>` to its text width. That is engine-dependent (Safari's flex intrinsic-width handling differs from Chromium's), which is why the copyright kept reading off-center for David across browsers even after the nudges were gone. The durable fix: the text column carries `textAlign: 'center'`, and the "franklinaisolutions.com" and "© {year}" spans carry `alignSelf: 'stretch'`, so each line occupies the full column width and centers its glyphs by `text-align` — a method with no cross-engine ambiguity. This is the same lesson as the nudges (do not hand-tune a centering symptom; use a mechanism that is centered by construction), applied one level deeper. See Horizontal Centering and Footer.

---

## Nav

- Sticky (position: sticky; top: 0)
- Logo and wordmark only — no CTA, no links, no tagline
- `padding: '6px 24px'`
- Brand link inline: `gap: '4px'`, `alignItems: 'flex-start'`, `transform: 'translateX(-26px)'`
- Kite: `KiteLogo size={130}`, wrapped in `<span style={{ flexShrink: 0, display: 'flex' }}>`, NO className
- Wordmark div: `marginTop: 'clamp(13.98px, calc(42.25px - 2.44vw), 19.28px)'`
- Name: `clamp(40.95px, 4.35vw, 50.4px)`, blue #60a5fa with "AI" white #ffffff; "Solutions, LLC": **Inter 800**, `clamp(25.6px, 2.72vw, 31.5px)`, blue #60a5fa, **no `transform`** (centered via the `.site-nav__city` `align-self: center`)
- Responsive sizing via inline `clamp()`, not CSS media queries

---

## Footer — Fully Self-Contained in App.jsx

**The footer uses NO CSS classes from `global.css`.** It is entirely inline styles. The `global.css` `.site-footer*` rules are dead code. Do not add footer CSS classes back.

### Footer Structure

A scaled-down signature (kite 105, name 32px). The kite sits beside a single centered text column holding all four lines. Kite-to-wordmark gap `4px`. Kite wrapped in `<span style={{ flexShrink: 0, display: 'flex' }}>`.

**Kite** (left): `KiteLogo size={105}`, no className.

**Text column** (right, flex column, `alignItems: 'center'`, **`textAlign: 'center'`** — added V46, `marginTop: '13.16px'`, **no `transform`**):
1. FranklinAI — Playfair 700, 32px, blue #60a5fa with "AI" in white #ffffff (in a home link). Centered as the widest child by `align-items`. **No per-line nudge.**
2. Solutions, LLC — **Inter 800**, **20px**, **blue #60a5fa**, marginTop 2px (in the home link, beneath "FranklinAI"), **no `transform`**
3. franklinaisolutions.com — Inter 400, 13px, #8892a4, marginTop 8px, **`alignSelf: 'stretch'` + `textAlign: 'center'`** (V46 — full-width line, text-centered), **no `transform`**
4. © {year} — Inter 400, 13px, #8892a4, **`alignSelf: 'stretch'` + `textAlign: 'center'`** (V46), **no `transform`**

> **Lines 3 and 4 changed centering method in V46, not position.** They previously centered by the text column's `align-items: center` shrinking each `<span>` to its text — the flex-intrinsic-width behavior that differs across engines and kept the copyright reading off-center in some browsers. Now each spans the full column width (`alignSelf: 'stretch'`) and centers its glyphs by `text-align: center`, with the column also carrying `textAlign: 'center'`. Result is pixel-identical in Chromium (verified 0.0px off the wordmark center) but no longer engine-dependent. The wordmark home link (lines 1 and 2) is untouched — it still centers by `align-items` and sets the column width. See Horizontal Centering and Fine-Print Left-Nudges.

**Footer outer:** padding '24px 24px 20px', borderTop '1px solid rgba(96, 165, 250, 0.12)', marginTop '0', display 'flex', justifyContent 'center'.

**Footer brand row:** display 'flex', alignItems 'flex-start', gap '4px', `transform: 'translateX(-14px)'`.

No email in the footer.

---

## Scroll Lock on Modals

All four modals (`EbookModal`, `GlowPTModal`, `CaseStudyModal`, `NewsletterModal`) lock page scroll while open via a `useEffect` that sets `document.body.style.overflow = 'hidden'` on mount and restores it on unmount. Each closes on X click or backdrop click.

---

## Page Sections (in order)

All sections use `.section` → `.container` → `.site-card` (inline `paddingTop: '16px'`, `paddingBottom: '24px'`). Heading inside the card, each with `marginBottom: 'clamp(4px, 1.5vw, 10px)'` and `lineHeight: '1.2'` (About keeps 1.1). **Live order: Hero → Newsletter (The Operator) → Available → Custom Work → How It Works → Custom Pricing → About → Discovery CTA.**

The page reads as one sentence: here's what I do (custom apps & tools) → here's the free thing worth following (The Operator) → here's what's available (the e-book, then GlowPT) → here's proof I build custom (McKenzie) → here's how the work goes and what it costs → here's who I am → let's talk.

### Hero

- **Label** (Playfair 700, clamp(40px, 6vw, 64px), #60a5fa): "Custom" / "Apps & Tools" — two lines via `<br />`, **lineHeight 1.1**, letterSpacing 0.04em, **marginBottom clamp(2px, 1vw, 8px)**
- **Headline** (Playfair 800, clamp(37.5px, 5.75vw, 57.5px), white): **"Built for" / "Your Practice"** — break after "for", marginBottom 10px, **no period**. Niche-forward front door — see Business (Positioning note).
- **Trust subline** (Inter 15px, #8892a4): single line **"Built to Handle HIPAA"** — title case, **no period**, no link, no `<br />`. marginTop 0, marginBottom clamp(4px, 1vw, 8px).
- **CTA button:** "Book a Free Discovery Call" — `btn btn--primary`, `padding: '11px 22px', fontSize: '14px'`, cal.com URL, new tab. No `EmailOption`. **Title case, no period.**

### Newsletter (The Operator) — `NewsletterStrip`

Its own prominent `.site-card`, sitting between Hero and Available. **It is a card, not a strip** (the component name is a legacy label). See Newsletter Card for the full rationale.
- **Header** (`card-heading`, clamp(36px, 5.5vw, 58px), blue, **upright**, lineHeight 1.2): **"Newsletter"**, marginBottom clamp(4px, 1.5vw, 10px). The standard section-heading tier.
- **Subhead** (Playfair 800, clamp(30px, 5vw, 35px), **white #ffffff**, **upright**, marginTop 0, marginBottom 14px, lineHeight 1.1): **"The Operator"**. The newsletter's name/title, a white sub-title beneath the header. White per the sub-title rule (see Header Sizing).
- **Description** (Inter 15px, #8892a4, marginTop 0, marginBottom 18px, lineHeight 1.5): **"For physical therapy practices. Delivered every other Tuesday, it takes a clear look at what's working and not working in your practice, and what to do about it."** *(V41 changed the opening sentence; V44 changed the tail. **The identical line also lives in `NewsletterModal`; both move together.**)*
- **Subscribe button** (`btn btn--ghost`, label "Subscribe for Free", marginTop 0): the card's only action, directly under the description. Its `onClick` sets `newsletterOpen` to open the `NewsletterModal`. **No email field on the card.**
- **`NewsletterModal`** (rendered via `{newsletterOpen && <NewsletterModal … />}`, `NewsletterStrip` holds the `newsletterOpen` state): title "The Operator", "Free to subscribe." subline, **the same description line as the card**, then a `borderTop` divider wrapping the email `input` + a ghost "Subscribe for Free" button (both pinned to 44px, flush). See Newsletter Card and Locked Inline Styles.
- **Not wired.** A JSX comment inside the modal marks where the Kit form endpoint gets added. No submit `onClick`/action on the field yet. **The submit + success behavior (JS submit → in-modal confirmation → auto-close, copy tracking Kit's double opt-in) is specced in Tech Stack (locked V40).**

### Available (Product Card)

Component is named **`AvailableForPractice`**. It is a two-product card: the reconciliation e-book first, GlowPT second. Each product's full detail lives in its own modal. Card carries `id="financial-clarity"` (a harmless leftover id — links to nothing). The component holds two state flags: `ebookOpen` and `glowOpen`.

**Card structure (mirrors Custom Work's flat title/teaser/button stack — no divider between products, no wrapper divs; the two products are separated by spacing only):**
- **Heading** (`card-heading`, clamp(36px, 5.5vw, 58px), blue): **"Available"**, marginBottom **clamp(4px, 1.5vw, 10px)**
- **No badge, no subheader, no horizontal rule.**

**Two-product vertical spacing (locked; tuned live, current values V38):**
- **Heading → first product: 12px.** The e-book `<h3>` carries **`marginTop: '12px'`**, which collapses with the `card-heading`'s marginBottom to a measured 12px gap. *(History: V33 standard 10px → V34 20px → V38 12px.)*
- **Title → teaser: 10px** on each product. Both product `<h3>` titles carry inline **`marginBottom: '10px'`** (matching `.card-title`'s 10px used site-wide).
- **Teaser → button: 16px** on each product. The e-book's teaser carries inline `marginBottom: '0'` so it matches GlowPT's teaser (which is `.card-text:last-of-type`, margin-bottom 0 from CSS); both buttons then sit 16px below via their own `marginTop: '16px'`.
- **Between the two products: 28px.** The GlowPT `<h3>` carries `marginTop: '28px'` (in addition to its `marginBottom: '10px'`). *(History: V32 48px → V34 36px → V38 28px.)*
- The rhythm — heading →12→ title →10→ teaser →16→ button →28→ title →10→ teaser →16→ button — keeps the heading close to its first product while a clear (but tighter) 28px break separates the two products, without a rule.

**Product 1 — the e-book (listed FIRST):**
- **Title** (Playfair 800, clamp(30px, 5vw, 35px), **white #ffffff**, lineHeight 1.2, **marginTop 12px**, **marginBottom 10px**): **"What Your Practice Actually Sells"**. White per the sub-title rule (no gold), same treatment as GlowPT's name.
- **Teaser** (`card-text`, inline **`marginBottom: '0'`**): **"A downloadable guide for owners running two business models in one building, an insurance practice and a cash practice, and making them work together."** *(V44 changed the opening from "A short guide" to "A downloadable guide," which states the delivery format at the point of interest and matches the modal subline's "yours to download." Note "cash practice" here and "advanced care" in the modal are both correct and interchangeable — see Copy Rules.)*
- **Button:** "More Info" (btn--ghost, **title case, no period**, **marginTop 16px**). Opens `EbookModal`.

**Product 2 — GlowPT (listed SECOND):**
- **Title** (Playfair 800, clamp(30px, 5vw, 35px), **white #ffffff**, lineHeight 1.2, **marginTop 28px**, **marginBottom 10px**): "GlowPT"
- **Teaser** (`card-text`, no inline overrides — it is `:last-of-type`): **"An app for physical therapy patients to stay engaged between visits, with zero work for your therapists."** *(V44. Two shifts from the V37 wording: the subject moved from the practice to the **patient**, and "to keep patients engaged" became "to stay engaged," which puts the agency on the patient rather than on the clinic. **The buyer is still the clinic** — the $350/month subscription is a clinic subscription, and the closing clause "with zero work for your therapists" is the line that speaks to the owner. Read the teaser as: here is who uses it, and here is why it costs you nothing to run.)*
- **Button:** "More Info" (btn--ghost, **title case, no period**, **marginTop 16px**). Opens `GlowPTModal`.

The render at the bottom is `{ebookOpen && <EbookModal onClose={() => setEbookOpen(false)} />}` then `{glowOpen && <GlowPTModal onClose={() => setGlowOpen(false)} />}`.

**EbookModal:** Scroll-locked; mirrors `GlowPTModal`'s structure exactly (X close, backdrop close).
- **Title** (`modal__title`, marginTop 6px): **"What Your Practice Actually Sells"**
- **Subline** (Inter 14px, 600, #8899b0, marginBottom 16px): **"A self-serve guide. $37, yours to download."**
- **Body — three `modal__text` paragraphs. Paragraphs 1 and 2 were rewritten in V41; paragraph 3 is unchanged:**
  1. *"Your whole team is being asked to sell advanced care and get patients to the end of their plan of care at the same time. That's not a marketing problem. You're running two business models in one building, an insurance practice and a cash practice, and they're pulling against each other."*
  2. *"You didn't set out to run two businesses, but you chose every piece that built the second one. The tactics arrived built for a business you don't own, and none of them came with a label. So the team gets mixed signals about what the practice is driving at, and every patient feels the seams."*
  3. *"This guide walks you through the fix: decide what your practice actually is, then say it in one sentence your whole team can repeat. Not a tactic, not a tool. The one thing that lets everything else line up behind it."*
  > **What V41 fixed, and why it must not come back.** The old paragraph 1 opened "Your front desk is selling packages while your therapists are trying to finish plans of care," and the old paragraph 2 opened "Nobody decided to run both" and closed on "the front desk improvises, the therapists get mixed signals." That was **two retired framings in one modal**: the departmental split (wrong about how a practice runs — the front desk is deep in retention, which is completion work, and the therapists are asked to sell advanced care too, so both jobs live in every role) and the accident framing (the owner is choosing this, aware of it or not; every tactic that built the second model was a call he made). The new paragraph 1 is lifted from Issue 1's finished hook, so the shelf and the newsletter now say the same thing. **Do not reintroduce either framing anywhere in site copy.** See Source-of-Truth Documents.
- **Footer** (borderTop hairline `rgba(96, 165, 250, 0.12)`, paddingTop 24px, textAlign center): price **"$37"** (Playfair 700, 27.7px, blue #60a5fa, no "/ month" suffix — one-time) then a **ghost** "Buy the Guide" button (`btn btn--ghost`, `padding: '10px 20px', fontSize: '13px'`, `href="#"` — a dead placeholder until the real checkout URL is wired). **Ghost, not filled**, so the filled-primary style stays exclusive to "Book a Free Discovery Call" and the book reads as the self-serve small yes.

**GlowPT Modal:** Scroll-locked. Title "GlowPT" (marginTop 6px); subline "Clinic subscriptions available." (Inter 14px 600, #8899b0); then the description paragraph; **eight** feature lines (blue checks, cream text); price $350 / month (Playfair 27.7px, blue); CTA "Book a Free Discovery Call" (`padding: '10px 20px', fontSize: '13px'` — the smallest primary button, **title case, no period**).

- **Description paragraph (V46 reword):** **"Patients walk out doing great, then drift off before their plan of care is done. The GlowPT app keeps patients engaged between visits, so more plans of care get completed and the clinic stays full."** *(V46 took this from three sentences to two: "GlowPT" → "The GlowPT app" naming it plainly as the app, and the old third sentence's clinic-economics point — "Completed plans of care are what keep a clinic full and its episodes complete" — folded into the second sentence's close, dropping "its episodes complete" as billing jargon a scanning owner does not need. The between-visit-engagement → completed-plans-of-care spine is unchanged.)*

**The eight feature lines, in their live order (V44 — read this before quoting a bullet by number).** This file called the EMR line "the eighth" from V37 onward, which was wrong about its position and silently omitted the real eighth. Both are fixed here:

1. "A 30-second daily check-in, with warm encouragement that keeps patients coming back."
2. "A private journal and weekly streaks, in every patient's pocket."
3. "One subscription covers the clinic. Patients join free."
4. "Reaches every patient, not just the ones you can bill remote monitoring on."
5. "More completed plans of care, because engaged patients finish their care."
6. "Zero work for your therapists. No building, no monitoring, no calls."
7. **"Runs alongside any EMR. Nothing to set up, nothing to integrate."** *(added in V37, which described it as "the eighth" — it brought the count to eight but sits **seventh**, right after the "Zero work" line, exactly where V37 said to place it.)*
8. **"A free weekly roster summary and a clinic dashboard to follow activity, trends, and flags."**

> **Open item — verify bullet 8 against the real app before launch (V44).** David believes **GlowPT may no longer use "flags,"** so that word, and possibly the whole bullet, may describe something the product does not do. **Do not change it yet.** GlowPT is still being built, it lives in its own repo with its own `CLAUDE.md`, and this file records only the boundary (see Tech Stack), never the product's internals. The task is: **before GlowPT goes to pilot clinics, read the finished app and reconcile this bullet to it.** A feature line on a priced product that overstates what ships is the one kind of copy error the site cannot afford. Nothing about bullets 1 through 7 is in question.

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
**Name:** "David Peterson" (card-title, clamp(30px, 5vw, 35px), **white #ffffff**, marginTop 0), two bio paragraphs. **Both were rewritten in V42** — paragraph 1 whole, paragraph 2 by its opening phrase. The bio leads on decades of operations across healthcare, research, and education, names no job title or employer, and still closes on **"what a business needs"** — the umbrella's welcome mat under the niche headline (see Positioning note). Keep it broad, and read Bio (About Section) before changing a word of it.

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
- **Section headings take no period.** "Let's Build", "Available", "Newsletter", "Behind FranklinAI", "Built for Your Practice" — none. (The newsletter subhead "The Operator" also takes no period.)
- **The hero trust subline "Built to Handle HIPAA" is title case with no period.**
- **All buttons are title case with no period** (primary and ghost alike). Primary CTAs ("Book a Free Discovery Call"), ghost buttons ("More Info", "Case Study", "Subscribe for Free", "Buy the Guide") — all title case, no period, no exceptions.
- The "Email" link under the Discovery CTA has **no period** — it is a link, not a button — and points to **david@franklinaisolutions.com**
- Modal feature lines end with periods
- GlowPT is always one word, capital G and PT. It may be named plainly as **"the GlowPT app"** in running copy (see the GlowPT modal description, V46) — the one-word product name rule governs the token "GlowPT" itself, not whether the word "app" may sit next to it.
- FranklinAI is always one word, capital F and capital AI; wherever the wordmark appears (nav, footer, the "Behind FranklinAI" heading), the "AI" renders white. The wordmark lockup (nav + footer) carries a second line, "Solutions, LLC", in blue — so the full legal name "FranklinAI Solutions, LLC" reads down the lockup. The footer copyright is just "© {year}".
- **The newsletter card copy is: header "Newsletter", subhead "The Operator", description "For physical therapy practices. Delivered every other Tuesday, it takes a clear look at what's working and not working in your practice, and what to do about it."** "The Operator" is the newsletter's name; the old "Notes from the ops chair" standfirst is retired from the masthead. **The card's only action is a "Subscribe for Free" button that opens the `NewsletterModal`**; the modal repeats the same description and adds the subline **"Free to subscribe."** above the email field.
- **The newsletter description is duplicated in `App.jsx` on purpose (card + `NewsletterModal`). Any edit changes BOTH.** Verify with `grep -c "For physical therapy practices\."` — the expected count is **2**.
- **Two retired framings are banned from all site copy (V41 removed the last of both).** Never write **"nobody decided"** or any wording that frames the two models as an accident that befell the owner; he is choosing this, aware of it or not, and every tactic that built the second model was a call he made. And never **split the building into the front desk versus the therapists**; the front desk is deep in retention (which is completion work) and the therapists are asked to sell advanced care too, so both jobs live in every role. Both lived in the `EbookModal` until V41.
- **"cash practice" and "advanced care" are interchangeable and neither is retired.** *(V41 correction — the V37 note claiming "cash practice" replaced "advanced care" was wrong; the Content Calendar is explicit that both stand.)* Use whichever fits the sentence: the e-book card teaser says "cash practice," the modal's first paragraph says "advanced care," and both are correct as written.
- **No job title, employer, or present-tense employment fact anywhere in site copy (V42).** The About bio carried one through V41 ("David is the operations manager for a busy clinical practice"). It is gone and does not come back: a current role on a company's own site ties the business's identity to a job, expires silently, and undersells the career underneath. The bio leads with the decades and the sectors instead. This applies to every section, not just About.
- **Never describe GlowPT as providing an exercise plan or exercise prescription.** The product has a movement checklist: a record of what the patient did, not a plan telling them what to do. Permanent. See Available.
- **The e-book's live copy is locked in `App.jsx` and mirrored in Available.** Product name/modal title "What Your Practice Actually Sells"; card teaser and the three modal body paragraphs are exact (paragraphs 1 and 2 as rewritten in V41); modal subline "A self-serve guide. $37, yours to download."; price "$37" (exact, one-time, no "/ month"); button labels "More Info" (card) and "Buy the Guide" (modal), both title case, no period. **No em dashes and no forbidden words appear in any of this copy — keep it that way if the copy is ever revised.** The "$37" price is a two-place fact (`App.jsx` subline + price line, and this file); the eventual checkout is a third.

---

## Forbidden Words in Copy

- "software" (use "web apps and tools" or "apps")
- "in plain English" (and similar phrasing)
- "upsell" (a Content Calendar craft rule that applies to site copy too — it turns patients into targets. Say "premium add-ons," "the premium sell," or "advanced care," or say the true thing: a patient who finished and got better *wants* more, and the offer is a continuation, not a pitch.)
- "treatment room" (therapists work on the floor, in the gym, in the open clinic; the phrase reads like a physician's office and an owner hears it as an outsider's word)
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

> **Rewritten in V42. Read this before "fixing" any of it.** The bio is the umbrella's proof, not the niche's — the welcome mat that keeps the umbrella breathing beneath the practice-forward front door. **Four things about the current version are deliberate, not oversights:**
>
> - **It names no job title and no employer.** The old opener, "David is the operations manager for a busy clinical practice," was a present-tense employment fact on a company website. It tied FranklinAI's identity to a job, went stale silently the moment that job changed, and reduced a decades-long operations career to one room. **Do not write a current role, employer, or clinic back in.** See Copy Rules.
> - **It names no niche.** Physical therapy does not appear anywhere in it. The headline, the newsletter card, and the GlowPT teaser have all named the practice long before a visitor reaches the bio, so the bio has no qualifying left to do. **Do not "reconcile" the bio to the niche-forward headline.** That reconciliation has been proposed before and rejected; naming the niche up top is the front door, naming it here would be a wall.
> - **"Healthcare, research, and education" and "nonprofit and for-profit" are two different axes, and they stay in separate clauses.** One is a sector list, the other a tax structure, and a healthcare organization is itself one or the other. Do not compress them into a single list ("across healthcare, nonprofits, and for-profit businesses") — that implies three parallel categories where there are two, and it is simply inaccurate.
> - **"That experience" in paragraph 2 depends on paragraph 1.** It points at the decades. It read "That same drive" through V41, pointing at "keep everything running smoothly," which the V42 rewrite deleted; left alone it would have referred to nothing. **If paragraph 1 is ever rewritten again, check that paragraph 2's opening still has something to point at.**

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
| Nav wordmark `<div>` | marginTop: 'clamp(13.98px, calc(42.25px - 2.44vw), 19.28px)' (F level with the kite crossbar) |
| Nav name `<span>` | fontSize: 'clamp(40.95px, 4.35vw, 50.4px)', color: '#60a5fa' |
| Nav "AI" `<span>` | color: '#ffffff' |
| Nav "Solutions, LLC" `<span>` | fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 'clamp(25.6px, 2.72vw, 31.5px)', color: '#60a5fa', lineHeight: '1', marginTop: '3px' (**no `transform`**; centered via the `.site-nav__city` `align-self: center`) |
| All `.site-card` divs | paddingTop: '16px', paddingBottom: '24px' (overrides the CSS `.site-card { padding: 40px }` top and bottom; sides stay 40px) |
| Hero label `<p>` | fontFamily: Playfair Display, fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: '700', letterSpacing: '0.04em', color: '#60a5fa', marginBottom: 'clamp(2px, 1vw, 8px)', lineHeight: '1.1' |
| Hero headline `<h1>` | color: '#ffffff', fontSize: 'clamp(37.5px, 5.75vw, 57.5px)', marginBottom: '10px' (text **"Built for" / "Your Practice"**, **no period**) |
| Hero trust subline `<p>` | fontFamily: Inter, fontSize: '15px', color: '#8892a4', marginTop: '0', marginBottom: 'clamp(4px, 1vw, 8px)' (text **"Built to Handle HIPAA"**, no period) |
| **Hero CTA button `<a>`** | **padding: '11px 22px', fontSize: '14px'** (btn btn--primary; label **"Book a Free Discovery Call"**, title case, no period) |
| **Newsletter header `<h2>`** | className `card-heading`, fontSize: 'clamp(36px, 5.5vw, 58px)', lineHeight: '1.2', marginBottom: 'clamp(4px, 1.5vw, 10px)' (text "Newsletter" — **upright, no `fontStyle`**) |
| **Newsletter subhead `<p>`** | fontFamily: Playfair Display, fontSize: 'clamp(30px, 5vw, 35px)', fontWeight: '800', color: '#ffffff', marginTop: '0', marginBottom: '14px', lineHeight: '1.1' (text "The Operator" — **upright, no italic**) |
| **Newsletter card description `<p>`** | fontFamily: Inter, fontSize: '15px', color: '#8892a4', marginTop: '0', marginBottom: '18px', lineHeight: '1.5'. **Text: "For physical therapy practices. Delivered every other Tuesday, it takes a clear look at what's working and not working in your practice, and what to do about it."** Moves with the modal copy below. |
| **Newsletter card Subscribe `<button>`** | className `btn btn--ghost`, type "button", **onClick opens `NewsletterModal`** (`setNewsletterOpen(true)`), style **marginTop: '0'** (label **"Subscribe for Free"**, no period). The card's only action; no email field on the card. |
| **`NewsletterModal` title `<h2>`** | className `modal__title`, marginTop: '6px' (text "The Operator") |
| **`NewsletterModal` subline `<p>`** | fontFamily: Inter, fontSize: '14px', fontWeight: '600', color: '#8899b0', marginBottom: '16px' (text **"Free to subscribe."**) |
| **`NewsletterModal` description `<p>`** | className `modal__text`. **Same text as the card description — the two are duplicated by design and must always move together.** |
| **`NewsletterModal` form divider `<div>`** | borderTop: '1px solid rgba(96, 165, 250, 0.12)', paddingTop: '24px' (wraps the form row; the site's fourth divider) |
| **`NewsletterModal` form row `<div>`** | display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', alignItems: 'center' |
| **`NewsletterModal` email `<input>`** | fontFamily: Inter, fontSize: '16px', color: '#f0e6d3', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(96, 165, 250, 0.3)', borderRadius: '8px', padding: '10px 14px', height: '44px', minHeight: '44px', boxSizing: 'border-box', outline: 'none', WebkitAppearance: 'none', flex: '1 1 220px', maxWidth: '280px' (type email, placeholder "Your email", aria-label set) |
| **`NewsletterModal` Subscribe `<button>`** | className `btn btn--ghost`, type "button", style height: '44px', minHeight: '44px', boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', **marginTop: '0'** (label **"Subscribe for Free"**, no period). marginTop: '0' cancels the `.btn` class `margin-top: 8px`; height/minHeight/boxSizing pin it to the input's 44px. No submit onClick yet. |
| Available card heading `<h2>` | fontSize: 'clamp(36px, 5.5vw, 58px)', marginBottom: 'clamp(4px, 1.5vw, 10px)', lineHeight: '1.2' (text "Available") |
| **E-book product name `<h3>`** (listed first) | fontFamily: Playfair Display, fontWeight: '800', fontSize: 'clamp(30px, 5vw, 35px)', color: '#ffffff', lineHeight: '1.2', **marginTop: '12px'**, **marginBottom: '10px'**. Text "What Your Practice Actually Sells". |
| **E-book teaser `<p>` (card-text)** | **marginBottom: '0'** (inline; matches GlowPT's `:last-of-type` so the button sits 16px below) |
| **E-book "More Info" button `<button>`** | marginTop: '16px' (btn--ghost; label "More Info", no period; opens `EbookModal`) |
| GlowPT product name `<h3>` | fontFamily: Playfair Display, fontWeight: '800', fontSize: 'clamp(30px, 5vw, 35px)', color: '#ffffff', lineHeight: '1.2', **marginTop: '28px'** (the between-products gap), **marginBottom: '10px'** |
| GlowPT teaser `<p>` (card-text) | no inline overrides (it is `:last-of-type`, margin-bottom 0 from CSS) |
| GlowPT "More Info" button `<button>` | marginTop: '16px' (btn--ghost; label "More Info", no period; opens `GlowPTModal`) |
| **E-book modal title `<h2>`** | marginTop: '6px' (`modal__title`; text "What Your Practice Actually Sells") |
| **E-book modal subline `<p>`** | fontFamily: Inter, fontSize: '14px', fontWeight: '600', color: '#8899b0', marginBottom: '16px' (text "A self-serve guide. $37, yours to download.") |
| **E-book modal body `<p>` × 3** | `modal__text`, no inline overrides. **Paragraphs 1 and 2 rewritten in V41; paragraph 3 unchanged — see Available for the exact copy and the two retired framings that were removed.** |
| **E-book modal footer `<div>`** | borderTop: '1px solid rgba(96, 165, 250, 0.12)', paddingTop: '24px', textAlign: 'center' |
| **E-book modal price `<p>`** | fontFamily: Playfair Display, fontWeight: '700', fontSize: '27.7px', color: '#60a5fa', lineHeight: '1.45', marginBottom: '18px' (text "$37" — no "/ month" suffix) |
| **E-book "Buy the Guide" button `<a>`** | href="#" (dead placeholder), className `btn btn--ghost`, padding: '10px 20px', fontSize: '13px' (label "Buy the Guide", no period) |
| GlowPT modal title `<h2>` | marginTop: '6px' |
| GlowPT modal subline `<p>` | fontFamily: Inter, fontSize: '14px', fontWeight: '600', color: '#8899b0', marginBottom: '16px' |
| **GlowPT modal description `<p>`** | `modal__text`, no inline overrides. **Text (V46): "Patients walk out doing great, then drift off before their plan of care is done. The GlowPT app keeps patients engaged between visits, so more plans of care get completed and the clinic stays full."** |
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
| **Footer brand row `<div>`** | display: 'flex', alignItems: 'flex-start', gap: '4px', **transform: 'translateX(-14px)'** |
| Footer kite wrapper `<span>` | flexShrink: 0, display: 'flex' |
| Footer kite | `KiteLogo size={105}` |
| **Footer text column `<div>`** | display: 'flex', flexDirection: 'column', alignItems: 'center', **textAlign: 'center'** (V46), marginTop: '13.16px' (**no `transform`**) |
| Footer name `<span>` | fontFamily: Playfair Display, fontWeight: 700, fontSize: '32px', color: '#60a5fa', lineHeight: 1 (with "AI" in #ffffff) |
| Footer "Solutions, LLC" `<span>` | fontFamily: Inter, fontWeight: 800, fontSize: '20px', letterSpacing: '0.02em', color: '#60a5fa', marginTop: '2px' (**no `transform`**; centered via the text column's `alignItems: center`) |
| Footer address `<span>` | fontFamily: Inter, fontSize: '13px', color: '#8892a4', lineHeight: 1.5, marginTop: '8px', **alignSelf: 'stretch', textAlign: 'center'** (V46 — full-width line, text-centered; was flex shrink-to-content) (**no `transform`**) |
| **Footer copyright `<span>`** | fontFamily: Inter, fontSize: '13px', color: '#8892a4', lineHeight: 1.5, **alignSelf: 'stretch', textAlign: 'center'** (V46 — full-width line, text-centered; was flex shrink-to-content) (text **"© {year}"**; **no `transform`**) |

---

## CSS / JSX Boundary Rules

**App root:** `App()` returns a single `<div style={{ WebkitTextSizeAdjust: '100%' }}>` wrapping Nav, main, Footer. One property only.

**Footer:** Fully self-contained in `App.jsx`, inline styles, NO CSS classes. Do not add `site-footer*` classNames back. The two fine-print lines center by `text-align` on a full-width (`alignSelf: stretch`) line, not by flex shrink-to-content — see Footer and Horizontal Centering (V46).

**Nav:** Uses `global.css` classes for layout plus inline overrides. Nav kite no longer uses `.site-nav__logo`.

**Newsletter card (`NewsletterStrip`):** Uses `.section` / `.container` / `.site-card` / `.card-heading` plus inline styles. The subhead ("The Operator") and description are fully inline; the card's **only action is a `.btn` / `.btn--ghost` "Subscribe for Free" button** (inline `marginTop: '0'`) whose `onClick` opens the `NewsletterModal`. **The email `input` and the form's Subscribe button live in the modal**, not on the card. `NewsletterModal` uses `.modal-backdrop` / `.modal` / `.modal__close` / `.modal__title` / `.modal__text` (like the other modals), with the subline, form divider, input, and button fully inline. The email `input` is fully inline-styled (no CSS class — there is no input class in the kit). The modal's Subscribe button uses `.btn` / `.btn--ghost` **plus inline overrides** — critically `marginTop: '0'` (cancels the class `margin-top: 8px`) and `height`/`minHeight: '44px'` with `boxSizing: 'border-box'` and flex centering (matches the input's 44px, since `.btn`'s `padding: 15px 34px` otherwise makes it taller). **Do not remove these overrides or the input/button will fall out of alignment again.** **Placeholder styling would require a `global.css` `::placeholder` rule** and is deliberately not added. When wired to Kit, the modal's form becomes a JS-handled submit (field `email_address`) — a small JSX addition, specced in Tech Stack.

**Available card (`AvailableForPractice`):** Two products (e-book first, GlowPT second). Uses `.section` / `.container` / `.site-card` / `.card-heading` / `.card-text` / `.btn` plus inline overrides (the product `<h3>` titles are fully inline-styled; the e-book title carries `marginTop: '12px'` + `marginBottom: '10px'`, its teaser `marginBottom: '0'`, and the GlowPT title `marginTop: '28px'` + `marginBottom: '10px'` — see Available for the spacing rationale). Both `EbookModal` and `GlowPTModal` use `.modal-backdrop` / `.modal` / `.modal__close` / `.modal__title` / `.modal__text`, with the subline, body/feature rows, price block, and footer divider fully inline. `EbookModal`'s Buy button is `btn btn--ghost` with `href="#"`; `GlowPTModal`'s CTA is `btn btn--primary`.

**Custom Work card:** Uses `.section` / `.container` / `.site-card` / `.card-heading` / `.card-title` / `.card-text` / `.btn`. `CaseStudyModal` uses the modal classes plus `.modal__features` / `.modal__feature` / `.modal__stack`.

**Primary buttons:** All three (hero, modal, Discovery) use `btn btn--primary` plus an inline sizing override. Do not remove the inline sizing without setting new explicit sizing.

**Heading spacing:** Every `card-heading` sets its own `lineHeight: '1.2'` (About 1.1) and `marginBottom` inline via the shared clamp; no `step-stack` or headshot below a heading carries a negative top margin. Every heading is upright and in-tier.

**Fixes are JSX-only via inline styles.** Avoid `global.css` edits. Public assets go in `public/`.

---

## Process

### In Claude Code
Edit the repo in place. Read the real file first. Commit when David says so. `CLAUDE.md` at the repo root is this document. (The GlowPT repo is separate, with its own `CLAUDE.md` and its own AWS backend — do not cross the streams. **Confirm the working directory before touching anything while the GlowPT migration is active.**)

**Code maintains this document (V45).** The old ban on editing `CLAUDE.md` from inside Code is retired. The sequence is fixed:

1. **Read** the handoff note and the real files. Do not touch `CLAUDE.md` yet.
2. **Make the code change** and verify it by string checks — old strings at zero, new strings present, no em dashes, no forbidden words. A predicted line count is not a verification (V43). Where the change is visual (a layout or centering fix), measure the rendered result in the browser rather than trusting the code to look right — the V46 footer fix was confirmed by measuring the copyright's center against the wordmark's in-engine before the push.
3. **Push the code.**
4. **Then regenerate `CLAUDE.md` whole**, as a separate step, and push it. Bump the version, rewrite the header summary, fold the prior version into "everything else remains in force," and add a Change History entry.
5. **Tell David the new version number** and that it needs pasting into the claude.ai project instructions.

**Three rules on step 4, and the first is the one that matters most:**

- **Regenerate whole. Never patch.** Write the entire file out, top to bottom, reading the live code as you go. Targeted edits are how a document rots quietly: the GlowPT modal's EMR bullet was recorded as "the eighth" for seven consecutive versions and the real eighth bullet went unrecorded entirely, because no pass in that stretch ever forced a full read. A full rewrite is the only step that catches what a diff cannot see.
- **Record the reasoning, not just the strings.** Most of this document's weight is *why* — why the bio names no employer, why gold never leaves the logo bolt, why the nav and footer `translateX` dials must not be reconciled to one number, why the footer fine print centers by `text-align` and not by flex shrink. Those arguments come from the handoff note and from prior versions. Carry them forward verbatim unless a decision actually changed. **A version that reduces to a changelog has failed**, even if every string in it is correct.
- **Never write the doc before the push.** Step 4 comes after step 3, always. A file being read as spec must not be a file being rewritten in the same breath.

### In claude.ai
**What still lives here:** strategy, positioning, copy decisions, arguing a call through, newsletter drafting, and the **Content Calendar**. Handoff notes into Code are written here. **This document is no longer authored here (V45)** — Code regenerates it; claude.ai receives it as a pasted copy and reads it as spec.

When claude.ai does produce code directly, each change: David receives an updated `App.jsx` to replace in `src/`. The workflow is: read `/mnt/project/App.jsx` → copy to a working directory → `str_replace` edits → verify (line count as intended, new string present, old string count zero, no em dashes in affected lines) → copy to outputs → present for download.

Every change followed by a single copy-paste push command:

```
cd ~/Downloads/franklinai-v2 && git add . && git commit -m "message" && git push
```

Netlify auto-deploys on push. Hard refresh with Cmd+Shift+R after deploy. Favicon changes require closing and reopening the tab.

### Handoff notes into Code
When the work is decided in claude.ai and executed in Code, the bridge is a handoff note. A good one **names the repo in its first line** (the GlowPT migration makes a wrong-directory open a live risk), states the scope and what not to touch, gives exact find/replace strings, says plainly when it supersedes a locked string in this document, ends with a verification table and the push command, and — as of V45 — **tells Code to regenerate `CLAUDE.md` after the push and names the sections that change.** (Through V44 the note said the opposite: leave the doc alone. Any older note still carrying that line is stale on this one point.) V41 and V42 both came from exactly that shape, minus the doc step.

**The note must carry the editorial reasoning, not just the strings (V45).** This is the condition the whole arrangement rests on. Code can read the code; it cannot reconstruct why a decision was made, what was rejected, or what must not be reintroduced. A note that says *replace string A with string B* produces a correct code change and a documentation entry with nothing in it. A note that says *replace A with B, because A framed the owner as a victim of an accident and every tactic that built the second model was a call he made, so neither that framing nor the departmental split comes back* produces a guard that survives ten versions. **Write the second kind.**

**A predicted line count is an estimate, not a verification, and never a fact for this file (V43).** A handoff note may include an expected delta as a rough sanity signal, but it should say plainly that **string checks are the real proof** — old strings at zero, new strings present, no em dashes, no forbidden words. Those are measurable before and after; a line delta depends on how the text happens to wrap and is easy to get wrong. **Any line count that lands in this document must be measured on the pushed file, not carried over from the note.** V42 recorded a predicted "−1 line" that never happened, which is what this rule exists to prevent.

### Both
**Strategic discussion before code.** David thinks decisions through conversationally first; code changes wait for an explicit go-ahead. Flag conflicts with established decisions proactively rather than executing silently, then hold the position if the reasoning is sound. "Don't touch nothing else" means strict boundaries.

**Document versioning.** This file is maintained as a complete drop-in replacement (never a patch), with full change history. Read live code as the source of truth when producing a new version, to catch drift.

**No phantom sources.** Do not cite a document that does not exist in the project. Two files do: this one and the Content Calendar. If an answer needs anything else, it needs David. The Content Calendar's *The Ladder* and *The Spines as a Book Series* sections are valid citations (the marketing strategy home); this file stays the home for the rungs and their prices. The GlowPT/AWS backend architecture and the legal/entity work are **not** documents in this project — do not cite them beyond the Tech Stack boundary and the footer legal-name fact.

**Dates live in the Content Calendar, not here.** This file has now been wrong about Issue 1's ship date twice (August 4 recorded while the calendar said August 18, which then moved to September 1). Where a date is needed here it is a pointer, not an authority. **Check the calendar.**

**Secrets.** When giving David a command or query that could return a secret (API key, service-role key, password, token, connection string), redact it in the command itself so it never renders on screen. Build the redaction in; do not warn and hope.

---

## Change History

- **V46** — **Two changes pushed to `App.jsx` (`9b8d819`), then this documentation pass. No price, no other locked value, no structural rule moved.** **(1) Footer fine print re-centered by `text-align`, a cross-browser robustness fix.** David reported the footer copyright reading off-center across browsers, and that it had been "fixed" more than once before. Measured in Chromium it was dead-centered (0.0px off the wordmark), which is the tell that the bug is *fragility*, not a static offset: the "franklinaisolutions.com" and "© {year}" lines were centered only by the footer text column's `align-items: center` shrinking each bare `<span>` to its own text width and dropping that box on the column's center — flex intrinsic-width behavior that differs across engines (Safari most notoriously), so the copyright drifted for David even after V31 removed the old per-line nudges. The fix: the text column gains `textAlign: 'center'`, and both fine-print spans gain `alignSelf: 'stretch'` so each spans the full column width and centers its glyphs by `text-align` — the browser-universal method, with no cross-engine ambiguity. The wordmark home link (lines 1–2) is untouched and still centers by `align-items`, so the F-vs-crossbar vertical math and the `translateX(-14px)` brand-row dial are unchanged; only the two fine-print lines' centering *mechanism* moved. Verified in-engine before the push by measuring the copyright span: it now spans the full column width (160.5px, same left edge as the wordmark) with its glyph-center exactly on the wordmark's center — 0.0px, identical result, robust mechanism. This is the same lesson as the retired nudges (do not hand-tune a centering symptom; use a mechanism centered by construction), applied one level deeper. **(2) GlowPT modal description reworded** from "Patients walk out doing great, then drift off before their plan of care is done. GlowPT keeps them engaged between visits, so more of them finish. Completed plans of care are what keep a clinic full and its episodes complete." to **"Patients walk out doing great, then drift off before their plan of care is done. The GlowPT app keeps patients engaged between visits, so more plans of care get completed and the clinic stays full."** — three sentences to two; "GlowPT" → "The GlowPT app" (naming it plainly as the app, which prompted a Copy Rules clarification that the one-word product-name rule governs the token "GlowPT," not whether "app" may sit beside it); and the old third sentence's clinic-economics point folded into the second's close, dropping "its episodes complete" as billing jargon. This is the modal *description*, not a feature bullet; the eight bullets and the bullet-8 "flags" open item are untouched. String-verified: old tails ("so more of them finish," "episodes complete") at zero, both new fragments present, no em dashes, no forbidden words, no console errors on the running dev server. Sections updated: title, header summary (rewritten for V46, V45 folded into "everything else from Version 45," V44/V43/V42/V41/V40 kept as their carried-forward paragraphs), Brand Kit typography (footer small-print row), Design Rules (new text-align-centering rule), Horizontal Centering (new fine-print-centering note), Fine-Print Left-Nudges (V46 hardening note + heading), Footer (text column + lines 3/4 + the method note), Page Sections (GlowPT Modal description), Copy Rules (GlowPT / "the GlowPT app" clarification), CSS/JSX Boundary (Footer note), Process (a "measure visual fixes in the browser" clause on step 2), Locked Inline Styles (footer text column + address + copyright rows, and a new GlowPT modal description row), Change History.
- **V45** — **Process change: Claude Code now maintains this document. No copy, no code, and no locked value moved.** The rule banning Code from editing `CLAUDE.md` is retired, along with the loop it forced: every push came back to claude.ai for a documentation pass, went out as a downloaded file, and had to be placed by hand in **two** homes — the repo and the claude.ai project instructions. **V44 is the case study for why that failed.** Four Code sessions pushed ahead of the doc, and the resulting handoff note asked for two edits V41 and V42 had already recorded, which is the signature of a Code session reading a repo `CLAUDE.md` several versions stale. The hand-placement step was the leak. **The new loop:** decisions are argued in claude.ai, a handoff note carries the strings *and the reasoning* into Code, Code pushes the code and then regenerates `CLAUDE.md` whole as a separate second step and pushes it, and David pastes the finished file into claude.ai. One placement instead of two, and the copy that went stale is now written by the tool that lives in the repo. **Four conditions were made explicit:** (1) **regenerate whole, never patch** — the load-bearing rule, and the V44 bullet-numbering error is the evidence, having survived seven versions because no pass forced a full read; (2) **the doc is written after the code push, never mid-task**; (3) **the handoff note must carry editorial reasoning**, since the *why* is the one input Code cannot derive from a diff; (4) **the repo copy is now authoritative and the claude.ai copy is the one that can lag** — an inversion of every prior version — with a version-number mismatch as the tell in either direction. **What did not move:** the Content Calendar stays a claude.ai document, and strategy, positioning, copy decisions, and newsletter drafting all stay in claude.ai. What moved is the recording, not the deciding. Sections updated: title, header summary, Working in Claude Code vs claude.ai (tool-split table, handoff-note precedence, the new two-homes note), Source File Rule (which copy goes stale, now inverted), Process (In Claude Code rewritten with the five-step sequence and three rules; In claude.ai scoped; Handoff notes into Code given the reasoning requirement), Change History.
- **V44** — **Documentation only; no code written this pass.** Four Claude Code sessions (`b810743`, `a7ae6ba`, `badc1f0`, `52204a6`) pushed copy edits straight to `main` ahead of the doc; this version catches the doc up, written after reading the live `App.jsx` directly. **Three live copy changes recorded:** (1) the newsletter description's tail changed in both places to "it takes a clear look at what's working and not working in your practice, and what to do about it"; (2) the e-book teaser opens "A downloadable guide" instead of "A short guide"; (3) the GlowPT teaser became "An app for physical therapy patients to stay engaged between visits, with zero work for your therapists" (subject moved from practice to patient; "keep patients engaged" → "stay engaged"), with the Positioning note reworded to match. **Two corrections found by reading the file:** (4) the GlowPT modal's EMR bullet sits **seventh, not eighth** (V37 introduced it as "the eighth," meaning it brought the count to eight; the position was mis-recorded ever since); (5) the real eighth bullet — "A free weekly roster summary and a clinic dashboard to follow activity, trends, and flags." — had never been recorded, and all eight are now written out in live order. **One new open item:** "flags" in bullet 8 may be stale and must be verified against the finished app before pilot. Sections updated: title, header summary, Source File Rule, Business (Positioning note), Newsletter Card, Brand Kit typography, Page Sections (Newsletter + Available + GlowPT Modal), Copy Rules, Locked Inline Styles, Change History.
- **V43** — **Documentation only; no code change.** (1) The V42 "−1 line" claim corrected: `App.jsx` was 636 lines before and after — the figure was a prediction copied from a handoff note, never measured. (2) The Source File Rule note updated: the snapshot is back in sync. (3) New Process rule: a predicted line count is an estimate, not a verification, and never a fact for this file; string checks are the real proof, and any line count here must be measured on the pushed file.
- **V42** — **Two copy edits in the `About` component; the founder bio rewritten.** (1) Bio paragraph 1 replaced whole — the present-tense job title "David is the operations manager for a busy clinical practice" is gone, replaced by "David has spent decades building systems and processes in both nonprofit and for-profit businesses, across healthcare, research, and education." (2) Paragraph 2's opening changed from "That same drive" to "That experience" so it points at the decades rather than a deleted sentence. The bio now names no job title, no employer, and no niche, all deliberate. New Copy Rule banning any job title, employer, or present-tense employment fact from all site copy; four-point guard added in Bio (About Section).
- **V41** — **Three copy edits plus four documentation corrections.** (1) E-book modal body paragraphs 1 and 2 rewritten to remove two retired framings (the front-desk-versus-therapist split and "Nobody decided"). (2) The newsletter audience line changed from "For those who run a physical therapy practice." to "For physical therapy practices." in both locations. (3) Corrections: Issue 1 ships September 1, 2026; the spearhead reads "insurance practice with cash-model marketing"; the e-book's status restated (card/modal live, book unwritten, checkout unwired); "cash practice" and "advanced care" are interchangeable and neither is retired. New rules: *copy that appears twice must move twice*, both retired framings banned from all site copy, handoff-note precedence, dates point at the Content Calendar.
- **V40** — **Locked in the newsletter form's wiring + success behavior (documentation only).** JS-handled submit (field `email_address`); on success confirm in the modal then auto-close; confirmation copy tracks Kit's double opt-in setting; on error keep the modal open with a brief "Subscribing…" disabled state. Form remains unwired.
- **V39** — **Newsletter signup moved into a modal; reverses the V28 "keep inline" decision.** The email field left the card; the card rests as header → subhead → description → a single "Subscribe for Free" ghost button. New `NewsletterModal` (the site's fourth), mirroring `EbookModal`/`GlowPTModal`. Still unwired.
- **V38** — **Available card spacing tightened by eye.** Heading→first-product 20px → 12px; between-products 36px → 28px. Supersedes V34's values.
- **V37** — **Both product-card teasers rewritten for parallel structure; GlowPT's EMR claim moved into its modal.** E-book teaser → "A short guide…"; GlowPT teaser shortened; "Runs alongside any EMR…" preserved as a new modal feature bullet. *(V41 note: this entry's claim that "cash practice" replaced "advanced care" was wrong. V44 note: the EMR bullet sits seventh, not eighth.)*
- **V36** — **Newsletter masthead flipped + redundant teaser sentence cut.** "Newsletter" became the blue upright header, "The Operator" the white upright subhead. The V26 masthead exception retired — nothing on the page is italic.
- **V35** — **Hero label tightened + one-word teaser trim.** "Custom Apps & Tools" `lineHeight` 1.3 → 1.1 and `marginBottom` → `clamp(2px, 1vw, 8px)`; e-book teaser dropped "short."
- **V34** — **Available card spacing nudged by eye.** Heading→first-product 10px → 20px; between-products 48px → 36px. Superseded by V38.
- **V33** — **Available card spacing refined for cross-card consistency.** Heading→first-product pulled back to ~10px; both product titles gained `marginBottom: '10px'`. Superseded by V34/V38.
- **V32** — **Reconciliation e-book shipped to the Available card as a second, self-serve product, listed first, above GlowPT; two documented decisions reversed.** New `EbookModal`; the Available card went from one product to two; e-book **first** (was "below GlowPT") and a **modal** (was "links out to an external checkout"). *(V41 note: paragraphs 1 and 2 of that modal body were rewritten in V41; the "live before Issue 1 (Aug 4, 2026)" line is doubly stale.)*
- **V31** — **Fine-print nudges retired for true centering; two dead files deleted.** All four per-line `translateX(-2px)` nudges removed. `src/components/Nav.jsx` and `Footer.jsx` plus their orphaned CSS deleted; `src/components/` now holds only `KiteLogo.jsx`. *(V46 note: the footer fine print still centered by flex shrink-to-content after this, which is what V46 replaced with text-align.)*
- **V30** — **Nav lockup nudge and subline weight bump (700 → 800), sublines kept in sync.** Both nav and footer sublines now Inter 800. Nav lockup dial returned to `-26px`.
- **V29** — **Wordmark-subline font: Playfair Display 400 → Inter 700, nav and footer.** A deliberate mixed-type lockup.
- **V28** — **Nav/footer lockup micro-adjustments and a newsletter button relabel.** Nav wordmark dropped so the F sits level with the kite crossbar; footer dial to `translateX(-14px)`; "Subscribe Free" → "Subscribe for Free". A modal for the newsletter email field was considered and declined *(reversed in V39)*.
- **V27** — **Wordmark lockup: "Philadelphia" → "Solutions, LLC", enlarged sublines, trimmed copyright, and a footer recenter.** The footer text-column inner pull removed so the footer is built exactly like the nav; the copyright trimmed to "© {year}".
- **V26** — **Operator-card rebalance, italic masthead, tighter card typography, and two live-code drift fixes.** First session run in Claude Code (the instructions now live in the repo as `CLAUDE.md`). Card-heading `lineHeight: '1.2'` added; card padding tightened; the `index.html` font import corrected; the meta description cleaned. *(The italic masthead itself was retired in V36.)*
- **V25** — **Newsletter card masthead restructure, Subscribe-button alignment fix, and terminology correction.** "Strip" retired for "card"; the Subscribe button pinned to the input's 44px with `marginTop: '0'`; the promise-line coupling retired.
- **V24** — **Title-case button sweep and The Operator newsletter signup built and live.** Kit chosen as the newsletter platform; new promise line; footer drift folded in; the legal entity noted.
- **V23** — Hero headline "Built for Your Business" → **"Built for Your Practice"**; subline → **"Built to Handle HIPAA"**; positioning reversed to niche-forward; the Tech Stack boundary added (GlowPT → AWS, site + McKenzie → Supabase).
- **V22** — Document correction only; the V21 cross-document drift resolved once the Content Calendar absorbed *The Ladder* and *The Spines as a Book Series*.
- **V21** — Contact email → `david@franklinaisolutions.com`; Content Calendar summary aligned; the Offer Ladder section added.
- **V20** — Four UI refinements: primary CTAs shrunk ~25% with explicit inline sizing; hero label marginBottom made responsive; six card headings unified to one responsive gap; About heading renamed "Behind FranklinAI."
- **V19** — Business Plan deleted; Content Calendar the only source-of-truth document; What No Longer Has a Home and the no-phantom-sources rule added.
- **V18** — Source-of-truth repointed; Working in Claude Code vs claude.ai added; GlowPT modal exercise-plan claim removed.
- **V17** — Fine-print left-nudges added; nav/footer values reconciled to live. *(Retired in V31.)*
- **V16** — Available card divider removed and the GlowPT wrapper `<div>` deleted.
- **V15** — Clarity removed from the site entirely.
- **V14** — GlowPT teaser rewritten verb-first.
- **V13** — Clarity teaser expanded; "in plain English" removed and banned.
- **V12** — Gold retired to the logo bolt only; product names, founder, and McKenzie names moved to white.
