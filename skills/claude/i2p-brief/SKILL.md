---
name: i2p-brief
description: Create or refresh product/project briefs and project context. Use when starting a new software or non-code product, onboarding an existing product into observed context, writing or updating context/project-overview.md or context/brief.md, or checking whether a new feature or content unit changes scope, audience, constraints, or key vocabulary before roadmap, spec, implementation, or drafting work.
---

Create or refresh the primary product brief before roadmap, spec, implementation, or drafting work begins. Keep this skill focused on product context: do not plan execution, debug, implement, or perform code review.

## Step 1 — Read Existing Context

Before doing anything, read what already exists. Prefer `AGENTS.md`, `CLAUDE.md`, and files under `context/` when they are present. A good brief starts from what is already known, not from a blank page.

## Step 2 — Choose the Mode

Identify which mode applies:

- **New product** — the product does not yet have a brief. Clarify and write the first one.
- **Existing product onboarding** — a product exists but has no brief. Inspect existing docs and files, then write observed context without inventing intent.
- **Feature or content-unit addition** — compare the request with the current brief and update only if scope, audience, constraints, success criteria, or key vocabulary changes.

If you are unsure which mode applies, ask one question to resolve it before continuing.

## Step 3 — Choose the Artifact Profile

- **Software** — write or refresh `context/project-overview.md`.
- **Non-code** (ebook, course, guide, document, content system) — write or refresh `context/brief.md`.

## Step 4 — Ask the Missing Questions

Ask only what is needed to make the brief decision-complete. Prefer one question at a time. Stop asking when the artifact can be written without guessing product intent.

For a **new product**, clarify the product idea, target audience, goals, scope, constraints, success criteria, and key terms before writing.

For an **existing-product onboarding**, label uncertain intent as an open question rather than stating it as fact. Do not infer business goals, target users, or constraints that are not supported by source material or user confirmation.

For a **feature or content-unit addition**, read the current brief first. If the request fits the existing product definition, say so and avoid unnecessary edits.

## Step 5 — Write the Artifact

Write the artifact using the template for the chosen profile (see **Templates** below). Follow these rules:

- Write concrete decisions. Do not leave `TBD`, `TODO`, or bracketed placeholder text in the final file.
- Use software vocabulary for software projects and neutral product language for ebooks, courses, guides, documents, and content systems.
- Keep source material under `references/` read-only unless the user explicitly asks to edit it.
- Preserve existing useful decisions and structure when refreshing a brief.
- Mention implementation only as a later handoff target.

## Step 6 — Update Progress

If decisions or open questions were discovered during this session, update the active progress file when it exists (`context/progress-tracker.md` for software, `context/progress.md` for non-code). If no progress file exists, include clear handoff notes in your response instead of creating unrelated memory files.

---

## Templates

### `context/project-overview.md` — Software Profile

```markdown
# [Project Name]

## Overview

[One concise paragraph describing what this software product does, who it is for, and what problem it solves.]

## Goals

1. [Specific, measurable goal]
2. [Specific, measurable goal]
3. [Specific, measurable goal]

## Target Users

- [Primary user group and core need]
- [Secondary user group if relevant]

## Core User Flow

1. [Step one]
2. [Step two]
3. [Step three]
4. [Continue until the core value is delivered]

## Features

### [Feature Category]

- [Feature]
- [Feature]

### [Feature Category]

- [Feature]
- [Feature]

## Scope

### In Scope

- [What will be built]
- [What will be built]

### Out of Scope

- [What will not be built]
- [What will not be built]

## Success Criteria

1. [Verifiable condition]
2. [Verifiable condition]
3. [Verifiable condition]

## Key Terms

| Term | Meaning |
| --- | --- |
| [Term] | [Project-specific definition] |
```

### `context/brief.md` — Non-Code Profile

```markdown
# [Product Name] Brief

## Overview

[One concise paragraph describing the product, audience, and outcome it should create.]

## Audience

- **Primary audience:** [Who this is for]
- **Current situation:** [What they know, feel, or struggle with now]
- **Desired outcome:** [What should change after using the product]

## Promise

[The clear value promise of this product.]

## Goals

1. [Specific goal]
2. [Specific goal]
3. [Specific goal]

## Reader/User Journey

1. [First experience or section]
2. [Next step]
3. [Next step]
4. [Final outcome]

## Content or Product Units

### [Unit Category]

- [Chapter/module/section/asset]
- [Chapter/module/section/asset]

### [Unit Category]

- [Chapter/module/section/asset]
- [Chapter/module/section/asset]

## Scope

### In Scope

- [What will be included]
- [What will be included]

### Out of Scope

- [What will not be included]
- [What will not be included]

## Success Criteria

1. [Reviewable condition]
2. [Reviewable condition]
3. [Reviewable condition]

## Key Terms

| Term | Meaning |
| --- | --- |
| [Term] | [Product-specific definition] |
```

---

Hand off roadmap work to `/i2p-roadmap` after the brief is complete.
