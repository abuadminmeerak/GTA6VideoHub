import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title: "GTA VI Guides — Tips, Maps & Explainers | GTA6VideoHub" },
      {
        name: "description",
        content:
          "Evergreen GTA VI guides covering beginners, vehicles, weapons, missions, money, properties, the map, secrets, easter eggs, multiplayer, settings and tips.",
      },
      { property: "og:title", content: "GTA VI Guides — Tips, Maps & Explainers | GTA6VideoHub" },
      { property: "og:description", content: "Evergreen GTA VI guides and explainers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <Outlet />,
});
