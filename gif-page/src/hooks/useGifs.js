import { useEffect, useState } from "react";
import getGif from "../services/getGif";

export default function useGifs(
  { keyword } = { keyword: null },
  { limit } = { limit: 8 }
) {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "random";

    getGif({ keyword: keywordToUse }, { limit: limit }).then((gifs) => {
      setGifs(gifs);
      setIsLoading(false);
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword, limit]);

  return { gifs, isLoading };
}