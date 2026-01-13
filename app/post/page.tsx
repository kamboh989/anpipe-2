import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { LINKEDIN_PROFILE_URL, linkedinPosts } from "@/lib/post";
import { ThumbsUp, MessageCircle, Repeat2, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Articles on neuroscience, buyer behavior, ethical persuasion, leadership under pressure, and sales performance.",
  keywords: [
    "neuroscience of sales",
    "buyer psychology",
    "ethical persuasion",
    "sales neuroscience blog",
    "leadership under pressure",
    "decision making neuroscience",
    "trust and influence psychology",
    "sales performance insights",
    "neuroscience articles",
    "NeuroSell blog",
  ],
  alternates: { canonical: "/post" },
  openGraph: {
    title: `Posts | ${site.name}`,
    description:
      "Articles on neuroscience, buyer behavior, ethical persuasion, leadership under pressure, and sales performance.",
    url: `${site.url}/post`,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Posts | ${site.name}`,
    description:
      "Articles on neuroscience, buyer behavior, ethical persuasion, leadership under pressure, and sales performance.",
    images: [site.ogImage],
  },
};

function clampText(text: string, maxChars = 280) {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= maxChars) return t;
  return t.slice(0, maxChars).trimEnd() + "…";
}

function MetricButton({
  href,
  icon,
  label,
  count,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  count: number;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex items-center gap-2
        rounded-lg px-2.5 py-2
        text-sm font-semibold text-slate-700
        hover:bg-slate-50 hover:text-slate-900
        transition
      "
      aria-label={label}
      title={label}
    >
      {icon}
      <span className="tabular-nums">{count}</span>
    </a>
  );
}

export default function PostsPage() {
  const author = {
    name: "Shannon Smith, J.D., M.S.",
    followers: "54.9K Followers",
    tagline:
      "40+ Linkedin Money-Making-Influence Resources I Toxic Boss Immunity I Frequency of INFLUENCE: ETHICAL PERSUASION I $20k Brain-Based Sales System | HarvardX Neuroscience Research I Keynote 🎤 I X-Microsoft I Captain ⛵",
    avatar: "/avatar.jpeg",
  };

  return (
    <main className="bg-white">
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4">
          {/* Profile Header */}
          <div className="rounded-3xl bg-white ring-1 ring-black/10 shadow-[0_18px_45px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full ring-1 ring-black/10">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="min-w-0">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {author.name}
                    </h1>
                    <p className="mt-1 text-sm sm:text-base text-slate-600">
                      {author.followers}
                    </p>
                    <p className="mt-2 text-sm sm:text-base text-slate-700 max-w-3xl">
                      {author.tagline}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={LINKEDIN_PROFILE_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex items-center justify-center gap-2
                          rounded-xl px-5 py-3
                          text-sm sm:text-base font-semibold text-white
                          bg-slate-900
                          shadow-[0_12px_26px_rgba(0,0,0,0.18)]
                          transition hover:-translate-y-0.5
                        "
                      >
                        Follow on LinkedIn <ArrowUpRight className="h-4 w-4" />
                      </a>

                      <Link
                        href="/contact"
                        className="
                          inline-flex items-center justify-center
                          rounded-xl px-5 py-3
                          text-sm sm:text-base font-semibold text-slate-900
                          bg-white
                          ring-1 ring-black/10
                          hover:bg-slate-50
                          transition
                        "
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[3px] bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400" />
          </div>

          {/* Posts Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {linkedinPosts.slice(0, 15).map((p) => (
              <article
                key={p.id}
                className="
                  group rounded-2xl bg-white
                  ring-1 ring-black/10
                  shadow-[0_10px_24px_rgba(0,0,0,0.06)]
                  transition
                  hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,0,0,0.09)]
                  overflow-hidden
                "
              >
                <div className="p-5">
                  {/* header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-black/10 shrink-0">
                        <Image
                          src={p.authorAvatar}
                          alt={p.authorName}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="font-extrabold text-slate-900 leading-tight">
                          {p.authorName}
                        </p>
                        <p className="text-xs text-slate-600">{p.dateLabel}</p>
                      </div>
                    </div>

                    <a
                      href={p.postUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        text-xs font-extrabold
                        rounded-md px-2 py-1
                        ring-1 ring-black/10
                        text-slate-700 hover:text-slate-900
                        hover:bg-slate-50
                        transition
                      "
                      aria-label="Open on LinkedIn"
                      title="Open on LinkedIn"
                    >
                      in
                    </a>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-700 whitespace-pre-line">
                    {clampText(p.content, 260)}
                  </p>

                  {p.image ? (
                    <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-black/10 bg-slate-50">
                      <div className="relative h-[210px] w-full">
                        <Image
                          src={p.image}
                          alt={`${p.authorName} post image`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 360px"
                        />
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <MetricButton
                        href={p.postUrl}
                        icon={<ThumbsUp className="h-4 w-4" />}
                        label="Likes"
                        count={p.likes}
                      />
                      <MetricButton
                        href={p.postUrl}
                        icon={<MessageCircle className="h-4 w-4" />}
                        label="Comments"
                        count={p.comments}
                      />
                      <MetricButton
                        href={p.postUrl}
                        icon={<Repeat2 className="h-4 w-4" />}
                        label="Shares"
                        count={p.shares}
                      />
                    </div>

                    {/* ✅ IMPORTANT: correct route */}
                    <Link href={`/post/${p.slug}`} className="text-sm font-semibold text-pink-700 hover:text-pink-800">
  Read more →
</Link>

                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="h-[2px] bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400 opacity-0 group-hover:opacity-100 transition"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
