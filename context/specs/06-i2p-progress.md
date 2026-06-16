# Unit 06: i2p-progress

## Goal

Implement the `i2p-progress` Codex skill so agents can create and maintain the active project memory source of truth after meaningful work, decisions, open questions, session notes, or reset events.

## Context

- **Product/profile:** Software project building a reusable Codex skill pack that also supports non-code products.
- **Roadmap source:** `context/build-plan.md`, Phase 3, unit 06.
- **Related context:** `context/project-overview.md`, `context/architecture.md`, `context/code-standards.md`, `context/ai-workflow-rules.md`, `context/library-docs.md`, `context/progress-tracker.md`, `docs/specs/i2p-skill-pack-spec.md`, `context/specs/03-i2p-brief.md`, `context/specs/04-i2p-roadmap.md`, and `context/specs/05-i2p-spec.md`.
- **Why this unit now:** `i2p-brief`, `i2p-roadmap`, and `i2p-spec` are implemented and validated. `i2p-progress` is the next workflow dependency because the skill pack needs a dedicated way to preserve current state, decisions, open questions, and next work across sessions.

## Scope

### In Scope

- Create the `skills/codex/i2p-progress/` skill folder using the system `skill-creator` guidance.
- Create `skills/codex/i2p-progress/SKILL.md` with concise progressive-disclosure instructions.
- Create `skills/codex/i2p-progress/agents/openai.yaml` with UI metadata aligned to the skill behavior.
- Add only progress-related template assets needed by this skill, adapted from the existing top-level templates.
- Support both artifact profiles:
  - Software profile writes or refreshes `context/progress-tracker.md`.
  - Non-code profile writes or refreshes `context/progress.md`.
- Support progress creation and updates after meaningful work, including current status, completed work, next work, decisions, open questions, session notes, and reset notes.
- Include strict no-secrets guidance for progress and memory artifacts.
- Validate the finished skill with the Codex skill validation script.
- Update `context/progress-tracker.md` after implementation is complete.

### Out of Scope

- Do not implement `i2p-style`.
- Do not implement generated products, features, chapters, lessons, or content units.
- Do not create or refresh briefs, roadmaps, unit specs, or style guides except for narrow handoff notes when progress reveals a needed update.
- Do not run full software or non-code dry-run validation; those belong to Phase 4.
- Do not edit files under `references/`.
- Do not add scripts unless implementation proves deterministic generation is necessary.
- Do not add README, changelog, installation guide, or quick-reference files inside the skill folder.
- Do not create `memory.md`; the active progress file is the project memory source of truth.
- Do not duplicate Superpowers implementation planning, execution, debugging, verification, or review workflows.

## Requirements

### Functional or Content Requirements

- `SKILL.md` frontmatter must include only `name: i2p-progress` and a clear `description`.
- The description must trigger when Codex needs to create or update a progress tracker, project memory file, current status, completed work, next work, decisions, open questions, session notes, reset notes, or continuity record after meaningful work.
- The skill body must tell the agent to read existing context before writing or changing artifacts, including:
  - `AGENTS.md` or `CLAUDE.md` when present.
  - Software `context/project-overview.md`, `context/build-plan.md`, and existing `context/progress-tracker.md` when present.
  - Non-code `context/brief.md`, `context/roadmap.md`, and existing `context/progress.md` when present.
  - Existing `context/specs/` files when progress references a specific unit.
- The skill must choose the artifact profile from the project type:
  - Software projects use `context/progress-tracker.md` and `assets/templates/progress-tracker.md`.
  - Non-code products use `context/progress.md` and `assets/templates/progress.md`.
- The skill must update progress only after meaningful product, planning, implementation, drafting, review, decision, or reset events. It must avoid logging trivial command output or transient reasoning that will not help a future session.
- Current status must clearly track phase, last completed work, in-progress work, and next work.
- Progress checklists must reflect completed and remaining units without marking work complete before verification or user-confirmed completion.
- Decisions must include enough context to explain why the decision matters later.
- Open questions must be actionable and limited to unresolved items that affect future work.
- Session notes must be concise and only record facts needed to resume future work.
- Reset notes must be used when a session or approach goes wrong and future work needs a clean restart. They must capture what went wrong, what to keep, and what to avoid next time.
- The skill must never persist secrets, credentials, tokens, private keys, cookies, auth headers, connection strings, or credential-like values. If such values appear in user input or tool output, the skill must redact or omit them before writing progress.
- The skill must preserve existing useful progress history when refreshing or updating a progress file.
- The skill must not create unrelated memory artifacts. If the expected progress file does not exist, create the correct profile-specific progress file rather than `memory.md`.
- The skill must route reusable artifact structure into bundled templates instead of embedding long template content in `SKILL.md`.

### Software-Specific Requirements

