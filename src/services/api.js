import axios from "axios";
// BASE_URL = https://api.themoviedb.org/3/

// https://api.themoviedb.org/3/movie/550?api_key=320e98ad7d68fc350d3251e5030ca127

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export { api };
