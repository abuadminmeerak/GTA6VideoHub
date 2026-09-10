import { createFileRoute, Link } from "@tanstack/react-router";
import { characters } from "@/lib/content";
import { HubLayout } from "@/components/hub-layout";
import { Newsletter } from "@/components/newsletter";
import { TrendingBadge } from "@/components/badges";

export const Route = createFileRoute("/characters/")({
  component: CharactersHub,
});

function CharactersHub() {
  return (
    <HubLayout
      crumbs={[{ label: "Home", to: "/" }, { label: "Characters" }]}
      kicker="The story"
      title="Meet the Characters"
      intro="The people of Leonida. This roster is expandable — new characters are added as Rockstar officially reveals them. We only publish details that have been officially confirmed."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {characters.map((c) => (
          <Link
            key={c.slug}
            to="/characters/$slug"
            params={{ slug: c.slug }}
            className="group relative flex overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-neon-pink/50 hover:shadow-neon"
          >
            <div className="relative aspect-[3/4] w-40 shrink-0 overflow-hidden sm:w-48">
              <img
                src={c.thumbnail}
                alt={c.fullName}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {c.trending && (
                <div className="absolute left-2 top-2">
                  <TrendingBadge label={c.trending} />
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2 p-4">
              <div className="text-[11px] font-bold uppercase tracking-widest text-neon-pink">
                {c.categoryLabel}
              </div>
              <h3 className="font-display text-2xl font-bold uppercase leading-none tracking-tight transition-colors group-hover:text-neon-pink">
                {c.fullName}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3">{c.excerpt}</p>
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
