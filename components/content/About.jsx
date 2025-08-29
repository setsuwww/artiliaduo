import AboutLeftContent from "../partials/about/AboutLeftContent"
import AboutRightContent from "../partials/about/AboutRightContent"

export default function About() {
  return (
    <section className="relative min-h-screen text-white px-6 md:px-16 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-950 -z-10" />

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 max-w-6xl mx-auto border-2 border-dashed border-gray-800 rounded-xl p-10">
        <AboutLeftContent />

        <div className="hidden md:block w-[2px] bg-gradient-to-b from-sky-500/50 to-purple-500/50 rounded-full"/>

        <AboutRightContent />
      </div>
    </section>
  )
}
