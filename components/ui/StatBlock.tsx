type StatBlockProps = {
  value: string;
  label: string;
  className?: string;
};

export function StatBlock({ value, label, className }: StatBlockProps): JSX.Element {
  const classes = ["text-center px-3 py-4", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <div className="font-serif text-[34px] leading-none text-charcoal mb-1.5">{value}</div>
      <div className="font-sans text-[11px] leading-[1.4] text-secondary uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default StatBlock;
