import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { Newsletter } from "@/components/newsletter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GTA6VideoHub — Independent GTA VI Fan Media" },
      {
        name: "description",
        content:
          "GTA6VideoHub.com is an independent fan-operated media website covering GTA VI videos, clips, news and everything Leonida.",
      },
      { property: "og:title", content: "About GTA6VideoHub — Independent GTA VI Fan Media" },
      { property: "og:description", content: "Independent fan-operated GTA VI media website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <LegalPage
        title="About GTA6VideoHub"
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      >
        <p>
          GTA6VideoHub.com is an independent, fan-operated media website dedicated to Grand Theft
          Auto VI. Our mission is to be the place to follow GTA VI — a video-first destination for
          trailers, gameplay, viral clips, breaking news, characters, vehicles, locations and guides
          from across the state of Leonida.
        </p>
        <p>
          We are{" "}
          <strong>
            not affiliated with, endorsed by, or sponsored by Rockstar Games or Take-Two Interactive
          </strong>
          . Grand Theft Auto, GTA, GTA VI and all related trademarks and properties belong to their
          respective owners.
        </p>
        <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
          What we do
        </h2>
        <p>
          We curate and embed authorized, public video content from original platforms (YouTube,
          TikTok, X) and surround it with original editorial commentary and context. We do not
          download or rehost creators' videos. Where we reference news, we attribute the source.
        </p>
        <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
          Editorial standards
        </h2>
        <p>
          We clearly distinguish official information from rumors, leaks, community speculation and
          editorial opinion. We never present an unverified rumor as confirmed fact, and we do not
          fabricate game details, release dates, view counts or ratings. See our{" "}
          <a href="/editorial-policy" className="text-neon-cyan hover:underline">
            Editorial Policy
          </a>{" "}
          for more.
        </p>
        <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
          Contact
        </h2>
        <p>
          Tips, corrections or partnership inquiries? Visit our{" "}
          <a href="/contact" className="text-neon-cyan hover:underline">
            Contact
          </a>{" "}
          page.
        </p>
      </LegalPage>
      <div className="mx-auto max-w-7xl px-4 pb-12">
        <Newsletter />
      </div>
    </>
  );
}
