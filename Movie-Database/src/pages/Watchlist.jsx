// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { UserAuth } from '../context/AuthConfig';
import { db } from '../api/firebase';
import img from '../assets/img/wall.jpg';

import { doc, onSnapshot, updateDoc, arrayRemove } from 'firebase/firestore';
import { imageUrl } from '../api/apiConfig';
import { AiFillCloseCircle } from 'react-icons/ai';

const Watchlist = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
        if (doc.data()) setMovies(doc.data().savedShows);
      });
    }
  }, [user, user.email]);

  const slide = (offset) => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  const handleRemove = async (movie) => {
    const userDoc = doc(db, 'users', user.email);

    await updateDoc(userDoc, {
      savedShows: arrayRemove(movie),
    });
  };

  return (
    <>
      <div>
        <div>
          <img className="w-full h-[700px] object-cover block " src={img} alt="/" />

          <div className="bg-black/50 fixed top-0 left-0 w-full h-[700px]" />
          <p className="text-4xl text-red-600 absolute top-[30%] p-4 md:p-8 ">{user.email}</p>
        </div>
        {/* movie row */}

        <h2 className="capitalize md:text-3xl p-4 font-bold text-red-600">Fav Shows</h2>

        <div className="relative flex items-center group">
          <MdChevronLeft
            onClick={() => slide(-350)}
            size={40}
            className="absolute rounded-full bg-white left-4 opacity-80 z-10 hidden text-red-600 cursor-pointer group-hover:block"
          />
          <div id={`slider`} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[350px]  inline-block  cursor-pointer m-2 overlow-hidden"
              >
                <img
                  className="w-full h-40 block object-cover object-top rounded-lg"
                  src={imageUrl(movie.backdrop_path ?? movie.poster_path, 'w500')}
                  alt={movie.title}
                />

                <div className="absolute top-0 left-0 w-full h-40 bg-black/70 opacity-0 hover:opacity-100">
                  <p className="whitespace text-xs md:text-base  flex justify-center items-center h-full font-bold">{movie.title}</p>

                  <p>
                    <AiFillCloseCircle size={30} className="absolute top-4 right-4 text-red-600" onClick={() => handleRemove(movie)} />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight
            onClick={() => slide(350)}
            size={40}
            className="absolute rounded-full bg-white right-4 opacity-80 z-10 hidden text-red-600 cursor-pointer group-hover:block"
          />
        </div>
      </div>
    </>
  );
};

export default Watchlist;
