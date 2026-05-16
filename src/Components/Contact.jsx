import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <motion.div 
      initial={{opacity:0,y:100}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.6,ease:"easeInOut"}}
      className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">
          Contact <span className="text-purple-500">Me</span>
        </h2>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-zinc-900 rounded-2xl px-6 py-4"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-zinc-900 rounded-2xl px-6 py-4"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full bg-zinc-900 rounded-2xl px-6 py-4"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-purple-600 px-10 py-4 rounded-2xl"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}
