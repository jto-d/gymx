import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, ExerciseDetail } from './pages'
import { Navbar } from './components'

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/exercise/:id" element={<ExerciseDetail />} />

        </Routes>

    </div>
  )
}

export default App;