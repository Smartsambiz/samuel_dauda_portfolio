import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Process from './components/Process'
import Engineering from './components/Engineering'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Process />
        <Engineering />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
