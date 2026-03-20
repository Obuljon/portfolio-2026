"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Post } from "@/types";
export default function BlogItem({ post, idx }: { post: Post; idx: number }) {
  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      className="group grid md:grid-cols-[1.5fr_1fr] gap-8 sm:gap-10 md:gap-12 items-center"
    >
      <Link
        href={`/blog/${idx}`}
        className="block overflow-hidden rounded-xl sm:rounded-2xl aspect-video order-2 md:order-1"
      >
        <ImageWithFallback
          src={post.image.includes("http") ? post.image : `/${post.image}`}
          alt={post.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 order-1 md:order-2">
        <span className="text-xs sm:text-sm font-bold text-[#00004d]/40 italic"></span>
        <Link href={`/blog/${idx}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#00004d] group-hover:underline transition-all underline-offset-8 decoration-4">
            {post.title}
          </h2>
        </Link>
        <p className="text-base sm:text-lg text-[#00004d]/70 leading-relaxed">
          {post.intro}
        </p>
        <Link
          href={`/blog/${idx}`}
          className="text-sm font-black text-[#00004d] flex items-center gap-2 group-hover:gap-4 transition-all"
        >
          Read More <span>→</span>
        </Link>
      </div>
    </motion.div>
  );
}
