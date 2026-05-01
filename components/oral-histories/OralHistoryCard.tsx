import Link from "next/link";

import type { OralHistory } from "@/types";
import CategoryTag from "@/components/ui/CategoryTag";
import WitnessAvatar from "@/components/ui/WitnessAvatar";
import { WITNESS_AGE_LABEL, CTA_READ_FULL_TESTIMONY, CTA_VIEW_RECORD } from "@/lib/constants";

type OralHistoryCardProps = {
  oralHistory: OralHistory;
  /** When set, the testimony link targets this URL instead of a placeholder. */
  ctaHref?: string;
  /** When false, the bottom CTA link is omitted (e.g. on the full testimony page). */
  showCta?: boolean;
};

export function OralHistoryCard({
  oralHistory,
  ctaHref,
  showCta = true,
}: OralHistoryCardProps): JSX.Element {
  const {
    witnessName,
    witnessAge,
    role,
    note,
    incidentRef,
    ref,
    excerpt,
    designation,
    hasStatement,
  } = oralHistory;

  return (
    <article className="border border-rule p-[22px]">
      <div className="flex items-start gap-3.5">
        <WitnessAvatar name={witnessName} size={44} />
        <div className="min-w-0">
          <p className="font-serif text-[17px] text-charcoal leading-[1.2]">{witnessName}</p>
          {witnessAge !== null ? (
            <p className="font-sans text-[13px] text-secondary mt-0.5">{WITNESS_AGE_LABEL} {witnessAge}</p>
          ) : null}
          <p className="font-sans text-[12.5px] text-secondary mt-0.5">{role}</p>
          {note ? <p className="font-mono text-[10px] text-amber mt-1">{note}</p> : null}
        </div>
      </div>

      <p className="font-mono text-[9.5px] text-secondary mt-2">
        {incidentRef} <span aria-hidden="true">·</span> {ref}
      </p>

      <p className="font-serif text-[14px] italic text-charcoal leading-relaxed mt-3 border-t border-rule pt-3">
        {excerpt}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {designation.map((tag) => (
          <CategoryTag key={tag}>{tag}</CategoryTag>
        ))}
      </div>

      {showCta ? (
        ctaHref ? (
          <Link href={ctaHref} className="mt-3 block font-sans text-[12px] text-amber">
            {hasStatement ? CTA_READ_FULL_TESTIMONY : CTA_VIEW_RECORD}
          </Link>
        ) : (
          <a href="#" className="mt-3 block font-sans text-[12px] text-amber">
            {hasStatement ? CTA_READ_FULL_TESTIMONY : CTA_VIEW_RECORD}
          </a>
        )
      ) : null}
    </article>
  );
}

export default OralHistoryCard;
