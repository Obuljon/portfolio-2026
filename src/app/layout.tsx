import type { Metadata } from "next";
import { type JSX } from "react";
import { Linkedin, Github, Send, Mail } from "lucide-react";
import { StoreProvider } from "./StoreProvider";
import "./globals.css";
import Link from "next/link";
import OpenHamburger from "@/components/OpenHamburger";
import Hamburger from "@/components/Hamburger";
import { LanguageSelector } from "../components/LanguageSelector";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Obil Portfolio",
  description: "FullStack Developer Portfolio",
  icons: {
    icon: "/binary.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const fullName = "Rahim Obul";

  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body>
        <StoreProvider>
          <div className="min-h-screen bg-[#fdfd96] text-[#00004d]">
            <header className="max-w-screen fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 md:px-12 h-20 md:h-24 flex items-center justify-between bg-[#fdfd96]/95 backdrop-blur-sm border-b border-[#00004d]/5 md:border-0 md:bg-transparent md:backdrop-blur-0 pointer-events-none">
              <div className="pointer-events-auto">
                <Link href="/" className="text-xl sm:text-2xl font-black">
                  {fullName}
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8 lg:gap-12 pointer-events-auto">
                <div className="flex items-center gap-6 lg:gap-8">
                  <Link
                    href="/"
                    className={`text-sm font-semibold transition-colors hover:opacity-70 ${true ? "opacity-100" : "opacity-60"}`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-semibold transition-colors hover:opacity-70 opacity-60"
                  >
                    About
                  </Link>
                  <Link
                    href="/work"
                    className="text-sm font-semibold transition-colors hover:opacity-70 opacity-60"
                  >
                    Work
                  </Link>
                  <Link
                    href="/blog"
                    className={`text-sm font-semibold transition-colors hover:opacity-70 ${true ? "opacity-100" : "opacity-60"}`}
                  >
                    Blog
                  </Link>
                </div>
                <div className="flex items-center gap-4 lg:gap-6 border-l border-[#00004d]/20 pl-4 lg:pl-6 ml-2 lg:ml-4">
                  <LanguageSelector variant="desktop" />
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
              </nav>

              <OpenHamburger />
            </header>
            {/* Mobile Menu Button */}
            <Hamburger />

            {children}
            <footer className="py-12 sm:py-16 md:py-24 px-6 sm:px-8 md:px-12 flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12 border-t border-[#00004d]/10">
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
                <Link
                  href="/"
                  className="text-xs sm:text-sm font-semibold opacity-60 hover:opacity-100"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-xs sm:text-sm font-semibold opacity-60 hover:opacity-100"
                >
                  About
                </Link>
                <Link
                  href="/work"
                  className="text-xs sm:text-sm font-semibold opacity-60 hover:opacity-100"
                >
                  Work
                </Link>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm font-semibold opacity-60 hover:opacity-100"
                >
                  contact
                </Link>
                <Link
                  href="/blog"
                  className="text-xs sm:text-sm font-semibold opacity-60 hover:opacity-100"
                >
                  Blog
                </Link>
              </div>
              <div className="flex items-center gap-8 text-[#00004d]/40">
                <span className="text-xs text-center">
                  © {new Date().getFullYear()} {fullName}. Built with Figma
                  Make.
                </span>
              </div>
            </footer>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
