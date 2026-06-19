# i2p Skill Pack

`i2p-*` la bo Codex skill giup bien mot y tuong san pham thanh cac artifact ro rang truoc khi bat dau thuc thi. Bo skill nay phu hop cho ca du an phan mem va san pham phi-code nhu ebook, khoa hoc, guide, bo tai lieu, hoac content system.

Muc tieu cua pack la giu cho qua trinh "idea to product" co ngu canh, co lo trinh, co spec, co tien do, va co style system de cac phien lam viec sau co the tiep tuc ma khong phai doan lai y dinh ban dau.

## Skill Inventory

Bo skill gom 5 skill:

| Skill | Dung de lam gi | Artifact chinh |
| --- | --- | --- |
| `i2p-brief` | Tao hoac cap nhat product/project brief | `context/project-overview.md` hoac `context/brief.md` |
| `i2p-roadmap` | Bien brief thanh roadmap/build plan co thu tu | `context/build-plan.md` hoac `context/roadmap.md` |
| `i2p-spec` | Viet spec decision-complete cho mot unit | `context/specs/NN-unit-name.md` |
| `i2p-progress` | Ghi nho tien do, quyet dinh, cau hoi mo, session notes | `context/progress-tracker.md` hoac `context/progress.md` |
| `i2p-style` | Tao hoac cap nhat style system cho UI, noi dung, ngon ngu san pham | `context/ui-*.md`, `context/style.md`, `context/editorial-style.md` |

## Khi Nao Nen Dung

Dung `i2p-*` khi ban muon:

- Bat dau mot san pham moi tu y tuong con mo.
- Onboard mot du an hien co vao bo context de Codex hieu dung hien trang.
- Chia mot san pham thanh roadmap, phase, unit, chapter, lesson, hoac module.
- Viet spec cho mot feature, UI screen, API group, ebook chapter, course lesson, document section, hoac design/layout pass.
- Cap nhat tien do de phien Codex sau co the tiep tuc dung cho.
- Ghi lai UI style, editorial style, layout rules, vocabulary, component registry, hoac content pattern.

Khong dung `i2p-*` de thay the workflow implementation, debugging, verification, hoac code review. Sau khi brief, roadmap, spec da ro, hay hand off sang Superpowers hoac skill chuyen dung khac de thuc thi.

## Workflow Nhanh

### San Pham Moi

1. Chay `i2p-brief` de lam ro y tuong, doi tuong, scope, constraints, success criteria.
2. Chay `i2p-style` neu san pham can UI, editorial voice, format, hoac visual consistency. Voi software chua co design assets, dung buoc nay de tao baseline UI direction truoc roadmap/spec.
3. Chay `i2p-roadmap` de tao cac phase va unit co thu tu.
4. Chay `i2p-spec` cho unit dau tien, gom wireframe sections cho UI screen units.
5. Thuc thi bang Superpowers hoac skill chuyen dung.
6. Chay `i2p-progress` sau moi ket qua co y nghia.

### Du An Hien Co

1. Chay `i2p-brief` o che do existing-product onboarding de doc docs/files va viet observed context.
2. Chay `i2p-style` audit mode neu co UI, format, hoac content pattern.
3. Chay `i2p-roadmap` de ghi lai hien trang va cac next units.
4. Chay `i2p-progress` de tao hoac cap nhat progress source of truth.

### Them Feature Hoac Content Unit

1. Doc context hien co.
2. Chay `i2p-brief` neu request thay doi scope, audience, constraints, success criteria, hoac vocabulary.
3. Chay `i2p-style` truoc khi UI hoac layout area moi chua co visual direction ro rang.
4. Chay `i2p-roadmap` neu cong viec can tach thanh nhieu unit.
5. Chay `i2p-spec` cho unit tiep theo.
6. Sau khi thuc thi, chay `i2p-progress` va `i2p-style` neu co thay doi dang ghi nho.

### San Pham Software Chua Co Design Assets

Dung flow nay khi user co y tuong software nhung chua co visual design, wireframes, hoac screenshots:

```text
i2p-brief -> i2p-style -> i2p-roadmap -> i2p-spec -> execution
```

`i2p-style` tao textual UI direction: visual feel, navigation model, layout density, screen archetypes, component baseline, va state rules. Sau do `i2p-spec` bien direction nay thanh per-screen wireframe specs gom regions, hierarchy, actions, data shown, states, va responsive notes.

UI drafts, image mockups, prototypes, va implementation nen duoc giao cho execution hoac frontend workflow sau khi spec da ro.

## Artifact Profiles

### Software Profile

Dung cho du an phan mem. Cac artifact mac dinh:

