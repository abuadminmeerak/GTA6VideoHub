import { createFileRoute } from "@tanstack/react-router";
import { allContent } from "@/lib/content";
import { ContentCard } from "@/components/content-card";
import { HubLayout } from "@/components/hub-layout";
import { Newsletter } from "@/components/newsletter";

export const Route = createFileRoute("/trending")({
  head: () => ({
    meta: [
      { title: "Trending GTA VI — What's Hot Right Now | GTA6VideoHub" },
      {
        name: "description",
        content:
          "What GTA VI fans are watching and talking about right now — trending videos, viral clips and breaking news from across Leonida.",
      },
      { property: "og:title", content: "Trending GTA VI — What's Hot Right Now | GTA6VideoHub" },
      {
        property: "og:description",
        content: "Trending GTA VI videos, clips and news from Leonida.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrendingHub,
});

function TrendingHub() {
  const trending = allContent.filter((c) => c.trending);
  const rest = allContent.filter((c) => !c.trending).slice(0, 9);
  return (
    <HubLayout
      crumbs={[{ label: "Home", to: "/" }, { label: "Trending" }]}
      kicker="What's hot"
      title="Trending GTA VI"
      intro="What fans are watching and talking about right now. Editorial labels (Trending, Breaking, Most Watched) reflect our editorial judgement — we do not fabricate popularity metrics or view counts."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trending.map((c) => (
          <ContentCard key={c.slug} item={c} />
        ))}
        {rest.map((c) => (
          <ContentCard key={c.slug} item={c} />
        ))}
      </div>
      <div className="mt-12">
        <Newsletter />
      </div>
    </HubLayout>
  );
}
