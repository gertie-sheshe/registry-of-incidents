import SectionLabel from "@/components/ui/SectionLabel";
import {
  PRIVACY_FOOTER_NOTE,
  PRIVACY_INTRO,
  PRIVACY_LAST_UPDATED_LINE,
  PRIVACY_PAGE_SECTION_LABEL,
  PRIVACY_PAGE_TITLE,
  PRIVACY_SECTIONS,
} from "@/lib/constants";

export default function PrivacyPage(): JSX.Element {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-10 lg:px-10">
      <SectionLabel className="mb-2">{PRIVACY_PAGE_SECTION_LABEL}</SectionLabel>

      <h1 className="mb-1.5 font-serif text-[34px] font-normal text-charcoal">
        {PRIVACY_PAGE_TITLE}
      </h1>
      <p className="mb-2 font-mono text-[10px] tracking-wide text-secondary">
        {PRIVACY_LAST_UPDATED_LINE}
      </p>
      <p className="mb-9 font-sans text-sm leading-relaxed text-secondary">{PRIVACY_INTRO}</p>

      <div>
        {PRIVACY_SECTIONS.map((section) => (
          <section
            key={section.title}
            className="border-t border-rule py-5"
          >
            <div className="flex gap-5">
              <span className="shrink-0 pt-1 font-mono text-[10px] text-amber">
                {section.num}
              </span>
              <div>
                <h2 className="mb-2.5 font-serif text-xl font-normal text-charcoal">{section.title}</h2>
                {section.paras.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="m-0 font-sans text-sm leading-[1.75] text-charcoal"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}

        <div className="border-t border-rule pt-5">
          <p className="m-0 font-sans text-[13px] leading-relaxed text-secondary">
            {PRIVACY_FOOTER_NOTE}
          </p>
        </div>
      </div>
    </div>
  );
}
