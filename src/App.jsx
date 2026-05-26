import Navbar   from './components/Navbar.jsx'
import Hero     from './components/Hero.jsx'
import Stats    from './components/Stats.jsx'
import Services from './components/Services.jsx'
import Plans    from './components/Plans.jsx'
import About    from './components/About.jsx'
import FAQ      from './components/FAQ.jsx'
import Contact  from './components/Contact.jsx'
import Footer   from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Plans />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
