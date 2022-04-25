import { Container, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import GifsContext from "../../context/GifsContext";
import getGif from "../../services/getGif";

const Detail = ({ params }) => {
  const { gifs } = useContext(GifsContext);
  // const [gifBackup, setGifBackup] = useState([]);
  console.log(localStorage.getItem("gifBackup"));
  localStorage.setItem(
    "gifBackup",
    gifs.find((gif) => gif.id === params.id)
  );

  const gif = gifs.find((singleGif) => singleGif.id === params.id);
  const gifBackup = localStorage.getItem("gifBackup");

  // useEffect(() => {
  //   getGif({ keyword: "argentina" },{limit: }).then((gifs) => setGifBackup(gifs));
  // }, []);
  const optionGif = gif.url || gifBackup;

  return (
    <Container maxW="1250px">
      <Stack justifyContent="center" alignItems="center" flex="1">
        <Stack w="500px" justifyContent="center" alignItems="center">
          <Text>{params.id}</Text>
        </Stack>
        <Stack w="500px" justifyContent="center" alignItems="center">
          <Image src={optionGif} w="400px" />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Detail;
