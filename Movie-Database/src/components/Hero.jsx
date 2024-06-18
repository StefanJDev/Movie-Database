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
    });
  }, []);

  return <div>Hero</div>;
};

export default Hero;
