import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data/site-content";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  return { title: post ? `${post.title} — SharePlate Blog` : "Blog — SharePlate" };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="container-page max-w-2xl py-14">
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-paper-600 hover:text-harvest-700">
        <ArrowLeft className="h-4 w-4" /> Back to blog
      </Link>

      <div className="mt-5 flex items-center gap-3 text-xs text-paper-500">
        <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
        <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readMins} min read</span>
      </div>

      <h1 className="mt-3 font-display text-3xl font-semibold leading-snug text-paper-900">{post.title}</h1>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-paper-700">
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 rounded-card bg-harvest-50 p-6 text-center">
        <p className="font-display text-lg font-semibold text-paper-900">Have surplus food tonight?</p>
        <Link href="/items/add" className="btn-primary mt-4 inline-flex">Post a listing</Link>
      </div>
    </article>
  );
}
