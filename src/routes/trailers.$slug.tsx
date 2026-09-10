import { createFileRoute } from "@tanstack/react-router";
import { videos } from "@/lib/content";
import { DetailShell } from "@/components/detail-shell";
import { VideoEmbed } from "@/components/video-embed";
import { ContentCard } from "@/components/content-card";
import { Newsletter } from "@/components/newsletter";
import { notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/trailers/$slug")({
  head: ({ params }) => {
    const t = videos.find((x) => x.slug === params.slug && x.category === "trailer");
    return {
      meta: t
        ? [
            { title: `${t.title} | GTA6VideoHub` },
            { name: "description", content: t.excerpt },
            { property: "og:title", content: t.title },
            { property: "og:description", content: t.excerpt },
            { property: "og:type", content: "video.other" },
            { property: "og:image", content: t.thumbnail },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:image", content: t.thumbnail },
          ]
        : [{ title: "Trailer not found | GTA6VideoHub" }],
    };
  },
  component: TrailerPage,
});

function TrailerPage() {
  const { slug } = Route.useParams();
  const t = videos.find((x) => x.slug === slug && x.category === "trailer");
  if (!t) throw notFound();

  const related = videos.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <DetailShell
        item={t}
        hubLabel="Trailers"
        hubTo="/trailers"
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Trailers", to: "/trailers" },
          { label: t.title },
        ]}
        related={t.related}
      >
        <VideoEmbed embedUrl={t.embedUrl} thumbnail={t.thumbnail} title={t.title} />
        <p className="mt-5 text-base leading-relaxed text-foreground/90">{t.excerpt}</p>
        <div className="mt-8 space-y-6">
          <section>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-neon-pink">
              What you're watching
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.watchContext}</p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-neon-cyan">
              Why GTA VI fans are talking about it
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.whyTalking}</p>
          </section>
        </div>
      </DetailShell>
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 font-display text-xl font-bold uppercase tracking-tight">
          Related trailers
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <ContentCard key={r.slug} item={r} />
          ))}
        </div>
        <div className="mt-10">
          <Newsletter />
        </div>
      </div>
    </>
  );
}
