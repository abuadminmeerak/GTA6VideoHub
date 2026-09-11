import { Link } from "@tanstack/react-router";
import { SiteLogo } from "@/components/header";

const FOOTER_NAV = [
  { label: "Videos", to: "/videos" },
  { label: "Clips", to: "/clips" },
  { label: "News", to: "/news" },
  { label: "Guides", to: "/guides" },
  { label: "Characters", to: "/characters" },
  { label: "Vehicles", to: "/vehicles" },
  { label: "Locations", to: "/locations" },
  { label: "Trailers", to: "/trailers" },
];

const LEGAL = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Editorial Policy", to: "/editorial-policy" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms", to: "/terms" },
  { label: "DMCA / Copyright", to: "/dmca" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="inline-flex items-center" aria-label="GTA6VideoHub home">
              <SiteLogo variant="footer" />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              The hub for GTA VI videos, clips, news & everything Leonida. Watch. Discover. Explore
              Leonida.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Explore
            </h3>
            <ul className="mt-3 space-y-2">
              {FOOTER_NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-sm text-foreground/75 hover:text-neon-pink transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Site
            </h3>
            <ul className="mt-3 space-y-2">
              {LEGAL.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-sm text-foreground/75 hover:text-neon-pink transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Follow
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/75 hover:text-neon-cyan transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/75 hover:text-neon-cyan transition-colors"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/75 hover:text-neon-cyan transition-colors"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/75 hover:text-neon-cyan transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/75 hover:text-neon-cyan transition-colors"
                >
                  Reddit
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-card/50 p-4 text-xs leading-relaxed text-muted-foreground">
          <strong className="text-foreground/80">Disclaimer:</strong> GTA6VideoHub.com is an
          independent fan-operated media website and is not affiliated with, endorsed by, or
          sponsored by Rockstar Games or Take-Two Interactive. Grand Theft Auto, GTA, GTA VI and
          related trademarks and properties belong to their respective owners. Third-party videos,
          images, and other media remain the property of their respective owners and creators.
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} GTA6VideoHub.com — Independent fan media.</p>
          <p>Made for the GTA VI community.</p>
        </div>
      </div>
    </footer>
  );
}
