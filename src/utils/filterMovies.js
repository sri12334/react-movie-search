const filterMovies = (data, input) => {
    if (!input.trim()) {
      return data;
    } else {
      return data.filter((movie) => {
        return movie.Title.toLowerCase().includes(input.trim());
      });
    }
  };
  
  export default filterMovies;