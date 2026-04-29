// Screen 1: Desktop Homepage & Screen 2: Browse Incidents

const INCIDENTS = [
  { incRef: 'INC-1978-001', name: 'The Handshake Incident', date: 'Est. 1978', year: 1978, status: 'CLOSED', venue: 'Mwisho wa Mwisho Community Hall', categories: ['community meeting', 'ceremony'], desc: 'The guest of honour extended his hand. The photograph was taken. The handshake did not occur.' },
  { incRef: 'INC-1987-003', name: 'The Pilau Incident', date: '14 Aug 1987', year: 1987, status: 'CLOSED', venue: 'St. Cyprian\'s Church', categories: ['church fundraiser'], desc: 'A sufuria of pilau struck the raffle display. 312 tickets were displaced. No raffle was drawn.' },
  { incRef: 'INC-1991-004', name: 'The Closing Prayer Incident', date: '3 Mar 1991', year: 1991, status: 'CLOSED', venue: 'Heritage Trust inaugural meeting', categories: ['community meeting'], desc: 'The closing prayer lasted 22 minutes. Three attendees departed. All three are recorded as present.' },
  { incRef: 'INC-1994-011', name: 'The Microphone Incident', date: '12 Nov 1994', year: 1994, status: 'DISPUTED', venue: 'Mwisho wa Mwisho Primary School', categories: ['school event'], desc: 'The headmaster\'s microphone failed mid-announcement. Three students believed they had heard their own name.' },
  { incRef: 'INC-2001-007', name: 'The Chair Incident', date: '17 Apr 2001', year: 2001, status: 'CLOSED', venue: 'Umoja Estate Residents\' Association', categories: ['community meeting'], desc: 'Chair 14 was absent. Mr. Barasa stood for two hours without comment. He now brings his own chair.' },
  { incRef: 'INC-2009-014', name: 'The Announcement Incident', date: '9 Jun 2009', year: 2009, status: 'DISPUTED', venue: 'Mwisho wa Mwisho Market Harambee', categories: ['harambee & fundraisers'], desc: 'A contribution of Ksh 50,000 was announced. Ksh 5,000 was contributed. Both figures appear in the register.' },
  { incRef: 'INC-2016-019', name: 'The Cake Incident', date: '22 Jul 2016', year: 2016, status: 'CLOSED', venue: 'Mwisho wa Mwisho Primary School', categories: ['celebrations', 'school event'], desc: 'The retirement cake bore the name MRS. NJENGA. Mrs. Njeri served it herself. No remark was made.' },
  { incRef: 'INC-2023-022', name: 'The Performance Incident', date: '8 Aug 2023', year: 2023, status: 'OPEN', venue: 'Sato Nane Celebrations Ground', categories: ['celebrations', 'community meeting'], desc: 'A musical performance was announced. It did not occur. The programme still lists it. Documentation is ongoing.' },
];

