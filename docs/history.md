# FranklinAI — archived history

**The narrative that used to live in `CLAUDE.md`, moved here 2026-09-26. Nothing was
deleted; every byte below was cut verbatim.**

CLAUDE.md loads at the start of every session, so it holds the guide and the rules.
This file does not load automatically. Read it when you need the reasoning behind an
old decision, or grep it. `git log` carries much of the same detail.

**Why:** on 2026-09-26 CLAUDE.md measured 167,777 bytes, up ~42 KB in one day (V56 and
V57), because each version wrote a long narrative and a new "Everything else from
Version N remains in force" block. Method: the "What may be added to this file"
section of CLAUDE.md, copied from the GlowPT repo's 2026-09-12 trim.

**Sections, newest bank first.** When a later trim banks more, add a new numbered
section ABOVE section 1 and say what it holds.

0b. Lines replaced in V60 (glowpt private, this repo public).
0. Lines replaced in V59 (the claude.ai pointer).
1. The full text of CLAUDE.md Version 57, exactly as it stood before the V58 trim.
2. `AWS-MIGRATION-HANDOFF.md`, the working note from the 2026-09-25 move to Amplify.
3. `CLAUDE-MD-TRIM-HANDOFF.md`, the note that started the V58 trim.

---

# 0b. LINES REPLACED IN V60 (2026-09-26): glowpt made private, this repo kept public

> **There is ONE copy of this document: `CLAUDE.md` on `main` in the repo (since V59).** The claude.ai project instructions are a short pointer telling each claude.ai session to fetch `https://raw.githubusercontent.com/besoulful-design/franklinai-v2/main/CLAUDE.md` and state the version it read. **Nothing is pasted into claude.ai any more.** ⚠️ **The pointer works only while the repo is PUBLIC**; if it is made private, claude.ai needs another route (GitHub linked to the project, or pasting again) and this note must change. See Open Items.

| **Public vs private repos — DECIDE** | Found 2026-09-26: **both `franklinai-v2` and `glowpt` are PUBLIC on GitHub**, never a conscious choice. Anyone can read all code, history and both CLAUDE.md files (here: AWS account number, zone ID, the AWS root-email alias, Kit setup; no passwords or keys). **GlowPT is the bigger concern** (the HIPAA product, contract drafts). Making a repo private is David's click in GitHub (Settings → General → Danger Zone → Change visibility). **Consequences:** Amplify's GitHub app keeps building private repos; **this repo going private breaks the claude.ai pointer**; **going private does not un-publish what was already public**, so any secret ever committed must be rotated regardless. The GlowPT side is GlowPT-rooted work. |

- **V59** title line: `# FranklinAI — Project Instructions (Version 59, Current)`

---

# 0. LINES REPLACED IN V59 (2026-09-26): claude.ai reads CLAUDE.md from GitHub

Each line below was replaced in place; the new wording is in CLAUDE.md.

- **Measured at V58:** `App.jsx` is **735 lines**; the `$350` decoy sits at **lines 99 and 510**.

# FranklinAI — Project Instructions (Version 58, Current)

> **The version number on the first line is how David tells whether the claude.ai copy is current.** Bump it whenever this file changes and add a one-line Change History entry.

> **Which copy of this document goes stale, and the tell.** Code writes `CLAUDE.md` in the repo, so the repo is current by construction; the **claude.ai project instructions** are the copy that lags. **The tell is a version-number mismatch**, which is why the version is on the first line.

**This file lives in two places and is one file.** In claude.ai it is the project instructions. In the repo it is `CLAUDE.md` at the root. **Do not maintain a Code-tuned variant and a claude.ai-tuned variant.**

6. **Tell David the new version number and report the file's size and delta.** **Print the whole document in chat only when David asks for it** (then in one fenced block with four backticks, since the file contains triple-backtick blocks; no clipboard, no file card).

claude.ai receives it as a pasted copy (or reads it from GitHub, if the project is linked) and reads it as spec.

| **Dead `src/components/KiteLogo.jsx`** | Nothing imports it; a different mark. Safe to delete in a cleanup. |

---

# 1. FULL TEXT OF CLAUDE.md VERSION 57, BEFORE THE V58 TRIM (2026-09-26)

# FranklinAI — Project Instructions (Version 57, Current)

> **READ THIS FILE BEFORE MAKING ANY CHANGE TO THIS REPO.** Not "skim the section you think applies" — read it. V48 exists partly because a Code session spent an entire morning re-deriving a footer geometry this document already specified, and shipped four wrong pushes doing it. **If a value looks arbitrary, it is almost certainly hand-tuned and documented. Look it up here first.**

> **Version 57 updates:** **The Operator's signup is live and wired to Kit, and Kit now sends as franklinaisolutions.com.** Everything was done on 2026-09-25 from a claude.ai handoff note, and David confirmed each piece before this document was cut. **Three code changes, all pushed:** (1) **`d89f4f0`** lines the `EbookModal`'s first two paragraphs up with the finished book ("the end of their **care**", "set out to **build** two businesses"), **superseding V41's locked paragraph text**, because **the book is now the source every surface lines up behind**; (2) **`8024666`** wires `NewsletterModal` to **Kit form `9962049`** exactly per the V40 plan (a `fetch`, field `email_address`, **"Almost there. Check your email to confirm."** because double opt-in is ON, auto-close, a gentle error, a `Subscribing…` state), confirmed end to end by David **on the Mac and on an iPhone**; (3) **`fb01e32`** gitignores `.claude/settings.local.json`. **Outside the repo:** a Kit account now exists and its settings are recorded in a new section, **Kit (newsletter platform)**, because nothing in git shows them; and **four records were added to the Route 53 zone** so Kit sends as the domain (`ckespa`, `cka._domainkey`, `cka2._domainkey`, and a **monitor-only DMARC `p=none`**, added deliberately with David's yes). Kit validated the domain, Gmail's "via n.convertkit.com" label is gone, and **David tested his work email both ways afterwards**. **Two process facts are new:** David **waived the V55 "AWS work runs from a GlowPT-rooted session" rule for this domain's DNS** and created a narrow Claude Code permission file for it; and **Claude cannot grant itself permissions**, so any such rule is David's to add. **Next session: the e-book checkout on Kit Commerce** (decided, not built; "Buy the Guide" is still `href="#"`). **Also open: a "mystery third signup"** whose iPhone confirm tap never reached Kit; see Open Items. `App.jsx` now measures **735 lines**; the `$350` decoy sits at **lines 99 and 510**.

> **Everything else from Version 56 remains in force:** **franklinaisolutions.com moved off Netlify onto AWS Amplify Hosting on 2026-09-25, with no downtime and no lost mail.** It lives in AWS account **`franklinai-web` (359813812260)** in the org's `Workloads` OU, region `us-east-1`; DNS is a **Route 53 zone in the same account**; GoDaddy is registrar only. The move changed three build files (`amplify.yml`, `.nvmrc` pinning Node 24, `customHttp.yml`, commit `0279ffe`) and no site code; every push to `main` deploys through Amplify. David's work email is delivered by records in this zone, which is why the V56 method (inventory, copy exactly, verify on both providers, test mail both ways) exists and was reused in V57. **Netlify is a standby until David deletes the franklinai site and its DNS zone**; after that Netlify hosts only McKenzie.

> **Everything else from Version 55 remains in force:** the *Working across the two repos* rule that **a session's ROOT project sets its powers**, recorded after the V54 session (rooted here, doing GlowPT layout work) read from the outside as a stray thread and cost a 2026-09-01 GlowPT session to untangle. *(V57 narrows it for one case: Route 53 record work for franklinaisolutions.com may now run from this root. See that section.)* The companion rule lives in the GlowPT repo's `CLAUDE.md`.

> **Everything else from Version 54 remains in force:** **the legal name in both lockups is `FranklinAI Solutions LLC` with NO comma** — the form used in both attorney-review contract drafts, in glowpt.app's `src/lib/legal.js`, and in the **AWS Company-name field the org BAA binds to**. The change was two text nodes with every dial (`-26px`, `-14px`, `-3px`) untouched, measured to move neither lockup ("FranklinAI" is the widest line and sets both column widths) and confirmed by David across browsers. The V54 rules stand: **the entity is written with no comma anywhere, on either site**; **a two-sentence line that must break identically everywhere is two elements, not one string**; **"closed" governs geometry, not every character** — a closed section can take a copy change if you prove it moves nothing.

> **Everything else from Version 53 remains in force:** feature bullet 3 reads **"One subscription covers the clinic and the patients join for free."** **The problem it fixed was a bare "for free" at the end of a clause:** it attaches to whatever the reader last held in mind, and with a `$350` price sitting directly below it, that was the *subscription*. Giving the phrase an explicit subject — *the patients* join for free — pins it. **The general rule this left behind is in Copy Rules: never end a clause on a floating "for free" or "free" where a price is nearby.** **David found this himself**, after being told the same thing when V52 shipped and choosing to keep his wording; he came back to it unprompted minutes later. That produced the standing process rule that **a flagged-and-declined concern is parked in Open Items, not dropped.**

