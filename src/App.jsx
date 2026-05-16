import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {

  return (
    <>
    <div className="bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer/>
    </div>
    </>
  )
}

export default App
