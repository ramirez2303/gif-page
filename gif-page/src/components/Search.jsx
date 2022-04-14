import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(search);
  };
  return (
    <Stack maxW="200px">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="text"
            placeholder="Search a gif"
            onChange={handleInputChange}
            borderRadius="20px"
            _focus={{ border: "1px solid #000" }}
          />
          <InputRightElement
            children={
              <IconButton
                type="submit"
                borderRadius="0 20px 20px 0"
                icon={<SearchIcon />}
              />
            }
          />
        </InputGroup>
      </form>
    </Stack>
  );
}

export default Search;
