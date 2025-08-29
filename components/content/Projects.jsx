"use client"

import { motion } from "framer-motion"

const projects = [
  { title: "E-Commerce Platform", desc: "Next.js + Prisma + Tailwind", img: "/project1.png" },
  { title: "Social Media App", desc: "React Native + Firebase", img: "/project2.png" },
  { title: "AI Dashboard", desc: "Node.js + OpenAI + Vercel", img: "/project3.png" },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-900"
      >
        Our Projects
      </motion.h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg overflow-hidden"
          >
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-500">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
