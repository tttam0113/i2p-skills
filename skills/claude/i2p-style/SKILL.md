---
name: i2p-style
description: Create or update style systems for software UI and non-code products. Use when writing or refreshing context/ui-tokens.md, context/ui-rules.md, context/ui-registry.md, context/style.md, context/editorial-style.md, or context/layout-guide.md; auditing existing visual or editorial patterns; capturing product-language guidance; or imprinting reusable UI or content patterns after a unit is built or drafted.
---

Create or update style artifacts that keep future UI, content, and product language consistent. Keep this skill focused on style systems: do not implement UI, draft final content, execute plans, debug, verify code, or perform review workflows.

## Step 1 — Read Existing Context

Read `AGENTS.md`, `CLAUDE.md`, and files under `context/` when they exist. Read existing style artifacts before changing them — preserve useful decisions and avoid replacing established patterns without a clear reason.

## Step 2 — Choose the Mode

- **New product style guide** — create baseline style guidance from the brief/project overview, audience, constraints, product type, and user preferences. Prefer concrete tokens, vocabulary, examples, structural rules, and quality bars over abstract brand language.
- **Existing-product audit** — inspect available docs, files, components, or content samples. Record observed patterns as current style, and record deviations or inconsistencies as fix candidates. Do not rewrite product code or content as part of the audit.
- **Post-unit imprint** — capture reusable patterns created during a completed unit. For software, update tokens, UI rules, or registry entries. For non-code products, update voice, vocabulary, section, callout, checklist, citation, or layout rules.

If you are unsure which mode applies, ask one question to resolve it.

## Step 3 — Choose the Artifact Profile

**Software** — write or refresh one or more of:

- `context/ui-tokens.md` — visual tokens: color, typography, spacing, radius, borders, invariants.
- `context/ui-rules.md` — build rules for layout, components, typography, states, icons, media, prohibited patterns.
- `context/ui-registry.md` — reusable component and pattern entries, including components to fix.

**Non-code** — write or refresh one or more of:

- `context/style.md` — default guide for tone, vocabulary, structure patterns, examples, sources, layout, and quality bar.
- `context/editorial-style.md` — add when voice, tone, language, and section rules need more detail than `style.md`.
- `context/layout-guide.md` — add when target format, typography, visual elements, tables/lists, or export checks need more detail.

Write only the files where there is meaningful content to capture. Do not create empty style files.

## Step 4 — Ask Missing Style Decisions

Ask only for missing decisions that would make the artifact ambiguous. If an audit reveals uncertainty, record it as an open question or fix candidate rather than guessing. One question at a time if needed.

## Step 5 — Write the Artifacts

Write the artifacts using the templates for the chosen profile (see **Templates** below). Follow these rules:

- Write concrete guidance. Do not leave `TBD`, `TODO`, or bracketed placeholder text in the final files.
- Do not implement UI or rewrite components. Identify patterns and deviations so later implementation work can use them.
- Do not draft final chapters, lessons, sections, or marketing copy. Style artifacts guide later drafting and review.

## Step 6 — Update Progress

If style decisions, open questions, or audit findings affect future work, update the active progress file when it exists. If no progress file exists, include clear handoff notes in your response.

---

## Templates

### `context/ui-tokens.md` — Software: Visual Tokens

```markdown
# UI Tokens

Define visual tokens for this software product. Components should use these tokens instead of hardcoded visual values.

## Theme

[Describe the visual language.]

## Colors

| Role | Token | Value | Usage |
| --- | --- | --- | --- |
| Page background | `[token]` | `[value]` | [Usage] |
| Surface | `[token]` | `[value]` | [Usage] |
| Primary text | `[token]` | `[value]` | [Usage] |
| Muted text | `[token]` | `[value]` | [Usage] |
| Accent | `[token]` | `[value]` | [Usage] |
| Border | `[token]` | `[value]` | [Usage] |
| Error | `[token]` | `[value]` | [Usage] |
| Success | `[token]` | `[value]` | [Usage] |

## Typography

| Role | Font | Size/Weight | Usage |
| --- | --- | --- | --- |
| Heading | [Font] | [Size/weight] | [Usage] |
| Body | [Font] | [Size/weight] | [Usage] |
| Caption | [Font] | [Size/weight] | [Usage] |

## Spacing

| Token/Class | Value | Usage |
| --- | --- | --- |
| [Token] | [Value] | [Usage] |

## Radius

| Context | Token/Class | Value |
| --- | --- | --- |
| Small UI | [Token] | [Value] |
| Cards/panels | [Token] | [Value] |
| Overlays | [Token] | [Value] |

## Invariants

- [Token usage rule]
- [Hardcoded value rule]
- [Color or typography rule]
```

