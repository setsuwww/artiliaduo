"use client"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    img: "https://picsum.photos/800/500?1",
    title: "E-Commerce Platform",
    desc: "Next.js + Prisma + Tailwind. Build modern shopping experiences."
  },
  {
    img: "https://picsum.photos/800/500?2",
    title: "AI Dashboard",
    desc: "Node.js + OpenAI + Vercel. Analytics & insights powered by AI."
  },
  {
    img: "https://picsum.photos/800/500?3",
    title: "Portfolio Website",
    desc: "Next.js + Framer Motion. Showcase your work in style."
  },
]

export default function CardCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay()]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="flex-[0_0_80%] sm:flex-[0_0_60%] lg:flex-[0_0_40%] p-4"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-2xl">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {slide.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{slide.desc}</p>
                  <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Controls */}
      <footer className="mt-6 flex items-center justify-between px-4">
        {/* Prev/Next */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex space-x-2">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                idx === selectedIndex ? "bg-gray-800" : "bg-gray-400/40"
              }`}
            />
          ))}
        </div>
      </footer>
    </div>
  )
}
