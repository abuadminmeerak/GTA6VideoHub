import { createFileRoute } from "@tanstack/react-router";
import { guides } from "@/lib/content";
import { ContentCard } from "@/components/content-card";
import { HubLayout } from "@/components/hub-layout";
import { Newsletter } from "@/components/newsletter";

export const Route = createFileRoute("/guides/")({
  component: GuidesHub,
});

const FUTURE_TOPICS = [
  "Beginner Guides",
  "Vehicles",
  "Weapons",
  "Missions",
  "Money",
  "Properties",
  "Map",
  "Secrets",
  "Easter Eggs",
  "Characters",
  "Multiplayer / Online",
  "Settings",
  "Tips & Tricks",
];

function GuidesHub() {
  return (
    <HubLayout
      crumbs={[{ label: "Home", to: "/" }, { label: "Guides" }]}
      kicker="Learn the game"
      title="GTA VI Guides"
      intro="Evergreen, high-search-intent guides. We do not fabricate unconfirmed game facts — placeholder sections are clearly labeled and filled in after launch as official information becomes available."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <ContentCard key={g.slug} item={g} />
        ))}
      </div>
      <div className="mt-10">
        <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Upcoming guide topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {FUTURE_TOPICS.map((t) => (
            <span
              key={t}
              className="rounded-full border border-dashed border-border px-3 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <Newsletter />
      </div>
    </HubLayout>
  );
}
