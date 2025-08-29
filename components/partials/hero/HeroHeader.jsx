import { motion } from "framer-motion"

const waveVariants = {
  hidden: { opacity: 0, x: -40, y: 20 }, 
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: [20, -10, 0], // naik-turun → efek gelombang
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

export function HeroHeader() {
  const modernText = "Modern Website"

  return (
    <motion.h1
      initial="hidden"
      animate="show"
      className="flex flex-col md:flex-row space-y-2 md:space-x-4 text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight"
    >
      {/* Building */}
      <motion.span
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: [0.8, 1.2, 1], y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-b from-gray-500 to-gray-100 bg-clip-text text-transparent"
      >
        Building{" "}
      </motion.span>

      {/* Modern Website (Wave effect) */}
      <span className="bg-gradient-to-b from-indigo-500 to-violet-400 bg-clip-text text-transparent flex flex-wrap">
        {modernText.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={waveVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </motion.h1>
  )
}
