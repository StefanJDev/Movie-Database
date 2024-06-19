import React, { useEffect, useState } from 'react';
import axios from 'axios';
import endpoints from '../api/apiConfig';

const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovie);
      console.log(randomMovie);
    });
  }, []);

  const truncate = (string, maxLength) => {
    if (!string) return '';
    return string.length > maxLength ? `${string.slice(0, maxLength)}...` : string;
  };

  const { title, overview, backdrop_path, release_date, vote_average, runtime } = movie;

  return (
    <div className="w-full h-[550px] lg:h-[1000px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[1000px] ">
          <img className="w-full h-full object-cover object-top" src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={title} />

          <div className="absolute w-2/3 top-[20%]  lg:top-[60%]   p-4 md:p-8 bg-gradient-to-r from-black">
            <h1 className="text-3xl md:text-6xl  text-red-600">{title}</h1>
            <div className="mt-8 mb-4">
              <button className="border bg-gray-300 text-black py-2 px-5">Play</button>
              <button className="border border-gray-300 py-2 px-5 ml-4">Watch Later</button>
            </div>
            <p className="text-gray-400 text-sm">{release_date}</p>
            <p className="w-full md:max-w-[80%] lg:max-w-[60%] xl:max-w-[60%] text-gray-200">{truncate(overview, 165)}</p>
            {/* <p>{vote_average}</p> */}
            {/* <p>{runtime}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
