import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import HomeScreen from './pages/HomeScreen'
import AboutScreen from './pages/AboutScreen'
import ContactScreen from './pages/ContactScreen'
import NavBar from './components/NavBar'
import LoginScreen from './pages/LoginScreen'
import { UserContext } from './context/UserContext'

const App = () => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user || Object.keys(user).length === 0) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
