import type { JSX } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogFull from "@/components/BlogFull";

export const metadata: Metadata = {
  title: "Page",
  description: "Welcome to the main page!",
};

export default function Page(): JSX.Element {
  return (
    <main>
      <div className="min-h-screen bg-[#fdfd96] pt-32 sm:pt-36 md:pt-40 lg:pt-48 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-6 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#00004d]/40 mb-8 sm:mb-10 md:mb-12 hover:text-[#00004d] transition-colors"
          >
            <ArrowLeft className="size-4" /> Back to Blog
          </Link>
          <BlogFull/>
        </div>
      </div>
    </main>
  );
}
