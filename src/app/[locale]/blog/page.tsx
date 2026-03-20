import type { JSX } from "react";
import type { Metadata } from "next";
import BlogTitle from "@/components/BlogTitle";
import BlogItem from "@/components/BlogItem";
import { Post } from "@/types";

export const metadata: Metadata = {
  title: "Blog",
  description: "Welcome to the Blog page!",
};
const POSTS:Post[] = [
  {
    _id: "1",
    title: "The Art of Minimalism in Product Design",
    date: "Feb 18, 2026",
    content:
      "Exploring how less can be more when building modern user experiences.",
    image:
      "https://images.unsplash.com/photo-1755985022555-09c0ec136e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduJTIwd29ya3NwYWNlJTIwYWVzdGhldGljJTIwZGVza3xlbnwxfHx8fDE3NzE2MzUxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    _id: "2",
    title: "Typography: The Silent Communicator",
    date: "Feb 12, 2026",
    content:
      "Why font choice is the most important decision in your brand identity.",
    image:
      "https://images.unsplash.com/photo-1758923530325-00b4ff765e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwdHlwb2dyYXBoeSUyMHBvc3RlciUyMGRlc2lnbiUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzE2MzUxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    _id: "3",
    title: "Finding Inspiration in Nature",
    date: "Jan 28, 2026",
    content:
      "How organic shapes and colors from the natural world influence my design process.",
    image:
      "https://images.unsplash.com/photo-1761943840939-ad36457f54a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBtaW5pbWFsaXN0JTIwbGFuZHNjYXBlJTIwY2FsbSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzE2MzUxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];
export default function Page(): JSX.Element {
  return (
    <main>
      <div className="min-h-screen bg-[#fdfd96] pt-32 sm:pt-36 md:pt-40 lg:pt-48 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-6 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <BlogTitle />

          <div className="grid gap-12 sm:gap-16 md:gap-20 lg:gap-24">
            {POSTS.map((post, idx) => (
              <BlogItem post={post} idx={idx} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
