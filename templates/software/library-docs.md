# Library Docs

Project-specific usage patterns for third-party libraries, services, and tools. Read the relevant section before implementing any feature that touches that tool.

## Authority Order

1. Official docs or configured MCP server.
2. Installed project skills.
3. This file.
4. General model knowledge.

## Before Using Any Library

- Check whether official or local docs are available.
- Confirm current API shape if the library changes frequently.
- Follow project-specific patterns in this file.

## [Library or Service Name]

### Purpose

[What this library/service is used for in this project.]

### Usage Pattern

```text
[Call site or boundary]
  -> [Library/service]
  -> [Expected result]
```

### Rules

- [Rule]
- [Rule]
- [Rule]

### Example

```text
[Small example or pseudocode]
```
