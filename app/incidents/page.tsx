import IncidentsBrowseClient from "@/components/incidents/IncidentsBrowseClient";
import { getAllIncidents } from "@/lib/incidents";

export default function IncidentsPage(): JSX.Element {
  const incidents = [...getAllIncidents()].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.ref.localeCompare(b.ref);
  });

  return <IncidentsBrowseClient incidents={incidents} />;
}
