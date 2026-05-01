import Link from "next/link";

import CategoryTag from "@/components/ui/CategoryTag";
import HeritageTrustNote from "@/components/ui/HeritageTrustNote";
import StatusPill from "@/components/ui/StatusPill";

type DisputeCardProps = {
  incidentRef: string;
  name: string;
  date: string;
  conflictType: string;
  summary: string;
  accountA: string;
  accountB: string;
  heritageTrustNote: string;
};

type AccountDetails = {
  witness: string;
  role: string;
  quote: string;
};

function parseAccount(account: string): AccountDetails {
  const [witness = "", role = "", ...quoteLines] = account.split("\n");
  const quote = quoteLines.join(" ").trim();

  return {
    witness: witness.trim(),
    role: role.trim(),
    quote,
  };
}

export default function DisputeCard({
  incidentRef,
  name,
  date,
  conflictType,
  summary,
  accountA,
  accountB,
  heritageTrustNote,
}: DisputeCardProps): JSX.Element {
  const accountDetails = [parseAccount(accountA), parseAccount(accountB)];

  return (
    <article className="border border-rule">
      <header className="flex items-center justify-between border-b border-rule bg-[#ECEAE4] px-5 py-3.5">
        <div className="flex items-center gap-4">
          <p className="font-mono text-[9.5px] text-secondary">{incidentRef}</p>
          <h3 className="font-serif text-[19px] font-normal text-charcoal">{name}</h3>
          <p className="font-mono text-[9.5px] text-secondary">{date}</p>
        </div>

        <div className="flex items-center gap-2">
          <StatusPill status="DISPUTED" />
          <CategoryTag>{conflictType}</CategoryTag>
        </div>
      </header>

      <section className="border-b border-rule px-5 py-3.5">
        <p className="font-sans text-[13.5px] leading-relaxed text-charcoal">{summary}</p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2">
        {accountDetails.map((account, index) => (
          <div
            key={index}
            className="border-r-0 border-rule p-5 lg:border-r last:border-r-0"
          >
            <p className="mb-1 font-sans text-[10px] font-bold uppercase tracking-wider text-secondary">
              {index === 0 ? "Account A" : "Account B"}
            </p>
            <p className="font-sans text-[12.5px] font-semibold text-charcoal">
              {account.witness}
            </p>
            <p className="mb-2.5 font-sans text-[11.5px] text-secondary">{account.role}</p>
            <p className="font-serif text-[15px] italic leading-[1.65] text-charcoal">
              {`\u201C${account.quote}\u201D`}
            </p>
          </div>
        ))}
      </section>

      <div className="border-t border-rule">
        <HeritageTrustNote className="my-0 border-l-[3px] border-l-amber border-t-0 border-r-0 border-b-0">
          {heritageTrustNote}
        </HeritageTrustNote>
      </div>

      <footer className="flex justify-end border-t border-rule px-5 py-2.5">
        <Link href={`/incidents/${incidentRef}`} className="font-sans text-[12px] text-amber">
          View full incident record →
        </Link>
      </footer>
    </article>
  );
}
