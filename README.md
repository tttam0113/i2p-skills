# i2p Skill Pack

`i2p-*` is a Codex skill pack for turning a product idea into clear planning artifacts before execution starts. It supports both software projects and non-code products such as ebooks, courses, guides, documentation sets, and content systems.

The pack keeps the "idea to product" workflow explicit: brief, roadmap, unit specs, progress memory, and style context. Future Codex sessions can resume from those artifacts instead of reconstructing intent from scratch.

The Vietnamese version of this README is available at `README.vi.md`.

## Skill Inventory

The pack includes five skills:

| Skill | Purpose | Primary artifact |
| --- | --- | --- |
| `i2p-brief` | Create or refresh the product/project brief | `context/project-overview.md` or `context/brief.md` |
| `i2p-roadmap` | Turn the brief into an ordered roadmap/build plan | `context/build-plan.md` or `context/roadmap.md` |
| `i2p-spec` | Write a decision-complete spec for one unit | `context/specs/NN-unit-name.md` |
| `i2p-progress` | Record progress, decisions, open questions, and resume notes | `context/progress-tracker.md` or `context/progress.md` |
| `i2p-style` | Create or update UI, editorial, layout, or product-language style systems | `context/ui-*.md`, `context/style.md`, `context/editorial-style.md` |

## When To Use

Use `i2p-*` when you want to:

- Start a new product from a vague idea.
- Onboard an existing project into explicit context so Codex can understand the current state.
- Break a product into roadmaps, phases, units, chapters, lessons, or modules.
- Write a spec for a feature, UI screen, API group, ebook chapter, course lesson, document section, or design/layout pass.
- Update progress so a later Codex session can resume accurately.
- Capture UI style, editorial style, layout rules, vocabulary, component registry entries, or reusable content patterns.

Do not use `i2p-*` as a replacement for implementation, debugging, verification, or code review workflows. Once the brief, roadmap, and spec are clear, hand execution off to Superpowers or another specialist skill.

## Quick Workflow

### New Product

1. Run `i2p-brief` to clarify the idea, audience, scope, constraints, and success criteria.
2. Run `i2p-style` if the product needs UI, editorial voice, formatting, or visual consistency. For software without design assets, use it to create baseline UI direction before roadmap/spec work.
3. Run `i2p-roadmap` to create ordered phases and units.
4. Run `i2p-spec` for the first unit, including wireframe sections for UI screen units.
5. Execute with Superpowers or another specialist skill.
6. Run `i2p-progress` after each meaningful result.

### Existing Product

1. Run `i2p-brief` in existing-product onboarding mode to inspect docs/files and write observed context.
2. Run `i2p-style` audit mode if the product has UI, formatting, or content patterns.
3. Run `i2p-roadmap` to record current state and next units.
4. Run `i2p-progress` to create or update the progress source of truth.

### Feature Or Content-Unit Addition

1. Read the existing context.
2. Run `i2p-brief` if the request changes scope, audience, constraints, success criteria, or vocabulary.
3. Run `i2p-style` first when the new UI or layout area lacks established visual direction.
4. Run `i2p-roadmap` if the work needs to be split into multiple units.
5. Run `i2p-spec` for the next target unit.
6. After execution, run `i2p-progress` and `i2p-style` if there are durable changes to record.

### Software Product With No Design Assets

Use this flow when the user has a software idea but no existing visual design, wireframes, or screenshots:

```text
i2p-brief -> i2p-style -> i2p-roadmap -> i2p-spec -> execution
```

`i2p-style` creates textual UI direction: visual feel, navigation model, layout density, screen archetypes, component baseline, and state rules. `i2p-spec` then turns that direction into per-screen wireframe specs with regions, hierarchy, actions, data shown, states, and responsive notes.

Actual UI drafts, image mockups, prototypes, and implementation should be handled by an execution or frontend workflow after the spec is clear.

## Artifact Profiles

### Software Profile

Use this profile for software projects. Default artifacts:

```text
context/project-overview.md
context/architecture.md
context/code-standards.md
context/ai-workflow-rules.md
context/ui-tokens.md
context/ui-rules.md
context/ui-registry.md
context/library-docs.md
context/build-plan.md
context/progress-tracker.md
context/specs/NN-unit-name.md
```

