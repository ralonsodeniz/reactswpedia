import React from "react";

const SearchBox = ({ onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={onSearchChange}
      className="tc pa3 ba b--green bg-lightest-blue"
    />
  );
};
export default SearchBox;
