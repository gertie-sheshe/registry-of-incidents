import Link from "next/link";

import CategoryTag from "@/components/ui/CategoryTag";
import StatusPill from "@/components/ui/StatusPill";
import type { Incident } from "@/types";

type IncidentCardProps = {
  incident: Incident;
};

export default function IncidentCard({ incident }: IncidentCardProps): JSX.Element {
  return (
    <article className="flex flex-col gap-3 border border-rule bg-cream p-5">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[9.5px] text-secondary">{incident.ref}</p>
        <StatusPill status={incident.status} />
      </div>

      <h3 className="font-serif text-[20px] font-normal leading-tight text-charcoal">
        {incident.name}
      </h3>

      <p className="font-mono text-[10px] text-secondary">
        {incident.dateShort} · {incident.venue}
      </p>

      <p className="line-clamp-3 font-sans text-[13.5px] leading-relaxed text-charcoal">
        {incident.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-1.5 border-t border-rule pt-3">
        {incident.categories.map((category) => (
          <CategoryTag key={category}>{category}</CategoryTag>
        ))}
      </div>

      <Link
        href={`/incidents/${incident.ref}`}
        className="mt-2 font-sans text-[12px] text-amber"
      >
        View full record →
      </Link>
    </article>
  );
}
