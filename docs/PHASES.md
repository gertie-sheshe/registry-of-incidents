# Build Phases — Registry of Unresolved Community Incidents

Run phases in order. Do not begin a phase until the previous one is reviewed and confirmed working.
Update the ACTIVE PHASE line below before starting each phase.

## ACTIVE PHASE: 1

---

## Phase 1 — Foundation (Claude Code)

**Tool:** Claude Code
**Scope:** Scaffold, types, data files, utilities, base config. No components. No pages.

**Prompt:**
```
Read CLAUDE.md, docs/PRD.md, and docs/STRUCTURE.md before doing anything else.

Scaffold the full project as described in docs/STRUCTURE.md. Complete all tasks in order. Do not skip ahead.

1. Initialise Next.js 14 App Router with TypeScript (strict mode) and Tailwind CSS.

2. Install and configure next-mdx-remote for MDX support in the App Router.

3. Create /types/index.ts with the following types, exactly:
   - StatusType: "CLOSED" | "OPEN" | "DISPUTED"
   - IncidentObject: { ref: string; objectType: string; material: string; capacity: string; condition: string; currentLocation: string }
   - PullQuote: { quote: string; attribution: string }
   - Incident: all fields as specified in docs/PRD.md data shapes section
   - OralHistory: all fields as specified in docs/PRD.md data shapes section
   - NavItem: { label: string; href: string }
   - FilterOption: { label: string; value: string }

4. Create all 8 incident JSON files in /data/incidents/ using the incident content from docs/PRD.md and the full prose and copy from docs/design/components/screens-1-2.jsx, screens-3-4.jsx, and screens-7-8.jsx. Write all prose in the archive's voice — formal, measured, never ironic. Featured: inc-1987-003, inc-2001-007, inc-2016-019.

5. Create 5 oral history JSON files in /data/oral-histories/ using witness data from docs/design/components/screens-3-4.jsx and screens-7-8.jsx. No file for Mrs. Grace Njeri (no statement on record).

6. Create 5 MDX files in /content/oral-histories/ — one per witness with a statement. Each file: 5 paragraphs of full archival first-person testimony prose, written in the archive's voice. Draw on the excerpts in the design files as seeds; expand to full testimony length.

7. Create /lib/incidents.ts with:
   - getAllIncidents(): Incident[]
   - getIncidentByRef(ref: string): Incident | undefined
   - getFeaturedIncidents(): Incident[]
   - getOpenIncidents(): Incident[]
   - getDisputedIncidents(): Incident[]

8. Create /lib/oral-histories.ts with:
   - getAllOralHistories(): OralHistory[]
   - getOralHistoryByRef(ref: string): OralHistory | undefined
   - getOralHistoriesByIncidentRef(incidentRef: string): OralHistory[]

9. Create /lib/constants.ts with:
   - NAV_ITEMS: NavItem[] — all 6 nav links (Browse Incidents, Oral Histories, Disputed Accounts, Open Incidents, About the Trust, Search)
   - BOTTOM_TAB_ITEMS — 4 mobile tabs (Browse, Oral Histories, Open, Search)
   - FILTER_OPTIONS for incidents page (8 options from Screen 2)
   - FILTER_OPTIONS for oral histories page (6 options from Screen 4)
   - FILTER_OPTIONS for disputed accounts page (4 options from Screen 7)
   - FOOTER_COPY — institution name, address, founding year, all footer links
   - LEGAL_LINE — the footer legal sentence
   - All static page content for About (Screen 9), Submission Guidelines (Screen 10), Contact (Screen 11), Privacy (Screen 12) — draw exact copy from docs/design/components/screens-9-12.jsx
   - REGISTRY_STATS — the 4 stat blocks (22 incidents, 1 open, 47 testimonies, 37 years)
   - ABOUT_STATS — the 5 stat blocks from Screen 9

10. Create /app/globals.css with:
    - Tailwind base directives
    - CSS custom properties extracted from the DS object in docs/design/components/shared.jsx:
      --color-cream, --color-charcoal, --color-secondary, --color-amber, --color-amber-light, --color-amber-deep, --color-rule, --color-annotation-bg, --color-disputed-bg, --color-disputed-text, --color-closed-bg, --color-closed-text
    - Google Fonts import: EB Garamond (ital,wght 0,400;0,500;1,400;1,500), Source Sans 3 (wght 300;400;600;700), Space Mono (wght 400;700)

11. Configure tailwind.config.ts:
    - fontFamily: { serif: ["EB Garamond", "serif"], sans: ["Source Sans 3", "sans-serif"], mono: ["Space Mono", "monospace"] }
    - Extend colors with all DS tokens

Do not create any components or pages yet.
After completing all tasks, report every file created with its path and a one-line summary of its contents.
```

