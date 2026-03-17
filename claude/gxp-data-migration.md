# Claude Code Prompt: GxP Clinical Data Migration Landing Page

## Task
Build a landing page for KSM Technology Partners' GxP Clinical Data Migration service offering. This is an Astro project. The page should be a single route at `/services/gxp-migration` (or equivalent path per existing project routing conventions).

---

## Tech Constraints
- **Framework:** Astro — use `.astro` components for all static content sections (no unnecessary React)
- **Interactivity:** Use a React island (`client:load`) only for the CTA contact/scheduling form if one exists, otherwise keep everything static
- **Styling:** Use whatever CSS approach is already established in the project (check existing pages for conventions — Tailwind, CSS modules, scoped `<style>` blocks, etc.)
- **Performance:** This page should ship zero or near-zero JS. Astro's default behavior handles this — don't add `client:*` directives unless necessary
- **Images:** Use the existing project's image handling conventions. Don't hardcode image paths that don't exist — use placeholder `<div>` blocks with comments indicating where screenshots/graphics go

---

## Brand & Design
- **Colors:** KSM Blue `#3C9DCC`, Mid Blue `#6DAED6`, Pale Blue `#B2D1EA`, Charcoal Gray `#4D4D4D`, Dark Navy `#1A3A52`, Warm Amber `#E8A020`, Off-White `#F7F5F0`
- **Tone:** Direct, technically credible, no buzzwords. Speak to someone who will be in front of an auditor, not their manager.
- **Typography:** Match existing project conventions. If no convention exists, use a clean serif or semi-serif for headlines, sans-serif for body.
- **Visual style:** Clean, professional, whitespace-generous. B2B pharma audience — not flashy, but not generic either.

---

## Page Structure

Build the page in this exact section order:

---

### Section 1: Hero
**Purpose:** Establish tension immediately. Answer "what is this and why should I care" in under 5 seconds.

```
Headline (H1):
  Moving content is the easy part.

Subheadline:
  In a GxP environment, regulatory requirements run through every decision —
  every transfer, every access control choice, every deviation from the plan.
  Most teams don't underestimate the technical complexity. They underestimate
  what GxP adds to it.

CTA Button (primary):
  "Schedule a Scoping Workshop"
  [links to #contact or mailto or existing contact mechanism in the project]

Trust line (below button):
  Delivered at multiple top-10 pharma companies.
```

**Layout:** Full-width section, headline large and dominant. CTA button in KSM Blue. Trust line in muted gray, small.

---

### Section 2: Where GxP Complexity Lives
**Purpose:** Make the visitor nod. Name their specific fears before offering a solution.

```
Section heading (H2):
  Where GxP complexity lives in data migration

Four cards in a 2x2 grid:

  Card 1 — Data Mapping
  Legacy-to-target translation must be solved before you move a single byte —
  for code, data, and structure.

  Card 2 — Auditability
  Can you prove things changed only when and how you said?
  Transparency is required from start to finish.

  Card 3 — Access Control
  Not a post-migration task. Unauthorized access to study data
  is a regulatory event.

  Card 4 — Documentation
  A plan before, a report after, and a deviation record. Every pharma defines
  their own requirements — does your migration process support them?
```

**Layout:** 2x2 card grid with light blue (`#B2D1EA`) card backgrounds, dark navy headings, gray body text. Icon placeholder per card (document, shield, lock, checklist — or leave as comment for designer).

---

### Section 3: Credibility
**Purpose:** Establish authority before explaining the solution. Anxiety peaks before understanding — address it early.

```
Pull quote / callout block:
  "We've run this at multiple top-10 pharma companies."

  Data migration in regulated life sciences is a deep practice —
  not a side capability.

Insight callout (styled differently — e.g. bordered left accent in Amber):
  "The technical challenges are solvable. Derailments are almost always
  in planning, mapping, and governance — not execution."
```

**Layout:** Full-width section with slightly off-white background (`#F7F5F0`). Large quote treatment. Amber left-border accent on the insight callout.

---

### Section 4: Our Approach — Controlled, Not Big Bang
**Purpose:** Explain the methodology. Directly addresses the fear that migration will disrupt active studies.

```
Section heading (H2):
  Controlled. Not big bang.

Intro paragraph:
  We break the migration into executable, governable units — study-level
  groupings with discrete ownership, independent state, and safe retry.
  Active studies don't get disrupted. Cutover happens in managed waves.

Four feature items (can be horizontal row or 2x2):

  Migration Units
  Study-level or equivalent groupings with clear ownership and status.

  Per-Unit State
  Each unit tracks its own state independently — safely retryable
  without affecting completed work.

  Controlled Cutover
  Managed transitions in waves, not a single high-risk switchover.

  Bounded Scope
  Clearly defined operational limits at every stage.
```

---

