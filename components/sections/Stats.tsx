import { STATS } from "@/lib/data/site-content";

export default function Stats() {
  return (
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
  );
}
