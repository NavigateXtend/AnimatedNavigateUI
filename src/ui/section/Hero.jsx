"use client";
import { lato } from "@/app/layout";
import Link from "next/link";
import { FaGithub, FaReact, FaRocket } from "react-icons/fa6";
import { SiFramer, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Hero() {
  return (
    <div className="z-10 flex justify-center py-6 text-center sm:py-10 md:py-14 lg:py-16 xl:py-20">
      <div className="space-y-5 sm:space-y-7">
        <h2
          className={`text-5xl text-balance font-extrabold text-zinc-600 max-w-2xl ${lato.className}`}
        >
          Animated{" "}
          <span className="bg-gradient-to-tr from-indigo-500 to-purple-300 bg-clip-text text-transparent">
            NavigateUI
          </span>{" "}
          Components for <span className="text-sky-400">React</span> &{" "}
          <span className="text-sky-600">Tailwind</span>
        </h2>

        <div className="flex flex-row flex-wrap items-center justify-center gap-1 text-xs font-medium sm:gap-2 sm:text-sm md:gap-3 md:text-base lg:text-lg">
          <Link
            href="/components/accordion"
            className="flex items-center gap-2 text-nowrap rounded-sm bg-gradient-to-tr from-indigo-500 to-purple-300 px-6 py-2 text-white duration-300 md:w-auto"
          >
            Get Start <FaRocket />
          </Link>
          <Link
            href="https://github.com/NavigateUI/NavigateUI"
            className="flex items-center gap-2 rounded-sm px-6 py-[7px] ring-1 ring-black backdrop-blur-sm duration-300 hover:bg-black/10"
          >
            <FaGithub /> Github
          </Link>
        </div>
        <div className="mt-5 flex justify-center gap-3 text-4xl sm:text-5xl">
          <SiTailwindcss className="rounded-sm p-2 text-[#38bdf8] shadow-[0_0_2px] backdrop-blur-sm hover:bg-[#38bdf8]/10" />
          <div className="rounded-sm text-sky-500 shadow-[0_0_2px] backdrop-blur-sm hover:bg-sky-500/10 p-2">
            <FaReact className="animate-[spin_4s_linear_infinite] size-8" />
          </div>
          <SiNextdotjs className="rounded-sm p-2 shadow-[0_0_2px] backdrop-blur-sm hover:bg-black/10" />
          <SiFramer className="rounded-sm p-2 shadow-[0_0_2px] backdrop-blur-sm hover:bg-black/10" />
        </div>
      </div>
    </div>
  );
}
