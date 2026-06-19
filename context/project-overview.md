# Project Overview

## About the Project

This repository builds the `i2p-*` skill pack, a reusable "idea to product" workflow for Codex. The pack helps a developer or creator turn a vague idea, existing project, or new feature/content unit into clear planning artifacts before implementation starts.

The pack supports software products by default and also supports non-code products such as ebooks, courses, guides, documentation sets, and content systems.

## Goals

1. Provide a concise modular skill suite for product planning before implementation.
2. Support greenfield projects, existing project onboarding, and incremental feature or content-unit additions.
3. Keep project context and progress explicit so future agent sessions can resume without reconstructing state.
4. Use starter-kit-style context file names for software projects.
5. Support neutral artifact names for non-code products.
6. Complement Superpowers instead of duplicating implementation, debugging, verification, or review workflows.

## Target Users

- Solo developers using Codex to build software projects.
- Developers adding features to existing projects with AI assistance.
- Creators using Codex to plan structured non-code products such as ebooks, guides, or courses.

## Planned Skills

- `i2p-brief` - create or refresh the product/project brief.
- `i2p-roadmap` - turn the brief into ordered phases and units.
- `i2p-spec` - write a decision-complete spec for one unit.
- `i2p-progress` - maintain project memory and progress.
- `i2p-style` - create and maintain visual, editorial, or UI style consistency.

## Supported Workflows

### New Product

1. Clarify idea, audience, scope, constraints, and success criteria.
2. Create context files.
3. For software products with UI or content products with layout needs, create baseline style direction before roadmap/spec work.
4. Create a roadmap or build plan.
5. Write the first unit spec, including wireframe-ready guidance for UI screen units.
6. Hand implementation or drafting to Superpowers or another specialist skill.
7. Update progress and style context after meaningful work.

### Existing Product Onboarding

1. Inspect current docs, files, and conventions.
2. Create observed context without inventing intent.
3. Establish the current roadmap and progress state.
4. Audit style or UI patterns when relevant.

### Feature or Content-Unit Addition

1. Read existing context.
2. Confirm whether the request changes scope or architecture.
3. Refresh style direction first when a new UI or layout area lacks established patterns.
4. Create or update roadmap units as needed.
5. Write a unit spec.
6. Update progress and style context after completion.

## Artifact Profiles

Software projects use starter-kit-style names:

- `project-overview.md`
- `architecture.md`
- `code-standards.md`
- `ai-workflow-rules.md`
- `ui-tokens.md`
- `ui-rules.md`
- `ui-registry.md`
- `library-docs.md`
- `build-plan.md`
- `progress-tracker.md`

Non-code products use neutral names where appropriate:

- `brief.md`
- `roadmap.md`
- `progress.md`
- `style.md`

## In Scope

- Build five Codex skills under `skills/codex/`.
- Provide reusable templates and references for generated project artifacts.
- Support software and non-code planning workflows.
- Keep `references/` as raw source material.
- Validate skills statically and with dry-run scenarios.

## Out of Scope

- Building a UI application for the skill pack.
- Replacing Superpowers execution, debugging, verification, or review skills.
- Creating marketplace packaging beyond the standard Codex skill structure.
- Editing source material under `references/` unless explicitly requested.
- Implementing generated products during skill-pack development.

## Success Criteria

1. A future Codex agent can read this repo context and implement the five skills without rediscovering project intent.
2. Each skill has concise `SKILL.md` instructions and appropriate bundled templates or references.
3. The pack can dry-run a software idea into context, build plan, unit spec, progress, and style artifacts.
4. The pack can dry-run an ebook idea into neutral brief, roadmap, unit spec, progress, and editorial style artifacts.
5. The pack does not duplicate Superpowers implementation responsibilities.
