import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Reset from './components/Reset'
import Employee from './components/Employee'
import Catagory from './components/Catagory'
import Profile from './components/Profile'
import AddCategory from './components/AddCategory'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard/employee' element={<Employee />}></Route>
          <Route path='/dashboard/catagory' element={<Catagory />}></Route>
          <Route path='/dashboard/profile' element={<Profile />}></Route>
          <Route path='/dashboard/add_catagory' element={<AddCategory />}></Route>
        </Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/Reset' element={<Reset />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
