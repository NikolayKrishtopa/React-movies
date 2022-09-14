const API_KEY = process.env.REACT_APP_API_KEY

const config = {
  apiData: {
    baseUrl: `http://www.omdbapi.com/?apikey=${API_KEY}`,
    headers: {
      'Content-Type': 'application/json',
    },
  },
}

export default config
