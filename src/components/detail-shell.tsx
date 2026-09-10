import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/section";
import { ShareButtons } from "@/components/share-buttons";
import { StatusBadge, CategoryTag } from "@/components/badges";
import { type AnyContent, formatDate, statusLabel } from "@/lib/content";

export function DetailShell({
  item,
  hubLabel,
  hubTo,
  crumbs,
  children,
  related,
}: {
  item: AnyContent;
  hubLabel: string;
  hubTo: string;
  crumbs: Crumb[];
  children: ReactNode;
  related?: { label: string; to: string }[] | undefined;
}) {
  const canonical = `https://gta6videohub.com${item.canonicalPath ?? crumbsToPath(crumbs, item)}`;
  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
      <Breadcrumbs items={crumbs} />
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <CategoryTag to={hubTo} label={item.categoryLabel} />
        {item.status && <StatusBadge status={item.status} />}
        {item.trending && (
          <span className="rounded-full bg-neon-pink px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neon-pink-foreground shadow-neon">
            {item.trending}
          </span>
        )}
      </div>
      <h1 className="mt-3 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-glow-pink sm:text-4xl md:text-5xl">
        {item.title}
      </h1>
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
        <time dateTime={item.publishedAt}>Published {formatDate(item.publishedAt)}</time>
        {item.updatedAt && (
          <>
            <span>·</span>
            <time dateTime={item.updatedAt}>Updated {formatDate(item.updatedAt)}</time>
          </>
        )}
        <span>·</span>
        <span>By GTA6VideoHub Editorial</span>
      </div>

      <div className="mt-5">
        <ShareButtons title={item.title} url={canonical} />
      </div>

      <div className="mt-6">{children}</div>

      {/* Source attribution */}
      {item.source && (
        <div className="mt-8 rounded-lg border border-border bg-card/50 p-4 text-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-neon-cyan">
            Source / Creator
          </div>
          <div className="mt-1.5 text-muted-foreground">
            {item.source.url && item.source.url !== "#" ? (
              <a
                href={item.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-neon-cyan"
              >
                {item.source.name} ↗
              </a>
            ) : (
              <span className="font-medium text-foreground">{item.source.name}</span>
            )}
            {item.sourceCredit && <p className="mt-1 text-xs text-muted-foreground">{item.sourceCredit}</p>}
            <p className="mt-1 text-xs text-muted-foreground">
              Media is embedded from or attributed to the original source. We do not rehost
              copyrighted content.
            </p>
          </div>
        </div>
      )}

      {/* Tags */}
      {item.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              #{t}
            </span>
          ))}
        </div>
      )}

      {/* Related internal links */}
      {related && related.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Keep exploring
          </h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {related.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-neon-pink hover:text-neon-pink"
              >
                {r.label} →
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

// Build a canonical-ish path for share links (best-effort from crumbs).
function crumbsToPath(crumbs: Crumb[], item: AnyContent): string {
  const last = crumbs[crumbs.length - 1];
  if (last && !last.to) return `/${item.category}s/${item.slug}`;
  return "/";
}

export { statusLabel };
