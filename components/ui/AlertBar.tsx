import StatusPill from "@/components/ui/StatusPill";

type AlertBarProps = {
  message: string;
  className?: string;
};

export function AlertBar({ message, className }: AlertBarProps): JSX.Element {
  const classes = ["w-full bg-amber-light border-b border-[#E8C99A] px-10 py-2.5", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <div className="flex items-center gap-2.5">
        <StatusPill status="OPEN" />
        <p className="font-sans text-[13px] text-amber-deep">{message}</p>
      </div>
    </div>
  );
}

export default AlertBar;
