import type { PropsWithChildren } from "react";

type SectionLabelProps = PropsWithChildren<{
  className?: string;
}>;

export function SectionLabel({
  children,
  className,
}: SectionLabelProps): JSX.Element {
  const classes = [
    "font-mono text-[10px] tracking-widest text-secondary uppercase",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}

export default SectionLabel;
