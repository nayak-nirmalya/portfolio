// Import Components
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Social from './components/Social'
import Footer from './components/Footer'
import Skills from './components/Slills'
import Education from './components/Education'
import { useEffect, useState } from 'react'

function App() {
  // eslint-disable-next-line
  const [title, setTitle] = useState('Nirmalya Nayak | Portfolio')

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Social />
      <Footer />
    </div>
  )
}

export default App
