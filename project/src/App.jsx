import React, { useEffect, useState } from 'react'
import './App.css'
import { fetchPhotos } from './api/mediaApi'

const App = () => {
  const [error, setError] = useState(null)
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetchPhotos('cat')
      .then((data) => setPhotos(data))
      .catch((err) => {
        setError(err?.message || 'Failed to load photos')
      })
  }, [])

  return (
    <div className='h-screen w-full bg-blue-500 text-white p-4'>
      <div>hello</div>
      {error && <div className='mt-2 text-sm text-red-200'>Error: {error}</div>}
      {!error && photos.length === 0 && <div className='mt-2 text-sm'>Loading photos…</div>}
      {!error && photos.length > 0 && (
        <div className='mt-3 text-sm'>Loaded {photos.length} photos</div>
      )}
    </div>
  )
}

export default App