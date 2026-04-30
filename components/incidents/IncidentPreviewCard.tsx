import Link from "next/link";

import StatusPill from "@/components/ui/StatusPill";
import type { Incident } from "@/types";

type IncidentPreviewCardProps = {
  incident: Incident;
};

export default function IncidentPreviewCard({
  incident,
}: IncidentPreviewCardProps): JSX.Element {
  return (
    <article className="border border-rule bg-cream p-4">
      <p className="font-mono text-[9.5px] text-secondary">{incident.ref}</p>

      <h3 className="mt-1 font-serif text-[17px] font-normal text-charcoal">
        {incident.name}
      </h3>

      <p className="mt-1 line-clamp-2 font-sans text-[13px] text-secondary">
        {incident.description}
      </p>

      <div className="mt-2 flex items-center justify-between">
        <span className="font-mono text-[10px] text-secondary">
          {incident.dateShort}
        </span>
        <StatusPill status={incident.status} />
      </div>

      <Link
        href={`/incidents/${incident.ref}`}
        className="mt-3 block font-sans text-[12px] text-amber"
      >
        View full record →
      </Link>
    </article>
  );
}
