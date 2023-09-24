import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = 'PsO8cuhuSxwiYZ4LNwVWFCE3J30hPvSn';

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchGif(tag) {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
    setLoading(false);
  }

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  return { fetchGif, gif, loading };
};

export default useGif;
