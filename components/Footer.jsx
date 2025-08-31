"use client"

import Link from "next/link"
import { footerLinks, socialLinks } from "@/constants/footerlinks"
import { Twitter, Instagram, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white">Artyforia</h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Building simple and elegant web solutions with a focus on UI/UX.
          </p>
          <p className="mt-6 flex flex-col text-gray-600">
            <span>Coded by: Rifqi Ibrahim</span>
            <span>Designed by: Laurentius</span>
          </p>
        </div>

        {/* Links */}
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-8 py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Artyphoria. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {socialLinks.map((social, i) => {
              const Icon =
                social.icon === "twitter"
                  ? Twitter
                  : social.icon === "instagram"
                  ? Instagram
                  : Github
              return (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <Icon size={20} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
