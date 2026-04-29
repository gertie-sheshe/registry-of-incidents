// Screen 7: Disputed Accounts & Screen 8: Open Incidents

function Screen7() {
  const [activeFilter, setActiveFilter] = React.useState('All Disputed');
  const cream = DS.cream, charcoal = DS.charcoal, amber = DS.amber, secondary = DS.secondary, rule = DS.rule;
  const filters = ['All Disputed', 'Testimony Conflicts', 'Documentary Conflicts', 'Unverifiable Claims'];

  const disputed = [
    {
      incRef: 'INC-1987-003', name: 'The Pilau Incident', date: '14 Aug 1987', type: 'Testimony Conflict',
      summary: 'Conflicting accounts exist regarding the stability of the serving table prior to the displacement of the sufuria.',
      accountA: { witness: 'Mama Edna Mutua', role: 'Proprietor of the sufuria', text: 'The table was not level. I raised this concern before serving began. The table had always been unreliable in that position.' },
      accountB: { witness: 'Gerald Otieno', role: 'Seated witness, front table', text: 'The table was perfectly stable. I was watching it. I had no reason to watch an unstable table as closely as I did.' },
      note: 'These accounts bear directly on the question of preventability. The Heritage Trust has not determined which account is accurate. Both are preserved in full.',
    },
    {
      incRef: 'INC-1994-011', name: 'The Microphone Incident', date: '12 Nov 1994', type: 'Unverifiable Claim',
      summary: 'Three students independently assert that they heard their own name announced as the top-performing Form 4 student.',
      accountA: { witness: 'E. Achieng (name withheld by request)', role: 'Student, Form 4, 1994', text: 'I heard my name clearly. I stood up. I sat down again only because no one else reacted. I have never been certain since.' },
      accountB: { witness: 'F. Kamau (name withheld by request)', role: 'Student, Form 4, 1994', text: 'The name that was announced began with a K sound and ended as mine ends. I do not think I was mistaken. I think the microphone returned briefly.' },
      note: 'A third student — identified only as Otieno in the record — has declined to be interviewed. The award certificate was never presented. The headmaster has since retired and has not been contacted.',
    },
    {
      incRef: 'INC-2009-014', name: 'The Announcement Incident', date: '9 Jun 2009', type: 'Documentary Conflict',
      summary: 'The harambee register records a pledged contribution of Ksh 5,000 and an announced contribution of Ksh 50,000 without reconciliation.',
      accountA: { witness: 'Harambee Register, 2009', role: 'Documentary record', text: 'Entry reads: "Donor [name withheld] — pledge: Ksh 5,000. Announced: Ksh 50,000. Received: Ksh 5,000." No annotation follows.' },
      accountB: { witness: 'MC Statement (reconstructed from oral account)', role: 'Secondary source, 2011', text: 'The MC has stated, in a separate context, that he read from a card provided to him. He has not been asked to produce the card. He believes he no longer has it.' },
      note: 'The two figures — Ksh 5,000 and Ksh 50,000 — differ by a factor of ten. The register records both without comment. The donor has not been publicly named in this record.',
    },
    {
      incRef: 'INC-1978-001', name: 'The Handshake Incident', date: 'Est. 1978', type: 'Testimony Conflict',
      summary: 'Witnesses disagree on whether Chief Omondi was aware that the photograph was being taken at the moment he turned.',
      accountA: { witness: 'A. Wekesa, 83', role: 'Attendee at the inauguration, 1978', text: 'He knew the photograph was coming. We had been told to stand still. He chose that moment to turn. I do not know why. No one asked him at the time.' },
      accountB: { witness: 'B. Odhiambo, 78', role: 'Attendee at the inauguration, 1978', text: 'It was entirely accidental. Someone called his name from the side. He was a courteous man. He turned because he was called. That is all.' },
      note: 'Chief Omondi died in 2003. No statement was collected from him by the Heritage Trust prior to his death. This constitutes a gap in the record which cannot now be remedied.',
    },
    {
      incRef: 'INC-2001-007', name: 'The Chair Incident', date: '17 Apr 2001', type: 'Unverifiable Claim',
      summary: 'No consensus exists on how or by whom Chair 14 was removed from the meeting hall before the AGM convened.',
      accountA: { witness: 'P. Njoroge, 61', role: 'AGM attendee, 2001', text: 'The chair was not there when I arrived. I arrived forty minutes before the meeting. If it had been removed deliberately, someone would have known.' },
      accountB: { witness: 'R. Mutuku, 59', role: 'AGM attendee, 2001', text: 'The chairs were set out the evening before. I helped set them. There were fifteen chairs. I counted them. I am certain of fifteen.' },
      note: 'The Residents\' Association has not formally investigated the removal of the chair. Mr. Barasa, the chair\'s regular occupant, has attended every AGM since 2001. He has not been asked about the chair.',
    },
    {
      incRef: 'INC-1991-004', name: 'The Closing Prayer Incident', date: '3 Mar 1991', type: 'Documentary Conflict',
      summary: 'The official minutes record three individuals as present at the meeting\'s close. All three had departed before the amen was said.',
      accountA: { witness: 'Heritage Trust Minutes, 3 March 1991', role: 'Documentary record', text: 'Minutes read: "The meeting was closed in prayer and fellowship. All founding members in attendance." Three names follow, each of whom — by separate oral accounts — had left.' },
      accountB: { witness: 'Multiple oral accounts (3 witnesses)', role: 'Testimonies collected 1992–1995', text: 'All three named individuals have separately confirmed that they had departed before the prayer concluded. None disputes that the prayer was still in progress when they left.' },
      note: 'This is the only incident in the registry in which the Heritage Trust itself is implicated as a party to the discrepancy. The minutes were recorded by the Trust\'s founding secretary, who has not provided a statement.',
    },
  ];

  return (
    <div style={{ background: cream, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <DesktopNav active="Disputed Accounts" />

      <div style={{ padding: '36px 40px 0', borderBottom: `1px solid ${rule}` }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: '32px', fontWeight: 400, color: charcoal, margin: '0 0 8px' }}>Disputed Accounts</h1>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14px', color: secondary, margin: 0, maxWidth: '680px', lineHeight: 1.6 }}>
              9 incidents in the registry contain oral or documentary testimony that is in direct and irresolvable conflict. The Heritage Trust does not adjudicate between accounts. Both sides of each dispute are preserved here in full, without editorial preference.
            </p>
          </div>
          <div style={{ border: `1px solid ${rule}`, padding: '14px 20px', background: '#ECEAE4', flexShrink: 0, maxWidth: '200px' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '22px', color: charcoal, lineHeight: 1, marginBottom: '4px' }}>9</div>
            <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '10px', color: secondary, textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1.4 }}>Incidents with conflicting accounts</div>
          </div>
        </div>

        <aside style={{ background: DS.annotationBg, borderLeft: `2px solid ${amber}`, padding: '12px 16px', marginBottom: '24px' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: DS.amberDeep, margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Heritage Trust Note —</p>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', color: charcoal, margin: 0, lineHeight: 1.6 }}>
            The archive does not adjudicate. It documents. Where two accounts cannot be reconciled, both are preserved. Where a witness has declined to speak, that silence is also documented. The presence of a dispute in this registry does not imply fault, fabrication, or error on the part of any named individual.
          </p>
        </aside>

        <div style={{ display: 'flex', borderTop: `1px solid ${rule}` }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} style={{
              fontFamily: "'Source Sans 3', sans-serif", fontSize: '12.5px',
              fontWeight: activeFilter === f ? 600 : 400,
              color: activeFilter === f ? amber : secondary,
              background: 'none', border: 'none',
              borderBottom: activeFilter === f ? `2px solid ${amber}` : '2px solid transparent',
              padding: '12px 16px', cursor: 'pointer', whiteSpace: 'nowrap',
            }}>{f}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: '32px 40px', flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {disputed.map(d => (
          <div key={d.incRef} style={{ border: `1px solid ${rule}` }}>
            {/* Card header */}
            <div style={{ padding: '16px 20px', borderBottom: `1px solid ${rule}`, background: '#ECEAE4', display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <RefNumber>{d.incRef}</RefNumber>
                <h3 style={{ fontFamily: "'EB Garamond', serif", fontSize: '19px', fontWeight: 400, color: charcoal, margin: 0 }}>{d.name}</h3>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9.5px', color: secondary }}>{d.date}</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <StatusPill status="DISPUTED" />
                <CategoryTag>{d.type}</CategoryTag>
              </div>
            </div>
            {/* Summary */}
            <div style={{ padding: '14px 20px', borderBottom: `1px solid ${rule}` }}>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13.5px', color: charcoal, lineHeight: 1.6, margin: 0 }}>{d.summary}</p>
            </div>
            {/* Two-column accounts */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              {[d.accountA, d.accountB].map((acc, i) => (
                <div key={i} style={{ padding: '18px 20px', borderRight: i === 0 ? `1px solid ${rule}` : 'none' }}>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '10px', fontWeight: 700, color: secondary, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>
                    {i === 0 ? 'Account A' : 'Account B'}
                  </div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12.5px', color: charcoal, fontWeight: 600, marginBottom: '2px' }}>{acc.witness}</div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '11.5px', color: secondary, marginBottom: '10px' }}>{acc.role}</div>
                  <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '15px', fontStyle: 'italic', color: charcoal, lineHeight: 1.65, margin: 0 }}>&ldquo;{acc.text}&rdquo;</p>
                </div>
              ))}
            </div>
            {/* Heritage Trust note */}
            <div style={{ padding: '12px 20px', borderTop: `1px solid ${rule}`, background: DS.annotationBg, borderLeft: `3px solid ${amber}` }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: DS.amberDeep, textTransform: 'uppercase', letterSpacing: '0.12em', marginRight: '8px' }}>Heritage Trust Note —</span>
              <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12.5px', color: charcoal, lineHeight: 1.6 }}>{d.note}</span>
            </div>
            <div style={{ padding: '10px 20px', borderTop: `1px solid ${rule}`, display: 'flex', justifyContent: 'flex-end' }}>
              <a href="#" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: amber, textDecoration: 'none' }}>View full incident record →</a>
            </div>
          </div>
        ))}
      </div>

      <DesktopFooter />
    </div>
  );
}

