import { TESTIMONIALS } from "@/lib/data/site-content";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-paper-100 py-16">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-turmeric-600">Voices from the community</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-paper-900">
            People already sharing more, wasting less
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="card-surface flex h-full flex-col p-6">
              <Quote className="h-6 w-6 text-turmeric-400" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-paper-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 border-t border-paper-100 pt-4">
                <p className="text-sm font-semibold text-paper-900">{t.name}</p>
                <p className="text-xs text-paper-500">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
