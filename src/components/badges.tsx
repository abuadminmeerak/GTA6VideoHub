import { Link } from "@tanstack/react-router";
import { type TrendingLabel, type InfoStatus, statusLabel } from "@/lib/content";
import { cn } from "@/lib/utils";

const trendingStyles: Record<TrendingLabel, string> = {
  TRENDING: "bg-neon-pink text-neon-pink-foreground",
  NEW: "bg-neon-cyan text-background",
  BREAKING: "bg-destructive text-destructive-foreground",
  "MOST WATCHED": "bg-sunset text-background",
  "EDITOR'S PICK": "bg-neon-purple text-neon-pink-foreground",
  VIRAL: "bg-neon-pink text-neon-pink-foreground",
};

export function TrendingBadge({ label }: { label: TrendingLabel }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-neon",
        trendingStyles[label],
        (label === "TRENDING" || label === "VIRAL") && "animate-trend-pulse",
      )}
    >
      {label === "TRENDING" && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
      {label}
    </span>
  );
}

export function StatusBadge({ status }: { status?: InfoStatus }) {
  if (!status) return null;
  const label = statusLabel(status);
  const styles: Record<InfoStatus, string> = {
    official: "border-neon-cyan/60 text-neon-cyan",
    rumor: "border-sunset/60 text-sunset",
    leak: "border-destructive/60 text-destructive",
    community: "border-muted-foreground text-muted-foreground",
    editorial: "border-neon-purple/60 text-neon-purple",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
        styles[status],
      )}
    >
      {label}
    </span>
  );
}

export function CategoryTag({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="text-[11px] font-bold uppercase tracking-widest text-neon-pink hover:text-glow-pink"
    >
      {label}
    </Link>
  );
}
