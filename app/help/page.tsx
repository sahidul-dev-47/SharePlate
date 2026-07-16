"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, LifeBuoy, Mail } from "lucide-react";
import { FAQS } from "@/lib/data/site-content";

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="container-page max-w-3xl py-14">
      <div className="text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-harvest-50 text-harvest-600">
          <LifeBuoy className="h-6 w-6" />
        </span>
        <h1 className="mt-4 font-display text-3xl font-semibold text-paper-900">Help &amp; frequently asked questions</h1>
        <p className="mt-2 text-sm text-paper-600">
          Can't find what you need? <Link href="/contact" className="font-semibold text-harvest-700 hover:underline">Contact us directly</Link>.
        </p>
      </div>

      <div className="mt-10 divide-y divide-paper-200 rounded-card border border-paper-200 bg-white">
        {FAQS.map((item, i) => {
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

      <div className="card-surface mt-10 flex flex-col items-center gap-3 p-8 text-center">
        <Mail className="h-6 w-6 text-harvest-600" />
        <p className="font-display text-lg font-semibold text-paper-900">Still stuck?</p>
        <p className="max-w-sm text-sm text-paper-600">Send us a message and we'll get back within a couple of business days.</p>
        <Link href="/contact" className="btn-primary">Contact support</Link>
      </div>
    </div>
  );
}
