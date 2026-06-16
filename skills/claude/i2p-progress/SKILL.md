---
name: i2p-progress
description: Create or update project progress and continuity memory after meaningful work. Use when writing or refreshing context/progress-tracker.md or context/progress.md, recording current status, completed work, next work, decisions, open questions, session notes, reset notes, or maintaining project memory without storing secrets.
---

Create or update the active progress file so a future agent can resume without reconstructing state. Keep this skill focused on project memory: do not implement, draft content, execute plans, debug, verify code, or perform review workflows.

## Step 1 — Read Existing Context

Read `AGENTS.md`, `CLAUDE.md`, and files under `context/` when they exist. Read the active roadmap source before changing any status:

- Software: `context/build-plan.md`.
- Non-code: `context/roadmap.md`.

Read `context/specs/` when the update references a specific unit.

## Step 2 — Choose the Artifact Profile

- **Software** — create or update `context/progress-tracker.md`.
- **Non-code** — create or update `context/progress.md`.

## Step 3 — Decide What to Record

Update progress for:

- Completed units
- Changed next work
- Durable decisions
- Unresolved questions that affect future work
- Resume-critical notes
- Reset events (when a session or approach went wrong)

Do not log trivial command output, transient reasoning, or routine exploration. Preserve useful existing history. Make the smallest update that keeps current status, progress checklist, decisions, open questions, notes, and reset notes accurate.

## Step 4 — Write the Update

Write the update using the template for the chosen profile (see **Templates** below). Apply these rules:

- Keep **Current Status** accurate: phase, last completed, in progress, and next.
- Mark work complete only when completion is verified or explicitly known. Use verification-aware wording for tests, validation, implementation, or review results.
- Keep progress checklists aligned with the active roadmap or build plan.
- Record decisions with enough context to explain why they matter later.
- Record open questions only when they affect future work and can be acted on.
- Add reset notes only when a session or approach went wrong. Capture what went wrong, what to keep, and what to avoid next time.
- Do not create `memory.md` or unrelated memory files. The progress file is the project memory source of truth.
- Remove all template placeholder text from the final file.

**Non-code profile:** Track source, citation, editorial, or review blockers as open questions or notes when they affect future drafting or review. Do not turn progress updates into final content or style guidance.

## Step 5 — Secret Safety

Never persist secrets, credentials, tokens, private keys, cookies, auth headers, connection strings, or credential-like values in progress files.

If sensitive values appear in user input, tool output, logs, or notes:

- Omit the value when it is not needed.
- Redact the value when the fact matters — for example: `API token was rotated; value omitted`.
- Do not preserve partial secrets, prefixes, suffixes, or enough surrounding context to reconstruct them.

---

## Templates

### `context/progress-tracker.md` — Software Profile

```markdown
# Progress Tracker

Update this file after every meaningful implementation change. Any agent reading this should know what is done, what is in progress, and what comes next.

## Current Status

**Phase:** [Current phase]
**Last completed:** [Last completed unit or "None"]
**In progress:** [Current unit or "None"]
**Next:** [Next unit]

## Progress

### Phase 1 - [Phase Name]

- [ ] 01 [Unit Name]
- [ ] 02 [Unit Name]

### Phase 2 - [Phase Name]

- [ ] 03 [Unit Name]

## Decisions Made

- [Decision and why it matters]

## Open Questions

- [Question that needs resolution]

## Notes

- [Session note needed to resume future work]

## Reset Notes

Use this section only when a session or approach goes wrong and future work needs a clean restart.

- [Date] [Feature/unit]: [What went wrong, what to keep, what to avoid next time]
```

### `context/progress.md` — Non-Code Profile

```markdown
# Progress

Update this file after every meaningful product change. Any agent reading this should know what is complete, what is in progress, and what comes next.

## Current Status

**Phase:** [Current phase]
**Last completed:** [Last completed unit or "None"]
**In progress:** [Current unit or "None"]
**Next:** [Next unit]

## Progress

### Phase 1 - [Phase Name]

- [ ] 01 [Unit Name]
- [ ] 02 [Unit Name]

### Phase 2 - [Phase Name]

- [ ] 03 [Unit Name]

## Decisions Made

- [Decision and why it matters]

## Open Questions

- [Question that needs resolution]

## Notes

- [Session note needed to resume future work]

## Reset Notes

Use this section only when a session or approach goes wrong and future work needs a clean restart.

- [Date] [Unit]: [What went wrong, what to keep, what to avoid next time]
```

---

Hand off roadmap changes to `/i2p-roadmap`, unit specs to `/i2p-spec`, style-system work to `/i2p-style`, and implementation or drafting to the appropriate execution workflow.