> **Everything else from Version 52 remains in force:** **the two sites' feature bullets are ONE list living in two repos** — eight bullets, word-identical, same order, `features` here and `whatGlowptIs.points` in `glowpt/src/lib/marketing.js`, each carrying a comment naming the other. **The old "glowpt.app carries 5 of the 8, do not reconcile" instruction stays retired and deleted.** The pitch's second sentence is **"More completed plans of care and the clinic stays full."** on all four surfaces, lifted from feature bullet 5 so the lead and the bullet echo **on purpose**. The `$350` decoy sits at **lines 99 and 510** *(re-measured at V57; V57's newsletter wiring pushed the second one down from 449)*, and those numbers are a hint rather than an address. The two V52 process rules also stand: **when a rule is reversed, delete the old instruction rather than parking it beside the new one**, and **"settled" belongs to David, not to this document.**

> **Everything else from Version 51 remains in force:** **the GlowPT pitch is two sentences, and the two sites deliberately DIFFER on the first one.** This site says **"The GlowPT app keeps physical therapy patients engaged between visits."**; **glowpt.app carries a shorter first sentence with no niche** ("The GlowPT app engages patients between visits.") because that page is already GlowPT-branded, so the words would be redundant there. **The second sentence is identical on all four surfaces and must stay that way.** **V50's retirement of the niche clause stays REVERSED** — see *Where the niche is named and where it is not*.

> **Everything else from Version 50 remains in force:** the discipline that **the GlowPT pitch is one shared idea across four surfaces**; that **"Zero work for your therapists" survives only as modal bullet 6**; that **the repetition between glowpt.app's hero and its More Info modal is deliberate** and must not be "fixed"; and that the GlowPT-repo `docs/commercial-handoff.md` is the source for GlowPT commercial facts, **with the GlowPT code winning on any disagreement.**

> **Everything else from Version 49 remains in force:** **GlowPT is a two-door product and the modal says so.** The modal carries a **ghost** "Bring GlowPT to Your Clinic" to **`https://glowpt.app/onboard`** in a new tab, above a **filled** "Book a Free Discovery Call"; the subline reads **"Sign up online, or book a call first."**; the buttons are ordered self-serve first with **the styles NOT flipped**, so the filled style stays exclusive to the discovery call site-wide; **feature bullet 3 still states there is no patient limit** *(V52 and V53 both rephrased it; the claim is unchanged)*; V44's open item on bullet 8's word "flags" is closed. The two standing rules from V49 also hold: **copy rules travel with the VOICE, not the repo**, and **edit and push directly in this repo, never hand David a copy-paste command** *(V57 records the one exception: a permission only David can grant)*.

> **Everything else from Version 48 remains in force:** **the footer copyright line is fixed and the footer lockup is closed.** The gap after the `©` symbol is a **fixed 2px CSS margin** (`&copy;<span style={{ marginLeft: '2px' }}>{year}</span>`), deterministic in every browser unlike a thin-space glyph. The copyright line carries a deliberate **`translateX(-3px)`** optical correction, the only per-line nudge anywhere on the page: the line is geometrically centered to 0.00px, but `©` is a light hollow circle beside four solid digits, so the ink weight leans right by roughly 2.2px, and solving for a balancing gap returns a *negative* number, which proves no amount of tightening can fix it. **`-3px` was landed by David's eye against the live site**; the arithmetic favored `-2px`. This partially reverses V31. The footer lockup is **closed**: brand row `display: flex`, `alignItems: 'flex-start'`, `gap: '4px'`, **`transform: 'translateX(-14px)'`**, kite left, text column holding all four lines. **Four things were tried against it and all reverted; the list is in Footer so nobody repeats them.** Both V48 process rules stand: read this document before changing anything, and do not regenerate it until David confirms the fix works.

> **Everything else from Version 47 remains in force:** the footer text column is **block layout, not flex** — a plain block with `textAlign: 'center'` in which every line is `display: 'block'` and centers by `text-align`. **The V47 general rule is the house standard: center a stack of differently-sized lines by block + `text-align`, never by flex shrink-to-content.**

> **Everything else from Version 46 remains in force:** the Copy Rules clarification that the one-word product-name rule governs the token "GlowPT" itself, not whether the word "app" may sit beside it. *(**V46's two-sentence modal description is RETIRED by V50** — the setup sentence "Patients walk out doing great..." is deleted and stays deleted on both sites.)*

> **Everything else from Version 45 remains in force:** the process change that made **Claude Code the maintainer of this document.** Decisions are argued in claude.ai, a handoff note carries the strings *and the editorial reasoning* into Code, Code pushes the code and **then** regenerates `CLAUDE.md` whole as a separate second step. **Four conditions keep it honest:** (1) **regenerate whole, never patch**; (2) **the doc is written last, after the code push**, and as of V48 not until David confirms the change worked; (3) **the handoff note must carry the reasoning, not just find/replace strings**; (4) **the repo copy is authoritative and the claude.ai project instructions are the copy that can lag**, with a version-number mismatch as the tell. The Content Calendar stays a claude.ai document, and strategy, positioning, copy decisions, and newsletter drafting all stay in claude.ai. What moved is the *recording*, not the *deciding*.

> **Everything else from Version 44 remains in force:** the two surviving V44 copy records (the newsletter description's tail reads **"what's working and not working in your practice, and what to do about it"**; the e-book teaser opens **"A downloadable guide"**), and the correction that the GlowPT modal's **EMR bullet sits seventh, not eighth**. **The V44 GlowPT teaser is RETIRED**, replaced in V50 and rewritten in V51 and V52. *(V49 closes V44's open item on bullet 8's word "flags": it is confirmed live in the product.)*
>
> **Also carried forward from Version 43:** the rule that **a predicted line count is an estimate, never a verification, and never a fact for this file** — string checks are the proof, and any line count here must be measured on the pushed file.
>
> **Also carried forward from Version 42:** the two V42 copy edits in `About` — bio paragraph 1 replaced whole, paragraph 2's opening changed to **"That experience"**. The bio names **no job title, no employer, and no niche**, all deliberate, with the four-point guard in **Bio (About Section)**. The **Copy Rule banning any job title, employer, or present-tense employment fact from all site copy** stands.

> **Everything else from Version 41 remains in force:** the **e-book modal's first two body paragraphs** carrying the corrected editorial frame (the retired "nobody decided" accident framing and the retired front-desk-versus-therapist split are both gone) *(V57 changed two words in them to match the book; the frame is untouched)*, and the **newsletter audience line "For physical therapy practices."** in **both** places it appears; the V41 documentation corrections (the spearhead reads "insurance practice with cash-model marketing"; "cash practice" and "advanced care" are interchangeable and neither is retired); and the V41 standing rules (*copy that appears twice must move twice*, the ban on both retired framings, a handoff note superseding this file for its session, and dates pointing at the Content Calendar).
>
> **Also carried forward from Version 40:** the newsletter form's **wiring and success behavior**, **built in V57 exactly as planned** — a **JS-handled submit** (a `fetch`, not a plain form POST); on success **an in-modal confirmation then auto-close**; **confirmation copy tracking Kit's double opt-in setting**; and a **keep-the-modal-open error state** with a brief "Subscribing…" disabled button state, field named `email_address`. Also carried forward: the V39 newsletter signup in `NewsletterModal`; the V38 Available-card spacing; the V37 parallel product teasers and the EMR modal bullet; the V36 newsletter-masthead flip; the V35 hero-label tightening; the reconciliation e-book's card and modal live as the first product on the Available card ($37, `EbookModal`, ghost "Buy the Guide" at `href="#"`, **still a placeholder at V57**); four intentional `borderTop` dividers; the four-modal scroll-lock; the **"Solutions LLC" subline in Inter 800** in nav and footer *(comma dropped in V54)*; the nav lockup dial `translateX(-26px)` and its F-level-with-crossbar `marginTop`; the **footer lockup dial `translateX(-14px)`**; the footer copyright trimmed to **"© {year}"**; card-heading `lineHeight: '1.2'`; card padding (`paddingTop: '16px'`, `paddingBottom: '24px'`, sides 40); the "Subscribe for Free" ghost-button label; the `index.html` font import and cleaned meta description; the Subscribe/input 44px alignment fix; the niche-forward front door; all buttons title case with no period; **Kit** as the newsletter platform and **Kit Commerce as the book's checkout (decided V57)**; the legal entity **FranklinAI Solutions LLC**; the Content Calendar as the single canonical content/marketing document; `david@franklinaisolutions.com`; the offer-ladder rungs and prices; the Business Plan deleted; the Claude Code vs claude.ai scoping; the Source File Rule; the stack boundary; the F-vs-crossbar method; Clarity retired; gold logo-bolt-only; "in plain English" and "software" banned; no em dashes in site copy; the $350 GlowPT price; the GlowPT exercise-plan exclusion.

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
| Route 53 records for franklinaisolutions.com (V57) | Claude Code, from this root (see *Working across the two repos*) |
| Strategy, positioning, copy decisions, arguing a call through | claude.ai |
| Regenerating **this file** (`CLAUDE.md`) after a push | Claude Code (V45) |
| Producing or revising the **Content Calendar** | claude.ai |
| Newsletter drafting | claude.ai |

**Rules that apply everywhere, both tools, no exceptions:** the Logo Accent gold rule, all locked inline styles and render values, the three-tier heading system, the Copy Rules and Forbidden Words, the CSS/JSX Boundary Rules, and the Design Rules.

> **When a handoff note and this file disagree, the handoff note wins for that session.** Apply the note, push the code, **then** regenerate this document to record it.

---

## Copy Rules Travel With the Voice, Not the Repo — V49

**David's rule, set 2026-08-27.** The **Copy Rules** and **Forbidden Words** in this document bind **anywhere a PT owner reads FranklinAI's words**, including the GlowPT product site and app. They are a property of the voice, not of a folder. **As of V57 that includes Kit:** the confirmation email, the Kit Commerce product page, and every broadcast.

**Why it came up.** glowpt.app shipped copy that broke two FranklinAI rules: the dashboard QR hint said "front desk and **treatment rooms**", and the app carried em dashes throughout. A buyer reads glowpt.app and franklinaisolutions.com in one sitting; they are one house. Worse, "treatment room" is banned *because it is wrong about the buyer's building* — therapists work on the floor, in the gym, in the open clinic — so it does more damage on the product page than it ever could here.

**Fixed 2026-08-27** in the GlowPT repo, from this repo's Code session at David's request, after reading GlowPT's own `CLAUDE.md` first:

- `treatment rooms` → **`treatment areas`**.
- **All 22 user-facing em dashes removed**, across errors, patient encouragement copy, labels, the closed-clinic banner and the patient privacy notice. GlowPT commits `731708f`, `06bbb5b`, `8ce4dad`.
- **Two carve-outs worth knowing, because they generalise:**
  1. **A bare `—` used as an empty-value placeholder is a UI glyph, not prose.** GlowPT's clinic dashboard renders a lone `—` in the Streak column when there is no value. **Six of them survive on purpose. Never fix an em-dash rule with a find-and-replace.**
  2. **A dash used as a LABEL SEPARATOR becomes the middot `·`**, which GlowPT's footer byline already used.
- **The AI prompt must carry the rule or generated text escapes it.** GlowPT's daily patient reflection is written by a model, so no amount of cleaning static strings governs it. Its prompt now ends "Do not use em dashes in your response." **Any future FranklinAI feature that generates user-facing text owes the same instruction.**

> **A later GlowPT session found the same rule had missed a whole directory.** The 2026-08-27 sweep was scoped to `src/`, so the two AWS Lambdas — which write the weekly clinic email and the patient's AI reflection fallback — kept their em dashes for four days. **The generalisable lesson: user-facing copy does not all live in the obvious folder.** Before declaring a copy rule applied anywhere, check the delivery surfaces too, not just the app. **Kit is now one of those surfaces (V57).**

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
  > - **Issue dates live in the Calendar, not here.** This file was wrong about Issue 1's date three times (it recorded September 1, 2026 long after the Calendar moved it). **As of the Calendar's September 25 pass, Issue 1 ships Tuesday, September 29, 2026.** For that and every later issue date, **read the Calendar.**
  > - **The book is now the source (Calendar, September 25 pass).** *What Your Practice Actually Sells* is finished and David declared it the text every other surface lines up behind. **On a sentence a reader meets on more than one surface, the book's wording wins** — a deliberate exception to "the deployed page wins". Issue 1 and the site's `EbookModal` were both brought into line with it (V57).
  > - **The spearhead is the front door, not a leash.** Only **D** and **C** are genuinely downstream of it. **E's lift half and F stand on their own feet.**
  > - **Spine E is two wells: the line and the lift.** Leading with the line is a **strong default, not a law**.
  > - **Two retired framings the site copy must never reintroduce.** **"nobody decided"**, and **the front-desk-versus-therapist split**.
  > - **"cash practice" and "advanced care" are interchangeable, and neither is retired.**
  > - **"The Operator" is the newsletter's title; the masthead standfirst rule is retired.**
  > - **The promise line reads the same on all three surfaces:** issue top, site card and modal, and the Instagram graphic all open on **"For physical therapy practices."**
  > - **The readiness ladder** holds: newsletter (cold follow) → email (a self-paced question) → discovery call (the door).
  > **Read the calendar before drafting anything.**

**This file** covers the **website build**: structure, styling, copy rules, locked values, the product facts the site displays, the **pricing of every rung**, **where the site is hosted and how its DNS is set up** (V56), and **how the Kit account behind the site is configured** (V57). **This file is the authority for everything it states.**

---

## What No Longer Has a Home

The Business Plan also held **market sizing, unit economics, the HIPAA architecture decision, the roadmap, and risks.** None of that moved into this file.

**One thing that used to be homeless now has a home: the offer ladder.** Its **rungs** live in this file; its **marketing strategy** lives in the Content Calendar's *The Ladder* section.

**Still homeless:** the unit economics, the market sizing, the HIPAA architecture reasoning, and the **GlowPT/AWS backend architecture** (which lives in the GlowPT repo). **The legal/entity work** is business territory; only the footer's legal-name display is a site fact.

**The rule that follows: do not reconstruct the homeless parts from memory and do not cite them.** Claude does not have a source for them in this file and should say so plainly.

> **V49 exception, narrow and deliberate.** The **GlowPT** section below records a handful of GlowPT commercial facts — that signup is self-serve, that activation is manual, that a BAA is click-through, that there is no billing yet. They are here **only because the FranklinAI site now links into that flow and its copy must not lie about it.** They are recorded as *marketing constraints*, never as architecture. The GlowPT repo's own `docs/commercial-handoff.md` is the source, and **the GlowPT code wins if the two ever disagree.**

> **The marketing site's own hosting (V56) and its Kit account (V57) are NOT homeless.** Both are this site's infrastructure, not GlowPT's, so they are recorded in full under **Hosting and DNS (AWS)** and **Kit (newsletter platform)**. Only the org-level AWS setup that serves every account (the management account, the org BAA, Identity Center) stays out of this file beyond the facts needed to operate this site.

---

## Business

FranklinAI builds custom web apps and tools for businesses — web apps, internal tools, and client-facing portals — built around a client's specific way of working rather than off-the-shelf templates. Based in Philadelphia, serving local and remote clients.

> **Legal entity (context, not a site-build rule).** Formed as **FranklinAI Solutions LLC** (Pennsylvania); **"FranklinAI"** is the brand / fictitious name. The **wordmark lockup carries the full legal name** — "FranklinAI" over **"Solutions LLC"** in both nav and footer. The footer copyright is just "© {year}".
>
> **⚠️ NO COMMA, as of V54. `FranklinAI Solutions LLC`, never `FranklinAI Solutions, LLC`.** Both lockups carried the comma until 2026-09-01. **The no-comma form is the one that appears everywhere the entity is actually named:** both attorney-review contract drafts in the GlowPT repo, glowpt.app's in-app legal copy (`src/lib/legal.js`), and the **AWS management account's Company-name field, which the org-level BAA binds to.** The comma was display-only and matched nothing. **If a future surface needs the entity name, use the no-comma form and do not reintroduce the comma for typographic taste.** *(V57: the Kit Commerce payout setup will ask for the business behind the account. That is `FranklinAI Solutions LLC`, no comma.)*
>
> **The sibling site now names the entity too (V54).** glowpt.app's landing footer carries a second line under its byline: **`© {year} FranklinAI Solutions LLC`**, computed at render. Its byline stays a credit ("A FranklinAI product · Philadelphia") and the new line is the legal name — two lines doing two jobs, the same division this site's footer uses. **Both sites now spell the entity identically.**

> **The company's work email lives on this domain (V56).** `david@franklinaisolutions.com` is **Microsoft 365, bought through GoDaddy**. It is also David's AWS Identity Center username, the destination of the org's budget alerts, his AWS Builder ID, **and (V57) the Kit account login and The Operator's sending address**. **Its delivery depends on records in this domain's DNS**, which now lives in Route 53. Treat those records as the most dangerous thing in this repo's orbit; see **Hosting and DNS (AWS)**.

**Packaged products under the FranklinAI umbrella:**

- **GlowPT** — a daily patient check-in app for physical therapy clinics. Clinics subscribe; their patients use it free. Separately branded (amber/navy, its own logo, its own site at **glowpt.app**), but on the FranklinAI site it wears FranklinAI's navy-and-blue. **Live on the site, and as of V49 self-serve.** See **GlowPT** below.

- **The reconciliation e-book** — a one-time, self-serve product ($37) titled **"What Your Practice Actually Sells."** **As of V57 the book is written** (about 6,300 words, eleven chapters; the file is David's) and **the card and modal are live**, but **the checkout is not wired**: "Buy the Guide" is still `href="#"`. **Kit Commerce is the decided checkout** and it is the next session's work.

  > **Say this precisely.** The *book* exists and the *shelf listing* is live; **the product is not buyable yet.** The Calendar's rule governs: **a listed product nobody can buy comes off the shelf.** If the checkout is not live by Issue 1, **ask David before touching the card** — it is a Calendar decision, not a Code one — and **do not ship a coming-soon strip or a pre-sell.**

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
>
> **The e-book's Kit Commerce product page MAY name physical therapy (V57).** It is standalone and findable from anywhere, so it has to say who it is for. **The site's e-book card and modal deliberately do not.** Same copy rules on the product page: no em dashes, no forbidden words.

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

**What stopped differing in V56: the hosting.** Both sites are now served by **AWS Amplify Hosting**, each in its own AWS account (this one in `franklinai-web`, GlowPT in `glowpt-prod`), both hosting-only. See **Hosting and DNS (AWS)**.

> **A thin "handoff-only" FranklinAI modal was proposed and rejected.** Do not re-propose it without reading the GlowPT handoff note first. **Note the reasoning has shifted:** the old defence was that this modal was the fuller pitch. It no longer is — both modals now carry the same eight bullets. **The surviving defence is that a visitor should reach the price and the feature list before they reach a signup link**, which is why the self-serve door is one level in rather than on the card.

---

## The Offer Ladder

**The content is free; the ladder is where the money is.**

| Rung | Price | Sells how | On the site | Status |
|---|---|---|---|---|
| **The Operator newsletter** | Free | The free engine. Runs on **Kit**. **Not a product.** | Its own card between Hero and Available | **Live and wired (V57)**, Kit form `9962049`, double opt-in |
| **The reconciliation e-book** | $37, one-time | **Self-serve.** The first paid yes. | **First** product on the Available card; More Info opens `EbookModal` | **Book written; card and modal live; checkout NOT wired** (Kit Commerce decided, next session) |
| **GlowPT** | $350 / month | **Two doors (V49): self-serve at `glowpt.app/onboard`, OR the discovery call.** Both land at the same manual activation gate. | Available card (live); both CTAs in `GlowPTModal` | Live |
| **The custom build** | From $10,000 | Needs the discovery call. | Custom Pricing (live) | Live |

**Why the extra doors do not break the one door.** The newsletter still closes on the discovery call, every issue — one ask. A self-serve $37 file sells from the shelf and the Instagram posts, **never from the newsletter's close.** GlowPT's self-serve door lives **inside a modal on this site and on glowpt.app**, never in the newsletter either. **The "one door" rule governs the newsletter's close, not the site.**

**The e-book, in detail:**

- **Book one is reconciliation** — the spearhead's paid answer. The newsletter gives the diagnosis away free; the book sells the way out.
- **The checkout is Kit Commerce (DECIDED 2026-09-25, not defaulted into).** The merchant-of-record tradeoff was weighed: **Gumroad is merchant of record** and handles US sales tax and EU VAT; **Kit Commerce is not**, so that liability sits with FranklinAI Solutions LLC. **David chose Kit anyway because every buyer lands on the list on purchase, which is the point of the $37 rung.** Record it as decided. **Gumroad and Payhip are the alternative only if Kit Commerce fails in practice.** Do not assume Stripe directly for a one-time file sale (Kit Commerce itself pays out through a Stripe connection, set up inside Kit).
- **The build, for the next session:** David connects payouts in **Kit → Settings → Revenue** (his bank and tax details, entered by him); creates the product (title *What Your Practice Actually Sells*, **$37**, the final file uploaded, a product-page description that may name physical therapy); then Code puts the live product URL on "Buy the Guide" with `target="_blank" rel="noopener noreferrer"`, **styles unchanged**. See **Open Items** for the verification table.
- **Price appears in three places and they move together:** `App.jsx` (the `EbookModal` subline and its Playfair price line), this file, and the Kit product. **$37 in all three.**

---

## Pricing Model

- **GlowPT** — $350 / month, flat, **with no patient limit**. Displayed inside the GlowPT modal. **If this price changes, THREE places move together: `App.jsx`, this file, and the GlowPT repo's `src/lib/marketing.js` (`MONTHLY_PRICE_USD`).**
  > ⚠️ **The GlowPT price line at `glowpt.app/onboard` is a CONTRACT REQUIREMENT, not decoration.** The Subscription Agreement §5.1 says "the subscription fee of $350 per month, **or the amount stated at sign-up**", and that on-screen line IS the amount stated at sign-up. Never remove it, and never edit it as if it were marketing copy.
  >
  > **A related structural note from the GlowPT side (2026-09-01).** That price line is now **two constants rendered as two stacked lines** — `PRICE_LINE` ("$350 per month, per clinic.") and `PATIENTS_FREE_LINE` ("Patients join free.") — because as one string the wrap point was decided by the viewport and stranded "free." alone in iPhone portrait. `PRICE_LINE` is still the §5.1 statement of the amount. **Do not recombine them.**
- **The reconciliation e-book** — **$37**, one-time, displayed inside `EbookModal` (subline + Playfair price line). Not shown on the card. **If this changes, three places move: `App.jsx` (both spots), this file, and the Kit Commerce product.**

**Custom Pricing:**

- **The Build** — From $10,000. Whisper subtext: "New features quoted and built one at a time, as you grow." (Inter 15px, #8892a4, marginTop: '0')
- **Monthly Care** — $350 / month. Optional.

> ## ⚠️ THE `$350` DECOY — read before changing GlowPT's price (V49, line numbers re-measured V57)
>
> **`$350` appears TWICE in `App.jsx` and only one of them is GlowPT.**
>
> - **Line 99**, inside `GlowPTModal`'s footer: **this is GlowPT.**
> - **Line 510**, the `Monthly Care` tier's `price: '$350'` in `Pricing()`: **this is the custom build's optional hosting-and-maintenance retainer.** A completely unrelated product that happens to cost the same.
>
> Previous versions of this file said "if the GlowPT price changes, two places move" without warning that a naive grep returns a decoy. **If GlowPT's price ever moves, line 510 must NOT move with it.**
>
> **These line numbers drift every time anything above them changes** (V49 recorded ~95 and ~434; V52 pushed them to 99 and 449; **V57's newsletter wiring added 61 lines above `Pricing()` and moved the second to 510**). **Treat them as a hint, not an address — confirm by reading the surrounding function name.**

**Order rationale.** The e-book sits first (cheapest paid yes, under the newsletter whose diagnosis it answers), GlowPT second (recurring flagship), then Custom Work as proof, bridging into How It Works and Custom Pricing.

## Primary CTA

"Book a Free Discovery Call" — hero card, GlowPT modal, Discovery CTA card. Never in the nav or footer. **Title case, no period.**

- **Full-page primary buttons (hero + Discovery):** `padding: '11px 22px', fontSize: '14px'`.
- **Modal discovery button:** `padding: '10px 20px', fontSize: '13px'` — deliberately the smallest.

**Scheduling link:** `https://cal.com/david-peterson-40s7lw/free-discovery-call`, opened in a new tab (`target="_blank" rel="noopener noreferrer"`).

> **The filled style is still exclusive to the discovery call, site-wide (reaffirmed V49).** When the GlowPT modal gained a second CTA, the buttons were re-ordered but their **styles were deliberately not swapped**. Every transaction button on the site is a ghost: "Buy the Guide", "Bring GlowPT to Your Clinic", "Subscribe for Free". **Flipping a transaction button to `btn--primary` requires David's explicit say-so**, and it was specifically considered and declined in V49.

## Email Option Under the Discovery CTA

`EmailOption` renders beneath the button on the **Discovery CTA card only**: "Not ready to schedule?" then **"Email"** on its own line (via `<br />`), a mailto to **`david@franklinaisolutions.com`**. **No period.** Inter 15px, #8892a4, link #60a5fa at 600, marginTop 18px. It does NOT appear in the footer, hero, or any modal.

> **Where it sits in the readiness ladder:** the middle rung — a self-paced question for the warm-but-cautious visitor.

## Newsletter Card — Live and Wired (V57)

*The Operator* has **its own card**, between Hero and Available. **As of V57 the form in its modal is wired to Kit** and was confirmed end to end by David on 2026-09-25, on the Mac and on an iPhone. See **Kit (newsletter platform)** for the account behind it.

> **It is a card, not a "strip."** The React component is still named `NewsletterStrip` (legacy name). Do not reintroduce "quiet strip" sizing.

**It is not a product card, and it never goes on the Available card.**

**The masthead lockup (V36 flip, both lines upright):**

- **Header "Newsletter"** — blue `card-heading`, `clamp(36px, 5.5vw, 58px)`, upright, `lineHeight: '1.2'`, `marginBottom: 'clamp(4px, 1.5vw, 10px)'`.
- **Subhead "The Operator"** — white Playfair sub-title, `clamp(30px, 5vw, 35px)`, 800, `lineHeight: '1.1'`, `marginTop: '0'`, `marginBottom: '14px'`, upright.
- **Description** (Inter 15px, #8892a4, `marginTop: '0'`, `marginBottom: '18px'`, `lineHeight: '1.5'`): **"For physical therapy practices. Delivered every other Tuesday, it takes a clear look at what's working and not working in your practice, and what to do about it."**

> **The audience line appears TWICE.** The identical sentence lives in the card description and the `NewsletterModal` description. **They must always move together.** Verify with `grep -c "For physical therapy practices\."` — expected count **2**. *(Measured 2 at V57.)*

**The card's action:**
- **One ghost button: "Subscribe for Free"** (`btn btn--ghost`, inline `marginTop: '0'`), opening `NewsletterModal`. **No email field on the card.**
- **`NewsletterModal`** — the site's **fourth** modal: title **"The Operator"**, subline **"Free to subscribe."** (Inter 14px/600/#8899b0), the **same description line as the card**, then a `borderTop` divider wrapping the form row.
- **The form row (a `<form>` since V57):** an email input (cream #f0e6d3 on rgba(255,255,255,0.04), 1px border rgba(96,165,250,0.3), 8px radius, **16px font to prevent iOS zoom**, `WebkitAppearance: 'none'`, flex `1 1 220px`, maxWidth 280px, 44px tall, **`name="email_address"`, `required`**) and the ghost Subscribe button (**`type="submit"`**).
- **The 44px alignment fix:** `height`/`minHeight: '44px'`, `boxSizing: 'border-box'`, `display: 'inline-flex'`, centering, and **`marginTop: '0'`** (cancels `.btn`'s `margin-top: 8px`). Keep all of them.

**How the wired form behaves (built V57 to the V40 plan):**

| Moment | What happens |
|---|---|
| Submit | `fetch` POST of a `FormData` with **`email_address`** to **`https://app.kit.com/forms/9962049/subscriptions`** (the `KIT_FORM_URL` constant above `NewsletterModal`), header `Accept: application/json`. Kit's endpoint answers any origin (`access-control-allow-origin: *`) with JSON `{"status":"success"}` or `{"status":"failed","errors":{"fields":[...]}}`. |
| In flight | Input and button disabled; the button reads **"Subscribing…"**. |
| Success | The form row is replaced by **"Almost there. Check your email to confirm."** (`role="status"`), and the modal **closes itself after 2.5 seconds**; the X works sooner. *(The plan said "about 2s"; 2.5s was chosen so the line can be read.)* |
| Kit rejects the address | Modal stays open; under the row: **"That email address doesn't look right. Check it and try again."** (`role="alert"`) |
| Anything else fails | Modal stays open; **"That didn’t go through. Please try again in a moment."** |

> **If Kit's double opt-in is ever turned OFF, change the success line to "You're in."** The constant's comment says so too. **Double opt-in is ON** and David chose to keep it on (it keeps fake and mistyped addresses off the list).
>
> **A small nit:** the two error strings are the only strings on the site using a curly apostrophe (`’`, from `’` in the code); every other string uses a straight one. Harmless; make them straight whenever that code is next touched.

> **The email field lives in a modal (V39 — reverses V28).** A bold Subscribe button is the visual magnet, so many visitors reach for the button first; with an inline field that was a dead click. **Keep the modal. Do not re-propose the inline field unless David asks.**

## Tech Stack

React + Vite, plain CSS (no Tailwind), **AWS Amplify Hosting** (V56; Netlify until 2026-09-25), GitHub. **This site has no backend of its own.**

> **This site is a pure static build with NO serverless functions and no env files.** Kit's form endpoint works from the browser (proved V57), and the Kit Commerce checkout is a plain external link, so **none of the remaining wiring requires adding a backend here.** Do not propose one. **Amplify stays hosting-only**, the same role Netlify had and the same role Amplify plays for GlowPT. **The Kit form ID `9962049` is public by nature** (it sits in every Kit embed), so it lives in `App.jsx` as a constant, not in an env file.

**Newsletter platform: Kit.** The form lives inside `NewsletterModal` and is **wired (V57)**. The locked V40 plan is now the built behavior; see **Newsletter Card**.

**The e-book's checkout is an external service** — **Kit Commerce, decided V57**, not yet built. Not part of the React app beyond one `href`.

> **Stack boundary (rewritten V56, extended V57).** This document governs the **FranklinAI marketing site**. **site → AWS Amplify Hosting, account `franklinai-web`, hosting only. Newsletter and (soon) the e-book checkout → Kit, a third-party service configured through its own web app. GlowPT → AWS, account `glowpt-prod`, its own repo. McKenzie Arm Care → Supabase, still hosted on Netlify, its own folder.** This note is the boundary only, never the design; GlowPT's backend architecture lives in the GlowPT repo.

---

## Hosting and DNS (AWS) — V56, records extended V57

**franklinaisolutions.com moved from Netlify to AWS Amplify Hosting on 2026-09-25.** David decided to do it before go-live and **before** wiring Kit and Stripe, because both would want DNS records, and those should be added once, in their final home. **That paid off the same day: Kit's four records went straight into Route 53 (V57).** **Add any future records in Route 53, never in Netlify.**

### Where everything lives

| Thing | Value |
|---|---|
| **AWS account** | **`franklinai-web`, 359813812260**, in the org's **`Workloads`** OU beside `glowpt-prod`. Root email `besoulful+aws-franklinai-web@gmail.com`. **Not** the management account (billing, org BAA, Bedrock) and **never** `glowpt-prod` (patient data). |
| **Region** | **`us-east-1`**, always. |
| **Access** | IAM Identity Center user `david`, permission set `AdministratorAccess`. CLI profile **`franklinai-web`** in `~/.aws/config` (same `sso_session = glowpt` as the other two profiles; one login covers all three for 8 hours). |
| **Amplify app** | name **`franklinai-web`**, appId **`dtrvxjb8lde3p`**, branch **`main`**, default address `https://main.dtrvxjb8lde3p.amplifyapp.com`. Framework "None", SSR disabled, Standard build instance, default build image, **no environment variables**. |
| **Custom domain** | `franklinaisolutions.com` and `www`, both → `main`. Certificate **AMPLIFY_MANAGED** (`*.franklinaisolutions.com`, Amazon RSA 2048), renews itself. CloudFront target `dbgirmwp1juc8.cloudfront.net`. |
| **Route 53 zone** | **`Z0616895187ZTAR49DY5P`**. Nameservers: `ns-561.awsdns-06.net`, `ns-389.awsdns-48.com`, `ns-1501.awsdns-59.org`, `ns-1898.awsdns-45.co.uk`. SOA negative-caching TTL is effectively **900s (15 minutes)**, which matters for new records (see Traps). |
| **Registrar** | **GoDaddy, registrar only.** The only thing that changed there is the nameserver list. **Do not touch anything else at GoDaddy, and never touch the Microsoft 365 tenant, as part of site work.** |
| **GitHub link** | GitHub app **"AWS Amplify (us-east-1)"** on the `besoulful-design` account, repository access **`glowpt` + `franklinai-v2` only**. Removing `glowpt` from that list would break GlowPT's builds. |
| **Cost** | About $1–2/month: ~$0.50 for the zone plus cents per build. The org's $150 budget alarm covers every account. |

> **Observed, not measured (V57):** David reports the site loads noticeably faster on Amplify than it did on Netlify. The likely reasons are CloudFront edges near Philadelphia, the hard caching of Vite's hashed assets that `customHttp.yml` allows, and a tiny single-page site where delivery is most of the load time. **Nobody has timed it**; do not quote a number.

### What lives in the repo, and what does NOT

**In the repo (commit `0279ffe`):**
- **`amplify.yml`** — `nvm install`, `nvm use`, `node --version`, `npm ci`, `npm run build`; artifacts `dist`; caches `node_modules`. Copied from GlowPT with the PHI comments stripped.
- **`.nvmrc`** — **`24`**. Bump Node here, not in `amplify.yml`.
- **`customHttp.yml`** — **HSTS** (`max-age=31536000`) on every response, **`no-cache`** (`public, max-age=0, must-revalidate`) on `**/*.html` so a new deploy shows on the next load. Vite's asset files are content-hashed, so the CDN may cache them hard.

**NOT in the repo — Amplify app settings, read with `aws amplify get-app --app-id dtrvxjb8lde3p --profile franklinai-web`:**
- **Rewrites and redirects, in this order:**
  1. **`https://www.franklinaisolutions.com` → `https://franklinaisolutions.com`, 301.** Added so `www` behaves exactly as it did on Netlify, which 301'd to the apex. Without it Amplify served the page on `www` with a 200.
  2. **`/<*>` → `/index.html`, `404-200`** — Amplify's default. Left as is. This site has no router and is a single page, so GlowPT's worst Amplify surprise (deep links 301ing to a trailing slash, then 404) cannot happen here. **If a router is ever added, do not trust this default rule**: GlowPT had to replace it with a regex SPA rewrite.
- **The domain association** (apex + `www`, managed certificate).

**NOT in the repo — the Kit account's settings (V57).** See **Kit (newsletter platform)**.

**In the repo but NOT in git (V57): `.claude/settings.local.json`**, David's narrow Claude Code permission for this zone, gitignored in `fb01e32`. See *Working across the two repos*.

> **Any change to those settings must be recorded here**, because nothing in git will show it.

### The DNS records, and why the mail ones are sacred

**The zone was copied from Netlify's panel, not from `dig`**, because `dig` cannot list a zone, and GlowPT's zone turned out to hold SES records nobody knew were there. Netlify's panel showed **seven records**; the inventory found one the pre-move note had missed (`email`). **V57 added four for Kit.** Route 53's own listing (`aws route53 list-resource-record-sets --hosted-zone-id Z0616895187ZTAR49DY5P --profile franklinai-web`) is now the authority for what is in the zone.

| Name | Type | Value | What it does |
|---|---|---|---|
| apex | **MX** | `0 franklinaisolutions-com.mail.protection.outlook.com.` | **Delivers David's mail.** |
| apex | **TXT** | `"MS=ms21263178"` | Microsoft 365 domain ownership. |
| apex | **TXT** | `"v=spf1 include:secureserver.net -all"` | SPF. **Looks wrong, is correct**: GoDaddy's SPF chain (`secureserver.net` → `spf-0.secureserver.net`) itself includes `spf.protection.outlook.com`. This is GoDaddy's standard record for Microsoft 365 bought through GoDaddy. **Do not "fix" it, and Kit does not need it changed** (Kit aligns through `ckespa`). |
| `autodiscover` | CNAME | `autodiscover.outlook.com.` | Outlook auto-setup. |
| `email` | CNAME | `email.secureserver.net.` | GoDaddy webmail shortcut. |
| `_b3bc49b38926936e06504b90ca148550` | CNAME | `_2319b19e5e61a60fb914625982143e7d.wzccmgtwzk.acm-validations.aws.` | Certificate validation. **Keep it forever**: renewals re-check it. |
| apex | A (alias) | Amplify / CloudFront | The website. Managed by Amplify. |
| `www` | CNAME | `dbgirmwp1juc8.cloudfront.net` | The website. Managed by Amplify. |
| **`ckespa`** *(V57)* | CNAME | `spf.dm-3a041db7.sg2.convertkit.com.` | **Kit return path / SPF alignment.** TTL 300. |
| **`cka._domainkey`** *(V57)* | CNAME | `dkim.dm-0ecde6d9.sg2.convertkit.com.` | **Kit DKIM key 1.** TTL 300. |
| **`cka2._domainkey`** *(V57)* | CNAME | `dkim2.dm-8d22d771.sg2.convertkit.com.` | **Kit DKIM key 2.** TTL 300. |
| **`_dmarc`** *(V57)* | TXT | `"v=DMARC1; p=none;"` | **DMARC, monitor-only.** Requested by Kit, **added deliberately with David's explicit yes.** `p=none` never blocks or quarantines anything, so it cannot interfere with Microsoft 365 mail; it satisfies Gmail/Yahoo's bulk-sender expectation. TTL 300. |

**Not present, deliberately:** AAAA, CAA, **Microsoft 365 DKIM**, **DNSSEC (no DS record at the registry)**. **Do not add any of them as a side effect of other work.** Tightening DMARC beyond `p=none` (or adding a reporting address) is a legitimate future change, but only as its own change, after checking that both Microsoft 365 mail and Kit mail pass, and tested with a mail round-trip.

> **The rule for every future DNS change on this domain:** one change at a time; **copy any mail or verification record exactly, oddities included**; **before writing a record read off a screenshot, confirm its target resolves** (a typo in a CNAME target is then caught before it exists); verify each record by querying a Route 53 nameserver directly (`dig @ns-561.awsdns-06.net <name> <type>`) and **re-read the apex MX and TXT on the same query** before believing it; and after anything that could touch mail, **David sends a test email both ways** (to and from an outside address). *(V57 followed this exactly: four records, each verified with the mail records re-read, then David's round-trip.)*

### How the switch was made safe (the method, for next time)

This is the method that made GlowPT's move safe, and it worked again here. **Reuse it for McKenzie.**

1. **Inventory** the old zone from the provider's panel, all of it.
2. **Build and prove the new host first** on its private address. Here the Amplify copy was compared **file by file** with the live site: `index.html`, both hashed assets, the favicon, the touch icon and the headshot were **byte-identical**.
3. **Create the new zone and copy every record** except the old host's own website and NS/SOA records.
4. **Issue the certificate BEFORE the switch** by adding Amplify's validation CNAME in the **old** DNS as well (it had to live in Netlify, because Netlify was what the world was reading). This was the one live DNS change before the switch: a brand-new name nothing else used. It validated in about two minutes.
5. **Rehearse the switch** with `curl --resolve <domain>:443:<cloudfront ip>`: this fetches the site from the new host under the real domain name, so the certificate and the `www` redirect can be checked before any visitor sees them.
6. **Compare every record on both providers' nameservers directly**, and check the registry for a **DS record** (a DNSSEC DS left pointing at the old provider would break resolution after the switch). There was none.
7. **Only then, the real switch:** David replaced the four `nsone.net` nameservers at GoDaddy with the four Route 53 ones. The `.com` registry had them within a minute; Cloudflare, Google and Quad9 resolvers were on Route 53 within minutes; Amplify marked the domain AVAILABLE about twenty minutes later. **No downtime, no lost mail**, confirmed by David's test emails both ways.

**The reassurances that were true, and are worth repeating next time:** the nameserver change is reversible (put the old nameservers back); sending mail servers retry for days, so a mistake delays mail rather than losing it; and while resolvers still cache the old nameservers, both providers serve identical mail records and an identical site, so nobody can land on a wrong answer.

### Traps met on the way — do not repeat them

- **`.nvmrc` is read by Netlify too.** Adding it pinned Node for Netlify's builds of the live site as well. That was checked before pushing: a clean Node 24 build produced asset hashes identical to what was live. **Any file Amplify reads may also be read by whatever else still builds the repo.**
- **The Amplify console defaulted to the wrong region.** The GitHub authorization page read **"AWS Amplify (us-east-2)"**. It was cancelled before anything was created. **Check the account name and the region in the console header before every Amplify or Route 53 click.**
- **Safari's pop-up handling breaks the GitHub step inside the Amplify console.** The fix was to go to GitHub directly: **github.com/settings/installations → AWS Amplify (us-east-1) → Configure → Repository access → pick the repo → Save**, then refresh the repository list in Amplify. In that GitHub dropdown, **clicking a repository name is what adds it**; there is no Add button, and already-selected repos do not appear in the dropdown.
- **Never click "Edit YML file" in the Amplify console.** The Amplify GitHub app has write access to `amplify.yml` and can commit it back into the repo. The file in git is the source.
- **No Amplify firewall (WAF).** It is a flat monthly fee that this site does not justify. The console's "Enable firewall" card is to be ignored.
- **The Claude Code safety system blocks `aws organizations` writes and Identity Center permission grants** (creating an account, moving it between OUs, assigning access). Those were done by David in the console with step-by-step clicks.
- **The same system blocks Route 53 record writes from a session rooted here UNLESS the V57 permission file is present** (see *Working across the two repos*). Without it, the first `change-resource-record-sets` in V57 slipped through, and the read-back after it was blocked.
- **The `--hosted-zone-config Comment=...` shorthand splits on commas.** Pass it as JSON. **And zsh globs unquoted `--query ChangeInfo.[Id,Status]`**; quote any JMESPath containing brackets.
- **The AWS console and the terminal are different sessions.** A `aws sso login --profile …` run in the background opens Safari; David approves with Touch ID. **Do not hand him a command to paste.**
- **A brand-new DNS name can "fail validation" for up to 15 minutes (V57).** Kit's first Validate failed although Google, Cloudflare and Quad9 all returned all four records: Kit had looked the names up before they existed and cached the "not found" answer for the zone's negative-caching time. **Wait 15 minutes and validate again; do not change the records.** It passed on the second try.
- **Never click Kit's "Set this up for me" (V57).** It asks to connect Kit to the DNS provider's account. Records are added by hand, one at a time.

### Netlify: standby, then gone

**After the switch, Netlify still builds this repo on every push and still holds the old zone, but nothing points at either.** It is a harmless standby. **After a few quiet days, David deletes the franklinai site and the franklinaisolutions.com DNS zone in Netlify** (the validation CNAME added there goes with the zone; Route 53 keeps its own copy). **Leave McKenzie (`mckenziearmcare.com`) alone**: after that, Netlify hosts only McKenzie, on the Free plan that takes effect 2026-09-27. McKenzie's own move is separate work, rooted in its own folder. **Note that Netlify's copy of the zone does NOT have Kit's four records**, which is fine because nothing reads it.

---

## Kit (newsletter platform) — V57

**Kit's settings live in Kit's web app (`app.kit.com`), not in git.** This section is their record. **Any change made in Kit that affects what readers receive must be recorded here.**

| Thing | Value |
|---|---|
| **Account** | Login **`david@franklinaisolutions.com`**, owner David Peterson, account name **FranklinAI**, website `https://franklinaisolutions.com`. Created 2026-09-25; login email confirmed. |
| **Plan** | **Free "Newsletter" plan.** Kit opened a **14-day Creator-feature trial on 2026-09-25 with NO card entered**; when it lapses (about **2026-10-09**) the account falls back to free. **Do not build anything on features marked 💎 in Kit** (Automation, Apps, sequences; the custom click-tracking domain is Pro), or it breaks when the trial ends. |
| **Form** | **"The Operator site signup"**, **ID `9962049`**, inline, Kit template "Clare", **published**. Its Kit styling is never shown: the site posts to its endpoint from its own form. Its "General → success message" setting is likewise unused by the site. |
| **Double opt-in** | **ON.** Form Settings → Confirmation email: *Send confirmation email* ticked, *Auto-confirm new subscribers* unticked. After confirming, readers land on Kit's default `https://app.kit.com/confirm-subscription` page (kept on purpose: sending them to the site would show no sign they had confirmed). |
| **Confirmation email** | **Still Kit's default copy**, subject "Important: confirm your subscription". It passes the copy rules but sounds like Kit, not David. **A draft in David's voice was offered and parked** (Open Items). The copy rules bind it. |
| **Sender** | From **David Peterson <david@franklinaisolutions.com>**, status confirmed, default. |
| **Verified sending domain** | **`franklinaisolutions.com`, validated 2026-09-25** with the four Route 53 records in *Hosting and DNS*. Gmail's "David Peterson **via n.convertkit.com**" label disappeared from the next email onward. |
| **Mailing address (email footer)** | **Kit's shared stand-in: 600 1st Ave, Ste 330 PMB 92768, Seattle, WA 98104-2246.** Kit explicitly allows it for Kit emails only; **mail sent there is not forwarded.** David's home address was considered and declined for privacy. **Replace it with a USPS PO box** (or the LLC registered agent's address, if the agent permits business mail and forwards it) in **Settings → Email → Mailing address**; the change applies to every later email. **Never print Kit's address anywhere outside Kit.** When a real address goes in, prefix it with **`FranklinAI Solutions LLC, `** so the legal entity rides in every footer. |
| **Brand name in Kit** | "FranklinAI", not the legal name. The legal name belongs in the footer address line (above) and in the Kit Commerce payout setup. |
| **Privacy settings** | GDPR consent page: **Don't show to anyone.** Unsubscribe survey: **off.** |
| **Revenue / Kit Commerce** | **Not set up yet.** Next session. Payouts connect Stripe inside Kit (Settings → Revenue); David enters bank and tax details himself. |
| **Kit MCP** | Available under Settings → Kit MCP; **not connected.** It could let a Claude session read forms and subscribers and draft broadcasts; it would not cover account settings. Connecting it is David's call, and changes Claude Code's configuration. |
| **Test subscribers** | Four, all `besoulful+kit-…@gmail.com` (first, second, third, fourth), all Confirmed. **Before Issue 1, keep one (so David receives each issue as a reader does) and delete the rest.** |

> **Reading Kit's numbers (V57).** The **summary boxes** at the top of Subscribers (Total, New today) **lag** by minutes to an hour; **the list below them, with its "Total: N", is live.** Twice on 2026-09-25 the box read one short while the list was right. **"Opened" can be inflated by Gmail fetching images on arrival**, so treat open rates as rough. The per-subscriber page (click a row) shows Delivered / Opened / Clicked with **exact times on hover**, which is the tool that diagnosed the mystery third signup.

---

## Repo

github.com/besoulful-design/franklinai-v2 · local path `~/Downloads/franklinai-v2`

*(Sibling, separate: github.com/besoulful-design/glowpt · `~/Downloads/glowpt`)*

**Pushing to `main` deploys the live site through Amplify (V56).** Every push is a build: cheap (cents), but batching commits still reads better.

## Domain

franklinaisolutions.com (owned and active). **Registrar GoDaddy; DNS in Route 53 in `franklinai-web` (V56); hosting on Amplify; Kit sends as this domain (V57).** GlowPT's own site: **glowpt.app**.

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
| Cool blue-grey sublines | #8899b0 — modal sublines, and (V57) the newsletter form's error line |
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
| Newsletter success line (V57) | Inter | 400 | 15px, #f0e6d3, lineHeight 1.5, min-height 44px so the modal does not jump |
| Newsletter error line (V57) | Inter | 400 | 14px, #8899b0, lineHeight 1.5, centered |
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
- No em dashes anywhere in copy, ever — **and as of V49 that applies on glowpt.app too, and as of V57 in Kit**
- Dark mode locked via color-scheme: only light
- No step numbers in How It Works *(the `steps` array still carries a `number` field that nothing renders — harmless leftover, same class as the `id="financial-clarity"` on the Available section)*
- Gold is reserved for the logo bolt only
- Responsive sizing uses `clamp()` with **absolute pixel values**
- **All buttons are title case with no period.** Section headings take no period.
- **Form controls are pinned to a matching 44px height** with the button's inherited `.btn` top margin zeroed
- **Center a stack of differently-sized lines by block layout + `text-align: center`, never by flex shrink-to-content (V47).** Make the container a block with `text-align: center` and every line `display: block`. **This is the house standard for any centered stack, not just the footer.**
- **Geometric centering is not always optical centering (V48).** A line whose ink is unevenly weighted can measure 0.00px centered and still read as off-centre. **Verify centering against the reference the eye uses**, and if a line is provably centered but still looks wrong, the remedy is an explicit documented optical correction, not a re-derivation of the layout around it.
- **In a stacked pair of buttons, the BOTTOM one is the stronger position (V49).** It is the terminal action, which is why dialogs put confirm last. Combined with the filled style being the loudest element, **a filled button placed last is the most dominant thing in the block.** Order and weight are two separate levers; do not reach for order when the intent is weight.
- **Copy that appears twice must move twice.** Two strings are duplicated *within this file* by design: the newsletter description (card + modal) and the "Subscribe for Free" label (card + modal). **A third duplication crosses repos: the GlowPT pitch's second sentence and the eight feature bullets (V52).** **A fourth crosses into a document (V57): the `EbookModal`'s first two paragraphs echo the book's chapter 1, and the book wins.**
- **When a two-sentence line must break the same way everywhere, make it two elements, not one string (V54, learned on glowpt.app).** A single string wraps wherever the measure happens to fall, so the same copy breaks cleanly at one width and strands a word at another. Two stacked block elements break identically at every width. **This is the same family as the block + `text-align` standard: control the break, do not hope for it.**
- **A state change inside a modal must not make the modal jump (V57).** The newsletter success line carries `minHeight: '44px'` so it occupies the row it replaces.

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

No email in the footer. **No mailing address in the footer either**, which is why Kit's stand-in address (see **Kit**) needs no matching change on the site.

---

## Scroll Lock on Modals

All four modals (`EbookModal`, `GlowPTModal`, `CaseStudyModal`, `NewsletterModal`) lock page scroll via a `useEffect` setting `document.body.style.overflow = 'hidden'` on mount, restoring on unmount. Each closes on X click or backdrop click. **`NewsletterModal` also closes itself 2.5s after a successful signup (V57)**, through a second `useEffect` that clears its timer on unmount.

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
- **`NewsletterModal`**: title "The Operator", "Free to subscribe." subline, the same description, then a `borderTop` divider wrapping the `<form>` of input + ghost Subscribe button (both 44px, flush).
- **Wired to Kit (V57).** Behavior in **Newsletter Card**.

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
- **Body — three `modal__text` paragraphs (1 and 2 rewritten in V41 and brought into line with the book in V57; 3 unchanged):**
  1. *"Your whole team is being asked to sell advanced care and get patients to the end of their care at the same time. That's not a marketing problem. You're running two business models in one building, an insurance practice and a cash practice, and they're pulling against each other."*
  2. *"You didn't set out to build two businesses, but you chose every piece that built the second one. The tactics arrived built for a business you don't own, and none of them came with a label. So the team gets mixed signals about what the practice is driving at, and every patient feels the seams."*
  3. *"This guide walks you through the fix: decide what your practice actually is, then say it in one sentence your whole team can repeat. Not a tactic, not a tool. The one thing that lets everything else line up behind it."*
  > **What V41 fixed, and why it must not come back.** The old text carried **two retired framings**: the departmental split and the accident framing. **Do not reintroduce either framing anywhere in site copy.**
  >
  > **What V57 changed, and why it must not be undone (`d89f4f0`).** Two words, to match the book's chapter 1: "the end of their **plan of** care" became "the end of their **care**", and "set out to **run** two businesses" became "set out to **build** two businesses". **The book was fine-tuned last and most carefully, so on a sentence a reader meets on more than one surface, the book's wording wins.** Issue 1 was changed to match it in the Calendar; the modal was the last surface on the old wording. **This superseded V41's locked text for paragraphs 1 and 2.** *(A side effect, noticed and parked: paragraph 2 now says "build… built… built" within about twenty words. The book wins; if it ever grates, fix it in the book first. See Open Items.)*
- **Footer** (borderTop hairline, paddingTop 24px, centered): **"$37"** (Playfair 700, 27.7px, blue, no "/ month") then a **ghost** "Buy the Guide" (`padding: '10px 20px', fontSize: '13px'`, **`href="#"` placeholder until the Kit Commerce product exists**; then the live product URL with `target="_blank" rel="noopener noreferrer"`, styles unchanged).

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

**CaseStudyModal:** Scroll-locked. No "Case Study" label inside. Title "McKenzie Arm Care"; full description; 2-column feature list; tech-stack note "Built with React, Supabase, and deployed on Netlify." *(That note describes McKenzie, which is still on Supabase and Netlify, so it stays true after V56. If McKenzie ever moves, this string is site copy and moves with it.)*

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

**These bind anywhere a PT owner reads FranklinAI's words, glowpt.app and Kit included (V49, V57). See Copy Rules Travel With the Voice.**

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
- **The book wins on shared sentences (V57).** Where the `EbookModal` (or any other surface) repeats a sentence from *What Your Practice Actually Sells*, the book's wording is canonical and the surface follows it.
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
| **`NewsletterModal` form row `<form>` (was a `<div>` until V57)** | onSubmit handleSubmit; display 'flex', flexWrap 'wrap', gap '10px', justifyContent 'center', alignItems 'center' |
| **`NewsletterModal` email `<input>`** | **type email, name `email_address`, required, disabled while submitting**; Inter, '16px', #f0e6d3, bg rgba(255,255,255,0.04), 1px border rgba(96,165,250,0.3), radius '8px', padding '10px 14px', height/minHeight '44px', boxSizing 'border-box', outline 'none', WebkitAppearance 'none', flex '1 1 220px', maxWidth '280px' |
| **`NewsletterModal` Subscribe `<button>`** | **type submit, disabled while submitting, label "Subscribing…" while submitting**; `btn btn--ghost`, height/minHeight '44px', boxSizing 'border-box', inline-flex centered, **marginTop '0'** |
| **`NewsletterModal` success `<p>` (V57)** | role 'status'; Inter, '15px', #f0e6d3, lineHeight '1.5', minHeight '44px', display 'flex', alignItems/justifyContent 'center', margin '0'. Text **"Almost there. Check your email to confirm."** |
| **`NewsletterModal` error `<p>` (V57)** | role 'alert'; Inter, '14px', #8899b0, lineHeight '1.5', textAlign 'center', marginTop '12px', marginBottom '0' |
| Available heading `<h2>` | 'clamp(36px, 5.5vw, 58px)', marginBottom 'clamp(4px, 1.5vw, 10px)', lineHeight '1.2' |
| **E-book product name `<h3>`** | Playfair 800, 'clamp(30px, 5vw, 35px)', #ffffff, lineHeight '1.2', **marginTop '12px'**, **marginBottom '10px'** |
| **E-book teaser `<p>`** | **marginBottom '0'** |
| **E-book "More Info" `<button>`** | marginTop '16px' |
| GlowPT product name `<h3>` | Playfair 800, 'clamp(30px, 5vw, 35px)', #ffffff, lineHeight '1.2', **marginTop '28px'**, **marginBottom '10px'** |
| GlowPT teaser `<p>` | no inline overrides (`:last-of-type`) |
| GlowPT "More Info" `<button>` | marginTop '16px' |
| **E-book modal title `<h2>`** | marginTop '6px' |
| **E-book modal subline `<p>`** | Inter, '14px', 600, #8899b0, marginBottom '16px' |
| **E-book modal body `<p>` × 3** | `modal__text`, no inline overrides. **Paragraphs 1 and 2 as of V57.** |
| **E-book modal footer `<div>`** | borderTop, paddingTop '24px', textAlign 'center' |
| **E-book modal price `<p>`** | Playfair 700, '27.7px', #60a5fa, lineHeight '1.45', marginBottom '18px' |
| **E-book "Buy the Guide" `<a>`** | `btn btn--ghost`, padding '10px 20px', fontSize '13px'. **href="#" at V57**; becomes the Kit Commerce product URL with target `_blank`, rel `noopener noreferrer`, **styles unchanged** |
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

**Newsletter card (`NewsletterStrip`):** `.section` / `.container` / `.site-card` / `.card-heading` plus inline styles. The card's **only action** is a `.btn`/`.btn--ghost` button opening `NewsletterModal`. **The input and the form's Subscribe button live in the modal, inside a `<form>` whose submit is handled in JS (V57).** The input is fully inline-styled. The modal's Subscribe button needs its inline overrides — `marginTop: '0'` and `height`/`minHeight: '44px'` with `boxSizing: 'border-box'` — or it falls out of alignment. **The success and error lines are fully inline-styled (V57).** **Placeholder styling would require a `global.css` `::placeholder` rule** and is deliberately not added.

**Available card (`AvailableForPractice`):** two products, `.card-heading` / `.card-text` / `.btn` plus inline overrides. Both modals use the modal classes with sublines, bodies, price blocks, and dividers fully inline. `EbookModal`'s Buy button is `btn btn--ghost` with `href="#"` until the Kit Commerce URL arrives. **`GlowPTModal`'s footer carries TWO anchors (V49): a `btn btn--ghost` to `glowpt.app/onboard` first, then a `btn btn--primary` to cal.com inside a `marginTop: '12px'` wrapper.**

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
> **The one exception (V57): a permission only David can grant.** Claude Code refuses to let Claude write its own permission rules ("Self-Modification"), even with David's go-ahead. When a guard can only be cleared by David, give him **one** Run-able block and say plainly what it does. That happened once, for the Route 53 permission file.
>
> ⚠️ **This governs CODE, not this DOCUMENT.** The V48 rule still stands: **`CLAUDE.md` is not regenerated until David confirms the change actually works on the live site.**

**Code maintains this document (V45).** The sequence is fixed:

1. **Read this document and the real files.** Do not touch `CLAUDE.md` yet.
2. **Make the code change** and verify by string checks — old strings at zero, new strings present, no em dashes, no forbidden words. A predicted line count is not a verification (V43). For a **visual** change, measure the rendered result in the browser — **and measure against the reference the eye actually uses**, not a convenient neighbour (V48). **For wiring, prove the failure path locally and let David prove the success path on the live site** (V57: a deliberately invalid `a@b` proved the site reaches Kit without creating a subscriber).
3. **Push the code** (V49: directly, no command handed over). **As of V56 the push deploys through Amplify.**
4. **Wait for David to confirm the change actually works.** (V48)
5. **Then regenerate `CLAUDE.md` whole**, as a separate step, and push it. Bump the version, rewrite the header summary, fold the prior version into "everything else remains in force," add a Change History entry.
6. **Tell David the new version number, and print the whole document in the chat inside one fenced block** (four backticks, since the document contains triple-backtick blocks) so he can copy it into the claude.ai project instructions. **No clipboard, no file card.**

> ⚠️ **V52 and V53 were both cut on David's direct instruction, in the same session as their code, WITHOUT step 4.** He asked for the regenerations explicitly and both were copy strings rather than geometry, which is the low-risk case. **This is an exception, not a new rule.** Step 4 exists because V46 and V47 were both written against unverified visual fixes and both had to be superseded within hours. **Keep waiting on anything visual.**
>
> ✅ **V54, V56 and V57 followed the full sequence, step 4 included.** V54 touched the lockups; V56 moved the whole site and David's mail DNS; **V57 was cut only after David had seen the new modal copy live, completed four real signups (Mac and iPhone), watched Kit validate the domain, and sent mail both ways.** That is the intended shape. **What was not built (the checkout) is recorded as not built.**

**Rules on the regeneration:**

- **Regenerate whole. Never patch.** Write the entire file out, reading the live code as you go. Targeted edits are how a document rots: the GlowPT EMR bullet was recorded as "the eighth" for seven versions and the real eighth went unrecorded, because no pass forced a full read.
- **Record the reasoning, not just the strings.** Most of this document's weight is *why*. Carry those arguments forward verbatim unless a decision actually changed. **A version that reduces to a changelog has failed.**
- **When a rule is REVERSED, say so loudly and delete the old instruction.** V52 reversed the "do not reconcile the bullet counts" rule, which four earlier versions had reaffirmed. **Leaving a retired rule in place next to its replacement is worse than either one alone** — the next session cannot tell which is live.
- **A version bump for one string is legitimate.** V43 and V44 were documentation-only; V53 changed a single bullet; **V54 deleted two characters.** **The cost of a stale document is higher than the cost of a small version**, and a file that quotes a string the code no longer contains is exactly the rot the whole-regeneration rule exists to prevent.
- **Never write the doc before the push.** V46 and V47 were both cut against unverified fixes and both had to be superseded within hours.
- **Record what lives outside git (V56, V57).** Amplify settings, Route 53 records and Kit settings do not show up in any diff. If a session changes them, this document is the only record.

**Two rules David set explicitly on 2026-08-23:**

1. **READ `CLAUDE.md` BEFORE MAKING ANY CHANGE.** Not the section you assume is relevant — the document.
2. **DO NOT UPDATE THIS DOCUMENT UNTIL DAVID CONFIRMS THE FIX WORKS.** Verification by measurement is not confirmation. His eyes on the live site are. *(He waived this for V52 and V53; V54, V56 and V57 observed it.)*

### Working across the two repos (V49, extended V52, corrected V54, extended V55, narrowed V57)

It is legitimate for a session in this repo to edit the GlowPT repo, and vice versa. It happened on 2026-08-27 for the copy pass, on 2026-08-30 from the GlowPT side, and on 2026-09-01 from the GlowPT side for the V54 comma. **The conditions:**

- **David asks for it explicitly.** Do not reach across on your own initiative.
- **Read the other repo's `CLAUDE.md` first.** GlowPT has its own house copy rule (statements get sentence case and a period; labels get Title Case and none; no all-caps; AP preposition conventions) and its own push preference.
- **Say plainly which repo each change landed in**, with commit hashes. Bouncing between projects is confusing from the outside, and the confusion is a real cost even when the change is safe.
- **The session's ROOT sets its powers (V55): AWS-, database-, deploy-, or legal-touching work runs from a session STARTED in the GlowPT project.** That repo carries the AWS permission allowlist, the per-project memory, and its auto-loaded `CLAUDE.md`. Copy and layout work may run from either root. A session that finds itself rooted here while the task turns toward AWS should say so and stop rather than improvise around missing permissions.
- **V57 narrows that rule for ONE job: Route 53 record work for franklinaisolutions.com now runs from this root.** On 2026-09-25 the rule was followed exactly: a record write went through, the read-back was blocked, and the session stopped and offered the GlowPT-rooted route. **David declined it ("it would only confuse things to be bouncing projects") and chose to allow the work here.** He ran one Terminal block that created **`.claude/settings.local.json`** in this repo (gitignored, `fb01e32`) with exactly these allow rules:
  - `Bash(aws route53 change-resource-record-sets --hosted-zone-id Z0616895187ZTAR49DY5P *)`
  - `Bash(aws route53 list-resource-record-sets --hosted-zone-id Z0616895187ZTAR49DY5P *)`
  - `Bash(aws route53 get-change *)`
  - `Bash(aws route53 wait resource-record-sets-changed *)`
  - `Bash(dig *)`

  **Everything else AWS (Amplify settings, Organizations, Identity Center, other accounts, `glowpt-prod`) still belongs in a GlowPT-rooted session.** To use the rules, keep each command a single command that starts with the allowed prefix (put `--hosted-zone-id` first), not a `&&` chain. **Claude cannot create or widen this file itself** (V57 tried and was refused); widening it is David's decision and David's keystrokes.
- **Prefer the GlowPT session for anything touching GlowPT's behavior.** Copy is the safe case because it is self-contained and reversible.

> **⚠️ V52 said a GlowPT session "cannot preview this site." That is TOO STRONG, and V54 previewed it from over there.** The real constraint: **`preview_start` resolves `.claude/launch.json` from the session's own project folder**, so asking for `franklinai-dev` from a GlowPT session silently starts the GlowPT server instead. **The workaround is to add a temporary configuration to the session folder's own `launch.json`** pointing at the other app (`runtimeArgs: ["--prefix", "/Users/mac/Downloads/franklinai-v2", "run", "dev"]`), start it, verify, then **restore the file with `git checkout` and confirm that repo is clean again.** Port 5173 is shared, so stop the other server first.
>
> **Two dead ends, so nobody repeats them:** a `vite build --base=./` opened over `file://` renders **blank**, because ES modules are blocked by CORS on the file protocol; and the Browser pane's screenshot did not follow a scroll down this long page, so the footer had to be brought into view by temporarily setting a negative `document.body.style.marginTop` in the live DOM (vertical only, reverted immediately, horizontal layout untouched).
>
> **Say which verification you actually did.** Build and string checks are not the same as looking at it.

### In claude.ai

**What still lives here:** strategy, positioning, copy decisions, arguing a call through, newsletter drafting, and the **Content Calendar**. Handoff notes into Code are written here. **This document is no longer authored here (V45)** — Code regenerates it; claude.ai receives it as a pasted copy and reads it as spec.

**Amplify auto-deploys on push to `main`, in both repos (V56; this repo left Netlify on 2026-09-25, GlowPT on 2026-09-13).** Hard refresh with Cmd+Shift+R. Favicon changes require closing and reopening the tab. **HTML is served `no-cache`, so a new deploy shows on the next load once the build finishes** (about a minute and a half).

> **Working with David in the AWS console, Kit and other web consoles (V56, V57).** David uses **Safari**, not Chrome. The Claude app's built-in browser pane is a separate browser that is not logged in to his accounts and is probably not visible on his screen, so **do not tell him to look at it**; give him Safari links instead. For console steps, **one step per message, say before each step whether it is invisible or visible, and ask for a screenshot before any Save or Create button** that changes something. When his AWS login has expired, run `aws sso login --profile <profile>` in the background so Safari opens and he approves with Touch ID.
>
> **What V57 learned about pacing (from the Kit setup).** Several steps at once confused David ("you got me confused with all of this"); one decision per message worked. **Walk him around upsells explicitly:** Kit's onboarding pushed a card-required Creator trial with the annual plan pre-selected, and a "where do you sell today" screen offering to connect Stripe or Gumroad; both were sidestepped. **Never enter or ask him to type card, bank or password details on Claude's behalf**; he types those himself. **He reads his work email on his phone and is wary of Outlook on the web**; a confirmation link can simply be opened on the phone. **When a theory is wrong, say so and stop guessing** (the "Gmail bundled the emails" theory for the mystery third signup was offered with too much confidence and David disproved it; the per-subscriber timeline in Kit settled what could be settled).

### Handoff notes into Code

A good one **names the repo in its first line**, states the scope and what not to touch, gives exact find/replace strings, says plainly when it supersedes a locked string here, ends with a verification table, and **tells Code to regenerate `CLAUDE.md` after the push** and names the sections that change.

**The note must carry the editorial reasoning, not just the strings (V45).** Code can read the code; it cannot reconstruct why a decision was made, what was rejected, or what must not be reintroduced. *(The 2026-09-25 Kit handoff is a good model: it carried the book-first reasoning, the merchant-of-record decision, the fallback rule, and the session-root warning.)*

**A predicted line count is an estimate, not a verification, and never a fact for this file (V43).** String checks are the proof. **Any line count here must be measured on the pushed file.**

### Both

**Strategic discussion before code.** David thinks decisions through conversationally first. **Flag conflicts with established decisions proactively rather than executing silently**, then hold the position if the reasoning is sound — **and if David reaffirms, it is his call: execute it in full and record the argument here so it is not re-run.** *(V49's button order is the standing example. V52's bullet-count reversal is the newer one: the doc said "do not reconcile", David said reconcile, and he was right. V57's DMARC record is a third: the doc said "never as a side effect", the session asked, David said yes, and it went in as its own deliberate change.)*

> **A flagged-and-declined concern is not closed, it is parked (V53).** Bullet 3's "for free" ambiguity was raised when V52 shipped; David kept his wording, and came back to the same objection himself minutes later. **Record such concerns in Open Items rather than dropping them**, so that when the author circles back there is a written account of what the problem was and what the fix would be. That is what made V53 a one-line change instead of a re-derivation.

**When David says a thing is settled, it is closed.** The footer lockup is the standing example (see Footer). A closed item is not reopened by a clever measurement.

> **But "settled" belongs to David, not to this document.** V52 overturned a rule this file had reaffirmed four times. **A rule recorded here is a record of a decision, not a veto over the person who made it.** When David asks for something this file forbids, say what the file says and why, then do what he asks. *(V57's waiver of the session-root rule for DNS is the latest example.)*
>
> **A closed section can still take a copy change (V54).** The footer lockup is closed, and its legal-name line was still edited — because "closed" governs the *geometry*, not every character inside it. **The test is whether the change moves anything.** Prove it does not before you touch a closed area, and say how you proved it.

**Document versioning.** Complete drop-in replacement, never a patch, with full change history. Read live code as the source of truth when producing a new version, to catch drift.

**No phantom sources.** Two documents exist in this project: this one and the Content Calendar. The GlowPT/AWS architecture and the legal/entity work are **not** documents here. *(The GlowPT repo's `docs/commercial-handoff.md` is a real file in a real repo, and it is the source for the GlowPT section above. `AWS-MIGRATION-HANDOFF.md` at this repo's root is a temporary working note from the V56 move, uncommitted, and is deleted once Netlify is retired; everything in it that matters is recorded in **Hosting and DNS (AWS)**. The claude.ai handoff notes David drops in `~/Downloads/` are session inputs, not sources; what matters in them is recorded here.)*

**Dates live in the Content Calendar, not here.** This file has been wrong about Issue 1's ship date three times. **Check the calendar.**

**Secrets.** When giving David a command that could return a secret, redact it in the command itself so it never renders on screen.

---

## Open Items

| Item | Status |
|---|---|
| **🆕 E-book checkout on Kit Commerce — NEXT SESSION** | **Decided, not built.** Steps: (1) David opens **Kit → Settings → Revenue** and connects payouts (Stripe inside Kit; he enters bank and tax details himself; the business is **FranklinAI Solutions LLC**, no comma). (2) David creates the product: *What Your Practice Actually Sells*, **$37**, the final file uploaded, a product-page description that may name physical therapy and obeys the copy rules. (3) Code sets "Buy the Guide" to the live product URL with `target="_blank" rel="noopener noreferrer"`, styles unchanged, and pushes. (4) David buys it or runs Kit's test purchase, and checks the buyer lands on the list. **Verification:** `grep -c 'href="#"' src/App.jsx` → **0**; "$37" matches in both `EbookModal` spots and the Kit product; the `$350` decoy untouched; no em dashes in any new string. **Fallback:** if it is not live by Issue 1, **ask David before touching the card**; no coming-soon strip, no pre-sell. Any domain-verification record Kit Commerce asks for goes in **Route 53**, by the DNS rule. |
| **🆕 The mystery third signup — WATCH** | On 2026-09-25 David's third test signup (from an iPhone) reached Kit and the confirmation email arrived, but **his tap on Confirm never reached Kit**: the subscriber's timeline shows **Delivered 4:23 PM, Opened 4:23 PM, Clicked 6:21 PM** (the 6:21 click was David clicking later on the Mac, which confirmed it). He saw a "Subscription confirmed!" page on the phone at the time; **Kit shows that page for any confirm link, including an already-used one**, so the phone tap most likely opened a different confirm link, **but which one could not be established**, and the "Gmail bundled the three emails" theory was disproved by David. A clean fourth test, entirely on the iPhone, worked end to end. **Verdict: no fault found in the site or in Kit.** **What to watch after launch:** real readers accumulating as **Unconfirmed** in Kit's Subscribers list (filter by status). If that happens, look at a few of their per-subscriber timelines first; Kit can re-send the confirmation email. |
| **🆕 Kit mailing address → a real one** | Kit's Seattle stand-in is in use (allowed for Kit emails only, no mail forwarded). **Get a USPS PO box** (or confirm the LLC's registered agent permits business mail and forwards it), then enter it in Kit **Settings → Email → Mailing address** as `FranklinAI Solutions LLC, <address>`. One field; applies to every later email. |
| **🆕 Kit confirmation email wording** | Still Kit's default ("Important: confirm your subscription" / "Click the link below…" above a button / "It's good to have you!"). A draft in David's voice was offered and **parked**: subject *Confirm your subscription to The Operator*; top line *Thanks for signing up for The Operator. Tap the button below to confirm, and the next issue will come straight to your inbox.*; button *Confirm Your Subscription*; closing *Glad you're here.* / *David*. A copy decision for claude.ai; edited in Kit (form Settings → Confirmation email → Edit Email Contents). |
| **🆕 Test subscribers** | Four `besoulful+kit-…@gmail.com` addresses, all Confirmed. **Before Issue 1: keep one, delete three** in Kit's Subscribers list. |
| **🆕 Kit trial lapse (~2026-10-09)** | The Creator-feature trial ends and the account drops to the free plan. **Nothing built so far depends on a paid feature.** Once, open **Settings → Account & Billing** and confirm no card is on file (the profile read "Creator Monthly", which is expected to be the trial's label). |
| **🆕 `EbookModal` paragraph 2: "build… built… built"** | V57's book-matching change left three forms of "build" within about twenty words. **Parked, book-first:** if it ever grates, change the book, then this modal and any other surface together. |
| **Retire Netlify for this site** | **After a few quiet days from 2026-09-25**, David deletes the **franklinai site** and the **franklinaisolutions.com DNS zone** in Netlify. **Leave McKenzie alone.** Then delete `AWS-MIGRATION-HANDOFF.md` from the repo root. Until then Netlify is a harmless standby that still builds on every push. |
| **GlowPT clinic BAA text** | With the attorney. **Demo data only until it clears.** |
| **GlowPT billing** | No Stripe anywhere. Collection manual. Backlog, unstarted, and it belongs in the GlowPT repo. |
| **GlowPT auto-renewal statutes** | Open with counsel. **No renewal or cancellation claims on either site until answered.** |
| **Click-through vs signature** on the clinic BAA | Undecided. If signature wins, self-serve onboarding gains a manual step and the copy here must reflect it. |
| **Fictitious-name registration** | **Raised 2026-09-01, not acted on.** Both public sites lead with the brand name "FranklinAI" while the registered entity is FranklinAI Solutions LLC, and PA generally requires a fictitious-name registration to trade publicly under a name that is not the registered one. **Nobody involved is a lawyer and nothing was changed on this basis.** It is a cheap question to add to the attorney engagement that is already open. *(When a real mailing address goes into Kit with the LLC name in front, every email will carry brand and entity together.)* |
| **Mail authentication, the remainder** | **V57 added DMARC `p=none` and Kit's DKIM.** Still absent: **Microsoft 365 DKIM** for David's own Outlook mail. Adding it, and later tightening DMARC past `p=none`, are real deliverability steps, each done as its own change in Route 53 with a mail test both ways. |
| **Newsletter error strings use a curly apostrophe** | Cosmetic nit (see **Newsletter Card**). Make them straight next time `NewsletterModal` is touched. |
| **Modal accessibility** | The four modals lock scroll but have **no Escape key and no focus trap**. glowpt.app solved this with a shared `useModal` hook on 2026-08-31. **Port it if a fifth modal arrives, or sooner.** |
| **The GlowPT modal's V52/V53 renders have still not been seen by eye** | **Narrowed at V54.** The **Available card teaser** was rendered and seen on 2026-09-01, so that string is confirmed live. **The modal itself was never opened**, so bullets 3 and 5 and the description paragraph remain build-and-string-verified only. **Open the modal next time anyone is in this repo — it is one click.** |
| ~~Newsletter form wiring~~ | **✅ CLOSED in V57.** Wired to Kit form `9962049`; confirmed end to end by David on Mac and iPhone. |
| ~~The e-book itself~~ | **✅ CLOSED in V57.** Written (about 6,300 words, eleven chapters); the Calendar records it as the source. |
| ~~E-book checkout provider~~ | **✅ DECIDED in V57: Kit Commerce**, merchant-of-record tradeoff weighed and accepted. Building it is the open item at the top. |
| ~~Bullet 3's "for free" reading~~ | **✅ CLOSED in V53** by naming the subject: "the patients join for free". |
| ~~The two sites spell the legal entity differently~~ | **✅ CLOSED in V54.** Both now read **FranklinAI Solutions LLC**, no comma. |
| ~~Move the site off Netlify~~ | **✅ CLOSED in V56.** Live on Amplify since 2026-09-25; only the Netlify clean-up above remains. |

---

## Change History

- **V57** — **The Operator's signup went live on Kit, and Kit now sends as the domain.** All on 2026-09-25, from a claude.ai handoff note, each piece confirmed by David before this version was cut. **Code (three pushes):** `d89f4f0` brought the `EbookModal`'s first two paragraphs into line with the finished book ("the end of their care", "set out to build two businesses"), **superseding V41's locked text** under the new rule that **the book wins on shared sentences**; `8024666` wired `NewsletterModal` to **Kit form `9962049`** exactly per the V40 plan (a `fetch` with `email_address`, **"Almost there. Check your email to confirm."** because double opt-in is ON, auto-close after 2.5s, a gentle error that keeps the modal open, a "Subscribing…" state; the failure path was proved locally with `a@b`, the success path by David with four real signups on the Mac and an iPhone); `fb01e32` gitignored `.claude/settings.local.json`. **Outside git:** a **Kit account** was created and configured (sender David Peterson, double opt-in on, Kit's stand-in mailing address pending a PO box, card-free trial sidestepping the paid plan), recorded in the new **Kit (newsletter platform)** section; and **four Route 53 records** went in one at a time, each read back from `ns-561` with the mail records re-read: `ckespa`, `cka._domainkey`, `cka2._domainkey`, and **DMARC `p=none`, added only after David's explicit yes** because this file had said never as a side effect. Kit's first Validate failed on a cached "not found", passed 15 minutes later; Gmail's "via n.convertkit.com" label disappeared; **David's work email tested both ways.** **Process:** the V55 root rule was followed (the session stopped when blocked) and then **waived by David for this domain's DNS**; **Claude could not write its own permission file** ("Self-Modification"), so David created it from one Terminal block, the single recorded exception to "never hand him a command". **Decided but not built:** the e-book checkout on **Kit Commerce** (merchant-of-record tradeoff accepted for list growth); it is the next session. **New watch item:** the mystery third signup, whose iPhone confirm tap never reached Kit, with a clean fourth iPhone test proving the path. Also corrected: Issue 1's date now points at the Calendar (September 29, 2026 as of its September 25 pass); the Tech Stack note that "Kit wiring needs no backend" is now proved rather than predicted. `App.jsx` measures **735 lines**; the `$350` decoy sits at **99 and 510**. *(This repo: `d89f4f0`, `8024666`, `fb01e32`, plus this document.)*
- **V56** — **franklinaisolutions.com moved from Netlify to AWS Amplify Hosting on 2026-09-25, with no downtime and no lost mail.** New account **`franklinai-web` (359813812260)** in the `Workloads` OU, `us-east-1`; Amplify app `dtrvxjb8lde3p` on `main`; Route 53 zone `Z0616895187ZTAR49DY5P`; GoDaddy stays registrar only. **The site's code did not change.** The repo gained `amplify.yml`, `.nvmrc` (24) and `customHttp.yml` (commit `0279ffe`); a clean Node 24 build was proven byte-identical to the live Netlify build before pushing, which mattered because **Netlify reads `.nvmrc` too**. **The one real risk was David's work email**, whose MX, TXT and autodiscover records live in this zone: the zone was inventoried from Netlify's panel (finding an `email` CNAME the pre-move note had missed), copied exactly, checked record by record on both providers' nameservers, the certificate was issued before the switch by adding its validation CNAME in Netlify, the switch was rehearsed with `curl --resolve`, and the registry was checked for a DNSSEC DS record (none). David then swapped the nameservers at GoDaddy (~07:28), and **confirmed mail both ways**. A `www` → apex 301 was added as an Amplify app setting so `www` behaves as it did on Netlify. The SPF record that names GoDaddy was found to be **correct** (GoDaddy's chain includes Microsoft's). **Organizations and Identity Center writes were done by David in the console** (the Claude Code safety system blocks them); everything inside the new account ran from the CLI. New section **Hosting and DNS (AWS)**; Tech Stack loses the Supabase phrase, which described McKenzie, not this site; new Open Items for Netlify retirement and for DMARC/DKIM. `App.jsx` measured **674 lines**; the `$350` decoy sat at **99 and 449**. *(This repo: `0279ffe`, plus this document.)*
- **V55** — **Process only; zero code diff.** The session-rooting rule added to *Working across the two repos*: AWS-, DB-, deploy-, or legal-touching work runs from a session **rooted in the GlowPT project**, where the permission allowlist, per-project memory, and auto-loaded doc live; copy and layout work runs from either root. Recorded after the V54 session — rooted here, legitimately doing GlowPT layout work — read from the outside as a stray thread and cost a 2026-09-01 GlowPT session to untangle. Companion rule in the GlowPT repo's `CLAUDE.md` the same day. *(Doc-only; no site change to verify. **Narrowed in V57** for Route 53 record work on this domain.)*
- **V54** — **Two characters deleted from the two most protected elements on the page, and nothing moved.** The nav and footer lockups now read **"Solutions LLC"** instead of "Solutions, LLC". **The no-comma form won because it is the one used everywhere the entity is legally named:** both attorney-review contract drafts, glowpt.app's `src/lib/legal.js`, and the **AWS Company-name field the org BAA binds to.** The comma was display-only. **David's call, made while adding `© {year} FranklinAI Solutions LLC` to glowpt.app's own footer** and finding the two sites disagreed; he chose to change this site, which is right, because the contracts have no comma. **The diff was two text nodes**: no style, no structure, and the `-26px`, `-14px` and `-3px` dials all verified untouched. **Neither lockup moves, and it was measured before it shipped:** "FranklinAI" is the widest line in both (nav 252.8 vs 222.6, footer 160.5 vs 146.9) and sets the column width, and toggling the comma in the live DOM left the nav brand box and the footer text column byte-identical. **David confirmed across browsers before this document was cut — the full six-step process including step 4, unlike V52 and V53.** New rules recorded: **the entity is written with no comma anywhere, on either site**; **a two-sentence line that must break identically everywhere should be two elements, not one string**; **"closed" governs geometry, not every character** — a closed section can take a copy change if you prove it moves nothing. Also corrected: **V52's claim that a GlowPT session cannot preview this site is too strong** — the workaround, and two dead ends, are recorded under *Working across the two repos*. `App.jsx` still measured **674 lines**; the `$350` decoy was unmoved at **99 and 449**. *(This repo: `84f74c9`. Companion GlowPT-repo commits: `b44e8f6`, `ed5c8b7`, `74356c1`.)*
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
- **V41** — **Three copy edits plus four documentation corrections.** E-book modal paragraphs 1 and 2 rewritten to remove two retired framings; the newsletter audience line changed in both locations. *(Two words in those paragraphs changed again in V57 to match the book.)*
- **V40** — **Newsletter form wiring + success behavior locked (documentation only).** *(Built in V57.)*
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


---

# 2. AWS-MIGRATION-HANDOFF.md (working note, 2026-09-24 and 25, deleted from the repo root 2026-09-26)

# Handoff: moving franklinaisolutions.com from Netlify to AWS Amplify

*Written 2026-09-24 by a GlowPT-rooted session, after talking it through with David. It is a working note for the migration session, not permanent documentation. Once the move is done, fold what matters into this repo's CLAUDE.md and delete this file.*

## What David decided

- **Move the marketing site off Netlify to AWS Amplify Hosting now**, before go-live next week, and **before** wiring Kit and Stripe. Both will probably want DNS records (Kit sender authentication, Stripe domain verification), and those should be added once, in their final home.
- **It goes in a NEW AWS account, `franklinai-web`**, in the org's `Workloads` OU beside `glowpt-prod`. Not the management account (that holds billing, the org BAA and Bedrock) and never `glowpt-prod` (patient data).
- **When the AWS login has expired, open the sign-in in his browser so he can approve it with his fingerprint.** Run `aws sso login --profile <profile>` in the background: it opens the AWS page in Safari, he approves with Touch ID, and the CLI picks up the session. Do not hand him a command to paste or send him hunting for the portal. One login covers every account's profile for 8 hours.
- **David is anxious about email.** GlowPT's DNS move was stressful because the surprises were found mid-flight. Go slowly, one step per message, explain each step before it happens, and keep saying which steps are invisible and which one is the real switch.

## ⚠️ The one trap: David's work email lives on this domain

**DNS for franklinaisolutions.com is on NETLIFY DNS** (nameservers `dns1-4.p07.nsone.net`, which is NS1, the provider behind Netlify DNS). GoDaddy is the registrar only. GlowPT had exactly the same arrangement.

**That zone carries the records that deliver `david@franklinaisolutions.com` (Microsoft 365, probably bought through GoDaddy).** That address is David's AWS Identity Center username, the destination of the $150 budget alerts, and his AWS Builder ID. Losing the mail records means losing his email and his AWS recovery path.

Visible from outside on 2026-09-24 (with `dig`; there may be more that only Netlify's screen shows):

| Name | Type | Value |
|---|---|---|
| `franklinaisolutions.com` | MX | `0 franklinaisolutions-com.mail.protection.outlook.com.` |
| `autodiscover` | CNAME | `autodiscover.outlook.com.` |
| `franklinaisolutions.com` | TXT | `"MS=ms21263178"` |
| `franklinaisolutions.com` | TXT | `"v=spf1 include:secureserver.net -all"` |
| `franklinaisolutions.com` | A | `18.208.88.157`, `98.84.224.111` (Netlify, the website; these get REPLACED) |

**Rules:**
- **Get the full record list from Netlify's DNS panel** (Netlify → Domains → franklinaisolutions.com). `dig` cannot list a zone, and GlowPT's zone held SES records nobody knew were there.
- **Copy mail and verification records EXACTLY, oddities included.** The SPF naming `secureserver.net` (GoDaddy) rather than Outlook looks wrong and may be worth fixing, but **not during the move.** One change at a time.
- **Do not touch the Microsoft 365 tenant or anything at GoDaddy except the nameserver list.**
- **Verify the new zone BEFORE the nameserver change** by querying an AWS nameserver directly, for example `dig @ns-XXX.awsdns-XX.com franklinaisolutions.com MX`, for every copied record, compared with the live answer. That is what made GlowPT's switch safe.
- **After the switch, David sends himself a test email both ways** (to and from an outside address).

**Reassurance that is true, and worth saying to David:** the nameserver change is reversible (put the four `nsone.net` servers back at GoDaddy); sending mail servers retry for days, so a mistake delays mail rather than losing it; and Identity Center sign-in is password plus his phone's authenticator, so email is only needed for recovery.

## Why the rest is easy

- **This site is a pure static Vite build: no functions, no env files, no `netlify.toml`, no router.** Single page, so GlowPT's worst Amplify surprise (deep links 301ing to a trailing slash, then 404) cannot happen here. If a router is ever added, GlowPT uses a regex SPA rewrite and Amplify's default 404-200 rule does NOT work.
- **Kit and Stripe both work from the browser** (this repo's CLAUDE.md already says so), so Amplify stays **hosting only**, as GlowPT's does.
- **Cost is about $1-2/month**: ~$0.50 for the Route 53 zone plus cents per build. The org's $150 budget alarm covers every account.

## Steps, in order

Name the **account and region** (always `us-east-1`) before every step.

1. **Create the account.** Management account → AWS Organizations → add account `franklinai-web`, root email on a `besoulful+aws-...@gmail.com` alias to match the others (`+aws-franklinai`, `+aws-glowpt`), then move it into the `Workloads` OU (`ou-i93g-vvz3dnxq`). Coverage by the org BAA is automatic (irrelevant here, since there is no PHI, but true).
2. **Give David access.** IAM Identity Center (management account) → AWS accounts → `franklinai-web` → assign user `david` with permission set `AdministratorAccess`, as for the other two.
3. **Add a CLI profile** to `~/.aws/config` beside the existing ones, same `sso_session = glowpt`:
   ```
   [profile franklinai-web]
   sso_session = glowpt
   sso_account_id = <new account id>
   sso_role_name = AdministratorAccess
   region = us-east-1
   ```
4. **Add the build config to this repo**, copied from GlowPT (`~/Downloads/glowpt`): `amplify.yml` (nvm install/use, `npm ci`, `npm run build`, artifacts `dist`), `.nvmrc` pinning Node (GlowPT uses `24`), and `customHttp.yml` (HSTS on everything, `no-cache` on `*.html`). Strip the GlowPT PHI comments.
5. **Create the Amplify app** in `franklinai-web`, connected to GitHub `besoulful-design/franklinai-v2`, branch `main`. Confirm it serves on its `*.amplifyapp.com` address. **Nothing public has changed yet.**
6. **Create the Route 53 hosted zone** for franklinaisolutions.com in `franklinai-web` and copy EVERY record from Netlify except the website's A records and Netlify's own NS/SOA.
7. **Attach the custom domain in Amplify** (apex + `www`). Amplify issues the certificate and asks for a validation CNAME. **Add that CNAME in NETLIFY's DNS too**, so the certificate validates while Netlify is still in charge (this is what GlowPT did). Amplify will give a CloudFront target; the apex and `www` in Route 53 become ALIAS records to it.
8. **Verify the Route 53 zone record by record** against the AWS nameservers directly (see the rules above). Fix anything before going on.
9. **The real switch: David replaces the four `nsone.net` nameservers at GoDaddy with the four Route 53 ones.** Then check the site on both apex and `www`, and David tests email both ways. Propagation can take hours; old answers linger in caches.
10. **After a few quiet days**, David deletes the Netlify site (and the Netlify DNS zone). Bank anything removed from docs first, per this repo's own rules.

## Permissions: read this before running any AWS command

**This repo has no `.claude/settings.local.json`, so a session rooted here has no AWS allowlist** and will be refused the first time it runs `aws ...`. This repo's own CLAUDE.md (V55) says AWS work belongs in a GlowPT-rooted session for exactly this reason. Two ways through; David chooses:
- **David copies the relevant AWS entries from `~/Downloads/glowpt/.claude/settings.local.json` into this repo's `.claude/settings.local.json` himself.** Claude cannot write or commit that file, correctly.
- **Or** the AWS steps (1-3, 5-9) run from a GlowPT-rooted session and the repo changes (step 4, docs) run here.

Either way, **say plainly which repo each change lands in, with commit hashes.**

**Two traps from GlowPT:** an `aws ssm`-style command with `export PATH=...` in front no longer matches a prefix allowlist and reads like a lost permission; and an auto-approve flag (for example `--require-approval never`) trips the classifier. Try the plain command first.

## Lessons from GlowPT that apply directly

- **Measure before theorizing.** GlowPT lost five weeks arguing with AWS over a quota that one CLI call would have shown was literally zero. Read the account first.
- **No Amplify firewall (WAF).** Flat monthly fee, not justified.
- **Build config lives in the repo; rewrites/redirects do NOT** (they are app settings, read with `aws amplify get-app`). Record any change to them in CLAUDE.md.
- **Every push is a build.** Cheap on Amplify (GlowPT's first week cost $0.93), but batching commits still reads better.

## Docs in this repo that become false

- CLAUDE.md V55 says **"Netlify auto-deploys on push, in both repos"**: already false for GlowPT, and false here after the move.
- The **Tech Stack** line lists **Netlify** (and "Supabase for backend and auth where needed", which is not in use here).
- After the move, **Netlify hosts only McKenzie** (`mckenziearmcare.com`). The Netlify Free plan takes effect 2026-09-27 and covers it easily.

## Not part of this job

- Kit and Stripe wiring come **after** the move, as David decided.
- McKenzie Arm Care's own move is separate work, rooted in its own folder.

## Full Netlify zone inventory (taken 2026-09-25, from Netlify's DNS panel, confirmed against dns1.p07.nsone.net)

Netlify's panel says **7 DNS records**. All seven, with exact values:

| Name | TTL | Type | Value | In Route 53 |
|---|---|---|---|---|
| `autodiscover` | 3600 | CNAME | `autodiscover.outlook.com.` | copy exactly |
| `email` | 3600 | CNAME | `email.secureserver.net.` | copy exactly (**missing from the 2026-09-24 list**; GoDaddy webmail shortcut) |
| apex | 3600 | MX | `0 franklinaisolutions-com.mail.protection.outlook.com.` | copy exactly |
| apex | 3600 | TXT | `"MS=ms21263178"` | copy exactly (same record set as SPF) |
| apex | 3600 | TXT | `"v=spf1 include:secureserver.net -all"` | copy exactly, oddity and all |
| apex | (120 served) | NETLIFY | `franklinai-solutions.netlify.app` (serves A `18.208.88.157`, `98.84.224.111`) | **replaced** by ALIAS to Amplify |
| `www` | (120 served) | NETLIFY | `franklinai-solutions.netlify.app` (same two A) | **replaced** by ALIAS/CNAME to Amplify |

Not present: AAAA, CAA, DMARC, Microsoft 365 DKIM (`selector1/2._domainkey`). Do not add any of them during the move.

## Progress log (2026-09-25)

- Step 1 done: account `franklinai-web` = **359813812260**, root email `besoulful+aws-franklinai-web@gmail.com`, in `Workloads`. Created and moved by David in the console (the Claude Code safety system blocks `aws organizations` writes).
- Step 2 done: `david` / `AdministratorAccess` assigned (console, by David).
- Step 3 done: `[profile franklinai-web]` added to `~/.aws/config`.
- Step 4 done: repo commit `0279ffe`. Clean Node 24 build gives asset hashes identical to live Netlify; Netlify's rebuild served the same files.
- Step 5 done: Amplify app `franklinai-web`, appId **dtrvxjb8lde3p**, us-east-1, branch `main`, at `https://main.dtrvxjb8lde3p.amplifyapp.com`. GitHub app "AWS Amplify (us-east-1)" now covers `glowpt` + `franklinai-v2` (added at github.com/settings/installations, which avoids Safari's pop-up trouble). First build: job 1, SUCCEED. index.html, both assets, favicon, touch icon and headshot are byte-identical to franklinaisolutions.com; HSTS and no-cache headers present.
- Step 6 done (mail half): Route 53 zone **Z0616895187ZTAR49DY5P** in franklinai-web. Its nameservers: `ns-561.awsdns-06.net`, `ns-389.awsdns-48.com`, `ns-1501.awsdns-59.org`, `ns-1898.awsdns-45.co.uk`. MX, both TXT, `autodiscover` and `email` copied at TTL 3600; all four MATCH Netlify's nameserver when queried directly. Apex + `www` website records still to come in step 7.
- Step 7 done: domain association created (apex + www → main, AMPLIFY_MANAGED cert). Amplify wrote apex ALIAS, `www` CNAME and the ACM validation CNAME into the Route 53 zone itself. David added the validation CNAME (`_b3bc49b38926936e06504b90ca148550` → `_2319b19e5e61a60fb914625982143e7d.wzccmgtwzk.acm-validations.aws`) in Netlify DNS at ~06:35; verified exact. Cert issued within ~2 min: `CN=*.franklinaisolutions.com`, Amazon RSA 2048, expires 2027-04-11. Status now AWAITING_APP_CNAME, which just means waiting for the nameserver switch. Pre-switch test via `curl --resolve` to CloudFront: apex and www both 200 with a valid cert, page identical to live.
- **Behaviour difference found:** on Netlify `www` 301s to the apex; on Amplify `www` serves the page (200). Decide before or after the switch whether to add a www → apex redirect in Amplify (an app setting, not in the repo).
- www redirect added (Amplify app setting, NOT in the repo): custom rules are now `https://www.franklinaisolutions.com` → `https://franklinaisolutions.com` 301, then Amplify's default `/<*>` → `/index.html` 404-200. Rehearsed via `--resolve`: www 301 → apex, apex 200, matching Netlify. **Record both rules in CLAUDE.md after the move.**
- **Remaining:** step 8 full re-check right before the switch, then step 9 (David swaps GoDaddy nameservers to the four `awsdns` ones above), site check + email both ways, then step 10 after a few quiet days. Also delete the ACM validation CNAME from Netlify's zone when Netlify is retired (Route 53 has its own copy, which must stay for renewals).
- Step 8 re-check passed 07:19 (all five records MATCH; no DNSSEC/DS at the registry, so the NS change was safe).
- **Step 9 done ~07:28:** David set the four `awsdns` nameservers at GoDaddy. `.com` registry showed them by 07:29. Cloudflare, Google and Quad9 resolvers all on Route 53 within minutes; MX correct on all three. franklinaisolutions.com served by CloudFront (PHL51), valid cert, www 301 → apex. Amplify's own domain status still AWAITING_APP_CNAME at 07:31 (it lags; expect AVAILABLE). Email test both ways: pending.
- **Email confirmed by David both ways after the switch** (Gmail → david@franklinaisolutions.com, and back). The move is live.


---

# 3. CLAUDE-MD-TRIM-HANDOFF.md (working note, 2026-09-26, deleted once adopted)

# Handoff: bank and trim this repo's CLAUDE.md, the way GlowPT does

*Written 2026-09-26 by a GlowPT-rooted session at David's request. A working note: once the method is adopted and written into CLAUDE.md, delete this file.*

## Why

**CLAUDE.md loads IN FULL at the start of every session, so its size is a tax on every thread.** On 2026-09-26 this repo's file measured **167,777 bytes**, up from ~126 KB two days earlier (V56 and V57 added ~42 KB in one day). GlowPT's hit **478 KB** on 2026-09-12 and was quadrupling every eleven days; every conversation began ~14% full and David had to keep starting new threads. **The cause was Claude, not David:** each session wrote a long narrative entry, and the doc told the next session to do the same. A loop that only grows.

GlowPT cut 478 KB to 183 KB in one pass and now sits under 100 KB. The method is below.

## The shape: a guide, not a journal, and only two files

- **`CLAUDE.md`** loads every session and holds **what must be known**: current state, durable rules, live operational facts.
- **`docs/history.md`** (new here; create it) loads **never** and holds **why**: the narratives, superseded decisions, finished work. Nothing is deleted, it is moved. Grep it when needed.
- **The reasoning of a fix belongs in the commit message**, which is permanent, searchable with `git log`, and costs nothing until someone looks.
- ⛔ Do not invent a third file or a new system. David does not want the two-file system redesigned, and does not want the bookkeeping narrated to him. Do it quietly and report the result.

## The obvious target here: the version chain at the top

Lines 1-42 are a chain of `> **Everything else from Version N remains in force:** ...` blocks running from V56 back to V40, each re-summarizing decisions that are ALSO recorded in the sections below. **This is exactly what GlowPT removed first** (its "Previously updated..." chain was 29 KB of nested summaries of entries stored elsewhere). Replace it with one short **CURRENT STATE** block: what is live, what is blocked, what is next. Bank the chain verbatim first. Whether the file keeps a version number in its title is David's call; ask.

## What a session may add (put these rules into CLAUDE.md itself)

- **A durable rule**, one or two lines, somewhere a future session will find it.
- **A change in current state**, by EDITING the existing line, not appending one beside it.
- **A short entry for recent work**: what broke, the rule it leaves, what was observed. Not the investigation.

**It does NOT go in:** the narrative of a fix, anything the code already says, or a second copy of a rule already stated.

## ⛔ Nothing leaves CLAUDE.md until it is in docs/history.md, verbatim

Any removal, on any day. Bank first, then cut. GlowPT enforces this with a git pre-commit hook rather than trusting memory: **copy `~/Downloads/glowpt/scripts/hooks/pre-commit` to `scripts/hooks/pre-commit` here, make it executable, and turn it on with `git config core.hooksPath scripts/hooks`.** It blocks a commit where CLAUDE.md loses lines and `docs/history.md` is not staged, and one where CLAUDE.md grows by more than 2 KB with nothing banked. Skip once with `git commit --no-verify`, visibly.

## The trim method (it worked on 2026-09-12; do it in this order)

1. **Bank the full current text into `docs/history.md` FIRST**, so nothing can be lost.
2. **Archive whole sections that are unambiguously finished** (the version chain, resolved incidents, completed moves). The cheap half; needs no judgment.
3. **Check that live operational facts did not leave with the history around them.** In GlowPT a database secret name did, and it could not be looked up again. Here the obvious ones are the **AWS facts from V56** (the `franklinai-web` account, the Amplify app, the Route 53 zone and its records, including the Microsoft 365 mail records) and the **Kit facts from V57**.
4. **Condense recent entries** to headline, what broke, the rule, what was observed.
5. **Lift every durable rule into a rules section BEFORE archiving its entry.** Losing this step is how a trim goes wrong; the rules are the part that earns its place.
6. **Probe the result for the rules that must survive, by name.** A diff will not tell you a rule is gone; only asking for it will.

**Things in this repo that must survive, word for word** (check each one by name after the trim): the locked geometry values (the nav `translateX(-26px)`, footer `translateX(-14px)`, copyright `translateX(-3px)` and the list of reverted attempts on the closed footer), the locked kite SVG, the legal name with **no comma**, the shared eight-bullet list rule with `glowpt/src/lib/marketing.js`, the forbidden words and the no-em-dash rule, the source-file rule, the session-rooting rule, and the AWS and Kit records above.

## Keep it honest afterward

- **Every session reports CLAUDE.md's size and its own delta in its closing message**: `stat -f%z CLAUDE.md` against `git cat-file -s <the session's first commit>:CLAUDE.md`. It is self-reported, so not a control; David can check it with `git log --format='%h %ad %s' --date=short -- CLAUDE.md`.
- **Trim again when it passes ~150 KB**, using the same six steps.

## How to run it with David

David likes each step explained in plain language before it happens. **Propose the plan first** (what moves to history, what the new CURRENT STATE block says, which rules get lifted), get his OK, then do it in one or two commits and push. Report the before and after size.

**Also: `AWS-MIGRATION-HANDOFF.md` is still sitting uncommitted in this repo.** The move is done (V56), so fold anything still useful into CLAUDE.md and delete it, as that note itself says.
