import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from './pages/HomeScreen'
import AboutScreen from './pages/AboutScreen'
import ContactScreen from './pages/ContactScreen'
import NavBar from './components/NavBar'

const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
