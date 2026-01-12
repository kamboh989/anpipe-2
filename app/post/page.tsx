import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Articles on neuroscience, buyer behavior, ethical persuasion, leadership under pressure, and sales performance.",
  alternates: { canonical: "/posts" },
  openGraph: {
    title: `Posts | ${site.name}`,
    description:
      "Articles on neuroscience, buyer behavior, ethical persuasion, leadership under pressure, and sales performance.",
    url: `${site.url}/posts`,
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
