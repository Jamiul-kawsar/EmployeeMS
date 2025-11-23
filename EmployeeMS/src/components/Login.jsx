import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {motion} from 'framer-motion'

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  axios.defaults.withCredentials = true;
  const nevigate = useNavigate()
  const [error, setError] = useState('')
  
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3000/auth/adminlogin', values)
    .then(result => {
      if (result.data.loginStatus) {
        nevigate('/dashboard')
      }
      else{
        setError(result.data.error)
      }
    })
    .catch(err => {
      const msg = err.response?.data?.error || err.response?.data?.message || 'Login failed'
      setError(msg)
      console.error(err)
    })
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('./login-bg-page.jpg')",
      }}
    >
      {/* Add an overlay div for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <motion.div
      
        initial={{ opacity: 0, scale: 0.5, y: 0 }}   // Start position
        animate={{ opacity: 1, scale: 1, y: 0 }}       // Animate to center
        transition={{
          duration: 1,
          ease: "easeOut"
        }}
          
      className="bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-lg w-96 relative z-10">
        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Log in to your Account!</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Enter Your Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Enter Your Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          {/* Remember me checkbox and forgot password link in same row */}
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-700">Remember me</span>
            </label>
            <Link to='/Reset' className="text-sm text-blue-600 hover:underline">
              Forgot your password?
            </Link>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Log in
          </button>
        </form>
        {/* add sign up link */}
        <div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
