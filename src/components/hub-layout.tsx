import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/section";

export function HubLayout({
  title,
  kicker,
  intro,
  crumbs,
  children,
}: {
  title: string;
  kicker: string;
  intro: string;
  crumbs: Crumb[];
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
      <Breadcrumbs items={crumbs} />
      <div className="mt-4">
        <div className="text-xs font-bold uppercase tracking-[0.25em] text-neon-pink">{kicker}</div>
        <h1 className="mt-1 font-display text-4xl font-bold uppercase leading-none tracking-tight text-glow-pink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base text-muted-foreground">{intro}</p>
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
}

export function ExploreTile({
  to,
  title,
  description,
  image,
}: {
  to: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <Link
      to={to}
      className="group relative flex h-40 flex-col justify-end overflow-hidden rounded-xl border border-border p-4 transition-all duration-300 hover:-translate-y-1 hover:border-neon-pink/50 hover:shadow-neon sm:h-48"
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-50 transition-all duration-500 group-hover:scale-110 group-hover:opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      <div className="relative">
        <h3 className="font-display text-xl font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-neon-pink">
          {title}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
