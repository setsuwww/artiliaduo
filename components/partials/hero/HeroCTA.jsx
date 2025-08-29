import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
}

export function HeroCTA() {
  return (
    <motion.div variants={container} initial="hidden" animate="show"
      className="mt-8 sm:mt-10 flex flex-col md:flex-row items-center gap-4"
    >
      <motion.button variants={item} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
        className="flex items-center font-semibold px-5 py-3 rounded-xl bg-gray-800/50 border-2 border-dashed border-gray-800/70 transition-colors
          hover:border-solid hover:bg-gray-600/50 hover:border-gray-400/70
        "
      >
        View Project
      </motion.button>

      <motion.button variants={item} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
        className="flex items-center font-semibold text-gray-800 px-5 py-3 rounded-xl bg-gradient-to-b from-gray-400 to-white border border-white transition-colors
          hover:from-gray-500 hover:to-gray-100
        "
      >
        Get Started
      </motion.button>
    </motion.div>
  )
}
