import { HOW_IT_WORKS } from "@/lib/data/site-content";
import { UploadCloud, Search, HandPlatter } from "lucide-react";

const ICONS = [UploadCloud, Search, HandPlatter];

export default function HowItWorks() {
  return (
    <section className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-turmeric-600">How it works</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-paper-900">
          From extra pot to empty plate
        </h2>
      </div>

      <div className="relative mt-12 grid gap-8 md:grid-cols-3">
        <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-paper-200 md:block" />
        {HOW_IT_WORKS.map((step, i) => {
          const Icon = ICONS[i];
          return (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-harvest-600 text-white shadow-md">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-paper-900">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-paper-600">{step.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
