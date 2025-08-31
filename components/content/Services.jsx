"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Badge } from "../ui/Badge"

import { services } from '@/constants/services'

export default function Services() {
  return (
    <section id="services" className="relative px-6 md:px-20 py-24 w-full mx-auto text-center overflow-hidden bg-[url('/assets/bgbiru.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-950/40 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <Badge className="px-4 py-1.5 rounded-full text-xs md:text-sm bg-radial from-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-300">
          What we Do
        </Badge>

        <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-100">
          Our Services
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
          We craft digital solutions that are fast, secure, and designed with a
          modern user experience in mind.
        </p>

        {/* Services Grid */}
        <div className="mt-26 grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0">
          {services.map((s, i) => (
            <div key={i} className={`group relative p-8 rounded-2xl bg-gray-900/50 border-2 border-dotted hover:border-solid backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 outline outline-offset-4 ${s.color}`}>

              <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-xl bg-radial ${s.color} transition-all duration-300 ease-in`}>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 360, 0] }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                >
                  <s.icon className={`w-8 h-8 stroke-1 transition-transform duration-200 group-hover:scale-115 ${s.shadow}`} />
                </motion.div>
              </div>

              <h3 className="text-xl font-bold section-header text-white">{s.title}</h3>
              <p className="mt-3 shiny-text leading-relaxed">{s.desc}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
