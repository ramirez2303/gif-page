import { useEffect, useState } from "react";
import getTrendGifs from "../services/getTrendGifs";

export default function useTrendGifs() {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrendGifs().then((gifs) => {
      setGifs(gifs);
      setIsLoading(false);
    });
  }, []);

  return { gifs, isLoading };
}
