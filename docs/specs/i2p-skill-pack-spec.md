# i2p Skill Pack Spec

## Summary

The `i2p-*` skill pack is a hybrid Codex skill and template system for turning an idea into product-ready planning artifacts. It supports both software products and non-code products such as ebooks, courses, guides, documentation sets, and content systems.

The pack complements Superpowers instead of replacing it. `i2p-*` handles brief, roadmap, unit specs, progress tracking, and style consistency. Superpowers or other specialist skills handle implementation planning, coding, debugging, verification, and review.

## Goals

- Create a reusable workflow for moving from vague idea to decision-complete product artifacts.
- Support greenfield projects, existing project onboarding, and incremental feature or content-unit additions.
- Keep project memory explicit so future agent sessions can resume without reconstructing context.
- Work for software and non-code products without forcing software-specific vocabulary onto every artifact.
- Keep skills concise and modular, with templates and examples loaded only when needed.

## Skill Inventory

### `i2p-brief`

Creates or refreshes the product/project brief.

Modes:

- New product: clarify idea, audience, goals, scope, success criteria, constraints, and key terms.
- Existing product: inspect available docs/files and produce an observed brief without inventing intent.
- New feature/content unit: check whether the request fits the current brief and record any scope changes.

Primary artifacts:

- Software profile: `context/project-overview.md`
- Non-code profile: `context/brief.md`
- Updates to the active progress file when decisions or open questions are found.

Source influences:

- `architect`: vocabulary alignment and key decision surfacing.
- Six-file methodology: project overview and scope discipline.

### `i2p-roadmap`

Turns a brief into an ordered roadmap of phases and build/content units.

Modes:

- Full roadmap for a new product.
- Baseline roadmap for an existing product based on current state.
- Incremental roadmap for one new feature, chapter, module, or asset set.

Primary artifacts:

- Software profile: `context/build-plan.md`
- Non-code profile: `context/roadmap.md`
- Optional unit specs under `context/specs/`.

Rules:

- Each unit must produce a visible or reviewable result.
- Units must be small enough for one focused implementation or drafting session.
- Dependencies must be ordered before dependent units.
- For software, avoid combining unrelated system boundaries in one unit.
- For content products, avoid combining planning, drafting, editing, and layout in one unit unless the unit is intentionally small.

### `i2p-spec`

Writes a decision-complete spec for one roadmap unit.

Unit examples:

- Software feature.
- UI screen.
- API endpoint set.
- Ebook chapter.
- Course lesson.
- Document section.
- Visual/layout pass.

Primary artifacts:

- `context/specs/NN-unit-name.md`

Required spec sections:

- Goal.
- Context.
- Scope.
- Requirements.
- Design or style notes.
- Dependencies.
- Acceptance criteria.
- Verification/review checklist.

Source influences:

- `review`: plan alignment, system/style integrity, and production/readiness checklist.
- Starter kit build plan: unit-by-unit visible progress.

### `i2p-progress`

Maintains the project memory source of truth.

Primary artifact:

- Software profile: `context/progress-tracker.md`
- Non-code profile: `context/progress.md`

Responsibilities:

- Track current phase, current unit, completed work, next work, open questions, and decisions.
- Record session notes only when they affect future work.
- Capture reset notes when a session or approach goes wrong.
- Never persist secrets, credentials, tokens, private keys, cookies, auth headers, or connection strings.

Source influences:

- `remember`: save/restore discipline and secret boundary.
- `recover`: failure modes and reset note format.

Decision:

- Do not create `memory.md` by default. The progress file is the single source of truth for project memory: `context/progress-tracker.md` for software projects, `context/progress.md` for non-code products.

### `i2p-style`

Creates and maintains style consistency for visual, editorial, and product-language systems.

Modes:

- New product style guide.
- Existing product style audit.
- Post-unit imprint after a UI component, chapter, lesson, or repeated pattern is created.

Primary artifacts:

- Software profile: `context/ui-tokens.md`, `context/ui-rules.md`, and `context/ui-registry.md`
- Non-code profile: `context/style.md` or `context/editorial-style.md`

Source influences:

- `imprint`: capture reusable UI patterns and audit inconsistencies.
- Starter kit UI files: tokens, rules, registry split.

