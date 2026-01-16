import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { setQuery } from '../redux/features/searchSlice'
const SearchBar = () => {

    const [text, settext] = useState('')

    const dispatch = useDispatch();

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("Submitted", text);
        dispatch(setQuery(text));
        settext('');
    }
  return (
    <div>
        <form onSubmit={submitHandler} className='flex p-10 gap-5 bg-gray-900 justify-center items-center'>
            <input onChange={(e) => settext(e.target.value)} value={text} className='w-full border-2 px-4 py-2 text-xl rounded-l outline-none' type="text" placeholder='Search anything ....' required/>
            <button className='border-2  px-4 py-2 cursor-pointer rounded-sm' type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchBar