---
name: i2p-brief
description: Create or refresh product/project briefs and project context. Use when starting a new software or non-code product, onboarding an existing product into observed context, writing or updating context/project-overview.md or context/brief.md, or checking whether a new feature/content unit changes scope, audience, constraints, or key vocabulary before roadmap, spec, implementation, or drafting work.
---

# i2p Brief

Create or refresh the primary product brief before roadmap, spec, implementation, or drafting work begins. Keep this skill focused on product context: do not plan execution, debug, implement, or perform code review.

## Core Workflow

1. Read existing project instructions and context first. Prefer `AGENTS.md`, `CLAUDE.md`, and files under `context/` when they exist.
2. Choose the mode:
   - **New product:** clarify and write the first brief.
   - **Existing product onboarding:** inspect existing docs/files and write observed context without inventing intent.
   - **Feature/content-unit addition:** compare the request with the current brief and update only if scope, audience, constraints, success criteria, or vocabulary changes.
3. Choose the artifact profile:
   - **Software:** write or refresh `context/project-overview.md` using `assets/templates/project-overview.md`.
   - **Non-code:** write or refresh `context/brief.md` using `assets/templates/brief.md`.
4. Ask only the missing questions needed to make the brief decision-complete. Prefer one question at a time when user input is required.
5. Write concise artifacts with concrete decisions. Do not leave placeholders such as `TBD`, `TODO`, or bracketed template text in final generated files.
6. If decisions or open questions are discovered, update the active progress file when it exists: `context/progress-tracker.md` for software or `context/progress.md` for non-code. If no progress file exists, include clear handoff notes in the response instead of creating unrelated memory files.

## Mode Details

### New Product

Clarify the product idea, target audience, goals, scope, constraints, success criteria, and key terms before writing the brief. Keep the result broad enough to guide roadmap work but specific enough that later agents do not need to guess product intent.

### Existing Product Onboarding

Inspect available docs, repository structure, current artifacts, and visible conventions. Label uncertain intent as an open question. Do not infer business goals, target users, or constraints that are not supported by source material or user confirmation.

### Feature or Content-Unit Addition

Read the current brief first. If the request fits the existing product definition, say so and avoid unnecessary edits. If it changes product scope, audience, constraints, success criteria, or key vocabulary, update the brief narrowly and record the decision or open question.

## Artifact Rules

- Use English for generated brief artifacts unless the user explicitly requests another language.
- Preserve existing useful decisions and structure when refreshing a brief.
- Keep source material under `references/` read-only unless the user explicitly asks to edit it.
- Use software vocabulary for software projects and neutral product language for ebooks, courses, guides, documents, and content systems.
- Mention implementation only as a later handoff target, such as Superpowers or another specialist skill.

## Templates

Use these assets as structure, not as final text:

- `assets/templates/project-overview.md` for software `context/project-overview.md`.
- `assets/templates/brief.md` for non-code `context/brief.md`.
