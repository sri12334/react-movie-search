import PropTypes from "prop-types";
import { useState } from "react";

import "./SearchBar.css";

const SearchBar = ({ inputHandler }) => {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    const val = e.target.value.toLowerCase();
    setValue(val);
    inputHandler(val);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="🔍Search for a movie"
        className="search-input"
        onChange={(e) => {
          changeHandler(e);
        }}
        value={value}
      />
    </div>
  );
};

SearchBar.propTypes = {
  inputHandler: PropTypes.func.isRequired,
};

export default SearchBar;