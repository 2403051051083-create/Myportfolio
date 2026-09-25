import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import './ScrollToTop.css'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`scroll-top-btn ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}
