"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function PersonNav() {
  const t = useTranslations<string>("home");
  return (
    <div className="pointer-events-auto">
      <Link href="/" className="text-xl sm:text-2xl font-black">
        {t("person.fname") + " " + t("person.lname")}
      </Link>
    </div>
  );
}
