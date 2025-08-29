"use client"

import { motion } from "framer-motion"

const members = [
  { name: "Alex", role: "Frontend Developer" },
  { name: "Nina", role: "Backend Developer" },
  { name: "Kenji", role: "UI/UX Designer" },
  { name: "Lara", role: "Project Manager" },
]

export default function Team() {
  return (
    <section id="team" className="py-20 px-8 max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold"
      >
        Our Team
      </motion.h2>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {members.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 bg-neutral-900 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gray-700 to-gray-500 flex items-center justify-center text-2xl font-bold">
              {m.name[0]}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>
            <p className="text-gray-400 text-sm">{m.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
