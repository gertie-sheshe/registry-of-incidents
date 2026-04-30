import { HeritageTrustNote } from "@/components/ui/HeritageTrustNote";
import type { Incident } from "@/types";

type IncidentProseProps = {
  incident: Incident;
};

export function IncidentProse({ incident }: IncidentProseProps): JSX.Element {
  return (
    <section>
      {incident.prose.map((paragraph) => (
        <p
          key={paragraph}
          className="font-sans text-[14.5px] text-charcoal leading-[1.75] mb-4"
        >
          {paragraph}
        </p>
      ))}

      {incident.heritageTrustNote ? (
        <HeritageTrustNote>{incident.heritageTrustNote}</HeritageTrustNote>
      ) : null}
    </section>
  );
}

export default IncidentProse;
