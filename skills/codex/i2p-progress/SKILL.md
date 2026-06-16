---
name: i2p-progress
description: Create or update project progress and continuity memory after meaningful work. Use when Codex needs to write or refresh context/progress-tracker.md or context/progress.md, record current status, completed work, next work, decisions, open questions, session notes, reset notes, or maintain project memory without storing secrets.
---

# i2p Progress

Create or update the active progress file so a future agent can resume without reconstructing state. Keep this skill focused on project memory: do not implement, draft content, execute plans, debug, verify code, or perform review workflows.

## Core Workflow

1. Read existing project instructions and context first. Prefer `AGENTS.md`, `CLAUDE.md`, and files under `context/` when they exist.
2. Choose the artifact profile:
   - **Software:** create or update `context/progress-tracker.md` using `assets/templates/progress-tracker.md`.
   - **Non-code:** create or update `context/progress.md` using `assets/templates/progress.md`.
3. Read the active roadmap source before changing status:
   - Software: `context/build-plan.md`.
   - Non-code: `context/roadmap.md`.
   - Read `context/specs/` when the update references a specific unit.
4. Decide whether the event is meaningful enough to record. Update progress for completed units, changed next work, durable decisions, unresolved questions, resume-critical notes, or reset events. Do not log trivial command output, transient reasoning, or routine exploration.
5. Preserve useful existing history. Make the smallest update that keeps current status, progress checklist, decisions, open questions, notes, and reset notes accurate.
6. Remove template placeholders from final generated progress files. Do not leave `TBD`, `TODO`, or bracketed template instructions.

## Update Rules

- Keep **Current Status** accurate: phase, last completed, in progress, and next.
- Mark work complete only when completion is verified or explicitly known. Use verification-aware wording for tests, validation, implementation, or review results.
- Keep progress checklists aligned with the active roadmap/build plan.
- Record decisions with enough context to explain why they matter later.
- Record open questions only when they affect future work and can be acted on.
- Record session notes only when they help a future agent resume work.
- Add reset notes only when a session or approach went wrong and future work needs a clean restart. Capture what went wrong, what to keep, and what to avoid next time.
- Do not create `memory.md` or unrelated memory files. The progress file is the project memory source of truth.

## Secret Safety

Never persist secrets, credentials, tokens, private keys, cookies, auth headers, connection strings, or credential-like values in progress files.

If sensitive values appear in user input, tool output, logs, or notes:

- Omit the value when it is not needed.
- Redact the value when the fact matters, for example `API token was rotated; value omitted`.
- Do not preserve partial secrets, prefixes, suffixes, or enough surrounding context to reconstruct them.

## Profile Guidance

### Software

Use software vocabulary such as phase, unit, build plan, current status, last completed, in progress, next, decisions, open questions, notes, and reset notes. Keep `context/progress-tracker.md` aligned with `context/build-plan.md`.

### Non-Code

Use neutral product vocabulary such as product, roadmap, unit, chapter, lesson, section, draft, edit, review, layout, decision, open question, note, and reset note. Keep `context/progress.md` aligned with `context/roadmap.md`.

Track source, citation, editorial, or review blockers as open questions or notes when they affect future drafting or review. Do not turn progress updates into final content or style guidance.

## Templates

Use these assets as structure, not as final text:

- `assets/templates/progress-tracker.md` for software `context/progress-tracker.md`.
- `assets/templates/progress.md` for non-code `context/progress.md`.

Hand off roadmap changes to `i2p-roadmap`, unit specs to `i2p-spec`, style-system work to `i2p-style`, and implementation or drafting to the appropriate execution workflow.
