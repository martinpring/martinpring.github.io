---
title: "Kitchen-table hours"
description: "Sweden is short of electricians and plumbers, and the ones we have spend their evenings writing quotes. Why we're building Tradesnap."
date: 2026-10-27
draft: true
---

Sweden is short of electricians.

That isn't a feeling. Arbetsförmedlingen's occupational forecast from June 2025 lists certified installation electricians, VVS installers and roofers as shortage occupations. Across construction as a whole, about a third of the jobs they assessed are hard to fill.

Then demand jumped.

The ROT deduction went from 30 to 50 percent for most of 2025. Between May and October, 14 percent more households applied for it than the year before. The value of those applications rose 76 percent, to about 11.2 billion kronor. Carpenters started turning work down.

More work than people. In that market, every hour a tradesperson spends away from the job is an hour nobody pays for.

## Where the hours go

Quotes. Invoices. Chasing payment.

Mostly at the kitchen table, after a full day on site.

Good Swedish numbers on this are thin. The closest I've found is a UK survey from March 2026. Small business owners there spent around eight hours a week on repetitive admin. Of the tradespeople in it, 77 percent did that admin in the evenings. The trades sample is small, around twenty people, so read it as a signal, not a statistic.

[MARTIN: a real line from a tradesperson you've talked to. Something like "I write my quotes on Sunday nights." Use their words, not mine.]

That's the problem Tradesnap goes after.

## What we built

You describe the job in your own words, from your phone.

Tradesnap turns it into line items, with labour and materials kept apart. You send the quote as a link. The customer approves it on their phone. You see the yes in the app. One tap turns it into an invoice.

You review every line before anything is sent.

That last part matters most to us. A tradesperson's name is on that quote. The AI drafts. The person decides.

## How we build it

I wrote most of the first version alone. [MARTIN: when and how. Evenings next to consulting? Full days? Keep it factual.]

After the summer my co-founder joined. The work changed from one person shipping to two people shipping without stepping on each other.

Two repos: the app and the portal. Each has a shared `CLAUDE.md` at the root, committed to git, with our team rules. Git discipline. Code regions nobody touches without asking. No personal machine paths. Personal setup lives in a gitignored `CLAUDE.local.md`.

AI writes a lot of our code. The rules make sure it writes it the same way for both of us.

[MARTIN: one concrete moment from the build. A bug, a decision you went back and forth on, or a number, such as how long it takes from describing a job to a finished quote.]

## Next

Less paperwork. More paid work.

Built in Sweden, together with tradespeople. If you're one of them and want to try it, it's at [tradesnaphq.com](https://tradesnaphq.com/).

---

**Sources**

- Arbetsförmedlingen, [Var finns jobben och var finns arbetskraften?](https://arbetsformedlingen.se/download/18.73b47b99196eba9205d44ad/var-finns-jobben-och-var-finns-arbetskraften.pdf) (June 2025)
- SVT, [Rusning till snickare innan rotavdraget sänks](https://www.svt.se/nyheter/lokalt/vasterbotten/rusning-till-snickare-innan-rotavdraget-sanks-behover-tacka-nej-till-uppdrag) (December 2025)
- Electrical Times, [UK tradespeople losing ten working weeks a year to admin](https://www.electricaltimes.co.uk/uk-tradespeople-losing-ten-working-weeks-a-year-to-admin-they-could-automate-survey-finds/) (March 2026)
