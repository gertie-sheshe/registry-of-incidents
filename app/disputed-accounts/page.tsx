import DisputedAccountsBrowseClient from "@/components/incidents/DisputedAccountsBrowseClient";
import PageHeader from "@/components/ui/PageHeader";
import HeritageTrustNote from "@/components/ui/HeritageTrustNote";
import {
  DISPUTED_ACCOUNTS_INTRO,
  DISPUTED_ACCOUNTS_PAGE_BANNER_NOTE,
  DISPUTED_ACCOUNTS_STAT,
  NAV_ITEMS,
} from "@/lib/constants";
import { getDisputedIncidents } from "@/lib/incidents";

export default function DisputedAccountsPage(): JSX.Element {
  const disputedIncidents = getDisputedIncidents().filter((i) => i.disputedAccount);
  const count = disputedIncidents.length;
  const pageTitle =
    NAV_ITEMS.find((item) => item.href === "/disputed-accounts")?.label ?? "";

  return (
    <div className="pb-10">
      <DisputedAccountsBrowseClient incidents={disputedIncidents}>
        <HeritageTrustNote className="mb-6 mt-0 w-full max-w-none">
          {DISPUTED_ACCOUNTS_PAGE_BANNER_NOTE}
        </HeritageTrustNote>

        <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0 max-w-[680px]">
            <PageHeader title={pageTitle} subtitle={DISPUTED_ACCOUNTS_INTRO} />
          </div>
          <div className="shrink-0 self-start border border-rule bg-[#ECEAE4] px-5 py-3.5 lg:max-w-[200px]">
            <p className="font-mono text-[22px] leading-none text-charcoal">
              {count}
            </p>
            <p className="mt-1 font-sans text-[10px] uppercase leading-snug tracking-widest text-secondary">
              {DISPUTED_ACCOUNTS_STAT.label}
            </p>
          </div>
        </div>
      </DisputedAccountsBrowseClient>
    </div>
  );
}
