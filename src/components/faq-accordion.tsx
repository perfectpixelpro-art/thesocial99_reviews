import type { FAQ } from "@/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQAccordion({
  faqs,
  idPrefix = "faq",
}: {
  faqs: FAQ[];
  idPrefix?: string;
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((f, i) => (
        <AccordionItem
          key={`${idPrefix}-${i}`}
          value={`${idPrefix}-${i}`}
          className="border-border"
        >
          <AccordionTrigger className="text-left text-[0.98rem] font-[650] text-ink hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-[0.95rem] leading-7 text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
