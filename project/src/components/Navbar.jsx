import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const linkBase = 'px-4 py-2 rounded-lg text-sm font-semibold transition duration-200'
  const active = 'bg-blue-600 text-white'
  const inactive = 'bg-gray-800 text-gray-200 hover:bg-gray-700'

  return (
    <nav className='w-full bg-black text-white border-b border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
        <Link to="/" className='text-xl font-bold'>SurfMedia</Link>
        <div className='flex items-center gap-3'>
          <Link
            to="/search"
            className={`${linkBase} ${location.pathname === '/search' ? active : inactive}`}
          >
            Search
          </Link>
          <Link
            to="/collections"
            className={`${linkBase} ${location.pathname === '/collections' ? active : inactive}`}
          >
            Collections
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
