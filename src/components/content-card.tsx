import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { type AnyContent, formatDate } from "@/lib/content";
import { TrendingBadge, StatusBadge, CategoryTag } from "@/components/badges";
import { cn } from "@/lib/utils";

// Map category to its hub route
function hubTo(category: AnyContent["category"]): string {
  switch (category) {
    case "video":
      return "/videos";
    case "clip":
      return "/clips";
    case "news":
      return "/news";
    case "guide":
      return "/guides";
    case "character":
      return "/characters";
    case "vehicle":
      return "/vehicles";
    case "location":
      return "/locations";
    case "trailer":
      return "/trailers";
  }
}

function detailTo(item: AnyContent): string {
  switch (item.category) {
    case "video":
      return `/videos/$slug`;
    case "clip":
      return `/clips/$slug`;
    case "news":
      return `/news/$slug`;
    case "guide":
      return `/guides/$slug`;
    case "character":
      return `/characters/$slug`;
    case "vehicle":
      return `/vehicles/$slug`;
    case "location":
      return `/locations/$slug`;
    case "trailer":
      return `/trailers/$slug`;
  }
}

interface CardProps {
  item: AnyContent;
  variant?: "default" | "feature" | "horizontal" | "compact";
  showPlay?: boolean;
  duration?: string;
}

export function ContentCard({ item, variant = "default", showPlay, duration }: CardProps) {
  const isVideoLike =
    item.category === "video" || item.category === "clip" || item.category === "trailer";
  const showPlayIcon = showPlay ?? isVideoLike;
  const dur = duration ?? ("duration" in item ? (item as any).duration : undefined);

  return (
    <Link
      to={detailTo(item)}
      params={{ slug: item.slug }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-neon-pink/50 hover:shadow-neon",
        variant === "feature" && "md:flex-row",
        variant === "horizontal" && "flex-row",
      )}
    >
      <div
        className={cn(
          "relative aspect-video overflow-hidden",
          variant === "feature" && "md:aspect-[16/10] md:w-3/5",
          variant === "horizontal" && "w-32 shrink-0 sm:w-40",
        )}
      >
        <img
          src={item.thumbnail}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
        {showPlayIcon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-neon-pink/90 text-neon-pink-foreground shadow-neon transition-transform duration-300 group-hover:scale-110">
              <Play className="h-5 w-5 fill-current" />
            </span>
          </div>
        )}
        {dur && (
          <span className="absolute bottom-2 right-2 rounded bg-background/85 px-1.5 py-0.5 text-[11px] font-semibold tabular-nums">
            {dur}
          </span>
        )}
        {item.trending && (
          <div className="absolute left-2 top-2">
            <TrendingBadge label={item.trending} />
          </div>
        )}
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col gap-1.5 p-3",
          variant === "feature" && "md:p-6",
          variant === "horizontal" && "p-3",
        )}
      >
        <div className="flex items-center gap-2">
          <CategoryTag to={hubTo(item.category)} label={item.categoryLabel} />
          {item.status && <StatusBadge status={item.status} />}
        </div>
        <h3
          className={cn(
            "font-display font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-neon-pink",
            variant === "feature" ? "text-xl sm:text-2xl md:text-3xl" : "text-base sm:text-lg",
            variant === "horizontal" && "text-sm",
          )}
        >
          {item.cardHeadline ?? item.title}
        </h3>
        {variant !== "horizontal" && (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {item.cardExcerpt ?? item.excerpt}
          </p>
        )}
        <div className="mt-auto flex items-center gap-2 pt-1 text-xs text-muted-foreground">
          <time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time>
          {"readingTime" in item && (item as any).readingTime && (
            <>
              <span>·</span>
              <span>{(item as any).readingTime} read</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
