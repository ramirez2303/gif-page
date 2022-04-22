import { Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  const handleToggleColorMode = () => {
    toggleColorMode(!colorMode);
  };

  return (
    <>
      <Switch
        position="absolute"
        right="20px"
        colorScheme="red"
        onChange={handleToggleColorMode}
        size="lg"
        border="1  px solid"
        borderColor="red.300"
        borderRadius="2xl"
      />
    </>
  );
}

export default ColorModeSwitch;
