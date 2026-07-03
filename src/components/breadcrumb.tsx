import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <Fragment key={i}>
              <li>
                {c.to && !last ? (
                  <Link to={c.to} className="hover:text-primary">
                    {c.label}
                  </Link>
                ) : (
                  <span className={last ? "text-ink font-medium" : ""}>
                    {c.label}
                  </span>
                )}
              </li>
              {!last && <ChevronRight size={14} className="text-border" />}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
