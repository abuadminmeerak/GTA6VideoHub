import { createFileRoute } from "@tanstack/react-router";
import { videos } from "@/lib/content";
import { ContentCard } from "@/components/content-card";
import { HubLayout } from "@/components/hub-layout";
import { Newsletter } from "@/components/newsletter";

export const Route = createFileRoute("/trailers/")({
  component: TrailersHub,
});

function TrailersHub() {
  const trailers = videos.filter((v) => v.category === "trailer");
  return (
    <HubLayout
      crumbs={[{ label: "Home", to: "/" }, { label: "Trailers" }]}
      kicker="Official drops"
      title="GTA VI Trailers"
      intro="Every official GTA VI trailer, embedded directly from Rockstar Games with original editorial breakdowns. We don't rehost trailers — we embed and add context."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trailers.map((t) => (
          <ContentCard key={t.slug} item={t} />
        ))}
      </div>
      <div className="mt-12">
        <Newsletter />
      </div>
    </HubLayout>
  );
}
