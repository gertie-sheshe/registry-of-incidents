import StatusPill from "@/components/ui/StatusPill";
import type { Incident } from "@/types";

type IncidentHeaderProps = {
  incident: Incident;
};

type MetadataItem = {
  label: string;
  value: string;
};

const METADATA_LABELS = {
  date: "Date of occurrence",
  venue: "Venue",
  status: "Status",
  firstDocumented: "First documented",
  lastUpdated: "Last updated",
} as const;

export default function IncidentHeader({ incident }: IncidentHeaderProps): JSX.Element {
  const metadataItems: MetadataItem[] = [
    { label: METADATA_LABELS.date, value: incident.date },
    { label: METADATA_LABELS.venue, value: incident.venue },
    { label: METADATA_LABELS.firstDocumented, value: incident.firstDocumented },
    { label: METADATA_LABELS.lastUpdated, value: incident.lastUpdated },
  ];

  return (
    <header>
      <span className="mb-2 block font-mono text-[11px] text-secondary">{incident.ref}</span>

      <h1 className="mb-4 font-serif text-[34px] font-normal leading-tight text-charcoal">
        {incident.name}
      </h1>

      <div className="hidden flex-wrap items-center font-sans text-[13px] text-secondary md:flex">
        <span className="border-rule pr-3">{incident.date}</span>
        <span className="border-rule border-r px-3">{incident.venue}</span>
        <span className="border-rule border-r px-3">
          <span className="mr-2">{METADATA_LABELS.status}</span>
          <StatusPill status={incident.status} className="align-middle" />
        </span>
        <span className="border-rule border-r px-3">{incident.firstDocumented}</span>
        <span className="px-3">{incident.lastUpdated}</span>
      </div>

      <div className="grid grid-cols-1 gap-2 border border-rule bg-[#F0EDE7] p-3 md:hidden">
        {metadataItems.map((item) => (
          <div key={item.label} className="flex flex-col gap-0.5">
            <span className="font-mono text-[9px] text-secondary">{item.label}</span>
            <span className="font-sans text-[13px] text-charcoal">{item.value}</span>
          </div>
        ))}

        <div className="flex flex-col gap-0.5">
          <span className="font-mono text-[9px] text-secondary">{METADATA_LABELS.status}</span>
          <div>
            <StatusPill status={incident.status} />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {incident.tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#ECEAE4] px-2 py-0.5 font-mono text-[9px] text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
    </header>
  );
}
