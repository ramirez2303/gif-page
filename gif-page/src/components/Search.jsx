import {
  Alert,
  AlertIcon,
  AlertTitle,
  IconButton,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const [limitNumber, setLimit] = useState(0);

  const handleLimitInputChange = (e) => {
    setLimit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (limitNumber && limitNumber > 0) {
      props.onSubmit(search, limitNumber);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <Stack spacing={5}>
      <form onSubmit={handleSubmit}>
        <Stack direction="row">
          <Input
            w="150px"
            type="text"
            placeholder="Search a gif"
            onChange={handleInputChange}
            borderRadius="20px"
            _focus={{ border: "2px solid #98f5e1" }}
          />
          <NumberInput>
            <NumberInputField
              w="100px"
              type="number"
              placeholder="10"
              onChange={handleLimitInputChange}
              borderRadius="20px"
              _focus={{ border: "2px solid #98f5e1" }}
            />
          </NumberInput>
          <IconButton
            type="submit"
            _hover={{ bgColor: "#a2d2ff" }}
            _active={{ bgColor: "#a2d2ff" }}
            // colorScheme={useColorModeValue("cyan", "red")}
            borderRadius="full"
            bg="none"
            icon={
              <SearchIcon
                color={useColorModeValue("black", "whiteAlpha.700")}
              />
            }
          />
        </Stack>
      </form>
      {error ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>You need to put a limit</AlertTitle>
        </Alert>
      ) : (
        ""
      )}
    </Stack>
  );
}

export default Search;
