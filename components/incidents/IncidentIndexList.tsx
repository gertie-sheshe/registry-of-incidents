import StatusPill from "@/components/ui/StatusPill";
import type { Incident } from "@/types";

type IncidentIndexListProps = {
  incidents: Incident[];
};

export default function IncidentIndexList({
  incidents,
}: IncidentIndexListProps): JSX.Element {
  return (
    <div className="border border-rule">
      {incidents.map((incident) => (
        <div
          key={incident.ref}
          className="flex items-start justify-between border-b border-rule px-4 py-3 last:border-b-0"
        >
          <div>
            <span className="block font-mono text-[9px] text-secondary">
              {incident.ref}
            </span>
            <p className="mt-0.5 font-serif text-[14px] text-charcoal">
              {incident.name}
            </p>
          </div>
          <StatusPill status={incident.status} className="ml-3 shrink-0" />
        </div>
      ))}
    </div>
  );
}
