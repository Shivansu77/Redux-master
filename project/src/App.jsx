import React, { Suspense } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Loader from './components/Loader'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const CollectionPage = React.lazy(() => import('./pages/CollectionPage'))
const SearchBar = React.lazy(() => import('./components/SearchBar'))
const Tabs = React.lazy(() => import('./components/Tabs'))
const ResultGrid = React.lazy(() => import('./components/ResultGrid'))

const SearchPage = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white'>
      <Navbar />
      <div className='max-w-7xl mx-auto py-6'>
        <Suspense fallback={<Loader />}>
          <SearchBar />
          <div className='mt-4'>
            <Tabs />
          </div>
          <ResultGrid />
        </Suspense>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/collections" element={<CollectionPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default App