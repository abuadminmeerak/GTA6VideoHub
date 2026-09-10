import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {item.to ? (
            <Link to={item.to} className="hover:text-neon-pink transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground/80">{item.label}</span>
          )}
          {i < items.length - 1 && <span className="text-muted-foreground/50">/</span>}
        </span>
      ))}
    </nav>
  );
}

export function SectionHeading({
  title,
  kicker,
  link,
  className,
}: {
  title: string;
  kicker?: string;
  link?: { to: string; label: string };
  className?: string;
}) {
  return (
    <div className={cn("mb-5 flex items-end justify-between gap-4", className)}>
      <div>
        {kicker && (
          <div className="mb-1 text-xs font-bold uppercase tracking-[0.25em] text-neon-pink">
            {kicker}
          </div>
        )}
        <h2 className="text-2xl font-bold uppercase leading-none tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>
      {link && (
        <Link
          to={link.to}
          className="shrink-0 text-sm font-semibold text-neon-cyan hover:text-glow-cyan"
        >
          {link.label}
        </Link>
      )}
    </div>
  );
}
