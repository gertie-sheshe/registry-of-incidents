// Screen 3: Individual Incident Record (Pilau) & Screen 4: Oral Histories

function Screen3() {
  const cream = DS.cream, charcoal = DS.charcoal, amber = DS.amber, secondary = DS.secondary, rule = DS.rule;
  return (
    <div style={{ background: cream, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <DesktopNav active="Browse Incidents" />

      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%', padding: '32px 40px', flex: 1 }}>

        {/* Breadcrumb */}
        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: secondary, marginBottom: '28px', display: 'flex', gap: '8px', alignItems: 'center' }}>
          <a href="#" style={{ color: secondary, textDecoration: 'none' }}>Registry</a>
          <span>›</span>
          <a href="#" style={{ color: secondary, textDecoration: 'none' }}>Browse Incidents</a>
          <span>›</span>
          <span style={{ color: charcoal }}>INC-1987-003</span>
        </div>

        {/* Incident Header */}
        <div style={{ marginBottom: '32px' }}>
          <RefNumber style={{ fontSize: '13px', display: 'block', marginBottom: '8px' }}>INC-1987-003</RefNumber>
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: '40px', fontWeight: 400, color: charcoal, margin: '0 0 16px', lineHeight: 1.15 }}>
            The Pilau Incident
          </h1>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '14px' }}>
            {[
              ['Date of occurrence', '14 August 1987'],
              ['Venue', 'St. Cyprian\'s Church Annual Harvest Fundraiser'],
              ['Status', null],
              ['First documented', '1991'],
              ['Last updated', '2024'],
            ].map(([label, val]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '10px', color: secondary, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
                {label === 'Status'
                  ? <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}><StatusPill status="CLOSED" /><span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: secondary }}>(Unresolved)</span></div>
                  : <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13.5px', color: charcoal }}>{val}</span>
                }
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {['pilau', 'raffle', 'sufuria', "St. Cyprian's Church", '1987', 'grand prize unclaimed'].map(t => (
              <span key={t} style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: secondary, background: '#ECEAE4', border: `1px solid ${rule}`, padding: '2px 8px', borderRadius: '3px' }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${amber}`, marginBottom: '28px' }} />

        {/* Incident Summary */}
        <SectionLabel>Incident Summary</SectionLabel>
        {[
          `The St. Cyprian's Church Annual Harvest Fundraiser of 1987 was held on the afternoon of 14 August. The event had been convened in the church hall, with the serving table positioned along the eastern wall beneath the second window, as had been the custom since the fundraiser's establishment in 1979. The occasion was attended by an estimated 140 to 160 congregants, in addition to Father Emmanuel Kamau, who presided, and several invited guests from neighbouring parishes. Preparations had been completed by midday. The raffle stand, displaying the donated prizes, had been placed immediately adjacent to the serving table, at a distance later estimated at between 40 and 60 centimetres.`,
          `At approximately 2:17 in the afternoon, Mama Edna Mutua's sufuria of pilau — a fixture of the fundraiser since 1981, and regarded by regular attendees as its defining culinary provision — slid from the surface of the serving table. The precise cause of the movement has not been established. The sufuria struck the raffle display stand directly. The stand, constructed from chipboard and held together with wire affixings, collapsed on impact. Three hundred and twelve raffle tickets, each individually folded and placed in a wire drum for the draw, were dispersed across an area of approximately four square metres. The sufuria came to rest 0.9 metres from the table. It was undamaged. The pilau remained largely contained.`,
          `Father Kamau declared a brief pause in proceedings. The pause did not end in the resumption of the raffle. The assembled crowd assisted in collecting the displaced tickets, but the feasibility of conducting a fair draw from among the recovered tickets was not established to the satisfaction of the organising committee. The raffle was not drawn that afternoon. The Njoroge family's donated prize — a two-night, three-day weekend stay at Mombasa Palms Guesthouse, valued at Ksh 3,400 at the time of donation — was not awarded. No alternative draw date was announced. No further communication was issued to ticket holders.`,
          `The Mombasa Palms Guesthouse prize has not been claimed as of the date of this record's most recent update. The Njoroge family has not been reapproached regarding reissuance or revaluation of the prize. The raffle tickets, or a portion thereof, are believed to have been retained by the church secretary; no formal inventory was conducted. The sufuria was removed from the church hall following the event by Mama Edna Mutua. It is currently held in private custody. Its precise location is known to at least two individuals. Neither has been formally interviewed by the Heritage Trust. The serving table was replaced in 1993. The incident has not been officially closed by the organising committee, as no committee meeting to address it has been convened.`,
        ].map((para, i) => (
          <p key={i} style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14.5px', color: charcoal, lineHeight: 1.75, margin: '0 0 18px' }}>{para}</p>
        ))}

        <HeritageTrustNote>
          Mama Edna Mutua has stated, in her testimony collected in 2025, that the serving table was unstable prior to the incident and that she had raised this concern with a member of the organising committee. Gerald Otieno, who was seated at the front table nearest the serving area, has stated that the table appeared stable and that he observed the sufuria in motion before it reached the table's edge. These two accounts are not reconcilable on the available evidence. Both are preserved in full.
        </HeritageTrustNote>

        <HRule />

        {/* Object Record */}
        <SectionLabel>Associated Object Record</SectionLabel>
        <div style={{ border: `1px solid ${rule}`, marginBottom: '32px' }}>
          <div style={{ background: '#ECEAE4', padding: '12px 20px', borderBottom: `1px solid ${rule}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: "'EB Garamond', serif", fontSize: '16px', color: charcoal }}>Object Catalogue Entry</span>
            <RefNumber>OBJ-001</RefNumber>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
            {[
              ['Object Type', 'Cooking vessel (sufuria)'],
              ['Material', 'Aluminium, riveted handles'],
              ['Capacity', 'Approximately 12 litres'],
              ['Condition', 'Undamaged. No deformation recorded.'],
              ['Current Location', 'Private custody. Location withheld at request of custodian.'],
              ['Catalogue Ref', 'OBJ-001'],
            ].map(([k, v], i) => (
              <div key={k} style={{ padding: '12px 20px', borderBottom: i < 4 ? `1px solid ${rule}` : 'none', borderRight: i % 2 === 0 ? `1px solid ${rule}` : 'none' }}>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '10px', fontWeight: 700, color: secondary, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{k}</div>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13.5px', color: charcoal }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <HRule />

        {/* Oral Histories */}
        <SectionLabel>Oral Histories</SectionLabel>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', color: secondary, margin: '0 0 20px' }}>3 testimonies related to this incident.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '32px' }}>
          {[
            { name: 'Agnes Wambua', age: 71, role: 'Eyewitness, Pew 3 (left side)', ref: 'OHT-1991-001', excerpt: '"I have replayed that moment every day for thirty-seven years. The sound the sufuria made. The silence that followed. And then Gerald."' },
            { name: 'Mama Edna Mutua', age: 84, role: 'Proprietor of the sufuria. First public statement, 2025.', ref: 'OHT-2025-044', excerpt: '"The table was not level. I said so. No one has asked me about that since."' },
            { name: 'Gerald Otieno', age: 79, role: 'Seated at front table. Testimony disputed.', ref: 'OHT-1993-003', excerpt: '"The table was perfectly stable. I was watching it. What happened, happened quickly."' },
          ].map(w => (
            <div key={w.name} style={{ border: `1px solid ${rule}`, padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <InitialsAvatar name={w.name} size={40} />
                <div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14px', fontWeight: 600, color: charcoal }}>{w.name}</div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '11.5px', color: secondary }}>Age {w.age}</div>
                </div>
              </div>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: secondary, lineHeight: 1.5, margin: 0 }}>{w.role}</p>
              <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '14px', fontStyle: 'italic', color: charcoal, lineHeight: 1.6, margin: 0 }}>{w.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <RefNumber style={{ fontSize: '9.5px' }}>{w.ref}</RefNumber>
                <a href="#" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: amber, textDecoration: 'none' }}>Read full testimony →</a>
              </div>
            </div>
          ))}
        </div>

        <HRule />

        {/* Related Incidents */}
        <SectionLabel>Related Incidents</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {[
            { ref: 'INC-1991-004', name: 'The Closing Prayer Incident', note: 'The Heritage Trust was founded partly in response to incidents of this nature. This incident is the only one in the registry in which the documenting institution is itself implicated.', status: 'CLOSED' },
            { ref: 'INC-1994-011', name: 'The Microphone Incident', note: 'A further instance in which a public event in Mwisho wa Mwisho produced an irresolvable ambiguity at its moment of greatest consequence.', status: 'DISPUTED' },
          ].map(inc => (
            <div key={inc.ref} style={{ border: `1px solid ${rule}`, padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <RefNumber>{inc.ref}</RefNumber>
                <StatusPill status={inc.status} />
              </div>
              <h4 style={{ fontFamily: "'EB Garamond', serif", fontSize: '18px', fontWeight: 400, color: charcoal, margin: 0 }}>{inc.name}</h4>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', color: secondary, lineHeight: 1.6, margin: 0 }}>{inc.note}</p>
              <a href="#" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: amber, textDecoration: 'none' }}>View full record →</a>
            </div>
          ))}
        </div>
      </div>

      <DesktopFooter />
    </div>
  );
}

function Screen4() {
  const [activeFilter, setActiveFilter] = React.useState('All Witnesses');
  const cream = DS.cream, charcoal = DS.charcoal, amber = DS.amber, secondary = DS.secondary, rule = DS.rule;
  const filters = ['All Witnesses', 'Eyewitnesses', 'Secondary Accounts', 'Children at the Time', 'Disputed Testimony', 'Deceased (testimony on record)'];

  const witnesses = [
    { name: 'Agnes Wambua', age: 71, role: 'Eyewitness, Pew 3 (left side)', incident: 'INC-1987-003', ref: 'OHT-1991-001', excerpt: '"I have replayed that moment every day for thirty-seven years. The sound the sufuria made. The silence that followed. And then Gerald."', tags: ['eyewitness'] },
    { name: 'Mama Edna Mutua', age: 84, role: 'Proprietor of the sufuria', incident: 'INC-1987-003', ref: 'OHT-2025-044', note: 'First public statement, 2025', excerpt: '"The table was not level. I said so to someone — I cannot remember who — before we began serving. No one has asked me about that since."', tags: ['eyewitness', 'primary source'] },
    { name: 'Gerald Otieno', age: 79, role: '"The man who stood up"', incident: 'INC-1987-003', ref: 'OHT-1993-003', excerpt: '"The table was perfectly stable. I was watching it closely because I intended to take a second serving. What happened, happened quickly. I was not responsible for the stand."', tags: ['disputed', 'eyewitness'] },
    { name: 'Mr. Silas Barasa', age: 67, role: 'Attendee. Has not explained. Has not been asked.', incident: 'INC-2001-007', ref: 'OHT-2019-031', excerpt: '"I stand at meetings when required. I have always stood when required. I do not think this requires elaboration."', tags: ['secondary account'] },
    { name: 'Mrs. Grace Njeri', age: 68, role: '"Served the cake herself."', incident: 'INC-2016-019', ref: null, note: 'No statement given', excerpt: 'Mrs. Njeri has not provided a formal statement to the Heritage Trust. Photographs from the retirement celebration are held on record. No oral testimony exists.', tags: ['no statement given'] },
    { name: 'Father Emmanuel Kamau', age: null, role: 'Presided over the 1987 Harvest Fundraiser', incident: 'INC-1987-003', ref: 'OHT-1993-002', note: 'Testimony recorded 1993. Deceased.', excerpt: '"I called the pause because I felt it was necessary. I did not feel it was necessary to call another one after that. The Lord provides clarity in His own time."', tags: ['deceased', 'primary source'] },
  ];

  return (
    <div style={{ background: cream, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <DesktopNav active="Oral Histories" />

      <div style={{ padding: '36px 40px 0', borderBottom: `1px solid ${rule}` }}>
        <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: '32px', fontWeight: 400, color: charcoal, margin: '0 0 8px' }}>Oral Histories</h1>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14px', color: secondary, margin: '0 0 24px' }}>
          47 testimonies collected between 1991 and 2025. All accounts given voluntarily. Conflicting testimonies are preserved without adjudication.
        </p>
        <div style={{ display: 'flex', gap: '0', borderTop: `1px solid ${rule}` }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '12.5px', fontWeight: activeFilter === f ? 600 : 400,
              color: activeFilter === f ? amber : secondary,
              background: 'none', border: 'none',
              borderBottom: activeFilter === f ? `2px solid ${amber}` : '2px solid transparent',
              padding: '12px 16px', cursor: 'pointer', whiteSpace: 'nowrap',
            }}>{f}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: '32px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', flex: 1 }}>
        {witnesses.map(w => (
          <div key={w.name} style={{ border: `1px solid ${rule}`, padding: '22px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <InitialsAvatar name={w.name} size={44} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'EB Garamond', serif", fontSize: '18px', color: charcoal, lineHeight: 1.2 }}>
                  {w.name}{w.age ? `, ${w.age}` : ''}
                </div>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12.5px', color: secondary, marginTop: '3px' }}>{w.role}</div>
                {w.note && <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: amber, marginTop: '4px' }}>{w.note}</div>}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <RefNumber style={{ fontSize: '10px' }}>{w.incident}</RefNumber>
              {w.ref && <><span style={{ color: rule }}>·</span><RefNumber style={{ fontSize: '10px' }}>{w.ref}</RefNumber></>}
            </div>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '15px', fontStyle: 'italic', color: charcoal, lineHeight: 1.65, margin: 0 }}>{w.excerpt}</p>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {w.tags.map(t => (
                <span key={t} style={{
                  fontFamily: "'Source Sans 3', sans-serif", fontSize: '10px',
                  color: t === 'disputed' ? DS.disputedText : t === 'deceased' ? secondary : DS.amberDeep,
                  background: t === 'disputed' ? DS.disputedBg : t === 'deceased' ? '#E8E5DE' : DS.amberLight,
                  border: `1px solid ${t === 'disputed' ? '#CFBFB5' : t === 'deceased' ? rule : '#E0C99A'}`,
                  padding: '2px 8px', borderRadius: '3px', letterSpacing: '0.04em',
                }}>{t}</span>
              ))}
            </div>
            <a href="#" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: amber, textDecoration: 'none', marginTop: '2px' }}>
              {w.ref ? 'Read full testimony →' : 'View record →'}
            </a>
          </div>
        ))}
      </div>

      <DesktopFooter />
    </div>
  );
}

Object.assign(window, { Screen3, Screen4 });
