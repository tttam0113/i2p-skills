# Progress Tracker

Update this file after every meaningful implementation change. This is the active project memory source for this repository.

## Current Status

**Phase:** Post-release iteration  
**Last completed:** UI direction and wireframe-ready spec workflow update  
**In progress:** None  
**Next:** Dogfood the updated software flow on a real project with no existing design assets.

## Progress

### Phase 1 - Repository Context

- [x] Move source folders into `references/`
- [x] Create root `AGENTS.md`
- [x] Create root `CLAUDE.md`
- [x] Write project spec in `docs/specs/i2p-skill-pack-spec.md`
- [x] Create active `context/` structure
- [x] Update root entrypoints to read `context/` first

### Phase 2 - Shared Templates

- [x] 02 Shared Artifact Templates

### Phase 3 - Skill Implementation

- [x] 03 `i2p-brief`
- [x] 04 `i2p-roadmap`
- [x] 05 `i2p-spec`
- [x] 06 `i2p-progress`
- [x] 07 `i2p-style`

### Phase 4 - Validation

- [x] 08 Static Skill Validation
- [x] 09 Dry Run - Software Product
- [x] 10 Dry Run - Non-Code Product

### Distribution

- [x] GitHub npx installer
- [x] GitHub npx install verified from the public repository
- [x] Git tag and GitHub Release `v0.1.0`

### Post-Release Iteration

- [x] Add UI direction and wireframe-ready screen spec guidance for software products without design assets

## Decisions Made

- Use `i2p-` as the required skill prefix.
- Implement five skills: `i2p-brief`, `i2p-roadmap`, `i2p-spec`, `i2p-progress`, and `i2p-style`.
- Use starter-kit-style file names for software projects.
- Use neutral names such as `brief`, `roadmap`, `progress`, and `style` for non-code products.
- Treat `context/progress-tracker.md` as this repo's only active memory source; do not create `memory.md` by default.
- Keep `references/` as raw source material and do not edit it unless explicitly requested.
- Complement Superpowers rather than replacing its implementation, debugging, verification, or review workflows.
- Store shared reusable templates in top-level `templates/` before copying or adapting them into individual skill assets.
- Group Codex-facing skill folders under `skills/codex/`.
- Distribute the skill pack from a public GitHub repo with an explicit npm-compatible CLI, not a package `postinstall` side effect.
- Use `npx github:tttam0113/i2p-skills install --target codex|claude|all` as the primary install interface.
- Do not publish to the npm registry for `v0.1.0`; GitHub `npx` install is sufficient for this checkpoint.
- Do not add a sixth skill for wireframes in this iteration; `i2p-style` owns textual UI direction and `i2p-spec` owns per-screen wireframe specs.

## Open Questions

- None currently.

## Notes

- This repository is now a git repository with `main` tracking `origin/main`.
- `skills/codex/` now exists with all five planned skills: `i2p-brief`, `i2p-roadmap`, `i2p-spec`, `i2p-progress`, and `i2p-style`.
- The PDF in `references/ai_development_starter_kit/lead_magnet/` was not parsed during planning because a local PDF parser was unavailable; Markdown files were used as primary source material.
- Shared templates now exist for software profile, non-code profile, and shared unit specs.
- Unit spec for 03 `i2p-brief` exists at `context/specs/03-i2p-brief.md`.
- `i2p-brief` now exists at `skills/codex/i2p-brief/` with `SKILL.md`, `agents/openai.yaml`, and brief-only templates for software and non-code profiles.
- Static validation passed for `skills/codex/i2p-brief/`.
- Unit spec for 04 `i2p-roadmap` exists at `context/specs/04-i2p-roadmap.md`.
- `i2p-roadmap` now exists at `skills/codex/i2p-roadmap/` with `SKILL.md`, `agents/openai.yaml`, and roadmap-only templates for software and non-code profiles.
- Static validation passed for `skills/codex/i2p-roadmap/`.
- Unit spec for 05 `i2p-spec` exists at `context/specs/05-i2p-spec.md`.
- `i2p-spec` now exists at `skills/codex/i2p-spec/` with `SKILL.md`, `agents/openai.yaml`, and the shared unit spec template.
- Unit spec for 06 `i2p-progress` exists at `context/specs/06-i2p-progress.md`.
- `i2p-progress` now exists at `skills/codex/i2p-progress/` with `SKILL.md`, `agents/openai.yaml`, and progress templates for software and non-code profiles.
- Static validation passed for `skills/codex/i2p-progress/`.
- Unit spec for 07 `i2p-style` exists at `context/specs/07-i2p-style.md`.
- `i2p-style` now exists at `skills/codex/i2p-style/` with `SKILL.md`, `agents/openai.yaml`, software UI templates, and non-code style templates.
- Static validation passed for `skills/codex/i2p-style/`.
- Unit spec for 08 Static Skill Validation exists at `context/specs/08-static-skill-validation.md`.
- Unit spec for 09 Dry Run - Software Product exists at `context/specs/09-dry-run-software-product.md`.
- Unit spec for 10 Dry Run - Non-Code Product exists at `context/specs/10-dry-run-non-code-product.md`.
- Phase 4 static validation passed for all five skill folders: `i2p-brief`, `i2p-roadmap`, `i2p-spec`, `i2p-progress`, and `i2p-style`.
- Static metadata and scaffold checks passed for all five skills; no skill file fixes were required.
- Software dry-run completed using product idea "Decision Log Lite".
- Software dry-run artifacts are isolated under `dry-runs/software-product/`.
- Software dry-run found no concrete skill defects.
- Non-code dry-run completed using ebook idea "Cam nang lai xe an toan".
- Non-code dry-run artifacts are isolated under `dry-runs/non-code-product/`.
- Non-code dry-run generated `brief.md`, `roadmap.md`, `progress.md`, `style.md`, `editorial-style.md`, and `context/specs/01-safety-mindset.md`.
- Non-code dry-run found no concrete skill defects.
- Added `package.json` and `bin/i2p-skills.mjs` so the public GitHub repo can be run with `npx github:tttam0113/i2p-skills install`.
- Installer supports `--target codex|claude|all`, `--dest`, `--force`, and `--dry-run`.
- Added Node built-in tests for CLI help, dry run, copy behavior, overwrite protection, force overwrite, and invalid `--target all --dest`.
- Updated English and Vietnamese READMEs with GitHub npx install instructions.
- User verified installation from the public GitHub repository with the skill pack; no additional install test is needed for this checkpoint.
- Created and pushed tag `v0.1.0`, then created the GitHub Release for that tag.
- Updated the documented workflow so new software products without design assets run `i2p-style` before roadmap/spec work, and UI screen specs include textual wireframe sections.
