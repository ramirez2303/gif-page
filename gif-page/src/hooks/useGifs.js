import { useContext, useEffect, useState } from "react";
import GifsContext from "../context/GifsContext";
import getGif from "../services/getGif";

const INITIAL_PAGE = 0;

export default function useGifs({ keyword, limit } = {}) {
  const { gifs, setGifs } = useContext(GifsContext);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setIsLoading(true);

    getGif({ keyword: keywordToUse, limit: limit }).then((gifs) => {
      setGifs(gifs);
      setIsLoading(false);
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword, limit]);

  useEffect(() => {
    if (page === INITIAL_PAGE || isLoading) {
      return;
    }
    setLoadingNextPage(true);
    getGif({ keyword: keywordToUse, limit: limit, page: page }).then(
      (nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      }
    );
  }, [page]);

  return { gifs, loadingNextPage, isLoading, setPage };
}
