"use client";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function BlogFull() {
  const param: { _id: string } = useParams();
  const t = useTranslations("blog");
  const list = t.raw("list");
  const post = list[param._id];

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
        {/* {post.date} */}
      </span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#00004d] mb-10 sm:mb-12 md:mb-14 lg:mb-16 leading-tight tracking-tight">
        {post.title}
      </h1>

      <div className="aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden mb-10 sm:mb-12 md:mb-14 lg:mb-16 grayscale shadow-2xl">
        <ImageWithFallback
          src={post.image.includes("http") ? post.image : `/${post.image}`}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-7 md:gap-8">
        {post.sections.map(
          (section: { heading: string; text: string }, idx: number) => (
            <div key={idx}>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#00004d] mb-5 sm:mb-6 md:mb-7 lg:mb-8 leading-tight tracking-tight">
                {section.heading}
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-[#00004d]/80 font-medium">
                {section.text}
              </p>
            </div>
          ),
        )}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-[#00004d]/80 font-medium">
          {post.conclusion}
        </p>
      </div>
    </motion.div>
  );
}
