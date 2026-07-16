import Image from "next/image";
import Link from "next/link";
import { unsplash, FOOD_IMAGES } from "@/lib/images";
import { STATS, HOW_IT_WORKS } from "@/lib/data/site-content";
import { HeartHandshake, Leaf, Users2 } from "lucide-react";

export const metadata = {
  title: "About — SharePlate",
  description: "Why SharePlate exists and how it connects surplus food with people nearby across Bangladesh.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-harvest-900 py-16 text-white">
        <div className="container-page relative grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-turmeric-300">Our story</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight">
              Extra food is not waste — it's a meal that hasn't found its person yet.
            </h1>
            <p className="mt-4 text-harvest-100">
              SharePlate started with a simple frustration: restaurants throwing out trays of
              biryani at closing time while families a few streets away went without dinner.
              We built a place where that gap closes in minutes, not days.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card shadow-2xl">
            <Image src={unsplash(FOOD_IMAGES.community[9], 900, 700)} alt="Volunteers organizing food donations" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="card-surface p-6 text-center">
            <Leaf className="mx-auto h-8 w-8 text-harvest-600" />
            <h3 className="mt-3 font-display text-lg font-semibold text-paper-900">Less waste</h3>
            <p className="mt-2 text-sm text-paper-600">Good food, cooked with real ingredients and effort, reaches a plate instead of a bin.</p>
          </div>
          <div className="card-surface p-6 text-center">
            <Users2 className="mx-auto h-8 w-8 text-harvest-600" />
            <h3 className="mt-3 font-display text-lg font-semibold text-paper-900">Stronger neighborhoods</h3>
            <p className="mt-2 text-sm text-paper-600">Restaurants, home cooks, and neighbors build a direct, recurring relationship.</p>
          </div>
          <div className="card-surface p-6 text-center">
            <HeartHandshake className="mx-auto h-8 w-8 text-harvest-600" />
            <h3 className="mt-3 font-display text-lg font-semibold text-paper-900">Dignity, not charity</h3>
            <p className="mt-2 text-sm text-paper-600">Listings look and feel like any local marketplace — no forms, no means-testing.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <h2 className="text-center font-display text-3xl font-semibold text-paper-900">How SharePlate works</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.title} className="text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-turmeric-100 font-display text-lg font-bold text-turmeric-700">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-paper-900">{step.title}</h3>
                <p className="mt-2 text-sm text-paper-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-harvest-700 py-14 text-white">
        <div className="container-page grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-bold sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-harvest-100">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16 text-center">
        <h2 className="font-display text-2xl font-semibold text-paper-900">Want to be part of it?</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-paper-600">
          Whether you run a kitchen or just cooked too much rice tonight, there's a place for
          you on SharePlate.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/register" className="btn-primary">Create a free account</Link>
          <Link href="/explore" className="btn-secondary">Browse listings</Link>
        </div>
      </section>
    </div>
  );
}
