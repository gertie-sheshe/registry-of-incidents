import Link from "next/link";

import SectionLabel from "@/components/ui/SectionLabel";
import StatusPill from "@/components/ui/StatusPill";
import { RELATED_INCIDENTS_LABEL, CTA_VIEW_FULL_RECORD } from "@/lib/constants";
import type { Incident } from "@/types";

type RelatedIncidentsProps = {
  relatedIncidents: Incident[];
};

export default function RelatedIncidents({
  relatedIncidents,
}: RelatedIncidentsProps): JSX.Element | null {
  if (relatedIncidents.length === 0) {
    return null;
  }

  return (
    <section>
      <SectionLabel className="mb-3">{RELATED_INCIDENTS_LABEL}</SectionLabel>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {relatedIncidents.map((incident) => (
          <article key={incident.ref} className="border border-rule p-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[9px] text-secondary">{incident.ref}</p>
              <StatusPill status={incident.status} />
            </div>

            <h3 className="mt-1 font-serif text-[16px] font-normal text-charcoal">
              {incident.name}
            </h3>

            <p className="mt-1 font-sans text-[12.5px] leading-relaxed text-secondary">
              {incident.description}
            </p>

            <Link
              href={`/incidents/${incident.ref}`}
              className="mt-3 block font-sans text-[12px] text-amber"
            >
              {CTA_VIEW_FULL_RECORD}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
