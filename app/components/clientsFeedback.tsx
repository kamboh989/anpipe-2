"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { ChevronLeft, ChevronRight } from "lucide-react";


type Review = {
  name: string;
  
  avatar?: string; // optional: /avatars/a.png
  rating: number; // 1-5
  text: string;
};

export default function ClientFeedbackSection() {
  const reviews: Review[] = useMemo(
    () => [
      {
        name: "Rene Madden",
        avatar: "/t1.jpeg",
        rating: 5,
        text: "Shannon has been an amazing LinkedIn/Sales Coach! I'm new to launching my own business and Shannon really helped me put together a LinkedIn strategy on not only building my personal brand but also networking with my ICP (financial services). Shannon has much knowledge on the best way to track followers and potential leads. She is a neuroscience expert which is something you don't often find and she uses that expertise to guide people to the right methods of persuasion, influencing and selling.",
      },
      {
        name: "Christoph Karl Knoll",
        avatar: "/t2.jpeg",
        rating: 5,
        text: "I worked with Shan for only 30 days. Got years worth of value. Her brain? Full of neuroscience and magic. Helped me fix my DMs, LinkedIn posts, and even my overthinking. Salesy? Nope. Just smart, clear and honest. I already send everyone her way who wants to learn sales without sounding like a desperate robot. Shan, you're a legend. Thanks again.",
      },
      {
        name: "Waqas, PhD",
        avatar: "/t3.jpeg",
        rating: 5,
        text: "It was pleasure working with Shannon. She helped me understand the psychology of buyers and DM strategies to get leads. The most important aspect of coaching with Shannon is the LinkedIn content creation process. She knows how to grow an audience on LinkedIn FAST. Thank you for your support Shan 😊.",
      },
      {
        name: "Darren Jewell",
        avatar: "/t4.jpeg",
        rating: 5,
        text: "Shannon is fantastic to work with. I’ve had coaching before from a team of five, but I can honestly say I wish I’d met Shannon first. Her insight and approach have taken my LinkedIn results to a whole new level. I’d highly recommend her to anyone serious about growth.",
      },
      {
        name: "Didier Huber",
        avatar: "/t5.jpeg",
        rating: 5,
        text: "I just finished Shannon Smith’s 2-day LinkedIn Sales Workshop: insightful, energetic, and practical. I loved the blend of neuroscience, strategy, and real talk about what makes content and DMs actually convert. Shannon brings clarity to building trust, refining your ICP, and selling with integrity. If you are building a consulting, coaching, or service business and want to make LinkedIn work without selling your soul, Shannon’s approach is worth your time.",
      },
      {
        name: "Ryan Sailstad",
        avatar: "/t6.jpeg",
        rating: 5,
        text: "IShannon is the real deal. She teaches you how to show up as yourself—authentically and confidently—in a space that often rewards sameness. She’s got the background, the receipts, and knows how to make a sale without selling out. Watching her in action is both inspiring and practical. If you're looking to level up on LinkedIn or just get clear on your voice, she's someone worth learning from. I walked away with tools I still use and insights that stuck.",
      },
      {
        name: "Kristen Long",
        avatar: "/t7.jpeg",
        rating: 5,
        text: "Within two weeks of working with Shannon, I closed my first client. Over the next 3 months, she helped me increase my sales by 225%.",
      },
      {
        name: "Jacob Healy",
        avatar: "/t8.jpeg",
        rating: 5,
        text: "Shannon practices what she preaches. She is very knowledgeable about the psychology of sales and a lot of other useful skills. She is easy to work with and is genuinely interested in helping others.",
      },
       {
        name: "Dave Larsen",
        avatar: "/t9.jpeg",
        rating: 5,
        text: "Shannon is a fantastic person to work with and to have working on your project or helping you. She is highly intelligent and an excellent communicator. She projects genuine enthusiasm that motivates her listeners, but she is not over the top and exhausting. Her information is fascinating, beneficial, and valuable both to individuals and businesses. My final analysis is that choosing to work with Shannon means partnering with someone who embodies intelligence, clarity, and genuine enthusiasm.",
      },
       {
        name: "Katie Wrigley",
        avatar: "/t10.jpeg",
        rating: 5,
        text: "I attended Peek Into the Buyer’s Mind with Shannon Smith and was blown away by how much value she delivered. Unlike most events that just teas the good stuff, Shan gave actionable tools, fresh ideas, and worksheets to help you clearly define and find your ideal client—especially on LinkedIn. Her approach is generous, insightful, and pressure-free. Highly recommend if you're ready to connect more deeply to earn more clients.",
      },
        {
        name: "Louis Bigger",
        avatar: "/t11.jpeg",
        rating: 5,
        text: "Shannon Smith’s Peek Into the Buyer’s Brain webinar was a game-changer! She blends psychology, sales, and neuroscience to help you understand your ideal clients and better market to them. From leveraging the limbic system to overcoming objections with cognitive flexibility, every insight was practical and actionable. Shannon’s engaging style makes each concept easy to apply. If you're serious about mastering sales, this training is a must!.",
      },
      {
        name: "Morgan Adams",
        avatar: "/t12.jpeg",
        rating: 5,
        text: "I was invited to participate in Shannon's 2-day workshop and walked away with some profound insights about how to better identify and communicate with my ideal clients. If you have the chance to take her workshop, I highly recommend it!",
      },
      {
        name: "Alinnette Casiano",
        avatar: "/t13.jpeg",
        rating: 5,
        text: "I enjoyed learning from Shannon in her “Buyer's Brain Event”! It was a business game changer for anyone serious to sale how is supposed to be. She is an expert in overcoming rejections and how to use cognitive flexibility in favor.",
      },
       {
        name: "Jake Ray",
        role: "Sales Consultant",
        avatar: "/t14.jpeg",
        rating: 5,
        text: "Shannon practices what she preaches. She is very knowledgeable about the psychology of sales and a lot of other useful skills. She is easy to work with and is genuinely interested in helping others.",
      },
       {
        name: "Alexandra Nunez",
        role: "Sales Consultant",
        avatar: "/t15.jpeg",
        rating: 5,
        text: "I attended one of Shannon's workshops, she provided great value. I learned sales through psychology and neuroscience in a way that is practical and easy to understand. Shannon explains the \"why\" behind the techniques, which makes a big difference. I left with a better understanding of how to connect with people and approach sales in a smart way. If you have the chance to work with Shannon or attend her workshop, do it. You will gain insights that you can apply right away.",
      },
    ],
    []
  );

  // AEO: Review schema (short, compliant)
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: reviews.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: "5" },
        author: { "@type": "Person", name: r.name },
        reviewBody: r.text,
      },
    })),
  };

  // pagination for desktop 3, tablet 2, mobile 1 (handled via CSS; logic slides in groups of 3)
  const pageSize = 3;
  const totalPages = Math.ceil(reviews.length / pageSize);
  const [page, setPage] = useState(0);

  const goPrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const goNext = () => setPage((p) => (p + 1) % totalPages);

  const start = page * pageSize;
  const visible = reviews.slice(start, start + pageSize);

  return (
    <section
      aria-labelledby="client-feedback-title"
      className="py-14 sm:py-18 bg-white"
    >
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
         

          <h2
            id="client-feedback-title"
            className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Client{" "}
            <span className="text-pink-600">FeedBack!</span>{" "}
            <span className="align-middle">😊</span>
          </h2>

          {/* AEO: short summary */}
          <p className="mt-3 text-base sm:text-lg text-slate-700">
            Real feedback from clients using ethical persuasion and neuroscience-based
            communication to close more—without pushing harder.
          </p>

        
        </div>

        {/* Cards (3 shown, rest hidden via paging) */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((r, idx) => (
            <article
              key={`${r.name}-${idx}`}
              className="
                rounded-2xl bg-white
                p-6 sm:p-7
                border border-dashed border-pink-300
                shadow-[0_10px_24px_rgba(0,0,0,0.05)]
                transition
                hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.07)]
              "
            >
              {/* stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-pink-600 text-sm">
                    {i < r.rating ? "★" : "☆"}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700">
                {r.text}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-black/10 bg-slate-100">
                  {r.avatar ? (
                    <Image
                      src={r.avatar}
                      alt={`${r.name} avatar`}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  ) : null}
                </div>

                <div>
                  <p className="text-sm font-extrabold text-slate-900">{r.name}</p>
                 
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            className="
              h-10 w-10 rounded-full
              ring-1 ring-black/10 bg-gray-200
              hover:bg-slate-50 transition
              grid place-items-center
            "
            aria-label="Previous reviews"
          >
            <ChevronLeft className="h-5 w-5 text-slate-700" />
          </button>

          {/* dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Go to reviews page ${i + 1}`}
                className={`
                  h-2.5 w-2.5 rounded-full transition
                  ${page === i ? "bg-pink-600" : "bg-slate-300 hover:bg-slate-400"}
                `}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            className="
              h-10 w-10 rounded-full
              ring-1 ring-black/10 bg-gray-200
              hover:bg-slate-50 transition
              grid place-items-center
            "
            aria-label="Next reviews"
          >
            <ChevronRight className="h-5 w-5 text-slate-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
