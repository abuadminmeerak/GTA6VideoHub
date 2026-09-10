import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { allContent } from "@/lib/content";
import { ContentCard } from "@/components/content-card";
import { Search } from "lucide-react";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search GTA VI Videos, News, Characters & More | GTA6VideoHub" },
      {
        name: "description",
        content:
          "Search GTA6VideoHub for GTA VI videos, clips, news, guides, characters, vehicles, locations and trailers.",
      },
      { property: "og:title", content: "Search GTA6VideoHub" },
      { property: "og:description", content: "Search GTA VI videos, news, characters and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return allContent;
    return allContent.filter(
      (c) =>
        c.title.toLowerCase().includes(term) ||
        c.excerpt.toLowerCase().includes(term) ||
        c.tags.some((t) => t.toLowerCase().includes(term)),
    );
  }, [q]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="font-display text-4xl font-bold uppercase leading-none tracking-tight text-glow-pink sm:text-5xl">
        Search
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Find GTA VI videos, clips, news, guides, characters, vehicles, locations and trailers.
      </p>
      <div className="relative mt-6 max-w-xl">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search Leonida…"
          className="w-full rounded-lg border border-input bg-background py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-pink focus:outline-none"
        />
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        {results.length} result{results.length !== 1 ? "s" : ""}
        {q && ` for "${q}"`}
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((c) => (
          <ContentCard key={c.slug} item={c} />
        ))}
      </div>
      {results.length === 0 && (
        <p className="mt-8 text-center text-muted-foreground">No results — try a different term.</p>
      )}
    </div>
  );
}
