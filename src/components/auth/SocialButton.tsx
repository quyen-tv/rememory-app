import { Button } from '@/components/ui/button'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  children: ReactNode
}

const SocialButton = ({ icon, children, className, ...props }: SocialButtonProps) => (
  <Button
    variant='outline'
    className={cn('flex-1 flex items-center justify-center gap-2 border-[color:var(--border)]', className)}
    {...props}
  >
    {icon} {children}
  </Button>
)

export default SocialButton
