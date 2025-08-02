import { Button } from '@/components/ui/button'
import { useLogout } from '@/hooks/useAuth'
import { useAuthStore } from '@/store/authStore'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Layout from '@/components/layout/Layout'

const Dashboard = () => {
  const logoutFunction = useLogout()
  const user = useAuthStore((state) => state.user)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logoutFunction()
    navigate('/')
  }

  return (
    <Layout>
      <div className='flex items-center justify-center min-h-full'>
        <Card className='w-full max-w-md p-6 shadow-lg rounded-lg text-center'>
          <CardHeader className='flex flex-col items-center space-y-4'>
            <Avatar className='h-24 w-24'>
              <AvatarImage
                src={user?.photoURL || 'https://github.com/shadcn.png'}
                alt={user?.displayName || 'User Avatar'}
              />
              <AvatarFallback>{user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>

            <CardTitle className='text-3xl font-bold'>
              Welcome, {user ? user.displayName || user.email?.split('@')[0] || 'Guest' : 'Guest'}!
            </CardTitle>

            {user && (
              <CardDescription className='text-gray-600 dark:text-gray-400 text-lg space-y-1'>
                <p>
                  Email: <span className='font-semibold text-[color:var(--foreground)]'>{user.email}</span>
                </p>
                <p>
                  User ID: <span className='font-semibold text-[color:var(--foreground)]'>{user.uid}</span>
                </p>
              </CardDescription>
            )}
          </CardHeader>

          <CardContent className='mt-6 flex flex-col items-center'>
            <Button
              onClick={handleLogout}
              disabled={!user}
              className='w-full text-lg py-3 rounded-lg font-semibold bg-red-600 hover:bg-red-700 text-white shadow-md transition-colors'
            >
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

export default Dashboard
