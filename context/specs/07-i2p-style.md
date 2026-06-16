# Unit 07: i2p-style

## Goal

Implement the `i2p-style` Codex skill so agents can create and maintain style systems for software UI and non-code products before or after product units are built, drafted, audited, or imprinted.

## Context

- **Product/profile:** Software project building a reusable Codex skill pack that also supports non-code products.
- **Roadmap source:** `context/build-plan.md`, Phase 3, unit 07.
- **Related context:** `context/project-overview.md`, `context/architecture.md`, `context/code-standards.md`, `context/ai-workflow-rules.md`, `context/library-docs.md`, `context/progress-tracker.md`, `docs/specs/i2p-skill-pack-spec.md`, `context/specs/03-i2p-brief.md`, `context/specs/04-i2p-roadmap.md`, `context/specs/05-i2p-spec.md`, and `context/specs/06-i2p-progress.md`.
- **Why this unit now:** `i2p-brief`, `i2p-roadmap`, `i2p-spec`, and `i2p-progress` are implemented and validated. `i2p-style` is the final skill implementation unit before Phase 4 validation because the pack still needs dedicated style-system creation, audit, and imprint workflows.

## Scope

### In Scope

- Create the `skills/codex/i2p-style/` skill folder using the system `skill-creator` guidance.
- Create `skills/codex/i2p-style/SKILL.md` with concise progressive-disclosure instructions.
- Create `skills/codex/i2p-style/agents/openai.yaml` with UI metadata aligned to the skill behavior.
- Add only style-related template assets needed by this skill, adapted from the existing top-level templates.
- Support three workflow modes: new product style guide, existing-product style audit, and post-unit imprint.
- Support both artifact profiles:
  - Software profile writes or refreshes `context/ui-tokens.md`, `context/ui-rules.md`, and `context/ui-registry.md`.
  - Non-code profile writes or refreshes `context/style.md`, with `context/editorial-style.md` and `context/layout-guide.md` when detailed editorial or layout rules need separate artifacts.
- Capture software style guidance for tokens, typography, colors, spacing, radius, borders, component patterns, interaction states, and registry entries.
- Capture non-code style guidance for tone, vocabulary, heading patterns, section patterns, callouts, examples, checklist style, citations, layout rules, and quality bar.
- Include progress-update guidance after meaningful style decisions or audit findings without replacing `i2p-progress`.
- Validate the finished skill with the Codex skill validation script.
- Update `context/progress-tracker.md` after implementation is complete.

### Out of Scope

- Do not run Phase 4 static validation for all skills or software/non-code dry-run validation.
- Do not implement generated products, UI components, chapters, lessons, or content units.
- Do not write final content drafts, build UI, or perform code review.
- Do not create or refresh briefs, roadmaps, unit specs, or progress files except for narrow handoff notes when style work reveals a required update.
- Do not edit files under `references/`.
- Do not add scripts unless implementation proves deterministic generation is necessary.
- Do not add README, changelog, installation guide, or quick-reference files inside the skill folder.
- Do not duplicate Superpowers implementation planning, execution, debugging, verification, or review workflows.

## Requirements

### Functional or Content Requirements

- `SKILL.md` frontmatter must include only `name: i2p-style` and a clear `description`.
- The description must trigger when Codex needs to create or update a style guide, UI tokens, UI rules, UI registry, editorial style, layout guide, style audit, visual consistency notes, product-language guidance, or post-unit imprint after a repeated UI/content pattern is created.
- The skill body must tell the agent to read existing context before writing or changing artifacts, including:
  - `AGENTS.md` or `CLAUDE.md` when present.
  - Software `context/project-overview.md`, `context/build-plan.md`, `context/ui-tokens.md`, `context/ui-rules.md`, and `context/ui-registry.md` when present.
  - Non-code `context/brief.md`, `context/roadmap.md`, `context/style.md`, `context/editorial-style.md`, and `context/layout-guide.md` when present.
  - Existing progress file when present.
  - Relevant product files, docs, UI components, or content samples when auditing or imprinting existing patterns.
- The skill must choose the artifact profile from the project type:
  - Software projects use `context/ui-tokens.md`, `context/ui-rules.md`, and `context/ui-registry.md`.
  - Non-code products use `context/style.md`, and may additionally use `context/editorial-style.md` and `context/layout-guide.md` when style concerns are too detailed for one file.
- New product style guide mode must create baseline style guidance from the brief/project overview, audience, constraints, product type, and user-provided preferences.
- Existing-product style audit mode must inspect available docs/files/components/content and record observed patterns, deviations, and components or content areas to fix without inventing unverified intent.
- Post-unit imprint mode must update reusable style rules or registry entries after a UI component, chapter, lesson, section, callout, checklist, layout, or repeated pattern is created.
- For software style artifacts, the skill must capture tokens, typography, colors, spacing, radius, borders, component patterns, interaction states, icons/media guidance, and reusable registry entries when relevant.
- For non-code style artifacts, the skill must capture tone, vocabulary, heading patterns, section patterns, callouts, examples, checklist style, citations/source rules, layout rules, and quality bar when relevant.
- The skill must preserve useful existing style decisions and avoid replacing established patterns without a clear reason.
- The skill must record deviations or inconsistencies as fix candidates instead of silently normalizing them.
- The skill must not leave unresolved placeholders such as `TODO`, `TBD`, or bracketed template instructions in generated style artifacts.
- If style decisions, open questions, or audit findings affect future work and an active progress file exists, the skill must instruct the agent to update it. If no progress file exists, the skill must leave clear handoff notes instead of creating unrelated memory artifacts.
- The skill must route reusable artifact structure into bundled templates instead of embedding long template content in `SKILL.md`.

