import type { StatusType } from "@/types";

type StatusPillProps = {
  status: StatusType;
  className?: string;
};

const STATUS_VARIANT_CLASSES: Record<StatusType, string> = {
  CLOSED: "bg-closed text-closed",
  OPEN: "bg-amber-light text-amber-deep",
  DISPUTED: "bg-disputed text-disputed",
};

export function StatusPill({ status, className }: StatusPillProps): JSX.Element {
  const classes = [
    "font-mono text-[9px] uppercase tracking-wider rounded-full px-2 py-0.5 inline-block whitespace-nowrap",
    STATUS_VARIANT_CLASSES[status],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{status}</span>;
}

export default StatusPill;
