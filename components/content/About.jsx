import AboutLeftContent from "../partials/about/AboutLeftContent"
import AboutRightContent from "../partials/about/AboutRightContent"

export default function About() {
  return (
    <section id="about" className="relative min-h-screen text-white px-6 md:px-16 py-16 overflow-hidden">

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 max-w-6xl mx-auto border-2 border-dashed border-gray-800 rounded-xl p-10">
        <AboutLeftContent />

        <div className="hidden md:block w-[1px] border-l-2 border-dashed border-sky-500/50" />

        <AboutRightContent />
      </div>
    </section>
  )
}
