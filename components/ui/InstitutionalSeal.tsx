import { useId } from "react";

import { FOOTER_COPY } from "@/lib/constants";

type InstitutionalSealProps = {
  size?: number;
};

export function InstitutionalSeal({
  size = 64,
}: InstitutionalSealProps): JSX.Element {
  const pathId = useId();
  const sealText = FOOTER_COPY.institutionName.toUpperCase();
  const centerX = 50;
  const centerY = 50;
  const outerRadius = 47;
  const textPathRadius = 41;
  const circleText = `M ${centerX},${centerY} m -${textPathRadius},0 a ${textPathRadius},${textPathRadius} 0 1,1 ${textPathRadius * 2},0 a ${textPathRadius},${textPathRadius} 0 1,1 -${textPathRadius * 2},0`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <defs>
        <path id={pathId} d={circleText} />
      </defs>
      <circle
        cx={centerX}
        cy={centerY}
        r={outerRadius}
        fill="var(--color-cream)"
        stroke="var(--color-amber)"
        strokeWidth="1.2"
      />
      <circle
        cx={centerX}
        cy={centerY}
        r="38"
        fill="none"
        stroke="var(--color-amber)"
        strokeWidth="0.5"
      />
      <text
        fontFamily="'EB Garamond', serif"
        fontSize="5.2"
        fill="var(--color-amber)"
        letterSpacing="1.8"
      >
        <textPath href={`#${pathId}`} startOffset="4%">
          {sealText}
        </textPath>
      </text>
      <line
        x1="26"
        y1="45"
        x2="74"
        y2="45"
        stroke="var(--color-amber)"
        strokeWidth="1.3"
      />
      <line
        x1="31"
        y1="51"
        x2="69"
        y2="51"
        stroke="var(--color-amber)"
        strokeWidth="1.3"
      />
      <line
        x1="38"
        y1="57"
        x2="62"
        y2="57"
        stroke="var(--color-amber)"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export default InstitutionalSeal;
