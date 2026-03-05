import './App.css'
import ApplySection from './components/ApplySection'
import FaqSection from './components/FaqSection'
import HeroSection from './components/HeroSection'
import PainPointSection from './components/PainPointSection'
import ProofSection from './components/ProofSection'
import ProcessSection from './components/ProcessSection'
import SiteFooter from './components/SiteFooter'
import TestimonialSliderSection from './components/TestimonialSliderSection'
import ValuePropsSection from './components/ValuePropsSection'

function App() {
  return (
    <main className="landing-page">
      <HeroSection />
      <PainPointSection />
      <ValuePropsSection />
      <ProofSection />
      <ProcessSection />
      <FaqSection />
      <TestimonialSliderSection />
      <ApplySection />
      <SiteFooter />
    </main>
  )
}

export default App
