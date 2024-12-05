import React from 'react'
import Letter from './pages/Letter'
import Next from './pages/Next'
import { Route, RouterProvider, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='h-screen w-screen'>
      <Routes>
        <Route path='/letter' element={<Letter />} />
        <Route path='/next' element={<Next />} />
      </Routes>
      
      
    </div>
  )
}

export default App