import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import { useAuthListener } from '@/hooks/useAuth'
import { Progress } from '@/components/ui/progress'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ProtectedRouteProps {
  redirectPath?: string
  children?: React.ReactNode
}

export const ProtectedRoute = ({ redirectPath = '/auth/login', children }: ProtectedRouteProps) => {
  const { isAuthReady } = useAuthListener()
  const user = useAuthStore((state) => state.user)

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isAuthReady) {
      const interval = setInterval(() => {
        setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 10))
      }, 200)
      return () => clearInterval(interval)
    } else {
      setProgress(100)
    }
  }, [isAuthReady])

  if (!isAuthReady) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-background text-foreground'>
        <Card className='w-[350px] text-center p-6 space-y-4'>
          <CardHeader>
            <CardTitle>Đang tải...</CardTitle>
            <CardDescription>Đang kiểm tra trạng thái xác thực của bạn.</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col items-center gap-4'>
            <Progress value={progress} className='w-full h-2' />
          </CardContent>
        </Card>
      </div>
    )
  }

  if (user === null) {
    return <Navigate to={redirectPath} replace />
  }
  return children ? <>{children}</> : <Outlet />
}

export default ProtectedRoute
