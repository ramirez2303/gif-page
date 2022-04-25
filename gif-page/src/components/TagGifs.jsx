import { Tag, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Link } from "wouter";

const TagGifs = ({ keyword, i }) => {
  return (
    <Link to={`/search/${keyword}/20`} key={i + 7}>
      <Tag
        colorScheme={useColorModeValue("blue", "red")}
        fontSize="xl"
        cursor="pointer"
        key={i + 23}
        textTransform="capitalize"
      >
        {keyword}
      </Tag>
    </Link>
  );
};

export default TagGifs;
