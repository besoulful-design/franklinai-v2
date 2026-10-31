# FranklinAI — Project Instructions (Version 96, Current)

> **READ THIS FILE BEFORE MAKING ANY CHANGE TO THIS REPO.** Read all of it, not just the section you think applies. **If a value looks arbitrary, it is almost certainly hand-tuned and documented here. Look it up first.** A morning was once lost re-deriving a footer geometry this file already specified.

> **The version number on the first line is how every session says which copy it read.** Bump it whenever this file changes and add a one-line Change History entry.

---

## CURRENT STATE (edit these lines in place; do not start a new chain)

- **Live:** franklinaisolutions.com on **AWS Amplify** (account `franklinai-web`), DNS in **Route 53**, David's Microsoft 365 mail intact. **The Operator** signup wired to **Kit form `9962049`**, double opt-in ON; Kit sends as the domain, on the **Creator plan, monthly** since 2026-10-14.
- **Next (David, 2026-10-27):** **Issue 2, 2026-11-17** (dates live in the Calendar; Issues 3 and 4 slid with it). **Send-day routine, every issue:** Kit broadcast → publish to the newsletter site → **Code updates `LATEST_ISSUE_URL` in `App.jsx`** → David posts the Reel from @franklinaisolutions (confirm Instagram's AI label). Between issues: one Instagram post a week, a carousel and a static alternating, built in the Reel kit, never a site matter. **Every email comes from "FranklinAI"** and signs off "David Peterson" over the company name.
- **Issue 1 of The Operator: SENT 2026-10-20** (broadcast `26443173`) to all 3 subscribers, published at `https://franklinai.kit.com/posts/you-re-running-an-insurance-practice-with-cash-model-marketing` (the slug Kit derives from the subject); its Reel posted the same day. **Cadence is monthly as of 2026-10-03.**
- **Measured at V94:** `App.jsx` is **860 lines**; the `$350` decoy sits at **lines 143 and 558**.
- **Older narrative is in `docs/history.md`:** the full V91 text before the V92 trim is section 0ii; V12 to V57 are section 1. **Do not start a "remains in force" chain.**

---

## ⚖️ What May Be Added to This File

**This file loads IN FULL at the start of every session, in Code and claude.ai, so its size is a tax on every thread.** It reached 167,777 bytes on 2026-09-26 (trimmed in V58) and 115,100 on 2026-10-25 (trimmed in V92). **The cause both times was Claude:** each version wrote a narrative and told the next to do the same.

**⛔ A GUIDE, NOT A JOURNAL.** Add only **a durable rule** (one or two lines, where a future session will find it), **a change in current state** (by **editing the existing line**), or **a short entry for recent work** (what broke, the rule it leaves, what was observed). **The reasoning and narrative of a fix belong in the commit message**; nothing the code already says, no second copy of a rule.

**⛔ NOTHING LEAVES THIS FILE UNTIL IT IS IN `docs/history.md`, VERBATIM.** Bank first, then cut. **The pre-commit hook enforces it** (`scripts/hooks/pre-commit`, on via `git config core.hooksPath scripts/hooks`; local config, so a fresh clone must turn it on): it blocks a commit where CLAUDE.md loses lines without `docs/history.md` staged, or grows by more than 2 KB with nothing banked. Skip once with `git commit --no-verify`, visibly.

**▶ EVERY SESSION REPORTS THIS FILE'S SIZE AND ITS OWN DELTA IN ITS CLOSING MESSAGE:** `stat -f%z CLAUDE.md` against `git cat-file -s <the session's first commit>:CLAUDE.md`. David checks with `git log --format='%h %ad %s' --date=short -- CLAUDE.md`.

**🧹 TRIM WHEN IT PASSES ~100 KB** (lowered from ~150 KB on 2026-10-25, when the V92 trim landed at about 85 KB): (1) bank the full text into `docs/history.md`; (2) archive whole finished sections; (3) check live operational facts (the AWS and Kit records) did not leave with the history; (4) condense recent entries to headline + what broke + the rule + what was observed; (5) **lift every durable rule into place before archiving its entry**; (6) **probe the result by name for every rule and value that must survive** (extract the old file's backticked code, quoted strings, colors, px values, URLs and IDs; check each is still present).

**📚 ONLY TWO FILES:** this one (loads every session, holds what must be known) and `docs/history.md` (loads never, holds why). **Do not invent a third, and do not narrate the bookkeeping to David**; do it quietly and report the result.

---

## One Copy, Read by Code and claude.ai

**This file lives only as `CLAUDE.md` on `main`.** Claude Code loads it automatically. **claude.ai reads it through a pointer in its project instructions** (since V59; nothing is pasted): it runs, in its own computer, `curl -sL -H 'Cache-Control: no-cache' "https://raw.githubusercontent.com/besoulful-design/franklinai-v2/main/CLAUDE.md?v=$(date +%s)" -o /home/claude/CLAUDE.md`, reads the file and states the version on its first line. **Not claude.ai's fetch tool** (it serves a stale saved copy and ignores cache-busters). **GitHub's raw copy can lag a push by up to 5 minutes:** if David names a newer version, claude.ai waits and runs the command again, never working from an older version than the one he names. **No Code-tuned and claude.ai-tuned variants.**

> ⚠️ **The pointer works only because this repo is PUBLIC, David's deliberate choice on 2026-09-26** (`glowpt` is private). **Never commit a secret or anything confidential here, never the book's text or PDF** (a paid product; it lives in the claude.ai project), and keep sensitive business or legal detail brief. If the repo goes private, claude.ai needs another route and this note changes.

**In claude.ai, read the current `App.jsx` from the project files before any code change**, never a cached copy or memory. The snapshot is hand-replaced and can trail the repo by a push: when it disagrees with a just-confirmed push, the push is live; say so rather than silently reverting the newer change.

| Job | Tool |
|---|---|
| Editing `App.jsx`, the repo, anything on disk; maintaining **this file** | Claude Code |
| Route 53 records for franklinaisolutions.com | Claude Code, from this root (see *Working across the two repos*) |
| Strategy, positioning, copy decisions, arguing a call through; the **Content Calendar**; newsletter drafting | claude.ai |

**Rules that apply everywhere, both tools:** the Logo Accent gold rule, all locked inline styles and render values, the three-tier heading system, the Copy Rules and Forbidden Words, the CSS/JSX Boundary Rules, and the Design Rules.

> **When a handoff note and this file disagree, the note wins for that session:** apply it, push, **then** update this document. **The GlowPT repo** (`~/Downloads/glowpt`) is a *different* repo with its own `CLAUDE.md` and AWS backend; **any handoff into Code names the repo in its first line.** Copy rules and one content list DO cross (below).

---

## Copy Rules Travel With the Voice, Not the Repo

**David, 2026-08-27:** the **Copy Rules** and **Forbidden Words** bind **anywhere a PT owner reads FranklinAI's words**: this site, the GlowPT site and app, and **Kit** (confirmation emails, the product page, every broadcast). One house.

- **Never fix an em-dash rule with a find-and-replace.** A bare `—` used as an empty-value placeholder is a UI glyph, not prose (GlowPT's dashboard Streak column keeps six on purpose). **A dash used as a LABEL SEPARATOR becomes the middot `·`.**
- **Model-generated user-facing text carries the rule in its prompt** ("Do not use em dashes in your response.").
- **Check the delivery surfaces too** (GlowPT's Lambdas kept em dashes four days after `src/` was swept). **Kit is one of those surfaces.** Code comments and this document are exempt.

**The eight GlowPT feature bullets are one list in two repos**, **word-identical, same order**: `features` inside `GlowPTModal`, `src/App.jsx`, and `whatGlowptIs.points` in `glowpt/src/lib/marketing.js`. **Each array carries a five-line comment naming the other; nothing enforces the match at build time.** *(David, 2026-08-30: two descriptions of one product read as unsettled; the old "glowpt.app carries 5 of the 8" instruction is RETIRED.)* **Verify by parsing both arrays and comparing element by element**, never by eye.

---

## Source-of-Truth Documents

**The Content Calendar** (a claude.ai document) is the source of truth for all content and marketing; this file holds none beyond what the site displays. It is **newsletter-led**: *The Operator*, **monthly** (a Tuesday, on dates set in the Calendar; public copy says only "monthly"), 400–600 words, free, written Sunday on a phone. **Instagram is the only discovery surface.** **The discovery call is the only door** for the custom build (GlowPT has a second); **each issue makes one ask, matched to the issue** (see Offer Ladder). The addressee is the **owner**; the office manager is the multiplier. The spearhead is **model confusion** ("You're running an insurance practice with cash-model marketing"), across **six spines**: (A) model confusion, (B) plan-of-care completion, (C) team, hiring, retention, and modeling, (D) your numbers, (E) AI in your practice, (F) systems and delegation. **The guides are a five-book series in the order A, B, C, F, E; the order and each book's shape live in the Calendar.** The four-video YouTube arc is **parked whole**.

> **Calendar points worth knowing here:**
> - **Issue dates live in the Calendar, not here** (this file was wrong about Issue 1's date three times).
> - **The book is the source.** On a sentence a reader meets on more than one surface, **the book's wording wins**, a deliberate exception to "the deployed page wins".
> - **The spearhead is the front door, not a leash.** Only **D** and **C** are downstream of it; **E's lift half and F stand on their own feet.** Spine E is two wells, the line and the lift; leading with the line is a **strong default, not a law**.
> - **Never reintroduce two retired framings:** **"nobody decided"**, and **the front-desk-versus-therapist split**. **"cash practice" and "advanced care" are interchangeable; neither is retired.**
> - **"The Operator" is the newsletter's title; the masthead standfirst rule is retired.**
> - **"A free monthly newsletter for physical therapy practices"** is now one phrase on every Instagram surface (the bio, the Reel's spoken close, every caption, the carousel's last slide) and the site's description carries the same niche and cadence. **A cadence or niche change checks all of them, and the Calendar lists them.**
> - **The readiness ladder:** newsletter (cold follow) → email (a self-paced question) → discovery call (the door).
> - **The Instagram account is @franklinaisolutions**, linked from the site footer (the glyph on the © line); its record (posts, the 3D Ben, the profile picture) lives in the Calendar. The first carousel posted 2026-10-27; the post look, the key asset and the build script live in the Reel kit (`~/Downloads/operator-reel-kit-v5`), not this repo.

**This file** covers the **website build**: structure, styling, copy rules, locked values, the product facts the site displays, the **pricing of every rung**, **hosting and DNS**, and **the Kit account**. **It is the authority for everything it states.**

**No home, so no source:** market sizing, unit economics, the HIPAA architecture reasoning, the roadmap and risks (from the deleted Business Plan), and the **GlowPT/AWS backend architecture** (the GlowPT repo). **Do not reconstruct them from memory or cite them; say plainly there is no source.** Legal/entity work is business territory; only the displayed legal name is a site fact. *Narrow exception:* the **GlowPT** section records a few commercial facts **only because this site links into that flow and must not lie about it** (source: the GlowPT repo's `docs/commercial-handoff.md`; **the GlowPT code wins**).

---

## Business

FranklinAI builds custom web apps and tools for businesses — web apps, internal tools, and client-facing portals — built around a client's specific way of working rather than off-the-shelf templates. Based in Philadelphia, serving local and remote clients.

> **Legal entity: FranklinAI Solutions LLC** (Pennsylvania); **"FranklinAI"** is the brand. The **wordmark lockup carries the full legal name** ("FranklinAI" over **"Solutions LLC"**, nav and footer); the footer copyright is just "© {year}". **⚠️ NO COMMA: `FranklinAI Solutions LLC`, never `FranklinAI Solutions, LLC`**, as in the GlowPT contract drafts, glowpt.app's `src/lib/legal.js`, the Kit Commerce payout setup, and the **AWS management account's Company-name field, which the org BAA binds to.** glowpt.app's footer carries `© {year} FranklinAI Solutions LLC`. **Never reintroduce the comma for typographic taste.**

> **The work email lives on this domain.** `david@franklinaisolutions.com` is **Microsoft 365, bought through GoDaddy**; also David's AWS Identity Center username, the org's budget-alert address, his AWS Builder ID, **the Kit login and The Operator's sending address**. **Its delivery depends on records in this domain's Route 53 zone: the most dangerous thing in this repo's orbit.**

**Products under the umbrella:**
- **GlowPT** — a daily patient check-in app for physical therapy clinics. Clinics subscribe; their patients use it free. Separately branded (amber/navy, **glowpt.app**); on this site it wears FranklinAI's navy-and-blue. **Live, self-serve since V49.**
- **The reconciliation e-book** — **"What Your Practice Actually Sells,"** **$37**, one-time, self-serve. Written (about 7,600 words, eleven chapters plus an index; the file lives in the claude.ai project); **checkout live on Kit Commerce since 2026-10-16.** ⛔ **The e-book card is NEVER taken down** (David, 2026-09-27). **Do not suggest it.** No coming-soon strip, no pre-sell.
- Everything else is **custom-build work**, scoped after a discovery call, from $10,000.
- **Clarity is retired** from the site and lineup: re-add nothing of it unless David asks. Parked, not dead.

**Niche-forward front door.** FranklinAI is an umbrella; the headline speaks to the practice and the umbrella breathes one layer down. **Do not "reconcile" it back to a broad headline.**
- **Headline: "Built for Your Practice"** (no period; two lines). **Subline: "Built to Handle HIPAA"** (title case, no period): it **proves** the niche, the only place HIPAA appears.
- **Below the fold stays broad:** the About bio closes on **"what a business needs."**; How It Works and Discovery stay broadly worded; the hero label **"Custom Apps & Tools"** stays generic. **Do not add a sentence that walls the umbrella off.**
- **The niche is named in** the **headline**, the **newsletter card**, and the **GlowPT teaser** ("physical therapy patients"); **not the About bio.** The **e-book's Kit Commerce product page MAY name physical therapy**; **the site's e-book card and modal deliberately do not.**

**Flagship example:** the McKenzie Arm Care app — a custom patient-care web app with user login, journaling, symptom and progress logs, in-app messaging, an admin portal, smart alerts, and email notifications. Proof-of-work for custom builds; use confirmed with permission.

---

## GlowPT — the Two-Door Product

**Marketing constraints, not architecture** (source: the GlowPT repo's `docs/commercial-handoff.md`; **the GlowPT code wins**).

| Fact | What the site may say |
|---|---|
| **Signup is self-serve:** `glowpt.app/onboard`, a ~4-field form creating the clinic, manager and patient link. | "Sign up online." "Set up your clinic in a minute." |
| **Activation is NOT self-serve.** A clinic starts **closed**; David flips it manually, where the BAA and first payment are confirmed. | **Nothing implying patients can start checking in right after signup.** |
| **Two click-through agreements at signup, FINAL** (BAA and Subscription Agreement, version-stamped; no attorney, David's call 2026-10-20), under an org-level AWS BAA active since August 2026. | Nothing yet. |
| **Billing on Stripe since 2026-10-20:** $350/month, **renews monthly, cancel anytime** (Subscription Agreement §6; GlowPT's `RENEWAL_LINE` "Renews monthly. Cancel anytime." on `/onboard`), plus a Stripe billing portal. All in the GlowPT repo. | **No billing claims here.** If one is ever added, use `RENEWAL_LINE` word for word; **no refund or trial claims.** |
| **Demo data only until a clinic signs and pays** (cyber insurance is on David's list before the first real patient). | **Nothing implying live clinics are in production.** |
| **$350 covers the clinic with no patient limit.** | Feature bullet 3 says so. |

- ⛔ **No billing, refund or trial claims on this site.** David settled auto-renewal on 2026-10-20 (Pennsylvania has no auto-renewal statute).
- ⛔ **Never put an `@glowpt.app` address in a `mailto:`**: glowpt.app has **no root MX record**; mail bounces silently. The contact is **`david@franklinaisolutions.com`**, both sites.
- ⛔ **Never describe GlowPT as providing an exercise plan or exercise prescription** (see **GlowPT Modal**).

**Two doors, one gate:** the activation flip and the discovery call are the same human step where the BAA and the money are confirmed. The owner who wants to talk first **books the call**; the owner who wants to start **signs up, lands closed, emails David**.

**What differs between the sites, deliberately:** (1) the pitch's **first sentence** (this site names the niche); **the second sentence is identical on all four surfaces**; (2) glowpt.app carries **the price line and signup path**; (3) **glowpt.app's landing header is deliberately self-sufficient** (reached by URL, search, QR and forwards) — **do not thin it.** **A thin "handoff-only" modal here was rejected:** a visitor reaches the price and feature list before a signup link, so the self-serve door is inside the modal, not on the card.

---

## The Offer Ladder and Pricing

**The content is free; the ladder is where the money is.**

| Rung | Price | Sells how | On the site | Status |
|---|---|---|---|---|
| **The Operator newsletter** | Free | The free engine, on **Kit**. **Not a product.** | Its own card between Hero and Available | **Live**, Kit form `9962049`, double opt-in |
| **The reconciliation e-book** | $37, one-time | **Self-serve.** The first paid yes. | **First** product on Available; More Info opens `EbookModal` | **Live** on Kit Commerce since 2026-10-16 |
| **GlowPT** | $350 / month | **Two doors: `glowpt.app/onboard` or the discovery call**, both landing at manual activation. | Available card; both CTAs in `GlowPTModal` | Live |
| **The custom build** | From $10,000 | Needs the discovery call. | Custom Pricing | Live |

**One ask per issue, matched to the issue** (David, 2026-10-16; **reverses** the August 30 rule that every issue closes on the call). Issues the guide answers (the model-confusion issues: 1, 2, 4) **close on the guide**; others (AI, systems and similar) **close on the discovery call**. **Never both. GlowPT is never pitched inside an issue.** The call stays on the site and in the guide's P.S.: newsletter, guide, call.

**The e-book:** **book one is reconciliation** (the newsletter gives the diagnosis free; the book sells the way out). **Checkout: Kit Commerce, DECIDED 2026-09-25.** **Gumroad is merchant of record** (US sales tax, EU VAT); **Kit Commerce is not**, so that liability sits with FranklinAI Solutions LLC; **David chose Kit anyway because every buyer lands on the list, the point of the $37 rung.** **Gumroad or Payhip only if Kit Commerce fails in practice.** Do not assume Stripe directly (Kit pays out through its own Stripe connection). **The price lives in three places that move together:** `App.jsx` (**once**, in the `EbookModal` button label "Buy the Guide · $37"), this file, and the Kit product (id `293598`).

**GlowPT's price:** $350 / month, flat, **no patient limit**, shown in the GlowPT modal. **If it changes, THREE places move: `App.jsx`, this file, and `glowpt/src/lib/marketing.js` (`MONTHLY_PRICE_USD`).** ⚠️ **The price line at `glowpt.app/onboard` is a CONTRACT REQUIREMENT** (Subscription Agreement §5.1: "$350 per month, **or the amount stated at sign-up**"; that line IS the amount stated): never remove it or edit it as marketing copy. It is **two constants on two lines** (`PRICE_LINE` "$350 per month, per clinic." and `PATIENTS_FREE_LINE` "Patients join free.") because one string stranded "free." alone on iPhone portrait. **Do not recombine them.**

**Custom Pricing:** **The Build** — From $10,000, whisper subtext "New features quoted and built one at a time, as you grow." (Inter 15px, #8892a4, marginTop: '0'). **Monthly Care** — $350 / month, optional.

> ## ⚠️ THE `$350` DECOY — read before changing GlowPT's price
> **`$350` appears TWICE in `App.jsx` and only one is GlowPT:** **line 143**, inside `GlowPTModal`'s footer (**GlowPT**), and **line 558**, `Monthly Care`'s `price: '$350'` in `Pricing()` (**the custom build's hosting-and-maintenance retainer**, unrelated). **If GlowPT's price moves, line 558 must NOT move with it.** Line numbers drift; confirm by the surrounding function name.

**Order rationale.** The e-book first (cheapest paid yes, under the newsletter whose diagnosis it answers), GlowPT second (recurring flagship), then Custom Work as proof, into How It Works and Custom Pricing.

## Primary CTA and Email Option

"Book a Free Discovery Call" — hero card, GlowPT modal, Discovery CTA card. Never in the nav or footer. **Title case, no period.** Full-page buttons (hero + Discovery): `padding: '11px 22px', fontSize: '14px'`. Modal buttons: `padding: '10px 20px', fontSize: '13px'`, deliberately the smallest; **one exception:** "Buy the Guide · $37" is `12px 26px` at `15px` (David, 2026-10-04: too small for the pop-up's only action). **Link:** `https://cal.com/david-peterson-40s7lw/free-discovery-call`, new tab (`target="_blank" rel="noopener noreferrer"`).

> **The filled style is exclusive to the discovery call, site-wide.** Every transaction button is a ghost: "Buy the Guide · $37", "Bring GlowPT to Your Clinic", "Subscribe for Free". **Flipping one to `btn--primary` needs David's explicit say-so** (declined in V49).

`EmailOption`, **on the Discovery CTA card only** (the middle rung of the readiness ladder): "Not ready to schedule?" then **"Email"** on its own line (via `<br />`), a mailto to **`david@franklinaisolutions.com`**. **No period.** Inter 15px, #8892a4, link #60a5fa at 600, marginTop 18px.

## Newsletter Card — Live and Wired

*The Operator* has **its own card** between Hero and Available: **a card, not a "strip"** (the component keeps the legacy name `NewsletterStrip`; no "quiet strip" sizing), **never a product card, never on the Available card.** Both masthead lines upright:
- **Header "Newsletter"** — blue `card-heading`, `clamp(36px, 5.5vw, 58px)`, `lineHeight: '1.2'`, `marginBottom: 'clamp(4px, 1.5vw, 10px)'`.
- **Subhead "The Operator"** — white Playfair, `clamp(30px, 5vw, 35px)`, 800, `lineHeight: '1.1'`, `marginTop: '0'`, `marginBottom: '14px'`.
- **Description** (Inter 15px, #8892a4, `marginTop: '0'`, `marginBottom: '18px'`, `lineHeight: '1.5'`): **"A monthly newsletter for physical therapy practices that takes a look at what's going on in your practice and what to do about it."** (David, 2026-10-04). **It appears twice, word for word (card and `NewsletterModal`); they move together.** "about" and "it." are joined by `&nbsp;` so "it." never sits alone on iPhone portrait. `grep -c "A monthly newsletter for physical therapy practices"` → **2**.
- **Action:** one ghost button **"Subscribe for Free"** (`btn btn--ghost`, `marginTop: '0'`) opening `NewsletterModal`. **No email field on the card** (an inline field was a dead click; V39 reversed V28); **do not re-propose it unless David asks.**

**`NewsletterModal`** (the fourth modal): title **"The Operator"**, subline **"Free to subscribe."** (Inter 14px/600/#8899b0), the same description, then a `borderTop` divider wrapping a **`<form>`**: an email input (cream #f0e6d3 on rgba(255,255,255,0.04), 1px border rgba(96,165,250,0.3), 8px radius, **16px font to prevent iOS zoom**, `WebkitAppearance: 'none'`, flex `1 1 220px`, maxWidth 280px, 44px tall, **`name="email_address"`, `required`**) and the ghost Subscribe button (**`type="submit"`**). Under it, **"Then check your email to confirm."** (Inter 14px, #8892a4, marginTop 12px, centered), **hidden once the success line shows**; then the shared bottom Close. **The 44px alignment fix:** `height`/`minHeight: '44px'`, `boxSizing: 'border-box'`, `display: 'inline-flex'`, centering, and **`marginTop: '0'`** (cancels `.btn`'s `margin-top: 8px`); keep all of them.

| Moment | What happens |
|---|---|
| Submit | `fetch` POST of a `FormData` with **`email_address`** to **`https://app.kit.com/forms/9962049/subscriptions`** (`KIT_FORM_URL`), header `Accept: application/json`. Kit answers any origin with `{"status":"success"}` or `{"status":"failed","errors":{"fields":[...]}}`. |
| In flight | Input and button disabled; button reads **"Subscribing…"**. |
| Success | Row replaced by **"Almost there. Check your email to confirm."** (`role="status"`; Inter 15px, #f0e6d3, lineHeight 1.5, min-height 44px so the modal does not jump); the modal **closes itself after 2.5 seconds** (a three-line success state that stayed open was rejected as too wordy, 2026-09-27). |
| Kit rejects the address | Stays open: **"That email address doesn't look right. Check it and try again."** (`role="alert"`; Inter 14px, #8899b0, lineHeight 1.5, centered) |
| Anything else fails | Stays open: **"That didn’t go through. Please try again in a moment."** |

**If Kit's double opt-in is ever turned OFF, change the success line to "You're in."** It is ON by David's choice (keeps fake and mistyped addresses off the list).

## Tech Stack

React + Vite, plain CSS (no Tailwind), **AWS Amplify Hosting**, GitHub. **A pure static build: no backend, no serverless functions, no env files.** Kit's form endpoint works from the browser and the checkout is a plain link, so **nothing needs a backend. Do not propose one.** **The Kit form ID `9962049` is public by nature**, a constant in `App.jsx`. **Stack boundary:** site → Amplify (account `franklinai-web`, hosting only); newsletter and the e-book checkout → Kit; GlowPT → AWS account `glowpt-prod`, its own repo; McKenzie Arm Care → Supabase, hosted on Netlify, its own folder.

---

## Hosting and DNS (AWS)

**On AWS Amplify since 2026-09-25** (moved from Netlify with no downtime or lost mail). **Netlify is gone for this site** (David deleted the site `franklinai-solutions` and its zone on 2026-10-17 after confirming every record live in Route 53; glowpt.app's leftover zone too); **it holds only McKenzie (`mckenziearmcare.com`): leave it alone.** **New records go in Route 53.**

| Thing | Value |
|---|---|
| **AWS account** | **`franklinai-web`, 359813812260**, in the org's **`Workloads`** OU (`ou-i93g-vvz3dnxq`) beside `glowpt-prod`; root email `besoulful+aws-franklinai-web@gmail.com`. **Not** the management account (billing, org BAA, Bedrock); **never** `glowpt-prod` (patient data). Region **`us-east-1`**, always. |
| **Access** | Identity Center user `david`, permission set `AdministratorAccess`; CLI profile **`franklinai-web`** in `~/.aws/config` (`sso_session = glowpt`; one login covers all three profiles for 8 hours). |
| **Amplify app** | **`franklinai-web`**, appId **`dtrvxjb8lde3p`**, branch **`main`**, `https://main.dtrvxjb8lde3p.amplifyapp.com`; framework "None", SSR disabled, Standard build instance, default image, **no environment variables**. Domain: apex and `www` → `main`; certificate **AMPLIFY_MANAGED** (`*.franklinaisolutions.com`, Amazon RSA 2048, self-renewing); CloudFront target `dbgirmwp1juc8.cloudfront.net`. |
| **Route 53 zone** | **`Z0616895187ZTAR49DY5P`**; nameservers `ns-561.awsdns-06.net`, `ns-389.awsdns-48.com`, `ns-1501.awsdns-59.org`, `ns-1898.awsdns-45.co.uk`; negative-caching TTL effectively **900s (15 minutes)**. |
| **Registrar** | **GoDaddy, registrar only** (only the nameservers changed there). **Touch nothing else at GoDaddy, and never the Microsoft 365 tenant, in site work.** |
| **GitHub link** | App **"AWS Amplify (us-east-1)"** on `besoulful-design`, access to **`glowpt` + `franklinai-v2` only** (removing `glowpt` breaks GlowPT's builds). |
| **Cost** | About $1–2/month, under the org's $150 budget alarm. Faster than Netlify to David's eye; **nobody has timed it, so quote no number.** |

**In the repo (`0279ffe`):** **`amplify.yml`** (`nvm install`, `nvm use`, `node --version`, `npm ci`, `npm run build`; artifacts `dist`; caches `node_modules`); **`.nvmrc`** = **`24`** (bump Node here, not in `amplify.yml`); **`customHttp.yml`** (**HSTS** `max-age=31536000` everywhere; **`no-cache`** `public, max-age=0, must-revalidate` on `**/*.html`; hashed assets may be cached hard).

**Outside git, recorded here because no diff shows them:** **Amplify rewrites** (read with `aws amplify get-app --app-id dtrvxjb8lde3p --profile franklinai-web`), in order: (1) **`https://www.franklinaisolutions.com` → `https://franklinaisolutions.com`, 301**; (2) **`/<*>` → `/index.html`, `404-200`**, Amplify's default, fine with no router (**if a router is ever added, do not trust it**; GlowPT needed a regex SPA rewrite); **the domain association**; **the Kit account** (below); and **`.claude/settings.local.json`**, David's narrow Route 53 permission file (gitignored, `fb01e32`). **Any change to settings outside git must be recorded here.**

**Route 53's own listing is the authority** (`aws route53 list-resource-record-sets --hosted-zone-id Z0616895187ZTAR49DY5P --profile franklinai-web`; `dig` cannot list a zone).

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

**Not present, deliberately:** AAAA, CAA, **Microsoft 365 DKIM**, **DNSSEC (no DS record at the registry)**. **Add none of them as a side effect of other work.** Tightening DMARC past `p=none` is a legitimate future change only as its own change, after both Microsoft 365 and Kit mail pass, tested with a mail round-trip.

> **The rule for every DNS change:** one change at a time; **copy any mail or verification record exactly, oddities included**; **before writing a record read off a screenshot, confirm its target resolves**; verify each record on a Route 53 nameserver directly (`dig @ns-561.awsdns-06.net <name> <type>`) and **re-read the apex MX and TXT on the same query**; after anything that could touch mail, **David sends a test email both ways** (to and from an outside address).

**The Netlify-to-Amplify switch method** (reuse it for McKenzie) is written out in `docs/history.md` section 0ii: inventory the old zone; prove the new host first; copy every record; issue the certificate before the switch; rehearse with `curl --resolve`; compare both providers' answers and check the registry for a DS record; only then David swaps nameservers and tests mail both ways.

**Traps — do not repeat them:**
- **Any file Amplify reads may also be read by whatever else builds the repo** (`.nvmrc` was read by Netlify too).
- **Check account and region in the console header before every Amplify or Route 53 click** (it once showed "AWS Amplify (us-east-2)").
- **Safari's pop-up handling breaks the GitHub step in the Amplify console:** use **github.com/settings/installations → AWS Amplify (us-east-1) → Configure → Repository access**, click the repo name, then refresh in Amplify.
- **Never click "Edit YML file" in the Amplify console** (it can commit `amplify.yml` back; the file in git is the source). **No Amplify firewall (WAF)**; ignore the "Enable firewall" card.
- **The Claude Code safety system blocks `aws organizations` writes and Identity Center grants;** David does those in the console.
- **Route 53 writes from this root need the permission file.** **An `export PATH=...` prefix no longer matches a prefix allowlist** and **auto-approve flags trip the classifier**; try the plain command first. **`--hosted-zone-config Comment=...` shorthand splits on commas** (pass JSON); **zsh globs unquoted `--query ChangeInfo.[Id,Status]`** (quote it).
- **The AWS console and the terminal are different sessions.** Run `aws sso login --profile …` in the background; Safari opens and David approves with Touch ID. **Do not hand him a command to paste.**
- **A brand-new DNS name can "fail validation" for up to 15 minutes** (negative caching): **wait and validate again; do not change the records.**
- **Never click Kit's "Set this up for me"** (it connects Kit to the DNS provider); records go in by hand.
- **Measure before theorizing:** read the account with one CLI call before arguing with AWS.

---

## Kit (Newsletter Platform)

**Kit's settings live in Kit's web app (`app.kit.com`), not in git; this is their record. Any Kit change that affects what readers receive is recorded here.**

| Thing | Value |
|---|---|
| **Account** | Login **`david@franklinaisolutions.com`**, owner David Peterson, account name **FranklinAI**, website `https://franklinaisolutions.com`; created 2026-09-25. Brand name in Kit "FranklinAI" (the legal name only in the footer address and payouts). GDPR consent page: **Don't show to anyone.** Unsubscribe survey: **off.** |
| **Plan** | **Creator, monthly ($39 + tax on the 14th; renews 2026-11-14)**, David's card; can drop to Free any month. **Creator caps the list at 1,000** (Free allows 10,000): revisit near 1,000. Kept for the **Kit MCP**, sequences and automations, and no Kit branding. ⚠️ **A lapsed plan locks the account and stops confirmation emails** (it happened 2026-10-09); **after any plan change, send a test signup through to Confirmed.** |
| **Form** | **"The Operator site signup"**, **ID `9962049`**, inline, template "Clare", **published**; its Kit styling and "success message" are unused (the site posts to its endpoint). **Double opt-in ON** (Form Settings → Confirmation email: *Send confirmation email* ticked, *Auto-confirm* unticked). **After confirming, readers go to `https://franklinaisolutions.com/confirmed`** (Kit's default page carries a badge that cannot be switched off). |
| **Confirmation email** | Subject *Confirm your subscription to The Operator*; top line *Thanks for signing up for The Operator. Tap the button below to confirm, and the next issue will come straight to your inbox.*; button *Confirm Your Subscription*; closing *Glad you're here.* / *Warmest wishes,* / *David Peterson* with *FranklinAI Solutions LLC* on the next line (Shift+Return). **The newsletter site's form ends exactly the same way; keep them matching.** Edited only in Kit (Landing pages & forms → the form → Settings → Confirmation email → Edit Email Contents); the MCP cannot reach it. |
| **Sender** | **FranklinAI <david@franklinaisolutions.com>**, the default (David, 2026-10-20: "reads more like a company newsletter"), in **Settings → Email → Email addresses** (click the name); every broadcast, sequence, receipt and confirmation follows it. Sending domain `franklinaisolutions.com` verified 2026-09-25 (the four Kit DNS records). |
| **Mailing address (email footer)** | **Kit's shared stand-in: 600 1st Ave, Ste 330 PMB 92768, Seattle, WA 98104-2246**, for Kit emails only; **mail there is not forwarded.** **David's choice (2026-10-17); do not suggest a PO box again. Never print Kit's address outside Kit.** To change it: **Settings → Email → Mailing address**, prefixed **`FranklinAI Solutions LLC, `**. |
| **Payouts (Kit Commerce)** | A **Stripe Express** account under Kit (Settings → Revenue → Set up payments), login `david@franklinaisolutions.com`, as **Company, Single-member LLC, FranklinAI Solutions LLC** with the LLC's EIN; industry **Digital products → Books**. Paid **weekly on Fridays** to the LLC's **Bluevine business checking** (shown in Stripe as **Coastal Community Bank**, Bluevine's partner bank; correct). **Statement descriptor `FRANKLINAI`** in Stripe and Kit (the default "FRANKLINAISOLUTIONS.CO" reads as another domain and invites disputes). Changes via **Open in Stripe**. ⛔ Never record account numbers, SSN or home address here (public repo). |
| **The guide (product)** | *What Your Practice Actually Sells*, id `293598`, $37 one-time, the final PDF by emailed download link, page `https://franklinai.kit.com/products/what-your-practice-actually-sells` (Kit's subdomain, no DNS), button *Buy the Guide*, badge off on the page and the thank-you page. **Above the PDF line (David, 2026-10-31):** *Written for the insurance practice, where the two models most often get tangled. If you run a cash practice, the same method applies, and chapter 4 gives you your version of the sentence.* **Page copy is edited only in Kit** (Monetization → Products → the guide's card); it is an older v1 page the MCP cannot reach, and **Save alone updates the live page.** **Buyers join as active subscribers directly** (no double opt-in, no tag); card statements read **"FranklinAI"**. Kit collects no US sales tax: **David's call 2026-10-19: keep $37 and pay Pennsylvania's share out of PA sales; no price change, no tax line in any copy** (other states only past their nexus thresholds; his open questions are in Open Items). |
| **Kit MCP** | A claude.ai connector since 2026-10-04; **needs the Creator plan.** **It can write: read freely, but show David the exact change and get his yes before any write.** Avoid `list_forms` (Kit warns it can publish unsaved form edits). **It cannot** upload a file, edit a product page, forms, the confirmation email or email templates, create Rules or Visual automations, or send a test or schedule a broadcast: David's clicks. **A test send:** the **eye icon** (Preview) at the right end of the broadcast editor's toolbar; links in a test email open Kit's "Link preview" page, which is normal. **`update_broadcast` with `public: true`** = the Publish page's **"Add to your Newsletter site"**. |
| **Subscribers** | **Three as of 2026-10-20:** **Felix** (`felixzheng0813@…`, David's husband), **Kevin** (`kevin.e.gard@…`, a PT reader), **Dolly** (`besoulful+dolly@…`, the test reader kept so David sees each issue arrive). **Every other test address is unsubscribed; unsubscribe any new one before an issue goes out** (a buyer's purchase and download are unaffected). Lists lag a minute after an unsubscribe. |
| **Automated emails** | All from **FranklinAI** on the **"Text only"** template (Classic, the default), **its "Built with Kit" badge off** (Broadcasts → Email templates → Text only → Additional; one switch for every email). **Welcome:** sequence *The Operator: welcome* (`2931894`), one email, right away, via **two Rules** (subscribes to form *The Operator site signup*, or to form *Newsletter site*). **Buyer follow-up:** sequence *Guide buyers: follow-up* (`2931893`, email `10441959`), one email with **Operator line A** (buyers join the list directly), **delay 2 days** (sends at 11 AM Eastern), via the **Visual automation "Guide buyers"** (Product purchased; Rules has no purchase trigger). No kite-and-wordmark email footer unless David asks (images get blocked; it reads as marketing). |
| **Newsletter site** | `https://franklinai.kit.com`, where sent issues are published; **Audience growth → Newsletter site**, then **Publish**. Profile: name **FranklinAI**, byline **The Operator**, the site's one-sentence newsletter description, photo the kite on navy (`FranklinAI-kite-profile.png`, 800×800, rendered from the inline `KiteLogo`; in David's Downloads, not this repo). **"Built with Kit" badge hidden by Custom CSS** (Kit support's fix, 2026-10-21; **Design & Template → Advanced → Custom CSS**): `a.color-badge.p-2.flex.items-center.justify-center.transition-transform.transform.scale-100.hover\:scale-105.duration-300 { display: none !important; }`. **If it ever comes back, Kit renamed its classes:** use `a.color-badge { display: none !important; }`. The editor preview still shows it; only the live site matters. **⚠️ Its Subscribe boxes are a SEPARATE form, "Newsletter site"** (the editor's Sign Up Form): our confirmation email, redirect **`https://franklinaisolutions.com/confirmed`**, the welcome by the second Rule (tested end to end 2026-10-20). Its on-page success line ("Success! You've been added to the list…") does not mention confirming and has no documented setting. |

> **Reading Kit's numbers.** The **summary boxes** atop Subscribers **lag** minutes to an hour; **the list's "Total: N" is live.** The page does not refresh itself: a just-confirmed subscriber shows **Unconfirmed** (normal between signup and the tap) until you reload, and a **"Status is Confirmed" filter hides them.** **"Opened" can be inflated by Gmail fetching images.** The per-subscriber page shows Delivered / Opened / Clicked with **exact times on hover**, the tool for a stuck signup.

---

## Repo, Domain, Icons, Scheduling

github.com/besoulful-design/franklinai-v2 · local path `~/Downloads/franklinai-v2` *(sibling: github.com/besoulful-design/glowpt · `~/Downloads/glowpt`)*. **Pushing to `main` deploys through Amplify** (about a minute and a half; every push is a build, so batching commits reads better). **HTML is served `no-cache`**: a deploy shows on the next load; hard refresh with Cmd+Shift+R; favicon changes need the tab closed and reopened. **Domain:** franklinaisolutions.com (registrar GoDaddy, DNS in Route 53, hosting on Amplify, Kit sends as it); GlowPT's site is **glowpt.app**.

**Public assets** (`public/`): `public/david.png` (headshot, 400×400, shown as a 120px circle) · `public/apple-touch-icon.png` (180×180, kite on navy, bolt #fbbf24) · `public/favicon.svg` (SVG favicon, same mark) · `public/icons.svg` (sprite). The tab title is just "FranklinAI."

**Cal.com:** account slug `david-peterson-40s7lw` · event "Free Discovery Call" · slug `free-discovery-call` · 30 minutes · Cal Video · `https://cal.com/david-peterson-40s7lw/free-discovery-call`

---

## Brand Kit

| Color role | Value |
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

> **#070f24 reads as dark blue only as a large filled block**; as thin text on white it reads black, so the Instagram posts use **#1e3a5f** for text on white (never an issue on the site, where every ground is navy). **GlowPT keeps its own amber/navy brand on glowpt.app: do not carry GlowPT amber into this repo, or FranklinAI blue into that one.** Only the *voice* and the shared bullet list cross.

| Type role | Font | Weight | Size / Notes |
|---|---|---|---|
| Hero label ("Custom / Apps & Tools") | Playfair Display | 700 | **clamp(40px, 6vw, 64px)**, blue, two lines, **lineHeight 1.1**, letterSpacing 0.04em, **marginBottom clamp(2px, 1vw, 8px)** |
| Hero headline ("Built for / Your Practice") | Playfair Display | 800 | **clamp(37.5px, 5.75vw, 57.5px)**, white, two lines (break after "for"), marginBottom 10px, **no period** |
| Hero trust subline | Inter | 400 | 15px, #8892a4; **"Built to Handle HIPAA"**, title case, **no period**; marginTop 0, marginBottom clamp(4px, 1vw, 8px), no link |
| Section card headings (all seven, incl. "Newsletter") | Playfair Display | 800 | **clamp(36px, 5.5vw, 58px)**, blue, **lineHeight 1.2** (About 1.1), **marginBottom clamp(4px, 1.5vw, 10px)** |
| — "Behind FranklinAI" | Playfair Display | 800 | two lines via `<br />`, lineHeight 1.1; "Behind Franklin" blue, **"AI" white** |
| Secondary sub-titles (incl. "The Operator") | Playfair Display | 700–800 | **clamp(30px, 5vw, 35px)**, **all white** |
| Product teaser | Inter (card-text) | 400 | 16px, #8892a4 |
| Ghost buttons | Inter (btn--ghost) | 600–700 | 15px, **title case, no period** |
| Price numbers / descriptors | Playfair Display | 700 | **27.7px** / 20px, blue |
| Modal titles | Playfair Display | — | `.modal__title`, marginTop 6px |
| Modal sublines | Inter | 600 | 14px, #8899b0, marginBottom 16px |
| Modal feature rows (GlowPT and case study, one shared `ModalFeatureList`) | Inter | 400 / 700 check | 15px, #f0e6d3 text, #60a5fa check, single column |

**Nav, footer, newsletter and email-option type is specified in those sections.** Google Fonts import (locked, in `index.html`): `Playfair+Display:ital,wght@0,700;0,800;1,800&family=Inter:wght@400;500;600;700;800`. Nothing on the page is italic, so the `1,800` italic face is unused, left in. **The Instagram posts set "The Operator" in Inter; the site's subhead stays Playfair. Do not "reconcile" them.** ⚠️ **If a rule does not state `fontStyle`, it is one inherited value away from a face you did not choose** (glowpt.app's hero rendered italic in Safari until pinned with `fontStyle: 'normal'`).

**Three-tier headings:** (1) **hero** label and headline; (2) **section card headings**: Newsletter, Available, Custom Work, How It Works, Custom Pricing, Behind FranklinAI, Let's Build; (3) **secondary sub-titles**, all white (sizes in the table). Price numbers are a separate fixed size, **27.7px**. **No heading on the page is italic or off-tier.**

**Gold is logo-only.** #fbbf24 has exactly one home: **the kite's lightning bolt**, never a copy, heading, or sub-title color. **Every sub-title is white** (The Operator, the e-book name, GlowPT, David Peterson, McKenzie Arm Care, step and pricing-tier titles); **every section heading is blue**; **"AI" in the wordmark (nav, footer, About heading) is white.** For emphasis use weight, a label, or a thin rule, **not** gold.

**Card padding:** every `.site-card` carries inline **`paddingTop: '16px'`** and **`paddingBottom: '24px'`** (sides 40px). Each `card-heading` carries **`marginBottom: 'clamp(4px, 1.5vw, 10px)'`** and an explicit **`lineHeight: '1.2'`** (About 1.1); without it headings inherit the body's `1.6` and pad ~15px of dead space. **No negative-margin pulls anywhere below a heading.** Both `step-stack` wrappers sit at `marginTop: '0'`; the About headshot at `margin: '14px auto 10px'`.

**iOS text guard:** `App()` returns a single wrapping **`<div style={{ WebkitTextSizeAdjust: '100%' }}>`** around Nav, main, and Footer, so iOS Safari does not inflate text on rotation. **Give it no other styles** (capital W; **not `none`**, which kills pinch-zoom).

## Design Rules

- Single unified dark navy everywhere; dark mode locked via `color-scheme: only light`
- All content in `.site-card` (max-width 640px, margin 0 auto, text-align center, radius 16px); section headings inside the card at the top
- No dividers between sections or inside cards, except **four** `borderTop` rules: the GlowPT modal footer, the e-book modal footer, the newsletter modal form divider, and the page footer. **The two Available products are separated by spacing, not a rule.**
- No em dashes in copy, ever (site, glowpt.app, Kit). No step numbers in How It Works *(the `steps` array's unused `number` field and the `id="financial-clarity"` on Available are harmless leftovers)*
- Responsive sizing uses `clamp()` with **absolute pixel values**
- **All buttons are title case with no period.** Section headings take no period.
- **Form controls are pinned to a matching 44px height** with the button's inherited `.btn` top margin zeroed
- **Center a stack of differently-sized lines by block layout + `text-align: center`, never by flex shrink-to-content**: a block container with `text-align: center`, every line `display: block`. **The house standard for any centered stack.**
- **Geometric centering is not always optical centering.** A line can measure 0.00px centered and still read off. **Verify against the reference the eye uses**; if a line is provably centered and still looks wrong, the remedy is an explicit documented optical correction, not a re-derivation of the layout.
- **In a stacked pair of buttons, the BOTTOM one is the stronger position** (the terminal action); **a filled button placed last is the most dominant thing in the block.** Order and weight are separate levers.
- **Copy that appears twice must move twice:** the newsletter description and "Subscribe for Free" (card + modal); **across repos**, the GlowPT pitch's second sentence and the eight bullets; **into a document**, the `EbookModal`'s first two paragraphs echo the book's chapter 1, and **the book wins.**
- **When a two-sentence line must break the same way everywhere, make it two elements, not one string.**
- **A state change inside a modal must not make the modal jump** (the newsletter success line carries `minHeight: '44px'`).

---

## Kite Logo Mark — Locked SVG

The `KiteLogo` **inline at the top of `src/App.jsx`** is the single source of truth for the mark. `size` sets the height; width is `size × (101 / 240)`. **ViewBox:** `62 10 101 240`.

| Element | Fill |
|---|---|
| Kite panels: top-right / bottom-right / top-left / bottom-left | #1e3a5f / #0f2340 / #0f2340 / #1e3a5f |
| Kite outline + crosslines; both string segments; key ring, shaft, teeth | #60a5fa (`stroke="#60a5fa"` for lines) |
| Lightning bolt main fill / hot core | #fbbf24 / white at opacity="0.6" |
| String tail below key | stroke="#60a5fa" at opacity="0.3" |

**The crossbar is the true centerline.** The kite is NOT a symmetric diamond: vertices top (110,20), right (148,88), bottom (110,120), left (72,88). The cross-spar at **viewBox y=88** is the visual horizontal centerline, NOT the bounding-box midpoint: for a kite of height `H` it sits **`(88 - 10) / 240 × H = 0.325 × H`** px from the top. **Nav** (size 130): 54.71px wide, crossbar at **42.25px**. **Footer** (size 105): **44.19px** wide, crossbar at **34.12px**. **The nav kite carries NO `site-nav__logo` className** (it dodges a stale `.site-nav__logo { height: 168px !important }` rule, dead code in `global.css`). **If a kite size changes, the crossbar figure and the F-vs-crossbar margin change with it.**

---

## Locked Geometry — the Hand-Tuned Values

**Every value here was landed by eye or by a documented measurement. Change one only on David's instruction, and record the new value and why here.** History in `docs/history.md` (search "V48", "V30", "V31").

**Vertical: the wordmark F sits on the kite crossbar.** The brand row uses `align-items: flex-start`, so `F_center_from_top = marginTop + 0.561 × nameFontSize` (the capital "F" optical center, Playfair Display at `line-height: 1`, sits **0.561em below the top of the text line**). Set it equal to the crossbar (`0.325 × kiteHeight`) and solve for `marginTop`:
- **Nav wordmark `marginTop`: `clamp(13.98px, calc(42.25px - 2.44vw), 19.28px)`**
- **Footer text column `marginTop`: `16.17px`** (0.325 × 105 − 0.561 × 32). It was `13.16px` from June 21, leaving the F 2.8px above the crossbar; the nav was fixed on July 26 (`f50588e`) and the footer was not, until David saw it on 2026-10-25. Measured after: F center 0.21px from the crossbar (nav 0.38px).
- **To check it, measure the F's ink center against the crossbar line** (a canvas `measureText('F')` plus the glyph's range rect), not the text box. The horizontal dials do not affect this math.

**Horizontal: the `translateX` dials** (same value on desktop and iPhone; a transform never consumes layout width):
- **Nav brand `<a>`: `transform: 'translateX(-26px)'`** — the lockup-level dial.
- **Footer brand row `<div>`: `transform: 'translateX(-19px)'`** — the footer's single dial. **Hand-tuned:** David, by eye on the live site: 2026-10-25, `-14px` read slightly right, `-20px` too far left, `-17px` centered; 2026-10-31, once the Instagram glyph grew, he asked for a small nudge left and approved `-19px`. **Footer text column: no `transform`.**

> **The dials differ correctly:** the nav kite is *relatively smaller* next to its larger wordmark (kite-to-text width ratio ~0.22 vs the footer's ~0.27), so the heavier nav wordmark pulls the optical center further right. **Do not "reconcile" them to one number.** **Do not "derive" the footer dial from box math:** a session shipped `(kiteWidth 44.19 + gap 4) / 2 = 24.09px` as `-24.09px` and David rejected it at once (it dragged the signature left). **The dial is an optical judgement, not a centering equation**; the kite deliberately hangs left of the centered text.
>
> **"FranklinAI" is the widest line in both lockups and sets the column width** (nav 252.8px vs the subline's 222.6px; footer 160.5px vs 146.9px, at V54), so sublines can change without moving either lockup. **To prove a text change cannot move a lockup, compare the container's box in the running DOM before and after, not the text's.**

**Per-line nudges: ONE, on the copyright.** Nav "Solutions LLC", footer "Solutions LLC" and footer "franklinaisolutions.com": none. **Footer "© {year}": `translateX(-3px)`, a deliberate optical correction.** The footer Instagram glyph has none of its own; it sits inside the © line and rides that line's `-3px`. **Do NOT add a per-line `translateX` to any other line**; fix the *centering method* (block + `text-align`) first, and reach for an optical correction only when a line is provably centered and still reads wrong.

> **Why the copyright line is the exception:** it is geometrically centered to **0.00px**, but `©` is a light hollow circle beside four solid digits, so the ink leans right by roughly **2.2px**; solving for a balancing gap returns a **negative** number, so no tightening can fix it. **`-3px` was landed by David's eye on the live site** (the arithmetic favored `-2px`; V31's stripping of an old `-2px` from this line caused a recurring "the copyright isn't centered" complaint). **The gap after `©` is a fixed 2px CSS margin, not a word space:** `&copy;<span style={{ marginLeft: '2px' }}>{year}</span>`, no literal space (a thin-space glyph depends on the font). **Do not put the plain space back.**

**The footer lockup is CLOSED.** The kite on the **left**, one text column to its right holding **all four lines** (wordmark, "Solutions LLC", the domain, the copyright with the Instagram glyph at its end), centered with each other. **Do not restructure it, do not move the fine print out of the column, and do not recompute the `-19px` dial.** **Tried and reverted; do not try again:** (1) **`alignSelf: 'stretch'` on the fine-print spans while the column stayed flex** (V46; no effect, the *column* was still flex); (2) **the dial changed from `-14px` to a "derived" `-24.09px`** (dragged the signature left); (3) **the fine print moved out of the column into its own page-centered block** (rejected on sight); (4) **removing the footer dial entirely** (same); (5) **the Instagram glyph as a fifth line of its own** (2026-10-25; made the footer too tall). The copyright was fixed by the two per-line changes above, nothing structural.

> **"Closed" governs geometry, not every character.** A closed section can take a copy change (V54 removed the comma from "Solutions LLC"; the Instagram glyph joined the © line on 2026-10-25) **if you prove it moves nothing, and say how**: measure the text column's width, the brand row's left edge and the lines' tops before and after, at desktop and iPhone widths.

---

## Nav

- Sticky (`position: sticky; top: 0`); logo and wordmark only — no CTA, no links, no tagline; `padding: '6px 24px'`
- Brand link: `gap: '4px'`, `alignItems: 'flex-start'`, `transform: 'translateX(-26px)'`
- Kite: inline `KiteLogo size={130}`, wrapped in `<span style={{ flexShrink: 0, display: 'flex' }}>`, NO className
- Wordmark div: `marginTop: 'clamp(13.98px, calc(42.25px - 2.44vw), 19.28px)'`; `.site-nav__wordmark` is `display: flex; flex-direction: column; align-items: flex-start` in `global.css` (no centering problem so far; if one appears, apply the block + `text-align` standard)
- Name (Playfair 700) `clamp(40.95px, 4.35vw, 50.4px)` blue with "AI" white; **"Solutions LLC"** (no comma) **Inter 800**, `clamp(25.6px, 2.72vw, 31.5px)`, #60a5fa, `lineHeight '1'`, `marginTop '3px'`, **no `transform`**. Responsive via inline `clamp()`, not media queries.

## Footer — Fully Self-Contained in App.jsx

**NO CSS classes from `global.css`** (its `.site-footer*` rules are dead code); entirely inline. A scaled-down signature (kite 105, name 32px), kite-to-wordmark gap `4px`.

- **Footer outer:** `padding: '24px 24px 20px'`, `borderTop: '1px solid rgba(96, 165, 250, 0.12)'`, `marginTop: '0'`, `display: 'flex'`, `justifyContent: 'center'`.
- **Brand row:** `display: 'flex'`, `alignItems: 'flex-start'`, `gap: '4px'`, **`transform: 'translateX(-19px)'`**.
- **Kite** (left): inline `KiteLogo size={105}` in `<span style={{ flexShrink: 0, display: 'flex' }}>`, no className.
- **Text column** (right): **a plain block**, `textAlign: 'center'`, `marginTop: '16.17px'`, **no flex, no `transform`**. Every line `display: block`:
  1. **FranklinAI** — Playfair 700, 32px, lineHeight 1, blue with "AI" white, inside a `display: block` home link `<a>` (textDecoration none, color inherit). **The widest line; sets the column width.**
  2. **Solutions LLC** — Inter 800, 20px, blue, `letterSpacing: '0.02em'`, marginTop 2px, inside the same link. **No comma.**
  3. **franklinaisolutions.com** — Inter 400, 13px, #8892a4, lineHeight 1.5, marginTop 8px. **No transform.**
  4. **© {year}** — Inter 400, 13px, #8892a4, lineHeight 1.5, **`transform: 'translateX(-3px)'`**, year in a nested span with **`marginLeft: '2px'`**; then, on the same line, **the Instagram glyph** (David, 2026-10-25): a link to `https://www.instagram.com/franklinaisolutions/` (new tab, `aria-label` "FranklinAI on Instagram"), `display: 'inline-block'`, `marginLeft: '8px'`, `verticalAlign: '-2px'`, `lineHeight: 0`, color `#60a5fa`, **`transform: 'scale(1.5)'`, `transformOrigin: 'left center'`** (David, 2026-10-31: drawn at 19.5px; a transform takes no layout room, so the © text stays put and the 8px gap holds; **raising the size prop instead moves the line**), holding `InstagramGlyph size={13}` (`fill="currentColor"`). **The glyph is Meta's official path**, copied byte for byte from `Instagram_Glyph_Black.svg` in Meta's 2023 Instagram brand asset pack; never hand-drawn.

> **The spans are `display: block`, so each BOX is the full column width regardless of its text**: measure the column against the widest line, or the text itself. No email and **no mailing address** in the footer, which is why Kit's stand-in address needs no site change.

---

## Modals

All four (`EbookModal`, `GlowPTModal`, `CaseStudyModal`, `NewsletterModal`) lock page scroll via a `useEffect` setting `document.body.style.overflow = 'hidden'` on mount, restoring on unmount; each closes on the X, a backdrop click, **or the bottom Close**. **`NewsletterModal` also closes itself 2.5s after a successful signup** (a second `useEffect` clears its timer on unmount). **The bottom Close** (David, 2026-09-27: close from top or bottom, consistently) is one shared **`ModalCloseButton`**, last in every modal, 24px below the content: "Close", Inter 13px/600, #8892a4, transparent, **1px frame rgba(136, 146, 164, 0.35)**, radius 12px, padding `10px 20px`. **Grey, not a blue ghost, on purpose:** in `GlowPTModal` it sits under the filled discovery-call button and must not take the bottom, strongest position. Not a divider.

---

## Page Sections (in order)

All sections use `.section` → `.container` → `.site-card`. **Order: Hero → Newsletter (The Operator) → Available → Custom Work → How It Works → Custom Pricing → About → Discovery CTA**, read as one sentence: here's what I do → the free thing worth following → what's available → proof I build custom → how the work goes and what it costs → who I am → let's talk.

**Hero:** label "Custom" / "Apps & Tools"; headline **"Built for" / "Your Practice"**; trust subline **"Built to Handle HIPAA"** (values in the type table); CTA "Book a Free Discovery Call" (`btn btn--primary`, `padding: '11px 22px', fontSize: '14px'`, cal.com, new tab). No `EmailOption`. **Newsletter (`NewsletterStrip`):** see Newsletter Card.

### Available (`AvailableForPractice`)

The e-book first, GlowPT second; state flags `ebookOpen` and `glowOpen`. **Spacing (locked):** heading → first product **12px** (e-book `<h3>` `marginTop: '12px'`); title → teaser **10px** each (`marginBottom: '10px'`); teaser → button **16px** each (e-book teaser `marginBottom: '0'`; buttons `marginTop: '16px'`); between products **28px** (GlowPT `<h3>` `marginTop: '28px'`). Both titles Playfair 800, clamp(30px, 5vw, 35px), white, lineHeight 1.2.

- **The e-book:** title **"What Your Practice Actually Sells"**; teaser (`card-text`) **"A guide for owners running two business models in one building, an insurance practice and a cash practice, and making them work together."**; "More Info" (btn--ghost) → `EbookModal`.
- **GlowPT:** title "GlowPT"; teaser (`card-text`, `:last-of-type`, no inline overrides) **"The GlowPT app keeps physical therapy patients engaged between visits. More completed plans of care and the clinic stays full."** (identical to the modal description; **the second sentence is identical on all four surfaces**); "More Info" (btn--ghost) → `GlowPTModal`. **All GlowPT buttons stay inside the modal**: a visitor reaches the price and features before a signup link.

**EbookModal** (mirrors `GlowPTModal`): title (`modal__title`, marginTop 6px) **"What Your Practice Actually Sells"**, **no subline** (David removed "A self-serve playbook. $37, yours to download." on 2026-10-04). Body, three `modal__text` paragraphs:
1. *"The marketing pushes the premium programs, the packages, the specialty work, the thing that looks good on a flyer. The money arrives when a patient finishes a plan of care, visit after visit, over weeks. Those are two different businesses."*
2. *"You are running both. Most practices are. And the two are pulling against each other in every role in the building, because your team is being asked to sell advanced care and get patients to the end of their care at the same time, with nobody telling them which one wins when they collide."*
3. *"This guide walks you through the fix: decide what your practice actually is, then say it in one sentence your whole team can repeat. Not a tactic, not a tool. The one thing that lets everything else line up behind it."*

**Paragraphs 1 and 2 are the book's final chapter 1, word for word** (`f841663`, David, 2026-10-16), **and the book wins**; **never reintroduce the two retired framings** (the accident framing and the departmental split). **Footer** (borderTop hairline, paddingTop 24px, centered): one **ghost** button **"Buy the Guide · $37"** (`padding: '12px 26px', fontSize: '15px', marginTop: '0'`; the price lives in the label, joined by a middot; **no standalone price line**) linking to `https://franklinai.kit.com/products/what-your-practice-actually-sells` (`target="_blank" rel="noopener noreferrer"`), then **"A downloadable PDF."** (Inter 14px, #8892a4, lineHeight 1.5, marginTop 12px), then the shared Close.

**GlowPT Modal:** title "GlowPT" (marginTop 6px); subline **"Sign up online, or book a call first."** (its word order matches the button order; **it promises nothing about timing**); description **"The GlowPT app keeps physical therapy patients engaged between visits. More completed plans of care and the clinic stays full."** (**"More completed plans of care" deliberately echoes bullet 5 — do not "vary" it**; the old setup sentence "Patients walk out doing great, then drift off before their plan of care is done." stays deleted on both sites); **eight** feature lines; price $350 / month; **two CTAs.**

**The eight feature lines, in live order** (⚠️ **the same list, same order, lives in `glowpt/src/lib/marketing.js`; change one, change the other**):
1. "A 30-second daily check-in, with warm encouragement that keeps patients coming back."
2. "A private journal and weekly streaks, in every patient's pocket."
3. **"One subscription covers the clinic and the patients join for free."** *(Written three times; the keeper. It answers the per-seat math every owner silently does; **"the patients join for free" names its subject** so "for free" cannot attach to the subscription with `$350` below it.)*
4. "Reaches every patient, not just the ones you can bill remote monitoring on."
5. **"More completed plans of care, because engaged patients finish their care."**
6. "Zero work for your therapists. No building, no monitoring, no calls."
7. **"Runs alongside any EMR. Nothing to set up, nothing to integrate."** *(Seventh, not eighth.)*
8. **"A weekly roster summary and a clinic dashboard to follow activity, trends, and flags."** ("flags" verified live in the dashboard.)

**The exercise-plan exclusion is permanent.** Line 2 said "a personal exercise plan" until July 15, 2026. **Do not put that back. GlowPT has no exercise plan and never will**; that is the wedge separating it from the HEP tools clinics buy and never use. It has a **movement checklist**: a record of what the patient did, not a plan.

```
──────────────── (borderTop hairline, paddingTop 24px, textAlign center)
        $350 / month
   [ Bring GlowPT to Your Clinic ]   ← btn--ghost  → https://glowpt.app/onboard
   [ Book a Free Discovery Call   ]   ← btn--primary → cal.com
```

Both buttons `padding: '10px 20px', fontSize: '13px'`, `target="_blank" rel="noopener noreferrer"`. The **second** sits in a `<div style={{ marginTop: '12px' }}>` with its own `marginTop: '0'`; the first keeps `.btn`'s inherited 8px (**if the order changes, the wrapper moves to whichever is second**). ⚠️ **The ghost's label and destination match glowpt.app's own primary button** (`<Link to="/onboard">`); **if that label changes, this one changes with it.** **Settled; do not silently redo:** (1) **self-serve first, call second** (David's call, after being told the bottom is the stronger position); (2) **styles NOT flipped**; (3) **the discovery call stays in this modal** (a $350/month product keeps the option to talk first).

### The rest of the page

- **Custom Work:** title (card-title, white, clamp(30px, 5vw, 35px)) "McKenzie Arm Care"; two-sentence teaser; **"Case Study"** ghost button (marginTop 16px) → `CaseStudyModal`: title "McKenzie Arm Care" (marginTop 6px, no "Case Study" label inside), full description, the six features in the **same check-mark list as GlowPT** (`ModalFeatureList`, with `last` so the gap to Close stays 24px), each ending in a period. **The tech note ("Built with React, Supabase…") was removed by David on 2026-09-27; do not restore it.**
- **How It Works** (capital I, always): three steps, Discovery / Build / Grow; no step numbers rendered; parallel two-sentence structure; step-stack `marginTop: '0'`; step title wrapper marginBottom 10px; copy broadly worded.
- **Custom Pricing:** two tiers, step-stack `marginTop: '0'`: **The Build** (`pricePrefix: 'From'`, `$10,000`, whisper subtext) and **Monthly Care** (`$350`, `/ month`). Price line Playfair 700, 27.7px, blue, marginTop 4px. ⚠️ **Monthly Care's `$350` is the decoy.**
- **About** (heading "Behind FranklinAI", two lines via `<br />`, lineHeight 1.1, "Behind Franklin" blue, **"AI" white**): headshot `public/david.png`, 120px circle, objectFit cover, **margin '14px auto 10px'**, 3px border rgba(96,165,250,0.3); "David Peterson" (white, marginTop 0); then the bio.
- **Discovery CTA:** heading **"Let's Build"**; copy "Every project starts with a conversation. Tell us what you need or what's not working, and we'll figure out what to build."; CTA "Book a Free Discovery Call" (`marginTop: 'clamp(4px, 1vw, 8px)', padding: '11px 22px', fontSize: '14px'`); `<EmailOption />` beneath, the **only** place it appears. Section `id="discovery"`.

**The `/confirmed` page** (where Kit sends a reader after confirming): **no nav** (David, 2026-10-16); the card leads, with `paddingTop: clamp(56px, 16vh, 160px)` above it, then the footer. The card copies the newsletter masthead (**Newsletter** / **The Operator**), then *"Thanks for confirming. You're on the list for The Operator. The next issue will come straight to your inbox."* (the welcome email's own sentences), then two ghost buttons: **Visit FranklinAI** (to `/`) and, second in a 12px wrapper, **Read the Latest Issue**, opening `LATEST_ISSUE_URL` (the newsletter-site post of the latest issue) in a new tab. **⛔ Update `LATEST_ISSUE_URL` each time an issue is sent** (Kit's "Congrats" screen after sending shows the post's link). `App()` chooses the page by path; **`npm run build` copies `dist/index.html` to `dist/confirmed/index.html`** so Amplify serves it with a 200 (its fallback served a 404 status). **Keep both.**

---

## Copy Rules

**These bind anywhere a PT owner reads FranklinAI's words, glowpt.app and Kit included.**

- No em dashes anywhere, ever. No "software" (use "web apps and tools" or "apps"). Avoid "in plain English" (and similar); it can read as excluding non-native English speakers.
- Tone: warm, plain-spoken, builder-to-business-owner. No brochure language, no consultant register.
- Section headings title case, **no period**; **"Built to Handle HIPAA"** title case, no period. **All buttons title case with no period**, primary and ghost alike. The "Email" link has **no period** and points to **david@franklinaisolutions.com**. Modal feature lines end with periods.
- **GlowPT is always one word, capital G and PT**; it may be **"the GlowPT app"** in running copy. FranklinAI is always one word, capital F and capital AI; the "AI" renders white wherever the wordmark appears. The footer copyright is just "© {year}".
- **⚠️ THE LEGAL ENTITY IS WRITTEN `FranklinAI Solutions LLC`, WITH NO COMMA**, anywhere, on either site.
- **⚠️ NEVER END A CLAUSE ON A FLOATING "FOR FREE" OR "FREE" WHERE A PRICE IS NEARBY.** It attaches to whatever the reader last held in mind, usually the thing being sold. **Give it an explicit subject** ("the patients join for free"). Same trap for "included", "at no cost" and "on us".
- **Duplicated on purpose, edited together:** the newsletter description (card + modal; `grep -c "A monthly newsletter for physical therapy practices"` → **2**); **across repos**, the GlowPT pitch's second sentence and the eight bullets (`grep -c "More completed plans of care and the clinic stays full"` → **2** here, **1** in `glowpt/src/lib/marketing.js`).
- **Kit emails and issues sign off "Warmest wishes,", a paragraph gap, then "David Peterson" with "FranklinAI Solutions LLC" directly under it** (full legal name, no comma; the From line says FranklinAI, so the sign-off is where readers learn who writes, as their consultant, not a friend). In the MCP's content_tree: one paragraph with text `David Peterson\nFranklinAI Solutions LLC` (Kit renders a `<br/>`). Both confirmation emails add *Glad you're here.* above it.
- **The book wins on shared sentences:** where any surface repeats a sentence from *What Your Practice Actually Sells*, the book's wording is canonical.
- **"Guide" is the e-book's format word on every public surface** (David, 2026-10-04, **reversing** the switch to "playbook"): the site, the Kit product page and the book. **Do not reintroduce "playbook".**
- **Two retired framings are banned:** never **"nobody decided"**; never **split the building into the front desk versus the therapists.** **"cash practice" and "advanced care" are interchangeable; neither is retired.**
- **No job title, employer, or present-tense employment fact anywhere in site copy.**
- **GlowPT:** never an exercise plan or exercise prescription; **no billing, refund or trial claims** on this site (renewal wording, if ever needed, is GlowPT's `RENEWAL_LINE` verbatim); **nothing implying a clinic can start checking patients in immediately after signup.**

**Forbidden words:** "software" (use "web apps and tools" or "apps"); "in plain English" (and similar); "upsell" (it turns patients into targets; say "premium add-ons," "the premium sell," or "advanced care"); "treatment room" (therapists work on the floor, in the gym, in the open clinic; it reads like a physician's office; glowpt.app uses "treatment areas"); em dashes — anywhere, ever.

## Bio (About Section) — Locked

**David Peterson**

David has spent decades building systems and processes in both
nonprofit and for-profit businesses, across healthcare, research,
and education.

That experience is what FranklinAI is built on. Custom apps and tools
are the next step in work he's been doing his whole career, now with
better technology and a clear focus on what a business needs.

> **Four things are deliberate:** **no job title and no employer** (do not write a role, employer, or clinic back in); **no niche** (the bio is the umbrella's proof; **do not "reconcile" it to the niche-forward headline**, proposed and rejected); **"Healthcare, research, and education" and "nonprofit and for-profit" are two different axes and stay in separate clauses** (sector vs tax structure); **"That experience" in paragraph 2 depends on paragraph 1**, so a rewrite of paragraph 1 must leave it something to point at.

---

## CSS / JSX Boundary Rules

- **App root:** a single `<div style={{ WebkitTextSizeAdjust: '100%' }}>`, one property only.
- **Footer:** fully inline, NO CSS classes; text column block layout, every line `display: block`.
- **Nav:** `global.css` classes for layout plus inline overrides; the nav kite does not use `.site-nav__logo`.
- **Newsletter card:** `.section` / `.container` / `.site-card` / `.card-heading` plus inline styles; the modal's input, button, success and error lines fully inline. **Placeholder styling would need a `global.css` `::placeholder` rule** and is deliberately not added.
- **Available card:** `.card-heading` / `.card-text` / `.btn` plus inline overrides; modal sublines, bodies, price blocks and dividers fully inline.
- **Custom Work:** `.card-title` / `.card-text` / `.btn`; `CaseStudyModal` is inline-styled through the shared `ModalFeatureList` (the `.modal__features` / `.modal__feature` / `.modal__stack` rules in `global.css` are dead code).
- **Primary buttons:** all three use `btn btn--primary` plus inline sizing; do not remove the sizing without setting new explicit sizing.
- **Fixes are JSX-only via inline styles.** Avoid `global.css` edits. Public assets go in `public/`.

---

## Process

### In Claude Code

**Read this file first; confirm the working directory** (GlowPT is a separate repo). Edit the repo in place.

> ✍️ **EDIT AND PUSH DIRECTLY** (David's rule, GlowPT's too): **make the change, `git commit` and `git push` yourself; never hand him a copy-paste command.** **The one exception:** a permission only David can grant (Claude Code won't let Claude write its own permission rules, even with his go-ahead): give him **one** Run-able block and say plainly what it does.

**The sequence for a change:**
1. **Read this document and the real files.**
2. **Change, then verify by string checks** (old strings at zero, new present, no em dashes, no forbidden words). **A predicted line count is never a verification or a fact for this file**; counts here are measured on the pushed file. **Visual change:** measure the rendered result in the browser **against the reference the eye actually uses**. **Wiring:** prove the failure path locally and let David prove the success path live (an invalid `a@b` proves the site reaches Kit without creating a subscriber).
3. **Push** (Amplify deploys; no AWS login). **Do not tell David it is live until the live site serves it**: fetch the page, find its `assets/index-*.js`, and grep that for the new string (a build can take longer than the usual minute and a half).
4. **Wait for David to confirm on the live site.** Measurement is not confirmation; his eyes are. *(Waived twice for copy-only changes on his direct instruction; keep waiting on anything visual.)*
5. **Then update `CLAUDE.md`** in a separate commit: changed lines **in place** (CURRENT STATE and the affected section), a version bump, one Change History line; **the reasoning goes in the commit message**; anything removed is banked first (the hook enforces it).
6. **Tell David the new version and the file's size and delta.** Nothing is pasted into claude.ai. If he asks for the whole text in chat, give it in one fenced block with four backticks (the file contains triple-backtick blocks); no clipboard, no file card.

**Maintaining this file:** the reasoning that governs future decisions, not the story; **when a rule is REVERSED, say so and delete the old instruction** (banked), since a retired rule beside its replacement is worse than either; a version bump for one string is legitimate (a file quoting a string the code no longer contains is the rot to avoid); **never write the doc before the push and David's confirmation**; **record what lives outside git** (Amplify, Route 53, Kit); read the live code when updating, to catch drift.

### Working across the two repos

Edit the GlowPT repo from here (or this repo from there) only when **David asks explicitly**, after **reading the other repo's `CLAUDE.md`** (GlowPT's house copy rule: statements sentence case with a period; labels Title Case without; no all-caps; AP preposition conventions), and **say plainly which repo each change landed in**, with commit hashes. **Prefer a GlowPT session for anything touching GlowPT's behavior**; copy is the safe case.

- **The session's ROOT sets its powers: AWS-, database-, deploy-, or legal-touching work runs from a session STARTED in the GlowPT project** (its AWS allowlist, memory and `CLAUDE.md`); copy and layout work from either. A session here whose task turns toward AWS says so and stops rather than improvise around missing permissions.
- **ONE exception: Route 53 record work for franklinaisolutions.com runs from this root** (David, 2026-09-25: "it would only confuse things to be bouncing projects"). **`.claude/settings.local.json`** here (gitignored) allows exactly:
  - `Bash(aws route53 change-resource-record-sets --hosted-zone-id Z0616895187ZTAR49DY5P *)`
  - `Bash(aws route53 list-resource-record-sets --hosted-zone-id Z0616895187ZTAR49DY5P *)`
  - `Bash(aws route53 get-change *)`
  - `Bash(aws route53 wait resource-record-sets-changed *)`
  - `Bash(dig *)`

  **Everything else AWS (Amplify settings, Organizations, Identity Center, other accounts, `glowpt-prod`) belongs in a GlowPT-rooted session.** One command at a time, starting with the allowed prefix (`--hosted-zone-id` first), no `&&` chain. **Claude cannot create or widen this file**; that is David's decision and keystrokes.

> **Previewing from a GlowPT session:** `preview_start` reads `.claude/launch.json` from the session's own folder: add a temporary configuration there (`runtimeArgs: ["--prefix", "/Users/mac/Downloads/franklinai-v2", "run", "dev"]`), then restore it with `git checkout` (port 5173 is shared; stop the other server first). **Comparing an older version:** check it out in a `git worktree` (symlink `node_modules`) and serve it from a temporary `launch.json` entry on another port; remove both after. **Dead ends:** `vite build --base=./` over `file://` renders blank (ES modules blocked by CORS); the Browser pane's screenshot does not follow a scroll down this long page (bring the footer up with a temporary negative `document.body.style.marginTop`, reverted at once). **Say which verification you actually did**: build and string checks are not looking at it.

### Working with David

- **He uses Safari, not Chrome;** the built-in browser pane is not logged in to his accounts: **give him Safari links**, except **in Kit, where he wants menu paths from the dashboard, not URLs** (2026-10-16: "stop sending me links"), after **reading Kit's help article** (guessing cost him an hour).
- **One step per message**, saying whether it is invisible or visible; **a screenshot before any Save or Create button** that changes something; one decision per message.
- **Walk him around upsells explicitly** (Kit pushed a card-required trial with annual pre-selected, and an offer to connect Stripe or Gumroad). **Never enter or ask him to type card, bank or password details on Claude's behalf.** He reads work email on his phone and is wary of Outlook on the web.
- **When a theory is wrong, say so and stop guessing.** **Secrets:** redact them in the command itself so they never render on screen.
- **Strategic discussion before code.** **Flag conflicts with established decisions rather than executing silently**; hold a sound position, **but if David reaffirms, it is his call: execute it in full and record it.** **A flagged-and-declined concern is parked in Open Items**, with the problem and the fix. **When David says a thing is settled, it is closed**; a clever measurement does not reopen it. **"Settled" belongs to David, not this document:** when he asks for something it forbids, say what it says and why, then do what he asks.

**claude.ai** holds strategy, positioning, copy decisions, newsletter drafting and the Calendar, and writes the handoff notes. **A good handoff note names the repo in its first line**, states scope and what not to touch, gives exact find/replace strings, says when it supersedes a locked string here, ends with a verification table, **tells Code to update `CLAUDE.md` after the push**, and **carries the editorial reasoning, not just the strings** (Code cannot reconstruct why a decision was made or what was rejected). Handoff notes dropped in the repo or `~/Downloads/` are inputs, not sources: once used, bank them in `docs/history.md` and delete them. **No phantom sources:** this file, the Calendar, `docs/history.md`, and the GlowPT repo's `docs/commercial-handoff.md`. **Dates live in the Calendar.**

---

## Open Items

*Only what is still open; finished items are archived in `docs/history.md`.*

| Item | Status |
|---|---|
| **Guide download name on iPhone Safari — WITH KIT** | Kit delivers the guide (`293598`); **our own S3 link: never again** (David). Safari on an iPhone names the PDF from the URL (Kit's storage key, `5lkoia3rv1pwvcjxzfya8eky39cb`); a Mac and iPhone Chrome keep the right name. Download links last 5 minutes (`X-Amz-Expires=300`; a later share shows `SignatureDoesNotMatch`); tapping the receipt's Download again always works. Reported to Kit (escalated to the product team): **any fix is Kit's; record their answer here.** No workarounds or extra copy in the emails. Leftover: an unpublished "Go to URL" product `293717`. |
| **Fictitious-name registration** | Raised 2026-09-01, not acted on. Both sites lead with "FranklinAI" while the entity is FranklinAI Solutions LLC; PA generally requires a fictitious-name registration. **Nobody involved is a lawyer; nothing changed on this basis.** A cheap question for the open attorney engagement. |
| **PA sales tax on the guide — DAVID** | Decided 2026-10-19: pay it out of the $37 (see Kit). Open until the PA license (myPATH) exists and the accountant has answered tax-included pricing and the filing schedule. No copy or code change. |

---

## Change History

*One line per version, last five here. V58–V91 are in `docs/history.md` section 0ii (the full V91 text); V12–V57 in section 1.*

- **V96** (2026-10-31) — The guide's Kit page gains the insurance-first, cash-practice passage (Calendar's October 30 item); checked against chapter 4 and on the live page.
- **V95** (2026-10-31) — The guides are a five-book series, A, B, C, F, E (Calendar's October 31 pass); the retired first-Tuesday rule corrected to dates set in the Calendar.
- **V94** (2026-10-31) — Footer Instagram glyph 50% bigger by `scale(1.5)`, lockup proven unmoved; footer dial `-17px` → `-19px` at David's word and approved by his eye (`b8d8977`, `2779496`).
- **V93** (2026-10-27) — Issue 2's date moved (CURRENT STATE); weekly Instagram posts between issues; one phrase, "A free monthly newsletter for physical therapy practices", on every Instagram surface; the first carousel and the Reel kit noted (claude.ai handoff, no site change).
- **V92** (2026-10-25) — **Trimmed from 115,100 bytes** (David's go-ahead): full V91 text banked verbatim (`docs/history.md` 0ii); finished Open Items, Change History before V88 and narratives archived; duplicates merged (the inline-styles table into Nav and Footer; Header Sizing and the nav/footer/newsletter type rows into their sections); every value, copy string, ID and rule kept, probed by name; the trim line lowered to ~100 KB (~80 KB was proposed, but the trimmed file is about 85 KB).