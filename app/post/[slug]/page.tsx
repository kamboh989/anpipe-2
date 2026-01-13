import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ThumbsUp, MessageCircle, Repeat2, ArrowUpRight } from "lucide-react";
import { LINKEDIN_PROFILE_URL, linkedinPosts } from "@/lib/post";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// (optional but recommended) build-time slugs
export function generateStaticParams() {
  return linkedinPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = linkedinPosts.find((p) => p.slug === slug);

 
  const description = post
    ? post.content.replace(/\s+/g, " ").trim().slice(0, 160) + "…"
    : "Read the full post.";

  return {
    
    description,
    alternates: { canonical: `/post/${slug}` },
    keywords: [
      "applied neuroscience",
      "ethical persuasion",
      "buyer behavior",
      "sales psychology",
      "toxic boss immunity",
      "leadership under pressure",
    ],
    openGraph: {
      
      description,
      url: `/post/${slug}`,
    },
  };
}

export default async function PostDetail({ params }: PageProps) {
  const { slug } = await params;

  const post = linkedinPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-2xl font-extrabold text-slate-900">
            Post not found
          </h1>
          <p className="mt-2 text-slate-600">
            Slug mismatch. Check <code className="font-mono">src/lib/post.ts</code>{" "}
            and make sure the post slug exists.
          </p>
          <Link
            href="/post"
            className="mt-6 inline-flex text-pink-700 font-semibold"
          >
            ← Back to posts
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-3xl bg-white ring-1 ring-black/10 shadow-[0_18px_45px_rgba(0,0,0,0.08)] overflow-hidden">
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-black/10">
                  <Image
                    src={post.authorAvatar}
                    alt={post.authorName}
                    fill
                    className="object-cover"
                    sizes="48px"
                    priority
                  />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900">{post.authorName}</p>
                  <p className="text-sm text-slate-600">{post.dateLabel}</p>
                </div>
              </div>

              <a
                href={post.postUrl || LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                View on LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

         

            {/* Content */}
            <p className="mt-5 whitespace-pre-line text-slate-800 leading-relaxed">
              {post.content}
            </p>

            {/* Image */}
            {post.image ? (
              <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/10 bg-slate-50">
                <div className="relative h-[360px] w-full">
                  <Image
                    src={post.image}
                    alt={`${post.authorName} post image`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 700px"
                  />
                </div>
              </div>
            ) : null}

            {/* Metrics */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <a
                href={post.postUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-black/10 hover:bg-slate-50 transition"
              >
                <ThumbsUp className="h-4 w-4" /> {post.likes}
              </a>
              <a
                href={post.postUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-black/10 hover:bg-slate-50 transition"
              >
                <MessageCircle className="h-4 w-4" /> {post.comments}
              </a>
              <a
                href={post.postUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-black/10 hover:bg-slate-50 transition"
              >
                <Repeat2 className="h-4 w-4" /> {post.shares}
              </a>
            </div>

            {/* Footer actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <Link href="/post" className="text-pink-700 font-semibold hover:text-pink-800">
                ← Back to posts
              </Link>

              <a
                href={LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center justify-center
                  rounded-xl px-5 py-3
                  text-sm sm:text-base font-semibold text-white
                  bg-slate-900
                  transition hover:-translate-y-0.5
                "
              >
                Follow on LinkedIn
              </a>
            </div>
          </div>

          <div className="h-[3px] bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400" />
        </div>
      </div>
    </main>
  );
}