- Follow the skill package shape from `context/architecture.md`: `SKILL.md`, `agents/openai.yaml`, `assets/templates/`, and optional `references/`.
- Use existing top-level templates as the source for skill assets:
  - `templates/software/progress-tracker.md`
  - `templates/non-code/progress.md`
- Keep `SKILL.md` under 500 lines and use imperative, action-oriented instructions.
- Keep the implementation limited to `skills/codex/i2p-progress/` and any required progress update.
- For software projects, use starter-kit-style vocabulary: phase, unit, build plan, current status, last completed, in progress, next, decisions, open questions, notes, and reset notes.
- For software progress updates, require verification-aware wording. Do not mark tests, validation, implementation, or a unit complete unless the supporting result is known.
- Preserve the repository boundary that `references/` is raw source material and must not be edited.
- Avoid creating implementation behavior outside this skill's progress and memory responsibility.

### Content-Specific Requirements

- For non-code products, use neutral vocabulary such as product, roadmap, unit, chapter, lesson, section, draft, edit, review, layout, decision, open question, note, and reset note.
- For ebooks, courses, guides, documentation sets, and content systems, track reviewable content progress without forcing software-specific terms.
- Record source, citation, editorial, or review blockers as open questions or notes when they affect future drafting or review.
- Do not turn a progress update into the final chapter, lesson, section, or editorial style guide.

## Design or Style Notes

- Use English for skill content, templates, frontmatter, and generated artifacts.
- Keep `SKILL.md` concise enough for progressive disclosure; prefer update rules and safety boundaries over long explanations.
- Use software-profile names for programming projects and neutral names for non-code products.
- Treat `context/progress-tracker.md` or `context/progress.md` as the single active memory source for the target project.
- Keep final progress artifacts concise, factual, and useful for a future agent resuming work.
- Mention Superpowers only as a later handoff target for implementation, debugging, verification, or review; do not make those workflows part of `i2p-progress`.
- Do not leave final generated skill files with placeholder text such as `TODO`, `TBD`, or bracketed template instructions outside copied templates.

## Dependencies

- Phase 1 repository context must remain complete.
- Phase 2 shared templates must remain available at `templates/software/`, `templates/non-code/`, and `templates/shared/`.
- Unit 03 `i2p-brief` must remain implemented and validated because progress updates may reference brief decisions.
- Unit 04 `i2p-roadmap` must remain implemented and validated because progress updates track roadmap/build-plan units.
- Unit 05 `i2p-spec` must remain implemented and validated because progress updates may reference unit specs.
- System `skill-creator` guidance must be used when creating the skill.
- Codex quick validation script must be available from the system skill creator tooling.
- `context/progress-tracker.md` must remain the active progress source for this repository.

## Acceptance Criteria

- [ ] `skills/codex/i2p-progress/SKILL.md` exists with valid frontmatter containing only `name` and `description`.
- [ ] `skills/codex/i2p-progress/agents/openai.yaml` exists and describes the skill consistently with `SKILL.md`.
- [ ] `skills/codex/i2p-progress/assets/templates/` contains only progress-related templates needed by the skill.
- [ ] The skill clearly supports software `context/progress-tracker.md` and non-code `context/progress.md`.
- [ ] The skill supports current status, completed work, next work, decisions, open questions, session notes, and reset notes.
- [ ] The skill includes strict no-secrets guidance and requires redaction or omission of credential-like values.
- [ ] The skill updates progress only for meaningful state changes and avoids noisy transient notes.
- [ ] The skill preserves useful existing progress history when updating files.
- [ ] The skill does not create `memory.md` or unrelated memory artifacts.
- [ ] The skill includes handoff guidance without replacing Superpowers execution, debugging, verification, or review workflows.
- [ ] No files under `references/` are modified.
- [ ] Codex skill validation passes for `skills/codex/i2p-progress/`.
- [ ] `context/progress-tracker.md` records unit 06 completion and sets the next unit to `07 i2p-style` after implementation.

## Verification and Review

### Plan Alignment

- [ ] The unit matches `context/build-plan.md` Phase 3 unit 06.
- [ ] The unit stays limited to `i2p-progress`.
- [ ] No style, Phase 4 static validation, or dry-run validation work is added.
- [ ] The progress skill maintains continuity after brief, roadmap, spec, implementation, drafting, review, decision, or reset events.

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

Before implementing, read the project context in the order required by `AGENTS.md`, then read the system `skill-creator` guidance. Implement only `skills/codex/i2p-progress/`. Initialize the skill with `init_skill.py`, add only `assets/templates/progress-tracker.md` from `templates/software/progress-tracker.md` and `assets/templates/progress.md` from `templates/non-code/progress.md`, write concise `SKILL.md` instructions, ensure `agents/openai.yaml` mentions `$i2p-progress` correctly, validate with `quick_validate.py`, and update `context/progress-tracker.md` when done. Leave `i2p-style` and full software/non-code dry runs for later build-plan units.
