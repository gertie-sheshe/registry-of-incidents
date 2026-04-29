// Shared design system components for the Registry of Unresolved Community Incidents

const DS = {
  cream: '#F5F2EC',
  charcoal: '#2C2A25',
  secondary: '#7A7060',
  amber: '#8B5E3C',
  amberLight: '#FAEEDA',
  amberDeep: '#633806',
  rule: '#D4C9B5',
  annotationBg: '#F0EBE0',
  disputedBg: '#EDE0D8',
  disputedText: '#6B3020',
  closedBg: '#ECEAE6',
  closedText: '#4A4640',
};

function InstitutionalSeal({ size = 64 }) {
  const r = 47, cx = 50, cy = 50;
  const pathR = 41;
  const circleText = `M ${cx},${cy} m -${pathR},0 a ${pathR},${pathR} 0 1,1 ${pathR*2},0 a ${pathR},${pathR} 0 1,1 -${pathR*2},0`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>
      <defs>
        <path id={`cp-${size}`} d={circleText} />
      </defs>
      <circle cx={cx} cy={cy} r={r} fill={DS.cream} stroke={DS.amber} strokeWidth="1.2" />
      <circle cx={cx} cy={cy} r={38} fill="none" stroke={DS.amber} strokeWidth="0.5" />
      <text fontFamily="'EB Garamond', serif" fontSize="5.2" fill={DS.amber} letterSpacing="1.8">
        <textPath href={`#cp-${size}`} startOffset="4%">MWISHO WA MWISHO DISTRICT HERITAGE TRUST</textPath>
      </text>
      <line x1="26" y1="45" x2="74" y2="45" stroke={DS.amber} strokeWidth="1.3" />
      <line x1="31" y1="51" x2="69" y2="51" stroke={DS.amber} strokeWidth="1.3" />
      <line x1="38" y1="57" x2="62" y2="57" stroke={DS.amber} strokeWidth="1.3" />
    </svg>
  );
}

function StatusPill({ status }) {
  const styles = {
    CLOSED: { background: DS.closedBg, color: DS.closedText },
    OPEN: { background: DS.amberLight, color: DS.amberDeep },
    DISPUTED: { background: DS.disputedBg, color: DS.disputedText },
  };
  const s = styles[status] || styles.CLOSED;
  return (
    <span style={{
      ...s,
      fontFamily: "'Space Mono', monospace",
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.12em',
      padding: '2px 8px',
      borderRadius: '20px',
      display: 'inline-block',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
    }}>{status}</span>
  );
}

function InitialsAvatar({ name, size = 40 }) {
  const parts = name.split(' ');
  const initials = parts.length >= 2
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : name.slice(0, 2).toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: '#DDD8CF', color: DS.charcoal,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Source Sans 3', sans-serif",
      fontSize: size * 0.35, fontWeight: 600,
      flexShrink: 0, letterSpacing: '0.03em',
    }}>{initials}</div>
  );
}

function SectionLabel({ children, style }) {
  return (
    <div style={{
      fontFamily: "'Source Sans 3', sans-serif",
      fontSize: '10px', fontWeight: 700,
      letterSpacing: '0.18em', color: DS.secondary,
      textTransform: 'uppercase', marginBottom: '12px',
      ...style,
    }}>{children}</div>
  );
}

function RefNumber({ children, style }) {
  return (
    <span style={{
      fontFamily: "'Space Mono', monospace",
      fontSize: '11px', color: DS.secondary,
      letterSpacing: '0.05em', ...style,
    }}>{children}</span>
  );
}

function HRule({ style }) {
  return <div style={{ borderTop: `1px solid ${DS.rule}`, margin: '24px 0', ...style }} />;
}

function PullQuote({ quote, attribution }) {
  return (
    <blockquote style={{
      borderLeft: `2px solid ${DS.amber}`,
      margin: '24px 0', paddingLeft: '20px',
    }}>
      <p style={{
        fontFamily: "'EB Garamond', serif",
        fontSize: '19px', fontStyle: 'italic',
        lineHeight: 1.55, color: DS.charcoal,
        margin: '0 0 10px 0',
      }}>&ldquo;{quote}&rdquo;</p>
      <p style={{
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: '12px', color: DS.secondary,
        margin: 0,
      }}>&mdash; {attribution}</p>
    </blockquote>
  );
}

function HeritageTrustNote({ children }) {
  return (
    <aside style={{
      background: DS.annotationBg,
      borderLeft: `2px solid ${DS.amber}`,
      padding: '14px 16px',
      margin: '20px 0',
    }}>
      <p style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '9px', fontWeight: 700,
        letterSpacing: '0.14em', color: DS.amberDeep,
        margin: '0 0 6px 0', textTransform: 'uppercase',
      }}>Heritage Trust Note —</p>
      <p style={{
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: '13px', color: DS.charcoal,
        lineHeight: 1.55, margin: 0,
      }}>{children}</p>
    </aside>
  );
}

