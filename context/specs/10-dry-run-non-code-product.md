# Unit 10: Dry Run - Non-Code Product

## Goal

Dry-run the complete `i2p-*` workflow against the ebook idea "Cam nang lai xe an toan" to confirm the skill pack supports non-code products with neutral artifact names, editorial style guidance, chapter/unit planning, progress tracking, and decision-complete unit specs.

## Context

- **Product/profile:** Software project building a reusable Codex skill pack that also supports non-code products.
- **Roadmap source:** `context/build-plan.md`, Phase 4, unit 10.
- **Related context:** `context/project-overview.md`, `context/architecture.md`, `context/code-standards.md`, `context/ai-workflow-rules.md`, `context/library-docs.md`, `context/progress-tracker.md`, `docs/specs/i2p-skill-pack-spec.md`, and all `skills/codex/i2p-*` folders.
- **Why this unit now:** Static validation and software dry-run validation should already be complete. The final validation unit verifies that the same five skills work for a non-code product without forcing software vocabulary or implementation assumptions.

## Scope

### In Scope

- Dry-run the skill pack on ebook idea "Cam nang lai xe an toan".
- Use the non-code artifact profile and neutral product language.
- Exercise these skills in non-code profile:
  - `i2p-brief`
  - `i2p-style`
  - `i2p-roadmap`
  - `i2p-spec`
  - `i2p-progress`
- Confirm generated artifacts include brief, roadmap, chapter/unit spec, progress file, and editorial style guidance.
- Review generated artifacts for audience clarity, scope, chapter roadmap quality, source/citation expectations, style consistency, and handoff quality.
- Record findings and update this repository's `context/progress-tracker.md` after the dry run is complete.

### Out of Scope

- Do not write the full ebook.
- Do not perform full external research for driving safety claims.
- Do not publish, format, or export the ebook.
- Do not overwrite this repository's active `context/` files with dry-run artifacts.
- Do not edit files under `references/`.
- Do not create software-profile artifacts for this non-code product.

## Requirements

### Functional or Content Requirements

- Generate or simulate non-code profile artifacts expected by the skill pack:
  - `context/brief.md`
  - `context/roadmap.md`
  - `context/specs/NN-unit-name.md`
  - `context/progress.md`
  - `context/style.md`
  - `context/editorial-style.md` or `context/layout-guide.md` when useful.
- Confirm the brief defines audience, scope, goals, constraints, success criteria, and key terms for the ebook.
- Confirm the roadmap decomposes the ebook into reviewable chapters, sections, or content units.
- Confirm the first chapter/unit spec includes audience outcome, core points, examples or exercises, source/citation needs, editorial constraints, acceptance criteria, and review checklist.
- Confirm progress captures current status, completed work, next work, decisions, open questions, and useful notes without secrets.
- Confirm style guidance covers tone, vocabulary, heading patterns, section patterns, callouts, examples, checklist style, citations/source rules, layout rules, and quality bar when relevant.
- Confirm generated artifacts use neutral non-code vocabulary instead of software-specific terms.
- Identify any skill behavior gaps, unclear instructions, or missing templates.
- If a concrete skill defect is found, fix only that defect, rerun the relevant part of the dry run, and record the result.

### Content-Specific Requirements

- Treat "Cam nang lai xe an toan" as an ebook product, not a software product.
- Avoid unsupported safety claims; record source or citation needs where claims require verification.
- Do not draft final chapters beyond small illustrative snippets needed to validate style or structure.
- Keep dry-run artifacts isolated from this repository's active `context/`.
- Preserve `references/` as read-only source material.

## Design or Style Notes

- Use neutral artifact names and product/content vocabulary.
- Prefer practical editorial guidance over generic writing advice.
- Make source/citation expectations explicit because driving safety content can include factual claims.

## Dependencies

- Unit 08 Static Skill Validation should be complete.
- Unit 09 Dry Run - Software Product should be complete.
- All five skill folders must be present and structurally valid.
- `context/progress-tracker.md` must remain the active progress source for this repository.

## Acceptance Criteria

- [ ] The ebook dry-run uses idea "Cam nang lai xe an toan".
- [ ] The dry run exercises all five `i2p-*` skills in the intended workflow order.
- [ ] Generated artifacts use non-code profile names.
- [ ] The generated brief defines audience, scope, goals, constraints, success criteria, and key terms.
- [ ] The generated roadmap decomposes the ebook into reviewable units.
- [ ] The first unit spec is decision-complete for drafting or review.
- [ ] The generated progress file preserves useful continuity without secrets.
- [ ] The generated style guidance is practical for editorial consistency.
- [ ] Any concrete skill defects found during the dry run are fixed and rechecked.
- [ ] This repository's active `context/` is not overwritten by dry-run artifacts.
- [ ] `context/progress-tracker.md` records unit 10 completion and indicates the validation phase is complete.

## Verification and Review

### Plan Alignment

- [ ] The unit matches `context/build-plan.md` Phase 4 unit 10.
- [ ] The unit stays limited to non-code dry-run validation.
- [ ] No software dry-run or static validation work is repeated except when needed to recheck a concrete fix.

### System or Style Integrity

- [ ] Non-code artifacts respect the neutral naming profile.
- [ ] Content artifacts respect style, editorial, and source rules.
- [ ] Dry-run artifacts do not pollute this repository's active context.

### Production Readiness

- [ ] Generated artifacts do not require drafting decisions to be guessed later.
- [ ] Sources, examples, or claims are reviewable where relevant.
- [ ] No unresolved placeholders remain in reviewed dry-run artifacts.
- [ ] Progress can be updated clearly after completion.

## Handoff Notes

Before executing, complete units 08 and 09 first. Create an isolated dry-run location outside this repo's active `context/` path, run the workflow on ebook idea "Cam nang lai xe an toan", inspect the generated artifacts against the acceptance criteria, fix only concrete skill defects if found, and update `context/progress-tracker.md` when done.
