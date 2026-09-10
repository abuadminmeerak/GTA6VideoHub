import { createFileRoute, Link } from "@tanstack/react-router";
import { videos, publicationHead } from "@/lib/content";
import { DetailShell } from "@/components/detail-shell";
import { VideoEmbed } from "@/components/video-embed";
import { ContentCard } from "@/components/content-card";
import { Newsletter } from "@/components/newsletter";
import { notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/videos/$slug")({
  head: ({ params }) => {
    const v = videos.find((x) => x.slug === params.slug);
    return v
      ? publicationHead(v, "video.other")
      : { meta: [{ title: "Video not found | GTA6VideoHub" }] };
  },
  component: VideoPage,
});

function VideoPage() {
  const { slug } = Route.useParams();
  const v = videos.find((x) => x.slug === slug);
  if (!v) throw notFound();

  const related = videos.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <DetailShell
        item={v}
        hubLabel="Videos"
        hubTo="/videos"
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Videos", to: "/videos" },
          { label: v.title },
        ]}
        related={v.related}
      >
        <VideoEmbed embedUrl={v.embedUrl} thumbnail={v.thumbnail} title={v.title} />

        <p className="mt-5 text-base leading-relaxed text-foreground/90">{v.excerpt}</p>

        {v.body && (
          <div className="mt-6 space-y-4">
            {v.body.map((paragraph, index) => (
              <p key={index} className="whitespace-pre-line text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {v.keyTakeaways && (
          <section className="mt-6 rounded-lg border border-border bg-card/40 p-4">
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-neon-cyan">
              Key takeaways
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
              {v.keyTakeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
            </ul>
          </section>
        )}

        <div className="mt-8 space-y-6">
          <section>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-neon-pink">
              What you're watching
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.watchContext}</p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-neon-cyan">
              Why GTA VI fans are talking about it
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.whyTalking}</p>
          </section>
        </div>
      </DetailShell>

      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 font-display text-xl font-bold uppercase tracking-tight">
          Related videos
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
