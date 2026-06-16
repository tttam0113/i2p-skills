---
name: i2p-roadmap
description: Create or refresh ordered product roadmaps and build plans from an existing brief. Use when writing or updating context/build-plan.md or context/roadmap.md, decomposing a software product into implementation units, decomposing a non-code product into content units, creating a baseline roadmap for an existing product, or adding incremental roadmap units for a new feature, chapter, module, lesson, guide section, or asset set before specs, implementation, or drafting.
---

Turn an existing brief into ordered phases and focused build or content units. Keep this skill focused on roadmap structure: do not write unit specs, execute implementation plans, debug, verify code, or perform review workflows.

## Step 1 — Read Existing Context

Read `AGENTS.md`, `CLAUDE.md`, and files under `context/` when they exist. The brief is the required input — confirm it exists before doing anything else.

- Software: prefer `context/project-overview.md`.
- Non-code: prefer `context/brief.md`.

If no brief exists, say so and hand off to `/i2p-brief` instead of proceeding.

## Step 2 — Choose the Mode

- **Full roadmap** — create phases and units for a new product from scratch.
- **Existing-product baseline** — inspect current docs and files, record observed current state plus next units without inventing intent. Mark unverified future intent as an open question rather than presenting it as decided.
- **Incremental roadmap** — read the current roadmap first. If the request fits an existing unit, point to it. Otherwise add only the units needed and keep numbering and order coherent.

## Step 3 — Choose the Artifact Profile

- **Software** — write or refresh `context/build-plan.md`.
- **Non-code** — write or refresh `context/roadmap.md`.

## Step 4 — Order and Size the Units

Apply these rules before writing:

- Order dependencies before dependent units. No later unit should be required before an earlier unit can be reviewed.
- Each unit must produce one visible or reviewable result.
- Size each unit for one focused implementation or drafting session.
- Merge units with no standalone reviewable result into an adjacent unit.
- Split units that cross unrelated concerns unless the user explicitly wants a small vertical slice.
- For software: avoid mixing UI, database, API, background work, deployment, and analytics in one unit.
- For content products: avoid combining planning, drafting, editing, review, and layout in one unit unless the unit is intentionally small.
- Use `Build` and `Verify` items for software build plans. Use `Create` and `Review` items for non-code roadmaps.
- Capture source, citation, or research needs as tasks or review conditions.

## Step 5 — Write the Artifact

Write the artifact using the template for the chosen profile (see **Templates** below). Prefer dependency order over category order when they differ. Do not leave `TBD`, `TODO`, or bracketed placeholder text in the final file.

## Step 6 — Update Progress

If roadmap decisions or open questions were discovered, update the active progress file when it exists (`context/progress-tracker.md` for software, `context/progress.md` for non-code). If no progress file exists, include clear handoff notes in your response.

---

## Templates

### `context/build-plan.md` — Software Profile

```markdown
# Build Plan

## Core Principle

[One paragraph describing how this product should be built: UI-first, API-first, content-first, vertical slices, etc.]

## Phase 1 - [Phase Name]

### 01 [Unit Name]

[One or two sentences describing the visible or reviewable result.]

**Build:**

- [Task]
- [Task]

**Verify:**

- [Verifiable condition]
- [Verifiable condition]

## Phase 2 - [Phase Name]

### 02 [Unit Name]

[One or two sentences describing the visible or reviewable result.]

**Build:**

- [Task]
- [Task]

**Verify:**

- [Verifiable condition]
- [Verifiable condition]

## Feature Count

| Phase | Units |
| --- | --- |
| [Phase] | [Count] |
| Total | [Count] |
```

### `context/roadmap.md` — Non-Code Profile

```markdown
# Roadmap

## Core Principle

[One paragraph describing how this product should be created: outline-first, chapter-by-chapter, research-first, design-last, etc.]

## Phase 1 - [Phase Name]

### 01 [Unit Name]

[One or two sentences describing the reviewable result.]

**Create:**

- [Task]
- [Task]

**Review:**

- [Reviewable condition]
- [Reviewable condition]

## Phase 2 - [Phase Name]

### 02 [Unit Name]

[One or two sentences describing the reviewable result.]

**Create:**

- [Task]
- [Task]

**Review:**

- [Reviewable condition]
- [Reviewable condition]

## Unit Count

| Phase | Units |
| --- | --- |
| [Phase] | [Count] |
| Total | [Count] |
```

---

Hand off individual unit specs to `/i2p-spec` after the roadmap is ordered.
