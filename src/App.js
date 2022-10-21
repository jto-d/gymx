import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Exercise, ExerciseDetail, Tracker, Register, Login } from './pages'
import { Navbar, Footer } from './components'

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/exercises/" element={<Exercise />} />

            <Route path="/exercise/:id" element={<ExerciseDetail />} />

            <Route path="/tracker/" element={<Tracker />} />

            <Route path="/register/" element={<Register />} />

            <Route path="/login/" element={<Login />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App;