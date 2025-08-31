"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <nav className={`
          fixed top-0 w-full z-50  flex justify-between items-center transition-all duration-300
          ${isScrolled
            ? "bg-white/10 backdrop-blur-sm py-4 px-6 md:px-8 shadow-md"
            : "bg-transparent py-10 px-6 md:px-12"
          }
        `}
      >
        <h1 className="text-2xl font-bold transition-colors duration-300 bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-violet-300">
          Artyphoria
        </h1>

        {/* Desktop links */}
        <div className={`space-x-8 hidden md:flex text-white font-medium transition-colors duration-300`}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-yellow-400">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setDrawerOpen(!drawerOpen)} aria-label="Menu">
            {drawerOpen ? <HiX className={`w-6 h-6 transition-colors ${isScrolled ? "text-gray-800" : "text-white"}`} /> 
                        : <HiMenu className={`w-6 h-6 transition-colors ${isScrolled ? "text-gray-800" : "text-white"}`} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }}exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 flex flex-col p-6"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              className="py-3 text-gray-800 font-semibold border-b border-gray-200"
              onClick={() => setDrawerOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}

      {drawerOpen && <div onClick={() => setDrawerOpen(false)} className="fixed inset-0 bg-black/30 z-30"/>}
    </>
  )
}
