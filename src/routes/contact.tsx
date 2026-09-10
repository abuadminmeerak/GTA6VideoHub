import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LegalPage } from "@/components/legal-page";
import { Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact GTA6VideoHub — Tips, Corrections & Inquiries" },
      {
        name: "description",
        content:
          "Get in touch with GTA6VideoHub.com for news tips, corrections, creator attribution or partnership inquiries.",
      },
      { property: "og:title", content: "Contact GTA6VideoHub" },
      { property: "og:description", content: "Tips, corrections and inquiries for GTA6VideoHub." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <LegalPage title="Contact" crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}>
      <p>
        Got a GTA VI tip, a correction, a creator attribution request, or a partnership inquiry?
        We'd love to hear from you.
      </p>
      {sent ? (
        <div className="flex items-center gap-2 rounded-lg border border-neon-cyan/40 bg-neon-cyan/5 p-4 text-neon-cyan">
          <Check className="h-5 w-5" /> Thanks — your message has been noted. (Demo form; connect a
          form integration to receive submissions.)
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-4"
        >
          <div>
            <label className="mb-1 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Name
            </label>
            <input
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-pink focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Email
            </label>
            <input
              required
              type="email"
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-pink focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Subject
            </label>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:border-neon-pink focus:outline-none">
              <option>News tip</option>
              <option>Correction</option>
              <option>Creator attribution / takedown</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              required
              rows={5}
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-pink focus:outline-none"
              placeholder="Tell us what's on your mind…"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-vice-gradient px-6 py-3 text-sm font-bold uppercase tracking-wide text-neon-pink-foreground transition-transform hover:scale-[1.02] hover:shadow-neon"
          >
            Send message
          </button>
        </form>
      )}
    </LegalPage>
  );
}
