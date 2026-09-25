import { useEffect, useRef } from 'react'
import { ExternalLink, Star, Folder, Cpu, Globe } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiHtml5, SiCss,
} from 'react-icons/si'
import './Projects.css'

const techIconMap = {
  'React.js': <SiReact />,
  'Node.js': <SiNodedotjs />,
  'MongoDB': <SiMongodb />,
  'Express.js': <SiExpress />,
  'JavaScript': <SiJavascript />,
  'HTML': <SiHtml5 />,
  'CSS': <SiCss />,
  'AI': <Cpu size={14} />,
  'REST API': <Globe size={14} />,
}

const projects = [
  {
    id: 'buildwatch-ai',
    featured: true,
    name: 'BuildWatch AI',
    tagline: 'AI-Powered Construction Site Monitoring Platform',
    description:
      'BuildWatch AI is a construction-site monitoring and management platform designed to help users monitor construction-site activities through a centralized dashboard. AI is used to analyze work progress and provide useful insights about the growth and activity of the construction site.',
    problem:
      'Construction monitoring is often disorganized and lacks data-driven insights. Site managers struggle to track progress efficiently.',
    features: [
      'Construction-site activity monitoring',
      'Centralized management dashboard',
      'Work-progress tracking',
      'AI-based analysis & insights',
      'Construction growth analysis',
      'Activity visualization',
      'Data-driven reporting',
      'Modern dashboard interface',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'AI'],
    github: 'https://github.com/2403051051083-create',
    demo: null,
    color: '#6366f1',
  },
  {
    id: 'ai-translator',
    featured: false,
    name: 'AI Translator',
    tagline: 'Multi-Language Text Translation App',
    description:
      'AI Translator is a language translation application that allows users to convert text from one language into another. Users can enter text, select the target language, and receive the translated result through a clean and simple interface.',
    problem:
      'Users need a quick, clean interface for translating text between multiple languages without complexity.',
    features: [
      'Multi-language translation',
      'Input & output language selection',
      'Simple translation interface',
      'User-friendly design',
      'Fast translation workflow',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'AI', 'REST API'],
    github: 'https://github.com/2403051051083-create',
    demo: null,
    color: '#a855f7',
  },
]

function ProjectCard({ project }) {
  return (
    <div className={`project-card ${project.featured ? 'featured' : ''}`} id={`project-${project.id}`}>
      {project.featured && (
        <div className="featured-badge">
          <Star size={12} fill="currentColor" /> Featured Project
        </div>
      )}

      {/* Header */}
      <div className="project-header">
        <div className="project-folder" style={{ '--proj-color': project.color }}>
          <Folder size={22} />
        </div>
        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`View ${project.name} on GitHub`}
            title="View on GitHub"
          >
            <FaGithub size={18} />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`Live demo of ${project.name}`}
              title="Live Demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="project-content">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-desc">{project.description}</p>

        {/* Problem */}
        <div className="project-problem">
          <span className="problem-label">Problem Solved:</span>
          <p>{project.problem}</p>
        </div>

        {/* Features */}
        <div className="project-features">
          <h4 className="features-label">Key Features</h4>
          <ul className="features-list">
            {project.features.map((f, i) => (
              <li key={i}>
                <span className="feature-dot" style={{ background: project.color }} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="project-footer">
        <div className="project-tech">
          {project.tech.map((t) => (
            <span className="tech-chip" key={t}>
              {techIconMap[t] && <span className="tech-chip-icon">{techIconMap[t]}</span>}
              {t}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            aria-label={`View ${project.name} source code on GitHub`}
          >
            <FaGithub size={14} /> GitHub
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              aria-label={`View ${project.name} live demo`}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          ) : (
            <span className="btn btn-sm coming-soon" title="Demo coming soon">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
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
    <section id="projects" className="section section-alt" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Folder size={13} /> My Projects
          </span>
          <h2 className="section-title">
            What I've <span>Built</span>
          </h2>
          <p className="section-subtitle">
            Practical projects designed to solve real-world problems using modern web technologies.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="reveal"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="projects-cta reveal">
          <p>More projects coming soon. Stay tuned!</p>
          <a
            href="https://github.com/2403051051083-create"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaGithub size={16} /> View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}
