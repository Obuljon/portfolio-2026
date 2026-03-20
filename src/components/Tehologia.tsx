
import { useTranslations } from "next-intl";
import type { JSX } from "react";

type Props = {
  idx: number;
};

export default function Technology({ idx }: Props): JSX.Element {
    const t = useTranslations("work");
    const techStack = t.raw(`list.${idx}.tech`);
  return (
    <span className="text-xs sm:text-sm font-medium text-[#00004d]/40 mb-2 italic">
      {techStack.toString()}
    </span>
  );
}
