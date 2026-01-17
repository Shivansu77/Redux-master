import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
    const [text, settext] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
        settext('')
    }

  return (
    <div className='px-4 md:px-8'>
      <form
        onSubmit={submitHandler}
        className='flex flex-col md:flex-row gap-3 md:gap-4 bg-gray-900/70 border border-gray-800 p-4 md:p-6 rounded-2xl shadow-lg backdrop-blur'
      >
        <input
          onChange={(e) => settext(e.target.value)}
          value={text}
          className='w-full bg-transparent border-b border-gray-700 px-1 py-2 text-lg outline-none focus:border-blue-500 placeholder:text-gray-500'
          type="text"
          placeholder='Search photos, videos, gifs...'
          required
        />
        <button
          className='px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition'
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar