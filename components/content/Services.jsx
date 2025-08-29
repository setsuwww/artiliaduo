"use client"

import { motion } from "framer-motion"
import { DatabaseZap, Palette, ShieldCheck } from "lucide-react"

const services = [
  {
    icon: <DatabaseZap size={32} />,
    title: "Web Development",
    desc: "Build modern, high-performance apps with robust Backend & Frontend frameworks.",
  },
  {
    icon: <Palette size={32} />,
    title: "Creative UI",
    desc: "Design cross-platform apps with stunning, user-friendly, and intuitive UI.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Protected",
    desc: "Ensure scalability & security with reliable systems that protect your data.",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative px-6 md:px-20 py-20 w-full mx-auto text-center overflow-hidden bg-[url('/assets/bgbiru.png')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600"
        >
          Our Services
        </motion.h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
          We craft digital solutions that are fast, secure, and designed with a
          modern user experience in mind.
        </p>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-white/5 border border-sky-800/40 backdrop-blur-lg shadow-lg hover:shadow-sky-500/20 transition-all"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-sky-500/30 to-blue-700/30 border border-sky-500/50 text-sky-400 shadow-md shadow-sky-900/30 group-hover:shadow-lg group-hover:shadow-sky-500/40 transition">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
