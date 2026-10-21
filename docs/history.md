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

0gg. Lines replaced in V90 (newsletter-site badge hidden by Custom CSS).
0ff. Lines replaced in V89 (sign-off becomes David Peterson; both confirmation emails match).
0ee. Lines removed in V88 (unused kite file deleted; mystery-signup watch dropped).
0dd. Lines removed in V87 (old items cut: nav/footer fine-tuning, Microsoft 365 DKIM, modal Escape key).
0cc. Lines replaced in V86 (Issue 1 Reel posted, PA sales tax), plus the 2026-10-21 handoff.
0bb. Lines replaced in V85 (newsletter-site signups wired like the website's).
0aa. Lines replaced in V84 (Issue 1 sent, sender FranklinAI, GlowPT on Stripe).
0z. Lines replaced in V83 (iPhone file name: Safari only, with Kit).
0y. Lines replaced in V82 (Netlify gone, Kit address kept, test subscribers cleared).
0x. Lines replaced in V81 (Issue 1 test-sent and approved).
0w. Lines replaced in V80 (sign-off names the company; download facts corrected).
0v. Lines replaced in V79 (guide delivery reverted to Kit).
0u. Lines replaced in V78 (guide delivery from this root).
0t. Lines replaced in V77 (guide delivery plan).
0s. Lines replaced in V76 (the download name traced).
0r. Lines replaced in V75 (the first real purchase).
0q. Lines replaced in V74, plus the 2026-10-16 Kit emails handoff.
0p. The 2026-10-16 Kit product handoff.
0o. Lines replaced in V73 (Kit on Creator), plus the 2026-10-14 handoff.
0n. Lines replaced in V72 (book status, Issue 1 moved again).
0f. Lines replaced in V64 (the claude.ai cache-buster).
0e. Lines replaced in V63 (Kit payouts connected).
0d. Lines replaced in V62 (playbook), plus the playbook handoff.
0c. Lines replaced in V61 (GlowPT follow-up closed).
0b. Lines replaced in V60 (glowpt private, this repo public).
0. Lines replaced in V59 (the claude.ai pointer).
1. The full text of CLAUDE.md Version 57, exactly as it stood before the V58 trim.
2. `AWS-MIGRATION-HANDOFF.md`, the working note from the 2026-09-25 move to Amplify.
3. `CLAUDE-MD-TRIM-HANDOFF.md`, the note that started the V58 trim.

---

# 0gg. LINES REPLACED IN V90 (2026-10-21): the newsletter site's "Built with Kit" badge hidden by Custom CSS

# FranklinAI — Project Instructions (Version 89, Current)

| **Newsletter site** | `https://franklinai.kit.com` (Kit's subdomain), where sent issues are published. Profile set 2026-10-20: name **FranklinAI**, byline **The Operator**, description = the site's one-sentence newsletter description, photo = the kite on navy (`FranklinAI-kite-profile.png`, 800×800, rendered from the inline `KiteLogo`; kept in David's Downloads, not this repo). **Its "Built with Kit" badge would not switch off** (clicking it in the editor did nothing); parked, a question for Kit support if it ever matters. Edited in **Audience growth → Newsletter site**, then **Publish**. **⚠️ Its Subscribe boxes (profile page and every post) are a SEPARATE form, "Newsletter site", with its own settings under the editor's Sign Up Form:** confirmation email set 2026-10-20 to match ours (subject *Confirm your subscription to The Operator*, same top line and *Confirm Your Subscription* button, closing identical to the site form's: *Glad you're here.* / *Warmest wishes,* / *David Peterson* / *FranklinAI Solutions LLC*, since 2026-10-21), redirect **`https://franklinaisolutions.com/confirmed`**. Its on-page success line ("Success! You've been added to the list…") does not mention confirming and has no documented setting; a question for Kit support with the badge. **Tested end to end 2026-10-20** (`+kitsite2`: our email, our page, the welcome). |

---

# 0ff. LINES REPLACED IN V89 (2026-10-21): every Kit email signs "David Peterson"; the two confirmation emails end the same way

# FranklinAI — Project Instructions (Version 88, Current)

- **Next (David, 2026-10-21):** **Issue 1 is out on both surfaces:** sent 2026-10-20, and **the Reel posted from @franklinaisolutions at 5:37 PM the same day** (cover, caption, AI label on; the feed's 4:5 crop hides the footer by design). Next issue: **Issue 2, 2026-11-03** (dates in the Calendar). **Send-day routine, every issue:** Kit broadcast → publish to the newsletter site → **Code updates `LATEST_ISSUE_URL` in `App.jsx`** → David posts the Reel. The iPhone file name is **with Kit**; nothing to do here. **Every email comes from "FranklinAI"** and signs off with the company name.

| **Confirmation email** | **Live since 2026-10-16:** subject *Confirm your subscription to The Operator*; top line *Thanks for signing up for The Operator. Tap the button below to confirm, and the next issue will come straight to your inbox.*; button *Confirm Your Subscription*; closing *Glad you're here.* / *Warmest wishes,* / *David* with *FranklinAI Solutions LLC* on the next line (a Shift+Return line break, 2026-10-17). Edited only in Kit (Landing pages & forms → the form → Settings → Confirmation email → Edit Email Contents); the MCP cannot reach it. |

| **Automated emails** | All from **FranklinAI** (the default sender) on the **"Text only"** template (Classic, the default), **its "Built with Kit" badge off** (Broadcasts → Email templates → Text only → Additional; one switch covers every email). **Welcome:** sequence *The Operator: welcome* (`2931894`), one email, sent right away, triggered by **two Rules**: subscribes to form *The Operator site signup* → this sequence, and (since 2026-10-20) subscribes to form *Newsletter site* → this sequence. **Buyer follow-up:** sequence *Guide buyers: follow-up* (`2931893`, email `10441959`), one email with **Operator line A** (buyers join the list directly, confirmed by the test purchase), **delay 2 days** (sends at the sequence's 11 AM Eastern), triggered by the **Visual automation "Guide buyers"** (Product purchased → this sequence; Rules has no purchase trigger). Copy from the 2026-10-16 claude.ai handoff (banked). The sign-off still names David personally (Copy Rules). |

| **Newsletter site** | `https://franklinai.kit.com` (Kit's subdomain), where sent issues are published. Profile set 2026-10-20: name **FranklinAI**, byline **The Operator**, description = the site's one-sentence newsletter description, photo = the kite on navy (`FranklinAI-kite-profile.png`, 800×800, rendered from the inline `KiteLogo`; kept in David's Downloads, not this repo). **Its "Built with Kit" badge would not switch off** (clicking it in the editor did nothing); parked, a question for Kit support if it ever matters. Edited in **Audience growth → Newsletter site**, then **Publish**. **⚠️ Its Subscribe boxes (profile page and every post) are a SEPARATE form, "Newsletter site", with its own settings under the editor's Sign Up Form:** confirmation email set 2026-10-20 to match ours (subject *Confirm your subscription to The Operator*, same top line and *Confirm Your Subscription* button, closing *Glad you're here.* / *David* / *FranklinAI Solutions LLC*, no "Warmest wishes," by David's choice), redirect **`https://franklinaisolutions.com/confirmed`**. Its on-page success line ("Success! You've been added to the list…") does not mention confirming and has no documented setting; a question for Kit support with the badge. **Tested end to end 2026-10-20** (`+kitsite2`: our email, our page, the welcome). |

- **Kit emails and issues sign off "Warmest wishes,", a paragraph gap, then "David" with "FranklinAI Solutions LLC" on the line directly under it** (David, 2026-10-17: the emails must name the company; full legal name, no comma). In the MCP's content_tree that is one paragraph with text `David\nFranklinAI Solutions LLC`, which Kit renders as a `<br/>`. Live on the confirmation, welcome, buyer follow-up and the Issue 1 draft.

---

# 0ee. LINES REMOVED OR REPLACED IN V88 (2026-10-21): unused src/components/KiteLogo.jsx deleted (`9f25bac`); the mystery third signup dropped at David's word

# FranklinAI — Project Instructions (Version 87, Current)

- **Watching:** the mystery third signup (Open Items). **Netlify is gone for this site** (2026-10-17); it now hosts only McKenzie.

> **WRONG-FILE TRAP.** There are **two** `KiteLogo` definitions and they are **not** the same drawing. The **live** one is **inline at the top of `src/App.jsx`** (viewBox `62 10 101 240`, width `size * 101/240`). **`src/components/KiteLogo.jsx` is DEAD CODE** — nothing imports it, and it carries a different mark (viewBox `0 0 220 270`, plus blueprint grid lines). **Edit the inline one.** Deleting the dead file is a reasonable future cleanup.

The **inline** `KiteLogo` is the single source of truth for the mark. `size` sets the height; width is `size × (101 / 240)`.

| **The mystery third signup — WATCH** | 2026-09-25: an iPhone test signup's confirm tap never reached Kit (timeline: Delivered 4:23 PM, Opened 4:23 PM, Clicked 6:21 PM, the click being David later on the Mac). Kit shows "Subscription confirmed!" for any confirm link, including a used one, so the phone tap likely opened a different link; which one was never established. A clean fourth test entirely on the iPhone worked. **No fault found in the site or Kit.** **Watch for real readers piling up as Unconfirmed** in Kit (filter by status); if so, read a few per-subscriber timelines first; Kit can re-send the confirmation. |

| **Dead `src/components/KiteLogo.jsx`** | Nothing imports it; a different mark. Safe to delete in a cleanup. |

---

# 0dd. LINES REMOVED OR REPLACED IN V87 (2026-10-21): David cut three old items (nav/footer fine-tuning, Microsoft 365 DKIM, modal Escape key)

# FranklinAI — Project Instructions (Version 86, Current)

- **Coming:** David will fine-tune the nav/footer nudges, kite sizes and F-vs-crossbar margins. The current values and their history are under **Locked Geometry**.

## Locked Geometry — the hand-tuned values (David will fine-tune these)

> **"Closed" governs geometry, not every character.** A closed section can take a copy change (V54 removed the comma from "Solutions LLC") **if you prove it moves nothing, and say how you proved it.** **David's upcoming fine-tuning is his call and reopens only the values he names.**

> **Accessibility gap:** no Escape key, no focus trap. glowpt.app solved this with one shared **`useModal`** hook (scroll lock, Escape, focus trap, focus restore, `role="dialog"`, `aria-modal`). **If a fifth modal arrives, port the hook rather than writing a fifth copy.**

**Only the hand-tuned values live here; `App.jsx` holds everything else, and the full old table is in `docs/history.md`.** These are the values David will fine-tune; see **Locked Geometry** for why each is what it is.

| **Mail authentication, the remainder** | Still absent: **Microsoft 365 DKIM**. Adding it, and later tightening DMARC past `p=none`, are each their own change in Route 53 with a mail test both ways. |

| **Modal accessibility** | No Escape key or focus trap. Port glowpt.app's `useModal` if a fifth modal arrives, or sooner. |

---

# 0cc. LINES REPLACED IN V86 (2026-10-21): Issue 1 Reel posted, send-day routine, PA sales tax on the guide

# FranklinAI — Project Instructions (Version 85, Current)

- **Next (David, 2026-10-20):** **Issue 1 is SENT** (2026-10-20); David posts the Reel. **With every new issue: update `LATEST_ISSUE_URL` in `App.jsx`** (the `/confirmed` page's "Read the Latest Issue" button). The iPhone file name is **with Kit**; nothing to do here. **Every email now comes from "FranklinAI"** and signs off with the company name.

| **Revenue / Kit Commerce** | **Payouts connected 2026-09-26** (Settings → Revenue → Set up payments): a **Stripe Express** account under Kit, login `david@franklinaisolutions.com`. **Business type Company, Single-member LLC, legal name FranklinAI Solutions LLC** with the LLC's EIN; website `https://franklinaisolutions.com`; industry **Digital products → Books**; David as account representative. **Payout bank: the LLC's Bluevine business checking** (it shows in Stripe as **Coastal Community Bank**, Bluevine's partner bank; that is correct). **Statement descriptor `FRANKLINAI`** in both Stripe and Kit's Commerce settings (Stripe's default truncated to "FRANKLINAISOLUTIONS.CO", which reads as a different domain and invites disputes). Payouts **weekly on Fridays**. Details changed later via **Open in Stripe** on that page. **Product live 2026-10-16:** *What Your Practice Actually Sells*, id `293598`, $37 standard one-time, the final PDF delivered as an emailed download link, page `https://franklinai.kit.com/products/what-your-practice-actually-sells` (Kit's subdomain, no DNS); page text is the description David approved 2026-10-16, image the book cover, button *Buy the Guide*, badge off on the page and the thank-you page. **First purchase 2026-10-16** (David's own, `besoulful+buyer1@…`, $37, personal card): the buyer was added as an **active subscriber directly, no double opt-in, no tag**; receipt and download arrived; the card shows **"FranklinAI"** and $37. Kit collects no sales tax (receipt shows 0.00): an accountant question. ⛔ Never record account numbers, SSN, or home address here (public repo). |

## The 2026-10-21 handoff from claude.ai (deleted from ~/Downloads once used)

## Handoff to Claude Code · repo `franklinai-v2` (`~/Downloads/franklinai-v2`) · from claude.ai, 2026-10-21

**Scope: update `CLAUDE.md` only.** No code changes, no Kit writes, no AWS. The site is as V85 describes it. This note records what happened after V85 was written so the file's CURRENT STATE stops saying "David posts the Reel."

**Do not touch:** `App.jsx`, the Calendar (claude.ai maintains it; the October 20 pass is already written there), anything in Kit.

## What happened after V85 (2026-10-20, evening)

1. **The Issue 1 Reel posted** from @franklinaisolutions at **5:37 PM Eastern, 2026-10-20**, with the custom cover (`issue01-reel-cover-full.png`), the final caption with all five tags, and Instagram's **AI label on** (shows as "AI content" under the handle). It is the account's first post. Checked after posting: the home feed's 4:5 crop hides the footer lockup and his lower legs (by design; the title, captions and cover copy sit inside that band); full screen shows everything; the cover is in the grid.
2. **Sales tax on the guide, David's call (2026-10-19):** keep $37 and **pay Pennsylvania's sales tax out of PA sales**, no price change, no tax line in any copy. He will register for a PA sales tax license through myPATH and confirm two things with an accountant: whether PA allows tax-included pricing without a separate line on the receipt, and the filing schedule. Other states only matter past their economic-nexus thresholds (commonly $100,000 a year per state), far off. Nothing for the site, Kit, or the emails to do.
3. **Send-day routine for every issue, from now on** (recorded in the Calendar; one line of it belongs here because it is a code step): send the broadcast in Kit, publish it to Kit's newsletter site, **Code updates `LATEST_ISSUE_URL`** in `App.jsx` to the new post, then David posts the Reel.

## Edits to `CLAUDE.md`, in place

**CURRENT STATE, the "Next" line.** Replace:

> - **Next (David, 2026-10-20):** **Issue 1 is SENT** (2026-10-20); David posts the Reel. **With every new issue: update `LATEST_ISSUE_URL` in `App.jsx`** (the `/confirmed` page's "Read the Latest Issue" button). The iPhone file name is **with Kit**; nothing to do here. **Every email now comes from "FranklinAI"** and signs off with the company name.

with:

> - **Next (David, 2026-10-21):** **Issue 1 is out on both surfaces:** sent 2026-10-20, and **the Reel posted from @franklinaisolutions at 5:37 PM the same day** (cover, caption, AI label on; the feed's 4:5 crop hides the footer by design). Next issue: **Issue 2, 2026-11-03** (dates in the Calendar). **Send-day routine, every issue:** Kit broadcast → publish to the newsletter site → **Code updates `LATEST_ISSUE_URL` in `App.jsx`** → David posts the Reel. The iPhone file name is **with Kit**; nothing to do here. **Every email comes from "FranklinAI"** and signs off with the company name.

**Kit table, the "Revenue / Kit Commerce" row.** Replace the sentence:

> Kit collects no sales tax (receipt shows 0.00): an accountant question.

with:

> Kit collects no US sales tax (receipts show 0.00). **David's call 2026-10-19: keep $37 and pay Pennsylvania's share out of PA sales; no price change, no tax line in any copy.** He registers for a PA sales tax license (myPATH) and confirms tax-included pricing and the filing schedule with an accountant. Other states only past their nexus thresholds. Nothing for this site or Kit to do.

**Open Items.** Add one row (not closed; it is David's, not the repo's):

> | **PA sales tax on the guide — DAVID** | Decided 2026-10-19: pay it out of the $37 (see Kit table). Open until the PA license exists and the accountant has answered tax-included pricing and the filing schedule. No copy or code change. |

**Change History.** Add:

> - **V86** (2026-10-21) — Issue 1 Reel posted 2026-10-20 (AI label on); send-day routine recorded; PA sales tax decision (pay it out of $37) recorded.

Bump the first line to **Version 86**.

## Verification

| Check | Expect |
|---|---|
| `head -1 CLAUDE.md` | `Version 86, Current` |
| `grep -c "David posts the Reel" CLAUDE.md` | 0 |
| `grep -c "5:37 PM" CLAUDE.md` | 1 |
| `grep -c "pay Pennsylvania's share" CLAUDE.md` | 1 |
| `grep -c "PA sales tax on the guide" CLAUDE.md` | 1 |
| `grep -c "V86" CLAUDE.md` | 1 |
| Pre-commit hook | passes (growth under 2 KB; if it trips, bank the replaced lines in `docs/history.md` first) |

Commit, push, report the version and the file's size and delta. Nothing needs pasting into claude.ai.

---

# 0bb. LINES REPLACED IN V85 (2026-10-20): newsletter-site signups get our confirmation, redirect and welcome

# FranklinAI — Project Instructions (Version 84, Current)

| **Newsletter site** | `https://franklinai.kit.com` (Kit's subdomain), where sent issues are published. Profile set 2026-10-20: name **FranklinAI**, byline **The Operator**, description = the site's one-sentence newsletter description, photo = the kite on navy (`FranklinAI-kite-profile.png`, 800×800, rendered from the inline `KiteLogo`; kept in David's Downloads, not this repo). **Its "Built with Kit" badge would not switch off** (clicking it in the editor did nothing); parked, a question for Kit support if it ever matters. Edited in **Audience growth → Newsletter site**, then **Publish**. |

| **Automated emails** | All from **FranklinAI** (the default sender) on the **"Text only"** template (Classic, the default), **its "Built with Kit" badge off** (Broadcasts → Email templates → Text only → Additional; one switch covers every email). **Welcome:** sequence *The Operator: welcome* (`2931894`), one email, sent right away, triggered by a **Rule** (subscribes to form *The Operator site signup* → this sequence). **Buyer follow-up:** sequence *Guide buyers: follow-up* (`2931893`, email `10441959`), one email with **Operator line A** (buyers join the list directly, confirmed by the test purchase), **delay 2 days** (sends at the sequence's 11 AM Eastern), triggered by the **Visual automation "Guide buyers"** (Product purchased → this sequence; Rules has no purchase trigger). Copy from the 2026-10-16 claude.ai handoff (banked). The sign-off still names David personally (Copy Rules). |

| **Subscribers** | **Three as of 2026-10-20:** **Felix** (`felixzheng0813@…`, David's husband, a real reader since 2026-10-17), **Kevin** (`kevin.e.gard@…`, a real PT reader since 2026-10-07) and **Dolly** (`besoulful+dolly@…`), the test reader kept so David sees each issue arrive. **Every other test address is unsubscribed** (buyer1, buyer2, buyer3, steve-tester, testerknox, earlier ones), so **unsubscribe any new test address before an issue goes out.** Unsubscribing a buyer does not touch their purchase or download. Kit's lists lag a minute after an unsubscribe. |

---

# 0aa. LINES REPLACED IN V84 (2026-10-20): Issue 1 sent, sender FranklinAI, latest-issue button, GlowPT billing facts

# FranklinAI — Project Instructions (Version 83, Current)

- **Next (David, 2026-10-17):** (1) **Issue 1:** test-sent and approved; **schedule it on David's word only.** (2) The iPhone file name is **with Kit** (Open Items, "Guide delivery"); nothing to do on our side. (3) After Issue 1: send new subscribers to the latest issue (Open Items). **The guide is on the shelf and proven** (three purchases), delivered by Kit's own download; **every email signs off with the company name.**

- **Issue 1 of The Operator:** built in Kit as a broadcast **draft** (id `26443173`, to all subscribers, "Text only" template; one link, the guide's Kit page; **no discovery-call link**). **Test-sent to Dolly 2026-10-17 and approved by David** (subject, sign-off, guide link through to checkout all checked). **Not sent:** David schedules it, on his word only, and the Reel posts the same morning. **Issue dates live in the Content Calendar.** **Cadence is monthly as of 2026-10-03.**

- **The reconciliation e-book** — one-time, self-serve, **$37**, titled **"What Your Practice Actually Sells."** **The book is written** (about 7,600 words, eleven chapters plus an index; the file is David's and lives in the claude.ai project), **the card and modal are live**, **the checkout is live on Kit Commerce** (since 2026-10-16; the first real purchase is the next step).

| **A BAA is click-through at signup**, version-stamped, under an org-level AWS BAA active since August 2026. | Nothing yet. |

| **No billing in the product. Zero Stripe.** Collection is manual. | **No renewal, cancellation, refund or trial claims of any kind.** |

| **Demo data only** until the clinic BAA text clears attorney review. | **Nothing implying live clinics are in production.** |

- ⛔ **No renewal or cancellation claims.** Counsel has an open question on **state auto-renewal statutes**.

| **The reconciliation e-book** | $37, one-time | **Self-serve.** The first paid yes. | **First** product on Available; More Info opens `EbookModal` | **Live and buyable** on Kit Commerce since 2026-10-16 (first real purchase pending) |

| **Sender** | **David Peterson <david@franklinaisolutions.com>**, confirmed, default. |

| **Kit MCP** | **Connected 2026-10-04** as a claude.ai connector (David's call), so a Code session can read the account directly. **It needs the Creator plan** (lost on Free). **It can also write** (subscribers, broadcasts, products): **read freely, but show David the exact change and get his yes before any write.** `list_forms` is avoided: Kit warns it can publish unsaved form edits. **It cannot** upload a file, edit a product page, edit forms or the confirmation email, create Rules or Visual automations, edit email templates, or send a test or schedule a broadcast: those are David's clicks. **A test send** is the **eye icon** at the right end of the broadcast editor's toolbar (Preview), then send a test; links in a test email open Kit's "Link preview" page, which is normal. |

| **Test subscribers** | **Only two active as of 2026-10-17: `besoulful+dolly@…` (Dolly)**, the test reader, kept so David sees each issue arrive; and **Kevin** (`kevin.e.gard@…`, a real PT reader since 2026-10-07; keep him). **Every other test address is unsubscribed** (buyer1, buyer2, buyer3, steve-tester, testerknox, and earlier ones), so **unsubscribe any new test address before an issue goes out.** Unsubscribing a buyer does not touch their purchase or download. Kit's lists lag a minute after an unsubscribe. |

| **Automated emails** | All from David Peterson on the **"Text only"** template (Classic, the default), **its "Built with Kit" badge off** (Broadcasts → Email templates → Text only → Additional; one switch covers every email). **Welcome:** sequence *The Operator: welcome* (`2931894`), one email, sent right away, triggered by a **Rule** (subscribes to form *The Operator site signup* → this sequence). **Buyer follow-up:** sequence *Guide buyers: follow-up* (`2931893`, email `10441959`), one email with **Operator line A** (buyers join the list directly, confirmed by the test purchase), **delay 2 days** (sends at the sequence's 11 AM Eastern), triggered by the **Visual automation "Guide buyers"** (Product purchased → this sequence; Rules has no purchase trigger). Copy from the 2026-10-16 claude.ai handoff (banked). **Sender stays David Peterson** (David, 2026-10-16). |

Where Kit sends a reader after they confirm (form redirect). **No nav** (David, 2026-10-16): the card leads, with `paddingTop: clamp(56px, 16vh, 160px)` above it, then the footer. The card copies the newsletter card's masthead (**Newsletter** / **The Operator**), then *"Thanks for confirming. You're on the list for The Operator. The next issue will come straight to your inbox."* (the welcome email's own sentences) and a ghost **Visit FranklinAI** button to `/`. `App()` picks it from the path; **`npm run build` copies `dist/index.html` to `dist/confirmed/index.html`** so Amplify serves it with a 200 (its fallback served a 404 status). **Keep both.**

- **No renewal, cancellation, refund or trial claims about GlowPT.**

| **Send new subscribers to the latest issue after they confirm — DAVID WANTS THIS** | A broadcast goes once, to whoever is Confirmed at send time, so a new subscriber waits up to a month. The welcome deliberately links no issue (no monthly upkeep). The redirect now lands on our own `/confirmed` page, the natural place for a "read the latest issue" link once issues exist as Kit web pages. **Do after Issue 1 is sent.** |

| **GlowPT clinic BAA text** | With the attorney. **Demo data only until it clears.** |

| **GlowPT billing** | No Stripe. Collection manual. Belongs in the GlowPT repo. |

| **GlowPT auto-renewal statutes** | Open with counsel. **No renewal or cancellation claims on either site until answered.** |

| **Click-through vs signature** on the clinic BAA | Undecided. If signature wins, self-serve onboarding gains a manual step and this copy must reflect it. |

---

# 0z. LINES REPLACED IN V83 (2026-10-17): the iPhone file name is a Safari quirk, with Kit

# FranklinAI — Project Instructions (Version 82, Current)

- **Next (David, 2026-10-17):** (1) **Issue 1:** test-sent and approved; **schedule it on David's word only.** (2) **Kit support's answer** on the iPhone file name (a human, Ira, took the chat 2026-10-17) (Open Items, "Guide delivery"). **The guide is on the shelf and proven** (three purchases), delivered by Kit's own download; **every email signs off with the company name.**

| **Guide delivery: the iPhone file name — ASKED KIT** | **Kit delivers the guide (product `293598`); the 2026-10-16/17 detour through our own S3 link is over: never again (David).** **Verified 2026-10-17 with three purchases:** checkout, thank-you page, receipt, list join and follow-up all work. The receipt's **Download button is permanent**: each tap asks Kit for a fresh signed file link that **lasts 5 minutes** (`X-Amz-Expires=300`), so a PDF passed on to another app after that, or through the Gmail app's share (Google appends `&shem=…`, breaking the signature), shows Amazon's `SignatureDoesNotMatch` page; tapping Download again always works. **Kit already sends the right name** (`response-content-disposition=inline; filename="What-Your-Practice-Actually-Sells.pdf"`): **on a Mac it saves correctly**. **On an iPhone, both the thank-you page and the receipt save as `5lkoia3rv1pwvcjxzfya8eky39cb`**, Kit's storage key at the end of the URL, because iOS names viewed PDFs from the URL. *(V79 said the thank-you page gave the right name; Buyer3 proved that wrong.)* **The Gmail app** opens links in Google's own browser, which has no Save to Files; Gmail → Settings → Default apps → Safari fixes it (David's phone is set). **David asked Kit support 2026-10-17** whether product files can keep the real name in the URL; record the answer here. No workarounds in the emails, and no extra copy (David). The S3 detour left an **unpublished "Go to URL" product `293717`** at path `what-your-practice-actually-sells-new` (its bucket deleted); "Go to page" is Kit's fixed receipt label for a URL product. |

---

# 0y. LINES REPLACED IN V82 (2026-10-17): Netlify gone, Kit's address kept, test subscribers cleared

# FranklinAI — Project Instructions (Version 81, Current)

- **Next (David, 2026-10-17):** (1) **Issue 1:** test-sent and approved; **schedule it on David's word only.** (2) **Kit support's answer** on the iPhone file name (Open Items, "Guide delivery"). **The guide is on the shelf and proven** (three purchases), delivered by Kit's own download; **every email signs off with the company name.**

- **Watching:** the mystery third signup (Open Items); Netlify still on standby until David deletes the franklinai site and zone.

### Netlify: standby, then gone

Netlify still builds this repo on every push and holds the old zone, but nothing points at either. **After a few quiet days from 2026-09-25, David deletes the franklinai site and the franklinaisolutions.com zone in Netlify.** **Leave McKenzie (`mckenziearmcare.com`) alone**; after that Netlify hosts only McKenzie, on the Free plan from 2026-09-27. Netlify's zone lacks Kit's records, which is fine because nothing reads it.

| **Mailing address (email footer)** | **Kit's shared stand-in: 600 1st Ave, Ste 330 PMB 92768, Seattle, WA 98104-2246.** Allowed for Kit emails only; **mail there is not forwarded.** David's home address declined for privacy. **Replace with a USPS PO box** (or the registered agent's address if it forwards business mail) in **Settings → Email → Mailing address**, prefixed **`FranklinAI Solutions LLC, `**. **Never print Kit's address anywhere outside Kit.** |

| **Test subscribers** | **`besoulful+dolly@…` (Dolly)**, the test reader for Issue 1; **`besoulful+steve-tester@…`**, David's test of 2026-10-16, still active. Earlier test addresses are unsubscribed (cancelled; deleting them is David's click). **Real reader: Kevin** (`kevin.e.gard@…`, a PT friend, since 2026-10-07); keep him. |

| **Kit mailing address → a real one** | Get a USPS PO box (or confirm the registered agent forwards business mail), enter it in Kit **Settings → Email → Mailing address** as `FranklinAI Solutions LLC, <address>`. |

| **Retire Netlify for this site** | After a few quiet days from 2026-09-25, David deletes the **franklinai site** and the **franklinaisolutions.com zone** in Netlify. **Leave McKenzie alone.** |

---

# 0x. LINES REPLACED IN V81 (2026-10-17): Issue 1 test-sent and approved

# FranklinAI — Project Instructions (Version 80, Current)

- **Next (David, 2026-10-17):** (1) **Issue 1:** David test-sends the Kit draft to Dolly, schedules on his word. (2) **Kit support's answer** on the iPhone file name (Open Items, "Guide delivery"). **The guide is on the shelf and proven** (three purchases), delivered by Kit's own download; **every email now signs off with the company name.**

- **Issue 1 of The Operator:** built in Kit as a broadcast **draft** (id `26443173`, to all subscribers, "Text only" template; one link, the guide's Kit page; **no discovery-call link**). **Not sent:** David sends it soon, on his word only, and the Reel posts the same morning. **Issue dates live in the Content Calendar.** **Cadence is monthly as of 2026-10-03.**

| **Kit MCP** | **Connected 2026-10-04** as a claude.ai connector (David's call), so a Code session can read the account directly. **It needs the Creator plan** (lost on Free). **It can also write** (subscribers, broadcasts, products): **read freely, but show David the exact change and get his yes before any write.** `list_forms` is avoided: Kit warns it can publish unsaved form edits. **It cannot** upload a file, edit a product page, edit forms or the confirmation email, create Rules or Visual automations, edit email templates, or send a test or schedule a broadcast: those are David's clicks. |

---

# 0w. LINES REPLACED IN V80 (2026-10-17): FranklinAI in every email; guide download facts corrected

# FranklinAI — Project Instructions (Version 79, Current)

- **Next (David, 2026-10-17):** (1) **Put "FranklinAI" in every email** (Open Items). (2) **Issue 1:** test-send the Kit draft to Dolly, schedule on David's word. **The guide is on the shelf and proven,** delivered by Kit's own download (Open Items, "Guide delivery": tried our own link, reverted).

| **Confirmation email** | **Live since 2026-10-16:** subject *Confirm your subscription to The Operator*; top line *Thanks for signing up for The Operator. Tap the button below to confirm, and the next issue will come straight to your inbox.*; button *Confirm Your Subscription*; closing *Glad you're here.* / *Warmest wishes,* / *David*. Edited only in Kit (Landing pages & forms → the form → Settings → Confirmation email → Edit Email Contents); the MCP cannot reach it. |

- **Kit emails and issues sign off "Warmest wishes," then "David"** (David, 2026-10-16).

| ~~Guide delivery: own link, real file name~~ | **Tried 2026-10-16/17 and REVERTED to Kit; do not retry.** Kit's product (`293598`) delivers the PDF itself. **What actually happens with it:** the thank-you page's Download saves to Files with the right name; the receipt email's Download opens the PDF in a viewer from Kit's storage, which also saves to Files but under a random name (`5lkoia3rv1pwvcjxzfya8eky39cb`). **That random name on the email path is the accepted cost** (David, 2026-10-17: keep it all in Kit, simplest, fewest issues). *(The V76 note that Gmail had "no clean way to save it at all" was wrong: David's Files app shows both copies saved.)* **What was tried:** a "Go to URL" product (`293717`, now **unpublished**, path `what-your-practice-actually-sells-new`) pointing at the PDF in an S3 bucket in `franklinai-web`. The right name came through everywhere, but **the Gmail app's own browser offers only Download / Save to Drive for an outside PDF link, never Save to Files**, whether the file is served as a download or to view; its Download hides the file inside the Gmail app. Kit's link escapes this because it opens in a viewer. **The bucket was deleted 2026-10-17.** Kit's receipt button reads "Go to page" for a URL product and "Download" for a download product; the label is fixed. Test purchases cost only the Stripe and Kit fees (the $37 pays out to the LLC); a receipt can be re-tapped any number of times without a new purchase. |

| **Emails never name FranklinAI — NEXT** | David, 2026-10-16, after a test signup: the confirmation, the welcome and (same template) every email carry no business name; too nondescript. His ideas: **"FranklinAI" stacked under the "David" sign-off**, and/or **an email footer like the site's footer** (kite and wordmark). Not decided or built. A footer belongs on the shared "Text only" template (covers sequences and broadcasts, **not** the confirmation email, which lives on the form). The kite needs a hosted PNG (email clients render SVG poorly). The look and words are David's call; the copy rules bind them. |

---

# 0v. LINES REPLACED IN V79 (2026-10-17): guide delivery tried and reverted to Kit

# FranklinAI — Project Instructions (Version 78, Current)

- **Next (David, 2026-10-16):** (1) **Deliver the guide from our own link** so it downloads as `What-Your-Practice-Actually-Sells.pdf` in one tap (Open Items, "Guide delivery"; plan there). (2) **Put "FranklinAI" in every email** (Open Items). (3) **Issue 1:** test-send the Kit draft to Dolly, schedule on David's word. **The guide is on the shelf and proven:** David's real purchase on 2026-10-16 worked end to end.

| **Guide delivery: own link, real file name — NEXT** | **Problem (2026-10-16):** Kit's receipt **Download** opens the PDF in the browser from Kit's `amazonaws.com` storage, so a phone saves it as `5lkoia3rv1pwvcjxzfya8eky39cb`, and in Gmail's viewer there is no clean way to save it at all; David: "this needs fixing better", not workarounds. **Kit support (AI agent Sam, 2026-10-16) confirmed:** no setting; the receipt's download section is fixed; the documented fix is **fulfillment "Go to URL" with the PDF hosted where we control the file name.** **Plan:** (a) host the PDF in AWS account `franklinai-web` (S3, us-east-1) under an unguessable key with `Content-Disposition: attachment; filename="What-Your-Practice-Actually-Sells.pdf"`, so any phone or browser downloads it in one tap with the right name; **never in this repo** (public). **This work runs from this repo's root** (David, 2026-10-16: "we will do the work here"); David adds whatever local permissions it needs. Always `--profile franklinai-web`. **The PDF is no longer on disk:** David saves the final `What-Your-Practice-Actually-Sells.pdf` to `~/Downloads` first; delete it there once uploaded. (b) Kit cannot switch an existing product to "Go to URL", so **create a new product** with that URL (the MCP can: `create_product`, type `url`). To keep every link unchanged, first move the old product (`293598`) to another path with `update_product`, give the new one `what-your-practice-actually-sells`, then David deactivates the old one in Kit. (c) David redoes the page in Kit's editor (description, cover image, button *Buy the Guide*, badges off on page and thank-you page) and repoints the Visual automation "Guide buyers" to the new product. (d) Test with a real purchase. Note: anyone a buyer forwards the link to can download it, as with Kit's link today; the book's protection is that every buyer lands on the list. |

---

# 0u. LINES REPLACED IN V78 (2026-10-16): guide delivery runs from this root

# FranklinAI — Project Instructions (Version 77, Current)

| **Guide delivery: own link, real file name — NEXT** | **Problem (2026-10-16):** Kit's receipt **Download** opens the PDF in the browser from Kit's `amazonaws.com` storage, so a phone saves it as `5lkoia3rv1pwvcjxzfya8eky39cb`, and in Gmail's viewer there is no clean way to save it at all; David: "this needs fixing better", not workarounds. **Kit support (AI agent Sam, 2026-10-16) confirmed:** no setting; the receipt's download section is fixed; the documented fix is **fulfillment "Go to URL" with the PDF hosted where we control the file name.** **Plan:** (a) host the PDF in AWS account `franklinai-web` (S3, us-east-1) under an unguessable key with `Content-Disposition: attachment; filename="What-Your-Practice-Actually-Sells.pdf"`, so any phone or browser downloads it in one tap with the right name; **never in this repo** (public). AWS writes beyond Route 53 belong in a GlowPT-rooted session by the session-root rule, unless David widens this root's permission file. (b) Kit cannot switch an existing product to "Go to URL", so **create a new product** with that URL (the MCP can: `create_product`, type `url`). To keep every link unchanged, first move the old product (`293598`) to another path with `update_product`, give the new one `what-your-practice-actually-sells`, then David deactivates the old one in Kit. (c) David redoes the page in Kit's editor (description, cover image, button *Buy the Guide*, badges off on page and thank-you page) and repoints the Visual automation "Guide buyers" to the new product. (d) Test with a real purchase. Note: anyone a buyer forwards the link to can download it, as with Kit's link today; the book's protection is that every buyer lands on the list. |

---

# 0t. LINES REPLACED IN V77 (2026-10-16): guide delivery plan

# FranklinAI — Project Instructions (Version 76, Current)

- **Next (David, 2026-10-16):** (1) **Put "FranklinAI" in every email** (Open Items, "Emails never name FranklinAI"). (2) **Issue 1:** test-send the Kit draft to Dolly, schedule on David's word. **The guide is on the shelf and proven:** David's real purchase on 2026-10-16 worked end to end (Open Items, closed). Small open question: the downloaded PDF's file name (Open Items).

| **Downloaded PDF has a long random file name** | Traced 2026-10-16: the receipt email's **Download** button opens the PDF **in the browser** straight from Kit's storage (an `amazonaws.com` link ending in `5lkoia3rv1pwvcjxzfya8eky39cb`), so a buyer who saves it from there (phone: Open in Safari → Share → Save to Files) gets that random name; a direct download carries the real name, `What-Your-Practice-Actually-Sells.pdf`. Every buyer still gets the right book. No account setting controls it. **Next: David asks Kit support:** *"The Download link in my product's receipt email opens the PDF from an amazonaws.com address, so buyers who save it get a random file name instead of the name I uploaded, What-Your-Practice-Actually-Sells.pdf. Can the link deliver the file under its original name?"* |

---

# 0s. LINES REPLACED IN V76 (2026-10-16): the download name traced

# FranklinAI — Project Instructions (Version 75, Current)

| **Downloaded PDF has a long random file name** | David, 2026-10-16: the guide downloads under a string of letters and numbers, not `What-Your-Practice-Actually-Sells.pdf` (Kit lists the uploaded name correctly; the download link serves Kit's storage name). No Kit setting found; Kit's help does not cover it. **Next step: ask Kit support** (chat bubble) whether buyers can receive the original file name. The PDF's own title metadata is correct, so readers that show the title (Books, Preview) display it properly. |

---

# 0r. LINES REPLACED IN V75 (2026-10-16): the first real purchase

# FranklinAI — Project Instructions (Version 74, Current)

- **Next, in this order (David, 2026-10-16):** (1) **David walks through buying the guide for real** (personal card, `besoulful+buyer1@gmail.com`, from the live site); Code then checks in Kit the sale, **how the buyer lands on the list** (direct or double opt-in), the receipt, and the buyer follow-up arriving, picks **The Operator line A or B** in the follow-up, and sets its **real delay, 2 days** (it is 0 hours for the test). Steps in Open Items. (2) **Put "FranklinAI" in every email** (Open Items, "Emails never name FranklinAI"). (3) **Issue 1:** test-send the Kit draft to Dolly, schedule on David's word. **The guide is on the shelf:** Kit product live, the site button wired (`f841663`).

| **Automated emails** | All from David Peterson on the **"Text only"** template (Classic, the default), **its "Built with Kit" badge off** (Broadcasts → Email templates → Text only → Additional; one switch covers every email). **Welcome:** sequence *The Operator: welcome* (`2931894`), one email, sent right away, triggered by a **Rule** (subscribes to form *The Operator site signup* → this sequence). **Buyer follow-up:** sequence *Guide buyers: follow-up* (`2931893`, email `10441959`), one email with Operator line A, **delay 0 hours for the test, to become 2 days**, triggered by the **Visual automation "Guide buyers"** (Product purchased → this sequence; Rules has no purchase trigger). Copy from the 2026-10-16 claude.ai handoff (banked). **Sender stays David Peterson** (David, 2026-10-16). |

| **Revenue / Kit Commerce** | **Payouts connected 2026-09-26** (Settings → Revenue → Set up payments): a **Stripe Express** account under Kit, login `david@franklinaisolutions.com`. **Business type Company, Single-member LLC, legal name FranklinAI Solutions LLC** with the LLC's EIN; website `https://franklinaisolutions.com`; industry **Digital products → Books**; David as account representative. **Payout bank: the LLC's Bluevine business checking** (it shows in Stripe as **Coastal Community Bank**, Bluevine's partner bank; that is correct). **Statement descriptor `FRANKLINAI`** in both Stripe and Kit's Commerce settings (Stripe's default truncated to "FRANKLINAISOLUTIONS.CO", which reads as a different domain and invites disputes). Payouts **weekly on Fridays**. Details changed later via **Open in Stripe** on that page. **Product live 2026-10-16:** *What Your Practice Actually Sells*, id `293598`, $37 standard one-time, the final PDF delivered as an emailed download link, page `https://franklinai.kit.com/products/what-your-practice-actually-sells` (Kit's subdomain, no DNS); page text is the description David approved 2026-10-16, image the book cover, button *Buy the Guide*, badge off on the page and the thank-you page. Kit collects no sales tax (receipt shows 0.00): an accountant question. ⛔ Never record account numbers, SSN, or home address here (public repo). |

| **E-book: the first real purchase — NEXT** | Product live and button wired 2026-10-16. **To do:** David buys it for real from the live site (personal card, `besoulful+buyer1@gmail.com`); Code checks in Kit the sale, **how the buyer joins the list** (direct or double opt-in), the receipt and download, the descriptor `FRANKLINAI`, and the follow-up arriving. Then the follow-up's **Operator line**: **A** if buyers become subscribers (*You'll also get The Operator, the monthly newsletter this guide comes from. If it's not for you, the unsubscribe link at the bottom of any issue takes you off.*, live now) or **B** if not (*This guide comes from The Operator, a free monthly newsletter for physical therapy practices. If you'd like it, you can subscribe at franklinaisolutions.com.*, linking the domain); anything in between, stop and tell David. Then the **2-day** delay. Record the result in the Kit table. |

| **Issue 1 paragraph 3 near-quotes the book** | Issue 1: "The tactics that push packages and premium add-ons were built for a cash-pay model"; the book: "The tactics that push packages were written for a cash-pay model". Flagged to David 2026-10-16, not yet answered. By the book-wins rule, match it before sending unless David keeps it. (The old pop-up "build… built… built" item closed: that paragraph left the site 2026-10-16.) |

- **V74** (2026-10-16) — **The guide is on the shelf:** Kit product `293598` at $37, site button live, pop-up matches the book. Kit welcome, buyer follow-up, live confirmation email, badges off, `/confirmed` page; Issue 1 drafted. **One ask per issue** (reverses every-issue-closes-on-the-call). Next: the real purchase, then FranklinAI in the emails.

---

# 0q. LINES REPLACED IN V74 (2026-10-16): the guide on the shelf, Kit emails, one ask per issue

# FranklinAI — Project Instructions (Version 73, Current)

- **Next:** the **e-book checkout on Kit Commerce** (decided, not built; "Buy the Guide · $37" is still `href="#"`). **Step 1 (payouts) DONE 2026-09-26.** **The book text is final**; the PDF is typeset in claude.ai from the guide file (**not Canva**) and is in David's last layout pass. Step 2, create the product, follows the final PDF (date in the Calendar). **No placeholder product**: a live product with a stand-in file could sell a real copy. Steps in Open Items.

- **Issue 1 of The Operator:** not sent yet; moved again by David on 2026-10-14 so the guide is on the shelf first. **Issue dates live in the Content Calendar; read them there.** **Cadence is monthly as of 2026-10-03** (was every other Tuesday).

- **Measured at V70:** `App.jsx` is **758 lines**; the `$350` decoy sits at **lines 123 and 533**.

**The Content Calendar** (a claude.ai document) is the source of truth for all content and marketing. This file intentionally holds **no** content/marketing specifics beyond what the site displays. The calendar is **newsletter-led**: *The Operator*, **monthly** (the first Tuesday internally; the public copy says only "monthly"), 400–600 words, free, written Sunday on a phone. **Instagram is the only discovery surface.** **The discovery call is the only door** for the custom build (GlowPT has a second door; see Offer Ladder). The addressee is the **owner**; the office manager is the multiplier. The spearhead is **model confusion** ("You're running an insurance practice with cash-model marketing"), across **six spines**: (A) model confusion, (B) plan-of-care completion, (C) team, hiring, retention, and modeling, (D) your numbers, (E) AI in your practice, (F) systems and delegation. The four-video YouTube arc is **parked whole**.

- **The reconciliation e-book** — one-time, self-serve, **$37**, titled **"What Your Practice Actually Sells."** **The book is written** (about 7,600 words, eleven chapters plus an index; the file is David's and lives in the claude.ai project), **the card and modal are live**, **the checkout is not wired**. **Kit Commerce is the decided checkout.**

  > **Say this precisely:** the book exists and the listing is live; **the product is not buyable yet.** ⛔ **The e-book card is NEVER taken down, whether or not the checkout is live** (David, 2026-09-27). **Do not suggest it.** Still **no coming-soon strip and no pre-sell.**

| **The reconciliation e-book** | $37, one-time | **Self-serve.** The first paid yes. | **First** product on Available; More Info opens `EbookModal` | **Written; card and modal live; checkout NOT wired** (Kit Commerce, next) |

**Why the extra doors do not break the one door:** the newsletter closes on the discovery call, every issue — one ask. The $37 file sells from the shelf and Instagram, **never from the newsletter's close.** GlowPT's self-serve door lives inside a modal, never in the newsletter. **The "one door" rule governs the newsletter's close, not the site.**

- **Price appears in three places that move together:** `App.jsx` (**once**, inside the `EbookModal` button label "Buy the Guide · $37"), this file, and the Kit product. **$37 in all three.**

| **Form** | **"The Operator site signup"**, **ID `9962049`**, inline, template "Clare", **published**. Its Kit styling and "success message" setting are unused: the site posts to its endpoint from its own form. |

| **Double opt-in** | **ON.** Form Settings → Confirmation email: *Send confirmation email* ticked, *Auto-confirm* unticked. After confirming, readers land on Kit's default `https://app.kit.com/confirm-subscription` page (kept on purpose). |

| **Confirmation email** | **Kit's default copy**, subject "Important: confirm your subscription". A draft in David's voice is parked (Open Items). The copy rules bind it. |

| **Revenue / Kit Commerce** | **Payouts connected 2026-09-26** (Settings → Revenue → Set up payments): a **Stripe Express** account under Kit, login `david@franklinaisolutions.com`. **Business type Company, Single-member LLC, legal name FranklinAI Solutions LLC** with the LLC's EIN; website `https://franklinaisolutions.com`; industry **Digital products → Books**; David as account representative. **Payout bank: the LLC's Bluevine business checking** (it shows in Stripe as **Coastal Community Bank**, Bluevine's partner bank; that is correct). **Statement descriptor `FRANKLINAI`** in both Stripe and Kit's Commerce settings (Stripe's default truncated to "FRANKLINAISOLUTIONS.CO", which reads as a different domain and invites disputes). Payouts **weekly on Fridays**. Details changed later via **Open in Stripe** on that page. **No product created yet.** ⛔ Never record account numbers, SSN, or home address here (public repo). |

| **Kit MCP** | **Connected 2026-10-04** as a claude.ai connector (David's call), so a Code session can read the account directly. **It needs the Creator plan** (lost on Free). **It can also write** (subscribers, broadcasts, products): **read freely, but show David the exact change and get his yes before any write.** `list_forms` is avoided: Kit warns it can publish unsaved form edits. |

| **Test subscribers** | **`besoulful+dolly@…` (Dolly)**, added 2026-10-01, Confirmed 2026-10-03, the test reader for Issue 1. **`besoulful+confirm1@…`**, Confirmed 2026-10-14 (the post-lapse test). **`besoulful+newsytest@…`**, 2026-10-14, never confirmed (signed up during the lapse; its email never went out). Ken and Julie deleted. Real reader: one, since 2026-10-07. |

  > **Paragraphs 1 and 2 match the book's chapter 1** ("the end of their **care**", "set out to **build**", `d89f4f0`), **and the book wins.** **Never reintroduce the two retired framings** (the accident framing and the departmental split). "build… built… built" in paragraph 2 is parked (Open Items).

  1. *"Your whole team is being asked to sell advanced care and get patients to the end of their care at the same time. That's not a marketing problem. You're running two business models in one building, an insurance practice and a cash practice, and they're pulling against each other."*

  2. *"You didn't set out to build two businesses, but you chose every piece that built the second one. The tactics arrived built for a business you don't own, and none of them came with a label. So the team gets mixed signals about what the practice is driving at, and every patient feels the seams."*

- **Footer** (borderTop hairline, paddingTop 24px, centered): one **ghost** button **"Buy the Guide · $37"** (`padding: '12px 26px', fontSize: '15px', marginTop: '0'`; the price lives in the label, joined by a middot; **no standalone price line**), then **"A downloadable PDF."** (Inter 14px, #8892a4, lineHeight 1.5, marginTop 12px), then the shared Close. **`href="#"` until the Kit Commerce product exists**; then the live URL with `target="_blank" rel="noopener noreferrer"`, styles unchanged.

| **E-book checkout on Kit Commerce — NEXT** | **Decided, not built.** (1) ✅ **Payouts connected 2026-09-26** (see Kit table). (2) David creates the product: *What Your Practice Actually Sells*, **$37**, the final PDF uploaded (it carries a copyright page, **© 2026 FranklinAI Solutions LLC**, imprint the same, **no author name**), a description that **calls it a guide**, may name physical therapy, and obeys the copy rules. (3) Code sets "Buy the Guide · $37" to the live URL with `target="_blank" rel="noopener noreferrer"`, styles unchanged, and pushes. (4) David buys it or runs Kit's test purchase and checks the buyer lands on the list. **Verify:** `grep -c 'href="#"' src/App.jsx` → **0**; "$37" in the button label matches the Kit product; the `$350` decoy untouched; no em dashes in new strings. **No fallback that touches the card:** it stays up regardless; no coming-soon strip, no pre-sell. Any domain record Kit Commerce asks for goes in **Route 53**, by the DNS rule. |

| **Send new subscribers to the latest issue after they confirm — DAVID WANTS THIS** | A broadcast goes once, to whoever is Confirmed at send time, so a new subscriber waits up to a month. Plan: publish each issue as a web page in Kit, then point the form's after-confirm redirect at the latest one (form Settings → Confirmation email) instead of Kit's default page. **Do after Issue 1 is sent.** The redirect must be updated each issue; record the setting in the Kit table. |

| **Remove "Built with Kit" — DAVID WANTS THIS** | Creator allows it. The logo shows in the confirmation email and on Kit's confirm page. Find the setting in Kit with David (not yet located). |

| **Email series and automations — DAVID WANTS THIS** | Possible on Creator since 2026-10-14. Candidates: a welcome email or series for new subscribers (may replace the after-confirm redirect plan above), and a follow-up to guide buyers. **The copy is a claude.ai decision; the copy rules bind it**; build in Kit via the MCP only with David's yes on the exact write. |

| **Kit confirmation email wording** | Parked draft in David's voice: subject *Confirm your subscription to The Operator*; top line *Thanks for signing up for The Operator. Tap the button below to confirm, and the next issue will come straight to your inbox.*; button *Confirm Your Subscription*; closing *Glad you're here.* / *David*. A claude.ai copy decision; edited in Kit (form Settings → Confirmation email → Edit Email Contents). |

| **`EbookModal` paragraph 2: "build… built… built"** | Three forms of "build" in ~20 words. **Parked, book-first:** if it grates, change the book, then every surface together. |

- **V73** (2026-10-14) — **Kit on Creator monthly** (the lapsed trial had stopped confirmations; tested working again). New wants: remove Kit branding, email series and automations.

## The claude.ai handoff "Kit emails and Issue 1" of 2026-10-16 (used for V74; gone from ~/Downloads when banked, so this is the text as read into the session)

# Handoff to Code · repo `franklinai-v2` · Kit emails and Issue 1

Friday October 16, 2026, about 8:00 AM. Written in claude.ai after David approved every string below. Read CLAUDE.md first as usual (V73 at the time of writing).

**Scope:** Kit only (two automated emails and the Issue 1 broadcast draft), plus the CLAUDE.md update to V74 at the end. **Do not touch:** `App.jsx`, the site's newsletter card, the GlowPT section, Route 53, the Kit product page (its paragraph 3 stays as is; David's call, Oct 16).

**Every string below is FINAL** unless a heading says otherwise. All were checked: no em dashes, no "software", "upsell", "treatment room", "in plain English" or "playbook", no floating "free" near a price, `FranklinAI Solutions LLC` not used. Check them again in Kit after pasting, since Kit's editor can turn straight quotes and apostrophes into curly ones (fine) or add its own footer text (check it).

---

## Order of work (this matters now)

1. Build the **buyer follow-up** (one-email series, no Kit badge). David sets the trigger "when someone buys the guide" in Kit's Automations screen.
2. **Test purchase** (delay set to a few minutes; David buys with `besoulful+buyer1@gmail.com`). Check the sale, how the buyer landed on the list, the receipt, and the follow-up arriving. Pick **The Operator line, version A or B** (below) from what the test shows, then set the real delay.
3. Make the **confirmation email** live (section 4), then build the **welcome email** and test both with one test signup.
4. Build **Issue 1** as a broadcast **draft**, test-send to Dolly, and show David.
5. Update CLAUDE.md to V74.

**Why the test purchase must come before Issue 1 sends:** Issue 1 now closes on the guide (decision below), so its readers are the first real buyers. The buyer follow-up has to be live and proven before any of them click.

**Send date: David will send Issue 1 soon, well before October 20.** Schedule it only on his word, with the date and time he gives. The Issue 1 Reel posts on Instagram the same morning, so tell him when the send is scheduled.

---

## 1. Buyer follow-up email · FINAL

- **From:** David Peterson <david@franklinaisolutions.com>
- **Trigger:** someone buys the guide (David sets it in Automations)
- **Delay:** **2 days** after purchase (a few minutes for the test only)
- **Subject:** `Thanks for buying the guide`
- **Preview text:** `A note about What Your Practice Actually Sells.`
- **Links:** none in version A. Version B links the text `franklinaisolutions.com` to `https://franklinaisolutions.com`.

**Body:**

```
Thanks for buying What Your Practice Actually Sells.

The guide opens with a small ask: before you turn to chapter 2, write down in one line what you think your practice sells. Don't overthink it. Most owners write a short description of the care they give, and that's fine. In chapter 4 you'll put it next to a rule and see the difference.

If you've written yours, reply and send it to me. I read every reply, and I'd like to see what you came up with.

If you ever lose the download link, it's in your receipt. If that's gone too, reply and I'll send it again.

[THE OPERATOR LINE: version A or B, its own paragraph]

Warmest wishes,
David
```

**The Operator line, picked after the test purchase:**

- **Version A, if buyers land on the list as subscribers** (they will receive The Operator):
  `You'll also get The Operator, the monthly newsletter this guide comes from. If it's not for you, the unsubscribe link at the bottom of any issue takes you off.`
- **Version B, if buyers do NOT land on the list as subscribers** (double opt-in, or added some other way that does not receive broadcasts):
  `This guide comes from The Operator, a free monthly newsletter for physical therapy practices. If you'd like it, you can subscribe at franklinaisolutions.com.`

If the test shows something in between (for example, buyers land on the list but Unconfirmed), stop and tell David what you saw before picking.

**Reasoning (so you don't "improve" it):** the email asks for a reply, not the discovery call. A booking link two days after a $37 purchase reads as bait-and-switch, and the guide already offers the call once, in its P.S. The reply is the middle rung of the readiness ladder and tells David what buyers do with the guide. The subject and preview state plainly what the email is; David rejected a question as the subject and a question-like preview because they make a new buyer feel they owe an answer. The example quote "we help people move better" was removed on David's instruction.

---

## 2. Welcome email for new subscribers · FINAL

- **From:** David Peterson <david@franklinaisolutions.com>
- **Trigger:** subscriber confirms through form `9962049`
- **Delay:** right away
- **Subject:** `Welcome to The Operator`
- **Preview text:** `A monthly newsletter for physical therapy practices.`
- **Links:** none

**Body:**

```
Thanks for confirming. You're on the list for The Operator.

Here's what you signed up for. Once a month, one short issue about what's going on in physical therapy practices and what to do about it. Each one takes about three minutes to read, and each one gives you one thing to look at that week. The next issue will come straight to your inbox.

If there's something in your practice you wish someone would write about, reply and tell me. I read every reply, and they help decide what I write next.

Warmest wishes,
David
```

**Reasoning:** it stands on its own and needs no monthly upkeep, so it does **not** link to the latest issue. The open item "send new subscribers to the latest issue" stays open (revisit once issues exist as Kit web pages). No guide, no call: a welcome should not read as a sales email. The preview starts with the site's own newsletter description words. David cut a credentials sentence ("I've spent decades building systems...") and a "one favor" framing; do not restore either.

---

## 3. Issue 1 of The Operator · FINAL text, broadcast as a DRAFT

- **Subject:** `You're Running an Insurance Practice With Cash-Model Marketing.`
- **Preview text:** `Two business models, one building, and one question to ask this week.`
- **Send:** David gives the date and time; draft only until then.
- **The only link:** the text `What Your Practice Actually Sells` in the last paragraph goes to `https://franklinai.kit.com/products/what-your-practice-actually-sells`. **There is no discovery-call link in this issue** (decision below).

**Masthead (top of the email):** `The Operator`, then the promise line in italics:
`A monthly newsletter for physical therapy practices that takes a look at what's going on in your practice and what to do about it.`

**Body:**

```
If your whole team is being asked to sell advanced care and get patients to the end of their care at the same time, you don't have a marketing problem. You have two business models in one building.

Look at what your marketing says, then look at where your money comes from. The marketing pushes the premium programs, the packages, the specialty work, the thing that looks good on a flyer. The money arrives when a patient finishes a plan of care, visit after visit, over weeks. Those are two different businesses. One sells the sizzle up front and gets paid at the sale. The other earns its living on completion and gets paid at the end. And you're running both under one roof.

You did not set out to build two businesses, but you chose every piece that built the second one. That's the part worth sitting with. The tactics that push packages and premium add-ons were built for a cash-pay model, where the sale is the revenue. But they don't arrive with a label telling you which business they were written for. They come from everywhere, a talk you went to, a course you bought, a service you signed up for, the clinic down the street that looks like it's winning. It's all just "marketing," and marketing is marketing, so you put it to work. One tactic at a time, none of them wrong on its own, each one a call you made. Every one of them pulls attention toward the sale, which means nothing is pulling attention toward the finish. Your team feels that before you do. They're being pulled in two directions at once.

Here's where it stops being abstract. In an insurance practice, most of a plan of care is collected in the back half. But roughly 70 percent of patients drift off before they finish, and at about $100 a visit, every session that never happens is money left on the table. Not the whole case, the unfinished part of it, and that's hundreds of dollars per patient who stops early. So the marketing pulling attention toward the premium sell is pulling it away from the one thing that actually pays the bills: getting people to the end.

You don't have to fix any of this yet. This week, just look. Pull your last five pieces of marketing, an email, a flyer, a post, whatever went out, and read each one with a single question: which business is this selling? The package up front, or the completed plan of care? You'll know within a line or two. Don't change anything. Just notice how many are selling a business you're not actually running.

If that adds up to more than you'd like, there's a short guide that walks you through the fix: What Your Practice Actually Sells.

Warmest wishes,
David
```

**What changed from the October 13 finished text, all approved by David on October 16:**

| Where | Old | New | Why |
|---|---|---|---|
| Paragraph 2 | "Look at what your marketing actually says. It pushes the premium stuff, the specialty programs, the packages, the thing that looks impressive on a flyer. Now look at where the money actually comes in. It comes in when a patient finishes their plan of care, visit after visit, over weeks. Those are two different businesses. One sells the sizzle up front. The other earns its living on completion. And you're running both under one roof." | The book's chapter 1 sentences (see body) + "And you're running both under one roof." | The book wins on shared sentences; the site pop-up now carries the book's version, so a reader would meet two versions. |
| Paragraph 3, opening | "You didn't set out to build two businesses, but you chose every piece that built the second one, and that's the part worth sitting with." | "You did not set out to build two businesses, but you chose every piece that built the second one. That's the part worth sitting with." | Book's sentence word for word. |
| Paragraph 3, last line | "Nobody has told them what the practice is driving at, so they stop driving at it." | "They're being pulled in two directions at once." | David's edit. |
| Close | "If that adds up to more than you'd like, that's worth a conversation. Book a free discovery call." | "If that adds up to more than you'd like, there's a short guide that walks you through the fix: What Your Practice Actually Sells." | New close rule (below). |
| Sign-off | "David" | "Warmest wishes," / "David" | David, Oct 16: matches the two Kit emails. |
| Preview text | none | as above | New for Kit. |

**Left alone on purpose:** the cost sentence. The book splits it into two sentences, but every clause matches word for word, and the finished Reel speaks the issue's version. The price is not in the close because the product page shows it. The close says "there's a short guide," not "I wrote," because the book carries no author name.

---

## The decision that changes a CLAUDE.md rule

**One ask per issue, matched to the issue (David, October 16).** This **reverses** the August 30 rule that every issue closes on the discovery call and that the $37 guide "never" sells from the newsletter's close. Now that the guide is buyable:

- Issues the guide answers (the model-confusion issues: 1, 2, 4) **close on the guide.**
- Issues it does not answer (AI, systems, and similar) **close on the discovery call.**
- **Still one ask per issue**, never both. **GlowPT is still never pitched inside an issue.**
- The call stays reachable on the site, and the guide's own P.S. offers it, so the path is newsletter, guide, call.

**Why:** most Issue 1 readers are new and cold, from Instagram. $37 is one rung up; a call with a stranger is two. Issue 1 is the diagnosis and the guide is its fix.

**In CLAUDE.md, the lines to change** (bank what you remove, per the hook): the **Offer Ladder** paragraph "Why the extra doors do not break the one door" ("the newsletter closes on the discovery call, every issue — one ask. The $37 file sells from the shelf and Instagram, never from the newsletter's close"), and the **Source-of-Truth Documents** sentence "The discovery call is the only door for the custom build", which can stay but should no longer imply every issue closes on it. The Content Calendar has been updated in claude.ai to match.

---

## 4. Kit confirmation email · FINAL, make it live now

David approved this on October 16; it replaces Kit's default copy ("Important: confirm your subscription"). Edit it in Kit at the form's Settings, then Confirmation email, then Edit Email Contents (form `9962049`; avoid `list_forms`, per CLAUDE.md). Double opt-in stays ON.

- **Subject:** `Confirm your subscription to The Operator`
- **Top line:** `Thanks for signing up for The Operator. Tap the button below to confirm, and the next issue will come straight to your inbox.`
- **Button:** `Confirm Your Subscription`
- **Closing:**

```
Glad you're here.

Warmest wishes,
David
```

**While you are in there:** remove the "Built with Kit" logo from this email and from Kit's confirm page if Creator allows it (Open Items, "DAVID WANTS THIS"). **Test it** with the welcome-email test signup (step 3 in the order of work): the new confirmation should arrive, the button should confirm, and the welcome should follow. Show David the email before it goes live.

---

## Also record in CLAUDE.md (V74), with everything the test purchase proves

- The four facts from the morning handoff (product live at $37, the site button wired `f841663`, the pop-up's first two paragraphs now the book's chapter 1, the test purchase result). The `EbookModal` paragraph text in CLAUDE.md still quotes the **old** paragraphs 1 and 2; replace with the live ones.
- The **Kit table:** the buyer follow-up series and welcome email exist, their triggers and delays, and how buyers land on the list.
- **Open Items:** "Email series and automations" done; "send new subscribers to the latest issue" still open (the welcome does not link to an issue); confirmation email wording done (move the parked draft into the Kit table as live); "Built with Kit" removal, if done.
- **Sign-off:** Kit emails and issues sign "Warmest wishes," / "David" (a copy fact, one line).
- The new close rule above.

## Verification

| Check | Expect |
|---|---|
| Em dashes in each Kit email and the Issue 1 draft | 0 |
| "Book a free discovery call" in the Issue 1 draft | 0 |
| Links in Issue 1 | 1, to the Kit product page |
| Buyer follow-up delay after the test | 2 days |
| Welcome email delay | none (right away) |
| The Operator line in the buyer email | version matching the test purchase |
| Issue 1 status | draft until David gives a send time |
| Dolly received the Issue 1 test | yes, and David has seen it |
| Confirmation email subject in Kit | Confirm your subscription to The Operator |
| Test signup | new confirmation arrives, confirms, then the welcome arrives |


---

# 0p. HANDOFF USED 2026-10-16: the Kit Commerce product (from claude.ai, deleted from ~/Downloads once used)

# Handoff to Claude Code · repo: franklinai-v2 (`~/Downloads/franklinai-v2`)

From the claude.ai FranklinAI project, Friday October 16, 2026, 4:30 AM. Written against CLAUDE.md **Version 73** (read just now). This picks up Open Items, "E-book checkout on Kit Commerce", at step 2.

## What's done

- **The PDF is final (David, October 16):** `What-Your-Practice-Actually-Sells.pdf`, 36 pages, 6 by 9 inches, about 0.1 MB, fonts embedded. David saves it to `~/Downloads` and uploads it to Kit himself.
- **Checked before handoff:** every word matches the guide file in the claude.ai project; zero em dashes; no "playbook"; the cover line reads "A guide from The Operator"; page 2 is the copyright page (© 2026 FranklinAI Solutions LLC, imprint the same, no author name); the PDF's author field is FranklinAI Solutions LLC; the Contents entries are tappable; the one web link is https://franklinaisolutions.com in the P.S.
- **Kit is on Creator monthly** (V73), and confirmations are working again.

## Tonight's steps, in order

**Step 2. David creates the Kit Commerce product.** One step per message; screenshot before any Save, Publish, or charge.

| Field | Value |
|---|---|
| Name | What Your Practice Actually Sells |
| Price | **$37**, one-time (must match the site's "Buy the Guide · $37") |
| File | `What-Your-Practice-Actually-Sells.pdf` (the final file above; **no placeholder file, ever**) |
| Description | The draft below, **once David approves it** |
| Buyer added to the list | On. This is the whole reason the checkout is Kit (CLAUDE.md, The Offer Ladder) |

If you use the Kit MCP here, read freely, but show David the exact write and get his yes first. `list_forms` stays avoided.

**Description draft (for David's yes; he may edit).** Copy rules apply: it calls the book a guide, it may name physical therapy (this page stands alone), and it has no em dashes. The sentences that come from the book and the site modal are word for word, because the book wins on shared sentences.

> **A guide from The Operator, for physical therapy practice owners.**
>
> Run one practice that bills insurance and sells advanced care without the two halves fighting. Say what your practice sells in one sentence your whole team can repeat.
>
> Your whole team is being asked to sell advanced care and get patients to the end of their care at the same time. That's not a marketing problem. You're running two business models in one building, an insurance practice and a cash practice, and they're pulling against each other.
>
> This guide walks you through the fix: decide what your practice actually is, then say it in one sentence your whole team can repeat. Then run everything else behind it: a filter for every tactic, a schedule that protects the back half of a plan of care, five numbers worth reading every week, and a six-week plan to put it in place.
>
> A downloadable PDF, sized to read on your phone.

**Step 3. Code wires the button.** Set "Buy the Guide · $37" in `EbookModal` to the live product URL with `target="_blank" rel="noopener noreferrer"`. Styles and label unchanged. Push, then confirm the live site serves it (fetch the page, find `assets/index-*.js`, grep for the URL) before telling David it is live.

**Step 4. Test purchase.** David buys it or runs Kit's test purchase, then checks:
1. The PDF downloads and opens (on his phone too).
2. The buyer lands on the list. Note whether a buyer goes through double opt-in or is added directly, and record what Kit does in the Kit table.
3. The statement descriptor shows `FRANKLINAI`.

## Verification

| Check | Expect |
|---|---|
| `grep -c 'href="#"' src/App.jsx` | **0** |
| Button label | "Buy the Guide · $37", unchanged, and $37 matches the Kit product |
| The `$350` decoy | Untouched (GlowPT modal and Monthly Care) |
| New strings | No em dashes |
| The book in the repo | **None.** Neither the PDF nor its text is committed (public repo, paid product) |

## Then update CLAUDE.md (V74), after David confirms on the live site

- CURRENT STATE, "Next:": the checkout is live; record the product URL.
- Open Items: close "E-book checkout on Kit Commerce" with the date and the test-purchase result.
- Kit table, Revenue / Kit Commerce row: the product name, $37, and that buyers join the list (with how: opt-in or direct).
- The Offer Ladder and Business: the e-book status becomes "live and buyable".

**Not touched by any of this:** the card and modal copy, Issue 1 (it ships after the guide is on the shelf; the date is in the Calendar), and Route 53, unless Kit Commerce asks for a record.


---

# 0o. LINES REPLACED IN V73 (2026-10-14): Kit on Creator monthly

# FranklinAI — Project Instructions (Version 72, Current)

- **Live:** franklinaisolutions.com on **AWS Amplify** (account `franklinai-web`), DNS in **Route 53**, David's Microsoft 365 mail intact. **The Operator** signup is wired to **Kit form `9962049`**, double opt-in ON, and Kit sends as the domain. Confirmed by David 2026-09-25.

| **Plan** | **Free "Newsletter" plan.** A **14-day Creator trial opened 2026-09-25 with NO card**; it lapses about **2026-10-09**. **Do not build anything on 💎 features** (Automation, Apps, sequences; custom click-tracking domain is Pro). |

| **Kit MCP** | **Connected 2026-10-04** as a claude.ai connector (David's call), so a Code session can read the account directly. **It can also write** (subscribers, broadcasts, products): **read freely, but show David the exact change and get his yes before any write.** `list_forms` is avoided: Kit warns it can publish unsaved form edits. |

| **Test subscribers** | **One: `besoulful+dolly@…` (Dolly)**, added 2026-10-01, Confirmed 2026-10-03; Ken and Julie deleted. She is the test reader for Issue 1. |

| **Kit trial lapse (~2026-10-09)** | Nothing built depends on a paid feature. Once, check **Settings → Account & Billing** shows no card on file ("Creator Monthly" is expected to be the trial's label). |

| **Send new subscribers to the latest issue after they confirm — DAVID WANTS THIS** | A broadcast goes once, to whoever is Confirmed at send time, so a new subscriber waits up to a month. Plan: publish each issue as a web page in Kit, then point the form's after-confirm redirect at the latest one (form Settings → Confirmation email) instead of Kit's default page. **Do after Issue 1 is sent.** Not yet checked that both are on the free plan. The redirect must be updated each issue; record the setting in the Kit table. |

## The claude.ai handoff of 2026-10-14 (used for V72 and V73; the file was gone from ~/Downloads by the time it was banked, so this is the text as read into the session)

# Handoff to Claude Code · repo: franklinai-v2 (`~/Downloads/franklinai-v2`)

From the claude.ai FranklinAI project, Wednesday October 14, 2026, evening. Written against CLAUDE.md **Version 71** (re-read tonight; unchanged since this morning).

## Scope tonight

**Status only. No change to `App.jsx`.** "Buy the Guide · $37" stays `href="#"` until the Kit product exists and has a live URL. This note brings CLAUDE.md up to date on the book and points you at the Content Calendar.

**Read the Content Calendar before editing CLAUDE.md.** David is giving you the current copy alongside this note (`franklinai-content-calendar.md`, the project file as of October 13 to 14). It is read-only for Code: the Calendar is produced and revised in claude.ai. Dates live there, not in CLAUDE.md.

## Where things stand

**The book (What Your Practice Actually Sells)**
- Text is final: eleven chapters plus "Index: The Numbers Behind This Book", about 7,590 words, a copyright page, and a one-sentence P.S. with franklinaisolutions.com. Zero em dashes, no forbidden words, no "playbook". The cover line reads "A guide from The Operator".
- David made two wording changes in his October 13 review (chapter 6 drops "The adjunct is covered."; chapter 4 reads "picked the right model"). Neither touches a sentence the site shares: the `EbookModal` still matches chapter 1 word for word.
- **The PDF is not built in Canva.** It is typeset in claude.ai straight from the guide file, because a Canva import broke the text (words run together, Playfair swapped for a sans). The rule now: any change goes into the guide file first, then the PDF is rebuilt and checked word for word against it.
- **Layout:** 6 by 9 inches (chosen for reading on phones), about 36 pages, Playfair Display headings and Inter text, the site's colors, the live kite on the cover and back page, and gold on the bolt only.
- **Ownership:** © 2026 FranklinAI Solutions LLC, which is also the imprint ("Published by FranklinAI Solutions LLC, Philadelphia, Pennsylvania."). No author name anywhere in the book. Copyright registration is optional and is a question for the attorney engagement, not an open build item.
- **Status:** David is doing a last layout pass in claude.ai. **The final PDF is expected tomorrow, Thursday October 15.**

**What happens after the PDF (unchanged from Open Items, step 2 on)**
1. David creates the Kit Commerce product: $37, called a guide, the final PDF uploaded. The description may name physical therapy and obeys the copy rules. **No placeholder product.** If you use the Kit MCP here, read freely, but show David the exact write and get his yes first (CLAUDE.md, Kit table).
2. Code points "Buy the Guide · $37" at the live product URL with `target="_blank" rel="noopener noreferrer"`, styles unchanged, and pushes.
3. David runs a test purchase and confirms the buyer lands on the list.

## CLAUDE.md edits to make now (in place, then bump to V72)

| Where | Change |
|---|---|
| CURRENT STATE, "Next:" | Replace "Waiting on the final book PDF (David; 'almost ready' on 2026-10-03)" with: the book text is final; the PDF is typeset in claude.ai from the guide file (not Canva) and is in David's last layout pass; the product follows the final PDF. Leave the date to the Calendar. |
| CURRENT STATE, "Issue 1" | The line still says about October 6. **Issue 1 now ships October 20** (David, October 14: the guide goes on the shelf first). Point the line at the Calendar for dates rather than restating them. |
| Business, the e-book bullet | "about 6,300 words" becomes "about 7,600 words, eleven chapters plus an index". |
| Open Items, "Book text says guide" | Close it: the book's cover line is "A guide from The Operator" and the text carries no "playbook" (checked October 13). |
| Open Items, e-book checkout, step 2 | Add: the PDF carries a copyright page, © FranklinAI Solutions LLC, no author name. |
| New durable rule (one line, near the public-repo rule) | **Never commit the book's text or PDF to this repo.** It is a paid product and the repo is public. The guide file lives in the claude.ai project; the PDF is built there. |

Bank anything you remove in `docs/history.md` first (the hook enforces it). Put the reasoning in the commit message, not in CLAUDE.md. Report the file's size and delta when you're done.

## Do not touch

- `EbookModal` copy, the card, the $37 label, the `$350` decoy.
- The e-book card stays up regardless (David, 2026-09-27). No coming-soon strip, no pre-sell.
- No new Route 53 records unless Kit Commerce asks for one, and then by the DNS rule.

## Verification

| Check | Expect |
|---|---|
| First line of CLAUDE.md | Version 72, with a one-line Change History entry |
| `grep -c 'href="#"' src/App.jsx` | Unchanged tonight (the Buy button is still unwired) |
| `grep -c "6,300" CLAUDE.md` | 0 |
| `grep -ci "playbook" CLAUDE.md` | Only in history or retired-rule lines, none as a live instruction |
| No book text or PDF in the repo | `git status` shows CLAUDE.md and `docs/history.md` only |

## Tonight's real job: Kit's lapsed trial

**This is what David wants to work on with you now.** The Creator trial lapsed (about October 9), and since then **new subscribers are not getting the confirmation email until a plan is picked in Kit.** With double opt-in on, that means signups are stuck as Unconfirmed. CLAUDE.md's Kit table assumed the free Newsletter plan simply continued; it did not.

- **David picks the plan in Kit himself** (Settings → Account & Billing). Card and billing details are his to enter. Walk him around upsells explicitly, one step per message, and ask for a screenshot before any button that charges or commits.
- **Then check, in this order:**
  1. **A test signup through the site** reaches Kit and the confirmation email arrives (David's test address); tap it and confirm the subscriber shows Confirmed after a reload.
  2. **Anyone who signed up during the gap** is still Unconfirmed. List them (Kit MCP, read only) and show David; Kit can re-send the confirmation. Re-sending is a write, so it needs his yes.
  3. **Kit Commerce still works on the chosen plan**, since the guide goes up tomorrow. Payouts were connected September 26; confirm nothing about the plan change touched them.
- **Record in CLAUDE.md's Kit table:** the plan David chose, the date, and that the lapse stopped confirmations (the rule it leaves: a lapsed trial is not a silent fall back to free; check confirmations after any plan change). Close the "Kit trial lapse" open item.


---

# 0n. LINES REPLACED IN V72 (2026-10-14): book status, Issue 1 moved again, the book stays out of the repo

# FranklinAI — Project Instructions (Version 71, Current)

- **Next:** the **e-book checkout on Kit Commerce** (decided, not built; "Buy the Guide · $37" is still `href="#"`). **Step 1 (payouts) DONE 2026-09-26.** **Waiting on the final book PDF** (David; "almost ready" on 2026-10-03); then step 2, create the product. **No placeholder product**: a live product with a stand-in file could sell a real copy. Steps in Open Items.

- **Issue 1 of The Operator:** pushed back a week by David on 2026-09-27 (from September 29 to about October 6, 2026); the Content Calendar holds the exact date. **Cadence is monthly as of 2026-10-03** (was every other Tuesday).

- **The reconciliation e-book** — one-time, self-serve, **$37**, titled **"What Your Practice Actually Sells."** **The book is written** (about 6,300 words, eleven chapters; the file is David's), **the card and modal are live**, **the checkout is not wired**. **Kit Commerce is the decided checkout.**

> **There is ONE copy of this document: `CLAUDE.md` on `main` in the repo (since V59).** The claude.ai project instructions are a short pointer telling each claude.ai session to read `https://raw.githubusercontent.com/besoulful-design/franklinai-v2/main/CLAUDE.md` and state the version it read. **Nothing is pasted into claude.ai any more.** ⚠️ **The pointer works only because this repo is PUBLIC, which David chose deliberately on 2026-09-26.** Never commit a secret here. If it is ever made private, claude.ai needs another route (GitHub linked to the project, or pasting again) and this note must change. **How the pointer reads it (rewritten in claude.ai and pasted by David on 2026-10-04):** claude.ai's **fetch tool is NOT used**, because it serves a stale saved copy and ignores cache-busters (the 09-26 "add a cache-buster" instruction kept failing and is retired). The pointer tells claude.ai to run, in its own computer, `curl -sL -H 'Cache-Control: no-cache' "https://raw.githubusercontent.com/besoulful-design/franklinai-v2/main/CLAUDE.md?v=$(date +%s)" -o /home/claude/CLAUDE.md`, read the file, and state the version on its first line. **GitHub's raw copy can still lag a push by up to 5 minutes**: if David names a newer version, claude.ai waits, runs the same command again, and never works from an older version than the one he names.

| **E-book checkout on Kit Commerce — NEXT** | **Decided, not built.** (1) ✅ **Payouts connected 2026-09-26** (see Kit table). (2) David creates the product: *What Your Practice Actually Sells*, **$37**, final file uploaded (**check its cover line says "guide", not "A playbook from The Operator"**), a description that **calls it a guide**, may name physical therapy, and obeys the copy rules. (3) Code sets "Buy the Guide · $37" to the live URL with `target="_blank" rel="noopener noreferrer"`, styles unchanged, and pushes. (4) David buys it or runs Kit's test purchase and checks the buyer lands on the list. **Verify:** `grep -c 'href="#"' src/App.jsx` → **0**; "$37" in the button label matches the Kit product; the `$350` decoy untouched; no em dashes in new strings. **No fallback that touches the card:** it stays up regardless; no coming-soon strip, no pre-sell. Any domain record Kit Commerce asks for goes in **Route 53**, by the DNS rule. |

| **Book text says "guide"** | The site went back to "guide" on 2026-10-04. **David is finishing the book in claude.ai**; anywhere the file calls itself a playbook (the cover line was changed to "A playbook from The Operator" in September) goes back to "guide" before the PDF is final. |

---

# 0m. LINES REPLACED IN V71 (2026-10-04): the claude.ai pointer uses curl, not the fetch tool

# FranklinAI — Project Instructions (Version 70, Current)

> **There is ONE copy of this document: `CLAUDE.md` on `main` in the repo (since V59).** The claude.ai project instructions are a short pointer telling each claude.ai session to fetch `https://raw.githubusercontent.com/besoulful-design/franklinai-v2/main/CLAUDE.md` and state the version it read. **Nothing is pasted into claude.ai any more.** ⚠️ **The pointer works only because this repo is PUBLIC, which David chose deliberately on 2026-09-26.** Never commit a secret here. If it is ever made private, claude.ai needs another route (GitHub linked to the project, or pasting again) and this note must change. **Two caches can make claude.ai read an older version (found 2026-09-26):** GitHub's raw copy lags a push by **up to 5 minutes** (`max-age=300`), and **claude.ai's fetch tool keeps its own copy of any address it has opened before**. So the pointer (updated by David the same day) tells claude.ai to **add a fresh cache-buster every time** (`?v=` plus date and time). If claude.ai reports a version behind the one pushed, it re-fetches with a new cache-buster.

---

# 0l. LINES REPLACED IN V70 (2026-10-04): "playbook" back to "guide"; the e-book modal's new footer

# FranklinAI — Project Instructions (Version 69, Current)

- **Next:** the **e-book checkout on Kit Commerce** (decided, not built; "Buy the Playbook" is still `href="#"`). **Step 1 (payouts) DONE 2026-09-26.** **Waiting on the final book PDF** (David, Tuesday 2026-09-29); then step 2, create the product. **No placeholder product**: a live product with a stand-in file could sell a real copy. Steps in Open Items.

- **Next:** the **e-book checkout on Kit Commerce** (decided, not built; "Buy the Guide · $37" is still `href="#"`). **Step 1 (payouts) DONE 2026-09-26.** **Waiting on the final book PDF** (David, Tuesday 2026-09-29); then step 2, create the product. **No placeholder product**: a live product with a stand-in file could sell a real copy. Steps in Open Items.

- **Measured at V66:** `App.jsx` is **761 lines**; the `$350` decoy sits at **lines 123 and 536**.

> - **Line 536**, `Monthly Care`'s `price: '$350'` in `Pricing()`: **the custom build's hosting-and-maintenance retainer.** Unrelated.

> **If GlowPT's price moves, line 536 must NOT move with it.** **The line numbers drift whenever anything above them changes; treat them as a hint and confirm by the surrounding function name.**

- **Price appears in three places that move together:** `App.jsx` (the `EbookModal` subline and its Playfair price line), this file, and the Kit product. **$37 in all three.**

- **Modal buttons:** `padding: '10px 20px', fontSize: '13px'` — deliberately the smallest.

> **The filled style is exclusive to the discovery call, site-wide.** Every transaction button is a ghost: "Buy the Playbook", "Bring GlowPT to Your Clinic", "Subscribe for Free". **Flipping a transaction button to `btn--primary` requires David's explicit say-so** (considered and declined in V49).

- **Teaser** (`card-text`): **"A downloadable playbook for owners running two business models in one building, an insurance practice and a cash practice, and making them work together."**

- **Subline** (Inter 14px/600/#8899b0, marginBottom 16px): **"A self-serve playbook. $37, yours to download."**

  3. *"This playbook walks you through the fix: decide what your practice actually is, then say it in one sentence your whole team can repeat. Not a tactic, not a tool. The one thing that lets everything else line up behind it."*

- **Footer** (borderTop hairline, paddingTop 24px, centered): **"$37"** (Playfair 700, 27.7px, blue, lineHeight 1.45, marginBottom 18px, no "/ month") then a **ghost** "Buy the Playbook" (`padding: '10px 20px', fontSize: '13px'`, **`href="#"` until the Kit Commerce product exists**; then the live URL with `target="_blank" rel="noopener noreferrer"`, styles unchanged).

- **"Playbook" is the format word for the products on every public surface** (David, 2026-09-26): the site, the Kit Commerce product page, the book's cover line. Never "guide" for the product. **The book's title and the newsletter's name are unchanged.** **One deliberate exception to "the book wins":** the site switched to "playbook" first; the book is edited to match later (Open Items). **Do not "fix" the site back to "guide."**

| **E-book checkout on Kit Commerce — NEXT** | **Decided, not built.** (1) ✅ **Payouts connected 2026-09-26** (see Kit table). (2) David creates the product: *What Your Practice Actually Sells*, **$37**, final file uploaded (its cover line changed by David to "A playbook from The Operator"), a description that **calls it a playbook**, may name physical therapy, and obeys the copy rules. (3) Code sets "Buy the Playbook" to the live URL with `target="_blank" rel="noopener noreferrer"`, styles unchanged, and pushes. (4) David buys it or runs Kit's test purchase and checks the buyer lands on the list. **Verify:** `grep -c 'href="#"' src/App.jsx` → **0**; "$37" matches in both `EbookModal` spots and the Kit product; the `$350` decoy untouched; no em dashes in new strings. **No fallback that touches the card:** it stays up regardless; no coming-soon strip, no pre-sell. Any domain record Kit Commerce asks for goes in **Route 53**, by the DNS rule. |

| **E-book checkout on Kit Commerce — NEXT** | **Decided, not built.** (1) ✅ **Payouts connected 2026-09-26** (see Kit table). (2) David creates the product: *What Your Practice Actually Sells*, **$37**, final file uploaded (**check its cover line says "guide", not "A playbook from The Operator"**), a description that **calls it a guide**, may name physical therapy, and obeys the copy rules. (3) Code sets "Buy the Playbook" to the live URL with `target="_blank" rel="noopener noreferrer"`, styles unchanged, and pushes. (4) David buys it or runs Kit's test purchase and checks the buyer lands on the list. **Verify:** `grep -c 'href="#"' src/App.jsx` → **0**; "$37" matches in both `EbookModal` spots and the Kit product; the `$350` decoy untouched; no em dashes in new strings. **No fallback that touches the card:** it stays up regardless; no coming-soon strip, no pre-sell. Any domain record Kit Commerce asks for goes in **Route 53**, by the DNS rule. |

| **E-book checkout on Kit Commerce — NEXT** | **Decided, not built.** (1) ✅ **Payouts connected 2026-09-26** (see Kit table). (2) David creates the product: *What Your Practice Actually Sells*, **$37**, final file uploaded (**check its cover line says "guide", not "A playbook from The Operator"**), a description that **calls it a guide**, may name physical therapy, and obeys the copy rules. (3) Code sets "Buy the Guide · $37" to the live URL with `target="_blank" rel="noopener noreferrer"`, styles unchanged, and pushes. (4) David buys it or runs Kit's test purchase and checks the buyer lands on the list. **Verify:** `grep -c 'href="#"' src/App.jsx` → **0**; "$37" matches in both `EbookModal` spots and the Kit product; the `$350` decoy untouched; no em dashes in new strings. **No fallback that touches the card:** it stays up regardless; no coming-soon strip, no pre-sell. Any domain record Kit Commerce asks for goes in **Route 53**, by the DNS rule. |

| **Book text → "playbook"** | The site says "playbook" since 2026-09-26 (`fd6b95a`); the book file may still say "guide" where it describes itself (e.g. the sentence the modal's paragraph 3 echoes). **David edits the book to match**; then the book wins again as normal. |

- **The e-book** — **$37**, one-time, in `EbookModal` (subline + price line). Not shown on the card.

---

# 0k. LINES REPLACED IN V69 (2026-10-04): one newsletter description; Kit MCP connected

# FranklinAI — Project Instructions (Version 68, Current)

> - **The promise line reads the same on all three surfaces** (issue top, **the site's newsletter card**, Instagram graphic): **"For physical therapy practices."** *(Taken out of `NewsletterModal` by David on 2026-09-27 to cut copy; the card keeps it.)* **The cadence word ("monthly") also sits in the Instagram bio of @franklinaisolutions** ("a free monthly newsletter for physical therapy practices"), so a cadence change has that place to check too.

- **Description** (Inter 15px, #8892a4, `marginTop: '0'`, `marginBottom: '18px'`, `lineHeight: '1.5'`): **"For physical therapy practices. Delivered monthly, it takes a clear look at what's working and not working in your practice, and what to do about it."**

> **The description appears twice with one difference:** the modal drops the first sentence "For physical therapy practices." (David, 2026-09-27: less copy in the signup modal). **The rest moves together.** `grep -c "For physical therapy practices\."` → **1**; `grep -c "Delivered monthly"` → **2**.

**`NewsletterModal`** (the fourth modal): title **"The Operator"**, subline **"Free to subscribe."** (Inter 14px/600/#8899b0), the description **without "For physical therapy practices."**, then a `borderTop` divider wrapping a **`<form>`**: an email input (cream #f0e6d3 on rgba(255,255,255,0.04), 1px border rgba(96,165,250,0.3), 8px radius, **16px font to prevent iOS zoom**, `WebkitAppearance: 'none'`, flex `1 1 220px`, maxWidth 280px, 44px tall, **`name="email_address"`, `required`**) and the ghost Subscribe button (**`type="submit"`**). Under the form, a note **"Then check your email to confirm."** (Inter 14px, #8892a4, marginTop 12px, centered), **hidden once the success line shows**. Then the shared bottom Close.

| **Kit MCP** | Available under Settings → Kit MCP; **not connected.** Connecting it is David's call. |

| Newsletter description (card **and** modal; the modal omits the first sentence) | Inter | 400 | 15px, #8892a4, lineHeight 1.5 |

- **The newsletter description is duplicated on purpose (card + modal; the modal omits "For physical therapy practices."). Any edit to the rest changes BOTH.** `grep -c "Delivered monthly"` → **2**.

---

# 0j. LINES REPLACED IN V68 (2026-10-03): one test subscriber left

# FranklinAI — Project Instructions (Version 67, Current)

| **Test subscribers** | Two, both Confirmed: `besoulful+kit-ke…` (Ken) and `besoulful+kit-juli…` (Julie), 2026-09-27; the rest deleted. **Before Issue 1, keep one and delete the other.** |

| **Test subscribers** | Two (Ken, Julie). **Before Issue 1: keep one, delete the other.** |

---

# 0i. LINES REPLACED IN V67 (2026-10-03): The Operator goes monthly

# FranklinAI — Project Instructions (Version 66, Current)

**The Content Calendar** (a claude.ai document) is the source of truth for all content and marketing. This file intentionally holds **no** content/marketing specifics beyond what the site displays. The calendar is **newsletter-led**: *The Operator*, every other Tuesday, 400–600 words, free, written Sunday on a phone. **Instagram is the only discovery surface.** **The discovery call is the only door** for the custom build (GlowPT has a second door; see Offer Ladder). The addressee is the **owner**; the office manager is the multiplier. The spearhead is **model confusion** ("You're running an insurance practice with cash-model marketing"), across **six spines**: (A) model confusion, (B) plan-of-care completion, (C) team, hiring, retention, and modeling, (D) your numbers, (E) AI in your practice, (F) systems and delegation. The four-video YouTube arc is **parked whole**.

- **Issue 1 of The Operator:** pushed back a week by David on 2026-09-27 (from September 29 to about October 6, 2026); the Content Calendar holds the exact date.

- **Description** (Inter 15px, #8892a4, `marginTop: '0'`, `marginBottom: '18px'`, `lineHeight: '1.5'`): **"For physical therapy practices. Delivered every other Tuesday, it takes a clear look at what's working and not working in your practice, and what to do about it."**

> **The description appears twice with one difference:** the modal drops the first sentence "For physical therapy practices." (David, 2026-09-27: less copy in the signup modal). **The rest moves together.** `grep -c "For physical therapy practices\."` → **1**; `grep -c "Delivered every other Tuesday"` → **2**.

- **The newsletter description is duplicated on purpose (card + modal; the modal omits "For physical therapy practices."). Any edit to the rest changes BOTH.** `grep -c "Delivered every other Tuesday"` → **2**.

> - **The promise line reads the same on all three surfaces** (issue top, **the site's newsletter card**, Instagram graphic): **"For physical therapy practices."** *(Taken out of `NewsletterModal` by David on 2026-09-27 to cut copy; the card keeps it.)*

3. **Push the code.** The push deploys through Amplify.

## The handoff note, verbatim (handoff-monthly-cadence-2026-10-03.md, deleted from ~/Downloads once used)

# Handoff into Code: repo `franklinai-v2` (~/Downloads/franklinai-v2). The Operator goes monthly.
FranklinAI project · written Saturday, October 3, 2026, in claude.ai · read CLAUDE.md (V66) first, as always

## Scope
One copy change, two strings, in `src/App.jsx`. Then the CLAUDE.md update after David confirms it live.
**Do not touch:** any other copy, any styling or geometry, the first sentence "For physical therapy practices." (card only, stays as is), Kit, Route 53, the GlowPT repo.

## The decision and why (David, October 3)
The Operator moves from **every other Tuesday** to **monthly**. David's reasons: substance over quantity, not wanting to repeat topics to fill an issue, and a pace he can actually keep. Every three weeks was considered and rejected (hard for readers to hold in their head, awkward to say).

- **The public copy says only "monthly."** The day is not named. Internally the issue ships the first Tuesday of the month (the Content Calendar holds that and the dates), which leaves room to slip a week without breaking a public promise.
- **"Delivered monthly" was chosen over "Once a month"** as the smallest change to a line already reading well: one phrase swapped, same structure.
- Issue 1 still ships Tuesday, October 6. The change should be live before then, so the site, Issue 1, and the new Instagram bio all say "monthly" on day one.
- The Instagram Reel is unaffected (its header carries only "For physical therapy practices.").

## The change
Two occurrences in `src/App.jsx` (lines ~303 and ~375 in the V66 file; confirm by component, `NewsletterModal` and `NewsletterStrip`):

| Find | Replace |
|---|---|
| `Delivered every other Tuesday, it takes` | `Delivered monthly, it takes` |

Both occurrences, nothing else. Resulting card text:
> For physical therapy practices. Delivered monthly, it takes a clear look at what's working and not working in your practice, and what to do about it.

The modal reads the same without the first sentence. This is the "copy that appears twice must move twice" pair.

## Verify before pushing
| Check | Expected |
|---|---|
| `grep -c "Delivered every other Tuesday" src/App.jsx` | **0** |
| `grep -c "Delivered monthly, it takes" src/App.jsx` | **2** |
| `grep -c "For physical therapy practices\." src/App.jsx` | **1** (unchanged) |
| Em dashes in the changed lines | none |
| Build | passes |

Then push. **Wait for David to confirm on the live site**, iPhone included: the description is a few characters shorter, so check the card and the modal paragraph still wrap cleanly and nothing jumps.

## After David confirms: update CLAUDE.md (separate commit, edit in place)
- **Source-of-Truth Documents:** "*The Operator*, every other Tuesday, 400–600 words" becomes "*The Operator*, **monthly** (the first Tuesday internally; the public copy says only "monthly"), 400–600 words".
- **Newsletter Card section:** the Description string, and the grep note `grep -c "Delivered every other Tuesday"` → **2** becomes `grep -c "Delivered monthly"` → **2**.
- **Copy Rules:** the same grep in the duplicated-description bullet.
- **CURRENT STATE, the Issue 1 line:** add that the cadence is monthly as of 2026-10-03 (dates stay in the Calendar).
- **The promise-line note:** the surfaces carrying it now include the **Instagram bio** of @franklinaisolutions ("a free monthly newsletter for physical therapy practices"), so a future cadence change has one more place to check. One line, no Instagram detail beyond that; the account record lives in the Calendar.
- Bump to **V67**, one-line Change History entry, reasoning in the commit message, bank anything removed in `docs/history.md` first (the hook enforces it), and report the file's size and delta.

## Not part of this job, but due before Tuesday (from CLAUDE.md Open Items)
Kit still has two test subscribers (Ken and Julie); keep one, delete the other before Issue 1. That is David in Kit, not Code.

---

# 0h. LINES REPLACED IN V66 (2026-09-27): modal bottom Close, signup trim, case-study list

# FranklinAI — Project Instructions (Version 65, Current)

- **Measured at V58 (unchanged at V59):** `App.jsx` is **735 lines**; the `$350` decoy sits at **lines 99 and 510**.

> - **Line 99**, inside `GlowPTModal`'s footer: **GlowPT.**

> - **Line 510**, `Monthly Care`'s `price: '$350'` in `Pricing()`: **the custom build's hosting-and-maintenance retainer.** Unrelated.

> **If GlowPT's price moves, line 510 must NOT move with it.** **The line numbers drift whenever anything above them changes; treat them as a hint and confirm by the surrounding function name.**

> - **The promise line reads the same on all three surfaces** (issue top, site card and modal, Instagram graphic): **"For physical therapy practices."**

> **The description appears TWICE** (card and `NewsletterModal`). **They move together.** `grep -c "For physical therapy practices\."` → **2**.

**`NewsletterModal`** (the fourth modal): title **"The Operator"**, subline **"Free to subscribe."** (Inter 14px/600/#8899b0), the same description, then a `borderTop` divider wrapping a **`<form>`**: an email input (cream #f0e6d3 on rgba(255,255,255,0.04), 1px border rgba(96,165,250,0.3), 8px radius, **16px font to prevent iOS zoom**, `WebkitAppearance: 'none'`, flex `1 1 220px`, maxWidth 280px, 44px tall, **`name="email_address"`, `required`**) and the ghost Subscribe button (**`type="submit"`**).

| Success | Row replaced by **"Almost there. Check your email to confirm."** (`role="status"`); the modal **closes itself after 2.5 seconds**. |

> **Nit:** the generic error string uses a curly apostrophe (`’`); every other string uses a straight one. Make it straight next time this code is touched.

| **Test subscribers** | Five `besoulful+kit-…@gmail.com` addresses, all Confirmed (the fifth, 2026-09-27 10:37 AM, a clean end-to-end run). **Before Issue 1, keep one and delete four.** |

> **Reading Kit's numbers.** The **summary boxes** at the top of Subscribers **lag** by minutes to an hour; **the list below, with its "Total: N", is live.** **"Opened" can be inflated by Gmail fetching images**, so treat open rates as rough. The per-subscriber page shows Delivered / Opened / Clicked with **exact times on hover** — the tool for diagnosing a stuck signup.

| Newsletter description (card **and** modal) | Inter | 400 | 15px, #8892a4, lineHeight 1.5 |

| Modal feature rows | Inter | 400 / 700 check | 15px, #f0e6d3 text, #60a5fa check |

All four modals (`EbookModal`, `GlowPTModal`, `CaseStudyModal`, `NewsletterModal`) lock page scroll via a `useEffect` setting `document.body.style.overflow = 'hidden'` on mount, restoring on unmount; each closes on X click or backdrop click. **`NewsletterModal` also closes itself 2.5s after a successful signup**, through a second `useEffect` that clears its timer on unmount.

Heading "Custom Work". Title (card-title, white, clamp(30px, 5vw, 35px)) "McKenzie Arm Care"; two-sentence teaser; **"Case Study"** ghost button (marginTop 16px) → `CaseStudyModal`: title "McKenzie Arm Care" (no "Case Study" label inside); full description; 2-column feature list; tech note "Built with React, Supabase, and deployed on Netlify." *(True of McKenzie; if McKenzie moves, this string moves with it.)*

- **Custom Work:** `.card-title` / `.card-text` / `.btn`; `CaseStudyModal` adds `.modal__features` / `.modal__feature` / `.modal__stack`.

- **The newsletter description is duplicated on purpose (card + modal). Any edit changes BOTH.** `grep -c "For physical therapy practices\."` → **2**.

| **Test subscribers** | Five `besoulful+kit-…` addresses. **Before Issue 1: keep one, delete four.** |

| **Newsletter error string's curly apostrophe** | Make it straight next time `NewsletterModal` is touched. |

| **The GlowPT modal has not been opened by eye since V52/V53** | Bullets 3 and 5 and the description are build-and-string-verified only (the card teaser was seen). **Open the modal next time anyone is in this repo — one click.** |

---

# 0g. LINES REPLACED IN V65 (2026-09-27): Issue 1 moved, the e-book card stays up

# FranklinAI — Project Instructions (Version 64, Current)

- **Next:** the **e-book checkout on Kit Commerce** (decided, not built; "Buy the Playbook" is still `href="#"`). **Step 1 (payouts) DONE 2026-09-26.** **Waiting on the final book PDF** (David, about 2026-09-27); then step 2, create the product. **No placeholder product**: a live product with a stand-in file could sell a real copy. Steps in Open Items.

- **Issue 1 of The Operator:** date lives in the Content Calendar (September 29, 2026 as of its September 25 pass).

  > **Say this precisely:** the book exists and the listing is live; **the product is not buyable yet.** The Calendar's rule: **a listed product nobody can buy comes off the shelf.** If the checkout is not live by Issue 1, **ask David before touching the card**, and **do not ship a coming-soon strip or a pre-sell.**

| **Test subscribers** | Four `besoulful+kit-…@gmail.com` addresses, all Confirmed. **Before Issue 1, keep one and delete three.** |

| **E-book checkout on Kit Commerce — NEXT** | **Decided, not built.** (1) ✅ **Payouts connected 2026-09-26** (see Kit table). (2) David creates the product: *What Your Practice Actually Sells*, **$37**, final file uploaded (its cover line changed by David to "A playbook from The Operator"), a description that **calls it a playbook**, may name physical therapy, and obeys the copy rules. (3) Code sets "Buy the Playbook" to the live URL with `target="_blank" rel="noopener noreferrer"`, styles unchanged, and pushes. (4) David buys it or runs Kit's test purchase and checks the buyer lands on the list. **Verify:** `grep -c 'href="#"' src/App.jsx` → **0**; "$37" matches in both `EbookModal` spots and the Kit product; the `$350` decoy untouched; no em dashes in new strings. **Fallback:** not live by Issue 1 → **ask David before touching the card**; no coming-soon strip, no pre-sell. Any domain record Kit Commerce asks for goes in **Route 53**, by the DNS rule. |

| **Test subscribers** | Four `besoulful+kit-…` addresses. **Before Issue 1: keep one, delete three.** |

---

# 0f. LINES REPLACED IN V64 (2026-09-26): the claude.ai cache-buster

# FranklinAI — Project Instructions (Version 63, Current)

> **There is ONE copy of this document: `CLAUDE.md` on `main` in the repo (since V59).** The claude.ai project instructions are a short pointer telling each claude.ai session to fetch `https://raw.githubusercontent.com/besoulful-design/franklinai-v2/main/CLAUDE.md` and state the version it read. **Nothing is pasted into claude.ai any more.** ⚠️ **The pointer works only because this repo is PUBLIC, which David chose deliberately on 2026-09-26.** Never commit a secret here. If it is ever made private, claude.ai needs another route (GitHub linked to the project, or pasting again) and this note must change.

- **V63** (2026-09-26) — **Kit Commerce step 1 done**: Stripe Express payouts as the LLC to Bluevine, descriptor `FRANKLINAI`. Product waits on the final PDF; no placeholder product.

---

# 0e. LINES REPLACED IN V63 (2026-09-26): Kit payouts connected

# FranklinAI — Project Instructions (Version 62, Current)

- **Next:** the **e-book checkout on Kit Commerce** (decided, not built; "Buy the Playbook" is still `href="#"`). **Waiting on David opening the LLC's business bank account first** (his choice, 2026-09-26); then Kit → Settings → Revenue, with Stripe set up as the **company**, FranklinAI Solutions LLC, using the LLC's EIN. Steps in Open Items.

| **Revenue / Kit Commerce** | **Not set up yet.** Payouts connect Stripe inside Kit (Settings → Revenue); David enters bank and tax details himself. |

| **E-book checkout on Kit Commerce — NEXT** | **Decided, not built.** (1) David opens **Kit → Settings → Revenue** and connects payouts (Stripe inside Kit; he enters bank and tax details; business **FranklinAI Solutions LLC**, no comma). (2) David creates the product: *What Your Practice Actually Sells*, **$37**, final file uploaded (its cover line changed by David to "A playbook from The Operator"), a description that **calls it a playbook**, may name physical therapy, and obeys the copy rules. (3) Code sets "Buy the Playbook" to the live URL with `target="_blank" rel="noopener noreferrer"`, styles unchanged, and pushes. (4) David buys it or runs Kit's test purchase and checks the buyer lands on the list. **Verify:** `grep -c 'href="#"' src/App.jsx` → **0**; "$37" matches in both `EbookModal` spots and the Kit product; the `$350` decoy untouched; no em dashes in new strings. **Fallback:** not live by Issue 1 → **ask David before touching the card**; no coming-soon strip, no pre-sell. Any domain record Kit Commerce asks for goes in **Route 53**, by the DNS rule. |

- **V62** (2026-09-26) — **"Playbook" replaces "guide" for the e-book on the site** (card teaser, modal subline, modal paragraph 3, button "Buy the Playbook"; `fd6b95a`, confirmed live by David). New copy rule; the book follows later. Checkout waits on the LLC business bank account; Stripe to be set up as the company with the EIN.

---

# 0d. LINES REPLACED IN V62 (2026-09-26): "guide" becomes "playbook"

# FranklinAI — Project Instructions (Version 61, Current)

- **Next:** the **e-book checkout on Kit Commerce** (decided, not built; "Buy the Guide" is still `href="#"`). Steps in Open Items.

> **The filled style is exclusive to the discovery call, site-wide.** Every transaction button is a ghost: "Buy the Guide", "Bring GlowPT to Your Clinic", "Subscribe for Free". **Flipping a transaction button to `btn--primary` requires David's explicit say-so** (considered and declined in V49).

- **Teaser** (`card-text`): **"A downloadable guide for owners running two business models in one building, an insurance practice and a cash practice, and making them work together."**

- **Subline** (Inter 14px/600/#8899b0, marginBottom 16px): **"A self-serve guide. $37, yours to download."**

  3. *"This guide walks you through the fix: decide what your practice actually is, then say it in one sentence your whole team can repeat. Not a tactic, not a tool. The one thing that lets everything else line up behind it."*

- **Footer** (borderTop hairline, paddingTop 24px, centered): **"$37"** (Playfair 700, 27.7px, blue, lineHeight 1.45, marginBottom 18px, no "/ month") then a **ghost** "Buy the Guide" (`padding: '10px 20px', fontSize: '13px'`, **`href="#"` until the Kit Commerce product exists**; then the live URL with `target="_blank" rel="noopener noreferrer"`, styles unchanged).

| **E-book checkout on Kit Commerce — NEXT** | **Decided, not built.** (1) David opens **Kit → Settings → Revenue** and connects payouts (Stripe inside Kit; he enters bank and tax details; business **FranklinAI Solutions LLC**, no comma). (2) David creates the product: *What Your Practice Actually Sells*, **$37**, final file uploaded, a description that may name physical therapy and obeys the copy rules. (3) Code sets "Buy the Guide" to the live URL with `target="_blank" rel="noopener noreferrer"`, styles unchanged, and pushes. (4) David buys it or runs Kit's test purchase and checks the buyer lands on the list. **Verify:** `grep -c 'href="#"' src/App.jsx` → **0**; "$37" matches in both `EbookModal` spots and the Kit product; the `$350` decoy untouched; no em dashes in new strings. **Fallback:** not live by Issue 1 → **ask David before touching the card**; no coming-soon strip, no pre-sell. Any domain record Kit Commerce asks for goes in **Route 53**, by the DNS rule. |

| **E-book checkout on Kit Commerce — NEXT** | **Decided, not built.** (1) David opens **Kit → Settings → Revenue** and connects payouts (Stripe inside Kit; he enters bank and tax details; business **FranklinAI Solutions LLC**, no comma). (2) David creates the product: *What Your Practice Actually Sells*, **$37**, final file uploaded, a description that may name physical therapy and obeys the copy rules. (3) Code sets "Buy the Playbook" to the live URL with `target="_blank" rel="noopener noreferrer"`, styles unchanged, and pushes. (4) David buys it or runs Kit's test purchase and checks the buyer lands on the list. **Verify:** `grep -c 'href="#"' src/App.jsx` → **0**; "$37" matches in both `EbookModal` spots and the Kit product; the `$350` decoy untouched; no em dashes in new strings. **Fallback:** not live by Issue 1 → **ask David before touching the card**; no coming-soon strip, no pre-sell. Any domain record Kit Commerce asks for goes in **Route 53**, by the DNS rule. |

- **The book wins on shared sentences.** Where any surface repeats a sentence from *What Your Practice Actually Sells*, the book's wording is canonical.

| **`EbookModal` paragraph 2: "build… built… built"** | Three forms of "build" in ~20 words. **Parked, book-first:** if it grates, change the book, then every surface together. |

- **V61** (2026-09-26) — GlowPT follow-up done in a GlowPT session: private, no forks, history clean, nothing rotated, builds fine. Open item closed.

The claude.ai handoff that asked for it, verbatim (`handoff-addendum-playbook-2026-09-26.md`, deleted from ~/Downloads once recorded):

# Handoff addendum, 2026-09-26: three "playbook" strings for the checkout push

**Repo: `franklinai-v2`.** Add to today's Kit Commerce checkout session. Read the 2026-09-25 handoff first; this rides with it.

David's call, 2026-09-26: **"playbook" is the format word for the products on every public surface.** The book's title does not change. The newsletter does not change. Only the word "guide" changes, where it describes the product.

| Find (exact, in `App.jsx`) | Replace with |
|---|---|
| `A downloadable guide for owners running two business models in one building` | `A downloadable playbook for owners running two business models in one building` |
| `A self-serve guide. $37, yours to download.` | `A self-serve playbook. $37, yours to download.` |
| `Buy the Guide` | `Buy the Playbook` |

The first is the `AvailableForPractice` card teaser; the second is the `EbookModal` subline; the third is the `EbookModal` ghost button label (David's call 2026-09-26: the button follows the format word too). All were locked V44/V32 strings; this note supersedes them. Styles untouched; the button stays `btn btn--ghost`, title case, no period.

Also carry "playbook" into the **Kit Commerce product page description** David writes today, and he changes the book cover line himself ("A guide from The Operator" becomes "A playbook from The Operator") in the book file before uploading it.

Verification adds four rows: `grep -c "downloadable guide" src/App.jsx` → 0; `grep -c "self-serve guide" src/App.jsx` → 0; `grep -c "Buy the Guide" src/App.jsx` → 0; `grep -ci "playbook" src/App.jsx` → 3.

CLAUDE.md V57 sections that change: Business (the e-book paragraph), The Offer Ladder, Available (all three strings), Locked Inline Styles Reference (all three rows), Primary CTA / button notes (the ghost list names "Buy the Guide"), Copy Rules (add: "playbook" is the format word for the products on every public surface; the title and the newsletter name are unchanged), Change History.


---

# 0c. LINES REPLACED IN V61 (2026-09-26): GlowPT follow-up closed

| **Public vs private repos — DECIDED 2026-09-26; one follow-up open** | **`glowpt` made PRIVATE by David** (verified from outside: 404). **`franklinai-v2` stays PUBLIC on purpose**: the claude.ai pointer depends on it, and its code is shipped to every browser anyway. **Accepted cost:** anyone can read this CLAUDE.md (pricing plans, open legal questions, AWS account details; no passwords or keys). **So never commit a secret or anything confidential to this repo, and keep sensitive business or legal detail brief here.** **Follow-up, GlowPT-rooted:** going private does not un-publish what was public, so a GlowPT session should search GlowPT's full git history for any key or password ever committed, rotate anything found, and record the private status in GlowPT's CLAUDE.md. GlowPT's claude.ai project does not use a GitHub pointer, so nothing broke there. |

- **V60** title line: `# FranklinAI — Project Instructions (Version 60, Current)`

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
