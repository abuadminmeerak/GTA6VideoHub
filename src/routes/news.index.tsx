import { createFileRoute } from "@tanstack/react-router";
import { news } from "@/lib/content";
import { ContentCard } from "@/components/content-card";
import { HubLayout } from "@/components/hub-layout";
import { Newsletter } from "@/components/newsletter";

export const Route = createFileRoute("/news/")({
  component: NewsHub,
});

function NewsHub() {
  return (
    <HubLayout
      crumbs={[{ label: "Home", to: "/" }, { label: "News" }]}
      kicker="From Leonida"
      title="Latest From Leonida"
      intro="GTA VI news and updates, with clear labels distinguishing official information, rumors, leaks, community speculation and editorial opinion. We never present an unverified rumor as confirmed fact."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {news.map((n) => (
          <ContentCard key={n.slug} item={n} />
        ))}
      </div>
      <div className="mt-12">
        <Newsletter />
      </div>
    </HubLayout>
  );
}
