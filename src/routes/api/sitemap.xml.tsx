import { createFileRoute } from "@tanstack/react-router";
import { allContent } from "@/lib/content";

export const Route = createFileRoute("/api/sitemap/xml")({
  server: {
    handlers: {
      GET: () => {
        const base = "https://gta6videohub.com";
        const staticRoutes = [
          "",
          "/videos",
          "/clips",
          "/news",
          "/guides",
          "/characters",
          "/vehicles",
          "/locations",
          "/trailers",
          "/trending",
          "/search",
          "/about",
          "/contact",
          "/editorial-policy",
          "/privacy-policy",
          "/terms",
          "/dmca",
        ];

        const hubPath: Record<string, string> = {
          video: "/videos",
          clip: "/clips",
          news: "/news",
          guide: "/guides",
          character: "/characters",
          vehicle: "/vehicles",
          location: "/locations",
          trailer: "/trailers",
        };

        const urls: { loc: string; priority: string; lastmod?: string }[] = [
          ...staticRoutes.map((r) => ({ loc: `${base}${r}`, priority: r === "" ? "1.0" : "0.8" })),
          ...allContent.map((c) => ({
            loc: `${base}${hubPath[c.category]}/${c.slug}`,
            priority: "0.7",
            lastmod: c.updatedAt ?? c.publishedAt,
          })),
        ];

        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <priority>${u.priority}</priority>${
        u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ""
      }\n  </url>`,
  )
  .join("\n")}
</urlset>`;

        return new Response(body, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
  component: () => null,
});
