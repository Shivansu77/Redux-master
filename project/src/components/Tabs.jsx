import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
  const tabs = ['Photos', 'Videos', 'Gifs']
  const dispatch = useDispatch()
  const activeTab = useSelector(state => state.search.activeTab)

  return (
    <div className="flex gap-10 p-10">
      {tabs.map((ele) => {
        const tabValue = ele.toLowerCase()

        return (
          <button
            key={ele}
            onClick={() => dispatch(setActiveTabs(tabValue))}
            className={`
              border px-5 py-2 rounded uppercase cursor-pointer
              active:scale-95
              ${activeTab === tabValue ? 'bg-blue-700' : 'bg-gray-600'}
            `}
          >
            {ele}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs
