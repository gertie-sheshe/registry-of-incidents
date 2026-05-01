import type {
  NavItem,
  FilterOption,
  StatBlockData,
  TrusteeData,
  FoundingFamily,
  ContactBlock,
  StaticPageSection,
  DocumentationTimelineEntry,
} from '@/types';

// ─── Navigation ────────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: 'Browse Incidents', href: '/incidents' },
  { label: 'Oral Histories', href: '/oral-histories' },
  { label: 'Disputed Accounts', href: '/disputed-accounts' },
  { label: 'Open Incidents', href: '/open-incidents' },
  { label: 'About the Trust', href: '/about' },
  { label: 'Search', href: '/search' },
];

export const BOTTOM_TAB_ITEMS: NavItem[] = [
  { label: 'Browse', href: '/incidents' },
  { label: 'Oral Histories', href: '/oral-histories' },
  { label: 'Open', href: '/open-incidents' },
  { label: 'Search', href: '/search' },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: 'About the Trust', href: '/about' },
  { label: 'Submission Guidelines', href: '/submission-guidelines' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
];

// ─── Filter Options ─────────────────────────────────────────────────────────────

export const FILTER_OPTIONS_INCIDENTS: FilterOption[] = [
  { label: 'All Incidents', value: 'all' },
  { label: 'Closed', value: 'closed' },
  { label: 'Open', value: 'open' },
  { label: 'Disputed', value: 'disputed' },
  { label: 'Harambee & Fundraisers', value: 'harambee-fundraisers' },
  { label: 'School Events', value: 'school-events' },
  { label: 'Community Meetings', value: 'community-meetings' },
  { label: 'Celebrations', value: 'celebrations' },
];

export const FILTER_OPTIONS_ORAL_HISTORIES: FilterOption[] = [
  { label: 'All Witnesses', value: 'all' },
  { label: 'Eyewitnesses', value: 'eyewitnesses' },
  { label: 'Secondary Accounts', value: 'secondary-accounts' },
  { label: 'Children at the Time', value: 'children-at-the-time' },
  { label: 'Disputed Testimony', value: 'disputed-testimony' },
  { label: 'Deceased (testimony on record)', value: 'deceased' },
];

export const FILTER_OPTIONS_DISPUTED: FilterOption[] = [
  { label: 'All Disputed', value: 'all' },
  { label: 'Testimony Conflicts', value: 'testimony-conflicts' },
  { label: 'Documentary Conflicts', value: 'documentary-conflicts' },
  { label: 'Unverifiable Claims', value: 'unverifiable-claims' },
];

// ─── Listing pages (Screens 2 & 4) ─────────────────────────────────────────────

export const BROWSE_INCIDENTS_PAGE_TITLE = 'Browse All Incidents';

export const BROWSE_INCIDENTS_PAGE_SUBTITLE =
  '22 incidents documented between 1978 and 2023. Sorted by date of occurrence. Filter by status or category.';

export const ORAL_HISTORIES_PAGE_TITLE = 'Oral Histories';

export const ORAL_HISTORIES_PAGE_SUBTITLE =
  '47 testimonies collected between 1991 and 2025. All accounts given voluntarily. Conflicting testimonies are preserved without adjudication.';

// ─── Footer ─────────────────────────────────────────────────────────────────────

export const FOOTER_COPY = {
  institutionName: 'Mwisho wa Mwisho District Heritage Trust',
  address: 'Mwisho wa Mwisho District, Kenya',
  founded: 'Est. 1991',
};

export const ABOUT_ESTABLISHED_LINE = `${FOOTER_COPY.founded} · ${FOOTER_COPY.address}`;

export const LEGAL_LINE =
  'The Registry of Unresolved Community Incidents does not determine fault, assign blame, or draw conclusions. It documents. © Mwisho wa Mwisho District Heritage Trust, 1991–2024.';

// ─── Stats ───────────────────────────────────────────────────────────────────────

export const REGISTRY_STATS: StatBlockData[] = [
  { value: '22', label: 'Incidents Documented' },
  { value: '1', label: 'Open Incident' },
  { value: '47', label: 'Oral Testimonies' },
  { value: '37', label: 'Years Since Oldest Unresolved' },
];

