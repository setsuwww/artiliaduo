import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function HeroParaghraph() {
  return (
    <motion.p variants={fadeUp}
      className="mt-4 text-sm md:text-xl shiny-text max-w-xl sm:max-w-2xl"
    >
      Artilia is a global website development team crafting elegant, creative user-interface, and user-friendly
      solutions for the future. Make your website beautiful is not enough if it has a bad user-experience.
    </motion.p>
  )
}
