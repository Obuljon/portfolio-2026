import type { JSX } from "react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import AboutList from "@/components/AboutList";

export const metadata: Metadata = {
  title: "Obil About",
  description: "FullStack Developer Portfolio",
};

export default function Page(): JSX.Element {
  const t = useTranslations("about");

  return (
    <main 
        id="about"
        className="relative py-24 sm:py-32 md:py-40 lg:py-48 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#fdfd96] overflow-hidden"
      >
        <div className="absolute top-12 sm:top-20 md:top-28 lg:top-36 left-4 sm:left-12 md:left-16 lg:left-24 pointer-events-none select-none">
          <h2 className="text-[100px] sm:text-[160px] md:text-[220px] lg:text-[280px] font-black text-[#f1f18b] leading-none opacity-50">
            {t("title")}
          </h2>
        </div>

        <div className="relative z-10 max-w-4xl pt-12 sm:pt-16 md:pt-20 lg:pt-24">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 sm:gap-16 md:gap-20 lg:gap-24">
            <div className="hidden md:block" />
            <div className="flex items-center flex-col gap-10 sm:gap-12 md:gap-16">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#00004d]/80 font-medium">
                {t("content")}
              </p>
              <AboutList />
            </div>
          </div>
        </div>
 
    </main>
  );
}
