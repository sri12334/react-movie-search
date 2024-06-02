import PropTypes from "prop-types";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import "./Movie.css";
import { useState } from "react";

const Movie = ({ movie }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked((prev) => !prev);
  };
  return (
    <div className={`movie-container ${liked ? "yes" : "no"}`}>
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="like-btn-container">
          <button className="like-btn" onClick={toggleLike}>
            <FaHeart size={28} color={liked ? "red" : "white"} />
          </button>
        </div>
      </div>
      <div className="movie-details">
        <h2>{movie.Title}</h2>
        <p>
          <FaRegCalendarAlt />
          {` ${movie.Year}`}
        </p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
  }),
};

export default Movie;