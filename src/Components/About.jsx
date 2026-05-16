import { motion } from 'framer-motion'
import aboutImg from '../assets/profile.jpeg'

export default function About() {
    return (
        <section id="about" className="py-28 px-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
            >
                <div className='flex justify-center items-center flex-col gap-10'>
                    <h2 className="text-5xl font-bold">
                        About <span className="text-purple-500">Me</span>
                    </h2>

                    <p className="text-zinc-500 leading-8 text-lg">
                        Passionate developer building scalable modern applications.
                    </p>
                </div>
            </motion.div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mt-20">
                <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6,ease:"easeInOut" }}
                    src={aboutImg}
                    alt="about"
                    className="rounded-3xl"
                />
                <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                className='py-10'>
                    <h2 className='text-3xl font-bold text-fuchsia-600'>My Journey</h2>
                    <h4 className='mt-10 text-lg text-gray-400'>I'm a passionate full-stack developer with 2 Years of experience creating web solutions and projects. My journey started with basic HTML/CSS websites and has evolved into building complex web applications with modern frameworks.

                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and tutorials. I believe in continuous learning and pushing the boundaries of what's possible on the web.
                        I am well trainned in Web Development such as Error Handling , Responsive Desingining, Problem Solving.
                        i have experience of 3 Months of Internship and i will strong my skills in web dev / full stack</h4>
                        <div className='flex flex-col mt-10 text-xl'>
                        <h4 className='text-3xl font-bold text-amber-900'>Hobbies </h4>
                        <ol className='list-disc ml-10 mt-5 text-zinc-400'>
                            <li>Singing</li>
                            <li>Travelling</li>
                            <li>Photo Editing</li>
                        </ol>
                        </div>
                </motion.div>
            </div>
        </section>
    )
}
