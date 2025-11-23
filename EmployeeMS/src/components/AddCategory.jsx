import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AddCategory = () => {
  const [category, setCategory] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    setCategory(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitting category:', category)
    axios.post('http://localhost:3000/auth/add_category', { category })
      .then(result => {
        if (result.data.Status) {
          navigate('/dashboard/catagory')
        } else {
          alert(result.data.error)
        }
      })
      .catch(error => {
        console.error('There was an error adding the category!', error)
      })
  }
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
    >
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-lg w-96 relative z-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add Category</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category:
            </label>
            <input
              type="text"
              name="category"
              value={category}
              onChange={handleChange}
              placeholder="Enter Category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Category
          </button>
        </form>

      </div>
    </div>
  )
}

export default AddCategory
