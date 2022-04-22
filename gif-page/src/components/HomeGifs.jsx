import {
  Box,
  Grid,
  GridItem,
  Image,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import GifHoverContent from "./GifHoverContent";
import useGifs from "../hooks/useGifs";
import Loading from "./Loading";

function HomeGifs({ keyword }) {
  const { gifs, isLoading } = useGifs({ keyword });
  const [mouseEnter, setMouseEnter] = useState(null);

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

  const handleMouseLeave = () => setMouseEnter(null);

  if (isLoading) {
    return (
      <Stack h="60px">
        <Loading />
      </Stack>
    );
  } else {
    return (
      <Grid
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
        {gifs.map((gif, i) => {
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
export default React.memo(HomeGifs);
