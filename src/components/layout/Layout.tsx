import type { ReactNode } from 'react'
import { Header } from '@/components/layout'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex h-screen bg-[var(--background)] text-[var(--foreground)]'>
      <div className='flex-1 flex flex-col overflow-hidden'>
        <Header />
        <main className='flex-1 overflow-y-auto p-6'>{children}</main>
      </div>
    </div>
  )
}

export default Layout
