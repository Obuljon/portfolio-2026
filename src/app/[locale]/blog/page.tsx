import type { JSX } from "react";
import type { Metadata } from "next";
import BlogTitle from "@/components/BlogTitle";
import BlogItem from "@/components/BlogItem";
import { Post } from "@/types";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Blog",
  description: "Welcome to the Blog page!",
};

export default function Page(): JSX.Element {
  const t = useTranslations("blog")
  const list = t.raw("list")
  return (
    <main>
      <div className="min-h-screen bg-[#fdfd96] pt-32 sm:pt-36 md:pt-40 lg:pt-48 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-6 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <BlogTitle />

          <div className="grid gap-12 sm:gap-16 md:gap-20 lg:gap-24">
            {list.map((item:Post, idx:number) => (
              <BlogItem post={item} idx={idx} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
