import { useEffect, useRef } from 'react'
import { Award, ExternalLink, Trophy } from 'lucide-react'
import './Certifications.css'

const certifications = [
  {
    id: 'aws-cloud',
    name: 'AWS Cloud Computing',
    org: 'Amazon Web Services (AWS)',
    type: 'certification',
    icon: '☁️',
    color: '#f59e0b',
    link: null,
  },
  {
    id: 'os-network',
    name: 'Basic Operating System and Computer Network',
    org: 'Online Learning Platform',
    type: 'certification',
    icon: '🖥️',
    color: '#6366f1',
    link: null,
  },
  {
    id: 'java-kg',
    name: 'Java Certificate',
    org: 'KG Coding',
    type: 'certification',
    icon: '☕',
    color: '#f89820',
    link: null,
  },
]

const achievements = [
  {
    id: 'isro-hackathon',
    name: 'ISRO Hackathon',
    org: 'Indian Space Research Organisation (ISRO)',
    desc: 'Participated in the ISRO Hackathon — a national-level competition encouraging innovation in space technology and problem-solving.',
    type: 'achievement',
    icon: '🚀',
    color: '#10b981',
  },
]

export default function Certifications() {
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

  return (
    <section id="certifications" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Award size={13} /> Certifications & Achievements
          </span>
          <h2 className="section-title">
            My <span>Credentials</span>
          </h2>
          <p className="section-subtitle">
            Certifications earned and achievements gained through continuous learning.
          </p>
        </div>

        {/* Certifications */}
        <div className="cred-section reveal">
          <div className="cred-section-header">
            <Award size={18} />
            <h3>Certifications</h3>
          </div>

          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <div
                className="cert-card"
                key={cert.id}
                style={{ '--cert-color': cert.color, transitionDelay: `${i * 0.1}s` }}
              >
                <div className="cert-card-top">
                  <div className="cert-emoji">{cert.icon}</div>
                  <div className="cert-badge">Certified</div>
                </div>

                <div className="cert-info">
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-org">{cert.org}</p>
                </div>

                <div className="cert-footer">
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      aria-label={`View ${cert.name} certificate`}
                    >
                      <ExternalLink size={13} /> View Certificate
                    </a>
                  ) : (
                    <span className="cert-placeholder">
                      Certificate link — add yours here
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="cred-section reveal" style={{ transitionDelay: '0.3s' }}>
          <div className="cred-section-header">
            <Trophy size={18} />
            <h3>Achievements & Participation</h3>
          </div>

          <div className="achievement-grid">
            {achievements.map((ach) => (
              <div
                className="achievement-card"
                key={ach.id}
                style={{ '--ach-color': ach.color }}
              >
                <div className="ach-icon-wrap">
                  <span className="ach-emoji">{ach.icon}</span>
                </div>

                <div className="ach-content">
                  <div className="ach-label-row">
                    <span className="ach-badge">Participation</span>
                    <span className="ach-org">{ach.org}</span>
                  </div>
                  <h4 className="ach-name">{ach.name}</h4>
                  <p className="ach-desc">{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
