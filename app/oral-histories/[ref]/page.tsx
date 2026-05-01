import fs from "fs";
import path from "path";

import { MDXRemote } from "next-mdx-remote/rsc";
import type { JSX, ReactNode } from "react";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/layout/Breadcrumb";
import MobileTopBar from "@/components/layout/MobileTopBar";
import OralHistoryCard from "@/components/oral-histories/OralHistoryCard";

import {
  BREADCRUMB_ORAL_HISTORIES,
  BREADCRUMB_REGISTRY,
} from "@/lib/constants";
import { getAllOralHistories, getOralHistoryByRef } from "@/lib/oral-histories";

const CONTENT_DIR = path.join(process.cwd(), "content/oral-histories");

const MDX_SLUG_PATTERN = /^[a-z0-9-]+$/;

type OralHistoryDetailPageProps = {
  params: { ref: string };
};

function stripMdxFrontmatter(source: string): string {
  const trimmed = source.trimStart();
  if (!trimmed.startsWith("---\n")) {
    return source;
  }
  const closing = trimmed.indexOf("\n---\n", 4);
  if (closing === -1) {
    return source;
  }
  return trimmed.slice(closing + "\n---\n".length);
}

type MdxParagraphProps = {
  children?: ReactNode;
};

function MdxParagraph({ children }: MdxParagraphProps): JSX.Element {
  return (
    <p className="mb-4 font-sans text-[14.5px] leading-[1.75] text-charcoal">
      {children}
    </p>
  );
}

const mdxComponents = {
  p: MdxParagraph,
};

export function generateStaticParams(): { ref: string }[] {
  return getAllOralHistories().map((item) => ({ ref: item.ref }));
}

export default function OralHistoryDetailPage({
  params,
}: OralHistoryDetailPageProps): JSX.Element {
  const oralHistory = getOralHistoryByRef(params.ref);

  if (!oralHistory || !MDX_SLUG_PATTERN.test(oralHistory.mdxSlug)) {
    notFound();
  }

  const filePath = path.join(CONTENT_DIR, `${oralHistory.mdxSlug}.mdx`);

  let rawSource: string;
  try {
    rawSource = fs.readFileSync(filePath, "utf-8");
  } catch {
    notFound();
  }

  const mdxBody = stripMdxFrontmatter(rawSource);

  return (
    <>
      <MobileTopBar
        variant="back"
        backHref="/oral-histories"
        backLabel={BREADCRUMB_ORAL_HISTORIES}
      />

      <div className="mx-auto max-w-[860px] px-4 py-8 lg:px-10">
        <div className="mb-7">
          <Breadcrumb
            items={[
              { label: BREADCRUMB_REGISTRY, href: "/" },
              { label: BREADCRUMB_ORAL_HISTORIES, href: "/oral-histories" },
              { label: oralHistory.ref },
            ]}
          />
        </div>

        <OralHistoryCard oralHistory={oralHistory} showCta={false} />

        <hr className="my-10 border-rule" />

        <div className="font-sans text-[14.5px] leading-[1.75] text-charcoal">
          <MDXRemote source={mdxBody} components={mdxComponents} />
        </div>
      </div>
    </>
  );
}
