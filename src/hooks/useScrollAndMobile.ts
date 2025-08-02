import { useState, useEffect, type RefObject } from 'react'

interface UseScrollAndMobileProps {
  scrollContainerRef?: RefObject<HTMLElement | null>
}

export function useScrollAndMobile({ scrollContainerRef }: UseScrollAndMobileProps = {}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef?.current) {
        setIsScrolled(scrollContainerRef.current.scrollTop > 0)
      } else {
        setIsScrolled(window.scrollY > 0)
      }
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    const scrollElement = scrollContainerRef?.current || window

    scrollElement.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    handleScroll()
    handleResize()

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [scrollContainerRef])

  return { isScrolled, isMobile }
}