function Screen8() {
  const cream = DS.cream, charcoal = DS.charcoal, amber = DS.amber, secondary = DS.secondary, rule = DS.rule;

  const timeline = [
    { date: '8 Aug 2023', event: 'Incident occurs at Sato Nane celebrations. MC announces performance. Performance does not occur. Programme continues.' },
    { date: '10 Aug 2023', event: 'Heritage Trust notified of the incident by two independent community members. Initial assessment begins.' },
    { date: '14 Aug 2023', event: 'Incident formally entered into the registry as INC-2023-022. Status designated: OPEN.' },
    { date: '22 Sep 2023', event: 'First witness statement collected. Agnes Wambua (unrelated to INC-1987-003 witness of the same name) provides a preliminary account.' },
    { date: '14 Nov 2023', event: 'Heritage Trust writes to the organising committee requesting a formal response. No reply received as of the date of this record.' },
    { date: '3 Feb 2024', event: 'Second witness statement collected. Mr. P. Ndegwa, a printed programme vendor, confirms programme listing.' },
    { date: '17 Apr 2025', event: 'Heritage Trust issues a second written request to the organising committee. No reply received.' },
    { date: 'Ongoing', event: 'Witness statements continue to be collected. The artist has not been contacted by any party. The incident remains open.' },
  ];

  return (
    <div style={{ background: cream, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <DesktopNav active="Open Incidents" />

      {/* Alert bar */}
      <div style={{ background: DS.amberLight, borderBottom: `1px solid #E8C99A`, padding: '10px 40px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <StatusPill status="OPEN" />
        <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', color: DS.amberDeep }}>
          1 incident currently open. Documentation is active. Witness statements are being collected.
        </span>
      </div>

      <div style={{ padding: '36px 40px 0', borderBottom: `1px solid ${rule}` }}>
        <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: '32px', fontWeight: 400, color: charcoal, margin: '0 0 8px' }}>Open Incidents</h1>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14px', color: secondary, margin: '0 0 20px', lineHeight: 1.6, maxWidth: '680px' }}>
          An incident is designated OPEN when it has occurred, has been entered into the registry, and remains under active documentation. The Heritage Trust continues to collect testimony, seek responses from relevant parties, and update the record. An open incident is not a criminal matter. It is an unfinished piece of history.
        </p>
      </div>

      <div style={{ display: 'flex', flex: 1, gap: '0' }}>
        {/* Main content */}
        <div style={{ flex: 1, padding: '36px 40px', borderRight: `1px solid ${rule}` }}>
          <div style={{ border: `2px solid ${amber}`, borderLeft: `4px solid ${amber}`, marginBottom: '32px' }}>
            <div style={{ background: DS.amberLight, padding: '16px 20px', borderBottom: `1px solid #E8C99A`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <RefNumber style={{ fontSize: '13px' }}>INC-2023-022</RefNumber>
                <StatusPill status="OPEN" />
              </div>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: DS.amberDeep }}>Under active documentation</span>
            </div>
            <div style={{ padding: '20px' }}>
              <h2 style={{ fontFamily: "'EB Garamond', serif", fontSize: '28px', fontWeight: 400, color: charcoal, margin: '0 0 6px' }}>The Performance Incident</h2>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '10.5px', color: secondary, margin: '0 0 18px' }}>8 August 2023 · Sato Nane Celebrations Ground, Mwisho wa Mwisho</p>

              {[
                'At the Sato Nane celebrations held on 8 August 2023 at the Mwisho wa Mwisho celebrations ground, the Master of Ceremonies announced, at approximately 4:40 in the afternoon, that a special musical performance would take place. He announced it by name. He thanked the artist in advance. The crowd acknowledged the announcement.',
                'The performance did not take place. The MC continued with the programme without reference to its absence. The printed programme, distributed to attendees prior to the event, continued to list the performance in its original position on the running order. No amendment was circulated. No announcement was made regarding the performance\'s cancellation or postponement.',
                'The artist named in the announcement was not present at the venue at any point during the celebrations. The organising committee has not contacted the artist for comment, or has not disclosed that it has done so. The Heritage Trust has written to the committee on two occasions. No response has been received. The performance listing remains in the printed programme, which is held in the Trust\'s archive under ref DOC-2023-014.',
                'This incident is currently open. The Heritage Trust regards it as unresolved not because the performance\'s absence is in doubt — it is not — but because no authoritative account of the sequence of events leading to the announcement has been obtained. The archive will remain open until such an account is provided, or until the Trust determines that no further testimony is obtainable.',
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14.5px', color: charcoal, lineHeight: 1.72, margin: '0 0 16px' }}>{p}</p>
              ))}

              <HeritageTrustNote>
                The Heritage Trust notes that the name of the artist has been withheld from this public record pending formal contact. Should the artist or a representative come forward, this record will be updated. The Trust does not draw conclusions from the artist's absence. Absence is documented; it is not interpreted.
              </HeritageTrustNote>
            </div>
          </div>

          {/* Documentation Timeline */}
          <SectionLabel>Documentation Timeline</SectionLabel>
          <div style={{ marginTop: '8px', paddingLeft: '8px' }}>
            {timeline.map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: i < timeline.length - 1 ? '0' : '0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: t.date === 'Ongoing' ? amber : '#D4C9B5', border: `2px solid ${t.date === 'Ongoing' ? amber : '#B0A898'}`, flexShrink: 0, marginTop: '3px' }} />
                  {i < timeline.length - 1 && <div style={{ width: '1px', flex: 1, background: rule, minHeight: '32px' }} />}
                </div>
                <div style={{ paddingBottom: '20px' }}>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: t.date === 'Ongoing' ? amber : secondary, marginBottom: '4px', letterSpacing: '0.04em' }}>{t.date}</div>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13.5px', color: charcoal, lineHeight: 1.6, margin: 0 }}>{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ width: '300px', flexShrink: 0, padding: '36px 28px' }}>
          <SectionLabel>Submit a Witness Statement</SectionLabel>
          <div style={{ border: `1px solid ${rule}`, padding: '18px', marginBottom: '24px' }}>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', color: charcoal, lineHeight: 1.65, margin: '0 0 12px' }}>
              If you were present at the Sato Nane celebrations on 8 August 2023 and have information relevant to INC-2023-022, the Heritage Trust invites you to submit a voluntary statement.
            </p>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: secondary, lineHeight: 1.6, margin: '0 0 12px' }}>
              Statements may be given in person at the Trust office, by post, or by written submission. All statements are held in confidence until the witness gives permission for them to be included in the public record.
            </p>
            <a href="#" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: amber, textDecoration: 'none', display: 'block' }}>View submission guidelines →</a>
          </div>

          <SectionLabel>What Constitutes an Open Incident</SectionLabel>
          <div style={{ border: `1px solid ${rule}`, padding: '18px', marginBottom: '24px' }}>
            {[
              'The event has been entered into the registry.',
              'At least one material question about the event remains unanswered.',
              'Relevant parties have not provided a full account.',
              'The Heritage Trust has determined that further documentation is obtainable.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: i < 3 ? '10px' : '0' }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: amber, flexShrink: 0, marginTop: '2px' }}>{i + 1}.</span>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', color: charcoal, lineHeight: 1.55, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          <SectionLabel>Closed Incidents</SectionLabel>
          <div style={{ border: `1px solid ${rule}`, padding: '18px' }}>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', color: secondary, lineHeight: 1.6, margin: '0 0 8px' }}>
              An incident is designated CLOSED when the Trust has determined that no further material testimony is obtainable. Closure does not indicate resolution. The incident remains unresolved. It is merely completely documented.
            </p>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: secondary }}>21 of 22 incidents are closed.</p>
          </div>
        </div>
      </div>

      <DesktopFooter />
    </div>
  );
}

Object.assign(window, { Screen7, Screen8 });
