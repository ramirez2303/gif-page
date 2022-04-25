import { Badge, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const GifTitle = ({ gif, i }) => {
  return (
    <>
      <Badge
        position="absolute"
        color={useColorModeValue("white", "purple.200")}
        width="300px"
        h="fit-content"
        bgColor="blackAlpha.900"
        fontSize="xs"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        borderRadius="0"
        key={i + 5}
      >
        {gif.title}
      </Badge>
    </>
  );
};

export default GifTitle;
