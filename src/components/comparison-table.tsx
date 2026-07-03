import type { ComparisonRow } from "@/data/comparisons";
import { Check, Minus } from "lucide-react";

interface Props {
  rows: ComparisonRow[];
  usLabel: string;
  themLabel: string;
  caption?: string;
}

function cellRender(value: string) {
  if (value.toLowerCase().startsWith("yes")) {
    return (
      <span className="inline-flex items-center gap-1.5 text-success">
        <Check size={16} strokeWidth={2.5} /> {value}
      </span>
    );
  }
  if (value.toLowerCase() === "n/a" || value.toLowerCase().startsWith("no ")) {
    return (
      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
        <Minus size={16} /> {value}
      </span>
    );
  }
  return value;
}

export function ComparisonTable({ rows, usLabel, themLabel, caption }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          {caption && (
            <caption className="sr-only">{caption}</caption>
          )}
          <thead>
            <tr className="bg-tint/60">
              <th className="w-[32%] px-4 py-3 text-left text-xs font-[650] uppercase tracking-wider text-primary">
                Feature
              </th>
              <th className="px-4 py-3 text-left text-xs font-[650] uppercase tracking-wider text-primary">
                {usLabel}
              </th>
              <th className="px-4 py-3 text-left text-xs font-[650] uppercase tracking-wider text-muted-foreground">
                {themLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={row.feature}
                className={idx % 2 === 1 ? "bg-surface/50" : "bg-background"}
              >
                <th
                  scope="row"
                  className="px-4 py-3 text-left font-[600] text-ink"
                >
                  {row.feature}
                </th>
                <td className="px-4 py-3 text-ink">{cellRender(row.us)}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  {cellRender(row.them)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
