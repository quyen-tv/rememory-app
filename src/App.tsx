import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from '@/pages/landing/LandingPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
