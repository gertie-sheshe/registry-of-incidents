import HeritageTrustNote from "@/components/ui/HeritageTrustNote";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  SUBMISSION_CLOSING_NOTE,
  SUBMISSION_INTRO,
  SUBMISSION_PAGE_SECTION_LABEL,
  SUBMISSION_PAGE_TITLE,
  SUBMISSION_SECTIONS,
} from "@/lib/constants";

export default function SubmissionGuidelinesPage(): JSX.Element {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-10 lg:px-10">
      <SectionLabel className="mb-2">{SUBMISSION_PAGE_SECTION_LABEL}</SectionLabel>

      <h1 className="mb-2.5 font-serif text-[34px] font-normal leading-tight text-charcoal">
        {SUBMISSION_PAGE_TITLE}
      </h1>
      <p className="mb-8 font-sans text-sm leading-relaxed text-secondary">
        {SUBMISSION_INTRO}
      </p>

      <div className="flex flex-col gap-0">
        {SUBMISSION_SECTIONS.map((section, sectionIndex) => (
          <div key={section.num}>
            {sectionIndex > 0 ? (
              <hr className="my-10 border-0 border-t border-rule" />
            ) : null}
            <div className="mb-3 flex items-baseline gap-4 border-b border-rule pb-3">
              <span className="font-mono text-xs text-amber">{section.num}</span>
              <h2 className="m-0 font-serif text-[22px] font-normal text-charcoal">{section.title}</h2>
            </div>
            {section.paras.map((para, paragraphIndex) => (
              <p
                key={paragraphIndex}
                className="mb-4 font-sans text-[14.5px] leading-[1.75] text-charcoal last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>

      <hr className="my-10 border-0 border-t border-rule" />

      <HeritageTrustNote className="px-[18px] py-4">
        <p className="m-0">{SUBMISSION_CLOSING_NOTE}</p>
      </HeritageTrustNote>
    </div>
  );
}
