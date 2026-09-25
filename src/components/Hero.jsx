import { useEffect, useRef } from 'react'
import { Mail, ArrowDown, Terminal } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Hero.css'

const TYPING_WORDS = ['Full-Stack Developer', 'React.js Developer', 'Node.js Developer', 'Problem Solver', 'B.Tech CSE Student']

const heroStats = [
  { value: '2+', label: 'Years Learning' },
  { value: '8+', label: 'Projects Built' },
  { value: '100%', label: 'Problem Solving' },
]

export default function Hero() {
  const typingRef = useRef(null)
  const cursorRef = useRef(null)

  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeout

    const type = () => {
      const current = TYPING_WORDS[wordIndex]
      const display = isDeleting
        ? current.substring(0, charIndex - 1)
        : current.substring(0, charIndex + 1)

      if (typingRef.current) typingRef.current.textContent = display

      charIndex = isDeleting ? charIndex - 1 : charIndex + 1
      let speed = isDeleting ? 60 : 100

      if (!isDeleting && charIndex === current.length + 1) {
        speed = 2000
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        wordIndex = (wordIndex + 1) % TYPING_WORDS.length
        speed = 400
      }

      timeout = setTimeout(type, speed)
    }

    timeout = setTimeout(type, 800)
    return () => clearTimeout(timeout)
  }, [])

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero-section">
      {/* Background orbs */}
      <div className="hero-bg" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-pattern" />
      </div>

      <div className="container hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-greeting">
            <Terminal size={14} />
            <span>console.log("Hello, World! 👋")</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm{' '}
            <span className="hero-name gradient-text">Naveen Yadav</span>
          </h1>

          <div className="hero-subtitle">
            <span ref={typingRef} className="typing-text" aria-live="polite"></span>
            <span ref={cursorRef} className="typing-cursor" aria-hidden="true">|</span>
          </div>

          <p className="hero-description">
            I build modern web applications and AI-powered solutions while continuously
            learning and improving my development skills.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View My Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Contact Me
            </a>
            <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              View Resume
            </a>
          </div>

          <div className="hero-stats" aria-label="Highlights">
            {heroStats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/2403051051083-create"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/naveenyadav2007/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:ny0462344@gmail.com"
              className="social-icon"
              aria-label="Send email"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right — Code Card */}
        <div className="hero-visual" aria-hidden="true">
          <div className="code-card animate-float">
            <div className="code-card-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="code-card-title">naveen.js</span>
            </div>
            <pre className="code-card-body">
              <code>
                <span className="code-keyword">const</span>{' '}
                <span className="code-var">naveen</span>{' '}
                <span className="code-operator">=</span> {'{'}
                {'\n'}
                {'  '}
                <span className="code-key">name</span>:{' '}
                <span className="code-string">"Naveen Yadav"</span>,{'\n'}
                {'  '}
                <span className="code-key">role</span>:{' '}
                <span className="code-string">"Full-Stack Dev"</span>,{'\n'}
                {'  '}
                <span className="code-key">university</span>:{' '}
                <span className="code-string">"Parul University"</span>,{'\n'}
                {'  '}
                <span className="code-key">year</span>:{' '}
                <span className="code-number">2024</span>,{'\n'}
                {'  '}
                <span className="code-key">skills</span>: [{'\n'}
                {'    '}
                <span className="code-string">"React"</span>,{' '}
                <span className="code-string">"Node.js"</span>,{'\n'}
                {'    '}
                <span className="code-string">"MongoDB"</span>,{' '}
                <span className="code-string">"AI"</span>,{'\n'}
                {'  '}],{'\n'}
                {'  '}
                <span className="code-key">passion</span>:{' '}
                <span className="code-string">"Building solutions"</span>,{'\n'}
                {'  '}
                <span className="code-key">available</span>:{' '}
                <span className="code-boolean">true</span>,{'\n'}
                {'}'}
              </code>
            </pre>
          </div>

          {/* Floating badges */}
          <div className="float-badge badge-react animate-float-1">⚛ React.js</div>
          <div className="float-badge badge-node animate-float-2">🟢 Node.js</div>
          <div className="float-badge badge-mongo animate-float-3">🍃 MongoDB</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="scroll-indicator" onClick={handleScrollDown} aria-label="Scroll down to About section">
        <span>Scroll to explore</span>
        <ArrowDown size={16} />
      </button>
    </section>
  )
}
