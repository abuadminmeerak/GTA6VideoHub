import { createFileRoute, Link } from "@tanstack/react-router";
import { locations } from "@/lib/content";
import { HubLayout } from "@/components/hub-layout";
import { Newsletter } from "@/components/newsletter";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/locations/")({
  component: LocationsHub,
});

function LocationsHub() {
  return (
    <HubLayout
      crumbs={[{ label: "Home", to: "/" }, { label: "Locations" }]}
      kicker="The setting"
      title="Explore Leonida"
      intro="The state of Leonida is GTA VI's confirmed setting. Explore its regions below — each location has (or will have) its own dedicated SEO page. New locations are added as they're officially revealed."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((l) => (
          <Link
            key={l.slug}
            to="/locations/$slug"
            params={{ slug: l.slug }}
            className="group relative flex h-44 flex-col justify-end overflow-hidden rounded-xl border border-border p-4 transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/50 hover:shadow-neon-cyan"
          >
            <img
              src={l.thumbnail}
              alt={l.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-50 transition-all duration-500 group-hover:scale-110 group-hover:opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
            <div className="relative">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-neon-cyan">
                <MapPin className="h-3 w-3" /> {l.region}
              </div>
              <h3 className="mt-1 font-display text-2xl font-bold uppercase leading-none tracking-tight transition-colors group-hover:text-neon-cyan">
                {l.title}
              </h3>
              <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">{l.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12">
        <Newsletter />
      </div>
    </HubLayout>
  );
}
