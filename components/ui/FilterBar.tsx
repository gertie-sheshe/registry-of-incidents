"use client";

import { useEffect, useState } from "react";

import type { FilterOption } from "@/types";

type FilterBarProps = {
  options: FilterOption[];
  onChange: (value: string) => void;
  className?: string;
};

export default function FilterBar({
  options,
  onChange,
  className,
}: FilterBarProps): JSX.Element {
  const [activeValue, setActiveValue] = useState<string>(options[0]?.value ?? "");

  useEffect(() => {
    if (options.length === 0) {
      setActiveValue("");
      return;
    }

    const hasActiveOption = options.some((option) => option.value === activeValue);
    if (!hasActiveOption) {
      setActiveValue(options[0].value);
    }
  }, [activeValue, options]);

  const containerClasses = ["overflow-x-auto", className].filter(Boolean).join(" ");

  return (
    <div className={containerClasses}>
      <div className="flex w-max min-w-full flex-nowrap border-t border-rule whitespace-nowrap">
        {options.map((option) => {
          const isActive = option.value === activeValue;

          const buttonClasses = [
            "border-b-2 px-4 py-3 font-sans text-[12.5px] cursor-pointer",
            isActive
              ? "border-amber font-semibold text-amber"
              : "border-transparent text-secondary",
          ].join(" ");

          return (
            <button
              key={option.value}
              type="button"
              className={buttonClasses}
              onClick={() => {
                setActiveValue(option.value);
                onChange(option.value);
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