```text
context/project-overview.md
context/architecture.md
context/code-standards.md
context/ai-workflow-rules.md
context/ui-tokens.md
context/ui-rules.md
context/ui-registry.md
context/library-docs.md
context/build-plan.md
context/progress-tracker.md
context/specs/NN-unit-name.md
```

### Non-Code Profile

Dung cho ebook, khoa hoc, guide, bo tai lieu, content system, hoac san pham phi-code:

```text
context/brief.md
context/roadmap.md
context/progress.md
context/style.md
context/specs/NN-unit-name.md
```

Co the bo sung:

```text
context/editorial-style.md
context/source-notes.md
context/review-checklist.md
context/layout-guide.md
```

## Huong Dan Tung Skill

### `i2p-brief`

Dung khi can tao hoac refresh brief truoc roadmap, spec, implementation, hoac drafting.

Che do chinh:

- **New product:** lam ro idea, audience, goals, scope, constraints, success criteria, key terms.
- **Existing product onboarding:** doc docs/files hien co va viet observed context, khong tu bia intent.
- **Feature/content-unit addition:** so request voi brief hien tai va chi cap nhat khi co thay doi ve scope, audience, constraints, success criteria, hoac vocabulary.

Prompt mau:

```text
Use i2p-brief to create context for a new SaaS product idea: ...
```

```text
Use i2p-brief to onboard this existing repository and write observed project context.
```

Output chinh:

- Software: `context/project-overview.md`
- Non-code: `context/brief.md`
- Co the cap nhat progress file neu phat hien decisions/open questions.

### `i2p-roadmap`

Dung khi da co brief va can bien brief thanh phase/unit co thu tu.

Che do chinh:

- **Full roadmap:** tao roadmap cho san pham moi.
- **Existing-product baseline:** ghi lai hien trang va next units dua tren docs/files hien co.
- **Incremental roadmap:** them hoac sua cac unit can thiet cho mot feature, chapter, module, lesson, section, hoac asset set.

Prompt mau:

```text
Use i2p-roadmap to turn the current brief into a software build plan.
```

```text
Use i2p-roadmap to add roadmap units for chapter 3 of this ebook.
```

Output chinh:

- Software: `context/build-plan.md`
- Non-code: `context/roadmap.md`

Unit tot nen co mot ket qua visible hoac reviewable, du nho cho mot session tap trung, va duoc sap xep theo dependency.

### `i2p-spec`

Dung khi can spec cho dung mot roadmap/build-plan unit truoc khi thuc thi.

Spec nen lam ro:

- Goal
- Context
- Scope
- Requirements
- Design or Style Notes
- Dependencies
- Acceptance Criteria
- Verification and Review
- Handoff Notes

Prompt mau:

```text
Use i2p-spec to write the spec for build-plan unit 03.
```

```text
Use i2p-spec to create a chapter spec for "Safety Mindset" from the roadmap.
```

Output chinh:

```text
context/specs/NN-unit-name.md
```

`i2p-spec` khong implement code va khong draft final content. No chi tao spec du ro de agent thuc thi khong phai doan scope, acceptance criteria, dependencies, hoac style constraints.

Voi UI screen units, `i2p-spec` nen co textual wireframe section: screen purpose, regions, hierarchy, primary/secondary actions, data shown, states, responsive notes, va style references.

### `i2p-progress`

Dung sau moi thay doi co y nghia de giu project memory dung va gon.

Nen ghi lai:

- Current phase/status
- Last completed
- In progress
- Next work
- Decisions
- Open questions
- Session notes can thiet cho viec resume
- Reset notes khi mot session hoac approach di sai huong

Prompt mau:

```text
Use i2p-progress to update the project tracker after completing unit 04.
```

```text
Use i2p-progress to record this decision and the next unfinished unit.
```

Output chinh:

- Software: `context/progress-tracker.md`
- Non-code: `context/progress.md`

Nguyen tac quan trong: khong bao gio luu secrets, credentials, tokens, private keys, cookies, auth headers, connection strings, hoac gia tri giong credential vao progress files.

### `i2p-style`

Dung khi can tao hoac cap nhat style system cho UI, editorial style, product language, hoac repeated patterns.

Che do chinh:

- **New product style guide:** tao style baseline tu brief, audience, constraints, product type.
- **New product UI direction:** khi chua co design assets, dinh nghia visual direction, navigation/layout model, component baseline, screen archetypes, va state rules de screen specs co the dung.
- **Existing-product audit:** doc UI/content hien co va ghi lai patterns, deviations, fix candidates.
- **Post-unit imprint:** sau khi co component, chapter, lesson, callout, checklist, layout, hoac pattern moi, cap nhat style artifact de dung lai.

Prompt mau:

