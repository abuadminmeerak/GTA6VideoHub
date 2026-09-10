import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/characters")({
  head: () => ({
    meta: [
      { title: "GTA VI Characters — Lucia, Jason & More | GTA6VideoHub" },
      {
        name: "description",
        content:
          "Meet the characters of GTA VI, including Lucia Caminos and Jason Duval. An expandable roster updated as Rockstar reveals more.",
      },
      { property: "og:title", content: "GTA VI Characters — Lucia, Jason & More | GTA6VideoHub" },
      { property: "og:description", content: "Meet the characters of GTA VI. Expandable roster." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <Outlet />,
});
