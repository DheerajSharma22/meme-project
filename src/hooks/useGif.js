import axios from "axios";
import { useEffect, useState } from "react";

const URL = `https://api.giphy.com/v1/gifs/random?api_key=dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW`;

const useGif = (tag) => {
  const [gif, setGif] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const { data } = await axios.get(tag ? `${URL}&tag=${tag}` : URL);
    setLoading(false);
    setGif(data.data.images.downsized_large.url);
  }

  useEffect(() => {
    fetchData(); // eslint-disable-next-line
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
