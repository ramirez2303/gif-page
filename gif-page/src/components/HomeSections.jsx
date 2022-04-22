import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import HomeGifs from "./HomeGifs";

function HomeSections({ title, keyword }) {
  return (
    <Stack spacing={8}>
      <Heading fontSize="3xl" borderBottomWidth="3px">
        {`${title} Gifs`}
      </Heading>
      <HomeGifs keyword={keyword} />
    </Stack>
  );
}

export default React.memo(HomeSections);
