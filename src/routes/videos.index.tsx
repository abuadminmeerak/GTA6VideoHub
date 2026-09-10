import { createFileRoute } from "@tanstack/react-router";
import { videos } from "@/lib/content";
import { ContentCard } from "@/components/content-card";
import { HubLayout } from "@/components/hub-layout";
import { Newsletter } from "@/components/newsletter";

export const Route = createFileRoute("/videos/")({
  component: VideosHub,
});

function VideosHub() {
  return (
    <HubLayout
      crumbs={[{ label: "Home", to: "/" }, { label: "Videos" }]}
      kicker="Watch"
      title="GTA VI Videos"
      intro="Gameplay impressions, trailer breakdowns, map explainers and editorial deep-dives. Every video page is indexable and includes original commentary around curated, properly-sourced media."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <ContentCard key={v.slug} item={v} />
        ))}
      </div>
      <div className="mt-12">
        <Newsletter />
      </div>
    </HubLayout>
  );
}
