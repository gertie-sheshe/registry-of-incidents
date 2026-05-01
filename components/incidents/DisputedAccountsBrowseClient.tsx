"use client";

import type { PropsWithChildren } from "react";
import { useMemo, useState } from "react";

import DisputeCard from "@/components/incidents/DisputeCard";
import FilterBar from "@/components/ui/FilterBar";
import { FILTER_OPTIONS_DISPUTED } from "@/lib/constants";
import type { Incident } from "@/types";

type DisputedAccountsBrowseClientProps = PropsWithChildren<{
  incidents: Incident[];
}>;

function formatAccountBlock(
  witness: string,
  role: string,
  text: string,
): string {
  return [witness, role, text].join("\n");
}

function matchesDisputedFilter(incident: Incident, filterValue: string): boolean {
  const d = incident.disputedAccount;
  if (!d) {
    return false;
  }

  switch (filterValue) {
    case "all":
      return true;
    case "testimony-conflicts":
      return d.conflictType === "Testimony Conflict";
    case "documentary-conflicts":
      return d.conflictType === "Documentary Conflict";
    case "unverifiable-claims":
      return d.conflictType === "Unverifiable Claim";
    default:
      return true;
  }
}

export default function DisputedAccountsBrowseClient({
  incidents,
  children,
}: DisputedAccountsBrowseClientProps): JSX.Element {
  const defaultFilter = FILTER_OPTIONS_DISPUTED[0]?.value ?? "all";
  const [filterValue, setFilterValue] = useState(defaultFilter);

  const filtered = useMemo(
    () =>
      incidents.filter(
        (i) => matchesDisputedFilter(i, filterValue) && i.disputedAccount,
      ),
    [incidents, filterValue],
  );

  return (
    <>
      <section className="border-b border-rule px-4 pb-0 pt-9 lg:px-10">
        {children}
        <FilterBar
          options={FILTER_OPTIONS_DISPUTED}
          onChange={(value) => setFilterValue(value)}
        />
      </section>

      <div className="mt-6 flex flex-col gap-6 px-4 pb-10 pt-8 lg:px-10">
        {filtered.map((incident) => {
          const d = incident.disputedAccount;
          if (!d) {
            return null;
          }

          return (
            <DisputeCard
              key={incident.ref}
              incidentRef={incident.ref}
              name={incident.name}
              date={incident.dateShort}
              conflictType={d.conflictType}
              summary={d.summary}
              accountA={formatAccountBlock(
                d.accountA.witness,
                d.accountA.role,
                d.accountA.text,
              )}
              accountB={formatAccountBlock(
                d.accountB.witness,
                d.accountB.role,
                d.accountB.text,
              )}
              heritageTrustNote={d.heritageTrustNote}
            />
          );
        })}
      </div>
    </>
  );
}