```text
Use i2p-style to create UI style context for this software product.
```

```text
Use i2p-style to audit the editorial style of this ebook draft.
```

Output chinh:

- Software:
  - `context/ui-tokens.md`
  - `context/ui-rules.md`
  - `context/ui-registry.md`
- Non-code:
  - `context/style.md`
  - `context/editorial-style.md`
  - `context/layout-guide.md`

`i2p-style` khong implement UI, khong tao image mockups, va khong draft final content. No ghi lai style rules, UI direction, wireframe-ready guidance, patterns, vocabulary, registry entries, hoac audit findings.

## Cai Dat

### Cai Tu GitHub Bang npx

Co the cai skill truc tiep tu public GitHub repository:

```bash
npx github:tttam0113/i2p-skills install --target codex
```

```bash
npx github:tttam0113/i2p-skills install --target claude
```

Cai ca hai bien the Codex va Claude:

```bash
npx github:tttam0113/i2p-skills install --target all
```

Cac lenh nay cai truc tiep tu public GitHub repository.

Installer se copy skill folders vao:

- Codex: `$CODEX_HOME/skills` neu co `CODEX_HOME`, neu khong thi dung `~/.codex/skills`
- Claude: `$CLAUDE_HOME/skills` neu co `CLAUDE_HOME`, neu khong thi dung `~/.claude/skills`

Options huu ich:

```bash
npx github:tttam0113/i2p-skills install --target codex --dry-run
npx github:tttam0113/i2p-skills install --target claude --force
npx github:tttam0113/i2p-skills install --target codex --dest /custom/skills/path
```

Sau khi cai xong, restart Codex hoac Claude de tool discover skills moi.

### Cap Nhat Ban Da Cai

Neu `i2p-*` skills da duoc cai, chay lai installer voi `--force` de ghi de cac skill folders hien co.

Xem truoc update ma chua ghi file:

```bash
npx github:tttam0113/i2p-skills install --target all --dry-run
```

Cap nhat rieng Codex:

```bash
npx github:tttam0113/i2p-skills install --target codex --force
```

Cap nhat rieng Claude:

```bash
npx github:tttam0113/i2p-skills install --target claude --force
```

Cap nhat ca Codex va Claude:

```bash
npx github:tttam0113/i2p-skills install --target all --force
```

Sau khi update, restart Codex hoac Claude de load skill instructions moi nhat.

### Cai Thu Cong

Codex skills nam tai:

Trong repo nay, cac skill nam tai:

```text
skills/codex/
```

Moi skill co dang:

```text
skills/codex/<skill-name>/
|-- SKILL.md
|-- agents/
|   `-- openai.yaml
|-- assets/
|   `-- templates/
`-- references/
```

De su dung trong Codex, copy hoac cai cac folder skill tu `skills/codex/` vao thu muc skill cua Codex theo cach moi truong cua ban dang cau hinh. Sau khi skill duoc discover, goi skill bang ten, vi du:

```text
Use i2p-brief to create a product brief for ...
Use i2p-roadmap to build the roadmap from the current brief.
Use i2p-spec for the next roadmap unit.
Use i2p-progress to update project memory.
Use i2p-style to capture UI direction and editorial style rules.
```

Claude skills nam tai:

```text
skills/claude/
```

## Validation

Bo skill da duoc validate theo project tracker:

- Static validation passed cho ca 5 skill.
- Dry-run software product da hoan tat voi idea "Decision Log Lite".
- Dry-run non-code product da hoan tat voi ebook idea "Cam nang lai xe an toan".
- Dry-run khong phat hien concrete skill defects.

Truoc khi publish hoac thay doi skill, nen chay lai:

- Codex skill validation cho tung folder skill.
- Mot dry-run software.
- Mot dry-run non-code.
- Kiem tra generated artifacts khong de lai placeholders nhu `TBD`, `TODO`, hoac bracketed template text.

## Repository Layout

```text
/
|-- AGENTS.md
|-- CLAUDE.md
|-- context/
|-- docs/
|   `-- specs/
|-- dry-runs/
|-- bin/
|   `-- i2p-skills.mjs
|-- references/
|-- skills/
|   |-- codex/
|   `-- claude/
|-- test/
|   `-- i2p-skills-cli.test.mjs
|-- package.json
`-- templates/
```

`context/` la source of truth hien tai cua project nay. `references/` la raw source material va khong nen sua tru khi co yeu cau ro rang.

## Design Boundary

`i2p-*` chi phu trach product thinking va planning artifacts:

- Brief
- Roadmap
- Unit spec
- Progress memory
- Style system

Implementation, debugging, verification, va code review nen duoc hand off sang Superpowers hoac workflow chuyen dung tuong ung.
