import { motion } from "framer-motion"
import { AboutData } from "@/constants/about"
import { Badge } from "@/components/ui/Badge"
import { CheckCircle } from "lucide-react"

export default function AboutLeftContent() {
  return (
    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} 
      className="flex flex-col justify-center space-y-8"
    >
      <Badge className="relative flex items-center gap-x-2 mb-6 sm:mb-8 px-3 py-1 rounded-full bg-radial from-sky-500/20 backdrop-blur-sm border border-sky-500/30 text-sky-300 text-xs md:text-sm">
        {AboutData.badge}
      </Badge>

      <div>
        <h3 className="section-header text-2xl md:text-5xl font-bold mb-6">{AboutData.title}</h3>
        <p className="shiny-text leading-relaxed mb-4">{AboutData.description}</p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold mb-2">{AboutData.vision.title}</h3>
          <p className="shiny-text">{AboutData.vision.description}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">{AboutData.mission.title}</h3>
          <ul className="space-y-2 shiny-text">
            {AboutData.mission.items.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="bg-radial from-green-500/20 p-2 rounded-full">
                  <CheckCircle className="text-green-400" size={18} />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
