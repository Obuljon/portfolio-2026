"use client";
import { motion } from "motion/react";
export default function PersonAbount() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-base sm:text-lg md:text-xl font-medium text-[#00004d] mb-3 md:mb-4">
        Hello, {"I'm John"},
      </p>
      <h1 className="text-[56px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[0.9] font-black text-[#00004d] mb-8 md:mb-12 tracking-tight">
        Product
        <br />
        Designer
      </h1>
      <p className="text-base sm:text-lg md:text-xl font-medium text-[#00004d] mb-8 md:mb-12">
        based in Netherland.
      </p>

      <button className="relative group">
        <div className="absolute inset-0 bg-[#f0f080] rounded-xl translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
        <div className="relative px-8 sm:px-10 md:px-12 py-4 md:py-5 bg-[#f0f080] border border-[#00004d]/10 rounded-xl text-base sm:text-lg font-bold text-[#00004d] flex items-center gap-3">
          Resume
        </div>
      </button>
    </motion.div>
  );
}
