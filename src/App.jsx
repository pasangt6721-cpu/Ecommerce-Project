import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Base from './Base'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Base />}>
          
        </Route>
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App

