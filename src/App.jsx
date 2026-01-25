import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Base/>}>

          <Route index element={<Homepage />} />
          
        </Route>
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App

