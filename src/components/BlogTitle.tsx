"use client"
import { motion } from "motion/react";
export default function BlogTitle() {
  return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 sm:mb-16 md:mb-20 lg:mb-24"
      >
        <h1 className="text-[56px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-none font-black text-[#00004d] mb-6 sm:mb-8 tracking-tight">
          blog.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#00004d]/60 font-medium max-w-2xl">
          Thoughts on design, life, and the creative process. Updated weekly
          (mostly).
        </p>
      </motion.div>
  );
}
