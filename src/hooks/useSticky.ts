import { useEffect, useState, useRef } from 'react'

export const useSticky = () => {
  const stickyRef = useRef<HTMLDivElement | null>(null)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.intersectionRatio < 1)
      },
      { threshold: [1] }
    )

    const el = stickyRef.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
      observer.disconnect()
    }
  }, [])

  return { stickyRef, isSticky }
}
