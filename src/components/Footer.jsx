import { Mail, Code2, Heart } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: <FaGithub size={18} />, href: 'https://github.com/2403051051083-create', label: 'GitHub' },
  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/naveenyadav2007/', label: 'LinkedIn' },
  { icon: <Mail size={18} />, href: 'mailto:ny0462344@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Code2 size={18} />
              <span>BuildWithNaveen</span>
            </div>
            <p className="footer-tagline">
              Full-Stack Developer & B.Tech CSE Student building modern web and AI-powered solutions.
            </p>
            <div className="footer-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="footer-social"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <ul>
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="footer-link"
                    onClick={(e) => { e.preventDefault(); scrollTo(href) }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4 className="footer-links-title">Contact</h4>
            <div className="footer-contact-items">
              <a href="mailto:ny0462344@gmail.com" className="footer-contact-item">
                <Mail size={14} /> ny0462344@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/naveenyadav2007/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <FaLinkedin size={14} /> LinkedIn Profile
              </a>
              <a
                href="https://github.com/2403051051083-create"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <FaGithub size={14} /> GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} <strong>Naveen Yadav</strong>. All rights reserved.
          </p>
          <p className="footer-made">
            Built with <Heart size={13} fill="currentColor" className="heart" /> using React.js + Node.js + MongoDB
          </p>
        </div>
      </div>
    </footer>
  )
}
