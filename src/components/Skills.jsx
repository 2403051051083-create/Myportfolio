import { useEffect, useRef } from 'react'
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs, SiExpress,
  SiMongodb, SiMysql, SiGit, SiGithub, SiVercel, SiGooglecloud,
  SiCanvas, SiOpenaigym,
} from 'react-icons/si'
import { FaJava, FaMicrosoft } from 'react-icons/fa'
import { Cpu, Database, Globe, Wrench, Layers } from 'lucide-react'
import './Skills.css'

const skillCategories = [
  {
    id: 'web',
    label: 'Web Development',
    icon: <Globe size={18} />,
    color: '#6366f1',
    skills: [
      { name: 'HTML', icon: <SiHtml5 />, color: '#e34f26' },
      { name: 'CSS', icon: <SiCss />, color: '#264de4' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
      { name: 'React.js', icon: <SiReact />, color: '#61dafb' },
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
      { name: 'Express.js', icon: <SiExpress />, color: '#808080' },
    ],
  },
  {
    id: 'database',
    label: 'Databases',
    icon: <Database size={18} />,
    color: '#10b981',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
      { name: 'SQL', icon: <SiMysql />, color: '#4479a1' },
    ],
  },
  {
    id: 'languages',
    label: 'Programming Languages',
    icon: <Cpu size={18} />,
    color: '#a855f7',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
      { name: 'Java', icon: <FaJava />, color: '#f89820' },
    ],
  },
  {
    id: 'productivity',
    label: 'Productivity & Design',
    icon: <Layers size={18} />,
    color: '#06b6d4',
    skills: [
      { name: 'MS Word', icon: <FaMicrosoft />, color: '#2b7cd3' },
      { name: 'PowerPoint', icon: <FaMicrosoft />, color: '#d24726' },
      { name: 'Canva', icon: <SiCanvas />, color: '#00c4cc' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: <Wrench size={18} />,
    color: '#f59e0b',
    skills: [
      { name: 'Git', icon: <SiGit />, color: '#f05032' },
      { name: 'GitHub', icon: <SiGithub />, color: '#ffffff' },
      { name: 'Vercel', icon: <SiVercel />, color: '#ffffff' },
      { name: 'Render', icon: <Globe size={16} />, color: '#46e3b7' },
      { name: 'Google Cloud', icon: <SiGooglecloud />, color: '#4285f4' },
      { name: 'ChatGPT', icon: <SiOpenaigym />, color: '#10a37f' },
      { name: 'Antigravity', icon: <Cpu size={16} />, color: '#6366f1' },
    ],
  },
]

export default function Skills() {
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
      { threshold: 0.08 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Cpu size={13} /> My Skills
          </span>
          <h2 className="section-title">
            Technologies I <span>Work With</span>
          </h2>
          <p className="section-subtitle">
            A curated set of technologies and tools I use to build modern applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div
              key={category.id}
              className="skill-category-card reveal"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="skill-category-header">
                <div className="category-icon" style={{ '--cat-color': category.color }}>
                  {category.icon}
                </div>
                <h3 className="category-label">{category.label}</h3>
              </div>

              <div className="skill-pills">
                {category.skills.map((skill) => (
                  <div className="skill-pill" key={skill.name}>
                    <span
                      className="skill-pill-icon"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    <span className="skill-pill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
