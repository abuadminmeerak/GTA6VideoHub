import { createFileRoute } from "@tanstack/react-router";
import { guides, publicationHead } from "@/lib/content";
import { DetailShell } from "@/components/detail-shell";
import { ContentCard } from "@/components/content-card";
import { Newsletter } from "@/components/newsletter";
import { notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/guides/$slug")({
  head: ({ params }) => {
    const g = guides.find((x) => x.slug === params.slug);
    return g
      ? publicationHead(g)
      : { meta: [{ title: "Guide not found | GTA6VideoHub" }] };
  },
  component: GuidePage,
});

function GuidePage() {
  const { slug } = Route.useParams();
  const g = guides.find((x) => x.slug === slug);
  if (!g) throw notFound();

  const related = guides.filter((x) => x.slug !== slug).slice(0, 2);

  return (
    <>
      <DetailShell
        item={g}
        hubLabel="Guides"
        hubTo="/guides"
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Guides", to: "/guides" },
          { label: g.title },
        ]}
        related={g.related}
      >
        <img
          src={g.thumbnail}
          alt={g.title}
          className="aspect-video w-full rounded-lg border border-border object-cover"
          loading="lazy"
        />
        <p className="mt-5 text-lg leading-relaxed text-foreground/90">{g.excerpt}</p>
        <div className="mt-6 space-y-4">
          {g.body.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
        {g.keyTakeaways && (
          <section className="mt-6 rounded-lg border border-border bg-card/40 p-4">
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-neon-cyan">
              Key takeaways
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
              {g.keyTakeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
            </ul>
          </section>
        )}
      </DetailShell>
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 font-display text-xl font-bold uppercase tracking-tight">
          More guides
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
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
