import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/editorial-policy")({
  head: () => ({
    meta: [
      { title: "Editorial Policy — GTA6VideoHub" },
      {
        name: "description",
        content:
          "How GTA6VideoHub sources, labels and verifies GTA VI content — separating official information from rumor, leaks and editorial opinion.",
      },
      { property: "og:title", content: "Editorial Policy — GTA6VideoHub" },
      { property: "og:description", content: "How we source, label and verify GTA VI content." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EditorialPolicyPage,
});

function EditorialPolicyPage() {
  return (
    <LegalPage
      title="Editorial Policy"
      crumbs={[{ label: "Home", to: "/" }, { label: "Editorial Policy" }]}
    >
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
        Independence
      </h2>
      <p>
        GTA6VideoHub.com is an independent fan media website. We are not affiliated with, endorsed
        by, or sponsored by Rockstar Games or Take-Two Interactive. All trademarks belong to their
        respective owners.
      </p>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
        Information labeling
      </h2>
      <p>Every piece of content is labeled to show its nature:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong className="text-neon-cyan">Official</strong> — sourced directly from Rockstar
          Games or official materials.
        </li>
        <li>
          <strong className="text-sunset">Rumor</strong> — circulating but unverified; never
          presented as confirmed.
        </li>
        <li>
          <strong className="text-destructive">Leak</strong> — unofficially obtained material;
          clearly flagged.
        </li>
        <li>
          <strong className="text-muted-foreground">Community</strong> — fan analysis or
          speculation.
        </li>
        <li>
          <strong className="text-neon-purple">Editorial</strong> — our own commentary and opinion.
        </li>
      </ul>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
        No fabrication
      </h2>
      <p>
        We do not invent GTA VI facts, release dates, view counts, ratings or other data. Where
        information is unconfirmed, we say so. Demo/placeholder content is clearly labeled so it can
        be replaced with real, properly-sourced content.
      </p>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
        Sourcing & attribution
      </h2>
      <p>
        We prefer embedding authorized, public content from original platforms and adding original
        editorial context. We do not rehost or republish complete copyrighted articles or creators'
        videos. Sources are credited on every applicable page.
      </p>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
        Corrections
      </h2>
      <p>
        If we publish something inaccurate, we correct it promptly and note the update. Report
        issues via our{" "}
        <a href="/contact" className="text-neon-cyan hover:underline">
          Contact
        </a>{" "}
        page.
      </p>
    </LegalPage>
  );
}
