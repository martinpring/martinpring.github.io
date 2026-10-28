---
title: "Kitchen-table hours"
description: "Sweden is short of installers, and the ones we have spend their evenings on quotes and invoices. What the 2026 numbers say, and why we're building Tradesnap."
date: 2026-10-28
draft: true
---

There aren't enough electricians in Sweden.

This autumn, Installatörsföretagen asked 100 electrical installation companies how hard it is to find installers. 95 said very or fairly hard.[^in]

It's not just electricians. Construction is the hardest sector in the country to hire for. In Arbetsförmedlingen's spring survey, 40 percent of construction workplaces had failed at least one recruitment in the previous six months. Across all sectors, 26 percent had.[^af]

The work didn't go away. More than a million homeowners used the ROT deduction in 2025, and it cost the state about 22 billion kronor, the most in ten years.[^rot]

More jobs than hands. In that market, every hour a tradesperson spends away from the job is an hour nobody pays for.

## Where the hours go

Ask a tradesperson where their week goes. The answer isn't only the site.

In the UK, quoting, invoicing and chasing payment take 5 hours and 20 minutes a week on average. More than half haven't taken a week off in the past year.[^now]

In Germany and Austria, 42 percent of trade businesses spend more than half their working time on office work instead of on site. The biggest time sinks they name: emails, quotes and invoices.[^plancraft]

In the US, quoting is the single most time-consuming task for 37 percent of home-service business owners.[^jobber]

Different countries. Same kitchen table.

[MARTIN: a real line from a tradesperson you've talked to. Something like "I write my quotes on Sunday nights." Use their words, not mine.]

## Then you wait to get paid

Sending the invoice isn't the end of it.

UK tradespeople are owed £5,901 on average. Two in three have had a customer deliberately delay or dispute a payment.[^now]

That's money already earned. Sitting in someone else's account.

## AI already helps. Nobody trusts it.

Tradespeople aren't waiting for permission.

Half of US home-service business owners already use AI, and quoting and invoicing are the two things they use it for most.[^jobber] Among US contractors who use AI, two in three save at least three hours a week.[^st]

Europe is not far behind. Seven in ten trade businesses in Germany and Austria use AI. After email, quotes and invoices are the most common job they give it, and three in four of those asked save one to five hours of office work a week.[^plancraft]

Three hours a week. That's an evening back.

But one number stuck with me more than the rest. Only 11 percent of contractors place high trust in their AI tools. 58 percent trust them little or not at all. Accuracy is the top worry.[^st]

That makes sense. A quote has your name on it. One wrong line costs you money, or a customer.

## What we built

Tradesnap is quotes and invoices for the skilled trades, done from your phone.

You describe the job in your own words. Tradesnap builds the line items, with labour and materials kept apart. You send the quote as a link. The customer approves it on their phone, and you see the yes in the app. One tap turns it into an invoice.

And you review every line before anything is sent.

That's our answer to the trust gap. The AI drafts. The tradesperson decides.

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

*A note on the numbers.* Most of the surveys above were run by companies that sell software to tradespeople, some of them Tradesnap's competitors. They're the best 2026 data I could find. Each one is named below, with its sample, so you can judge it for yourself.

[^in]: Installatörsföretagen, market forecast, October 2026. Interviews with 100 electrical installation companies. Reported by [Arbetet, 6 October 2026](https://arbetet.se/2026/10/06/installatorsforetagens-prognos-svart-for-foretagen-att-hitta-personal/).

[^af]: Arbetsförmedlingen, [Arbetsmarknadsutsikterna våren 2026](https://arbetsformedlingen.se/download/18.7e15201e19e42865f1b3546/1781533279047/arbetsmarknadsutsikterna-varen-2026.pdf), 16 June 2026, page 22. Share of workplaces that failed one or more recruitments in the previous six months.

[^rot]: Preliminary figures from Skatteverket, reported by [Svensk Byggtidning, 10 February 2026](https://www.svenskbyggtidning.se/2026/02/10/rot-avdraget-kostade-22-miljarder-under-2025-danderyd-sticker-ut/). The deduction was raised from 30 to 50 percent for most of 2025 and went back to 30 percent in 2026.

[^now]: Powered Now and Installer, *The NOW Report 2026*. Survey of 140 UK tradespeople by Fusion Insight & Strategy, June 2026. Reported by [Installer, 20 July 2026](https://www.installeronline.co.uk/news/93-of-uk-tradespeople-say-running-their-business-is-stressing-them-out-new-national-report-finds/). Powered Now sells job-management software to tradespeople.

[^plancraft]: plancraft survey of 1,026 trade businesses in Germany and Austria. Reported by [Handwerksblatt, 14 August 2026](https://www.handwerksblatt.de/betriebsfuehrung/umfrage-von-plancraft-jeder-dritte-handwerker-nutzt-bereits-taeglich-ki). plancraft sells software for quotes and invoices.

[^jobber]: Jobber, [Blue Collar Strong: The 2026 Home Service Trends Report](https://www.getjobber.com/home-service-trends-report/). 1,050 US home-service business owners, surveyed by Conjointly in December 2025. Jobber sells field-service software.

[^st]: ServiceTitan, *The Update: 2026 State of AI in the Trades*. 1,017 US contractors, surveyed by Thrive Analytics between 26 May and 15 June 2026. [Press release, 29 September 2026](https://www.servicetitan.com/press/servicetitan-report-finds-contractors-shifting-focus-from-ai-adoption-to-implementation-and-productivity). ServiceTitan sells software to contractors.