function Screen1() {
  const cream = DS.cream, charcoal = DS.charcoal, amber = DS.amber, secondary = DS.secondary, rule = DS.rule;
  return (
    <div style={{ background: cream, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <DesktopNav active="Browse Incidents" />

      {/* Hero Masthead */}
      <div style={{ padding: '40px 40px 28px', borderBottom: `1px solid ${rule}` }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '28px' }}>
          <InstitutionalSeal size={88} />
          <div style={{ flex: 1 }}>
            <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: '36px', fontWeight: 400, color: charcoal, margin: '0 0 8px', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
              The Registry of Unresolved Community Incidents
            </h1>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '15px', color: secondary, margin: '0 0 14px', lineHeight: 1.5 }}>
              A complete record of consequential events in Mwisho wa Mwisho District, 1971 to present.
            </p>
            <div style={{ borderTop: `1px solid ${amber}`, width: '120px', marginBottom: '12px' }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '10.5px', color: secondary, letterSpacing: '0.04em' }}>
              Est. 1991 &nbsp;·&nbsp; 22 incidents documented &nbsp;·&nbsp; 1 incident open
            </span>
          </div>
        </div>
      </div>

      {/* Alert Bar */}
      <div style={{ background: DS.amberLight, borderBottom: `1px solid #E8C99A`, padding: '10px 40px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <StatusPill status="OPEN" />
        <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', color: DS.amberDeep }}>
          Active documentation in progress: INC-2023-022 · The Performance Incident · Witness statements currently being collected.
        </span>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flex: 1, gap: '0' }}>
        {/* Left editorial column */}
        <div style={{ flex: '1 1 0', padding: '36px 40px', borderRight: `1px solid ${rule}` }}>

          <SectionLabel>Featured Incident</SectionLabel>
          <h2 style={{ fontFamily: "'EB Garamond', serif", fontSize: '28px', fontWeight: 400, color: charcoal, margin: '0 0 8px', lineHeight: 1.25 }}>
            INC-1987-003 · The Pilau Incident
          </h2>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '10.5px', color: secondary, margin: '0 0 20px' }}>
            14 August 1987 &nbsp;·&nbsp; St. Cyprian's Church, Mwisho wa Mwisho
          </p>

          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14.5px', color: charcoal, lineHeight: 1.72, margin: '0 0 16px' }}>
            The St. Cyprian's Church Annual Harvest Fundraiser of 1987 was, by all prior accounts, proceeding without incident. The serving table had been set in the eastern transept, as was customary, and Mama Edna Mutua's sufuria of pilau — a fixture of the event since 1981 — occupied its assigned position at the table's centre.
          </p>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14.5px', color: charcoal, lineHeight: 1.72, margin: '0 0 16px' }}>
            At approximately 2:17 in the afternoon, the sufuria slid from the serving table and struck the raffle display stand. The raffle stand, constructed from chipboard and affixed with wire, collapsed on contact. Three hundred and twelve raffle tickets, each individually folded, were displaced. The sufuria came to rest approximately 0.9 metres from the serving table. It was undamaged.
          </p>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14.5px', color: charcoal, lineHeight: 1.72, margin: '0 0 20px' }}>
            No raffle was drawn. The grand prize — a weekend stay at Mombasa Palms Guesthouse, donated by the Njoroge family — was never claimed. The Njoroge family has not been reapproached regarding reissuance of the prize. The sufuria is currently held in private custody. Its exact location is known to two individuals, neither of whom has been interviewed formally. The table has since been replaced. This incident remains unresolved.
          </p>

          <PullQuote
            quote="I have replayed that moment every day for thirty-seven years. The sound the sufuria made. The silence that followed. And then Gerald."
            attribution="Agnes Wambua, 71, Eyewitness, Pew 3 (left side)"
          />

          <HRule />
          <SectionLabel>Recent Additions to the Registry</SectionLabel>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { ref: 'INC-2023-022', name: 'The Performance Incident', desc: 'A musical performance was announced and did not occur. The programme continued. The artist was not present. Documentation is ongoing.', date: '8 Aug 2023', status: 'OPEN' },
              { ref: 'INC-2016-019', name: 'The Cake Incident', desc: 'The retirement cake bore a name that was not that of the retiree. The cake was served. No correction was issued.', date: '22 Jul 2016', status: 'CLOSED' },
              { ref: 'INC-2009-014', name: 'The Announcement Incident', desc: 'A contribution of Ksh 50,000 was announced at a public harambee. Ksh 5,000 was contributed. Both figures appear in the harambee register without comment.', date: '9 Jun 2009', status: 'DISPUTED' },
            ].map(inc => (
              <div key={inc.ref} style={{ border: `1px solid ${rule}`, padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <RefNumber>{inc.ref}</RefNumber>
                  <StatusPill status={inc.status} />
                </div>
                <h4 style={{ fontFamily: "'EB Garamond', serif", fontSize: '17px', fontWeight: 400, color: charcoal, margin: 0 }}>{inc.name}</h4>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', color: charcoal, margin: 0, lineHeight: 1.6 }}>{inc.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: secondary }}>{inc.date}</span>
                  <a href="#" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: amber, textDecoration: 'none' }}>View full record →</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div style={{ width: '300px', flexShrink: 0, padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: '0' }}>

          <SectionLabel>Registry at a Glance</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: `1px solid ${rule}` }}>
            {[
              { value: '22', label: 'Incidents Documented' },
              { value: '1', label: 'Open Incident' },
              { value: '47', label: 'Oral Testimonies' },
              { value: '37', label: 'Years Since Oldest Unresolved' },
            ].map((s, i) => (
              <div key={i} style={{ borderRight: i % 2 === 0 ? `1px solid ${rule}` : 'none', borderBottom: i < 2 ? `1px solid ${rule}` : 'none' }}>
                <StatBlock value={s.value} label={s.label} />
              </div>
            ))}
          </div>

          <HRule />
          <SectionLabel>Incident Index</SectionLabel>
          <div style={{ border: `1px solid ${rule}` }}>
            {INCIDENTS.map((inc, i) => (
              <div key={inc.incRef} style={{ padding: '10px 14px', borderBottom: i < INCIDENTS.length - 1 ? `1px solid ${rule}` : 'none', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <RefNumber style={{ fontSize: '9.5px' }}>{inc.incRef}</RefNumber>
                  <StatusPill status={inc.status} />
                </div>
                <span style={{ fontFamily: "'EB Garamond', serif", fontSize: '13.5px', color: charcoal }}>{inc.name}</span>
              </div>
            ))}
          </div>

          <HRule />
          <div style={{ border: `1px solid ${rule}`, padding: '18px', background: '#EEEAE2', marginBottom: '16px' }}>
            <SectionLabel style={{ marginBottom: '8px' }}>Disputed Accounts</SectionLabel>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', color: charcoal, lineHeight: 1.6, margin: '0 0 10px' }}>
              9 incidents contain testimony in direct contradiction. The archive does not adjudicate. Both accounts are preserved in full.
            </p>
            <a href="#" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: amber, textDecoration: 'none' }}>View disputed accounts →</a>
          </div>

          <div style={{ border: `1px solid ${amber}`, borderLeft: `3px solid ${amber}`, padding: '16px', background: DS.amberLight }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <RefNumber style={{ fontSize: '9.5px' }}>INC-2023-022</RefNumber>
              <StatusPill status="OPEN" />
            </div>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '15px', color: charcoal, margin: '0 0 6px' }}>The Performance Incident</p>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12.5px', color: DS.amberDeep, lineHeight: 1.5, margin: '0 0 10px' }}>
              Witness statements are currently being collected. The organising committee has not been formally contacted.
            </p>
            <a href="#" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: amber, textDecoration: 'none' }}>View full record →</a>
          </div>
        </div>
      </div>
      <DesktopFooter />
    </div>
  );
}

