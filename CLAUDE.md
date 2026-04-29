# The Registry of Unresolved Community Incidents

## What this project is

A deadpan Kenyan heritage institution website that documents mundane community events with the full solemnity of a national archive. Run by the fictional "Mwisho wa Mwisho District Heritage Trust, Est. 1991."

The site is never a joke. The comedy comes from the gap between institutional gravity and the complete ordinariness of the events. Every word of copy, every label, every metadata line must read as if produced by a serious civic institution.

## Tech stack

- Next.js 14 App Router
- TypeScript (strict mode)
- Tailwind CSS
- MDX for oral history long-form content
- Flat JSON files for incident data and oral history metadata
- No database — all data is file-based and statically generated

## Project structure

See /docs/STRUCTURE.md for the full folder map.

## What Claude Code is responsible for

- Scaffolding and architecture decisions
- All data files: /data/incidents/*.json and /data/oral-histories/*.json
- All MDX content files: /content/oral-histories/*.mdx
- TypeScript types: /types/index.ts
- Data utilities: /lib/incidents.ts and /lib/oral-histories.ts
- Any file system operations, renaming, or reorganisation
- API routes if needed in future
- README and documentation files

## What Cursor is responsible for

- All component files under /components/**
- All page files under /app/**
- All styling decisions (Tailwind classes, design tokens)
- Responsive layout implementation
- Any UI iteration based on design screens

## Design source of truth

The Claude Design output lives in /docs/design/. It contains:
- components/shared.jsx — the full DS (design system) token object and all shared components
- components/screens-1-2.jsx — Homepage, Browse Incidents
- components/screens-3-4.jsx — Incident Record, Oral Histories Index
- components/screens-5-6.jsx — Mobile Homepage, Mobile Incident Record
- components/screens-7-8.jsx — Disputed Accounts, Open Incidents
- components/screens-9-12.jsx — About, Submission Guidelines, Contact, Privacy

Cursor must reference these files for every component and page it builds. All copy, layout logic, and data shapes are already resolved in those files. Do not invent alternatives.

## Guardrails — read before every task

1. Never modify files in /data or /content without being explicitly asked to.
2. Never change TypeScript types without checking all usages first. Run a search before editing /types/index.ts.
3. Never install a new npm package without stating why and getting confirmation.
4. Never use `any` in TypeScript. Always type fully.
5. Never hardcode copy or strings inside components. All incident data comes from /data. All UI labels come from /lib/constants.ts.
6. Never create a new component if a suitable one already exists. Check /components before creating.
7. Always generate static paths using generateStaticParams for all dynamic routes.
8. All images use next/image. No raw <img> tags.
9. Keep all data-fetching in server components. No client-side fetching unless absolutely necessary — and if so, explain why.
10. After completing any task, state exactly what files were created or modified and what the next logical step is.

## Copy and tone

All site copy must match the archive's voice: formal, measured, slightly elegiac, committed. Never ironic. Examples:
- "The sufuria came to rest approximately 0.9 metres from the serving table. It was undamaged."
- "Mr. Barasa has not been asked to explain. No explanation has been offered."
- "The archive does not adjudicate. It documents."
- "Father Kamau declared a brief pause in proceedings. The pause did not end."
- "Chief Omondi died in 2003. No statement was collected from him prior to his death. This constitutes a gap in the record which cannot now be remedied."

When generating any content — descriptions, metadata, annotations — maintain this register exactly.

## Design tokens (from DS object in shared.jsx)

```
cream:        #F5F2EC   (page background)
charcoal:     #2C2A25   (primary text)
secondary:    #7A7060   (muted text, labels)
amber:        #8B5E3C   (accent — borders, active states, links)
amberLight:   #FAEEDA   (OPEN pill background, alert bar, open incident highlight)
amberDeep:    #633806   (OPEN pill text, Heritage Trust Note label)
rule:         #D4C9B5   (hairline borders, dividers)
annotationBg: #F0EBE0   (Heritage Trust Note background)
disputedBg:   #EDE0D8   (DISPUTED pill background)
disputedText: #6B3020   (DISPUTED pill text)
closedBg:     #ECEAE6   (CLOSED pill background)
closedText:   #4A4640   (CLOSED pill text)
```

## Typography

- Serif (EB Garamond): page titles, incident names, pull quotes, section headings, card titles
- Sans-serif (Source Sans 3): body copy, navigation, metadata, UI labels, filter controls
- Monospaced (Space Mono): reference numbers (INC-YYYY-XXX), dates, catalogue codes, statistics, Heritage Trust Note labels

## Naming conventions

- Components: PascalCase, descriptive — IncidentCard, OralHistoryCard, HeritageTrustNote
- Utilities: camelCase — getIncidentByRef, getAllOralHistories
- Data files: kebab-case matching ref — inc-1987-003.json, oht-1987-003-agnes-wambua.json
- CSS: Tailwind only. No custom CSS files except /app/globals.css for base tokens.

## Incident ref format

- Incidents: INC-YYYY-XXX (e.g. INC-1987-003)
- Oral histories: OHT-YYYY-XXX (e.g. OHT-1991-001)
- Objects: OBJ-XXX (e.g. OBJ-001)
- Documents: DOC-YYYY-XXX (e.g. DOC-2023-014)

## Current phase

See /docs/PHASES.md for the active build phase and what is in scope.
