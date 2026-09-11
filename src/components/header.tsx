import { Link } from "@tanstack/react-router";
import { Search, TrendingUp } from "lucide-react";
import { useState } from "react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Videos", to: "/videos" },
  { label: "Clips", to: "/clips" },
  { label: "News", to: "/news" },
  { label: "Guides", to: "/guides" },
  { label: "Characters", to: "/characters" },
  { label: "Vehicles", to: "/vehicles" },
  { label: "Locations", to: "/locations" },
  { label: "Trailers", to: "/trailers" },
];

export function SiteLogo({ variant = "header" }: { variant?: "header" | "hero" | "footer" }) {
  const isHero = variant === "hero";
  const isFooter = variant === "footer";

  return (
    <span
      aria-label="GTA 6 VideoHub"
      className={`site-logo font-logo inline-flex items-baseline whitespace-nowrap uppercase leading-none tracking-[-0.025em] ${
        isHero ? "gap-0" : "gap-0"
      }`}
    >
      <span
        className={`${
          isHero ? "text-[clamp(3.4rem,7.5vw,8.5rem)]" : isFooter ? "text-[1.7rem] sm:text-3xl" : "text-[1.25rem] sm:text-[1.65rem]"
        } text-foreground [-webkit-text-stroke:3px_#05030b] [paint-order:stroke_fill] [text-shadow:3px_4px_0_rgba(0,0,0,0.8)]`}
      >
        GTA
      </span>
      <span
        className={`${
          isHero ? "text-[clamp(4.8rem,10vw,11rem)]" : isFooter ? "text-[3.5rem] sm:text-5xl" : "text-[2.5rem] sm:text-[2.65rem]"
        } bg-vice-gradient bg-clip-text leading-[0.64] text-transparent [-webkit-text-stroke:3px_#05030b] [paint-order:stroke_fill] [filter:drop-shadow(3px_4px_2px_rgba(255,20,170,0.38))]`}
      >
        6
      </span>
      <span
        className={`${
          isHero ? "text-[clamp(3.4rem,7.5vw,8.5rem)]" : isFooter ? "text-[1.55rem] sm:text-2xl" : "text-[1.05rem] sm:text-[1.25rem]"
        } text-foreground [-webkit-text-stroke:3px_#05030b] [paint-order:stroke_fill] [text-shadow:3px_4px_0_rgba(0,0,0,0.8)]`}
      >
        VIDEO
      </span>
      <span
        className={`${
          isHero ? "text-[clamp(3.4rem,7.5vw,8.5rem)]" : isFooter ? "text-[1.55rem] sm:text-2xl" : "text-[1.05rem] sm:text-[1.25rem]"
        } bg-vice-gradient bg-clip-text text-transparent [-webkit-text-stroke:3px_#05030b] [paint-order:stroke_fill] [filter:drop-shadow(3px_4px_2px_rgba(255,20,170,0.38))]`}
      >
        HUB
      </span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[68px]">
        {/* Logo */}
        <Link to="/" className="mr-2 flex min-w-0 shrink-0 items-center lg:mr-4" onClick={() => setOpen(false)}>
          <SiteLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.to === "/" ? (
              <Link
                key={item.to}
                to={item.to}
                className="rounded px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-neon-pink"
                activeProps={{ className: "text-neon-pink" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="rounded px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-neon-pink"
                activeProps={{ className: "text-neon-pink" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-1.5">
          <Link
            to="/search"
            className="hidden h-9 w-56 items-center gap-2 rounded-full border border-border bg-background/55 px-3 text-sm text-muted-foreground transition-colors hover:border-neon-cyan hover:text-foreground xl:flex"
            aria-label="Search videos, news, and more"
          >
            <Search className="h-4 w-4 shrink-0" />
            <span>Search videos, news, and more...</span>
          </Link>
          <Link
            to="/trending"
            className="hidden items-center gap-1.5 rounded-full border border-neon-pink/40 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-neon-pink transition-colors hover:bg-neon-pink/10 sm:flex"
          >
            <TrendingUp className="h-3.5 w-3.5 animate-trend-pulse" />
            Trending
          </Link>
          <Link
            to="/search"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-neon-cyan hover:text-neon-cyan xl:hidden"
          >
            <Search className="h-4 w-4" />
          </Link>
          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded border border-border text-foreground lg:hidden"
          >
            <span className="flex flex-col gap-1">
              <span
                className={`h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border bg-background px-4 py-3 lg:hidden">
          <div className="grid grid-cols-2 gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-card hover:text-neon-pink"
                activeProps={{ className: "text-neon-pink bg-card" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/trending"
              onClick={() => setOpen(false)}
              className="flex items-center gap-1.5 rounded px-3 py-2.5 text-sm font-bold uppercase text-neon-pink"
            >
              <TrendingUp className="h-3.5 w-3.5" /> Trending
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
