import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/clips")({
  head: () => ({
    meta: [
      { title: "GTA VI Viral Clips — Short Videos & Moments | GTA6VideoHub" },
      {
        name: "description",
        content:
          "Short, viral GTA VI clips and moments embedded from original platforms. We do not rehost creators' videos.",
      },
      { property: "og:title", content: "GTA VI Viral Clips | GTA6VideoHub" },
      {
        property: "og:description",
        content: "Short, viral GTA VI clips embedded from original platforms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <Outlet />,
});
