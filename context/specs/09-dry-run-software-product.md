# Unit 09: Dry Run - Software Product

## Goal

Dry-run the complete `i2p-*` workflow against one software product idea to confirm the skill pack can generate coherent software planning artifacts from brief through roadmap, first unit spec, progress, and style context.

## Context

- **Product/profile:** Software project building a reusable Codex skill pack that also supports non-code products.
- **Roadmap source:** `context/build-plan.md`, Phase 4, unit 09.
- **Related context:** `context/project-overview.md`, `context/architecture.md`, `context/code-standards.md`, `context/ai-workflow-rules.md`, `context/library-docs.md`, `context/progress-tracker.md`, `docs/specs/i2p-skill-pack-spec.md`, and all `skills/codex/i2p-*` folders.
- **Why this unit now:** Static validation should confirm all skill folders are structurally valid. The next risk is whether the skills work together as a software planning workflow without forcing later agents to guess missing implementation decisions.

## Scope

### In Scope

- Choose or define one small software product idea suitable for a dry run.
- Run the `i2p-*` workflow conceptually or in an isolated dry-run workspace so generated artifacts do not overwrite this repository's active context.
- Exercise these skills in software profile:
  - `i2p-brief`
  - `i2p-style`
  - `i2p-roadmap`
  - `i2p-spec`
  - `i2p-progress`
- Confirm generated software artifacts include a project overview, architecture/code context where appropriate, build plan, first unit spec, progress tracker, and style context.
- Review generated artifacts for coherence, correct software-profile naming, decision completeness, and handoff quality.
- Record findings and update this repository's `context/progress-tracker.md` after the dry run is complete.

### Out of Scope

- Do not implement the dry-run product.
- Do not publish or install the skill pack.
- Do not run the non-code ebook dry run; that belongs to unit 10.
- Do not overwrite this repository's active `context/` files with dry-run artifacts.
- Do not edit files under `references/`.
- Do not treat dry-run generated artifacts as source material for this repository unless a concrete skill defect is found.

## Requirements

### Functional or Content Requirements

- Use one focused software product idea with enough detail to exercise brief, roadmap, spec, progress, and style behavior.
- Generate or simulate the software profile artifacts expected by the skill pack:
  - `context/project-overview.md`
  - `context/architecture.md` or equivalent observed architecture notes when appropriate.
  - `context/code-standards.md` or equivalent code-context notes when appropriate.
  - `context/build-plan.md`
  - `context/specs/NN-unit-name.md`
  - `context/progress-tracker.md`
  - `context/ui-tokens.md`
  - `context/ui-rules.md`
  - `context/ui-registry.md`
- Confirm roadmap units are dependency ordered and sized for focused implementation.
- Confirm the first unit spec includes goal, context, scope, requirements, style notes, dependencies, acceptance criteria, verification/review checklist, and handoff notes.
- Confirm progress records current phase, completed work, next work, decisions, open questions, and useful notes without secrets.
- Confirm style artifacts provide reusable software UI guidance rather than abstract brand prose.
- Identify any skill behavior gaps, unclear instructions, or missing templates.
- If a concrete skill defect is found, fix only that defect, rerun the relevant part of the dry run, and record the result.

### Software-Specific Requirements

- Use software-profile artifact names from `docs/specs/i2p-skill-pack-spec.md`.
- Keep dry-run artifacts isolated from this repository's active `context/`.
- Do not add implementation code for the sample product.
- Preserve `references/` as read-only source material.

## Design or Style Notes

- Use English for dry-run artifacts.
- Keep the dry-run product small enough to evaluate quickly but realistic enough to expose workflow gaps.
- Prefer concrete artifact review over subjective impressions.

## Dependencies

- Unit 08 Static Skill Validation should be complete.
- All five skill folders must be present and structurally valid.
- `context/progress-tracker.md` must remain the active progress source for this repository.

## Acceptance Criteria

- [ ] A software dry-run product idea is documented.
- [ ] The dry run exercises all five `i2p-*` skills in the intended workflow order.
- [ ] Generated artifacts use software-profile names.
- [ ] The generated roadmap is ordered and implementation-sized.
- [ ] The first unit spec is decision-complete.
- [ ] The generated progress tracker preserves useful continuity without secrets.
- [ ] The generated style context is practical for future UI work.
- [ ] Any concrete skill defects found during the dry run are fixed and rechecked.
- [ ] This repository's active `context/` is not overwritten by dry-run artifacts.
- [ ] `context/progress-tracker.md` records unit 09 completion and sets the next unit to `10 Dry Run - Non-Code Product`.

## Verification and Review

### Plan Alignment

- [ ] The unit matches `context/build-plan.md` Phase 4 unit 09.
- [ ] The unit stays limited to software dry-run validation.
- [ ] The non-code ebook dry run is left for unit 10.

### System or Style Integrity

- [ ] Software artifacts respect the software naming profile.
- [ ] Dry-run artifacts do not pollute this repository's active context.
- [ ] Skill fixes, if any, stay scoped to concrete dry-run findings.

### Production Readiness

- [ ] Generated artifacts do not require implementation decisions to be guessed later.
- [ ] No unresolved placeholders remain in reviewed dry-run artifacts.
- [ ] Progress can be updated clearly after completion.

## Handoff Notes

Before executing, complete unit 08 first. Create an isolated dry-run location outside this repo's active `context/` path, run the workflow on a small software product idea, inspect the generated artifacts against the acceptance criteria, fix only concrete skill defects if found, and update `context/progress-tracker.md` when done. Leave the ebook dry run for unit 10.
