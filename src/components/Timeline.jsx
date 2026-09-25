import { useEffect, useRef } from 'react'
import { GitBranch } from 'lucide-react'
import './Timeline.css'

const timelineEvents = [
  {
    year: '2024',
    title: 'Started B.Tech CSE',
    desc: 'Enrolled in B.Tech Computer Science Engineering at Parul University, Vadodara.',
    type: 'education',
  },
  {
    year: '2024 – Present',
    title: 'Learning & Building',
    desc: 'Actively learning programming, web development (HTML, CSS, JavaScript, React.js, Node.js), databases (MongoDB, SQL), and software development fundamentals.',
    type: 'skill',
  },
  {
    year: 'Projects',
    title: 'BuildWatch AI & AI Translator',
    desc: 'Designed and developed BuildWatch AI — a construction monitoring platform — and AI Translator, a multi-language translation application.',
    type: 'project',
  },
  {
    year: 'Present',
    title: 'Continuous Growth',
    desc: 'Continuously improving full-stack development skills, exploring AI-powered projects, improving problem-solving abilities, and building towards a strong developer career.',
    type: 'growth',
  },
]

const typeColors = {
  education: '#6366f1',
  skill: '#10b981',
  project: '#a855f7',
  growth: '#06b6d4',
}

const typeLabels = {
  education: 'Education',
  skill: 'Learning',
  project: 'Projects',
  growth: 'Growth',
}

export default function Timeline() {
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

    const elements = sectionRef.current?.querySelectorAll('.tl-item')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="timeline" className="section section-alt" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <GitBranch size={13} /> My Journey
          </span>
          <h2 className="section-title">
            Developer <span>Timeline</span>
          </h2>
          <p className="section-subtitle">
            A snapshot of my learning path and development milestones.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />

          {timelineEvents.map((event, i) => (
            <div
              key={i}
              className={`tl-item ${i % 2 === 0 ? 'tl-left' : 'tl-right'}`}
              style={{ '--delay': `${i * 0.15}s`, '--event-color': typeColors[event.type] }}
            >
              {/* Dot */}
              <div className="tl-dot" aria-hidden="true">
                <div className="tl-dot-inner" />
              </div>

              {/* Card */}
              <div className="tl-card">
                <div className="tl-card-header">
                  <span className="tl-type-badge">{typeLabels[event.type]}</span>
                  <span className="tl-year">{event.year}</span>
                </div>
                <h3 className="tl-title">{event.title}</h3>
                <p className="tl-desc">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
