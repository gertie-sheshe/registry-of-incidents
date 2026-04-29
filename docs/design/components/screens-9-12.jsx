// Screen 9: About the Trust
// Screen 10: Submission Guidelines
// Screen 11: Contact
// Screen 12: Privacy

function Screen9() {
  const cream = DS.cream, charcoal = DS.charcoal, amber = DS.amber, secondary = DS.secondary, rule = DS.rule;

  const trustees = [
    { initials: 'JO', name: 'Mr. James Omondi', role: 'Chair, Heritage Trust', since: 'Trustee since 2004' },
    { initials: 'FM', name: 'Mrs. Felicity Mwangi', role: 'Secretary and Archivist', since: 'Trustee since 1991 (founding)' },
    { initials: 'PK', name: 'Rev. Peter Kamau', role: 'Trustee, Oral Histories', since: 'Trustee since 2011' },
    { initials: 'GW', name: 'Dr. Grace Wambua', role: 'Trustee, Documentary Records', since: 'Trustee since 2018' },
  ];

  return (
    <div style={{ background: cream, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <DesktopNav active="About the Trust" />

      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%', padding: '40px 40px', flex: 1 }}>

        {/* Header with seal */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', marginBottom: '36px', paddingBottom: '36px', borderBottom: `1px solid ${rule}` }}>
          <InstitutionalSeal size={100} />
          <div>
            <SectionLabel style={{ marginBottom: '8px' }}>About the Trust</SectionLabel>
            <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: '36px', fontWeight: 400, color: charcoal, margin: '0 0 12px', lineHeight: 1.2 }}>
              Mwisho wa Mwisho District Heritage Trust
            </h1>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '10.5px', color: secondary, margin: '0 0 14px', letterSpacing: '0.04em' }}>
              Est. 1991 &nbsp;·&nbsp; Mwisho wa Mwisho District, Kenya
            </p>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '15px', color: charcoal, lineHeight: 1.7, margin: 0, maxWidth: '560px' }}>
              The Heritage Trust was established to document community events of consequence in Mwisho wa Mwisho District. It does not determine outcomes. It does not assign responsibility. It records what occurred, as completely and accurately as the available evidence permits.
            </p>
          </div>
        </div>

        {/* Mission */}
        <SectionLabel>Our Mission</SectionLabel>
        <PullQuote
          quote="The archive does not adjudicate. It documents. Where the record is incomplete, the incompleteness is itself part of the record."
          attribution="Founding Charter, Mwisho wa Mwisho District Heritage Trust, 1991"
        />

        {[
          'The Heritage Trust was convened on 3 March 1991 at the Mwisho wa Mwisho Community Hall by nine members of the community, representing three founding families who had each, in separate conversations over the preceding years, expressed concern that consequential events in the district were not being formally documented. The inaugural meeting lasted three hours and fourteen minutes. It closed in prayer. The prayer lasted twenty-two minutes. Three members had departed before it concluded. All three are recorded in the minutes as present. This incident is the only one in the registry in which the documenting institution is itself implicated.',
          'The Trust operates on the principle that community memory is imperfect, that documentary records are partial, and that the gap between what occurred and what is remembered is itself a matter of historical significance. The Trust does not seek to close that gap by choosing one account over another. It seeks to preserve the gap precisely, with both accounts intact, for the benefit of future generations who may have access to evidence or perspective not currently available.',
          'Since 1991, the Trust has documented 22 incidents, collected 47 oral testimonies, and maintained a physical archive of 312 documents, 43 photographs, and 4 physical objects. The archive is housed at the Trust office in Mwisho wa Mwisho District. It is open to the public by appointment on Tuesdays and Thursdays between 9:00 a.m. and 1:00 p.m.',
        ].map((p, i) => (
          <p key={i} style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14.5px', color: charcoal, lineHeight: 1.75, margin: '0 0 18px' }}>{p}</p>
        ))}

        <HRule />

        {/* Founding families */}
        <SectionLabel>The Three Founding Families</SectionLabel>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13.5px', color: secondary, lineHeight: 1.65, margin: '0 0 20px' }}>
          The Trust seal bears three horizontal lines of decreasing width, representing the three families whose members convened the inaugural meeting of 1991. Their names are recorded here in the spirit of institutional transparency.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '32px' }}>
          {[
            { family: 'The Omondi Family', note: 'Represented at the inaugural meeting by Chief J. Omondi (ret.) and Mrs. A. Omondi. Chief Omondi also appears in INC-1978-001.' },
            { family: 'The Mutua Family', note: 'Represented at the inaugural meeting by Mr. S. Mutua. Mama Edna Mutua, a witness in INC-1987-003, is a member of this family.' },
            { family: 'The Wambua Family', note: 'Represented at the inaugural meeting by Mr. G. Wambua and Miss R. Wambua (now Mrs. R. Kariuki). Agnes Wambua, witness in INC-1987-003, is a member of this family.' },
          ].map(f => (
            <div key={f.family} style={{ border: `1px solid ${rule}`, padding: '18px' }}>
              <div style={{ borderBottom: `1px solid ${amber}`, paddingBottom: '8px', marginBottom: '10px' }}>
                <h4 style={{ fontFamily: "'EB Garamond', serif", fontSize: '17px', fontWeight: 400, color: charcoal, margin: 0 }}>{f.family}</h4>
              </div>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12.5px', color: secondary, lineHeight: 1.6, margin: 0 }}>{f.note}</p>
            </div>
          ))}
        </div>

        <HRule />

        {/* Trustees */}
        <SectionLabel>Current Trustees</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
          {trustees.map(t => (
            <div key={t.name} style={{ border: `1px solid ${rule}`, padding: '18px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <InitialsAvatar name={t.name} size={44} />
              <div>
                <div style={{ fontFamily: "'EB Garamond', serif", fontSize: '17px', color: charcoal, marginBottom: '2px' }}>{t.name}</div>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12.5px', color: charcoal, marginBottom: '4px' }}>{t.role}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9.5px', color: secondary }}>{t.since}</div>
              </div>
            </div>
          ))}
        </div>

        <HRule />

        {/* Archive stats */}
        <SectionLabel>The Archive in Numbers</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', border: `1px solid ${rule}`, marginBottom: '32px' }}>
          {[
            { value: '22', label: 'Documented Incidents' },
            { value: '47', label: 'Oral Testimonies' },
            { value: '312', label: 'Archived Documents' },
            { value: '43', label: 'Photographs' },
            { value: '4', label: 'Physical Objects' },
          ].map((s, i) => (
            <div key={s.label} style={{ borderRight: i < 4 ? `1px solid ${rule}` : 'none' }}>
              <StatBlock value={s.value} label={s.label} />
            </div>
          ))}
        </div>

        <HRule />

        <div style={{ background: DS.annotationBg, borderLeft: `2px solid ${amber}`, padding: '18px 20px' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: DS.amberDeep, margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Heritage Trust Note —</p>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13.5px', color: charcoal, lineHeight: 1.65, margin: 0 }}>
            The Heritage Trust is not a government body. It receives no public funding. It operates on voluntary contributions from the community and an annual allocation from the Mwisho wa Mwisho District Development Fund, which has been renewed each year since 1994 without formal review. The Trust has not sought to expand its remit beyond Mwisho wa Mwisho District. It does not consider this a limitation.
          </p>
        </div>
      </div>

      <DesktopFooter />
    </div>
  );
}

