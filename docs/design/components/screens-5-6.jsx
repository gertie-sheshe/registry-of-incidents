// Screen 5: Mobile Homepage & Screen 6: Mobile Incident Record (Cake Incident)

function Screen5() {
  const cream = DS.cream, charcoal = DS.charcoal, amber = DS.amber, secondary = DS.secondary, rule = DS.rule;
  return (
    <div style={{ background: cream, minHeight: '100%', display: 'flex', flexDirection: 'column', fontSize: '14px' }}>

      {/* Mobile Top Bar */}
      <div style={{ padding: '12px 16px', borderBottom: `1px solid ${rule}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: cream }}>
        <span style={{ fontFamily: "'EB Garamond', serif", fontSize: '15px', color: charcoal }}>Incident Registry</span>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ display: 'block', width: '20px', height: '1.5px', background: charcoal }} />
          <span style={{ display: 'block', width: '20px', height: '1.5px', background: charcoal }} />
          <span style={{ display: 'block', width: '14px', height: '1.5px', background: charcoal }} />
        </button>
      </div>

      {/* Hero */}
      <div style={{ padding: '24px 16px 20px', borderBottom: `1px solid ${rule}`, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '14px' }}>
        <InstitutionalSeal size={72} />
        <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: '24px', fontWeight: 400, color: charcoal, margin: 0, lineHeight: 1.25 }}>
          The Registry of Unresolved Community Incidents
        </h1>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', color: secondary, margin: 0, lineHeight: 1.55 }}>
          A complete record of consequential events in Mwisho wa Mwisho District, 1971 to present.
        </p>
        <div style={{ borderTop: `1px solid ${amber}`, width: '60px' }} />
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9.5px', color: secondary, letterSpacing: '0.04em' }}>
          Est. 1991 · 22 incidents documented · 1 incident open
        </span>
      </div>

      {/* Alert Bar */}
      <div style={{ background: DS.amberLight, borderBottom: `1px solid #E8C99A`, padding: '10px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <StatusPill status="OPEN" />
          <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: DS.amberDeep, lineHeight: 1.5 }}>
            Active documentation in progress: INC-2023-022 · The Performance Incident · Witness statements currently being collected.
          </span>
        </div>
      </div>

      {/* Featured Incident */}
      <div style={{ padding: '24px 16px', borderBottom: `1px solid ${rule}` }}>
        <SectionLabel>Featured Incident</SectionLabel>
        <h2 style={{ fontFamily: "'EB Garamond', serif", fontSize: '22px', fontWeight: 400, color: charcoal, margin: '0 0 6px', lineHeight: 1.25 }}>
          INC-1987-003 · The Pilau Incident
        </h2>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9.5px', color: secondary, margin: '0 0 16px' }}>
          14 August 1987 · St. Cyprian's Church, Mwisho wa Mwisho
        </p>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14px', color: charcoal, lineHeight: 1.7, margin: '0 0 14px' }}>
          At approximately 2:17 in the afternoon, Mama Edna Mutua's sufuria of pilau slid from the serving table and struck the raffle display stand, sending 312 tickets into the air. No raffle was drawn. The sufuria was undamaged. The grand prize — a weekend stay at Mombasa Palms Guesthouse — was never claimed.
        </p>
        <blockquote style={{ borderLeft: `2px solid ${amber}`, margin: '0 0 14px', paddingLeft: '14px' }}>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '17px', fontStyle: 'italic', color: charcoal, margin: '0 0 6px', lineHeight: 1.5 }}>
            &ldquo;I have replayed that moment every day for thirty-seven years. The sound the sufuria made. The silence that followed. And then Gerald.&rdquo;
          </p>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '11px', color: secondary, margin: 0 }}>
            — Agnes Wambua, 71, Eyewitness, Pew 3 (left side)
          </p>
        </blockquote>
        <a href="#" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', color: amber, textDecoration: 'none' }}>View full record →</a>
      </div>

      {/* Stats 2x2 */}
      <div style={{ borderBottom: `1px solid ${rule}` }}>
        <div style={{ padding: '16px 16px 4px' }}>
          <SectionLabel>Registry at a Glance</SectionLabel>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          {[
            { value: '22', label: 'Incidents Documented' },
            { value: '1', label: 'Open Incident' },
            { value: '47', label: 'Oral Testimonies' },
            { value: '37', label: 'Years Since Oldest Unresolved' },
          ].map((s, i) => (
            <div key={i} style={{ borderRight: i % 2 === 0 ? `1px solid ${rule}` : 'none', borderBottom: i < 2 ? `1px solid ${rule}` : 'none', padding: '16px 8px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'EB Garamond', serif", fontSize: '28px', color: charcoal, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '10px', color: secondary, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Incident Index */}
      <div style={{ padding: '24px 16px', borderBottom: `1px solid ${rule}` }}>
        <SectionLabel>Incident Index</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', border: `1px solid ${rule}` }}>
          {INCIDENTS.map((inc, i) => (
            <div key={inc.incRef} style={{ padding: '10px 12px', borderBottom: i < INCIDENTS.length - 1 ? `1px solid ${rule}` : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: secondary, marginBottom: '2px' }}>{inc.incRef}</div>
                <div style={{ fontFamily: "'EB Garamond', serif", fontSize: '14px', color: charcoal, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{inc.name}</div>
              </div>
              <StatusPill status={inc.status} />
            </div>
          ))}
        </div>
      </div>

      {/* Disputed Accounts */}
      <div style={{ padding: '16px', margin: '16px 16px 0', border: `1px solid ${rule}`, background: '#ECEAE4' }}>
        <SectionLabel style={{ marginBottom: '6px' }}>Disputed Accounts</SectionLabel>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', color: charcoal, lineHeight: 1.6, margin: '0 0 8px' }}>
          9 incidents contain testimony in direct contradiction. The archive does not adjudicate. Both accounts are preserved in full.
        </p>
        <a href="#" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: amber, textDecoration: 'none' }}>View disputed accounts →</a>
      </div>

      {/* Open Incident Box */}
      <div style={{ margin: '12px 16px 24px', border: `1px solid ${amber}`, borderLeft: `3px solid ${amber}`, padding: '14px', background: DS.amberLight }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <RefNumber style={{ fontSize: '9px' }}>INC-2023-022</RefNumber>
          <StatusPill status="OPEN" />
        </div>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '15px', color: charcoal, margin: '0 0 6px' }}>The Performance Incident</p>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12.5px', color: DS.amberDeep, lineHeight: 1.5, margin: '0 0 8px' }}>
          Witness statements are currently being collected. The organising committee has not been formally contacted.
        </p>
        <a href="#" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: amber, textDecoration: 'none' }}>View full record →</a>
      </div>

      {/* Bottom Tab Bar */}
      <div style={{ borderTop: `1px solid ${rule}`, display: 'flex', background: cream, marginTop: 'auto' }}>
        {[['Browse', '≡'], ['Oral Histories', '◎'], ['Open', '●'], ['Search', '⌕']].map(([label, icon], i) => (
          <button key={label} style={{
            flex: 1, padding: '10px 4px 8px', background: 'none', border: 'none', cursor: 'pointer',
            borderTop: i === 0 ? `2px solid ${amber}` : '2px solid transparent',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px',
          }}>
            <span style={{ fontSize: '16px', color: i === 0 ? amber : secondary }}>{icon}</span>
            <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '10px', color: i === 0 ? amber : secondary, letterSpacing: '0.04em' }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Screen6() {
  const cream = DS.cream, charcoal = DS.charcoal, amber = DS.amber, secondary = DS.secondary, rule = DS.rule;
  return (
    <div style={{ background: cream, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>

      {/* Top Bar */}
      <div style={{ padding: '12px 16px', borderBottom: `1px solid ${rule}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '18px', color: charcoal, cursor: 'pointer', lineHeight: 1 }}>←</span>
        <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', color: secondary }}>Browse Incidents</span>
      </div>

      <div style={{ padding: '20px 16px', flex: 1 }}>
        {/* Header */}
        <RefNumber style={{ display: 'block', marginBottom: '6px' }}>INC-2016-019</RefNumber>
        <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: '26px', fontWeight: 400, color: charcoal, margin: '0 0 18px', lineHeight: 1.2 }}>
          The Cake Incident
        </h1>

        {/* Metadata stacked */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px', padding: '14px', border: `1px solid ${rule}`, background: '#F0EDE7' }}>
          {[
            ['Date of Occurrence', '22 July 2016'],
            ['Venue', 'Mwisho wa Mwisho Primary School Staff Room'],
            ['Status', 'CLOSED'],
            ['First Documented', '2016'],
            ['Last Updated', '2024'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
              <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '10px', color: secondary, textTransform: 'uppercase', letterSpacing: '0.1em', flexShrink: 0, paddingTop: '1px' }}>{k}</span>
              {k === 'Status' ? <StatusPill status="CLOSED" /> : <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', color: charcoal, textAlign: 'right' }}>{v}</span>}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {['cake', 'retirement', 'Mrs. Njeri', 'Mrs. Njenga', '2016', 'celebration', 'no correction issued'].map(t => (
            <span key={t} style={{ fontFamily: "'Space Mono', monospace", fontSize: '9.5px', color: secondary, background: '#ECEAE4', border: `1px solid ${rule}`, padding: '2px 7px', borderRadius: '3px' }}>{t}</span>
          ))}
        </div>

        {/* Prose */}
        <SectionLabel>Incident Summary</SectionLabel>
        {[
          `The retirement celebration for Mrs. Grace Njeri, Deputy Headmistress of Mwisho wa Mwisho Primary School for twenty-seven years, was held on the afternoon of 22 July 2016 in the school staff room. The event had been organised by the school's Parent-Teacher Association in consultation with the teaching staff. An estimated thirty-four persons were in attendance, including former colleagues, parents of current pupils, and the serving headmaster, Mr. D. K. Mwangi.`,
          `The celebration cake was delivered at approximately 3:45 in the afternoon by Cakes by Celeste, Mwisho wa Mwisho Market. The cake was decorated in white and blue fondant and bore the inscription "CONGRATULATIONS MRS. NJENGA" in blue icing across its upper tier. Mrs. Njeri's name does not contain the letters N, G, or A in any adjacent arrangement that might produce "Njenga" through reasonable misreading.`,
          `Mrs. Grace Njeri personally served the cake to the assembled guests. She did not remark upon the name as inscribed. No guest remarked upon it either. Photographs from the event, held in the Heritage Trust's photographic archive under ref PHO-2016-007, show Mrs. Njeri standing beside the cake and smiling. The inscription is clearly visible in three of the seven photographs. Mrs. Njeri retired four days later, on 26 July 2016.`,
          `No correction to the cake was made at the time of the celebration. No correction to the photographs has been issued. No statement has been obtained from Cakes by Celeste, nor from any member of the organising committee, regarding the origin of the discrepancy. Mrs. Njeri has not provided a formal statement to the Heritage Trust. The record notes that she has not been directly asked.`,
        ].map((para, i) => (
          <p key={i} style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '14px', color: charcoal, lineHeight: 1.72, margin: '0 0 14px' }}>{para}</p>
        ))}

        <HeritageTrustNote>
          The Heritage Trust notes that the order form submitted to Cakes by Celeste has not been produced for inspection. The organising committee has been contacted on two occasions and has not responded. The Trust records this gap without conclusion.
        </HeritageTrustNote>

        {/* Object Record */}
        <HRule />
        <SectionLabel>Associated Object Record</SectionLabel>
        <div style={{ border: `1px solid ${rule}`, marginBottom: '28px' }}>
          <div style={{ background: '#ECEAE4', padding: '10px 14px', borderBottom: `1px solid ${rule}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: "'EB Garamond', serif", fontSize: '14px', color: charcoal }}>Object Catalogue Entry</span>
            <RefNumber style={{ fontSize: '9.5px' }}>OBJ-004</RefNumber>
          </div>
          {[
            ['Object Type', 'Celebration cake (two-tier)'],
            ['Decoration', 'White and blue fondant. Inscription: "MRS. NJENGA"'],
            ['Condition', 'Consumed in full at the event.'],
            ['Current Location', 'Object no longer extant. Photographs on record.'],
            ['Photographic Ref', 'PHO-2016-007 (7 images)'],
          ].map(([k, v], i, arr) => (
            <div key={k} style={{ padding: '11px 14px', borderBottom: i < arr.length - 1 ? `1px solid ${rule}` : 'none' }}>
              <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '9.5px', fontWeight: 700, color: secondary, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3px' }}>{k}</div>
              <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', color: charcoal }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Oral Histories — horizontal scroll */}
        <SectionLabel>Oral Histories</SectionLabel>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: secondary, margin: '0 0 12px' }}>2 testimonies related to this incident.</p>
        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px', margin: '0 -16px', paddingLeft: '16px', paddingRight: '16px' }}>
          {[
            { name: 'Mrs. Grace Njeri', age: 68, role: '"Served the cake herself."', ref: null, note: 'No statement given', excerpt: 'Mrs. Njeri has not provided a formal statement to the Heritage Trust. The record notes only that she has not been directly asked.', tags: ['no statement given'] },
            { name: 'Mr. D. K. Mwangi', age: 54, role: 'Serving Headmaster. Present at the celebration.', ref: 'OHT-2022-041', excerpt: '"I noticed. I believe others noticed. We were there to celebrate Mrs. Njeri. That remained the priority."', tags: ['secondary account'] },
          ].map(w => (
            <div key={w.name} style={{ border: `1px solid ${rule}`, padding: '16px', minWidth: '260px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <InitialsAvatar name={w.name} size={36} />
                <div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '13px', fontWeight: 600, color: charcoal }}>{w.name}</div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '11px', color: secondary }}>Age {w.age}</div>
                </div>
              </div>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '11px', color: secondary, margin: 0, lineHeight: 1.5 }}>{w.role}</p>
              {w.note && <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: amber }}>{w.note}</span>}
              <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '13.5px', fontStyle: 'italic', color: charcoal, lineHeight: 1.6, margin: 0 }}>{w.excerpt}</p>
              <a href="#" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '11.5px', color: amber, textDecoration: 'none' }}>{w.ref ? 'Read full testimony →' : 'View record →'}</a>
            </div>
          ))}
        </div>

        {/* Related Incidents */}
        <HRule />
        <SectionLabel>Related Incidents</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          {[
            { ref: 'INC-2009-014', name: 'The Announcement Incident', note: 'A further instance of a public discrepancy that was observed by all present and acknowledged by none. Both figures remain in the harambee register.', status: 'DISPUTED' },
            { ref: 'INC-1994-011', name: 'The Microphone Incident', note: 'An incident in which a name was imperfectly transmitted to an audience. Three individuals drew separate conclusions. The correct conclusion has not been formally established.', status: 'DISPUTED' },
          ].map(inc => (
            <div key={inc.ref} style={{ border: `1px solid ${rule}`, padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <RefNumber style={{ fontSize: '9.5px' }}>{inc.ref}</RefNumber>
                <StatusPill status={inc.status} />
              </div>
              <h4 style={{ fontFamily: "'EB Garamond', serif", fontSize: '17px', fontWeight: 400, color: charcoal, margin: 0 }}>{inc.name}</h4>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12.5px', color: secondary, lineHeight: 1.6, margin: 0 }}>{inc.note}</p>
              <a href="#" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: amber, textDecoration: 'none' }}>View full record →</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Screen5, Screen6 });
