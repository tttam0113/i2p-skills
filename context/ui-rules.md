# UI Rules

This repo has no product UI yet. These rules define how `i2p-style` should handle style systems in generated projects.

## Software Projects

For software products, `i2p-style` should support:

- Design tokens.
- UI rules.
- UI registry.
- New-product UI direction when no design assets exist.
- Wireframe-ready screen archetypes for later `i2p-spec` screen specs.
- Component pattern capture.
- Existing UI audits.

Default software outputs:

- `context/ui-tokens.md`
- `context/ui-rules.md`
- `context/ui-registry.md`

## Non-Code Products

For content products, `i2p-style` should support:

- Tone and voice.
- Vocabulary rules.
- Heading and section patterns.
- Callout, checklist, and example patterns.
- Citation and source-note conventions.
- Layout and formatting rules.

Default non-code outputs:

- `context/style.md`
- Optional `context/editorial-style.md`
- Optional `context/layout-guide.md`

## Rule

Do not use this repo's `ui-*` files as an app design system. Use them as active context for designing the `i2p-style` skill.

`i2p-style` may define textual UI direction, screen archetypes, and layout rules. It must not implement UI, create visual mockup files, or replace frontend execution workflows.
