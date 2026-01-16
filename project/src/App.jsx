import React, { useEffect, useState } from 'react'
import './App.css'
import { fetchPhotos , fetchVideos , fetchGifs } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'

const App = () => {
  const [error, setError] = useState(null)
  const [photos, setPhotos] = useState([])

  const getPhotos = async (query = 'cat') => {
    try {
      const data = await fetchPhotos(query)
      setPhotos(data?.results || data)
      console.log(data)
    } catch (err) {
      setError(err.message || 'Failed to fetch photos')
    }
  }

  const getVideos = async (query = 'cat') => {
    try {
      const data = await fetchVideos(query)
      console.log(data)
    } catch (err) {
      setError(err.message || 'Failed to fetch videos')
    }
  }

  const getGifs = async (query = 'cat') => {  
    try {
      const data = await fetchGifs(query)
      console.log(data)
    } catch (err) {
      setError(err.message || 'Failed to fetch gifs')
    }
  }

  return (
    <div className='h-screen w-full bg-black text-white p-4'>
     <SearchBar />
     <Tabs />
     <ResultGrid />
    </div>
  )
}

export default App