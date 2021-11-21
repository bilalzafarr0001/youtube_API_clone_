import axios from 'axios';
const KEY = 'AIzaSyA_SlRRJHxbxc8FB1B42DqglnXx3MX9xaI'; // mention your youtube API key here// my api from google api section 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})