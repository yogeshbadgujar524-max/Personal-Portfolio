import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'

import project1 from '../assets/ecom.jpeg'
import project2 from '../assets/movie.jpeg'
import project3 from '../assets/finance.jpeg'


export default function Projects() {

const projects = [
 
  {
    title: 'Movie Ticket Booking App',
    description:
      'A modern movie ticket booking site with authentication, booking movie, after booking confirmation mail, checkout, profile and mobile freindly design.',
    image: project2,
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind', 'Framer Motion','Sweet alerts'],
  },
    {
    title: 'E-Commerce Platform',
    description:
      'A modern e-commerce application with authentication, cart system, and online payments.',
    image: project1,
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Finance Dahboard',
    description:
      'Generate AI images using prompts with modern UI animations and cloud storage.',
    image: project3,
    tech: ['React', 'OpenAI API', 'Node.js', 'Reacharts'],
  },
]

  return (
    <>
   <section id="projects" className="py-24 px-6">
  <motion.h2
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7,ease:"easeInOut" }}
    className="text-5xl md:text-4xl font-bold text-center mb-14"
  >
    Featured <span className="text-purple-500">Projects</span>
  </motion.h2>

  <motion.div 
  initial={{opacity:0,y:100}}
  whileInView={{opacity:1,y:"0"}}
  transition={{duration:0.6,ease:"easeInOut"}}
  className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="group bg-zinc-900 border border-white/10 hover:border-purple-500/40 rounded-2xl overflow-hidden transition duration-300"
      >
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-52 w-full object-cover group-hover:scale-105 transition duration-700"
          />
        </div>

        <div className="p-5">
          <h3 className="text-2xl font-semibold text-white mb-3">
            {project.title}
          </h3>

          <p className="text-lg text-zinc-400 leading-6 mb-5">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-black border border-white/10 text-sm text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>

        

          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-xl text-lg font-medium transition"
            >
              Demo <FaExternalLinkAlt className="text-sm" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border border-white/10 hover:border-purple-500/40 px-4 py-2 rounded-xl text-lg font-medium transition"
            >
              Code <FaGithub className="text-sm" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>
</section>
    </>
  )
}
