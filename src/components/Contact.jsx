import { useState, useRef, useEffect } from 'react'
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'ny0462344@gmail.com',
    href: 'mailto:ny0462344@gmail.com',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Vadodara, Gujarat, India',
    href: null,
  },
  {
    icon: <FaGithub size={20} />,
    label: 'GitHub',
    value: 'github.com/2403051051083-create',
    href: 'https://github.com/2403051051083-create',
  },
  {
    icon: <FaLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/naveenyadav2007',
    href: 'https://www.linkedin.com/in/naveenyadav2007/',
  },
]

const initialForm = { name: '', email: '', message: '' }
const initialErrors = { name: '', email: '', message: '' }

function validate(form) {
  const errors = { ...initialErrors }
  if (!form.name.trim() || form.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.'
  if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Please enter a valid email address.'
  if (!form.message.trim() || form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState('')
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (status !== 'success' || !serverMessage) return

    const timer = setTimeout(() => {
      setServerMessage('')
      setStatus('idle')
    }, 5000)

    return () => clearTimeout(timer)
  }, [status, serverMessage])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (serverMessage) {
      setServerMessage('')
      setStatus('idle')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    const hasErrors = Object.values(validationErrors).some(Boolean)
    if (hasErrors) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')
    setServerMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
        setServerMessage(data.message || 'Message sent successfully!')
        setForm(initialForm)
        setErrors(initialErrors)
      } else {
        setStatus('error')
        setServerMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setServerMessage('Network error. Please check your connection and try again.')
    }
  }

  return (
    <section id="contact" className="section section-alt" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Mail size={13} /> Contact
          </span>
          <h2 className="section-title">
            Get In <span>Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project idea, a question, or just want to connect? Feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left — Info */}
          <div className="contact-info reveal">
            <h3 className="contact-info-title">Let's work together</h3>
            <p className="contact-info-text">
              I am open to internship opportunities, freelance projects, and collaboration. 
              Whether you have a project in mind or just want to say hi, my inbox is open.
            </p>

            <div className="contact-links">
              {contactInfo.map((item) => (
                <div className="contact-link-item" key={item.label}>
                  <div className="contact-link-icon">{item.icon}</div>
                  <div className="contact-link-detail">
                    <span className="contact-link-label">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="contact-link-value link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-link-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-form-wrap reveal" style={{ transitionDelay: '0.2s' }}>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              {/* Name */}
              <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Naveen Yadav"
                  value={form.name}
                  onChange={handleChange}
                  maxLength={100}
                  autoComplete="name"
                  aria-required="true"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span className="form-error" id="name-error" role="alert">
                    <AlertCircle size={13} /> {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="contact-email" className="form-label">
                  Email Address <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-required="true"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span className="form-error" id="email-error" role="alert">
                    <AlertCircle size={13} /> {errors.email}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                <label htmlFor="contact-message" className="form-label">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Hi Naveen, I'd like to discuss..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  maxLength={2000}
                  aria-required="true"
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                <div className="char-count">{form.message.length}/2000</div>
                {errors.message && (
                  <span className="form-error" id="message-error" role="alert">
                    <AlertCircle size={13} /> {errors.message}
                  </span>
                )}
              </div>

              {/* Server feedback */}
              {serverMessage && (
                <div
                  className={`form-feedback ${status === 'success' ? 'feedback-success' : 'feedback-error'}`}
                  role="alert"
                >
                  {status === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                  {serverMessage}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status === 'loading'}
                aria-label="Send message"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
