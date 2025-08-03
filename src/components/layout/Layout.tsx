import { useRef, type ReactNode } from 'react'
import { Header, Sidebar, Navbar } from '@/components/layout'
import { useScrollAndMobile } from '@/hooks'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const mainRef = useRef<HTMLElement>(null)
  const { isScrolled, isMobile } = useScrollAndMobile({ scrollContainerRef: mainRef })

  return (
    <div className='flex flex-col h-screen bg-[var(--background)] text-[var(--foreground)]'>
      <Header isScrolled={isScrolled} isMobile={isMobile} />
      <div className='flex flex-1 overflow-hidden'>
        <div className='hidden md:block'>
          <Sidebar />
        </div>
        <main ref={mainRef} className='flex-1 overflow-y-auto p-6'>
          {children}
        </main>
      </div>
      <div className='md:hidden'>
        <Navbar isScrolled={isScrolled} />
      </div>
    </div>
  )
}

export default Layout
