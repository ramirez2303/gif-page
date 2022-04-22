import React from "react";
import { IconButton } from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";
const ScrollTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <IconButton
        icon={<TriangleUpIcon w={4} h={6} />}
        isRound="full"
        position="fixed"
        bottom="20px"
        right="20px"
        onClick={scrollToTop}
      />
    </>
  );
};

export default ScrollTopButton;
