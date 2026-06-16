---
name: i2p-style
description: Create or update style systems for software UI and non-code products. Use when Codex needs to write or refresh context/ui-tokens.md, context/ui-rules.md, context/ui-registry.md, context/style.md, context/editorial-style.md, or context/layout-guide.md; audit existing visual/editorial patterns; capture product-language guidance; or imprint reusable UI/content patterns after a unit is built or drafted.
---

# i2p Style

Create or update style artifacts that keep future UI, content, and product language consistent. Keep this skill focused on style systems: do not implement UI, draft final content, execute plans, debug, verify code, or perform review workflows.

## Core Workflow

1. Read existing project instructions and context first. Prefer `AGENTS.md`, `CLAUDE.md`, and files under `context/` when they exist.
2. Choose the mode:
   - **New product style guide:** create baseline style guidance from the brief/project overview, audience, constraints, product type, and user preferences.
   - **Existing-product audit:** inspect available docs/files/components/content and record observed patterns, deviations, and fix candidates without inventing intent.
   - **Post-unit imprint:** update reusable rules or registry entries after a UI component, chapter, lesson, section, callout, checklist, layout, or repeated pattern is created.
3. Choose the artifact profile:
   - **Software:** write or refresh `context/ui-tokens.md`, `context/ui-rules.md`, and `context/ui-registry.md`.
   - **Non-code:** write or refresh `context/style.md`; add `context/editorial-style.md` or `context/layout-guide.md` when detailed editorial or layout rules would clutter the main style guide.
4. Read existing style artifacts before changing them. Preserve useful decisions and avoid replacing established patterns without a clear reason.
5. Ask only for missing style decisions that would make the artifact ambiguous. If an audit reveals uncertainty, record it as an open question or fix candidate.
6. Remove template placeholders from final generated style files. Do not leave `TBD`, `TODO`, or bracketed template instructions.
7. If style decisions, open questions, or audit findings affect future work, update the active progress file when it exists. If no progress file exists, include clear handoff notes instead of creating unrelated memory files.

## Mode Details

### New Product Style Guide

Create practical baseline guidance that future agents can apply directly. Prefer concrete tokens, vocabulary, examples, structural rules, and quality bars over abstract brand language.

### Existing-Product Audit

Inspect relevant product files, docs, UI components, or content samples. Record observed patterns as current style, and record deviations or inconsistencies as fix candidates. Do not rewrite product code or content as part of the audit.

### Post-Unit Imprint

Capture reusable patterns created during a completed unit. For software, update tokens, UI rules, or registry entries. For non-code products, update voice, vocabulary, section, callout, checklist, citation, or layout rules.

## Profile Guidance

### Software

Keep software style split across:

- `assets/templates/ui-tokens.md` for `context/ui-tokens.md`: visual tokens such as color, typography, spacing, radius, borders, and invariants.
- `assets/templates/ui-rules.md` for `context/ui-rules.md`: concise build rules for layout, components, typography, states, icons, media, and prohibited patterns.
- `assets/templates/ui-registry.md` for `context/ui-registry.md`: reusable component and pattern entries, including components to fix.

Do not implement UI or rewrite components. Identify patterns and deviations so later implementation work can use them.

### Non-Code

Use neutral product language. Capture tone, vocabulary, heading patterns, section patterns, callouts, examples, checklist style, source/citation rules, layout rules, and quality bar.

Use:

- `assets/templates/style.md` for `context/style.md` by default.
- `assets/templates/editorial-style.md` for `context/editorial-style.md` when voice, tone, language, and section rules need more detail.
- `assets/templates/layout-guide.md` for `context/layout-guide.md` when target format, typography, visual elements, tables/lists, or export checks need more detail.

Do not draft final chapters, lessons, sections, or marketing copy. Style artifacts guide later drafting and review.

## Templates

Use these assets as structure, not as final text:

- `assets/templates/ui-tokens.md`
- `assets/templates/ui-rules.md`
- `assets/templates/ui-registry.md`
- `assets/templates/style.md`
- `assets/templates/editorial-style.md`
- `assets/templates/layout-guide.md`

Hand off roadmap changes to `i2p-roadmap`, unit specs to `i2p-spec`, progress maintenance to `i2p-progress`, and implementation or drafting to the appropriate execution workflow.
