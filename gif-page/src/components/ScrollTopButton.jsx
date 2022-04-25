import React, { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";
const ScrollTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      <IconButton
        icon={<TriangleUpIcon w={4} h={6} />}
        isRound="full"
        display={isVisible ? "flex" : "none"}
        position="fixed"
        bottom="20px"
        right="20px"
        onClick={scrollToTop}
      />
    </>
  );
};

export default ScrollTopButton;
