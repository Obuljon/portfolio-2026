import { use, type JSX } from "react";
import type { Metadata } from "next";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { useTranslations } from "next-intl";
import WorkList from "@/components/WorkList";

export const metadata: Metadata = {
  title: "Obil Work",
  description: "FullStack Developer Portfolio",
};

const WORK1 =
  "https://images.unsplash.com/photo-1604419253748-f9acec6608fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2V0Y2hpbmclMjBkZXNpZ24lMjBwcm9jZXNzJTIwbW9ja3VwJTIwc2tldGNoYm9vayUyMHBlbnxlbnwxfHx8fDE3NzE2MzUxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const WORK2 =
  "https://images.unsplash.com/photo-1716681863668-640cad27140f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjBkZXNrJTIwY29sb3JmdWwlMjBibG9ja3MlMjBVSSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzE2MzUxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function Page(): JSX.Element {
  const t = useTranslations("work");
  const navitems = useTranslations("navbor").raw("list");
  return (
    <main>
      <section
        id="work"
        className="relative py-24 sm:py-32 md:py-40 lg:py-48 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#fdfd96] overflow-hidden"
      >
        <div className="absolute top-12 sm:top-20 md:top-28 lg:top-36 left-4 sm:left-12 md:left-16 lg:left-24 pointer-events-none select-none">
          <h2 className="text-[100px] sm:text-[160px] md:text-[220px] lg:text-[280px] font-black text-[#f1f18b] leading-none opacity-50">
            {navitems[2].name}
          </h2>
        </div>

        <div className="relative z-10 max-w-5xl pt-12 sm:pt-16 md:pt-20 lg:pt-24">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 sm:gap-16 md:gap-20 lg:gap-24 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <div className="hidden md:block" />
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#00004d]/80 font-medium">
              {t("title")}
            </p>
          </div>

          <WorkList />
        </div>
      </section>
    </main>
  );
}
