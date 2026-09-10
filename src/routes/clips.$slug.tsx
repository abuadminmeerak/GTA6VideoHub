import { createFileRoute } from "@tanstack/react-router";
import { clips } from "@/lib/content";
import { DetailShell } from "@/components/detail-shell";
import { VideoEmbed } from "@/components/video-embed";
import { Newsletter } from "@/components/newsletter";
import { notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/clips/$slug")({
  head: ({ params }) => {
    const c = clips.find((x) => x.slug === params.slug);
    return {
      meta: c
        ? [
            { title: `${c.title} | GTA6VideoHub` },
            { name: "description", content: c.excerpt },
            { property: "og:title", content: c.title },
            { property: "og:description", content: c.excerpt },
            { property: "og:type", content: "video.other" },
            { property: "og:image", content: c.thumbnail },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:image", content: c.thumbnail },
          ]
        : [{ title: "Clip not found | GTA6VideoHub" }],
    };
  },
  component: ClipPage,
});

function ClipPage() {
  const { slug } = Route.useParams();
  const c = clips.find((x) => x.slug === slug);
  if (!c) throw notFound();

  return (
    <DetailShell
      item={c}
      hubLabel="Clips"
      hubTo="/clips"
      crumbs={[{ label: "Home", to: "/" }, { label: "Clips", to: "/clips" }, { label: c.title }]}
      related={c.related}
    >
      <VideoEmbed embedUrl={c.embedUrl} thumbnail={c.thumbnail} title={c.title} />
      <p className="mt-5 text-base leading-relaxed text-foreground/90">{c.excerpt}</p>
      <div className="mt-8 space-y-6">
        <section>
          <h2 className="font-display text-lg font-bold uppercase tracking-wide text-neon-pink">
            What you're watching
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.watchContext}</p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold uppercase tracking-wide text-neon-cyan">
            Why GTA VI fans are talking about it
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.whyTalking}</p>
        </section>
      </div>
      <div className="mt-10">
        <Newsletter />
      </div>
    </DetailShell>
  );
}