function Screen10() {
  const cream = DS.cream, charcoal = DS.charcoal, amber = DS.amber, secondary = DS.secondary, rule = DS.rule;
  return (
    <div style={{ background: cream, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <DesktopNav />

      <div style={{ maxWidth: '860px', margin: '0 auto', width: '100%', padding: '40px', flex: 1 }}>
        <SectionLabel>Submission Guidelines</SectionLabel>
        <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: '34px', fontWeight: 400, color: charcoal, margin: '0 0 10px', lineHeight: 1.2 }}>
          How to Submit to the Registry
        </h1>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14px', color: secondary, margin: '0 0 32px', lineHeight: 1.6 }}>
          The Heritage Trust welcomes submissions from community members in three categories: new incidents, oral testimonies related to existing incidents, and documentary materials. All submissions are assessed by the Trust's archivist before entry into the registry.
        </p>

        {[
          {
            num: '01', title: 'Submitting a New Incident',
            paras: [
              'A new incident may be submitted by any community member who witnessed the event or has reliable knowledge of it. The Trust does not require the submitting party to have been present, but it will note in the record if the submission is based on secondhand information.',
              'An incident is eligible for entry into the registry if it: occurred within Mwisho wa Mwisho District or involved a community institution of the District; left an unresolved question of record; and was not trivial in the view of the Trust\'s archivist. The Trust acknowledges that the determination of what is trivial is itself a matter of judgment, and that judgment has occasionally been disputed.',
              'Submissions should include: the date or estimated date of the incident; the venue or general location; the names of any parties involved (where known); a written account of what occurred, in the submitting party\'s own words; and any documentary evidence available.',
            ],
          },
          {
            num: '02', title: 'Submitting an Oral Testimony',
            paras: [
              'Oral testimonies may be submitted in relation to any incident currently in the registry, including closed incidents. The Trust does not limit testimony to eyewitnesses. Persons with knowledge of subsequent events, related circumstances, or the impact of an incident on named individuals are also invited to contribute.',
              'Testimonies may be given in person at the Trust office, by written submission, or — where the witness is unable to attend — by appointment at a location agreed with the archivist. The Trust does not conduct interviews by telephone or electronic communication, as it has found that the resulting transcripts are more susceptible to error.',
              'All testimonies are attributed by name, age, and designation in the registry unless the witness specifically requests anonymity. Requests for anonymity are granted in all cases. The Trust will note in the public record that a testimony exists and that it is held anonymously, without naming the witness or characterising their account.',
            ],
          },
          {
            num: '03', title: 'Submitting Documentary Materials',
            paras: [
              'The Trust accepts original documents, photographs, printed programmes, meeting minutes, registers, correspondence, and any other material relevant to a documented incident. Originals are preferred; where originals cannot be parted with, the Trust will accept certified copies.',
              'Submitted materials become part of the Trust\'s physical archive and are assigned a catalogue reference. They are not returned to the submitting party unless a prior arrangement is made. The Trust takes reasonable care of all materials entrusted to it and has not lost any archival item since 2004, when a folder of documents relating to INC-1978-001 was temporarily mislaid and subsequently recovered.',
            ],
          },
        ].map(section => (
          <div key={section.num} style={{ marginBottom: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '14px', paddingBottom: '12px', borderBottom: `1px solid ${rule}` }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: amber }}>{section.num}</span>
              <h2 style={{ fontFamily: "'EB Garamond', serif", fontSize: '22px', fontWeight: 400, color: charcoal, margin: 0 }}>{section.title}</h2>
            </div>
            {section.paras.map((p, i) => (
              <p key={i} style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14.5px', color: charcoal, lineHeight: 1.75, margin: '0 0 16px' }}>{p}</p>
            ))}
          </div>
        ))}

        <HRule />
        <div style={{ background: DS.annotationBg, borderLeft: `2px solid ${amber}`, padding: '16px 18px' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: DS.amberDeep, margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Heritage Trust Note —</p>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13.5px', color: charcoal, lineHeight: 1.65, margin: 0 }}>
            The Heritage Trust does not investigate incidents. It documents them. Submission of an incident does not constitute an allegation. Entry into the registry does not constitute a finding. The Trust is not a court of law, a tribunal, or a complaints body. It is an archive. If you are seeking a resolution to a community dispute, the Trust respectfully suggests contacting the appropriate authorities.
          </p>
        </div>
      </div>

      <DesktopFooter />
    </div>
  );
}

function Screen11() {
  const cream = DS.cream, charcoal = DS.charcoal, amber = DS.amber, secondary = DS.secondary, rule = DS.rule;
  return (
    <div style={{ background: cream, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <DesktopNav />

      <div style={{ maxWidth: '860px', margin: '0 auto', width: '100%', padding: '40px', flex: 1 }}>
        <SectionLabel>Contact</SectionLabel>
        <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: '34px', fontWeight: 400, color: charcoal, margin: '0 0 10px' }}>Contact the Heritage Trust</h1>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14px', color: secondary, lineHeight: 1.6, margin: '0 0 36px' }}>
          The Heritage Trust office is staffed on Tuesday and Thursday mornings. Correspondence is replied to within fourteen working days. The Trust requests that enquiries be specific and that correspondents identify themselves by name.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '36px' }}>
          {[
            {
              title: 'Physical Address', lines: [
                'Mwisho wa Mwisho District Heritage Trust',
                'Adjacent to the Community Hall',
                'Mwisho wa Mwisho Town Centre',
                'Mwisho wa Mwisho District, Kenya',
              ]
            },
            {
              title: 'Office Hours', lines: [
                'Tuesday: 9:00 a.m. – 1:00 p.m.',
                'Thursday: 9:00 a.m. – 1:00 p.m.',
                'Other days: by prior appointment only',
                'Public holidays: closed',
              ]
            },
            {
              title: 'Postal Submissions', lines: [
                'P.O. Box 114',
                'Mwisho wa Mwisho District',
                'Kenya',
                'Mark envelope: ATTN: Archivist',
              ]
            },
            {
              title: 'Response Times', lines: [
                'General enquiries: 14 working days',
                'Incident submissions: 21 working days',
                'Testimony appointments: 7 working days',
                'Urgent matters: at the Trust\'s discretion',
              ]
            },
          ].map(block => (
            <div key={block.title} style={{ border: `1px solid ${rule}`, padding: '20px' }}>
              <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '10px', fontWeight: 700, color: secondary, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '12px' }}>{block.title}</div>
              {block.lines.map((line, i) => (
                <p key={i} style={{ fontFamily: i === 0 ? "'EB Garamond', serif" : "'Source Sans 3', sans-serif", fontSize: i === 0 ? '15px' : '13.5px', color: charcoal, margin: '0 0 4px', lineHeight: 1.5 }}>{line}</p>
              ))}
            </div>
          ))}
        </div>

        <HRule />

        <SectionLabel>A Note on Communication</SectionLabel>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14.5px', color: charcoal, lineHeight: 1.75, margin: '0 0 16px' }}>
          The Heritage Trust does not maintain a telephone line. This is not an oversight. The Trust's founding secretary determined in 1993 that telephone conversations were too easily subject to misremembering and that a written record of all communication was preferable. This policy has been upheld by every subsequent archivist.
        </p>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14.5px', color: charcoal, lineHeight: 1.75, margin: '0 0 16px' }}>
          The Trust does not maintain a presence on social media platforms. It notes, without comment, that several community members have discussed individual incidents from the registry on such platforms. The Trust does not monitor these discussions, does not respond to them, and does not consider them part of the official record.
        </p>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14.5px', color: charcoal, lineHeight: 1.75, margin: 0 }}>
          Members of the press are welcome to visit the archive during office hours. The Trust requests advance notice. The Trust does not issue press statements. All information relevant to any incident is contained in the registry itself.
        </p>
      </div>

      <DesktopFooter />
    </div>
  );
}

