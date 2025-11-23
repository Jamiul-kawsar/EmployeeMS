import React from 'react'
import { Link } from 'react-router-dom'

const Reset = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('./login-bg-page.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-lg w-96 relative z-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Reset Password</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Reset Your Password
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Back to {' '}
            <Link 
            to="/login" 
            className="text-sm text-blue-600 hover:underline"
          >
            Log in
          </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Reset