---
title: "Culture Eats Strategy for Breakfast: Lessons from a GxP SCE Go-Live"
date: 2026-04-04
author: Mike Harnish
tags: [Life Sciences, GxP, SCE, Domino Data Lab, Project Delivery]
excerpt: This past week we celebrated a successful Domino SCE deployment with a global pharmaceutical client. One day early. Here's what went right — and why that success was not just about technology.
---

This past week, KSM celebrated the successful production deployment of release 1.0 of a statistical computing environment (SCE) with a global pharmaceutical client. The release, built on Domino Data Lab's platform, was the culmination of 17 months of iterative analysis, design, construction, testing, and documentation in a GxP environment. We delivered on time. One day early, in fact.

This post is about what went right.

## What Went Right

### 1. Clear, achievable goals

The client did not try to eat the proverbial elephant in one sitting. Early in the program, they defined a rubric for deciding which requirements belonged in release 1.0 and which ones could wait — and they held to it tenaciously. Even a late-breaking business change that forced the reprioritization of a very important publishing requirement was deferred cleanly to a 1.1 release. The client made that decision, documented it, and never revisited it.

Scope discipline of this kind sounds obvious. It is remarkably rare.

### 2. They took the long view

Moving to a new SCE is a complex undertaking, especially for larger pharmaceutical organizations. They run a high volume of clinical studies with variable analysis and reporting needs spanning multiple therapeutic areas. They must often migrate ten or more years of clinical data. They have a large, established user community that must be consulted, trained, and won over. The new platform opens the door to a broad range of new tools and languages — each of which must be qualified and documented before clinical use.
<blockquote class="pull-quote">"Release 1.0 was to be a beginning — a strong beginning — not an end."</blockquote>
Their management appreciated the complexity, and communicated clearly to our team: release 1.0 was to be a beginning — a strong beginning — not an end. That perspective freed the project to be exactly what it needed to be at each phase, rather than carrying the impossible weight of trying to be everything at once.

### 3. Clear decision-making authority

When the client made an informed decision, we could trust that it was final. That trust enabled clean planning and efficient status reporting. No relitigating, no parallel tracks, no ambiguity about who owned what.

### 4. Client engagement

Their team was present at daily standups — not lurking, but participating. They provided timely, substantive feedback on new features and design decisions. Engagement of this kind keeps a project's feedback loops tight and its surprises small.

### 5. IT and business alignment

During a kickoff dinner early in the project, I was struck by how well the IT and business representatives got along in this informal setting. They didn't retreat to separate ends of the table. They intermingled, joked, and clearly enjoyed one another's company. Throughout the engagement, they retained distinct spheres of authority — but never in a territorial way. They moved like colleagues, not competitors.

### 6. Early QA engagement

QA was present from the kickoff meetings and remained engaged throughout. The project ran on the client's quality management system (QMS), and their QA team coached us on its use — rather than handing us a stack of document templates and wishing us luck. That investment and engagement helped us account for expected QA activities in our project plans and resource allocation.

### 7. They embraced automation

<blockquote class="pull-quote">"The upfront investment in automation paid massive dividends as the project progressed."</blockquote>

If something could be automated, they automated it. They qualified leading-edge, cloud-based CI/CD tools and used them to deploy everything — Domino itself, the infrastructure it ran on, and the extensions KSM built on top of it. The upfront investment in automation paid massive dividends as the project progressed: consistent, repeatable, fast deployments instead of onerous manual execution from paper checklists. This wasn't new behavior adopted for the project — it was already embedded in the client's engineering culture. We were the lucky beneficiaries.

### 8. A culture of accountability

When we hit infrastructure issues, we didn't have to file a ServiceNow ticket and hope for the best. A network of representatives from all relevant IT departments made it their job to follow up on those tickets and ensure they were resolved effectively. One IT representative served as a concierge for our team — someone who knew all the right people and could navigate the organization on our behalf. Even when resolution took longer than any of us hoped, we never worried an issue had disappeared into a queue. That kind of accountability is not a process. It's a posture.

### 9. They expected success

This is the one that matters most.

When an organization expects a project to fail, the response is predictable: teams retreat into fiefdoms, construct defenses against blame, and demand constant status reporting from everyone else — scrutinizing those reports for evidence that failure belongs somewhere else. They produce excuses. Not value.

This client expected success. Stakeholders built bridges, not walls. And nearly everything else on this list follows from that single fact.

It explains their deep engagement in daily project activities; nobody wanted to miss out. It explains why IT and business were aligned before we ever arrived. It explains why QA was present from the beginning rather than arriving as a late-stage audit function. It explains why they weren't afraid to embrace CI/CD automation in a GxP environment. It explains the accountability culture — because accountable people help each other solve problems rather than risk association with possible failure.

## The Real Lesson

A colleague of mine at KSM keeps a proverb on his whiteboard: *Culture eats strategy for breakfast.*

This SCE deployment was not a victory for strategy, technology, or process. We used good ones — but good clients use good ones all the time and still struggle. What made the difference here was something harder to replicate and much more durable.

It was a culture win.

KSM was honored to be a part of it.
