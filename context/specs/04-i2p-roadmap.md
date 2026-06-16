# Unit 04: i2p-roadmap

## Goal

Implement the `i2p-roadmap` Codex skill so agents can turn an existing product brief into ordered phases and focused build/content units before unit specs, implementation, or drafting begins.

## Context

- **Product/profile:** Software project building a reusable Codex skill pack that also supports non-code products.
- **Roadmap source:** `context/build-plan.md`, Phase 3, unit 04.
- **Related context:** `context/project-overview.md`, `context/architecture.md`, `context/code-standards.md`, `context/ai-workflow-rules.md`, `context/library-docs.md`, `context/progress-tracker.md`, `docs/specs/i2p-skill-pack-spec.md`, and `context/specs/03-i2p-brief.md`.
- **Why this unit now:** `i2p-brief` is implemented and validated. `i2p-roadmap` is the next dependency in the idea-to-product workflow because later `i2p-spec` work needs ordered roadmap units to target.

## Scope

### In Scope

- Create the `skills/codex/i2p-roadmap/` skill folder using the system `skill-creator` guidance.
- Create `skills/codex/i2p-roadmap/SKILL.md` with concise progressive-disclosure instructions.
- Create `skills/codex/i2p-roadmap/agents/openai.yaml` with UI metadata aligned to the skill behavior.
- Add only roadmap-related template assets needed by this skill, adapted from the existing top-level templates.
- Support three workflow modes: full roadmap for a new product, baseline roadmap for an existing product, and incremental roadmap for one feature/content unit or small related set.
- Support both artifact profiles:
  - Software profile writes or refreshes `context/build-plan.md`.
  - Non-code profile writes or refreshes `context/roadmap.md`.
- Include guidance for ordering dependencies, sizing units, and preserving scope boundaries.
- Validate the finished skill with the Codex skill validation script.
- Update `context/progress-tracker.md` after implementation is complete.

### Out of Scope

- Do not implement `i2p-spec`, `i2p-progress`, or `i2p-style`.
- Do not generate actual roadmap output for a sample product; full dry-run validation belongs to Phase 4.
- Do not create unit specs under `context/specs/`; `i2p-roadmap` may hand off to `i2p-spec` but must not own spec generation.
- Do not edit files under `references/`.
- Do not add scripts unless implementation proves deterministic generation is necessary.
- Do not add README, changelog, installation guide, or quick-reference files inside the skill folder.
- Do not duplicate Superpowers implementation planning, execution, debugging, verification, or review workflows.

## Requirements

### Functional or Content Requirements

- `SKILL.md` frontmatter must include only `name: i2p-roadmap` and a clear `description`.
- The description must trigger when Codex needs to create or refresh a build plan, roadmap, ordered phases, feature decomposition, content-unit plan, existing-product baseline roadmap, or incremental roadmap before specs or implementation.
- The skill body must tell the agent to read existing context before writing or changing artifacts, including:
  - `AGENTS.md` or `CLAUDE.md` when present.
  - `context/project-overview.md` for software products when present.
  - `context/brief.md` for non-code products when present.
  - Existing `context/build-plan.md` or `context/roadmap.md` when refreshing.
  - Existing progress file when present.
- The skill must choose the artifact profile from the project type:
  - Software projects use `context/build-plan.md` and `assets/templates/build-plan.md`.
  - Non-code products use `context/roadmap.md` and `assets/templates/roadmap.md`.
- Full roadmap mode must turn the brief into phases and numbered units covering the product path from first useful artifact to complete planned product.
- Existing-product baseline mode must inspect available docs/files and record an observed current-state roadmap without inventing unverified intent.
- Incremental roadmap mode must add or revise only the units required for one new feature, chapter, module, lesson, guide section, document asset, or tightly related set.
- Each roadmap unit must produce one visible or reviewable result.
- Each roadmap unit must include concrete `Build`/`Create` tasks and `Verify`/`Review` conditions, following the selected template vocabulary.
- Dependencies must be ordered before dependent units.
- Units must be sized for one focused implementation or drafting session.
- Units with no standalone visible or reviewable result must be merged with an adjacent unit.
- Units that cross unrelated boundaries must be split unless the user explicitly chooses a small vertical slice.
- If roadmap decisions or open questions are discovered and an active progress file exists, the skill must instruct the agent to update it. If no progress file exists, the skill must leave clear handoff notes instead of creating unrelated memory artifacts.
- The skill must route reusable artifact structure into bundled templates instead of embedding long template content in `SKILL.md`.

### Software-Specific Requirements

- Follow the skill package shape from `context/architecture.md`: `SKILL.md`, `agents/openai.yaml`, `assets/templates/`, and optional `references/`.
- Use existing top-level templates as the source for skill assets:
  - `templates/software/build-plan.md`
  - `templates/non-code/roadmap.md`
- Keep `SKILL.md` under 500 lines and use imperative, action-oriented instructions.
- For software roadmap units, prefer system boundaries that can be implemented and verified independently, such as UI shell, data model, API route set, integration wiring, or analytics pass.
- For software roadmap units, avoid combining unrelated UI, database, API, background work, and deployment concerns in one unit unless the result is an intentionally small vertical slice.
- For software roadmap units, order foundational dependencies before dependent behavior, such as context before roadmap, auth before protected features, schema before data writes, and UI shell before real-data wiring when that pattern fits the project.
- Preserve the repository boundary that `references/` is raw source material and must not be edited.
- Avoid creating implementation behavior outside this skill's roadmap responsibility.

