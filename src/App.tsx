import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LandingPage from '@/pages/landing/LandingPage'
import LoginPage from '@/pages/auth/LoginPage'
import Dashboard from './pages/dashboard/DashBoard'
import RegisterPage from '@/pages/auth/RegisterPage'
import ProtectedRoute from '@/components/ProtectedRoute'
import CreateSet from '@/pages/flashcard/CreateSet'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/auth/register' element={<RegisterPage />} />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path='/create-set'
          element={
            <ProtectedRoute>
              <CreateSet />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<Navigate to='/auth/login' />} />
      </Routes>
    </Router>
  )
}

export default App
