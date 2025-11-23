import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import {Menu, X, LayoutDashboard, IdCardLanyard, ChartBarStacked, UserPen, LogOut} from 'lucide-react'
import {motion} from 'framer-motion'

const Dashboard = () => {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);

  return (
  <div className="min-h-screen flex">
    {/* Sidebar */}
    <div className="w-80 md:w-76 lg:w-72 bg-gray-900 text-white flex flex-col p-4 space-y-4">
      <Link
        to="/Dashboard"
        className="text-2xl font-bold text-center mb-4 tracking-wide"
      >
        EmployeeMS
      </Link>

      <ul className="flex flex-col space-y-03 text-lg">
        <li>
          <Link
            to="/dashboard"
            className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            <LayoutDashboard className="inline-block mr-2" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/employee"
            className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            <IdCardLanyard className="inline-block mr-2" />
            Manage Employees
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/catagory"
            className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            <ChartBarStacked className="inline-block mr-2" />
            Categories
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/profile"
            className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            <UserPen className="inline-block mr-2" />
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/Dashboard"
            className="block px-4 py-2 rounded-lg hover:bg-red-500 transition"
          >
            <LogOut className="inline-block mr-2" />
            Log Out
          </Link>
        </li>
      </ul>
    </div>

    {/* Main Content */}
    <div className='flex-1 bg-gray-100' >
      <div className="text-4xl bg-gray-100 font-semibold pb-0 flex justify-center shadow-lg shadow-gray-300">
        <motion.div 
        initial={{ opacity: 0, x: 100 }}   // Start position
        animate={{ opacity: 1, x: 0 }}       // Animate to center
        transition={{
          duration: 1.0,
          ease: "easeInOut"
        }}
        >
          <h1 className="m-2">Employee Management System</h1>
        </motion.div>
      </div>
      {/* Add your page content here */}
      <div>
        <Outlet />
      </div>
    </div>
  </div>

)}

export default Dashboard
