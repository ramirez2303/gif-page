import { WarningIcon } from "@chakra-ui/icons";
import { Flex, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import errorImage from "../../images/warning-error-svgrepo-com.svg";

function ErrorTotal() {
  return (
    <Stack justifyContent="center" alignItems="center" h="400px" spacing={8}>
      <Flex justifyContent="center" alignItems="center">
        <WarningIcon
          w={{ base: "4", sm: "5", md: "6", lg: "7" }}
          h={{ base: "4", sm: "5", md: "6", lg: "7" }}
          color="red.500"
        />
        <Heading
          fontSize={{ base: "md", sm: "lg", md: "2xl", lg: "4xl" }}
          ml={2}
        >
          Error: no search and limit specified
        </Heading>
      </Flex>
      <Image src={errorImage} w={{base: "120px",sm: "140px",md: "160px", lg: "180px" }} />
    </Stack>
  );
}

export default ErrorTotal;
