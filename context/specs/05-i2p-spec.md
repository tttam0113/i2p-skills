# Unit 05: i2p-spec

## Goal

Implement the `i2p-spec` Codex skill so agents can turn one roadmap/build-plan unit into a decision-complete unit spec before implementation, drafting, or review work begins.

## Context

- **Product/profile:** Software project building a reusable Codex skill pack that also supports non-code products.
- **Roadmap source:** `context/build-plan.md`, Phase 3, unit 05.
- **Related context:** `context/project-overview.md`, `context/architecture.md`, `context/code-standards.md`, `context/ai-workflow-rules.md`, `context/library-docs.md`, `context/progress-tracker.md`, `docs/specs/i2p-skill-pack-spec.md`, `context/specs/03-i2p-brief.md`, and `context/specs/04-i2p-roadmap.md`.
- **Why this unit now:** `i2p-roadmap` is implemented and validated. `i2p-spec` is the next workflow dependency because implementation or drafting should start from a focused unit spec rather than from roadmap bullets alone.

## Scope

### In Scope

- Create the `skills/codex/i2p-spec/` skill folder using the system `skill-creator` guidance.
- Create `skills/codex/i2p-spec/SKILL.md` with concise progressive-disclosure instructions.
- Create `skills/codex/i2p-spec/agents/openai.yaml` with UI metadata aligned to the skill behavior.
- Add only unit-spec-related template assets needed by this skill, adapted from the existing top-level shared template.
- Support writing a spec for one software feature, UI screen, API endpoint set, integration pass, ebook chapter, course lesson, document section, visual/layout pass, or similar focused unit.
- Support both artifact profiles while using the shared output location `context/specs/NN-unit-name.md`.
- Include guidance for selecting the target unit from the active roadmap/build plan, resolving missing decisions, and keeping specs decision-complete.
- Include verification/review checklist guidance without duplicating Superpowers implementation, debugging, verification, or code-review workflows.
- Validate the finished skill with the Codex skill validation script.
- Update `context/progress-tracker.md` after implementation is complete.

### Out of Scope

- Do not implement `i2p-progress` or `i2p-style`.
- Do not implement the unit described by a generated spec; `i2p-spec` only prepares the specification artifact.
- Do not create or refresh briefs, roadmaps, progress trackers, or style guides except for narrow handoff notes when the spec reveals a required update.
- Do not run full software or non-code dry-run validation; those belong to Phase 4.
- Do not edit files under `references/`.
- Do not add scripts unless implementation proves deterministic generation is necessary.
- Do not add README, changelog, installation guide, or quick-reference files inside the skill folder.
- Do not duplicate Superpowers implementation planning, execution, debugging, verification, or review workflows.

## Requirements

### Functional or Content Requirements

- `SKILL.md` frontmatter must include only `name: i2p-spec` and a clear `description`.
- The description must trigger when Codex needs to create a unit spec, feature spec, chapter spec, lesson spec, section spec, design pass spec, decision-complete requirements artifact, or handoff spec before implementation or drafting.
- The skill body must tell the agent to read existing context before writing or changing artifacts, including:
  - `AGENTS.md` or `CLAUDE.md` when present.
  - Software `context/project-overview.md` and `context/build-plan.md` when present.
  - Non-code `context/brief.md` and `context/roadmap.md` when present.
  - `context/ui-tokens.md`, `context/ui-rules.md`, `context/ui-registry.md`, or `context/style.md` when style affects the unit.
  - Existing `context/specs/` files when numbering, naming, dependency, or precedent matters.
  - Existing progress file when present.
- The skill must choose the target unit from the active roadmap/build plan. If the user names a unit, use that unit; otherwise select the next unfinished unit from the active progress file or roadmap.
- The skill must write specs to `context/specs/NN-unit-name.md`, using zero-padded numbering that follows existing specs or the roadmap/build-plan unit number when available.
- The generated spec must include these sections:
  - Goal.
  - Context.
  - Scope.
  - Requirements.
  - Design or style notes.
  - Dependencies.
  - Acceptance criteria.
  - Verification and review.
  - Handoff notes.
- The spec must be decision-complete enough that a later implementation, drafting, or review agent does not need to guess scope, dependencies, acceptance criteria, or style constraints.
- The skill must distinguish software-specific requirements from content-specific requirements and omit irrelevant subsections in final generated specs when they add no value.
- For software units, the spec must identify architecture boundaries, affected files or areas when known, data/API behavior when relevant, validation and edge states, security or access rules, and test or verification expectations.
- For non-code units, the spec must identify audience outcome, core points, examples or exercises, source/citation needs, editorial constraints, and review expectations.
- The skill must surface missing decisions as concise questions before writing when the gap would make the spec ambiguous. If the gap can be safely bounded, record it as an explicit assumption in the spec.
- The skill must not leave unresolved placeholders such as `TODO`, `TBD`, or bracketed template instructions in generated specs.
- The skill must include progress-update guidance without replacing `i2p-progress`: if spec decisions or open questions affect future work and an active progress file exists, instruct the agent to update it; otherwise leave handoff notes.
- The skill must route reusable artifact structure into bundled templates instead of embedding long template content in `SKILL.md`.

