"use client";

import { useMemo, useState } from "react";

import IncidentCard from "@/components/incidents/IncidentCard";
import FilterBar from "@/components/ui/FilterBar";
import PageHeader from "@/components/ui/PageHeader";
import {
  BROWSE_INCIDENTS_PAGE_SUBTITLE,
  BROWSE_INCIDENTS_PAGE_TITLE,
  FILTER_OPTIONS_INCIDENTS,
} from "@/lib/constants";
import type { Incident } from "@/types";

type IncidentsBrowseClientProps = {
  incidents: Incident[];
};

function matchesIncidentFilter(incident: Incident, filterValue: string): boolean {
  switch (filterValue) {
    case "all":
      return true;
    case "closed":
      return incident.status === "CLOSED";
    case "open":
      return incident.status === "OPEN";
    case "disputed":
      return incident.status === "DISPUTED";
    case "harambee-fundraisers":
      return incident.categories.some((cat) => {
        const c = cat.toLowerCase();
        return (
          c.includes("fundraiser") ||
          c.includes("harambee") ||
          c.includes("church fundraiser")
        );
      });
    case "school-events":
      return incident.categories.some((cat) => cat.toLowerCase().includes("school"));
    case "community-meetings":
      return incident.categories.some((cat) => {
        const c = cat.toLowerCase();
        return c.includes("community meeting") || c === "ceremony";
      });
    case "celebrations":
      return incident.categories.some((cat) => cat.toLowerCase().includes("celebration"));
    default:
      return true;
  }
}

export default function IncidentsBrowseClient({
  incidents,
}: IncidentsBrowseClientProps): JSX.Element {
  const defaultFilter =
    FILTER_OPTIONS_INCIDENTS[0]?.value ?? "all";

  const [filterValue, setFilterValue] = useState(defaultFilter);

  const filteredIncidents = useMemo(
    () => incidents.filter((i) => matchesIncidentFilter(i, filterValue)),
    [incidents, filterValue],
  );

  return (
    <>
      <div className="border-b border-rule px-4 pb-0 pt-9 lg:px-10">
        <div className="mb-6">
          <PageHeader
            title={BROWSE_INCIDENTS_PAGE_TITLE}
            subtitle={BROWSE_INCIDENTS_PAGE_SUBTITLE}
          />
        </div>
        <FilterBar
          options={FILTER_OPTIONS_INCIDENTS}
          onChange={(value) => setFilterValue(value)}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 px-4 pb-10 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
        {filteredIncidents.map((incident) => (
          <IncidentCard key={incident.ref} incident={incident} />
        ))}
      </div>
    </>
  );
}
