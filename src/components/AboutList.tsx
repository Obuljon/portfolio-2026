"use client";
import { useTranslations } from "next-intl";
import type { JSX } from "react";

type Props = {
  children: React.ReactNode;
};

export default function AboutList(): JSX.Element {
  const t = useTranslations("about");
  const featureKeys = Array.from({ length: 3 }, (_, i) => i.toString());

  return (
    <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
      {featureKeys.map((key, idx) => (
        <div
          key={idx}
          className="grid sm:grid-cols-[240px_1fr] md:grid-cols-[180px_1fr] gap-4 sm:gap-6 md:gap-8 relative pl-6"
        >
          <div className="absolute left-0 top-1.5 size-2 rounded-full bg-[#00004d]" />
          <span className="text-base sm:text-lg font-bold text-[#00004d]">
            {t(`list.${key}.title`)}
          </span>
          <p className="text-sm sm:text-base leading-relaxed text-[#00004d]/70">
            {t(`list.${key}.description`)}
          </p>
        </div>
      ))}
    </div>
  );
}
