import type { PropsWithChildren } from "react";

type CategoryTagProps = PropsWithChildren;

export function CategoryTag({ children }: CategoryTagProps): JSX.Element {
  return (
    <span className="bg-[#EEEBE4] border border-[#D4C9B5] font-sans text-[10px] text-secondary px-1.5 py-0.5 rounded-sm inline-block tracking-[0.04em]">
      {children}
    </span>
  );
}

export default CategoryTag;
