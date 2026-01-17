import React from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'

const SearchPage = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white'>
      <Navbar />
      <div className='max-w-7xl mx-auto py-6'>
        <SearchBar />
        <div className='mt-4'>
          <Tabs />
        </div>
        <ResultGrid />
      </div>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/collections" element={<CollectionPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App