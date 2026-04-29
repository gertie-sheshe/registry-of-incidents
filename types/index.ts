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
  ref: string;
  objectType: string;
  material: string;
  capacity: string;
  condition: string;
  currentLocation: string;
}

export interface PullQuote {
  quote: string;
  attribution: string;
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
  ref: string;
  name: string;
  status: StatusType;
  date: string;
  dateShort: string;
  year: number;
  venue: string;
  categories: string[];
  description: string;
  featured: boolean;
  firstDocumented: string;
  lastUpdated: string;
  tags: string[];
  prose: string[];
  heritageTrustNote?: string;
  pullQuote?: PullQuote;
  objectRecord?: IncidentObject;
  relatedIncidents: string[];
  oralHistoryRefs: string[];
  disputedAccount?: DisputedAccount;
}

export interface OralHistory {
  ref: string;
  incidentRef: string;
  witnessName: string;
  witnessAge: number | null;
  role: string;
  designation: DesignationTag[];
  excerpt: string;
  note?: string;
  hasStatement: boolean;
  deceased: boolean;
  mdxSlug: string;
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
