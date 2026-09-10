import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "GTA VI News — Latest From Leonida | GTA6VideoHub" },
      {
        name: "description",
        content:
          "Breaking GTA VI news and updates from across Leonida. We clearly separate official information from rumor and community speculation.",
      },
      { property: "og:title", content: "GTA VI News — Latest From Leonida | GTA6VideoHub" },
      {
        property: "og:description",
        content: "Breaking GTA VI news, clearly separating official info from rumor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <Outlet />,
});
