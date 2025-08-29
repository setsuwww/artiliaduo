import { motion } from "framer-motion"
import { Star } from "lucide-react"

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.10, ease: "easeOut" } },
}

export function HeroBadge() {
  return (
    <motion.span variants={fadeLeft} className="relative flex items-center gap-x-2 mb-6 sm:mb-8 px-4 py-2 rounded-full bg-radial from-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-300 text-xs md:text-sm">
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: [0, 2, 1], rotate: [300, 120, 360] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Star size={16} className="[&>path]:fill-current [&>path]:stroke-none rounded-full" />
      </motion.span>

      Modern app
    </motion.span>
  )
}
