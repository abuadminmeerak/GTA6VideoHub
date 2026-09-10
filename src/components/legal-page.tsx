import { type ReactNode } from "react";
import { Breadcrumbs } from "@/components/section";

export function LegalPage({
  title,
  crumbs,
  children,
}: {
  title: string;
  crumbs: { label: string; to?: string }[];
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={crumbs} />
      <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-none tracking-tight text-glow-pink sm:text-5xl">
        {title}
      </h1>
      <div className="prose-invert mt-6 max-w-none space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {children}
      </div>
    </div>
  );
}
