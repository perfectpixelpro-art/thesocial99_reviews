import { Link } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import { DisclosureBanner } from "./disclosure-banner";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display text-[15px] font-[650] tracking-tight text-ink">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground text-xs font-[650]">
                99
              </span>
              <span>
                thesocial99<span className="text-primary">reviews</span>.com
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              Honest, first-party reviews and comparisons of{" "}
              <a
                href={SITE.parentUrl}
                className="text-primary underline underline-offset-2"
                target="_blank"
                rel="noopener"
              >
                The Social 99
              </a>{" "}
              - the done-for-you social media service for US small businesses.
            </p>
          </div>

          <div>
            <div className="text-xs font-[650] uppercase tracking-wider text-ink">
              Read
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  to="/the-social-99-review"
                  className="text-ink/80 hover:text-primary"
                >
                  The Social 99 Review
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-ink/80 hover:text-primary">
                  All comparisons
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/the-social-99-vs-buffer"
                  className="text-ink/80 hover:text-primary"
                >
                  vs Buffer
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/vs-hootsuite"
                  className="text-ink/80 hover:text-primary"
                >
                  vs Hootsuite
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-[650] uppercase tracking-wider text-ink">
              The Social 99
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={SITE.parentUrl}
                  target="_blank"
                  rel="noopener"
                  className="text-ink/80 hover:text-primary"
                >
                  Main site
                </a>
              </li>
              <li>
                <a
                  href={SITE.bookUrl}
                  target="_blank"
                  rel="noopener"
                  className="text-ink/80 hover:text-primary"
                >
                  Book a call
                </a>
              </li>
              <li>
                <a
                  href={SITE.trialUrl}
                  target="_blank"
                  rel="noopener"
                  className="text-ink/80 hover:text-primary"
                >
                  Free trial
                </a>
              </li>
            </ul>
          </div>
        </div>

      
      </div>
    </footer>
  );
}
