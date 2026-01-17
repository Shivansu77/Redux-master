import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ResultCard from '../components/ResultCard'
import Navbar from '../components/Navbar'
import { removeFromCollection, clearCollections } from '../redux/features/collectionSlice'

const CollectionPage = () => {
  const dispatch = useDispatch()
  const collections = useSelector((state) => state.collection.items)

  return (
    <div className='min-h-screen w-full bg-black text-white'>
      <Navbar />
      <div className='max-w-7xl mx-auto p-4 md:p-6'>
        {/* Header */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4'>
          <div>
            <h1 className='text-4xl font-bold'>My Collections</h1>
            <p className='text-gray-400 mt-1'>Saved media for quick access</p>
          </div>
        </div>

        {/* Collections Content */}
        {collections.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-96 text-center bg-gray-900/50 border border-gray-800 rounded-2xl'>
            <p className='text-2xl text-gray-400 mb-4'>No items in your collection yet</p>
            <p className='text-gray-500 mb-6'>Search for media and add items to your collection</p>
            <Link 
              to="/search" 
              className='px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold text-lg transition duration-200'
            >
              Start Exploring
            </Link>
          </div>
        ) : (
          <div>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4'>
              <p className='text-lg text-gray-400'>
                Total items: <span className='font-bold text-white'>{collections.length}</span>
              </p>
              <button 
                onClick={() => dispatch(clearCollections())}
                className='px-4 py-2 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition duration-200'
              >
                Clear All
              </button>
            </div>

            {/* Grid of Collections */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {collections.map((item) => (
                <div key={item.id} className='relative group'>
                  <ResultCard 
                    item={item}
                  />
                  <button
                    onClick={() => dispatch(removeFromCollection(item.id))}
                    className='absolute top-2 right-2 bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-200'
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CollectionPage
