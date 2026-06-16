# i2p Skill Pack Project

This repository builds the `i2p-*` skill pack: a reusable "idea to product" workflow for turning software or content ideas into clear briefs, roadmaps, specs, progress records, and style systems.

## Read First

Before making design or implementation changes, read these files in order:

1. `context/project-overview.md` - product definition, goals, workflows, scope, and success criteria.
2. `context/architecture.md` - repository structure, skill boundaries, artifact profiles, and invariants.
3. `context/code-standards.md` - skill authoring, template, documentation, and validation rules.
4. `context/ai-workflow-rules.md` - agent workflow, scoping rules, and reference boundaries.
5. `context/library-docs.md` - project-specific notes for source materials and tools.
6. `context/build-plan.md` - ordered implementation units.
7. `context/progress-tracker.md` - active project memory and current state.
8. `docs/specs/i2p-skill-pack-spec.md` - design spec for the skill pack.

Read source material only when relevant:

- `references/Six-File-Context-Methodology/README.md` - source methodology for project context files.
- `references/ai_development_starter_kit/lead_magnet/context/` - applied example of context, roadmap, UI, and library docs.
- `references/skills-main/skills/` - source skill ideas for architecture, memory, UI imprinting, review, and recovery.

## Project Rules

- Keep this repository focused on the `i2p-*` skill pack. Source materials belong under `references/`.
- Do not edit files under `references/` unless explicitly asked; treat them as raw source material.
- Treat `context/` as the active operational source of truth.
- Build skills as concise Codex skills with progressive disclosure: short `SKILL.md`, detailed templates or examples in `references/` or `assets/`.
- Prefer English for skill content, templates, frontmatter, and generated project artifacts.
- Design for both software projects and non-code products such as ebooks, courses, guides, documents, and content systems.
- Avoid duplicating Superpowers execution workflows. The `i2p-*` pack owns brief, roadmap, spec, progress, and style artifacts; implementation, debugging, verification, and review can hand off to Superpowers or other specialist skills.

## Planned Skills

- `i2p-brief`
- `i2p-roadmap`
- `i2p-spec`
- `i2p-progress`
- `i2p-style`

## Validation Standard

Before calling the skill pack complete:

- Validate every skill folder with the Codex skill validation script.
- Dry-run the workflow against one software product idea.
- Dry-run the workflow against one non-code product idea, such as an ebook.
- Confirm generated artifacts do not require implementation decisions to be guessed later.
