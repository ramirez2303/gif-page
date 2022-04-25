import { Grid, Heading, Stack } from "@chakra-ui/react";
import React, { useCallback, useEffect, useRef } from "react";
import useGifs from "../../hooks/useGifs";
import Loading from "../../components/Loading";
import GifMap from "../../components/GifMap";
import useNearScreen from "../../hooks/useNearScreen";
import debounce from "just-debounce-it";

const Gifs = ({ params }) => {
  const { keyword } = params;
  const { limit } = params;
  const { gifs, isLoading, setPage } = useGifs({ keyword, limit });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    distance: "50px",
    externalRef: isLoading ? null : externalRef,
    once: false,
  });

  // const handleNextPage = () => ;
  // const handleNextPage = () => console.log("hola");

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    []
  );

  useEffect(() => {
    console.log(isNearScreen);
    if (isNearScreen) {
      debounceHandleNextPage();
    }
  }, [debounceHandleNextPage, isNearScreen]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <Stack maxW="1250px" spacing={4}>
          <Heading
            textTransform="capitalize"
            borderBottomWidth="3px"
            fontSize="3xl"
          >{`${keyword} Results:`}</Heading>
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
            minH="100vh"
          >
            {gifs.map((gif, i) => {
              return <GifMap key={i + 10} gif={gif} i={i} />;
            })}
          </Grid>
        </Stack>
        <Stack id="visor" ref={externalRef}></Stack>
      </>
    );
  }
};

export default Gifs;
