type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div>
      <h1 className="mb-2 font-serif text-[32px] font-normal text-charcoal">
        {title}
      </h1>
      <p className="font-sans text-sm leading-relaxed text-secondary">
        {subtitle}
      </p>
    </div>
  );
}
