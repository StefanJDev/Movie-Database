import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results);
    });
  }, [url]);

  return (
    <>
      <div>
        <h2 className="capitalize md:text-3xl p-4 font-bold text-red-600">{title}</h2>
        <div id={`slider`} className="relative flex items-center">
          <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            {movies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieRow;
