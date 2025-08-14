import { useEffect, type ReactNode } from 'react'
import { Header, Sidebar, Navbar } from '@/components/layout'
import { useScrollAndMobile } from '@/hooks'
import { useScrollStore } from '@/store/scrollStore'

interface LayoutProps {
  children: ReactNode
  showSidebar?: boolean
  showNavbar?: boolean
  showHeader?: boolean
}

const Layout = ({ children, showSidebar = true, showNavbar = false, showHeader = true }: LayoutProps) => {
  const { isScrolled, isMobile } = useScrollAndMobile()
  const setIsScrolled = useScrollStore((state) => state.setIsScrolled)

  useEffect(() => {
    setIsScrolled(isScrolled)
  }, [isScrolled, setIsScrolled])

  return (
    <div className='flex flex-col h-screen bg-[var(--background)] text-[var(--foreground)]'>
      {showHeader && <Header isMobile={isMobile} />}
      <div className='flex flex-1'>
        {showSidebar && (
          <div className='hidden md:block'>
            <Sidebar />
          </div>
        )}
        <main className='flex-1'>{children}</main>
      </div>
      {showNavbar && (
        <div className='md:hidden'>
          <Navbar />
        </div>
      )}
    </div>
  )
}

export default Layout
