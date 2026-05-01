import Link from "next/link";

import IncidentIndexList from "@/components/incidents/IncidentIndexList";
import IncidentPreviewCard from "@/components/incidents/IncidentPreviewCard";
import AlertBar from "@/components/ui/AlertBar";
import InstitutionalSeal from "@/components/ui/InstitutionalSeal";
import PullQuote from "@/components/ui/PullQuote";
import SectionLabel from "@/components/ui/SectionLabel";
import StatBlock from "@/components/ui/StatBlock";
import StatusPill from "@/components/ui/StatusPill";
import {
  ALERT_BAR_COPY,
  ALERT_BAR_TEXT,
  DISPUTED_CALLOUT_TEXT,
  HERO_SUBTITLE,
  HERO_TAGLINE,
  HERO_TITLE,
  HOME_LINK_LABELS,
  HOME_SECTION_LABELS,
  NAV_ITEMS,
  OPEN_CALLOUT_TEXT,
  REGISTRY_STATS,
} from "@/lib/constants";
import { getAllIncidents, getFeaturedIncidents, getOpenIncidents } from "@/lib/incidents";

export default function Home(): JSX.Element {
  const featuredIncident = getFeaturedIncidents()[0];
  const allIncidents = getAllIncidents();
  const openIncident = getOpenIncidents()[0];
  const recentIncidents = [...allIncidents]
    .sort((a, b) => b.year - a.year)
    .slice(0, 3);

  const disputedAccountsItem = NAV_ITEMS.find((item) => item.href === "/disputed-accounts");
  const openIncidentsItem = NAV_ITEMS.find((item) => item.href === "/open-incidents");
  const alertMessage = openIncident
    ? `${ALERT_BAR_COPY.prefix} ${openIncident.ref} · ${openIncident.name} · ${ALERT_BAR_COPY.suffix}`
    : ALERT_BAR_TEXT;

  return (
    <div className="px-4 pb-10 pt-5 lg:px-10 lg:pb-12 lg:pt-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
        <div className="flex-1">
          {openIncident ? <AlertBar message={alertMessage} className="px-4 lg:px-6" /> : null}

          <section className="border-b border-rule px-4 py-8 text-center lg:px-0 lg:text-left">
            <div className="flex w-full flex-col items-center gap-3.5 lg:flex-row lg:items-start lg:gap-5">
              <div className="shrink-0 [&_svg]:h-[72px] [&_svg]:w-[72px] lg:[&_svg]:h-[80px] lg:[&_svg]:w-[80px]">
                <InstitutionalSeal size={80} />
              </div>
              <div className="mx-auto w-full max-w-[740px] lg:mx-0">
                <h1 className="font-serif text-2xl leading-[1.25] text-charcoal lg:text-[34px] lg:leading-[1.2] xl:text-[40px]">
                  {HERO_TITLE}
                </h1>
                <p className="mt-2 font-sans text-[15px] leading-[1.55] text-secondary">
                  {HERO_SUBTITLE}
                </p>
                <hr className="my-4 w-[120px] border-0 border-t border-amber mx-auto lg:mx-0" />
                <p className="font-mono text-[10.5px] tracking-[0.04em] text-secondary">
                  {HERO_TAGLINE}
                </p>
              </div>
            </div>
          </section>

          {featuredIncident ? (
            <section className="px-4 py-8 lg:px-0">
              <SectionLabel>{HOME_SECTION_LABELS.featuredIncident}</SectionLabel>
              <div className="mt-3 space-y-4">
                {featuredIncident.prose.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="font-sans text-[14.5px] leading-[1.75] text-charcoal"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {featuredIncident.pullQuote ? (
                <PullQuote
                  quote={featuredIncident.pullQuote.quote}
                  attribution={featuredIncident.pullQuote.attribution}
                />
              ) : null}
            </section>
          ) : null}

          <section className="border-t border-rule px-4 py-8 lg:px-0">
            <SectionLabel>{HOME_SECTION_LABELS.recentAdditions}</SectionLabel>
            <div className="mt-4 grid grid-cols-1 gap-3">
              {recentIncidents.map((incident) => (
                <IncidentPreviewCard key={incident.ref} incident={incident} />
              ))}
            </div>
          </section>
        </div>

        <aside className="w-full border-t border-rule pt-8 lg:w-[300px] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <SectionLabel>{HOME_SECTION_LABELS.registryAtAGlance}</SectionLabel>
          <div className="mt-3 grid grid-cols-2 border border-rule">
            {REGISTRY_STATS.map((stat, index) => (
              <StatBlock
                key={stat.label}
                value={stat.value}
                label={stat.label}
                className={[
                  index % 2 === 0 ? "border-r border-rule" : "",
                  index < 2 ? "border-b border-rule" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            ))}
          </div>

          <div className="mt-8">
            <SectionLabel>{HOME_SECTION_LABELS.incidentIndex}</SectionLabel>
            <div className="mt-3">
              <IncidentIndexList incidents={allIncidents} />
            </div>
          </div>

          <div className="mt-8 border border-rule p-4">
            <SectionLabel>{disputedAccountsItem?.label ?? ""}</SectionLabel>
            <p className="mt-2 font-sans text-[13px] leading-[1.6] text-charcoal">
              {DISPUTED_CALLOUT_TEXT}
            </p>
            <Link href="/disputed-accounts" className="mt-2 inline-block font-sans text-[12px] text-amber">
              {HOME_LINK_LABELS.viewDisputedAccounts}
            </Link>
          </div>

          {openIncident ? (
            <div className="mt-4 border-l-4 border-amber bg-amber-light p-4">
              <div className="flex items-start justify-between gap-3">
                <SectionLabel className="text-amber-deep">{openIncidentsItem?.label ?? ""}</SectionLabel>
                <StatusPill status="OPEN" />
              </div>
              <p className="mt-2 font-serif text-[18px] leading-[1.3] text-charcoal">{openIncident.name}</p>
              <p className="mt-2 font-sans text-[12.5px] leading-[1.5] text-amber-deep">
                {OPEN_CALLOUT_TEXT}
              </p>
              <Link href="/open-incidents" className="mt-2 inline-block font-sans text-[12px] text-amber">
                {HOME_LINK_LABELS.viewOpenIncidentRecord}
              </Link>
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  );
}
