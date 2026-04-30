import type { PropsWithChildren } from "react";

type HeritageTrustNoteProps = PropsWithChildren<{
  className?: string;
}>;

export function HeritageTrustNote({
  children,
  className,
}: HeritageTrustNoteProps): JSX.Element {
  const classes = ["bg-annotation border-l-2 border-amber px-4 py-3 my-5", className]
    .filter(Boolean)
    .join(" ");

  return (
    <aside className={classes}>
      <p className="font-mono text-[9px] text-amber-deep uppercase tracking-widest mb-1.5">
        HERITAGE TRUST NOTE —
      </p>
      <div className="font-sans text-[13px] text-charcoal leading-relaxed">{children}</div>
    </aside>
  );
}

export default HeritageTrustNote;
