import React from "react";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={onSearchChange}
        className="tc pa3 ba b--green bg-lightest-blue"
      />
    </div>
  );
};
export default SearchBox;
