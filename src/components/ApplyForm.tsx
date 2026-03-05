import { useState } from 'react'

type ApplicationFormData = {
  name: string
  ageRange: string
  instagram: string
  trainingDuration: string
  currentLevel: string
  trainingDays: string
  mainGoal: string
  obstacles: string
  investment: string
}

function ApplyForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    ageRange: '',
    instagram: '',
    trainingDuration: '',
    currentLevel: '',
    trainingDays: '',
    mainGoal: '',
    obstacles: '',
    investment: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setStep((prev) => prev + 1)
  }

  return (
    <form
      className="apply-form"
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST"
    >
      <input type="hidden" name="_subject" value="New Coaching Application" />

      {step === 1 && (
        <>
          <h3>Step 1: Tell us about yourself</h3>

          <label>
            What's your name?
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Which age range do you fall into?
            <select
              name="ageRange"
              value={formData.ageRange}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="under18">Under 18</option>
              <option value="18-24">18-24</option>
              <option value="25-34">25-34</option>
              <option value="35-44">35-44</option>
              <option value="45+">45+</option>
            </select>
          </label>

          <label>
            What's your Instagram @ ?
            <input
              type="text"
              name="instagram"
              placeholder="@yourhandle"
              value={formData.instagram}
              onChange={handleChange}
            />
          </label>

          <label>
            How long have you been training?
            <select
              name="trainingDuration"
              value={formData.trainingDuration}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="under3months">Less than 3 months</option>
              <option value="3to12months">3-12 months</option>
              <option value="1to3years">1-3 years</option>
              <option value="3plus">3+ years</option>
            </select>
          </label>

          <label>
            Which best describes your current level?
            <select
              name="currentLevel"
              value={formData.currentLevel}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </label>

          <label>
            How many days per week can you realistically train?
            <select
              name="trainingDays"
              value={formData.trainingDays}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="2">2 days</option>
              <option value="3">3 days</option>
              <option value="4">4 days</option>
              <option value="5+">5+ days</option>
            </select>
          </label>

          <button type="button" className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h3>Step 2: Your goals and commitment</h3>

          <input type="hidden" name="name" value={formData.name} />
          <input type="hidden" name="ageRange" value={formData.ageRange} />
          <input type="hidden" name="instagram" value={formData.instagram} />
          <input
            type="hidden"
            name="trainingDuration"
            value={formData.trainingDuration}
          />
          <input type="hidden" name="currentLevel" value={formData.currentLevel} />
          <input type="hidden" name="trainingDays" value={formData.trainingDays} />

          <label>
            What is your #1 priority right now?
            <select
              name="mainGoal"
              value={formData.mainGoal}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="buildMuscle">Build muscle</option>
              <option value="getStronger">Increase strength</option>
              <option value="learnSkills">Learn calisthenics skills</option>
              <option value="loseFat">Lose fat</option>
              <option value="fitness">General fitness</option>
            </select>
          </label>

          <label>
            What has been the biggest obstacle to your progress so far?
            <textarea
              name="obstacles"
              placeholder="Injuries, lack of structure, motivation, time..."
              rows={4}
              value={formData.obstacles}
              onChange={handleChange}
            />
          </label>

          <label>
            How much are you open to investing in coaching if it's the right
            fit? 💵
            <select
              name="investment"
              value={formData.investment}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select your investment
              </option>
              <option value="100-199">$100 - $199</option>
              <option value="200-299">$200 - $299</option>
              <option value="300-399">$300 - $399</option>
              <option value="400-499">$400 - $499</option>
              <option value="500+">$500+</option>
            </select>
          </label>

          <button type="submit" className="btn btn-primary">
            Submit Application
          </button>
        </>
      )}
    </form>
  )
}

export default ApplyForm
