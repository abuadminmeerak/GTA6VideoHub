import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Explore Leonida — GTA VI Locations & Map | GTA6VideoHub" },
      {
        name: "description",
        content:
          "Explore the state of Leonida: Vice City, the Leonida Keys, Port Gellhorn, Ambrosia, Mount Kalaga and more. Each location gets its own SEO page.",
      },
      { property: "og:title", content: "Explore Leonida — GTA VI Locations | GTA6VideoHub" },
      { property: "og:description", content: "Explore the state of Leonida and its locations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <Outlet />,
});
