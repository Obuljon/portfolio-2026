"use client";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
export default function PersonAbount() {
  const t = useTranslations("home");
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-base sm:text-lg md:text-xl font-medium text-[#00004d] mb-3 md:mb-4">
        {t("content.ferstcontent") + " " + t("person.fname")},
      </p>
      <h1 className="text-[56px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[0.9] font-black text-[#00004d] mb-8 md:mb-12 tracking-tight">
        {t("content.how")}
        <br />
        {t("person.job")}
      </h1>
      <p className="text-base sm:text-lg md:text-xl font-medium text-[#00004d] mb-8 md:mb-12">
        {t("person.location")}
      </p>
      <a
        href="/obiljon-resume.pdf" // Fayl manzili (public papkasida bo'lishi shart)
        download="obiljon-resume.pdf" // Yuklanganda fayl nomi qanday bo'lishi
        className="relative group inline-block" // inline-block tugma kabi turishi uchun
      >
        {/* Orqadagi soya effekti */}
        <div className="absolute inset-0 bg-[#f0f080] rounded-xl translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />

        {/* Asosiy tugma qismi */}
        <div className="relative px-8 sm:px-10 md:px-12 py-4 md:py-5 bg-[#f0f080] border border-[#00004d]/10 rounded-xl text-base sm:text-lg font-bold text-[#00004d] flex items-center gap-3">
          Resume
        </div>
      </a>
    </motion.div>
  );
}
