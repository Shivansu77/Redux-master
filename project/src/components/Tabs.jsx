import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
  const tabs = ['Photos', 'Videos', 'Gifs']
  const dispatch = useDispatch()
  const activeTab = useSelector(state => state.search.activeTab)

  return (
    <div className="px-4 md:px-8">
      <div className="inline-flex gap-2 bg-gray-900/70 border border-gray-800 p-2 rounded-2xl shadow-lg">
        {tabs.map((ele) => {
          const tabValue = ele.toLowerCase()

          return (
            <button
              key={ele}
              onClick={() => dispatch(setActiveTabs(tabValue))}
              className={`
                px-4 py-2 rounded-xl uppercase text-sm font-semibold tracking-wide
                transition active:scale-95
                ${activeTab === tabValue ? 'bg-blue-600 text-white shadow' : 'text-gray-300 hover:bg-gray-800'}
              `}
            >
              {ele}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Tabs
