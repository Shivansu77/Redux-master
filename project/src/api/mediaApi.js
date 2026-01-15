import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY

export async function fetchPhotos(query,page=1,per_Page=10) {
    if (!UNSPLASH_KEY) {
        throw new Error('Unsplash access key is missing (set VITE_UNSPLASH_KEY in .env)')
    }

    const res = await axios.get('https://api.unsplash.com/photos', {
        params: {
            query,
            page,
            per_Page,
        },
        headers: {
            Authorization: `Client-ID ${UNSPLASH_KEY}`,
        },
    })

    return res.data
}