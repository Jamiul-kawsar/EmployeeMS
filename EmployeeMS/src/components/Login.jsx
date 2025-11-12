import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const nevigate = useNavigate()
  
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
      nevigate('/dashboard')
    })
    .catch(err => console.error(err))
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
      
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-lg w-96 relative z-10">
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
      </div>
    </div>
  )
}

export default Login