export const ABOUT_STATS: StatBlockData[] = [
  { value: '22', label: 'Documented Incidents' },
  { value: '47', label: 'Oral Testimonies' },
  { value: '312', label: 'Archived Documents' },
  { value: '43', label: 'Photographs' },
  { value: '4', label: 'Physical Objects' },
];

// ─── Hero / Homepage ─────────────────────────────────────────────────────────────

export const HERO_TITLE = 'The Registry of Unresolved Community Incidents';

export const HERO_SUBTITLE =
  'A complete record of consequential events in Mwisho wa Mwisho District, 1971 to present.';

export const HERO_TAGLINE = 'Est. 1991 · 22 incidents documented · 1 incident open';

export const ALERT_BAR_TEXT =
  'Active documentation in progress: INC-2023-022 · The Performance Incident · Witness statements currently being collected.';

export const ALERT_BAR_COPY = {
  prefix: 'Active documentation in progress:',
  suffix: 'Witness statements currently being collected.',
} as const;

export const DISPUTED_CALLOUT_TEXT =
  '9 incidents contain testimony in direct contradiction. The archive does not adjudicate. Both accounts are preserved in full.';

export const OPEN_CALLOUT_TEXT =
  'Witness statements are currently being collected. The organising committee has not been formally contacted.';

export const HOME_SECTION_LABELS = {
  featuredIncident: 'FEATURED INCIDENT',
  recentAdditions: 'RECENT ADDITIONS TO THE REGISTRY',
  registryAtAGlance: 'REGISTRY AT A GLANCE',
  incidentIndex: 'INCIDENT INDEX',
} as const;

export const HOME_LINK_LABELS = {
  viewDisputedAccounts: 'View disputed accounts →',
  viewOpenIncidentRecord: 'View full record →',
} as const;

// ─── About the Trust (Screen 9) ─────────────────────────────────────────────────

export const ABOUT_INTRO_PARAGRAPHS: string[] = [
  'The Heritage Trust was established to document community events of consequence in Mwisho wa Mwisho District.',
  'It does not determine outcomes. It does not assign responsibility.',
  'It records what occurred, as completely and accurately as the available evidence permits.',
];

export const ABOUT_HEADER_DESCRIPTION = ABOUT_INTRO_PARAGRAPHS.join(' ');

export const ABOUT_MISSION_QUOTE = {
  quote:
    'The archive does not adjudicate. It documents. Where the record is incomplete, the incompleteness is itself part of the record.',
  attribution: 'Founding Charter, Mwisho wa Mwisho District Heritage Trust, 1991',
};

export const ABOUT_PARAGRAPHS: string[] = [
  'The Heritage Trust was convened on 3 March 1991 at the Mwisho wa Mwisho Community Hall by nine members of the community, representing three founding families who had each, in separate conversations over the preceding years, expressed concern that consequential events in the district were not being formally documented. The inaugural meeting lasted three hours and fourteen minutes. It closed in prayer. The prayer lasted twenty-two minutes. Three members had departed before it concluded. All three are recorded in the minutes as present. This incident is the only one in the registry in which the documenting institution is itself implicated.',
  'The Trust operates on the principle that community memory is imperfect, that documentary records are partial, and that the gap between what occurred and what is remembered is itself a matter of historical significance. The Trust does not seek to close that gap by choosing one account over another. It seeks to preserve the gap precisely, with both accounts intact, for the benefit of future generations who may have access to evidence or perspective not currently available.',
  'Since 1991, the Trust has documented 22 incidents, collected 47 oral testimonies, and maintained a physical archive of 312 documents, 43 photographs, and 4 physical objects. The archive is housed at the Trust office in Mwisho wa Mwisho District. It is open to the public by appointment on Tuesdays and Thursdays between 9:00 a.m. and 1:00 p.m.',
];

export const ABOUT_FOUNDING_FAMILIES_INTRO =
  'The Trust seal bears three horizontal lines of decreasing width, representing the three families whose members convened the inaugural meeting of 1991. Their names are recorded here in the spirit of institutional transparency.';

