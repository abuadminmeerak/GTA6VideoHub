import { createFileRoute } from "@tanstack/react-router";
import { characters, videos, publicationHead } from "@/lib/content";
import { DetailShell } from "@/components/detail-shell";
import { ContentCard } from "@/components/content-card";
import { Newsletter } from "@/components/newsletter";
import { notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/characters/$slug")({
  head: ({ params }) => {
    const c = characters.find((x) => x.slug === params.slug);
    return c
      ? publicationHead(c)
      : { meta: [{ title: "Character not found | GTA6VideoHub" }] };
  },
  component: CharacterPage,
});

function CharacterPage() {
  const { slug } = Route.useParams();
  const c = characters.find((x) => x.slug === slug);
  if (!c) throw notFound();

  const relatedVids = videos.filter((v) => c.relatedVideos.includes(v.slug));

  return (
    <>
      <DetailShell
        item={c}
        hubLabel="Characters"
        hubTo="/characters"
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Characters", to: "/characters" },
          { label: c.fullName },
        ]}
        related={c.related}
      >
        <div className="overflow-hidden rounded-xl border border-border">
          <img
            src={c.thumbnail}
            alt={c.fullName}
            className="aspect-[16/10] w-full object-cover"
            loading="lazy"
          />
        </div>
        <p className="mt-5 text-lg leading-relaxed text-foreground/90">{c.description}</p>
        {c.body && (
          <div className="mt-6 space-y-4">
            {c.body.map((paragraph, index) => (
              <p key={index} className="whitespace-pre-line text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        )}
        {c.keyTakeaways && (
          <section className="mt-6 rounded-lg border border-border bg-card/40 p-4">
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-neon-cyan">
              Key takeaways
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
              {c.keyTakeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
            </ul>
          </section>
        )}
        <p className="mt-4 text-sm text-muted-foreground">
          Details beyond what Rockstar has officially released remain unconfirmed. We avoid
          inventing character backstory.
        </p>
      </DetailShell>
      {relatedVids.length > 0 && (
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 font-display text-xl font-bold uppercase tracking-tight">
            Related videos
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedVids.map((v) => (
              <ContentCard key={v.slug} item={v} />
            ))}
          </div>
        </div>
      )}
      <div className="mx-auto max-w-7xl px-4 mt-10">
        <Newsletter />
      </div>
    </>
  );
}
