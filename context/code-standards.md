# Code Standards

This repository is primarily Markdown-based until skill implementation begins. These standards apply to all project docs, templates, and future skill folders.

## General

- Keep changes focused on the `i2p-*` skill pack.
- Prefer concise, imperative instructions over long explanations.
- Preserve source materials under `references/`; do not rewrite them to match current decisions.
- Use English for skill content, templates, frontmatter, and generated context artifacts.
- Use ASCII unless a referenced product or user-provided content requires non-ASCII.

## Skill Naming

- Skill names must use lowercase letters, digits, and hyphens only.
- Every skill name must use the `i2p-` prefix.
- Planned skill names:
  - `i2p-brief`
  - `i2p-roadmap`
  - `i2p-spec`
  - `i2p-progress`
  - `i2p-style`
- Folder names must exactly match skill names.

## Skill Structure

Each skill must include:

- `SKILL.md`
- `agents/openai.yaml`

Use optional resources only when they directly support the skill:

- `assets/templates/` for reusable output templates.
- `references/` for longer examples, checklists, or source-derived guidance.
- `scripts/` only for deterministic operations that are repeatedly needed.

Do not add README, changelog, installation guide, or quick-reference files inside individual skill folders.

## SKILL.md Rules

- Frontmatter must include only `name` and `description`.
- The description must include clear trigger conditions because it is the primary selection signal.
- Keep `SKILL.md` under 500 lines.
- Link directly to any bundled reference files needed for advanced cases.
- Avoid duplicating long templates inside `SKILL.md`; place them in `assets/templates/`.

## Template Rules

- Templates must be concrete enough that another agent can fill them without inventing structure.
- Software templates must use starter-kit-style file names.
- Non-code templates may use neutral file names.
- Template placeholders must be explicit and easy to replace.
- Avoid placeholders such as `TBD` in final generated artifacts.

## Documentation Rules

- `context/` is the active operational source of truth.
- `docs/specs/` stores project design specs and decision records.
- If implementation changes project scope, architecture, standards, or workflow, update `context/` first.
- Keep `AGENTS.md` and `CLAUDE.md` aligned with the active read order.

## Validation Rules

- Run Codex skill validation for each skill before calling the pack complete.
- Dry-run one software idea and one non-code product idea before release.
- Verify generated artifacts do not require later implementation decisions to be guessed.
