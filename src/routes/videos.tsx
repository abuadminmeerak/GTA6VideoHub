import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "GTA VI Videos — Gameplay, Breakdowns & More | GTA6VideoHub" },
      {
        name: "description",
        content:
          "Watch the latest GTA VI videos: gameplay impressions, trailer breakdowns, map explainers and more from across Leonida.",
      },
      {
        property: "og:title",
        content: "GTA VI Videos — Gameplay, Breakdowns & More | GTA6VideoHub",
      },
      {
        property: "og:description",
        content: "Watch the latest GTA VI videos from across Leonida.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <Outlet />,
});
