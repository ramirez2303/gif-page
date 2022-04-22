import { Skeleton, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function Loading() {
  return (
    <Stack m="auto" justifyContent="center" h="xl">
      <Skeleton
        w={{ base: "80vw", sm: "80vw", md: "600px", lg: "800px" }}
        height="20px"
        startColor={useColorModeValue("blue.700", "purple.500")}
        endColor={useColorModeValue("cyan.200", "pink.200")}
      />
      <Skeleton
        w={{ base: "80vw", sm: "80vw", md: "600px", lg: "800px" }}
        height="20px"
        startColor={useColorModeValue("blue.700", "purple.500")}
        endColor={useColorModeValue("cyan.200", "pink.200")}
      />
      <Skeleton
        w={{ base: "80vw", sm: "80vw", md: "600px", lg: "800px" }}
        height="20px"
        startColor={useColorModeValue("blue.700", "purple.500")}
        endColor={useColorModeValue("cyan.200", "pink.200")}
      />
    </Stack>
  );
}

export default Loading;
