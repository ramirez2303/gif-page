import {
  Box,
  Grid,
  GridItem,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import getTrendGifs from "../services/getTrendGifs";
import GifHoverContent from "./GifHoverContent";
import Loading from "./Loading";

function TrendingGifs() {
  const [popularGif, setPopularGif] = useState([]);
  const [mouseEnter, setMouseEnter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrendGifs().then((gifs) => {
      setPopularGif(gifs);
      setIsLoading(false);
    });
  }, []);

  const handleMouseEnter = (i) => {
    if (mouseEnter !== i) {
      setMouseEnter(false);
      setMouseEnter(i);
    } else if (mouseEnter === i) {
      setMouseEnter(false);
    } else {
      setMouseEnter(i);
    }
  };

  const handleMouseLeave = () => setMouseEnter(false);

  if (isLoading) {
    return (
      <Stack h="60px">
        <Loading />;
      </Stack>
    );
  } else {
    return (
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns={{
          base: "repeat(1, 300px)",
          sm: "repeat(1, 300px)",
          md: "repeat(2, 300px)",
          lg: "repeat(3, 300px)",
          xl: "repeat(4, 300px)",
        }}
        w={{ base: "250px", sm: "auto", md: "auto", lg: "auto" }}
        gap={2}
        spacing={0}
        justifyContent="center"
        alignItems="center"
      >
        {popularGif.map((gif, i) => {
          const index = i;
          return (
            <GridItem w="300px" key={i + 13}>
              <Box
                key={i + 1}
                w="300px"
                bgColor={useColorModeValue("gray.50", "purple.800")}
              >
                <GifHoverContent
                  mouseEnter={mouseEnter}
                  gif={gif}
                  index={index}
                  handleMouseLeave={handleMouseLeave}
                />
                <Image
                  key={gif.id}
                  alt={gif.title}
                  src={gif.url}
                  w="300px"
                  height="250px"
                  onMouseEnter={() => handleMouseEnter(i)}
                />
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    );
  }
}
export default React.memo(TrendingGifs);
