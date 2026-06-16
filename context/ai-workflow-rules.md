# AI Workflow Rules

## Approach

Build this repository incrementally using context-first, spec-driven development. The active context files define the current project state. The design spec explains why the project exists and what the final skill pack should do.

## Read Order

Before implementation or architecture changes, read:

1. `context/project-overview.md`
2. `context/architecture.md`
3. `context/code-standards.md`
4. `context/ai-workflow-rules.md`
5. `context/library-docs.md`
6. `context/build-plan.md`
7. `context/progress-tracker.md`
8. `docs/specs/i2p-skill-pack-spec.md`

Read files under `references/` only when they are relevant to the current unit.

## Scoping Rules

- Work on one build-plan unit at a time.
- Do not create skill folders until the context setup unit is complete.
- Do not combine context setup, skill scaffolding, skill authoring, and validation in one change.
- Do not add implementation behavior beyond what the current unit requires.

## Reference Boundaries

- Treat `references/` as source material.
- Do not edit, format, rename, or reorganize files under `references/` unless explicitly asked.
- When extracting ideas from `references/`, rewrite them into active context or skill resources instead of modifying the source.

## Missing Requirements

- If a requirement affects skill behavior, artifact names, or workflow boundaries, record it in `context/progress-tracker.md` as an open question or decision before implementing.
- If the current context conflicts with `docs/specs/i2p-skill-pack-spec.md`, stop and resolve the context/spec mismatch before proceeding.

## Documentation Sync

Update active context when decisions change:

- Product scope -> `context/project-overview.md`
- Repo or skill boundaries -> `context/architecture.md`
- Authoring conventions -> `context/code-standards.md`
- Workflow rules -> `context/ai-workflow-rules.md`
- Roadmap/order -> `context/build-plan.md`
- Current state -> `context/progress-tracker.md`

## Before Moving To The Next Unit

1. The current unit's expected files exist.
2. `AGENTS.md` and `CLAUDE.md` still point to the correct active context.
3. `context/progress-tracker.md` reflects completed and next work.
4. `references/` remains unchanged unless explicitly requested.