### Non-Code Profile

Use this profile for ebooks, courses, guides, documentation sets, content systems, and other non-code products:

```text
context/brief.md
context/roadmap.md
context/progress.md
context/style.md
context/specs/NN-unit-name.md
```

Optional additions:

```text
context/editorial-style.md
context/source-notes.md
context/review-checklist.md
context/layout-guide.md
```

## Skill Guide

### `i2p-brief`

Use this skill to create or refresh the primary brief before roadmap, spec, implementation, or drafting work.

Main modes:

- **New product:** clarify the idea, audience, goals, scope, constraints, success criteria, and key terms.
- **Existing product onboarding:** inspect existing docs/files and write observed context without inventing intent.
- **Feature/content-unit addition:** compare the request against the current brief and update only when it changes scope, audience, constraints, success criteria, or vocabulary.

Example prompts:

```text
Use i2p-brief to create context for a new SaaS product idea: ...
```

```text
Use i2p-brief to onboard this existing repository and write observed project context.
```

Primary output:

- Software: `context/project-overview.md`
- Non-code: `context/brief.md`
- May update the active progress file when decisions or open questions are discovered.

### `i2p-roadmap`

Use this skill when a brief exists and you need an ordered roadmap or build plan.

Main modes:

- **Full roadmap:** create a roadmap for a new product.
- **Existing-product baseline:** record observed current state and next units from existing docs/files.
- **Incremental roadmap:** add or revise only the units needed for one feature, chapter, module, lesson, section, or asset set.

Example prompts:

```text
Use i2p-roadmap to turn the current brief into a software build plan.
```

```text
Use i2p-roadmap to add roadmap units for chapter 3 of this ebook.
```

Primary output:

- Software: `context/build-plan.md`
- Non-code: `context/roadmap.md`

A good unit produces one visible or reviewable result, is small enough for one focused session, and is ordered after its dependencies.

### `i2p-spec`

Use this skill to write a spec for exactly one roadmap/build-plan unit before execution starts.

The spec should clarify:

- Goal
- Context
- Scope
- Requirements
- Design or Style Notes
- Dependencies
- Acceptance Criteria
- Verification and Review
- Handoff Notes

Example prompts:

```text
Use i2p-spec to write the spec for build-plan unit 03.
```

```text
Use i2p-spec to create a chapter spec for "Safety Mindset" from the roadmap.
```

Primary output:

```text
context/specs/NN-unit-name.md
```

`i2p-spec` does not implement code and does not draft final content. It creates a spec clear enough that a later execution agent does not need to guess scope, acceptance criteria, dependencies, or style constraints.

For UI screen units, `i2p-spec` should include a textual wireframe section: screen purpose, regions, hierarchy, primary and secondary actions, data shown, states, responsive notes, and style references.

### `i2p-progress`

Use this skill after meaningful work to keep project memory accurate and concise.

Record:

- Current phase/status
- Last completed work
- Work in progress
- Next work
- Decisions
- Open questions
- Resume-critical session notes
- Reset notes when a session or approach went wrong

Example prompts:

```text
Use i2p-progress to update the project tracker after completing unit 04.
```

```text
Use i2p-progress to record this decision and the next unfinished unit.
```

Primary output:

- Software: `context/progress-tracker.md`
- Non-code: `context/progress.md`

Important rule: never store secrets, credentials, tokens, private keys, cookies, auth headers, connection strings, or credential-like values in progress files.

### `i2p-style`

Use this skill to create or update a style system for UI, editorial style, product language, layout, or repeated patterns.

Main modes:

- **New product style guide:** create baseline style guidance from the brief, audience, constraints, and product type.
- **New product UI direction:** when no design assets exist, define visual direction, navigation/layout model, component baseline, screen archetypes, and state rules that screen specs can use.
- **Existing-product audit:** inspect existing UI/content and record patterns, deviations, and fix candidates.
- **Post-unit imprint:** after a component, chapter, lesson, callout, checklist, layout, or repeated pattern is created, update style artifacts so the pattern can be reused.

Example prompts:

