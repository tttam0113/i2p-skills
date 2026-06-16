# Build Plan

## Core Principle

Build shared templates and context first, then implement one skill at a time. Every skill must be independently understandable, validated, and dry-runnable before the pack is considered complete.

## Phase 1 - Repository Context

### 01 Apply Context Structure

Create active software-profile context for this repository.

**Artifacts:**

- `context/project-overview.md`
- `context/architecture.md`
- `context/code-standards.md`
- `context/ai-workflow-rules.md`
- `context/library-docs.md`
- `context/ui-tokens.md`
- `context/ui-rules.md`
- `context/ui-registry.md`
- `context/build-plan.md`
- `context/progress-tracker.md`

**Verify:**

- All expected context files exist.
- `references/` remains unchanged.
- Root entrypoints read context first.

## Phase 2 - Shared Templates

### 02 Shared Artifact Templates

Create reusable templates used by multiple skills.

**Artifacts:**

- Software profile templates.
- Non-code profile templates.
- Unit spec template.
- Progress tracker template.
- Style/registry templates.

**Verify:**

- Templates cover both software and non-code products.
- Templates are reusable without copying project-specific details from this repo.

## Phase 3 - Skill Implementation

### 03 `i2p-brief`

Implement the skill that creates or refreshes product/project context.

**Verify:**

- Supports new product, existing product onboarding, and feature/content-unit addition.
- Produces software `project-overview.md` or non-code `brief.md` based on profile.

### 04 `i2p-roadmap`

Implement the skill that creates ordered phases and units.

**Verify:**

- Produces software `build-plan.md` or non-code `roadmap.md`.
- Units are ordered by dependency and sized for focused work.

### 05 `i2p-spec`

Implement the skill that writes one decision-complete unit spec.

**Verify:**

- Supports software features and non-code units.
- Includes goal, context, scope, requirements, style notes, dependencies, acceptance criteria, and review checklist.

### 06 `i2p-progress`

Implement the skill that maintains progress and project memory.

**Verify:**

- Updates software `progress-tracker.md` or non-code `progress.md`.
- Never stores secrets.
- Supports decisions, open questions, session notes, and reset notes.

### 07 `i2p-style`

Implement the skill that creates or updates style systems.

**Verify:**

- Supports software UI tokens/rules/registry.
- Supports non-code editorial/layout style.
- Supports existing-product audit and post-unit imprint.

## Phase 4 - Validation

### 08 Static Skill Validation

Run Codex skill validation for all five skills.

**Verify:**

- Valid frontmatter.
- Valid naming.
- `agents/openai.yaml` exists.
- Skill resources are intentional.

### 09 Dry Run - Software Product

Use the skill pack on one software idea.

**Verify:**

- Generates project overview, architecture/code context when appropriate, build plan, first unit spec, progress tracker, and style context.

### 10 Dry Run - Non-Code Product

Use the skill pack on ebook idea "Cam nang lai xe an toan".

**Verify:**

- Generates brief, roadmap, chapter/unit spec, progress file, and editorial style guidance.

## Feature Count

| Phase | Units |
| --- | --- |
| Phase 1 - Repository Context | 1 |
| Phase 2 - Shared Templates | 1 |
| Phase 3 - Skill Implementation | 5 |
| Phase 4 - Validation | 3 |
| Total | 10 |
