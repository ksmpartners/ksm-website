---
title: "Culture Eats Strategy for Breakfast: Lessons from a GxP SCE Go-Live"
date: 2026-04-04
author: Mike Harnish
tags: [Life Sciences, GxP, Statistical Computing, Domino Data Lab, Project Delivery]
excerpt: This past week we celebrated the successful production deployment of a statistical computing environment for a global pharmaceutical client. One day early. Here's what went right — and why it had almost nothing to do with technology.
---

This past week, KSM celebrated the successful production deployment of release 1.0 of a statistical computing environment (SCE) for a global pharmaceutical client — built on Domino Data Lab's platform. The release was the culmination of 17 months of iterative analysis and planning, design, construction, testing, and documentation in a GxP environment. We delivered on time. One day early, in fact.

This post is about what went right.

## What Went Right

### 1. Clear, achievable goals

The client did not try to eat the proverbial elephant in one sitting. Early in the program, they defined a rubric for deciding which requirements belonged in release 1.0 and which ones could wait — and they held to it tenaciously. Even a late-breaking business change that forced the reprioritization of a very important publishing requirement was deferred cleanly to a 1.1 release. That decision was made, documented, and never revisited.

Scope discipline of this kind sounds obvious. It is remarkably rare.

### 2. They took the long view

Moving to a new SCE is a complex undertaking, especially for larger pharmaceutical organizations. They run a high volume of clinical studies with variable analysis and reporting needs spanning multiple therapeutic areas. They carry ten or more years of clinical data that need to migrate. They have a large, established user community that must be consulted, trained, and won over. The new platform opens the door to a broad range of new tools and languages — each of which must be qualified and documented before clinical use.

Their management knew all of this, and communicated clearly to our team: release 1.0 was always a beginning — a strong beginning — not an end. That perspective freed the project to be exactly what it needed to be at each phase, rather than carrying the impossible weight of trying to be everything at once.

### 3. Clear decision-making authority

When the client made an informed decision, we could trust that it was final. That trust enabled clean planning and efficient status reporting. No relitigating, no parallel tracks, no ambiguity about who owned what.

### 4. Client engagement

Their team was present at daily standups — not lurking, but participating. They provided timely, substantive feedback on new features and design decisions. Engagement of this kind keeps a project's feedback loops tight and its surprises small.

### 5. IT and business alignment

During a kickoff dinner early in the project, I was struck by how well the IT and business representatives got along. They didn't retreat to separate ends of the table. They intermingled, chatted, and clearly enjoyed one another's company. Throughout the engagement, they retained distinct spheres of authority — but never in a territorial way. They moved like colleagues, not competitors.

### 6. Early QA engagement

QA was present from the kickoff meetings and remained engaged throughout. The project ran on the client's quality management system (QMS), and their QA team coached us on its use — rather than handing us a stack of document templates and wishing us luck. That investment in onboarding paid for itself many times over.

### 7. They embraced automation

If something could be automated, they automated it. They qualified leading-edge, cloud-based CI/CD tools and used them to deploy everything — Domino itself, the infrastructure it ran on, and the extensions KSM built on top of it. The upfront investment in automation paid massive dividends as the project progressed: consistent, repeatable deployments without manual execution from checklists. This wasn't new behavior adopted for the project — it was already embedded in their engineering culture.

<blockquote class="pull-quote">"If something could be automated, they automated it — and this was already embedded in their culture before we arrived."</blockquote>

### 8. A culture of accountability

When we hit infrastructure issues, the client never simply filed a ServiceNow ticket and moved on. A network of representatives from all relevant IT departments made it their job to follow up on those tickets and ensure they were resolved effectively. One IT representative served as a concierge for our team — someone who knew all the right people and could navigate the organization on our behalf. Even when resolution took longer than any of us hoped, we never worried an issue had disappeared into a queue. That kind of accountability is not a process. It's a posture.

### 9. They expected success

This is the one that matters most.

When an organization expects a project to fail, the response is predictable: teams retreat into fiefdoms, construct defenses against blame, and demand constant status reporting from everyone else — scrutinizing those reports for evidence that failure belongs somewhere else. They produce excuses. Not value.

This client expected success. Stakeholders built bridges, not walls. And nearly everything else on this list follows from that single fact.

It explains their deep engagement in daily project activities. It explains why IT and business were aligned before we ever arrived. It explains why QA was present from the beginning rather than arriving as a late-stage audit function. It explains why they weren't afraid to embrace CI/CD automation in a GxP environment. It explains the accountability culture — because accountable people help each other solve problems rather than protecting themselves from association with them.

## The Real Lesson

A colleague of mine keeps a proverb on his whiteboard: *Culture eats strategy for breakfast.*

This SCE deployment was not a victory for strategy, technology, or process. We used good ones — but good clients use good ones all the time and still struggle. What made the difference here was something harder to replicate and much more durable.

It was a culture win.

KSM was honored to be a part of it.