export const FOUNDING_FAMILIES: FoundingFamily[] = [
  {
    name: 'The Omondi Family',
    note: 'Represented at the inaugural meeting by Chief J. Omondi (ret.) and Mrs. A. Omondi. Chief Omondi also appears in INC-1978-001.',
  },
  {
    name: 'The Mutua Family',
    note: 'Represented at the inaugural meeting by Mr. S. Mutua. Mama Edna Mutua, a witness in INC-1987-003, is a member of this family.',
  },
  {
    name: 'The Wambua Family',
    note: 'Represented at the inaugural meeting by Mr. G. Wambua and Miss R. Wambua (now Mrs. R. Kariuki). Agnes Wambua, witness in INC-1987-003, is a member of this family.',
  },
];

export const TRUSTEES: TrusteeData[] = [
  { name: 'Mr. James Omondi', role: 'Chair, Heritage Trust', since: 'Trustee since 2004' },
  { name: 'Mrs. Felicity Mwangi', role: 'Secretary and Archivist', since: 'Trustee since 1991 (founding)' },
  { name: 'Rev. Peter Kamau', role: 'Trustee, Oral Histories', since: 'Trustee since 2011' },
  { name: 'Dr. Grace Wambua', role: 'Trustee, Documentary Records', since: 'Trustee since 2018' },
];

export const ABOUT_HERITAGE_NOTE =
  'The Heritage Trust is not a government body. It receives no public funding. It operates on voluntary contributions from the community and an annual allocation from the Mwisho wa Mwisho District Development Fund, which has been renewed each year since 1994 without formal review. The Trust has not sought to expand its remit beyond Mwisho wa Mwisho District. It does not consider this a limitation.';

export const ABOUT_PAGE_SECTION_LABELS = {
  foundingFamilies: 'The Three Founding Families',
  trustees: 'Current Trustees',
  archiveNumbers: 'The Archive in Numbers',
} as const;

// ─── Submission Guidelines (Screen 10) ──────────────────────────────────────────

export const SUBMISSION_PAGE_TITLE = 'How to Submit to the Registry';

export const SUBMISSION_PAGE_SECTION_LABEL = 'Submission Guidelines';

export const SUBMISSION_INTRO =
  "The Heritage Trust welcomes submissions from community members in three categories: new incidents, oral testimonies related to existing incidents, and documentary materials. All submissions are assessed by the Trust's archivist before entry into the registry.";

export const SUBMISSION_SECTIONS: StaticPageSection[] = [
  {
    num: '01',
    title: 'Submitting a New Incident',
    paras: [
      'A new incident may be submitted by any community member who witnessed the event or has reliable knowledge of it. The Trust does not require the submitting party to have been present, but it will note in the record if the submission is based on secondhand information.',
      "An incident is eligible for entry into the registry if it: occurred within Mwisho wa Mwisho District or involved a community institution of the District; left an unresolved question of record; and was not trivial in the view of the Trust's archivist. The Trust acknowledges that the determination of what is trivial is itself a matter of judgment, and that judgment has occasionally been disputed.",
      "Submissions should include: the date or estimated date of the incident; the venue or general location; the names of any parties involved (where known); a written account of what occurred, in the submitting party's own words; and any documentary evidence available.",
    ],
  },
  {
    num: '02',
    title: 'Submitting an Oral Testimony',
    paras: [
      'Oral testimonies may be submitted in relation to any incident currently in the registry, including closed incidents. The Trust does not limit testimony to eyewitnesses. Persons with knowledge of subsequent events, related circumstances, or the impact of an incident on named individuals are also invited to contribute.',
      'Testimonies may be given in person at the Trust office, by written submission, or — where the witness is unable to attend — by appointment at a location agreed with the archivist. The Trust does not conduct interviews by telephone or electronic communication, as it has found that the resulting transcripts are more susceptible to error.',
      'All testimonies are attributed by name, age, and designation in the registry unless the witness specifically requests anonymity. Requests for anonymity are granted in all cases. The Trust will note in the public record that a testimony exists and that it is held anonymously, without naming the witness or characterising their account.',
    ],
  },
  {
    num: '03',
    title: 'Submitting Documentary Materials',
    paras: [
      "The Trust accepts original documents, photographs, printed programmes, meeting minutes, registers, correspondence, and any other material relevant to a documented incident. Originals are preferred; where originals cannot be parted with, the Trust will accept certified copies.",
      "Submitted materials become part of the Trust's physical archive and are assigned a catalogue reference. They are not returned to the submitting party unless a prior arrangement is made. The Trust takes reasonable care of all materials entrusted to it and has not lost any archival item since 2004, when a folder of documents relating to INC-1978-001 was temporarily mislaid and subsequently recovered.",
    ],
  },
];

