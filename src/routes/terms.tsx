import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — GTA6VideoHub" },
      {
        name: "description",
        content:
          "The terms governing use of GTA6VideoHub.com, an independent GTA VI fan media website.",
      },
      { property: "og:title", content: "Terms of Use — GTA6VideoHub" },
      { property: "og:description", content: "Terms governing use of GTA6VideoHub.com." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms of Use" crumbs={[{ label: "Home", to: "/" }, { label: "Terms" }]}>
      <p>Last updated: September 2026.</p>
      <p>
        By using GTA6VideoHub.com you agree to these terms. The site is provided as an independent
        fan resource for informational and entertainment purposes.
      </p>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
        No affiliation
      </h2>
      <p>
        GTA6VideoHub.com is not affiliated with, endorsed by, or sponsored by Rockstar Games or
        Take-Two Interactive. All trademarks belong to their respective owners.
      </p>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
        Content & embeds
      </h2>
      <p>
        We embed and link to content hosted on third-party platforms and add original editorial
        commentary. We do not claim ownership of third-party content. Embedded videos remain subject
        to the terms of their original platform.
      </p>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
        Accuracy
      </h2>
      <p>
        Content is provided "as is". We strive for accuracy but make no warranties. GTA VI
        information is evolving; treat rumors and leaks as unverified.
      </p>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
        User conduct
      </h2>
      <p>
        Do not misuse the site, attempt to disrupt it, or submit unlawful content via our forms. We
        may update these terms at any time.
      </p>
    </LegalPage>
  );
}
