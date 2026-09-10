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

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16">
        {/* Logo */}
        <Link to="/" className="flex min-w-0 items-center" onClick={() => setOpen(false)}>
          <span className="flex items-baseline gap-1.5 whitespace-nowrap font-display font-bold uppercase leading-none tracking-[0.04em]">
            <span className="text-lg text-foreground sm:text-2xl">GTA</span>
            <span className="bg-vice-gradient bg-clip-text text-3xl leading-[0.8] text-transparent sm:text-4xl">6</span>
            <span className="text-[0.8rem] text-foreground sm:text-lg">VIDEO</span>
            <span className="bg-vice-gradient bg-clip-text text-[0.8rem] text-transparent sm:text-lg">HUB</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
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
            to="/trending"
            className="hidden items-center gap-1.5 rounded-full border border-neon-pink/40 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-neon-pink transition-colors hover:bg-neon-pink/10 sm:flex"
          >
            <TrendingUp className="h-3.5 w-3.5 animate-trend-pulse" />
            Trending
          </Link>
          <Link
            to="/search"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-neon-cyan hover:text-neon-cyan"
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
