"use client";

import { useMemo } from "react";
import Image from "next/image";
import Script from "next/script";

type Review = {
  name: string;
  avatar?: string;
  rating: number;
  text: string;
};

type VideoBlock = {
  quote: string;
  name: string;
  youtubeId: string; // e.g. "CJnDfNADgN0"
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
        text: "Shannon is the real deal. She teaches you how to show up as yourself—authentically and confidently—in a space that often rewards sameness. She’s got the background, the receipts, and knows how to make a sale without selling out. Watching her in action is both inspiring and practical. If you're looking to level up on LinkedIn or just get clear on your voice, she's someone worth learning from. I walked away with tools I still use and insights that stuck.",
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
        avatar: "/t14.jpeg",
        rating: 5,
        text: "Shannon practices what she preaches. She is very knowledgeable about the psychology of sales and a lot of other useful skills. She is easy to work with and is genuinely interested in helping others.",
      },
      {
        name: "Alexandra Nunez",
        avatar: "/t15.jpeg",
        rating: 5,
        text: "I attended one of Shannon's workshops, she provided great value. I learned sales through psychology and neuroscience in a way that is practical and easy to understand. Shannon explains the \"why\" behind the techniques, which makes a big difference. I left with a better understanding of how to connect with people and approach sales in a smart way. If you have the chance to work with Shannon or attend her workshop, do it. You will gain insights that you can apply right away.",
      },
       {
        name: "Robert Tapinksi",
        avatar: "/t16.png",
        rating: 5,
        text: "She was fantastic to work with and she shared a vast amount of knowledge with me, She is very talented!!.",
      },
       {
        name: "Leah Garcia",
        avatar: "/t17.png",
        rating: 5,
        text: "I enjoy the pleasure of attending The Peek into the Buyer's Brain with the incredible Shannon Smith. I've been in sales for nearly 20 years and the strategies she shared in this two day event were absolutely transformational. Shannon has a unique perspective on the sales process. We have to understand how our brain works and how we process information. She also makes the class fun and engaging. This isn't a typical lecture type of environment. You will definitely grab some golden nuggets!.",
      },
       {
        name: "Rachael lemon",
        avatar: "/t18.png",
        rating: 5,
        text: "Working with Shannon was brilliant- she brings fun energy backed up with experience She knows her stuff and thinks outside the box, what she teaches isn’t the same old generic fluff it’s creative and targeted to meet my business needs She also provides constant value in her daily content Turning marketing from feeling uncomfortable and sleazy to easy peasy 🍋 squeezed!",
      },
       {
        name: "Sarah McDonald",
        avatar: "/t19.png",
        rating: 5,
        text: "I could never wrap my head around the sales stuff. Shannon helped me realize its not that complicated and now I have a coaching business that's thriving.fantastic to work with and she shared a vast amount of knowledge with me, She is very talented!!",
      },
       {
        name: "Imole Ashogbon",
        avatar: "/t20.png",
        rating: 5,
        text: "Shannon's two-day workshop was really great! You can see her passion for what she shares, she delivers a lot of value to the attendees and it is really interactive the way she runs it. If you are looking for someone that can help you with your sales and that can make a difference, go attend one of her webinars to introduce yourself to her world. Totally worth it.",
      },
       {
        name: "Anatanas Budvytis",
        avatar: "/t21.png",
        rating: 5,
        text: "Shannon was great, and easy to work with. She always brings an energy with her that makes working with her fun and exciting.",
      },
       {
        name: "Steffan Surdek",
        avatar: "/t22.png",
        rating: 5,
        text: "Shannon's two-day workshop was really great! You can see her passion for what she shares, she delivers a lot of value to the attendees and it is really interactive the way she runs it. If you are looking for someone that can help you with your sales and that can make a difference, go attend one of her webinars to introduce yourself to her world. Totally worth it.",
      },
      {
        name: "Emmy Charles",
        avatar: "/t23.png",
        rating: 5,
        text: "I attended one of Shannon's sales masterclass webinars. If I could describe it in one word: AMAZING. Not only does she know what she's talking about, she knows how to make you know what you're thinking about. I filled key gaps in my sales strategy using what I learned. If you're on the fence about Shannon don't be. She's worth it.",
      },
       {
        name: "Paul Deitch",
        avatar: "/t24.png",
        rating: 5,
        text: "It's been refreshing getting to connect and work with Shannon. From our first coffee chat a month ago to her inviting me to her 2-Day Workshop teaching people about how to incorporate neuroscience and psychology to increase their sales. She taught me an invaluable lesson that most people can tell you \"what\" to do, but they can't explain how to do it and why it works! I highly recommend anyone who's interested in neuroscience or creating systems for their business to speak with Shannon.",
      },
    ],
    []
  );

  // ✅ 2 videos only (6 testimonials ke baad, phir next 6 ke baad)
  const videoBlocks: VideoBlock[] = useMemo(
  () => [
    {
      quote: "I'll be coming back to these resources again and again.",
      name: "Georgie Smith",
      youtubeId: "1IdowWR7tgs", // first video
    },
    {
      quote: "There's no reason to not take the opportunity.",
      name: "Christine Snell",
      youtubeId: "S0PqpOhBvqY", // second video
    },
  ],
  []
);

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

  // ✅ Helper: video section UI (screenshot style)
  function VideoQuoteSection({ block }: { block: VideoBlock }) {
    return (
      <div className="md:col-span-2 lg:col-span-3">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            {/* Left Quote */}
            <div>
              <p className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                &quot;{block.quote}&quot;
              </p>
              <p className="mt-6 text-base font-semibold text-slate-900">
                {block.name}
              </p>
            </div>

            {/* Right Video */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-[360px] overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-sm">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${block.youtubeId}`}
                    title={`${block.name} video testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ✅ Insert video after 6th and 12th review (only if video exists)
  const renderItems = useMemo(() => {
    const out: Array<
      | { type: "review"; review: Review; key: string }
      | { type: "video"; block: VideoBlock; key: string }
    > = [];

    reviews.forEach((r, idx) => {
      out.push({ type: "review", review: r, key: `r-${r.name}-${idx}` });

      // after 6 and 12 (i.e. idx 5 and 11)
      const after = idx + 1;
      if (after === 6 && videoBlocks[0]) {
        out.push({ type: "video", block: videoBlocks[0], key: "v-1" });
      }
      if (after === 12 && videoBlocks[1]) {
        out.push({ type: "video", block: videoBlocks[1], key: "v-2" });
      }
    });

    return out;
  }, [reviews, videoBlocks]);

  return (
    <section aria-labelledby="client-feedback-title" className="py-14 sm:py-18 bg-white">
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
            Client <span className="text-pink-600">FeedBack!</span>{" "}
            <span className="align-middle">😊</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-700">
            Real feedback from clients using ethical persuasion and neuroscience-based
            communication to close more—without pushing harder.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {renderItems.map((item) => {
            if (item.type === "video") {
              return <VideoQuoteSection key={item.key} block={item.block} />;
            }

            const r = item.review;
            return (
              <article
                key={item.key}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