---

## Phase 2 — Shared UI components (Cursor)

**Tool:** Cursor
**Reference files:** docs/design/components/shared.jsx
**Scope:** All components in /components/ui/ and /components/layout/. No incident-specific or oral-history-specific components. No pages.

**Prompt:**
```
Read CLAUDE.md and docs/PRD.md. Then open docs/design/components/shared.jsx — this is the source of truth for every component in this phase. Build all shared UI and layout components. Build in this exact order:

/components/ui/:
1. InstitutionalSeal.tsx — SVG component. Outer ring with textPath "MWISHO WA MWISHO DISTRICT HERITAGE TRUST" in EB Garamond. Inner: three horizontal lines of decreasing width. Amber stroke on cream fill. Accepts size prop (default 64). Match shared.jsx exactly.
2. SectionLabel.tsx — Small uppercase sans-serif label. Accepts children and optional className.
3. StatusPill.tsx — Accepts status: StatusType. Three variants: CLOSED (closedBg/closedText), OPEN (amberLight/amberDeep), DISPUTED (disputedBg/disputedText). Space Mono, 9px, uppercase, pill shape.
4. StatBlock.tsx — Large serif number + small uppercase sans-serif label. Accepts value: string and label: string.
5. PullQuote.tsx — Larger serif italic quote with 2px amber left border. Attribution in small sans-serif below. Accepts quote: string and attribution: string.
6. HeritageTrustNote.tsx — Aside block. annotationBg background, 2px amber left border. "HERITAGE TRUST NOTE —" label in Space Mono 9px amberDeep. Body text in Source Sans 3. Accepts children.
7. AlertBar.tsx — Amber-tinted strip (amberLight bg, #E8C99A border-bottom). OPEN StatusPill + description text. Accepts message: string.
8. CategoryTag.tsx — Small bordered label in muted secondary color on #EEEBE4 background.
9. WitnessAvatar.tsx — Initials-only circle. 40px desktop, accepts size prop. Warm gray background (#DDD8CF), charcoal initials in Source Sans 3. Accepts name: string, derives initials from first + last name.
10. PageHeader.tsx — Large serif title + sans-serif subtitle. Accepts title: string and subtitle: string.
11. FilterBar.tsx — CLIENT COMPONENT. Accepts options: FilterOption[] and onChange: (value: string) => void. Tab row with amber active state and bottom border. Match Screen 2 filter bar pattern from screens-1-2.jsx.

/components/layout/:
12. Breadcrumb.tsx — Accepts items: { label: string; href?: string }[]. Small sans-serif. Separator › between items. Last item is non-linked charcoal.
13. SiteFooter.tsx — Two columns: left (institution name in EB Garamond, address, Est. year in Space Mono). Right: footer links from NAV constants. Below: thin rule + centered legal line. All copy from lib/constants.ts.
14. SiteHeader.tsx — InstitutionalSeal (32px) + site name in EB Garamond + right-aligned nav links from NAV_ITEMS constant. Active state in amber. Hidden on mobile (below lg breakpoint).
15. MobileTopBar.tsx — Accepts variant: "hamburger" | "back". Hamburger: site name left, hamburger icon right. Back: back arrow + label left. Visible only below lg breakpoint.
16. BottomTabBar.tsx — 4 tabs from BOTTOM_TAB_ITEMS constant. Fixed bottom. Visible only below lg. Amber active state.

Rules:
- No hardcoded strings. All labels from lib/constants.ts. All colors from Tailwind config (which maps to CSS custom properties).
- No inline styles. Tailwind classes only.
- All types imported from /types/index.ts.
- Check /components before creating — do not duplicate.

Report every file created.
```

---

## Phase 3 — Incident components (Cursor)

**Tool:** Cursor
**Reference files:** docs/design/components/screens-1-2.jsx, screens-3-4.jsx, screens-7-8.jsx
**Scope:** All components in /components/incidents/. No pages.

