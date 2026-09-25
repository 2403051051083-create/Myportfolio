import { useEffect, useRef } from 'react'
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react'
import './Education.css'

export default function Education() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={13} /> Education
          </span>
          <h2 className="section-title">
            Academic <span>Background</span>
          </h2>
          <p className="section-subtitle">
            My formal education journey in Computer Science Engineering.
          </p>
        </div>

        <div className="education-wrapper reveal">
          <div className="education-card">
            {/* Left accent */}
            <div className="edu-accent" />

            <div className="edu-body">
              {/* Icon */}
              <div className="edu-icon">
                <GraduationCap size={28} />
              </div>

              {/* Content */}
              <div className="edu-content">
                <div className="edu-meta">
                  <span className="edu-status">Currently Enrolled</span>
                </div>

                <h3 className="edu-degree">
                  B.Tech in Computer Science Engineering
                </h3>
                <h4 className="edu-college">Parul University</h4>

                <div className="edu-details">
                  <div className="edu-detail-item">
                    <MapPin size={14} />
                    <span>Vadodara, Gujarat, India</span>
                  </div>
                  <div className="edu-detail-item">
                    <Calendar size={14} />
                    <span>2024 – 2028 (4 Years)</span>
                  </div>
                  <div className="edu-detail-item">
                    <BookOpen size={14} />
                    <span>Full-Time</span>
                  </div>
                </div>

                <div className="edu-focus">
                  <p className="focus-label">Focus Areas</p>
                  <div className="focus-tags">
                    {[
                      'Web Development',
                      'Data Structures',
                      'Algorithms',
                      'Databases',
                      'Software Engineering',
                      'AI & ML Fundamentals',
                      'Computer Networks',
                      'Operating Systems',
                    ].map((tag) => (
                      <span className="focus-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Year Badge */}
              <div className="edu-year-badge">
                <span className="year-big">2024</span>
                <span className="year-label">Started</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
