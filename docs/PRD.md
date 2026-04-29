# PRD — The Registry of Unresolved Community Incidents

## Product summary

A statically generated Next.js website for a fictional Kenyan heritage archive. The site documents mundane community incidents with full institutional seriousness. All content is loaded from flat JSON and MDX files. No user authentication. No CMS. No database.

The design source of truth is in /docs/design/. Every screen has been fully designed by Claude Design. No design decisions need to be made during build — all layouts, copy, color tokens, and component patterns are resolved in the design files.

---

## Routes

| Route | Page | Screen ref | Data source |
|---|---|---|---|
| / | Homepage | Screen 1 (desktop) + Screen 5 (mobile) | /data/incidents/ (featured 3) |
| /incidents | Browse all incidents | Screen 2 | /data/incidents/ (all) |
| /incidents/[ref] | Individual incident record | Screen 3 (desktop) + Screen 6 (mobile) | /data/incidents/[ref].json |
| /oral-histories | Oral histories index | Screen 4 | /data/oral-histories/ (all) |
| /oral-histories/[ref] | Individual testimony | — | /data/oral-histories/[ref].json + /content/oral-histories/[ref].mdx |
| /disputed-accounts | Disputed accounts | Screen 7 | /data/incidents/ (status: DISPUTED) |
| /open-incidents | Open incidents | Screen 8 | /data/incidents/ (status: OPEN) |
| /about | About the Trust | Screen 9 | Static content (from constants.ts) |
| /submission-guidelines | Submission guidelines | Screen 10 | Static content (from constants.ts) |
| /contact | Contact | Screen 11 | Static content (from constants.ts) |
| /privacy | Privacy notice | Screen 12 | Static content (from constants.ts) |

---

## Incidents in the archive

All 8 incidents have full records. Exact content for each is in the design files.

| Ref | Name | Date | Status |
|---|---|---|---|
| INC-1978-001 | The Handshake Incident | Est. 1978 | CLOSED |
| INC-1987-003 | The Pilau Incident | 14 Aug 1987 | CLOSED |
| INC-1991-004 | The Closing Prayer Incident | 3 Mar 1991 | CLOSED |
| INC-1994-011 | The Microphone Incident | 12 Nov 1994 | DISPUTED |
| INC-2001-007 | The Chair Incident | 17 Apr 2001 | CLOSED |
| INC-2009-014 | The Announcement Incident | 9 Jun 2009 | DISPUTED |
| INC-2016-019 | The Cake Incident | 22 Jul 2016 | CLOSED |
| INC-2023-022 | The Performance Incident | 8 Aug 2023 | OPEN |

Featured incidents on homepage: INC-1987-003, INC-2001-007, INC-2016-019.
The open incident for AlertBar: INC-2023-022.

---

## Oral histories in the archive

| Ref | Witness | Incident | Note |
|---|---|---|---|
| OHT-1991-001 | Agnes Wambua | INC-1987-003 | Eyewitness, Pew 3 (left side) |
| OHT-1993-002 | Father Emmanuel Kamau | INC-1987-003 | Deceased. Testimony recorded 1993. |
| OHT-1993-003 | Gerald Otieno | INC-1987-003 | Disputed testimony |
| OHT-2019-031 | Mr. Silas Barasa | INC-2001-007 | Has not explained. Has not been asked. |
| OHT-2025-044 | Mama Edna Mutua | INC-1987-003 | First public statement, 2025 |
| — | Mrs. Grace Njeri | INC-2016-019 | No statement given |

---

## Screens and their components

### Screen 1 — Homepage, desktop (1280px)

Layout: Fixed top nav + hero masthead + two-column body (wider left editorial, narrower right sidebar, 300px).

Components:
- SiteHeader (InstitutionalSeal + nav links)
- HeroMasthead (large seal, serif title, subheading, amber rule, Est. line)
- AlertBar (amber strip, OPEN pill, INC-2023-022 notice)
- FeaturedIncident (SectionLabel, serif title, monospace date/venue, 3 prose paragraphs, PullQuote)
- IncidentPreviewCard × 3 (ref, name, description, date, StatusPill — recent additions feed)
- RegistryStats (2×2 grid of StatBlock: 22 incidents, 1 open, 47 testimonies, 37 years)
- IncidentIndexList (sidebar — all 8 incidents, ref + name + StatusPill per row)
- DisputedAccountsCallout (sidebar — amber-tinted box, copy, link)
- OpenIncidentCallout (sidebar — amber border highlight box, INC-2023-022)
- SiteFooter

### Screen 2 — Browse incidents, desktop (1280px)

Layout: Nav + full-width page header + filter bar + 3-column card grid.

Components:
- SiteHeader
- PageHeader (title + subtitle)
- FilterBar (client component — tab row, 8 filter options)
- IncidentCard × 8 (ref, name, date, venue, description, categories, StatusPill, "View full record" link)
- SiteFooter

FilterBar options: All Incidents | Closed | Open | Disputed | Harambee & Fundraisers | School Events | Community Meetings | Celebrations

### Screen 3 — Individual incident record, desktop (1280px)

Shown for INC-1987-003 · The Pilau Incident. Same structure for all incident pages.

Layout: Nav + max-width 900px centered editorial column.

Components:
- SiteHeader
- Breadcrumb (Registry › Browse Incidents › INC-XXXX-XXX)
- IncidentHeader (ref in monospace, large serif title, metadata row, tags)
- IncidentProse (4 paragraphs + HeritageTrustNote annotation)
- ObjectRecord (catalogue card — OBJ-001, the sufuria)
- OralHistoryCard × 3 (Agnes Wambua, Mama Edna Mutua, Gerald Otieno)
- RelatedIncidents × 2 cards (INC-1991-004, INC-1994-011)
- SiteFooter

