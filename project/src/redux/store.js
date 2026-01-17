import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './features/searchSlice.js'
import collectionReducer from './features/collectionSlice.js'

const store = configureStore({
    reducer: {
        search: searchReducer,
        collection: collectionReducer,
    },
})

export default store