**Prompt:**
```
Read CLAUDE.md. Reference docs/design/components/screens-1-2.jsx for card patterns and docs/design/components/screens-3-4.jsx for incident record patterns. Build all incident components in /components/incidents/ in this order:

1. IncidentPreviewCard.tsx — Compact card for homepage recent additions. Shows: ref (monospace), name (serif), 1-line description, date, StatusPill. "View full record →" link in amber.
2. IncidentCard.tsx — Full browse card as per Screen 2. Ref + StatusPill top row, incident name (serif), date + venue (monospace), 2-sentence description, CategoryTag row, "View full record →" link.
3. IncidentHeader.tsx — Ref in monospace (block, mb-2), large serif title, metadata row (Date of occurrence, Venue, Status, First documented, Last updated), tags row. Accepts Incident type.
4. IncidentProse.tsx — Renders incident.prose paragraphs in Source Sans 3. After last paragraph, renders HeritageTrustNote if incident.heritageTrustNote is present.
5. ObjectRecord.tsx — Bordered catalogue card. Header row: "Object Catalogue Entry" in EB Garamond + ref in monospace on gray background. Body: 2-column grid of field/value pairs (Object Type, Material, Capacity, Condition, Current Location, Catalogue Ref). Match Screen 3 exactly.
6. IncidentIndexList.tsx — Sidebar compact list. Each item: ref (monospace, 9.5px) + StatusPill right-aligned, incident name in EB Garamond below. Accepts incidents: Incident[]. Bordered outer container, hairline borders between items.
7. RelatedIncidents.tsx — 2-column card row. Each card: ref + StatusPill, serif name, description note, "View full record →" link. Accepts refs: string[], looks up incident data internally.
8. DisputeCard.tsx — Screen 7 layout. Header (ref, name, date, DISPUTED pill, conflict type tag on gray background). Summary row. Two-column accounts (Account A / Account B — each with witness name, role, italic quote). HeritageTrustNote footer strip. "View full incident record →" link.

All types from /types/index.ts. All strings from lib/constants.ts or passed as props. No hardcoded copy.
```

---

## Phase 4 — Oral history component (Cursor)

**Tool:** Cursor
**Reference files:** docs/design/components/screens-3-4.jsx

**Prompt:**
```
Read CLAUDE.md. Reference docs/design/components/screens-3-4.jsx (Screen 4) for the OralHistoryCard design. Build:

/components/oral-histories/OralHistoryCard.tsx
- WitnessAvatar (imported from /components/ui/) + name + age (if present) in EB Garamond
- Role in Source Sans 3 secondary
- Optional note in Space Mono amber (e.g. "First public statement, 2025")
- Incident ref + oral history ref in monospace (if present)
- 2-sentence italic excerpt in EB Garamond
- Designation tags (eyewitness, disputed, deceased, no statement given, primary source)
- "Read full testimony →" link (or "View record →" if hasStatement is false)
- Accepts OralHistory type from /types/index.ts
```

---

## Phase 5 — Pages (Cursor)

**Tool:** Cursor
**Reference files:** All screen files in docs/design/components/
**Scope:** All app/ pages. Each page is a server component that composes from existing components.

**Prompt:**
```
Read CLAUDE.md and docs/PRD.md. Build all pages in /app/ in order. Each page: server component, imports data from /lib/ utilities, composes from existing /components/ only — no new component logic inside page files.

1. app/layout.tsx — Root layout. Font variables applied to html element. Global metadata (title: "The Registry of Unresolved Community Incidents", description from constants). Renders SiteHeader, children, SiteFooter, BottomTabBar. SiteHeader and SiteFooter hidden on mobile (BottomTabBar shown instead).

2. app/page.tsx — Homepage (Screen 1 + 5). getFeaturedIncidents() for the featured section. getAllIncidents() for IncidentIndexList sidebar. Two-column layout desktop, single column mobile. All sections per Screen 1 spec: HeroMasthead, AlertBar, FeaturedIncident, IncidentPreviewCard ×3, RegistryStats, IncidentIndexList sidebar, DisputedAccountsCallout sidebar, OpenIncidentCallout sidebar.

3. app/incidents/page.tsx — Browse (Screen 2). getAllIncidents(). FilterBar (client) + IncidentCard grid (3-col desktop, 1-col mobile).

4. app/incidents/[ref]/page.tsx — Incident record (Screen 3 + 6). getIncidentByRef(ref). getOralHistoriesByIncidentRef(). generateStaticParams from getAllIncidents(). Breadcrumb, IncidentHeader, IncidentProse, ObjectRecord (if present), OralHistoryCard row, RelatedIncidents.

5. app/oral-histories/page.tsx — Index (Screen 4). getAllOralHistories(). FilterBar + OralHistoryCard grid (2-col desktop, 1-col mobile).

6. app/oral-histories/[ref]/page.tsx — Individual testimony. getOralHistoryByRef(ref). Renders MDX content via next-mdx-remote. generateStaticParams from getAllOralHistories(). Page shows: MobileTopBar back, witness header card, MDX body content.

7. app/disputed-accounts/page.tsx — Screen 7. getDisputedIncidents(). FilterBar. DisputeCard list (full width, stacked). Page-level HeritageTrustNote banner.

8. app/open-incidents/page.tsx — Screen 8. getOpenIncidents(). Two-column layout: main (OpenIncidentFeatureCard + DocumentationTimeline) + sidebar. AlertBar at top.

9. app/about/page.tsx — Screen 9. Static. All copy from constants.ts. InstitutionalSeal, PullQuote, founding families grid, trustees grid, stats row, HeritageTrustNote.

10. app/submission-guidelines/page.tsx — Screen 10. Static. All copy from constants.ts. Numbered sections. Closing HeritageTrustNote.

11. app/contact/page.tsx — Screen 11. Static. All copy from constants.ts. Info grid + communication policy prose. No form.

12. app/privacy/page.tsx — Screen 12. Static. All copy from constants.ts. 7 numbered sections.
```

