import { Container, Heading, Image, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import getGif from "./components/getGif";

function App() {
  const [allGifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState("");

  const handleDoSearch = (word) => {
    setKeyword(word);
  };

  useEffect(() => {
    getGif({ keyword: keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return (
    <div className="App">
      <Container paddingY={4}>
        <Stack alignItems="center">
          <Heading>Gifix Searcher</Heading>
          <Search onSubmit={handleDoSearch} />
          {allGifs.map((gif) => (
            <Image key={gif.id} alt={gif.title} src={gif.url} />
          ))}
        </Stack>
      </Container>
    </div>
  );
}

export default App;
