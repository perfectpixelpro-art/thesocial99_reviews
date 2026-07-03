interface Props {
  title?: string;
  children: React.ReactNode;
}

export function QuickAnswerBox({ title = "Quick answer", children }: Props) {
  return (
    <aside
      aria-label="Quick answer"
      className="rounded-2xl border-l-4 border-primary bg-tint/60 p-5 md:p-6"
    >
      <div className="text-xs font-[650] uppercase tracking-wider text-primary">
        {title}
      </div>
      <div className="mt-2 text-[1.02rem] leading-7 text-ink">{children}</div>
    </aside>
  );
}
