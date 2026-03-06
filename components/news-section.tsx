import Link from "next/link";
import { PostSummary } from "@/lib/posts";

interface NewsSectionProps {
  posts: PostSummary[];
}

export default function NewsSection({ posts }: NewsSectionProps) {
  return (
    <section className="relative z-10 bg-black py-16 text-white" id="news">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4 border-b border-gray-800 pb-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Latest News</h2>
            <p className="mt-2 text-sm text-gray-400">Recent posts from the OpenPrinting blog.</p>
          </div>
          <Link href="/news" className="text-sm text-blue-300 hover:text-blue-200">
            View all posts
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((item) => {
            const href = `/${encodeURIComponent(item.slug)}`;
            return (
            <Link
              key={item.slug}
              href={href}
              className="block cursor-pointer rounded-md border border-gray-800 bg-gray-950 p-5 transition-colors hover:border-gray-700 hover:bg-gray-900/70"
            >
              <article>
                <h3 className="text-lg font-semibold leading-snug text-white">{item.title}</h3>

                <div className="mt-2 text-xs text-gray-400">
                  <span>{item.author}</span>
                  {item.date && <span> • {item.date}</span>}
                </div>

                <p className="mt-4 text-sm text-gray-300 line-clamp-4">{item.excerpt}</p>
              </article>
            </Link>
          )})}
        </div>
      </div>
    </section>
  );
}