### Section 5: Purpose-Built Tooling (KMT)
**Purpose:** Differentiate. This is not a generic ETL shop.

```
Section heading (H2):
  Purpose-built tooling for regulated data migration into Domino.

Intro:
  The KSM Migration Toolkit (KMT) was built specifically for the challenges
  of migrating clinical data into modern platforms like Domino.
  This is not a generic ETL tool adapted for this use case. It was designed for it.

Three capability blocks:

  Infrastructure-as-code execution
  Via Terraform — deterministic, repeatable, peer-reviewed before it
  touches target systems.

  Native Domino connector
  Provisions organizations, projects, volumes, access controls, and
  syncpoints as code.

  Git-managed configuration
  Every change is traceable, reviewable, and auditable.

[IMAGE PLACEHOLDER: Lineage graph screenshot — dark background showing job/dataset graph]
Caption: Every job. Every dataset. Every transfer. Connected in a navigable,
auditable graph — built during the migration, not reconstructed afterward.
```

**Layout:** Left side: text + capability blocks. Right side: image placeholder with caption. On mobile, stacked.

---

### Section 6: Audit Trail
**Purpose:** Close the regulatory anxiety loop. Show that documentation is a byproduct of execution, not a post-hoc scramble.

```
Section heading (H2):
  Your auditor gets evidence, not assurances.

Subhead:
  Documentation as a byproduct of execution — not assembled after the fact.

Four items (icon + label + description):

  Timestamped Events
  Every step emits a lineage event with a unique run ID —
  source to staging, staging to target.

  Auto-attached Results
  Validation results, checksums, and row counts automatically
  attached to the lineage record.

  Built During Execution
  A complete audit trail — not reconstructed from logs.

  Deviation Records
  When expected outcomes aren't met, it's captured and traceable.
```

---

### Section 7: How an Engagement Unfolds
**Purpose:** Remove uncertainty about next steps. Show a clear, low-risk entry point.

```
Section heading (H2):
  How an engagement unfolds.

Four-phase vertical or horizontal timeline:

  Phase 1 — Scoping Workshop
  Data volumes, study types, source systems, regulatory constraints.
  Output: a clear picture of what you're migrating, and when.

  Phase 2 — Mapping Exercise
  Translate legacy model to target structure.
  Output: validated mapping spec and migration unit definitions.

  Phase 3 — Pilot Migration
  Execute first wave end-to-end. Produce first real validation package.
  Resolve edge cases.

  Phase 4 — Migration at Scale
  Controlled waves with cutover management, lineage visibility,
  and audit-ready documentation throughout.
```

**Layout:** Numbered timeline. Phase numbers in KSM Blue circles. Clean, readable. This section should feel like a process, not a sales pitch.

---

### Section 8: CTA (Bottom)
**Purpose:** Final conversion. Reinforce the low-commitment entry point.

```
Heading:
  Every successful migration starts with understanding what you're migrating.

Body:
  The Scoping Workshop is a structured, low-commitment first step. We assess
  your data volumes, study types, source system landscape, and regulatory
  constraints — and you leave with a migration you can execute with confidence.

Primary CTA button:
  "Schedule a Scoping Workshop"

Secondary link:
  "See how an engagement unfolds →" [anchor link to Section 7]
```

**Layout:** Centered, full-width section. KSM Blue background with white text and button. Clean and final-feeling.

---

## SEO Requirements

Add to the page's `<head>` (via Astro's `<head>` slot or layout):

```html
<title>GxP Clinical Data Migration | KSM Technology Partners</title>
<meta name="description" content="Purpose-built clinical data migration for regulated pharma environments. Audit-ready lineage, access controls, and tooling built for GxP from the ground up." />
```

- H1 must be: "Moving content is the easy part." (or use "GxP Clinical Data Migration" as the SEO H1 if the project uses a separate visible H1 pattern — check conventions)
- H2s follow the section headings listed above
- Page should be statically rendered at build time (Astro default — confirm SSR is not enabled for this route)

---

## Component Notes

- Check if the project has existing shared components for: section wrappers, CTA buttons, card grids, page headers. Use them if they exist — don't reinvent.
- Check the existing layout file and use it for the page wrapper (nav, footer, etc.)
- If a contact form component exists in the project, use it for the CTA sections. If not, use a `mailto:` link as a fallback and leave a `TODO` comment.

---

## Files to Create/Modify

- `src/pages/services/gxp-migration.astro` (or match existing routing pattern)
- Any new component files under `src/components/` if needed
- Do NOT modify global styles, layouts, or shared components — only extend or consume them

---

## Definition of Done

- Page renders without errors in `astro dev`
- All 8 sections present with correct copy
- Page is fully static (no hydration warnings)
- Mobile layout is reasonable (no overflow, readable text)
- CTA button links somewhere (form, mailto, or `#contact`)
- SEO meta tags present in `<head>`