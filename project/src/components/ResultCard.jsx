import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCollection } from '../redux/features/collectionSlice'

const ResultCard = ({ item }) => {
	if (!item) return null
	const dispatch = useDispatch()
	const exists = useSelector((state) => state.collection.items.some((i) => i.id === item.id))
	return (
		<div className="rounded-lg overflow-hidden bg-gray-900 border border-gray-700 flex flex-col">
			{item.type === 'video' ? (
				<video
					className="w-full h-56 object-cover"
					src={item.src}
					poster={item.thumbnail}
					controls
				/>
			) : (
				<img
					className="w-full h-56 object-cover"
					src={item.thumbnail || item.src}
					alt={item.title}
					loading="lazy"
				/>
			)}

			<div className="p-4 flex flex-col gap-2 flex-1">
				<div className="text-sm text-gray-300 line-clamp-2">
					{item.title}
				</div>

				{item.link && (
					<a
						href={item.link}
						target="_blank"
						rel="noreferrer"
						className="text-xs text-blue-400 hover:underline"
					>
						View source
					</a>
				)}

				{/* Save Button */}
				<button
					onClick={() => dispatch(addToCollection(item))}
					className={`mt-auto self-end text-white text-xs px-3 py-1 rounded ${exists ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
					disabled={exists}
				>
					{exists ? 'Saved' : 'Save'}
				</button>
			</div>
		</div>
	)
}

export default ResultCard
