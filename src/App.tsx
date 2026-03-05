import './App.css'
import ApplySection from './components/ApplySection'
import FaqSection from './components/FaqSection'
import HeroSection from './components/HeroSection'
import PainPointSection from './components/PainPointSection'
import ProcessSection from './components/ProcessSection'
import SiteFooter from './components/SiteFooter'
import ValuePropsSection from './components/ValuePropsSection'

function App() {
  return (
    <main className="landing-page">
      <HeroSection />
      <PainPointSection />
      <ValuePropsSection />
      <ProcessSection />
      <FaqSection />
      <ApplySection />
      <SiteFooter />
    </main>
  )
}

export default App
