import { createFileRoute } from "@tanstack/react-router";
import { vehicles } from "@/lib/content";
import { ContentCard } from "@/components/content-card";
import { HubLayout } from "@/components/hub-layout";
import { Newsletter } from "@/components/newsletter";

export const Route = createFileRoute("/vehicles/")({
  component: VehiclesHub,
});

function VehiclesHub() {
  return (
    <HubLayout
      crumbs={[{ label: "Home", to: "/" }, { label: "Vehicles" }]}
      kicker="Ride"
      title="GTA VI Vehicles"
      intro="A running catalog of vehicles identifiable in officially released GTA VI media. Specific in-game names and stats remain unconfirmed until launch — we don't fabricate them."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((v) => (
          <ContentCard key={v.slug} item={v} />
        ))}
      </div>
      <div className="mt-12">
        <Newsletter />
      </div>
    </HubLayout>
  );
}
