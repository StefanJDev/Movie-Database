// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { imageUrl } from '../api/apiConfig';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { db } from '../api/firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { UserAuth } from '../context/AuthConfig';

const MovieItem = ({ movie }) => {
  const [like, setLike] = useState(false);
  const { user } = UserAuth();

  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { title, backdrop_path, poster_path, vote_average } = movie;

  const markSavedShows = async () => {
    const userEmail = user?.email;

    if (userEmail) {
      const userDoc = doc(db, 'users', userEmail);
      setLike(!like);
      await updateDoc(userDoc, {
        savedShows: arrayUnion({ ...movie }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  return (
    <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[350px]  inline-block  cursor-pointer m-2 overlow-hidden">
      <img
        className="w-full h-40 block object-cover object-top rounded-lg"
        src={imageUrl(backdrop_path ?? poster_path, 'w500')}
        alt={title}
      />

      <div className="absolute top-0 left-0 w-full h-40 bg-black/70 opacity-0 hover:opacity-100">
        <p className="whitespace text-xs md:text-base  flex justify-center items-center h-full font-bold">{title}</p>

        <p onClick={markSavedShows} className="cursor-pointer">
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
