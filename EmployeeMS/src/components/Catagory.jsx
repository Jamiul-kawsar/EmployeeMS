import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Catagory = () => {

  const [catagory, setCatagory] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/auth/category')
      .then(result => {
        console.log(result.data);
        if(result.data.Status){
          setCatagory(result.data.Result);
        }
        else{
          alert(result.data.error);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the categories!', error)
      })
  }, [])

  return (
    <div>
      <div className='flex justify-center items-center mt-7'>
        <h1 className='text-2xl font-semibold'>Catagory List</h1>
      </div>
      <div className='px-5 mt-3'>
        <button className='bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition'>
            <Link to="/dashboard/add_catagory">Add Catagory</Link>
        </button>
        {/* Catagory Table */}
        <div className='mt-5 overflow-x-auto shadow-md rounded-lg'>
          <table className='-full bg-white border-collapse'>
            <thead>
              <tr className='bg-gradient-to-r from-gray-800 to-gray-900 text-white'>
                <th className='px-6 py-4 text-left text-sm font-semibold'>Name</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {catagory.map((cat) => (
                <tr key={cat.id}>
                  <td className='px-6 py-4'>
                    <p className='text-gray-800 font-medium'>{cat.name}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Catagory
