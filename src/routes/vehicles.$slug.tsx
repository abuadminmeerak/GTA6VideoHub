import { createFileRoute } from "@tanstack/react-router";
import { vehicles, publicationHead } from "@/lib/content";
import { DetailShell } from "@/components/detail-shell";
import { Newsletter } from "@/components/newsletter";
import { notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/vehicles/$slug")({
  head: ({ params }) => {
    const v = vehicles.find((x) => x.slug === params.slug);
    return v
      ? publicationHead(v)
      : { meta: [{ title: "Vehicle not found | GTA6VideoHub" }] };
  },
  component: VehiclePage,
});

function VehiclePage() {
  const { slug } = Route.useParams();
  const v = vehicles.find((x) => x.slug === slug);
  if (!v) throw notFound();

  return (
    <DetailShell
      item={v}
      hubLabel="Vehicles"
      hubTo="/vehicles"
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Vehicles", to: "/vehicles" },
        { label: v.title },
      ]}
      related={v.related}
    >
      <div className="overflow-hidden rounded-xl border border-border">
        <img
          src={v.thumbnail}
          alt={v.title}
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-neon-cyan/40 px-3 py-1 text-xs font-bold uppercase tracking-wide text-neon-cyan">
          {v.type}
        </span>
      </div>
      <p className="mt-4 text-lg leading-relaxed text-foreground/90">{v.description}</p>
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
      <p className="mt-4 text-sm text-muted-foreground">
        Specific in-game name and performance stats are unconfirmed until launch. We don't fabricate
        vehicle statistics.
      </p>
      <div className="mt-10">
        <Newsletter />
      </div>
    </DetailShell>
  );
}
