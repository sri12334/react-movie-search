import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

import { useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const inputHandler = (value) => {
    setInput(value);
  };
  return (
    <>
      <Header title="Movies" />
      <SearchBar inputHandler={inputHandler} />
      <MovieList input={input} />
    </>
  );
}

export default App;