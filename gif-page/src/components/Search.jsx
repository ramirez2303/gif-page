import {
  IconButton,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";

function Search() {
  const [path, pushLocation] = useLocation();

  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setInputValue(e.target.value);
  };

  const [limitNumber, setLimit] = useState(0);

  const handleLimitInputChange = (e) => {
    setLimit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search && limitNumber > 0) {
      pushLocation(`/search/${search}/${limitNumber}`);
    } else if (search && !limitNumber) {
      pushLocation("/error/limit");
    } else if (!search && limitNumber > 0) {
      pushLocation("/error/search");
    } else {
      pushLocation("/error/errortotal");
    }
  };

  return (
    <Stack spacing={0} alignItems="center">
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Input
            w="300px"
            h="50px"
            type="text"
            placeholder="Search a gif"
            onChange={handleInputChange}
            borderRadius="0"
            _focus={{ border: "2px solid #777" }}
            bgColor={useColorModeValue("#fff", "#eee")}
            color="#333"
            _placeholder={{ color: "#aaa" }}
            border="none"
          />
          <NumberInput>
            <NumberInputField
              w="100px"
              h="50px"
              type="number"
              placeholder="0"
              onChange={handleLimitInputChange}
              borderRadius="0"
              _focus={{ border: "2px solid #777" }}
              bgColor={useColorModeValue("#fff", "#eee")}
              color="#333"
              _placeholder={{ color: "#aaa" }}
              border="none"
            />
          </NumberInput>

          <IconButton
            type="submit"
            variant="outline"
            colorScheme={useColorModeValue("cyan", "red")}
            icon={<SearchIcon color={useColorModeValue("black", "white")} />}
          />
        </Stack>
      </form>
    </Stack>
  );
}

export default Search;
