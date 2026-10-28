---
title: "Kitchen-table hours"
description: "Why I'm building Tradesnap: Sweden is short of installers, and the ones we have spend their evenings writing quotes."
date: 2026-10-28
draft: true
---

You didn't learn a trade to spend your evenings at the kitchen table writing quotes.

That's the first line on Tradesnap's website, and it's the best summary I have of why the company exists.

Over the past year we've talked to a lot of people in the trades. The conversation I keep coming back to was in early January, with an electrician I know.

He told me all his admin happens late in the evening or at the weekend. Writing quotes. Sending them. Invoicing.

So after eight to ten hours of client work, he sits down and does the business.

Every business owner has some version of that. But what if those hours shrank, by a lot, every year? For someone who's already worn out after a full day of physical work, that's worth something.

I've spent more than thirteen years building software for systems that can't go down. E-health services behind 1177. Middleware for Swedish public transport. Unglamorous work that nobody notices while it runs. Tradesnap is the same instinct pointed somewhere new: the paperwork that sits between a finished job and getting paid.

Here's what pulled me in.

There aren't enough tradespeople. This autumn, [Installatörsföretagen asked 100 electrical installation firms](https://arbetet.se/2026/10/06/installatorsforetagens-prognos-svart-for-foretagen-att-hitta-personal/) how hard it is to find installers. 95 said very or fairly hard. Arbetsförmedlingen's [spring outlook](https://arbetsformedlingen.se/download/18.7e15201e19e42865f1b3546/1781533279047/arbetsmarknadsutsikterna-varen-2026.pdf) names construction as the hardest sector in the country to hire for.

So an hour an electrician spends on admin is an hour of work that nobody else is there to do.

And the admin isn't small. A [survey of UK tradespeople this summer](https://www.installeronline.co.uk/news/93-of-uk-tradespeople-say-running-their-business-is-stressing-them-out-new-national-report-finds/) put quoting, invoicing and chasing payment at 5 hours and 20 minutes a week, much of it in the evenings and at weekends. More than half hadn't taken a full week off in a year. In Germany and Austria, [42 percent of trade businesses](https://www.handwerksblatt.de/betriebsfuehrung/umfrage-von-plancraft-jeder-dritte-handwerker-nutzt-bereits-taeglich-ki) say more than half their working time goes to office work instead of the site.

Five hours a week is most of a working day. Every week. On top of the actual work.

Tradespeople have already started using AI for this. In ServiceTitan's [survey of 1,017 US contractors](https://www.servicetitan.com/press/servicetitan-report-finds-contractors-shifting-focus-from-ai-adoption-to-implementation-and-productivity), two in three of those using AI save at least three hours a week.

The same survey had a number that stuck with me more. Only 11 percent of contractors place high trust in their AI tools. 58 percent trust them little or not at all.

I get that. A quote has your name on it. If the AI gets the materials wrong, it's your margin and your customer on the line, not the software company's.

So that's the line we've drawn with Tradesnap. The AI drafts. The tradesperson decides.

You describe the job in your own words, on your phone. Tradesnap turns it into line items, with labour and materials kept apart. You read every line, fix what's wrong, and send the quote as a link. The customer approves it on their phone, and you see the yes in the app. One tap turns it into an invoice.

Nothing goes out that you haven't seen.

I wrote most of the first version on my own. [MARTIN: when and how. Evenings next to consulting? Weekends? One factual sentence.] After the summer my co-founder joined, and the job changed from one person shipping to two people shipping without stepping on each other.

A lot of our own code is written with AI too, and we hold it to the same rule as the product: it drafts, we review. Each repo has a shared `CLAUDE.md` with our team rules, so the AI works the same way for both of us.

[MARTIN: one concrete moment from the build. A bug, a hard call, or a number, like how long it takes now to go from describing a job to a finished quote.]

Less paperwork. More paid work. That's the whole pitch.

If you're a tradesperson in Sweden and want to try it, it's at [tradesnaphq.com](https://tradesnaphq.com/). If you think I've got any of this wrong, tell me: [martin@martinpring.com](mailto:martin@martinpring.com).

---

**Sources.** Most of these surveys come from companies that sell software to tradespeople, so read them as signals rather than gospel.

- Installatörsföretagen market forecast, 100 electrical installation firms in Sweden. Reported by [Arbetet](https://arbetet.se/2026/10/06/installatorsforetagens-prognos-svart-for-foretagen-att-hitta-personal/), October 2026.
- Arbetsförmedlingen, [Arbetsmarknadsutsikterna våren 2026](https://arbetsformedlingen.se/download/18.7e15201e19e42865f1b3546/1781533279047/arbetsmarknadsutsikterna-varen-2026.pdf), June 2026, page 22.
- Powered Now and Installer, *The NOW Report 2026*, 140 UK tradespeople. Reported by [Installer](https://www.installeronline.co.uk/news/93-of-uk-tradespeople-say-running-their-business-is-stressing-them-out-new-national-report-finds/), July 2026.
- plancraft, 1,026 trade businesses in Germany and Austria. Reported by [Handwerksblatt](https://www.handwerksblatt.de/betriebsfuehrung/umfrage-von-plancraft-jeder-dritte-handwerker-nutzt-bereits-taeglich-ki), August 2026.
- ServiceTitan, *2026 State of AI in the Trades*, 1,017 US contractors surveyed by Thrive Analytics. [Press release](https://www.servicetitan.com/press/servicetitan-report-finds-contractors-shifting-focus-from-ai-adoption-to-implementation-and-productivity), September 2026.
