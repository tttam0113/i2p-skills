# Unit 08: Static Skill Validation

## Goal

Validate all five `i2p-*` skill folders statically so the skill pack has correct structure, frontmatter, naming, UI metadata, and intentional bundled resources before dry-run workflow validation begins.

## Context

- **Product/profile:** Software project building a reusable Codex skill pack that also supports non-code products.
- **Roadmap source:** `context/build-plan.md`, Phase 4, unit 08.
- **Related context:** `context/project-overview.md`, `context/architecture.md`, `context/code-standards.md`, `context/ai-workflow-rules.md`, `context/library-docs.md`, `context/progress-tracker.md`, `docs/specs/i2p-skill-pack-spec.md`, and `context/specs/03-i2p-brief.md` through `context/specs/07-i2p-style.md`.
- **Why this unit now:** All five planned skills are implemented and individually validated during implementation. Phase 4 starts by re-validating the full pack as a complete set before running workflow dry-runs.

## Scope

### In Scope

- Validate these skill folders with the Codex quick validation script:
  - `skills/codex/i2p-brief/`
  - `skills/codex/i2p-roadmap/`
  - `skills/codex/i2p-spec/`
  - `skills/codex/i2p-progress/`
  - `skills/codex/i2p-style/`
- Check each `SKILL.md` frontmatter includes only `name` and `description`.
- Check each skill name matches its folder and uses valid lowercase hyphen-case.
- Check each `agents/openai.yaml` exists and references the correct `$i2p-*` skill in `default_prompt`.
- Check bundled resources are intentional and limited to assets/templates needed by each skill.
- Scan final skill instruction files for scaffold leftovers such as init-script TODO text.
- Update `context/progress-tracker.md` after validation is complete.

### Out of Scope

- Do not run software or non-code dry-run scenarios; those belong to units 09 and 10.
- Do not rewrite skill behavior unless validation or scaffold checks reveal a concrete defect.
- Do not edit files under `references/`.
- Do not create new skills or new templates.
- Do not package, publish, or install the skill pack.
- Do not replace the Codex validation script with custom validation tooling.

## Requirements

### Functional or Content Requirements

- Run the Codex skill validation script against every `skills/codex/i2p-*` folder.
- Record validation failures exactly enough that they can be fixed without rerunning discovery.
- Fix only defects that block validation or contradict the active specs.
- Confirm every `agents/openai.yaml` has:
  - A human-facing `display_name`.
  - A concise `short_description`.
  - A `default_prompt` that includes the correct `$i2p-*` skill name.
- Confirm every skill has only resources that support its responsibility:
  - `i2p-brief`: brief templates only.
  - `i2p-roadmap`: roadmap/build-plan templates only.
  - `i2p-spec`: unit-spec template only.
  - `i2p-progress`: progress templates only.
  - `i2p-style`: style/UI/editorial/layout templates only.
- Scan skill files for scaffold phrases such as `[TODO`, `Structuring This Skill`, `Use -`, and init-script boilerplate.
- If fixes are required, rerun validation and scans after the fixes.
- Update `context/progress-tracker.md` only after all static validation checks pass.

### Software-Specific Requirements

- Use the existing validation script from the system `skill-creator` tooling.
- Keep any fixes limited to skill folders and progress tracker updates.
- Preserve the repository boundary that `references/` is raw source material and must not be edited.
- Do not mark Phase 4 complete; only mark unit 08 complete after this unit's validation criteria pass.

## Design or Style Notes

- Keep validation notes concise and factual.
- Prefer one clear validation result per skill over verbose logs in progress.
- Do not store full command output in progress unless a failure needs later debugging.

## Dependencies

- Units 03 through 07 must remain implemented.
- All five skill folders must exist under `skills/codex/`.
- Codex quick validation script must be available from the system skill creator tooling.
- `context/progress-tracker.md` must remain the active progress source for this repository.

## Acceptance Criteria

- [ ] Codex quick validation passes for all five `skills/codex/i2p-*` folders.
- [ ] Each `SKILL.md` has valid frontmatter containing only `name` and `description`.
- [ ] Each skill folder name matches its `name`.
- [ ] Each `agents/openai.yaml` exists and mentions the correct `$i2p-*` skill in `default_prompt`.
- [ ] No init-script scaffold text remains in final skill instruction files.
- [ ] Bundled resources are limited to intentional skill assets.
- [ ] No files under `references/` are modified.
- [ ] `context/progress-tracker.md` records unit 08 completion and sets the next unit to `09 Dry Run - Software Product`.

## Verification and Review

### Plan Alignment

- [ ] The unit matches `context/build-plan.md` Phase 4 unit 08.
- [ ] The unit stays limited to static validation.
- [ ] No software or non-code dry-run validation was added.

### System or Style Integrity

- [ ] Skills respect `context/code-standards.md` naming, frontmatter, structure, and template rules.
- [ ] Skill resources match `context/architecture.md` package boundaries.
- [ ] `references/` remains unchanged.

### Production Readiness

- [ ] Validation output confirms all skill folders are structurally valid.
- [ ] Any validation fixes were rechecked.
- [ ] Progress can be updated clearly after completion.

## Handoff Notes

Before executing, read the project context in the order required by `AGENTS.md`. Run the system `skill-creator` quick validation script for every skill folder, inspect `agents/openai.yaml` files for correct `$i2p-*` prompts, scan for scaffold leftovers, fix only concrete defects, rerun validation, and update `context/progress-tracker.md` when all checks pass. Leave dry-run validation for units 09 and 10.
