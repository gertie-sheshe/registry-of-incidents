# Project Structure — Registry of Unresolved Community Incidents

Complete folder map. Create this structure exactly. No additions, no deviations.

```
registry-of-incidents/
│
├── CLAUDE.md                          # Root instructions for Claude Code
├── README.md                          # Project overview
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
│
├── .cursor/
│   └── rules                          # Cursor instructions
│
├── docs/
│   ├── PRD.md                         # Full product requirements
│   ├── PHASES.md                      # Build phases and active phase tracker
│   ├── STRUCTURE.md                   # This file
│   └── design/                        # Claude Design output — READ ONLY, never edit
│       ├── components/
│       │   ├── shared.jsx             # DS tokens + all shared components
│       │   ├── screens-1-2.jsx        # Homepage, Browse Incidents
│       │   ├── screens-3-4.jsx        # Incident Record, Oral Histories Index
│       │   ├── screens-5-6.jsx        # Mobile Homepage, Mobile Incident Record
│       │   ├── screens-7-8.jsx        # Disputed Accounts, Open Incidents
│       │   └── screens-9-12.jsx       # About, Submission Guidelines, Contact, Privacy
│       ├── Registry.html              # Full design handoff (all 12 screens)
│       └── Registry - Standalone.html
│
├── types/
│   └── index.ts                       # All TypeScript types
│
├── data/
│   ├── incidents/
│   │   ├── inc-1978-001.json          # The Handshake Incident
│   │   ├── inc-1987-003.json          # The Pilau Incident
│   │   ├── inc-1991-004.json          # The Closing Prayer Incident
│   │   ├── inc-1994-011.json          # The Microphone Incident
│   │   ├── inc-2001-007.json          # The Chair Incident
│   │   ├── inc-2009-014.json          # The Announcement Incident
│   │   ├── inc-2016-019.json          # The Cake Incident
│   │   └── inc-2023-022.json          # The Performance Incident
│   └── oral-histories/
│       ├── oht-1991-001.json          # Agnes Wambua — INC-1987-003
│       ├── oht-1993-002.json          # Father Emmanuel Kamau — INC-1987-003
│       ├── oht-1993-003.json          # Gerald Otieno — INC-1987-003
│       ├── oht-2019-031.json          # Mr. Silas Barasa — INC-2001-007
│       └── oht-2025-044.json          # Mama Edna Mutua — INC-1987-003
│       # Note: Mrs. Grace Njeri has no statement. No file created for her.
│
├── content/
│   └── oral-histories/
│       ├── oht-1991-001.mdx           # Agnes Wambua — full testimony
│       ├── oht-1993-002.mdx           # Father Emmanuel Kamau — full testimony
│       ├── oht-1993-003.mdx           # Gerald Otieno — full testimony
│       ├── oht-2019-031.mdx           # Mr. Silas Barasa — full testimony
│       └── oht-2025-044.mdx           # Mama Edna Mutua — full testimony
│
├── lib/
│   ├── incidents.ts                   # getAllIncidents, getIncidentByRef,
│   │                                  # getFeaturedIncidents, getOpenIncidents,
│   │                                  # getDisputedIncidents
│   ├── oral-histories.ts              # getAllOralHistories, getOralHistoryByRef,
│   │                                  # getOralHistoriesByIncidentRef
│   └── constants.ts                   # Nav items, filter options, footer copy,
│                                      # all static page content (About, Submission,
│                                      # Contact, Privacy), all UI label strings
│
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx             # Desktop nav + InstitutionalSeal
│   │   ├── MobileTopBar.tsx           # Mobile top bar (hamburger or back arrow)
│   │   ├── SiteFooter.tsx             # Two-column footer + legal line
│   │   ├── BottomTabBar.tsx           # Mobile only — 4 tabs
│   │   └── Breadcrumb.tsx             # Registry › Browse Incidents › ref
│   ├── ui/
│   │   ├── InstitutionalSeal.tsx      # SVG — circle + text path + 3 lines
│   │   ├── SectionLabel.tsx           # Small uppercase label
│   │   ├── StatusPill.tsx             # CLOSED / OPEN / DISPUTED pill
│   │   ├── StatBlock.tsx              # Large number + label
│   │   ├── PullQuote.tsx              # Serif italic + amber left border + attribution
│   │   ├── HeritageTrustNote.tsx      # Annotated aside block
│   │   ├── AlertBar.tsx               # Amber strip — active incident notice
│   │   ├── FilterBar.tsx              # Client component — tab filter row
│   │   ├── WitnessAvatar.tsx          # Initials circle avatar
│   │   ├── CategoryTag.tsx            # Small bordered category label
│   │   └── PageHeader.tsx             # Title + subtitle used across index pages
│   ├── incidents/
│   │   ├── IncidentCard.tsx           # Browse grid card
│   │   ├── IncidentPreviewCard.tsx    # Compact card for homepage recent additions
│   │   ├── IncidentHeader.tsx         # Ref + title + metadata row + tags
│   │   ├── IncidentProse.tsx          # Paragraphs + optional HeritageTrustNote
│   │   ├── IncidentIndexList.tsx      # Sidebar compact list
│   │   ├── ObjectRecord.tsx           # Catalogue card for physical objects
│   │   ├── RelatedIncidents.tsx       # 2-column row of related incident cards
│   │   └── DisputeCard.tsx            # Screen 7 — two-account dispute layout
│   └── oral-histories/
│       ├── OralHistoryCard.tsx        # Full card — avatar, name, excerpt, tags
│       └── WitnessAvatar.tsx          # Already listed under /ui — import from there
│
└── app/
    ├── globals.css                    # Tailwind base + CSS custom properties from DS
    ├── layout.tsx                     # Root layout — fonts, metadata, SiteHeader,
    │                                  # SiteFooter, BottomTabBar
    ├── page.tsx                       # / — Homepage (Screen 1 + 5)
    ├── incidents/
    │   ├── page.tsx                   # /incidents — Browse all (Screen 2)
    │   └── [ref]/
    │       └── page.tsx               # /incidents/[ref] — Record (Screen 3 + 6)
    ├── oral-histories/
    │   ├── page.tsx                   # /oral-histories — Index (Screen 4)
    │   └── [ref]/
    │       └── page.tsx               # /oral-histories/[ref] — Testimony
    ├── disputed-accounts/
    │   └── page.tsx                   # /disputed-accounts (Screen 7)
    ├── open-incidents/
    │   └── page.tsx                   # /open-incidents (Screen 8)
    ├── about/
    │   └── page.tsx                   # /about (Screen 9)
    ├── submission-guidelines/
    │   └── page.tsx                   # /submission-guidelines (Screen 10)
    ├── contact/
    │   └── page.tsx                   # /contact (Screen 11)
    └── privacy/
        └── page.tsx                   # /privacy (Screen 12)
```

## Notes

- `/docs/design/` contains the Claude Design output. Copy the entire contents of the design zip into this folder. These files are reference only — never edit them.
- `WitnessAvatar.tsx` is listed under both `/components/ui/` and `/components/oral-histories/`. It belongs in `/components/ui/`. The oral histories folder imports it from there.
- Mrs. Grace Njeri has no oral testimony on record. Her data appears in the incident JSON for INC-2016-019 but she has no separate OHT file or MDX.
- The 14 remaining incidents (those not in the 8 featured) are referenced by number (22 total documented) but do not have JSON files in v1. The stats and index counts are hardcoded accordingly.
