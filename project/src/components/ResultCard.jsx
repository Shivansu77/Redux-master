import React from 'react'

const ResultCard = ({ item }) => {
	if (!item) return null

	return (
		<div className="rounded-lg overflow-hidden bg-gray-900 border border-gray-700">
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

			<div className="p-4">
				<div className="text-sm text-gray-300 line-clamp-2">{item.title}</div>
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
			</div>
		</div>
	)
}

export default ResultCard
