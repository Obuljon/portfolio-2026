"use client";
import { motion } from "motion/react";
import {  Plus } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const PORTRAIT =
  "https://images.unsplash.com/photo-1759405185493-c1ef25745c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJseSUyMGhhaXIlMjBtYW4lMjBwb3J0cmFpdCUyMHNtaWxpbmclMjBibGFjayUyMGhhdHxlbnwxfHx8fDE3NzE2MzUxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

{
  /* Mobile Portrait - shown below text on small screens */
}
export default function MobilePortrait() {
  return (
    <motion.div
      className="sm:hidden mt-12 w-full flex justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="relative w-70 h-70">
        <div className="absolute inset-0 border border-[#00004d]/20 rounded-full scale-105" />
        <div className="absolute inset-0 rounded-full overflow-hidden border border-[#00004d]/40">
          <ImageWithFallback
            src={PORTRAIT}
            alt="John Doe"
            className="w-full h-full object-cover scale-110"
          />
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-8 right-0 text-[#333300]">
          <Plus className="size-5 absolute -top-3 -right-3" />
          <Plus className="size-5 absolute top-2 right-3" />
          <Plus className="size-5 absolute top-7 -right-2" />
        </div>
      </div>
    </motion.div>
  );
}
