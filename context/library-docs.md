# Library Docs

Project-specific notes for source materials and tools used while building the `i2p-*` skill pack.

## Authority Order

When implementing this repo, use this order:

1. Active files under `context/`
2. `docs/specs/i2p-skill-pack-spec.md`
3. Relevant source material under `references/`
4. General model knowledge

## Codex Skill Creator

Use the system `skill-creator` guidance when creating or updating skills.

Project rules:

- Initialize each new skill with the skill creator tooling when implementation begins.
- Generate `agents/openai.yaml` for every skill.
- Keep skill folders minimal.
- Use `assets/templates/` for reusable Markdown templates.
- Use `references/` inside each skill for longer examples or checklists.
- Validate each skill with the quick validation script before completion.

## Superpowers

The `i2p-*` skill pack complements Superpowers.

Use `i2p-*` for:

- Product/project context.
- Roadmaps and build plans.
- Unit specs.
- Progress tracking.
- Style and registry artifacts.

Do not duplicate these Superpowers responsibilities:

- Implementation plan execution.
- Test-driven development.
- Systematic debugging.
- Verification before completion.
- Code review workflows.

## Six-File Context Methodology

Source location:

- `references/Six-File-Context-Methodology/`

Use for:

- Context-first project setup.
- Project overview, architecture, standards, workflow, UI, and progress templates.
- Principles around avoiding context drift between AI sessions.

Do not copy wholesale. Adapt structure to the `i2p-*` software and non-code artifact profiles.

## AI Development Starter Kit

Source location:

- `references/ai_development_starter_kit/lead_magnet/context/`

Use for:

- Starter-kit-style software file names.
- Expanded software context structure.
- Example build plan and progress tracker.
- UI tokens/rules/registry split.
- Library docs pattern.

This repo prefers this naming profile for software projects.

## Source Skills Main

Source location:

- `references/skills-main/skills/`

Use as design input:

- `architect` -> vocabulary alignment and decision surfacing for `i2p-brief`.
- `imprint` -> style/UI registry capture for `i2p-style`.
- `remember` -> session continuity and no-secrets rule for `i2p-progress`.
- `recover` -> reset notes and failure-mode capture for `i2p-progress`.
- `review` -> verification/review checklist inside `i2p-spec`.

Do not copy these skills verbatim. Convert their useful workflow pieces into concise Codex skills with progressive disclosure.

## Validation Tools

Use Codex skill validation after skill folders exist.

Expected validation:

- Frontmatter includes required fields only.
- Skill names are valid and match folder names.
- `agents/openai.yaml` exists and matches the skill.
- Bundled resources are intentional and referenced from `SKILL.md`.