function StatBlock({ value, label }) {
  return (
    <div style={{ textAlign: 'center', padding: '16px 12px' }}>
      <div style={{
        fontFamily: "'EB Garamond', serif",
        fontSize: '34px', fontWeight: 400,
        color: DS.charcoal, lineHeight: 1,
        marginBottom: '6px',
      }}>{value}</div>
      <div style={{
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: '11px', color: DS.secondary,
        textTransform: 'uppercase', letterSpacing: '0.1em',
        lineHeight: 1.4,
      }}>{label}</div>
    </div>
  );
}

function CategoryTag({ children }) {
  return (
    <span style={{
      fontFamily: "'Source Sans 3', sans-serif",
      fontSize: '10px', color: DS.secondary,
      background: '#EEEBE4', border: `1px solid ${DS.rule}`,
      padding: '2px 7px', borderRadius: '3px',
      display: 'inline-block', letterSpacing: '0.04em',
    }}>{children}</span>
  );
}

function DesktopNav({ active }) {
  const links = ['Browse Incidents', 'Oral Histories', 'Disputed Accounts', 'Open Incidents', 'About the Trust', 'Search'];
  return (
    <nav style={{
      background: DS.cream,
      borderBottom: `1px solid ${DS.rule}`,
      padding: '0 40px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: '56px', flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <InstitutionalSeal size={32} />
        <span style={{
          fontFamily: "'EB Garamond', serif",
          fontSize: '14px', color: DS.charcoal,
          letterSpacing: '0.01em', lineHeight: 1.3,
          maxWidth: '220px',
        }}>The Registry of Unresolved Community Incidents</span>
      </div>
      <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
        {links.map(l => (
          <a key={l} href="#" style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: '12.5px', fontWeight: l === active ? 600 : 400,
            color: l === active ? DS.amber : DS.charcoal,
            textDecoration: 'none', letterSpacing: '0.02em',
            borderBottom: l === active ? `1px solid ${DS.amber}` : 'none',
            paddingBottom: '1px',
            whiteSpace: 'nowrap',
          }}>{l}</a>
        ))}
      </div>
    </nav>
  );
}

function DesktopFooter() {
  return (
    <footer style={{
      borderTop: `1px solid ${DS.rule}`,
      padding: '28px 40px 20px',
      display: 'flex', flexDirection: 'column', gap: '16px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
        <div>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '14px', color: DS.charcoal, margin: '0 0 4px' }}>
            Mwisho wa Mwisho District Heritage Trust
          </p>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '12px', color: DS.secondary, margin: '0 0 2px' }}>
            Mwisho wa Mwisho District, Kenya
          </p>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: DS.secondary, margin: 0 }}>
            Est. 1991
          </p>
        </div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          {['About the Trust', 'Submission Guidelines', 'Contact', 'Privacy'].map(l => (
            <a key={l} href="#" style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '12px', color: DS.secondary,
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}>{l}</a>
          ))}
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${DS.rule}`, paddingTop: '12px', textAlign: 'center' }}>
        <p style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: '10.5px', color: DS.secondary,
          margin: 0, lineHeight: 1.6,
        }}>
          The Registry of Unresolved Community Incidents does not determine fault, assign blame, or draw conclusions. It documents.{' '}
          © Mwisho wa Mwisho District Heritage Trust, 1991–2024.
        </p>
      </div>
    </footer>
  );
}

function IncidentCard({ ref_num, name, date, venue, description, categories, status, style }) {
  return (
    <div style={{
      background: DS.cream,
      border: `1px solid ${DS.rule}`,
      padding: '20px',
      display: 'flex', flexDirection: 'column', gap: '10px',
      ...style,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <RefNumber>{ref_num}</RefNumber>
        <StatusPill status={status} />
      </div>
      <h3 style={{
        fontFamily: "'EB Garamond', serif",
        fontSize: '18px', fontWeight: 400,
        color: DS.charcoal, margin: 0, lineHeight: 1.3,
      }}>{name}</h3>
      <p style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '10px', color: DS.secondary,
        margin: 0, lineHeight: 1.5,
      }}>{date} · {venue}</p>
      <p style={{
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: '13.5px', color: DS.charcoal,
        margin: 0, lineHeight: 1.6,
      }}>{description}</p>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {categories.map(c => <CategoryTag key={c}>{c}</CategoryTag>)}
      </div>
      <a href="#" style={{
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: '12px', color: DS.amber,
        textDecoration: 'none', letterSpacing: '0.04em',
        marginTop: '2px',
      }}>View full record →</a>
    </div>
  );
}

Object.assign(window, {
  DS, InstitutionalSeal, StatusPill, InitialsAvatar,
  SectionLabel, RefNumber, HRule, PullQuote,
  HeritageTrustNote, StatBlock, CategoryTag,
  DesktopNav, DesktopFooter, IncidentCard,
});
