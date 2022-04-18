import { Box, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Gifs from "./components/Gifs";
import NavBar from "./components/NavBar";
import SearchSection from "./components/SearchSection";
import getGif from "./services/getGif";

function App() {
  const [allGifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [limit, setLimit] = useState(0);

  const handleDoSearch = (word, numberLimit) => {
    setKeyword(word);
    setLimit(numberLimit);
  };

  useEffect(() => {
    getGif({ keyword: keyword }, { limit: limit }).then((gifs) =>
      setGifs(gifs)
    );
  }, [keyword, limit]);

  return (
    <Box
      className="App"
      h="100%"
    >
      <Box
        paddingY={4}
        w="100%"
        h="100%"
      >
        <Stack spacing={6} alignItems="center">
          <NavBar />
          <SearchSection handleDoSearch={handleDoSearch} />
          <Gifs arrGifs={allGifs} />
        </Stack>
      </Box>
    </Box>
  );
}

export default App;
