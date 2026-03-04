import './App.css'

function App() {
  return (
    <main className="about-page">
      <section className="hero">
        <p className="kicker">About The Coach</p>
        <h1>Meet Jordan Hale</h1>
        <p className="intro">
          Jordan helps busy professionals get stronger, move better, and stay
          consistent without spending hours in the gym.
        </p>
      </section>

      <section className="grid" aria-label="Coach highlights">
        <article className="panel">
          <h2>Coaching Philosophy</h2>
          <p>
            Progress starts with simple habits. Jordan combines strength,
            mobility, and accountability so clients can build routines they can
            actually maintain.
          </p>
        </article>

        <article className="panel">
          <h2>Credentials</h2>
          <ul>
            <li>NASM Certified Personal Trainer</li>
            <li>Precision Nutrition Level 1 Coach</li>
            <li>8+ years coaching in-person and online</li>
          </ul>
        </article>

        <article className="panel">
          <h2>Client Results</h2>
          <ul>
            <li>90% client retention after 6 months</li>
            <li>Average 12 lb fat loss in first 16 weeks</li>
            <li>Reduced chronic back pain through mobility programming</li>
          </ul>
        </article>
      </section>

      <section className="story">
        <h2>Why Jordan Coaches</h2>
        <p>
          After recovering from a serious knee injury in college, Jordan saw how
          good coaching can change confidence, energy, and daily life. That
          experience drives every program, check-in, and training plan today.
        </p>
      </section>
    </main>
  )
}

export default App
