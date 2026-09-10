import { useState } from "react";
import { Mail, Check } from "lucide-react";

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Placeholder: connect to form tracking integration when ready.
    setDone(true);
  };

  if (compact) {
    return (
      <form onSubmit={submit} className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-pink focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-md bg-neon-pink px-4 py-2 text-sm font-bold uppercase tracking-wide text-neon-pink-foreground transition-colors hover:shadow-neon"
        >
          {done ? <Check className="h-4 w-4" /> : "Join"}
        </button>
      </form>
    );
  }

  return (
    <section className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-12">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-neon-pink/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-neon-cyan/15 blur-3xl" />
      <div className="relative mx-auto max-w-2xl text-center">
        <Mail className="mx-auto mb-4 h-8 w-8 text-neon-pink" />
        <h2 className="font-display text-3xl font-bold uppercase leading-none tracking-tight text-glow-pink sm:text-4xl">
          Don't miss what happens in Leonida.
        </h2>
        <p className="mt-4 text-sm text-muted-foreground sm:text-base">
          Get the biggest GTA VI videos, news, discoveries and viral moments delivered straight to
          your inbox.
        </p>
        {done ? (
          <p className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-neon-cyan">
            <Check className="h-4 w-4" /> You're on the list. Watch your inbox for Leonida updates.
          </p>
        ) : (
          <form onSubmit={submit} className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              aria-label="Email address"
              className="flex-1 rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-pink focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-md bg-vice-gradient px-6 py-3 text-sm font-bold uppercase tracking-wide text-neon-pink-foreground transition-transform hover:scale-[1.02] hover:shadow-neon"
            >
              Join the Hub
            </button>
          </form>
        )}
        <p className="mt-3 text-xs text-muted-foreground">
          By joining you agree to receive emails from GTA6VideoHub. No spam. Unsubscribe anytime.
          See our{" "}
          <a href="/privacy-policy" className="underline hover:text-neon-cyan">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
