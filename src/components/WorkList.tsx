
import type { JSX } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Technology from "./Tehologia";

type Props = {
  children: React.ReactNode;
};

export default function WorkList(): JSX.Element {
  const t = useTranslations("work");
  const featureKeys = Array.from({ length: 8 }, (_, i) => i.toString());

  return (
    <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {featureKeys.map((key, idx) => (
        <div key={idx} className="flex flex-col group cursor-pointer">
          <div className="aspect-560/400 overflow-hidden rounded-xl mb-4 sm:mb-5 md:mb-6 relative">
            <ImageWithFallback
              src={`/${t(`list.${key}.image`)}`}
              alt={`${t(`list.${key}.name`)}`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
            />
          </div>
          <span className="text-xs sm:text-sm font-medium text-[#00004d]/40 mb-2 italic">
            {t(`list.${key}.type`)}
          </span>
          <Technology idx={idx}/>
          <h3 className="text-xl sm:text-2xl font-black text-[#00004d] mb-3 sm:mb-4">
            {t(`list.${key}.name`)}
          </h3>
          <p className="text-[#00004d]/60 leading-relaxed text-sm">
            {t(`list.${key}.short`)}
          </p>
          <p className="text-[#00004d]/60 leading-relaxed text-sm">
            {t(`list.${key}.description`)}
          </p>
          <div className="flex justify-between">
            {t.has(`list.${key}.github`) && (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={`${t(`list.${key}.github`)}`}
              >
                <span className="text-xs sm:text-sm font-medium text-[#00004d]/40 mb-2 italic">
                  github link
                </span>
              </Link>
            )}
            {t.has(`list.${key}.github_backend`) && (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={`${t(`list.${key}.github_backend`)}`}
              >
                <span className="text-xs sm:text-sm font-medium text-[#00004d]/40 mb-2 italic">
                  github backend link
                </span>
              </Link>
            )}
            {t.has(`list.${key}.github_frontend`) && (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={`${t(`list.${key}.github_frontend`)}`}
              >
                <span className="text-xs sm:text-sm font-medium text-[#00004d]/40 mb-2 italic">
                  github frontend link
                </span>
              </Link>
            ) }
          </div>
        </div>
      ))}
    </div>
  );
}
