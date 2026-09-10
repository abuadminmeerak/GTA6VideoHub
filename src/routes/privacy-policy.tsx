import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — GTA6VideoHub" },
      {
        name: "description",
        content:
          "How GTA6VideoHub.com collects, uses and protects visitor data, including newsletter email addresses and analytics.",
      },
      { property: "og:title", content: "Privacy Policy — GTA6VideoHub" },
      { property: "og:description", content: "How GTA6VideoHub handles visitor data." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      crumbs={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]}
    >
      <p>Last updated: September 2026.</p>
      <p>
        GTA6VideoHub.com ("we", "us") is an independent fan-operated website. This policy explains
        what data we collect and how we use it.
      </p>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
        Data we collect
      </h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong>Email address</strong> — only if you subscribe to our newsletter.
        </li>
        <li>
          <strong>Contact form submissions</strong> — name, email and message if you contact us.
        </li>
        <li>
          <strong>Analytics data</strong> — aggregate, anonymized traffic metrics (pages viewed,
          referral source, approximate location) via analytics tools.
        </li>
      </ul>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
        How we use it
      </h2>
      <p>
        To send newsletter emails you opted into, respond to your inquiries, and understand site
        performance so we can improve content. We do not sell your personal data.
      </p>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
        Third-party embeds
      </h2>
      <p>
        Video and clip pages embed content from platforms like YouTube, TikTok and X. Those
        platforms may set their own cookies and collect data subject to their own privacy policies.
      </p>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
        Your rights
      </h2>
      <p>
        You can unsubscribe from emails at any time via the link in any email, and you can request
        deletion of your data by contacting us.
      </p>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
        Analytics placeholders
      </h2>
      <p>
        This site is prepared for Google Analytics, Google Search Console, Meta Pixel and TikTok
        Pixel. Tracking IDs are configured as placeholders and are only activated with real, owned
        IDs — we do not insert fake tracking identifiers.
      </p>
    </LegalPage>
  );
}
