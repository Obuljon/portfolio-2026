"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/navigation";
import type { JSX } from "react";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Navbor(): JSX.Element {
  const t = useTranslations("navbor");
  const navItems = t.raw("list");
  return (
    <div className="flex items-center gap-6 lg:gap-8">
      {navItems.map(
        ({ url, name }: { url: string; name: string }, index: number) => (
          <Link
            key={index}
            href={`${url}`}
            className={`text-sm font-semibold transition-colors hover:opacity-70 ${true ? "opacity-100" : "opacity-60"}`}
          >
            {name}
          </Link>
        ),
      )}
    </div>
  );
}
