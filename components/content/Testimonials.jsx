"use client"

import { motion } from "framer-motion"

const testimonials = [
  { name: "Sarah", text: "Artilia delivered our project on time with excellent quality!" },
  { name: "David", text: "The team is super professional and creative, highly recommend." },
  { name: "Mina", text: "Our app runs faster and smoother than ever thanks to Artilia." },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-8 max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-gray-900"
      >
        What Our Clients Say
      </motion.h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg"
          >
            <p className="text-gray-600">“{t.text}”</p>
            <h4 className="mt-4 font-semibold text-gray-900">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
