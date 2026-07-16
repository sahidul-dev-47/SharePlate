import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="container-page py-16">
      <div className="relative overflow-hidden rounded-card bg-harvest-800 px-6 py-12 text-center text-white sm:px-12">
        <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-turmeric-400/20 blur-3xl" />
        <Store className="mx-auto h-10 w-10 text-turmeric-300" />
        <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-semibold">
          Run a restaurant, bakery, or shop?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-harvest-100">
          Join for free and turn your daily surplus into meals for people nearby —
          verified donor badges build trust with your neighborhood in minutes.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link href="/register" className="btn-primary bg-white text-harvest-800 hover:bg-paper-100">
            Create a free account <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/about" className="btn-secondary bg-transparent text-white ring-white/30 hover:bg-white/10">
            Learn how it works
          </Link>
        </div>
      </div>
    </section>
  );
}
