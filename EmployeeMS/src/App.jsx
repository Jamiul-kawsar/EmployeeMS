import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Reset from './components/Reset'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/Reset' element={<Reset />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
