import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/dmca")({
  head: () => ({
    meta: [
      { title: "DMCA / Copyright — GTA6VideoHub" },
      {
        name: "description",
        content:
          "How to submit a DMCA takedown notice or copyright claim to GTA6VideoHub.com, an independent GTA VI fan media site.",
      },
      { property: "og:title", content: "DMCA / Copyright — GTA6VideoHub" },
      { property: "og:description", content: "DMCA takedown and copyright claim process." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DmcaPage,
});

function DmcaPage() {
  return (
    <LegalPage
      title="DMCA / Copyright"
      crumbs={[{ label: "Home", to: "/" }, { label: "DMCA / Copyright" }]}
    >
      <p>
        GTA6VideoHub.com respects intellectual property rights. We primarily embed and link to
        content hosted on third-party platforms rather than rehosting it, and we attribute sources.
      </p>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
        Reporting infringement
      </h2>
      <p>
        If you believe content on this site infringes your copyright, please send a notice
        including:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Identification of the copyrighted work.</li>
        <li>The exact URL of the allegedly infringing material on this site.</li>
        <li>Your contact information.</li>
        <li>A statement that you have a good-faith belief the use is unauthorized.</li>
        <li>
          A statement, under penalty of perjury, that the information is accurate and you are
          authorized to act.
        </li>
        <li>Your physical or electronic signature.</li>
      </ul>
      <p>
        Submit notices via our{" "}
        <a href="/contact" className="text-neon-cyan hover:underline">
          Contact
        </a>{" "}
        page with the subject "DMCA Notice". We will review and respond to valid notices promptly.
      </p>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
        Embedded content
      </h2>
      <p>
        For content embedded from platforms such as YouTube, TikTok or X, the hosting platform
        controls the media. Takedown requests for embedded content are typically most effective when
        directed to the original platform.
      </p>
    </LegalPage>
  );
}