function Screen2() {
  const [activeFilter, setActiveFilter] = React.useState('All Incidents');
  const cream = DS.cream, charcoal = DS.charcoal, amber = DS.amber, secondary = DS.secondary, rule = DS.rule;
  const filters = ['All Incidents', 'Closed', 'Open', 'Disputed', 'Harambee & Fundraisers', 'School Events', 'Community Meetings', 'Celebrations'];

  return (
    <div style={{ background: cream, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <DesktopNav active="Browse Incidents" />

      <div style={{ padding: '36px 40px 0', borderBottom: `1px solid ${rule}` }}>
        <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: '32px', fontWeight: 400, color: charcoal, margin: '0 0 8px' }}>Browse All Incidents</h1>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14px', color: secondary, margin: '0 0 24px' }}>
          22 incidents documented between 1978 and 2023. Sorted by date of occurrence. Filter by status or category.
        </p>
        <div style={{ display: 'flex', gap: '0', borderTop: `1px solid ${rule}` }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '12.5px', fontWeight: activeFilter === f ? 600 : 400,
              color: activeFilter === f ? amber : secondary,
              background: 'none', border: 'none', borderBottom: activeFilter === f ? `2px solid ${amber}` : '2px solid transparent',
              padding: '12px 16px', cursor: 'pointer', whiteSpace: 'nowrap',
            }}>{f}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: '32px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', flex: 1 }}>
        {[
          { incRef: 'INC-1978-001', name: 'The Handshake Incident', date: 'Est. 1978', venue: 'Mwisho wa Mwisho Community Hall', status: 'CLOSED', categories: ['community meeting', 'ceremony'], desc: 'The guest of honour extended his hand at the ribbon-cutting ceremony. Chief Omondi turned away at the precise moment of the photograph. The image has hung in the hall since 1978 without annotation.' },
          { incRef: 'INC-1987-003', name: 'The Pilau Incident', date: '14 Aug 1987', venue: 'St. Cyprian\'s Church Annual Harvest Fundraiser', status: 'CLOSED', categories: ['church fundraiser'], desc: 'A sufuria of pilau displaced 312 raffle tickets and rendered a harambee draw impossible. The grand prize, a weekend at Mombasa Palms Guesthouse, was never claimed and has not been reoffered.' },
          { incRef: 'INC-1991-004', name: 'The Closing Prayer Incident', date: '3 Mar 1991', venue: 'Heritage Trust Inaugural Meeting', status: 'CLOSED', categories: ['community meeting'], desc: 'The elder invited to close the Heritage Trust\'s inaugural meeting in prayer prayed for 22 minutes. Three attendees departed before the amen. All three are recorded in the official minutes as present.' },
          { incRef: 'INC-1994-011', name: 'The Microphone Incident', date: '12 Nov 1994', venue: 'Mwisho wa Mwisho Primary School Prize-Giving', status: 'DISPUTED', categories: ['school event'], desc: 'The headmaster\'s microphone failed mid-announcement. Three students — Achieng, Kamau, and Otieno — each believed they had heard their own name. Two of the three students no longer speak to each other.' },
          { incRef: 'INC-2001-007', name: 'The Chair Incident', date: '17 Apr 2001', venue: 'Umoja Estate Residents\' Association AGM', status: 'CLOSED', categories: ['community meeting'], desc: 'Chair 14 was absent from the meeting hall before the AGM convened. Mr. Silas Barasa, its customary occupant, stood for the full two-hour duration without comment. He now brings his own folding chair.' },
          { incRef: 'INC-2009-014', name: 'The Announcement Incident', date: '9 Jun 2009', venue: 'Mwisho wa Mwisho Market Harambee', status: 'DISPUTED', categories: ['harambee & fundraisers'], desc: 'A Ksh 50,000 contribution was announced to an assembled crowd. The donor subsequently gave Ksh 5,000. Both figures appear in the harambee register, recorded without comment or reconciliation.' },
          { incRef: 'INC-2016-019', name: 'The Cake Incident', date: '22 Jul 2016', venue: 'Mwisho wa Mwisho Primary School Staff Room', status: 'CLOSED', categories: ['celebrations', 'school event'], desc: 'The retirement cake for Mrs. Grace Njeri, Deputy Headmistress for 27 years, bore the name MRS. NJENGA in blue icing. Mrs. Njeri served the cake herself. No guest remarked upon the discrepancy.' },
          { incRef: 'INC-2023-022', name: 'The Performance Incident', date: '8 Aug 2023', venue: 'Sato Nane Celebrations Ground', status: 'OPEN', categories: ['celebrations'], desc: 'A special musical performance was announced by the MC and did not occur. The programme continued. The printed programme retained the listing. The artist was not present and has not been contacted.' },
        ].map(inc => (
          <IncidentCard key={inc.incRef} ref_num={inc.incRef} name={inc.name} date={inc.date} venue={inc.venue} status={inc.status} categories={inc.categories} description={inc.desc} />
        ))}
      </div>

      <DesktopFooter />
    </div>
  );
}

Object.assign(window, { Screen1, Screen2, INCIDENTS });
