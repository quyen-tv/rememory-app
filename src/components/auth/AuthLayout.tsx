import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui'
import { useScrollAndMobile } from '@/hooks'

interface AuthLayoutProps {
  children: ReactNode
  title: string
  actionButtonText?: string
  onActionButtonClick?: () => void
  mobilePromptText?: string
  mobileLinkText?: string
  onMobileLinkClick?: () => void
}

const AuthLayout = ({
  children,
  title,
  actionButtonText,
  onActionButtonClick,
  mobilePromptText,
  mobileLinkText,
  onMobileLinkClick
}: AuthLayoutProps) => {
  const { isMobile } = useScrollAndMobile()
  const navigate = useNavigate()

  return (
    <div className='min-h-screen flex items-center justify-center bg-[color:var(--background)] relative'>
      <button
        onClick={() => navigate(-1)}
        className={`absolute ${isMobile ? 'right-8' : 'left-8'} top-8 z-20 cursor-pointer text-5xl text-[color:var(--foreground)] opacity-60 hover:opacity-100 transition-all`}
      >
        &times;
      </button>
      {!isMobile && actionButtonText && onActionButtonClick && (
        <Button
          variant='outline'
          onClick={onActionButtonClick}
          className='absolute right-8 top-8 z-20 h-12 cursor-pointer px-6 py-2 rounded-2xl border-2 border-[color:var(--border)] text-[color:var(--foreground)] font-bold shadow-[0_4px_0_0_var(--border)] bg-[color:var(--background)]/80 hover:bg-[color:var(--accent)]/30 transition-all'
        >
          {actionButtonText}
        </Button>
      )}
      <div className='w-full max-w-md rounded-3xl p-8 flex flex-col items-center relative'>
        <h2 className='text-3xl font-extrabold text-[color:var(--foreground)] mb-6 text-center drop-shadow-lg'>
          {title}
        </h2>
        {children}
        {isMobile && mobileLinkText && onMobileLinkClick && (
          <div className='mt-6 w-full text-center'>
            <p className='text-gray-400 text-sm text-center font-semibold'>
              {mobilePromptText || ''}{' '}
              <span
                onClick={onMobileLinkClick}
                className='cursor-pointer font-bold text-[color:var(--secondary)] hover:text-[color:var(--secondary)]/90'
              >
                {mobileLinkText}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export { AuthLayout }
