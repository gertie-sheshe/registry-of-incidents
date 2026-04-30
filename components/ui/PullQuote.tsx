import type { PullQuote as PullQuoteType } from "@/types";

type PullQuoteProps = PullQuoteType & {
  className?: string;
};

export function PullQuote({
  quote,
  attribution,
  className,
}: PullQuoteProps): JSX.Element {
  const classes = ["border-l-2 border-amber pl-5 my-6", className].filter(Boolean).join(" ");

  return (
    <blockquote className={classes}>
      <p className="font-serif text-[19px] italic leading-snug text-charcoal mb-2.5">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="font-sans text-xs text-secondary">&mdash; {attribution}</p>
    </blockquote>
  );
}

export default PullQuote;
