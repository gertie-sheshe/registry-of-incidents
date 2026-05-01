import { notFound } from "next/navigation";

import Breadcrumb from "@/components/layout/Breadcrumb";
import MobileTopBar from "@/components/layout/MobileTopBar";
import IncidentHeader from "@/components/incidents/IncidentHeader";
import IncidentProse from "@/components/incidents/IncidentProse";
import ObjectRecord from "@/components/incidents/ObjectRecord";
import RelatedIncidents from "@/components/incidents/RelatedIncidents";
import OralHistoryCard from "@/components/oral-histories/OralHistoryCard";
import SectionLabel from "@/components/ui/SectionLabel";

import type { Incident } from "@/types";
import {
  BREADCRUMB_BROWSE,
  BREADCRUMB_REGISTRY,
  INCIDENT_RECORD_SECTION_ORAL_HISTORIES,
} from "@/lib/constants";
import { getAllIncidents, getIncidentByRef } from "@/lib/incidents";
import { getOralHistoriesByIncidentRef } from "@/lib/oral-histories";

type IncidentDetailPageProps = {
  params: { ref: string };
};

export function generateStaticParams(): { ref: string }[] {
  return getAllIncidents().map((item) => ({ ref: item.ref }));
}

export default function IncidentDetailPage({
  params,
}: IncidentDetailPageProps): JSX.Element {
  const incident = getIncidentByRef(params.ref);

  if (!incident) {
    notFound();
  }

  const oralHistories = getOralHistoriesByIncidentRef(incident.ref);
  const relatedIncidents = incident.relatedIncidents
    .map((relatedRef) => getIncidentByRef(relatedRef))
    .filter((item): item is Incident => item !== undefined);

  return (
    <>
      <MobileTopBar
        variant="back"
        backHref="/incidents"
        backLabel={BREADCRUMB_BROWSE}
      />

      <div className="mx-auto max-w-[900px] px-4 py-8 lg:px-10">
        <div className="mb-7">
          <Breadcrumb
            items={[
              { label: BREADCRUMB_REGISTRY, href: "/" },
              { label: BREADCRUMB_BROWSE, href: "/incidents" },
              { label: incident.ref },
            ]}
          />
        </div>

        <IncidentHeader incident={incident} />

        <div className="mt-8">
          <IncidentProse incident={incident} />
        </div>

        {incident.objectRecord ? (
          <div className="mt-12">
            <ObjectRecord objectRecord={incident.objectRecord} />
          </div>
        ) : null}

        {oralHistories.length > 0 ? (
          <section className="mt-12">
            <SectionLabel className="mb-6">
              {INCIDENT_RECORD_SECTION_ORAL_HISTORIES}
            </SectionLabel>

            <div className="overflow-x-auto lg:overflow-visible">
              <div className="flex gap-4 pb-2 lg:grid lg:grid-cols-3 lg:pb-0">
                {oralHistories.map((oralHistory) => (
                  <div
                    key={oralHistory.ref}
                    className="w-[min(100%,18rem)] shrink-0 lg:w-auto lg:min-w-0 lg:shrink"
                  >
                    <OralHistoryCard
                      oralHistory={oralHistory}
                      ctaHref={`/oral-histories/${oralHistory.ref}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {relatedIncidents.length > 0 ? (
          <div className="mt-12">
            <RelatedIncidents relatedIncidents={relatedIncidents} />
          </div>
        ) : null}
      </div>
    </>
  );
}
