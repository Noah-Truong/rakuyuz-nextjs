"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  fetchAnnotatedPosts,
  formatWpDate,
  isWpConfigured,
  NEWS_CATEGORY_META,
  MOCK_NEWS_POSTS,
  type WpPost,
} from "@/lib/wordpress";

export function NewsTicker() {
  const [posts, setPosts] = useState<WpPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isWpConfigured()) {
      setPosts(MOCK_NEWS_POSTS.slice(0, 5));
      setLoading(false);
      return;
    }
    fetchAnnotatedPosts(5)
      .then(setPosts)
      .catch(() => setPosts(MOCK_NEWS_POSTS.slice(0, 5)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white border-b border-slate-200">
      <div className="container-custom">
        <div className="py-3 space-y-0">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-2 animate-pulse"
                >
                  <div className="h-3 w-20 rounded bg-slate-200 shrink-0" />
                  <div className="h-5 w-16 rounded-full bg-slate-200 shrink-0" />
                  <div className="h-3 w-full max-w-xs rounded bg-slate-200" />
                </div>
              ))
            : posts.map((post, i) => {
                const meta = post.categorySlug
                  ? NEWS_CATEGORY_META[post.categorySlug]
                  : NEWS_CATEGORY_META.info;

                return (
                  <a
                    key={post.id}
                    href={post.link === "#" ? "/news" : post.link}
                    target={post.link.startsWith("http") ? "_blank" : undefined}
                    rel={post.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 group hover:bg-slate-50 -mx-4 px-4 rounded transition-colors"
                  >
                    <time className="text-xs text-slate-400 tabular-nums shrink-0 w-24">
                      {formatWpDate(post.date)}
                    </time>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium shrink-0 ${meta.badgeClass}`}
                    >
                      {meta.label}
                    </span>
                    <span
                      className="text-sm text-slate-700 group-hover:text-accent-600 transition-colors line-clamp-1"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </a>
                );
              })}
        </div>

        {/* View all */}
        <div className="pb-3 flex justify-end">
          <Link
            href="/news"
            className="text-xs text-accent-600 hover:text-accent-700 font-medium inline-flex items-center gap-1 transition-colors"
          >
            すべてのニュースを見る
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