### Software-Specific Requirements

- Follow the skill package shape from `context/architecture.md`: `SKILL.md`, `agents/openai.yaml`, `assets/templates/`, and optional `references/`.
- Use the existing top-level shared template as the source for the skill asset:
  - `templates/shared/unit-spec.md`
- Keep `SKILL.md` under 500 lines and use imperative, action-oriented instructions.
- Keep the implementation limited to `skills/codex/i2p-spec/` and any required progress update.
- For software specs, require acceptance criteria that can be verified through tests, builds, static checks, UI inspection, API calls, or documented review steps.
- For software specs, require explicit empty, loading, error, validation, permission, or edge states when relevant to the unit.
- Preserve the repository boundary that `references/` is raw source material and must not be edited.
- Avoid creating implementation behavior outside this skill's unit-spec responsibility.

### Content-Specific Requirements

- For non-code specs, use neutral product language such as chapter, lesson, section, asset, draft, edit, review, layout, source, claim, exercise, and example.
- For ebooks, courses, guides, documentation sets, and content systems, make the unit produce a reviewable content artifact or decision artifact.
- Capture source, citation, example, exercise, editorial, formatting, and review needs when the unit depends on them.
- Keep editorial style, visual style, and content registry work as handoffs to `i2p-style` unless the spec only needs to reference existing style guidance.
- Do not turn a content unit spec into the final chapter, lesson, or section draft.

## Design or Style Notes

- Use English for skill content, templates, frontmatter, and generated artifacts.
- Keep `SKILL.md` concise enough for progressive disclosure; prefer routing rules and quality checks over long explanations.
- Use software-profile names for programming projects and neutral names for non-code products.
- Use `context/specs/NN-unit-name.md` for both software and non-code profiles.
- Keep final generated specs concrete and implementation-ready, but avoid writing a full implementation plan inside the spec.
- Mention Superpowers only as a later handoff target for implementation, debugging, verification, or review; do not make those workflows part of `i2p-spec`.
- Do not leave final generated skill files with placeholder text such as `TODO`, `TBD`, or bracketed template instructions outside copied templates.

## Dependencies

- Phase 1 repository context must remain complete.
- Phase 2 shared templates must remain available at `templates/software/`, `templates/non-code/`, and `templates/shared/`.
- Unit 03 `i2p-brief` must remain implemented and validated because specs depend on brief artifacts.
- Unit 04 `i2p-roadmap` must remain implemented and validated because specs target roadmap/build-plan units.
- System `skill-creator` guidance must be used when creating the skill.
- Codex quick validation script must be available from the system skill creator tooling.
- `context/progress-tracker.md` must remain the active progress source for this repository.

## Acceptance Criteria

- [ ] `skills/codex/i2p-spec/SKILL.md` exists with valid frontmatter containing only `name` and `description`.
- [ ] `skills/codex/i2p-spec/agents/openai.yaml` exists and describes the skill consistently with `SKILL.md`.
- [ ] `skills/codex/i2p-spec/assets/templates/` contains only unit-spec-related templates needed by the skill.
- [ ] The skill clearly supports software and non-code unit specs.
- [ ] The skill clearly writes unit specs to `context/specs/NN-unit-name.md`.
- [ ] The skill tells the agent how to select the target unit from `context/build-plan.md`, `context/roadmap.md`, or the active progress file.
- [ ] The skill requires goal, context, scope, requirements, design or style notes, dependencies, acceptance criteria, verification/review, and handoff notes.
- [ ] The skill includes concrete decision-completeness checks and forbids unresolved placeholders in generated specs.
- [ ] The skill includes software-specific guidance without turning into implementation planning.
- [ ] The skill includes content-specific guidance without drafting the final content artifact.
- [ ] The skill includes progress-update guidance without replacing `i2p-progress`.
- [ ] The skill does not create or refresh roadmap, progress, or style artifacts except as narrow handoff notes.
- [ ] No files under `references/` are modified.
- [ ] Codex skill validation passes for `skills/codex/i2p-spec/`.
- [ ] `context/progress-tracker.md` records unit 05 completion and sets the next unit to `06 i2p-progress` after implementation.

## Verification and Review

### Plan Alignment

- [ ] The unit matches `context/build-plan.md` Phase 3 unit 05.
- [ ] The unit stays limited to `i2p-spec`.
- [ ] No progress, style, or Phase 4 dry-run validation work is added.
- [ ] The spec skill depends on `i2p-roadmap` output and hands off implementation or drafting to specialist workflows.

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

Before implementing, read the project context in the order required by `AGENTS.md`, then read the system `skill-creator` guidance. Implement only `skills/codex/i2p-spec/`. Initialize the skill with `init_skill.py`, add only `assets/templates/unit-spec.md` from `templates/shared/unit-spec.md`, write concise `SKILL.md` instructions, ensure `agents/openai.yaml` mentions `$i2p-spec` correctly, validate with `quick_validate.py`, and update `context/progress-tracker.md` when done. Leave `i2p-progress`, `i2p-style`, and full software/non-code dry runs for later build-plan units.
