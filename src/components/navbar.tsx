import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CTAButton } from "./cta-button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/the-social-99-review", label: "Review" },
  { to: "/blog", label: "Comparisons" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-[15px] font-[650] tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground text-xs font-[650]">
            99
          </span>
          <span>
            thesocial99<span className="text-primary">reviews</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 hover:bg-tint hover:text-primary transition-colors"
              activeProps={{ className: "text-primary bg-tint" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

      

        <button
          type="button"
          aria-label="Toggle navigation"
          className="md:hidden rounded-lg p-2 text-ink hover:bg-tint"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-border/70 transition-[max-height]",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="container-page flex flex-col gap-1 py-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-tint hover:text-primary"
              activeProps={{ className: "text-primary bg-tint" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        
        </nav>
      </div>
    </header>
  );
}
