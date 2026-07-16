"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/data/site-content";

export default function FaqPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = FAQS.slice(0, 4);

  return (
    <section className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-turmeric-600">Good to know</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-paper-900">Common questions</h2>
      </div>

      <div className="mx-auto mt-8 max-w-2xl divide-y divide-paper-200 rounded-card border border-paper-200 bg-white">
        {items.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={open}
              >
                <span className="text-sm font-semibold text-paper-900">{item.q}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-harvest-600 transition-transform ${open ? "rotate-180" : ""}`} />
              </button>
              {open && <p className="px-5 pb-4 text-sm text-paper-600">{item.a}</p>}
            </div>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <Link href="/help" className="text-sm font-semibold text-harvest-700 hover:underline">
          See all questions →
        </Link>
      </div>
    </section>
  );
}
