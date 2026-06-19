---
name: i2p-spec
description: Write decision-complete unit specs before implementation, drafting, or review. Use when Codex needs to create context/specs/NN-unit-name.md, write a feature spec, UI screen spec, API endpoint spec, integration spec, ebook chapter spec, course lesson spec, document section spec, design/layout pass spec, or clarify acceptance criteria and handoff notes for one roadmap/build-plan unit.
---

# i2p Spec

Turn one roadmap or build-plan unit into a decision-complete spec. Keep this skill focused on the specification artifact: do not implement, draft the final content, execute plans, debug, or perform review workflows.

## Core Workflow

1. Read existing project instructions and context first. Prefer `AGENTS.md`, `CLAUDE.md`, and files under `context/` when they exist.
2. Confirm there is a unit source:
   - Software: prefer `context/build-plan.md` plus `context/project-overview.md`.
   - Non-code: prefer `context/roadmap.md` plus `context/brief.md`.
   - If no roadmap/build plan exists, ask for the missing unit context or hand off to `i2p-roadmap`.
3. Select exactly one target unit:
   - Use the unit named by the user when provided.
   - Otherwise use the next unfinished unit from `context/progress-tracker.md`, `context/progress.md`, `context/build-plan.md`, or `context/roadmap.md`.
4. Read relevant style context when it affects the unit:
   - Software: `context/ui-tokens.md`, `context/ui-rules.md`, and `context/ui-registry.md`.
   - Non-code: `context/style.md` or `context/editorial-style.md`.
   - For UI screen specs, use `i2p-style` first if no UI direction exists and layout, hierarchy, or component patterns would otherwise be guessed.
5. Check existing `context/specs/` files for numbering, naming, dependencies, and precedent.
6. Ask concise questions before writing if a missing decision would make scope, behavior, acceptance criteria, or style ambiguous. If the gap can be safely bounded, record it as an explicit assumption.
7. Write the spec to `context/specs/NN-unit-name.md` using `assets/templates/unit-spec.md` as structure.
8. Remove template placeholders from final generated specs. Do not leave `TBD`, `TODO`, or bracketed template instructions.
9. If spec decisions or open questions affect future work, update the active progress file when it exists. If no progress file exists, include clear handoff notes in the response instead of creating unrelated memory files.

## Spec Quality Rules

- Make the spec concrete enough that a later implementation, drafting, or review agent does not need to guess scope, dependencies, acceptance criteria, or style constraints.
- Keep the spec narrower than an implementation plan. Include what must be true and how to verify it, not step-by-step coding or drafting instructions.
- Include these sections in final specs: Goal, Context, Scope, Requirements, Design or Style Notes, Dependencies, Acceptance Criteria, Verification and Review, and Handoff Notes.
- Omit irrelevant software-only or content-only subsections when they add no value.
- Record assumptions explicitly when they shape scope or acceptance.
- Keep `references/` read-only unless the user explicitly asks to edit source material.

## Software Unit Guidance

For software specs, identify the architecture boundary and affected areas when known. Cover data/API behavior, validation, empty/loading/error states, permissions or security rules, and test or verification expectations when relevant.

For UI screen specs, include a textual wireframe section with regions, hierarchy, primary and secondary actions, data shown, interaction states, responsive behavior, and style references. Do not create image mockups or implement UI in the spec.

Acceptance criteria should be verifiable through tests, builds, static checks, UI inspection, API calls, or documented review steps. Hand off implementation, debugging, verification, or code review to Superpowers or another specialist workflow after the spec is written.

## Non-Code Unit Guidance

For non-code specs, use neutral product language such as chapter, lesson, section, asset, draft, edit, review, layout, source, claim, exercise, and example.

Identify the audience outcome, core points, examples or exercises, source/citation needs, editorial constraints, formatting rules, and review expectations when relevant. Do not draft the final chapter, lesson, or section; write the spec that guides that later work.

## Templates

Use this asset as structure, not as final text:

- `assets/templates/unit-spec.md` for `context/specs/NN-unit-name.md`.

Hand off roadmap changes to `i2p-roadmap`, progress maintenance to `i2p-progress`, style-system work to `i2p-style`, and implementation or drafting to the appropriate execution workflow.