```text
Use i2p-style to create UI style context for this software product.
```

```text
Use i2p-style to audit the editorial style of this ebook draft.
```

Primary output:

- Software:
  - `context/ui-tokens.md`
  - `context/ui-rules.md`
  - `context/ui-registry.md`
- Non-code:
  - `context/style.md`
  - `context/editorial-style.md`
  - `context/layout-guide.md`

`i2p-style` does not implement UI, create image mockups, or draft final content. It records style rules, UI direction, wireframe-ready guidance, patterns, vocabulary, registry entries, and audit findings.

## Installation

### Install From GitHub With npx

Install the skills directly from the public GitHub repository:

```bash
npx github:tttam0113/i2p-skills install --target codex
```

```bash
npx github:tttam0113/i2p-skills install --target claude
```

Install both Codex and Claude skill variants:

```bash
npx github:tttam0113/i2p-skills install --target all
```

These commands install from the public GitHub repository.

The installer copies skill folders into:

- Codex: `$CODEX_HOME/skills` when `CODEX_HOME` is set, otherwise `~/.codex/skills`
- Claude: `$CLAUDE_HOME/skills` when `CLAUDE_HOME` is set, otherwise `~/.claude/skills`

Useful options:

```bash
npx github:tttam0113/i2p-skills install --target codex --dry-run
npx github:tttam0113/i2p-skills install --target claude --force
npx github:tttam0113/i2p-skills install --target codex --dest /custom/skills/path
```

Restart Codex or Claude after install so the new skills are discovered.

### Update Existing Install

If the `i2p-*` skills are already installed, run the installer again with `--force` to overwrite the existing skill folders.

Preview the update without writing files:

```bash
npx github:tttam0113/i2p-skills install --target all --dry-run
```

Update Codex only:

```bash
npx github:tttam0113/i2p-skills install --target codex --force
```

Update Claude only:

```bash
npx github:tttam0113/i2p-skills install --target claude --force
```

Update both Codex and Claude:

```bash
npx github:tttam0113/i2p-skills install --target all --force
```

Restart Codex or Claude after updating so the latest skill instructions are loaded.

### Manual Install

Codex skills are located at:

In this repository, the skills are located at:

```text
skills/codex/
```

Each skill follows this shape:

```text
skills/codex/<skill-name>/
|-- SKILL.md
|-- agents/
|   `-- openai.yaml
|-- assets/
|   `-- templates/
`-- references/
```

To use the pack in Codex, copy or install the folders from `skills/codex/` into the Codex skill location configured for your environment. Once the skills are discovered, call them by name:

```text
Use i2p-brief to create a product brief for ...
Use i2p-roadmap to build the roadmap from the current brief.
Use i2p-spec for the next roadmap unit.
Use i2p-progress to update project memory.
Use i2p-style to capture UI direction and editorial style rules.
```

Claude skills are located at:

```text
skills/claude/
```

## Validation

This skill pack has been validated according to the project tracker:

- Static validation passed for all five skills.
- A software dry run completed with the product idea "Decision Log Lite".
- A non-code dry run completed with the ebook idea "Cam nang lai xe an toan".
- The dry runs found no concrete skill defects.

Before publishing or changing the skills, run:

- Codex skill validation for each skill folder.
- One software dry run.
- One non-code dry run.
- A check that generated artifacts do not contain leftover placeholders such as `TBD`, `TODO`, or bracketed template text.

## Repository Layout

```text
/
|-- AGENTS.md
|-- CLAUDE.md
|-- context/
|-- docs/
|   `-- specs/
|-- dry-runs/
|-- bin/
|   `-- i2p-skills.mjs
|-- references/
|-- skills/
|   |-- codex/
|   `-- claude/
|-- test/
|   `-- i2p-skills-cli.test.mjs
|-- package.json
`-- templates/
```

`context/` is the active source of truth for this repository. `references/` contains raw source material and should not be edited unless explicitly requested.

## Design Boundary

`i2p-*` owns product thinking and planning artifacts:

- Brief
- Roadmap
- Unit spec
- Progress memory
- Style system

Implementation, debugging, verification, and code review should be handed off to Superpowers or the relevant specialist workflow.
