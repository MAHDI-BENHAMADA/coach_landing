import { useEffect, useRef, useState } from 'react'

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

const ageRangeLabelMap: Record<string, string> = {
  under18: 'Under 18',
  '18-24': '18-24',
  '25-34': '25-34',
  '35-44': '35-44',
  '45+': '45+',
}

const trainingDurationLabelMap: Record<string, string> = {
  under3months: 'Less than 3 months',
  '3to12months': '3-12 months',
  '1to3years': '1-3 years',
  '3plus': '3+ years',
}

const currentLevelLabelMap: Record<string, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

const trainingDaysLabelMap: Record<string, string> = {
  '2': '2 days',
  '3': '3 days',
  '4': '4 days',
  '5+': '5+ days',
}

const mainGoalLabelMap: Record<string, string> = {
  buildMuscle: 'Build muscle',
  getStronger: 'Increase strength',
  learnSkills: 'Learn calisthenics skills',
  loseFat: 'Lose fat',
  fitness: 'General fitness',
}

const investmentLabelMap: Record<string, string> = {
  '100-199': '$100 - $199',
  '200-299': '$200 - $299',
  '300-399': '$300 - $399',
  '400-499': '$400 - $499',
  '500+': '$500+',
}

function ApplyForm() {
  const rawFormId = (import.meta.env.VITE_FORMSPREE_FORM_ID ?? '').trim()
  const redirectUrl = (import.meta.env.VITE_FORMSPREE_REDIRECT_URL ?? '').trim()

  const normalizedFormId = rawFormId
    .replace(/^https?:\/\/formspree\.io\//i, '')
    .replace(/^\/?f\//i, '')

  const formAction = normalizedFormId
    ? `https://formspree.io/f/${normalizedFormId}`
    : 'https://formspree.io/f/YOUR_FORM_ID'

  const defaultThankYouUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/thank-you.html`
      : '/thank-you.html'

  const nextRedirectUrl = redirectUrl || defaultThankYouUrl

  const [step, setStep] = useState(1)
  const formRef = useRef<HTMLFormElement | null>(null)
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
    const { value } = e.target
    const field = e.target.dataset.field as keyof ApplicationFormData | undefined

    if (!field) {
      return
    }

    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setStep((prev) => prev + 1)
  }

  useEffect(() => {
    if (step > 1 && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [step])

  return (
    <form
      ref={formRef}
      className="apply-form"
      action={formAction}
      method="POST"
    >
      <input type="hidden" name="_subject" value="New Coaching Application" />
      <input type="hidden" name="_next" value={nextRedirectUrl} />
      <input type="text" name="_gotcha" className="form-gotcha" tabIndex={-1} autoComplete="off" />

      {!normalizedFormId ? (
        <p className="form-setup-note">
          Form not connected yet. Add <code>VITE_FORMSPREE_FORM_ID</code> in your
          local env file.
        </p>
      ) : null}

      {step === 1 && (
        <>
          <h3>Step 1: Tell us about yourself</h3>

          <label>
            What's your name?
            <input
              type="text"
              data-field="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Which age range do you fall into?
            <select
              data-field="ageRange"
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
              data-field="instagram"
              placeholder="@yourhandle"
              value={formData.instagram}
              onChange={handleChange}
            />
          </label>

          <label>
            How long have you been training?
            <select
              data-field="trainingDuration"
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
              data-field="currentLevel"
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
              data-field="trainingDays"
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

          <input type="hidden" name="Full Name" value={formData.name} />
          <input
            type="hidden"
            name="Age Range"
            value={ageRangeLabelMap[formData.ageRange] ?? ''}
          />
          <input type="hidden" name="Instagram" value={formData.instagram} />
          <input
            type="hidden"
            name="Training Duration"
            value={trainingDurationLabelMap[formData.trainingDuration] ?? ''}
          />
          <input
            type="hidden"
            name="Current Level"
            value={currentLevelLabelMap[formData.currentLevel] ?? ''}
          />
          <input
            type="hidden"
            name="Training Days"
            value={trainingDaysLabelMap[formData.trainingDays] ?? ''}
          />

          <label>
            What is your #1 priority right now?
            <select
              data-field="mainGoal"
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

          <input
            type="hidden"
            name="Main Goal"
            value={mainGoalLabelMap[formData.mainGoal] ?? ''}
          />

          <label>
            What has been the biggest obstacle to your progress so far?
            <textarea
              data-field="obstacles"
              placeholder="Injuries, lack of structure, motivation, time..."
              rows={4}
              value={formData.obstacles}
              onChange={handleChange}
            />
          </label>

          <input
            type="hidden"
            name="Biggest Obstacle"
            value={formData.obstacles}
          />

          <label>
            How much are you open to investing in coaching if it's the right
            fit? 💵
            <select
              data-field="investment"
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

          <input
            type="hidden"
            name="Investment Range"
            value={investmentLabelMap[formData.investment] ?? ''}
          />

          <button type="submit" className="btn btn-primary">
            Submit Application
          </button>
        </>
      )}
    </form>
  )
}

export default ApplyForm
