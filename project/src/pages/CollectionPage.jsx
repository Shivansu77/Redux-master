import React from 'react'
import ResultCard from '../components/ResultCard'
import Navbar from '../components/Navbar'

const CollectionPage = () => {
  // Get collections from localStorage
  const [collections, setCollections] = React.useState([])

  // Load collections from localStorage on mount
  React.useEffect(() => {
    const savedCollections = localStorage.getItem('mediaCollections')
    if (savedCollections) {
      setCollections(JSON.parse(savedCollections))
    }
  }, [])

  const removeFromCollection = (itemId) => {
    const updatedCollections = collections.filter(item => item.id !== itemId)
    setCollections(updatedCollections)
    localStorage.setItem('mediaCollections', JSON.stringify(updatedCollections))
  }

  const clearAllCollections = () => {
    setCollections([])
    localStorage.removeItem('mediaCollections')
  }

  return (
    <div className='min-h-screen w-full bg-black text-white'>
      <Navbar />
      <div className='max-w-7xl mx-auto p-4'>
        {/* Header */}
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-4xl font-bold'>My Collections</h1>
        </div>

        {/* Collections Content */}
        {collections.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-96 text-center'>
            <p className='text-2xl text-gray-400 mb-4'>No items in your collection yet</p>
            <p className='text-gray-500 mb-6'>Search for media and add items to your collection</p>
            <Link 
              to="/search" 
              className='px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-lg transition duration-200'
            >
              Start Exploring
            </Link>
          </div>
        ) : (
          <div>
            <div className='flex justify-between items-center mb-6'>
              <p className='text-lg text-gray-400'>
                Total items: <span className='font-bold text-white'>{collections.length}</span>
              </p>
              <button 
                onClick={clearAllCollections}
                className='px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition duration-200'
              >
                Clear All
              </button>
            </div>

            {/* Grid of Collections */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {collections.map((item) => (
                <div key={item.id} className='relative group'>
                  <ResultCard 
                    item={item}
                  />
                  <button
                    onClick={() => removeFromCollection(item.id)}
                    className='absolute top-2 right-2 bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-200'
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
