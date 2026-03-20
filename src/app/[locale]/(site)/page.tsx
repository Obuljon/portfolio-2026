import type { JSX } from "react";
import type { Metadata } from "next";
import { ArrowRight, Plus } from "lucide-react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import PersonAbount from "@/components/PersonAbount";
import MobilePortrait from "@/components/ MobilePortrait";
const PORTRAIT =
  "/photo_2023-12-01_01-04-19.jpg";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to the Portfolio page!",
};

export default function Page(): JSX.Element {

  return (
    <main className="pt-16">
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col lg:flex-row items-center px-6 sm:px-12 md:px-16 lg:px-24 py-20 md:py-0 bg-[#fdfd96]">
          <div className="max-w-2xl z-10">
            <PersonAbount />
          </div>

          {/* Hero Image Container */}
          <div className="absolute right-6 sm:right-12 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] h-[340px] sm:h-[420px] md:h-[500px] lg:h-[600px] z-0 hidden sm:block">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Circular Portrait with offset border */}
              <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[390px] md:h-[390px] lg:size-[460px]">
                <div className="absolute inset-0 border border-[#00004d]/20 rounded-full scale-105" />
                <div className="absolute inset-0 rounded-full overflow-hidden border border-[#00004d]/40">
                  <ImageWithFallback
                    src={PORTRAIT}
                    alt="John Doe"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-8 sm:top-12 right-0 text-[#333300]">
                  <Plus className="size-4 sm:size-5 md:size-6 absolute -top-3 sm:-top-4 -right-3 sm:-right-4" />
                  <Plus className="size-4 sm:size-5 md:size-6 absolute top-2 right-3 sm:right-4" />
                  <Plus className="size-4 sm:size-5 md:size-6 absolute top-6 sm:top-8 -right-2" />
                </div>
                <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-0 flex gap-1 -translate-x-8 sm:-translate-x-10 md:-translate-x-12">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-6 sm:h-8 md:h-10 w-1 bg-[#333300]/60 skew-x-[25deg]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <MobilePortrait />
        </section>
      </div>
    </main>
  );
}
