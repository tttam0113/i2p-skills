---
name: i2p-roadmap
description: Create or refresh ordered product roadmaps and build plans from an existing brief. Use when Codex needs to write or update context/build-plan.md or context/roadmap.md, decompose a software product into implementation units, decompose a non-code product into content units, create a baseline roadmap for an existing product, or add incremental roadmap units for a new feature, chapter, module, lesson, guide section, or asset set before specs, implementation, or drafting.
---

# i2p Roadmap

Turn an existing brief into ordered phases and focused build/content units. Keep this skill focused on roadmap structure: do not write unit specs, execute implementation plans, debug, verify code, or perform review workflows.

## Core Workflow

1. Read existing project instructions and context first. Prefer `AGENTS.md`, `CLAUDE.md`, and files under `context/` when they exist.
2. Confirm there is a brief source:
   - Software: prefer `context/project-overview.md`.
   - Non-code: prefer `context/brief.md`.
   - If no brief exists, ask for the missing product context or hand off to `i2p-brief`.
3. Choose the mode:
   - **Full roadmap:** create phases and units for a new product.
   - **Existing-product baseline:** inspect current docs/files and record observed current state plus next units without inventing intent.
   - **Incremental roadmap:** add or revise only the units needed for one feature, chapter, module, lesson, guide section, document asset, or tightly related set.
4. Choose the artifact profile:
   - **Software:** write or refresh `context/build-plan.md` using `assets/templates/build-plan.md`.
   - **Non-code:** write or refresh `context/roadmap.md` using `assets/templates/roadmap.md`.
5. Order dependencies before dependent units. Do not require a later unit for an earlier unit to be reviewable.
6. If roadmap decisions or open questions are discovered, update the active progress file when it exists: `context/progress-tracker.md` for software or `context/progress.md` for non-code. If no progress file exists, include clear handoff notes in the response instead of creating unrelated memory files.

## Unit Quality Rules

- Each unit must produce one visible or reviewable result.
- Size each unit for one focused implementation or drafting session.
- Merge units with no standalone visible or reviewable result into an adjacent unit.
- Split units that cross unrelated boundaries unless the user explicitly wants a small vertical slice.
- For software, avoid mixing unrelated UI, database, API, background work, deployment, and analytics concerns in one unit.
- For content products, avoid combining planning, drafting, editing, review, and layout in one unit unless the unit is intentionally small.
- Use concrete `Build` and `Verify` items for software build plans.
- Use concrete `Create` and `Review` items for non-code roadmaps.
- Capture source, citation, or research needs as tasks or review conditions when content claims need support.

## Mode Details

### Full Roadmap

Turn the brief into phases from first useful artifact through the complete planned product. Prefer dependency order over category order when they differ.

### Existing-Product Baseline

Inspect available docs, repository structure, existing roadmap/progress files, and visible conventions. Mark unverified future intent as an open question rather than presenting it as decided.

### Incremental Roadmap

Read the current roadmap first. If the request fits an existing unit, point to that unit. If it spans multiple focused units, add only the required units and keep numbering/order coherent.

## Templates

Use these assets as structure, not as final text:

- `assets/templates/build-plan.md` for software `context/build-plan.md`.
- `assets/templates/roadmap.md` for non-code `context/roadmap.md`.

Hand off individual unit specs to `i2p-spec` after the roadmap is ordered.
