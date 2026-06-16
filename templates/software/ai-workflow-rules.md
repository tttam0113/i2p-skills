# AI Workflow Rules

## Approach

Build this project incrementally using context-first, spec-driven development. Read the context files before implementation and keep changes scoped to the current unit.

## Read Order

Before making implementation or architecture changes, read:

1. `context/project-overview.md`
2. `context/architecture.md`
3. `context/code-standards.md`
4. `context/ai-workflow-rules.md`
5. `context/library-docs.md`
6. `context/build-plan.md`
7. `context/progress-tracker.md`

Read unit specs from `context/specs/` when working on a specific unit.

## Scoping Rules

- Work on one unit at a time.
- Do not implement behavior outside the current spec.
- Do not combine unrelated system boundaries in one change.
- Do not add dependencies unless the current unit needs them.

## Missing Requirements

- Do not invent product behavior.
- If a requirement affects scope, architecture, or user behavior, record it as an open question before implementing.
- If a small implementation detail is implied by existing patterns, follow the existing pattern and note the assumption.

## Protected Files

- [Files or paths that should not be edited without explicit instruction]

## Documentation Sync

Update the relevant context file when implementation changes:

- Product scope or flows.
- Architecture or boundaries.
- Code standards.
- Library usage.
- Build order or progress.

## Before Moving To The Next Unit

1. The current unit meets its acceptance criteria.
2. Verification commands or checks have run.
3. `context/progress-tracker.md` reflects the result.
4. Any changed architecture or standards are documented.
