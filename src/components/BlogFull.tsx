"use client";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useParams } from "next/navigation";
import { Post } from "@/types";



export default function BlogFull() {
  const param = useParams();
  const _id = param._id;
  const POSTS:Post[] = [];
  const post = POSTS.find((p) => p._id === _id);

  if (!post)
    return (
      <div className="min-h-screen bg-[#fdfd96] flex items-center justify-center">
        Post not found
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-xs sm:text-sm font-bold text-[#00004d]/40 italic block mb-4 sm:mb-5 md:mb-6">
        {post.date}
      </span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#00004d] mb-10 sm:mb-12 md:mb-14 lg:mb-16 leading-tight tracking-tight">
        {post.title}
      </h1>

      <div className="aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden mb-10 sm:mb-12 md:mb-14 lg:mb-16 grayscale shadow-2xl">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-7 md:gap-8">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-[#00004d]/80 font-medium">
          {post.content}
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-[#00004d]/80 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          vulputate tristique quam felis. Id phasellus dui orci vulputate
          consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-[#00004d]/80 font-medium">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </motion.div>
  );
}
