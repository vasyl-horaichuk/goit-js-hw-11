import axios from 'axios';

export default async function fetchImages(value, page) { 
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY_API = '31822550-c8b7e849e5b19a96b0a960cdd';
    const filter = `?key=${KEY_API}&q=${value}&image_type&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

    return await axios.get(`${BASE_URL}${filter}`).then(response => response.date);
}