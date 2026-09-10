import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/vehicles")({
  head: () => ({
    meta: [
      { title: "GTA VI Vehicles — Cars, Bikes & Boats | GTA6VideoHub" },
      {
        name: "description",
        content:
          "A running catalog of every vehicle spotted in official GTA VI media — muscle cars, superbikes, boats and more.",
      },
      { property: "og:title", content: "GTA VI Vehicles — Cars, Bikes & Boats | GTA6VideoHub" },
      {
        property: "og:description",
        content: "A running catalog of GTA VI vehicles from official media.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <Outlet />,
});