### Software-Specific Requirements

- Follow the skill package shape from `context/architecture.md`: `SKILL.md`, `agents/openai.yaml`, `assets/templates/`, and optional `references/`.
- Use existing top-level templates as the source for skill assets:
  - `templates/software/ui-tokens.md`
  - `templates/software/ui-rules.md`
  - `templates/software/ui-registry.md`
  - `templates/non-code/style.md`
  - `templates/non-code/editorial-style.md`
  - `templates/non-code/layout-guide.md`
- Keep `SKILL.md` under 500 lines and use imperative, action-oriented instructions.
- Keep the implementation limited to `skills/codex/i2p-style/` and any required progress update.
- For software UI work, separate token definitions from build rules and reusable component registry entries.
- For software audits, identify existing component patterns and deviations without rewriting application code.
- Preserve the repository boundary that `references/` is raw source material and must not be edited.
- Avoid creating implementation behavior outside this skill's style-system responsibility.

### Content-Specific Requirements

- For non-code products, use neutral vocabulary such as style guide, editorial style, layout guide, voice, tone, vocabulary, chapter, module, section, example, callout, checklist, citation, source, and quality bar.
- For ebooks, courses, guides, documentation sets, and content systems, make style artifacts guide future drafting and review without drafting the final content unit.
- Capture source, citation, editorial, and layout expectations as style rules when they affect consistency.
- Use `context/editorial-style.md` when voice, tone, language, and section rules need more detail than the general style guide.
- Use `context/layout-guide.md` when target format, typography, visual elements, tables/lists, or export checks need more detail than the general style guide.

## Design or Style Notes

- Use English for skill content, templates, frontmatter, and generated artifacts.
- Keep `SKILL.md` concise enough for progressive disclosure; prefer mode routing and artifact rules over long explanations.
- Use software-profile names for programming projects and neutral names for non-code products.
- Keep style artifacts practical and reusable; avoid abstract brand prose that does not guide future work.
- Keep software style split across tokens, rules, and registry instead of collapsing everything into one file.
- Keep non-code style concise by default, using editorial or layout sub-artifacts only when they reduce clutter or ambiguity.
- Mention Superpowers only as a later handoff target for implementation, debugging, verification, or review; do not make those workflows part of `i2p-style`.
- Do not leave final generated skill files with placeholder text such as `TODO`, `TBD`, or bracketed template instructions outside copied templates.

## Dependencies

- Phase 1 repository context must remain complete.
- Phase 2 shared templates must remain available at `templates/software/`, `templates/non-code/`, and `templates/shared/`.
- Unit 03 `i2p-brief` must remain implemented and validated because style work depends on product/audience context.
- Unit 04 `i2p-roadmap` must remain implemented and validated because style work may be scheduled as roadmap units.
- Unit 05 `i2p-spec` must remain implemented and validated because style notes may inform unit specs.
- Unit 06 `i2p-progress` must remain implemented and validated because style decisions and audits may update progress.
- System `skill-creator` guidance must be used when creating the skill.
- Codex quick validation script must be available from the system skill creator tooling.
- `context/progress-tracker.md` must remain the active progress source for this repository.

## Acceptance Criteria

- [ ] `skills/codex/i2p-style/SKILL.md` exists with valid frontmatter containing only `name` and `description`.
- [ ] `skills/codex/i2p-style/agents/openai.yaml` exists and describes the skill consistently with `SKILL.md`.
- [ ] `skills/codex/i2p-style/assets/templates/` contains only style-related templates needed by the skill.
- [ ] The skill clearly supports new product style guide, existing-product style audit, and post-unit imprint modes.
- [ ] The skill clearly supports software `context/ui-tokens.md`, `context/ui-rules.md`, and `context/ui-registry.md`.
- [ ] The skill clearly supports non-code `context/style.md`, with optional `context/editorial-style.md` and `context/layout-guide.md`.
- [ ] The skill captures software tokens, rules, component patterns, states, and registry entries without implementing UI.
- [ ] The skill captures non-code voice, vocabulary, structure, citation, layout, and quality rules without drafting final content.
- [ ] The skill records deviations or inconsistencies as fix candidates during audits.
- [ ] The skill includes progress-update guidance without replacing `i2p-progress`.
- [ ] No files under `references/` are modified.
- [ ] Codex skill validation passes for `skills/codex/i2p-style/`.
- [ ] `context/progress-tracker.md` records unit 07 completion and sets the next unit to `08 Static Skill Validation` after implementation.

## Verification and Review

### Plan Alignment

- [ ] The unit matches `context/build-plan.md` Phase 3 unit 07.
- [ ] The unit stays limited to `i2p-style`.
- [ ] No Phase 4 static validation or dry-run validation work is added.
- [ ] The style skill creates and maintains style artifacts without performing implementation or drafting workflows.

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

Before implementing, read the project context in the order required by `AGENTS.md`, then read the system `skill-creator` guidance. Implement only `skills/codex/i2p-style/`. Initialize the skill with `init_skill.py`, add only style-related templates from `templates/software/` and `templates/non-code/`, write concise `SKILL.md` instructions, ensure `agents/openai.yaml` mentions `$i2p-style` correctly, validate with `quick_validate.py`, and update `context/progress-tracker.md` when done. Leave Phase 4 static validation and software/non-code dry runs for later build-plan units.
