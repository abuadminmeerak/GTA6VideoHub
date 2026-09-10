import { createFileRoute } from "@tanstack/react-router";
import { news } from "@/lib/content";
import { DetailShell } from "@/components/detail-shell";
import { ContentCard } from "@/components/content-card";
import { Newsletter } from "@/components/newsletter";
import { notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/news/$slug")({
  head: ({ params }) => {
    const n = news.find((x) => x.slug === params.slug);
    return {
      meta: n
        ? [
            { title: `${n.title} | GTA6VideoHub` },
            { name: "description", content: n.excerpt },
            { property: "og:title", content: n.title },
            { property: "og:description", content: n.excerpt },
            { property: "og:type", content: "article" },
            { property: "og:image", content: n.thumbnail },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:image", content: n.thumbnail },
          ]
        : [{ title: "Article not found | GTA6VideoHub" }],
    };
  },
  component: NewsPage,
});

function NewsPage() {
  const { slug } = Route.useParams();
  const n = news.find((x) => x.slug === slug);
  if (!n) throw notFound();

  const related = news.filter((x) => x.slug !== slug).slice(0, 2);

  return (
    <>
      <DetailShell
        item={n}
        hubLabel="News"
        hubTo="/news"
        crumbs={[{ label: "Home", to: "/" }, { label: "News", to: "/news" }, { label: n.title }]}
        related={n.related}
      >
        <img
          src={n.thumbnail}
          alt={n.title}
          className="aspect-video w-full rounded-lg border border-border object-cover"
          loading="lazy"
        />
        <p className="mt-5 text-lg leading-relaxed text-foreground/90">{n.excerpt}</p>
        <div className="mt-6 space-y-4">
          {n.body.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
        {n.keyTakeaways && n.keyTakeaways.length > 0 && (
          <div className="mt-8 rounded-lg border border-neon-pink/30 bg-neon-pink/5 p-5">
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-neon-pink">
              Key takeaways
            </h2>
            <ul className="mt-3 space-y-2">
              {n.keyTakeaways.map((k, i) => (
                <li key={i} className="flex gap-2 text-sm text-foreground/90">
                  <span className="text-neon-pink">▸</span> {k}
                </li>
              ))}
            </ul>
          </div>
        )}
      </DetailShell>
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 font-display text-xl font-bold uppercase tracking-tight">
          More from Leonida
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
