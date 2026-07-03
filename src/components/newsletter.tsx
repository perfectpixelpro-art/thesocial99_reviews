import { useState } from "react";
import { Mail } from "lucide-react";

export function Newsletter({ pageSlug: _pageSlug }: { pageSlug: string }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-2 text-sm font-[650] text-ink">
        <Mail size={16} className="text-primary" />
        New comparisons, monthly
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        We publish one honest breakdown per month. No spam.
      </p>
      {sent ? (
        <p className="mt-4 rounded-xl bg-tint px-4 py-3 text-sm text-primary">
          Thanks — we'll be in touch.
        </p>
      ) : (
        <form
          className="mt-4 flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setSent(true);
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@yourbusiness.com"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            type="submit"
            className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
