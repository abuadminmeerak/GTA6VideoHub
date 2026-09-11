import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, TrendingUp, ArrowRight, MapPin, Compass } from "lucide-react";
import {
  videos,
  clips,
  news,
  guides,
  characters,
  vehicles,
  locations,
  IMG,
  type AnyContent,
} from "@/lib/content";
import { ContentCard } from "@/components/content-card";
import { SectionHeading } from "@/components/section";
import { Newsletter } from "@/components/newsletter";
import { ExploreTile } from "@/components/hub-layout";
import { TrendingBadge } from "@/components/badges";
import { SiteLogo } from "@/components/header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GTA6VideoHub — GTA VI Videos, Clips, News & Everything Leonida" },
      {
        name: "description",
        content:
          "The hub for GTA VI videos, clips, trailers, gameplay, news and everything happening across Leonida. Watch. Discover. Explore Leonida.",
      },
      {
        property: "og:title",
        content: "GTA6VideoHub — GTA VI Videos, Clips, News & Everything Leonida",
      },
      {
        property: "og:description",
        content:
          "The hub for GTA VI videos, clips, trailers, gameplay, news and everything happening across Leonida.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMG.heroSunset },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMG.heroSunset },
    ],
  }),
  component: Index,
});

function Index() {
  const trending: AnyContent[] = [videos[0]!, guides[0]!, characters[0]!, locations[0]!, vehicles[0]!];
  const latestVideos = videos;
  const latestNews = news;

  return (
    <div>
      {/* SECTION 1 — HERO */}
      <section className="relative h-[430px] overflow-hidden sm:h-[460px] lg:h-[480px]">
        <div className="absolute inset-0">
          <img
            src={IMG.heroSunset}
            alt="Vice City sunset atmosphere"
            className="h-full w-full object-cover object-center brightness-125 contrast-110 saturate-[1.2]"
          />
        </div>
        <div className="relative mx-auto flex h-full max-w-7xl items-start px-4 pt-8 sm:pt-10 lg:pt-11">
          <div className="max-w-[62rem] animate-reveal">
            <div className="mb-3 inline-flex items-center border-b-2 border-neon-pink px-0 pb-1.5 text-xs font-bold uppercase tracking-[0.28em] text-foreground [text-shadow:1px_2px_4px_rgba(0,0,0,0.9)]">
              The GTA VI Video Hub
            </div>
            <h1 className="-ml-1 drop-shadow-[0_5px_12px_rgba(0,0,0,0.6)] sm:-ml-2">
              <SiteLogo variant="hero" />
            </h1>
            <p className="mt-4 max-w-xl text-base font-medium text-foreground [text-shadow:1px_2px_5px_rgba(0,0,0,0.9)] sm:text-lg">
              Breaking videos, viral clips, trailers, gameplay, news and everything happening across
              Leonida.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/trending"
                className="inline-flex items-center gap-2 rounded-md bg-vice-gradient px-6 py-3 text-sm font-bold uppercase tracking-wide text-neon-pink-foreground transition-transform hover:scale-[1.03] hover:shadow-neon"
              >
                <Play className="h-4 w-4 fill-current" /> Watch Trending
              </Link>
              <Link
                to="/news"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-6 py-3 text-sm font-bold uppercase tracking-wide text-foreground backdrop-blur transition-colors hover:border-neon-cyan hover:text-neon-cyan"
              >
                Latest GTA VI News <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        {/* SECTION 2 — TRENDING NOW */}
        <section className="py-12">
          <SectionHeading
            kicker="What's happening now"
            title="Trending Now"
            link={{ to: "/trending", label: "All trending →" }}
          />
          <div className="grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2">
              <ContentCard item={trending[0]!} variant="feature" />
            </div>
            {trending.slice(1, 5).map((item) => (
              <ContentCard key={item.slug} item={item} />
            ))}
          </div>
        </section>

        {/* SECTION 3 — LATEST VIDEOS */}
        {latestVideos.length > 0 && <section className="py-8">
          <SectionHeading
            kicker="Watch"
            title="Latest GTA VI Videos"
            link={{ to: "/videos", label: "View all videos →" }}
          />
          <div className={latestVideos.length === 1 ? "lg:max-w-4xl" : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"}>
            {latestVideos.map((v) => (
              <ContentCard key={v.slug} item={v} variant={latestVideos.length === 1 ? "feature" : "default"} />
            ))}
          </div>
        </section>}

        {/* SECTION 4 — VIRAL CLIPS */}
        {clips.length > 0 && <section className="py-8">
          <SectionHeading
            kicker="Short & viral"
            title="Viral Clips"
            link={{ to: "/clips", label: "All clips →" }}
          />
          <div className="relative -mx-4 overflow-x-auto px-4 no-scrollbar">
            <div className="flex gap-4 pb-2">
              {clips.map((c) => (
                <div key={c.slug} className="w-64 shrink-0">
                  <ContentCard item={c} />
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Clips are embedded from original platforms. We do not rehost creators' videos.
          </p>
        </section>}

        {/* SECTION 5 — LATEST NEWS */}
        {latestNews.length > 0 && <section className="py-8">
          <SectionHeading
            kicker="From Leonida"
            title="Latest From Leonida"
            link={{ to: "/news", label: "All news →" }}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {latestNews.map((n) => (
              <ContentCard key={n.slug} item={n} />
            ))}
          </div>
        </section>}

        {/* SECTION 6 — EXPLORE GTA VI */}
        <section className="py-8">
          <SectionHeading kicker="Dive deeper" title="Explore GTA VI" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <ExploreTile
              to="/characters"
              title="Characters"
              description="Meet the people of Leonida"
              image={IMG.jason}
            />
            <ExploreTile
              to="/vehicles"
              title="Vehicles"
              description="Cars, bikes & boats"
              image={IMG.carHighway}
            />
            <ExploreTile
              to="/locations"
              title="Locations"
              description="Explore the map"
              image={IMG.coastCity}
            />
            <ExploreTile
              to="/guides"
              title="Guides"
              description="Tips & explainers"
              image={IMG.neonCity}
            />
            <ExploreTile
              to="/trailers"
              title="Trailers"
              description="Every official drop"
              image={IMG.heroSunset}
            />
          </div>
        </section>

        {/* SECTION 7 — CHARACTERS */}
        <section className="py-8">
          <SectionHeading
            kicker="The story"
            title="Meet the Characters"
            link={{ to: "/characters", label: "All characters →" }}
          />
          <div className={characters.length === 1 ? "lg:max-w-4xl" : "grid gap-4 sm:grid-cols-2"}>
            {characters.map((c) => (
              <Link
                key={c.slug}
                to="/characters/$slug"
                params={{ slug: c.slug }}
                className="group relative flex overflow-hidden rounded-xl border border-neon-purple/45 bg-card shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-neon-pink/70 hover:shadow-neon"
              >
                <div className="relative aspect-[3/4] w-40 shrink-0 overflow-hidden sm:w-48">
                  <img
                    src={c.thumbnail}
                    alt={c.fullName}
                    loading="lazy"
                    className="h-full w-full object-cover brightness-110 contrast-[1.08] saturate-[1.2] opacity-100 transition-transform duration-500 group-hover:scale-105"
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
          <p className="mt-4 text-xs text-muted-foreground">
            Character roster is expandable — more will be added as Rockstar reveals them.
          </p>
        </section>

        {/* SECTION 8 — EXPLORE LEONIDA */}
        <section className="py-8">
          <SectionHeading
            kicker="The setting"
            title="Explore Leonida"
            link={{ to: "/locations", label: "All locations →" }}
          />
          <div className={locations.length === 1 ? "lg:max-w-4xl" : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"}>
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
                  className="absolute inset-0 h-full w-full object-cover brightness-110 contrast-[1.08] saturate-[1.2] opacity-100 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background/75 via-background/25 to-transparent" />
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
        </section>

        {/* SECTION 9 — GUIDES */}
        <section className="py-8">
          <SectionHeading
            kicker="Learn the game"
            title="GTA VI Guides"
            link={{ to: "/guides", label: "All guides →" }}
          />
          <div className={guides.length === 1 ? "lg:max-w-4xl" : "grid gap-4 md:grid-cols-3"}>
            {guides.map((g) => (
              <ContentCard key={g.slug} item={g} variant={guides.length === 1 ? "feature" : "default"} />
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Guide topics will expand to cover weapons, missions, money, properties, secrets, easter
            eggs, multiplayer, settings & tips. No unconfirmed game facts are fabricated.
          </p>
        </section>

        {/* SECTION 10 — NEWSLETTER */}
        <section className="py-8">
          <Newsletter />
        </section>
      </div>
    </div>
  );
}