function Screen12() {
  const cream = DS.cream, charcoal = DS.charcoal, amber = DS.amber, secondary = DS.secondary, rule = DS.rule;
  const sections = [
    {
      title: 'What This Policy Covers',
      body: 'This privacy notice applies to all information provided to the Mwisho wa Mwisho District Heritage Trust in connection with the Registry of Unresolved Community Incidents, including oral testimonies, written submissions, visitor records, and correspondence. It does not apply to information about public figures exercising public functions, which the Trust considers part of the public record and outside the scope of personal privacy.',
    },
    {
      title: 'Information Collected',
      body: 'The Trust collects the following categories of information: names and biographical details of witnesses and submitting parties; accounts of events as given in oral or written testimony; contact details provided for the purpose of correspondence; and documentary materials submitted to the archive. The Trust does not collect financial information, health information, or any information not directly relevant to the documentation of incidents in the registry.',
    },
    {
      title: 'How Information Is Used',
      body: 'Information is used solely for the purpose of compiling and maintaining the registry. It is not shared with any third party, government body, law enforcement agency, or commercial organisation. The Trust has received two requests from external parties for access to named testimony in its archive. Both requests were declined. The Trust does not consider this a precedent; it considers it a record.',
    },
    {
      title: 'Anonymity and Withdrawal',
      body: 'Any person who has given testimony to the Trust may request that their name be removed from the public record. Such requests are honoured in full. The testimony itself — stripped of identifying information — may be retained if it is material to the incident record. The person will be notified if this is the case. Requests for full withdrawal of testimony are considered on a case-by-case basis. The Trust has granted four such requests since 1991. It has declined one. The declined request is itself documented in the internal archive.',
    },
    {
      title: 'Retention',
      body: 'The Trust retains all submitted materials indefinitely. This is not a decision made lightly. The Trust\'s view is that the significance of a document cannot always be assessed at the time of its submission, and that future community members may find value in materials that appear unremarkable today. Two documents held since 1994 were, until 2019, considered peripheral. They are now considered primary sources. The Trust does not name them here.',
    },
    {
      title: 'Access to Your Information',
      body: 'Any person may request to view information held about them by the Trust. Requests should be made in writing to the Trust office. The Trust will respond within 21 working days. Where a request concerns testimony given in relation to a named third party, the Trust will consider what information may be disclosed without compromising that party\'s own privacy. This assessment will be made by the archivist, whose decision is final within the Trust\'s procedures.',
    },
    {
      title: 'Cookies and Digital Tracking',
      body: 'The Trust\'s website does not use tracking cookies. It does not monitor visitor behaviour. It does not maintain visitor logs beyond what is technically necessary for the operation of the website. The Trust notes that it did not have a website until 2019, considers this unremarkable, and has no current plans to expand its digital presence.',
    },
  ];

  return (
    <div style={{ background: cream, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <DesktopNav />

      <div style={{ maxWidth: '860px', margin: '0 auto', width: '100%', padding: '40px', flex: 1 }}>
        <SectionLabel>Privacy</SectionLabel>
        <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: '34px', fontWeight: 400, color: charcoal, margin: '0 0 6px' }}>
          Privacy Notice
        </h1>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: secondary, margin: '0 0 8px', letterSpacing: '0.04em' }}>
          Last updated: January 2024 &nbsp;·&nbsp; Ref: TRUST-PRIV-2024-001
        </p>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14px', color: secondary, lineHeight: 1.6, margin: '0 0 36px' }}>
          The Heritage Trust holds information about community members in the course of its archival work. This notice explains what is held, how it is used, and what rights individuals have in relation to it. The Trust has endeavoured to write this notice in plain language. Where it has not succeeded, it apologises.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {sections.map((s, i) => (
            <div key={s.title} style={{ borderTop: `1px solid ${rule}`, paddingTop: '22px', paddingBottom: '22px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: amber, flexShrink: 0, paddingTop: '4px' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 style={{ fontFamily: "'EB Garamond', serif", fontSize: '20px', fontWeight: 400, color: charcoal, margin: '0 0 10px' }}>{s.title}</h3>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14px', color: charcoal, lineHeight: 1.75, margin: 0 }}>{s.body}</p>
                </div>
              </div>
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${rule}`, paddingTop: '22px' }}>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', color: secondary, lineHeight: 1.65, margin: 0 }}>
              This privacy notice was adopted by the Heritage Trust at its quarterly meeting of January 2024. It supersedes the privacy notice of 2019, which superseded the data handling policy of 2007, which was the first written policy of its kind in the Trust's history. Before 2007, the Trust operated on the principle that it would handle all information with discretion. It still does. The policy simply makes this explicit.
            </p>
          </div>
        </div>
      </div>

      <DesktopFooter />
    </div>
  );
}

Object.assign(window, { Screen9, Screen10, Screen11, Screen12 });
