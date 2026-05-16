import { motion } from "motion/react"
export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-zinc-950">
      <motion.div 
      initial={{opacity:0,y:100}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.6,ease:"easeInOut"}}
      className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Work <span className="text-purple-500">Experience</span>
        </h2>

        <div className="space-y-8">
          <div className="bg-black rounded-3xl p-8 border border-white/10">
          <div className="flex justify-end"><p className="bg-amber-950 p-2 rounded-2xl">2025-26</p></div>
            <h3 className="text-3xl font-semibold">
              Web Developer
            </h3>

            <p className="text-purple-400 mt-2">Skillbit Technologies.</p>

            <p className="text-zinc-400 mt-5 leading-8">
              Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.<br></br>
              Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}