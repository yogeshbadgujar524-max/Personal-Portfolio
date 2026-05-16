import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa'

export default function PortfolioApp() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <div className="bg-[#050505] text-white overflow-hidden min-h-screen font-sans">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            Emma<span className="text-purple-500">Watson</span>
          </h1>

          <div className="hidden md:flex gap-10 text-zinc-300">
            <a href="#home" className="hover:text-purple-400 transition">Home</a>
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#experience" className="hover:text-purple-400 transition">Experience</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-28"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div>
              <h2 className="text-6xl md:text-7xl font-extrabold leading-tight">
                Hi, I'm{' '}
                <span className="text-purple-500">Emma Watson</span>
              </h2>

              <div className="mt-5 text-4xl font-bold text-zinc-200">
                Full Stack Developer
              </div>
            </div>

            <p className="text-zinc-400 text-lg leading-8 max-w-xl">
              I create stunning web experiences with modern technologies,
              beautiful UI design, and smooth user interactions.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 transition font-semibold flex items-center gap-2 shadow-lg shadow-purple-600/30">
                View Work <FaArrowRight />
              </button>

              <button className="px-8 py-4 rounded-2xl border border-purple-500 hover:bg-purple-500/10 transition font-semibold">
                Contact Me
              </button>
            </div>

            <div className="flex gap-5 text-2xl text-zinc-400">
              <FaGithub className="hover:text-purple-500 cursor-pointer transition" />
              <FaLinkedin className="hover:text-purple-500 cursor-pointer transition" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-20 rounded-full"></div>

              <img
                src="/assets/profile.avif"
                alt="profile"
                className="relative w-[420px] h-[420px] object-cover rounded-full border-4 border-purple-500/30"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-16 text-center">
            About <span className="text-purple-500">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <img
              src="/assets/Girl.jpeg"
              alt="about"
              className="rounded-3xl shadow-2xl"
            />

            <div className="space-y-6 text-zinc-400 leading-8 text-lg">
              <p>
                Passionate developer focused on building scalable modern web
                applications with engaging user experiences.
              </p>

              <div className="grid gap-6 mt-8">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    key={item}
                    className="bg-zinc-900 border border-white/10 rounded-3xl p-6 hover:border-purple-500/40 transition"
                  >
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      Modern Development
                    </h3>

                    <p>
                      Building elegant and scalable digital products using
                      modern technologies.
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            My <span className="text-purple-500">Skills</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Frontend Development',
              'Backend Development',
              'Database Management',
              'Mobile Development',
              'Cloud & DevOps',
              'Tools & Technologies',
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5 }}
                className="bg-black border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{skill}</h3>

                <p className="text-zinc-400 leading-7">
                  Building modern responsive applications with smooth user
                  experiences and scalable architecture.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Featured <span className="text-purple-500">Projects</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <motion.div
                key={project}
                whileHover={{ scale: 1.03 }}
                className="group bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/40 transition"
              >
                <div className="overflow-hidden">
                  <img
                    src="/assets/project1.avif"
                    alt="project"
                    className="h-60 w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold">Project Title</h3>

                  <p className="text-zinc-400 leading-7">
                    Modern application with beautiful UI animations and full
                    stack architecture.
                  </p>

                  <button className="text-purple-400 hover:text-purple-300 transition">
                    View Project
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-28 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Work <span className="text-purple-500">Experience</span>
          </h2>

          <div className="space-y-10">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-black border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 transition"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-semibold">
                      Senior Frontend Developer
                    </h3>

                    <p className="text-purple-400 mt-2">TechCorp Inc.</p>
                  </div>

                  <div className="text-zinc-500">2020 - Present</div>
                </div>

                <p className="text-zinc-400 leading-8 mt-6">
                  Building scalable enterprise applications and creating modern
                  interactive user interfaces with React and modern tools.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            Contact <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-zinc-400 leading-8 text-lg mb-10">
            Have a project idea or want to collaborate? Let's build something
            amazing together.
          </p>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 hover:bg-purple-500 transition px-10 py-4 rounded-2xl font-semibold shadow-lg shadow-purple-600/30"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </section>
    </div>
  )
}