export const SUBMISSION_CLOSING_NOTE =
  "The Heritage Trust does not investigate incidents. It documents them. Submission of an incident does not constitute an allegation. Entry into the registry does not constitute a finding. The Trust is not a court of law, a tribunal, or a complaints body. It is an archive. If you are seeking a resolution to a community dispute, the Trust respectfully suggests contacting the appropriate authorities.";

// ─── Contact (Screen 11) ─────────────────────────────────────────────────────────

export const CONTACT_PAGE_SECTION_LABEL = 'Contact';

export const CONTACT_PAGE_TITLE = 'Contact the Heritage Trust';

export const CONTACT_NOTE_SECTION_LABEL = 'A Note on Communication';

export const CONTACT_INTRO =
  'The Heritage Trust office is staffed on Tuesday and Thursday mornings. Correspondence is replied to within fourteen working days. The Trust requests that enquiries be specific and that correspondents identify themselves by name.';

export const CONTACT_BLOCKS: ContactBlock[] = [
  {
    title: 'Physical Address',
    lines: [
      'Mwisho wa Mwisho District Heritage Trust',
      'Adjacent to the Community Hall',
      'Mwisho wa Mwisho Town Centre',
      'Mwisho wa Mwisho District, Kenya',
    ],
  },
  {
    title: 'Office Hours',
    lines: [
      'Tuesday: 9:00 a.m. – 1:00 p.m.',
      'Thursday: 9:00 a.m. – 1:00 p.m.',
      'Other days: by prior appointment only',
      'Public holidays: closed',
    ],
  },
  {
    title: 'Postal Submissions',
    lines: [
      'P.O. Box 114',
      'Mwisho wa Mwisho District',
      'Kenya',
      'Mark envelope: ATTN: Archivist',
    ],
  },
  {
    title: 'Response Times',
    lines: [
      'General enquiries: 14 working days',
      'Incident submissions: 21 working days',
      'Testimony appointments: 7 working days',
      "Urgent matters: at the Trust's discretion",
    ],
  },
];

export const CONTACT_COMMUNICATION_PARAGRAPHS: string[] = [
  "The Heritage Trust does not maintain a telephone line. This is not an oversight. The Trust's founding secretary determined in 1993 that telephone conversations were too easily subject to misremembering and that a written record of all communication was preferable. This policy has been upheld by every subsequent archivist.",
  'The Trust does not maintain a presence on social media platforms. It notes, without comment, that several community members have discussed individual incidents from the registry on such platforms. The Trust does not monitor these discussions, does not respond to them, and does not consider them part of the official record.',
  'Members of the press are welcome to visit the archive during office hours. The Trust requests advance notice. The Trust does not issue press statements. All information relevant to any incident is contained in the registry itself.',
];

// ─── Privacy Notice (Screen 12) ──────────────────────────────────────────────────

export const PRIVACY_PAGE_SECTION_LABEL = 'Privacy';

export const PRIVACY_PAGE_TITLE = 'Privacy Notice';

export const PRIVACY_INTRO =
  'The Heritage Trust holds information about community members in the course of its archival work. This notice explains what is held, how it is used, and what rights individuals have in relation to it. The Trust has endeavoured to write this notice in plain language. Where it has not succeeded, it apologises.';

export const PRIVACY_LAST_UPDATED = 'January 2024';
export const PRIVACY_REF = 'TRUST-PRIV-2024-001';

export const PRIVACY_LAST_UPDATED_LINE = `Last updated: ${PRIVACY_LAST_UPDATED} · Ref: ${PRIVACY_REF}`;

