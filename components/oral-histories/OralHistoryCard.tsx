import type { OralHistory } from "@/types";
import CategoryTag from "@/components/ui/CategoryTag";
import WitnessAvatar from "@/components/ui/WitnessAvatar";

type OralHistoryCardProps = {
  oralHistory: OralHistory;
};

export function OralHistoryCard({ oralHistory }: OralHistoryCardProps): JSX.Element {
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
            <p className="font-sans text-[13px] text-secondary mt-0.5">Age {witnessAge}</p>
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

      <a href="#" className="block font-sans text-[12px] text-amber mt-3">
        {hasStatement ? "Read full testimony →" : "View record →"}
      </a>
    </article>
  );
}

export default OralHistoryCard;
