---
name: i2p-spec
description: Write decision-complete unit specs before implementation, drafting, or review. Use when creating context/specs/NN-unit-name.md, writing a feature spec, UI screen spec, API endpoint spec, integration spec, ebook chapter spec, course lesson spec, document section spec, design/layout pass spec, or clarifying acceptance criteria and handoff notes for one roadmap or build-plan unit.
---

Turn one roadmap or build-plan unit into a decision-complete spec. Keep this skill focused on the specification artifact: do not implement, draft the final content, execute plans, debug, or perform review workflows.

## Step 1 — Read Existing Context

Read `AGENTS.md`, `CLAUDE.md`, and files under `context/` when they exist. Confirm the roadmap source exists before proceeding.

- Software: prefer `context/build-plan.md` plus `context/project-overview.md`.
- Non-code: prefer `context/roadmap.md` plus `context/brief.md`.

If no roadmap or build plan exists, say so and hand off to `/i2p-roadmap` instead of guessing the unit context.

## Step 2 — Select the Target Unit

- Use the unit named by the user when provided.
- Otherwise use the next unfinished unit from `context/progress-tracker.md`, `context/progress.md`, `context/build-plan.md`, or `context/roadmap.md`, in that priority order.

Read relevant style context when it affects the unit:

- Software: `context/ui-tokens.md`, `context/ui-rules.md`, and `context/ui-registry.md`.
- Non-code: `context/style.md` or `context/editorial-style.md`.

Check existing `context/specs/` files for numbering, naming conventions, dependencies, and precedent.

## Step 3 — Resolve Ambiguity

Ask concise questions before writing if a missing decision would make scope, behavior, acceptance criteria, or style ambiguous. If a gap can be safely bounded, record it as an explicit assumption rather than stopping to ask. Keep questions minimal — one at a time if needed.

## Step 4 — Write the Spec

Write the spec to `context/specs/NN-unit-name.md` using the template below. Follow these quality rules:

- Make the spec concrete enough that a later implementation, drafting, or review agent does not need to guess scope, dependencies, acceptance criteria, or style constraints.
- Keep the spec narrower than an implementation plan. Include what must be true and how to verify it — not step-by-step coding or drafting instructions.
- Record assumptions explicitly when they shape scope or acceptance.
- Remove all template placeholder text (`TBD`, `TODO`, bracketed instructions) from the final file.
- Keep `references/` read-only unless the user explicitly asks to edit source material.

**Software unit guidance:** Identify the architecture boundary and affected areas. Cover data/API behavior, validation, empty/loading/error states, permissions or security rules, and test or verification expectations when relevant. Acceptance criteria should be verifiable through tests, builds, static checks, UI inspection, API calls, or documented review steps.

**Non-code unit guidance:** Use neutral product language (chapter, lesson, section, asset, draft, edit, review, layout, source, claim, exercise). Identify the audience outcome, core points, examples or exercises, source/citation needs, editorial constraints, formatting rules, and review expectations. Do not draft the final chapter, lesson, or section — write the spec that guides that later work.

## Step 5 — Update Progress

If spec decisions or open questions affect future work, update the active progress file when it exists. If no progress file exists, include clear handoff notes in your response.

---

## Templates

### `context/specs/NN-unit-name.md`

```markdown
# Unit NN: [Unit Name]

## Goal

[One or two sentences describing the concrete result this unit must produce.]

## Context

- **Product/profile:** [Software or non-code]
- **Roadmap source:** [Path to build-plan.md or roadmap.md]
- **Related context:** [Relevant context files]
- **Why this unit now:** [Dependency or sequencing reason]

## Scope

### In Scope

- [What this unit must include]
- [What this unit must include]

### Out of Scope

- [What this unit must not include]
- [What this unit must not include]

## Requirements

### Functional or Content Requirements

- [Requirement]
- [Requirement]
- [Requirement]

### Software-Specific Requirements

Use this section only for software units.

- [Architecture boundary]
- [API/data behavior]
- [State, validation, or error behavior]
- [Security or access rule]

### Content-Specific Requirements

Use this section only for non-code units.

- [Audience outcome]
- [Core points to cover]
- [Examples or exercises]
- [Source or citation needs]

## Design or Style Notes

- [UI, visual, editorial, or formatting rule]
- [Pattern to follow from style context]
- [Consistency note]

## Dependencies

- [Existing unit, file, source, package, or decision needed first]

## Acceptance Criteria

- [ ] [Concrete condition]
- [ ] [Concrete condition]
- [ ] [Concrete condition]

## Verification and Review

### Plan Alignment

- [ ] The unit matches the roadmap/build-plan item.
- [ ] The unit stays within scope.
- [ ] No unplanned behavior or content was added.

### System or Style Integrity

- [ ] Software units respect architecture and code standards.
- [ ] Content units respect style, editorial, and source rules.
- [ ] Reusable patterns are recorded if needed.

### Production Readiness

- [ ] Error, empty, or edge states are handled where relevant.
- [ ] Sources, examples, or claims are reviewable where relevant.
- [ ] No unresolved placeholders remain.
- [ ] Progress can be updated clearly after completion.

## Handoff Notes

[Instructions for the implementation, drafting, review, or verification agent. Include what to read first and where to update progress when done.]
```

---

Hand off roadmap changes to `/i2p-roadmap`, progress maintenance to `/i2p-progress`, style-system work to `/i2p-style`, and implementation or drafting to the appropriate execution workflow.
