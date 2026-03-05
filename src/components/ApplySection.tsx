import ApplyForm from './ApplyForm'

function ApplySection() {
  return (
    <section className="section apply" id="apply">
      <h2>Get Your Free 12 Week Strength Roadmap</h2>
      <p>
        Discover exactly what is limiting your progress and the fastest way to
        fix it.
      </p>
      <p className="no-pressure">
        No sales calls. No pressure. If we are not a fit, you still walk away
        with a clear plan.
      </p>
      <ApplyForm />
    </section>
  )
}

export default ApplySection
