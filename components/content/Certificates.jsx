"use client"

import { motion } from "framer-motion"

const certs = [
  "ISO 9001 Certified",
  "Google Cloud Partner",
  "AWS Certified Developer",
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-8 max-w-4xl mx-auto text-center bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-gray-900"
      >
        Certificates & Recognition
      </motion.h2>
      <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
        {certs.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg"
          >
            {c}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
