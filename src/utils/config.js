const API_KEY = process.env.REACT_APP_API_KEY

const config = {
  apiData: {
    baseUrl: `http://www.omdbapi.com/?apikey=${API_KEY}`,
    headers: {
      'Content-Type': 'application/json',
      referrer: 'http://www.omdbapi.com/',
    },
  },
}

export default config
