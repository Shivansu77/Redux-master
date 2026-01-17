import { createSlice } from '@reduxjs/toolkit'

const loadCollections = () => {
	try {
		const saved = localStorage.getItem('mediaCollections')
		return saved ? JSON.parse(saved) : []
	} catch {
		return []
	}
}

const persistCollections = (items) => {
	try {
		localStorage.setItem('mediaCollections', JSON.stringify(items))
	} catch {
		// ignore write errors
	}
}

const collectionSlice = createSlice({
	name: 'collection',
	initialState: {
		items: loadCollections(),
	},
	reducers: {
		addToCollection(state, action) {
			const item = action.payload
			if (!item?.id) return
			const exists = state.items.some((i) => i.id === item.id)
			if (!exists) {
				state.items.push(item)
				persistCollections(state.items)
			}
		},
		removeFromCollection(state, action) {
			const id = action.payload
			state.items = state.items.filter((i) => i.id !== id)
			persistCollections(state.items)
		},
		clearCollections(state) {
			state.items = []
			persistCollections(state.items)
		},
	},
})

export const { addToCollection, removeFromCollection, clearCollections } = collectionSlice.actions

export default collectionSlice.reducer
