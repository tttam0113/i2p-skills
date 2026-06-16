# Unit 03: i2p-brief

## Goal

Implement the `i2p-brief` Codex skill so agents can create or refresh the primary product/project brief for software and non-code products before roadmap or implementation work begins.

## Context

- **Product/profile:** Software project building a reusable Codex skill pack.
- **Roadmap source:** `context/build-plan.md`, Phase 3, unit 03.
- **Related context:** `context/project-overview.md`, `context/architecture.md`, `context/code-standards.md`, `context/ai-workflow-rules.md`, `context/library-docs.md`, `docs/specs/i2p-skill-pack-spec.md`.
- **Why this unit now:** Phase 2 shared templates are complete, and `i2p-brief` is the first skill dependency for the rest of the idea-to-product workflow.

## Scope

### In Scope

- Create the `skills/codex/i2p-brief/` skill folder using the system `skill-creator` guidance.
- Create `skills/codex/i2p-brief/SKILL.md` with concise progressive-disclosure instructions.
- Create `skills/codex/i2p-brief/agents/openai.yaml` with metadata aligned to the skill behavior.
- Add only the template assets needed by `i2p-brief`, adapted from the existing top-level templates.
- Support three workflow modes: new product, existing product onboarding, and feature/content-unit addition.
- Support both software and non-code artifact profiles.
- Validate the finished skill with the Codex skill validation script.
- Update `context/progress-tracker.md` after implementation is complete.

### Out of Scope

- Do not implement `i2p-roadmap`, `i2p-spec`, `i2p-progress`, or `i2p-style`.
- Do not run full software or non-code dry-run validation; those belong to Phase 4.
- Do not edit files under `references/`.
- Do not add scripts unless the implementation proves deterministic generation is necessary.
- Do not add README, changelog, installation guide, or quick-reference files inside the skill folder.
- Do not duplicate Superpowers implementation, debugging, verification, or review workflows.

## Requirements

### Functional or Content Requirements

- `SKILL.md` frontmatter must include only `name: i2p-brief` and a clear `description` that triggers for creating or refreshing product briefs, project context, existing-product observed briefs, and scope checks for new features or content units.
- The skill body must tell the agent to read existing context before writing or changing artifacts.
- The skill must choose the artifact profile from the project type:
  - Software profile writes or refreshes `context/project-overview.md`.
  - Non-code profile writes or refreshes `context/brief.md`.
- New product mode must clarify idea, audience, goals, scope, constraints, success criteria, and key terms before writing the brief.
- Existing product mode must inspect available docs and files, then write observed context without inventing intent.
- Feature/content-unit mode must check whether the request changes product scope, audience, constraints, or vocabulary before changing the brief.
- If decisions or open questions are discovered and an active progress file exists, the skill must instruct the agent to update it. If no progress file exists, the skill must leave clear handoff notes instead of creating an unrelated memory artifact.
- The skill must route longer examples, checklists, or template details into bundled assets or references instead of embedding long content in `SKILL.md`.

### Software-Specific Requirements

- Follow the skill package shape from `context/architecture.md`: `SKILL.md`, `agents/openai.yaml`, `assets/templates/`, and optional `references/`.
- Use existing top-level templates as the source for skill assets:
  - `templates/software/project-overview.md`
  - `templates/non-code/brief.md`
- Keep `SKILL.md` under 500 lines and use imperative, action-oriented instructions.
- Preserve the repository boundary that `references/` is raw source material and must not be edited.
- Avoid creating implementation behavior outside this skill's brief/context responsibility.

## Design or Style Notes

- Use English for skill content, templates, frontmatter, and generated artifacts.
- Keep instructions concise enough for Codex progressive disclosure.
- Prefer explicit mode routing over long explanatory prose.
- Use neutral product language for non-code products and software-profile names for programming projects.
- Mention Superpowers only as a handoff target for later implementation, not as behavior owned by `i2p-brief`.

## Dependencies

- Phase 1 repository context must remain complete.
- Phase 2 shared templates must remain available at `templates/software/`, `templates/non-code/`, and `templates/shared/`.
- System `skill-creator` guidance must be used when creating the skill.
- Codex quick validation script must be available from the system skill creator tooling.

## Acceptance Criteria

- [ ] `skills/codex/i2p-brief/SKILL.md` exists with valid frontmatter containing only `name` and `description`.
- [ ] `skills/codex/i2p-brief/agents/openai.yaml` exists and describes the skill consistently with `SKILL.md`.
- [ ] `skills/codex/i2p-brief/assets/templates/` contains only brief-related templates needed by the skill.
- [ ] The skill clearly supports new product, existing product onboarding, and feature/content-unit addition.
- [ ] The skill clearly supports software `context/project-overview.md` and non-code `context/brief.md`.
- [ ] The skill includes progress-update guidance without replacing `i2p-progress`.
- [ ] No files under `references/` are modified.
- [ ] Codex skill validation passes for `skills/codex/i2p-brief/`.
- [ ] `context/progress-tracker.md` records unit 03 completion and sets the next unit to `04 i2p-roadmap`.

## Verification and Review

### Plan Alignment

- [ ] The unit matches `context/build-plan.md` Phase 3 unit 03.
- [ ] The unit stays limited to `i2p-brief`.
- [ ] No roadmap, spec, progress, style, or dry-run validation work is added.

### System or Style Integrity

- [ ] The skill follows `context/code-standards.md` skill naming, structure, frontmatter, and template rules.
- [ ] The skill follows `context/architecture.md` package boundaries.
- [ ] The skill keeps `SKILL.md` concise and uses bundled templates for reusable artifact structure.
- [ ] The implementation does not edit or reorganize `references/`.

### Production Readiness

- [ ] Validation output confirms the skill folder is structurally valid.
- [ ] The skill can be dry-read by an agent without requiring hidden project context.
- [ ] No unresolved placeholders remain in skill files or copied templates.
- [ ] Progress can be updated clearly after completion.

## Handoff Notes

Before implementing, read the project context in the order required by `AGENTS.md`, then read the system `skill-creator` guidance. Implement only `skills/codex/i2p-brief/`, validate that skill, and update `context/progress-tracker.md` when done. Leave Phase 4 dry runs for the validation phase.
