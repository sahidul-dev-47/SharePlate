import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data/site-content";
import { CalendarDays, Clock } from "lucide-react";

export const metadata = {
  title: "Blog — SharePlate",
  description: "Stories and practical guides on reducing food waste in Bangladesh.",
};

export default function BlogPage() {
  return (
    <div className="container-page py-14">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-3xl font-semibold text-paper-900">From the SharePlate blog</h1>
        <p className="mt-2 text-sm text-paper-600">Guides and stories on cutting food waste, one listing at a time.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card-surface flex flex-col p-6 transition-transform hover:-translate-y-0.5">
            <div className="flex items-center gap-3 text-xs text-paper-500">
              <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readMins} min read</span>
            </div>
            <h2 className="mt-3 font-display text-xl font-semibold text-paper-900">{post.title}</h2>
            <p className="mt-2 flex-1 text-sm text-paper-600">{post.excerpt}</p>
            <span className="mt-4 text-sm font-semibold text-harvest-700">Read article →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
