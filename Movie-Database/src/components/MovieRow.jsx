import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const rowId = Math.floor(Math.random() * 10);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results);
    });
  }, [url]);

  const slide = (offset) => {
    const slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  return (
    <>
      <h2 className="capitalize md:text-3xl p-4 font-bold text-red-600">{title}</h2>

      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={() => slide(-350)}
          size={40}
          className="absolute rounded-full bg-white left-4 opacity-80 z-10 hidden text-red-600 cursor-pointer group-hover:block"
        />
        <div id={`slider` + rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={() => slide(350)}
          size={40}
          className="absolute rounded-full bg-white right-4 opacity-80 z-10 hidden text-red-600 cursor-pointer group-hover:block"
        />
      </div>
    </>
  );
};

export default MovieRow;
