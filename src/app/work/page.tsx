import type { JSX } from "react";
import type { Metadata } from "next";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export const metadata: Metadata = {
  title: "Obil Work",
  description: "FullStack Developer Portfolio",

};
const WORK1 = "https://images.unsplash.com/photo-1604419253748-f9acec6608fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2V0Y2hpbmclMjBkZXNpZ24lMjBwcm9jZXNzJTIwbW9ja3VwJTIwc2tldGNoYm9vayUyMHBlbnxlbnwxfHx8fDE3NzE2MzUxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const WORK2 = "https://images.unsplash.com/photo-1716681863668-640cad27140f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjBkZXNrJTIwY29sb3JmdWwlMjBibG9ja3MlMjBVSSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzE2MzUxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function Page(): JSX.Element {
  return (
    <main>
       <section id="work" className="relative py-24 sm:py-32 md:py-40 lg:py-48 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#fdfd96] overflow-hidden">
        <div className="absolute top-12 sm:top-20 md:top-28 lg:top-36 left-4 sm:left-12 md:left-16 lg:left-24 pointer-events-none select-none">
          <h2 className="text-[100px] sm:text-[160px] md:text-[220px] lg:text-[280px] font-black text-[#f1f18b] leading-none opacity-50">work.</h2>
        </div>

        <div className="relative z-10 max-w-5xl pt-12 sm:pt-16 md:pt-20 lg:pt-24">
           <div className="grid md:grid-cols-[1fr_2fr] gap-12 sm:gap-16 md:gap-20 lg:gap-24 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
              <div className="hidden md:block" />
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#00004d]/80 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
              </p>
           </div>

           <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
              {[
                { img: WORK1, date: "November 24, 2019", title: "Some Case Study", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at." },
                { img: WORK2, date: "November 24, 2019", title: "Some Case Study", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at." }
              ].map((project, idx) => (
                <div key={idx} className="flex flex-col group cursor-pointer">
                  <div className="aspect-560/400 overflow-hidden rounded-xl mb-4 sm:mb-5 md:mb-6 relative">
                    <ImageWithFallback 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#00004d]/40 mb-2 italic">{project.date}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#00004d] mb-3 sm:mb-4">{project.title}</h3>
                  <p className="text-[#00004d]/60 leading-relaxed text-sm">{project.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </main>
  );
}