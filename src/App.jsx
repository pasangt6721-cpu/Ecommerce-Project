import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Base from './Base'
import Hompage from './Pages/Hompage'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Base />}>
          <Route index element={<Hompage />} />


        </Route>
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App

