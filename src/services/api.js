import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com/search",
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
  },
});

export default api;
