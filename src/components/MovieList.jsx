import PropTypes from "prop-types";

import data from "../film.json";

import filterMovies from "../utils/filterMovies";

import Movie from "./Movie";

import "./MovieList.css";

const MovieList = ({ input }) => {
  const filteredMovies = filterMovies(data, input);

  return (
    <>
      {filteredMovies.length > 0 ? (
        <div className="movie-list">
          {filteredMovies.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <p>Movie does not exist</p>
      )}
    </>
  );
};

MovieList.propTypes = {
  input: PropTypes.string.isRequired,
};

export default MovieList;