### `context/ui-rules.md` — Software: Build Rules

```markdown
# UI Rules

Concise rules for building UI in this project. Read this before creating or modifying visual components.

## Layout

- [Page width, spacing, navigation, or shell rule]
- [Responsive behavior rule]

## Components

- [Card/panel rule]
- [Button rule]
- [Form control rule]
- [Table/list rule]

## Typography

- [Heading rule]
- [Body text rule]
- [Muted text rule]

## States

- [Loading state rule]
- [Empty state rule]
- [Error state rule]
- [Disabled state rule]

## Icons and Media

- [Icon library or image usage rule]

## Do Nots

- [Prohibited visual pattern]
- [Prohibited hardcoded value or class]
- [Prohibited layout behavior]
```

### `context/ui-registry.md` — Software: Component Registry

```markdown
# UI Registry

Living registry of reusable UI patterns. Update after building or auditing components.

## Baseline

| Property | Correct Pattern |
| --- | --- |
| Card background | [Token/class] |
| Card border | [Token/class] |
| Card radius | [Token/class] |
| Primary button | [Token/class pattern] |
| Secondary button | [Token/class pattern] |
| Input | [Token/class pattern] |
| Primary text | [Token/class] |
| Muted text | [Token/class] |

## Components

### [Component Name]

File: [path]
Last updated: [date]

| Property | Value |
| --- | --- |
| Background | [Token/class] |
| Border | [Token/class] |
| Border radius | [Token/class] |
| Text | [Token/class] |
| Spacing | [Token/class] |
| Hover/focus | [Token/class] |
| Shadow | [Token/class or none] |

Pattern notes:
[Important pattern decisions and allowed variations.]

## Components To Fix

- [Component/path] - [Deviation] -> [Expected pattern]
```

### `context/style.md` — Non-Code: Default Style Guide

```markdown
# Style Guide

Defines the voice, structure, formatting, and quality bar for this product.

## Voice and Tone

- **Voice:** [Overall voice]
- **Tone:** [Tone for the audience]
- **Avoid:** [Tone or language to avoid]

## Vocabulary

| Preferred Term | Avoid | Notes |
| --- | --- | --- |
| [Term] | [Term] | [Usage note] |

## Structure Patterns

### Chapters or Modules

- [Opening pattern]
- [Body pattern]
- [Closing pattern]

### Sections

- [Heading pattern]
- [Paragraph length/style]
- [Example usage]

### Callouts

- [Callout type and format]

### Checklists

- [Checklist format]

## Examples

- [How examples should be written]
- [Required level of specificity]

## Source and Citation Rules

- [Source rule]
- [Citation or attribution rule]
- [What to do when a source is uncertain]

## Layout Rules

- [Formatting rule]
- [Table/list rule]
- [Image or diagram rule]

## Quality Bar

- [Review criterion]
- [Review criterion]
- [Review criterion]
```

### `context/editorial-style.md` — Non-Code: Voice and Language Detail

```markdown
# Editorial Style

## Audience Reading Level

[Expected reading level, assumed background, and terminology constraints.]

## Tone Rules

- [Rule]
- [Rule]
- [Rule]

## Language Rules

- [Rule about sentence length, active voice, or jargon]
- [Rule about examples]
- [Rule about repeated terms]

## Section Rules

- [Heading rule]
- [Intro rule]
- [Summary rule]

## Review Checklist

- [ ] The unit matches the audience.
- [ ] The unit delivers one clear outcome.
- [ ] The unit uses approved vocabulary.
- [ ] The unit includes concrete examples where needed.
- [ ] The unit avoids out-of-scope promises.
```

### `context/layout-guide.md` — Non-Code: Format and Layout

```markdown
# Layout Guide

Define formatting and layout rules for the finished product.

## Format

- **Target format:** [PDF/EPUB/web/docs/etc.]
- **Primary layout constraint:** [Page size, screen width, platform rules, etc.]

## Typography

| Role | Style |
| --- | --- |
| Title | [Style] |
| Heading | [Style] |
| Body | [Style] |
| Caption | [Style] |

## Sections

- [Rule for chapter/module starts]
- [Rule for section breaks]
- [Rule for summaries or exercises]

## Visual Elements

- [Image rule]
- [Diagram rule]
- [Icon rule]

## Tables and Lists

- [Table rule]
- [Bullet list rule]
- [Checklist rule]

## Export Checks

- [ ] Layout is readable in the target format.
- [ ] Headings and lists are consistent.
- [ ] Images or diagrams are legible.
- [ ] No placeholder text remains.
```

---

Hand off roadmap changes to `/i2p-roadmap`, unit specs to `/i2p-spec`, and progress maintenance to `/i2p-progress`.
