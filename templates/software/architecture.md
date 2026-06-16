# Architecture

## Stack

| Layer | Technology | Role |
| --- | --- | --- |
| Application | [Framework/runtime] | [Role] |
| Language | [Language] | [Role] |
| Data | [Database/storage] | [Role] |
| Auth | [Provider or approach] | [Role] |
| UI | [UI system, if relevant] | [Role] |
| Testing | [Test tools] | [Role] |

## System Boundaries

| Area | Owns |
| --- | --- |
| `[path]/` | [Responsibility] |
| `[path]/` | [Responsibility] |
| `[path]/` | [Responsibility] |

## Data Flow

### [Primary Flow Name]

```text
[Actor/action]
  -> [Boundary/component]
  -> [Processing]
  -> [Storage/output]
```

## Storage Model

- **[Storage type]**: [What belongs here]
- **[Storage type]**: [What belongs here]

## Auth and Access Model

- [How authentication works]
- [How authorization or ownership is enforced]
- [Protected resources or routes]

## External Integrations

| Integration | Purpose | Boundary |
| --- | --- | --- |
| [Service/API] | [Purpose] | [Where it is called] |

## Invariants

- [Rule the codebase must never violate]
- [Rule the codebase must never violate]
- [Rule the codebase must never violate]
- [Rule the codebase must never violate]
