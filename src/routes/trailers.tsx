import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/trailers")({
  head: () => ({
    meta: [
      { title: "GTA VI Trailers — Every Official Drop | GTA6VideoHub" },
      {
        name: "description",
        content:
          "Every official GTA VI trailer, embedded from Rockstar Games with original editorial breakdowns and commentary.",
      },
      { property: "og:title", content: "GTA VI Trailers — Every Official Drop | GTA6VideoHub" },
      {
        property: "og:description",
        content: "Every official GTA VI trailer with editorial breakdowns.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <Outlet />,
});
