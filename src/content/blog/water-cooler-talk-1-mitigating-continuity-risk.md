---
title: "Water Cooler Talk #1: Mitigating Continuity Risk of an Existing Codebase"
date: 2022-01-06
author: "KSM Technology Partners"
tags: ["Software Quality", "Best Practices"]
excerpt: "When you take over an existing codebase, what are the first things you do to ensure the project succeeds? Our team weighs in."
---

Welcome to the KSM Water Cooler, where our associates come to the forefront of our company to give you an inside look at what we do and how we do it! This week we posed the question: When you take over an existing codebase, what are the first things you do to ensure the project succeeds?

## Determine Business Requirements

**Steve Caggiano** emphasizes: "Understand the business purpose of the code. You cannot possibly expect to add business value if you don't understand what business problems the code is supposed to solve."

Informal conversations help identify challenges that led to design and implementation tradeoffs since it's not always evident by looking at the existing codebase, the backlog, or existing documentation itself.

**Matt Schwartz** recommends: "If possible, track down the previous development team and identify components or functions that are pain points."

When the previous development team is unavailable, the focus shifts to documentation they left behind.

**Steve Kirsch** adds: "You should attempt to find any documentation related to the code and its functionality — e.g., requirement documents, design specs, wiki pages. I'd also verify that it's up to date. Nonexistent documentation, or documentation that has gone to seed, is a bad sign."

**Martin Cortez** stresses: "Understand how the users actually use the code — not just how you or the previous owner think they use it."

These insights reflect an unfortunate reality: keeping requirements up to date is only prioritized during the early phase. Once projects enter maintenance mode, developers update code but no one updates requirements. The code itself becomes the only reliable documentation.

## Planned Obsolescence of Existing Codebase

**Kent Piland** advises: "Try to get a handle on near- and long-term goals for the project/codebase as that can inform what you do with older legacy code."

**Dean Zimmerman** agrees: "If it's going to be completely redone, it's no use spending any time fixing the old codebase."

Planned obsolescence often results from shifting regulations or technological changes. Understanding project timelines provides insight into how existing code must operate and for how long.

**Andy Albrecht** notes: "I'd treat an app that just needs to live long enough to reach its scheduled retirement differently than one in full-blown enhancement mode."

## Building the Code

**Andy Albrecht** explains his approach: "Assuming the code is in version control, I will browse the commit-graph to see what recent changes were made, in the hopes this might yield some ticket IDs. I'll also make sure the build is working, stable, and (relatively) quick."

**Mike Harnish** emphasizes a critical concern: "Early on, I'd verify that the source code I've been given powers what's actually running in production. If the last development team didn't commit their changes to version control, the best I can do is attempt to reverse engineer the code from what's in production."

## Ensure Repeatability and Reliability of Existing Codebase

Once a team establishes they can build the code, the next step is ensuring they can do it repeatedly and reliably without introducing regressions. Automated unit and system tests are invaluable.

**Martin Cortez** suggests: "If there are no unit tests, then implement some stability tests so that you can safely make changes to the codebase."

**Bud Lefkof** recommends: "I'll apply a formatter on the code to make sure it's readable, then run static analysis tools like Spotbugs, PMD, or SonarQube — not to fix anything, but to get a feel for how quality the codebase is."

**Mike Richardson** advises: "After implementing many of the suggestions above, I would look into dockerizing the app if not done already. This makes it easier to do automated testing."

## Final Steps

**Kent Piland** suggests: "Investigate dependencies to see what is out of date and contains potential vulnerabilities."

The longer a codebase lies dormant, the more likely third-party or open-source library versions become obsolete. Until those dependencies are updated to actively maintained versions, the codebase cannot benefit from ongoing enhancements or bug fixes. More critically, the code may be exposed to common security vulnerabilities patched in later releases.

Depending on tooling used, teams frequently add automated checks that compare library versions against public common vulnerability and exposure (CVE) databases.

Watch out for our next Water Cooler Talk.
