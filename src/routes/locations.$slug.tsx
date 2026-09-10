import { createFileRoute } from "@tanstack/react-router";
import { locations, publicationHead } from "@/lib/content";
import { DetailShell } from "@/components/detail-shell";
import { Newsletter } from "@/components/newsletter";
import { notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/locations/$slug")({
  head: ({ params }) => {
    const l = locations.find((x) => x.slug === params.slug);
    return l
      ? publicationHead(l)
      : { meta: [{ title: "Location not found | GTA6VideoHub" }] };
  },
  component: LocationPage,
});

function LocationPage() {
  const { slug } = Route.useParams();
  const l = locations.find((x) => x.slug === slug);
  if (!l) throw notFound();

  return (
    <DetailShell
      item={l}
      hubLabel="Locations"
      hubTo="/locations"
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Locations", to: "/locations" },
        { label: l.title },
      ]}
      related={l.related}
    >
      <div className="overflow-hidden rounded-xl border border-border">
        <img
          src={l.thumbnail}
          alt={l.title}
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
      </div>
      <p className="mt-5 text-lg leading-relaxed text-foreground/90">{l.description}</p>
      {l.body && (
        <div className="mt-6 space-y-4">
          {l.body.map((paragraph, index) => (
            <p key={index} className="whitespace-pre-line text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      )}
      {l.keyTakeaways && (
        <section className="mt-6 rounded-lg border border-border bg-card/40 p-4">
          <h2 className="font-display text-lg font-bold uppercase tracking-wide text-neon-cyan">
            Key takeaways
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
            {l.keyTakeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
          </ul>
        </section>
      )}
      <p className="mt-4 text-sm text-muted-foreground">
        Each location will expand into a full SEO page as Rockstar reveals more detail. We only
        publish officially confirmed information.
      </p>
      <div className="mt-10">
        <Newsletter />
      </div>
    </DetailShell>
  );
}
