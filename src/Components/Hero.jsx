import { motion } from 'framer-motion'
import profile from '../assets/profile.jpeg'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-28"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-6xl md:text-7xl font-extrabold leading-tight">
              Hi, I'm <span className="text-purple-500">Yogesh Badgujar</span>
            </h2>

            <div className="typwriter mt-5 text-4xl font-bold text-zinc-200">
              Full Stack Developer
            </div>
          </div>

          <p className="text-zinc-400 text-lg leading-8 max-w-xl">
            I create stunning web experiences with modern technologies.
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="profile"
            className="w-[420px] h-[420px] object-cover rounded-full border-4 border-purple-500/30"
          />
        </motion.div>
      </div>
    </section>
  )
}