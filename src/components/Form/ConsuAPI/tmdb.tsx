import axios from 'axios';



const apiKey = 'c5568d6e77039a6978ff01e662ba04a1';
export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    timeout: 1000,
    params: {
      api_key: apiKey,
    },
  });


