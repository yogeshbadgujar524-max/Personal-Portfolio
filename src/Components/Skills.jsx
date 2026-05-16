import { motion } from 'framer-motion'
import {
  FaReact,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaCloud,
  FaTools,
} from 'react-icons/fa'

export default function Skills() {

const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description:
      'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Tailwind CSS', 'Angular', 'JavaScipt (ES6+)',"Typescript"],
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description:
      'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'PHP', 'Python'],
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description:
      'Designing and optimizing databases for scalability and performance.',
    tags: ['MongoDB', 'MySQL', 'Firebase'],
  },
  {
    title: 'Mobile Responsive',
    icon: FaMobileAlt,
    description:
      'Building websites for mobile view with modern technologies.',
    tags: [, 'CSS Media Query','Tailwind CSS'],
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description:
      'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Vercel', 'Render', 'CI/CD'],
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description:
      'Essential tools and technologies used in daily development workflow.',
    tags: ['Git', 'GitHub', 'Figma', 'VS Code'],
  },
]
  return (
    <section id="skills" className="py-28 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16"
        >
          My <span className="text-purple-500">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-black border border-white/10 hover:border-purple-500/40 rounded-3xl p-8 transition duration-300 shadow-lg hover:shadow-purple-500/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                  <Icon className="text-3xl text-purple-400" />
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {skill.title}
                </h3>

                <p className="text-zinc-400 leading-7 mb-6">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {skill.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-sm text-zinc-300 hover:border-purple-500/40 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}