---

## Phase 6 — Responsive pass (Cursor)

**Tool:** Cursor
**Reference files:** docs/design/components/screens-5-6.jsx

**Prompt:**
```
Read CLAUDE.md. Reference docs/design/components/screens-5-6.jsx for mobile layouts. Do a full responsive pass across all pages and components. Ensure:

1. All grids collapse to single column at lg breakpoint (incidents 3-col → 1-col, oral histories 2-col → 1-col, founding families 3-col → 1-col, trustees 2-col → 1-col, about stats 5-col → 2-col, object record 2-col → 1-col)
2. BottomTabBar is visible only below lg. SiteHeader nav is hidden below lg.
3. On mobile incident record page: OralHistoryCard row becomes overflow-x-auto horizontal scroll container, each card ~260px wide.
4. HeroMasthead: stacks seal above title on mobile, centered.
5. Homepage sidebar (stats, incident index, callout boxes) moves below main column on mobile.
6. MobileTopBar with back arrow shown on mobile incident and oral history record pages.
7. Metadata row on IncidentHeader: stacks as labeled rows on mobile (not horizontal flex).
8. FilterBar: overflows with horizontal scroll on mobile (no wrapping).
9. Two-column layout on Screen 8 (Open Incidents) collapses to single column on mobile.
10. DisputeCard two-column accounts grid collapses to single column on mobile.

Test each page at 390px mentally against the design screens. Report any discrepancies found.
```

---

## Phase 7 — Content and copy audit (Claude Code)

**Tool:** Claude Code
**Scope:** Read-only audit. No edits.

**Prompt:**
```
Read CLAUDE.md. Then read all files in /data/incidents/, /data/oral-histories/, /content/oral-histories/, and /lib/constants.ts.

Audit every piece of copy for consistency with the archive's voice as defined in CLAUDE.md. The voice is: formal, measured, slightly elegiac, committed, never ironic. Examples of the correct register are in CLAUDE.md.

Flag any line that:
- Is too casual or colloquial
- Breaks the formal civic register
- Contains irony, jokes, or knowing winks
- Uses contractions inappropriately
- Does not sound like it was written by a serious heritage institution

Suggest a corrected version for each flagged line. Do not edit any files — report only. Present findings as a numbered list.
```

---

## Phase 8 — Final checks (Claude Code)

**Tool:** Claude Code
**Scope:** Technical audit. Report only, no edits unless instructed.

**Prompt:**
```
Read CLAUDE.md. Run the following checks across the full codebase and report findings:

1. Every dynamic route ([ref]) has generateStaticParams defined.
2. No `any` types anywhere in the codebase — search all .ts and .tsx files.
3. No hardcoded strings in components — all copy comes from /lib/constants.ts or data props.
4. No raw <img> tags — all images use next/image (or there are no images, which is valid).
5. No client-side data fetching (no useEffect + fetch patterns) — only FilterBar should be a client component.
6. Every component in /components is imported and used in at least one page.
7. All incident refs in oral history JSON files match a corresponding incident JSON file.
8. All oral history refs in incident JSON oralHistoryRefs arrays match existing OHT files.
9. All relatedIncidents refs in incident JSON files match existing incident JSON files.
10. The MDX slug in each oral history JSON matches an existing MDX file in /content/oral-histories/.

Report as a numbered checklist. Mark each item PASS, FAIL, or WARNING with details.
```
