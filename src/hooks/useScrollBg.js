import { useEffect } from 'react'

const COLORS = { navy: '#010626', cloud: '#f9f4f0' }

export function useScrollBg() {
  useEffect(() => {
    const sections = document.querySelectorAll('[data-bg]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            document.body.style.backgroundColor = COLORS[entry.target.dataset.bg]
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])
}
