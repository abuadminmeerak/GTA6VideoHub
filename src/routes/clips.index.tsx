import { createFileRoute } from "@tanstack/react-router";
import { clips } from "@/lib/content";
import { ContentCard } from "@/components/content-card";
import { HubLayout } from "@/components/hub-layout";
import { Newsletter } from "@/components/newsletter";

export const Route = createFileRoute("/clips/")({
  component: ClipsHub,
});

function ClipsHub() {
  return (
    <HubLayout
      crumbs={[{ label: "Home", to: "/" }, { label: "Clips" }]}
      kicker="Short & viral"
      title="Viral Clips"
      intro="Quick, shareable GTA VI moments. Clips are embedded from original platforms (YouTube, TikTok, X) with editorial context — we do not download or rehost creators' videos."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clips.map((c) => (
          <ContentCard key={c.slug} item={c} />
        ))}
      </div>
      <div className="mt-12">
        <Newsletter />
      </div>
    </HubLayout>
  );
}
