# The Registry of Unresolved Community Incidents

A deadpan Kenyan heritage institution website that documents mundane community events with the full solemnity of a national archive. Maintained by the fictional **Mwisho wa Mwisho District Heritage Trust, Est. 1991**.

The site is never a joke. The comedy comes entirely from the gap between the institutional gravity of the presentation and the complete ordinariness of what is being documented.

> *"The archive does not adjudicate. It documents."*
> — Founding Charter, Mwisho wa Mwisho District Heritage Trust, 1991

---

## What this is

A statically generated Next.js website archiving 22 documented community incidents — from a sufuria of pilau that disrupted a church fundraiser raffle in 1987, to a musical performance announced at a 2023 celebration that did not take place. Each incident is documented with full archival prose, oral testimonies, object records, and Heritage Trust annotations.

The aesthetic is Kenya Gazette meets rural county museum meets a church minutes book. Every design decision — typography, color, layout, copy — is in service of a single fictional institution that takes itself completely seriously.

---

## Features

- **22 documented incidents** spanning 1978 to 2023, each with full archival records
- **Oral histories** — 5 witness testimonies in long-form MDX prose
- **Disputed accounts** — side-by-side conflicting testimony for 6 incidents
- **Open incidents** — live documentation timeline for INC-2023-022, currently unresolved
- **Object catalogue** — physical objects related to documented incidents (including the sufuria)
- **Full institutional pages** — About the Trust, Submission Guidelines, Contact, Privacy Notice
- Fully responsive — desktop and mobile layouts designed separately
- Statically generated — no database, no CMS, no runtime data fetching

---

## Tech stack

- [Next.js 14](https://nextjs.org/) — App Router, static generation
- [TypeScript](https://www.typescriptlang.org/) — strict mode throughout
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) — MDX rendering for oral history long-form content
- Flat JSON files for all incident and oral history data — no database

---

## Getting started

**Requirements:** Node.js 18+

```bash
# Clone the repository
git clone https://github.com/your-username/registry-of-incidents.git
cd registry-of-incidents

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

```bash
# Build for production
npm run build

# Run production build locally
npm start
```

---

## Project structure

```
registry-of-incidents/
├── app/                  # Next.js App Router pages
├── components/           # All UI components
│   ├── ui/               # Shared UI primitives
│   ├── layout/           # Header, footer, navigation
│   ├── incidents/        # Incident-specific components
│   └── oral-histories/   # Oral history components
├── data/
│   ├── incidents/        # 8 incident JSON files
│   └── oral-histories/   # 5 oral history JSON files
├── content/
│   └── oral-histories/   # 5 MDX testimony files
├── lib/                  # Data utilities and constants
├── types/                # TypeScript types
└── docs/                 # Project documentation and design files
```

---

## Content notes

- All 22 incidents are documented. 8 have full JSON records with prose; the remaining 14 are referenced in statistics only.
- All incident copy, witness testimony, Heritage Trust annotations, and institutional copy is written in the archive's voice — formal, measured, never ironic.
- The one open incident (INC-2023-022 · The Performance Incident) is under active documentation. Witness statements are still being collected.
- Mrs. Grace Njeri (INC-2016-019) has no oral testimony on record. No file exists for her. This is documented.


---

## Design

The full design system — all 12 screens — was produced in Claude's design tool before development began. Design files live in `/docs/design/` and serve as the source of truth for all visual decisions. The design system uses:

- **EB Garamond** — headings, incident names, pull quotes
- **Source Sans 3** — body copy, navigation, metadata
- **Space Mono** — reference numbers, dates, Heritage Trust labels
- A warm archival palette anchored in cream (`#F5F2EC`) and amber (`#8B5E3C`)

---

## License

This project and all fictional content within it — incident records, witness testimony, Heritage Trust copy, and institutional documentation — is original creative work.

The Mwisho wa Mwisho District Heritage Trust does not exist. The incidents are not real. The sufuria, however, feels real. That is the point.

MIT License.