export const PRIVACY_SECTIONS: StaticPageSection[] = [
  {
    num: '01',
    title: 'What This Policy Covers',
    paras: [
      'This privacy notice applies to all information provided to the Mwisho wa Mwisho District Heritage Trust in connection with the Registry of Unresolved Community Incidents, including oral testimonies, written submissions, visitor records, and correspondence. It does not apply to information about public figures exercising public functions, which the Trust considers part of the public record and outside the scope of personal privacy.',
    ],
  },
  {
    num: '02',
    title: 'Information Collected',
    paras: [
      'The Trust collects the following categories of information: names and biographical details of witnesses and submitting parties; accounts of events as given in oral or written testimony; contact details provided for the purpose of correspondence; and documentary materials submitted to the archive. The Trust does not collect financial information, health information, or any information not directly relevant to the documentation of incidents in the registry.',
    ],
  },
  {
    num: '03',
    title: 'How Information Is Used',
    paras: [
      'Information is used solely for the purpose of compiling and maintaining the registry. It is not shared with any third party, government body, law enforcement agency, or commercial organisation. The Trust has received two requests from external parties for access to named testimony in its archive. Both requests were declined. The Trust does not consider this a precedent; it considers it a record.',
    ],
  },
  {
    num: '04',
    title: 'Anonymity and Withdrawal',
    paras: [
      'Any person who has given testimony to the Trust may request that their name be removed from the public record. Such requests are honoured in full. The testimony itself — stripped of identifying information — may be retained if it is material to the incident record. The person will be notified if this is the case. Requests for full withdrawal of testimony are considered on a case-by-case basis. The Trust has granted four such requests since 1991. It has declined one. The declined request is itself documented in the internal archive.',
    ],
  },
  {
    num: '05',
    title: 'Retention',
    paras: [
      "The Trust retains all submitted materials indefinitely. This is not a decision made lightly. The Trust's view is that the significance of a document cannot always be assessed at the time of its submission, and that future community members may find value in materials that appear unremarkable today. Two documents held since 1994 were, until 2019, considered peripheral. They are now considered primary sources. The Trust does not name them here.",
    ],
  },
  {
    num: '06',
    title: 'Access to Your Information',
    paras: [
      "Any person may request to view information held about them by the Trust. Requests should be made in writing to the Trust office. The Trust will respond within 21 working days. Where a request concerns testimony given in relation to a named third party, the Trust will consider what information may be disclosed without compromising that party's own privacy. This assessment will be made by the archivist, whose decision is final within the Trust's procedures.",
    ],
  },
  {
    num: '07',
    title: 'Cookies and Digital Tracking',
    paras: [
      "The Trust's website does not use tracking cookies. It does not monitor visitor behaviour. It does not maintain visitor logs beyond what is technically necessary for the operation of the website. The Trust notes that it did not have a website until 2019, considers this unremarkable, and has no current plans to expand its digital presence.",
    ],
  },
];

export const PRIVACY_FOOTER_NOTE =
  'This privacy notice was adopted by the Heritage Trust at its quarterly meeting of January 2024. It supersedes the privacy notice of 2019, which superseded the data handling policy of 2007, which was the first written policy of its kind in the Trust\'s history. Before 2007, the Trust operated on the principle that it would handle all information with discretion. It still does. The policy simply makes this explicit.';

// ─── Open Incidents Page (Screen 8) ──────────────────────────────────────────────

export const OPEN_INCIDENTS_ALERT_BAR_MESSAGE =
  '1 incident currently open. Documentation is active. Witness statements are being collected.';

export const OPEN_INCIDENT_UNDER_ACTIVE_DOCUMENTATION =
  'Under active documentation';

export const OPEN_INCIDENTS_PAGE_SECTION_LABELS = {
  documentationTimeline: 'Documentation Timeline',
  submitWitnessStatement: 'Submit a Witness Statement',
  whatConstitutesOpen: 'What Constitutes an Open Incident',
  closedIncidents: 'Closed Incidents',
} as const;

export const VIEW_SUBMISSION_GUIDELINES_LINK = 'View submission guidelines →';

