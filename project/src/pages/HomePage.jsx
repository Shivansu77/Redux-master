import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white'>
      <Navbar />
      <div className='flex flex-col justify-center items-center min-h-[calc(100vh-72px)] text-center'>
        <h1 className='text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
          SurfMedia
        </h1>
        <p className='text-xl text-gray-300 mb-12'>
          Search and explore photos, videos, and GIFs
        </p>
        
        <div className='flex gap-6 justify-center'>
          <Link 
            to="/search" 
            className='px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition duration-200'
          >
            Start Searching
          </Link>
          <Link 
            to="/collections" 
            className='px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-lg transition duration-200'
          >
            My Collections
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage