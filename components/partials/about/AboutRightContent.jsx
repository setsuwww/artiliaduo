import { motion } from "framer-motion"
import { ThumbsUp } from "lucide-react"
import { AboutData } from "@/constants/about"

export default function AboutRightContent() {
  return (
    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col justify-center space-y-8">
      <div>
        <h3 className="text-2xl md:text-5xl font-bold mb-6">{AboutData.journey.title}</h3>
        <p className="shiny-text">{AboutData.journey.description}</p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-2">{AboutData.commitment.title}</h3>
        <p className="shiny-text">{AboutData.commitment.description}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">{AboutData.strengths.title}</h3>
        <ul className="space-y-2 shiny-text">
          {AboutData.strengths.items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <div className="bg-radial from-orange-500/20 p-2 rounded-full">
                <ThumbsUp className="text-orange-400" size={18} />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
