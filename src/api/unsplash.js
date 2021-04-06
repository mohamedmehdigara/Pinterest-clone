import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID HXglEKV0H7QfN6SKuUdwrHBcMF0hIbZhYlnwpMnbyw8",
  },
});
