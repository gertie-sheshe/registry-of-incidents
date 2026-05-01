import SectionLabel from "@/components/ui/SectionLabel";
import {
  CONTACT_BLOCKS,
  CONTACT_COMMUNICATION_PARAGRAPHS,
  CONTACT_INTRO,
  CONTACT_NOTE_SECTION_LABEL,
  CONTACT_PAGE_SECTION_LABEL,
  CONTACT_PAGE_TITLE,
} from "@/lib/constants";

export default function ContactPage(): JSX.Element {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-10 lg:px-10">
      <SectionLabel className="mb-2">{CONTACT_PAGE_SECTION_LABEL}</SectionLabel>

      <h1 className="mb-2.5 font-serif text-[34px] font-normal text-charcoal">
        {CONTACT_PAGE_TITLE}
      </h1>
      <p className="mb-9 font-sans text-sm leading-relaxed text-secondary">
        {CONTACT_INTRO}
      </p>

      <div className="mb-9 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {CONTACT_BLOCKS.map((block) => (
          <article key={block.title} className="border border-rule p-5">
            <div className="mb-3 font-sans text-[10px] font-bold uppercase tracking-widest text-secondary">
              {block.title}
            </div>
            {block.lines.map((line, lineIndex) => (
              <p
                key={`${block.title}-${lineIndex}`}
                className={
                  lineIndex === 0
                    ? "mb-1 font-serif text-[15px] leading-normal text-charcoal last:mb-0"
                    : "mb-1 font-sans text-[13.5px] leading-normal text-charcoal last:mb-0"
                }
              >
                {line}
              </p>
            ))}
          </article>
        ))}
      </div>

      <hr className="my-10 border-0 border-t border-rule" />

      <SectionLabel className="mb-2">{CONTACT_NOTE_SECTION_LABEL}</SectionLabel>

      {CONTACT_COMMUNICATION_PARAGRAPHS.map((paragraph, index) => (
        <p
          key={index}
          className="mb-4 font-sans text-[14.5px] leading-[1.75] text-charcoal last:mb-0"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
