import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white dot-grid'>
      <Navbar />
      <div className='relative flex flex-col justify-center items-center min-h-[calc(100vh-72px)] text-center px-4 py-12 overflow-hidden'>
        <div className='absolute -top-24 -left-20 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full animate-pulse' />
        <div className='absolute -bottom-24 -right-20 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full animate-pulse' />

        <h1 className='text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-tight'>
          SurfMedia
        </h1>
        <p className='text-lg md:text-xl text-gray-300 mb-10 max-w-2xl'>
          A minimal media explorer for photos, videos, and GIFs.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link 
            to="/search" 
            className='px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-lg transition duration-200 shadow-lg shadow-blue-600/30'
          >
            Start Searching
          </Link>
          <Link 
            to="/collections" 
            className='px-8 py-3 border border-gray-700 hover:border-gray-500 rounded-full font-semibold text-lg transition duration-200'
          >
            My Collections
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage