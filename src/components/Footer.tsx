import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/navigation";
import type { JSX } from "react";
export default function Footer(): JSX.Element {
  const t = useTranslations("home");
  const fullName = t("person.fname") + " " + t("person.lname");
  const navItems = useTranslations("navbor").raw("list");
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="py-12 sm:py-16 md:py-24 px-6 sm:px-8 md:px-12 flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12 border-t border-[#00004d]/10">
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
        {navItems.map(({url, name}:{url:string, name:string}, index:number) => (
          <Link
            href={`${url}`}
            key={index}
            className="text-xs sm:text-sm font-semibold opacity-60 hover:opacity-100"
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-8 text-[#00004d]/40">
        <span className="text-xs text-center">
          © {year} {fullName}. Built with Figma Make.
        </span>
      </div>
    </footer>
  );
}
