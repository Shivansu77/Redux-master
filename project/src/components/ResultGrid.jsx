import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos, fetchGifs } from '../api/mediaApi'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setResults, setError, clearResults } from '../redux/features/searchSlice'
import ResultCard from './ResultCard'

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector((state) => state.search)
  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async () => {
      const safeQuery = query?.trim() || 'cat'

      try {
        dispatch(setLoading())

        if (activeTab === 'photos') {
          const res = await fetchPhotos(safeQuery)
          const mapped = (res?.results || []).map((item) => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description || item.description || 'Untitled',
            thumbnail: item.urls?.small,
            src: item.urls?.full,
            link: item.links?.html,
          }))
          dispatch(setResults(mapped))
        } else if (activeTab === 'videos') {
          const res = await fetchVideos(safeQuery)
          const mapped = (res?.videos || []).map((item) => ({
            id: item.id,
            type: 'video',
            title: item.user?.name || 'Video',
            thumbnail: item.image,
            src: item.video_files?.[0]?.link,
            link: item.url,
          }))
          dispatch(setResults(mapped))
        } else if (activeTab === 'gifs') {
          const res = await fetchGifs(safeQuery)
          const mapped = (res?.data || []).map((item) => ({
            id: item.id,
            type: 'gif',
            title: item.title || 'Gif',
            thumbnail: item.images?.fixed_width_small?.url,
            src: item.images?.original?.url,
            link: item.url,
          }))
          dispatch(setResults(mapped))
        }

        dispatch(setError(null))
      } catch (err) {
        dispatch(setError(err?.message || 'Failed to fetch results'))
        dispatch(clearResults())
      }
    }

    getData()
  }, [query, activeTab, dispatch])
  return (
    <div className="p-6">
      {loading && <div className="text-center text-gray-300">Loading...</div>}
      {error && <div className="text-center text-red-400">{error}</div>}

      {!loading && !error && results.length === 0 && (
        <div className="text-center text-gray-400">No results</div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((item, index) => (
          <ResultCard key={item.id ? `${item.type}-${item.id}` : `${item.type}-${index}`} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ResultGrid