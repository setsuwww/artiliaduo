"use client"

import Navbar from "@/components/Navbar"
import Hero from "@/components/content/Hero"
import Services from "@/components/content/Services"
import Projects from "@/components/content/Projects"
import Certificates from "@/components/content/Certificates"
import Testimonials from "@/components/content/Testimonials"
import Footer from "@/components/Footer"
import About from "@/components/content/About"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Certificates />
      <Testimonials />
      <Footer />
    </main>
  )
}
