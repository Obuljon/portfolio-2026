"use client";
import Link from "next/link";
import { RootState } from "@/lib/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setMobileMenuOpen } from "../lib/redux/features/humburgerSlice";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslations } from "next-intl";
export default function Hamburger() {
  const dispatch = useDispatch();
  const mobileMenuOpen = useSelector(
    (state: RootState) => state.mobileMenu.isMatch,
  );
  const t = useTranslations("navbor");
  const navItems = t.raw("list");
  return (
    <div
      className={`md:hidden fixed inset-0 z-40 bg-[#fdfd96] transition-transform duration-300 ease-in-out ${
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ top: "5rem" }}
    >
      <nav className="flex flex-col h-full px-6 py-8">
        <div className="flex flex-col gap-6">
          {navItems.map(
            ({ url, name }: { url: string; name: string }, index: number) => (
              <Link
                key={index}
                href={url}
                className={`text-2xl font-bold transition-colors ${mobileMenuOpen ? "opacity-100" : "opacity-60"}`}
                onClick={() => dispatch(setMobileMenuOpen())}
              >
                {name}
              </Link>
            ),
          )}
        </div>
        <div className="mt-auto pt-8 border-t border-[#00004d]/10">
          <div className="flex flex-col gap-6">
            <LanguageSelector variant="mobile" />
            <div className="flex items-center gap-4 lg:gap-6 border-l border-[#00004d]/20 pl-4 lg:pl-6 ml-2 lg:ml-4">
              <a href="#" className="hover:opacity-60 transition-opacity">
                <Linkedin className="size-4" />
              </a>
              <a href="#" className="hover:opacity-60 transition-opacity">
                <Github className="size-4" />
              </a>
              <a href="#" className="hover:opacity-60 transition-opacity">
                <Send className="size-4" />
              </a>
              <a href="#" className="hover:opacity-60 transition-opacity">
                <Mail className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
