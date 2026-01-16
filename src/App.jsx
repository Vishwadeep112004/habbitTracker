import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import HabitTracker from './pages/HabitTracker'
import './App.css'

function App() {
  // Simple auth check - in real app, use proper auth system
  const isAuthenticated = () => {
    return localStorage.getItem('user') !== null
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/habits"
          element={isAuthenticated() ? <HabitTracker /> : <Navigate to="/login" />}
        />

        {/* Default Route */}
        <Route path="/" element={<Navigate to={isAuthenticated() ? '/habits' : '/login'} />} />
      </Routes>
    </Router>
  )
}

export default App
