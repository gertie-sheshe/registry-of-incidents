import Link from "next/link";
import { notFound } from "next/navigation";

import AlertBar from "@/components/ui/AlertBar";
import HeritageTrustNote from "@/components/ui/HeritageTrustNote";
import PageHeader from "@/components/ui/PageHeader";
import SectionLabel from "@/components/ui/SectionLabel";
import StatusPill from "@/components/ui/StatusPill";
import {
  CLOSED_INCIDENTS_NOTE,
  CLOSED_INCIDENTS_STAT_LINE,
  DOCUMENTATION_TIMELINE,
  FOOTER_LINKS,
  NAV_ITEMS,
  OPEN_INCIDENTS_ALERT_BAR_MESSAGE,
  OPEN_INCIDENTS_CRITERIA,
  OPEN_INCIDENTS_INTRO,
  OPEN_INCIDENTS_PAGE_SECTION_LABELS,
  OPEN_INCIDENT_UNDER_ACTIVE_DOCUMENTATION,
  SUBMIT_WITNESS_METHOD,
  SUBMIT_WITNESS_TEXT,
  VIEW_SUBMISSION_GUIDELINES_LINK,
} from "@/lib/constants";
import { getOpenIncidents } from "@/lib/incidents";

export default function OpenIncidentsPage(): JSX.Element {
  const incident = getOpenIncidents()[0];

  if (!incident) {
    notFound();
  }

  const pageTitle =
    NAV_ITEMS.find((item) => item.href === "/open-incidents")?.label ?? "";

  const submissionGuidelinesHref =
    FOOTER_LINKS.find((item) => item.label === "Submission Guidelines")?.href ??
    "/submission-guidelines";

  return (
    <div className="pb-10">
      <AlertBar
        message={OPEN_INCIDENTS_ALERT_BAR_MESSAGE}
        className="px-4 lg:px-10"
      />

      <div className="border-b border-rule px-4 pb-5 pt-9 lg:px-10">
        <PageHeader title={pageTitle} subtitle={OPEN_INCIDENTS_INTRO} />
      </div>

      <div className="flex flex-col gap-0 px-4 py-9 lg:flex-row lg:px-10 lg:pb-12">
        <div className="flex-1 lg:border-r lg:border-rule lg:pr-8">
          <article className="mb-10 border-2 border-amber border-l-4 border-l-amber lg:mb-8">
            <header className="flex items-center justify-between gap-4 border-b border-[#E8C99A] bg-amber-light px-5 py-4">
              <div className="flex flex-wrap items-center gap-3.5">
                <span className="font-mono text-[13px] text-charcoal">
                  {incident.ref}
                </span>
                <StatusPill status="OPEN" />
              </div>
              <span className="font-mono text-[10px] text-amber-deep">
                {OPEN_INCIDENT_UNDER_ACTIVE_DOCUMENTATION}
              </span>
            </header>
            <div className="p-5">
              <h2 className="mb-1.5 font-serif text-[28px] font-normal text-charcoal">
                {incident.name}
              </h2>
              <p className="mb-[18px] font-mono text-[10.5px] text-secondary">
                {incident.date} · {incident.venue}
              </p>
              {incident.prose.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="mb-4 font-sans text-[14.5px] leading-[1.72] text-charcoal last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
              {incident.heritageTrustNote ? (
                <HeritageTrustNote className="mb-0 mt-4">{incident.heritageTrustNote}</HeritageTrustNote>
              ) : null}
            </div>
          </article>

          <SectionLabel className="mb-2">
            {OPEN_INCIDENTS_PAGE_SECTION_LABELS.documentationTimeline}
          </SectionLabel>
          <div className="pl-2">
            {DOCUMENTATION_TIMELINE.map((entry, index) => {
              const isOngoing =
                entry.isOngoing === true ||
                entry.date.toLowerCase() === "ongoing";
              const isLast = index === DOCUMENTATION_TIMELINE.length - 1;

              return (
                <div key={`${entry.date}-${index}`} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={[
                        "mt-[3px] h-2.5 w-2.5 shrink-0 rounded-full border-2",
                        isOngoing
                          ? "border-amber bg-amber"
                          : "border-secondary bg-rule",
                      ].join(" ")}
                    />
                    {isLast ? null : (
                      <div className="min-h-[32px] w-px flex-1 bg-rule" />
                    )}
                  </div>
                  <div className="pb-5">
                    <p
                      className={[
                        "mb-1 font-mono text-[10px] tracking-wide",
                        isOngoing ? "text-amber" : "text-secondary",
                      ].join(" ")}
                    >
                      {entry.date}
                    </p>
                    <p className="m-0 font-sans text-[13.5px] leading-relaxed text-charcoal">
                      {entry.event}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="mt-10 w-full lg:mt-0 lg:w-[300px] lg:pl-8">
          <SectionLabel className="mb-2">
            {OPEN_INCIDENTS_PAGE_SECTION_LABELS.submitWitnessStatement}
          </SectionLabel>
          <div className="mb-6 border border-rule p-4">
            <p className="mb-3 font-sans text-[13px] leading-relaxed text-charcoal">
              {SUBMIT_WITNESS_TEXT}
            </p>
            <p className="mb-3 font-sans text-[12px] leading-relaxed text-secondary">
              {SUBMIT_WITNESS_METHOD}
            </p>
            <Link
              href={submissionGuidelinesHref}
              className="block font-sans text-[12px] text-amber"
            >
              {VIEW_SUBMISSION_GUIDELINES_LINK}
            </Link>
          </div>

          <SectionLabel className="mb-2">
            {OPEN_INCIDENTS_PAGE_SECTION_LABELS.whatConstitutesOpen}
          </SectionLabel>
          <div className="mb-6 border border-rule p-4">
            {OPEN_INCIDENTS_CRITERIA.map((item, index) => (
              <div
                key={index}
                className={[
                  "flex gap-2.5",
                  index < OPEN_INCIDENTS_CRITERIA.length - 1 ? "mb-2.5" : "",
                ].join(" ")}
              >
                <span className="mt-0.5 shrink-0 font-mono text-[10px] text-amber">
                  {index + 1}.
                </span>
                <p className="m-0 font-sans text-[13px] leading-relaxed text-charcoal">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <SectionLabel className="mb-2">
            {OPEN_INCIDENTS_PAGE_SECTION_LABELS.closedIncidents}
          </SectionLabel>
          <div className="border border-rule p-4">
            <p className="mb-2 font-sans text-[13px] leading-relaxed text-secondary">
              {CLOSED_INCIDENTS_NOTE}
            </p>
            <p className="m-0 font-mono text-[10px] text-secondary">
              {CLOSED_INCIDENTS_STAT_LINE}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
