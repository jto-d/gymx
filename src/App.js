import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
        Navbar
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />

        </Routes>

    </div>
  )
}

export default App