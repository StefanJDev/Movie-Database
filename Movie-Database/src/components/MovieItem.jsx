import React from 'react';
import { imageUrl } from '../api/apiConfig';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useState } from 'react';

const MovieItem = ({ movie }) => {
  const { like, setLike } = useState(false);

  const { title, backdrop_path, poster_path, vote_average } = movie;
  return (
    <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[350px]  inline-block  cursor-pointer m-2 overlow-hidden">
      <img
        className="w-full h-40 block object-cover object-top rounded-lg"
        src={imageUrl(backdrop_path ?? poster_path, 'w500')}
        alt={title}
      />

      <div className="absolute top-0 left-0 w-full h-40 bg-black/70 opacity-0 hover:opacity-100">
        <p className="whitespace text-xs md:text-base  flex justify-center items-center h-full font-bold">{title}</p>

        <p>
          {like ? (
            <FaStar size={25} className="absolute top-2 right-2 text-red-600" />
          ) : (
            <FaRegStar size={25} className="absolute top-2 right-2 text-red-600" />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
