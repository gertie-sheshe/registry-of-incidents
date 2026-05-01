"use client";

import { useMemo, useState } from "react";

import OralHistoryCard from "@/components/oral-histories/OralHistoryCard";
import FilterBar from "@/components/ui/FilterBar";
import PageHeader from "@/components/ui/PageHeader";
import {
  FILTER_OPTIONS_ORAL_HISTORIES,
  ORAL_HISTORIES_PAGE_SUBTITLE,
  ORAL_HISTORIES_PAGE_TITLE,
} from "@/lib/constants";
import type { OralHistory } from "@/types";

type OralHistoriesBrowseClientProps = {
  oralHistories: OralHistory[];
};

function matchesOralHistoryFilter(
  oralHistory: OralHistory,
  filterValue: string,
): boolean {
  switch (filterValue) {
    case "all":
      return true;
    case "eyewitnesses":
      return oralHistory.designation.includes("eyewitness");
    case "secondary-accounts":
      return oralHistory.designation.includes("secondary account");
    case "children-at-the-time":
      return oralHistory.designation.includes("children at the time");
    case "disputed-testimony":
      return oralHistory.designation.includes("disputed");
    case "deceased":
      return oralHistory.deceased || oralHistory.designation.includes("deceased");
    default:
      return true;
  }
}

export default function OralHistoriesBrowseClient({
  oralHistories,
}: OralHistoriesBrowseClientProps): JSX.Element {
  const defaultFilter =
    FILTER_OPTIONS_ORAL_HISTORIES[0]?.value ?? "all";

  const [filterValue, setFilterValue] = useState(defaultFilter);

  const filtered = useMemo(
    () =>
      oralHistories.filter((oh) => matchesOralHistoryFilter(oh, filterValue)),
    [oralHistories, filterValue],
  );

  return (
    <>
      <div className="border-b border-rule px-4 pb-0 pt-9 lg:px-10">
        <div className="mb-6">
          <PageHeader
            title={ORAL_HISTORIES_PAGE_TITLE}
            subtitle={ORAL_HISTORIES_PAGE_SUBTITLE}
          />
        </div>
        <FilterBar
          options={FILTER_OPTIONS_ORAL_HISTORIES}
          onChange={(value) => setFilterValue(value)}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 px-4 pb-10 pt-8 lg:grid-cols-2 lg:px-10">
        {filtered.map((oralHistory) => (
          <OralHistoryCard
            key={oralHistory.ref}
            oralHistory={oralHistory}
            ctaHref={`/oral-histories/${oralHistory.ref}`}
          />
        ))}
      </div>
    </>
  );
}
