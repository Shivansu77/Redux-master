import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

export async function fetchPhotos(query = 'cat', page = 1, perPage = 10) {
    if (!UNSPLASH_KEY) {
        throw new Error('Unsplash access key is missing (set VITE_UNSPLASH_KEY in .env)')
    }

    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
            query,
            page,
            per_page: perPage,
        },
        headers: {
            Authorization: `Client-ID ${UNSPLASH_KEY}`,
        },
    })

    return res.data
}

export async function fetchVideos(query = 'cat', page = 1, perPage = 10) {
    if (!PEXELS_KEY) {
        throw new Error('Pexels API key is missing (set VITE_PEXELS_KEY in .env)')
    }

    const res = await axios.get('https://api.pexels.com/videos/search', {
        params: {
            query,
            page,
            per_page: perPage,
        },
        headers: {
            Authorization: PEXELS_KEY,
        },
    })

    return res.data
}

export async function fetchGifs(query = 'cat', limit = 10, offset = 0) {
    if (!GIPHY_KEY) {
        throw new Error('Giphy API key is missing (set VITE_GIPHY_KEY in .env)')
    }

    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            api_key: GIPHY_KEY,
            q: query,
            limit,
            offset,
        },
    })

    return res.data
}   