### Content-Specific Requirements

- For non-code roadmap units, use neutral product language such as phase, unit, chapter, module, lesson, section, asset, draft, edit, review, and layout.
- For content products, avoid combining planning, drafting, editing, review, and layout in one unit unless the unit is intentionally small and reviewable in one session.
- For ebooks, courses, guides, documentation sets, and content systems, make each unit produce a reviewable content artifact or decision artifact.
- Capture source, citation, or research needs as roadmap tasks or review conditions when the brief indicates external claims or source-backed content.
- Keep editorial style, visual style, and content registry work as handoffs to `i2p-style` unless the roadmap only needs to schedule those units.

## Design or Style Notes

- Use English for skill content, templates, frontmatter, and generated artifacts.
- Keep `SKILL.md` concise enough for progressive disclosure; prefer mode routing and unit-quality rules over long explanations.
- Use software-profile names for programming projects and neutral names for non-code products.
- Use the terms `Build` and `Verify` for software `build-plan.md` output.
- Use the terms `Create` and `Review` for non-code `roadmap.md` output.
- Mention Superpowers only as a later handoff target for implementation, debugging, verification, or review; do not make those workflows part of `i2p-roadmap`.
- Do not leave final generated skill files with placeholder text such as `TODO`, `TBD`, or bracketed template instructions outside copied templates.

## Dependencies

- Phase 1 repository context must remain complete.
- Phase 2 shared templates must remain available at `templates/software/`, `templates/non-code/`, and `templates/shared/`.
- Unit 03 `i2p-brief` must remain implemented and validated because `i2p-roadmap` depends on brief artifacts.
- System `skill-creator` guidance must be used when creating the skill.
- Codex quick validation script must be available from the system skill creator tooling.
- `context/progress-tracker.md` must remain the active progress source for this repository.

## Acceptance Criteria

- [ ] `skills/codex/i2p-roadmap/SKILL.md` exists with valid frontmatter containing only `name` and `description`.
- [ ] `skills/codex/i2p-roadmap/agents/openai.yaml` exists and describes the skill consistently with `SKILL.md`.
- [ ] `skills/codex/i2p-roadmap/assets/templates/` contains only roadmap-related templates needed by the skill.
- [ ] The skill clearly supports full roadmap, existing-product baseline, and incremental roadmap modes.
- [ ] The skill clearly supports software `context/build-plan.md` and non-code `context/roadmap.md`.
- [ ] The skill includes explicit unit-quality rules for visible/reviewable results, dependency order, focused sizing, and boundary splitting.
- [ ] The skill includes progress-update guidance without replacing `i2p-progress`.
- [ ] The skill does not create or instruct creation of unit specs except as a handoff to `i2p-spec`.
- [ ] No files under `references/` are modified.
- [ ] Codex skill validation passes for `skills/codex/i2p-roadmap/`.
- [ ] `context/progress-tracker.md` records unit 04 completion and sets the next unit to `05 i2p-spec` after implementation.

## Verification and Review

### Plan Alignment

- [ ] The unit matches `context/build-plan.md` Phase 3 unit 04.
- [ ] The unit stays limited to `i2p-roadmap`.
- [ ] No spec, progress, style, or Phase 4 dry-run validation work is added.
- [ ] The roadmap skill depends on `i2p-brief` output and hands off to `i2p-spec` for unit specs.

### System or Style Integrity

- [ ] Software units respect architecture and code standards.
- [ ] Content units respect style, editorial, and source rules.
- [ ] Reusable patterns are recorded if needed.
- [ ] The skill follows `context/code-standards.md` skill naming, structure, frontmatter, and template rules.
- [ ] The skill follows `context/architecture.md` package boundaries.
- [ ] The skill keeps `SKILL.md` concise and uses bundled templates for reusable artifact structure.
- [ ] The implementation does not edit or reorganize `references/`.

### Production Readiness

- [ ] Error, empty, or edge states are handled where relevant.
- [ ] Sources, examples, or claims are reviewable where relevant.
- [ ] No unresolved placeholders remain.
- [ ] Progress can be updated clearly after completion.
- [ ] Validation output confirms the skill folder is structurally valid.
- [ ] The skill can be dry-read by an agent without requiring hidden project context.
- [ ] Copied templates remain intentionally placeholder-based assets, while final skill instructions contain no init-script boilerplate.

## Handoff Notes

Before implementing, read the project context in the order required by `AGENTS.md`, then read the system `skill-creator` guidance. Implement only `skills/codex/i2p-roadmap/`. Initialize the skill with `init_skill.py`, add only `assets/templates/build-plan.md` and `assets/templates/roadmap.md` from the existing top-level templates, write concise `SKILL.md` instructions, ensure `agents/openai.yaml` mentions `$i2p-roadmap` correctly, validate with `quick_validate.py`, and update `context/progress-tracker.md` when done. Leave full software and non-code dry runs for Phase 4.
