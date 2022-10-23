import { useState, useEffect } from "react";
import { API, API_KEY } from "../API";

export const useGet = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);


  const getdata = async (endpoint) => {
    try {
      const { data } = await API.get(`${endpoint}api_key=${API_KEY}`);
      setData((prev) => (prev = data));
    } catch (error) {
      setError((prev) => (prev = true));
    } finally {
      setTimeout(() => {
        setLoading((prev) => (prev = false));
        setError((prev) => (prev = false));
      }, 1000);
    }
  };

  useEffect(() => {
    getdata(endpoint);
  }, [endpoint]);

  return [data, error, loading];
};
