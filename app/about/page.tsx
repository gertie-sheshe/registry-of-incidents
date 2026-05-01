import HeritageTrustNote from "@/components/ui/HeritageTrustNote";
import InstitutionalSeal from "@/components/ui/InstitutionalSeal";
import PullQuote from "@/components/ui/PullQuote";
import SectionLabel from "@/components/ui/SectionLabel";
import StatBlock from "@/components/ui/StatBlock";
import WitnessAvatar from "@/components/ui/WitnessAvatar";
import {
  ABOUT_ESTABLISHED_LINE,
  ABOUT_FOUNDING_FAMILIES_INTRO,
  ABOUT_HERITAGE_NOTE,
  ABOUT_INTRO_PARAGRAPHS,
  ABOUT_MISSION_QUOTE,
  ABOUT_PAGE_SECTION_LABELS,
  ABOUT_PARAGRAPHS,
  ABOUT_STATS,
  FOOTER_COPY,
  FOUNDING_FAMILIES,
  NAV_ITEMS,
  TRUSTEES,
} from "@/lib/constants";

export default function AboutPage(): JSX.Element {
  const aboutSectionLabel =
    NAV_ITEMS.find((item) => item.href === "/about")?.label ?? "";

  return (
    <div className="mx-auto max-w-[900px] px-4 py-10 lg:px-10">
      <SectionLabel className="mb-2">{aboutSectionLabel}</SectionLabel>

      <h1 className="mb-3 font-serif text-4xl font-normal leading-tight text-charcoal">
        {FOOTER_COPY.institutionName}
      </h1>
      <p className="mb-9 font-mono text-[10.5px] tracking-wide text-secondary">
        {ABOUT_ESTABLISHED_LINE}
      </p>

      <div className="mb-10">
        <InstitutionalSeal size={100} />
      </div>

      {ABOUT_INTRO_PARAGRAPHS.map((paragraph, index) => (
        <p
          key={index}
          className="mb-4 font-sans text-[14.5px] leading-[1.75] text-charcoal last:mb-6"
        >
          {paragraph}
        </p>
      ))}

      <PullQuote
        quote={ABOUT_MISSION_QUOTE.quote}
        attribution={ABOUT_MISSION_QUOTE.attribution}
      />

      {ABOUT_PARAGRAPHS.map((paragraph, index) => (
        <p
          key={index}
          className="mb-[18px] font-sans text-[14.5px] leading-[1.75] text-charcoal last:mb-0"
        >
          {paragraph}
        </p>
      ))}

      <hr className="my-10 border-0 border-t border-rule" />

      <SectionLabel className="mb-2">{ABOUT_PAGE_SECTION_LABELS.foundingFamilies}</SectionLabel>
      <p className="mb-5 font-sans text-[13.5px] leading-relaxed text-secondary">
        {ABOUT_FOUNDING_FAMILIES_INTRO}
      </p>

      <div className="mb-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {FOUNDING_FAMILIES.map((family) => (
          <article
            key={family.name}
            className="border border-rule p-[18px]"
          >
            <div className="mb-2.5 border-b border-amber pb-2">
              <h2 className="font-serif text-[17px] font-normal text-charcoal">
                {family.name}
              </h2>
            </div>
            <p className="m-0 font-sans text-[12.5px] leading-relaxed text-secondary">
              {family.note}
            </p>
          </article>
        ))}
      </div>

      <hr className="my-10 border-0 border-t border-rule" />

      <SectionLabel className="mb-2">{ABOUT_PAGE_SECTION_LABELS.trustees}</SectionLabel>
      <div className="mb-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {TRUSTEES.map((trustee) => (
          <div
            key={trustee.name}
            className="flex items-start gap-3.5 border border-rule p-[18px]"
          >
            <WitnessAvatar name={trustee.name} size={44} />
            <div>
              <div className="mb-0.5 font-serif text-[17px] text-charcoal">{trustee.name}</div>
              <div className="mb-1 font-sans text-[12.5px] text-charcoal">{trustee.role}</div>
              <div className="font-mono text-[9.5px] text-secondary">{trustee.since}</div>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-10 border-0 border-t border-rule" />

      <SectionLabel className="mb-2">{ABOUT_PAGE_SECTION_LABELS.archiveNumbers}</SectionLabel>
      <div className="mb-10 grid grid-cols-2 border border-rule lg:grid-cols-5">
        {ABOUT_STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={
              index < ABOUT_STATS.length - 1 ? "border-r border-rule" : ""
            }
          >
            <StatBlock value={stat.value} label={stat.label} />
          </div>
        ))}
      </div>

      <hr className="my-10 border-0 border-t border-rule" />

      <HeritageTrustNote>
        <p className="m-0">{ABOUT_HERITAGE_NOTE}</p>
      </HeritageTrustNote>
    </div>
  );
}
