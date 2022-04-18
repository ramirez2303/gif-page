import React from "react";
import Search from "./Search";

function SearchSection({ handleDoSearch }) {
  return (
    <>
      <Search onSubmit={handleDoSearch} />
    </>
  );
}

export default SearchSection;
