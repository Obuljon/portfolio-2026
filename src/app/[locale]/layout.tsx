import type { Metadata } from "next";
import { Linkedin, Github, Send, Mail } from "lucide-react";
import { NextIntlClientProvider } from "next-intl";
import { StoreProvider } from "../StoreProvider";
import "../globals.css";
import OpenHamburger from "@/components/OpenHamburger";
import Hamburger from "@/components/Hamburger";
import { LanguageSelector } from "../../components/LanguageSelector";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import PersonNav from "@/components/PersonNav";
import { HydrationGuard } from "@/components/HydrationGuard";
import Footer from "@/components/Footer";
import Navbor from "@/components/Navbor";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  preload: false,
  display: "swap",
});
export const metadata: Metadata = {
  title: "Obil Portfolio",
  description: "FullStack Developer Portfolio",
  icons: {
    icon: "/binary.png",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html
      lang="en"
      className={cn("font-sans", inter.variable)}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <StoreProvider>
            <HydrationGuard>
              <div className="min-h-screen bg-[#fdfd96] text-[#00004d]">
                <header className="max-w-screen fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 md:px-12 h-20 md:h-24 flex items-center justify-between bg-[#fdfd96]/95 backdrop-blur-sm border-b border-[#00004d]/5 md:border-0 md:bg-transparent md:backdrop-blur-0 pointer-events-none">
                  <PersonNav />
                  {/* Desktop Navigation */}
                  <nav className="hidden md:flex items-center gap-8 lg:gap-12 pointer-events-auto">
                    <Navbor />
                    <div className="flex items-center gap-4 lg:gap-6 border-l border-[#00004d]/20 pl-4 lg:pl-6 ml-2 lg:ml-4">
                      <LanguageSelector variant="desktop" />
                      <a
                        href="https://linkedin.com/in/obul-rakhim-3b293a26b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-60 transition-opacity"
                      >
                        <Linkedin className="size-4" />
                      </a>
                      <a
                        href="https://github.com/Obuljon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-60 transition-opacity"
                      >
                        <Github className="size-4" />
                      </a>
                      <a
                        href="https://t.me/OBUL_dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-60 transition-opacity"
                      >
                        <Send className="size-4" />
                      </a>
                      <a
                        href="mailto:rahmovabul2@gmail.com"
                        className="hover:opacity-60 transition-opacity"
                      >
                        <Mail className="size-4" />
                      </a>
                    </div>
                  </nav>

                  <OpenHamburger />
                </header>
                {/* Mobile Menu Button */}
                <Hamburger />

                {children}
                <Footer />
              </div>
            </HydrationGuard>
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
