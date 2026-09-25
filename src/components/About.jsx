import { useEffect, useRef } from 'react'
import { MapPin, GraduationCap, Code2, Brain, Layers } from 'lucide-react'
import './About.css'

const highlights = [
  {
    icon: <GraduationCap size={20} />,
    title: 'B.Tech CSE Student',
    desc: 'Parul University, 2024–2028',
  },
  {
    icon: <Code2 size={20} />,
    title: 'Full-Stack Developer',
    desc: 'Frontend & Backend development',
  },
  {
    icon: <Brain size={20} />,
    title: 'AI Enthusiast',
    desc: 'Building AI-powered applications',
  },
  {
    icon: <Layers size={20} />,
    title: 'Practical Builder',
    desc: 'Projects that solve real problems',
  },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section section-alt" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Code2 size={13} /> About Me
          </span>
          <h2 className="section-title">
            Who Am <span>I?</span>
          </h2>
          <p className="section-subtitle">
            A developer passionate about crafting solutions through code.
          </p>
        </div>

        <div className="about-grid">
          {/* Left — Text */}
          <div className="about-text reveal">
            <div className="about-badge">
              <span className="about-badge-dot" />
              <span>Open to opportunities</span>
            </div>

            <h3 className="about-heading">
              Building the web, one component at a time.
            </h3>

            <p className="about-para">
              I am a B.Tech Computer Science Engineering student at{' '}
              <strong>Parul University</strong> (2024–2028), based in
              Vadodara, Gujarat, India. I am deeply interested in full-stack
              web development and enjoy working across both frontend and
              backend layers of modern applications.
            </p>
            <p className="about-para">
              I work with technologies like{' '}
              <span className="highlight-tag">React.js</span>,{' '}
              <span className="highlight-tag">Node.js</span>, and{' '}
              <span className="highlight-tag">MongoDB</span> to build
              complete web applications. I am also learning and exploring
              AI-based development, having built projects like{' '}
              <strong>BuildWatch AI</strong> that integrate AI to provide
              useful insights.
            </p>
            <p className="about-para">
              I enjoy building practical projects that solve real-world
              problems. I continuously work on improving my programming
              skills, development practices, and overall technical
              knowledge.
            </p>

            <div className="about-location">
              <MapPin size={15} />
              <span>Vadodara, Gujarat, India</span>
            </div>
          </div>

          {/* Right — Highlights */}
          <div className="about-highlights reveal" style={{ animationDelay: '0.2s' }}>
            {highlights.map((item, i) => (
              <div className="highlight-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="highlight-icon">{item.icon}</div>
                <div className="highlight-info">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-number">4+</span>
                <span className="stat-label">Tech Stacks</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
