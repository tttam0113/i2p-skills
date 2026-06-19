# Architecture

## Stack

| Layer | Tooling | Purpose |
| --- | --- | --- |
| Skill runtime | Codex skills | Modular workflows loaded by Codex when triggered |
| Skill metadata | `SKILL.md`, `agents/openai.yaml` | Triggering, human-facing skill chips, and skill instructions |
| Templates | Markdown assets | Reusable project-context, roadmap, spec, progress, and style artifacts |
| Installer | Node CLI package | Copy skill folders from a GitHub-hosted package into local Codex or Claude skill directories |
| References | Markdown/source files under `references/` | Raw source material and examples used to design the skill pack |
| Validation | Codex skill validation scripts | Static checks for skill structure and metadata |

## Repository Structure

```text
/
|-- AGENTS.md
|-- CLAUDE.md
|-- context/
|   |-- project-overview.md
|   |-- architecture.md
|   |-- code-standards.md
|   |-- ai-workflow-rules.md
|   |-- ui-tokens.md
|   |-- ui-rules.md
|   |-- ui-registry.md
|   |-- library-docs.md
|   |-- build-plan.md
|   |-- progress-tracker.md
|   `-- specs/
|-- docs/
|   `-- specs/
|       `-- i2p-skill-pack-spec.md
|-- bin/
|   `-- i2p-skills.mjs
|-- references/
|   |-- Six-File-Context-Methodology/
|   |-- ai_development_starter_kit/
|   `-- skills-main/
|-- package.json
`-- skills/
    |-- codex/
    `-- claude/
        |-- i2p-brief/
        |-- i2p-roadmap/
        |-- i2p-spec/
        |-- i2p-progress/
        `-- i2p-style/
```

`skills/codex/` contains the Codex-facing `i2p-*` skill folders.
`skills/claude/` contains the Claude-facing `i2p-*` skill folders.
`bin/i2p-skills.mjs` installs either variant into local user skill directories.

## System Boundaries

| Area | Owns |
| --- | --- |
| `context/` | Active project memory, architecture, standards, build plan, and progress state |
| `docs/specs/` | Human-readable design specs for this repo and major project decisions |
| `references/` | Raw source material only; not edited during normal implementation |
| `skills/codex/<skill-name>/SKILL.md` | Concise skill workflow and routing instructions |
| `skills/codex/<skill-name>/assets/` | Templates copied or adapted into target projects |
| `skills/codex/<skill-name>/references/` | Longer examples, checklists, and rationale loaded only when needed |
| `skills/codex/<skill-name>/agents/openai.yaml` | UI metadata for Codex skill discovery |
| `skills/claude/<skill-name>/SKILL.md` | Claude-compatible skill workflow and routing instructions |
| `bin/i2p-skills.mjs` | Explicit installer for GitHub npx usage |

## Skill Package Shape

Each skill folder must contain:

```text
skill-name/
|-- SKILL.md
|-- agents/
|   `-- openai.yaml
|-- assets/
|   `-- templates/
`-- references/
```

Only create `scripts/` for a skill if deterministic generation or validation becomes necessary.

## Artifact Profiles

Software profile output names follow the starter kit:

- `context/project-overview.md`
- `context/architecture.md`
- `context/code-standards.md`
- `context/ai-workflow-rules.md`
- `context/ui-tokens.md`
- `context/ui-rules.md`
- `context/ui-registry.md`
- `context/library-docs.md`
- `context/build-plan.md`
- `context/progress-tracker.md`

Non-code profile output names use neutral product language:

- `context/brief.md`
- `context/roadmap.md`
- `context/progress.md`
- `context/style.md`

## Data Flow

### New Product Flow

```text
User idea
  -> i2p-brief
  -> context artifacts
  -> i2p-style when UI, visual, editorial, or layout direction is needed
  -> i2p-roadmap
  -> ordered units
  -> i2p-spec
  -> unit spec
  -> implementation/drafting handoff
  -> i2p-progress and i2p-style updates
```

### Existing Product Flow

```text
Existing files/docs
  -> observed context
  -> current roadmap/progress
  -> style audit if relevant
  -> next unit spec
```

## Invariants

- `references/` is read-only source material unless the user explicitly asks to edit it.
- `context/progress-tracker.md` is this repo's active project memory.
- Skills must be concise and use progressive disclosure.
- `i2p-*` must not duplicate Superpowers execution, debugging, verification, or review workflows.
- `i2p-style` may create textual UI direction and wireframe-ready guidance, but actual UI drafts, mockups, prototypes, and implementation remain execution work.
- Software artifact names default to the starter-kit naming profile.
- Non-code artifacts may use neutral names when generated for external products.
- No secrets or credential-like values may be persisted in generated progress or memory artifacts.
- Installing skills must be an explicit CLI action; do not add package lifecycle scripts that silently copy files during dependency installation.
