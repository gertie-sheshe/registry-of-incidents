import OralHistoriesBrowseClient from "@/components/oral-histories/OralHistoriesBrowseClient";
import { getAllOralHistories } from "@/lib/oral-histories";

export default function OralHistoriesPage(): JSX.Element {
  const oralHistories = [...getAllOralHistories()].sort((a, b) =>
    a.ref.localeCompare(b.ref),
  );

  return <OralHistoriesBrowseClient oralHistories={oralHistories} />;
}
