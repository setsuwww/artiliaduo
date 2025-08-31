"use client"

import { motion } from "framer-motion"
import { HeroHeader } from "../partials/hero/HeroHeader"
import { HeroBadge } from "../partials/hero/HeroBadge"
import { HeroParaghraph } from "../partials/hero/HeroParaghraph"
import { HeroCTA } from "../partials/hero/HeroCTA"
import { ChevronDown } from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

export default function Hero() {
  return (
    <motion.section variants={container} initial="hidden" animate="show" className="bg-gradient-to-l from-violet-950/20 via-gray-900/20 to-gray-900 relative">
      <section className="min-h-screen flex flex-col justify-center items-center text-center relative px-4 md:px-8 bg-[url('/assets/bgungu.png')] bg-cover bg-center bg-no-repeat space-y-1">
        <HeroBadge />

        <HeroHeader />

        <HeroParaghraph />

        <HeroCTA />

        <div className="group absolute bottom-10 flex justify-center w-full animate-bounce cursor-pointer"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <span className="bg-gray-800/40 group-hover:bg-gray-600/40 border border-gray-400/20 p-2 rounded-full transition-colors">
            <ChevronDown className="w-6 h-6 text-gray-300 group-hover:text-yellow-500" />
          </span>
        </div>

      </section>
    </motion.section>
  )
}
