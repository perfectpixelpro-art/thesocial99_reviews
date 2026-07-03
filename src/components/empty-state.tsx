import { Inbox } from "lucide-react";

interface Props {
  title: string;
  description?: string;
  action?: React.ReactNode;
  icon?: React.ReactNode;
}

export function EmptyState({ title, description, action, icon }: Props) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-surface/60 p-10 text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-tint text-primary">
        {icon ?? <Inbox size={20} />}
      </div>
      <h3 className="mt-4 text-base font-[650] text-ink">{title}</h3>
      {description && (
        <p className="mx-auto mt-1.5 max-w-md text-sm text-muted-foreground">
          {description}
        </p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
