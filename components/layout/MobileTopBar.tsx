type MobileTopBarProps =
  | {
      variant: 'hamburger';
      siteName: string;
    }
  | {
      variant: 'back';
      backLabel: string;
    };

export default function MobileTopBar(props: MobileTopBarProps) {
  return (
    <div className="flex items-center justify-between border-b border-rule bg-cream px-4 py-3 lg:hidden">
      {props.variant === 'hamburger' ? (
        <>
          <span className="font-serif text-[15px] text-charcoal">{props.siteName}</span>
          <span aria-hidden="true" className="flex flex-col gap-1">
            <span className="block h-[1.5px] w-5 bg-charcoal" />
            <span className="block h-[1.5px] w-5 bg-charcoal" />
            <span className="block h-[1.5px] w-3.5 bg-charcoal" />
          </span>
        </>
      ) : (
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="text-[18px] leading-none text-charcoal">
            ←
          </span>
          <span className="font-sans text-[13px] text-secondary">{props.backLabel}</span>
        </div>
      )}
    </div>
  );
}
