import { useState, useEffect, useRef } from 'react'
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update active section
      const sections = navLinks.map((l) => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`} aria-label="Main navigation">
      <div className="nav-container">
        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={() => handleNavClick('#home')} aria-label="BuildWithNaveen home">
          <span className="logo-icon"><Code2 size={18} /></span>
          <span className="logo-text">
            <span className="logo-brand">BuildWithNaveen</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`nav-link ${activeSection === href.slice(1) ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="nav-controls">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm nav-resume"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="btn btn-primary btn-sm nav-cta"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="mobile-links" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`mobile-link ${activeSection === href.slice(1) ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                tabIndex={menuOpen ? 0 : -1}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.html"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary mobile-resume-btn"
          tabIndex={menuOpen ? 0 : -1}
        >
          Resume
        </a>
        <a
          href="#contact"
          className="btn btn-primary mobile-hire-btn"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
          tabIndex={menuOpen ? 0 : -1}
        >
          Hire Me
        </a>
      </div>
    </nav>
  )
}
