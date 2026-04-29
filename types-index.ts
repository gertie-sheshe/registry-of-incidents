// All TypeScript types for the Registry of Unresolved Community Incidents
// Do not use `any`. Do not modify without checking all usages first.

export type StatusType = 'CLOSED' | 'OPEN' | 'DISPUTED';

export type DesignationTag =
  | 'eyewitness'
  | 'secondary account'
  | 'disputed'
  | 'deceased'
  | 'primary source'
  | 'no statement given'
  | 'children at the time';

export interface IncidentObject {
  ref: string;              // e.g. "OBJ-001"
  objectType: string;       // e.g. "Cooking vessel (sufuria)"
  material: string;
  capacity: string;
  condition: string;
  currentLocation: string;
}

export interface PullQuote {
  quote: string;
  attribution: string;      // e.g. "Agnes Wambua, 71, Eyewitness, Pew 3 (left side)"
}

export interface DisputedAccount {
  incidentRef: string;
  conflictType: 'Testimony Conflict' | 'Documentary Conflict' | 'Unverifiable Claim';
  summary: string;
  accountA: {
    witness: string;
    role: string;
    text: string;
  };
  accountB: {
    witness: string;
    role: string;
    text: string;
  };
  heritageTrustNote: string;
}

export interface Incident {
  ref: string;              // e.g. "INC-1987-003"
  name: string;             // e.g. "The Pilau Incident"
  status: StatusType;
  date: string;             // e.g. "14 August 1987"
  dateShort: string;        // e.g. "14 Aug 1987"
  year: number;             // e.g. 1987
  venue: string;
  categories: string[];     // e.g. ["church fundraiser"]
  description: string;      // 1–2 sentence summary for cards
  featured: boolean;
  firstDocumented: string;  // e.g. "1991"
  lastUpdated: string;      // e.g. "2024"
  tags: string[];           // e.g. ["pilau", "raffle", "sufuria"]
  prose: string[];          // Array of paragraph strings — full archival prose
  heritageTrustNote?: string;
  pullQuote?: PullQuote;
  objectRecord?: IncidentObject;
  relatedIncidents: string[];    // Array of INC refs
  oralHistoryRefs: string[];     // Array of OHT refs
}

export interface OralHistory {
  ref: string;              // e.g. "OHT-1991-001"
  incidentRef: string;      // e.g. "INC-1987-003"
  witnessName: string;      // e.g. "Agnes Wambua"
  witnessAge: number | null;
  role: string;             // e.g. "Eyewitness, Pew 3 (left side)"
  designation: DesignationTag[];
  excerpt: string;          // Short italic quote for cards — the witness's own words
  note?: string;            // e.g. "First public statement, 2025"
  hasStatement: boolean;
  deceased: boolean;
  mdxSlug: string;          // Matches filename in /content/oral-histories/ (without .mdx)
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface StatBlockData {
  value: string;
  label: string;
}

export interface TrusteeData {
  name: string;
  role: string;
  since: string;
}

export interface FoundingFamily {
  name: string;
  note: string;
}

export interface ContactBlock {
  title: string;
  lines: string[];
}

export interface StaticPageSection {
  num?: string;
  title: string;
  paras: string[];
}

export interface DocumentationTimelineEntry {
  date: string;
  event: string;
  isOngoing?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
