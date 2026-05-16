import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    'Home',
    'About',
    'Skills',
    'Projects',
    'Experience',
    'Contact',
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold">
          Yogesh
          <span className="text-purple-500">Badgujar</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-zinc-300">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="relative hover:text-purple-400 transition duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-white"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#111] border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 gap-5 text-zinc-300">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-purple-400 transition duration-300 text-lg"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}