For software products, capture:

- Tokens, typography, colors, spacing, borders, component patterns, interaction states, and registry entries.

For content products, capture:

- Tone, vocabulary, heading patterns, section patterns, callouts, examples, checklist style, citations, layout rules, and formatting conventions.

## Artifact Profiles

The skill pack supports two naming profiles. Prefer the software profile for programming projects because it matches the starter kit and keeps familiar engineering vocabulary. Use the non-code profile for ebooks, courses, guides, documentation products, and other content artifacts.

### Software Profile

Default software context:

- `context/project-overview.md`
- `context/architecture.md`
- `context/code-standards.md`
- `context/ai-workflow-rules.md`
- `context/ui-tokens.md`
- `context/ui-rules.md`
- `context/ui-registry.md`
- `context/library-docs.md`
- `context/build-plan.md`
- `context/progress-tracker.md`
- `context/specs/NN-unit-name.md`

### Non-Code Profile

Default non-code context:

- `context/brief.md`
- `context/roadmap.md`
- `context/progress.md`
- `context/style.md`
- `context/specs/NN-unit-name.md`

Non-code products may add:

- `context/editorial-style.md`
- `context/source-notes.md`
- `context/review-checklist.md`
- `context/layout-guide.md`

Root entrypoints:

- `AGENTS.md` for Codex.
- `CLAUDE.md` for Claude Code compatibility.

## Supported Workflows

### New Product

1. Run `i2p-brief` to clarify the idea and create the brief.
2. Run `i2p-style` if visual/editorial style matters.
3. Run `i2p-roadmap` to create ordered units.
4. Run `i2p-spec` for the first unit.
5. Hand off implementation or drafting to Superpowers or another specialist skill.
6. Run `i2p-progress` after each meaningful result.

### Existing Product Onboarding

1. Run `i2p-brief` in existing-product mode to inspect current docs/files and write an observed brief.
2. Run `i2p-style` audit mode if the product has UI, formatting, or editorial patterns.
3. Run `i2p-roadmap` to record current state and next units.
4. Run `i2p-progress` to create the starting progress record.

### Feature or Content-Unit Addition

1. Read current context.
2. Run `i2p-brief` only if the request changes product scope, audience, constraints, or terms.
3. Run `i2p-roadmap` for feature-level decomposition if the work spans multiple units.
4. Run `i2p-spec` for the next unit.
5. Hand off implementation or drafting.
6. Run `i2p-progress` and `i2p-style` as needed after completion.

## Repository Layout

Planned layout:

```text
/
|-- AGENTS.md
|-- CLAUDE.md
|-- docs/
|   `-- specs/
|       `-- i2p-skill-pack-spec.md
|-- skills/
|   `-- codex/
|       |-- i2p-brief/
|       |-- i2p-roadmap/
|       |-- i2p-spec/
|       |-- i2p-progress/
|       `-- i2p-style/
`-- references/
    |-- Six-File-Context-Methodology/
    |-- ai_development_starter_kit/
    `-- skills-main/
```

## Implementation Notes

- Initialize each skill with the Codex `skill-creator` tooling.
- Each skill must include `SKILL.md` and `agents/openai.yaml`.
- Keep every `SKILL.md` concise and action-oriented.
- Put reusable templates in `assets/templates/`.
- Put longer design rationale or examples in `references/`.
- Do not include extra README, changelog, or installation docs inside individual skill folders.

## Validation Plan

Static validation:

- Run Codex skill validation for all five skills.
- Check skill names are lowercase hyphen-case and under 64 characters.
- Check frontmatter includes only required `name` and `description` fields.
- Check descriptions include clear trigger conditions.

Dry-run validation:

- Run the workflow on a software idea and confirm it creates a brief, roadmap, first unit spec, progress file, and style context.
- Run the workflow on a non-code product idea: ebook "Cam nang lai xe an toan".
- Confirm the ebook flow creates audience, scope, chapter roadmap, chapter spec, progress tracking, and editorial style guidance.

Acceptance:

- A future Codex agent can read the generated artifacts and continue without asking basic context questions.
- The skill pack does not duplicate Superpowers implementation, debugging, verification, or review workflows.
- The same five skills work for both software and content products.
