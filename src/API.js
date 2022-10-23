import axios from "axios";
export const API = axios.create({
  baseURL: "https://api.nasa.gov/mars-photos/api/v1/rovers",
});

export const API_KEY = "wyzaxWHc5lTTwL89niL118KKMB5cmODBVzQhMGI7";