export const CLOSED_INCIDENTS_STAT_LINE = '21 of 22 incidents are closed.';

export const OPEN_INCIDENTS_INTRO =
  'An incident is designated OPEN when it has occurred, has been entered into the registry, and remains under active documentation. The Heritage Trust continues to collect testimony, seek responses from relevant parties, and update the record. An open incident is not a criminal matter. It is an unfinished piece of history.';

export const OPEN_INCIDENTS_CRITERIA: string[] = [
  'The event has been entered into the registry.',
  'At least one material question about the event remains unanswered.',
  'Relevant parties have not provided a full account.',
  'The Heritage Trust has determined that further documentation is obtainable.',
];

export const CLOSED_INCIDENTS_NOTE =
  'An incident is designated CLOSED when the Trust has determined that no further material testimony is obtainable. Closure does not indicate resolution. The incident remains unresolved. It is merely completely documented.';

export const SUBMIT_WITNESS_TEXT =
  'If you were present at the Sato Nane celebrations on 8 August 2023 and have information relevant to INC-2023-022, the Heritage Trust invites you to submit a voluntary statement.';

export const SUBMIT_WITNESS_METHOD =
  'Statements may be given in person at the Trust office, by post, or by written submission. All statements are held in confidence until the witness gives permission for them to be included in the public record.';

export const DOCUMENTATION_TIMELINE: DocumentationTimelineEntry[] = [
  {
    date: '8 Aug 2023',
    event: 'Incident occurs at Sato Nane celebrations. MC announces performance. Performance does not occur. Programme continues.',
  },
  {
    date: '10 Aug 2023',
    event: 'Heritage Trust notified of the incident by two independent community members. Initial assessment begins.',
  },
  {
    date: '14 Aug 2023',
    event: 'Incident formally entered into the registry as INC-2023-022. Status designated: OPEN.',
  },
  {
    date: '22 Sep 2023',
    event: 'First witness statement collected. Agnes Wambua (unrelated to INC-1987-003 witness of the same name) provides a preliminary account.',
  },
  {
    date: '14 Nov 2023',
    event: 'Heritage Trust writes to the organising committee requesting a formal response. No reply received as of the date of this record.',
  },
  {
    date: '3 Feb 2024',
    event: 'Second witness statement collected. Mr. P. Ndegwa, a printed programme vendor, confirms programme listing.',
  },
  {
    date: '17 Apr 2025',
    event: 'Heritage Trust issues a second written request to the organising committee. No reply received.',
  },
  {
    date: 'Ongoing',
    event: 'Witness statements continue to be collected. The artist has not been contacted by any party. The incident remains open.',
    isOngoing: true,
  },
];

// ─── Disputed Accounts Page (Screen 7) ───────────────────────────────────────────

export const DISPUTED_ACCOUNTS_PAGE_BANNER_NOTE =
  'The archive does not adjudicate. It documents. Where two accounts cannot be reconciled, both are preserved.';

export const DISPUTED_ACCOUNTS_INTRO =
  '9 incidents in the registry contain oral or documentary testimony that is in direct and irresolvable conflict. The Heritage Trust does not adjudicate between accounts. Both sides of each dispute are preserved here in full, without editorial preference.';

export const DISPUTED_ACCOUNTS_HERITAGE_NOTE =
  'The archive does not adjudicate. It documents. Where two accounts cannot be reconciled, both are preserved. Where a witness has declined to speak, that silence is also documented. The presence of a dispute in this registry does not imply fault, fabrication, or error on the part of any named individual.';

export const DISPUTED_ACCOUNTS_STAT = {
  value: '9',
  label: 'Incidents with conflicting accounts',
};

// ─── Breadcrumb labels ────────────────────────────────────────────────────────────

export const BREADCRUMB_REGISTRY = 'Registry';
export const BREADCRUMB_BROWSE = 'Browse Incidents';
export const BREADCRUMB_ORAL_HISTORIES = 'Oral Histories';

// ─── Incident record (Screens 3 & 6) ────────────────────────────────────────────

export const INCIDENT_RECORD_SECTION_ORAL_HISTORIES = 'Oral Histories';
