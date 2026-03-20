import type { JSX } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obil About",
  description: "FullStack Developer Portfolio",
  icons: {
    icon: "/binary.svg",
    // [
    //   { url: "/binary.png", sizes: "32x32", type: "image/png" },
    // ],
  },
};

export default function Page(): JSX.Element {
  return (
    <main className="">
      <section
        id="about"
        className="relative py-24 sm:py-32 md:py-40 lg:py-48 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#fdfd96] overflow-hidden"
      >
        <div className="absolute top-12 sm:top-20 md:top-28 lg:top-36 left-4 sm:left-12 md:left-16 lg:left-24 pointer-events-none select-none">
          <h2 className="text-[100px] sm:text-[160px] md:text-[220px] lg:text-[280px] font-black text-[#f1f18b] leading-none opacity-50">
            about.
          </h2>
        </div>

        <div className="relative z-10 max-w-4xl pt-12 sm:pt-16 md:pt-20 lg:pt-24">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 sm:gap-16 md:gap-20 lg:gap-24">
            <div className="hidden md:block" />
            <div className="flex flex-col gap-10 sm:gap-12 md:gap-16">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#00004d]/80 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                vulputate tristique quam felis. Id phasellus dui orci vulputate
                consequat nulla proin. Id sit scelerisque neque, proin bibendum
                diam.
              </p>

              <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
                {[
                  {
                    years: "2014-2018",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.",
                  },
                  {
                    years: "2018-2020",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.",
                  },
                  {
                    years: "2020 - Present",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="grid sm:grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-4 sm:gap-6 md:gap-8 relative pl-6"
                  >
                    <div className="absolute left-0 top-1.5 size-2 rounded-full bg-[#00004d]" />
                    <span className="text-base sm:text-lg font-bold text-[#00004d]">
                      {item.years}
                    </span>
                    <p className="text-sm sm:text-base leading-relaxed text-[#00004d]/70">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
