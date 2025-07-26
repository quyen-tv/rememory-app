import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from '@/pages/landing/LandingPage'
import LoginPage from '@/pages/auth/LoginPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/auth/login' element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