### Screen 4 — Oral histories index, desktop (1280px)

Layout: Nav + full-width page header + filter bar + 2-column card grid.

Components:
- SiteHeader
- PageHeader
- FilterBar (All Witnesses | Eyewitnesses | Secondary Accounts | Children at the Time | Disputed Testimony | Deceased (testimony on record))
- OralHistoryCard × 6 (InitialsAvatar, name, age/status, role, incident ref, italic excerpt, tags, link)
- SiteFooter

### Screen 5 — Homepage, mobile (390px)

Same data as Screen 1. Single column. BottomTabBar replaces desktop nav.

Components differ:
- MobileTopBar (hamburger right, "Incident Registry" title left)
- Hero stacks: seal → title → subheading → amber rule → Est. line
- Stats: 2×2 grid
- IncidentIndexList: full-width stacked rows
- BottomTabBar (Browse | Oral Histories | Open | Search)

### Screen 6 — Individual incident record, mobile (390px)

Shown for INC-2016-019 · The Cake Incident.

Components differ:
- MobileTopBar with back arrow + "Browse Incidents" label
- Metadata: stacked labeled rows (not horizontal)
- Tags: wrapping pills
- ObjectRecord fields stack vertically
- OralHistoryCard row: overflow-x-auto horizontal scroll, each card ~260px
- RelatedIncidents: 2 full-width stacked cards

### Screen 7 — Disputed accounts, desktop (1280px)

Layout: Nav + page header with stat block + HeritageTrustNote banner + filter bar + full-width dispute cards.

Each dispute card shows:
- Header: ref, incident name, date, DISPUTED pill, conflict type tag
- Summary row: 1-sentence description of the conflict
- Two-column accounts: Account A vs Account B, each with witness name, role, italic quote
- Heritage Trust Note footer
- "View full incident record" link

6 disputes shown. Filter options: All Disputed | Testimony Conflicts | Documentary Conflicts | Unverifiable Claims

Components:
- SiteHeader
- PageHeader (with inline stat block: "9 — incidents with conflicting accounts")
- HeritageTrustNote (page-level banner)
- FilterBar
- DisputeCard × 6
- SiteFooter

### Screen 8 — Open incidents, desktop (1280px)

Layout: Nav + AlertBar + page header + two-column body (main content left, sidebar right 300px).

Main: Full record for INC-2023-022 (amber-bordered feature card + 4 prose paragraphs + HeritageTrustNote + Documentation Timeline with pip markers).

Sidebar: Submit a Witness Statement box + What Constitutes an Open Incident list + Closed Incidents note.

Components:
- SiteHeader
- AlertBar
- PageHeader
- OpenIncidentFeatureCard (amber-bordered, full prose record)
- DocumentationTimeline (pip markers, monospaced dates, prose events)
- HeritageTrustNote
- SidebarSubmitBox
- SidebarCriteriaList
- SiteFooter

### Screen 9 — About the Trust, desktop (1280px)

Layout: Nav + max-width 900px centered editorial.

Sections: Header with seal + mission + PullQuote + 3 prose paragraphs + founding families (3-column grid) + trustees (2-column grid) + archive stats (5-column stat row) + HeritageTrustNote.

All copy is static. Lives in constants.ts.

### Screen 10 — Submission guidelines, desktop (1280px)

Layout: Nav + max-width 860px editorial.

3 numbered sections (01, 02, 03) with amber monospaced numbers, serif section title, prose paragraphs. Closing HeritageTrustNote.

### Screen 11 — Contact, desktop (1280px)

Layout: Nav + max-width 860px editorial.

2-column info grid (Physical Address, Office Hours, Postal Submissions, Response Times) + prose section on communication policy.

No form. The Trust does not maintain a telephone line. (This is explained in the copy.)

### Screen 12 — Privacy notice, desktop (1280px)

Layout: Nav + max-width 860px editorial.

7 numbered sections. Last updated January 2024, Ref: TRUST-PRIV-2024-001.

---

## Data shapes

See /types/index.ts for all TypeScript types.

### Incident JSON shape (summary)

```typescript
{
  ref: string              // "INC-1987-003"
  name: string             // "The Pilau Incident"
  status: StatusType       // "CLOSED" | "OPEN" | "DISPUTED"
  date: string             // "14 August 1987"
  dateShort: string        // "14 Aug 1987"
  year: number             // 1987
  venue: string
  categories: string[]
  description: string      // 1–2 sentence summary for cards
  featured: boolean
  firstDocumented: string  // "1991"
  lastUpdated: string      // "2024"
  tags: string[]
  prose: string[]          // array of paragraph strings, full archival prose
  heritageTrustNote?: string
  pullQuote?: { quote: string; attribution: string }
  objectRecord?: IncidentObject
  relatedIncidents: string[]  // array of refs
  oralHistoryRefs: string[]   // array of OHT refs
}
```

### OralHistory JSON shape (summary)

```typescript
{
  ref: string              // "OHT-1991-001"
  incidentRef: string      // "INC-1987-003"
  witnessName: string      // "Agnes Wambua"
  witnessAge: number | null
  role: string             // "Eyewitness, Pew 3 (left side)"
  designation: string[]    // ["eyewitness"]
  excerpt: string          // short italic quote for cards
  note?: string            // "First public statement, 2025"
  hasStatement: boolean
  deceased: boolean
  mdxSlug: string          // matches /content/oral-histories/ filename
}
```

---

## Static generation

All dynamic routes use generateStaticParams.
All pages are server components unless interactivity requires otherwise.
FilterBar is the only client component.

---

## Out of scope (v1)

- Search functionality (UI element present but non-functional)
- Working contact or submission forms (UI present but static)
- Dark mode
- Animations or transitions
- Authentication
- Any database or CMS
